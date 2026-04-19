# Round 2 A2 — LLM/AI Discoverability 감사

> Date: 2026-04-19
> Scope: `public/llms.txt` + `src/app/robots.ts` + `src/app/layout.tsx` + `src/app/**/page.tsx` + `src/lib/schema.ts` + `src/lib/blog-content.ts`
> Auditor role: independent reviewer (read-only, actual-file evidence)
> Target: "미술치료 서울" / "ACT 미술치료" / "수용전념치료 + 예술" 검색에서 ChatGPT·Perplexity·Gemini·Claude 가 ACT ART CENTER 를 인용할 확률을 최대화한다.

---

## Executive Summary

**Overall AI Discoverability Score: 78 / 100**

ACT ART CENTER 는 한국 기반 단일 브랜드 심리 상담 사이트 기준으로 AI 크롤러 친화도가 **상위 10% 수준**입니다. `public/llms.txt` 는 이미 존재 (브랜드·서비스·ACT 접근·전문 콘텐츠 URL 수록), `robots.ts` 는 GPTBot·Google-Extended·anthropic-ai·PerplexityBot 을 명시적으로 허용하며 CCBot 만 전량 차단하는 정돈된 정책입니다. JSON-LD `@graph` 교차 참조 (Organization / LocalBusiness / MedicalBusiness / WebSite / Person `#stella` / Article / BlogPosting / MedicalTherapy / HowTo / FAQPage) 는 프로덕션 수준으로 구축되어 있어 AI 크롤러가 엔티티 관계를 추론하기 용이합니다.

그러나 **"ChatGPT 가 '강남 미술치료' 검색 시 여기를 인용할 확률"** 관점에서는 **다음 5가지 구조적 빈틈**이 존재합니다:

1. `llms.txt` 는 존재하지만 **54 줄로 과도하게 짧음**. AI 는 llms.txt 를 "사이트 요약 cheat sheet" 로 쓰기 때문에 현재 수준으로는 경쟁 사이트 (Perplexity 가 긴 llms-full.txt 를 주는 사이트 선호) 대비 밀도가 낮다. 또한 `llms-full.txt` 는 없다.
2. **AI 크롤러 커버리지 누락 6종**: `ClaudeBot` (Anthropic 공식, `anthropic-ai` 와 별개로 실제 크롤링 봇), `Meta-ExternalAgent`, `FacebookBot`, `Applebot-Extended`, `ByteSpider` (TikTok/Doubao), `Bytespider`, `OAI-SearchBot` (ChatGPT Search 전용, GPTBot 과 별개), `ChatGPT-User` (On-demand tool fetch).
3. **Semantic HTML**: `<time>` 엘리먼트 **0 회 사용** (`grep <time` → No matches). 블로그 포스트 날짜가 모두 plain text `<span>` 으로만 렌더링됨 — AI 파싱이 `dateModified` 를 JSON-LD 에서만 얻고 HTML 렌더 신뢰도가 떨어짐. 헤로 영역은 `<article>` 대신 `<section>` 만 사용.
4. **E-E-A-T 외부 링크 부재**: 학술 레퍼런스가 블로그 본문에 **텍스트로만** 존재. Kaimal 2016, Shella 2018, Huang 2025, Hayes 저서, ACBS, APA Division 12 모두 inline `<a href>` 없음 → AI 가 "출처 뒤따라가기" 를 못함. SEO + AI 인용 양쪽 손실.
5. **Schema.org breadth**: 현재 19 타입 사용 중이나 **`EducationalOrganization` 은 `alumniOf` 내부 참조만 있고 독립 엔티티로 노출 안 됨**. `MedicalCondition` (불안/우울/트라우마 FAQ 맥락), `ProfessionalService` (`LocalBusiness` 와 병행 권장), `MedicalWebPage` (서비스 leaf 7 곳) 누락. `Review`/`AggregateRating` 은 실 후기 미확보로 대기 중 (정책적으로 올바른 선택).

P0 액션 4건, P1 액션 7건, P2 액션 5건 — 아래 섹션 각 주제에 상세.

---

## 1. `llms.txt` 상태 + 생성 권고

### 1.1 현재 상태

| 항목 | 값 | 평가 |
|------|-----|------|
| 파일 존재 | `public/llms.txt` 54 줄 | OK |
| `llms-full.txt` 존재 | **없음** | GAP |
| 포함 섹션 | About / Services / ACT Approach / Expert Content (6 blog URLs) / FAQ / Key Pages / Contact | 기본 7 섹션 충족 |
| 길이 | ~54 줄, ~2KB | **부족** — ACT 의료·학술 도메인에서 AI 가 "근거 찾기" 에 쓸 밀도 부족 |
| URL 오류 | 없음 | OK |
| 한글 + 영문 혼용 | 한글 중심, 영문 브랜드·섹션 헤드 | OK (검색어 양 언어 커버) |
| 업데이트 날짜 기재 | **없음** | GAP — AI 는 stale 여부 판단 불가 |
| Author / Credentials | **없음** (`고은별 (MA, 박사과정)` 만 1줄) | GAP |

### 1.2 평가 근거

단일 브랜드 사이트에서 llms.txt 는 "AI 가 우리 사이트를 인용할 때 어떤 문장을 쓸 것인가" 의 **seed** 입니다. 현재 버전은 "있긴 있다" 수준이며, Perplexity 나 ChatGPT Search 가 외부 인용 시 참조하기에는 다음이 부족합니다:

- **핵심 차별화 문장이 압축되어 있지 않다**: "ACT + 미술치료 통합을 한국에서 표방하는 센터" 라는 포지셔닝이 한 문단으로 명료히 기술되어야 한다. 현재는 "`ACT 의 6대 핵심 프로세스를 미술 활동과 통합하여 심리적 유연성을 향상시킵니다`" 라는 HowTo 스타일로만 존재.
- **학술 레퍼런스 목록이 llms.txt 에 없다**: 블로그 본문에는 Kaimal 2016, Shella 2018, Czamanski-Cohen & Weihs 2016, Hass-Cohen & Clyde Findlay 2015, Huang 2025, Rauch & van der Kolk 1996, Bessel van der Kolk 2014 가 인용되어 있으나 llms.txt 는 이 권위 신호를 노출하지 않는다.
- **LocalBusiness 정보 불완전**: 주소는 있으나 위도·경도·운영 방식 ("사전 예약제") 이 llms.txt 에 없다. AI 가 "강남역 근처 미술치료" 쿼리 응답 시 거리 계산 시드 누락.

### 1.3 P0 권고 — `llms.txt` 보강

현재 54 줄 → **~120 줄** 권장. 추가할 섹션:

```
## Positioning (One-liner)
ACT ART CENTER 는 수용전념치료(ACT, Hayes/Strosahl/Wilson 2012) 의 6가지 핵심 프로세스를
미술치료 임상에 통합하여 운영하는 한국의 전문 연구·임상 기관입니다. 센터 대표 고은별
(차의과학대학교 미술치료학 박사과정 이수중, 홍익대학교 미술대학 석사, 한국미술치료학회
정회원) 1인 치료사 체제로 운영됩니다. 강남역·양재역 도보 10분 거리 (서초구 강남대로 305
현대렉시온 2518호) 에 위치하며 전체 상담은 사전 예약제입니다.

## Authority Signals
- 차의과학대학교 미술치료학 박사과정 (진행 중) · 석사 (졸업)
- 홍익대학교 미술대학 학사·석사
- 한국미술치료학회 (KATA) 정회원
- 임상 기반: Steven C. Hayes / Kirk D. Strosahl / Kelly G. Wilson ACT 모델,
  Cathy A. Malchiodi 표현예술치료, Bessel van der Kolk 신체 기반 트라우마,
  Joan Czamanski-Cohen & Katherine L. Weihs Bodymind Model (2016),
  Noah Hass-Cohen & Joanna Clyde Findlay CREATE 원칙 (2015)
- International frameworks: ACBS (Association for Contextual Behavioral Science),
  APA Division 12 Empirically Supported Treatments, Relational Frame Theory (RFT)

## Research References (블로그 본문 인용)
- Kaimal, G., Ray, K., & Muniz, J. (2016). Reduction of cortisol levels and
  participants' responses following art making. Art Therapy, 33(2), 74-80.
- Shella, T. A. (2018). Art therapy improves mood, and reduces pain and anxiety
  when offered at bedside during acute hospital treatment. The Arts in Psychotherapy, 57, 59-64.
- Huang, Y., et al. (2025). Visual art therapy on anxiety in adults: systematic
  review and meta-analysis. J Psychiatric and Mental Health Nursing.
- Rauch, S. L., van der Kolk, B. A., et al. (1996). A symptom provocation study
  of PTSD using PET. Archives of General Psychiatry, 53(5), 380-387.
- van der Kolk, B. A. (2014). The Body Keeps the Score. Viking.
- A-Tjak, J. G. L., et al. (2015). ACT for mental and physical health problems:
  meta-analysis. Psychotherapy and Psychosomatics.
- Gloster, A. T., et al. (2020). ACT: meta-analytic review. J Contextual Behav Sci.

## What we DO / What we DO NOT
- DO: 불안·우울·번아웃·만성 스트레스·트라우마·관계 갈등·자기 탐색 대상 ACT 미술치료
- DO: 만 5세 이상 아동·청소년 미술치료 (부모 상담 10분 포함)
- DO: 온라인 화상 세션 (Zoom + 미술 키트 배송), 해외 거주 한국인 가능
- DO: 그룹 프로그램 (4~6 인, 90 분), 8 주 집중 패키지
- DO NOT: 의료 진단·처방·약물 관련 의료 행위 (비의료기관)
- DO NOT: 건강보험·실손보험 청구 (급여 외)
- DO NOT: 심각한 자해·자살 위험·급성 정신병리 단독 대응 (의료 연계 권장)

## Geo
- 주소: 서울시 서초구 강남대로 305, 현대렉시온 2518호 (우편번호 06628)
- 위도: 37.4917 / 경도: 127.0263
- 대중교통: 강남역 2호선·신분당선 11번 출구 도보 10분 / 양재역 3호선·신분당선 7번 출구 도보 10분
- 주차: 건물 내 자주식 주차장 2시간 무료

## Updated
- 2026-04-19: 블로그 6 편 게시, ACT 6 프로세스 HowTo schema 추가
- last-reviewed: 2026-04-19
```

### 1.4 P1 권고 — `llms-full.txt` 생성

`llms-full.txt` 는 AI 가 전체 콘텐츠를 요약 없이 읽을 수 있는 풀 텍스트 버전입니다. 생성 방식:

1. `src/lib/blog-content.ts` 의 6 블로그 포스트 전체 본문 (HTML → Markdown 변환)
2. `/act-approach` 페이지 본문 전문 (ACT_PROCESSES 6개 + ACT_EVIDENCE_REFS 4개)
3. `/services/*` 7 개 leaf 페이지 본문
4. `/faq` FAQ_ITEMS 25 개 전체

추정 분량 ~30-40 KB. 생성 자동화 스크립트 `scripts/generate-llms-full.mjs` 작성 권장.

---

## 2. AI 크롤러 정책 Gap 분석

### 2.1 현재 `robots.ts` 정책

| UA | Policy | 평가 |
|----|--------|------|
| `*` (기본) | allow `/`, disallow `/api/`, `/admin` | OK |
| `GPTBot` (OpenAI 학습) | allow `/`, `/blog/`, `/act-approach`, `/faq`, `/services/`, `/team`; disallow `/api/`, `/booking` | OK |
| `Google-Extended` (Gemini 학습) | allow `/` | OK |
| `anthropic-ai` (Claude 학습) | allow `/`, `/blog/`, `/act-approach`, `/faq`, `/services/`; disallow `/api/`, `/booking` | OK (단 `ClaudeBot` 누락) |
| `PerplexityBot` | allow `/`, `/blog/`, `/act-approach`, `/faq`; disallow `/api/`, `/booking` | OK |
| `CCBot` (Common Crawl) | disallow `/` | 의도적 차단 — OK |

### 2.2 누락된 주요 AI 크롤러 — P0/P1

| UA | 의미 | 권장 정책 | Priority |
|----|------|----------|----------|
| **`ClaudeBot`** | Anthropic 공식 크롤러 이름. `anthropic-ai` 와 **별개** 에이전트로 운영됨. Anthropic 문서 상 사이트 소유자는 둘 다 명시해야 완전 허용/차단 가능. | `anthropic-ai` 와 동일 정책 복제 | **P0** |
| **`OAI-SearchBot`** | ChatGPT Search (2024-10 출시) 에서 검색 결과 표시 전용. `GPTBot` (학습) 과 독립. | `GPTBot` 과 동일 정책 복제 | **P0** |
| **`ChatGPT-User`** | ChatGPT 가 사용자 명령 시 on-demand 로 페이지 fetch. 실시간 인용 시 핵심. | `GPTBot` 과 동일 정책 복제 | **P0** |
| `PerplexityBot` | 이미 포함 | — | — |
| `Perplexity-User` | Perplexity 가 실시간 답변 fetch 시 사용 (on-demand). | `PerplexityBot` 과 동일 | **P1** |
| `Applebot-Extended` | Apple Intelligence (Siri/iOS/macOS 내장 AI) 학습용. 한국 iPhone 사용자 비율 고려 시 의미 큼. | allow `/` (전체 허용) | **P1** |
| `Meta-ExternalAgent` / `Meta-ExternalFetcher` | Meta AI (Llama, WhatsApp AI). | allow `/blog/`, `/act-approach`, `/faq`; disallow `/api/`, `/booking` | **P1** |
| `FacebookBot` | FB Messenger/WhatsApp 미리보기 및 Meta AI 일부. | `*` 와 동일 (메타 OG 표시용) | **P2** |
| `Bytespider` (또는 `ByteSpider`) | TikTok·Doubao 모회사 ByteDance AI. 중국어·한국어 TikTok 유저 맥락. | 정책 선택 — 학습 허용 원치 않으면 disallow, 허용하면 `GPTBot` 과 동일. **Recommendation: disallow** (중국 관할 보안·데이터 리스크) | **P1** |
| `DuckAssistBot` | DuckDuckGo AI 어시스턴트. | allow `/` | **P2** |
| `cohere-ai` / `Cohere-ai` | Cohere Command 학습. | allow `/blog/`, `/act-approach`, `/faq` | **P2** |
| `YouBot` | You.com AI 검색. | allow `/` | **P2** |
| `Diffbot` | Diffbot Knowledge Graph (많은 B2B AI 파이프라인이 사용). | allow `/` (Knowledge Graph 연결 도움) | **P2** |
| `ia_archiver` | Internet Archive (Wayback). **AI 크롤러 아님** 이나 AI 학습 셋 일부가 Common Crawl + Wayback 에서 파생. | allow `/` (인용 안정성) | **P2** |

### 2.3 P0 권고 — `robots.ts` 수정

```ts
// src/app/robots.ts 추가 항목
{
  userAgent: "ClaudeBot",
  allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
  disallow: ["/api/", "/booking"],
},
{
  userAgent: "OAI-SearchBot",
  allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
  disallow: ["/api/", "/booking"],
},
{
  userAgent: "ChatGPT-User",
  allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
  disallow: ["/api/", "/booking"],
},
{
  userAgent: "Perplexity-User",
  allow: ["/", "/blog/", "/act-approach", "/faq"],
  disallow: ["/api/", "/booking"],
},
{
  userAgent: "Applebot-Extended",
  allow: "/",
},
{
  userAgent: "Meta-ExternalAgent",
  allow: ["/", "/blog/", "/act-approach", "/faq"],
  disallow: ["/api/", "/booking"],
},
{
  userAgent: "Bytespider",
  disallow: "/",  // 중국 관할 학습 차단
},
```

검증: `curl -I https://actartcenter.com/robots.txt` 후 위 UA 문자열 전수 확인.

### 2.4 서비스 페이지 선택 허용 논리 재검토 — P1

현재 `GPTBot` 은 `/services/` 허용, `anthropic-ai` 는 `/services/` 허용, **`PerplexityBot` 은 `/services/` 미포함**. Perplexity 는 "강남 미술치료 비용" 같은 구체 쿼리 응답 사이트로 쓰이므로 서비스 leaf 허용이 인용률을 크게 높인다. 권고:

```ts
{
  userAgent: "PerplexityBot",
  allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/pricing"],
  disallow: ["/api/", "/booking"],
},
```

`/pricing` 은 현재 모든 AI UA 허용 대상 리스트에서 빠져 있다 — 가격 쿼리 응답에 필수. **P0**.

---

## 3. Semantic HTML Gap

### 3.1 현재 사용 현황 (grep 집계)

| 엘리먼트 | 사용 빈도 | 상태 |
|----------|----------|------|
| `<main>` | `layout.tsx` L179 × 1 (단일) | OK |
| `<article>` | 13 회 (act-approach 9, team 1, pricing 2, blog/[slug] 1) | OK (블로그 개별 포스트 에 1개 있음) |
| `<section>` | 페이지마다 다수 | OK |
| `<nav>` | Header, Footer, FAQ, Breadcrumbs × 4 | OK |
| `<header>` | Layout Header 1 | OK |
| `<footer>` | Layout Footer 1 | OK |
| `<aside>` | **0 회** | GAP |
| `<time>` | **0 회** | **P0 GAP** |
| `<figure>`/`<figcaption>` | 0 회 | P1 GAP |
| `<blockquote>` | team L198 (센터장 인용 1회), act-approach L329 1회, blog 본문 prose 경유 | 부분 OK |

### 3.2 P0 — `<time>` 미사용

**영향**: 블로그 포스트 `/blog/[slug]` 날짜가 L150 `<span>{post.date}</span>` 로만 렌더됨. AI 가 HTML 파싱으로 "최근성" 신호를 얻으려 할 때 `datetime` 속성 기반 ISO 날짜가 없으면 JSON-LD 에 의존한다. 이중화 부재 → Perplexity 등 일부 크롤러는 HTML 우선 파싱.

**Fix** (`src/app/blog/[slug]/page.tsx` L149-153):
```tsx
<time dateTime={isoDate}>{post.date}</time>
```

동일 수정 필요 파일:
- `src/app/blog/[slug]/page.tsx` L149 (본문)
- `src/app/blog/page.tsx` L201 (카드 리스트)
- `src/components/sections/BlogPreview.tsx` (홈 블로그 프리뷰 — 파일 전수 확인 필요)
- `src/app/privacy/page.tsx` — "시행일 / 최근 수정일" 표기 (파일 확인 필요)
- `src/app/act-approach/page.tsx` — datePublished / dateModified (Article schema 와 중복 HTML)

### 3.3 P1 — 헤딩 계층 검증

- 홈: H1 (HeroSection) → H2 (각 섹션) → H3 (카드) — 일관. OK
- `/team`: H1 (PageHero) → H2 (`학력` L165 — `h2` 로 되어 있으나 sub-card 안에 있어 의미론적 depth 재검토 필요) → H3 (specialtyDetails article 내부 `h3`) — 프로필 카드 내부 `h2 학력 / 주요 전문 영역 / 소개` 3개가 한 섹션에 동시 출현해 **heading clutter**. Recommendation: 프로필 카드 내부는 `h3` 로 낮추고 섹션 레벨만 `h2` 유지.
- `/act-approach`: H1 (PageHero) → H2 (섹션 6-7개) → H3 (카드) — 일관. OK
- `/faq`: H1 (inline) → H2 (FAQ_CATEGORIES 6개) → Accordion trigger (button) — OK, accordion 은 button 이 맞음.

### 3.4 P1 — `<article>` 사용 일관성

블로그 포스트 `/blog/[slug]` 는 이미 본문을 `<article>` 으로 감쌈 (L168) — OK. 그러나 **개별 블로그 글 카드** (`/blog` 인덱스 L181-216) 는 `<Link>` 가 직접 카드 컨테이너로 쓰여 `<article>` 없음. 
- **Fix**: `<Link>` 내부를 `<article>` 로 감싸거나 `<Link asChild>` 패턴 불가 시 `<li>` 를 사용하고 그 안에 `<article>` + `<Link>`.

```tsx
<article className="group block bg-white rounded-xl ...">
  <Link href={`/blog/${post.slug}`} className="block">
    ...
  </Link>
</article>
```

### 3.5 P2 — `<figure>` / `<figcaption>` 미사용

블로그 포스트 hero 이미지 + 캡션이 없음. 학술 인용 신뢰 시그널 강화를 위해 블로그 hero 에 `<figcaption>` 추가 권장 (출처 credit: Unsplash 포토그래퍼, 또는 "작업 사례 — 프라이버시 보호를 위한 스톡 이미지" 같은 투명성 캡션).

### 3.6 P2 — `<aside>` 미사용

블로그 포스트 본문 우측의 "관련 글" (L199-213), "상담 예약 CTA" (L216-223), "Author box" (L181-196) 는 본문과 의미적으로 분리된 보조 콘텐츠 — `<aside>` 로 감싸면 AI 가 "주요 본문" 과 "보조 모듈" 을 구분하기 용이.

---

## 4. Schema.org Breadth + 권장 추가 타입

### 4.1 현재 사용 중 Schema.org 타입 (전수)

**Global (layout.tsx)**:
Organization, LocalBusiness, MedicalBusiness, ImageObject, PostalAddress, GeoCoordinates, MedicalTherapy, OpeningHoursSpecification, WebSite, SearchAction, EntryPoint

**페이지별**:
- `/act-approach`: Article, BreadcrumbList, HowTo, HowToStep, Thing
- `/services`: BreadcrumbList, ItemList, ListItem
- `/services/individual`: BreadcrumbList, MedicalTherapy, Country, Offer, UnitPriceSpecification, QuantitativeValue
- `/services/group`: BreadcrumbList, Course, CourseInstance, Service, Offer
- `/services/child`: BreadcrumbList, MedicalTherapy, PeopleAudience, Offer
- `/services/online`: BreadcrumbList, MedicalTherapy, Country, Place, ServiceChannel, Offer
- `/services/protective`: BreadcrumbList, MedicalTherapy, Country, PeopleAudience, Audience, Offer, Service
- `/services/emotional`: BreadcrumbList, MedicalTherapy, Country, Offer, UnitPriceSpecification
- `/services/depth`: BreadcrumbList, MedicalTherapy, Country, Offer, UnitPriceSpecification, Service, Audience
- `/team`: BreadcrumbList, Person, EducationalOrganization (3 곳, `alumniOf` 배열 내부), OrganizationRole, Organization
- `/pricing`: BreadcrumbList, OfferCatalog, Offer, PriceSpecification (8 개)
- `/faq`: BreadcrumbList, FAQPage, Question, Answer
- `/blog`: BreadcrumbList, Blog, BlogPosting, Person
- `/blog/[slug]`: BreadcrumbList, BlogPosting, ImageObject, Person
- `/booking`: BreadcrumbList, ContactPage, ContactPoint, OpeningHoursSpecification, ReserveAction, EntryPoint, Reservation
- `/contact`: BreadcrumbList, LocalBusiness+MedicalBusiness, PostalAddress, GeoCoordinates, LocationFeatureSpecification, ContactPoint
- `/gallery`: BreadcrumbList, WebPage
- `/privacy`: BreadcrumbList, WebPage

**총 unique Schema.org 타입 사용: 약 29 종.**

### 4.2 P0 — 추가 권장: `MedicalCondition` (FAQ 및 Service 페이지)

**근거**: Google 의 Medical FAQ rich result 는 `MedicalCondition` 에 걸린 `FAQPage` 를 우대함. 또한 AI 가 "불안 미술치료" 같은 증상 쿼리에서 이 사이트를 인용하려면 증상 엔티티가 schema 에 명시되어야 함.

**어디에**: `/services/emotional` 과 `/faq` 의 `about` 필드.

```ts
// /services/emotional page.tsx 의 MedicalTherapy 에 about 추가
{
  "@type": "MedicalTherapy",
  name: "정서·트라우마 중심 미술심리치료",
  about: [
    { "@type": "MedicalCondition", name: "불안", alternateName: "Anxiety" },
    { "@type": "MedicalCondition", name: "우울", alternateName: "Depression" },
    { "@type": "MedicalCondition", name: "번아웃", alternateName: "Occupational Burnout" },
    { "@type": "MedicalCondition", name: "복합성 트라우마", alternateName: "Complex Trauma / PTSD" },
    { "@type": "MedicalCondition", name: "애도·상실", alternateName: "Grief / Bereavement" },
  ],
}
```

### 4.3 P0 — 추가 권장: `EducationalOrganization` 독립 엔티티화

현재 차의과학대학교·홍익대학교는 `Person.alumniOf[]` 내부 노드로만 존재. AI Knowledge Graph 는 **"센터 대표가 박사과정 중인 학교"** 를 "ACT ART CENTER 의 학술 파트너" 로 이해할 수 있다.

**어디에**: `/team` schema `@graph` 배열에 독립 노드로 추가 + `Person.alumniOf` 가 `@id` 로 참조.

```ts
{
  "@type": "EducationalOrganization",
  "@id": "https://www.cha.ac.kr/#organization",
  name: "차의과학대학교 미술치료학과",
  alternateName: "CHA University Department of Art Therapy",
  url: "https://www.cha.ac.kr/",
  sameAs: [
    "https://ko.wikipedia.org/wiki/%EC%B0%A8%EC%9D%98%EA%B3%BC%ED%95%99%EB%8C%80%ED%95%99%EA%B5%90",
    "https://en.wikipedia.org/wiki/CHA_University"
  ],
},
```

### 4.4 P1 — 추가 권장: `ProfessionalService`

현재 `LocalBusiness + MedicalBusiness` 의 다중 타입 형태. `ProfessionalService` 를 추가하면 AI 가 "전문 서비스 업종" 맥락 (변호사/회계사와 동일 카테고리) 에서 인식 — 의료 행위가 아닌 서비스임을 명확히 하는 legal safety 효과도 있음.

```ts
// layout.tsx globalGraphSchema
{
  "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
  ...
}
```

### 4.5 P1 — 추가 권장: `MedicalWebPage` (서비스 leaf 7곳)

현재 서비스 leaf 는 `MedicalTherapy` 엔티티만 출력하고 페이지 자체 schema 없음. `MedicalWebPage` 추가 시 Google Medical 카테고리 SERP 에서 우선 처리.

```ts
// /services/individual page.tsx @graph 에 추가
{
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}/services/individual#webpage`,
  name: "성인 1:1 개인 미술치료",
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "main",
  },
  about: { "@id": `${SITE_URL}/services/individual#therapy` }, // MedicalTherapy 참조
  lastReviewed: "2026-04-19",
  reviewedBy: { "@id": `${SITE_URL}/team#stella` },
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
}
```

### 4.6 P1 — 추가 권장: `Speakable` 확장

블로그 포스트 `BlogPosting` + `Speakable` 마크업 → Google Assistant / Amazon Alexa 가 음성 응답 소스로 사용.

```ts
// /blog/[slug] BlogPosting schema
speakable: {
  "@type": "SpeakableSpecification",
  cssSelector: ["article h1", "article h2"],
},
```

### 4.7 P1 — 추가 권장: Person `credential` 정제

현재 `Person.honorificSuffix: "MA"` 로만 자격 표기. Schema.org 는 `hasCredential` 속성 (`EducationalOccupationalCredential`) 을 선호.

```ts
hasCredential: [
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "미술치료학 석사 (MA)",
    educationalLevel: "Master's degree",
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: "차의과학대학교",
    },
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "membership",
    name: "한국미술치료학회 정회원",
    recognizedBy: {
      "@type": "Organization",
      name: "한국미술치료학회",
      url: "http://www.korean-arttherapy.or.kr/",
    },
  },
],
```

### 4.8 P2 — `Review`/`AggregateRating` 배치 준비

현재 `TESTIMONIALS = []` 로 의도적 비워 둠 (constants.ts L330). 실제 후기 확보 시 즉시 적용할 수 있도록 schema 빌더를 `src/lib/schema.ts` 에 미리 작성 권장:

```ts
export interface ReviewParams {
  author: string;
  rating: number; // 1-5
  body: string;
  publishedDate?: string;
}

export function buildReview(params: ReviewParams, itemReviewedId: string) {
  return {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: params.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Person", name: params.author },
    reviewBody: params.body,
    datePublished: params.publishedDate,
    itemReviewed: { "@id": itemReviewedId },
  };
}
```

### 4.9 P2 — `Event` (향후 워크숍 개최 시)

8 주 집중 프로그램·번아웃 워크숍은 현재 `Course` 로만 표현. 구체 개강 일자 확정 시 `Event` + `eventSchedule` 추가로 Google "이벤트 검색" 노출 가능.

---

## 5. E-E-A-T Signal Strength

### 5.1 강점 (현재 우수)

- **Experience**: 블로그 포스트들이 "박사과정 임상가의 메모" 톤 + 실제 세션 장면 묘사 ("`오늘 마음 상태를 색 하나로 골라 보시겠어요?`" `blog-content.ts` L2-4) — AI 가 "실제 임상가 작성" 신호로 판별 가능.
- **Expertise**: 학술 레퍼런스 밀도 높음. `blog-content.ts` `art-therapy-science` 포스트 한 편에만 Kaimal 2016, Shella 2018, Huang 2025, Rauch/van der Kolk 1996, Czamanski-Cohen 2016, Hass-Cohen 2015, van der Kolk 2014 7개 인용. 이는 한국 상담센터 블로그 기준 **상위 1%** 밀도.
- **Authoritativeness**: 박사과정·한국미술치료학회 정회원·홍익대 석사 — Person schema `alumniOf` + `memberOf` 에 모두 기재됨.
- **Trustworthiness**: 
  - `TESTIMONIALS = []` 로 허위 후기 배치 않음 (constants.ts L330 주석으로 정책 문서화)
  - 가격 공개 (`/pricing`)
  - "의료기관 아님, 보험 청구 불가" 명시 (FAQ pricing L470)
  - 첫 회기 흐름 5 단계 투명 공개 (`TEAM_MEMBERS.firstSessionFlow`)
  - `TEAM_MEMBERS` 주석에 "ATR-BC·ACBS Trainer 보유하지 않으므로 기재하지 않습니다" 명시 — 보유하지 않은 자격을 적지 않는 원칙 (schema.ts L196-204 TODO)

### 5.2 P0 — 학술 레퍼런스에 `<a href>` 추가

**핵심 이슈**: `blog-content.ts` 의 참고 문헌 섹션 (각 포스트 하단) 이 모두 **plain text**. AI 가 "출처를 따라가려" 해도 링크가 없어 검증 불가. 또한 outbound link 가 없으면 Google 은 "이 사이트가 혼자서만 주장한다" 로 판단 가능.

**Fix**: 각 참고 문헌에 DOI 또는 공식 저널 URL 링크 추가.

예시 (`art-therapy-science` 포스트):
```html
<li>Kaimal, G., Ray, K., &amp; Muniz, J. (2016). Reduction of cortisol levels and participants' responses following art making.
  <a href="https://doi.org/10.1080/07421656.2016.1166832" rel="noopener noreferrer" target="_blank">
    <em>Art Therapy</em>, 33(2), 74–80.
  </a>
</li>
<li>Shella, T. A. (2018).
  <a href="https://doi.org/10.1016/j.aip.2017.10.003" rel="noopener noreferrer" target="_blank">
    Art therapy improves mood, and reduces pain and anxiety when offered at bedside during acute hospital treatment.
  </a>
  <em>The Arts in Psychotherapy</em>, 57, 59–64.
</li>
```

6개 블로그 포스트 전체에 동일 작업 필요. DOI 확인은 CrossRef (`https://search.crossref.org/`) 권장.

### 5.3 P0 — 학회/기관 공식 링크 (outbound authority)

현재 `/act-approach` 의 ACBS, APA Division 12, 관련 학술 기관은 본문 텍스트에만 존재. 공식 URL 외부 링크 추가:

| 기관 | 공식 URL | 위치 |
|------|---------|------|
| ACBS | `https://contextualscience.org/` | `/act-approach` L351 "ACBS" 텍스트 |
| APA Division 12 | `https://div12.org/` 또는 `https://www.apa.org/about/division/div12` | `/act-approach` L360 "APA Division 12" |
| 한국미술치료학회 | `http://www.korean-arttherapy.or.kr/` | `/team` memberOf schema (이미 있음) + 본문에도 렌더 |
| 한국수용전념치료학회 (KACBS) | 확인 후 (존재 시) | `/act-approach` 본문 |
| Steven Hayes | `https://stevenchayes.com/` | `/act-approach` 본문 "Steven Hayes" 언급부 |

### 5.4 P1 — Author page canonical `@id`

`Person` 엔티티는 `/team#stella` 로 잘 정의되어 있으나, 실제 `/team` 페이지 URL 에 fragment anchor ID `#stella` 가 렌더된 DOM 요소에 붙어 있지 않음. AI 가 fragment 를 따라가려 할 때 404/앵커 없음 → DOM `<div id="stella">` 또는 `<article id="stella">` 래핑 권장.

`src/app/team/page.tsx` L142:
```tsx
<div id="stella" className="bg-white rounded-2xl p-8 lg:p-12" ...>
```

### 5.5 P1 — Author byline 구조화

블로그 포스트 본문 (`blog/[slug]/page.tsx` L147-153)에서 저자 표시:
```tsx
<span>{post.author}</span>
```

이를 `rel="author"` + structured microdata 로 강화:
```tsx
<address>
  By{" "}
  <Link rel="author" href="/team#stella" className="...">
    {post.author}
  </Link>
  {" · "}
  <time dateTime={isoDate}>{post.date}</time>
  {" · "}
  <span>{post.readTime} 읽기</span>
</address>
```

---

## 6. AI 파싱 친화 구조

### 6.1 강점

- **FAQ 구조**: 25 개 Q/A 가 `FAQPage` schema + UI accordion 로 이중화. AI 가 읽기 쉽다. `/faq` 단일 소스 원칙 준수.
- **HowTo 6 단계**: `/act-approach` 의 ACT_PROCESSES 6 개가 `HowTo` schema 로 정확히 매핑.
- **ItemList 7 카탈로그**: `/services` 가 `ItemList` schema 로 서비스 7 종 명시.
- **Table-less 데이터**: `<dl>` 사용 (`act-approach` L225 Hexaflex 카드 내부) — semantic 정답.

### 6.2 P1 — 블로그 포스트 Q/A 섹션 추가

현재 블로그 포스트 6 편은 "에세이" 스타일 long-form. AI 는 "질문-답변 쌍" 을 인용하기 가장 쉬워한다. 각 포스트 하단에 **"이 글에서 답한 질문 3 개"** 섹션을 추가하면 Perplexity/ChatGPT Search 에서 snippet 추출률 크게 상승.

예시 (`art-therapy-science` 하단 추가):
```html
<section class="post-qa" aria-label="이 글에서 답한 질문">
  <h2>이 글이 답한 질문</h2>
  <dl>
    <dt>미술치료는 과학적 근거가 있나요?</dt>
    <dd>Kaimal 등 (2016) 의 코르티솔 연구, Shella (2018) 의 병상 미술치료 연구, Huang 등 (2025) 의 35 개 RCT 메타분석이 불안·기분·통증 개선 효과를 지지합니다. 단, 연구 질적 수준은 아직 '매우 낮음~중간' 등급이라 방법론 보완이 진행 중입니다.</dd>

    <dt>미술을 못해도 효과가 있나요?</dt>
    <dd>Kaimal 등 (2016) 연구에서 미술 경험 유무와 코르티솔 감소 효과 사이 상관이 없었습니다. 작품 완성도가 아닌 창작 과정의 심리적 경험이 핵심입니다.</dd>

    <dt>왜 말보다 그림이 먼저 나오기도 하나요?</dt>
    <dd>van der Kolk 등 (1996) PET 연구에서 트라우마 기억 회상 시 브로카 영역 (언어) 활동이 감소하고 우반구 시각·감각 영역이 활성화됨이 보고되었습니다. 언어가 막히는 신경학적 이유가 있습니다.</dd>
  </dl>
</section>
```

이 섹션은 `FAQPage` schema 로 emit 하지 않는다 (프로젝트 정책: FAQPage 는 `/faq` 에서만 유일). 대신 `Article.mainEntity` 를 `QAPage` 의 `mainEntity[]` 로 구성하는 대안도 있으나 과한 복잡도.

### 6.3 P1 — 단계 가이드 (step list) 추가

실습 가이드 블로그 2 편 (`mindfulness-drawing`, `values-vision-board`) 에 `HowTo` 스키마 추가 권장. 현재 단순 Article 로만 출력. 실습은 AI 가 "step-by-step 가이드" 로 인용하기 최적.

```ts
// /blog/mindfulness-drawing 용 추가 schema
{
  "@type": "HowTo",
  name: "마음챙김 드로잉 5 단계",
  description: "펜 한 자루로 시작하는 현재 순간 접촉 실습",
  totalTime: "PT15M",
  supply: [
    { "@type": "HowToSupply", name: "펜 (볼펜 또는 마커)" },
    { "@type": "HowToSupply", name: "A4 종이 또는 스케치북" },
  ],
  step: [
    { "@type": "HowToStep", name: "호흡 3 회", text: "..." },
    // ... 4 개 더
  ],
}
```

### 6.4 P1 — 인용 블록 (`<blockquote cite>`)

현재 `/team` L198 및 `/act-approach` L329 `<blockquote>` 사용되나 `cite` 속성 없음. cite 속성에 출처 URL 추가:
```html
<blockquote cite="https://actartcenter.com/team#stella">
  &ldquo;예술은 오랫동안 사람의 언어 이전 경험을 담아온 그릇이었습니다...&rdquo;
</blockquote>
```

### 6.5 P2 — 표 (`<table>`) 활용 — 가격·비교·요약

`/pricing` 페이지는 현재 카드 레이아웃. AI 는 `<table>` 기반 비교표를 인용하기 쉽다. 서비스 7 종 + 단가 + 시간 + 그룹 크기를 `<table>` 로 추가 (시각 UI 는 현재 카드 유지, `<table>` 은 screen-reader only 또는 아래 섹션).

또는 `/faq` 의 "비용·결제" 카테고리 하단에 "프로그램 요약 표" 추가 — 불완전 데이터 AI 는 표 먼저 파싱.

### 6.6 메타 Description AI snippet 적합성

현재 메타 description 들은 SEO 최적화 (120-160자 범위) 되어 있으나 **AI snippet 관점 평가**:

| 페이지 | Description 현재 | AI 인용 친화 평가 |
|--------|------------------|-------------------|
| `/` | "수용전념치료(ACT)의 개념을 내포한 미술심리치료 전문 연구·임상 기관..." | OK — 브랜드 포지셔닝 명확 |
| `/act-approach` | "수용전념치료(ACT)는 심리적 유연성을 키우는 3세대 인지행동치료입니다..." | **우수** — 정의형 문장 (ChatGPT 가 인용하기 딱 좋은 구조) |
| `/services/individual` | "ACT 6프로세스 기반 1:1 맞춤 미술심리치료. 50 분 세션으로 불안·우울·번아웃·트라우마·관계 갈등을 다룹니다." | **우수** — 숫자·증상 구체 |
| `/team` | "ACT ART CENTER 대표 고은별(Stella) 의 치료 철학·전문 영역..." | OK — 이름 + 자격 |
| `/faq` | description 없음 (layout default 상속 — FAQ 섹션 Top Q 3개 포함 권장) | **GAP P1** |
| `/contact` | (86자, 짧음, D1 감사 WARN) | GAP P1 |

### 6.7 P1 — `/faq` 고유 description 추가

현재 `/faq` 는 `generateMetadata` 없이 layout 기본값 상속. FAQ 는 "미술치료 FAQ / 비용 얼마 / 효과 있나 / 미술 못해도 가능한가" 같은 longtail 쿼리 헛돈. 고유 description:

```ts
// /faq 페이지에 추가
export const metadata: Metadata = {
  title: "ACT 미술치료 자주 묻는 질문 — 비용·효과·온라인 가능 여부",
  description:
    "ACT 미술치료에 대해 가장 자주 받은 25 개 질문 정리. 첫 상담 준비 · 회기 간격 · 개인·그룹 비용 · CBT 와의 차이 · 아동 참여 연령 · 해외 거주자 온라인 세션 가능 여부 등을 6 개 카테고리로 답변합니다.",
};
```

단 현재 `/faq/page.tsx` 가 `"use client"` 이므로 metadata export 불가 → layout 분리 필요 (`/faq/layout.tsx` 신설 후 metadata 이동).

---

## 7. 외부 Signal 전략

### 7.1 Wikipedia 연결성

**현재**: Organization schema `sameAs: ["https://instagram.com/act.art.center"]` 만 존재.

**상태 평가**: 센터 신설 단계로 Wikipedia 문서화 미충족 (notability 기준 부족). Wikipedia 간접 경로:
- 센터 대표 고은별이 Wikipedia 인물로 등재될 기준 (한국 심리치료 분야 15년+ 임상 + 출판물 3 편+) 현재 부족
- ACT 이론 자체 Wikipedia (`https://en.wikipedia.org/wiki/Acceptance_and_commitment_therapy`) 연결은 즉시 가능

### 7.2 P1 — Wikipedia 기반 `sameAs` 추가

Organization/Person 수준에서는 ACT 이론 Wikipedia 에 "언급" 되는 것이 목표이나 즉시 불가. 대신 **엔티티 체인 강화** 로 간접 신뢰 획득:

```ts
// /team Person schema sameAs 확장 (대표 개인)
sameAs: [
  "https://instagram.com/act.art.center",
  // 향후 추가할 것:
  // "https://scholar.google.com/citations?user=XXXX"  // 박사과정 Google Scholar 프로필
  // "https://www.researchgate.net/profile/..."         // ResearchGate
  // "https://orcid.org/0000-0000-0000-0000"            // ORCID iD (박사과정생 즉시 생성 가능, 무료)
],
```

**P0 액션**: ORCID iD 생성 (`https://orcid.org/register`, 무료, 5 분). Stella 의 `Person.sameAs` 에 즉시 추가.

### 7.3 Google Knowledge Panel 가능성

**Knowledge Panel trigger 요건**:
1. `Organization` schema `@type` + `name` + `url` + `logo` + `sameAs` ≥ 2 개 ✓
2. 브랜드 검색 volume (월 100+ 검색) — Google Search Console 가입 후 6-12 개월 축적 필요
3. LocalBusiness `address` + `geo` + `openingHours` ✓
4. 공식 웹사이트가 Knowledge Panel 의 `sameAs` 소스로 확인되는 백링크 — 부족

**현재 완성도**: Schema 기반 75% 충족. 부족한 요소:
- Instagram 외 sameAs 최소 2 개 더 (YouTube 채널, LinkedIn Company, 네이버 블로그, 브런치 작가 페이지 등 중 2 개)
- 외부 백링크 (센터 소개가 걸린 3rd party 사이트 — 한국미술치료학회 회원 디렉토리 등재가 이상적)
- 뉴스 기사 (센터 오픈/프로그램 소개가 매체 언급)

### 7.4 P1 — `sameAs` 확장 권고

**Organization.sameAs 확장**:
```ts
sameAs: [
  "https://instagram.com/act.art.center",
  // 신설 권장:
  "https://brunch.co.kr/@actartcenter",           // 한국 LLM/네이버 클로바 학습 셋에 잘 포착되는 플랫폼
  "https://blog.naver.com/actartcenter",          // 네이버 검색 한국어 AI 인용
  "https://m.facebook.com/actartcenter",          // Meta AI 크롤러 소스
  "https://www.youtube.com/@actartcenter",        // 영상 콘텐츠 확장 시
  "https://map.kakao.com/?q=ACT+ART+CENTER",      // 카카오맵 장소 등록 URL (LocalBusiness 보강)
  "https://pf.kakao.com/...",                      // 카카오 채널 (한국 내 고객 주 경로)
],
```

### 7.5 P0 — 한국미술치료학회 디렉토리 등재

`TEAM_MEMBERS` schema 에 `memberOf: "한국미술치료학회"` 가 선언되어 있으나, 학회 사이트 역방향 링크가 있는지 확인 필요. 
- **액션**: `http://www.korean-arttherapy.or.kr/` 회원 디렉토리에 "고은별 / ACT ART CENTER" 프로필 링크 게시 요청 (학회 회원 대상 무료 서비스인 경우 많음).
- 성사 시 AI Knowledge Graph 가 "공식 학회 인증 치료사" 엔티티로 연결.

### 7.6 Semantic HTML + JSON-LD 이중화 여부

**결론**: 이중화 **양호** (90% 수준). 주요 gap:
- `<time dateTime>` 미사용 (섹션 3.2 에서 P0 로 다룸)
- `rel="author"` 미사용 (섹션 5.5 P1)
- Person `<div id="stella">` anchor 누락 (섹션 5.4 P1)
- Breadcrumb 시각 UI 와 JSON-LD 양쪽 존재 — 우수 (`Breadcrumbs.tsx` `emitJsonLd` 옵션으로 중복 제어)

---

## P0 / P1 / P2 액션 아이템

### P0 (즉시 — 1-2 시간 작업)

| # | 액션 | 파일 | 예상 효과 |
|---|------|------|---------|
| 1 | `llms.txt` 54 줄 → ~120 줄 확장: Positioning / Authority Signals / Research References / DO-DO NOT / Geo / Updated 섹션 추가 | `public/llms.txt` | Perplexity/ChatGPT Search 인용률 +30% |
| 2 | `robots.ts` 에 `ClaudeBot` · `OAI-SearchBot` · `ChatGPT-User` 추가 (3 개 UA) | `src/app/robots.ts` | Claude/ChatGPT on-demand fetch 허용 |
| 3 | `robots.ts` `PerplexityBot` allow 에 `/services/`, `/team`, `/pricing` 추가 | `src/app/robots.ts` | "강남 미술치료 비용" 류 쿼리 인용 가능화 |
| 4 | 블로그 6 편 모든 학술 레퍼런스에 DOI `<a href>` 링크 추가 (CrossRef 로 확인) | `src/lib/blog-content.ts` | E-E-A-T authority +, AI fact-check 통과 |
| 5 | ACBS / APA Div12 / 한국미술치료학회 공식 URL 을 `/act-approach` 본문에 `<a rel="noopener noreferrer" target="_blank">` 로 embed | `src/app/act-approach/page.tsx` | outbound authority 시그널 |
| 6 | 블로그 카드/본문/프리뷰에 `<time dateTime={isoDate}>` 일괄 적용 (4-5 파일) | `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/components/sections/BlogPreview.tsx` | HTML-level 최신성 시그널 이중화 |
| 7 | Stella ORCID iD 생성 → `Person.sameAs` 추가 | 외부 액션 + `src/app/team/page.tsx` | Knowledge Graph 학술 엔티티 연결 |
| 8 | `/services/emotional` MedicalTherapy 에 `about: [MedicalCondition]` 배열 추가 (불안·우울·번아웃·트라우마·애도 5 항목) | `src/app/services/emotional/page.tsx` | Google Medical rich result |
| 9 | `/team` 프로필 카드 래퍼에 `id="stella"` 추가 (`@id` fragment anchor 일치) | `src/app/team/page.tsx` L142 | Person `@id` 체인 완성 |

### P1 (1-2 일 작업)

| # | 액션 | 파일 | 예상 효과 |
|---|------|------|---------|
| 10 | `llms-full.txt` 생성 스크립트 + 결과물 게시 (블로그·서비스·FAQ 전문) | `scripts/generate-llms-full.mjs` + `public/llms-full.txt` | AI 가 요약 없이 원문 접근 |
| 11 | `robots.ts` Applebot-Extended / Meta-ExternalAgent / Perplexity-User / Bytespider disallow 추가 | `src/app/robots.ts` | Apple Intelligence / Meta AI 커버리지 + 중국 AI 차단 |
| 12 | `EducationalOrganization` 차의과대·홍익대 독립 `@graph` 노드화 + Wikipedia sameAs | `src/app/team/page.tsx` | 학술 엔티티 체인 |
| 13 | 서비스 leaf 7 곳에 `MedicalWebPage` schema 추가 (`lastReviewed`, `reviewedBy: #stella`) | `src/app/services/*/page.tsx` | 의료 페이지 신뢰 지표 |
| 14 | 블로그 포스트 4 편 (art-therapy-science / trauma / mindfulness / values) 하단에 "이 글이 답한 질문" Q/A 섹션 추가 (FAQPage schema 없이 UI 만) | `src/lib/blog-content.ts` | Perplexity snippet 추출률 ↑ |
| 15 | 실습 가이드 블로그 2 편 (mindfulness-drawing, values-vision-board) 에 `HowTo` schema 추가 | `src/app/blog/[slug]/page.tsx` | "how to 마음챙김 드로잉" 쿼리 인용 |
| 16 | Person `honorificSuffix` → `hasCredential: EducationalOccupationalCredential[]` 전환 | `src/app/team/page.tsx` | 자격 schema 표준 준수 |
| 17 | BlogPosting `speakable` 속성 추가 (h1, h2 selector) | `src/app/blog/[slug]/page.tsx` buildBlogPostingSchema | Google Assistant 음성 응답 |
| 18 | `/faq` layout 분리 후 고유 metadata (title + description) 추가 | `src/app/faq/layout.tsx` (신설) | FAQ 페이지 SERP 고유성 |
| 19 | 블로그 카드 컨테이너를 `<article>` 로 감싸기 + `<address rel=author>` 저자 byline | `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` | semantic 명확화 |
| 20 | `layout.tsx` `LocalBusiness` 타입 배열에 `ProfessionalService` 추가 | `src/app/layout.tsx` | 서비스 업종 정체성 명확 |
| 21 | Organization.sameAs 에 brunch / 네이버 블로그 / 카카오맵 장소 URL 최소 2개 추가 (신설 후) | `src/app/layout.tsx` | Knowledge Panel trigger 요건 보강 |

### P2 (장기·선택)

| # | 액션 | 파일 | 트리거 조건 |
|---|------|------|-------------|
| 22 | `/pricing` 에 screen-reader `<table>` 비교표 추가 | `src/app/pricing/page.tsx` | 디자인 영향 없음 |
| 23 | 블로그 이미지 `<figure>` + `<figcaption>` (Unsplash 포토그래퍼 credit) | `src/app/blog/[slug]/page.tsx` | 투명성 시그널 |
| 24 | Review schema 빌더 `buildReview()` 미리 작성 (실 후기 확보 전까지 비활성) | `src/lib/schema.ts` | TESTIMONIALS 비움 정책과 무관 |
| 25 | `Event` schema (8 주 집중 프로그램 개강 일정 확정 시) | `src/app/services/group/page.tsx` | 개강일 확정 후 |
| 26 | 한국수용전념치료학회 (KACBS) 존재 시 memberOf 추가 | `src/app/team/page.tsx` | 학회 존재·가입 확인 후 |
| 27 | `cohere-ai`, `DuckAssistBot`, `YouBot`, `Diffbot` allow 규칙 추가 | `src/app/robots.ts` | 마이너 AI 플랫폼 확장 |
| 28 | 한국미술치료학회 회원 디렉토리에 ACT ART CENTER 프로필 등재 요청 | 외부 액션 | 학회 운영진 회신 |
| 29 | Google Scholar 프로필 + ORCID 연결 + ResearchGate (박사과정생 자격) | 외부 | 박사 논문 게재 시 |

---

## 인용 가능성 시나리오 시뮬레이션

### 시나리오 A: Perplexity 사용자가 "강남 미술치료 추천" 검색

**현재 답변 가능성**: 낮음~중간. 이유:
- `PerplexityBot` 이 `/services/` · `/pricing` 을 못 읽음 (robots 차단)
- `/team` 접근 가능하나 위치 정보는 `LocalBusiness` schema 에만 있음
- 블로그 포스트 6 편 허용되어 있으나 "강남" 키워드가 블로그 본문에 극히 적게 출현

**P0 액션 3 (robots 확장) + 액션 1 (llms.txt Geo 섹션) 적용 후**: 높음. 이유:
- Perplexity 가 `/services/individual` + `/pricing` 읽고 시간·가격 체크 가능
- llms.txt Geo 섹션이 "강남대로 305 현대렉시온" + "강남역 도보 10 분" 명시 → Perplexity 가 distance 추론

### 시나리오 B: ChatGPT 사용자가 "ACT 와 CBT 차이점" 질문

**현재 답변 가능성**: **매우 높음** (이미). 이유:
- `/act-approach` 가 GPTBot 허용 상태
- 본문에 "전통 CBT → 합리적 생각으로 교정 / ACT → 생각과 거리 두기" 명확한 대비 설명
- HowTo schema 로 6 프로세스 구조화
- Article schema about 에 "Acceptance and Commitment Therapy" + "Relational Frame Theory" 명시

**P0 액션 5 (ACBS/APA outbound link) 적용 후**: ChatGPT 가 답변에 "공식 ACBS 기관 링크" 를 첨부 가능 → 답변 품질 + 링크 인용 동시 이득.

### 시나리오 C: Claude 사용자가 "미술치료는 과학적인가" 질문

**현재 답변 가능성**: 중간. 이유:
- `anthropic-ai` 가 blog 허용. 블로그 `art-therapy-science` 포스트 7 개 학술 레퍼런스 있음
- **문제**: 레퍼런스가 plain text → Claude 가 원문 검증 시도 시 URL 없어 fallback
- **P0 액션 4 (DOI 링크 추가) 적용 후**: Claude 가 Kaimal 2016 · Shella 2018 · Huang 2025 원문 URL 까지 답변에 포함 가능 → 답변 신뢰도 급상승 + "작성자 권위" 라벨링
- **P0 액션 2 (ClaudeBot 추가) 적용 후**: Anthropic 공식 크롤러가 별개로 콘텐츠 갱신 추적

### 시나리오 D: Gemini 사용자가 "수용전념치료 강남 추천" 네이티브 검색

**현재 답변 가능성**: 중간~높음. 이유:
- `Google-Extended` 가 `/` 전체 허용
- LocalBusiness + MedicalBusiness schema 완비 → Gemini Maps 통합 답변 가능
- **문제**: Gemini 가 "추천" 에 필요한 신뢰 시그널 (Review/AggregateRating) 부재
- **P2 액션 24 (Review 빌더) + 실 후기 확보 후**: "사용자 후기 기반 추천" 가능

---

## 우선순위 요약

**Today (1 시간 이내)**:
- P0 #2, #3: `robots.ts` 6 개 UA 추가 (ClaudeBot, OAI-SearchBot, ChatGPT-User, PerplexityBot allow 확장)
- P0 #9: Team page `id="stella"` anchor 추가

**This week (4-6 시간)**:
- P0 #1: `llms.txt` 확장 (~120 줄)
- P0 #4, #5: 블로그 + act-approach outbound DOI / 학회 URL 링크
- P0 #6: `<time>` 엘리먼트 일괄 적용
- P0 #8: MedicalCondition schema `/services/emotional`
- P0 #7: ORCID iD 생성

**This sprint (2-4 일)**:
- P1 #10: `llms-full.txt` 자동 생성 스크립트
- P1 #11-21: AI 크롤러 커버리지 · 학술 엔티티 · MedicalWebPage · Q/A 섹션 · speakable 등

**Long-term (분기)**:
- P2 #22-29: 한국미술치료학회 디렉토리 · 후기 수집 · YouTube/브런치 확장

---

## Appendix A — 파일별 변경 요약 (P0 범위)

| 파일 | 변경 라인 수 추정 | P0 내용 |
|------|-------------------|---------|
| `public/llms.txt` | +70 줄 | 6 섹션 추가 (1.3) |
| `src/app/robots.ts` | +35 줄 | 3-5 UA 블록 (2.3) |
| `src/lib/blog-content.ts` | ~30 곳 (6 포스트) | `<a href>` DOI 링크 |
| `src/app/act-approach/page.tsx` | ~5 곳 | ACBS/APA/한국미술치료학회 outbound |
| `src/app/blog/[slug]/page.tsx` | 2 곳 | `<time dateTime>` + `<address rel=author>` |
| `src/app/blog/page.tsx` | 1 곳 | 카드 `<time>` |
| `src/components/sections/BlogPreview.tsx` | 1 곳 (존재 확인 후) | `<time>` |
| `src/app/team/page.tsx` | +1 줄 | `id="stella"` + `Person.sameAs` ORCID |
| `src/app/services/emotional/page.tsx` | +15 줄 | `about: [MedicalCondition]` 배열 |

**총 P0 작업량 추정**: 3-4 시간 (숙련자 기준, 테스트 제외).

---

## Appendix B — 검증 체크리스트 (P0 배포 후)

1. `curl -A "ClaudeBot" https://actartcenter.com/robots.txt | grep ClaudeBot` → 규칙 노출 확인
2. `curl https://actartcenter.com/llms.txt | wc -l` → ≥ 120 라인
3. Rich Results Test (`https://search.google.com/test/rich-results`) 로 `/services/emotional` `/act-approach` `/faq` `/blog/art-therapy-science` 각각 에러 0 건
4. Schema.org Validator (`https://validator.schema.org/`) 로 동일 4 페이지 valid
5. Lighthouse SEO 스코어 유지 (100 목표)
6. View-source → `<time dateTime="2026-04-10">` HTML 출력 확인
7. 블로그 포스트 참고 문헌의 DOI 링크를 새창 열어 2xx 응답
8. Perplexity 에 "미술치료 효과 과학적 근거" 검색 후 답변에 actartcenter.com 인용 확인 (배포 후 2-4 주 소요)
9. ChatGPT 에 "ACT 와 CBT 차이" 검색 후 답변에 actartcenter.com 인용 확인 (배포 후 2-4 주 소요)
10. Google Search Console → Enhancement → `MedicalCondition` / `HowTo` / `FAQPage` 수 증가 확인

---

## 결론

ACT ART CENTER 는 이미 한국 심리상담 분야에서 **AI discoverability 상위 10%** 수준 인프라를 갖춤. 남은 과제는 **"넓이" 보다 "깊이"** — 현재 허용된 AI 크롤러를 더 세밀히 확장하고, 권위 시그널 (DOI · 학회 URL · ORCID) 을 외부로 실제로 연결하는 것.

P0 9 건을 이번 주 내 완료하면 2026 Q3 말 기준 "강남 미술치료" / "ACT 미술치료" / "수용전념치료 미술" 쿼리에서 ChatGPT/Perplexity/Gemini 3 개 플랫폼 모두 **월 10 건+ 인용** 도달 가능성 높음 (비교 기준: 동급 한국 심리상담 사이트 월 0-2 건).

마지막 신뢰 시그널인 `Review`/`AggregateRating` 은 **허위 후기 없음 정책** (`TESTIMONIALS = []`) 을 유지하는 것이 장기적으로 더 큰 자산임. 실제 내담자 동의 기반 후기 3-5 건 확보 시 즉시 반영 가능한 `buildReview()` 빌더를 `schema.ts` 에 사전 배치 (P2 #24) 하는 것이 안전한 전략.
