export const SITE_URL = "https://actartcenter.com";
export const SITE_NAME = "ACT ART CENTER";
export const SITE_TITLE = "ACT ART CENTER | ACT 미술심리치료 연구소";
export const SITE_DESCRIPTION =
  "수용전념치료(ACT)의 개념을 내포한 미술심리치료 전문 연구·임상 기관. 언어 이전의 감정과 복합적인 심리 경험을 예술적 표현을 통해 탐색하며, 내담자가 자신의 삶과 감정에 보다 유연하고 안정적으로 관계 맺을 수 있도록 돕습니다.";
export const SITE_TAGLINE = "Accept. Create. Transform.";
export const SITE_TAGLINE_KR = "Exploring the mind through art, rediscovering meaning in life.";

// Search console verification tokens.
// - 값은 실제 GSC / 네이버 서치어드바이저 인증 후 환경변수로 주입한다.
// - 빈 문자열이면 layout.tsx 에서 메타태그 자체를 출력하지 않도록 분기.
// TODO: GSC 인증 후 GSC_VERIFICATION / NAVER_VERIFICATION 에 실제 토큰 주입.
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";
export const NAVER_VERIFICATION = process.env.NEXT_PUBLIC_NAVER_VERIFICATION ?? "";

export const CONTACT = {
  phone: "010-####-####",
  email: "actartkorea@gmail.com",
  kakao: "actartcenter",
  instagram: "@act.art.center",
  address: "서울시 서초구 강남대로 305, 현대렉시온 2518호",
} as const;

export const NAV_ITEMS = [
  { label: "서비스", href: "/services" },
  { label: "ACT란?", href: "/act-approach" },
  { label: "팀소개", href: "/team" },
  { label: "비용", href: "/pricing" },
  { label: "블로그", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "오시는 길", href: "/contact" },
] as const;

/**
 * 기존 허브 카드 3개 (특수·전문 영역: protective/emotional/depth).
 *
 * ⚠️ WAVE 3 / C3: 이 상수는 `/services/page.tsx` (C1 담당)가 현재
 * `serviceImages[i]` 로컬 배열과 인덱스로 매칭되어 있어, 요소 수를 바꾸면
 * 런타임 크래시가 발생합니다. 신규 7개 full 카탈로그는 아래 `SERVICES_ALL`
 * 을 사용하세요.
 *
 * C1에게 TODO: `/services/page.tsx`의 `SERVICES` + 로컬 `serviceImages`를
 * `SERVICES_ALL` (7개, `service.image`/`service.imageAlt` 사용)로 전환할 것.
 */
export const SERVICES = [
  {
    id: "protective",
    title: "보호·의료 환경 미술심리치료",
    titleEn: "Protective & Medical Environment",
    description: "장기 치료·의료 병행 환경에서의 미술심리치료. 청소년 보호병동, 정신과 입원 환경, 난임·생식의학 치료 과정을 지원합니다.",
    href: "/services/protective",
  },
  {
    id: "emotional",
    title: "정서·트라우마 중심 미술심리치료",
    titleEn: "Emotional & Trauma-Focused",
    description: "삶의 전환기에 놓인 분들을 위한 치료. 만성 스트레스, 불안, 정서 소진, 관계 갈등, 상실, 트라우마 경험을 다룹니다.",
    href: "/services/emotional",
  },
  {
    id: "depth",
    title: "심층 탐색·연구 기반 미술심리치료",
    titleEn: "Depth-Oriented & Research-Based",
    description: "연구, 슈퍼비전, 전문 자문. 자기 이해와 내적 탐색을 원하는 개인 및 장기·심층 치료 사례를 위한 프로그램입니다.",
    href: "/services/depth",
  },
] as const;

/**
 * 서비스 전체 카탈로그 (7개) — B2 spec §4.5 허브 7-hop 요구사항.
 *
 * 성인 대상 4개 (individual/group/child/online) + 특수·전문 영역 3개
 * (protective/emotional/depth).
 *
 * - `anchor`: SEO internal-link anchor text
 * - `image` / `imageAlt`: 카드 썸네일 (서비스 페이지 hero와 일관성 유지)
 * - `group`: UI 분류 ("adult" / "specialty")
 *
 * Footer, ServicesSection (홈), /services 허브 (C1 마이그레이션 후)에서 공유.
 */
export const SERVICES_ALL = [
  {
    id: "individual",
    title: "성인 1:1 개인 미술치료",
    titleEn: "Individual Art Therapy",
    description: "ACT 6프로세스 기반 1:1 맞춤 미술심리치료. 50분 세션으로 불안·우울·번아웃·트라우마·관계 갈등을 다룹니다.",
    href: "/services/individual",
    anchor: "성인 1:1 개인 미술치료 안내",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    imageAlt: "성인 1:1 개인 미술치료 공간",
    group: "adult",
  },
  {
    id: "group",
    title: "ACT 그룹 미술치료 프로그램",
    titleEn: "Group Art Therapy",
    description: "4~6인 소그룹으로 함께하는 ACT 미술치료. 마음유연성 8주, 번아웃 탈출 워크숍, 테마별 단기 그룹 3가지.",
    href: "/services/group",
    anchor: "4~6인 그룹 프로그램",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    imageAlt: "원형 테이블에 모인 4~6인 소그룹 미술치료",
    group: "adult",
  },
  {
    id: "child",
    title: "아동·청소년 미술치료",
    titleEn: "Child & Adolescent Art Therapy",
    description: "만 5세부터 청소년까지. 놀이치료와 ACT를 통합한 발달 단계별 맞춤 미술치료. 부모 상담 10분 포함.",
    href: "/services/child",
    anchor: "아동·청소년 미술치료 안내",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    imageAlt: "아동 미술치료 놀이 활동",
    group: "adult",
  },
  {
    id: "online",
    title: "온라인 미술치료",
    titleEn: "Online Art Therapy",
    description: "Zoom 화상 + 미술 재료 키트 자택 배송. 전국 어디서나, 해외 거주 한국인도 참여 가능한 비대면 ACT 미술치료.",
    href: "/services/online",
    anchor: "전국 온라인 미술치료",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
    imageAlt: "온라인 미술치료 Zoom 세션",
    group: "adult",
  },
  {
    id: "protective",
    title: "보호·의료 환경 미술심리치료",
    titleEn: "Protective & Medical Environment",
    description: "장기 치료·의료 병행 환경에서의 미술심리치료. 청소년 보호병동, 정신과 입원 환경, 난임·생식의학 치료 과정을 지원합니다.",
    href: "/services/protective",
    anchor: "보호·의료 환경 미술심리치료",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    imageAlt: "보호·의료 환경에서의 미술치료 작업",
    group: "specialty",
  },
  {
    id: "emotional",
    title: "정서·트라우마 중심 미술심리치료",
    titleEn: "Emotional & Trauma-Focused",
    description: "삶의 전환기에 놓인 분들을 위한 치료. 만성 스트레스, 불안, 정서 소진, 관계 갈등, 상실, 트라우마 경험을 다룹니다.",
    href: "/services/emotional",
    anchor: "정서·트라우마 중심 미술심리치료",
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=800&q=80",
    imageAlt: "정서적 치유를 위한 미술 활동",
    group: "specialty",
  },
  {
    id: "depth",
    title: "심층 탐색·연구 기반 미술심리치료",
    titleEn: "Depth-Oriented & Research-Based",
    description: "연구, 슈퍼비전, 전문 자문. 자기 이해와 내적 탐색을 원하는 개인 및 장기·심층 치료 사례를 위한 프로그램입니다.",
    href: "/services/depth",
    anchor: "심층 탐색·연구 기반 미술심리치료",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    imageAlt: "심층 탐색을 위한 예술적 표현",
    group: "specialty",
  },
] as const;

/** 성인 대상 4개 서비스 (individual/group/child/online). */
export const SERVICES_ADULT = SERVICES_ALL.filter((s) => s.group === "adult");

/** 특수·전문 영역 3개 (protective/emotional/depth). */
export const SERVICES_SPECIALTY = SERVICES_ALL.filter((s) => s.group === "specialty");

/** Footer 사이트맵 4컬럼용 리소스 링크. */
export const RESOURCE_LINKS = [
  { label: "블로그", href: "/blog" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "비용 안내", href: "/pricing" },
  { label: "작품 갤러리", href: "/gallery" },
] as const;

/** Footer 사이트맵 4컬럼용 센터 소개 링크. */
export const ABOUT_LINKS = [
  { label: "센터 소개·대표 프로필", href: "/team" },
  { label: "ACT 수용전념치료란?", href: "/act-approach" },
  { label: "작품 갤러리", href: "/gallery" },
] as const;

/** Footer 사이트맵 4컬럼용 연결 링크. */
export const CONNECT_LINKS = [
  { label: "상담 예약", href: "/booking" },
  { label: "오시는 길·연락처", href: "/contact" },
  { label: "개인정보처리방침", href: "/privacy" },
] as const;

/**
 * ACT 6 핵심 프로세스 (Hexaflex) — Hayes, Strosahl, Wilson (2012) 기준.
 *
 * 각 프로세스는 "심리적 유연성 (Psychological Flexibility)" 을 구성하는
 * 축이며, 반대편에는 "심리적 경직성 (Psychological Inflexibility)" 극이
 * 존재합니다. 미술치료 작업은 언어 이전의 감각·이미지 경로를 통해
 * 이 6개 과정을 경험적으로 탐색할 수 있는 안전한 매체가 됩니다.
 */
export const ACT_PROCESSES = [
  {
    id: "acceptance",
    title: "수용",
    titleEn: "Acceptance",
    description: "감정을 밀어내지 않고 있는 그대로 받아들입니다.",
    artConnection: "지금 느끼는 감정에 색을 입혀보세요",
    essence:
      "불편한 감정을 억누르거나 없애려 애쓰지 않고, 그 감정이 내 안에 머물 공간을 허용하는 태도입니다.",
    metaphor:
      "파도를 막으려 하면 휩쓸립니다. 파도 위에 올라타는 법을 배우면 같은 파도가 나를 앞으로 나아가게 합니다.",
    artIntegration:
      "말로 표현하기 어려운 감정에 색과 질감을 부여하는 과정 자체가 \"감정을 두어도 괜찮다\"는 수용 경험이 됩니다.",
    inflexibilityPole: "경험 회피 (Experiential Avoidance)",
  },
  {
    id: "defusion",
    title: "인지적 탈융합",
    titleEn: "Cognitive Defusion",
    description: "생각을 사실이 아닌 '생각'으로 바라봅니다.",
    artConnection: "불안한 생각을 캐릭터로 그려보세요",
    essence:
      "\"나는 부족해\" 라는 생각과 \"나는 부족하다는 생각을 하고 있다\" 를 구분하는 능력입니다.",
    metaphor:
      "영화를 스크린에서 한 발 물러서서 볼 때, 같은 장면도 더 이상 나를 휩쓸지 못합니다.",
    artIntegration:
      "반복되는 비판적 생각을 캐릭터·형태·색으로 외재화하면, 그 생각이 \"나\" 자체가 아니라 내가 관찰할 수 있는 하나의 현상임이 몸으로 전해집니다.",
    inflexibilityPole: "인지적 융합 (Cognitive Fusion)",
  },
  {
    id: "present-moment",
    title: "현재 순간 접촉",
    titleEn: "Contact with the Present Moment",
    description: "지금 이 순간에 온전히 머무릅니다.",
    artConnection: "지금 이 순간, 손끝의 물감에 집중하세요",
    essence:
      "과거의 후회나 미래의 걱정에 끌려가는 대신, 지금 여기서 일어나는 감각·호흡·생각을 열린 태도로 알아차리는 힘입니다.",
    metaphor:
      "카메라의 초점을 지금 내 손 앞의 한 점에 맞추면, 멀리 있는 불안은 자연스럽게 배경으로 흐려집니다.",
    artIntegration:
      "종이 위를 미끄러지는 붓, 점토의 온도, 파스텔의 저항감은 \"지금\" 으로 돌아오는 마음챙김 앵커로 작동합니다.",
    inflexibilityPole: "과거·미래에의 몰두 (Dominance of Past/Future)",
  },
  {
    id: "self-as-context",
    title: "맥락으로서의 자기",
    titleEn: "Self-as-Context",
    description: "경험하는 '나'와 관찰하는 '나'를 구분합니다.",
    artConnection: "다양한 '나'를 콜라주로 표현하세요",
    essence:
      "역할·생각·감정은 계속 바뀌지만, 그 모든 경험을 바라보는 \"관찰하는 자기\" 는 변하지 않고 그대로 있습니다.",
    metaphor:
      "날씨는 매일 바뀌지만 하늘은 그 자리에 있습니다. 하늘은 비도 해도 모두 품을 수 있습니다.",
    artIntegration:
      "콜라주·자화상 연작·여러 관점에서 그린 자기 이미지 작업은 \"여러 나\"를 동시에 바라보는 관찰자적 자기 감각을 키웁니다.",
    inflexibilityPole: "자기 개념에의 집착 (Attachment to the Conceptualized Self)",
  },
  {
    id: "values",
    title: "가치",
    titleEn: "Values",
    description: "삶에서 진정으로 중요한 것이 무엇인지 탐색합니다.",
    artConnection: "당신에게 소중한 것을 상징으로 그려보세요",
    essence:
      "목표는 달성하면 끝나지만, 가치는 평생 향해 걸어가는 방향입니다. \"어떤 사람이 되고 싶은가\" 의 나침반입니다.",
    metaphor:
      "북극성은 영원히 도달하지 못해도, 가는 길을 비춰 줍니다.",
    artIntegration:
      "언어로 정리하기 전에 이미지·상징·색으로 먼저 표현된 가치는, 이성이 합리화한 가치보다 더 진솔한 내면의 방향을 보여줍니다.",
    inflexibilityPole: "가치 불명료 (Lack of Values Clarity)",
  },
  {
    id: "committed-action",
    title: "전념 행동",
    titleEn: "Committed Action",
    description: "가치를 향해 구체적인 한 걸음을 내딛습니다.",
    artConnection: "가치를 향한 한 걸음을 미술로 계획하세요",
    essence:
      "가치는 선언이 아니라 행동으로 드러납니다. 불편한 감정이 있어도 가치 방향으로 한 걸음을 선택하는 반복적 실천입니다.",
    metaphor:
      "지도를 아무리 들여다봐도 걸어야 도착합니다. 중요한 것은 속도가 아니라 방향의 일관성입니다.",
    artIntegration:
      "이번 주 내가 내디딜 한 걸음을 시각적 지도·스토리보드·미니북으로 구성하면, 실행 가능성과 지속성이 눈에 띄게 높아집니다.",
    inflexibilityPole: "비활동성·충동성 (Inaction / Impulsivity)",
  },
] as const;

/**
 * ACT 과학적 근거 — 실제로 존재하는 학회·이론·연구자만 기재합니다.
 * 허구 인용은 절대 금지이며, 추가 시 PubMed/Google Scholar 확인 후에만 등록합니다.
 */
export const ACT_EVIDENCE_REFS = [
  {
    label: "ACBS (Association for Contextual Behavioral Science)",
    detail:
      "ACT 와 맥락적 행동과학 (Contextual Behavioral Science) 을 다루는 국제 학회입니다. 전 세계 연구자·임상가가 매년 학술대회와 프로토콜 업데이트를 공유합니다.",
  },
  {
    label: "RFT (Relational Frame Theory)",
    detail:
      "인간 언어와 인지를 설명하는 행동분석 기반 이론으로, ACT 의 이론적 토대입니다. 왜 생각이 우리를 그렇게 세게 사로잡는지를 \"관계 틀\" 로 설명합니다.",
  },
  {
    label: "Hayes, Strosahl, & Wilson — ACT 공동 개발자",
    detail:
      "Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson 세 사람이 함께 정립한 치료 모델이며, 임상 매뉴얼 『Acceptance and Commitment Therapy』(2nd ed., 2012) 는 전 세계 교육 프로그램의 기본 교재로 사용됩니다.",
  },
  {
    label: "증거 기반 실천 (Evidence-Based Practice)",
    detail:
      "미국심리학회 (APA) Division 12 의 Empirically Supported Treatments 목록과 다수의 메타분석 (예: A-Tjak et al., 2015, Psychother Psychosom; Gloster et al., 2020, J Contextual Behav Sci) 에서 불안·우울·만성 통증·물질 사용 등 다양한 임상 집단에 대한 효능이 보고되어 왔습니다. 모든 사례에 동일한 효과가 보장되는 것은 아니며, 개별 임상 판단이 필요합니다.",
  },
] as const;

export const PROCESS_STEPS = [
  { number: "01", title: "문의 상담", description: "전화 또는 온라인으로 편하게 문의하세요" },
  { number: "02", title: "초기 분석", description: "현재 상태와 목표를 함께 살펴봅니다" },
  { number: "03", title: "맞춤 설계", description: "ACT 프로세스 기반 개인 맞춤 프로그램 설계" },
  { number: "04", title: "상담 진행", description: "미술 활동과 ACT를 통합한 세션 진행" },
  { number: "05", title: "성장 종결", description: "변화를 정리하고 일상에서의 실천을 계획" },
] as const;

/**
 * TESTIMONIALS — 실제 내담자 후기 확보 전까지 빈 배열로 유지한다.
 *
 * 신규 상담 확보율이 아직 낮아 허위 후기 노출 시 신뢰도 저하 + 의료/심리상담
 * 업계 허위광고 리스크가 크다. 실제 동의 기반 후기를 수집한 뒤에만 채운다.
 *
 * 재활성화 프로세스 (docs/TODO.md 참조)
 * 1. 동의서 서면 수령 (이름·나이대·프로그램명 공개 범위 명시)
 * 2. 원문 인용 + 실제 참여 프로그램 매칭
 * 3. 여기 배열에 추가 + src/app/page.tsx 의 TestimonialsCarousel 주석 해제
 */
export const TESTIMONIALS: ReadonlyArray<{
  id: number;
  content: string;
  attribution: string;
  rating: number;
}> = [];

/**
 * FAQ 카테고리 키. /faq 페이지에서 섹션 그룹핑에 사용.
 * FAQPage 스키마에는 category 필드 없이 question/answer 쌍만 전송.
 */
export type FaqCategory =
  | "first-visit"
  | "process"
  | "pricing"
  | "act"
  | "child"
  | "online";

export const FAQ_CATEGORIES: ReadonlyArray<{
  id: FaqCategory;
  title: string;
  description: string;
}> = [
  {
    id: "first-visit",
    title: "첫 상담 준비",
    description: "처음 오시는 분들이 가장 많이 주시는 질문입니다.",
  },
  {
    id: "process",
    title: "진행 과정",
    description: "회기 간격·기간·종결까지, 세션의 흐름을 안내합니다.",
  },
  {
    id: "pricing",
    title: "비용·결제",
    description: "결제 수단·현금영수증·보험 가능 여부를 안내합니다.",
  },
  {
    id: "act",
    title: "ACT 수용전념치료",
    description: "다른 접근과의 차이, 오해받기 쉬운 개념을 정리했습니다.",
  },
  {
    id: "child",
    title: "아동·청소년",
    description: "부모 참여 범위와 아이의 비밀유지 원칙을 안내합니다.",
  },
  {
    id: "online",
    title: "온라인 세션",
    description: "자택 환경에서의 진행 방법과 대면과의 차이점입니다.",
  },
] as const;

export const FAQ_ITEMS: ReadonlyArray<{
  category: FaqCategory;
  question: string;
  answer: string;
}> = [
  // ── 첫 상담 준비 ────────────────────────────────────────────────
  {
    category: "first-visit",
    question: "미술을 못해도 괜찮나요?",
    answer:
      "네, 전혀 문제없습니다. 미술치료는 작품의 완성도가 아닌 창작 과정에서의 심리적 경험을 중시합니다. 그림 실력이나 재료 사용 경험과 관계없이 누구나 참여할 수 있으며, 치료사가 편안한 속도로 안내해 드립니다.",
  },
  {
    category: "first-visit",
    question: "처음이라 무엇을 준비해야 할지 모르겠어요.",
    answer:
      "아무것도 준비하지 않으셔도 됩니다. 미술 재료·작업 공간·안내서는 모두 센터에서 제공합니다. 다만 최근에 느끼신 감정이나 고민 한두 가지를 가볍게 떠올려 오시면 첫 회기가 수월해집니다. 말로 설명하기 어려워도 괜찮습니다.",
  },
  {
    category: "first-visit",
    question: "상담실에 갈 때 복장은 어떻게 하나요?",
    answer:
      "평소 편안한 옷차림으로 오시면 됩니다. 물감·파스텔 등을 사용하는 회기에는 앞치마와 손 세정용 물품을 준비해 드립니다. 옷에 색이 묻을 것을 걱정하지 않도록 보호 커버도 함께 제공합니다.",
  },
  {
    category: "first-visit",
    question: "상담 내용은 비밀이 보장되나요?",
    answer:
      "네, 모든 상담 내용은 엄격히 비밀이 보장됩니다. 한국미술치료학회 윤리 강령에 따라 내담자 동의 없이는 작품·기록·개인 정보가 외부로 공개되지 않습니다. 단, 본인 또는 타인의 생명이 위협받는 상황에서는 법적·윤리적 보고 의무가 있을 수 있음을 사전에 안내드립니다.",
  },
  {
    category: "first-visit",
    question: "첫 상담은 무료라고 들었는데 무엇을 하나요?",
    answer:
      "약 30분간 진행됩니다. 현재 어떤 어려움이 있으신지 편하게 말씀해 주시고, 센터에서는 적합한 프로그램과 회기 구성을 함께 설계합니다. 첫 미술 작업은 선택 사항이며, 원하시면 간단한 워밍업 활동을 체험해 보실 수 있습니다. 부담 없이 센터 분위기를 확인하시는 시간입니다.",
  },

  // ── 진행 과정 ───────────────────────────────────────────────────
  {
    category: "process",
    question: "몇 회기 정도 받아야 효과가 있나요?",
    answer:
      "A-Tjak 등(2015) ACT 메타분석과 Lambert(2013)의 치료 용량-반응 연구 등에서 일반적으로 단기 ACT 개입은 6~16회기, 복합적 주제나 트라우마 작업은 20회 이상이 권장되어 왔습니다. 센터에서는 첫 회기 이후 초기 목표를 함께 정하고 4~6회마다 경과를 점검합니다. 단기간에 변화가 필요하신 경우 8주 집중 프로그램도 마련되어 있습니다.",
  },
  {
    category: "process",
    question: "회기 간격은 보통 어떻게 정하나요?",
    answer:
      "초반 4~6주는 주 1회 간격을 권장합니다. 정서적 연결과 변화의 경험이 안정적으로 쌓이기 위해서는 일정한 리듬이 중요하기 때문입니다. 이후 안정기에 접어들면 격주 또는 월 1회로 간격을 늘리며 마무리 단계로 이어갑니다.",
  },
  {
    category: "process",
    question: "중간에 세션을 그만두고 싶어지면 어떻게 하나요?",
    answer:
      "언제든 의사를 말씀해 주세요. 일방적 중단보다는 1~2회의 종결 회기를 통해 지금까지의 작업을 정리하시는 것을 권장드립니다. 이는 그동안의 경험을 내면에 안정적으로 통합하는 데 중요하기 때문입니다. 비용·일정상 어려움이 있으시면 조정도 가능합니다.",
  },
  {
    category: "process",
    question: "상담 종결은 어떤 기준으로 결정하나요?",
    answer:
      "초기에 설정하신 목표의 달성 정도, 일상에서의 실천 능력, 증상의 변화 등을 함께 점검합니다. 종결은 갑자기 결정되지 않으며, 보통 2~3회에 걸쳐 지금까지의 작업을 돌아보고 앞으로의 계획을 함께 설계합니다. 필요시 추후 부스터 세션도 안내해 드립니다.",
  },
  {
    category: "process",
    question: "작업한 작품은 어떻게 되나요?",
    answer:
      "내담자의 작품은 내담자의 소유입니다. 원하시면 가져가실 수 있고, 센터에 안전하게 보관해 드리는 것도 가능합니다. 촬영한 기록은 비밀 보장 원칙에 따라 치료사만 접근할 수 있는 공간에 보관되며, 상담을 마치신 뒤에는 동의하신 방식으로 처리됩니다.",
  },

  // ── 비용·결제 ───────────────────────────────────────────────────
  {
    category: "pricing",
    question: "상담 비용은 얼마인가요?",
    answer:
      "개인 미술치료는 회기당 80,000~120,000원, 그룹 프로그램은 회기당 40,000~60,000원입니다. 8주 패키지 프로그램 이용 시 할인이 적용됩니다. 자세한 내용은 비용 안내 페이지에서 확인하실 수 있으며, 첫 상담에서 상황에 맞는 구성을 함께 설계해 드립니다.",
  },
  {
    category: "pricing",
    question: "결제 수단은 어떻게 되나요?",
    answer:
      "현재 카드 결제는 지원하지 않아 계좌이체로만 진행됩니다. 현금영수증과 세금계산서 발행은 모두 가능하며, 세금계산서는 사업자 정보(상호·사업자등록번호·담당자 이메일)를 미리 전달해 주시면 발급해 드립니다.",
  },
  {
    category: "pricing",
    question: "건강보험이나 실손보험 청구가 가능한가요?",
    answer:
      "심리상담·미술치료는 한국 건강보험 급여 항목이 아니므로 보험 청구는 불가능합니다. ACT ART CENTER는 의료기관이 아닌 상담 센터로, 의료기록이 남지 않습니다. 일부 기업의 복지 제도(EAP·심리지원 포인트)에 따라 지원이 가능한 경우가 있으니 소속 기관에 확인해 보시기를 권합니다.",
  },
  {
    category: "pricing",
    question: "예약 변경과 취소는 어떻게 되나요?",
    answer:
      "예약 24시간 전까지는 무료로 변경·취소가 가능합니다. 24시간 이내 변경은 회기의 50%, 당일 노쇼는 100%가 청구될 수 있습니다. 센터는 한 회기 한 분만을 위해 공간과 시간을 준비하므로, 사전 알림에 대한 양해를 부탁드립니다.",
  },
  {
    category: "pricing",
    question: "패키지를 이용하면 얼마나 할인되나요?",
    answer:
      "8주 집중 프로그램·번아웃 워크숍·가족 세션 등 패키지 이용 시 단일 회기 대비 회기당 환산 기준 약 10~17% 할인이 적용됩니다. 이는 ‘지속적 작업이 변화를 만든다’는 임상 근거(세션 용량-반응 관계)에 기반한 구성입니다.",
  },

  // ── ACT 수용전념치료 ────────────────────────────────────────────
  {
    category: "act",
    question: "ACT란 무엇인가요?",
    answer:
      "ACT(Acceptance and Commitment Therapy, 수용전념치료)는 3세대 인지행동치료의 하나로, 심리적 유연성을 높이는 것을 목표로 합니다. 수용·인지적 탈융합·현재 순간 접촉·맥락으로서의 자기·가치·전념 행동의 6가지 핵심 프로세스를 통해 의미 있는 삶을 살 수 있도록 돕습니다.",
  },
  {
    category: "act",
    question: "CBT(인지행동치료)와 ACT는 어떻게 다른가요?",
    answer:
      "전통적 CBT는 ‘부정적 생각을 사실에 맞게 교정한다’는 관점인 반면, ACT는 ‘생각은 사실이 아니라 떠오르는 경험’으로 보고 그것과 거리 두는 연습을 합니다. ACT는 증상 제거보다 가치 있는 삶의 방향을 회복하는 데 초점을 둡니다. 미술치료와 결합하면 언어로 접근하기 어려운 경험에도 부드럽게 접촉할 수 있다는 장점이 있습니다.",
  },
  {
    category: "act",
    question: "‘수용’은 그냥 참거나 체념하라는 뜻인가요?",
    answer:
      "전혀 그렇지 않습니다. ACT의 수용은 ‘내가 지금 이런 감정을 느끼고 있다’는 사실을 회피하지 않고 인정하는 태도입니다. 불편한 감정을 밀어내는 데 쓰이던 에너지를 덜어내고, 그 힘을 의미 있는 행동으로 돌리는 것이 목적입니다. 체념과 달리 수용은 능동적인 선택입니다.",
  },
  {
    category: "act",
    question: "ACT 미술치료는 어떤 분들에게 특히 도움이 되나요?",
    answer:
      "언어로 감정을 설명하기 어려운 분, 번아웃·만성 스트레스로 지친 분, 트라우마 경험을 직접 말로 꺼내기 부담스러운 분, 삶의 방향을 다시 정리하고 싶으신 분에게 특히 적합합니다. 미술 작업이 언어의 부담을 낮추고, ACT가 변화의 방향을 제공하는 통합 접근입니다.",
  },
  {
    category: "act",
    question: "일상에서 ACT를 어떻게 적용할 수 있나요?",
    answer:
      "세션에서 경험한 수용·탈융합 기법을 간단한 일기·한 장의 드로잉·3분 호흡 같은 ‘생활 속 실험’으로 이어가는 것이 권장됩니다. 치료사는 매 회기 마무리에 다음 한 주에 시도할 작은 행동을 함께 설계해 드립니다. 완벽함보다 꾸준함이 변화의 열쇠입니다.",
  },

  // ── 아동·청소년 ─────────────────────────────────────────────────
  {
    category: "child",
    question: "아이가 몇 살부터 가능한가요?",
    answer:
      "만 5세부터 참여 가능합니다. 아동의 발달 단계에 맞춰 놀이와 ACT를 통합한 프로그램을 진행하며, 매 세션 후 부모 상담 10분이 포함됩니다. 만 14세 이상 청소년은 성인 개인 세션 구성에 가깝게 진행됩니다.",
  },
  {
    category: "child",
    question: "부모도 함께 들어가야 하나요?",
    answer:
      "세션은 원칙적으로 아이 혼자 진행합니다. 이는 아이가 부모의 평가 없이 자유롭게 표현할 수 있는 환경을 보장하기 위함입니다. 매 회기 후 부모 상담 10분에서 주요 관찰 내용을 공유하며, 필요시 부모-자녀 합동 회기를 별도로 설계합니다.",
  },
  {
    category: "child",
    question: "아이가 말한 내용을 부모에게 모두 알려 주시나요?",
    answer:
      "아이의 비밀유지도 상담 신뢰의 핵심입니다. 생명·안전과 관련된 사안이 아니라면, 개별 발언을 그대로 전달하기보다 아이의 정서 상태·성장 지점 위주로 공유해 드립니다. 첫 회기 때 가족 구성원이 함께 비밀유지 범위를 확인합니다.",
  },
  {
    category: "child",
    question: "학교나 담임 선생님과도 협력이 가능한가요?",
    answer:
      "부모의 동의가 있는 경우 학교 상담 교사나 담임 선생님과 제한적 범위에서 소통이 가능합니다. 진단서 발급은 의료기관의 영역이므로 불가하지만, 세션 진행 상황에 대한 간단한 의견서는 제공해 드릴 수 있습니다.",
  },

  // ── 온라인 ──────────────────────────────────────────────────────
  {
    category: "online",
    question: "온라인 상담은 어떻게 진행되나요?",
    answer:
      "화상 미팅(Zoom)으로 진행됩니다. 사전에 미술 재료 키트를 배송해 드리며, 치료사의 안내에 따라 함께 미술 활동을 합니다. 국내외 연구에서도 대면과 온라인 세션의 치료 동맹·경험의 차이가 유의미하지 않다는 결과가 꾸준히 보고되고 있습니다.",
  },
  {
    category: "online",
    question: "집이 상담 공간으로 적합한가요?",
    answer:
      "방해받지 않는 조용한 공간과 탁자만 있으면 충분합니다. 중요한 것은 ‘혼자 있을 수 있는 시간’입니다. 가족이 함께 있는 환경이라면 헤드셋 사용을 권장하며, 첫 회기에서 자택 환경 세팅을 함께 점검해 드립니다.",
  },
  {
    category: "online",
    question: "도중에 인터넷이 끊기면 어떻게 하나요?",
    answer:
      "연결이 3분 이상 복구되지 않을 경우 전화로 전환해 진행을 마무리하거나, 남은 회기 시간을 다음 일정으로 이월합니다. 기술 문제로 손실된 시간은 비용에 포함하지 않으니 걱정 없이 연결을 시도해 주세요.",
  },
  {
    category: "online",
    question: "온라인이 적합하지 않은 경우도 있나요?",
    answer:
      "해리 증상이 심한 경우, 심각한 자해·자살 위험이 있는 경우, 급성 정신병리 상태에서는 대면 세션 또는 의료기관 병행을 권장합니다. 첫 상담에서 온라인·대면 적합성을 함께 판단해 드립니다.",
  },
  {
    category: "online",
    question: "해외에 거주 중인데 시차가 걱정됩니다.",
    answer:
      "유럽·북미·동남아 등 시차가 큰 지역의 한국어 상담도 가능합니다. 가능한 시간대를 우선 공유해 주시면, 양측에 무리가 없는 시간을 함께 찾아 드립니다.",
  },

  // ── 공통: 비밀유지·기록 ─────────────────────────────────────────
  {
    category: "first-visit",
    question: "의료기록에 남나요?",
    answer:
      "아닙니다. ACT ART CENTER는 의료기관이 아닌 상담센터로, 의료보험 청구나 의료기록에 남지 않습니다. 모든 상담 내용은 철저히 비밀이 보장됩니다.",
  },
] as const;

/**
 * TEAM_MEMBERS
 *
 * - 자격 기재 원칙: 실제 보유한 자격만 기재합니다. ATR-BC·ACBS Trainer 는 보유하지 않으므로
 *   기재하지 않습니다. 추후 취득 시 docs/TODO.md §3 절차에 따라 추가합니다.
 * - specialtyDetails: 전문 영역을 1~2문장의 설명 블록으로 풀어 ‘영역 나열’이 아니라
 *   ‘어떻게 접근하는가’ 를 보여줍니다.
 * - philosophyParagraphs: 권위를 유지하면서도 접근 가능한 개인 서사. 특정 사례·내담자
 *   인용 없이 일반화된 전문가 관점으로 기술합니다.
 */
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "고은별",
    role: "대표",
    credentials: "MA · 한국미술치료학회 정회원",
    education: [
      "차의과학대학교 미술치료학 박사과정 이수중",
      "차의과학대학교 미술치료학 석사",
      "홍익대학교 미술대학 학사·석사",
    ],
    specialties: ["미술심리치료", "수용전념치료(ACT)", "트라우마", "정서·심층탐색"],
    bio: "세 아이의 어머니이자 미술과 심리치료를 연결하는 전문가. 홍익대학교 미술대학에서 학사 및 석사를 마친 후 DDP 디자인재단 오프닝 프로젝트에 참여하며 예술 현장의 실무 경험을 쌓았다. 이후 차의과학대학교에서 미술치료 석사를 취득하였으며, 현재 박사 과정을 이수하며 예술을 통한 정서 회복과 인간 이해에 대한 연구를 이어가고 있다.",
    quote:
      "예술적 감수성과 임상적 통찰을 바탕으로, 개인의 내면을 존중하며 지속 가능한 심리적 성장을 돕는 미술치료를 지향합니다.",
    /** 상담 철학 — 개인 서사 기반 (2~3 문단). */
    philosophyParagraphs: [
      "예술은 오랫동안 사람의 언어 이전 경험을 담아온 그릇이었습니다. 말로 설명하기 전에 이미 손끝이 선택하는 색, 주저 없이 그어지는 선, 망설이다 지워지는 흔적에는 본인도 미처 알아차리지 못한 이야기가 담겨 있습니다. 이런 이유로 저는 임상 현장에서 ‘무엇을 말해야 할지 모르겠다’ 고 호소하시는 분들께 미술이 가장 부드러운 진입로가 된다고 믿습니다.",
      "그러나 감정을 꺼내는 것만으로는 삶이 달라지지 않습니다. 수용전념치료(ACT)는 드러난 감정에 휩쓸리는 대신 ‘그 감정을 품고도 내가 원하는 방향으로 걸어갈 수 있는 힘’, 즉 심리적 유연성을 훈련합니다. 미술이 ‘안전한 거리에서 꺼내 보는 작업’이라면, ACT는 ‘꺼낸 것을 어떻게 다룰지 방향을 세우는 작업’입니다. 두 접근이 만났을 때 작업은 감정 해소에서 멈추지 않고 일상의 선택으로 이어집니다.",
      "저는 내담자를 고치거나 바꾸려 하지 않습니다. 지금 이 자리에 서 있기 위해 각자가 치러 온 고유한 노력을 먼저 존중하며, 그 위에 조금 더 유연한 선택지를 함께 탐색합니다. 예술은 그 선택을 보이지 않는 내면에서 가시적인 형태로 꺼내 주고, ACT는 그 선택이 단단히 뿌리내리도록 돕습니다.",
    ],
    /** 전문 영역 상세 — 각 영역이 ‘어떤 접근’ 인지 1~2 문장으로 풀어냅니다. */
    specialtyDetails: [
      {
        title: "트라우마 미술치료",
        description:
          "언어로 접근하기 어려운 외상 기억을 안전한 거리에서 상징화하는 작업입니다. 직접 말로 되살리기보다 이미지·색·재료의 물성 안에서 단계적으로 처리해, 재외상화(재경험으로 인한 상처) 위험을 낮춥니다.",
      },
      {
        title: "ACT 기반 성인 개인 치료",
        description:
          "불안·우울·번아웃·관계 갈등에 대해 감정을 없애려 하기보다 ‘감정과 관계 맺는 방식’을 다시 설계하는 접근입니다. 미술이 감정과 만나는 통로, ACT 가 방향을 잡는 나침반 역할을 합니다.",
      },
      {
        title: "정서·심층탐색",
        description:
          "증상 해소를 넘어 ‘나는 어떤 사람으로 살고 싶은가’ 를 함께 탐색합니다. 장기 작업을 통해 자신의 가치·정체성·관계 패턴을 예술적 상징과 서사로 통합하는 과정입니다.",
      },
      {
        title: "아동·청소년 놀이 기반 미술치료",
        description:
          "발달 단계에 맞춘 놀이와 ACT 요소를 결합해, 아이가 평가 받지 않는 공간에서 자기감정을 표현하도록 돕습니다. 부모 상담 10분이 포함되어 가정에서의 반응 전략도 함께 설계합니다.",
      },
    ],
    /** 연구 관심사 — 박사 과정 연구 방향. 허구 없이 일반화된 관심사. */
    researchInterests: [
      "예술을 통한 정서 회복의 기전 — 언어적 처리와 비언어적 처리의 상호작용",
      "수용전념치료(ACT)와 미술치료의 통합 프로토콜 개발",
      "성인 번아웃·만성 스트레스 집단을 위한 단기 미술치료 효과 검증",
      "디지털 환경(온라인 세션·자가 드로잉 일지)에서의 미술치료 적용",
    ],
    /** 첫 회기 흐름 — 새 내담자가 무엇을 기대할 수 있는지 5단계로 안내. */
    firstSessionFlow: [
      {
        step: "도착 & 공간 적응",
        minutes: "약 5분",
        description:
          "따뜻한 차 한 잔과 함께 공간에 도착해 긴장을 내려놓는 시간입니다. 센터의 구성·비밀유지 원칙·세션 흐름을 먼저 간단히 안내해 드립니다.",
      },
      {
        step: "지금의 주제 나누기",
        minutes: "약 10~15분",
        description:
          "요즘 어떤 어려움이 계신지, 어떤 변화를 원하시는지 편하게 말씀해 주시면 됩니다. 말이 잘 나오지 않아도 괜찮습니다. 떠오르는 단어나 이미지만으로 충분합니다.",
      },
      {
        step: "워밍업 미술 작업",
        minutes: "약 10분",
        description:
          "현재의 감정 상태를 색 한두 가지로 표현해 보는 작은 작업입니다. 기술이 아닌 ‘지금의 나’ 에 접촉하는 것이 목적입니다. 원치 않으시면 생략하셔도 됩니다.",
      },
      {
        step: "함께 의미 읽기",
        minutes: "약 10분",
        description:
          "작업한 것을 두고 ‘해석’ 이 아니라 ‘대화’ 를 나눕니다. 작품에 대한 정답은 없으며, 내담자의 말이 언제나 가장 신뢰할 만한 단서가 됩니다.",
      },
      {
        step: "프로그램 설계 & 마무리",
        minutes: "약 5~10분",
        description:
          "오늘의 경험을 바탕으로 적합한 회기 수·간격·접근 방식을 함께 결정합니다. 결정을 그 자리에서 하지 않으셔도 됩니다. 가능성만 열어두고 돌아가셔도 좋습니다.",
      },
    ],
  },
] as const;
