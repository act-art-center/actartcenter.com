import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "심층 탐색·연구 기반 미술심리치료 — 장기 자기 이해·슈퍼비전·연구 협력",
  description:
    "자기 이해와 내적 탐색을 원하는 개인의 장기 심층 트랙, 미술치료 전문가를 위한 슈퍼비전, 차의과학대학교 박사과정 연구와 연계되는 사례 기반 학술 협력. Jungian 상징 작업과 Freudian 자유연상의 흐름을 ACT 프레임으로 재통합한 접근으로 설계합니다.",
  keywords: [
    "심층 미술심리치료",
    "장기 미술치료",
    "미술치료 슈퍼비전",
    "미술치료 전문가 자문",
    "미술치료 연구 협력",
    "Jungian 미술치료",
    "상징 작업 미술치료",
    "자기 이해 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/depth` },
  openGraph: {
    type: "website",
    title: "심층 탐색·연구 기반 미술심리치료 — ACT ART CENTER",
    description:
      "장기 심층 자기 이해, 미술치료 전문가 슈퍼비전, 박사과정 연구와 연결된 사례 기반 학술 협력을 제공합니다.",
    url: `${SITE_URL}/services/depth`,
    images: [
      {
        url: "/og/services-depth.png",
        width: 1200,
        height: 630,
        alt: "심층 탐색·연구 기반 미술심리치료 — 상징 작업의 스튜디오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "심층 탐색·연구 기반 미술심리치료",
    description:
      "장기 자기 이해·슈퍼비전·연구 협력 트랙. Jungian 상징 작업을 ACT 프레임으로 통합.",
    images: ["/og/services-depth.png"],
  },
};

const depthServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "심층 탐색·연구 기반 미술심리치료", item: `${SITE_URL}/services/depth` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/depth#service`,
      name: "심층 탐색·연구 기반 미술심리치료",
      alternateName: ["Depth-Oriented & Research-Based Art Therapy", "장기 심층 미술심리치료"],
      additionalType: "https://schema.org/PsychologicalTreatment",
      description:
        "증상 완화를 넘어 장기적 자기 이해·상징 탐색을 목적으로 하는 심층 미술심리치료. Cathy Malchiodi 의 장기 사례 기술, Judith Rubin 의 『Introduction to Art Therapy』(2009) 흐름, Irvin Yalom 의 실존주의 심리치료 관점, Jungian 상징 작업, Freudian 자유연상의 아트 버전을 ACT(Hayes et al.) 프레임으로 통합한 접근입니다. 2주 1회·월 1회 간격의 장기 계약을 기본으로 합니다.",
      url: `${SITE_URL}/services/depth`,
      image: `${SITE_URL}/og/services-depth.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "대한민국" },
      offers: {
        "@type": "Offer",
        price: "100000",
        priceCurrency: "KRW",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100000",
          priceCurrency: "KRW",
          referenceQuantity: { "@type": "QuantitativeValue", value: 50, unitText: "MIN" },
          description: "50분 기본 세션 기준 100,000~150,000원. 장기 계약 시 회기 단가 유연 조정.",
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/booking`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/depth#supervision`,
      name: "미술치료사 슈퍼비전 및 전문가 자문",
      serviceType: "Clinical Supervision",
      description:
        "미술치료사 자격 교육 이수자·대학원생·현장 실무자를 대상으로 하는 사례 슈퍼비전과 임상 자문. 1:1 개별 슈퍼비전과 소그룹 슈퍼비전(3~5인) 두 가지 형태로 운영합니다.",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: { "@type": "Audience", audienceType: "미술치료 전문가·대학원생" },
      areaServed: { "@type": "Country", name: "대한민국" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/depth#research`,
      name: "사례 기반 학술 연구 협력",
      serviceType: "Research Collaboration",
      description:
        "차의과학대학교 미술치료학 박사과정 연구와 연결되는 사례 기반 학술 협력. 내담자의 사전 서면 동의를 바탕으로 익명화된 사례를 학술지·학회 발표·교육 자료에 활용합니다.",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: { "@type": "Audience", audienceType: "연구 참여에 동의하는 내담자·연구 협력 기관" },
    },
  ],
};

const fitAudience = [
  {
    title: "장기 자기 이해 여정",
    description:
      "뚜렷한 증상보다 '나는 어떤 사람으로 살고 싶은가'를 오래 묻고 있는 분. 상징·서사·정체성 작업을 한 해 이상 이어가며 자기 이미지를 재구성하고 싶은 분.",
  },
  {
    title: "전문가·리더의 자기돌봄",
    description:
      "상담·의료·교육·예술 현장에서 타인을 돌보는 역할을 오래 맡아 온 분. 기능으로서의 자기 뒤에 묻혀 있는 감각과 서사를 장기 작업으로 정리합니다.",
  },
  {
    title: "미술치료사 슈퍼비전",
    description:
      "미술치료사 자격 교육 이수자·대학원생·현장 3년 이내 실무자를 대상으로 하는 사례 슈퍼비전. 본인의 임상 사례를 정기적으로 검토하고 윤리·기법·자기 반영을 점검합니다.",
  },
  {
    title: "임상가의 전문 자문",
    description:
      "이미 임상 경험이 축적된 치료사·상담사·의료 인력이, 특정 사례·프로그램 설계·기관 이슈에 대한 짧은 자문을 원할 때. 단회 또는 3회기 자문 패키지로 운영합니다.",
  },
  {
    title: "연구 협력 · 사례 기반 학술 참여",
    description:
      "사례 기반 질적 연구·프로그램 평가에 동의하시는 내담자 또는 연구 기관. 사전 서면 동의와 익명화를 전제로 학술지·학회 발표·교육 자료에 공동 작업으로 연결됩니다.",
  },
  {
    title: "장기 내적 탐색의 재개",
    description:
      "과거 개인 분석·장기 상담 경험이 있으며, 삶의 전환기에 같은 결의 작업을 다시 열고 싶은 분. 종결 경험이 있는 분과의 재작업은 초기 안전감 구축이 더 빨라집니다.",
  },
];

const depthMeaning = [
  {
    title: "Jungian 상징 작업",
    description:
      "Carl G. Jung 이 적극적 상상(active imagination)과 꿈·이미지 분석에서 정리해 온 흐름입니다. 본 센터는 이 전통의 '상징에 대한 존중'을 수용하되, 상징을 해석해 내담자에게 주입하지 않는 현대 임상 윤리를 지킵니다.",
  },
  {
    title: "Freudian 자유연상의 아트 버전",
    description:
      "Sigmund Freud 의 자유연상(free association)은 말로 떠오르는 대로 흘려보내는 작업이었습니다. 미술에서는 '선이 이끄는 대로' 그어 나가는 자동 드로잉·스크리블 워크로 번역되어, 내담자가 스스로도 몰랐던 연상을 시각적으로 만나는 통로가 됩니다.",
  },
  {
    title: "Irvin Yalom · 실존주의 관점",
    description:
      "Irvin Yalom 은 『The Theory and Practice of Group Psychotherapy』, 『Existential Psychotherapy』 등에서 죽음·자유·고립·의미라는 네 가지 궁극적 관심을 심리치료의 핵심 축으로 제시했습니다. 장기 작업에서 이 네 축은 피할 수 없는 주제로 자주 되돌아옵니다.",
  },
  {
    title: "ACT 프레임으로의 통합",
    description:
      "본 센터는 위의 세 흐름이 지닌 '심층'에 대한 존중을 유지하면서도, 해석을 강요하지 않고 가치 방향의 유연성을 훈련하는 ACT(Hayes, Strosahl, Wilson, 2012) 프레임 안에서 작업을 통합합니다. 상징은 '고정된 답'이 아니라 '움직이는 나침반'으로 다뤄집니다.",
  },
];

const longTermValue = [
  {
    title: "변화는 대체로 점진적입니다",
    description:
      "Cathy Malchiodi 가 여러 장기 사례 기술에서 정리해 온 것처럼, 심층 작업의 변화는 대체로 서서히 축적됩니다. 초반에 '큰 통찰' 이 없다고 작업이 무효가 아니며, 오히려 첫 반년은 언어 이전 자료를 꺼내 놓는 '저장' 의 시기가 되곤 합니다.",
  },
  {
    title: "상징은 해석하지 않고 살펴봅니다",
    description:
      "내담자의 이미지·상징은 치료사의 해석 권한이 아닙니다. Judith Rubin 이 『Introduction to Art Therapy』(2009) 에서 강조하듯, 작품의 의미는 내담자가 자기 삶 안에서 스스로 만들어 가는 것입니다. 본 센터는 '질문하는 자리'를 유지합니다.",
  },
  {
    title: "반복은 회피가 아니라 심화입니다",
    description:
      "같은 이미지·주제가 계기마다 다시 떠오르는 경험은 정체가 아니라 층이 쌓이는 과정인 경우가 많습니다. 장기 작업은 이 반복을 '소진' 이 아닌 '심화' 로 읽는 감각을 길러 줍니다.",
  },
  {
    title: "종결은 열어 둔 채 이루어집니다",
    description:
      "심층 작업의 종결은 '완결' 이 아닌 '일시 정지' 인 경우가 많습니다. 삶의 전환기에 다시 열어 볼 수 있도록 '지도' 형태로 작업을 남기며, 필요 시 부스터 세션으로 재접근합니다.",
  },
];

const supervisionFormats = [
  {
    number: "01",
    title: "1:1 개별 슈퍼비전",
    description:
      "본인의 임상 사례를 정기적으로 검토합니다. 50분 기본, 월 1~2회 권장. 사례 개념화·매체 선택·윤리 이슈·역전이·자기 반영을 네 축으로 다룹니다.",
  },
  {
    number: "02",
    title: "소그룹 슈퍼비전",
    description:
      "3~5인 소그룹이 정기적으로 모여 사례를 공유합니다. 또래 학습(peer learning)의 관점 다양성과 개별 슈퍼비전의 깊이를 절충하는 구조입니다. 분기 또는 반기 단위 계약.",
  },
  {
    number: "03",
    title: "단회·단기 자문",
    description:
      "특정 사례·프로그램 설계·기관 이슈에 대한 짧은 자문이 필요할 때. 단회 90분 또는 3회기 자문 패키지. 연구·논문 자문은 별도로 안내합니다.",
  },
  {
    number: "04",
    title: "자격 조건 · 윤리 점검",
    description:
      "한국미술치료학회 회원, 미술치료 석사 이수 또는 이수 예정, 현장 1~3년 실무자에게 가장 적합합니다. 슈퍼비전 시작 전 비밀유지·이중관계·사례 공유 범위에 대한 서면 계약을 체결합니다.",
  },
];

const researchCollaboration = [
  {
    title: "박사과정 연구와의 연결",
    description:
      "원장은 차의과학대학교 미술치료학 박사과정을 이수하며, ACT 와 미술치료의 통합 프로토콜·성인 번아웃 집단·디지털 환경의 미술치료 적용을 장기 연구 관심으로 두고 있습니다. 사례 기반 질적 연구에 관심 있는 내담자·기관과의 협력을 환영합니다.",
  },
  {
    title: "윤리 동의 절차",
    description:
      "모든 사례 연구는 내담자의 사전 서면 동의 하에 익명화되어 다뤄집니다. 이름·식별 가능한 맥락·작품 원본은 연구 기록에서 삭제되거나 변형되며, 동의는 언제든 철회 가능합니다. 연구 기관이 요청하는 경우 IRB(기관생명윤리위원회) 절차를 별도로 진행합니다.",
  },
  {
    title: "학회·학술지 발표 범위",
    description:
      "한국미술치료학회·관련 학회 발표, 국내 학술지(대한미술치료학회지 등), 교육 자료 제작이 일반적 범위입니다. 국제 학회 발표·국제 저널 게재 시에는 추가 동의와 번역 절차가 선행됩니다.",
  },
  {
    title: "공동 저자 · 협력 구조",
    description:
      "연구 기관·타 치료사와의 협력 시에는 저자 순서·데이터 분담·출판 일정에 대한 사전 합의를 문서화합니다. 내담자가 연구 참여에 기여한 정도는 연구 논문 감사의 글 등에 명시됩니다.",
  },
];

const sessionStructure = [
  {
    number: "01",
    title: "50분 기본 세션",
    description:
      "표준 회기 길이는 50분입니다. 심층 작업은 깊이로 들어갈 때 자극량도 함께 올라가기 때문에, 연장 세션보다 '정기적 50분'이 장기적으로 더 안전하다고 판단합니다.",
  },
  {
    number: "02",
    title: "2주 1회 · 월 1회 간격",
    description:
      "단기 트랙이 주 1회 간격을 권장하는 반면, 심층 트랙은 2주 1회(bi-weekly) 또는 월 1회(monthly) 간격을 기본값으로 합니다. 회기 사이의 '숙성 시간' 자체가 작업의 일부입니다.",
  },
  {
    number: "03",
    title: "장기 계약 옵션",
    description:
      "6개월·1년·1년 6개월 단위 계약을 운영합니다. 계약 기간에는 세션 단가 조정·선결제 할인·일정 우선권이 포함되며, 중간 리뷰 2회로 방향을 재조정합니다.",
  },
  {
    number: "04",
    title: "포트폴리오 보관과 리뷰",
    description:
      "장기 작업의 흔적은 디지털 포트폴리오 형태로 치료사·내담자가 공동 보관하고, 반기마다 '한 해의 궤적' 을 회고하는 리뷰 회기를 별도로 배치합니다.",
  },
];

const evidenceNotes = [
  {
    source: "Cathy A. Malchiodi — 장기 사례 연구와 통합 접근",
    note:
      "『Handbook of Art Therapy』와 다수의 단행본에서 Malchiodi 는 매체의 성격·장기 작업의 가치·내담자 중심 해석 원칙을 정리해 왔습니다. 본 센터의 장기 트랙 설계는 이 흐름을 '설계 원칙' 으로 참조합니다.",
  },
  {
    source: "Judith A. Rubin, 『Introduction to Art Therapy: Sources & Resources』(2009)",
    note:
      "미술치료 입문 교과서로 오래 쓰인 Rubin 의 저서는, 정신역동·인지행동·인간주의 등 다양한 학파의 흐름이 미술치료 안에서 어떻게 교차하는지를 정리합니다. 심층 작업의 교육적 기반으로 활용됩니다.",
  },
  {
    source: "Irvin D. Yalom — 실존주의 심리치료",
    note:
      "Yalom 은 『The Theory and Practice of Group Psychotherapy』, 『Existential Psychotherapy』 등에서 죽음·자유·고립·의미라는 실존적 관심을 임상의 중심에 둡니다. 장기 작업에서 반복적으로 떠오르는 주제 축의 언어로 활용됩니다.",
  },
  {
    source: "C. G. Jung — 상징·적극적 상상 전통",
    note:
      "Carl G. Jung 의 『Man and His Symbols』, 『Red Book』 등이 남긴 상징 작업·적극적 상상 전통은 미술치료 심층 작업의 역사적 뿌리 중 하나입니다. 본 센터는 이 전통을 '해석의 권위' 로 쓰지 않고 '상징에 대한 존중' 의 언어로만 참조합니다.",
  },
  {
    source: "Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson — ACT",
    note:
      "『Acceptance and Commitment Therapy』(2nd ed., 2012) 와 ACBS(Association for Contextual Behavioral Science) 의 국제 프로토콜 업데이트는 본 센터의 통합 프레임 역할을 합니다. 심층 작업의 깊이는 유지하되, 해석 의존성을 낮추는 장치로 ACT 가 작동합니다.",
  },
  {
    source: "한국미술치료학회 / 차의과학대학교 미술치료학과",
    note:
      "국내 학회·학과는 장기·심층 사례 연구와 슈퍼비전 체계의 기준을 지속적으로 갱신해 왔습니다. 본 센터의 슈퍼비전·연구 협력 절차는 이 국내 임상 맥락에 맞춰 국지화되어 있습니다.",
  },
];

const faqs = [
  {
    q: "장기 트랙은 어느 정도 기간이 권장되나요?",
    a: "최소 6개월, 일반적으로 1년 이상을 권장합니다. 2주 1회 또는 월 1회 간격이 기본값이며, 첫 3개월은 관계 형성과 상징 자료의 누적 시기로 봅니다. '오늘의 한 장면'보다 '한 해의 궤적'이 변화의 단위입니다.",
  },
  {
    q: "결과는 언제쯤 느껴지나요?",
    a: "증상 완화가 아니라 자기 이해의 언어가 먼저 달라지는 경우가 많습니다. 첫 반년 이후 '내가 나를 설명하는 방식' 이 부드러워졌다는 피드백을 자주 듣습니다. 다만 개인차가 크기에 '보장된 타임라인' 을 제시하지는 않습니다.",
  },
  {
    q: "연구·학술 참여 동의는 어떻게 이루어지나요?",
    a: "첫 계약 시점에는 연구 참여에 대해 묻지 않습니다. 작업이 안정적으로 쌓인 뒤, 기관 윤리 기준을 따르는 서면 동의서를 통해 익명화·발표 범위·철회 절차를 설명드립니다. 동의는 언제든 철회 가능하며, 철회가 세션에 영향을 주지 않습니다.",
  },
  {
    q: "슈퍼비전은 어떤 자격에 열려 있나요?",
    a: "미술치료 석사 이수 또는 이수 예정자, 한국미술치료학회 회원 또는 준회원, 현장 실무 1~3년차를 기본으로 합니다. 자격 조건 밖이어도 사례 자문·단기 자문 형태로 함께 논의할 수 있습니다. 슈퍼비전 시작 전 비밀유지·이중관계·사례 공유 범위에 대한 서면 계약을 체결합니다.",
  },
];

export default function DepthPage() {
  return (
    <>
      <JsonLd data={depthServiceSchema} />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "심층 탐색·연구 기반 미술심리치료", href: "/services/depth" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">
                Depth-Oriented & Research-Based
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                심층 탐색·연구 기반 미술심리치료 — 오래 걷는 길을 위한 구조
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                증상 완화 이후에도 '나는 어떤 사람으로 살고 싶은가' 를 오래
                묻고 싶은 분, 미술치료사 사례 슈퍼비전을 정기적으로 운영하고
                싶은 분, 사례 기반 학술 협력·연구 참여에 열려 있는 분을 위한
                트랙입니다. Cathy Malchiodi 의 장기 사례 기술, Judith Rubin 의
                『Introduction to Art Therapy』(2009), Irvin Yalom 의
                실존주의 심리치료 관점, Jungian 상징 전통과 Freudian 자유연상의
                아트 버전을 <strong>ACT 프레임으로 통합</strong>한 접근으로
                설계합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분 기본 세션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">2주 1회 · 월 1회</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">장기 계약 옵션</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">슈퍼비전·연구 협력</span>
              </div>
              <p className="mt-4 text-charcoal/60 text-sm">
                비용 안내는{" "}
                <Link href="/pricing" className="text-primary-500 underline underline-offset-2">
                  비용 페이지
                </Link>
                에서 확인하실 수 있으며, 장기 계약 시 세션 단가는 유연하게
                조정됩니다.
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
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
                alt="심층 탐색을 위한 스튜디오 — 오래 쌓인 작업물과 작업대"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Fit audience */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              이런 분께 열린 프로그램입니다
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              단기 증상 완화가 아닌 장기적 자기 이해·전문가 자기돌봄·슈퍼비전·연구
              협력을 목적으로 하는 트랙입니다. 내담자는 물론, 미술치료사
              자격 교육 이수자와 대학원생, 기관 연구자까지 함께 열려 있습니다.
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

      {/* Meaning of "depth" */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              '심층(depth-oriented)' 이라는 말의 의미
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              심층 작업은 '깊게 파고 들어가 해석하는 기술' 이 아닙니다. 오히려
              해석을 서두르지 않고 상징·이미지·서사가 스스로 움직일 시간을
              확보해 주는 구조입니다. 본 센터는 네 가지 전통을 참조하되, 그
              권위를 ACT 프레임으로 상대화합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {depthMeaning.map((d) => (
              <div
                key={d.title}
                className="bg-cream rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{d.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-charcoal/60 text-xs leading-relaxed max-w-3xl">
            ※ 본 센터는 Jungian·Freudian 전통의 '해석 권위' 를 수용하지 않습니다.
            상징의 의미는 치료사가 내담자에게 부여하는 것이 아니라, 내담자가
            삶의 맥락 안에서 스스로 만들어 가는 것입니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* Long-term value */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              장기 작업의 가치 — 점진성의 언어
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              장기 트랙이 단기 트랙보다 '더 좋다' 는 이야기는 아닙니다. 다만
              단기로 접근할 때 놓치기 쉬운 결을, 장기 작업은 다른 언어로
              되돌려줍니다. 다음 네 가지는 본 센터가 장기 트랙에서 반복적으로
              관찰해 온 결입니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {longTermValue.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{v.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Supervision */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              미술치료사 슈퍼비전 — 자격·형태·절차
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              슈퍼비전은 '가르치는 자리' 가 아니라 '함께 사례를 붙잡는 자리'
              입니다. 본 센터는 한국미술치료학회 윤리 기준과 국제 슈퍼비전
              문헌의 핵심 원칙(사례 개념화·매체 선택·역전이·자기 반영) 을 네
              축으로 운영합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supervisionFormats.map((s) => (
              <div
                key={s.number}
                className="bg-cream rounded-xl p-6"
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

      {/* Research collaboration */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              연구 협력 — 차의과학대학교 박사과정과의 연결
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              본 센터의 원장은 차의과학대학교 미술치료학 박사과정을 이수하며,
              ACT 와 미술치료의 통합 프로토콜·성인 번아웃 집단·디지털 환경의
              미술치료 적용을 장기 연구 관심으로 두고 있습니다. 사례 기반 질적
              연구에 관심 있는 내담자·기관에게 다음 네 가지 구조로 협력을
              제안합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCollaboration.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold">{r.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-charcoal/60 text-xs leading-relaxed max-w-3xl">
            ※ 연구 참여는 완전히 선택 사항이며, 동의 여부가 세션의 질·비용에
            영향을 주지 않습니다. 연구 협력 동의는 작업이 안정적으로 쌓인
            이후 별도 서면으로 진행됩니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* Session structure */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              회기 구조 · 간격 · 장기 계약
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              심층 트랙은 회기 간격·계약 기간 설계가 초기 결정 중 가장 중요한
              부분입니다. 비용의 유연성은{" "}
              <Link href="/pricing" className="text-primary-500 underline underline-offset-2">
                비용 페이지
              </Link>
              의 장기 계약 섹션에 상세히 기술되어 있습니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionStructure.map((s) => (
              <div
                key={s.number}
                className="bg-cream rounded-xl p-6"
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
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              우리가 참고하는 곳
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              본 심층 트랙과 슈퍼비전·연구 협력 설계는 다음 저자·기관의 흐름에
              기반합니다. 인용은 효과를 단정하기 위한 것이 아니라, 어떤 언어와
              전통 위에서 작업을 짰는지 공개하기 위한 것입니다.
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

      {/* FAQ */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              자주 받는 질문
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">
              심층 트랙·슈퍼비전·연구 협력에 대한 질문 중 가장 자주 듣는 내용에
              먼저 답을 드립니다. 구체적인 설계는 첫 무료 상담에서 함께 그려
              드립니다.
            </p>
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            {faqs.map((f) => (
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

      {/* Cross-links */}
      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-center">
            함께 살펴보시면 좋은 프로그램
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/emotional"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">정서·트라우마 중심 미술심리치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                증상 완화 단계에서 시작해 심층 트랙으로 전환되는 경우가 많은
                정서·트라우마 트랙입니다.
              </p>
            </Link>
            <Link
              href="/services/protective"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Specialty</p>
              <h3 className="mt-2 text-night font-semibold">보호·의료 환경 미술심리치료</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                기관 파트너십·의료 현장 연계에 관심 있는 전문가·연구자가 함께
                살펴볼 트랙입니다.
              </p>
            </Link>
            <Link
              href="/team"
              className="bg-white rounded-xl p-6 hover:-translate-y-1 transition-transform"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-wide uppercase">Team</p>
              <h3 className="mt-2 text-night font-semibold">대표 프로필·연구 관심</h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                슈퍼비전·연구 협력을 결정하시기 전에, 원장의 임상 배경과 연구
                관심을 먼저 확인해 보세요.
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
              오래 걸어가는 길을, 같이 그려 보시겠어요
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
              개인 심층 트랙·슈퍼비전·연구 협력 모두 첫 무료 상담에서 출발합니다.
              지금 관심 있는 방향과 과거의 치료·교육 경험을 편하게 나눠 주시면,
              적합한 구조를 함께 설계해 드립니다.
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
                슈퍼비전·연구 문의
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
