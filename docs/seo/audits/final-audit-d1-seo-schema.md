# Final Audit D1 — SEO & JSON-LD Schema.org

> Date: 2026-04-19
> Scope: `site/src/app/**/page.tsx` + `layout.tsx` + `sitemap.ts` + `robots.ts`
> Auditor role: independent reviewer (read-only, actual-file evidence)
> Build target: Next.js (App Router)

---

## Executive Summary

**Overall Score: 94 / 100**

ACT ART CENTER의 최종 SEO + JSON-LD 구현은 프로덕션 수준의 완성도를 보입니다.
전역 Organization / LocalBusiness+MedicalBusiness / WebSite @graph 가 `layout.tsx` 단일
소스로 주입되고, 모든 19개 페이지가 페이지별 metadata (title 템플릿, description, canonical,
OG 1200x630, twitter summary_large_image, keywords)를 일관되게 override 합니다. JSON-LD
`@graph` 도 페이지 단위로 Breadcrumb + 주 엔티티(Article / Person / MedicalTherapy /
Course / Service / FAQPage / ContactPage / WebPage / Blog / BlogPosting / OfferCatalog)를
@id 교차 참조로 이어 놓아 Google Rich Results 기준을 충족합니다.

블로커 없음. P0 Critical 0건, P1 Major 3건, P2 Minor 5건.

주요 상실 점수:
- layout `priceRange: "₩₩"` — Schema.org 권장 형식은 `"$"~"$$$$"` 또는 금액 범위 표기 (–3)
- `priceSpecification` 일부 Offer (group/child/protective/pricing catalog 내 4개)는
  `PriceSpecification` 대신 `UnitPriceSpecification`을 사용해야 단가·시간 메타가 풍부해짐 (–2)
- constants.ts `CONTACT.phone = "010-####-####"` placeholder — UI에 노출되지는 않지만
  향후 LocalBusiness telephone 필드를 비워 두는 사유를 문서화 권장 (–1)

---

## 페이지별 PASS / FAIL 테이블

| # | Route | Metadata | H1 (unique) | OG 1200x630 | Canonical | JSON-LD @graph | Status |
|---|-------|----------|-------------|-------------|-----------|----------------|--------|
| 1 | `/` (layout+page) | PASS | PASS (`HeroSection` h1) | PASS `/og/default.png` | PASS `SITE_URL` | Organization + LocalBusiness + WebSite (layout) | PASS |
| 2 | `/act-approach` | PASS | PASS (`PageHero`) | PASS `/og/act-approach.png` | PASS `/act-approach` | Article + BreadcrumbList + HowTo | PASS |
| 3 | `/services` | PASS | PASS (`PageHero`) | PASS `/og/services.png` | PASS `/services` | BreadcrumbList + ItemList(7) | PASS |
| 4 | `/services/individual` | PASS | PASS (inline) | PASS `/og/services-individual.png` | PASS `/services/individual` | BreadcrumbList + MedicalTherapy(+Offer/UnitPriceSpec) | PASS |
| 5 | `/services/group` | PASS | PASS (inline) | PASS `/og/services-group.png` | PASS `/services/group` | BreadcrumbList + Course(+CourseInstance) + Service | PASS* |
| 6 | `/services/child` | PASS | PASS (inline) | PASS `/og/services-child.png` | PASS `/services/child` | BreadcrumbList + MedicalTherapy(+PeopleAudience) | PASS* |
| 7 | `/services/online` | PASS | PASS (inline) | PASS `/og/services-online.png` | PASS `/services/online` | BreadcrumbList + MedicalTherapy(+availableChannel) | PASS |
| 8 | `/services/protective` | PASS | PASS (inline) | PASS `/og/services-protective.png` | PASS `/services/protective` | BreadcrumbList + MedicalTherapy + Service(partnership) | PASS* |
| 9 | `/services/emotional` | PASS | PASS (inline) | PASS `/og/services-emotional.png` | PASS `/services/emotional` | BreadcrumbList + MedicalTherapy(+UnitPriceSpec) | PASS |
| 10 | `/services/depth` | PASS | PASS (inline) | PASS `/og/services-depth.png` | PASS `/services/depth` | BreadcrumbList + MedicalTherapy + Service(supervision) + Service(research) | PASS |
| 11 | `/team` | PASS | PASS (`PageHero`) | PASS `/og/team.png` | PASS `/team` | BreadcrumbList + Person (`#stella`, @id matches Org founder) | PASS |
| 12 | `/pricing` | PASS | PASS (`PageHero`) | PASS `/og/pricing.png` | PASS `/pricing` | BreadcrumbList + OfferCatalog(8 offers) | PASS* |
| 13 | `/faq` (layout+page) | PASS | PASS (inline) | PASS `/og/faq.png` | PASS `/faq` | BreadcrumbList + FAQPage | PASS |
| 14 | `/blog` (layout+page) | PASS | PASS (inline) | PASS `/og/blog.png` | PASS `/blog` | BreadcrumbList + Blog(+blogPost\[]) | PASS |
| 15 | `/blog/[slug]` | PASS (generateMetadata) | PASS (dyn) | PASS (post.image, declared 1200x630) | PASS (per-slug) | BreadcrumbList(4-level) + BlogPosting | PASS |
| 16 | `/booking` (layout+page) | PASS | PASS (inline) | PASS `/og/booking.png` | PASS `/booking` | BreadcrumbList + ContactPage + ReserveAction | PASS |
| 17 | `/contact` | PASS | PASS (`PageHero`) | PASS `/og/contact.png` | PASS `/contact` | BreadcrumbList + LocalBusiness\|MedicalBusiness (contact view) | PASS |
| 18 | `/gallery` | PASS | PASS (inline) | PASS `/og/gallery.png` | PASS `/gallery` | BreadcrumbList + WebPage | PASS |
| 19 | `/privacy` | PASS | PASS (inline) | PASS `/og/default.png` (shared) | PASS `/privacy` | BreadcrumbList + WebPage(+datePublished/dateModified) | PASS |

\* = PASS with P1 recommendation (see below).

---

## Critical (P0) Blockers

**NONE.**

이전 Wave 4 D2 감사에서 지적된 C-1 (홈 페이지 `@graph` 이중 주입) 은 `/page.tsx` 주석
(L12-21)과 실제 코드로 해소 확인됨. 전역 @graph 는 `layout.tsx` 에만 존재하며
`HomePage` 는 UI 섹션만 렌더합니다. FAQPage JSON-LD 는 `/faq` 한 곳에서만 emit 되며
`/act-approach` 의 Q&A 섹션은 의도적으로 JSON-LD 를 발행하지 않음을 코드 주석 L54-57 이
명시합니다.

---

## Major (P1) Issues

### P1-1. `priceRange` 형식 — Schema.org 비권장 표기
**File:** `src/app/layout.tsx` L112
**Current:** `priceRange: "₩₩"`
**Issue:** Schema.org `LocalBusiness.priceRange` 는 공식 예시가 `"$"`~`"$$$$"` 또는 금액
범위 (`"₩80,000-₩120,000"`) 입니다. `₩₩` 는 Google 이 파싱은 하지만 Rich Results Test 가
warning 을 띄울 가능성이 있음.
**Fix (recommended):**
```ts
priceRange: "₩₩ (80,000원~120,000원 범위)"
// 또는
priceRange: "$$"
```

### P1-2. Offer `priceSpecification` 타입 일부 비정합
**Files:**
- `src/app/services/group/page.tsx` L73-78 (Course.offers → `"@type": "Offer"` 에
  `priceSpecification` 없음, `price: "560000"` + `description` 만)
- `src/app/services/group/page.tsx` L88-92 (Service.offers → 동일)
- `src/app/services/child/page.tsx` L76-80 (MedicalTherapy.offers → 동일)
- `src/app/services/protective/page.tsx` L79-85 (MedicalTherapy.offers → `price` 필드
  없이 `description` + `availability` + `url` 만)

**Issue:** `/services/individual`, `/services/emotional`, `/services/depth` 는
`priceSpecification: UnitPriceSpecification` + `referenceQuantity` 을 정확히 기술하는
반면, 위 4개 Offer 는 `price` 필드만 단독 존재하거나 아예 없어서 Google Merchant/Rich
Results 기준에서 값이 덜 풍부합니다. 일관성 확보를 위해 동일 패턴 권장.

**Fix (example for `services/group`):**
```ts
offers: {
  "@type": "Offer",
  price: "560000",
  priceCurrency: "KRW",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: "560000",
    priceCurrency: "KRW",
    referenceQuantity: { "@type": "QuantitativeValue", value: 8, unitText: "회기" },
    description: "8회기 패키지 560,000~800,000원",
  },
},
```

### P1-3. `/pricing` OfferCatalog 내 `PriceSpecification` → `UnitPriceSpecification` 권장
**File:** `src/app/pricing/page.tsx` L66-146
**Issue:** 8개 Offer 모두 `priceSpecification: { "@type": "PriceSpecification", minPrice,
maxPrice, priceCurrency }` 사용. Schema.org 는 `PriceSpecification` 추상 상위이며
`UnitPriceSpecification` 사용 시 `referenceQuantity` (50분, 90분, 8회 등) 를 함께 기술
가능 — search-engine 파싱 품질 향상.

**Fix (example):**
```ts
priceSpecification: {
  "@type": "UnitPriceSpecification",
  minPrice: "80000",
  maxPrice: "120000",
  priceCurrency: "KRW",
  referenceQuantity: { "@type": "QuantitativeValue", value: 50, unitText: "MIN" },
},
```

---

## Minor (P2) Improvements

### P2-1. `/privacy` description 한국어 기준 초과
**File:** `src/app/privacy/page.tsx` L9-10
**Current length:** 약 148자 (한글 공백 포함). 160자 제한 내이나 Google SERP 는 한글 70-80자
정도만 노출함. 핵심 키워드 앞당기기 권장.

### P2-2. `/gallery` metadata 는 준비 중 상태 반영하나 `noindex` 미지정
**File:** `src/app/gallery/page.tsx` L9-40
**Issue:** 페이지 본문 L44 `const galleryImages = []` (빈 배열). 갤러리가 비어 있으면서도
layout 의 기본 `robots: index, follow` 가 상속됨. Thin-content penalty 리스크 소폭 존재.
**Recommendation:** 콘텐츠 수급 전까지 `export const metadata = { robots: { index: false,
follow: true } }` 추가하거나, sitemap priority 0.4 유지 + 최소한의 "준비 중" 본문 300자
이상 작성 (현재 준비중 문구는 충분히 있어 thin 위험은 낮음 — 선택 사항).

### P2-3. `/blog/[slug]` `dateModified` === `datePublished`
**File:** `src/app/blog/[slug]/page.tsx` L102-103
**Issue:** `datePublished: isoDate`, `dateModified: isoDate` 두 값 모두 `post.date` 에서
파싱한 동일 ISO. 글 수정 이력을 추적하려면 `BLOG_POSTS` 데이터에 `updatedAt` (Korean date
string 또는 ISO) 필드 추가 권장.

### P2-4. layout.tsx `openingHoursSpecification` 요일 범위는 있으나 시간 미지정
**File:** `src/app/layout.tsx` L132-136
**Current:**
```ts
openingHoursSpecification: {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", ...],
  description: "사전 예약제 — 예약 시간 확정",
}
```
**Issue:** `opens` / `closes` 시간 필드가 없어 Google Business Profile 자동 매칭이 제한적.
예약제라는 상황을 고려하면 `opens: "10:00"` + `closes: "19:00"` 정도의 공칭 시간을 기재하는
편이 안전 (description 은 그대로 유지).

### P2-5. `servicePhone` 필드에 전화번호 대신 텍스트 기술
**File:** `src/app/services/online/page.tsx` L77
**Current:** `servicePhone: "온라인 Zoom 미팅"`
**Issue:** `ServiceChannel.servicePhone` 은 `ContactPoint` 또는 `Text (전화번호)` 타입이
기대됨. 일부 validator 가 경고할 수 있음. 제거하거나 실제 전화번호 확보 시 채우는 것이 안전.
**Fix:** 해당 필드 제거 또는 `serviceType: "Video Conferencing"` 같은 의미 있는 값으로
치환.

---

## 전역 감사 결과 (layout + sitemap + robots)

### `layout.tsx` — PASS (with P1-1, P2-4 above)
- `metadataBase` 설정 (`new URL(SITE_URL)`) — PASS
- `title.default` + `title.template` 패턴 — PASS (페이지별 title 이 `| ACT ART CENTER`
  suffix 자동 추가)
- `keywords` 12개 배열 — PASS
- `authors`, `creator`, `publisher` — PASS
- `openGraph.images[0]` 1200x630 alt 포함 — PASS
- `twitter.card = summary_large_image` — PASS
- `robots: index/follow/googleBot(max-preview/snippet/image)` — PASS
- `alternates.canonical: SITE_URL` — PASS
- `verification` conditional hook (env 기반, 빈 값이면 meta 생략) — PASS (excellent
  pattern)
- `<JsonLd data={globalGraphSchema} />` in `<head>` — PASS
- `@graph` 3노드: Organization + LocalBusiness|MedicalBusiness + WebSite (w/ SearchAction)
  — PASS
- `@id` 교차 참조 (Organization `/#organization` ← LocalBusiness (same name), WebSite
  `publisher` → Organization, Organization `founder` → `/team#stella`) — PASS

### `sitemap.ts` — PASS
- 하드코딩 `PAGE_LAST_MODIFIED` 맵 (18개 경로) — PASS
- `DEFAULT_LAST_MODIFIED = "2026-04-19"` — PASS
- priority 차별화 (홈 1.0 / hubs 0.9 / service leaves 0.7-0.8 / blog 0.6-0.8 /
  gallery 0.4 / privacy 0.3) — PASS
- `changeFrequency` 차별화 (홈 weekly / blog daily / services/pages monthly / privacy
  yearly) — PASS
- 블로그 포스트 자동 포함 (`BLOG_POSTS.map`) — PASS
- Korean date parser (`isoFromKoreanDate`) 로 blog post lastModified ISO 변환 — PASS

### `robots.ts` — PASS
- `userAgent: *` 기본 allow "/" + disallow `/api/`, `/admin` — PASS
- `GPTBot` 세밀한 allow/disallow (blog, services 등 학습 허용, api/booking 차단) — PASS
- `Google-Extended` 전체 allow — PASS (Gemini 학습 권장)
- `anthropic-ai`, `PerplexityBot` 명시적 정책 — PASS (LLM-readiness excellent)
- `CCBot` 전체 disallow — PASS (Common Crawl 차단, 학습 데이터 통제)
- `sitemap: "https://actartcenter.com/sitemap.xml"` — PASS (absolute URL)
- `host: "https://actartcenter.com"` — PASS

---

## JSON-LD @graph 교차 참조 검증

| Reference | Source | Target @id | Status |
|-----------|--------|------------|--------|
| Organization.founder | layout L101 | `/team#stella` | Target exists (team L63) — PASS |
| LocalBusiness name | layout L107 | `SITE_NAME` | PASS |
| WebSite.publisher | layout L144 | `/#organization` | Target exists (layout L88) — PASS |
| Article.author | act-approach L73 | `/team#stella` | PASS |
| Article.publisher | act-approach L74 | `/#organization` | PASS |
| MedicalTherapy.provider (6 leaves) | services/* | `/#organization` | PASS (all 6) |
| Course.hasCourseInstance.location | services/group L71 | `/#localbusiness` | PASS |
| Person.worksFor | team L71 | `/#organization` | PASS |
| OfferCatalog Offer.itemOffered | pricing L72,83,94,105 | `/services/*#service` + `/services/group#course-8weeks` | All 4 targets exist in respective service pages — PASS |
| BlogPosting.author | blog/[slug] L109 | `/team#stella` | PASS |
| Blog.publisher | blog/layout L64 | `/#organization` | PASS |
| FAQPage.mainEntity | faq L30-34 | Question/Answer inline | PASS (16+ Q/A from FAQ_ITEMS) |
| ContactPage.isPartOf | booking/layout L59 | `/#website` | PASS |
| WebPage.isPartOf (privacy) | privacy L57 | `/#website` | PASS |

**@id 중복·누락 없음. 교차 참조 완전성 100%.**

---

## Top 10 Action Items (우선순위 순)

1. **[P1-2] `services/group` Course.offers + Service.offers → `priceSpecification: UnitPriceSpecification` 추가** (references 포함하면 5분 작업).
2. **[P1-2] `services/child` Offer 에 `priceSpecification: UnitPriceSpecification` + `referenceQuantity(50 MIN)` 추가.**
3. **[P1-2] `services/protective` Offer 에 `price` + `priceSpecification` 추가 (현재 `description` + `availability` 만 존재).**
4. **[P1-3] `/pricing` OfferCatalog 8개 Offer 모두 `PriceSpecification` → `UnitPriceSpecification` 로 교체** (50/90/회기 등 referenceQuantity 첨부).
5. **[P1-1] `layout.tsx` `priceRange: "₩₩"` → `priceRange: "$$"` 또는 `"80000-1500000 KRW"`** (Schema.org 호환성 개선).
6. **[P2-4] `layout.tsx` `openingHoursSpecification` 에 `opens: "10:00"` + `closes: "19:00"`** (또는 확정 시간) 추가. description 은 유지.
7. **[P2-5] `services/online` `availableChannel.servicePhone` 필드 제거** (의미상 전화 아님).
8. **[P2-2] `/gallery` 콘텐츠 수급 전까지 `robots.index: false` 고려** — 또는 TODO 주석 유지.
9. **[P2-3] `BLOG_POSTS` 데이터에 `updatedAt` 필드 추가 + `/blog/[slug]` JSON-LD `dateModified` 분기** (미래 포스트 업데이트 SEO 이점).
10. **[Docs-only] `constants.ts` L17 `CONTACT.phone: "010-####-####"` 가 placeholder 임을 `// TODO:` 주석으로 표기** (LocalBusiness.telephone 비워 둔 사유는 이미 layout L127 에 있으니, constants 쪽도 일치).

---

## Appendix A — Metadata 길이 샘플 측정 (한국어 공백 포함)

| Page | title len | description len | Verdict |
|------|-----------|-----------------|---------|
| `/` (layout default) | 33 | 155 | PASS |
| `/act-approach` | 30 | 130 | PASS |
| `/services` | 33 | 101 (짧은 편) | PASS (권장 120-160 미달, +CTA 권장) |
| `/services/individual` | 31 | 138 | PASS |
| `/services/group` | 35 | 148 | PASS |
| `/services/child` | 28 | 158 | PASS |
| `/services/online` | 30 | 153 | PASS |
| `/services/protective` | 37 | 180 (소폭 초과) | WARN — 문장 정리 권장 |
| `/services/emotional` | 29 | 180 (소폭 초과) | WARN |
| `/services/depth` | 30 | 162 (소폭 초과) | WARN |
| `/team` | 27 | 110 (짧은 편) | PASS |
| `/pricing` | 27 | 148 | PASS |
| `/faq` (layout) | 28 | 116 | PASS |
| `/blog` (layout) | 23 | 119 | PASS |
| `/blog/[slug]` | dynamic (post.title) | dynamic (post.excerpt) | PASS (data-driven) |
| `/booking` (layout) | 19 | 116 | PASS |
| `/contact` | 26 | 86 (짧음) | WARN — 140자 이상 권장 |
| `/gallery` | 16 | 99 | PASS |
| `/privacy` | 23 | 148 | PASS |

`/services/protective`, `/services/emotional`, `/services/depth` 는 SERP snippet 이
절단될 수 있으나 Google 은 160자 초과 시 자동 재작성. 치명적 이슈는 아님.

---

## Appendix B — H1 Uniqueness 확인

총 19개 페이지 전수 조사 결과 `<h1>` 이 **정확히 1개씩** 등록됨을 `grep -rn "<h1"` + 각
페이지 Read 검증으로 확인. 홈은 `HeroSection.tsx` L22-26 에 1개. 모든 서브페이지는
`PageHero` (5곳) 또는 inline `<h1>` (13곳) 으로 배타적 1개.

Primary keyword 자연 포함 확인:
- `/act-approach` → "수용전념치료(ACT)" ✓
- `/services` → "ACT 미술심리치료 서비스" ✓
- `/services/individual` → "성인 1:1 개인 미술치료" ✓
- `/team` → "ACT 미술심리치료사 프로필" ✓
- `/pricing` → "ACT 미술치료 비용" ✓
- `/faq` → "ACT 미술치료 자주 묻는 질문" ✓

---

## Appendix C — Date Format ISO 8601 검증

BlogPosting `datePublished` / `dateModified`:
- `/blog/[slug]` → `isoFromKoreanDate(post.date)` = `YYYY-MM-DD` 포맷 (L15-20) — PASS
- `/blog` Blog.blogPost[] → 동일 parser — PASS
- `/privacy` `datePublished: "2026-04-15"` + `dateModified: "2026-04-15"` — PASS
- `/act-approach` Article `datePublished: "2026-04-15"` + `dateModified: "2026-04-19"` —
  PASS

모든 날짜 `YYYY-MM-DD` 형식 준수. 시간 / 타임존 필드는 ACT 센터 특성상 불필요.

---

## Conclusion

이 레포지토리의 SEO + JSON-LD 구현은 **프로덕션 배포 가능한 성숙도**에 있습니다.
P0 블로커 없음, P1 3건은 Offer 타입 일관성 관련 (기능 영향 없음, rich-results 풍부도만
개선), P2 5건은 cosmetic 또는 장기 콘텐츠 성장 관련입니다.

**Recommended next action:**
- P1 3건은 1회 배치 커밋 (10-15분 작업) — 전 Offer 타입 통일 PR
- P2 5건은 별도 에픽으로 분리 (콘텐츠 수급·운영시간 확정 등 외부 의사결정 필요)

Korvia Web Playbook (`reference_korvia_web_playbook.md`) 의 SEO + Schema 체크리스트
기준으로 사이트는 round 1 완료 수준에 도달했습니다. 향후 round 2 는 Core Web Vitals
(CLS/LCP 측정), 이미지 최적화 (Cloudflare R2 1y 캐시 전환 등), 다국어 `hreflang`
(영문 버전 출시 시) 를 권장합니다.
