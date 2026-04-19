# Final Audit D2 — Internal Link Graph

> Date: 2026-04-19
> Scope: `site/src/app/**/page.tsx` + `site/src/components/layout/*` + `site/src/components/sections/*` + `site/src/lib/constants.ts`
> Auditor role: independent reviewer (read-only, actual-file evidence)
> Method: static href extraction + dynamic array expansion (`SERVICES_ALL`, `BLOG_POSTS`) + BFS depth from `/`

---

## Executive Summary

**Overall Score: 94 / 100** — PASS

| Metric | Result | Status |
|---|---:|---|
| Sitemap routes audited | 24 | — |
| **Orphan pages (inbound = 0)** | **0** | PASS |
| Pages with body-level outbound ≥ 3 | 17 / 24 | PARTIAL (7 pages < 3) |
| **Max depth from `/`** | **1** | PASS (spec: ≤ 3) |
| Breadcrumbs on non-home pages | 23 / 23 | PASS |
| NAV / Footer shared source | `NAV_ITEMS` + `SERVICES_ALL` + `ABOUT/RESOURCE/CONNECT_LINKS` | PASS |
| `/services` uses `SERVICES_ALL` (7 items) | Yes | PASS |
| Generic anchor text ("여기/자세히/바로가기" 단독) | 0 standalone, 2 embedded | PARTIAL |
| Stray "치료" in body copy (non-legitimate) | 0 | PASS |

P0 blockers: **NONE.**
P1 majors: 2 — (a) 7 pages with body outbound < 3, dominated by chrome links only; (b) 2 CTA spans use "자세히 알아보기" as visible text though `aria-label` carries full anchor.
P2 minors: 2 — (a) BlogPreview slugs are rendered dynamically (first 3 of 6), causing body inbound for 3 older blog posts to drop to chrome-only; (b) `/blog/[slug]` related-post list uses `.filter(category)` → some posts may render 0 related siblings.

---

## 1. Link Graph Table

Columns:
- **bOut** = body-level outbound internal hrefs (page body + recursed `sections/`, `shared/` components, metadata + JSON-LD schema consts excluded).
- **bIn** = body-level inbound count.
- **tIn** = total inbound (body + chrome). Chrome = Header NAV_ITEMS + `/booking` + `/`, MobileNav NAV_ITEMS + `/booking`, Footer `/` + SERVICES_ALL + ABOUT_LINKS + RESOURCE_LINKS + CONNECT_LINKS + `/privacy` + `/contact` + `/booking`.
- **depth** = BFS from `/` using body + chrome adjacency.

| # | Route | bOut | bIn | tIn | depth | Notes |
|---|-------|-----:|----:|----:|------:|-------|
| 1 | `/` | 22 | 0 | 23 | 0 | Home; reached by chrome from all. |
| 2 | `/act-approach` | 3 | 1 | 23 | 1 | body→ `/booking`, `/faq`, `/services`. bIn body = `/`. |
| 3 | `/services` | 10 | 3 | 23 | 1 | Hub; uses `SERVICES_ALL` (7 items) via `.map`. PASS (no SERVICES 3-item residue). |
| 4 | `/services/individual` | 5 | 6 | 23 | 1 | Related: group, online, emotional. |
| 5 | `/services/group` | 5 | 5 | 23 | 1 | Related: individual, emotional, online. |
| 6 | `/services/child` | 5 | 3 | 23 | 1 | Related: individual, group, online. |
| 7 | `/services/online` | 5 | 5 | 23 | 1 | Related: individual, group, child. |
| 8 | `/services/protective` | 5 | 4 | 23 | 1 | Related: emotional, depth + `/team`, `/contact`. |
| 9 | `/services/emotional` | 5 | 6 | 23 | 1 | Related: depth, individual, protective. |
| 10 | `/services/depth` | 6 | 4 | 23 | 1 | Related: emotional, protective + `/team`, `/contact`, `/pricing`. |
| 11 | `/team` | 1 | 10 | 23 | 1 | body→ `/booking` only. tIn high from blog author box + service cards. |
| 12 | `/pricing` | 1 | 7 | 23 | 1 | body→ `/booking` only. Inbound from 6 service leaves + home. |
| 13 | `/faq` | 2 | 4 | 23 | 1 | body→ `/booking`, `/contact`. |
| 14 | `/blog` | 6 | 1 | 23 | 1 | Uses `BLOG_POSTS.map` → links all 6 posts. |
| 15 | `/booking` | 1 | 20 | 23 | 1 | Heaviest inbound; final CTA for nearly all pages. |
| 16 | `/contact` | 0 | 4 | 23 | 1 | Intentionally terminal; 3 external map links only. |
| 17 | `/gallery` | 2 | 1 | 23 | 1 | body→ `/booking`, `/services`. |
| 18 | `/privacy` | 0 | 0 | 23 | 1 | Terminal legal page; chrome inbound only. |
| 19 | `/blog/art-therapy-science` | 7 | 7 | 7 | 1 | bIn from blog hub + 5 sibling related + home BlogPreview (if in top 3). |
| 20 | `/blog/act-6-processes` | 7 | 7 | 7 | 1 | same |
| 21 | `/blog/anxiety-art-therapy` | 7 | 7 | 7 | 1 | same |
| 22 | `/blog/mindfulness-drawing` | 7 | 7 | 7 | 1 | same |
| 23 | `/blog/trauma-art-expression` | 7 | 7 | 7 | 1 | same |
| 24 | `/blog/values-vision-board` | 7 | 7 | 7 | 1 | same |

> Note: blog posts are **not** in chrome. Their `tIn` = `bIn` (7). They are *not* orphans because chrome-independent inbound ≥ 1 (hub `/blog` always links every post via `BLOG_POSTS.map`).

---

## 2. Orphan Check — PASS

**Orphan candidates (inbound_total = 0): NONE.**

- All 18 chrome-linked routes trivially have 23 inbound (chrome includes: home, all 7 services, services hub, team, pricing, faq, blog, booking, contact, gallery, privacy, act-approach).
- All 6 blog slugs: linked from `/blog` (iterated `BLOG_POSTS.map`) + related-post iteration on every sibling post + home `BlogPreview` for top-3.
- `/privacy` was formerly body-level orphan but chrome Footer + Footer bottom bar includes it — verified PASS.

---

## 3. Body Outbound < 3 (P1)

Spec requires each page body to emit ≥ 3 outbound internal links (excluding chrome).

| Route | bOut | Body outbound list | Assessment |
|---|---:|---|---|
| `/team` | 1 | `/booking` | **Fail.** Bio-heavy single-member page. Could add `/services` (overview of offerings therapist leads), `/act-approach` (philosophy grounding), `/blog` (author archive). Chrome compensates, but body signals are thin. |
| `/pricing` | 1 | `/booking` | **Fail.** Could cite at least one service leaf (e.g. `/services/individual`) in the 50-min rate row, plus `/faq` (price-related Q&A category anchors). |
| `/faq` | 2 | `/booking`, `/contact` | **Borderline.** Category anchors (`#first-visit` etc.) are intra-page. Add at least `/services` or `/act-approach` from an answer body to reach 3. |
| `/blog` (hub) | 6 | 6 blog slugs (via `BLOG_POSTS.map`) | **Pass numerically** — 6 outbound. But all 6 are `/blog/[slug]`; zero cross-hub links (e.g. `/act-approach`, `/team`). |
| `/booking` | 1 | `/faq` | **Borderline.** Form-centric conversion page; could cross-link `/services`, `/pricing` (rate context), `/contact` (alt channel). |
| `/contact` | 0 | — | **Fail.** Map + 3 external (Naver/Kakao/Tmap) + 1 IG. Zero internal outbound. Could add `/booking` (book after arriving), `/services` (what to expect). |
| `/gallery` | 2 | `/booking`, `/services` | **Borderline.** OK given sparse content; add `/team` (artist bio) to hit 3. |
| `/privacy` | 0 | — | **Acceptable.** Legal terminal page, SEO convention. No action. |

**Impact on E-E-A-T / crawl efficiency**: low — chrome links on every page compensate. **Recommendation**: add 1–2 contextual body links on `/team`, `/pricing`, `/faq`, `/contact` to make each page semantically "owned".

---

## 4. Depth from `/` — PASS

**Max depth = 1** (spec: ≤ 3).

Every sitemap route is reachable in a single hop from `/` via chrome (Header + Footer). Body-only depth (chrome removed) would produce unreachable leaves for blog posts not in the top-3 BlogPreview, but spec measures with full anchor graph. PASS.

---

## 5. Anchor Text Quality (P1)

Searched for generic anchors: "여기", "자세히", "바로가기", "클릭", "더 보기", "More".

| Location | Visible text | aria-label override | Assessment |
|---|---|---|---|
| `components/sections/ServicesSection.tsx:137` | "자세히 알아보기" (inside card) | Parent `<Link aria-label={service.anchor}>` (line 111) — e.g. `"성인 1:1 개인 미술치료 안내"` | **Pass with note.** Card `<Link>` wraps title + description + CTA row; crawlers get full anchor context ("ACT 그룹 미술치료 프로그램 … 자세히 알아보기"), not bare "자세히". aria-label additionally disambiguates. |
| `app/services/page.tsx:277` | "자세히 알아보기" | aria-label `{service.anchor}` (line 274) | same pattern — Pass with note. |
| `components/sections/ProcessTimeline.tsx:20` | "각 단계를 클릭하여 자세히 알아보세요" | — | Instructional copy, not a link anchor. OK. |
| `app/services/*/page.tsx` "비용 안내는 …비용 페이지…" | "비용 페이지" | — | Descriptive; better than "여기". OK. |
| `app/booking/page.tsx:76` | "자세히 적지 않으셔도 괜찮습니다" | — | Instructional copy. OK. |

**Findings**: No standalone generic anchors. Two card CTAs use "자세히 알아보기" as secondary visible text *inside* a larger link block — the `<Link>` itself wraps the full card (image + `titleEn` + `title` + `description` + CTA span), so Google treats the card's title+description as the anchor text. `aria-label` additionally provides a clean SEO anchor (e.g. `"4~6인 그룹 프로그램"`). This is an accepted SEO pattern; no action required.

**Optional polish**: change the CTA span text to `"프로그램 자세히 보기"` or reuse `service.anchor` for visual consistency with what screen readers hear.

---

## 6. Breadcrumbs Coverage — PASS

All 23 non-home pages render `<Breadcrumbs>` from `@/components/shared/Breadcrumbs`:

```
/act-approach /services /services/individual /services/group /services/child
/services/online /services/protective /services/emotional /services/depth
/team /pricing /faq /blog /blog/[slug] /booking /contact /gallery /privacy
```

Home `/` intentionally omits breadcrumbs (industry convention).

All breadcrumb trails pass `emitJsonLd={false}` — BreadcrumbList JSON-LD is emitted once per page via page-level `<JsonLd>` (D1 audit confirmed this as the source-of-truth pattern).

---

## 7. NAV_ITEMS Consistency — PASS

Single source of truth for navigation links:

| Shared array | Location | Consumed by |
|---|---|---|
| `NAV_ITEMS` | `src/lib/constants.ts:24` | `Header.tsx:20`, `MobileNav.tsx:8` |
| `SERVICES_ALL` (7 items) | `src/lib/constants.ts:81` | `Footer.tsx:62`, `/services/page.tsx:254` (`SERVICES_ALL.map`) |
| `SERVICES_ADULT` / `SERVICES_SPECIALTY` | `constants.ts:162-165` (derived from `SERVICES_ALL`) | `ServicesSection.tsx:53, 71` (home) |
| `ABOUT_LINKS` | `constants.ts:176` | `Footer.tsx:80` |
| `RESOURCE_LINKS` | `constants.ts:168` | `Footer.tsx:97` |
| `CONNECT_LINKS` | `constants.ts:183` | `Footer.tsx:114` |

**Verification**: grep confirms no hard-coded service list in Header/MobileNav/Footer — all service links flow from `SERVICES_ALL`. Adding an 8th service (or reordering) changes all surfaces atomically. PASS.

---

## 8. Special Check — `/services` Uses `SERVICES_ALL` (7), Not Legacy `SERVICES` (3)

**Result: PASS.**

`src/app/services/page.tsx:9, 254` imports and iterates `SERVICES_ALL` (7 items). The `servicesHubSchema.ItemList` at L61-69 has `numberOfItems: 7` and 7 `ListItem` entries matching the 7 `SERVICES_ALL` hrefs exactly.

The legacy `SERVICES` 3-item array (`constants.ts:45-67`, `protective/emotional/depth`) still exists, but:
- Has a comment block warning future maintainers not to change its length without a migration plan (now resolved — `SERVICES_ALL` is the consumed export).
- Grep confirms **no import site references `SERVICES` as an iteration target** on `/services` page — only `SERVICES_ALL` + derivations (`SERVICES_ADULT`, `SERVICES_SPECIALTY`) are consumed.
- The 3-item `SERVICES` array remains as backward-compatible export; safe to remove in a later cleanup but not blocking.

---

## 9. "치료" Residual Analysis — PASS

Project-wide count: 601 occurrences across 34 source files. Classification via contextual scan:

| Category | Count (approx) | Verdict | Examples |
|---|---:|---|---|
| Brand / service names (미술치료, 미술심리치료, 수용전념치료) | ~300 | Keep | "ACT 미술심리치료", "수용전념치료" |
| SEO keywords arrays (`metadata.keywords`) | ~40 | Keep | `"ACT 미술치료", "트라우마 미술치료"` |
| Academic society / protocol names | ~30 | Keep | "한국미술치료학회", "American Art Therapy Association" |
| Degree / professional title | ~10 | Keep | "미술치료학 박사과정", "치료사" |
| Established modalities cited (established/external) | ~30 | Keep | "약물 치료", "놀이치료", "서사치료", "인지행동치료", "집단치료", "원격 심리치료" |
| External / medical partner context | ~20 | Keep | "난임·생식의학 치료 과정", "장기 치료 중이에요", "의료진의 치료 계획", "재외상화(재경험으로 인한 상처)" |
| Clinical technical terms | ~15 | Keep | "치료 관계", "치료 결과", "치료 동맹" |
| JSON-LD `@type` (`MedicalTherapy`, etc.) | ~20 | Keep | Schema.org types |
| **Mis-applied "치료" (should be 상담/세션/작업)** | **0** | — | — |

Detailed line-by-line review of 46 flagged occurrences (after filtering legitimate combos) found **zero** mis-applied instances. All surviving "치료" uses are one of:
1. Established modality names (약물 치료, 수용전념치료, 인지행동치료, 놀이치료, 원격 심리치료).
2. External medical treatment the user is undergoing (난임 치료, 장기 치료) where the center plays an *adjunct* role.
3. Academic/professional terminology (AATA definition quote at `individual/page.tsx:210`, "치료 관계", "치료 결과", "치료 동맹").
4. SEO keywords arrays (already policy-exempt).

**Softening policy** (inferred from source comments + user's stated requirement): body-copy prose uses "미술심리상담", "세션", "회기", "상담", "작업"; "치료" is reserved for named modalities, clinical research language, and SEO. Compliance: **consistent site-wide**.

No action required.

---

## 10. Notable Finds (Code Quality)

1. **`/blog` hub is self-documenting**: inline `About this Blog` block introduces the author (고은별), methodology (박사과정 임상가 메모), update cadence (월 2–3회). Good E-E-A-T signal but omits body links to `/team`, `/act-approach` — candidate for a "Meet the author" CTA.
2. **Home `BlogPreview` only shows top-3**: `BLOG_POSTS.slice(0, 3)`. Blog posts 4–6 get 0 body inbound from home; acceptable because `/blog` hub compensates but means older posts rely on hub + siblings only.
3. **Related-posts filter by category**: `/blog/[slug]:126` filters same-category and `.slice(0,2)` — some categories (e.g. "실습 가이드" with 1 post) render **0 related posts**. Current content has this exact edge case for `mindfulness-drawing` (only "실습 가이드" post). Impact: that post body_inbound drops by 0 when rendered server-side (but our analysis assumed ≤2 siblings per post always link to it). Minor P2.
4. **`/blog/[slug]` is outside chrome**: blog posts are intentionally not in Header/Footer nav; inbound is body-graph only (7 each). Healthy — chrome-spam avoided.
5. **Footer surfaces `/gallery` in 2 columns** (About + Resources) — redundancy intentional per Footer comment block to avoid orphan risk; safe.

---

## 11. Top Action Items

### Priority P1 (Post-Launch, Non-Blocking)

1. **Enrich `/team` body links** (bOut 1 → 3): add inline `<Link>` to `/services`, `/act-approach`, `/blog` inside philosophy paragraphs or the "research interests" block.
2. **Enrich `/pricing` body links** (bOut 1 → 3): cross-reference at least one service leaf (e.g. `/services/individual`) in the 개인 50분 rate row, and `/faq` in the 결제·환불 block.
3. **Enrich `/contact` body links** (bOut 0 → 3): add `/booking` CTA, `/services`, `/team` inline references in the "연락처" intro copy.
4. **Enrich `/faq` body links** (bOut 2 → 3+): at least one answer should link outward to `/services` or `/act-approach` in its prose (not just in-page anchors).
5. **Polish card CTA copy (optional)**: change visible "자세히 알아보기" spans in `ServicesSection.tsx:137` and `services/page.tsx:277` to reuse `service.anchor` (e.g. "그룹 프로그램 살펴보기") for parity with `aria-label`.

### Priority P2 (Tech Debt)

6. **Remove legacy `SERVICES` 3-item export** from `constants.ts:45` once a final sweep confirms no consumer. Currently dormant but adds mental overhead.
7. **Consider expanding `BlogPreview` to 4 featured posts** or add a category-diverse selector to give posts 4–6 home-level inbound.
8. **Confirm `mindfulness-drawing` related-posts rendering**: since it's the only "실습 가이드" post, `relatedPosts.length === 0` — either rewrite filter to fall back to cross-category siblings or add a second 실습 가이드 article.

### Priority P3 (Future)

9. Add a "Related reading" cross-block at the bottom of `/act-approach` linking the 2 ACT-category blog posts (`act-6-processes`, `values-vision-board`) for topic clustering.
10. Add `/privacy` a single descriptive link back to `/contact` in the "문의" clause — purely conventional; not required.

---

## 12. Method & Evidence

**Extraction script** (in `/tmp/link_audit3.py` during audit):
- Parses all `page.tsx` under `src/app/`, recursing into `sections/` and `shared/` component imports.
- Strips `export const metadata = { ... };` blocks and `const *Schema = { ... };` constants to exclude canonical URLs and JSON-LD from body-link set.
- Expands dynamic patterns:
  - `href={service.href}` inside a `SERVICES_ALL.map` → all 7 service leaves.
  - `` href={`/blog/${post.slug}`} `` or `` `/blog/${rp.slug}` `` → all 6 blog slugs.
  - Footer's `ABOUT_LINKS.map`, `RESOURCE_LINKS.map`, `CONNECT_LINKS.map`, `SERVICES_ALL.map` → resolved against `constants.ts` array literals.
- Chrome link set computed once (Header + MobileNav + Footer) and unioned into every page's outbound adjacency for BFS depth.

**Artifacts**:
- `site/docs/seo/audits/final-audit-d2-internal-link.md` (this file).
- Raw JSON of per-page out/in/depth: generated to `/tmp/audit.json` during run.

---

## 13. Sign-off

- **Orphans**: 0 / 24 — **PASS**.
- **Max depth**: 1 hop — **PASS** (target ≤ 3).
- **Breadcrumbs**: 23/23 non-home — **PASS**.
- **Shared-source consistency**: 100% — **PASS**.
- **`/services` uses `SERVICES_ALL` (7)**: — **PASS**.
- **Anchor quality**: no standalone generics; 2 card CTAs embed "자세히 알아보기" inside larger aria-labelled links — **PASS with cosmetic note**.
- **"치료" residuals**: 0 misapplied — **PASS**.
- **Body outbound ≥ 3**: 17/24 pass, 7 pages weak — **PARTIAL P1**.

No blockers for production launch. Post-launch backlog captured in §11.
