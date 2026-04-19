import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "성인 1:1 개인 미술치료 — ACT 6프로세스 기반 8주 프로그램",
  description:
    "성인을 위한 50분 1:1 개인 미술심리상담. 불안, 번아웃, 산후 우울, 트라우마, 정체성 탐색 등 언어로 꺼내기 어려운 경험을 미술 매체와 ACT 수용전념치료 6프로세스로 함께 탐색합니다. 주 1회 × 8주 구조 권장.",
  keywords: [
    "개인 미술치료",
    "성인 미술치료",
    "1:1 미술심리상담",
    "ACT 미술치료",
    "불안 미술치료",
    "번아웃 미술치료",
    "산후 우울 미술치료",
    "트라우마 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/individual` },
  openGraph: {
    type: "website",
    title: "성인 1:1 개인 미술치료 — ACT 미술심리치료 연구소",
    description:
      "50분 1:1 개인 미술치료. 주 1회 × 8주 구조. 관계 형성 → 감정 탐색 → 가치 명료화 → 일상 전이.",
    url: `${SITE_URL}/services/individual`,
    images: [
      {
        url: "/og/services-individual.png",
        width: 1200,
        height: 630,
        alt: "성인 1:1 개인 미술치료 세션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "성인 1:1 개인 미술치료 — ACT 6프로세스 × 미술 매체",
    description:
      "50분, 주 1회 × 8주. 당신의 속도에 맞춰 미술 매체와 수용전념치료로 마음을 탐색합니다.",
    images: ["/og/services-individual.png"],
  },
};

const individualServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "개인 미술치료", item: `${SITE_URL}/services/individual` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/individual#service`,
      name: "성인 1:1 개인 미술치료",
      alternateName: "Individual Art Therapy",
      description:
        "성인 대상 50분 1:1 미술심리상담. ACT(수용전념치료) 6프로세스를 수채·유화·콜라주·점토 등 다양한 미술 매체와 통합하여 불안·번아웃·산후 우울·트라우마·관계 갈등·정체성 탐색을 다룹니다. 주 1회 × 8주 구조를 기본 권장합니다.",
      url: `${SITE_URL}/services/individual`,
      image: `${SITE_URL}/og/services-individual.png`,
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
          description: "50분 세션 기준 80,000~120,000원",
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/booking`,
      },
    },
  ],
};

const fitAudience = [
  {
    title: "오랫동안 이어진 불안",
    description:
      "가슴이 조이거나 생각이 멈추지 않아 힘들었던 경험. 언어로 정리되지 않는 신체 감각을 선·색·형태로 먼저 꺼내 봅니다.",
  },
  {
    title: "번아웃 · 정서 소진",
    description:
      "'나'를 밀어내고 기능으로만 살아온 시간 이후, 감각을 다시 잇고 쉼의 리듬을 회복하는 작업을 함께합니다.",
  },
  {
    title: "산후 우울 · 정체성 변화",
    description:
      "부모라는 새 역할 안에서 흐릿해진 '이전의 나'를 애도하고, 지금의 나와 다시 관계 맺는 시간을 갖습니다.",
  },
  {
    title: "트라우마 · 상실 경험",
    description:
      "말하기 어려운 사건과 관계된 감정을 안전한 거리에서 은유적으로 탐색합니다. 자극량을 조절하는 '타이트레이션' 원칙을 지킵니다.",
  },
  {
    title: "관계 갈등",
    description:
      "가족·연인·직장 관계에서 반복되는 패턴을 도식화하고, 가치에 부합하는 관계 방식을 함께 설계합니다.",
  },
  {
    title: "정체성 · 전환기 탐색",
    description:
      "이직, 진로 전환, 중년기, 은퇴 등 '내가 누구인지'를 다시 묻는 시기에 자기 이해를 시각적으로 정리합니다.",
  },
];

const weeklyStructure = [
  {
    range: "Week 1 – 2",
    phase: "관계 형성과 목표 설정",
    description:
      "치료 관계의 안전감을 우선합니다. 간단한 스케치·콜라주로 지금의 마음 상태를 기록하고, 함께 치료 목표와 속도를 합의합니다.",
  },
  {
    range: "Week 3 – 4",
    phase: "감정·경험 탐색",
    description:
      "수채·파스텔 같은 유동적 매체로 반복되는 감정과 신체 감각을 풀어냅니다. ACT의 '수용(Acceptance)'과 '현재 순간 접촉'을 함께 다룹니다.",
  },
  {
    range: "Week 5 – 6",
    phase: "가치 명료화와 인지적 탈융합",
    description:
      "콜라주·상징 작업으로 '내가 소중히 여기는 것'을 시각화합니다. 반복되는 판단·자기 비난은 '생각'이라는 거리에서 바라봅니다.",
  },
  {
    range: "Week 7 – 8",
    phase: "통합과 일상 전이",
    description:
      "점토·복합 매체로 변화의 흐름을 한 작품으로 엮습니다. 가치에 맞는 '작은 한 걸음(Committed Action)'을 구체화하고 종결을 준비합니다.",
  },
];

const mediaPalette = [
  {
    medium: "수채 · 잉크",
    quality:
      "유동적이고 통제가 어려운 매체. 감정의 흐름·긴장 이완·불안 표현에 자주 활용됩니다. 결과보다 번짐 자체가 기록이 됩니다.",
  },
  {
    medium: "유화 · 오일 파스텔",
    quality:
      "밀도와 층이 쌓이는 매체. 오랜 시간 눌러둔 감정, 복잡한 정동을 두껍게 표현할 수 있어 소진·우울 주제에 적합합니다.",
  },
  {
    medium: "콜라주",
    quality:
      "이미 만들어진 이미지를 선택·배치하는 작업. 정체성 탐색, 가치 명료화, 자기 표상 작업에 특히 유용합니다.",
  },
  {
    medium: "점토 · 조형",
    quality:
      "촉각·무게·저항이 있는 매체. 신체 경험과 연결되는 매체로, 트라우마 기억의 안전한 그라운딩에 활용됩니다.",
  },
];

const actIntegration = [
  {
    title: "수용(Acceptance) — 감정을 밀어내지 않기",
    description:
      "회피하고 싶은 감각을 물감의 무게로 옮겨 오는 연습을 합니다. '밀어내지 않고 옆에 두기'가 시각적으로 가능해집니다.",
  },
  {
    title: "인지적 탈융합(Defusion) — 생각과 거리 두기",
    description:
      "반복되는 자기 비난 문장을 캐릭터·말풍선·기상 이미지로 외현화해 '생각일 뿐'이라는 관점을 몸으로 경험합니다.",
  },
  {
    title: "현재 순간 접촉 — 지금의 감각으로 돌아오기",
    description:
      "붓끝의 저항, 종이의 결, 물감 냄새에 주의를 두는 과정 자체가 마음챙김 훈련이 됩니다.",
  },
  {
    title: "맥락으로서의 자기 — 관찰하는 나",
    description:
      "작업을 벽에 걸고 바라보며 '이것을 만든 나 / 바라보는 나'를 구분합니다. 경험에 휩쓸리지 않는 '관찰하는 나'의 자리를 만듭니다.",
  },
  {
    title: "가치(Values) — 방향을 그리기",
    description:
      "이상형·역할·관계에서 무엇이 나에게 '중요한가'를 색과 상징으로 꺼냅니다. 가치는 목표가 아니라 방향임을 확인합니다.",
  },
  {
    title: "전념 행동 — 작은 한 걸음",
    description:
      "작품에서 뽑아낸 단서를 일주일 단위의 실천으로 번역합니다. 완벽이 아닌 지속 가능한 한 걸음이 기준입니다.",
  },
];

const evidenceNotes = [
  {
    source: "American Art Therapy Association (AATA)",
    note:
      "미국미술치료협회는 미술치료를 '면허 있는 전문가가 치료 관계 안에서 창조적 과정을 활용하는 통합적 심리치료'로 정의합니다. 재료의 특성과 치료 관계를 함께 고려하는 접근이 핵심입니다.",
  },
  {
    source: "한국미술치료학회 (Korean Art Therapy Association)",
    note:
      "국내 학회는 미술치료가 언어 이전의 감정과 신체 경험을 다룰 수 있는 보조적 심리치료임을 명시하며, 임상 현장에서 지속적으로 사례 연구가 축적되고 있습니다.",
  },
  {
    source: "Cathy Malchiodi, 『Handbook of Art Therapy』",
    note:
      "Malchiodi는 감각 기반 미술치료와 트라우마-인지 통합 접근을 오래 정리해 온 연구자입니다. 매체의 유동성·저항성·촉각성이 정서 조절에 미치는 영향을 기술해 왔습니다.",
  },
  {
    source: "Steven C. Hayes 외, ACT 메타분석 (2006, 2013)",
    note:
      "ACT의 심리적 유연성 모델은 불안·우울·만성통증 등 다양한 영역에서 근거가 축적되고 있습니다. 미술 매체와 결합했을 때의 임상 효과 연구는 진행 단계로, 본 센터는 이를 신중히 인용합니다.",
  },
];

export default function IndividualPage() {
  return (
    <>
      <JsonLd data={individualServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "개인 미술치료", href: "/services/individual" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Individual Art Therapy
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                성인 1:1 개인 미술치료 — ACT 6프로세스 기반 8주 구조
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                혼자 정리되지 않는 마음을, 한 사람의 속도로 함께 풀어 봅니다.
                불안, 번아웃, 산후 우울, 트라우마, 정체성 전환기 등 언어로
                꺼내기 어려운 경험을 미술 매체와 ACT 수용전념치료(Acceptance
                and Commitment Therapy)로 탐색합니다. 결과물의 완성도가 아니라
                과정에서 떠오르는 감각과 이야기를 중심으로 작업합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분 세션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">주 1회 × 8주 권장</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">1:1 맞춤 설계</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">사전 예약제</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">비용 페이지</Link>에서 확인하실 수 있습니다.
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
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80"
                alt="1:1 개인 미술치료 작업대 위의 수채 팔레트와 붓"
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
              진단명이 꼭 있어야 하는 것은 아닙니다. '말로는 설명이 잘 안 되는데,
              마음 한 켠이 계속 무겁다'는 감각이 이어진다면 첫 상담에서 함께
              이야기 나눠 볼 수 있습니다.
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

      {/* Why 1:1 */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                1:1 세팅이 주는 것
              </h2>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                개인 상담은 <strong>치료 관계의 안전감</strong>을 빠르게 쌓을 수
                있다는 것이 가장 큰 자산입니다. 미국미술치료협회(AATA)와 국내
                한국미술치료학회 모두, 치료사와 내담자의 관계 질이 치료 결과에
                핵심적인 변인이라는 점을 일관되게 언급해 왔습니다.
              </p>
              <p className="mt-4 text-charcoal/80 leading-[var(--leading-normal)]">
                미술치료 연구자 Cathy Malchiodi는 저서 『Handbook of Art Therapy』에서,
                1:1 세팅이 <strong>매체 선택·자극량·속도</strong>를 내담자의
                신경계에 맞춰 정밀하게 조절할 수 있는 구조라고 기술합니다. 본
                센터 역시 트라우마 주제에서는 자극을 천천히 올리는 '타이트레이션'
                원칙을 지키며 세션을 설계합니다.
              </p>
            </div>
            <div>
              <h3 className="text-night font-semibold text-lg">집단과 다른 점</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    작업의 <strong>깊이와 속도를 개인화</strong>할 수 있습니다.
                    한 회기 안에서 이미지가 완성되지 않아도 괜찮습니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    <strong>개인사·관계사</strong>처럼 집단에서 꺼내기 어려운
                    주제를 다룰 때 적합합니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    침묵도 작업의 일부로 존중됩니다. '꼭 무언가를 말해야 한다'는
                    부담이 낮습니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    결과물은 세션 간에 치료사와 내담자가 함께 보관·비교하며
                    변화의 궤적을 시각적으로 추적합니다.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 8-Week structure */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              주 1회 × 8주 구조
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              아래는 가장 일반적인 기본 설계입니다. 실제로는 첫 두 회기의 상태
              평가 결과에 따라 회기 수와 주제를 조정합니다. 8주가 끝난 뒤
              필요에 따라 연장하거나 격주 유지 회기로 전환할 수 있습니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyStructure.map((w) => (
              <div
                key={w.range}
                className="bg-white rounded-xl p-6 lg:p-8"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">{w.range}</p>
                <h3 className="mt-2 text-night font-semibold text-lg">{w.phase}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Media palette */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              매체(미술 재료)의 심리적 성격
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              그림을 '잘 그리는 것'은 기준이 아닙니다. 매체마다 저항과 유동성이
              다르고, 그 성질 자체가 치료적 개입의 일부가 됩니다. 치료사와 함께
              그날 적합한 재료를 골라 작업합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaPalette.map((m) => (
              <div
                key={m.medium}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{m.medium}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{m.quality}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ACT integration */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              ACT 6프로세스는 1:1 세션에서 어떻게 쓰이나요
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              ACT(수용전념치료)는 Steven C. Hayes 등이 정립한 3세대 인지행동치료
              흐름으로, 심리적 유연성(psychological flexibility)을 6가지
              프로세스로 설명합니다. 본 센터는 각 프로세스를 미술 매체와
              연결해 '말로만 하는 상담'이 아닌 <strong>몸과 이미지가 함께
              참여하는 과정</strong>으로 진행합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {actIntegration.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{step.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-charcoal/60 text-xs leading-relaxed max-w-3xl">
            ※ 본 센터는 미술치료와 ACT의 결합이 만능 해법임을 주장하지 않습니다.
            연구 근거는 각 영역에서 꾸준히 축적되는 단계이며, 개인의 상태와
            목표에 따라 다른 접근이 더 적합할 수 있습니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* Evidence notes */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              우리가 참고하는 곳
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              본 센터의 설계는 다음 기관·연구자의 임상 표준과 개념에 기반합니다.
              인용은 효과를 단정하기 위한 것이 아니라, 우리가 어떤 언어로
              생각하고 있는지를 공개하기 위한 것입니다.
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

      {/* Cross-links */}
      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-center">
            비슷한 주제의 다른 프로그램
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/group"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Group</p>
              <h3 className="mt-2 text-night font-semibold">ACT 그룹 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                4~6인 소그룹에서 함께 작업하며 '나만 그런 게 아니구나'를 경험하고 싶은 분께.
              </p>
            </Link>
            <Link
              href="/services/online"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Online</p>
              <h3 className="mt-2 text-night font-semibold">온라인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                서울 외 지역·해외 거주·이동이 어려운 분을 위한 Zoom + 아트키트 세션.
              </p>
            </Link>
            <Link
              href="/services/emotional"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">정서·트라우마 중심</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                상실·트라우마·번아웃 주제에 특화된 장기 트랙. 개인 세션과 연계해 진행 가능합니다.
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
              첫 무료 상담부터 천천히
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              첫 상담은 문의·안내 목적으로 무료로 진행합니다. 지금의 상태와
              기대하는 방향을 편안하게 나눠 주시면, 개인 맞춤 프로그램을 함께
              설계해 드립니다.
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
