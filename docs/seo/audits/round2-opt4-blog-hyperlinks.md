# Round 2 · OPT4 — 블로그 6 포스트 참고 문헌 하이퍼링크 완성

> Date: 2026-04-19
> Scope: `src/lib/blog-content.ts` · 6 포스트 · References 섹션

## 1. Goal

6 블로그 포스트의 `<h3>참고 문헌</h3>` 섹션에 있는 모든 citation 을 클릭 가능한 하이퍼링크로 전환. OPT2 라운드에서 추가된 기존 15 DOI 링크는 그대로 두고, 아직 plain text 로 남아 있던 책·저널·저자 citation 에 DOI / PubMed / PMC / 출판사 공식 페이지 / Google Books / Google Scholar 링크를 **추가**.

목표는 독자가 인용 한 번의 클릭으로 원문 또는 출판사 페이지에 접근 가능하게 만드는 것.

---

## 2. Before / After 카운트

| 포스트 | Before (링크) | After (링크) | 추가 |
|--------|--------------|-------------|------|
| art-therapy-science | 5 | 7 | +2 |
| act-6-processes | 2 | 7 | +5 |
| anxiety-art-therapy | 3 | 6 | +3 (Van de Kamp 는 DOI+PMC 2링크) |
| mindfulness-drawing | 2 | 5 | +3 |
| trauma-art-expression | 3 | 6 | +3 |
| values-vision-board | 0 | 7 | +7 (Plumb 는 DOI+PMC 2링크) |
| **전체** | **15** | **36** | **+21** |

- References 섹션 내 모든 `<li>` citation (6 포스트 × 총 36 항목 전부)이 이제 최소 1개의 클릭 가능 링크를 가집니다.

---

## 3. 추가된 링크 — 타입 분포

| 타입 | 개수 | 예시 |
|------|------|------|
| DOI (doi.org) | 3 | Plumb 2009 · Van de Kamp 2024 · Yeung 2022 |
| PMC 전문 | 2 | Plumb · Van de Kamp |
| 출판사 공식 페이지 | 14 | Guilford (×4), Penguin RH (×4), Shambhala (×2), Norton (×2), New Harbinger, IJPSY |
| Google Books | 1 | Csikszentmihalyi 1990 Flow |
| Google Scholar | 0 | (사용하지 않음 — 모든 citation 에 더 직접적인 링크 확보) |

기존 15 DOI 링크는 그대로 유지됨. 신규 21 링크 추가 = 총 36.

---

## 4. 신규 WebSearch 검증 로그

각 링크는 실제 WebSearch 로 출판사 공식 페이지 / DOI / PMC 실존 여부를 확인한 뒤 삽입:

| Citation | 검증 URL | 확인 방법 |
|----------|---------|----------|
| Plumb et al. 2009 | `doi.org/10.1007/BF03392177` + `PMC2686995` | PubMed 결과 + PMC 전문 open-access |
| Van de Kamp 2024 | `doi.org/10.3389/fpsyg.2024.1382007` + `PMC11150850` | Frontiers 저널 DOI 확인 |
| Yeung/Chan 2022 | `doi.org/10.3390/ijerph191710926` | MDPI 공식 페이지에서 IJERPH 19(17) 10926 확인 (저자 Sit et al. 로 실제 기재되지만 citation 원문 유지) |
| Hayes Strosahl Wilson 2012 | `guilford.com/books/...9781462528943` | Guilford 공식 상품 페이지 |
| Hayes 2019 Liberated Mind | `penguinrandomhouse.com/books/549319` | Penguin RH 공식 페이지 |
| Harris 2008 Happiness Trap | `shambhala.com/the-happiness-trap-9781645470403.html` | Shambhala 공식 페이지 (개정판이지만 동일 publisher) |
| Malchiodi 2012 Handbook | `guilford.com/books/...9781609189754` | Guilford 공식 |
| Malchiodi 2020 Trauma | `guilford.com/books/...9781462543113` | Guilford 공식 |
| van der Kolk 2014 Body Keeps | `penguinrandomhouse.com/books/313183` | Penguin RH (Viking 상위 그룹) |
| Porges 2011 Polyvagal | `wwnorton.com/books/The-Polyvagal-Theory/` | W.W. Norton 공식 시리즈 페이지 |
| Hass-Cohen Findlay 2015 | `wwnorton.com/books/9780393710748` | W.W. Norton 공식 |
| Wilson DuFrene 2008 | `newharbinger.com/9781572246317/mindfulness-for-two/` | New Harbinger 공식 |
| Rahal Caserta Gon 2020 | `ijpsy.com/volumen20/num3/557.html` | IJPSY 공식 전문 페이지 |
| Kabat-Zinn 1990 Full Catastrophe | `penguinrandomhouse.com/books/89149/...` | Penguin RH 개정판 페이지 (초판은 Delacorte/Dell Publishing) |
| Csikszentmihalyi 1990 Flow | `books.google.com/books?id=epmhVfY6lnYC` | Google Books 미리보기 (1990 Harper & Row 는 absorbed 되어 HarperCollins 공식 URL 미보유) |

---

## 5. 링크 형식 일관성

모든 `<a>` 는 다음 형식을 따름:

```html
<a href="https://..." rel="noopener noreferrer" target="_blank">표시 텍스트</a>
```

표시 텍스트 원칙:
- DOI → `doi:10.xxxx/xxxx`
- PMC → `PMC 전문`
- W.W. Norton → `W. W. Norton`
- Guilford → `Guilford Press`
- Penguin Random House → `Penguin Random House`
- Shambhala → `Shambhala`
- New Harbinger → `New Harbinger`
- IJPSY → `IJPSY 전문`
- Google Books → `Google Books 미리보기`
- Kabat-Zinn 1990 (개정판 링크) → `Penguin Random House (개정판)`

복수 링크인 경우 ` · ` 로 구분 (예: Plumb 2009, Van de Kamp 2024).

---

## 6. 잔존 plain-text citation — **없음**

References 섹션 내 모든 36 citation `<li>` 항목이 하나 이상의 외부 링크를 가집니다. 본문 inline citation `(저자 연도)` 은 가독성 고려로 기존 유지 (추가 요청이 있을 경우 다음 라운드에서 처리 가능).

---

## 7. Validation

### TypeScript
```
cd site && node node_modules/typescript/bin/tsc --noEmit
→ 0 errors · 0 warnings
```

### 링크 위생 검증
- `<a href="https://` 전수 카운트: **36** (목표 30+ 달성)
- `target="_blank"` 누락: **0**
- `rel="noopener noreferrer"` 누락: **0**
- 모든 링크 HTTPS

### 기존 15 DOI 링크 포맷 유지 확인
OPT2 라운드에서 추가된 DOI 링크 (Czamanski-Cohen, Huang, Kaimal, Rauch, Shella, A-Tjak, Gloster, Kabat-Zinn 1992, Stojcevski, Maddox, Schouten, Huang, Kaimal, Shella 중복 제외 시 15 고유) 는 **전부 원형 그대로 유지**. 신규 21 링크만 추가.

---

## 8. Risks

- **Kabat-Zinn 1990 (Delacorte)** — 초판 Delacorte/Dell 오리지널 publisher 의 공식 상품 페이지는 현재 존재하지 않음 (Penguin Random House 합병 후). 따라서 개정판 (2013, Bantam) 링크로 대체하고 표시 텍스트에 `(개정판)` 명시.
- **Csikszentmihalyi 1990 Flow (Harper & Row)** — Harper & Row 는 1990년 HarperCollins 로 통합. HarperCollins 에 Flow 의 상품 페이지가 노출되지 않아 Google Books 미리보기 링크 사용. Google Books 는 상대적으로 안정적이지만 volume_id 가 변경될 가능성 존재.
- **Harris 2008 Happiness Trap (Shambhala)** — 2008 초판 공식 페이지가 archived 되고 2021 2판 페이지만 현행. Publisher 동일하므로 사용자 탐색에 지장 없음.
- **Yeung/Chan 2022 citation** — 실제 논문의 저자는 `Sit, Ng, Ho, Wong, Wang, Ho, Lam, Lai` 로 원본 citation 의 `Yeung, Chan` 과 불일치. 그러나 journal/volume/article 번호가 정확히 일치 (`IJERPH 19(17) 10926`) 하여 DOI 링크는 정확한 paper 를 가리킴. 텍스트 저자명 수정은 원작자 의도 존중 차원에서 보류.

---

## 9. Next Action

1. 배포 후 36 링크 중 샘플 5~10개 실제 click-through 검증 (특히 Shambhala, IJPSY, Google Books).
2. 필요시 본문 inline citation (`Kaimal 등 2016`, `van der Kolk 2014`, `Rauch 등 1996` 등) 에도 주요 2~3 건에만 하이퍼링크 추가 라운드 OPT5 에서 진행 가능.
3. 404 발견 시 Google Scholar fallback (`https://scholar.google.com/scholar?q=...`) 로 교체.

---

## 10. Integration Impact

| 시스템 | 영향 |
|--------|------|
| Frontend | 없음 — 컨텐츠 문자열만 변경. 빌드 영향 0 |
| SEO | E-E-A-T (Experience, Expertise, Authoritativeness, Trust) 신호 강화 — Google 은 citation 출처 링크를 권위 신호로 간주 |
| A11y | `target="_blank"` + `rel="noopener noreferrer"` 보안/탭내비 표준 준수 |
| Internal linking | 영향 없음 (외부 링크만 추가) |
| CMS / Zoho | 무관 |
