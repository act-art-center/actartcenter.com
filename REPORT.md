# ACT ART CENTER 웹사이트 구축 최종 보고서

> 작성일: 2026-04-16
> 라이브: https://actartcenter.com
> GitHub: https://github.com/act-art-center/actartcenter.com
> 배포: Vercel (Production) + Cloudflare DNS

---

## 1. 프로젝트 개요

ACT ART CENTER(수용전념치료 기반 미술심리치료 연구소)의 공식 웹사이트를 완전 신규 구축하였습니다.

- **이전**: WordPress 단일 랜딩 페이지 (SEO 5/100, Google 미인덱싱, 403 차단)
- **이후**: Next.js 16 풀사이트 (30개 라우트, SEO 최적화, 예약 시스템, 블로그)

---

## 2. 기술 스택

| 항목 | 기술 |
|------|------|
| Framework | Next.js 16.2.3 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Manrope (산세리프, 헤딩+본문) + Caveat (악센트) |
| Icons | Lucide React |
| Email | Resend API |
| Hosting | Vercel (Edge Network) |
| DNS | Cloudflare |
| Domain | actartcenter.com |
| Repository | GitHub (act-art-center/actartcenter.com) |

---

## 3. 디자인 시스템 — "The Curated Canvas"

### 컬러 팔레트

| 역할 | 색상 | Hex | 의미 |
|------|------|-----|------|
| Primary | Deep Teal | #00534b | 권위, 안정 |
| Secondary | Warm Orange | #9e4219 | 창의적 활력 |
| Tertiary | Soft Pink | #6b3a4a | 공감, 부드러움 |
| Background | Parchment | #fff9ee | 따뜻한 양피지 |
| Text | Night | #1d1c15 | 본문 (순수 검정 금지) |

### 디자인 원칙
- No-Line Rule: 1px 보더 금지, 배경색 전환으로 섹션 구분
- Ambient Shadow: 따뜻한 톤의 그림자만 사용
- Glassmorphism: 80% opacity + backdrop-blur(12px)
- xl Roundedness: border-radius 1.5rem

---

## 4. 전체 페이지 목록 (30 라우트)

### 메인 페이지 (히어로 섹션 포함)

| 페이지 | 경로 | 유형 |
|--------|------|------|
| 홈 | `/` | Static |
| 서비스 | `/services` | Static |
| ACT란? | `/act-approach` | Static |
| 팀소개 | `/team` | Static |
| 비용 안내 | `/pricing` | Static |
| 블로그 | `/blog` | Static |
| FAQ | `/faq` | Static |
| 예약 | `/booking` | Static |
| 연락처 | `/contact` | Static |
| 갤러리 | `/gallery` | Static |
| 개인정보처리방침 | `/privacy` | Static |

### 서비스 하위 페이지 (7개)

| 페이지 | 경로 |
|--------|------|
| 보호·의료 환경 미술심리치료 | `/services/protective` |
| 정서·트라우마 중심 미술심리치료 | `/services/emotional` |
| 심층 탐색·연구 기반 미술심리치료 | `/services/depth` |
| 개인 미술치료 | `/services/individual` |
| 그룹 프로그램 | `/services/group` |
| 아동·청소년 미술치료 | `/services/child` |
| 온라인 미술치료 | `/services/online` |

### 블로그 글 (6개, SSG)

| 제목 | 카테고리 |
|------|---------|
| 미술치료 효과의 과학적 근거 | 미술치료 |
| ACT의 6가지 핵심 프로세스 | ACT |
| 불안을 그림으로 표현하기 | 증상별 가이드 |
| 마음챙김 드로잉: 현재에 머무르기 | 실습 가이드 |
| 트라우마와 미술 표현의 관계 | 미술치료 |
| 가치 탐색: 비전 보드 만들기 | ACT |

### API & SEO 파일

| 경로 | 설명 |
|------|------|
| `/api/booking` | 예약 폼 → Resend 이메일 (actartkorea@gmail.com) |
| `/robots.txt` | AI 크롤러 선택적 접근 제어 |
| `/sitemap.xml` | 30+ URL 포함 |
| `/llms.txt` | AI 검색 최적화 파일 |
| `/icon.png` | 파비콘 (로고 기반) |
| `/apple-icon.png` | Apple Touch Icon |

---

## 5. 주요 기능

### 홈페이지 (11개 섹션)
1. Hero — 배경 영상 + 오버레이 + CTA
2. Trust Bar — ACT 전문, 1:1 맞춤, 사전 예약제 등
3. 치료 철학 — 이미지 + 3대 원칙
4. ACT 6프로세스 — 인터랙티브 다이어그램
5. 치료 영역 — 3개 서비스 카드
6. 상담 진행 과정 — 인터랙티브 5단계 타임라인
7. 함께하는 전문가 — 대표 실제 사진 + 프로필
8. 참여자 이야기 — 후기 캐러셀
9. FAQ — 아코디언 (FAQPage Schema)
10. CTA Band — 전체폭 전환 섹션
11. 블로그 프리뷰 — 비대칭 카드

### 예약 시스템
- 폼 제출 → `/api/booking` → Resend API → actartkorea@gmail.com
- HTML 이메일 템플릿 (브랜드 컬러 적용)
- 성공/실패/전송중 상태 관리

### 블로그
- 카테고리 필터 (전체/미술치료/ACT/증상별 가이드/실습 가이드)
- 실시간 검색 기능
- 6개 글 — 임상 경험 기반, AI 패널티 회피 톤
- 저자 프로필 + 관련 글 추천

---

## 6. SEO & AI 검색 최적화

### 메타데이터
- 모든 페이지 title, description, openGraph 설정
- 키워드 13개: 미술치료, ACT, 수용전념치료, 미술심리치료 등
- Google Bot: max-image-preview: large, max-snippet: -1

### 구조화 데이터 (JSON-LD)
- MedicalBusiness (센터 정보, 서비스)
- FAQPage (FAQ 6개 항목)
- Article (블로그 글 OG 태그)

### AI 검색 최적화
- llms.txt: 서비스, ACT 접근법, 전문 콘텐츠, FAQ, 연락처
- robots.txt: GPTBot, anthropic-ai, PerplexityBot 선택적 허용
- 블로그: Quick Answer Block 구조

### Sitemap
- 30+ URL (메인, 서비스 7개, 블로그 6개, 기타)

---

## 7. 대표 프로필

| 항목 | 내용 |
|------|------|
| 이름 | 고은별 |
| 직위 | 대표 |
| 학력 | 차의학대학교 미술치료학 박사 이수중 · 석사 |
|  | 홍익대학교 미술대학 석사 · 학사 |
| 경력 | DDP 디자인재단 오프닝 프로젝트 참여 |
| 전문 | 미술심리치료, 수용전념치료(ACT), 트라우마, 정서·심층탐색 |
| 사진 | 실제 프로필 사진 적용 (홈, 팀, 블로그 저자) |

---

## 8. 인프라

```
사용자 → Cloudflare DNS (actartcenter.com)
       → Vercel Edge Network
       → Next.js 16 App
       → Resend API (예약 이메일)
```

### 환경변수

| 변수 | 용도 |
|------|------|
| `RESEND_API_KEY` | 예약 이메일 발송 |

---

## 9. 연락처

| 항목 | 값 |
|------|---|
| 이메일 | actartkorea@gmail.com |
| 인스타그램 | @act.art.center |
| 주소 | 서울시 서초구 강남대로 305, 현대렉시온 2518호 |
| 운영방식 | 사전 예약제 |

---

## 10. 배포 이력 및 트러블슈팅

### 해결된 이슈

| 이슈 | 원인 | 해결 |
|------|------|------|
| Vercel 배포 실패 | Resend 모듈 빌드타임 초기화 | lazy init으로 변경 |
| Vercel 배포 차단 | Git author email 미설정 | git config email 설정 |
| 도메인 404 | 프로젝트 재생성 후 도메인 미연결 | vercel domains add |
| 이메일 발송 실패 | Resend 무료 플랜 수신자 제한 | 계정 소유자 이메일로 변경 |
| 프로필 사진 머리 짤림 | object-cover 중앙 크롭 | object-top + 높이 확장 |
| 줄바꿈 깨짐 | max-width 부족 | max-w-2xl로 확장 |
| 중복 className | sed 일괄 치환 부작용 | 수동 정리 |

---

## 11. 용어 감사 결과

미술치료 학계/임상 기준으로 용어 감사를 실시하여 수정:

| 수정 전 | 수정 후 | 이유 |
|--------|--------|------|
| 기업 힐링 워크숍 | 기업 미술심리치료 워크숍 | "힐링"은 상업적 용어, 임상 부적합 |
| 현재 순간 | 현재 순간 접촉 | ACT 정식 한국어 용어 |
| 가격 | 비용 | 임상 현장 용어 |
| 1회 | 회기당 | 치료 세션 표준 표기 |

### 확인된 올바른 용어 사용
- "미술심리치료" / "미술치료" — 적절히 구분 사용
- "내담자" — "환자" 대신 일관 사용
- "심리적 유연성" — ACT 핵심 개념 정확 사용
- "수용전념치료" — 정식 한국어 명칭

---

## 12. 향후 과제

| 우선순위 | 항목 | 상태 |
|---------|------|------|
| P0 | Google Business Profile 등록 | 미완 |
| P0 | Google Search Console 인증 | 미완 |
| P1 | Resend 도메인 인증 → 다중 수신자 | 미완 |
| P1 | GA4 연동 | 미완 |
| P2 | 카카오 알림톡 자동화 | 미완 |
| P2 | 블로그 콘텐츠 추가 (월 4회) | 진행중 |
| P3 | Supabase 예약 DB 시스템 | 미완 |
| P3 | 소셜 미디어 자동 포스팅 | 미완 |

---

## 13. 파일 구조

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃 (메타, JSON-LD)
│   │   ├── page.tsx                # 홈페이지 (11섹션)
│   │   ├── globals.css             # 디자인 토큰 v2
│   │   ├── robots.ts / sitemap.ts  # SEO
│   │   ├── favicon.ico / icon.png  # 파비콘
│   │   ├── act-approach/           # ACT 소개
│   │   ├── api/booking/            # Resend 이메일 API
│   │   ├── blog/                   # 블로그 (목록 + [slug] + layout)
│   │   ├── booking/                # 예약 폼
│   │   ├── contact/                # 연락처 + Google Maps
│   │   ├── faq/                    # FAQ + layout
│   │   ├── gallery/                # 갤러리
│   │   ├── pricing/                # 비용 안내
│   │   ├── privacy/                # 개인정보처리방침
│   │   ├── services/               # 서비스 (7개 하위)
│   │   └── team/                   # 팀소개
│   ├── components/
│   │   ├── layout/                 # Header, Footer, MobileNav, BookingCTA, HeaderScroll
│   │   ├── sections/               # 홈페이지 11개 섹션
│   │   ├── shared/                 # Container, SectionWrapper, PageHero, Logo, VideoHero, JsonLd
│   │   └── ui/                     # shadcn (accordion, button, sheet)
│   └── lib/
│       ├── constants.ts            # 사이트 데이터
│       ├── blog-data.ts            # 블로그 메타
│       ├── blog-content.ts         # 블로그 본문 HTML
│       ├── fonts.ts                # Manrope, Caveat
│       └── utils.ts                # cn() 헬퍼
├── public/
│   ├── images/                     # 로고, 대표 사진
│   ├── favicon/                    # 추가 파비콘 사이즈
│   └── llms.txt                    # AI 검색 최적화
└── package.json
```

---

*이 보고서는 2026년 4월 15~16일 세션에서 Claude Opus 4.6의 지원으로 작성되었습니다.*
