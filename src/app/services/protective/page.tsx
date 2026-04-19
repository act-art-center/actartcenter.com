import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "보호·의료 환경 미술심리치료 — 청소년 보호병동·정신과·난임 치료 파트너십",
  description:
    "장기 치료·의료 병행 환경에서의 미술심리치료입니다. 청소년 보호병동, 정신과 입원 환경, 난임·생식의학 치료 과정 등 의료 현장 안에서 미술 매체로 정서적 고립과 심리적 압박을 안전하게 다룹니다. 기관 협력·방문 세션·의료진 커뮤니케이션 절차를 명확히 공개합니다.",
  keywords: [
    "의료 환경 미술심리치료",
    "medical art therapy",
    "청소년 보호병동 미술치료",
    "정신과 입원 미술치료",
    "난임 미술치료",
    "생식의학 심리지원",
    "기관 미술치료 협력",
    "병원 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/protective` },
  openGraph: {
    type: "website",
    title: "보호·의료 환경 미술심리치료 — ACT ART CENTER",
    description:
      "청소년 보호병동·정신과 입원·난임 치료 과정을 지원하는 의료 환경 특화 미술심리치료. 기관 파트너십과 의료진 연계 절차를 공개합니다.",
    url: `${SITE_URL}/services/protective`,
    images: [
      {
        url: "/og/services-protective.png",
        width: 1200,
        height: 630,
        alt: "보호·의료 환경 미술심리치료 — 병원 환경의 미술 작업",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "보호·의료 환경 미술심리치료",
    description:
      "청소년 보호병동·정신과 입원·난임 치료 맥락의 의료 미술심리치료. 기관 협력·비밀유지 원칙 공개.",
    images: ["/og/services-protective.png"],
  },
};

const protectiveServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "보호·의료 환경 미술심리치료", item: `${SITE_URL}/services/protective` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/protective#service`,
      name: "보호·의료 환경 미술심리치료",
      alternateName: ["Protective & Medical Environment Art Therapy", "Medical Art Therapy", "의료 미술심리치료"],
      additionalType: "https://schema.org/MedicalProcedure",
      description:
        "청소년 보호병동·정신과 입원 환경·난임 및 생식의학 치료 과정에서 진행되는 ACT 기반 미술심리치료. 미국미술치료협회(AATA)의 medical art therapy 실무 원칙과 Malchiodi 『Medical Art Therapy with Adults』(1999), 『Medical Art Therapy with Children』(1999) 흐름을 참고하여, 의료 현장의 제약과 병행 치료 맥락을 존중하며 세션을 설계합니다.",
      url: `${SITE_URL}/services/protective`,
      image: `${SITE_URL}/og/services-protective.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "대한민국" },
      audience: [
        { "@type": "PeopleAudience", audienceType: "청소년 보호병동 입원 환자" },
        { "@type": "PeopleAudience", audienceType: "정신과 장기 입원 환자" },
        { "@type": "PeopleAudience", audienceType: "난임·생식의학 치료 과정 당사자와 배우자" },
        { "@type": "Audience", audienceType: "의료기관·복지기관" },
      ],
      offers: {
        "@type": "Offer",
        description:
          "개별 방문 세션과 기관 파트너십 두 가지 형태로 운영합니다. 세션 단가와 협력 범위는 의료진·담당자와 사전 협의 후 확정합니다.",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/booking`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/protective#partnership`,
      name: "보호·의료 기관 미술치료 파트너십",
      serviceType: "Institutional Art Therapy Partnership",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: { "@type": "Audience", audienceType: "병원·보호시설·생식의학 클리닉" },
      areaServed: { "@type": "Country", name: "대한민국" },
    },
  ],
};

const fitAudience = [
  {
    title: "청소년 보호병동 입원 중",
    description:
      "단기·장기 입원 환경에서 정서 조절이 필요하고, 언어 기반 상담만으로는 접근이 어려운 청소년. 집단 역동과 발달 단계 모두를 고려한 미술 작업이 필요한 경우.",
  },
  {
    title: "정신과 장기 입원 환자",
    description:
      "우울·조현·양극성·섭식 등 장기 치료 과정에서 정서적 고립과 자기 표현의 위축이 누적된 분. 회복기 자극량 조절과 자기감 재구성 작업이 요청되는 맥락.",
  },
  {
    title: "난임·생식의학 치료 중인 분",
    description:
      "IVF·호르몬 주기·반복 실패 경험으로 인한 만성 스트레스, 상실 반복, 파트너·가족 관계 긴장을 말 이전의 이미지로 먼저 풀어 보는 시간이 필요한 분.",
  },
  {
    title: "난임 치료를 지원하는 배우자",
    description:
      "당사자의 치료 주기 동안 '도와야 한다'는 압력 아래 자신의 감정을 표현하기 어려웠던 배우자. 공동 세션 또는 개별 세션 모두 설계 가능합니다.",
  },
  {
    title: "의료진이 연계 의뢰한 내담자",
    description:
      "담당 정신건강의학과·산부인과·소아청소년과 의료진의 의뢰서를 기반으로 구조화된 심리지원이 필요한 분. 치료 계획 범위 안에서 보조적 역할을 수행합니다.",
  },
  {
    title: "의료 현장 동반가족·보호자",
    description:
      "장기 입원 자녀를 돌보는 보호자, 반복되는 처치 과정에서 지친 가족 구성원. 간병·돌봄 스트레스를 시각적으로 풀어 보는 짧은 단회·단기 세션을 권장합니다.",
  },
];

const medicalEvidence = [
  {
    source: "American Art Therapy Association (AATA) — Medical Art Therapy 실무",
    note:
      "AATA는 'medical art therapy'를 만성질환·입원·수술 전후·생식의학 등 의료 환경에서 정서적 적응을 돕는 통합 심리치료로 규정하며, 의료진과의 협업·비밀유지·의료기록 연동 범위에 대한 실무 기준을 지속적으로 갱신해 왔습니다.",
  },
  {
    source: "Cathy A. Malchiodi, 『Medical Art Therapy with Adults』(1999) · 『Medical Art Therapy with Children』(1999)",
    note:
      "Malchiodi가 편저한 두 권의 단행본(Jessica Kingsley Publishers)은 암·만성통증·소아 입원·수술 전후 등 의료 환경에서의 미술치료 원칙을 정리한 국제 참고 자료로 꾸준히 인용됩니다. 매체 선택·자극량 조절·의료진 커뮤니케이션의 기본 원칙을 본 센터도 준용합니다.",
  },
  {
    source: "Council, J. R., & Hawkins, M. 등 — 소아·청소년 의료 미술치료 리뷰",
    note:
      "Journal of the American Art Therapy Association, Art Therapy(JAATA) 등 학술지에 누적된 소아·청소년 의료 미술치료 사례 연구는 불안·통증 지각·치료 순응도 측면에서 보완적 접근으로서의 가능성을 보고해 왔습니다. 본 센터는 '효과 단정'이 아닌 '임상 보조'로 인용합니다.",
  },
  {
    source: "Helen Greenslade Hartrick — 난임·생식의학 미술치료 저술",
    note:
      "난임·IVF 과정의 반복되는 상실과 정체성 혼란을 미술 매체로 다룬 사례 기술은 국제적으로 축적되어 왔습니다. 본 센터는 한국 난임 클리닉 맥락에 맞추어 세션 길이·개입 강도·파트너 참여 범위를 조정합니다.",
  },
  {
    source: "한국미술치료학회 — 의료 환경 사례 연구",
    note:
      "국내 학회지에는 정신과 입원·소아 혈액종양·호스피스·난임 등 의료 환경 미술치료 사례 연구가 꾸준히 축적되고 있습니다. 본 센터는 국내 임상 맥락과 제도적 제약을 반영해 절차를 국지화합니다.",
  },
];

const partnershipModels = [
  {
    number: "01",
    title: "방문 세션 (Onsite)",
    description:
      "치료사가 보호병동·입원 병동·생식의학 클리닉 공간에 정기 방문해 세션을 진행합니다. 병동 구조·비상 대응 프로토콜을 사전에 공유받고, 의료진 동선을 방해하지 않는 시간대로 일정을 조율합니다.",
  },
  {
    number: "02",
    title: "협력 의뢰 (Referral)",
    description:
      "의료기관이 담당 환자의 심리 보조 자원으로 본 센터를 추천·연계하는 구조입니다. 내담자는 외래 형태로 센터를 방문하며, 동의 범위 안에서 세션 경과를 의료진과 공유합니다.",
  },
  {
    number: "03",
    title: "공동 프로그램 (Co-designed)",
    description:
      "기관 담당자와 본 센터가 3~12회기 단위 프로그램을 공동 설계합니다. 주제·매체 구성·평가 지표를 초기 킥오프에서 합의하고, 중간 리뷰 1회와 종결 리뷰 1회를 정기화합니다.",
  },
  {
    number: "04",
    title: "슈퍼비전·자문 (Consultation)",
    description:
      "병동 상주 심리 인력이 있는 기관을 위해 사례 슈퍼비전·매체 교육·윤리 자문을 단독 제공합니다. 직접 세션 없이 기관 역량 강화를 목적으로 하는 구조입니다.",
  },
];

const confidentiality = [
  {
    title: "의료기록 연동 범위",
    description:
      "본 센터는 의료기관이 아니며 의료기록(EMR)을 직접 생성하지 않습니다. 의료진에게 공유되는 정보는 '치료 참여 여부·위기 신호·합의된 주제 요약' 3가지로 한정하며, 내담자 동의 서면을 첫 회기에 확보합니다.",
  },
  {
    title: "의료진 커뮤니케이션 원칙",
    description:
      "담당 정신건강의학과 의사·산부인과 의사·간호사와는 사전에 합의된 채널(이메일·공용 기록 메모)로만 소통합니다. 세션 중의 개인 서사·작품 원본은 의료팀과 공유되지 않으며, 위기 상황에서도 최소 공개 원칙을 유지합니다.",
  },
  {
    title: "보안·비밀유지 강화",
    description:
      "병원 환경 특성상 보호자·간병인·다른 환자와 공간을 공유할 수 있어, 세션 중 이미지·발화가 외부로 노출되지 않도록 공간 배치·정리 절차·이동 동선을 별도로 설계합니다. 작품 원본은 내담자가 지정한 방식으로 보관·파기됩니다.",
  },
  {
    title: "법적·윤리적 보고 의무",
    description:
      "자·타해 임박 위험, 아동·청소년 학대 정황 등 관계 법령상 보고 의무가 발생하는 상황에서는 내담자와 가족에게 사전 고지한 뒤 최소 범위의 정보만 공유합니다. 이 원칙은 첫 회기 비밀유지 계약서에 명시됩니다.",
  },
];

const adolescentProtocol = [
  {
    title: "발달 단계 평가",
    description:
      "청소년기의 자아 유동성, 또래 역동, 신체화 경향을 초기 2회기에 걸쳐 평가합니다. 질문지에만 의존하지 않고, 자유 드로잉·콜라주로 상태를 간접적으로 읽습니다.",
  },
  {
    title: "집단 역동 관리",
    description:
      "보호병동 집단 세션은 4~6명 규모, 공동 작업과 개별 작업을 병행합니다. 집단 내 서열·폭력적 상호작용을 예방하기 위한 규칙을 첫 회기에 함께 정합니다.",
  },
  {
    title: "위기 대응 프로토콜",
    description:
      "자해 도구가 될 수 있는 매체(예리한 커터·유리병 등)는 사전 점검으로 배제합니다. 자극이 올라갈 때는 작업 중단·감각 그라운딩·병동 의료진 호출 순서를 세션 시작 전 공유합니다.",
  },
  {
    title: "종결과 이행",
    description:
      "입원 기간 종료 후에도 심리 자원이 끊기지 않도록, 퇴원 전 외래 심리상담·지역 사회 기관·센터 외래 세션으로의 이행 플랜을 기관·보호자와 함께 작성합니다.",
  },
];

const infertilityFocus = [
  {
    title: "주기 기반 세션 리듬",
    description:
      "IVF 주기·배아 이식·난임 시술 일정에 맞춰 세션 밀도를 조절합니다. 시술 전후는 가벼운 그라운딩·이완 중심, 결과 대기·상실 후에는 애도 작업 중심으로 구성합니다.",
  },
  {
    title: "반복 상실과 애도 작업",
    description:
      "반복되는 주기 실패, 유산, 생화학적 임신 종료 등 언어화되지 않는 상실을 이미지·상징으로 먼저 기록합니다. 타이트레이션 원칙을 지키며 자극량을 천천히 올립니다.",
  },
  {
    title: "파트너·가족 역동",
    description:
      "당사자-배우자 공동 세션 또는 개별 세션을 선택적으로 운영합니다. 침묵·원망·무력감 등 관계 안에서 꺼내기 어려운 감정을 비언어적 작업으로 먼저 풀어 봅니다.",
  },
  {
    title: "클리닉 의료진 협업",
    description:
      "동의하신 범위 안에서 생식의학 클리닉·정신건강의학과와 진행 경과를 공유합니다. 약물·호르몬 영향으로 인한 정서 변동은 의료진의 평가와 분리하지 않고 함께 관찰합니다.",
  },
];

const faqs = [
  {
    q: "기관에서 의뢰하려면 어떤 절차가 필요한가요?",
    a: "담당자·의료진의 간단한 문의로 시작합니다. 이후 기관 방문 또는 화상 킥오프에서 대상 집단·회기 수·목표·평가 방식을 협의하고, 기관명·대상 정보를 포함한 약정서(MOU 또는 서비스 계약서)를 체결합니다. 세션 시작 전 내담자·보호자에게 참여 동의와 비밀유지 범위 고지가 선행됩니다.",
  },
  {
    q: "가족이 세션에 함께 들어갈 수 있나요?",
    a: "사전에 합의된 경우에만 가능합니다. 청소년 보호병동에서는 집단 역동 보호를 위해 가족 동석은 원칙적으로 제한되며, 별도 가족 세션을 분리 운영합니다. 난임 치료 맥락에서는 파트너·배우자 동석이 자주 권장되며, 회기 목적에 맞추어 개별 세션과 공동 세션을 번갈아 진행합니다.",
  },
  {
    q: "기관 소속이 아닌 개인도 이 트랙을 신청할 수 있나요?",
    a: "가능합니다. 정신과 외래 환자·난임 치료 중인 분·장기 입원 이후 회복기에 계신 분은 개별 외래 형태로 센터를 방문하실 수 있습니다. 담당 의료진의 의뢰서가 있으면 초기 평가가 빨라지지만, 의뢰서가 없는 경우에도 첫 상담에서 기존 치료 경과를 함께 정리합니다.",
  },
  {
    q: "의료진에게 공유되는 정보는 어디까지인가요?",
    a: "치료 참여 여부, 위기 신호 유무, 사전에 합의된 주제 요약이 기본값입니다. 작품 원본·개인 서사·세션 중 발언은 공유 대상이 아닙니다. 공유 범위는 첫 회기 동의서에 체크박스 형태로 명시되며, 언제든 철회하실 수 있습니다.",
  },
];

export default function ProtectivePage() {
  return (
    <>
      <JsonLd data={protectiveServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "보호·의료 환경 미술심리치료", href: "/services/protective" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Protective & Medical Environment
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                보호·의료 환경 미술심리치료 — 의료 현장에 들어가는 미술 작업
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                청소년 보호병동, 정신과 장기 입원 환경, 난임·생식의학 치료
                과정처럼 의료적 맥락이 우선하는 공간에서 진행되는
                미술심리치료입니다. 미국미술치료협회(AATA)가 정의하는
                <strong> medical art therapy</strong>의 실무 원칙과 Cathy
                Malchiodi의 『Medical Art Therapy with Adults』(1999),
                『Medical Art Therapy with Children』(1999) 흐름을 참조하여,
                의료진의 치료 계획을 존중하는 보조적 심리지원으로 설계되어
                있습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">방문 · 외래 병행</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">의료진 협업 구조</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">기관 파트너십 4 모델</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">비밀유지·보고 의무 명시</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                기관 문의는{" "}
                <Link href="/contact" className="text-primary-500 underline underline-offset-2">
                  연락처 페이지
                </Link>{" "}
                또는 <span className="text-primary-500">actartkorea@gmail.com</span> 으로
                보내 주세요. 개인 외래 예약은 아래 버튼에서 진행하실 수 있습니다.
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
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                alt="병원 환경에서 진행되는 미술 작업 — 종이와 수채 도구가 놓인 의료 공간"
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
              이런 분께 제공합니다
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              의료적 치료를 받고 있거나, 의료 환경 안에서 심리적 보조가 필요한
              분들을 위한 트랙입니다. 본 센터는 의료기관이 아니므로 진단·처방을
              수행하지 않으며, 의료진과의 협업 범위 안에서 보조적 심리지원 역할을
              맡습니다.
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

      {/* Medical art therapy evidence */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                의료 현장에서의 미술 작업 — 국제 임상 근거
              </h2>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                의료 환경에서의 미술치료는 오랫동안 별도의 하위 영역으로
                정리되어 왔습니다. 미국미술치료협회(AATA)는 이를{" "}
                <strong>medical art therapy</strong>로 명명하며, 의료 처치
                전후의 불안 조절, 만성질환 적응, 신체상(body image) 재구성 등
                의료적 맥락 특유의 심리 과제를 다루는 접근으로 규정합니다.
              </p>
              <p className="mt-4 text-charcoal/80 leading-[var(--leading-normal)]">
                Cathy Malchiodi가 편저한 『Medical Art Therapy with Adults』
                (Jessica Kingsley, 1999)와 『Medical Art Therapy with Children』
                (1999)은 이 영역의 국제 참조 자료로 오래 인용되어 왔고, 이후
                Art Therapy: Journal of the American Art Therapy Association에
                사례 연구가 지속적으로 축적되어 왔습니다. 본 센터는 이들 흐름을
                '효과 단정'이 아니라 '설계 원칙'으로 참조합니다.
              </p>
            </div>
            <div>
              <h3 className="text-night font-semibold text-lg">
                의료 맥락에서 달라지는 세 가지
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    <strong>치료 계획 안에 편입됩니다.</strong> 독립적 상담이
                    아니라 의료진의 치료 플랜을 보조하는 위치에 놓입니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    <strong>매체 선택이 달라집니다.</strong> 안전·위생·자극량
                    기준이 우선되며, 고자극·고냄새·예리한 도구는 배제합니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    <strong>정보 공유 범위가 좁혀집니다.</strong> 의료진과의
                    커뮤니케이션은 사전 합의된 필드만, 작품 원본은 공유 대상이
                    아닙니다.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>
                    <strong>종결 후 이행</strong>을 반드시 설계합니다. 입원
                    종료·주기 종료 후 심리 자원이 끊기지 않도록 외래·지역
                    자원으로의 이행 플랜을 함께 작성합니다.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Partnership models */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              기관·병원 파트너십 운영 방식
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              기관 담당자가 가장 먼저 궁금해 하시는 것이 '어떤 방식으로 들어갈 수
              있는가'입니다. 본 센터는 네 가지 협력 모델을 운영하며, 기관의 인력
              구성·공간 제약·치료 계획 범위에 맞추어 조합합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipModels.map((p) => (
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

      {/* Confidentiality */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              보안·비밀유지 원칙
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              의료 환경은 일반 상담실보다 정보 흐름이 복잡합니다. 본 센터는
              한국미술치료학회 윤리 강령과 AATA 비밀유지 기준을 기반으로, 의료
              환경 특수성을 반영한 네 가지 원칙을 공개적으로 운영합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {confidentiality.map((c) => (
              <div
                key={c.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{c.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Adolescent / Infertility split */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                청소년 보호 환경 — 발달·집단·위기 3축
              </h2>
              <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
                청소년 보호병동은 발달 단계·또래 역동·위기 대응이 한 회기 안에서
                동시에 교차하는 공간입니다. 본 센터는 다음 네 가지 프로토콜을
                매 회기 점검 목록으로 유지합니다.
              </p>
              <div className="mt-6 space-y-4">
                {adolescentProtocol.map((a) => (
                  <div
                    key={a.title}
                    className="bg-white rounded-xl p-5"
                    style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                  >
                    <h3 className="text-night font-semibold text-sm">{a.title}</h3>
                    <p className="mt-1 text-charcoal/70 text-sm leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                난임·생식의학 맥락 — 주기와 상실의 리듬
              </h2>
              <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
                난임 치료 과정은 '주기'라는 고유한 시간 구조를 가집니다. 이
                리듬을 무시한 세션 설계는 오히려 자극량을 높일 수 있기 때문에,
                본 센터는 클리닉 일정과 세션 밀도를 함께 움직이는 구조로
                설계합니다. Helen Greenslade Hartrick 등 국제 저술이 기록해 온
                반복 상실·파트너 역동 주제를 한국 난임 클리닉 현장 맥락으로
                번역하는 작업입니다.
              </p>
              <div className="mt-6 space-y-4">
                {infertilityFocus.map((i) => (
                  <div
                    key={i.title}
                    className="bg-white rounded-xl p-5"
                    style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                  >
                    <h3 className="text-night font-semibold text-sm">{i.title}</h3>
                    <p className="mt-1 text-charcoal/70 text-sm leading-relaxed">{i.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Evidence */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              의료 맥락에서의 미술치료
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              'medical art therapy'는 1990년대 후반 Cathy Malchiodi의 두 편의 단행본을 기점으로
              학문적 언어를 갖추기 시작했고, 이후 AATA의 실무 기준과 JAATA 게재 사례 연구로
              축적되어 왔습니다. 본 센터의 파트너십 모델은 이 국제·국내 흐름 위에서 설계됐습니다.
            </p>
          </div>
          <div className="mt-10 max-w-3xl border-l-2 border-primary-500/20 pl-6 space-y-8">
            {medicalEvidence.map((e, idx) => (
              <div key={e.source} className="relative">
                <span
                  className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-primary-500"
                  aria-hidden="true"
                />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary-500">
                  Source {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-night font-semibold text-sm">{e.source}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{e.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-charcoal/60 text-xs leading-relaxed max-w-3xl">
            ※ 의료 환경 미술치료의 효과는 영역별·주제별로 근거 축적 수준이
            상이합니다. 본 센터는 임상 판단의 주체가 의료진임을 분명히 하며,
            미술심리치료는 의료적 처치를 대체하지 않고 보완하는 위치에 놓입니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              기관 담당자·보호자가 자주 주시는 질문
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              가장 자주 듣는 질문에 먼저 답을 드립니다. 구체적인 협력 형태는 첫
              킥오프에서 기관 현황을 듣고 함께 설계하는 것이 원칙입니다.
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
              href="/services/emotional"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">정서·트라우마 중심 미술심리치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                의료 현장 바깥에서 트라우마·상실·번아웃 경험을 다루는 장기 트랙.
                퇴원 후 이행 자원으로도 자주 연결됩니다.
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
                슈퍼비전·사례 자문·연구 협력을 원하는 기관 심리 인력·임상가를
                위한 트랙입니다.
              </p>
            </Link>
            <Link
              href="/team"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Team</p>
              <h3 className="mt-2 text-night font-semibold">대표 프로필·연구 관심</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                차의과학대학교 미술치료학 박사과정 이수중인 원장의 임상 배경과
                연구 관심을 확인하실 수 있습니다.
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
              기관 문의와 개인 외래, 모두 환영합니다
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              기관 담당자는 기존 치료 계획·기대하시는 협력 범위를 이메일로
              보내 주시면 초안을 준비해 드립니다. 개인 내담자는 첫 상담에서
              현재 치료 경과를 함께 정리한 뒤 적합한 구조를 설계해 드립니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
              >
                첫 무료 상담 예약하기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                기관 파트너십 문의
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
