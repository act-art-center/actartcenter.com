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

export const ACT_PROCESSES = [
  {
    id: "acceptance",
    title: "수용",
    titleEn: "Acceptance",
    description: "감정을 밀어내지 않고 있는 그대로 받아들입니다.",
    artConnection: "지금 느끼는 감정에 색을 입혀보세요",
  },
  {
    id: "defusion",
    title: "인지적 탈융합",
    titleEn: "Defusion",
    description: "생각을 사실이 아닌 '생각'으로 바라봅니다.",
    artConnection: "불안한 생각을 캐릭터로 그려보세요",
  },
  {
    id: "present-moment",
    title: "현재 순간 접촉",
    titleEn: "Present Moment",
    description: "지금 이 순간에 온전히 머무릅니다.",
    artConnection: "지금 이 순간, 손끝의 물감에 집중하세요",
  },
  {
    id: "self-as-context",
    title: "맥락으로서의 자기",
    titleEn: "Self-as-Context",
    description: "경험하는 '나'와 관찰하는 '나'를 구분합니다.",
    artConnection: "다양한 '나'를 콜라주로 표현하세요",
  },
  {
    id: "values",
    title: "가치",
    titleEn: "Values",
    description: "삶에서 진정으로 중요한 것이 무엇인지 탐색합니다.",
    artConnection: "당신에게 소중한 것을 상징으로 그려보세요",
  },
  {
    id: "committed-action",
    title: "전념 행동",
    titleEn: "Committed Action",
    description: "가치를 향해 구체적인 한 걸음을 내딛습니다.",
    artConnection: "가치를 향한 한 걸음을 미술로 계획하세요",
  },
] as const;

export const PROCESS_STEPS = [
  { number: "01", title: "문의 상담", description: "전화 또는 온라인으로 편하게 문의하세요" },
  { number: "02", title: "초기 분석", description: "현재 상태와 목표를 함께 살펴봅니다" },
  { number: "03", title: "맞춤 설계", description: "ACT 프로세스 기반 개인 맞춤 프로그램 설계" },
  { number: "04", title: "상담 진행", description: "미술 활동과 ACT를 통합한 세션 진행" },
  { number: "05", title: "성장 종결", description: "변화를 정리하고 일상에서의 실천을 계획" },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    content:
      "8주 프로그램을 통해 제 감정을 처음으로 그림으로 표현할 수 있었어요. 말로는 어려웠던 것이 색으로 나왔을 때, 비로소 제 마음을 이해할 수 있었습니다.",
    attribution: "30대 여성, 마음유연성 8주 프로그램",
    rating: 5,
  },
  {
    id: 2,
    content:
      "아이가 미술치료를 시작한 후 감정 표현이 풍부해졌어요. 선생님이 아이의 속도를 존중해주셔서 안심하고 맡길 수 있었습니다.",
    attribution: "40대 학부모, 아동 미술치료",
    rating: 5,
  },
  {
    id: 3,
    content:
      "번아웃으로 힘든 시기에 그룹 프로그램에 참여했는데, 같은 고민을 가진 분들과 미술로 소통하는 경험이 정말 특별했어요.",
    attribution: "30대 남성, 번아웃 탈출 워크숍",
    rating: 5,
  },
] as const;

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
