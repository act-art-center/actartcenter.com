# Stella Ko digital card

## Goal
Publish the approved no-character bilingual digital card at https://actartcenter.com/card/stella. `/card` redirects to it.

## Findings
The Korean and English copy passed an independent transactional-content review: writing grade A, AI-SLOP signals 0, integrity hard-fails 0. Degree/credential descriptions were checked against the public `/team` profile; this is not an independent verification of certificates. Henry supplied the mobile number and explicitly specified `Stella Ko`.

## Changes
- Standalone static card in `public/digital-card/stella/`, served through the exact `/card/stella` rewrite. It does not inherit the main site's navigation.
- Korean/English switch updates the profile, labels, card image, download link and vCard. Both vCards contain the supplied mobile number.
- Semantic icon links for call, email, SMS, Instagram and website. No test calls, messages or booking submissions were sent.
- No-character PNG/download and lossless WebP displayed directly from content-hashed Cloudflare R2 URLs, never through Vercel Image Optimization.
- Homepage and card use Manrope and Noto Sans KR, served from R2 with `font-display: swap`. OFL licenses are included. The Korean subset covers common Korean syllables plus every Hangul character in the current site/card; unsupported future glyphs use the system sans-serif fallback.
- Explicitly approved same-major security update: Next.js and eslint-config-next 16.3.0 → 16.4.6, with non-breaking transitive lockfile fixes.
- Henry separately approved R2 CORS for ACT and the two current preview origins, GET/HEAD only. Prior policy was absent; readback and font response CORS were verified. No credential or write/delete permissions changed.

## Validation
- Independent copy/scaffolding and print typography review PASS.
- Language state test EN → KO → EN, matching image/download/vCard, stored preference and active labels PASS.
- R2 HeadObject and downloaded SHA256 checks; lossless card pixel parity; font CORS and current Hangul coverage PASS.
- Production build, tests, lint, TypeScript and production dependency audit are required before publication. Exact CI/live evidence is retained in the operations report.
- Local Next production server confirmed `/card` 308 → `/card/stella`, canonical and dependency file readback. Native Chrome observed redirect and Korean DOM/icon anchors. Live browser checks remain separately recorded.

## Risks
No degrees/licences or therapeutic outcomes are independently certified by this release. Native phone/SMS/email actions depend on the visitor's installed handlers. Development-only tooling audit findings are separate from the zero-finding production dependency gate. The R2 CORS rule is bucket-level and permits only read methods for the named origins.

## Next Action
Run CI, deploy through the existing GitHub–Vercel integration, then verify the canonical public URL, `/card` redirect, KO/EN assets and vCards. Keep the pre-release main SHA for rollback.

## Reuse
Keep the print PNG separate from lossless web WebP; switch the vCard with the visible language; preserve user-specified name spelling over older website metadata; verify CDN bytes and CORS instead of assuming successful upload means usable fonts.
