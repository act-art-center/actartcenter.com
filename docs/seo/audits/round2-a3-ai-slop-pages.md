# Round 2 A3 — AI Slop 전수 감사 (페이지·UI)

> 감사 범위: `src/app/**/page.tsx` (HomePage + 18 페이지, `/blog/[slug]` 제외),
> `src/app/**/layout.tsx`, `src/components/**/*.tsx` (sections/, layout/, shared/),
> `src/lib/constants.ts` (FAQ_ITEMS / TEAM_MEMBERS / SERVICES_ALL 등 UI 카피)
> 감사일: 2026-04-19
> 기준: Tier 1 상투 표현 → Tier 5 과장 주장까지 5개 계층

---

## Executive Summary

| Tier | 의미 | Flag 수 | 심각도 |
|------|------|--------|--------|
| Tier 1 — Obvious slop | 상투 표현, 수식어 중첩 | **14** | 중 (재작성 권장) |
| Tier 2 — Sentence uniformity | 평균 문장 길이 | **8 섹션** | 중 |
| Tier 3 — Listicle uniformity | Bullet/카드 반복 구조 | **9 섹션** | 중 |
| Tier 4 — Cross-page inconsistency | 페이지 간 보이스/용어 불일치 | **6** | 높음 |
| Tier 5 — Suspicious facts | 검증 불가 수치/주장 | **4** | 높음 (신뢰도) |

**총 41건** flag. 정작 "OBVIOUS AI" 는 적은 편 — 인용·임상 근거가 실재 연구자 이름으로 고정되어 있어 ChatGPT 특유의 hallucinated fluff 는 거의 없다. 대신 **구조적 획일성**(카드 4~6개 동일 grid, 본문 리듬 평탄)과 **voice 불일치**("우리" ↔ "본 센터" ↔ "저희")가 가장 큰 문제.

### 최우선 수정 대상 (Top 3)
1. **"우리" / "저희" / "본 센터" 혼용** — 10개 이상 페이지에서 voice 불안정 (Tier 4 §4.1)
2. **7개 서비스 페이지 "우리가 참고하는 곳" 동일 템플릿 반복** (Tier 3 §3.1)
3. **FAQ `act` 5문항 / act-approach 자기인식 5문항 / 5가지 이유 — 동일한 "5개 슬롯" 구조가 3개 섹션 연속** (Tier 3 §3.2)

---

## Tier 1 — Obvious slop (재작성 제안 포함)

> AI 특유의 표현이라기보다 **흔한 상담업계 클리셰**가 대부분. 다만 전체 사이트에서 동일 어구가 반복되면 "템플릿 느낌"이 강해지므로 rotation 필요.

### 1.1 `src/components/sections/HeroSection.tsx:22-26`
```
ACT 미술심리치료로
마음을 탐색하고, 삶의 의미를 재발견합니다
```
- **판정**: "마음을 탐색" + "삶의 의미를 재발견" — 심리상담 분야 AI가 가장 자주 쓰는 두 구절의 연속. 문학적 가치는 있으나 이 사이트는 동일 구절이 SITE_TAGLINE_KR (`constants.ts:7`: "Exploring the mind through art, rediscovering meaning in life.") 에도 동일하게 나와, 페이지 내에서 **같은 문구의 한↔영 duplication**.
- **Rewrite 제안**:
  - `"ACT 수용전념치료로, 말로 꺼내기 전의 감정을 먼저 다룹니다"`
  - `"언어 이전의 것부터 — ACT 미술심리치료"`
  - 요지: "마음/삶/의미" 같은 추상 3종 세트 대신 **구체 동작 동사**(꺼내다·다루다·고르다) 로 교체.

### 1.2 `src/components/sections/CtaBand.tsx:18-21`
```
마음의 색을 찾아보세요
첫 상담에서 당신에게 맞는 프로그램을 함께 설계합니다.
```
- **판정**: "마음의 색" 은 ChatGPT가 미술·심리 주제에서 기본값처럼 내놓는 은유. 의미가 겹치는 hero ("마음을 탐색") 와 동시 노출되면 톤이 평탄해진다.
- **Rewrite 제안**:
  - `"말이 잘 나오지 않을 때, 먼저 색을 골라 보세요"`
  - `"어디서부터 시작해야 할지 모르겠다면, 여기서 시작합니다"`

### 1.3 `src/components/sections/PhilosophySection.tsx:26-27`
```
해석이나 빠른 변화보다는 내담자의 경험과 안전한 과정을 존중하며,
증상 완화를 넘어서 삶의 방향성과 의미를 함께 탐색합니다.
```
- **판정**: "경험과 안전한 과정을 존중" + "삶의 방향성과 의미" + "함께 탐색" — 한 문장에 상담업계 3대 클리셰 동시 탑재. "삶의 의미" 는 HeroSection·CtaBand·BlogPreview 까지 포함해 **페이지에서 4~5회 반복**됨.
- **Rewrite 제안**:
  - `"해석을 서두르지 않습니다. 내담자가 스스로 만든 의미 쪽이 언제나 더 오래 갑니다."`
  - 포인트: "존중합니다" 같은 빈 declaration 대신 **이유(해석 서두르지 않음)** 를 앞세운다.

### 1.4 `src/app/act-approach/page.tsx:477-480` — "05. 당신이 이상한 게 아니라, 인간이라면 겪는 것"
```
ACT 의 핵심 메시지 중 하나는 "고통은 언어를 쓰는 인간의 기본 조건이지 개인의
결함이 아니다" 라는 프레임입니다. "나는 왜 이렇게까지 힘들지?" 라는 자기비난의
악순환에서 한 걸음 물러설 수 있도록 돕습니다.
```
- **판정**: ChatGPT가 ACT 를 소개할 때 가장 자주 쓰는 "인간이라면 겪는 것" 프레임. 사실은 맞지만 표현 자체가 temperature 0.7 기본 출력처럼 느껴진다. `01`~`04` 와 달리 **구체 근거 없이 감성 위로** 로만 끝난다.
- **Rewrite 제안**:
  - `"05. \"내가 특히 약한 게 아닐 수도 있다\""` — 헤더 톤 낮추고
  - 본문은 Hayes 의 구체 개념("creative hopelessness" 혹은 "normal human suffering")을 인용. 지금은 출처 없는 위로.

### 1.5 `src/app/team/page.tsx:120` — PageHero subtitle
```
subtitle="미술과 심리치료 모두에서 깊은 전문성을 갖춘 치료사가 함께합니다."
```
- **판정**: "깊은 전문성" + "함께합니다" — AI가 자기소개 섹션에서 쓰는 2대 전형. 실제 정보(차의과대 박사과정, 한국미술치료학회 정회원)가 훨씬 강한데 subtitle 이 그걸 희석시키고 있다.
- **Rewrite 제안**:
  - `subtitle="차의과학대학교 박사과정에서 배운 것과, 세션에서 만난 것이 여기에 담깁니다."`
  - 혹은 `subtitle="미술대학에서 20년, 임상에서 10년. 두 길이 만나는 자리입니다."` (실제 경력 반영 시)

### 1.6 `src/app/team/page.tsx:329` CTA
```
첫 상담은 무료로 진행됩니다. 편안한 마음으로 문의 주세요.
```
- **판정**: "편안한 마음으로 문의 주세요" 는 거의 모든 한국 심리상담 사이트 AI 생성 카피의 말미. 의미는 맞지만 고유도가 0 이다.
- **Rewrite 제안**:
  - `"결정은 아직 하지 않으셔도 됩니다. 30분 대화만 먼저 하시면 됩니다."` (booking 페이지와 voice 통일)

### 1.7 `src/components/sections/TeamSection.tsx:14`
```
<h2>함께하는 전문가</h2>
```
- **판정**: "함께하는 전문가" — AI 기본값. 한 명뿐인 센터에서 복수형(전문가"들"이 아니라도 "함께하는" 이 사람 수를 모호하게)은 약간 어색.
- **Rewrite 제안**: `"세션을 진행하는 치료사"` 또는 `"고은별 대표"` 로 직접 호명.

### 1.8 `src/lib/constants.ts:357` FAQ category description
```
"처음 오시는 분들이 가장 많이 주시는 질문입니다."
```
- **판정**: "가장 많이 주시는 질문" — 위로형 보편표현. 다른 카테고리 descriptions(`"회기 간격·기간·종결까지, 세션의 흐름을 안내합니다."`, `"결제 수단·현금영수증·보험 가능 여부를 안내합니다."`) 는 **구체 아이템을 열거**하는 반면 이 한 줄만 추상적이라 tone variance 가 튄다.
- **Rewrite 제안**: `"미술 실력·복장·비밀유지 등, 첫 회기 전 확인하시면 좋은 것들."`

### 1.9 `src/app/services/emotional/page.tsx:608` CTA 제목
```
마음이 무거울 때, 천천히 시작해도 괜찮습니다
```
- **판정**: 사이트 내 "천천히" 총 사용 횟수 = 약 10회 (감사 기준 정책은 Tier 4 §4.3 참조). 이 CTA는 emotional 페이지 장면상 감정적으로 맞지만, **같은 페이지 안에서만 "천천히" 가 5회** 반복 (L13, L105, L338, L417, L608). 헤더에서까지 쓰면 피로.
- **Rewrite 제안**: `"오래 걸어도 괜찮습니다"` / `"자극량을 올리지 않고 시작합니다"` 로 어휘 variation.

### 1.10 `src/app/services/individual/page.tsx:548` CTA 제목
```
첫 무료 상담부터 천천히
```
- **판정**: 바로 위 항목과 같은 패턴. emotional·individual 두 페이지 CTA 제목이 동일한 "천천히" 프레임으로 끝나 cross-page bore.
- **Rewrite 제안**: `"결정은 두 번째에 하셔도 됩니다"` — "천천히" 의 의미를 풀어 쓴 버전.

### 1.11 `src/app/services/emotional/page.tsx:417` + protective/depth 반복
```
자극량을 천천히 올리는 네 가지 원칙을 운영합니다.
```
- **판정**: "타이트레이션" 개념 자체는 임상적으로 정확하고 실재하는 기법 (Peter Levine). 문제는 **같은 "네 가지 원칙" 구성의 카드 4개** 가 여러 페이지에 반복되면서(emotional §Pacing, depth §sessionStructure, protective §adolescentProtocol·infertilityFocus) 독자에게 템플릿 피로감을 준다.
- **Rewrite 제안**: 페이지마다 카드 **개수 variation** (3/4/5/6 이 섞여야 함) — Tier 3 §3.2 참조.

### 1.12 `src/app/services/individual/page.tsx:299-303` — 이런 분께 권해 드려요 intro
```
진단명이 꼭 있어야 하는 것은 아닙니다. '말로는 설명이 잘 안 되는데, 마음 한
켠이 계속 무겁다'는 감각이 이어진다면 첫 상담에서 함께 이야기 나눠 볼 수 있습니다.
```
- **판정**: emotional/page.tsx:352-354 에 **거의 동일한 intro** 존재 (`"말로는 설명이 잘 안 되는데 마음 한 곳이 오래 무겁다"`). child 페이지에도 유사 구조 (L327). 세 페이지 intro 가 같은 문장 템플릿으로 시작 — AI가 "copy the pattern for next page" 로 생성한 흔적.
- **Rewrite 제안**: 페이지마다 서로 다른 진입 문장.
  - individual: `"진단명은 후순위입니다. 가장 자주 듣는 첫 마디는 '설명이 잘 안 돼요' 이고, 그게 시작점으로 충분합니다."`
  - emotional: `"6개월 넘게 같은 무거움이 이어진다면, 그 자체가 충분한 신호입니다."`
  - child: `"부모님이 눈치 채신 변화 3~4가지 중 2가지가 아래 리스트와 겹친다면, 첫 부모 상담으로 충분합니다."`

### 1.13 `src/app/services/group/page.tsx:280`
```
'나만 이런 게 아니었구나'라는 감각이 가장 먼저 시작됩니다.
```
- **판정**: Yalom의 "universality" 는 실제 개념이라 맞지만, 인용구 자체가 상담계 AI slop 에서 **가장 많이 쓰이는 자기위로 문구**. 해당 페이지에서 이미 `yalomFactors[0]` (L100) 에서도 같은 개념을 설명하고 있어 중복.
- **Rewrite 제안**: 이 문장은 hero 에서 제거하고, 본문 §Yalom 에만 남기기. Hero 에는 구체 구조 정보(`"90분 × 8주, 첫 2주는 워밍업"`)로 대체.

### 1.14 `src/lib/constants.ts:610` TEAM_MEMBERS[0].quote
```
"예술적 감수성과 임상적 통찰을 바탕으로, 개인의 내면을 존중하며 지속 가능한
심리적 성장을 돕는 미술치료를 지향합니다."
```
- **판정**: "예술적 감수성" + "임상적 통찰" + "개인의 내면을 존중" + "지속 가능한 심리적 성장" — 상담업계 GPT 가 전문가 소개 의뢰받을 때 내놓는 **4대 클리셰 완전체**. 동일 인물의 `philosophyParagraphs` (L612-615) 는 훨씬 생동감 있는 개인 voice(파도·나침반·하늘 은유)를 쓰고 있어, 짧은 quote 만 AI 톤으로 떨어진다.
- **Rewrite 제안**:
  - `"해석을 서두르는 것보다, 내담자가 스스로 만든 의미가 오래 갑니다."` — 본인 철학 서사와 결이 맞는 quote.
  - 또는 philosophyParagraphs 첫 문장을 그대로 quote 로 재사용.

---

## Tier 2 — Sentence uniformity (문장 길이 평탄)

> 문단 내 문장 길이 표준편차를 추정. 대부분 40-70자 중간대에 수렴되는 구간 flag.

### 2.1 `src/app/services/individual/page.tsx:175-204` — ACT integration 6개 카드 설명
각 카드 description 길이: 56 / 58 / 48 / 59 / 55 / 49자. 편차 약 4자. 모두 "~연습입니다 / ~훈련입니다 / ~경험합니다 / ~확인합니다 / ~꺼냅니다 / ~번역합니다" 로 비슷하게 마침. 독자가 **"같은 카드가 6번 찍힌다"** 는 느낌을 받음.
- **수정**: 1~2개 카드의 문장 수를 늘리거나 (2문장으로), 단호한 짧은 문장("~합니다." / 10자 이하)을 끼우면 리듬 회복.

### 2.2 `src/app/services/emotional/page.tsx:197-222` — sessionStructure 4 단계
description 길이: 67 / 65 / 68 / 68자. 편차 1.2자. 완전 평탄. 모두 "~합니다 / ~결정합니다 / ~짚습니다 / ~정합니다" 동일 어미.
- **수정**: 1단계(체크인)는 짧게 ("처음엔 침묵도 괜찮습니다."), 3단계(대화)는 길게 풀기.

### 2.3 `src/app/services/depth/page.tsx:241-266` — sessionStructure 4카드
`02` 는 87자, `03` 은 72자, 나머지 50자대. variance 는 있으나 **모두 복문** 이라 체감상 같은 리듬.

### 2.4 `src/app/services/protective/page.tsx:160-185` — partnershipModels 4개
유사. 각 description 63-78자.

### 2.5 `src/app/services/group/page.tsx:171-178` — weeklyStructure 8 row
모든 row `phase` 가 4-8자, `description` 이 52-66자. "체크인/워밍업/수용/탈융합/관계/가치/실천/통합" 이라는 **거의 같은 길이 의 헤더 8개 + 같은 리듬의 설명 8개** 연속.
- **수정**: 8 row 를 3+2+3 으로 섹션화하거나, Week 3~6 은 더 자세하게, Week 1·2·8 은 1문장 요약으로 비대칭화.

### 2.6 `src/app/act-approach/page.tsx:449-500` — 5가지 이유 리스트
각 body 160-220자. 모두 2~3문장. 모두 "~니다." 로 끝. `01`~`05` 간 리듬 동일.
- **수정**: 길이를 적어도 70~220자 범위로 분산.

### 2.7 `src/lib/constants.ts:386-583` — FAQ_ITEMS 30개
answer 길이 대부분 100~170자 구간. 가장 짧은 답(88자)과 가장 긴 답(185자) 차이도 2배 미만. **30개 전체** 가 비슷한 "답변 1문단" 길이. 실제 첫 상담에선 질문별로 답 길이가 크게 달라야 자연스러움.
- **수정**: 단답 가능한 5~6개(예: "미술을 못해도 괜찮나요?")는 1문장으로, 복잡한 주제("ACT 는 CBT 와 어떻게 다른가요?")는 본문으로 링크 유도하면서 짧게.

### 2.8 `src/components/sections/ActApproach.tsx` description 패널 (`constants.ts:197-282` ACT_PROCESSES)
각 프로세스의 `essence` 53-78자. `metaphor` 30-46자. `artIntegration` 75-95자. **6개 모두 같은 3-필드 template** 이 반복되면서 UI 위에서 "다른 프로세스인데 같은 모양" 인상. 필드 자체가 템플릿이라 변형은 어렵지만, essence 와 artIntegration 의 어미("~입니다 / ~경험이 됩니다 / ~앵커로 작동합니다 / ~감각을 키웁니다") 만이라도 동사 변화.

---

## Tier 3 — Listicle uniformity (카드·bullet 반복 구조)

### 3.1 "우리가 참고하는 곳" **7개 서비스 페이지에서 동일 템플릿 반복**

```
src/app/services/individual/page.tsx:476   ("우리가 참고하는 곳")
src/app/services/group/page.tsx:485
src/app/services/child/page.tsx:489
src/app/services/online/page.tsx:473
src/app/services/emotional/page.tsx:505
src/app/services/depth/page.tsx:588
src/app/services/protective/page.tsx:559
```

- **판정**: 7개 페이지 모두 동일한:
  1. 섹션 제목: "우리가 참고하는 곳"
  2. intro: "본 프로그램/트랙 설계는 다음 기관·저자의 ~에 기반합니다. 효과를 단정하기 위한 인용이 아니라, 설계의 투명성을 공개하기 위한 기록입니다."
  3. 레이아웃: 4~6개 card `{source, note}`
- 템플릿은 학술적으로는 훌륭한 일관성이지만, UI 측면에서는 **7개 페이지가 같은 모양의 evidence 섹션**을 가지는 셈이라 AI 생성 티가 강함.
- **수정 제안**:
  - (a) 섹션 제목을 페이지마다 다르게: individual → "개인 세션 설계에 쓰인 문헌", depth → "심층·슈퍼비전 전통의 계보", protective → "의료 현장 미술치료 가이드라인 원전", online → "원격 치료 실무 기준"
  - (b) intro 문장을 공용 문장 → 페이지별 1문장 + 2문장 분기 형태로.
  - (c) 인용 카드 형식을 1개는 "quote + 저자명", 다른 페이지는 "연도별 timeline", 또 다른 페이지는 "국내/해외 2-컬럼" 로 **구조 분기**.

### 3.2 동일한 "4개 카드 grid" 의 반복

| 페이지 | 섹션 | 카드 수 |
|--------|------|--------|
| emotional | pacingPrinciples | 4 |
| emotional | sessionStructure | 4 |
| emotional | actApplication | 4 |
| emotional | faqs | 4 |
| emotional | evidenceNotes | 6 |
| emotional | fitAudience | 6 |
| emotional | traumaNeuroscience | 4 |

→ 한 페이지에 **"4개 카드 섹션" 이 7개**. 스크롤 내리는 동안 독자는 같은 UI 패턴을 반복 경험.

- **수정**: 일부 섹션은 `<ol>` 순서 리스트, 다른 섹션은 2단 글, 다른 섹션은 quote block, 다른 섹션은 표(`<table>`) 형식으로 바꿔 **UI diversity** 회복.

### 3.3 각 서비스 페이지 hero chip 4개 (`.mt-6.flex.flex-wrap.gap-3`)

```
individual: "50분 세션" / "주 1회 × 8주 권장" / "1:1 맞춤 설계" / "사전 예약제"
group:      "90분 세션" / "4~6인 소그룹" / "주 1회 × 8주" / "주제별 트랙"
child:      "아동 40분 + 부모 10분" / "만 5~18세" / "부모 상담 병행" / "사전 예약제"
online:     "50분 세션" / "Zoom 화상" / "아트키트 자택 배송" / "해외 참여 가능"
emotional:  "50분 세션" / "장기 트랙 권장" / "타이트레이션 원칙" / "약물 병행 가능"
depth:      "50분 기본 세션" / "2주 1회 · 월 1회" / "장기 계약 옵션" / "슈퍼비전·연구 협력"
protective: "방문 · 외래 병행" / "의료진 협업 구조" / "기관 파트너십 4 모델" / "비밀유지·보고 의무 명시"
```

- **판정**: 7개 페이지 전부 **정확히 4개 chip**. 심지어 너비도 비슷. "변화" 가 "AI 티 제거" 라는 본 감사 원칙 기준, 3개 chip / 4개 / 5개 / 6개 가 섞여야 한다.
- **수정**: child 는 1 chip ("아동 40분 + 부모 10분" 만 큰 chip으로), online 은 5 chip (해외 배송 추가), emotional 은 3 chip 으로 축소 등.

### 3.4 `src/app/services/page.tsx:305-337` — 3분 가이드 6개 situation quotes
- 6개 quote 모두 동일한 `"~고 싶어요 / ~이에요"` 어미. 각 36-46자. 편차 작음.
- **수정**: 6개 중 1~2개만 길게(반문형), 1~2개는 단답형 (`"지방 거주"`, `"아이 문제"` 같은 한 단어 태그) 로 구조 다양화.

### 3.5 "04 원칙" 패턴 중복
- `/services` (4 원칙) + emotional (4 pacing) + depth (4 session) + protective (4 partnership / 4 confidentiality / 4 adolescent / 4 infertility) = **7개 이상의 섹션이 "04 번호 카드 4개"** 구조. 전형적 listicle slop 패턴.

### 3.6 "이런 분께 권해 드려요" 반복 (3 페이지)
- `/services/individual` fitAudience 6개
- `/services/emotional` fitAudience 6개
- `/services/depth` fitAudience 6개
- 모두 `{title, description}` 에 각 55-80자 설명. UI 로는 `grid md:grid-cols-2 lg:grid-cols-3 gap-6` 완전 동일.
- **수정**: 최소 한 페이지는 아이콘·이미지 기반, 또 한 페이지는 1 컬럼 리스트로 변경.

### 3.7 `src/app/faq/page.tsx:82-94` intro 문장
```
처음 문의하시는 분은 첫 상담 준비, 이미 예약하신 분은 진행 과정, 비용이
궁금하시면 비용·결제, ACT 개념이 생소하시면 ACT 수용전념치료 섹션부터
보시는 것을 권합니다. 아이의 상담을 고려 중이시면 아동·청소년, 지방·해외
거주라면 온라인 세션 을 확인해 주세요.
```
- 6개 카테고리 모두 "~분은 X, ~분은 Y" 식 병렬 문장. AI가 카테고리 나열할 때 기본 출력.
- **수정**: 처음 2개만 문장으로 안내하고, 나머지는 tag 형태로 UI 분리.

### 3.8 `src/app/act-approach/page.tsx:535-587` — "당신이 지금 이런 상태라면" 5카드
5개 카드 모두 `{q, empathy, actLens}` 3필드. 3필드 각각 50-80자. 완벽한 template 반복. 독자가 3번째 카드쯤 읽으면 나머지 2개 스킵할 확률 ↑.
- **수정**: 카드 5개 중 2개는 `actLens` 제거하고 quote block 만, 1개는 이미지 첨부 등 UI 변주.

### 3.9 "01 / 02 / 03 / 04" 원형 뱃지 카드
`.w-10.h-10.rounded-full.bg-primary-50` 형태의 원형 뱃지 + 숫자 = 사이트 전체에서 9번 이상 반복 (protective, emotional, depth, online, child, booking, services hub 등). 처음에는 정갈해 보이지만 **7개 서비스 페이지를 연속으로 보면 "원형 뱃지 템플릿"이 AI 생성 티로 느껴진다**.

---

## Tier 4 — Cross-page inconsistency

### 4.1 "우리" vs "저희" vs "본 센터" 혼용 — **가장 심각한 voice 문제**

| 표현 | 위치 |
|------|------|
| `우리의 세션 영역` | `src/components/sections/ServicesSection.tsx:23` |
| `우리 센터의 가격을` | `src/app/pricing/page.tsx:415` |
| `우리가 참고하는 곳` | 7개 서비스 페이지 동일 |
| `본 센터` | **8개 페이지에서 63회** (services/individual: 4, act-approach: 3, services/group: 4, services/child: 10, services/depth: 12, services/online: 4, services/protective: 15, services/emotional: 11) |
| `저희 센터` | 블로그 본문에만 (감사 대상 외) |
| `센터가 먼저 들어 드립니다` | booking, faq — 주어 생략 |

- **판정**: 한 페이지 안에서도 "본 센터" 와 "우리가 참고하는 곳" 이 공존 (예: `services/individual`). **문어체(본 센터)** 와 **1인칭 복수(우리)** 가 섞여 있어 voice 가 불안정.
- **수정 제안 (권장 voice policy)**:
  - 공식 문서·schema·정책 섹션 → `"ACT ART CENTER"` 또는 `"센터"` (주어 생략형)
  - 서비스 페이지 evidence·소개 → `"본 센터"` 로 일원화 (`우리가 참고하는 곳` → `"본 센터가 참고하는 곳"` 또는 `"설계에 참조한 자료"`)
  - 홈 섹션 헤더 → `"본 센터"` 또는 `"ACT ART CENTER의"` (`"우리의 세션 영역"` → `"ACT ART CENTER의 세션 영역"`)
- **금지**: `"저희"` 는 블로그에서만. 공식 페이지에선 voice gap 발생.

### 4.2 `홈 HeroSection` vs `/services` intro — "예술적 표현" 이중 정의

| 페이지 | 기술 |
|--------|------|
| `HeroSection.tsx:30` | `"언어 이전의 감정과 복합적인 심리 경험을 예술적 표현을 통해 탐색합니다."` |
| `ServicesSection.tsx:25-29` | `"그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다. 작품을 매개로 한 경험은 지금-여기에서의 자각, 감정과 생각에 대한 수용, 그리고 삶의 가치 인식으로 자연스럽게 확장됩니다."` |
| `/services` PageHero subtitle:80-83 | `"그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다. 작품을 매개로 한 경험은 자각, 수용, 그리고 삶의 가치 인식으로 자연스럽게 확장됩니다."` |

- **판정**: 홈 hero 는 "예술적 표현" 을 중립적으로 제시하는데, services 섹션과 /services 페이지는 "단순한 표현 수단으로 사용하지 않습니다" 라고 강조. 홈에서 본 독자가 /services 로 가면 "어? 그럼 홈에서 말한 '예술적 표현' 은 뭐야?" 라는 혼동 가능.
- **수정**: 홈 hero 의 "예술적 표현" 을 `"색·선·재료"` 또는 `"미술 매체"` 처럼 구체화.

### 4.3 "천천히" 과다 사용 (9회) — voice 에 템플릿 느낌

| 위치 | 문맥 |
|------|------|
| `constants.ts:396` FAQ | `"편안한 속도로 안내해 드립니다"` |
| `services/individual:44` twitter description | `"당신의 속도에 맞춰"` |
| `services/individual:338` | `"자극을 천천히 올리는 '타이트레이션'"` |
| `services/individual:548` | `"첫 무료 상담부터 천천히"` (CTA 제목) |
| `services/child:135` | `"자극량을 천천히 조절하는 '타이트레이션'"` |
| `services/emotional:13` | `"자극량을 천천히 올리는 타이트레이션 구조로"` |
| `services/emotional:105` | `"낮은 자극부터 천천히 접촉"` |
| `services/emotional:417` | `"자극량을 천천히 올리는 네 가지 원칙"` |
| `services/emotional:608` | `"마음이 무거울 때, 천천히 시작해도 괜찮습니다"` (CTA 제목) |
| `services/protective:242` | `"타이트레이션 원칙을 지키며 자극량을 천천히 올립니다"` |

- **판정**: "천천히" 는 심리상담 분야에서 AI가 가장 사랑하는 부사. 임상적 근거(Levine's titration)에 부합하는 경우에는 정당하지만 — **CTA 헤더**나 **페이지 메타 description**처럼 non-clinical 문맥 3회는 제거 대상.
- **수정**:
  - CTA 제목에서 "천천히" 제거 (`individual:548`, `emotional:608`)
  - twitter description (`individual:44`) 은 `"당신의 속도"` 로 축약 또는 삭제

### 4.4 "첫 상담 30분" 명시 vs 암시 불일치

| 페이지 | "30분" 명시? |
|--------|--------------|
| `pricing:378` "First Free Consultation" | O (`첫 30분 무료 상담`) |
| `booking:65` | O (`첫 상담(30분, 무료)`) |
| `faq:174` | O (`첫 상담(30분)`) |
| `constants.ts:420` FAQ item | O (`약 30분간 진행됩니다`) |
| `HeroSection.tsx:39` | X (`첫 무료 상담 예약하기`) |
| `services/individual:275` | X |
| `services/individual:551` | X |
| `services/emotional:327, 611, 619` | X |
| `services/depth:374, 694, 703` | X |
| `services/protective:329, 678` | X |
| `services/online:548` | X |
| `services/group:560` | X |
| `team:330` | X (`편안한 마음으로 문의 주세요`) |

- **판정**: Pricing/FAQ/Booking 은 "30분" 을 명시, 7개 서비스 페이지는 단지 "무료" 로만 안내. 해당 페이지에서 예약 버튼을 누른 독자가 30분 인지 1시간 인지 모호.
- **수정**: 모든 서비스 페이지 CTA 근처에 "**30분 무료**" 또는 "첫 30분은 무료로 진행됩니다" 를 1줄 추가.

### 4.5 "테라피" vs "치료" 용어 — 현재 OK

- 사이트 전체에서 "치료" 로 통일. "테라피" 는 영문 subtitle 한 곳(`services/individual:250` "Individual Art Therapy")에만 존재. OK.

### 4.6 "첫 상담" 의미 흔들림

- `services/individual:551`: `"첫 상담은 문의·안내 목적으로 무료로 진행합니다."`
- `services/child:563-564`: `"첫 부모 상담은 무료로 진행됩니다. 아이의 상태와 기대하시는 변화 방향을 나눠 주시면, 발달 단계와 주제에 맞는 프로그램을 함께 설계해 드립니다."`
- `booking:85`: `"첫 상담(30분, 무료). 센터 방문 또는 온라인으로 진행합니다. 결정은 그 자리에서 하지 않으셔도 됩니다."`

child 페이지는 "아이는 오지 않음"을 명시하지 않아, 첫 상담에 아이를 데려가야 하는지 혼동 가능. 반면 `child:392-394` 에는 "첫 상담은 아이 없이 부모님만 방문하셔서" 라고 명시. CTA 근처에도 동일 문구 필요.

---

## Tier 5 — Suspicious facts (검증 필요)

### 5.1 `src/lib/constants.ts:428` FAQ — 권장 회기 수
```
"국제 연구에 따르면 단기 개입은 6~8회, 중기 개입은 12~16회, 복합적 주제나
트라우마 작업은 20회 이상이 권장됩니다."
```
- **판정**: 일반화된 임상 상식이며 Lambert 등의 dose-response meta-analysis 범위에 대체로 부합. 단 **"국제 연구에 따르면"** 이라고 쓰면서 구체적 출처(저자/연도) 가 없음. 동일 페이지에서 Hayes, Malchiodi, van der Kolk 는 모두 연도/저서 명시하는데 이 조항만 vague.
- **수정**: `"Lambert (2013) 등 치료 용량-반응 연구 기준으로"` 혹은 `"국내외 임상 가이드라인에서 일반적으로 권장되는 범위"` 로 교체.

### 5.2 `src/lib/constants.ts:484` FAQ — 10-15% 패키지 할인 주장
```
"8주 집중 프로그램·번아웃 워크숍·가족 세션 등 패키지 이용 시 단일 회기 대비
약 10~15% 할인이 적용됩니다. 이는 '지속적 작업이 변화를 만든다'는 임상 근거
(세션 용량-반응 관계)에 기반한 구성입니다."
```
- **판정**: `pricing.tsx:165-168` packages 데이터와 **할인율 실제 계산 검증**:
  - `개인 미술심리치료 (성인) 50분 80k~120k` × 8 = `640k~960k`
  - `8주 패키지 560k~800k`
  - 최대 할인율: 640k → 560k = 12.5% ✓
  - 최대 할인율: 960k → 800k = 16.7% → **"10~15%" 범위 초과**
- **수정**: `"약 10~17% 할인"` 또는 `"회기당 환산 시 약 10~15%"` 로 정확화.

### 5.3 `src/app/pricing/page.tsx:414-417` — "우리 센터의 가격을 비교"
```
우리 센터의 가격을 비교해 보실 수 있도록, 국내에서 흔히 접할 수 있는 세 유형의
일반 범위를 함께 정리했습니다.
```
- **판정**: `marketReference` 데이터 (`pricing.tsx:211-227`) 에는
  - "심리상담 (민간 센터, 50분) 약 80,000 ~ 200,000원"
  - "정신건강의학과 외래 진료 (건강보험) 1회 약 5,000 ~ 30,000원 (초진·본인부담 기준)"
  - "지역 정신건강복지센터 대부분 무료 또는 저비용"
- `source` 필드 ("한국 주요 심리상담 센터·상담사 협회 공개 정보 기준 일반 범위") 는 **어느 협회·어떤 공개 정보** 인지 불명. 상담 분야에서 "협회 공개 정보" 로 대표 가격을 발표하는 곳은 거의 없음 (한국상담심리학회·한국심리상담협회 모두 공식 가격 가이드라인 미발표).
- **수정**: "각 센터 홈페이지 공개 가격 중앙값 기준" 또는 "한국소비자원 2023 상담료 실태조사" 같은 실제 출처로 교체하거나, 해당 주장을 완전히 삭제하고 "참고: 가격은 센터마다 크게 다릅니다" 수준으로 약화.

### 5.4 `src/app/act-approach/page.tsx:350-353, 402-407` — 한국수용전념치료학회(KACBS) 언급
```
"한국수용전념치료학회(KACBS) 등 국내 학술 커뮤니티가 형성되어 연구와 임상
교육이 진행되고 있으나, 해외 대비 규모는 아직 작은 편입니다."
```
- **판정**: "한국수용전념치료학회" 의 실제 명칭·존재 여부 재확인 필요. 공식 이름이 있다면 "KACBS" 약어 출처(ACBS 의 하위 chapter 인지, 별도 국내 학회인지) 확인 필요. **hallucinated org name 리스크 중간**.
- **수정**: 공식 학회 홈페이지 URL 확인 후 `sameAs` schema 에 추가하거나, 만약 공식 학회 미존재면 `"국내 ACT 연구·실무 커뮤니티"` 처럼 약화.

---

## 우선순위 rewrite 대상 Top 20

| # | Priority | 대상 | 조치 |
|---|----------|------|------|
| 1 | P0 | `"우리" vs "저희" vs "본 센터"` 혼용 | Voice policy 작성 후 일괄 교체 (§4.1) |
| 2 | P0 | 7개 서비스 페이지 `"우리가 참고하는 곳"` 동일 섹션 | 섹션 제목 + intro 문장 + UI 구조 페이지별 분기 (§3.1) |
| 3 | P0 | 패키지 할인율 10-15% 주장 vs 실제 12.5-16.7% | 문구 `"약 10~17% 할인"` 또는 `"회기당 10~15%"` (§5.2) |
| 4 | P0 | 한국 심리상담 시장 가격 "협회 공개 정보" 출처 불명 | 실제 출처 명시 또는 주장 약화 (§5.3) |
| 5 | P1 | FAQ `"국제 연구에 따르면 6~8회..."` 출처 없음 | Lambert 등 구체 인용 (§5.1) |
| 6 | P1 | 한국수용전념치료학회(KACBS) 실재 확인 | 공식 URL 확보 또는 표현 약화 (§5.4) |
| 7 | P1 | HomePage hero `"마음을 탐색하고 삶의 의미를 재발견"` | 구체 동사로 교체 (§1.1) |
| 8 | P1 | 3개 서비스 페이지 intro `"진단명이 꼭 있어야..."` 동일 시작 | 페이지별 다른 진입 문장 (§1.12) |
| 9 | P1 | emotional 페이지 "천천히" 5회 사용 | 3회로 줄이고 동의어로 교체 (§4.3) |
| 10 | P1 | TEAM_MEMBERS[0].quote `"예술적 감수성과 임상적 통찰..."` | philosophyParagraphs 기반 새 quote (§1.14) |
| 11 | P2 | 7개 서비스 hero chip 모두 "4개" 로 통일 | 3/4/5/6 으로 분산 (§3.3) |
| 12 | P2 | services hub `"4개 원칙"` + 다수 페이지 `"4단계 카드"` 반복 | 일부 섹션 UI 변형 (§3.2, §3.5) |
| 13 | P2 | `TeamSection` `"함께하는 전문가"` heading | `"세션을 진행하는 치료사"` or 이름 직접 (§1.7) |
| 14 | P2 | `CtaBand` `"마음의 색을 찾아보세요"` | "말이 잘 나오지 않을 때..." (§1.2) |
| 15 | P2 | `PhilosophySection` `"삶의 방향성과 의미"` | 이유 문장으로 교체 (§1.3) |
| 16 | P2 | services 페이지 "첫 무료 상담" → **"30분" 명시** 추가 | 7개 서비스 CTA 근처 1줄 추가 (§4.4) |
| 17 | P2 | `child` 페이지 CTA 근처 "첫 상담은 아이 없이 부모만" 명시 | 중복 명시 (§4.6) |
| 18 | P2 | act-approach `"05. 당신이 이상한 게..."` | 헤더 톤 낮추고 구체 개념 (§1.4) |
| 19 | P3 | FAQ 30문항 answer 길이 평탄 | 단답 5개 / 풀답 3개 패턴 도입 (§2.7) |
| 20 | P3 | services/group weeklyStructure 8 row 평탄 | 비대칭 섹션화 3+2+3 (§2.5) |

---

## 감사 주석 (메타)

- **AI slop 탐지 원칙 — 이 사이트에서 발견된 핵심 패턴**:
  1. **"구조 = 아이디어" 함정**: 4개 카드 grid 를 10회 이상 반복해 "정돈된 사이트" 를 만들었지만, 역설적으로 "AI 템플릿 사이트" 인상이 된다.
  2. **Cliché 가 숨는 곳**: 본문이 아니라 **CTA 제목 / PageHero subtitle / 섹션 H2** 같은 눈에 띄는 위치. 문학적 클리셰가 많은 곳.
  3. **실재 인용의 역설**: Hayes, Malchiodi, van der Kolk, Yalom 등 **실재 연구자**를 정확히 인용하고 있어 "hallucinated fact" 는 매우 적다. Tier 5 가 4건에 그친 것은 큰 장점 — 이 부분은 보존할 것.
  4. **Voice 불안정**: "우리/저희/본 센터" 동시 사용은 각 페이지를 따로 쓰면 생기지 않는다. **페이지 간 템플릿 reuse** 가 만든 문제이므로, voice policy 를 Single Source Of Truth 로 정리 필요.

- **다음 감사 라운드 권장**:
  1. 본 감사에서 제외한 `src/app/blog/[slug]/page.tsx` + `src/lib/blog-content.ts` 의 AI slop 전수 감사
  2. OG image 텍스트·alt 텍스트 감사 (UI 에 보이지 않지만 SEO/GEO 에 영향)
  3. JSON-LD `description` 필드 (각 페이지 schema 안) 자체의 AI 티 감사
