# Multi-Engine SEO Pilot (2026-07-02)

멀티엔진 색인·노출 KB(`korvia-seo-skill/docs/`)의 패턴을 ACT에 적용한 **파일럿 브랜치**(`seo/multiengine-pilot`).
ACT는 이미 GSC/Naver 검증 스캐폴드 + LocalBusiness/MedicalBusiness JSON-LD + AI봇 robots 정책을 갖춘 상태라,
이 파일럿은 **비어 있던 조각(IndexNow, Bing/Daum 검증, 한국 크롤러 명시)만 additive로** 채운다. 배포 없음.

## 변경 (additive, 되돌리기 쉬움)
| 파일 | 변경 |
|---|---|
| `public/566ba2a3d8ddbc14dd2e7bd20418e327.txt` | **IndexNow 키 파일**(공개값, `/{key}.txt` 로 서빙). |
| `scripts/indexnow-ping.mjs` + `package.json` | **`npm run indexnow:ping`** — sitemap.xml(또는 인자 URL)을 IndexNow(Bing·Naver 등)에 통보. Google·Daum은 미참여(별도). |
| `src/lib/constants.ts` | `BING_VERIFICATION` · `DAUM_WEBMASTER` env 상수 추가(기존 GSC/Naver 패턴 동일). |
| `src/app/layout.tsx` | `verification.other` 를 다중 키로 리팩터 → **Bing `msvalidate.01`** 추가(토큰 있을 때만 emit). 기존 Naver 동작 유지. |
| `src/app/robots.ts` | **Yeti(Naver)·Daumoa(Daum) 명시 허용** 규칙 추가(`*` 로도 커버되나 한국 SEO 의도 고정). |

## 남은 콘솔 작업 (Henry — 배포·인증)
1. **콘솔 등록·소유확인**: actartcenter.com 을 GSC·Bing WMT·Naver 서치어드바이저·Daum(webmaster.daum.net, 사이트 URL+PIN)에 추가.
2. **검증 토큰 주입**: 각 콘솔이 준 토큰을 `.env`(또는 Vercel 환경변수)에 —
   `NEXT_PUBLIC_GSC_VERIFICATION` · `NEXT_PUBLIC_NAVER_VERIFICATION` · `NEXT_PUBLIC_BING_VERIFICATION` · (`NEXT_PUBLIC_DAUM_WEBMASTER`).
3. **⚠ Daum 메타명 확인**: Daum 은 URL+PIN 방식 — 콘솔 인증화면에 표시되는 **정확한 meta 태그명**을 확인 후 `layout.tsx` 에 배선(현재는 추측 배선 안 함).
4. **사이트맵 제출**: 각 콘솔에 `https://actartcenter.com/sitemap.xml`. Daum 은 `수집요청 → Seed URL(사이트맵)`.
5. **로컬 프로필**: 네이버 스마트플레이스 + Google Business Profile(ACT=로컬 1순위). `LOCAL_SEO_NAVER_PLACE_GBP.md`.
6. **발행 후**: `npm run indexnow:ping` 을 배포 파이프라인/신규 글 발행 후 실행.

KB 참조: `MULTI_ENGINE_MASTER_2026.md` · `CONTENT_AUTORULES.md` · `NAVER_SEARCHADVISOR_PLAYBOOK.md` · `DAUM_KAKAO_SEARCH.md` · `BING_YAHOO_INDEXNOW.md` · `LOCAL_SEO_NAVER_PLACE_GBP.md`.
