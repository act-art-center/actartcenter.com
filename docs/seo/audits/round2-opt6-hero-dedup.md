# Round 2 — Opt 6: Hero Image Cross-Page Dedup + 중앙 Registry

> Date: 2026-04-20
> Scope: Unsplash 이미지 cross-page 중복 제거 + `src/lib/hero-registry.ts` 신설 + `scripts/audit-heroes.mjs` 빌드 가드.

## 1. Goal

페이지 간 고유한 시각 identity 확보. 같은 Unsplash photo 를 두 페이지가 공유하면
- 사이트 전체 톤이 무너지고
- 검색엔진의 이미지 중복 페널티 리스크가 있으며
- 블로그 썸네일 = 페이지 hero 로 겹치면 내비게이션 혼란.

중복 4건 (hero × blog, section × hero) 을 모두 해소하고, 재발을 막는 레지스트리 + audit script 를 도입.

## 2. Findings — Before

| # | Unsplash photo ID | Page A (유지) | Page B (교체 대상) |
|---|---|---|---|
| 1 | `1605721911519-3dfeb3be25e7` | `src/app/team/page.tsx:168` (PageHero) | `src/lib/blog-data.ts:76` (values-vision-board) |
| 2 | `1596464716127-f2a82984de30` | `src/app/services/child/page.tsx:277` | `src/lib/blog-data.ts:46` (anxiety-art-therapy) |
| 3 | `1513475382585-d06e58bcb0e0` | `src/app/services/individual/page.tsx:280` | `src/lib/blog-data.ts:56` (mindfulness-drawing) |
| 4 | `1456086272160-b28b0645b729` | `src/app/pricing/page.tsx:261` (PageHero) | `src/components/sections/PhilosophySection.tsx:13` |

**교체 전략**: 페이지 hero 는 그대로 두고 blog post 대표 이미지 · 홈 philosophy 섹션만 교체.
(이유: hero 는 페이지 대표성이 강해 변경 비용이 높음. 블로그/섹션은 대체 가용성이 높음.)

## 3. Changes — After

### 3.1 신규 Unsplash photo 4건

모두 `curl -sI https://images.unsplash.com/photo-{id}?w=100` → `HTTP/2 200` 검증 완료.

| Slot | New Unsplash photo ID | Unsplash slug | Photographer | 선정 근거 |
|---|---|---|---|---|
| `blog-values-vision-board` | `1743385779436-a6950c168fff` | [B-BnU5D6C0k](https://unsplash.com/photos/notebook-with-paper-and-a-pen-B-BnU5D6C0k) | Kelly Sikkema | 노트북 + 펜 구성 — 가치 명료화·비전 보드 작업 분위기. |
| `blog-anxiety-art-therapy` | `1743657166982-9e3ff272122b` | [Yc6Ik-48C18](https://unsplash.com/photos/abstract-pastel-colors-and-flowing-shapes-Yc6Ik-48C18) | Yue Ma | 소프트 파스텔 흐름 — 불안에 색·모양을 입히는 메타포와 시각적으로 일치. |
| `blog-mindfulness-drawing` | `1758521232721-da2be69f0b64` | [OuJcIGnWCZI](https://unsplash.com/photos/person-drawing-a-face-in-a-sketchbook-with-pencils-OuJcIGnWCZI) | Vitaly Gariev | 연필로 스케치북에 드로잉 — 마음챙김 드로잉 실습 주제 그대로. |
| `home-philosophy` (PhilosophySection) | `1753187991848-8a7e17d232a8` | [_bpsG5lbCDg](https://unsplash.com/photos/a-cozy-reading-nook-with-plant-and-sunlight-_bpsG5lbCDg) | feey | 자연광·식물·아늑한 독서 공간 — "자연광이 드는 따뜻한 아틀리에" alt 에 부합. |

### 3.2 교체 파일

| 파일 | Line | Before → After |
|---|---|---|
| `src/lib/blog-data.ts` | 46 | `photo-1596464716127-f2a82984de30` → `photo-1743657166982-9e3ff272122b` |
| `src/lib/blog-data.ts` | 56 | `photo-1513475382585-d06e58bcb0e0` → `photo-1758521232721-da2be69f0b64` |
| `src/lib/blog-data.ts` | 76 | `photo-1605721911519-3dfeb3be25e7` → `photo-1743385779436-a6950c168fff` |
| `src/components/sections/PhilosophySection.tsx` | 13 | `photo-1456086272160-b28b0645b729` → `photo-1753187991848-8a7e17d232a8` |

기존 query string (`?w=600&q=80`, `?w=800&q=80`) 은 그대로 유지.

### 3.3 신규 `src/lib/hero-registry.ts`

모든 페이지 hero · 블로그 대표 이미지 · 주요 섹션 이미지를 중앙에서 관리.

```typescript
export type HeroSlot = {
  id: string;          // kebab-case 식별자
  page: string;        // 경로
  imageUrl: string;    // 절대 URL 또는 /public 경로
  imageAlt: string;    // 한국어 alt
  category: "page" | "blog" | "section";
};

export function normalizeImageKey(url: string): string;  // query string 제거
export function assertNoDuplicateHeroes(): void;         // 런타임 가드
export const HERO_REGISTRY: HeroSlot[] = [ /* 13 slots */ ];
```

등록 13 슬롯:
- page (6): team · pricing · act-approach · faq · blog-hub · services-hub
- section (1): home-philosophy
- blog (6): art-therapy-science · act-6-processes · anxiety-art-therapy · mindfulness-drawing · trauma-art-expression · values-vision-board

**의도적 제외**: 7개 서비스 상세 페이지 (`/services/individual` 등) hero 는 `constants.ts` SERVICES_ALL 카드 썸네일과 동일 ID 를 공유하는 설계. 레지스트리에서 제외해 audit 에서 false-positive 를 회피.

### 3.4 신규 `scripts/audit-heroes.mjs`

`hero-registry.ts` 를 텍스트로 읽고 정규식으로 `id` / `imageUrl` 쌍을 추출 — Node 가 `.ts` 를 직접 import 못 하므로 추가 toolchain 불필요. duplicate 발견 시 exit 1.

### 3.5 `package.json`

```json
"scripts": {
  ...
  "audit:heroes": "node scripts/audit-heroes.mjs"
}
```

수동 실행 가능 (`npm run audit:heroes`). 추후 `prebuild` hook 등으로 묶을 수 있음.

## 4. Validation

| Check | Result |
|---|---|
| `node node_modules/typescript/bin/tsc --noEmit` | 0 errors |
| `node scripts/audit-heroes.mjs` (clean) | `OK: 13 hero slots — no duplicates.` exit 0 |
| `node scripts/audit-heroes.mjs` (injected duplicate) | `FAIL: 1 duplicate(s)` exit 1 — 가드 작동 확인 |
| 4 신규 URL `curl -sI ...?w=100` | 모두 `HTTP/2 200` |
| `grep -rhoE 'photo-[a-z0-9-]+' src \| sort \| uniq -c` — 중복 count 2 개 남은 것 | 모두 `SERVICES_ALL` (constants.ts) vs 서비스 상세 페이지 hero. 설계상 허용 (동일 서비스 카드 ↔ 상세 페이지 hero). |

## 5. Risks

- **Unsplash URL 장기 안정성**: 레거시 `images.unsplash.com/photo-{id}` 형식이 장기 유지된다는 암묵적 가정. 404 발생 시 audit script 가 감지 못함 — 이건 별도 dead-image 감사 스크립트 영역.
- **Registry 동기화**: 새 페이지 추가 시 `hero-registry.ts` 에 등록을 잊으면 감지 못함. 선택적 개선: `scripts/` 에 "파일 내 PageHero imageSrc 추출 vs registry 비교" 스캐너 추가.
- **Parser 취약성**: `audit-heroes.mjs` 의 정규식이 HERO_REGISTRY 객체 리터럴 shape 에 의존. 구조 변경 시 regex 업데이트 필요 — 빈 파싱 결과 시 명시적 FAIL 로 방어 중.

## 6. Next Action

- (선택) `prebuild` hook 추가: `"prebuild": "npm run audit:heroes"` — Vercel 빌드 전 자동 실행.
- (선택) 서비스 카드 ↔ 상세 페이지 hero 매핑도 등록하고 `category: "service-shared"` 로 audit 예외 처리 — 더 strict 한 가드.
- 새 Unsplash 이미지 추가 워크플로우를 KORVIA Memory `reference_unsplash_r2_pipeline.md` 와 유사하게 문서화.

## 7. Integration Impact

- **Portal / CRM / API**: 없음. 정적 이미지 교체 + 빌드 가드 추가만.
- **Next.js**: 이미지 URL 변경으로 Next.js Image loader 캐시 무효화 (1회). 새 URL fetch 후 CDN 캐시 정착.
- **SEO**: 블로그 카드 썸네일 OG Image 업데이트 — 기존 공유 링크의 썸네일은 Facebook/X 쪽 캐시에 남지만 1–7일 내 자동 refresh.
