# ACT ART CENTER 웹사이트 구축 보고서

> 작성일: 2026-04-15
> 프로젝트: https://actartcenter.com
> GitHub: https://github.com/act-art-center/actartcenter.com

---

## 1. 프로젝트 개요

ACT ART CENTER(수용전념치료 기반 미술심리치료 연구소)의 공식 웹사이트를 WordPress에서 Next.js 16으로 완전 신규 구축하였습니다. 기존 사이트는 단일 랜딩 페이지(SEO 5/100, Google 미인덱싱)에서 30개 라우트의 풀 웹사이트로 전환되었습니다.

### 핵심 성과
- **30개 라우트** 전체 구축 (22페이지 + 6 블로그 글 + API + SEO 파일)
- **디자인 시스템 v2** 적용 (Deep Teal + Warm Orange 팔레트)
- **SEO 최적화** 완료 (JSON-LD, sitemap, robots.txt, llms.txt, 메타태그)
- **예약 시스템** 구축 (Resend 이메일 연동)
- **Vercel + Cloudflare** 배포 완료 (actartcenter.com 도메인)

---

## 2. 기술 스택

| 항목 | 기술 |
|------|------|
| Framework | Next.js 16.2.3 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Manrope (산세리프) + Caveat (악센트) |
| Icons | Lucide React |
| Animation | Framer Motion (ACT 다이어그램) |
| Email | Resend API |
| Hosting | Vercel (Edge Network) |
| DNS/CDN | Cloudflare |
| Domain | actartcenter.com |

---

## 3. 페이지 목록

### 메인 페이지 (히어로 섹션 포함)

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/` | 배경 영상 히어로 + 10개 섹션 |
| 서비스 | `/services` | 3대 치료 영역 소개 |
| ACT란? | `/act-approach` | ACT 6가지 핵심 프로세스 |
| 팀소개 | `/team` | 고은별 대표 프로필 |
| 가격 | `/pricing` | 투명한 가격 안내 |
| 블로그 | `/blog` | 카테고리 필터 + 검색 |
| FAQ | `/faq` | 아코디언 + FAQPage Schema |
| 예약 | `/booking` | 예약 폼 → Resend 이메일 |
| 연락처 | `/contact` | Google Maps + 연락처 |
| 갤러리 | `/gallery` | Masonry 이미지 그리드 |
| 개인정보처리방침 | `/privacy` | 표준약관 기반 |

### 서비스 하위 페이지

| 페이지 | 경로 |
|--------|------|
| 보호·의료 환경 | `/services/protective` |
| 정서·트라우마 | `/services/emotional` |
| 심층 탐색·연구 | `/services/depth` |
| 개인 미술치료 | `/services/individual` |
| 그룹 프로그램 | `/services/group` |
| 아동·청소년 | `/services/child` |
| 온라인 상담 | `/services/online` |

### 블로그 글 (SSG)

| 제목 | 카테고리 |
|------|---------|
| 미술치료 효과의 과학적 근거 | 미술치료 |
| ACT의 6가지 핵심 프로세스 | ACT |
| 불안을 그림으로 표현하기 | 증상별 가이드 |
| 마음챙김 드로잉: 현재에 머무르기 | 실습 가이드 |
| 트라우마와 미술 표현의 관계 | 미술치료 |
| 가치 탐색: 비전 보드 만들기 | ACT |

### API & SEO

| 경로 | 유형 | 설명 |
|------|------|------|
| `/api/booking` | Dynamic | 예약 폼 → Resend 이메일 발송 |
| `/robots.txt` | Static | AI 크롤러 선택적 접근 제어 |
| `/sitemap.xml` | Static | 30+ URL 포함 |
| `/llms.txt` | Static | AI 검색 최적화 파일 |
| `/icon.png` | Static | 파비콘 (로고 기반) |
| `/apple-icon.png` | Static | Apple Touch Icon |

---

## 4. 디자인 시스템

### 컬러 팔레트 ("The Curated Canvas")

| 역할 | 색상 | Hex | 의미 |
|------|------|-----|------|
| Primary | Deep Teal | #00534b | 권위, 안정, 그라운딩 |
| Secondary | Warm Orange | #9e4219 | 창의적 활력, 돌파 |
| Tertiary | Soft Pink | #6b3a4a | 공감, 부드러움 |
| Background | Parchment | #fff9ee | 따뜻한 양피지 |
| Surface | Cream | #f7f2e8 | 중간 톤 서피스 |
| Text | Night | #1d1c15 | 본문 텍스트 (순수 검정 금지) |

### 타이포그래피

| 용도 | 폰트 | Weight |
|------|------|--------|
| Heading | Manrope | 800, tracking -0.03em |
| Body | Manrope | 400 |
| Accent | Caveat | 400 (손글씨) |

### 디자인 원칙
- **No-Line Rule**: 1px 보더 금지, 배경색 전환으로 섹션 구분
- **Ambient Shadow**: `0 12px 32px rgba(29, 28, 21, 0.06)` — 순수 검정 금지
- **Glassmorphism**: 80% opacity + `backdrop-blur(12px)`
- **xl Roundedness**: `border-radius: 1.5rem`

---

## 5. SEO 최적화

### 메타데이터
- 모든 페이지에 `title`, `description`, `openGraph` 설정
- 키워드: 미술치료, 미술심리치료, ACT, 수용전념치료 등 13개
- 저자: 고은별
- Google Bot: `max-image-preview: large`, `max-snippet: -1`

### 구조화 데이터 (JSON-LD)
- **MedicalBusiness**: 센터 정보, 서비스, 운영시간
- **FAQPage**: FAQ 6개 항목
- **Article**: 블로그 글 (OG 태그 포함)

### AI 검색 최적화 (GEO)
- **llms.txt**: 센터 소개, 서비스, ACT 접근법, 전문 콘텐츠 링크, FAQ, 연락처
- **robots.txt**: GPTBot, anthropic-ai, PerplexityBot 선택적 허용
- 블로그 콘텐츠: Quick Answer Block 구조 적용

### Sitemap
- 30+ URL 포함 (메인, 서비스 7개, 블로그 6개, 기타 페이지)
- 페이지별 `changeFrequency` 및 `priority` 설정

---

## 6. 주요 기능

### 홈페이지 섹션 구성
1. **Hero** — 배경 영상 + 오버레이 + CTA
2. **Trust Bar** — ACT 전문, 1:1 맞춤, 사전 예약제 등
3. **치료 철학** — 이미지 + 3대 원칙 (자각, 수용, 가치 인식)
4. **ACT 6프로세스** — 인터랙티브 다이어그램 (클릭/호버)
5. **치료 영역** — 3개 서비스 카드 (이미지 포함)
6. **상담 진행 과정** — 인터랙티브 5단계 타임라인
7. **함께하는 전문가** — 대표 프로필 (실제 사진)
8. **참여자 이야기** — 후기 캐러셀
9. **FAQ** — 아코디언 (FAQPage Schema)
10. **CTA Band** — 전체폭 전환 섹션
11. **블로그 프리뷰** — 비대칭 카드 레이아웃

### 예약 시스템
- 예약 폼 제출 → `/api/booking` → Resend API → 이메일 발송
- 수신: byeolko@gmail.com, henryoh@kakao.com
- HTML 이메일 템플릿 (브랜드 컬러 적용)
- 성공/실패/전송중 상태 관리

### 블로그 시스템
- 카테고리 필터: 전체 / 미술치료 / ACT / 증상별 가이드 / 실습 가이드
- 실시간 검색 기능
- 개별 글 페이지: 저자 프로필, 관련 글 추천, CTA
- SSG (Static Site Generation) — 빌드 시 정적 생성

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

---

## 8. 인프라

### 배포 구조
```
사용자 → Cloudflare DNS → Vercel Edge Network → Next.js App
                                    ↓
                              Resend API (이메일)
```

### 도메인
- **actartcenter.com** — Cloudflare DNS → Vercel A 레코드 (76.76.21.21)
- **www.actartcenter.com** — 동일 설정
- SSL: Vercel 자동 발급

### 환경변수
| 변수 | 위치 | 용도 |
|------|------|------|
| `RESEND_API_KEY` | Vercel Production | 예약 이메일 발송 |

---

## 9. 연락처 정보

| 항목 | 값 |
|------|---|
| 이메일 | actartkorea@gmail.com |
| 인스타그램 | @act.art.center |
| 주소 | 서울시 서초구 강남대로 305, 현대렉시온 2518호 |
| 운영방식 | 사전 예약제 |

---

## 10. 향후 과제

| 우선순위 | 항목 | 상태 |
|---------|------|------|
| P0 | Google Business Profile 등록 | 미완 |
| P0 | Google Search Console 인증 | 미완 |
| P1 | Resend 도메인 인증 (커스텀 발신자) | 미완 |
| P1 | GA4 (Google Analytics) 연동 | 미완 |
| P2 | 카카오 알림톡 자동화 (n8n) | 미완 |
| P2 | 블로그 콘텐츠 추가 (월 4회) | 진행중 |
| P3 | 온라인 예약 시스템 (Supabase) | 미완 |
| P3 | 소셜 미디어 자동 포스팅 | 미완 |

---

## 11. 파일 구조

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃 (메타, JSON-LD)
│   │   ├── page.tsx                # 홈페이지
│   │   ├── globals.css             # 디자인 토큰 시스템
│   │   ├── robots.ts               # AI 크롤러 제어
│   │   ├── sitemap.ts              # 동적 사이트맵
│   │   ├── act-approach/           # ACT 소개
│   │   ├── api/booking/            # 예약 API (Resend)
│   │   ├── blog/                   # 블로그 (목록 + [slug])
│   │   ├── booking/                # 예약 폼
│   │   ├── contact/                # 연락처 + Google Maps
│   │   ├── faq/                    # FAQ
│   │   ├── gallery/                # 갤러리
│   │   ├── pricing/                # 가격
│   │   ├── privacy/                # 개인정보처리방침
│   │   ├── services/               # 서비스 (7개 하위)
│   │   └── team/                   # 팀소개
│   ├── components/
│   │   ├── layout/                 # Header, Footer, MobileNav, BookingCTA
│   │   ├── sections/               # 홈페이지 11개 섹션
│   │   ├── shared/                 # Container, SectionWrapper, PageHero, Logo, VideoHero, JsonLd
│   │   └── ui/                     # shadcn/ui (accordion, button, sheet)
│   └── lib/
│       ├── constants.ts            # 사이트 데이터 (서비스, FAQ, 팀 등)
│       ├── blog-data.ts            # 블로그 메타데이터
│       ├── blog-content.ts         # 블로그 본문 (HTML)
│       ├── fonts.ts                # 폰트 로딩
│       └── utils.ts                # cn() 헬퍼
├── public/
│   ├── images/                     # 로고, 대표 사진
│   ├── fonts/                      # Pretendard (미사용, 백업)
│   └── llms.txt                    # AI 검색 최적화
├── next.config.ts                  # Unsplash 이미지 도메인
└── package.json
```

---

*이 보고서는 Claude Opus 4.6의 지원으로 작성되었습니다.*
