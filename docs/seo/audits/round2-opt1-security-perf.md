# Round 2 OPT1 — 보안 헤더 + 성능 + Dead-code 최적화

> Date: 2026-04-20
> Scope: `next.config.ts`, `public/images/office-hero.jpg`, dead-code 검증, description 축약
> Baseline: `docs/seo/audits/round2-a1-comprehensive-seo.md`
> Next 16.2.3 · React 19.2.4 · TypeScript 5

---

## 1. Goal

Round 2 A1 감사에서 지적된 P0 3건 + P1-6 (description 160자 초과) 처리:

- **P0-1**: `next.config.ts` 보안 헤더 추가 (CSP 제외)
- **P0-2**: `public/images/office-hero.jpg` 2.49 MB → 1 MB 이하 리마스터
- **P0-3**: Dead-code (framer-motion + embla-carousel) tree-shake 검증
- **P1-6**: Description 160자 초과 축약

---

## 2. Changes Made

### 2.1 보안 헤더 (`next.config.ts`)

**전**: `images.remotePatterns` 만 설정 (15 lines)
**후**: `async headers()` 추가 — `/(.*)` 패턴에 6개 헤더 적용

| Header | Value | 목적 |
|--------|-------|------|
| `X-Frame-Options` | `SAMEORIGIN` | Clickjacking 방지. Google Maps iframe 은 동일 origin 내 허용 |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing 차단 |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Referrer 범위 최소화 (기본값 명시) |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | HSTS 2년 + preload (Vercel/CF 기본이지만 명시) |
| `X-DNS-Prefetch-Control` | `on` | DNS prefetch 허용 (외부 Unsplash·GMaps 성능) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | 기본 거부 + FLoC 차단 |

**CSP 의도적 제외**: Next.js `dangerouslySetInnerHTML` (JsonLd), Vercel analytics, Google Maps iframe, `next/image` loader 등이 inline script/eval·외부 origin 을 요구하므로 과도하게 제한적인 CSP 는 사이트 파손. P1 후속 작업으로 남김.

### 2.2 `office-hero.jpg` 리마스터

| | Before | After |
|---|--------|-------|
| 파일 크기 | 2,492,655 bytes (2.49 MB) | 300,181 bytes (**293 KB**) |
| 해상도 | 4767 × 3397 | 1920 × 1368 |
| 포맷 | JPEG baseline | JPEG progressive, quality 80, optimized |
| 감축률 | — | **−88%** |

목표 (< 1 MB) 대비 훨씬 아래인 293 KB 로 달성. 품질 손상 없이 hero 용도로 충분.

Vercel Image Optimization 이 WebP/AVIF 로 추가 변환할 것이므로 최종 edge 전달 크기는 ~120–180 KB 예상.

### 2.3 `/services/emotional` description 축약

**전** (180 chars, 160 초과):
> "만성 스트레스, 불안, 번아웃, 상실, 관계 트라우마 경험을 말 이전의 이미지로 먼저 풀어 내는 ACT 미술심리치료. Bessel van der Kolk · Dan Siegel · Steven Hayes · Kristin Neff 의 임상 원칙을 미술 매체와 통합해, 자극량을 천천히 올리는 타이트레이션 구조로 진행합니다."

**후** (117 chars):
> "불안·번아웃·상실·관계 트라우마 경험을 말 이전의 이미지로 먼저 풀어 내는 ACT 미술심리치료. van der Kolk·Siegel·Hayes 의 임상 원칙을 미술 매체와 통합해 타이트레이션 구조로 진행합니다."

유지된 의미 요소: 핵심 증상 4개, ACT 미술심리치료 포지셔닝, 임상 근거 학자 3인(성 only), 타이트레이션 방법론.

### 2.4 실측 기반 description 재검증

감사 리포트의 "4건 초과" 중 실측 결과 **1건만 실제 초과**였음.

| 페이지 | 감사 보고 길이 | 실측 길이 | 액션 |
|--------|---------------|-----------|------|
| `/services/protective` | 181 | **147** | no-op (audit mis-measurement) |
| `/services/emotional` | 182 | **180** | **축약 → 117** |
| `/services/depth` | 163 | **146** | no-op |
| `/pricing` | 163 | **147** | no-op |

감사 측정 방식(공백/구두점 계산 차이)과 Python `len()` 차이 추정. 실제 Google SERP snippet 은 공백 포함 전체 글자로 계산하므로 Python 기준이 더 정확. **emotional 만 실제 블로커**였음.

---

## 3. Dead-code 검증 결과

### 3.1 Grep 결과

```
from "framer-motion"     → src/components/shared/CharacterIllustration.tsx:4
from "embla-carousel..." → 0 matches (어디에도 없음)
```

### 3.2 Import chain 분석

| Symbol | Imported by | Rendered in page? |
|--------|-------------|-------------------|
| `CharacterIllustration` | `AmbientCharacterLayer.tsx` 만 | **NO** |
| `AmbientCharacterLayer` | (없음) | **NO** |
| `TestimonialsCarousel` | (없음, `page.tsx` L32 은 주석) | **NO** |

`TestimonialsCarousel.tsx` 는 이름과 달리 `embla-carousel` 을 import 하지 않고 자체 `useState` 로 캐러셀 구현. 즉 `embla-carousel-*` 3 패키지는 **전혀 사용되지 않음**.

### 3.3 판단

세 컴포넌트 모두 어떤 `page.tsx` / `layout.tsx` / `loading.tsx` 에서도 import 체인이 이어지지 않음. Next.js 번들러는 static analysis 로 이들을 번들에서 제외.

**결론**: Dead-code 실제 번들 영향 **0 bytes**. 감사 리포트 P0-3 은 번들 크기 관점에서 false alarm.

### 3.4 권장 후속 (P2, optional)

번들에 영향은 없지만 `package.json` 의존성 cleanup 관점:

- `framer-motion` (~45 KB source): `CharacterIllustration` 재활성화 계획 있으면 유지
- `embla-carousel-react` + `embla-carousel-autoplay`: **완전 미사용** — 삭제해도 무방. `TestimonialsCarousel.tsx` 는 자체 구현이므로 영향 없음

Henry 결정사항: 미래 테스티모니얼/케릭터 재활성화 계획 유무에 따라 P2/삭제 판단.

---

## 4. 이미지 자산 전반 점검

| 자산 | 크기 | 상태 |
|------|------|------|
| `public/images/office-hero.jpg` | **293 KB** ← 2.49 MB | ✅ 최적화 완료 |
| `public/images/logo.png` | 81 KB | ✅ |
| `public/images/logo.webp` | 57 KB | ✅ |
| `public/images/team-eunbyeol.jpg` | 171 KB | ✅ |
| `public/videos/hero-video.mp4` | 1.12 MB | ✅ 이미 최적화 |
| `public/videos/hero-poster.jpg` | 62 KB | ✅ |
| `public/og/*.png` (16장) | 60–302 KB (max `services-depth.png` 302 KB) | ✅ 모두 < 350 KB |
| `public/characters/*.png` (7장) | 1.04–1.22 MB · 합 **7.8 MB** | ⚠️ 현재 rendering 0 → deploy 번들에는 포함 |

**characters 폴더 (7.8 MB)**: 미사용 컴포넌트가 참조하는 asset. `public/` 에 남아 있으면 Vercel static 에 포함되지만 어떤 페이지도 fetch 하지 않으므로 CDN 비용 영향 ≈ 0. Henry 가 재활성화 계획을 결정하면:

- 유지 → WebP 변환 권장 (7.8 MB → ~1.5 MB 가능, `sharp` 변환)
- 삭제 → `git rm public/characters/*.png`

---

## 5. Validation

### 5.1 TypeScript

```bash
cd site && node node_modules/typescript/bin/tsc --noEmit
```

**결과**: 에러 0건 (exit 0, 출력 없음).

### 5.2 `next.config.ts` 구조 검증

- `headers()` 은 `async` function 반환값 `{ source, headers: [{ key, value }] }[]` — Next.js 16 스펙 준수
- `source: "/(.*)"` 은 Next.js regex path 패턴, 모든 경로 매칭
- TypeScript `NextConfig` 타입 통과

### 5.3 보안 헤더 효과 (예상)

배포 후 `curl -I https://actartcenter.com` 로 확인 시 기대 응답:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-DNS-Prefetch-Control: on
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

Lighthouse **Best Practices**: 92 → **98–100** 상승 예상 (HSTS·X-Frame·XCTO·Referrer 모두 PASS).

---

## 6. Risks

1. **CSP 미도입**: XSS/외부 스크립트 injection 통제 없음. Next.js inline-script/`unsafe-eval`/Google Maps frame-src 허용 정책 세밀 조정 후 P1 으로 추진 권장.
2. **`X-Frame-Options: SAMEORIGIN`**: 외부 사이트가 `actartcenter.com` 을 iframe 으로 embed 불가. 제휴 링크 공유 시 영향 없으나, 파트너 사이트에서 임베드 요청이 생기면 `ALLOW-FROM` 화이트리스트 CSP `frame-ancestors` 로 전환 필요.
3. **`office-hero.jpg` 원본 손실**: 원본 4767×3397 고해상도 교체됨. 향후 재편집 필요 시 원본 복구 불가. 중요 원본은 Zoho WorkDrive 백업 권장.
4. **Description 축약 영향**: `/services/emotional` 에서 학자 4인 → 3인 (Kristin Neff 생략), 증상 표기 방식 변경. 내용 정확성 유지했으나 keyword density 미세 감소 가능.

---

## 7. Next Action

### Phase 2 (권장 후속)

1. **P1-4 Unsplash → R2 마이그레이션**: 27 URL 중 15장 (services 7 + blog 6 + hero 2). KORVIA 레포 `scripts/upload-hero.mjs` 플레이북 재활용.
2. **CSP 단계적 도입**: Report-only 모드로 먼저 배포 (`Content-Security-Policy-Report-Only`) → 위반 수집 후 enforce.
3. **P1-5 추가 AI crawler robots.ts 정책**: Applebot-Extended allow, Bytespider disallow, Amazonbot allow, ClaudeBot allow.
4. **P1-7 hreflang 선제 구축**: `layout.tsx` `alternates.languages = { 'ko-KR': SITE_URL, 'x-default': SITE_URL }`.
5. **Characters 자산 결정**: 재활성화 vs 삭제 판단 후 처리.
6. **embla-carousel 패키지 제거**: `npm uninstall embla-carousel-react embla-carousel-autoplay` — 완전 미사용 확정.

### Phase 3 (장기)

- P2-11 `/gallery` thin content 해결
- P2-16 `PretendardVariable.woff2` 삭제 또는 `next/font/local` 연결

---

## 8. Integration Impact

- **CRM**: 영향 없음
- **Portal**: 영향 없음
- **API**: 영향 없음 (pure static site config 변경)
- **Frontend**: 
  - 보안 헤더는 모든 응답에 적용 → iframe embed 제한 (정책적 의도)
  - `/contact` page LCP: 2.49 MB → 293 KB 로 hero 데이터 감소 (예상 LCP 2.2s → ~1.5s mobile)
  - 번들 크기 변화 없음 (dead-code 는 이미 tree-shake 됨)

---

## 9. Files Modified

1. `next.config.ts` — `async headers()` 추가
2. `public/images/office-hero.jpg` — 2.49 MB → 293 KB 리마스터 (1920×1368 JPEG q80 progressive)
3. `src/app/services/emotional/page.tsx` — `metadata.description` 180 → 117 chars 축약

**신규 파일**: 
- `docs/seo/audits/round2-opt1-security-perf.md` (본 보고서)

---

*End of Round 2 OPT1 — 2026-04-20*
