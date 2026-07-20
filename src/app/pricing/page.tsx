import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "미술치료 비용 — 원데이 클래스·개인·그룹·온라인·검사 요금표",
  description:
    "ACT ART CENTER 미술심리치료 비용을 투명하게 공개합니다. 원데이 클래스 50,000원, 아동·청소년·그룹 미술치료 및 TCI 기질검사·상담은 100,000원, 온라인 미술치료는 120,000원이며 성인 개인 미술치료와 그림검사 및 상담은 상담 후 안내합니다.",
  keywords: [
    "미술치료 비용",
    "미술치료 가격",
    "상담료",
    "미술치료 1회 비용",
    "원데이 클래스 비용",
    "그림검사 및 상담 비용",
    "미술치료 패키지 할인",
    "기업 미술치료 비용",
    "심리상담 비용 비급여",
  ],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    type: "website",
    title: "미술치료 비용 — 원데이 클래스·개인·그룹·온라인·검사 요금표",
    description: "원데이 클래스 50,000원, 아동·그룹·TCI 100,000원, 온라인 120,000원. 성인 개인 미술치료와 그림검사 및 상담은 상담 후 안내합니다.",
    url: `${SITE_URL}/pricing`,
    images: [
      {
        url: "/og/pricing.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술치료 비용 요금표",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "미술치료 비용 — 원데이 클래스·개인·그룹·온라인·검사 요금표",
    description: "원데이 클래스 50,000원, 아동·그룹·TCI 100,000원, 온라인 120,000원. 성인 개인 미술치료와 그림검사 및 상담은 상담 후 안내합니다.",
    images: ["/og/pricing.png"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "비용", item: `${SITE_URL}/pricing` },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/pricing#offers`,
      name: "ACT 미술치료 서비스 가격표",
      description:
        "오픈스튜디오 원데이 클래스, 성인·아동 개인 세션, TCI 기질검사 및 상담, 2~6인 소그룹, 온라인 세션, 그림검사 및 상담과 프로그램 패키지 비용 안내.",
      itemListElement: [
        {
          "@type": "Offer",
          name: "오픈스튜디오 원데이 클래스",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "50000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "개인 미술심리치료 (성인) 50분",
          description: "비용 변동 — 상담 후 안내",
          itemOffered: { "@id": `${SITE_URL}/services/individual#service` },
        },
        {
          "@type": "Offer",
          name: "개인 미술심리치료 (아동·청소년) 50분",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "100000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/child#service` },
        },
        {
          "@type": "Offer",
          name: "그룹 프로그램 (1인당) 90분",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "100000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/group#course-8weeks` },
        },
        {
          "@type": "Offer",
          name: "온라인 미술치료 50분 (키트 배송 포함)",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "120000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/online#service` },
        },
        {
          "@type": "Offer",
          name: "TCI 기질검사 및 상담",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "100000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "그림검사 및 상담 (HTP, KFD, BND, PITR 등)",
          description: "비용 변동 — 상담 후 안내",
        },
        {
          "@type": "Offer",
          name: "마음 유연성 8주 프로그램 (개인 8회)",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "800000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "번아웃 탈출 워크숍 (그룹 4회기, 1인)",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "350000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "부모-자녀 미술치료 (가족 4회, 1인)",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "350000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "기업 미술심리치료 워크숍",
          description: "프로그램 내용 및 기간에 따라 비용 변동",
        },
      ],
    },
  ],
};

const pricing = [
  {
    service: "오픈스튜디오 원데이 클래스",
    duration: "1인 · 1회",
    price: "50,000원",
    note: "가족, 친구와 함께 참여 가능",
    href: "/services/open-studio",
  },
  {
    service: "개인 미술심리치료 (성인)",
    duration: "50분",
    price: "변동",
    note: "",
    href: "/services/individual",
  },
  {
    service: "개인 미술심리치료 (아동·청소년)",
    duration: "40분 + 부모상담 10분",
    price: "100,000원",
    note: "",
    href: "/services/child",
  },
  {
    service: "그룹 프로그램",
    duration: "90분",
    price: "100,000원 / 인",
    note: "2~6인 소그룹",
    href: "/services/group",
  },
  {
    service: "온라인 미술치료",
    duration: "50분",
    price: "120,000원",
    note: "미술 키트 배송 포함",
    href: "/services/online",
  },
  {
    service: "TCI 기질검사 및 상담",
    duration: "검사 + 그림 + 해석 상담",
    price: "100,000원",
    note: "",
    href: "/services/drawing-assessment",
  },
  {
    service: "그림검사 및 상담",
    duration: "HTP, KFD, BND, PITR 등",
    price: "변동",
    note: "",
    href: "/services/drawing-assessment",
  },
];

const packages = [
  {
    name: "마음 유연성 8주 프로그램",
    sessions: "개인 8회기",
    price: "800,000원",
    note: "ACT 6프로세스 기반",
  },
  {
    name: "번아웃 탈출 워크숍",
    sessions: "그룹 4회기",
    price: "350,000원 / 1인",
    note: "",
  },
  { name: "부모-자녀 미술치료", sessions: "가족 세션 4회기", price: "350,000원 / 1인", note: "" },
  {
    name: "기업 미술심리치료 워크숍",
    sessions: "반일 / 종일",
    price: "변동",
    note: "맞춤 설계",
  },
];

/** 가격 안에 포함된 요소 — 표시 가격이 무엇을 커버하는지 투명하게 공개. */
const priceInclusions = [
  {
    title: "치료사 전문성",
    description:
      "미술학 석사와 학사를 통한 미술에 대한 깊은 통찰, 그리고 의학과 임상미술치료 박사과정 및 석사의 학문적 이해와 임상을 경험한 미술치료사가 직접 진행합니다.",
  },
  {
    title: "회기 전·후 준비 시간",
    description:
      "미술치료 세션 뒤에는 임상기록을 포함하여 다음 회기 계획, 그리고 필요시 슈퍼비전이 이어집니다. 이 모든 시간을 포함합니다.",
  },
  {
    title: "미술 매체와 공간",
    description:
      "물감·파스텔·종이·콜라주 매체와 깨끗한 작업 공간, 작품 보관·사진 기록까지 추가 비용 없이 포함됩니다.",
  },
  {
    title: "비밀유지 인프라",
    description:
      "기록은 치료사만 접근할 수 있는 안전한 방식으로 관리되며, 의료기록에 남지 않는 비급여 구조입니다.",
  },
];

/** 결제·환불 정책. */
const policy = [
  {
    title: "결제 수단",
    description:
      "현재 카드 결제는 지원하지 않습니다. 계좌이체로 진행해 주시며, 현금영수증과 세금계산서 발행이 모두 가능합니다. 세금계산서는 사업자 정보(상호·사업자등록번호·담당자 이메일)를 사전에 전달해 주시면 발급해 드립니다.",
  },
  {
    title: "보험 적용",
    description:
      "심리상담·미술치료는 한국 건강보험 급여 항목이 아니므로 실손보험 청구가 불가합니다. 일부 기업 복지 제도(EAP·심리지원 포인트)로 지원 가능한 경우가 있으니 소속 기관에 확인해 보시기를 권합니다.",
  },
  {
    title: "예약 변경·취소",
    description:
      "예약 24시간 전까지는 무료로 변경·취소가 가능합니다. 24시간 이내 변경은 회기의 50%, 당일 노쇼는 100%가 청구될 수 있습니다. 센터는 한 시간을 한 분만을 위해 준비하므로, 사전 알림에 양해를 부탁드립니다.",
  },
  {
    title: "패키지 중도 해지",
    description:
      "패키지 프로그램은 남은 회기 단가 정산 후 수수료 10%를 차감해 환불해 드립니다. 치료사 귀책으로 진행이 불가한 경우에는 수수료 없이 전액 환불됩니다.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <PageHero
        title="ACT 미술치료 비용 안내"
        subtitle="투명한 비용 정책을 지향합니다. 첫 상담에서 상황에 맞는 프로그램과 비용을 안내드립니다."
        label="Pricing"
        imageSrc="https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=1920&q=80"
        imageAlt="ACT ART CENTER 비용 안내"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "비용", href: "/pricing" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      {/* Individual pricing */}
      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <h2 className="relative z-10 text-center mb-10 text-2xl lg:text-3xl font-bold tracking-tight">
            개별 세션
          </h2>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            {pricing.map((item) => (
              <div
                key={item.service}
                className="bg-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div>
                  <h3 className="text-night font-semibold">
                    <Link
                      href={item.href}
                      className="rounded-sm underline-offset-4 transition-colors hover:text-primary-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    >
                      {item.service}
                    </Link>
                  </h3>
                  <p className="text-stone text-sm">
                    {item.duration}
                    {item.note && ` · ${item.note}`}
                  </p>
                </div>
                <p className="text-primary-500 font-semibold tabular-nums whitespace-nowrap">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-center mb-3 text-2xl lg:text-3xl font-bold tracking-tight">
            프로그램 패키지
          </h2>
          <p className="mx-auto max-w-2xl text-center text-charcoal/70 text-sm leading-relaxed">
            심리치료 연구에서는 세션 용량(회기 수)과 변화 사이에 뚜렷한 관계가 있다는 결과가 일관되게
            보고되어 왔습니다. 한두 번의 개입보다 일정 기간 이어지는 구조가 변화의 폭을 넓힙니다.
            패키지에는 이 연속성을 돕는 설계와 함께 회기당 환산 기준 약 10~17% 수준의 할인이 포함되어 있습니다.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold text-lg">{pkg.name}</h3>
                <p className="mt-2 text-stone text-sm">
                  {pkg.sessions}
                  {pkg.note && ` · ${pkg.note}`}
                </p>
                <p className="mt-3 text-primary-500 font-semibold tabular-nums">{pkg.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-stone text-sm">
            * 비용은 프로그램 내용 및 기간에 따라 달라질 수 있습니다.
          </p>
        </Container>
      </SectionWrapper>

      {/* Price philosophy */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
              Pricing Philosophy
            </p>
            <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
              무엇이 포함되나요
            </h2>
            <p className="mt-4 text-center text-charcoal/70 leading-relaxed">
              미술치료사의 회기를 준비하는 보이지 않는 정성과 노력, 수년간 쌓아 온 임상훈련,
              미술에 대한 깊은 이해와 경력이 함께 포함됩니다. 치료 비용이 무엇을 포괄하는지
              투명하게 밝혀 드립니다.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {priceInclusions.map((p) => (
                <article
                  key={p.title}
                  className="bg-white rounded-xl p-6"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <h3 className="text-night font-semibold">{p.title}</h3>
                  <p className="mt-3 text-charcoal/75 text-sm leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* First free consultation */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-10" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 mb-3">
              First Free Consultation
            </p>
            <h2 className="text-night text-xl lg:text-2xl font-bold tracking-tight">
              초기 상담 먼저 받아보시는 것이 좋아요
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              미술심리치료는 치료사와 참여자가 한 걸음씩 방향과 속도를 맞춰 가는 것이 실제 경험에
              가장 큰 영향을 주는 요소 중 하나로 꼽힙니다. 센터가 첫 상담을 무료로 마련한 이유는
              ‘이 치료사와 함께 여정을 시작해도 될지’를 먼저 확인하시고 신중한 선택을 하실 수 있게
              돕기 위해서입니다.
            </p>
            <ul className="mt-5 space-y-2.5 text-charcoal/80 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                현재의 어려움과 원하시는 변화 방향을 상담에서 함께 정리합니다.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                적합한 회기 수·간격·접근 방식을 제안해 드립니다.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                가능성만 열어두셔도 좋습니다.
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      {/* Payment & cancellation policy */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
              Payment & Policy
            </p>
            <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
              결제·보험·환불 안내
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {policy.map((p) => (
                <article
                  key={p.title}
                  className="bg-white rounded-xl p-6"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <h3 className="text-night font-semibold">{p.title}</h3>
                  <p className="mt-3 text-charcoal/75 text-sm leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-stone text-xs">
              정책에 대한 세부 사항은 첫 상담 시 서면으로 함께 확인해 드립니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              나에게 맞는 프로그램이 궁금하신가요?
            </h2>
            <p className="mt-4 text-white/80">부담 없이 상담을 받아보시고, 나에게 맞는 방향을 함께 찾으실 수 있습니다.</p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
