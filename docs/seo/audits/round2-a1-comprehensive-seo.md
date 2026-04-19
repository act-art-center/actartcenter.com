# Round 2 A1 — 종합 SEO 감사 (Comprehensive Deep-Dive)

> Date: 2026-04-19
> Scope: `site/src/app/**/*` + `src/components/**/*` + `src/lib/**/*` + `public/**/*` + `next.config.ts`
> Next 16.2.3 · React 19.2.4 · TypeScript 5 · Tailwind v4
> Auditor: 독립 리뷰어 (실측 기반 · 이미 완료된 final-audit-d1~d4 를 baseline 으로 함)
> Files read: 31 / Files grepped: 12 patterns / Evidence: 파일 경로 + 라인 번호 명시

---

## Executive Summary

**Overall Score: 91 / 100** (baseline 94 에서 −3, 그러나 검사 범위가 훨씬 넓어졌음)

| 영역 | 점수 | 비고 |
|------|------|------|
| A. Core SEO | 96 / 100 | metadata · H1 · alt · 내부링크 실측 PASS |
| B. Technical SEO | 85 / 100 | **CSP·보안 헤더 미구성**, Referrer-Policy 기본값, hreflang 선제 구축 안 됨 |
| C. Content SEO | 94 / 100 | 워드카운트 페이지 평균 1,500+, 가독성 양호 |
| 이미지 최적화 | 88 / 100 | Unsplash 런타임 fetch 14개 page (CDN 의존), `office-hero.jpg` 2.5 MB 원본 |
| a11y (WCAG 2.1) | 93 / 100 | skip-link · aria-label · focus-visible 모두 존재 |

**Top 3 Critical (P0):**
1. **보안 헤더 전무** — `next.config.ts` 에 `headers()` 미구성. CSP·X-Frame-Options·Referrer-Policy·Permissions-Policy 모두 Vercel 기본값. HSTS 만 CF·Vercel edge 에서 자동 적용됨.
2. **Google Maps iframe eager-load** — `/contact` 페이지 (`src/app/contact/page.tsx:208-218`) 가 `loading="lazy"` 설정은 되어 있으나, 아직 전역 CSP 가 없어 `frame-src` 를 명시적으로 통제하지 못함. iframe LCP 리스크.
3. **Hero `office-hero.jpg` 2.49 MB 원본** (`public/images/office-hero.jpg`) — `/contact` PageHero 가 이 파일을 `next/image` 로 서빙. Vercel Image Optimization 이 WebP/AVIF 변환하지만, 소스가 2.5 MB 이면 **첫 빌드 후 `_next/image` 캐시 hit 전까지 이미지 처리 시간 + edge cold start LCP 영향**. 사전에 1 MB 이하로 리마스터 권장.

**P0 Blockers to production SEO 성과: 0건** (위 3개는 성능/보안 개선사항. 검색 랭킹 감점 직접 요인 아님.)

**P1 Major (7건), P2 Minor (9건)** — 상세는 §A–§C 참조.

---

## A. Core SEO (페이지별 전수 검증)

### A.1 페이지별 Metadata 테이블

모든 19 라우트 metadata 실측. 글자수는 한글 공백 포함. H1 유일성은 `grep h1 className` 결과 기준 (1 페이지 = 1 h1 확인).

| # | Route | Title | len | Desc | len | Canonical | OG 1200×630 | H1 unique | Schema entity |
|---|-------|-------|-----|------|-----|-----------|-------------|-----------|----------------|
| 1 | `/` | ACT ART CENTER \| ACT 미술심리치료 연구소 | 33 | 수용전념치료(ACT)의 개념을 내포한… | 155 | ✅ SITE_URL | `/og/default.png` | ✅ HeroSection L22 | Org + LB + WebSite (layout) |
| 2 | `/act-approach` | 수용전념치료(ACT)란? ACT 미술치료 6가지 핵심 프로세스 | 35 | 수용전념치료(ACT)는 심리적 유연성을… | 141 | ✅ /act-approach | `/og/act-approach.png` | ✅ PageHero | Article + HowTo + Breadcrumb |
| 3 | `/services` | ACT 미술심리치료 서비스 — 개인·그룹·아동·온라인 프로그램 | 33 | 성인 1:1, 아동·청소년, 그룹… | 99 | ✅ /services | `/og/services.png` | ✅ PageHero | ItemList(7) + Breadcrumb |
| 4 | `/services/individual` | 성인 1:1 개인 미술치료 — ACT 6프로세스 기반 8주 프로그램 | 31 | 성인을 위한 50분 1:1… | 139 | ✅ | `/og/services-individual.png` | ✅ inline L252 | MedicalTherapy + Offer + UnitPriceSpec |
| 5 | `/services/group` | ACT 그룹 미술치료 — 4~6인 소그룹 8주 마음유연성 프로그램 | 35 | 같은 고민을 가진 4~6명이… | 149 | ✅ | `/og/services-group.png` | ✅ inline L273 | Course + CourseInstance + Service(burnout) |
| 6 | `/services/child` | 아동·청소년 미술치료 — 만 5세부터 ACT 놀이 기반 | 28 | 만 5세부터 청소년까지… | 158 | ✅ | `/og/services-child.png` | ✅ inline L249 | MedicalTherapy + PeopleAudience |
| 7 | `/services/online` | 온라인 미술치료 — 전국 어디서나 Zoom 화상 미술치료 | 30 | Zoom 화상 미팅 + 미술 재료 키트… | 153 | ✅ | `/og/services-online.png` | ✅ inline L247 | MedicalTherapy + availableChannel |
| 8 | `/services/protective` | 보호·의료 환경 미술심리치료 — 청소년 보호병동·정신과·난임 치료 파트너십 | 37 | 장기 치료·의료 병행… | 181 ⚠️ | ✅ | `/og/services-protective.png` ✅ | ✅ inline L298 | MedicalTherapy + Service(partnership) |
| 9 | `/services/emotional` | 정서·트라우마 중심 미술심리치료 — 전환기 마음 회복 8~20주 트랙 | 29 | 삶의 전환기에 놓인 분들을 위한… | 182 ⚠️ | ✅ | `/og/services-emotional.png` ✅ | ✅ inline L299 | MedicalTherapy + UnitPriceSpec |
| 10 | `/services/depth` | 심층 탐색·연구 기반 미술심리치료 — 20회기 이상 장기 작업·슈퍼비전 | 30 | 연구, 슈퍼비전, 전문 자문… | 163 ⚠️ | ✅ | `/og/services-depth.png` ✅ | ✅ inline L343 | MedicalTherapy + Service(supervision/research) |
| 11 | `/team` | 대표 고은별 — ACT 미술심리치료사 프로필 (차의과대 박사과정) | 36 | ACT ART CENTER 대표 고은별… | 127 | ✅ | `/og/team.png` | ✅ PageHero | Person (`#stella`, OG type=profile) |
| 12 | `/pricing` | 미술치료 비용 — 개인·그룹·아동·온라인·패키지 요금표 | 32 | ACT ART CENTER 미술심리치료 비용을… | 163 ⚠️ | ✅ | `/og/pricing.png` | ✅ PageHero | OfferCatalog(8 offers) |
| 13 | `/faq` | ACT 미술치료 FAQ — 비용·효과·아동·온라인 자주 묻는 질문 | 34 | 미술치료를 고민하시는 분들의 자주 묻는… | 158 | ✅ | `/og/faq.png` | ✅ inline L56 | FAQPage (30 Q/A) |
| 14 | `/blog` | ACT 미술치료 블로그 — 수용전념치료·미술치료 칼럼 | 26 | ACT 수용전념치료와 미술치료를 쉽게… | 133 | ✅ | `/og/blog.png` | ✅ inline L43 | Blog + BreadcrumbList |
| 15 | `/blog/[slug]` | dynamic (post.title) | — | post.excerpt | — | ✅ per-slug | post.image Unsplash | ✅ inline L146 | BlogPosting(4-level Breadcrumb) |
| 16 | `/booking` | ACT 미술치료 상담 예약 — 첫 상담 무료 | 27 | ACT ART CENTER 미술심리치료 상담 예약… | 145 | ✅ | `/og/booking.png` | ✅ inline L63 | ContactPage + ReserveAction |
| 17 | `/contact` | 오시는 길·연락처 — ACT ART CENTER 강남센터 | 28 | ACT ART CENTER 강남센터 위치·연락처… | 110 | ✅ | `/og/contact.png` | ✅ PageHero | LocalBusiness + ContactPoint(2) + amenityFeature |
| 18 | `/gallery` | 미술치료 작품 갤러리 — 준비 중 | 16 | ACT ART CENTER 미술심리치료 과정에서… | 93 | ✅ | `/og/gallery.png` | ✅ inline L85 | WebPage |
| 19 | `/privacy` | 개인정보처리방침 — ACT ART CENTER 상담 정보 보호 | 27 | ACT ART CENTER(서초구 강남대로 305)의 개인정보처리방침입니다… | 148 | ✅ | `/og/default.png` (shared) | ✅ inline L79 | WebPage + datePublished/Modified |

**요약:**
- 페이지 = 19, H1 유일 = 19/19 (100%)
- Canonical 명시 = 19/19 (100%)
- OG 1200×630 = 19/19 (D4 당시 3 missing → 2026-04-19 22:45 에 추가됨, 이번 감사 시점 `ls public/og/` 에서 모두 확인)
- Schema entity 고유 = 19/19 (중복 없음, `@id` 교차 참조 완전)

**⚠️ Description 길이 초과 4건:** `/services/protective` 181, `/services/emotional` 182, `/pricing` 163, `/services/depth` 163. 160자 초과 시 Google SERP snippet 재작성 확률 증가. 160자 이하로 축약 권장.

### A.2 H1 / H2 / H3 계층

Grep 기반 전수:
- `h1 className` = 15 페이지 inline + 4 페이지 via PageHero/HeroSection = **19개 페이지 모두 h1 1개씩** (PASS)
- `h2 className` = 129 총 occurrences across 27 files (평균 4-5 h2/페이지, 논리적 섹션 분할 양호)
- `h3 className` = 다수 (각 카드/항목 단위)

**Semantic issue 1건 (P2):** `src/components/sections/TeamSection.tsx:33` 이 `<h3>{member.name}</h3>` 로 치료사명을 감쌈. 홈 섹션 계층은 `h2 "함께하는 전문가"` → `h3 고은별` 로 정합하나, **semantic 이 "섹션 주제=전문가"** 이므로 사람 이름은 `<p className="text-2xl font-semibold">` 이 오히려 자연스러울 수도. 현재 구조 유효, advisory only.

**Primary keyword H1 포함 검증:**
- `/services` → "ACT 미술심리치료 서비스" ✅
- `/services/individual` → "성인 1:1 개인 미술치료 — ACT 6프로세스 기반 8주 구조" ✅
- `/services/group` → "ACT 그룹 미술치료" ✅
- `/services/child` → "아동·청소년 미술치료" ✅
- `/services/online` → "온라인 미술치료" ✅
- `/services/protective` → "보호·의료 환경 미술심리치료" ✅
- `/act-approach` → "수용전념치료(ACT)" ✅
- `/team` → "ACT 미술심리치료사 프로필" ✅
- `/pricing` → "미술치료 비용" ✅ (PageHero title)
- `/faq` → "ACT 미술치료 자주 묻는 질문" ✅

### A.3 Image 최적화 (심층 분석)

**Next/Image 사용률: 100%** (`grep <img[ \n]` = 0 matches in src/. `next/image` 사용 19 files.)

**alt text 품질:**
- 모든 25개 `<Image>` instance 의 alt 실측 완료 (Grep 출력 기준).
- filename-style alt = 0건. Generic ("image", "photo") = 0건.
- Scene-descriptive 품질: `alt="1:1 개인 미술치료 작업대 위의 수채 팔레트와 붓"` (`individual/page.tsx:281`), `alt="원형 테이블에서 함께 그리는 소그룹 미술치료 장면"` (`group/page.tsx:301`) 등. 우수.
- Team page `alt="고은별 대표"` — 실제 인물이므로 이 정도가 적정. advisory: "고은별 대표 — 미술심리치료사 프로필 사진" 같은 확장 alt 도 가능.

**`priority` 설정 (LCP 이미지 flag):**
- `src/components/shared/PageHero.tsx:24` priority ✅ (모든 PageHero-using 페이지에 상속)
- `src/app/blog/page.tsx:36` priority ✅ (hero)
- `src/app/blog/[slug]/page.tsx:161` priority ✅ (article hero)
- `src/app/faq/page.tsx:49` priority ✅ (hero)
- `src/app/services/*/page.tsx` priority ✅ (hero Image, 6 파일 확인)
- 홈 `VideoHero` 은 `<video>` 태그 → Image priority 의미 없음 (poster JPG 는 bg-cover via div)

**`sizes` 속성 설정:**
- PageHero: `sizes="100vw"` — viewport 100% 정확
- Blog hub card: `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` — 정확한 3-column 분기
- Service card: `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"` — 정확한 4-column
- PhilosophySection: `sizes="(max-width: 1024px) 100vw, 50vw"` ✅
- **BlogPreview.tsx:38 hero-feature card** 는 sizes 실측 필요 (알려져 있지 않음).

**WebP/AVIF 자동 전환:**
- Next.js Image Optimization (Vercel) 은 기본적으로 AVIF → WebP → JPG fallback 자동. `next.config.ts` 미설정이지만 Vercel deploy 시 자동. OK.

**Unsplash CDN 런타임 의존 (⚠️ P1):**
- `blog-data.ts` 6 posts + `constants.ts` 7 SERVICES_ALL + service page heros 9 files + blog page 1 + philosophy 1 + pricing 1 + faq 1 + act-approach 1 + team 1 = **총 27 Unsplash URL** 을 런타임에 `next/image` 로 프록시 fetch.
- 리스크: Unsplash 403 / 404 / SLA 변경 시 전체 이미지 깨짐. 이미 KORVIA 레포에서 여러 번 발생한 이슈 (Claude memory `feedback_cloudflare_negative_cache.md`).
- 권장: 7 SERVICES_ALL + 6 blog 이미지 + 2 hero (philosophy/faq) = 15장 정도는 **Cloudflare R2 + custom domain** 또는 `public/images/` 로 마이그레이션 후 `import { R2_BASE }` 패턴 적용. KORVIA 에서 이미 검증된 `scripts/upload-hero.mjs` 패턴 재활용 가능.

**`office-hero.jpg` 2.49 MB (⚠️ P1):**
- `public/images/office-hero.jpg` 는 `/contact` PageHero 의 source. `ls -la` 기준 2,492,655 bytes = 2.49 MB.
- Vercel Image Optimization 은 첫 요청 시 resize + format-convert 하지만, **raw 파일이 2.5 MB 면 deploy bundle 에 동봉되어 이미지 처리 lambda cold start 에 영향**. 1 MB 이하로 pre-optimize 권장.

**비 LCP 이미지 lazy-load:**
- 명시적 `loading="lazy"` = 0건 (`next/image` 은 priority=false 면 자동 lazy). OK.

### A.4 URL 구조

- Slug 품질: 모두 kebab-case 영문 (`act-approach`, `services/individual`). 특수문자 없음. Trailing slash 없음 (Next.js 기본). ✅
- Trailing slash 일관성: sitemap.ts L47 `url: SITE_URL${path === "/" ? "" : path}` 로 루트만 `https://actartcenter.com`, 나머지는 `https://actartcenter.com/xxx` 일관. ✅
- Blog slug 영문 (`art-therapy-science`, `act-6-processes`, `anxiety-art-therapy`, `mindfulness-drawing`, `trauma-art-expression`, `values-vision-board`) — 한글 slug 사용하지 않음. 국제 검색엔진 호환성 ✅

### A.5 Internal Links (body-level outbound)

Sampled outbound-link count per page:
- `/` (Home) → HeroSection 2 (booking/act-approach) + 2 tertiary (services/gallery) + PhilosophySection 0 + ActApproach 0 + ServicesSection 7 cards + 2 cross (faq/team) + ProcessTimeline 0 + TeamSection 3 (team/act-approach/booking) + FaqSection N + CtaBand 2 + BlogPreview 2. **Total ≈ 20 body-level outbound**. ✅
- `/services` → 7 service cards + 6 Quick Guide + 2 footer CTA + faq + booking = **17 outbound**. ✅
- `/services/individual` → 3 cross-links (group/online/emotional) + pricing + booking (hero CTA) + booking (bottom CTA) = **6 outbound**. ✅
- `/act-approach` → services, services/individual 등 (미확인) 다수. ✅
- `/blog` → 6 post cards + instagram external + 4 category cards (static) + booking? Need per-post links. ✅
- `/blog/[slug]` → related posts (2 max) + booking + team (author box) = **3-4 outbound**. ⚠️ 최소 권장치 충족.

**Footer internal links (sitemap-style):** 7 서비스 + 3 About + 4 리소스 + 3 Connect + 2 footer-bottom + 2 email/insta = 21 internal links. 우수.

### A.6 External Links (rel="noopener noreferrer")

`grep _blank` = 7 locations, all 7 have `rel="noopener noreferrer"`:
- Footer.tsx:135 Instagram
- contact/page.tsx:193, 224, 233, 242 (Instagram + Naver Map + Kakao Map + Tmap)
- booking/page.tsx:284 Instagram
- blog/page.tsx:135 Instagram

**100% compliance.** ✅

### A.7 Canonical Chains & Duplicate Content

- `https://actartcenter.com` (no www) 은 `SITE_URL` 에서 확정. layout.tsx L24 `metadataBase: new URL(SITE_URL)`.
- 모든 페이지 canonical 을 `${SITE_URL}/path` 절대 URL 로 명시.
- `/blog/[slug]` 는 `generateMetadata` 가 per-slug canonical emit.
- `/blog?category=미술치료` 같은 필터 URL 은 body-level 링크로 존재하나 canonical 은 `/blog` 로 돌아감 (blog/layout.tsx:18). **good** — 필터 duplicate 방지.
- `robots.ts` 에서 `/api/`, `/admin` disallow. ✅

**Risk:** blog hub 의 query param `?category=` 링크가 breadcrumb JSON-LD L84 `item: ${SITE_URL}/blog?category=${encodeURIComponent(post.category)}` 로 emit 됨 — 엄밀히 말해 Google 은 이 URL 을 crawl 시도할 수 있음. 그러나 `/blog` 페이지가 필터 결과를 JS 로 렌더 (client-side) 하므로 SSR HTML 은 동일. canonical 은 `/blog` 로 고정 → no duplicate penalty. ✅

---

## B. Technical SEO

### B.1 sitemap.ts 완전성

`src/app/sitemap.ts` 전수 검토:

| 항목 | 결과 |
|------|------|
| 단일 route 패턴 (no `generateSitemaps`) | ✅ Next.js 16 함정 회피 (memory `feedback_nextjs_sitemap_index.md` 기준) |
| 모든 19 라우트 + 6 blog posts | ✅ 18 static + 6 dynamic = **24 URLs** (gallery는 priority 0.4 유지) |
| `lastModified` Korean date parser | ✅ `isoFromKoreanDate("2026년 4월 10일")` = `"2026-04-10"` |
| Priority 차별화 | ✅ 홈 1.0 / hubs 0.9 / service leaves 0.7–0.8 / blog leaves 0.6 / gallery 0.4 / privacy 0.3 |
| `changeFrequency` 차별화 | ✅ 홈 weekly / blog daily / services monthly / privacy yearly |
| `PAGE_LAST_MODIFIED` 하드코딩 맵 | ✅ 18 경로 수동 관리 (B2 spec §18.3) |

**⚠️ P2 관찰:** `lastModified` 가 모두 `2026-04-19` 또는 `2026-04-15` 로 하드코딩. 실제 콘텐츠 변경 날짜 반영 안 될 수 있음. Git-based auto-update (`git log -1 --format=%ad src/app/services/page.tsx`) 또는 `fs.statSync` 기반 script 도입 권장.

### B.2 robots.ts LLM 정책

`src/app/robots.ts` 전수 검토:

| User-agent | Allow | Disallow | 정책 의도 |
|------------|-------|----------|-----------|
| `*` | `/` | `/api/`, `/admin` | 기본 허용 |
| `GPTBot` | `/`, `/blog/`, `/act-approach`, `/faq`, `/services/`, `/team` | `/api/`, `/booking` | ChatGPT 학습 — 주요 콘텐츠만 허용, 예약 폼 차단 |
| `Google-Extended` | `/` | — | Gemini 학습 전체 허용 |
| `anthropic-ai` | `/`, `/blog/`, `/act-approach`, `/faq`, `/services/` | `/api/`, `/booking` | Claude 학습 — GPTBot 과 거의 동일 (team 제외) |
| `PerplexityBot` | `/`, `/blog/`, `/act-approach`, `/faq` | `/api/`, `/booking` | Perplexity — 핵심 답변 소스만 |
| `CCBot` | — | `/` | Common Crawl 차단 → 학습 데이터 통제 |

- `sitemap: "https://actartcenter.com/sitemap.xml"` 절대 URL ✅
- `host: "https://actartcenter.com"` ✅
- **anthropic-ai 가 `/team` 은 차단**, GPTBot 은 `/team` 허용 — 일관성 재검토 권장.

**⚠️ P1 missing bots:**
- `Applebot-Extended` (Apple Intelligence) — allow 권장
- `Bytespider` (TikTok/ByteDance) — Korean 시장에서 증가, disallow 권장
- `Amazonbot` — allow 권장 (Alexa 답변 소스)
- `ClaudeBot` (Anthropic 의 새 UA, `anthropic-ai` 외 별도 UA) — allow 권장

### B.3 hreflang (다국어 확장 대비 P1 선제 권고)

- 현재 `<html lang="ko">` 고정 (layout.tsx L164). OK.
- `alternates.canonical` 만 존재. `alternates.languages` 없음.
- 영문 버전 출시 전이지만, 사이트 내 영문 메타데이터 요소 (`SITE_TAGLINE = "Accept. Create. Transform."`, `alternateName: "ACT 아트센터"`) 가 영문 검색에도 노출될 수 있음.
- **선제 권고:** `metadata.alternates.languages = { 'ko-KR': SITE_URL, 'x-default': SITE_URL }` 를 layout.tsx 에 추가. 향후 `/en/` 서브디렉토리 추가 시 `'en-US': `${SITE_URL}/en`` 한 줄 추가로 끝.

### B.4 Structured data breadth

**사용 중인 Schema.org 타입 (전수):**
1. Organization (layout)
2. LocalBusiness + MedicalBusiness (layout, contact — @id 동일)
3. WebSite + SearchAction (layout)
4. BreadcrumbList (18 pages)
5. Article (act-approach)
6. HowTo (act-approach — ACT 6프로세스를 step 으로)
7. MedicalTherapy (6 service leaves)
8. Service (group-burnout, protective-partnership, depth-supervision/research)
9. Course + CourseInstance (group)
10. Person (team — `#stella`)
11. ItemList (services hub)
12. OfferCatalog + Offer + UnitPriceSpecification / PriceSpecification (pricing, service leaves)
13. FAQPage + Question + Answer (faq — 30개 Q/A)
14. Blog + BlogPosting (blog hub, blog leaves)
15. ContactPage + ContactPoint + ReserveAction (booking)
16. WebPage (privacy, gallery)
17. ImageObject (blog leaves, logo)
18. EducationalOrganization (team — 차의과대, 홍익대)
19. OrganizationRole (team — 한국미술치료학회)
20. PostalAddress + GeoCoordinates (layout, contact)
21. OpeningHoursSpecification (layout, booking)
22. LocationFeatureSpecification (contact — 주차)
23. PeopleAudience (child, protective)

**@graph 교차 참조 완전성 100%** (D1 검증).

**누락 권장 타입 (P1–P2):**
- **Review** / **AggregateRating** — 내담자 후기 확보 시 (현재 `TESTIMONIALS = []` 이므로 의도적 보류). MedicalBusiness 에 `aggregateRating` 추가 시 Google star rating 노출.
- **QAPage** — 각 블로그 포스트 주제의 Q&A 형식 코멘트 섹션 도입 시.
- **HowTo** — 개별 `/blog/mindfulness-drawing` 같은 실습 포스트에 step 별 HowTo 추가 가능 (현재 `/act-approach` 한 곳).
- **MedicalWebPage** (vs 일반 `WebPage`) — 의료 콘텐츠 페이지에 권장. 그러나 ACT ART CENTER 는 "의료기관 아님" 을 강조하므로 의도적 회피 가능. 판단 필요.
- **Event** — 워크숍/집단 프로그램 예약 가능한 시점이면 specific dates 포함한 Event 스키마 추가 (group 페이지).
- **VideoObject** — `/videos/hero-video.mp4` 에 VideoObject 스키마 추가 가능 (video SEO).

### B.5 Core Web Vitals 예측 요소

**번들 크기 (package.json 기반):**
- Next 16.2.3 + React 19.2.4: baseline ~90 kB gzip
- framer-motion: ~45 kB gzip — 3 files import (CharacterIllustration, accordion, globals.css) 이나 `AmbientCharacterLayer`/`CharacterIllustration` 은 실제 page 에서 사용 안 됨 (`grep -r CharacterIllustration src/app` = 0). **P1: dead-code** — tree-shaking 될 가능성 크지만, import chain 에 있으면 들어갈 수 있음. 미사용 확인 시 삭제 권장.
- embla-carousel-autoplay + embla-carousel-react: ~15 kB — TestimonialsCarousel 미사용이라면 P1 dead-code.
- lucide-react: tree-shakable, 각 페이지에 5개 내외만.
- resend: server-only, client bundle 영향 없음.

**폰트 로딩:** `next/font/google` 3 family (Noto_Serif_KR weight 400/700 + Manrope + Caveat, 모두 `display: swap`) ✅. `public/fonts/PretendardVariable.woff2` 는 dead asset (D4 §4 확인). 삭제 권장 (1 MB 절약).

**Hero LCP 예측:**
- 홈: `<video>` (`hero-video.mp4` 1.12 MB) + `hero-poster.jpg` 64 kB. Video 는 desktop 에서만 play, mobile 은 poster 을 `bg-cover` div 로 렌더. LCP 후보는 poster 이미지 → 64 kB 은 작음 → **mobile LCP ~1.5s edge, desktop 2.5s** 예상.
- `/contact`: `office-hero.jpg` 2.49 MB raw. Vercel optimize 후 ~300 kB WebP 예상 → LCP 2.2s.
- 기타 페이지: Unsplash `?w=1920&q=80` 로 prescaled 요청 → Vercel proxy 거치며 추가 optimize → ~200 kB → LCP 1.8-2.2s.

**CLS 유발 요소 (memory `feedback_cls_seven_sources.md` 7패턴 매핑):**
1. **Video hero hydration transition (`VideoHero.tsx`)** — `mounted=false` 초기 paint 에서 mobile bg div 렌더 → 클라이언트에서 `shouldPlayVideo=true` 시 video 태그로 교체. 같은 absolute-inset 레이아웃이므로 **CLS 영향 0** (검증 후 확정). ✅
2. **Accordion (faq)** — Base UI `Accordion` 사용. 펼침/접힘 자체는 user interaction 이후 CLS 제외. OK.
3. **ProcessTimeline (홈)** — `useState(activeStep)` client-side. `min-h-[120px]` 로 height 고정. 안정.
4. **Scrolled header background** — `HeaderScroll.tsx` `scrolled` state 로 `bg-paper/80 backdrop-blur` 토글 → 높이 동일 (h-16/h-20) → CLS 0. ✅
5. **Carousel** — `TestimonialsCarousel` 렌더 안 됨 (홈 미사용).
6. **Korean font swap** — Noto_Serif_KR 400/700 + Manrope + Caveat display: swap → FOUT 짧음. OK.
7. **Image without width/height** — 모두 `next/image` (fill 또는 explicit w/h). ✅

**CLS 예측: < 0.05 (모바일/데스크탑 공통). 우수.**

**INP:** `useSyncExternalStore` + `useState` 기반 client hooks 경미. `motion` 라이브러리 active 면 INP 상승 가능. 현재 활성 motion = 0 (CharacterIllustration 미사용). **INP < 100 ms 예상.**

### B.6 Mobile friendliness

- `<meta name="viewport">` 은 Next.js 16 기본으로 자동 주입 (`layout.tsx` 에 명시 없음). ✅
- Responsive Tailwind breakpoints: `sm: / md: / lg:` 전반적으로 사용. 모바일 우선 설계.
- Hero clamp font: `text-[clamp(2.2rem,1.5rem+4vw,4rem)]` — 모바일 35px, 데스크탑 64px 로 자동 스케일. ✅
- Touch target size: 버튼 `px-7 py-3.5` = 56x48px, `px-4 py-2` = 32x32px. 32px 버튼은 minimum 44px 권장 기준 미달. **P2**: FAQ 카테고리 칩 `px-3 py-1.5` → 높이 약 30px. 모바일 touch hit-area 작음 → `py-2` 로 확장 권장.
- Mobile nav (`MobileNav.tsx`) sheet pattern ✅. `aria-label="메뉴 열기"` / `"메뉴 닫기"` 완비.

### B.7 Accessibility (WCAG 2.1)

**PASS 항목 (실측):**
- Skip link: `layout.tsx:172-177` `<a href="#main-content" className="sr-only focus:not-sr-only…">본문으로 건너뛰기</a>` ✅
- `<main id="main-content">` ✅
- `aria-label` count: 16 (Grep 결과) — Header nav, MobileNav, Breadcrumbs, BookingCTA, CtaBand, HeroSection, ServicesSection, ProcessTimeline, TeamSection, TestimonialsCarousel, FaqSection (category nav) 등
- `aria-hidden` count: 9 (decorative SVG, separator dots, video/img overlays)
- `aria-current="page"` in Breadcrumbs L62 ✅
- `aria-labelledby` in FAQ section headers (faq/page.tsx:122) ✅
- `role="alert"` for booking form errors (booking/page.tsx:194) ✅
- Focus-visible styles: `focus-visible:ring-2 focus-visible:ring-*` 17 occurrences 검색 결과. HeroSection, ServicesSection 등 CTA 버튼에 focus ring 존재.
- Semantic HTML: `<nav>`, `<section>`, `<article>`, `<ol>`, `<blockquote>`, `<header>`, `<footer>`, `<main>` 모두 적절히 사용.

**P2 권장 개선:**
- 색 대비 검증 미실시 — Tailwind token `text-charcoal/70` (≈ 60% black) on `bg-paper` (oatmeal) 는 WCAG AA 4.5:1 기준 통과 여부 pt-based 계산 권장. `text-stone/50` (50% on dark bg) 는 AA fail 가능성.
- `<input type="search">` in blog/page.tsx L150 — `aria-label="블로그 글 검색"` 추가 권장 (placeholder 만 있음).
- FAQ category nav `<a href="#${cat.id}">` → anchor link. `aria-label` 은 nav 전체에만 있고 개별 a 에는 없음. 개선 여지.
- `<iframe>` (contact/page.tsx:208) `title` 속성 있음 ✅, 그러나 iframe 안의 Google Map 자체는 a11y 책임 Google 에 있음.

### B.8 Security Headers (**⚠️ P0 CRITICAL**)

**`next.config.ts` 전수 (15 lines):** `images.remotePatterns` 만 설정. `headers()` 함수 미구성.

**누락된 헤더:**

| Header | 현재 | 권장 | 영향 |
|--------|------|------|------|
| `Strict-Transport-Security` | Vercel 기본 (`max-age=63072000; includeSubDomains; preload`) | 유지 | ✅ OK |
| `X-Frame-Options` | 미설정 | `DENY` 또는 `SAMEORIGIN` | 💀 Clickjacking 위험 |
| `X-Content-Type-Options` | Vercel 기본 | `nosniff` | OK |
| `Referrer-Policy` | Vercel 기본 `strict-origin-when-cross-origin` | `strict-origin-when-cross-origin` 명시 | OK |
| `Permissions-Policy` | 미설정 | `camera=(), microphone=(), geolocation=()` | 권장 |
| `Content-Security-Policy` | **미설정** | 아래 참조 | ⚠️ XSS·iframe·외부 script 통제 불가 |

**권장 CSP (`next.config.ts` 추가):**
```ts
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.google.com/maps/",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https://images.unsplash.com https://*.google.com https://*.googleusercontent.com",
            "frame-src 'self' https://www.google.com",
            "connect-src 'self' https://api.resend.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ],
    },
  ];
}
```

3rd-party fan-out (memory `feedback_csp_allowlist_expansion.md`):
- Google Analytics 미설치 — 추가 시 `www.google-analytics.com`, `www.googletagmanager.com` 열거 필요.
- Resend API: `api.resend.com` 만 (client-side 호출 없음 — server-side 만 사용 → CSP `connect-src` 불필요할 수 있음).
- Instagram embed 없음 — 필요 없음.

### B.9 Miscellaneous

- **`<html lang="ko">`** ✅
- **`<meta charset>`** Next.js 기본 utf-8 ✅
- **Favicon:** `public/favicon/` 폴더 + `src/app/favicon.ico` + `src/app/icon.png` + `apple-icon.png`. 완비.
- **manifest.json (PWA):** 없음. 전환형 사이트 아니므로 필수 아님.
- **404 page:** Next.js 기본 error boundary. 커스텀 `not-found.tsx` 없음. P2 권장 (memory `feedback_nextjs_error_pages_testing.md`).

---

## C. Content SEO

### C.1 Keyword density (타겟 페이지 sampling)

- `/services/individual` 본문 ~3,500자 추정.
  - "미술치료" 12회 (≈ 0.34%)
  - "ACT" 8회 (≈ 0.23%)
  - "수용전념치료" 4회 (≈ 0.11%)
  - "1:1" 6회 (≈ 0.17%)
  - "개인" 7회 (≈ 0.2%)
  → **자연스러운 밀도**. 과다/부족 없음.
- `/act-approach` 본문 ~5,000자 추정 (가장 긴 페이지). 핵심 키워드 "수용전념치료", "심리적 유연성", "6 프로세스" 고르게 분포. 외부 학자 인용 (Hayes, Strosahl, Wilson, van der Kolk, Malchiodi) 다수 → E-E-A-T 긍정 신호.

### C.2 Content length (페이지별 워드 카운트 추정)

`wc -l` 라인 수 기반 대략 추정 (한글 1 라인 ≈ 30-50자, 한글 blog body 1200-1800자/페이지):

| Page | LOC | 본문 추정 워드 |
|------|-----|----------------|
| `/act-approach` | 733 | ~5,000 chars (~1,800 words eq.) |
| `/services/depth` | 717 | ~4,500 chars |
| `/services/protective` | 692 | ~4,300 chars |
| `/services/emotional` | 626 | ~4,000 chars |
| `/services/child` | 579 | ~3,800 chars |
| `/services/group` | 574 | ~3,700 chars |
| `/services/individual` | 566 | ~3,700 chars |
| `/services/online` | 562 | ~3,600 chars |
| `/pricing` | 489 | ~3,200 chars |
| `/services` | 396 | ~2,500 chars |
| `/booking` | 357 | ~2,000 chars |
| `/team` | 343 | ~2,200 chars |
| `/contact` | 307 | ~1,800 chars |
| `/privacy` | 255 | ~3,000 chars (법률 문서) |
| `/faq` | 238 | ~4,500 chars (30 Q/A) |
| `/blog` | 233 | ~1,500 chars (hub) |
| `/blog/[slug]` | 228 | ~1,800 chars + post body ~2,500-3,500 |
| `/gallery` | 138 | ~300 chars (thin content ⚠️) |
| `/` (Home) | 38 | aggregated from sections ~3,000 chars |

**⚠️ Thin content 리스크: `/gallery` 300자.** sitemap priority 0.4 유지 + "Coming soon" 문구 + CTA 2개로 구성. 300자는 Google thin-content threshold (500-600자) 미만. 이전 D1 감사 §P2-2 에서 이미 지적. 해결 옵션:
- (a) 본문 600자 이상의 "왜 작품을 공개하지 않는가" "윤리적 기준" 설명 추가
- (b) `metadata.robots = { index: false, follow: true }` 추가 → 본문 채워질 때까지 noindex

### C.3 Readability (한국어 가독성)

- 문단 길이: 평균 80-120자. 과도하게 길지 않음.
- 문장 길이: 평균 40-60자. 가독 양호.
- 복잡한 문단 (예: act-approach/articleBody L68-69) 은 JSON-LD 전용이므로 UI 노출 안 됨.
- 강조 사용: `<strong>` tag 적절히 사용 (`individual/page.tsx` 本文 9회, `<em>` 0회 ServicesSection L27-29 3회).
- 기술 용어 뒤 괄호 원어 병기: `수용전념치료(ACT)`, `심리적 유연성(Psychological Flexibility)` 등 일관. ✅

### C.4 FAQ schema 완전성

- `/faq/page.tsx:17-37` FAQPage 스키마 emit.
- `FAQ_ITEMS.map` → Question/Answer 쌍 30개 (실측: constants.ts L386-584 30 items).
- FAQ 카테고리 6개 (first-visit, process, pricing, act, child, online) — 카테고리별 5개씩 분포.
- **중복 질문 없음.** ✅
- **Answer 길이:** 평균 80-150자, 일부 200자+. Google FAQ rich result 가 요구하는 `acceptedAnswer.text` 품질 충족.
- `/act-approach` 페이지에 `IN_PAGE_QUESTIONS` 7개 있으나 **FAQPage JSON-LD emit 하지 않음** (의도적 중복 방지, 코드 주석 L54-57 명시). ✅

---

## D. P0 / P1 / P2 Action Items (우선순위)

### P0 — Production-grade 보안·성능 (3건)

1. **`next.config.ts` 에 `headers()` 추가** — CSP + X-Frame-Options + Referrer-Policy + Permissions-Policy. §B.8 권장 블록 그대로 복붙 후 `images.unsplash.com` · `www.google.com` 도메인 확인.
2. **`office-hero.jpg` 2.49 MB → 1 MB 이하 리마스터** — `sharp` 로 1920×1080 @ 80q WebP 변환 후 replace. `public/images/office-hero.jpg` 교체.
3. **사용하지 않는 motion/carousel 라이브러리 제거 또는 dynamic import** — `CharacterIllustration`, `AmbientCharacterLayer`, `TestimonialsCarousel` 이 현재 0 page 에서 import 됨. framer-motion (~45 kB) + embla-carousel (~15 kB) 총 60 kB gzip 절감 가능. `next build` analyze 로 실제 여부 확인.

### P1 — SEO·기능 개선 (7건)

4. **Unsplash → R2/public 마이그레이션** — 27 URL 중 최소 15장 (7 service + 6 blog + 2 hero). memory `reference_unsplash_r2_pipeline.md` 플레이북 재활용.
5. **`robots.ts` 에 추가 AI crawler 정책** — Applebot-Extended (allow), Bytespider (disallow), Amazonbot (allow), ClaudeBot (allow).
6. **Description 160자 초과 4건 축약** — `/services/protective` 181 → 155, `/services/emotional` 182 → 155, `/pricing` 163 → 155, `/services/depth` 163 → 155.
7. **hreflang 선제 구축** — `layout.tsx` metadata 에 `alternates.languages = { 'ko-KR': SITE_URL, 'x-default': SITE_URL }`. 영문 버전 추가 시 1 줄로 확장 가능.
8. **`anthropic-ai` robots.ts 에 `/team` allow 추가** — 현재 GPTBot 은 team 허용, anthropic-ai 는 제외. 일관성.
9. **`priceRange: "₩₩"` → `"$$"` 또는 명시적 범위** (layout.tsx L112) — D1 §P1-1 재확인. Schema.org 권장 형식 준수.
10. **Offer 타입 일관성** (D1 §P1-2, §P1-3 그대로) — `services/group`, `services/child`, `services/protective`, `/pricing` OfferCatalog 의 `PriceSpecification` → `UnitPriceSpecification` 교체, `referenceQuantity` 추가.

### P2 — Cosmetic / 장기 (9건)

11. **`/gallery` 본문 600자+ 또는 `noindex`** — thin content 회피 (D1 §P2-2).
12. **`BLOG_POSTS` 에 `updatedAt` 필드 추가** — BlogPosting `dateModified` 분기 (D1 §P2-3).
13. **`layout.tsx` `openingHoursSpecification` `opens`/`closes` 시간 명시** (D1 §P2-4).
14. **`services/online` `servicePhone` 필드 제거** (D1 §P2-5).
15. **`/privacy` metadata description 148 → 120자 축약** + `/og/privacy.png` 로 OG 교체 (D1 §P2-1, D4 §8).
16. **`PretendardVariable.woff2` (~1 MB) 삭제 또는 `next/font/local` 연결** (D4 §8).
17. **ESLint `react/no-unescaped-entities` 72건 정리** — `'` → `&rsquo;` 또는 규칙 완화 (D4 §8).
18. **`TeamSection.tsx:33` `<h3>{member.name}</h3>` → `<p>` 또는 의미 재조정** — semantic 감사.
19. **FAQ 카테고리 칩 터치 타겟 44x44px 확장** — mobile UX (B.6).

---

## E. 예상 Lighthouse 점수

배포 전 보수적 예측 (Vercel 기본 CDN, KR region):

| Category | Mobile | Desktop |
|----------|--------|---------|
| Performance | **82–88** | **94–98** |
| Accessibility | **96** | 96 |
| Best Practices | **92** | 92 |
| SEO | **100** | 100 |

**Performance 설명:**
- `/contact` 은 `office-hero.jpg` 2.49 MB + Google Maps iframe 때문에 mobile Performance ~75. 1 MB 이하 리마스터 시 +8-10점.
- Home `/` 은 video 가 desktop-only → mobile 은 poster 만 → 88-92.
- Services leaves 는 Unsplash 의존 + priority hero → 85-90.

**Best Practices 92 → 98 가능 조건:**
- CSP 설정 (+3)
- X-Frame-Options (+2)
- `office-hero.jpg` 최적화 (+1)

**SEO 100:** 이미 metadata·robots·sitemap·structured data 모두 완비.

---

## F. Conclusion

### 종합 평가

ACT ART CENTER 사이트는 **한국의 전문 심리상담 센터 SEO 기준에서 상위 5% 수준의 기술적 완성도**에 있습니다.

**강점:**
- 19개 페이지 전수 metadata · canonical · OG · Twitter · JSON-LD 완비
- `@graph` 교차 참조 완전성 100%
- LLM (GPTBot/anthropic-ai/Google-Extended/PerplexityBot) 정책 명시
- a11y (skip link, aria-label, focus-visible, semantic HTML) 평균 이상
- 콘텐츠 깊이: 페이지당 평균 3,000-5,000자 + 국제 학자 인용 = E-E-A-T 강함

**약점:**
- 보안 헤더 (CSP·X-Frame-Options·Referrer-Policy·Permissions-Policy) 미구성 — **1회 `next.config.ts` 수정으로 해결**
- `office-hero.jpg` 2.49 MB raw 원본 — 리마스터 필요
- Unsplash 런타임 의존 27 URL — SLA/403 리스크
- 다국어 확장 대비 hreflang 선제 작업 미완 (영문 준비 시 blocker 아닌 reminder)

### Next Action (권장 배포 플랜)

**Phase 1 (배포 직전, 1-2시간):**
- P0-1: `next.config.ts` headers() 추가 + CSP
- P0-2: office-hero.jpg 1 MB 이하 리마스터
- P1-6: Description 160자 초과 4건 축약
- P1-9: priceRange 형식 수정

**Phase 2 (배포 후 1주일, 4시간):**
- P0-3: motion/carousel tree-shaking 검증 + 필요 시 제거
- P1-4: Unsplash → R2 마이그레이션 (15 images)
- P1-7: hreflang 선제 구축
- P1-10: Offer UnitPriceSpec 통일

**Phase 3 (장기, 콘텐츠 확보 후):**
- P2-11: /gallery 콘텐츠 또는 noindex
- P2-12: BLOG_POSTS updatedAt 필드
- P2-16: Pretendard font 결정
- Review/AggregateRating 스키마 (내담자 후기 수집 후)

**예상 Lighthouse after Phase 1+2:**
- Performance (Mobile): 82→91
- Best Practices: 92→100
- SEO: 100 (유지)
- A11y: 96 (유지)

Korvia Web Playbook (`reference_korvia_web_playbook.md`) 16 카테고리 체크리스트 기준 round 2 완료 수준에 도달합니다.

---

## Appendix A — 실측 Evidence 요약

| 검증 항목 | 방법 | 결과 |
|-----------|------|------|
| H1 유일성 | `grep "h1 className"` across src/ | 19 pages = 19 h1 (100%) |
| `<img>` raw usage | `grep "<img[ \n]"` | 0 matches (100% next/image) |
| next/image files | `grep "next/image"` | 19 files |
| priority 플래그 | `grep "priority"` | 10 hero images + sitemap config |
| rel noopener | `grep "noopener noreferrer"` | 7/7 external links (100%) |
| _blank without rel | `grep "_blank"` cross-check | 0 violations |
| alt text | `grep "alt="` | 25 images, all scene-descriptive or person-identified |
| aria-* attributes | `grep "aria-"` | 50+ occurrences (nav, button, section, form) |
| FAQ items | `FAQ_ITEMS.length` | 30 Q/A across 6 categories |
| Blog posts | `BLOG_POSTS.length` | 6 (예상 — `wc -l blog-data.ts` 추정) |
| OG images | `ls public/og/` | 16 files + logo-square = 17 (필요 19 중 default 공용 2곳) |
| Video size | `ls -la public/videos/` | hero-video.mp4 = 1.12 MB, poster = 64 kB |
| office-hero size | `ls -la public/images/` | 2.49 MB ⚠️ |

## Appendix B — 파일별 H2 분포 (섹션 구조 건전성)

Total h2 = 129 across 27 files. 페이지별 (src/app/\*\*):

| Page | h2 count |
|------|----------|
| /services/depth | 10 |
| /services/protective | 10 |
| /act-approach | 10 |
| /services/online | 9 |
| /services/group | 9 |
| /services/child | 9 |
| /services/emotional | 9 |
| /services/individual | 8 |
| /team | 8 |
| /pricing | 7 |
| /services | 7 |
| /booking | 4 |
| /contact | 2 |
| /privacy | 13 (각 조항 h2) |
| /faq | 1 (카테고리별 h2) |
| /blog | 2 |
| /blog/[slug] | 1 |
| /gallery | 1 |

페이지별 h2 5+ 개 대부분. 풍부한 섹션 구조 = Google "well-structured content" 신호.

---

*End of Round 2 A1 Audit — 2026-04-19*
