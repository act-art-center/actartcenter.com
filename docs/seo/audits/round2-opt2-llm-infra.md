# Round 2 Opt-2 — LLM/AI Infra Implementation

> Date: 2026-04-20
> Scope: `src/app/robots.ts`, `public/llms.txt`, `public/llms-full.txt`,
> `src/lib/blog-content.ts`, `src/app/blog/[slug]/page.tsx`,
> `src/app/team/page.tsx`, `src/app/faq/page.tsx`
> Based on: `round2-a2-llm-ai-discoverability.md` (P0/P1 actions)

---

## 1. Goal

Round 2 A2 감사에서 식별된 AI discoverability P0/P1 gap 을 해소한다:
- 누락된 AI 크롤러 UA 6 종 추가
- `llms.txt` 54 줄 → ~135 줄 확장 (Positioning, Authority, References, DO-DO NOT, Geo)
- `llms-full.txt` 신설 — AI 가 전체 콘텐츠를 단일 파일로 파악
- 학술 레퍼런스에 DOI 링크 추가 (E-E-A-T + fact-check 통과 경로)
- Semantic HTML: `<time dateTime>`, `rel="author"`, Person `#stella` anchor
- 블로그 포스트 하단 Q/A 섹션 (Perplexity / ChatGPT snippet 추출률 강화)
- Schema: `hasCredential` (Person), `MedicalCondition` (FAQ Question)

---

## 2. Changes Made

### 2.1 `src/app/robots.ts` — AI 크롤러 UA 6 종 추가

| UA | Policy | 목적 |
|----|--------|------|
| `ClaudeBot` | allow home · blog · services · act-approach · team · faq, disallow `/api/` `/admin` `/booking` | Anthropic 공식 크롤러 (anthropic-ai 와 별개) |
| `OAI-SearchBot` | 동일 | ChatGPT Search (GPTBot 과 별개, 2024-10 출시) |
| `ChatGPT-User` | 동일 | ChatGPT on-demand fetch (사용자 명령 시 실시간) |
| `Perplexity-User` | 동일 | Perplexity on-demand fetch |
| `Applebot-Extended` | 동일 | Apple Intelligence (Siri/iOS/macOS) |
| `Meta-ExternalAgent` | 동일 | Meta AI (Llama, WhatsApp AI) |

**추가 개선 (감사 권고 반영)**:
- `anthropic-ai` allow 에 `/team` 추가 (일관성)
- `PerplexityBot` allow 에 `/services/` · `/team` 추가 ("강남 미술치료 비용" 쿼리 인용 가능화)

총 규칙 수: 6 → 12. `CCBot` 차단·기본 `*` 정책은 유지.

### 2.2 `public/llms.txt` — 54 줄 → 135 줄

6 섹션 신규 추가:

1. **Positioning** (6 줄) — "ACT × 미술치료" 교차점 명시, 한국 내 단일 브랜드 희소성, 박사과정 임상가 1 인 체제
2. **Authority Signals** (7 줄) — 학력·학회·임상 기반 프레임워크 저자 열거 (Hayes, Malchiodi, van der Kolk, Czamanski-Cohen & Weihs, Hass-Cohen 등)
3. **Research References** (13 개 레퍼런스, DOI 포함) — Kaimal 2016, Shella 2018, Huang 2025, Rauch/van der Kolk 1996, Hayes 2012, A-Tjak 2015, Gloster 2020, Czamanski-Cohen 2016, Schouten 2015, Maddox 2024, Kabat-Zinn 1992, Stojcevski 2023
4. **DO / DO NOT** (14 줄) — AI 인용 가이드라인. 의료기관 표기 금지, 보험 청구 불가, 보유하지 않은 자격 추정 금지, 내담자 후기 가공 금지, 자살·자해 단독 대응 권고 금지
5. **Geo** (5 줄) — 주소·위경도·대중교통·운영 방식·서비스 지역
6. **Updated** (3 줄) — 2026-04-20 항목 추가, last-reviewed 갱신

기존 섹션도 유지 (About / Services / ACT Approach / Expert Content / FAQ / Key Pages / Contact).

### 2.3 `public/llms-full.txt` — 신규 (222 줄)

전체 콘텐츠 축약 버전. 각 섹션 100~200 자 요약:

- Home (1 단락)
- ACT Approach (1 단락 — Hayes/Strosahl/Wilson 배경 + ACBS/APA Division 12)
- Services 7 종 (각 leaf 페이지 핵심 정보 요약)
- Team — 대표 고은별 프로필 + 첫 회기 5 단계 흐름
- Pricing — 가격대·결제 수단·보험 정책
- FAQ — 25 문항 6 카테고리 요약
- Blog 6 포스트 — 각 포스트 주제·핵심 인용·효과 크기
- Contact
- AI Citation Principles (DO / DO NOT)
- Sources of Truth — llms.txt, sitemap.xml, robots.txt, 이 파일

### 2.4 `src/lib/blog-content.ts` — DOI 링크 + Q/A 섹션

**DOI `<a href>` 추가 (총 15 곳)**:
- `art-therapy-science`: Kaimal 2016, Shella 2018, Huang 2025, Rauch 1996, Czamanski-Cohen 2016
- `act-6-processes`: A-Tjak 2015, Gloster 2020
- `anxiety-art-therapy`: Kaimal 2016, Shella 2018, Huang 2025
- `mindfulness-drawing`: Kabat-Zinn 1992, Stojcevski 2023 (기존 + rel/target 보강)
- `trauma-art-expression`: Rauch 1996, Schouten 2015, Maddox 2024
- 모든 링크: `rel="noopener noreferrer" target="_blank"`

책 (van der Kolk 2014, Hayes 2019, Hayes/Strosahl/Wilson 2012, Malchiodi 2012·2020, Harris 2008, Porges 2011, Csikszentmihalyi 1990, Hass-Cohen & Clyde Findlay 2015, Kabat-Zinn 1990, Plumb 2009, Rahal & Caserta Gon 2020, Wilson & DuFrene 2008, Yeung 2022, Van de Kamp 2024)는 DOI 부재로 plain 유지.

**"이 글이 답한 질문" Q/A 섹션 (6 포스트 × 3 Q/A = 18 쌍)**:
- `art-therapy-science`: 과학적 근거 / 미술 못해도 효과 / 말보다 그림이 먼저 나오는 이유
- `act-6-processes`: ACT 란 / CBT 와 차이 / 효과 입증
- `anxiety-art-therapy`: 왜 커지는가 / 그림 표현 효과 / 집에서 할 수 있는 방법
- `mindfulness-drawing`: 가부좌 어려워도 가능? / 과학적 근거 / 어떻게 시작
- `trauma-art-expression`: 말 막히는 이유 / 미술치료 효과 / 혼자 해도 되는가
- `values-vision-board`: 목표 vs 가치 / 시각화 효과 / 집에서 만드는 법

각 Q/A 는 `<ul class="post-qa">` 로 감싸 `FAQPage` schema emit 없이 UI 만 (프로젝트 정책: FAQPage 는 `/faq` 에서만 유일).

### 2.5 `src/app/blog/[slug]/page.tsx` — Semantic HTML

- 헤더 byline `<div>` → `<address>` 로 교체 (저자 컨테이너 semantic)
- 저자 이름 `<span>` → `<Link rel="author" href="/team#stella">` (Person `@id` anchor 일치)
- 날짜 `<span>` → `<time dateTime={isoDate}>` (ISO 포맷)
- `isoDate` 상수를 본문에서도 재사용 (schema 빌드 함수와 동일 소스)
- `not-italic` 클래스로 `<address>` 기본 italic 스타일 중화

### 2.6 `src/app/team/page.tsx` — Person anchor + hasCredential

- 프로필 카드 래퍼에 `id="stella"` + `scroll-mt-24` (`/team#stella` fragment 링크 타겟)
- `Person.hasCredential` 4 항목 추가:
  1. 미술치료학 석사 (차의과학대학교) — `recognizedBy` with url
  2. 미술치료학 박사과정 이수중 (차의과학대학교)
  3. 미술 학사·석사 (홍익대학교)
  4. 한국미술치료학회 정회원
- 기존 `alumniOf`, `memberOf` 는 유지 — `honorificSuffix: "MA"` 도 그대로 두어 후방 호환

### 2.7 `src/app/faq/page.tsx` — MedicalCondition (개별 Question 단위)

`inferMedicalConditions()` 헬퍼 함수 추가 (질문·답변 텍스트에서 키워드 매칭으로 추론):
- 불안 / Anxiety — `/(불안|anxiety|공황)/i`
- 복합성 트라우마 / Complex Trauma / PTSD
- 번아웃 / Occupational Burnout
- 우울 / Depression
- 애도·상실 / Grief / Bereavement

각 `Question` 에 `about: [MedicalCondition]` (0~n 개) 부착. 단일은 object, 복수는 array. 전체 FAQPage 에는 about 을 부착하지 않음 — 개별 Question 단위 간접 참조로 **"의료 행위 주장"이 아닌 "주제 맥락 표시"** 범위 유지.

---

## 3. Validation

### 3.1 파일 존재·라인수 체크

```
$ wc -l public/llms.txt public/llms-full.txt src/app/robots.ts
     135 public/llms.txt
     222 public/llms-full.txt
      68 src/app/robots.ts
```

- `llms.txt` 135 줄 (목표 ~120 초과 달성)
- `llms-full.txt` 222 줄 (신규)
- `robots.ts` 12 규칙 (기존 6 + 6)

### 3.2 TypeScript 타입 체크

```
$ cd site && node node_modules/typescript/bin/tsc --noEmit
(no output — zero errors)
```

`faqPageSchema.mainEntity` 의 `Record<string, unknown>` cast 로 `about` 조건부 필드가 unknown 인덱스 시그니처 아래 안전히 흡수됨. `hasCredential` 배열은 기존 schema 리터럴과 동일 패턴이라 추론 성공.

### 3.3 DOI · Q/A 카운트

```
$ grep -c 'doi:' src/lib/blog-content.ts
15     # 15개 DOI 링크 추가 (목표 11개 이상 충족)

$ grep -c 'post-qa' src/lib/blog-content.ts
6      # 6 포스트 × <ul class="post-qa"> 1개씩
```

### 3.4 robots UA 전수 확인

```
$ grep userAgent src/app/robots.ts
"*", "GPTBot", "Google-Extended", "anthropic-ai", "ClaudeBot",
"OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User",
"Applebot-Extended", "Meta-ExternalAgent", "CCBot"
```

감사 요구 6 종 신규 UA 전부 적용 확인.

---

## 4. Coverage vs. Audit (P0/P1 매핑)

| 감사 Action | 파일 | 상태 |
|------|------|------|
| P0 #1 `llms.txt` 6 섹션 확장 | `public/llms.txt` | 완료 (135 줄) |
| P0 #2 `robots.ts` ClaudeBot/OAI-SearchBot/ChatGPT-User | `src/app/robots.ts` | 완료 |
| P0 #3 PerplexityBot allow 확장 (services/team) | `src/app/robots.ts` | 완료 |
| P0 #4 DOI `<a href>` 6 블로그 포스트 | `src/lib/blog-content.ts` | 완료 (15 링크) |
| P0 #6 `<time dateTime>` 블로그 본문 | `src/app/blog/[slug]/page.tsx` | 완료 |
| P0 #8 MedicalCondition | `src/app/faq/page.tsx` | 완료 (Question 단위) |
| P0 #9 Team page `id="stella"` anchor | `src/app/team/page.tsx` | 완료 |
| P1 #10 `llms-full.txt` 생성 | `public/llms-full.txt` | 완료 (222 줄, 수동) |
| P1 #11 Applebot-Extended/Meta-ExternalAgent | `src/app/robots.ts` | 완료 |
| P1 #14 블로그 Q/A 섹션 | `src/lib/blog-content.ts` | 완료 (6 포스트 × 3) |
| P1 #16 `hasCredential` | `src/app/team/page.tsx` | 완료 (4 항목) |
| P1 #19 `rel="author"` + `<address>` byline | `src/app/blog/[slug]/page.tsx` | 완료 |

**이번 라운드 처리 안 한 항목** (차기 작업):
- P0 #5 ACBS/APA Division12/KATA outbound URL in `act-approach/page.tsx` body
- P0 #7 ORCID iD 외부 발급 필요 → 발급 후 `Person.sameAs` 추가
- P1 #10 자동화: `scripts/generate-llms-full.mjs` 작성 (현재 수동)
- P1 #12 `EducationalOrganization` 독립 `@graph` 노드화 + Wikipedia sameAs
- P1 #13 `MedicalWebPage` schema 서비스 leaf 7 곳
- P1 #15 `HowTo` schema mindfulness-drawing / values-vision-board 블로그
- P1 #17 `speakable` in `BlogPosting`
- P1 #18 `/faq/layout.tsx` 분리 고유 metadata
- P1 #20 `ProfessionalService` 타입 추가
- P1 #21 Organization.sameAs 확장 (brunch/네이버/카카오맵)

---

## 5. Risks

**Low — deployment 영향 미미**:
- 모든 변경은 additive (기존 UA·콘텐츠·schema 유지 + 새 항목 추가)
- `<address>` 기본 italic 스타일을 `not-italic` 으로 중화 — 시각 결과 기존과 동일
- Q/A 섹션은 `<ul class="post-qa">` 로 prose 스타일 상속 (기존 블로그 본문과 동일한 시각 톤)
- `MedicalCondition` 은 개별 Question 단위 `about` 로 제한 — 전체 FAQPage 가 의료 주제로 분류되지 않음

**Watch — Rich Results Test**:
- 배포 후 `https://search.google.com/test/rich-results` 로 `/team`, `/faq`, `/blog/art-therapy-science` 각각 에러 0 건 확인 권장
- Google Search Console → Enhancement 탭에서 `FAQPage`, `Person`, `BlogPosting` 파싱 변화 4-7 일 내 관찰

---

## 6. Next Action

### Immediate (This Sprint)
- [ ] 커밋 후 프로덕션 배포
- [ ] `curl -A "ClaudeBot" https://actartcenter.com/robots.txt | grep ClaudeBot` 규칙 노출 확인
- [ ] `curl https://actartcenter.com/llms-full.txt | head -20` 배포 확인
- [ ] Rich Results Test 4 페이지 (team, faq, 대표 블로그 포스트 1, act-approach) 통과 확인

### Short-term (Next 1-2 weeks)
- [ ] `scripts/generate-llms-full.mjs` 자동화 (`BLOG_POSTS`·`FAQ_ITEMS`·`SERVICES` 단일 소스에서 빌드)
- [ ] `/act-approach` 본문에 ACBS / APA Division 12 / 한국미술치료학회 outbound `<a>` 추가
- [ ] `MedicalWebPage` schema — 서비스 leaf 7 곳
- [ ] ORCID iD 발급 → `Person.sameAs` 추가

### Long-term (Next Month)
- [ ] HowTo schema — mindfulness-drawing / values-vision-board
- [ ] Speakable schema — BlogPosting
- [ ] `/faq/layout.tsx` 분리 + 고유 metadata
- [ ] Perplexity / ChatGPT 에 "미술치료 효과 과학적 근거" 검색 후 사이트 인용 확인

---

## 7. Integration Impact

**CRM / API**: 해당 없음 (순수 프론트엔드·메타데이터 변경)

**Portal**: 해당 없음 (actartcenter.com 자체 사이트)

**SEO / AI Discovery**:
- Claude / ChatGPT on-demand fetch 차단 해제 → 실시간 인용 가능
- Perplexity 가 `/services/*` · `/team` 접근 가능 → "강남 미술치료 비용/상담사" 쿼리 응답 품질 개선
- DOI 링크 15 곳 외부 연결 → E-E-A-T authority 보강 (Kaimal, Rauch, Huang, Schouten, Maddox, A-Tjak, Gloster, Czamanski-Cohen, Shella, Kabat-Zinn, Stojcevski)
- `Person.hasCredential` 4 항목 → Google Knowledge Graph 가 "박사과정 임상가" 엔티티로 추론 가능
- `<time dateTime>` + `rel="author"` → HTML 파싱 기반 AI 크롤러가 저자·최신성 시그널을 JSON-LD 없이도 확보

**Accessibility**:
- `<address>` 시맨틱 향상 (스크린 리더가 저자 정보 영역으로 인식)
- `id="stella"` anchor → 스크린 리더 사용자가 URL fragment 로 프로필 직접 진입 가능
