import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 그룹 미술치료 — 4~6인 소그룹 8주 마음유연성 프로그램",
  description:
    "같은 고민을 가진 4~6명이 함께하는 소그룹 미술치료. Yalom의 치료적 요인과 ACT 6프로세스를 미술 작업으로 풀어내는 주 1회 × 8주 구조. 번아웃·관계 회복·부모 자기돌봄 등 주제별 소그룹으로 진행합니다.",
  keywords: [
    "그룹 미술치료",
    "집단 미술치료",
    "소그룹 미술치료",
    "마음유연성 8주 프로그램",
    "번아웃 그룹 미술치료",
    "Yalom 치료적 요인",
    "ACT 그룹 프로그램",
  ],
  alternates: { canonical: `${SITE_URL}/services/group` },
  openGraph: {
    type: "website",
    title: "ACT 그룹 미술치료 — 4~6인 소그룹 프로그램",
    description:
      "Yalom 치료적 요인 × ACT 6프로세스. 번아웃·관계 회복·부모 자기돌봄 주제별 8주 구조.",
    url: `${SITE_URL}/services/group`,
    images: [
      {
        url: "/og/services-group.png",
        width: 1200,
        height: 630,
        alt: "ACT 그룹 미술치료 원형 테이블",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 그룹 미술치료 — 4~6인 소그룹 프로그램",
    description:
      "혼자가 아니라는 감각을 회복하는 8주. 혼자 감당해 온 주제를 같은 결의 사람들과 미술로 풀어냅니다.",
    images: ["/og/services-group.png"],
  },
};

const groupServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "그룹 프로그램", item: `${SITE_URL}/services/group` },
      ],
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}/services/group#course-8weeks`,
      name: "마음유연성 8주 ACT 그룹 미술치료 프로그램",
      description:
        "4~6인 소그룹에서 ACT 6프로세스와 Yalom 치료적 요인을 미술 매체로 통합해 다루는 주 1회 × 90분 × 8회기 구조의 그룹 프로그램. 번아웃, 관계 회복, 부모 자기돌봄 등 주제별 트랙으로 운영합니다.",
      provider: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/services/group`,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "In-person",
        courseWorkload: "PT12H",
        location: { "@id": `${SITE_URL}/#localbusiness` },
      },
      offers: {
        "@type": "Offer",
        price: "560000",
        priceCurrency: "KRW",
        description: "8회기 패키지 560,000~800,000원",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/group#service-burnout`,
      name: "번아웃 탈출 워크숍",
      description:
        "직장인을 위한 4주 그룹 + 개인 1회 ACT 미술치료 워크숍. 자기 소진의 패턴을 시각화하고 가치·쉼의 리듬을 회복합니다.",
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "250000",
        priceCurrency: "KRW",
      },
    },
  ],
};

const yalomFactors = [
  {
    title: "보편성 (Universality)",
    description:
      "'나만 이런 게 아니구나'라는 경험. 혼자 붙들고 있던 주제를 같은 결의 사람들이 꺼낼 때 가장 먼저 풀리는 매듭입니다.",
  },
  {
    title: "대인관계 학습 (Interpersonal Learning)",
    description:
      "그룹은 축소된 관계의 장입니다. 평소의 관계 패턴이 안전한 조건에서 드러나고, 즉시 관찰하고 조정해 볼 수 있습니다.",
  },
  {
    title: "응집력 (Cohesiveness)",
    description:
      "매주 같은 구성원과 작업하며 쌓이는 '우리'의 감각. 응집력은 그룹 치료에서 개인치료의 치료 관계에 해당하는 핵심 변인입니다.",
  },
  {
    title: "희망의 주입 (Instillation of Hope)",
    description:
      "먼저 걸어간 사람의 변화를 눈으로 확인할 때, '나도 움직일 수 있겠다'는 감각이 옆에서 전염됩니다.",
  },
  {
    title: "정서적 경험의 표현 (Catharsis)",
    description:
      "참고 눌러 왔던 감정을 안전한 구조 안에서 꺼내는 경험. 미술 매체는 말로 다 나오지 않는 감정의 통로가 됩니다.",
  },
  {
    title: "이타성 (Altruism)",
    description:
      "다른 참여자에게 내 경험이 쓸모가 될 때 오는 회복감. '받기만 해야 하는 사람'이 아니라는 감각이 자존감을 조용히 재건합니다.",
  },
];

const whySmallGroup = [
  {
    title: "왜 4~6명인가요",
    description:
      "너무 작으면 관계 역동이 폐쇄되고, 너무 크면 안전감과 발언 기회가 줄어듭니다. 국내외 소그룹 심리치료 문헌에서 정서·자기 탐색 주제에 자주 권장되는 규모입니다.",
  },
  {
    title: "왜 90분인가요",
    description:
      "체크인(15분) → 미술 작업(40~45분) → 나눔·리뷰(25~30분) → 마무리 의식(5~10분) 구조가 자연스럽게 들어가는 최소 시간입니다.",
  },
  {
    title: "왜 8주 구조인가요",
    description:
      "신뢰가 쌓이고 변화가 시각화되기까지 필요한 최소 호흡입니다. 8주는 단기지만 완결된 경험을 설계할 수 있는 임상적 공통 단위입니다.",
  },
];

const uniqueMechanics = [
  {
    title: "공동 작업 (Shared Canvas)",
    description:
      "한 장의 종이에 각자의 레이어를 더해 갑니다. 타인의 선 위에 내 색을 올리는 경험은 '혼자 완결해야 한다'는 기본값을 완만하게 풀어 줍니다.",
  },
  {
    title: "거울 작용 (Mirroring)",
    description:
      "다른 참여자의 작업에서 나의 주제를 발견하는 순간이 반복됩니다. 말로 설명되지 않던 내 상태가, 타인의 이미지 안에서 먼저 보이기도 합니다.",
  },
  {
    title: "공감 형성 (Witnessing)",
    description:
      "내 작업이 조용히 존중받는 경험. 평가·조언이 아닌 '본다'는 자세를 훈련하는 것이 그룹 미술치료의 기본 규칙입니다.",
  },
  {
    title: "가치 기반 집단 의식",
    description:
      "매 회기 시작·끝에 짧은 의식을 둡니다. ACT의 '가치(Values)'를 상기하는 루틴으로, 집단이 방향을 함께 가진다는 감각을 만듭니다.",
  },
];

const weeklyStructure = [
  { range: "Week 1", phase: "그룹 규칙과 안전감", description: "비밀유지·존중·관찰자 자세의 기본 규칙을 함께 만듭니다. 가벼운 웜업 작업으로 서로의 존재를 등록합니다." },
  { range: "Week 2", phase: "지금의 나 — 체크인 이미지", description: "수채·콜라주로 '지금 이 순간의 나'를 그립니다. Yalom의 보편성이 가장 빠르게 작동하는 회기입니다." },
  { range: "Week 3", phase: "수용 — 감정과 거리 두기", description: "밀어내고 있던 감정을 상징으로 꺼냅니다. 'ACT의 수용' 개념을 몸으로 먼저 익힙니다." },
  { range: "Week 4", phase: "인지적 탈융합", description: "반복되는 자기 비난 문장을 그룹에서 외현화합니다. 같은 패턴이 여러 사람에게서 발견되는 순간이 전환점입니다." },
  { range: "Week 5", phase: "관계 지도", description: "내 관계망을 시각화합니다. 그룹 안의 상호작용 자체가 실시간 관계 학습의 재료가 됩니다." },
  { range: "Week 6", phase: "가치 명료화", description: "내가 향하고 싶은 삶의 방향을 이미지로 꺼냅니다. 서로의 가치를 목격하며 자기 언어가 단단해집니다." },
  { range: "Week 7", phase: "작은 한 걸음", description: "가치에서 이번 주 실천을 설계합니다. 그룹은 '내가 뭔가를 해 보겠다'는 선언의 증인이 됩니다." },
  { range: "Week 8", phase: "통합과 종결", description: "8주의 변화를 한 장의 이미지로 엮고, 서로에게 감사의 메시지를 남기는 마무리 의식을 진행합니다." },
];

const programs = [
  {
    title: "마음유연성 8주 프로그램",
    description:
      "ACT 6프로세스를 8회기에 걸쳐 미술 매체로 탐색하는 기본 구조의 프로그램. 불안·소진·관계 등 일반 주제를 폭넓게 다룹니다.",
    duration: "주 1회, 90분 × 8회",
  },
  {
    title: "번아웃 탈출 워크숍",
    description:
      "직장인·전문직·돌봄 역할자를 위한 단기 집약 프로그램. 그룹 4회 + 개인 1회로 구성해, 공통 소진 경험과 개인 맥락을 함께 다룹니다.",
    duration: "주 1회, 90분 × 4회 + 개인 1회",
  },
  {
    title: "부모 자기돌봄 그룹",
    description:
      "자녀 돌봄이 일상의 중심인 분들을 위한 주제 그룹. '부모 역할 안에서 나는 어떻게 지내는가'를 미술 매체로 꺼내고 정리합니다.",
    duration: "90분 × 6회",
  },
  {
    title: "관계 회복 그룹",
    description:
      "반복되는 관계 갈등과 거리 조절이 주제인 분들을 위한 소그룹. Yalom 의 대인관계 학습이 가장 적극적으로 작동하는 트랙입니다.",
    duration: "90분 × 6회",
  },
];

const concerns = [
  {
    q: "내성적이고 말주변이 없어요. 그래도 참여할 수 있나요?",
    a: "네, 오히려 권해 드립니다. 그룹 미술치료는 '말을 많이 해야 하는 자리'가 아닙니다. 먼저 이미지를 만들고, 원하는 만큼만 말로 옮기면 됩니다. 침묵도 존중되는 구조입니다.",
  },
  {
    q: "다른 사람 이야기에 압도될까 걱정돼요.",
    a: "치료사가 회기마다 정서적 밀도를 조율합니다. 참여자 간 자극량이 과해진다고 판단되면 속도를 늦추거나 개인 작업으로 전환합니다. 또한 비밀유지 규칙을 첫 회기에 함께 합의합니다.",
  },
  {
    q: "미술을 정말 못해요.",
    a: "그룹에서도 완성도 평가는 없습니다. 중요한 것은 '그 순간 내가 고른 색·선·재료'이며, 이는 기술과 무관합니다. 치료사가 매체 선택을 안내해 드립니다.",
  },
  {
    q: "아는 사람을 만날까 봐 걱정돼요.",
    a: "등록 시 기본 정보를 확인해 동일 직장·지인 관계가 겹치지 않도록 구성에 반영합니다. 우려되는 상황이 있다면 예약 문의 시 미리 알려 주시면 가장 안전합니다.",
  },
];

const evidenceNotes = [
  {
    source: "Irvin D. Yalom, 『The Theory and Practice of Group Psychotherapy』",
    note:
      "Yalom은 집단 심리치료의 11가지 치료적 요인을 정립한 연구자입니다. 본 센터의 그룹 설계는 그중 보편성·대인관계 학습·응집력·희망 주입 등 주요 요인을 미술치료 구조에 의도적으로 배치합니다.",
  },
  {
    source: "American Art Therapy Association (AATA)",
    note:
      "미국미술치료협회는 그룹 미술치료가 참여자 간 상호작용과 창작 과정이 동시에 작동하는 다층적 접근임을 기술합니다. 본 센터의 매체·구조 선택은 이 프레임을 따릅니다.",
  },
  {
    source: "한국미술치료학회",
    note:
      "국내 학회는 소그룹 미술치료가 정서 조절, 자기표현, 사회적 지지감에 의미 있는 변화를 만들 수 있음을 다수의 사례 연구에서 기술해 왔습니다. 진단 대체가 아닌 심리적 성장 맥락에서 활용을 권합니다.",
  },
  {
    source: "Steven C. Hayes 외, ACT 문헌",
    note:
      "ACT의 심리적 유연성 모델은 개인·그룹 형식 모두에서 적용 가능한 구조로 제안되어 왔습니다. 그룹 포맷은 특히 '가치 명료화'와 '전념 행동' 단계에서 서로의 증인이 되어 주는 효과가 관찰됩니다.",
  },
];

export default function GroupPage() {
  return (
    <>
      <JsonLd data={groupServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "그룹 프로그램", href: "/services/group" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Group Art Therapy
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                ACT 그룹 미술치료 — 4~6인 소그룹 8주 마음유연성 프로그램
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                혼자 감당해 온 주제를, 같은 결의 사람들과 나눠 보는 시간입니다.
                Irvin D. Yalom이 정리한 집단 치료적 요인과 ACT 수용전념치료
                6프로세스를 미술 매체로 풀어내는 주 1회 × 90분 × 8주 구조입니다.
                '나만 이런 게 아니었구나'라는 감각이 가장 먼저 시작됩니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">90분 세션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">4~6인 소그룹</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">주 1회 × 8주</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">주제별 트랙</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">비용 페이지</Link>를 참고해 주세요.
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
              >
                참여 문의하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80"
                alt="원형 테이블에서 함께 그리는 소그룹 미술치료 장면"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Yalom therapeutic factors */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              그룹이 만드는 치유의 결 — Yalom의 치료적 요인
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              집단 심리치료의 고전 연구자 Irvin D. Yalom은 『The Theory and
              Practice of Group Psychotherapy』에서 그룹에서 작동하는 치료적
              요인을 정리했습니다. 본 센터의 설계는 이 요인들이 미술 매체와
              만날 때 자연스럽게 작동하도록 회기를 배치합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yalomFactors.map((item) => (
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

      {/* Why 4-6 people */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              왜 4~6인 소그룹인가
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              친밀감과 역동 사이의 균형점을 맞추기 위함입니다. 세 가지 기준이
              함께 작동합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whySmallGroup.map((w) => (
              <div
                key={w.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{w.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Unique mechanics */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              그룹 미술치료만의 작동 방식
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              그룹 토크만 하는 집단치료와는 다른 장치들이 작동합니다. 이미지와
              매체가 매개가 되기에 '언어 이전의 경험'이 더 안전하게 오갑니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {uniqueMechanics.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{m.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 8-week structure */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              주 1회 × 90분 × 8주 — 회기 흐름
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              아래는 '마음유연성 8주' 기본 트랙의 흐름입니다. 주제별 트랙(번아웃·관계
              회복·부모 자기돌봄)은 해당 주제에 맞춰 Week 3~7의 매체와 프롬프트가
              변주됩니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyStructure.map((w) => (
              <div
                key={w.range}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">{w.range}</p>
                <h3 className="mt-2 text-night font-semibold">{w.phase}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Programs / tracks */}
      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
            주제별 소그룹 트랙
          </h2>
          <p className="mt-4 text-charcoal/70 text-sm leading-relaxed max-w-2xl">
            아래 네 가지는 가장 자주 개설되는 트랙입니다. 참여 신청이 모이는
            시점에 따라 개강 일정이 달라지며, 개별 문의 시 대기 순번을 안내해
            드립니다.
          </p>
          <div className="mt-10 space-y-6 max-w-3xl">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div>
                  <h3 className="text-night font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{p.description}</p>
                </div>
                <p className="text-primary-500 text-sm font-medium whitespace-nowrap tabular-nums">{p.duration}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Concerns */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              이런 점이 걱정되세요?
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              그룹 참여를 망설이게 하는 질문들을 자주 받습니다. 가장 자주 듣는
              네 가지에 먼저 답을 드립니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {concerns.map((c) => (
              <div
                key={c.q}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold text-base">{c.q}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{c.a}</p>
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
              본 그룹 프로그램 설계의 개념과 구조는 다음 기관·저자의 표준에
              기반합니다. 효과를 단정하기 위한 인용이 아니라 설계의 투명성을
              위한 기록입니다.
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
            비슷한 주제의 다른 프로그램
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
                더 개인화된 속도와 깊이가 필요한 주제에는 1:1 8주 구조를 권해 드립니다.
              </p>
            </Link>
            <Link
              href="/services/emotional"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">정서·트라우마 중심</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                트라우마·상실·번아웃 주제가 강할 경우, 정서 중심 장기 트랙에서 먼저 안정화를 진행합니다.
              </p>
            </Link>
            <Link
              href="/services/online"
              className="bg-cream rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Online</p>
              <h3 className="mt-2 text-night font-semibold">온라인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                지역·이동 여건상 오프라인 그룹 참여가 어려운 분께 개인 세션으로 연결됩니다.
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
              혼자가 아닌 8주를 함께 시작해 보세요
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              첫 상담은 무료로 진행됩니다. 현재 열려 있는 트랙과 대기 순번,
              일정이 맞는 구성원 정보를 함께 안내해 드립니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              그룹 참여 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
