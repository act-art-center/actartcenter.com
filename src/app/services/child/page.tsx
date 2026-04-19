import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "아동·청소년 미술치료 — 발달 단계별 놀이 × ACT 통합",
  description:
    "만 5세부터 청소년까지. 놀이와 서사, 미술을 통합해 정서 조절·또래 관계·학교 적응·트라우마를 다루는 발달 단계별 미술심리상담. 매 세션 후 부모 상담 10분 포함, Judith Rubin·Cathy Malchiodi 등 아동 미술치료 표준 문헌에 기반한 설계.",
  keywords: [
    "아동 미술치료",
    "청소년 미술치료",
    "놀이치료 미술치료 통합",
    "부모 상담 미술치료",
    "아동 심리상담",
    "학교 적응 미술치료",
    "ADHD 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/child` },
  openGraph: {
    type: "website",
    title: "아동·청소년 미술치료 — 발달 단계별 놀이 × ACT 통합",
    description:
      "만 5세부터. 부모 상담 병행. 놀이·서사·미술을 엮어 정서 조절·또래 관계·학교 적응·트라우마에 접근합니다.",
    url: `${SITE_URL}/services/child`,
    images: [
      {
        url: "/og/services-child.png",
        width: 1200,
        height: 630,
        alt: "아동 미술치료 놀이 활동",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아동·청소년 미술치료 — 발달 단계별 놀이 × ACT 통합",
    description:
      "아이의 발달 단계에 맞는 매체와 거리감으로, 부모님과 함께 설계하는 미술심리상담입니다.",
    images: ["/og/services-child.png"],
  },
};

const childServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "아동·청소년 미술치료", item: `${SITE_URL}/services/child` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/child#service`,
      name: "아동·청소년 미술치료",
      alternateName: "Child & Adolescent Art Therapy",
      description:
        "만 5세~18세 대상 발달 단계별 미술심리상담. 놀이치료·서사치료·ACT 요소를 통합해 정서 조절, 또래 관계, 학교 적응, 트라우마 개입을 다룹니다. 매 세션 후 부모 상담 10분 포함, Judith Rubin·Cathy Malchiodi 등 아동 미술치료 표준 문헌에 기반한 설계.",
      url: `${SITE_URL}/services/child`,
      image: `${SITE_URL}/og/services-child.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: 5,
        suggestedMaxAge: 18,
      },
      offers: {
        "@type": "Offer",
        price: "80000",
        priceCurrency: "KRW",
        description: "50분(아동 40분+부모 10분) 기준 80,000~100,000원",
      },
    },
  ],
};

const developmentalStages = [
  {
    range: "만 5 – 7세 (유아기 후반)",
    approach: "놀이 중심 미술",
    description:
      "상징놀이와 미술이 긴밀하게 엮이는 시기입니다. 점토·핑거페인트·간단한 스토리 드로잉처럼 감각 기반 매체를 중심으로, 아이가 이야기를 만들어 낼 수 있는 안전한 장을 먼저 만듭니다.",
  },
  {
    range: "만 8 – 12세 (학령기)",
    approach: "서사와 미술의 통합",
    description:
      "또래·학교 관계가 자기개념에 강한 영향을 주는 시기입니다. 캐릭터 만들기, 만화 패널, 지도 그리기 같은 서사 기반 작업이 '말하기 어려운 경험'을 안전한 거리에서 다루게 해 줍니다.",
  },
  {
    range: "만 13 – 18세 (청소년기)",
    approach: "자기정체성 탐색과 ACT",
    description:
      "콜라주·사진 기반 작업·시각 저널 같은 매체가 적합해집니다. 가치 탐색과 인지적 탈융합 같은 ACT 개념이 10대의 언어로 자연스럽게 녹아들도록 프롬프트를 설계합니다.",
  },
];

const whereItHelps = [
  {
    title: "정서 조절의 어려움",
    description:
      "분노·불안·울음이 조절되지 않아 일상이 흔들리는 경우. 감정을 '좋다/나쁘다' 이분법이 아닌 색·형태·무게로 외현화하는 연습이 반복적으로 이루어집니다.",
  },
  {
    title: "또래 관계 · 따돌림 경험",
    description:
      "말로 다 꺼내지 못한 관계의 상처를 은유적으로 다룹니다. 세션 공간 안에서 '나와 친구'의 관계 지도를 그리며 대처 방식을 함께 설계합니다.",
  },
  {
    title: "학교 적응 · 등교 거부",
    description:
      "교실·급식실·통학 경로 같은 공간을 미술로 시각화해 감각적 자극을 분해합니다. 단계적 노출을 미술로 리허설할 수 있습니다.",
  },
  {
    title: "가족 관계 변화 (이사·이별·상실)",
    description:
      "부모의 이혼, 조부모 사별, 전학 등 큰 변화 앞에서 아이가 느끼는 모호한 감정을 안전하게 풀어냅니다. 서사를 다시 쓰는 작업이 회복을 돕습니다.",
  },
  {
    title: "정서 조절 곤란 · 충동성",
    description:
      "진단과 무관하게, 주의·충동 조절이 힘든 아이에게는 구조화된 매체(반복 패턴, 스탬프, 점토)가 신경계 안정에 도움이 됩니다.",
  },
  {
    title: "불안 · 트라우마 경험",
    description:
      "자극량을 천천히 조절하는 '타이트레이션' 원칙에 따라, 이야기보다 이미지가 먼저 꺼내지도록 진행합니다. 필요 시 의료·상담 네트워크와 협력합니다.",
  },
];

const sessionFlow = [
  {
    step: "1",
    title: "웜업 (5분)",
    description: "오늘의 마음 상태를 색·기호로 체크인. 이곳이 안전한 공간임을 몸으로 다시 등록합니다.",
  },
  {
    step: "2",
    title: "주제 작업 (25~30분)",
    description: "그날의 정서 상태와 발달 단계에 맞는 매체를 함께 고릅니다. 작업 중에는 평가·지시 대신 관찰과 동반이 이루어집니다.",
  },
  {
    step: "3",
    title: "나눔과 놀이 (5~10분)",
    description: "완성 여부와 무관하게, 아이가 원하는 만큼만 말로 옮깁니다. 자연스러운 놀이로 마무리합니다.",
  },
  {
    step: "4",
    title: "부모 상담 (10분)",
    description: "오늘 회기의 큰 흐름, 가정에서의 지원 방식, 다음 회기 전까지의 관찰 포인트를 나눕니다. 구체적인 작품 내용은 아이의 동의 범위 안에서 공유합니다.",
  },
];

const parentFaq = [
  {
    q: "효과가 언제쯤 보이나요?",
    a: "아동 미술치료는 보통 6~8회기부터 가정이나 학교에서 작은 변화(표현이 늘어남, 분노 조절이 조금 수월해짐 등)가 관찰되기 시작합니다. 단, 아이마다 속도가 매우 다릅니다. '더 이상 악화되지 않는 것'도 중요한 변화로 읽습니다.",
  },
  {
    q: "아이가 처음엔 싫다고 하면 어쩌죠?",
    a: "첫 회기에 바로 작업을 강요하지 않습니다. 세션 공간을 둘러보는 것부터 시작해, 아이의 속도에 맞추어 관계를 쌓습니다. 2~3회기 동안 '오기 싫지 않은 공간'으로 자리잡는 것이 목표입니다.",
  },
  {
    q: "미술을 못하는 아이도 괜찮나요?",
    a: "네. 미술치료는 기술 학습이 아닙니다. 선 하나, 색 한 덩어리, 찢은 종이도 모두 표현으로 존중됩니다. 오히려 '잘 그려야 한다'는 부담을 내려놓는 경험 자체가 작업의 일부가 됩니다.",
  },
  {
    q: "심리검사가 꼭 필요한가요?",
    a: "필수는 아닙니다. 필요 시 간단한 선별 질문지로 상태를 가늠하고, 심층 검사나 정신과 연계가 필요하다고 판단되면 솔직하게 안내드립니다. 본 센터는 의료기관이 아니므로 진단은 담당하지 않습니다.",
  },
  {
    q: "형제·남매도 함께 받을 수 있나요?",
    a: "개인 미술치료는 개별 아동에 최적화되어 있기 때문에 동시에 진행하지 않습니다. 형제 주제가 핵심일 경우, 부모 상담을 병행하며 순차적으로 구조를 설계합니다.",
  },
];

const confidentiality = [
  {
    title: "아이의 작업은 아이의 것",
    description:
      "세션에서 만든 작품은 원칙적으로 아이와 치료사의 것입니다. 부모와 공유하는 내용은 '전체 흐름과 주제 수준'이며, 구체적인 그림·문장을 아이의 동의 없이 전하지 않습니다.",
  },
  {
    title: "공유되어야 하는 예외",
    description:
      "자해·타해 위험, 학대 의심 등 안전에 관련된 정보는 비밀유지 원칙보다 우선합니다. 이 기준은 첫 부모 상담에서 명시적으로 공유합니다.",
  },
  {
    title: "부모 상담의 역할",
    description:
      "부모 상담은 '아이의 뒷이야기'를 듣는 시간이 아니라, 가정에서의 지원 방식을 함께 설계하는 시간입니다. 부모 자신의 정서 소진을 다룰 필요가 있는 경우 별도 세션을 권해 드립니다.",
  },
];

const evidenceNotes = [
  {
    source: "Judith Aron Rubin, 『Child Art Therapy』",
    note:
      "Rubin은 아동 미술치료의 고전 저자로, 아동의 발달 단계에 맞는 매체 선택·상징 놀이의 통합·부모 참여의 중요성을 정립했습니다. 본 센터의 구조화된 세션 설계는 Rubin의 임상 프레임에 기반합니다.",
  },
  {
    source: "Cathy Malchiodi, 『Handbook of Art Therapy』·트라우마 통합 미술치료",
    note:
      "Malchiodi는 아동 트라우마에 대한 감각 기반 접근과 '자극량의 단계적 조절'을 체계적으로 다룬 연구자입니다. 본 센터가 트라우마 주제에서 이미지 속도를 느리게 올리는 이유입니다.",
  },
  {
    source: "American Art Therapy Association (AATA) — Pediatric Practice",
    note:
      "미국미술치료협회는 아동·청소년 미술치료에서 부모·양육자와의 협력을 필수 구성 요소로 기술합니다. 본 센터의 매 세션 후 10분 부모 상담은 이 표준을 반영한 설계입니다.",
  },
  {
    source: "한국미술치료학회",
    note:
      "국내 학회는 아동·청소년 미술치료의 사례 연구를 꾸준히 축적해 왔으며, 정서·행동 주제에 대한 보조적 개입으로서 근거가 쌓이고 있음을 기술합니다. 본 센터는 진단 대체가 아닌 심리적 성장 동반 맥락에서 서비스를 제공합니다.",
  },
];

export default function ChildPage() {
  return (
    <>
      <JsonLd data={childServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "아동·청소년 미술치료", href: "/services/child" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Child & Adolescent
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                아동·청소년 미술치료 — 발달 단계별 놀이 × ACT 통합
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                아이는 어른과 같은 방식으로 감정을 말로 정리하기 어렵습니다.
                본 센터는 놀이·서사·미술을 한 회기 안에서 엮어, 아이의 발달
                단계와 기질에 맞는 '표현의 통로'를 함께 설계합니다. 매 세션
                후에는 10분 부모 상담을 통해 가정에서의 지원 방식까지 함께
                조율합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">아동 40분 + 부모 10분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">만 5~18세</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">부모 상담 병행</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">사전 예약제</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">비용 페이지</Link>를 참고해 주세요.
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
              >
                부모 상담 먼저 예약하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80"
                alt="아동 미술치료 작업대 위의 크레용과 종이"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Developmental stages */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              발달 단계별 접근
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              같은 '미술치료'라도 5살 아이와 16살 청소년에게 필요한 매체와
              언어는 다릅니다. Judith Rubin의 『Child Art Therapy』는 아동
              미술치료의 출발점을 '아이의 발달 단계에 맞는 재료와 거리감'으로
              정리한 바 있으며, 본 센터의 설계도 이를 따릅니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentalStages.map((s) => (
              <div
                key={s.range}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">{s.range}</p>
                <h3 className="mt-2 text-night font-semibold">{s.approach}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Where it helps */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              이런 주제에서 도움이 될 수 있습니다
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              진단명이 꼭 있어야 하는 것은 아닙니다. 아이가 최근 몇 달간 보여
              온 변화 중 몇 가지가 아래 리스트와 겹친다면, 첫 부모 상담에서
              함께 판단해 볼 수 있습니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whereItHelps.map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{item.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Session flow */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              한 세션의 흐름 — 50분
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              아이가 무엇을 경험하게 되는지 부모님이 미리 상상하실 수 있도록
              기본 흐름을 공개합니다. 상태에 따라 순서와 배분은 조정됩니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionFlow.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="mt-3 text-night font-semibold">{s.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Parent consultation */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                부모 상담은 왜 병행되어야 할까요
              </h2>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                아동 미술치료는 아이 한 명만의 작업이 아닙니다. 미국미술치료협회
                (AATA) 등 주요 기관이 공통적으로 강조하는 것은 <strong>부모·양육자와의
                협력이 아동 치료 결과의 핵심 변인</strong>이라는 점입니다.
              </p>
              <p className="mt-4 text-charcoal/80 leading-[var(--leading-normal)]">
                본 센터의 10분 부모 상담은 '가정에서의 일주일'과 '세션 공간에서의
                50분'을 잇는 다리입니다. 같은 주제를 양쪽에서 조율할 수 있을
                때, 변화의 속도가 달라집니다. 첫 상담은 아이 없이 부모님만
                방문하셔서 아이의 상태를 충분히 나눠 주시면 됩니다.
              </p>
            </div>
            <div>
              <h3 className="text-night font-semibold text-lg">
                첫 부모 상담에서 나누는 것들
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>최근 6~12개월의 주요 변화와 촉발 사건</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>가정·학교·또래 관계의 현재 구조</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>부모님이 기대하는 변화와 걱정되는 지점</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>비밀유지·안전 기준에 대한 합의</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                  <span>회기 수·주기·재평가 시점의 초안 설계</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Confidentiality */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              비밀유지와 공유의 범위
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              아이의 자발적 표현이 유지되려면, 아이 스스로 '여기선 안전하다'고
              느껴야 합니다. 본 센터는 다음 세 가지 원칙을 첫 회기에 아이·부모와
              모두 명시적으로 공유합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {confidentiality.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{c.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Parent FAQ */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              부모님이 자주 주시는 질문
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              상담 문의 중 가장 자주 듣는 질문들에 먼저 답을 드립니다. 아이마다
              답의 결이 달라지므로, 구체적인 상황은 첫 부모 상담에서 자세히
              살펴드립니다.
            </p>
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            {parentFaq.map((f) => (
              <div
                key={f.q}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{f.q}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Evidence */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              우리가 참고하는 곳
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              본 프로그램 설계는 다음 기관·저자의 아동·청소년 미술치료 표준에
              기반합니다. 효과를 단정하기 위한 인용이 아니라, 설계의 투명성을
              공개하기 위한 기록입니다.
            </p>
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            {evidenceNotes.map((e) => (
              <div
                key={e.source}
                className="bg-white rounded-xl p-6"
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
      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-center">
            부모님께 권해 드리는 다른 프로그램
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/individual"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">For Parents</p>
              <h3 className="mt-2 text-night font-semibold">성인 1:1 개인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                아이를 돌보는 일이 부모님의 정서 소진으로 이어진다면, 부모님 자신의 회복을 위한 1:1 세션을 권해 드립니다.
              </p>
            </Link>
            <Link
              href="/services/group"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">For Parents</p>
              <h3 className="mt-2 text-night font-semibold">부모 자기돌봄 그룹</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                같은 결의 부모님들과 함께 '부모 역할 안에서의 나'를 돌보는 소그룹 트랙입니다.
              </p>
            </Link>
            <Link
              href="/services/online"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Accessibility</p>
              <h3 className="mt-2 text-night font-semibold">온라인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                지역·이동 여건으로 대면이 어려운 경우, 가정 내에서 안정적으로 진행되는 온라인 세션을 권해 드립니다.
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
              부모 상담부터 시작하세요
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              첫 부모 상담은 무료로 진행됩니다. 아이의 상태와 기대하시는 변화
              방향을 나눠 주시면, 발달 단계와 주제에 맞는 프로그램을 함께
              설계해 드립니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              첫 부모 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
