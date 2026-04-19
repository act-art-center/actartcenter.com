import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "정서·트라우마 중심 미술심리치료 — 몸이 기억하는 경험을 미술로",
  description:
    "만성 스트레스, 불안, 번아웃, 상실, 관계 트라우마 경험을 말 이전의 이미지로 먼저 풀어 내는 ACT 미술심리치료. Bessel van der Kolk · Dan Siegel · Steven Hayes · Kristin Neff 의 임상 원칙을 미술 매체와 통합해, 자극량을 천천히 올리는 타이트레이션 구조로 진행합니다.",
  keywords: [
    "트라우마 미술심리치료",
    "번아웃 미술치료",
    "상실 애도 미술치료",
    "정서 소진 상담",
    "관계 트라우마 상담",
    "불안 미술치료",
    "ACT 미술치료",
    "Window of Tolerance 상담",
  ],
  alternates: { canonical: `${SITE_URL}/services/emotional` },
  openGraph: {
    type: "website",
    title: "정서·트라우마 중심 미술심리치료 — ACT ART CENTER",
    description:
      "번아웃·상실·관계 트라우마·불안 경험을 미술과 ACT로 다루는 장기 트랙. 자극량 조절·window of tolerance 원칙을 지키며 진행합니다.",
    url: `${SITE_URL}/services/emotional`,
    images: [
      {
        url: "/og/services-emotional.png",
        width: 1200,
        height: 630,
        alt: "정서·트라우마 중심 미술심리치료 — 수채 매체 위의 손",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "정서·트라우마 중심 미술심리치료",
    description:
      "불안·번아웃·상실·관계 트라우마를 미술 매체와 ACT 로 다루는 장기 정서 트랙.",
    images: ["/og/services-emotional.png"],
  },
};

const emotionalServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "정서·트라우마 중심 미술심리치료", item: `${SITE_URL}/services/emotional` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/emotional#service`,
      name: "정서·트라우마 중심 미술심리치료",
      alternateName: ["Emotional & Trauma-Focused Art Therapy", "Trauma-Informed Art Therapy", "정서 미술심리치료"],
      additionalType: "https://schema.org/PsychologicalTreatment",
      description:
        "불안·번아웃·상실·관계 트라우마·정체성 전환 등 정서 경험을 대상으로 하는 장기 ACT 미술심리치료. Bessel van der Kolk 『The Body Keeps the Score』(2014)의 신체 기반 트라우마 이해, Dan Siegel 의 window of tolerance 개념, Steven C. Hayes 의 ACT 심리적 유연성 모델, Kristin Neff 의 자기자비(self-compassion) 연구를 미술 매체와 통합합니다.",
      url: `${SITE_URL}/services/emotional`,
      image: `${SITE_URL}/og/services-emotional.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "대한민국" },
      offers: {
        "@type": "Offer",
        price: "80000",
        priceCurrency: "KRW",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "80000",
          priceCurrency: "KRW",
          referenceQuantity: { "@type": "QuantitativeValue", value: 50, unitText: "MIN" },
          description: "50분 세션 기준 80,000~120,000원. 장기 트랙 12·20회 패키지 할인 운영.",
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/booking`,
      },
    },
  ],
};

const fitAudience = [
  {
    title: "이별·상실 경험",
    description:
      "가까운 사람의 죽음·헤어짐·유산·반려동물의 상실 등 깊은 애도를 지나고 있는 분. 말로 설명하기 전에 이미지·색·상징으로 먼저 기록해 보는 작업이 맞는 속도를 만들어 줍니다.",
  },
  {
    title: "번아웃 · 정서 소진",
    description:
      "오래 기능으로만 버텨 온 시간 이후 감각이 무뎌진 분. '나는 지금 무엇을 느끼는가'조차 잡히지 않는 상태에서, 미술 매체의 촉각·무게·저항이 감각을 다시 연결해 줍니다.",
  },
  {
    title: "만성 불안 · 과각성",
    description:
      "가슴 조임·호흡 얕음·생각이 멈추지 않음이 지속되는 분. Dan Siegel 의 window of tolerance 개념을 함께 공유하며, 각성 수준을 높이지 않는 낮은 자극부터 천천히 접촉합니다.",
  },
  {
    title: "분노 · 감정 조절의 어려움",
    description:
      "작은 자극에도 크게 흔들리거나, 반대로 오랫동안 감정을 눌러 온 분. 물성이 강한 매체(점토·스크래치)로 감정의 무게를 외부로 옮기는 연습을 합니다.",
  },
  {
    title: "관계 트라우마",
    description:
      "가족·연인·직장 관계에서 반복된 경계 침해, 정서적 학대, 가스라이팅 경험이 누적되어 있는 분. 재외상화 위험을 낮추는 타이트레이션 원칙 하에 안전한 거리에서 다룹니다.",
  },
  {
    title: "정체성 전환 · 중년기 위기",
    description:
      "이직·퇴직·부모됨·중년기처럼 '내가 누구인지' 흐려진 시기에 가치와 방향을 다시 그려 보고 싶은 분. ACT 의 가치 작업과 상징 작업을 결합합니다.",
  },
];

const traumaNeuroscience = [
  {
    title: "언어 이전 경험의 신경생리학",
    description:
      "Bessel van der Kolk 는 『The Body Keeps the Score』(2014)에서 트라우마 기억이 주로 감각·신체·이미지로 저장되고, 브로카 영역의 활성이 저하된다는 Rauch 외(1996) fMRI 연구를 인용합니다. 말로 먼저 꺼내기 어려운 이유가 신경생리학적으로 시사됨을 보여주는 대목입니다.",
  },
  {
    title: "우반구 · 감각운동 경로의 접근성",
    description:
      "미술 작업은 시각·촉각·운동 감각을 동시에 쓰는 작업이며, 언어 중심 처리와는 다른 경로로 경험에 접촉합니다. Lusebrink(1990)의 Expressive Therapies Continuum(ETC)은 매체의 자극 수준을 감각·지각·인지·상징 층으로 구조화해 설명해 왔습니다.",
  },
  {
    title: "Window of Tolerance — 자극량의 창",
    description:
      "Dan Siegel 이 제안한 'window of tolerance'는 정서 각성이 너무 높지도(과각성) 낮지도(저각성) 않은 상태를 의미합니다. 트라우마 세션은 반드시 이 창 안에서 이루어져야 하며, 본 센터는 매체 선택과 작업 속도로 그 창을 넓히는 훈련을 설계합니다.",
  },
  {
    title: "타이트레이션 — 자극의 소분",
    description:
      "Peter Levine 의 somatic experiencing 접근에서 유래한 titration 원칙은, 트라우마 기억을 한 번에 꺼내지 않고 아주 작은 조각으로 나누어 접촉하는 방식입니다. 미술 작업에서는 이미지·상징의 '일부'만 먼저 다루고 거리를 두는 방식으로 구현됩니다.",
  },
];

const pacingPrinciples = [
  {
    number: "01",
    title: "안전 우선, 서사 나중",
    description:
      "트라우마 서사의 선형적 재구성은 세션 초반에 시도하지 않습니다. 먼저 신체 감각·공간·호흡이 안정되는 '안전 기반(safe place)' 작업을 여러 회기에 걸쳐 쌓습니다.",
  },
  {
    number: "02",
    title: "자극량의 가역성 확보",
    description:
      "작업 중 각성이 올라가면 언제든 되돌릴 수 있는 장치(그라운딩 이미지·이완 매체·세션 종료 의식)를 매 회기 마지막에 실행합니다. '꺼낸 채로 돌려보내지 않는 것'이 기본 원칙입니다.",
  },
  {
    number: "03",
    title: "비언어적 거리 두기",
    description:
      "감당이 어려운 장면은 직접 그리기보다 상징·메타포·색의 배치로 간접화합니다. 내담자가 원할 때 서사로 돌아갈 수 있도록 작업 자체를 '창(window)'으로 열어 둡니다.",
  },
  {
    number: "04",
    title: "종결은 재접근 가능성으로",
    description:
      "모든 트라우마 작업이 완결될 필요는 없습니다. 종결 시 열어 둔 주제와 닫아 둔 주제를 명시적으로 구분하고, 미래에 다시 열어 볼 수 있는 '지도'를 함께 남깁니다.",
  },
];

const actApplication = [
  {
    title: "수용(Acceptance)과 감정의 외현화",
    description:
      "불편한 감정을 밀어내는 대신 물감의 무게·점토의 저항으로 옮겨 놓는 연습입니다. '그 감정이 나를 통째로 삼키지 않는다'는 경험이 이미지로 남습니다.",
  },
  {
    title: "인지적 탈융합(Defusion)",
    description:
      "자기 비난 문장을 캐릭터·말풍선·기상 이미지로 외재화합니다. Steven C. Hayes 등이 정리한 ACT 의 defusion 은 '생각을 사실로 믿는 관계'를 '생각을 관찰하는 관계'로 재구성하는 훈련입니다.",
  },
  {
    title: "가치(Values) 재연결",
    description:
      "트라우마는 자주 '가치를 향해 움직이는 힘'을 무너뜨립니다. 다시 걷고 싶은 방향을 색·상징·콜라주로 꺼내고, 이것이 목표가 아닌 방향임을 시각적으로 확인합니다.",
  },
  {
    title: "자기자비(Self-Compassion)",
    description:
      "Kristin Neff 의 자기자비 3요소(자기친절·공통 인간성·마음챙김)를 미술 작업에 통합합니다. '내가 나를 어떻게 대하는가'의 내부 톤을 이미지로 먼저 만나는 작업입니다.",
  },
];

const sessionStructure = [
  {
    number: "01",
    title: "체크인 · 그라운딩 (10분)",
    description:
      "최근 한 주의 감정·신체 감각·수면·에너지 수준을 짧게 나눕니다. 각성 수준이 높게 올라와 있다면 색 지정·호흡·간단한 스케치로 먼저 안정화합니다.",
  },
  {
    number: "02",
    title: "미술 작업 (25분)",
    description:
      "그날의 주제와 내담자 상태에 맞춘 매체를 함께 선택합니다. 수채·파스텔·콜라주·점토 등. 작업 자체가 개입이므로 '기술'이 아니라 '과정'이 기준입니다.",
  },
  {
    number: "03",
    title: "대화와 의미 읽기 (15분)",
    description:
      "해석하지 않고, 작업 앞에서 나누는 대화입니다. 내담자의 언어가 항상 가장 신뢰할 만한 단서입니다. ACT 프로세스 중 어떤 축이 작동했는지 함께 짚습니다.",
  },
  {
    number: "04",
    title: "종결 의식 · 홈워크 (10분)",
    description:
      "자극이 남지 않도록 정리 의식을 합니다. 원하시는 경우 한 주 동안 시도해 볼 작은 한 걸음(3분 드로잉·감각 산책·한 줄 일기)을 함께 정합니다. 홈워크는 선택 사항이며 강제되지 않습니다.",
  },
];

const evidenceNotes = [
  {
    source: "Bessel van der Kolk, 『The Body Keeps the Score』(2014, Viking)",
    note:
      "트라우마가 신체에 저장되는 방식을 신경생리학·임상 사례로 종합한 국제 베스트셀러. Rauch et al.(1996, Arch Gen Psychiatry) 의 fMRI 연구 등을 토대로, 언어 기반 처리의 한계와 비언어적 접근의 가능성을 제시합니다. 본 센터는 '효과 단정'이 아닌 '접근 원칙'으로 참조합니다.",
  },
  {
    source: "Dan Siegel — Window of Tolerance 개념",
    note:
      "Dan Siegel 이 『The Developing Mind』 등에서 정리한 window of tolerance 는, 정서가 과각성·저각성 양극이 아닌 '처리 가능한 중간 영역'에 머물 때 학습과 변화가 일어난다는 관점입니다. 트라우마 세션의 페이싱 판단에 핵심 참조 개념으로 쓰입니다.",
  },
  {
    source: "Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson — ACT 공동 개발자",
    note:
      "『Acceptance and Commitment Therapy』(2nd ed., 2012)와 A-Tjak et al.(2015, Psychother Psychosom) 등 메타분석을 통해 불안·우울·만성 통증 등에서 심리적 유연성 기반 접근의 근거가 축적되어 왔습니다. 미술 매체와의 통합은 본 센터를 포함한 국내외 임상에서 연구가 진행 중인 영역입니다.",
  },
  {
    source: "Kristin Neff — Self-Compassion 연구",
    note:
      "Kristin Neff(Univ. of Texas at Austin)는 자기자비를 자기친절·공통 인간성·마음챙김 3요소로 정리했습니다. 트라우마 경험자에게 흔한 '자기 비난 고리'를 다루는 보조 개입으로 본 센터 세션에 반복 통합됩니다.",
  },
  {
    source: "Cathy Malchiodi, 『Handbook of Art Therapy』 / Trauma-Informed Art Therapy 저술",
    note:
      "Malchiodi 는 감각 기반 미술치료·트라우마-인지 통합 접근을 오래 정리해 온 연구자로, 매체의 유동성·저항성·촉각성이 정서 조절에 미치는 영향을 단행본과 학회지에 지속 기록해 왔습니다.",
  },
  {
    source: "한국미술치료학회 (Korean Art Therapy Association)",
    note:
      "국내 학회지에는 상실·번아웃·관계 트라우마·애도 주제의 사례 연구가 꾸준히 축적되고 있습니다. 본 센터는 국내 임상 맥락에 맞춰 세션 길이·개입 강도·언어를 현지화합니다.",
  },
];

const faqs = [
  {
    q: "언제 시작하는 것이 좋을까요?",
    a: "'지금이 맞는가'를 스스로 판단하기 어려운 상태라면, 먼저 첫 무료 상담에서 지금의 감정·수면·관계 영역을 함께 점검해 드립니다. 다만 자·타해 임박 위험, 심한 해리 경험이 반복되는 급성기에는 정신건강의학과 진료가 먼저이며, 이 경우 의료진과의 병행 구조를 안내해 드립니다.",
  },
  {
    q: "약물 치료와 함께 받아도 되나요?",
    a: "네, 병행 가능합니다. ACT ART CENTER 는 의료기관이 아니므로 약물 처방·진단을 수행하지 않으며, 약물 치료 중 계신 분도 보조적 심리 지원으로 세션에 참여하실 수 있습니다. 동의하신 범위 안에서 담당 정신건강의학과와 진행 경과를 공유합니다.",
  },
  {
    q: "작업한 내용을 가족과 공유해야 하나요?",
    a: "아닙니다. 작품 원본·세션 중 발언은 내담자의 소유이며, 가족·파트너와의 공유는 의무가 아닙니다. 함께 보고 싶으시다면 사전에 '어떤 부분을 어떤 방식으로' 공유할지 세션에서 미리 설계합니다. 관계 트라우마 주제일수록 공유 범위는 더 보수적으로 잡습니다.",
  },
  {
    q: "세션이 힘들어 중단하고 싶을 때는 어떻게 하나요?",
    a: "언제든 말씀해 주세요. 일방적 중단보다는 1~2회 종결 회기에서 지금까지 열어 둔 주제를 정리하고 '닫아 두는 방식'을 함께 설계하는 것을 권장드립니다. 꺼낸 채로 돌려보내지 않는 것이 본 센터의 원칙이기 때문입니다. 비용·일정 부담으로 중단을 고민하시는 경우 회기 간격 조정·온라인 전환도 가능합니다.",
  },
];

export default function EmotionalPage() {
  return (
    <>
      <JsonLd data={emotionalServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "정서·트라우마 중심 미술심리치료", href: "/services/emotional" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Emotional & Trauma-Focused
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                정서·트라우마 중심 미술심리치료 — 몸이 기억하는 경험을 미술로
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                상실·번아웃·만성 불안·관계 트라우마·정체성 전환처럼 언어로 먼저
                꺼내기 어려운 경험을 다루는 장기 트랙입니다. Bessel van der Kolk
                의 『The Body Keeps the Score』(2014)가 정리한 신체 기반 트라우마
                이해, Dan Siegel 의 <strong>window of tolerance</strong> 개념,
                Steven C. Hayes 등이 정립한 ACT 심리적 유연성 모델, Kristin Neff
                의 자기자비 연구를 미술 매체와 함께 쓰는 구조입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분 세션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">장기 트랙 권장</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">타이트레이션 원칙</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">약물 병행 가능</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는{" "}
                <Link href="/pricing" className="text-primary-500 underline underline-offset-2">
                  비용 페이지
                </Link>{" "}
                에서 확인하실 수 있습니다.
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
              >
                첫 무료 상담 예약하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=800&q=80"
                alt="정서·트라우마 중심 미술심리치료 — 수채 매체와 작업하는 손"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Who is this for */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              이런 분께 권해 드려요
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              진단명이 꼭 있어야 하는 것은 아닙니다. '말로는 설명이 잘 안 되는데
              마음 한 곳이 오래 무겁다' 는 감각이 이어진다면, 첫 상담에서 지금의
              상태와 세션 속도를 함께 점검해 드립니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitAudience.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{item.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Trauma neuroscience */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              말이 닿지 않는 영역 — 트라우마의 신경생리학
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              트라우마 경험은 '말로 설명하면 풀릴 것'이라는 가정만으로 다루기
              어려운 영역입니다. 본 센터가 미술 매체를 첫 진입로로 쓰는 이유는,
              다음 네 가지 관점이 국제 임상에서 지속적으로 기술되어 왔기
              때문입니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {traumaNeuroscience.map((t) => (
              <div
                key={t.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{t.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-charcoal/60 text-xs leading-relaxed max-w-3xl">
            ※ 본 센터는 미술치료가 트라우마를 '해소'한다고 주장하지 않습니다.
            다만 언어 기반 처리와는 다른 경로로 경험에 접촉할 수 있다는 가능성이
            꾸준히 시사되고 있으며, 본 센터는 그 가능성을 보수적으로 인용합니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* Pacing principles */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              페이싱 원칙 — 안전이 먼저, 서사는 나중
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              '지금 꺼내도 괜찮은가' 의 판단이 기법보다 먼저입니다. 본 센터는
              Dan Siegel 의 window of tolerance 개념과 Peter Levine 의 somatic
              experiencing 에서 온 타이트레이션 원칙을 미술 작업에 번역해,
              자극량을 천천히 올리는 네 가지 원칙을 운영합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pacingPrinciples.map((p) => (
              <div
                key={p.number}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">
                  {p.number}
                </div>
                <h3 className="mt-3 text-night font-semibold">{p.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ACT application */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              ACT 는 정서 작업에서 어떻게 쓰이나요
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              ACT(수용전념치료)는 증상 제거보다 '가치 있는 삶의 방향으로
              움직이는 유연성'을 목표로 합니다. 본 센터는 ACT 6프로세스를 미술
              매체와 통합해 '말로만 하는 상담' 이 아닌 몸과 이미지가 함께 움직이는
              작업으로 진행하며, 정서·트라우마 트랙에서는 특히 네 가지 축이
              반복적으로 쓰입니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {actApplication.map((a) => (
              <div
                key={a.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{a.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Session structure */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              회기 구조 — 50분 + 10분 정리
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              한 회기는 60분(세션 50분 + 정리 10분)을 기본으로 합니다. '꺼낸 채로
              돌려보내지 않기' 위해 종결 의식을 반드시 포함하며, 홈워크는 선택
              사항입니다. 아래 흐름은 기본값이며, 주제·상태에 따라 비율을
              조정합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionStructure.map((s) => (
              <div
                key={s.number}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">
                  {s.number}
                </div>
                <h3 className="mt-3 text-night font-semibold">{s.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Evidence */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              우리가 참고하는 곳
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              본 정서 트랙의 설계는 다음 저자·기관의 표준과 개념에 기반합니다.
              인용은 효과를 단정하기 위한 것이 아니라, 어떤 언어와 근거 위에서
              작업을 짰는지 공개하기 위한 것입니다.
            </p>
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            {evidenceNotes.map((e) => (
              <div
                key={e.source}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold text-sm">{e.source}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{e.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              자주 받는 질문
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              정서·트라우마 트랙에서 자주 주시는 질문들에 먼저 답을 드립니다.
              개인 상황마다 답의 결이 달라질 수 있어, 구체적인 내용은 첫 상담에서
              함께 살펴보겠습니다.
            </p>
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{f.q}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Cross-links */}
      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-center">
            함께 살펴보시면 좋은 프로그램
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/individual"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Individual</p>
              <h3 className="mt-2 text-night font-semibold">성인 1:1 개인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                주 1회 × 8주 구조의 기본 개인 트랙. 정서·트라우마 주제는
                여기서 출발해 장기 트랙으로 연장되는 경우가 많습니다.
              </p>
            </Link>
            <Link
              href="/services/depth"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">심층 탐색·연구 기반 미술심리치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                증상 완화 이후에도 자기 이해를 더 깊이 이어가고 싶은 분을 위한
                장기 심층 트랙. 상징·서사·정체성 작업으로 연결됩니다.
              </p>
            </Link>
            <Link
              href="/services/protective"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">보호·의료 환경 미술심리치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                정신과·입원·난임 치료를 병행 중이신 경우, 의료진과 협력하는
                보조적 심리지원 트랙으로 연결해 드립니다.
              </p>
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              마음이 무거울 때, 천천히 시작해도 괜찮습니다
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              첫 상담은 문의·안내 목적으로 무료로 진행합니다. 지금의 상태와
              기대하시는 속도를 편안하게 나눠 주시면, 안전을 먼저 고려한
              개인 맞춤 설계를 함께 준비해 드립니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              첫 무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
