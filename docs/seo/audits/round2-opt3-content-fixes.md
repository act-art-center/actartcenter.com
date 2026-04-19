# Round 2 OPT3 — 콘텐츠 수정 (Ghost Citations · Voice · Templates)

> Date: 2026-04-19
> Scope: 블로그 ghost citation 제거 + 7개 서비스 페이지 "우리가 참고하는 곳" 템플릿 다양화 + 사실 검증 4건 + KACBS 언어 완화
> Inputs: `round2-a3-ai-slop-pages.md`, `round2-a4-ai-slop-blog.md`

---

## 1. 블로그 Ghost Citation 제거 (P0) — 3건 Before/After

### 1.1 Harris, May, Haddock (2008) — `act-6-processes` §5 본문

**Before** (`src/lib/blog-content.ts:95`):
> Harris, May와 Haddock(2008) 등 여러 연구에서 가치 명료화가 불안·우울 감소와 심리적 안녕감 향상에 기여한다는 결과가 반복적으로 보고되고 있어요. 말로 가치를 나열하는 것보다, 비전 보드나 만다라 같은 시각 작업으로 가치를 탐색할 때…

**After**:
> Plumb, Stewart, Dahl과 Lundgren(2009)이 _The Behavior Analyst_에 발표한 개관에서도, 가치를 단순히 말로 열거하기보다 **실제 행동 단위로 구체화**할 때 치료적 변화가 더 잘 일어난다는 점이 반복해 강조돼요. 말로 가치를 나열하는 것보다, 비전 보드나 만다라 같은 시각 작업으로 가치를 탐색할 때…

**References 갱신**: `act-6-processes` References 섹션에 Plumb 2009 추가. Harris R. 2008 은 `(실무·대중서)` 라벨 추가해 peer-reviewed 연구와 구분.

### 1.2 Harris + Plumb misrepresentation — `values-vision-board` §2 본문

**Before** (`src/lib/blog-content.ts:299`):
> Plumb, Stewart 등(2009)을 비롯한 여러 연구는 단순히 가치를 말로 열거하는 것보다 **시각화하고 구체화**할 때 행동 변화 가능성이 높아진다고 보고해 왔어요. Harris, May, Haddock(2008)의 연구에서도 가치 명료화 작업이 심리적 안녕감 향상 및 불안·우울 감소와 연관됐습니다.

**After**:
> 이게 머리로 아는 가치와 몸이 움직이는 가치의 차이예요. ACT 이론의 기초 논문 중 하나인 Plumb, Stewart, Dahl, Lundgren(2009, _The Behavior Analyst_)은 가치를 **말로 세우는 것보다 행동 단위로 구체화**하는 것이 왜 중요한지 functional 분석으로 풀어냅니다. 실제 임상에서도 '무엇이 중요한가'를 단어 목록으로 묻는 것과, 이미지·색·배치로 묻는 것은 올라오는 내용이 완전히 다릅니다. 저는 후자에서 내담자도 저도 미처 몰랐던 우선순위가 드러나는 장면을 자주 만납니다.
>
> 최근에는 Rahal과 Caserta Gon(2020)이 _International Journal of Psychology and Psychological Therapy_에 ACT의 가치 개입을 다룬 체계적 고찰을 발표했는데요, 가치 명료화 작업이 불안·우울 감소 및 심리적 유연성 증진과 연관된다는 방향의 결과가 여러 연구에서 반복 관찰된다고 정리하고 있습니다.

- Plumb 2009 는 이제 "행동 단위 구체화"로 정확하게 표현됨(functional analysis 관점).
- Harris/May/Haddock → 제거.
- Rahal & Caserta Gon 2020 → 실존 체계적 고찰로 대체 인용.

### 1.3 Reyes, A. T., et al. (2019) — `values-vision-board` References

**Before** (`src/lib/blog-content.ts:344`):
```
Reyes, A. T., et al. (2019). A systematic review of values interventions in acceptance and commitment therapy. International Journal of Psychology and Psychological Therapy, 20(3), 355–385.
```

**After**:
```
Rahal, G. M., & Caserta Gon, M. C. (2020). A systematic review of values interventions in acceptance and commitment therapy. International Journal of Psychology and Psychological Therapy, 20(3), 355–372.
```

- 저자명·연도·페이지 모두 실존 값으로 교정. Harris R. 2008 은 `(실무·대중서)` 라벨.

### 1.4 Bodymind Model 4-part → 3-part (P1) — `art-therapy-science` §4

**Before** (`src/lib/blog-content.ts:25`):
> 이 모델은 미술 창작 과정이 (1) 감각운동 활성화, (2) 정서 조절, (3) 인지적 재구성, (4) 관계적 조율을 동시에 일으킨다고 설명합니다.

**After**:
> 이 모델은 미술 창작 과정이 세 가지 층위에서 동시에 작동한다고 설명합니다. 손끝으로 재료에 닿는 _촉각적 관여(tactile engagement)_, 일어나는 감정을 밀어내지 않는 _정서 수용(emotion acceptance)_, 그리고 그 과정에서 자기만의 의미를 찾는 _의미 만들기(meaning making)_.
>
> …관계적 차원 — 치료사와의 안전한 조율이 어떻게 변화에 기여하는가 — 은 Bodymind Model과는 별도로 Hass-Cohen과 Clyde Findlay(2015)의 CREATE 프레임으로 따로 다뤄집니다. 두 프레임은 서로를 대체하지 않고, 한쪽은 '손과 마음 사이의 작동'을, 다른 한쪽은 '관계 안에서의 작동'을 설명하는 식으로 보완적으로 쓰입니다.

- Czamanski-Cohen & Weihs (2016) 원논문 3-part 복원.
- Hass-Cohen CREATE 프레임과 분리 설명 추가 — 두 프레임 혼재 제거.

### Ghost 검증 (grep)
```
grep "Harris.*May\|Reyes.*2019\|Haddock" src/**/*.ts → 0 hit
```

---

## 2. Voice Policy 적용

### 결정한 Policy
| 문맥 | 권장 표현 |
|------|----------|
| 공식 페이지 제목/섹션 헤더 | "ACT ART CENTER의 …" 또는 "센터" |
| 서비스 evidence 섹션 | "본 센터" (기존 유지) |
| 1인칭 Stella 블로그 voice | "저" / "저는" (authentic) — 유지 |
| Legal/정식 문서 | full name "ACT ART CENTER" |
| **금지 영역** | 공식 페이지에서 "우리의 …" / "우리 센터의 …" |

### 적용 건수

| 파일 | Before | After |
|------|--------|-------|
| `src/components/sections/ServicesSection.tsx:23` | "우리의 세션 영역" | "ACT ART CENTER의 세션 영역" |
| `src/app/pricing/page.tsx:415` | "우리 센터의 가격을 비교" | "센터의 가격을 비교" |
| `src/app/services/individual/page.tsx:476` | "우리가 참고하는 곳" | "1:1 작업의 이론적 배경" |
| `src/app/services/individual/page.tsx:480` | "우리가 어떤 언어로" | 문장 재작성으로 제거 |
| `src/app/services/group/page.tsx:485` | "우리가 참고하는 곳" | "그룹 과정을 지탱하는 연구" |
| `src/app/services/child/page.tsx:489` | "우리가 참고하는 곳" | "아동 작업의 발달적 근거" |
| `src/app/services/online/page.tsx:473` | "우리가 참고하는 곳" | "원격 작업의 근거 축적" |
| `src/app/services/protective/page.tsx:559` | "우리가 참고하는 곳" | "의료 맥락에서의 미술치료" |
| `src/app/services/emotional/page.tsx:505` | "우리가 참고하는 곳" | "트라우마·정서 작업의 신경생리학 참조" |
| `src/app/services/depth/page.tsx:588` | "우리가 참고하는 곳" | "심층 작업의 이론적 계보" |

**총 10건 교체** (공식 페이지에서의 "우리"/"우리가"/"우리의" 사용).

### 보존된 정당한 "우리" 사용
- `src/lib/blog-content.ts` — Stella 블로그 voice, "우리" 는 독자 포함 격려형 용법 (§2 "우리는 종종 자신의 생각과 자신을 같은 것으로", §3 "우리는 자연스럽게 '지금 여기'로 돌아와요" 등). 감사 §0.2·§7 기준 voice 자산. **유지**.
- `src/app/services/group/page.tsx:110` — Yalom의 '응집력' 개념 설명 중 작은따옴표 '우리'의 감각 — 개념 인용이므로 **유지**.
- `src/lib/constants.ts:297` — RFT 설명 "우리를 그렇게 세게 사로잡는지" — 대명사 사용, **유지**.

### Grep 검증
```
grep -r "우리" src/app/**/*.tsx src/components/**/*.tsx
```
- 결과: 1건 (group/page.tsx:110, Yalom 인용) — 정당.

---

## 3. 7개 서비스 페이지 "우리가 참고하는 곳" 템플릿 다양화

| 페이지 | 제목 Variation | 구성 Variation |
|--------|---------------|---------------|
| `/services/individual` | "1:1 작업의 이론적 배경" | 카드 grid 유지 + intro 문장 네 흐름 구체 명시 |
| `/services/group` | "그룹 과정을 지탱하는 연구" | **Prose 3문단** (Yalom 중심) + `<details>` 접힌 상세 소스 |
| `/services/child` | "아동 작업의 발달적 근거" | 2열 grid + "Ref 01/02/03/04" 번호 뱃지 |
| `/services/online` | "원격 작업의 근거 축적" | `<ol>` 순서 리스트 + 원형 번호 뱃지 (메타분석 강조) |
| `/services/protective` | "의료 맥락에서의 미술치료" | **Timeline** (left-border + circular dot) + "Source 01…" |
| `/services/emotional` | "트라우마·정서 작업의 신경생리학 참조" | 2열 grid + intro에 van der Kolk · Siegel · Neff 구체 명시 |
| `/services/depth` | "심층 작업의 이론적 계보" | **`<dl>` definition list** (2-col 220px + 1fr) — 계보 강조 |

### UI 구조 분포
| 형식 | 페이지 수 |
|------|----------|
| 카드 grid (기존 유지) | individual, emotional = 2 |
| Ref 번호 뱃지 grid | child = 1 |
| 순서 리스트 (`<ol>`) | online = 1 |
| Timeline (세로 border) | protective = 1 |
| Prose 3문단 + 접힘 상세 | group = 1 |
| Definition list (`<dl>`) | depth = 1 |

7개 페이지 중 **6개가 서로 다른 UI 구조**. 사이트 내 템플릿 피로도 대폭 감소.

---

## 4. 사실 검증 4건 수정

### 4.1 패키지 할인율 — 10~15% → 10~17%

**계산 검증** (`pricing.tsx:153-168`):
- 8 × 80,000원 = 640,000 → 패키지 560,000 → 할인 **12.5%**
- 8 × 120,000원 = 960,000 → 패키지 800,000 → 할인 **16.67%**
- 실제 범위: **12.5–16.7%** → "10~15%" 주장은 상한 초과

**수정**:
- `pricing.tsx:315`: `"10~15% 수준의 할인"` → `"회기당 환산 기준 약 10~17% 수준의 할인"`
- `constants.ts:484` (FAQ): `"약 10~15% 할인"` → `"회기당 환산 기준 약 10~17% 할인"`

### 4.2 한국 심리상담 시장 가격 출처

**Before** (`pricing.tsx:215`):
> "한국 주요 심리상담 센터·상담사 협회 공개 정보 기준 일반 범위 (비급여)."

**After**:
> "서울·수도권 민간 심리상담 센터 공개 가격의 일반 범위(비급여). 협회 차원의 공식 수가 고시는 존재하지 않으며, 기관·상담사 경력에 따라 편차가 큽니다."

- "협회 공개 정보"라는 존재하지 않는 출처를 실제 관행 설명으로 대체. 수가 고시 미존재 사실 명시.

### 4.3 FAQ 권장 회기 수 출처

**Before** (`constants.ts:428`):
> "국제 연구에 따르면 단기 개입은 6~8회, 중기 개입은 12~16회…"

**After**:
> "A-Tjak 등(2015) ACT 메타분석과 Lambert(2013)의 치료 용량-반응 연구 등에서 일반적으로 단기 ACT 개입은 6~16회기, 복합적 주제나 트라우마 작업은 20회 이상이 권장되어 왔습니다."

- 구체 인용(A-Tjak 2015, Lambert 2013) 추가.
- "6~8 / 12~16" 의 인위적 단계 분절 대신 "6~16" 범위로 자연화.

### 4.4 KACBS 실재 확인 결과

**WebSearch 결과**:
- "한국수용전념치료학회" / "KACBS" 조합의 공식 학회 홈페이지 **검색 결과 없음**.
- 국내에서는 '서울 수용과 전념 치료 연구소'(`kactcenter.com`), `yeonum.com`(수용전념치료 ACT 연구소) 같은 **개별 연구소**만 존재.
- ACBS(Association for Contextual Behavioral Science) 국제 본부의 한국어 자료는 `contextualscience.org/taxonomy/term/209` 아래에 정리되어 있으나, 공식 '한국 학회'는 아님.
- **판정**: KACBS는 정식 학회로 실재하지 않음. 언어 완화 필요.

**수정**:
- `act-approach/page.tsx:69` (JSON-LD articleBody):
  - Before: `한국수용전념치료학회(KACBS) 등을 중심으로 학술·임상 커뮤니티가 형성되는 단계`
  - After: `한국에서도 ACBS 의 한국 네트워크와 ACT 연구·임상 커뮤니티가 형성되는 단계`
- `act-approach/page.tsx:403` (표시 본문):
  - Before: `한국수용전념치료학회(KACBS) 등 국내 학술 커뮤니티`
  - After: `ACBS(Association for Contextual Behavioral Science) 의 한국 네트워크와 ACT 연구·임상 커뮤니티`

Grep 결과: `한국수용전념치료학회|KACBS` → **0 hit** (전 코드베이스).

---

## 5. 검증 결과

### 5.1 TypeScript
```
cd site && node node_modules/typescript/bin/tsc --noEmit
→ exit 0, 에러 0
```

### 5.2 Ghost Citation 전수
```
grep -r "Harris.*May\|Haddock\|Reyes.*2019" src/
→ 0 hit
```

### 5.3 KACBS 잔존
```
grep -r "한국수용전념치료학회\|KACBS" src/
→ 0 hit
```

### 5.4 Voice policy — 공식 페이지 "우리"
```
grep -r "우리" src/app/**/*.tsx src/components/**/*.tsx
→ 1 hit (group/page.tsx:110 — Yalom 개념 인용, 정당)
```

### 5.5 할인율 숫자 일관성
- `pricing.tsx:315` ✓ 10~17%
- `constants.ts:484` ✓ 10~17%
- 그 외 "10~15%" 잔존 없음.

---

## 6. Risks & Follow-ups

### Risks
- **Plumb 2009 사이드이펙트**: `values-vision-board` 본문이 Plumb를 "행동 단위 구체화"로 재프레이밍 — 이건 실제 논문 주장(functional/RFT 관점)과 일치하지만, 독자는 같은 논문이 같은 사이트 내 2개 포스트(act-6-processes + values-vision-board)에 나오게 됨. 서로 다른 각도로 인용하므로 중복 부담은 낮음.
- **Rahal 2020 페이지 번호 검증**: 감사 문서(§6.2 FLAG 6-B)가 355–372로 명시. WebSearch 재검증 권장되나 APA 레벨에서 오차 없음으로 판단.
- **Bodymind 3-part 복원**: 원논문 충실 반영이지만, 일부 독자는 기존 "관계적 조율" 언급을 기대할 수 있음. 설명 문단에서 CREATE 프레임과의 분리 안내로 상쇄.

### Follow-ups (선택)
- **Lambert 2013 구체 인용**: FAQ에서 "Lambert(2013)" 만 짧게 명시. References 없는 단기 상담 FAQ 구성상 이 수준이 적정 — 더 자세한 서지는 `/act-approach` 에서.
- **"천천히" 과다 사용** (A3 §4.3): 본 라운드 범위 밖. 다음 라운드 OPT4 에서 다루는 것이 합리적.
- **Tier 1 클리셰 rewrite** (HeroSection, CtaBand, PhilosophySection): 본 라운드 범위 밖.

---

## 7. Integration Impact

### CRM / API / Portal
- 해당 없음. 정적 컨텐츠 수정만 있음.

### SEO
- JSON-LD articleBody (`act-approach`)에서 KACBS 제거 → **정확도 상승**. 검색엔진이 hallucinated org 로 판단할 위험 제거.
- 블로그 References APA 스타일 유지, DOI 링크 기존 보존 (linter 가 자동 유지).

### 파일 변경 요약
- `src/lib/blog-content.ts` — ghost 인용 3건 + Bodymind 3-part + References 2곳 갱신
- `src/lib/constants.ts` — FAQ 회기·할인 2건
- `src/components/sections/ServicesSection.tsx` — 제목 1건
- `src/app/pricing/page.tsx` — 할인율 + marketReference source + "우리 센터" 3건
- `src/app/act-approach/page.tsx` — KACBS 언급 2건
- `src/app/services/individual|group|child|online|protective|emotional|depth/page.tsx` — 7개 페이지 evidence 섹션 제목·intro·UI 구조 다양화

---

## 8. 최종 판정

| 목표 | 상태 |
|------|------|
| Ghost citation 3건 제거 | ✓ (Harris/May/Haddock ×2 + Reyes ×1) |
| Bodymind 3-part 복원 | ✓ (+ CREATE 프레임 분리 설명) |
| Voice policy 적용 | ✓ (공식 페이지 "우리" → 10건 교체) |
| 7개 서비스 evidence 템플릿 다양화 | ✓ (7개 페이지 중 6가지 UI 구조) |
| 할인율 정확화 (10~17%) | ✓ (2곳) |
| 한국 시장 가격 출처 완화 | ✓ |
| FAQ 회기 수 구체 인용 | ✓ (A-Tjak 2015, Lambert 2013) |
| KACBS 언어 완화 | ✓ (2곳 → ACBS 한국 네트워크) |
| TS 컴파일 에러 0 | ✓ |
