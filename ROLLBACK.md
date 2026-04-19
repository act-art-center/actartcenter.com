# 롤백 절차 — SEO Overhaul (2026-04-19)

> 이 문서는 `SEO overhaul + OG images` 커밋(e7a8601, 895fb4a)을 프로덕션에 배포한 후
> 문제 발생 시 이전 안정 상태로 되돌리는 절차를 기록합니다.

## 안정 상태 (pre-deploy)

- **Git tag**: `pre-seo-overhaul-2026-04-19`
- **Git commit**: `1761086` (Final report: project completion documentation, 2026-04-15)
- **Vercel 프로덕션 배포**: `site-6hjvxbt4o-actartcenter.vercel.app` (2026-04-15, 25s 빌드, Ready)

## 새로 배포된 상태

- **Git commits**:
  - `e7a8601` — SEO overhaul: metadata + JSON-LD + sitemap + internal links across 17 pages
  - `895fb4a` — feat(og): generate 16 OG images from Acttie/Artty references
- **변경 규모**: 40 files changed, 2936 insertions(+), 267 deletions(-)
- **주요 변경**:
  - 17 페이지 전부 metadata + JSON-LD @graph 적용
  - Footer 사이트맵형, Services 7카드, Breadcrumbs 전 페이지
  - schema.ts 빌더 유틸 + Breadcrumbs 컴포넌트 신설
  - OG 이미지 16장 (1200×630 × 15 + 512×512 logo-square × 1)
  - layout.tsx @graph 전역, sitemap.ts 하드코딩 맵, `.nvmrc` `engines.node` 잠금

## 롤백 방법 (선택 1: Vercel — 즉시, 다운타임 0)

```bash
cd "/Users/henryoh/Library/CloudStorage/ZohoWorkDriveTrueSync-KORVIA/KORVIA IRS/Site Migration/actartcenter.com/site"
vercel promote https://site-6hjvxbt4o-actartcenter.vercel.app --prod
```

또는 Vercel 대시보드 → Deployments → `site-6hjvxbt4o` 옆 `⋯` → **Promote to Production** 클릭.

→ 1-3초 내 이전 상태로 즉시 복구.

## 롤백 방법 (선택 2: Git — 코드 수준)

```bash
cd "/Users/henryoh/Library/CloudStorage/ZohoWorkDriveTrueSync-KORVIA/KORVIA IRS/Site Migration/actartcenter.com/site"

# 코드를 pre-overhaul 상태로 리셋 (주의: 작업물 삭제)
git reset --hard pre-seo-overhaul-2026-04-19

# Vercel 재배포
vercel --prod
```

또는 revert 커밋으로 안전하게:

```bash
git revert 895fb4a e7a8601 --no-edit
vercel --prod
```

## 부분 롤백 (OG 이미지만)

```bash
git revert 895fb4a --no-edit
vercel --prod
```

→ 코드 변경은 유지, OG 이미지만 기본 placeholder로 복귀.

## 롤백 후 확인 리스트

- [ ] `https://actartcenter.com/` 정상 로드
- [ ] 메인 navigation 작동
- [ ] `/booking` 예약 폼 작동
- [ ] `/contact` 페이지 표시
- [ ] Google Analytics 이벤트 수신 (GSC 별도)

## 롤백 트리거 기준

다음 중 하나 발생 시 즉시 롤백 고려:

1. 홈 또는 주요 페이지 500 에러
2. Navigation 깨짐 (링크 404 또는 infinite loop)
3. 예약 폼(`/booking`) 작동 불가
4. Google Search Console에서 24시간 내 인덱스 대량 삭제 (>20%)
5. Lighthouse 성능 점수 10 이상 급락 (이전: 90+)
