# Open Graph images — production checklist

> Source of truth: `docs/seo/strategy/02-per-page-optimization-spec.md` §18.7
> Target dimensions: **1200×630** (PNG). Logo is **512×512** square PNG.
> Required for Wave 3: **15 files** (1 default + 13 page-specific + 1 logo-square).
> Per-blog-post OG (6 files) is Phase 2 and can reuse `/og/default.png` until then.

## Current status

`default.png` in this folder is a **PLACEHOLDER** — a solid parchment-colored
(`#fff9ee`) 1200×630 PNG generated programmatically. It is valid enough for
Next.js `metadata.openGraph.images` validation, Twitter's summary_large_image
card, and KakaoTalk share previews to not 404 — but it is **visually empty**.

**All 15 files below must be replaced with designed assets before public launch.**

## File list

| # | File | Size | Used by | Text overlay |
|---|------|------|---------|--------------|
| 1 | `default.png` | 1200×630 | global default, `/`, `/privacy`, any page w/o override | `ACT ART CENTER` (serif) + `ACT 미술심리치료 연구소` (sub) + `Accept. Create. Transform.` (caveat) |
| 2 | `act-approach.png` | 1200×630 | `/act-approach` | `ACT 수용전념치료` (serif) + 6-process ring icon + sub: `수용 · 탈융합 · 현재순간 · 자기 · 가치 · 전념행동` |
| 3 | `services.png` | 1200×630 | `/services` hub | `ACT 미술심리치료 서비스` + 3 icons (성인/아동/온라인) + sub: `3가지 전문 영역` |
| 4 | `services-individual.png` | 1200×630 | `/services/individual` | `성인 1:1 개인 미술치료` + watercolor brush + sub: `ACT 기반 8주 프로그램` |
| 5 | `services-group.png` | 1200×630 | `/services/group` | `ACT 그룹 미술치료` + circular-table motif + sub: `4-6명 소그룹 8주` |
| 6 | `services-child.png` | 1200×630 | `/services/child` | `아동·청소년 미술치료` + playful crayon strokes + sub: `만 5세 이상, 발달단계 맞춤` |
| 7 | `services-online.png` | 1200×630 | `/services/online` | `온라인 미술치료` + laptop + art-kit icon + sub: `Zoom 세션 + 사전 배송 키트` |
| 8 | `team.png` | 1200×630 | `/team` | `대표 고은별` + profile silhouette + sub: `차의과대 미술치료 박사과정 · 홍대 석사` |
| 9 | `blog.png` | 1200×630 | `/blog` hub | `ACT 미술치료 블로그` + open journal motif + sub: `미술치료·ACT 전문 칼럼` |
| 10 | `booking.png` | 1200×630 | `/booking` | `상담 예약` + calendar icon + sub: `첫 상담 무료 · 사전 예약제` |
| 11 | `contact.png` | 1200×630 | `/contact` | `오시는 길` + map pin + sub: `서울 서초구 강남대로 305 현대렉시온 2518호` |
| 12 | `faq.png` | 1200×630 | `/faq` | `자주 묻는 질문` + speech bubble + sub: `미술치료·ACT FAQ` |
| 13 | `gallery.png` | 1200×630 | `/gallery` | `작품 갤러리` + 3-frame thumbnail row + sub: `내담자 동의 기반 비식별 작품` |
| 14 | `pricing.png` | 1200×630 | `/pricing` | `비용 안내` + simple rate card + sub: `개인 80-120k · 그룹 40-60k / 회기` |
| 15 | `logo-square.png` | 512×512 | `Organization.logo` JSON-LD | Brand mark only (no tagline), square crop |

### Phase 2 (blog-specific OG)

| File | Used by |
|------|---------|
| `blog-art-therapy-science.png` | `/blog/art-therapy-science` |
| `blog-act-6-processes.png` | `/blog/act-6-processes` |
| `blog-anxiety-art-therapy.png` | `/blog/anxiety-art-therapy` |
| `blog-mindfulness-drawing.png` | `/blog/mindfulness-drawing` |
| `blog-trauma-art-expression.png` | `/blog/trauma-art-expression` |
| `blog-values-vision-board.png` | `/blog/values-vision-board` |

Until these are designed, blog posts inherit `/og/default.png` automatically
through the parent layout's `openGraph.images`.

## Design spec (apply to all 15)

- **Background**: brand paper `#fff9ee` (matches `bg-paper` Tailwind token). Add a subtle watercolor wash / paper grain so the PNG reads as intentional not "blank".
- **Primary headline font**: Noto Serif KR, weight 700, color `#2a2a2a` (charcoal), ~88-104px.
- **Sub-headline / kicker**: Manrope, weight 500, color `#6b5d4a` (warm gray), ~36-42px.
- **Accent / tagline**: Caveat (script), color `#c9a96e` (muted gold), used sparingly.
- **Safe zone**: 96px inner padding on all sides (Twitter/LinkedIn crop-safe).
- **Logo placement**: top-left, ~120×120 px. Do not centre the logo unless it's `logo-square.png`.
- **Color accents**: use `var(--color-primary-500)` palette from `globals.css` only as small strokes / underlines — never full background.
- **Aspect ratio guard**: never place critical text in the outer 64px band (Telegram/Slack mobile crop).
- **Export**: PNG24 (not indexed), sRGB, <300 KB. Run `pngquant --quality=80-95` after export.

## Delivery checklist (per file)

- [ ] Exact pixel dims (1200×630 or 512×512 for logo)
- [ ] File size < 300 KB
- [ ] No client PII in imagery (use stock or illustrations)
- [ ] Korean copy spell-checked (`회기` not `회기기`, `수용전념치료` not `수용 전념 치료`)
- [ ] Tested in Facebook Debugger, Twitter Card Validator, and KakaoTalk share preview
- [ ] Dropped into this folder with exact filename from table above

## References

- Primary spec: `docs/seo/strategy/02-per-page-optimization-spec.md` §18.7
- Per-page OG alt text: each page's §X.7 section (e.g. §2.7 for home, §5.7 for individual)
- Brand tokens: `site/src/app/globals.css`
