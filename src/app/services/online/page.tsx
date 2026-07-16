import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "온라인 미술치료 — Zoom 화상 세션과 사전 배송 아트키트",
  description:
    "전국·해외에서 참여하는 Zoom 기반 ACT 온라인 미술치료. 세션 전에 종이·물감·붓·점토로 구성된 아트키트가 자택으로 배송됩니다. 팬데믹 이후 누적되어 온 원격 심리치료 효과성 연구에 기반해 설계된 50분 세션.",
  keywords: [
    "온라인 미술치료",
    "비대면 미술치료",
    "화상 미술심리상담",
    "Zoom 미술치료",
    "원격 심리치료",
    "아트키트 배송",
    "해외 한국인 상담",
  ],
  alternates: { canonical: `${SITE_URL}/services/online` },
  openGraph: {
    type: "website",
    title: "온라인 미술치료 — Zoom 화상 + 사전 배송 아트키트",
    description:
      "Zoom 50분 세션과 자택 배송 아트키트로 진행되는 ACT 원격 미술치료. 서울 외 지역·해외 거주·이동이 어려운 분을 위한 설계.",
    url: `${SITE_URL}/services/online`,
    images: [
      {
        url: "/og/services-online.png",
        width: 1200,
        height: 630,
        alt: "온라인 미술치료 Zoom 화면과 홈 스튜디오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "온라인 미술치료 — Zoom + 아트키트 배송",
    description:
      "집이라는 공간의 안정감과 원격 심리치료의 접근성을 함께. 50분 세션과 아트키트로 진행됩니다.",
    images: ["/og/services-online.png"],
  },
};

const onlineServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "온라인 미술치료", item: `${SITE_URL}/services/online` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/online#service`,
      name: "온라인 미술치료",
      alternateName: ["Online Art Therapy", "비대면 미술치료", "Telehealth Art Therapy"],
      description:
        "Zoom 화상으로 진행되는 ACT 기반 미술심리상담. 세션 전 종이·물감·붓·마커·소형 점토 등으로 구성된 아트키트를 자택으로 배송하며, 팬데믹 이후 누적된 원격 심리치료(telehealth psychotherapy) 효과성 연구와 AATA의 원격 실무 가이드라인에 기반해 설계된 50분 구조입니다.",
      url: `${SITE_URL}/services/online`,
      image: `${SITE_URL}/og/services-online.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "대한민국" },
        { "@type": "Place", name: "해외 거주 한국인" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${SITE_URL}/booking`,
        servicePhone: "온라인 Zoom 미팅",
        availableLanguage: "Korean",
      },
      offers: {
        "@type": "Offer",
        price: "70000",
        priceCurrency: "KRW",
        description: "50분 세션 70,000~100,000원 (아트키트 배송 포함)",
      },
    },
  ],
};

const sessionFlow = [
  {
    number: "01",
    title: "예약 및 사전 질문지",
    description:
      "온라인 예약 후 간단한 사전 질문지를 보내드립니다. 주소·연락처·시차, 현재 상태의 큰 그림을 미리 확인해 첫 세션을 효율적으로 시작합니다.",
  },
  {
    number: "02",
    title: "아트키트 자택 배송",
    description:
      "세션 2~3일 전 기본 아트키트가 배송됩니다. 해외 거주 시에는 현지 구매 가이드를 PDF로 제공하거나 국제 배송 옵션을 안내합니다.",
  },
  {
    number: "03",
    title: "Zoom 50분 세션",
    description:
      "치료사와 화상으로 만나 작업합니다. 체크인(5~10분) → 작업(25~30분) → 나눔·리뷰(10~15분) 구조로 대면 세션과 동일한 흐름을 유지합니다.",
  },
  {
    number: "04",
    title: "세션 후 실천 안내",
    description:
      "일상에서 가져갈 수 있는 작은 실천 과제와 다음 회기 안내를 메일로 보내드립니다. 작품은 내담자가 안전한 장소에 보관합니다.",
  },
];

const strengths = [
  {
    title: "집이라는 공간의 안정감",
    description:
      "익숙한 환경에서 작업하는 것이 오히려 자극량을 낮추는 경우가 많습니다. 트라우마·불안 주제에서는 '내 방의 벽·이불의 촉감'이 그라운딩 자원이 됩니다.",
  },
  {
    title: "이동 시간의 여백",
    description:
      "왕복 2~3시간을 쓰지 않아도 되는 구조는, '상담 전후의 감정 정돈 시간'을 확보하게 해 줍니다. 바쁜 일상 중 지속 가능성이 확실히 올라갑니다.",
  },
  {
    title: "지역·국경의 소거",
    description:
      "서울 외 지역·해외 거주 한국인이 한국어로 상담받을 수 있습니다. 시차는 예약 시 조율해 드립니다.",
  },
];

const honestLimits = [
  {
    title: "대면의 신체적 공명이 줄어듭니다",
    description:
      "같은 공간에서 물감의 냄새·종이의 결·치료사의 호흡을 느끼는 경험은 온라인에서 줄어듭니다. 원격의 효과는 다수 메타분석에서 대면과 비교해 비열등한 수준으로 보고되지만, '동일하지는 않다'는 점을 솔직히 말씀드립니다.",
  },
  {
    title: "기술·공간 요건이 필요합니다",
    description:
      "안정적인 Wi-Fi, 작업 공간(책상), 화상 기기가 전제됩니다. 화면을 통해 작품이 보여야 하므로 조명도 한 번 점검해 드립니다.",
  },
  {
    title: "위기 개입에는 적합하지 않습니다",
    description:
      "자해·타해 위험이 높은 급성기, 심한 해리 경험이 반복되는 경우, 급성 외상 직후 등은 대면 세션이나 응급 체계 연계가 우선입니다. 첫 상담에서 함께 판단해 드립니다.",
  },
];

const techRequirements = [
  {
    title: "화상 기기",
    description:
      "노트북 또는 데스크톱 권장. 태블릿·스마트폰도 가능하지만, 손 작업과 얼굴을 동시에 보여 드리는 경우 화면이 좁아질 수 있습니다.",
  },
  {
    title: "공간",
    description:
      "방해받지 않는 반폐쇄 공간(1시간 동안 문을 닫을 수 있는 방). 가족 구성원이 있다면 사전 안내를 권해 드립니다.",
  },
  {
    title: "조명",
    description:
      "얼굴과 작업물 모두가 밝게 잡히는 각도. 창가 옆이거나 정면에 광원이 있는 위치가 좋습니다.",
  },
  {
    title: "네트워크",
    description:
      "와이파이 권장. 세션 중 연결이 끊어질 경우의 재접속 절차는 첫 회기에 함께 연습합니다.",
  },
];

const kitContents = [
  "엽서 크기·A4·A3 종이 (다양한 질감 포함)",
  "수채 물감 + 붓 3종 (두께별)",
  "유성·수성 마커 기본 세트",
  "오일 파스텔 또는 크레용",
  "잡지 컷아웃과 풀(콜라주용)",
  "소형 점토 (지점토 또는 천연 점토)",
  "간단한 저널 노트 (세션 사이 기록용)",
];

const whoItFits = [
  "서울 외 지역에 거주해 대면 상담이 물리적으로 어려운 분",
  "돌봄·질병·신체 조건 등으로 외출이 어려운 시기에 계신 분",
  "해외 거주 중 한국어로 상담받기를 원하시는 분",
  "주 1회 장기 상담을 '지속 가능한 리듬'으로 유지하고 싶은 분",
  "이전에 미술치료 대면 경험이 있어 혼자서도 작업 공간을 꾸릴 수 있는 분",
];

const whoItDoesntFit = [
  "자해·타해 위험이 현재 활성화되어 있는 급성기",
  "심한 해리·급성 외상 직후로 즉각적인 대면 지원이 필요한 경우",
  "안정적인 네트워크·화상 기기·사적 공간을 확보하기 어려운 경우",
  "아이 혼자 온라인 세션에 참여해야 하는 만 12세 이하 (보호자 동석이 필요합니다)",
];

const evidenceNotes = [
  {
    source: "American Art Therapy Association (AATA) — Telehealth Guidelines",
    note:
      "AATA는 2020년 이후 원격 미술치료 실무에 대한 가이드라인을 업데이트하며, 보안·매체·회기 구조의 기준을 제시해 왔습니다. 본 센터의 Zoom·아트키트·사전 질문지 절차는 이 기준을 반영합니다.",
  },
  {
    source: "원격 심리치료(Telehealth Psychotherapy) 메타분석 연구",
    note:
      "COVID-19 이후 여러 메타분석(예: Monaghesh & Hajizadeh, 2020; Scott 외, 2022)이 원격 심리치료가 전통적 대면 치료 대비 비열등한 결과를 보인다고 보고했습니다. 본 센터는 '동일하다' 대신 '연구에서 비열등성이 시사되고 있다'는 조심스러운 표현을 씁니다.",
  },
  {
    source: "Cathy Malchiodi, 원격 아트테라피 관련 저술",
    note:
      "Malchiodi는 원격 매체 환경에서의 감각 기반 접근과 매체 선택 기준을 정리해 왔습니다. 화면 너머에서도 유지되어야 하는 치료적 장치(ritual, grounding, closure)를 강조합니다.",
  },
  {
    source: "한국미술치료학회",
    note:
      "국내 학회 역시 비대면 환경에서의 사례 연구를 축적해 왔으며, 접근성 확장 측면의 의의를 꾸준히 기술해 왔습니다. 본 센터는 국내 임상 맥락에 맞춰 키트 구성·시차 조율·언어 설정을 현지화합니다.",
  },
];

export default function OnlinePage() {
  return (
    <>
      <JsonLd data={onlineServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "온라인 미술치료", href: "/services/online" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Online Art Therapy
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                온라인 미술치료 — Zoom 세션과 사전 배송 아트키트
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                팬데믹 이후 원격 심리치료(Telehealth Psychotherapy)의 효과성
                연구가 누적되어 왔습니다. 본 센터는 그 흐름 위에서, 단순한
                '화상 상담'이 아니라 세션 전 아트키트를 자택으로 배송해
                <strong> 매체의 물성까지 함께 전달</strong>하는 온라인
                미술치료를 운영합니다. 서울 외 지역·해외 거주·이동이 어려운
                시기에 계신 분들을 위한 설계입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분 세션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">Zoom 화상</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">아트키트 자택 배송</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">해외 참여 가능</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">비용 페이지</Link>를 참고해 주세요.
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
              >
                온라인 상담 예약하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&q=80"
                alt="온라인 미술치료를 위한 홈 스튜디오와 노트북"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Session flow */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              예약에서 세션까지 — 네 단계
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              대면 세션과 동일한 흐름을 원격 환경에서도 유지하기 위해, 온라인
              세션은 네 단계로 짜여 있습니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionFlow.map((s) => (
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

      {/* Strengths */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              온라인의 강점
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              원격 세션은 대면의 '축소판'이 아닙니다. 일부 주제에서는 오히려
              원격이 더 적합한 장면이 있습니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{s.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Honest limits */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              솔직히 말씀드리는 한계
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              원격 미술치료의 효과는 연구에서 꾸준히 축적되고 있지만, 모든
              주제에 최선인 포맷은 아닙니다. 다음 세 가지는 예약 전에 함께
              확인해야 하는 지점입니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {honestLimits.map((l) => (
              <div
                key={l.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{l.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{l.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Kit + requirements */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                아트키트 구성 (예시)
              </h2>
              <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
                아래는 표준 키트 구성입니다. 주제·매체 민감도에 따라 치료사가
                조정하며, 장기 내담자는 회기별로 특정 매체를 추가 배송받기도
                합니다.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
                {kitContents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-charcoal/60 text-xs leading-relaxed">
                ※ 해외 거주의 경우 국제 배송 대신, 현지 구매 가이드를 PDF로
                제공해 드립니다.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                기술·환경 요건
              </h2>
              <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
                세션의 밀도를 유지하기 위해 최소 환경을 안내해 드립니다.
                첫 세션에 함께 점검합니다.
              </p>
              <div className="mt-6 space-y-4">
                {techRequirements.map((t) => (
                  <div
                    key={t.title}
                    className="bg-cream rounded-xl p-5"
                    style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                  >
                    <h3 className="text-night font-semibold text-sm">{t.title}</h3>
                    <p className="mt-1 text-charcoal/70 text-sm leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Fit / not fit */}
      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
            온라인이 맞는 분 · 대면이 먼저인 분
          </h2>
          <p className="mt-4 text-charcoal/70 text-sm leading-relaxed max-w-2xl">
            온라인은 접근성의 확장이지 모든 경우의 기본값은 아닙니다. 다음
            리스트를 함께 읽어 본 뒤 어떤 포맷이 현재의 나에게 맞는지 첫
            상담에서 의논해 드립니다.
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
            <div
              className="bg-white rounded-xl p-6 lg:p-8"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <h3 className="text-night font-semibold">온라인이 맞는 분</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                {whoItFits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-white rounded-xl p-6 lg:p-8"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <h3 className="text-night font-semibold">대면이 먼저 권해지는 경우</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                {whoItDoesntFit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary shrink-0" style={{ backgroundColor: "#9e4219" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Evidence */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              원격 작업의 근거 축적
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              COVID-19 이후 원격 심리치료는 비열등성(non-inferiority) 관점에서 다수의 메타분석이
              축적된 분야입니다. 본 센터의 온라인 구조는 이 근거 흐름과 AATA 원격 가이드라인,
              국내 학회 사례 축적을 기반으로 짜였습니다.
            </p>
          </div>
          <ol className="mt-10 max-w-3xl space-y-5 list-none">
            {evidenceNotes.map((e, idx) => (
              <li
                key={e.source}
                className="flex gap-5"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-cream text-primary-500 font-semibold text-sm flex items-center justify-center tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="text-night font-semibold text-sm">{e.source}</h3>
                  <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
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
              href="/services/individual"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Individual</p>
              <h3 className="mt-2 text-night font-semibold">성인 1:1 개인 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                서울 방문이 가능하신 경우, 대면 1:1 8주 구조에서 매체의 물성을 더 풍부하게 경험하실 수 있습니다.
              </p>
            </Link>
            <Link
              href="/services/group"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Group</p>
              <h3 className="mt-2 text-night font-semibold">ACT 그룹 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                같은 결의 사람들과 대면으로 만나는 경험이 필요한 경우 소그룹 8주 프로그램을 권해 드립니다.
              </p>
            </Link>
            <Link
              href="/services/child"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Child</p>
              <h3 className="mt-2 text-night font-semibold">아동·청소년 미술치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                온라인으로 청소년 세션 참여 시, 보호자 동석·환경 구성 등 별도 안내가 있습니다.
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
              어디서든 시작할 수 있습니다
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              첫 상담은 무료로 진행됩니다. 지금 계신 지역과 시차, 지속 가능한
              주기를 함께 맞춰 드립니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              온라인 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
