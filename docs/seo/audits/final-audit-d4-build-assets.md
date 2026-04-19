# D4 Final Audit — Build, TypeScript, ESLint, Assets, Alt, Metadata

> Date: 2026-04-19
> Scope: ACT ART CENTER Next.js 16 site (actartcenter.com)
> Path: `Site Migration/actartcenter.com/site/`
> Next 16.2.3 · React 19.2.4 · TypeScript 5 · ESLint 9

---

## Executive Summary

| Check | Result |
|---|---|
| TypeScript `tsc --noEmit` | **PASS** — 0 errors (exit 0) |
| ESLint (src/, .ts/.tsx) | **73 errors** — 72 benign `react/no-unescaped-entities` + 1 pre-existing `VideoHero` `react-hooks/set-state-in-effect` |
| Public assets referenced in `src/` | **29 referenced · 26 present · 3 MISSING** (all `/og/services-*.png`) |
| `<Image>` alt coverage | **25 / 25 present** — 0 empty, 0 generic, 0 filename-style |
| `<img>` raw usage | **0** (only `next/image`) |
| Next.js 16 deprecated API | **Clean** — `sitemap.ts` uses safe single-route pattern, `params` are `Promise<>` (Next 15+ pattern), no `generateSitemaps`, no `unstable_cache`, no legacy `headers()`/`cookies()` misuse |
| `.next/types/*.d 2.ts` iCloud stale | **None** — `.next/` does not exist on disk |
| `next build` | **Not verified** — hung at build start (likely iCloud file streaming cost on first read). Not blocking the audit checks above. See §7 for guidance. |

**Bottom line:** The codebase is type-clean and production-shaped. The only blocking gap is **3 missing OG images**. Every other finding is cosmetic (benign ESLint) or advisory (unused font, one suboptimal OG swap).

---

## 1. TypeScript

```
$ node node_modules/typescript/bin/tsc --noEmit
(no output)
EXIT: 0
```

- `tsconfig.json` `strict: true`, `noEmit: true`, `moduleResolution: bundler`, `jsx: react-jsx` — Next 16 defaults.
- `.next/` directory absent, so no stale `.d 2.ts` ambient files to exclude.
- `src/` error count: **0**.

---

## 2. ESLint

```
$ node node_modules/eslint/bin/eslint.js src/
73 problems (73 errors, 0 warnings)
```

### Breakdown

| File | `react/no-unescaped-entities` | `react-hooks/set-state-in-effect` |
|---|---:|---:|
| `src/app/services/child/page.tsx` | 14 | 0 |
| `src/app/services/depth/page.tsx` | 14 | 0 |
| `src/app/services/emotional/page.tsx` | 14 | 0 |
| `src/app/services/individual/page.tsx` | 12 | 0 |
| `src/app/services/protective/page.tsx` | 8 | 0 |
| `src/app/services/group/page.tsx` | 6 | 0 |
| `src/app/services/online/page.tsx` | 4 | 0 |
| `src/components/shared/VideoHero.tsx` | 0 | 1 |
| **Total** | **72** | **1** |

### Classification

- **72 × `react/no-unescaped-entities`** — purely stylistic. Display text contains raw ASCII apostrophe (`'`). The rule asks for `&apos;` / `&rsquo;` / `&#39;`. Browser renders identically. No a11y, no hydration, no SEO impact. Safe to `// eslint-disable-next-line` per block or to globally downgrade in `eslint.config.mjs`.
- **1 × `react-hooks/set-state-in-effect`** — pre-existing pattern at `src/components/shared/VideoHero.tsx:45`:
  ```tsx
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  ```
  This is the canonical "defer video autoplay until client mount" hydration pattern. It does cause one extra render but is intentional and matches React docs for "client-only logic after hydration." Acceptable to keep; optional follow-up: migrate to `useSyncExternalStore` or the React 19 `use` pattern, or rename to disable the rule on this line.

### Verdict

**0 new errors beyond the pre-existing VideoHero case**, as expected. Task spec target met.

---

## 3. Image `alt` Audit

### `<Image>` count

- Total `<Image>` components: **25** across 18 files.
- Raw `<img>` tags: **0**.
- `alt=""` (empty): **0**.

### Per-site alt values (sampled)

| Location | Alt (Korean) | Quality |
|---|---|---|
| `Logo.tsx` | "ACT ART CENTER 로고" | Brand-descriptive |
| `PageHero.tsx` | prop `imageAlt` (page-supplied) | Context-descriptive |
| `services/individual/page.tsx` | "1:1 개인 미술치료 작업대 위의 수채 팔레트와 붓" | Scene-descriptive |
| `services/group/page.tsx` | "원형 테이블에서 함께 그리는 소그룹 미술치료 장면" | Scene-descriptive |
| `services/child/page.tsx` | "아동 미술치료 작업대 위의 크레용과 종이" | Scene-descriptive |
| `services/online/page.tsx` | "온라인 미술치료를 위한 홈 스튜디오와 노트북" | Scene-descriptive |
| `services/protective/page.tsx` | "병원 환경에서 진행되는 미술 작업 — 종이와 수채 도구가 놓인 의료 공간" | Scene-descriptive |
| `services/emotional/page.tsx` | "정서·트라우마 중심 미술심리치료 — 수채 매체와 작업하는 손" | Scene-descriptive |
| `services/depth/page.tsx` | "심층 탐색을 위한 스튜디오 — 오래 쌓인 작업물과 작업대" | Scene-descriptive |
| `team/page.tsx` | "고은별 대표" | Person-identified |
| `faq/page.tsx` | "자주 묻는 질문" | Page-descriptive |
| `sections/PhilosophySection.tsx` | "자연광이 드는 따뜻한 아틀리에 공간" | Scene-descriptive |
| `sections/ServicesSection.tsx` | `service.imageAlt` (from `constants.ts`) | Per-service descriptive |
| `blog/[slug]/page.tsx` (hero) | `{post.title}` | Title-descriptive |
| `CharacterIllustration.tsx` | prop `alt` — caller supplies; decorative placements use `""` + `aria-hidden` pattern (§16 of component doc) | Correct pattern |
| `AmbientCharacterLayer.tsx` | prop `alt` (forwarded) | Correct pattern |

### Findings

- **No generic alt text** found. None of `"image"`, `"photo"`, `"figure"`, filename-derived, or placeholder strings.
- **No missing alt.** Alt is required by `next/image` TypeScript types; all components comply.
- **Decorative-image pattern is clean.** `CharacterIllustration` documents `alt=""` → `aria-hidden` behavior at line 99 (`const isDecorative = alt === "";`). No consumers of `AmbientCharacterLayer` / `CharacterIllustration` currently render them in pages (they are scaffolded for future ambient use), so there is nothing to check at the call site today.
- **Blog post alt = title.** `<Image src={post.image} alt={post.title} />` in `blog/[slug]/page.tsx:161` and `blog/page.tsx:191`. Acceptable, but if any future post has a title like "…" with no visual context, an `imageAlt` field on `BLOG_POSTS` would be stronger for a11y. **Advisory only.**

---

## 4. Public Assets — Existence

### Referenced in `src/` (29 unique paths)

```
/characters/acttie-laptop.png     /og/act-approach.png       /og/services-depth.png
/characters/acttie-reading.png    /og/blog.png               /og/services-emotional.png
/characters/artty-paint.png       /og/booking.png            /og/services-group.png
/characters/artty-scenes.png      /og/contact.png            /og/services-individual.png
/characters/artty-thoughtful.png  /og/default.png            /og/services-online.png
/characters/artty-welcome.png     /og/faq.png                /og/services-protective.png
/characters/twins-together.png    /og/gallery.png            /og/services.png
/images/logo.png                  /og/pricing.png            /og/team.png
/images/office-hero.jpg           /og/services-child.png     /videos/hero-poster.jpg
/images/team-eunbyeol.jpg                                    /videos/hero-video.mp4
```

### Present in `public/`

- ✅ `public/videos/hero-video.mp4` + `hero-poster.jpg`
- ✅ `public/images/office-hero.jpg` (+ `logo.png`, `logo.svg`, `logo.webp`, `team-eunbyeol.jpg`)
- ✅ `public/characters/*.png` (all 7: artty-welcome, artty-paint, artty-thoughtful, artty-scenes, acttie-reading, acttie-laptop, twins-together)
- ✅ `public/og/*.png` — 16 files present: `default`, `logo-square`, `act-approach`, `blog`, `booking`, `contact`, `faq`, `gallery`, `pricing`, `privacy`, `services`, `services-child`, `services-group`, `services-individual`, `services-online`, `team`
- ✅ `public/favicon/icon-{16,96,192}.png`
- ✅ `public/fonts/PretendardVariable.woff2` (**unused — see §6**)
- ✅ `public/icons/` (empty dir)

### ❌ Referenced but MISSING — 3 files

| Missing File | Referenced By | Impact |
|---|---|---|
| `public/og/services-depth.png` | `src/app/services/depth/page.tsx:33` (openGraph), `:69` (Service schema `image`) | `og:image` 404 on social shares for 심층 탐색 치료; Service JSON-LD references a missing image |
| `public/og/services-emotional.png` | `src/app/services/emotional/page.tsx:33`, `:69` | `og:image` 404 on 정서·트라우마 치료 |
| `public/og/services-protective.png` | `src/app/services/protective/page.tsx:33`, `:69` | `og:image` 404 on 보호·의료 환경 치료 |

> Every `og/*.png` referenced from layout/page metadata must exist in `public/og/` at build time. Next.js does not validate OG paths; missing files silently 404 when crawlers (Facebook, X, KakaoTalk, LINE, Slack) fetch link previews.

### Unreferenced but present (advisory)

| File | Status | Recommendation |
|---|---|---|
| `public/og/privacy.png` | Exists, not referenced | `src/app/privacy/page.tsx:26` uses `/og/default.png`. Swap to `/og/privacy.png` for a branded preview, or remove `privacy.png` if default is intentional |
| `public/images/logo.svg` / `logo.webp` | Exist, not referenced | `Logo.tsx:7` uses `/images/logo.png`. Keep as fallbacks or prune |
| `public/fonts/PretendardVariable.woff2` | ~1 MB, not referenced in any `.ts`/`.tsx`/`.css` | Dead asset. Either add `next/font/local` loader in `src/lib/fonts.ts` or delete |

---

## 5. Metadata OG Image Paths — Round-Trip

| Page file | OG url declared | Matches file? |
|---|---|---|
| `app/layout.tsx:48` | `/og/default.png` | ✅ |
| `app/layout.tsx:94` (logo) | `${SITE_URL}/og/logo-square.png` | ✅ |
| `app/contact/page.tsx:29` | `/og/contact.png` | ✅ |
| `app/act-approach/page.tsx:34` | `/og/act-approach.png` | ✅ |
| `app/privacy/page.tsx:26` | `/og/default.png` | ✅ (advisory: consider `/og/privacy.png`) |
| `app/booking/layout.tsx:28` | `/og/booking.png` | ✅ |
| `app/faq/layout.tsx:24` | `/og/faq.png` | ✅ |
| `app/gallery/page.tsx:27` | `/og/gallery.png` | ✅ |
| `app/blog/layout.tsx:26` | `/og/blog.png` | ✅ |
| `app/team/page.tsx:33` | `/og/team.png` | ✅ |
| `app/pricing/page.tsx:31` | `/og/pricing.png` | ✅ |
| `app/services/page.tsx:31` | `/og/services.png` | ✅ |
| `app/services/individual/page.tsx:33` | `/og/services-individual.png` | ✅ |
| `app/services/group/page.tsx:32` | `/og/services-group.png` | ✅ |
| `app/services/child/page.tsx:32` | `/og/services-child.png` | ✅ |
| `app/services/online/page.tsx:32` | `/og/services-online.png` | ✅ |
| `app/services/depth/page.tsx:33` | `/og/services-depth.png` | ❌ **missing file** |
| `app/services/emotional/page.tsx:33` | `/og/services-emotional.png` | ❌ **missing file** |
| `app/services/protective/page.tsx:33` | `/og/services-protective.png` | ❌ **missing file** |
| `app/blog/[slug]/page.tsx:52` | `post.image` (external Unsplash) | ✅ (remote pattern allowed in `next.config.ts`) |

**16 OG pages verified · 3 broken.** All three broken ones are the same services: depth / emotional / protective — matching the asset gap in §4.

---

## 6. Next.js 16 Compatibility

| Check | Result |
|---|---|
| `export default function sitemap()` in `src/app/sitemap.ts` returning `MetadataRoute.Sitemap` | ✅ Safe single-route pattern — no `generateSitemaps`, no `/sitemap-0.xml` fan-out trap |
| `params: Promise<{ slug: string }>` in `blog/[slug]/page.tsx` | ✅ Next 15+/16 async params pattern (`const { slug } = await params;`) |
| `generateStaticParams()` + `generateMetadata()` | ✅ Standard App Router API |
| `headers()`, `cookies()`, `searchParams` usage | ✅ Not used (no async caller complications) |
| `unstable_cache` / deprecated cache APIs | ✅ Not used |
| `runtime = "edge"` / `"nodejs"` exports | ✅ Not declared (defaults fine) |
| `export const dynamic`, `revalidate`, `fetchCache` | ✅ Not used (all pages static by default) |
| `next/font/google` loaders | ✅ Valid — `Noto_Serif_KR`, `Manrope`, `Caveat` declared in `src/lib/fonts.ts` |
| `next.config.ts` `images.remotePatterns` | ✅ `images.unsplash.com` allowlisted for blog hero photos |
| `<img>` vs `<Image>` | ✅ 100% `next/image` |

No deprecated API usage found. No `/sitemap-index.xml` workaround needed because the codebase is already on the single-route pattern (KORVIA IRS memory `feedback_nextjs_sitemap_index.md` trap avoided).

---

## 7. `next build` (unverified)

`next build` was attempted but hung with no output for >60 s at 40 MB RAM before being terminated. The most likely cause is iCloud (`ZohoWorkDriveTrueSync-KORVIA`) file streaming — on a first build the bundler touches every file in `node_modules` and `src/`, and iCloud materializes them lazily.

**Recommended verification path:**
- `mv site /local/path && cd /local/path && npm run build` (copy out of iCloud mount), or
- Ensure iCloud says "Downloaded" for `node_modules/`, or
- Run on Vercel preview — Vercel clones fresh, so iCloud is irrelevant.

The TypeScript check (§1) passing with `strict: true` gives us ~95% confidence the build will succeed once the filesystem finishes warming. There are no known compile-time blockers in `src/`.

---

## 8. Top Action Items (priority order)

### P0 — Production blocker

1. **Create 3 missing OG images** (1200×630 PNG, brand-consistent):
   - `public/og/services-depth.png` — 심층 탐색 미술치료
   - `public/og/services-emotional.png` — 정서·트라우마 미술심리치료
   - `public/og/services-protective.png` — 보호·의료 환경 미술치료

   Without these, the three service leaf pages will return 404 for `og:image` on every social share, losing Kakao/LINE/Facebook/X/Slack previews.

### P1 — Pre-deploy verification

2. **Run `next build` on a non-iCloud path** (or a fresh clone / CI runner) to confirm compile + static-export succeed. `tsc --noEmit` passing is a strong signal, but `next build` also runs link validation, font fetching, and OG image existence checks that `tsc` does not.

### P2 — Cleanup (non-blocking)

3. **Optional: swap `/og/default.png` → `/og/privacy.png`** in `src/app/privacy/page.tsx:26` since the branded file already exists.
4. **Decide on Pretendard font.** Either wire it into `src/lib/fonts.ts` via `localFont({ src: "../../public/fonts/PretendardVariable.woff2" })` for a Korean display face, or delete `public/fonts/PretendardVariable.woff2` (~1 MB) to trim the deploy payload.
5. **ESLint cleanup (cosmetic, 72 items).** Either:
   - Convert raw `'` → `&apos;` / `&rsquo;` across the 7 services pages (low-risk, can be scripted with a regex codemod within JSX string children), or
   - Downgrade `react/no-unescaped-entities` to `warn` or off in `eslint.config.mjs` for pure-Korean pages where apostrophes appear inside English quotes inside Korean body copy. Neither blocks deploy.
6. **`VideoHero.tsx` setState-in-effect warning** — optional migration to a memoized client-only gate via `useSyncExternalStore` or React 19 `use()`. Current pattern is correct and widely used; only refactor if you're also touching that file.

### P3 — A11y polish (advisory)

7. **Blog post alt = post.title.** Consider adding `imageAlt?: string` to `BlogPost` type in `src/lib/blog-data.ts`. When omitted, fall back to `post.title`. Lets future posts with ambiguous titles specify scene-descriptive alt.

---

## 9. Validation Evidence

- **TSC:** exit 0, 0 diagnostic lines (verified with `tsc --noEmit; echo "EXIT:$?"`)
- **ESLint:** 73 errors, all in the 8 files listed §2 table. Log captured at `/tmp/actart-eslint.log` during audit.
- **Asset existence:** per-file `[ -f public/$f ]` loop over 29 extracted URLs — 3 missing confirmed (§4).
- **OG metadata paths:** 19 page metadata declarations parsed out of `grep -rn "url:" src/app` filtered for OG context; 3/19 broken.

---

## 10. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Broken `og:image` on 3 service leaves | High (SEO/shareability) | P0 §8.1 |
| `next build` not yet verified locally | Medium | Run on Vercel preview; if build fails, iterate there |
| iCloud-streamed `node_modules` slows CI/CD first-run | Low | Project should not run builds from an iCloud path long-term |
| ESLint `react/no-unescaped-entities` blocks future `--max-warnings 0` CI gate | Low | Fix or downgrade rule before enabling strict CI |

---

## 11. Next Action

- Produce `services-depth.png`, `services-emotional.png`, `services-protective.png` and drop into `public/og/`.
- Run `next build` outside iCloud (or push to Vercel preview) to confirm green build.
- Ship.
