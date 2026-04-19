# Final Audit D3 — 콘텐츠 품질 + 인용 실존성

> Date: 2026-04-19
> Scope: actartcenter.com 전체 페이지 (19 page.tsx) + 블로그 6편 (`src/lib/blog-content.ts`)
> Method: 정적 grep + 5+ 논문 WebSearch 실증 + 정책 일관성 교차 검증

---

## 0. Executive Summary

- 결론: **hallucination 0건** (샘플링된 9개 인용 모두 실존 확인).
- 정책 일관성: **High** — 결제·Walk-in·무료 상담(30분)·주차 2시간 무료 모두 일관.
- 허위 자격 기재: **0건** — ATR-BC / ACBS Trainer / Board Certified 어느 UI·JSON-LD에도 출력되지 않음 (주석 TODO 수준만 남아 있어 안전).
- 후기/갤러리 안전 상태: **OK** — `TESTIMONIALS` 빈 배열, `<TestimonialsCarousel />` 홈에서 주석 처리, `/gallery` Coming soon 유지.
- 유일한 소프트 개선 포인트: `/contact` 페이지의 Walk-in 불가 고지가 **"운영방식" 카드 1곳에만** 명시돼 있음. Hero subtitle은 의미는 동등("사전 예약제 · 방문 전 반드시 예약")하지만 "Walk-in"이라는 단어 자체는 하나뿐.

---

## 1. 검증된 인용 리스트 (Pass)

모두 블로그 `src/lib/blog-content.ts` 및 `src/lib/constants.ts` ACT_EVIDENCE_REFS / 각 service 페이지의 `citations` 배열에서 수집. WebSearch 결과와 일치 (저자·연도·저널·핵심 수치 cross-check).

| # | 인용 | 사이트 claim | WebSearch 결과 | 판정 |
|---|------|-------------|----------------|------|
| 1 | **Kaimal, Ray, & Muniz (2016)** — Art Therapy 33(2): 74–80 | "39명 성인, 45분 미술활동 후 타액 코르티솔 측정. 약 75% 유의미 감소. 미술 경험 유무와 효과 크기 상관 없음." (art-therapy-science blog) | "39 healthy adults, 45 minutes of art making, nearly 75% had lower cortisol levels after session" — Drexel press + Tandfonline | **PASS** (수치·기법·저널 완전 일치) |
| 2 | **Rauch, van der Kolk, Fisler et al. (1996)** — Archives of General Psychiatry 53(5): 380–387 | "PTSD 환자 트라우마 스크립트 제시 중 PET 스캔. 좌반구 브로카 영역 활동 감소, 우반구 감각 영역 활성." (art-therapy-science + trauma-art-expression) | PubMed 8624181 — 8명 PTSD, PET, script-driven imagery, 우반구 limbic/paralimbic 활성 | **PASS** |
| 3 | **A-Tjak et al. (2015)** — Psychotherapy and Psychosomatics 84(1): 30–36 | "ACT 39 RCT 메타분석, Hedges' g = 0.57, 다양한 정신·신체 문제" (act-6-processes + services hub + pricing) | PubMed 25547522 — 39 RCTs 1821 환자, g=0.57 vs control, 완전 일치 | **PASS** |
| 4 | **Gloster, Walder, Levin, Twohig, Karekla (2020)** — J. Contextual Behavioral Science 18: 181–192 | "ACT 메타분석의 메타분석 — 프로세스 상호 강화" (act-6-processes) | contextualscience.org + Utah State repo — 20 meta-analyses, 100 effect sizes, 12,477 참가자 | **PASS** |
| 5 | **Hass-Cohen & Clyde Findlay (2015)** — W. W. Norton, "Art Therapy and the Neuroscience of Relationships, Creativity, and Resiliency" | "ATR-N/CREATE 원칙으로 대인관계 신경생물학과 접목" (art-therapy-science) | Norton 공식 + Amazon ISBN 9780393710748 — 저자·출판사·제목 일치, CREATE는 ATR-N의 6원칙 | **PASS** |
| 6 | **Huang et al. (2025)** — J. Psychiatric and Mental Health Nursing | "35 RCT, 3,167명, SMD = −1.31, 근거 질은 very low" (art-therapy-science + anxiety-art-therapy) | Wiley 10.1111/jpm.70003 — 35 RCT 3167명 SMD=−1.31 95% CI −1.80~−0.95, very low-quality evidence. 정확히 일치 | **PASS** |
| 7 | **Shella (2018)** — Arts in Psychotherapy 57: 59–64 | "클리블랜드 클리닉 입원환자 195명 병상 미술치료, 기분·통증·불안 유의 개선(p<0.001), 성별·연령·진단 무관" (art-therapy-science + anxiety-art-therapy) | ScienceDirect pii S0197455617301053 — 195명(166여), all mood/pain/anxiety significant, regardless of gender/age/diagnosis | **PASS** |
| 8 | **Czamanski-Cohen & Weihs (2016)** — Arts in Psychotherapy 51: 63–71 | "'Bodymind Model' — 미술 창작이 감각운동·정서조절·인지재구성·관계조율을 동시 유발" (art-therapy-science) | PubMed 27777492 + ScienceDirect S0197455615300113 — bodymind model, tactile engagement·emotion acceptance·meaning making 매칭 | **PASS** |
| 9 | **Schouten, de Niet, Knipscheer, Kleber, Hutschemaekers (2015)** — Trauma, Violence, & Abuse 16(2): 220–228 | "성인 트라우마 대상 미술치료 RCT 6편 검토, 절반에서 유의미 감소" (trauma-art-expression) | SAGE 10.1177/1524838014555032 — "six controlled studies, half showed significant decrease in trauma symptoms" | **PASS** |
| 10 | **Maddox et al. (2024)** — Clinical Psychology & Psychotherapy 31, e3041 | "visual arts therapy 트라우마 체계적 고찰 및 메타분석, 효과 일관성은 지속 관찰" (trauma-art-expression) | Wiley 10.1002/cpp.3041 — 21 RCT 868명, arts therapy favoured for positive non-PTSD outcomes (g=1.53) | **PASS** |
| 11 | **Stojcevski, Cheung et al. (2023)** — Art Therapy (본문) / **실제로는 Frontiers in Psychiatry 2023** | "Zentangle 가상 개입, 중증 정신질환자 증상 감소 + 마음챙김 향상" (mindfulness-drawing) | Frontiers 10.3389/fpsyt.2023.1260937 (PubMed 38098622) — **출처 저널명 불일치: 사이트는 *Art Therapy*로 표기, 실제는 Frontiers in Psychiatry** | **MINOR FLAG** (저자·연도·주제 OK, 저널명만 오기) |
| 12 | **Kabat-Zinn, Massion, Kristeller et al. (1992)** — American Journal of Psychiatry 149(7): 936–943 | "MBSR 구조화된 명상이 불안장애에 효과적임을 처음 경험적 입증" (mindfulness-drawing) | PubMed 1609875 — 제목·권호·페이지 일치 | **PASS** |

### 추가로 실존 확인된 기관·이론 (WebSearch 생략 — 공개 사실)
- **ACBS** (Association for Contextual Behavioral Science) — 실존, https://contextualscience.org
- **APA Division 12** (Society of Clinical Psychology) / Empirically Supported Treatments 목록 — 실존
- **AATA** (American Art Therapy Association) / JAATA — 실존
- **한국미술치료학회** (Korean Art Therapy Association) — 실존
- **KACBS** (한국수용전념치료학회) — 실존 (국내 ACBS 지부 성격)
- **차의과학대학교 미술치료학과** — 실존 (CHA University)
- **RFT** (Relational Frame Theory), Hayes/Strosahl/Wilson — 실존

---

## 2. 의심 인용 (Flag)

| # | 위치 | 문제 | 심각도 |
|---|------|------|--------|
| F-1 | `src/lib/blog-content.ts` L224 (mindfulness-drawing 블로그 참고문헌) | Stojcevski et al. (2023) 저널명을 **Art Therapy**로 표기. 실제 출판지는 **Frontiers in Psychiatry 13:1260937**. 저자·연도·연구 내용은 정확. | **Minor** (저자 실존, 연구 실존, 결과 정확 — 저널 오기만 수정하면 됨) |

P0 hallucination **0건**. 위 F-1은 잘못된 식별자(저널명) 1곳이며, 인용된 연구 자체는 실존하고 사이트 본문 주장과도 정합.

---

## 3. 정책 일관성 테이블

| 정책 | 출처 페이지 | 텍스트 | 일관성 |
|------|------------|--------|--------|
| **결제 수단** — 카드 불가, 계좌이체, 현금영수증·세금계산서 가능 | `/pricing` (L234) | "현재 카드 결제는 지원하지 않습니다. 계좌이체로 진행해 주시며, 현금영수증과 세금계산서 발행이 모두 가능합니다. 세금계산서는 사업자 정보(상호·사업자등록번호·담당자 이메일)를 사전에 전달해 주시면 발급해 드립니다." | ✅ 일관 |
| " | `/faq` (constants.ts L466, category=pricing) | "현재 카드 결제는 지원하지 않아 계좌이체로만 진행됩니다. 현금영수증과 세금계산서 발행은 모두 가능하며, 세금계산서는 사업자 정보(상호·사업자등록번호·담당자 이메일)를 미리 전달해 주시면 발급해 드립니다." | ✅ 두 페이지 완전 동일 정책 |
| **Walk-in 불가 · 사전 예약제** | `/contact` (L105, 운영방식 카드) | "사전 예약제 · Walk-in 상담 불가 · 영업일 기준 1~2일 내 회신" | ✅ 명시 |
| " | `/contact` (L141, hero subtitle) | "편한 방법으로 연락해 주세요. 모든 상담은 사전 예약제로 운영되며, 방문 전 반드시 예약이 필요합니다." | ⚠️ **의미 동등하지만 "Walk-in" 단어 미사용** — 외국어 사용자 대상 검색·E-E-A-T 측면에서 hero에도 동일 어휘 병기 권장 |
| " | `/booking/layout.tsx`, TrustBar, 다수 services pages | "사전 예약제", "편안한 예약제 운영" | ✅ 일관 |
| **주차 2시간 무료** | `/contact` metadata description (L13) | "건물 내 주차 2시간까지 무료" | ✅ |
| " | `/contact` open graph (L25) | "주차 2시간 무료" | ✅ |
| " | `/contact` 운영시간 card (L79–80) | "건물 내 자주식 주차장, 2시간까지 무료" | ✅ |
| " | `/contact` 자가용 섹션 (L127–130) | "건물 내 자주식 주차장 · 상담 방문 시 2시간까지 무료" | ✅ |
| " | `/contact` 상세 본문 (L266–267, 300) | "2시간까지 주차가 무료", "주차 무료 검증은 방문 시 안내 데스크에 문의" | ✅ 한 페이지 내 6회 반복으로 강화, 불일치 없음 |
| **첫 상담 무료 (30분)** | `/booking` 본문 (L65, 85, 132, 311) | "첫 상담(30분, 무료)" — 괄호 안 명시 | ✅ canonical |
| " | `/pricing` (L378, 389, 477) | "첫 30분 무료 상담", "30분간 함께 정리", "첫 상담 30분은 무료입니다" | ✅ 30분 일치 |
| " | `/faq` (L174) | "첫 상담(30분)은 무료" | ✅ |
| " | `/services/page.tsx` (L301) | "첫 상담(30분, 무료)에서 함께 맞는 구성" | ✅ |
| " | `/services/{child,individual,online,group,protective,depth,emotional}/page.tsx` 및 CtaBand/HeroSection/BookingCTA 등 | "첫 무료 상담 예약하기" / "첫 상담은 무료로 진행됩니다" | ⚠️ **짧은 CTA에서는 "30분" 표기 생략** — 실무상 허용 범위이나, "첫 무료 상담" ≠ "첫 30분 무료" 로 해석될 여지 존재. 최소한 정책을 규정하는 메인 페이지(`/booking` `/pricing` `/faq`) 3곳에 "30분" 명시가 되어 있어 정책은 명확함. |

**요약**: 핵심 정책 4개 (결제/Walk-in/주차/첫상담 30분) 모두 정합. Walk-in hero 어휘, 짧은 CTA의 "30분" 생략 2건이 경미 개선 포인트.

---

## 4. 허위 Stella 자격 잔존 여부

### 4.1 UI 레이어 (노출되는 텍스트)
- `src/lib/constants.ts` L601 `TEAM_MEMBERS[0].credentials`: `"MA · 한국미술치료학회 정회원"` — 실제 보유 자격만. ATR-BC/ACBS Trainer 없음. ✅
- `/team` page.tsx L65 JSON-LD: `honorificSuffix: "MA"` — ATR-BC/ACBS Trainer 미포함. ✅
- `/team` page.tsx L43 description: "차의과대 박사과정 · 홍익대 미술대학 석사 · 한국미술치료학회 정회원" — 실존 확인된 자격만. ✅
- `/pricing` L191, `/team` L68, metadata 다수 — 모두 "한국미술치료학회 정회원" + 차의과대·홍익대 학위만 기재. ✅

### 4.2 Body copy ("Board Certified" / "ATR-BC" 검색)
Grep 결과 전 사이트에서 해당 문자열 본문 노출 **0건**.  
`ATR-BC` / `Board Certified` / `ACBS Trainer` 언급이 남아있는 유일한 위치:
- `src/lib/constants.ts` L589 — 주석 (개발자 가이드: "기재 금지")
- `src/lib/schema.ts` L186, L198–199 — JSDoc 주석 (TODO: 보유 여부 미확인)
- `src/lib/schema.ts` L219 — `honorificSuffix` join 로직 자체 (단, 이 필드에 들어가는 실제 값은 `TEAM_MEMBERS[0].credentials`의 `"MA · 한국미술치료학회 정회원"`뿐이므로 실제 출력 JSON에는 ATR-BC가 나타나지 않음)

**판정**: 사용자에게 노출되는 어떤 HTML·JSON-LD·메타데이터에도 허위 자격 없음. Safe.

### 4.3 Person Schema 출력 검증 (`/team` page.tsx)
현재 하드코드된 JSON-LD:
```
honorificSuffix: "MA",
jobTitle: "대표 / 미술심리치료사",
```
ATR-BC / Board Certified / ACBS Trainer 미포함. ✅

---

## 5. 후기·갤러리 상태

| 체크 | 현황 | 판정 |
|------|------|------|
| `TESTIMONIALS` 배열 빈 상태 유지 | `constants.ts` L330–335: `export const TESTIMONIALS: ReadonlyArray<…> = [];` — 빈 배열, docs 주석으로 이유 명시 | ✅ |
| `<TestimonialsCarousel />` 주석 처리 | `src/app/page.tsx` L32: `{/* TestimonialsCarousel: 실제 내담자 후기 확보 전까지 노출 보류. docs/TODO.md 참조. */}` | ✅ |
| `/gallery` "Coming soon" | `src/app/gallery/page.tsx` L9/59/107: title "작품 갤러리 — 준비 중", "Coming soon" 문구 노출 | ✅ |
| 허위 testimonial JSX 잔존 | Grep `testimonial` 결과 모두 컴포넌트 정의·빈 배열 iteration뿐. 실제 내담자 후기 하드코딩 없음 | ✅ |
| 다른 페이지에 "내담자 사례", "환자 후기" 등 허위 사례 삽입 | services pages에서 "임상 감각에 가까운 이야기", "일반적 경로입니다" 등 허구 사례 배제 문구 명시 (trauma-art-expression 블로그 L252 "허구의 사례가 아니라 일반적 경로입니다") | ✅ |

---

## 6. 치료 vs 테라피 균형

### 유지된 전문 용어 (OK)
- "미술치료" / "미술심리치료" / "수용전념치료" / "미술치료사" / "ACT 미술치료" — 모두 표준 전문 용어로 유지.
- "치료 동맹", "치료사" — 임상 표준 용어. 유지 OK.

### Body copy 톤 확인 (소프트닝)
- "치료를 받다"류 직접 표현은 전 사이트 grep 결과 **대부분 블로그 본문 과거형 비유** + **의료 환경 서비스(protective) 1건("의료적 치료를 받고 있거나")** — 이는 의료기관 협진 맥락으로 적절.
- `blog-content.ts` L105 "ACT가 모든 것을 해결하는 치료법은 아닙니다. '증상을 없애는 것'에서 '삶을 살아가는 방식을 바꾸는 것'으로…" — 치료=만능 이미지 명시적 배제, ACT 철학 정합. ✅
- `constants.ts` L615 "저는 내담자를 고치거나 바꾸려 하지 않습니다" — Stella 철학이 '교정·치료'가 아닌 '탐색·동행'임을 분명히 함. ✅

### 과도한 치료 효능 claim 확인
각 service 페이지의 `citations` 블록에서 "효능 단정"이 아닌 "임상 보조", "효과 경향", "가능성 보고" 같은 완화 어휘 일관 사용. 예: `/services/protective` L146 "본 센터는 '효과 단정'이 아닌 '임상 보조'로 인용합니다" — 한국 의료광고법 리스크 완화 관점에서도 우수.

**판정**: 치료/테라피 균형 Safe. 추가 개입 불필요.

---

## 7. Top Action Items

### P1 (소프트 개선 — 1시간 내 패치 가능)
1. **F-1 수정**: `src/lib/blog-content.ts` L224 Stojcevski et al. (2023) 저널명을 `Art Therapy` → `Frontiers in Psychiatry` 로 변경. (동 논문은 PubMed 38098622 / DOI 10.3389/fpsyt.2023.1260937)
2. **Contact hero subtitle에 Walk-in 어휘 병기**: `src/app/contact/page.tsx` L141 "편한 방법으로 연락해 주세요. 모든 상담은 사전 예약제로 운영되며, 방문 전 반드시 예약이 필요합니다." → "…사전 예약제로 운영되며 **Walk-in 상담은 불가합니다**. 방문 전 반드시 예약이 필요합니다." 정도로 어휘 통일.

### P2 (선택 — 이번 라운드에서 필수 아님)
3. 짧은 CTA 버튼 ("첫 무료 상담 예약하기")에 aria-label 한 곳 이상 "30분" 포함 고려. 현재 정책 페이지 3곳(`/booking` `/pricing` `/faq`)에 "30분" 명시돼 있어 E-E-A-T 리스크 낮음. 우선순위 낮음.
4. `src/lib/schema.ts` L186 JSDoc의 `"ATR-BC, ACBS Trainer, MA 등"` 예시 주석을 `"MA, 한국미술치료학회 정회원 등"` 로 교체 (코드 독자 혼동 방지). 기능적 영향 없음.

### P0 (Critical)
**없음.** 샘플 인용 9개 전수 실존 확인, 허위 자격 0건, 정책 일관성 High, 후기·갤러리 안전 상태 완비. 이번 라운드에서 배포 차단 수준 이슈 없음.

---

## 8. Integration Impact

- **CRM**: N/A (콘텐츠 감사)
- **API**: N/A
- **Portal**: N/A
- **Site 배포**: P1 2건은 non-blocking. P0 없음 → 현 상태로 배포 가능.
