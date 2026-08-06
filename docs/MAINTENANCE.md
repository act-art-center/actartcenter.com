# ACT ART CENTER 웹사이트 유지보수

## 검증 명령

```bash
npm ci
npm test
npm run lint
npm run typecheck
npm audit --omit=dev --audit-level=high
npm run build
```

이미지 중복 감사에는 승인 이미지 정책과 기존 기준선 이슈가 있으므로 CI에서 관찰형으로 실행합니다. 승인 없이 블로그 커버나 대표 이미지를 바꾸지 않습니다.

```bash
npm run audit:heroes
```

운영 사이트의 sitemap URL, 핵심 SEO 요소와 보안 헤더는 다음으로 확인합니다.

```bash
npm run audit:live
SITE_URL=https://preview.example.com npm run audit:live
```

## 변경 및 배포 체크리스트

- [ ] 작업 전 `git status --short`와 `git fetch origin`을 확인합니다.
- [ ] 기존 문구·디자인·상단 메뉴를 보존하고 요청 범위만 변경합니다.
- [ ] 이미지 원본, 사용 권한, 비율, 무잘림, 대체텍스트를 확인합니다.
- [ ] 페이지 변경 시 metadata, canonical, JSON-LD, sitemap 수정일, llms 문서를 함께 검토합니다.
- [ ] `npm test`, `npm run typecheck`, `npm run build`, 운영 의존성 감사를 통과합니다.
- [ ] 관련 변경만 선택 스테이징하고 diff에 비밀값·생성물이 없는지 확인합니다.
- [ ] `main` 푸시 후 GitHub Actions와 배포 상태를 확인합니다.
- [ ] 운영 URL을 즉시 확인하고 CDN 반영 지연 후 한 번 더 조회합니다.
- [ ] Google Drive Master DB에 변경·배포·페이지 QA·이미지 권리를 기록합니다.

## 장애 및 롤백

1. 추가 변경을 중지하고 실패 URL, 시각, 커밋, HTTP 상태, 로그를 기록합니다.
2. 작업 트리가 깨끗한지 확인합니다. 다른 사람의 미커밋 변경을 삭제하지 않습니다.
3. 최근 변경이 원인으로 확인되면 `git reset --hard` 대신 `git revert <commit>`으로 되돌리는 새 커밋을 만듭니다.
4. 롤백 커밋도 동일한 빌드·테스트를 통과한 뒤 푸시합니다.
5. 운영 사이트를 재검증하고 Master DB의 변경이력·배포검증·할 일에 원인과 예방 조치를 남깁니다.

## 자동화

- `.github/workflows/ci.yml`: push/PR 빌드·단위 테스트·타입·보안 검사
- `.github/workflows/weekly-site-audit.yml`: 매주 운영 sitemap·SEO 필수 요소·보안 헤더 검사
- `.github/dependabot.yml`: npm 및 GitHub Actions 주간 업데이트 PR
- `scripts/audit-live-site.mjs`: 운영 URL 감사 로직

## 보안 원칙

- `.env*`, Google OAuth 토큰, Resend API 키 등 비밀값을 커밋하지 않습니다.
- 예약 API 입력은 길이·형식 검증과 HTML 이스케이프를 거칩니다.
- 운영 로그와 보고서에 예약자의 이름·전화·이메일·상담 내용을 기록하지 않습니다.
- CSP는 외부 리소스 인벤토리와 Report-Only 관찰 없이 즉시 강제하지 않습니다.
