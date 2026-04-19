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

export const FAQ_ITEMS = [
  {
    question: "미술을 못해도 괜찮나요?",
    answer:
      "네, 전혀 문제없습니다. 미술치료는 작품의 완성도가 아닌 창작 과정에서의 심리적 경험을 중시합니다. 그림 실력과 관계없이 누구나 참여할 수 있으며, 치료사가 편안하게 안내해 드립니다.",
  },
  {
    question: "상담 비용은 얼마인가요?",
    answer:
      "개인 미술치료는 회기당 80,000~120,000원, 그룹 프로그램은 회기당 40,000~60,000원입니다. 8주 패키지 프로그램 이용 시 할인이 적용됩니다. 자세한 내용은 비용 안내 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "ACT란 무엇인가요?",
    answer:
      "ACT(Acceptance and Commitment Therapy, 수용전념치료)는 3세대 인지행동치료의 하나로, 심리적 유연성을 높이는 것을 목표로 합니다. 수용, 인지적 탈융합, 현재 순간 접촉, 맥락으로서의 자기, 가치, 전념 행동의 6가지 핵심 프로세스를 통해 의미 있는 삶을 살 수 있도록 돕습니다.",
  },
  {
    question: "아이가 몇 살부터 가능한가요?",
    answer:
      "만 5세부터 참여 가능합니다. 아동의 발달 단계에 맞춰 놀이와 ACT를 통합한 프로그램을 진행하며, 매 세션 후 부모 상담 10분이 포함됩니다.",
  },
  {
    question: "온라인 상담은 어떻게 진행되나요?",
    answer:
      "화상 미팅(Zoom)으로 진행됩니다. 사전에 미술 재료 키트를 배송해 드리며, 치료사의 안내에 따라 함께 미술 활동을 합니다. 대면 상담과 동일한 효과를 기대할 수 있습니다.",
  },
  {
    question: "의료기록에 남나요?",
    answer:
      "아닙니다. ACT ART CENTER는 의료기관이 아닌 상담센터로, 의료보험 청구나 의료기록에 남지 않습니다. 모든 상담 내용은 철저히 비밀이 보장됩니다.",
  },
] as const;

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
    quote: "예술적 감수성과 임상적 통찰을 바탕으로, 개인의 내면을 존중하며 지속 가능한 심리적 성장을 돕는 미술치료를 지향합니다.",
  },
] as const;
