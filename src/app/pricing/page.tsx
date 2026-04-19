import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "미술치료 비용 — 개인·그룹·아동·온라인·패키지 요금표",
  description:
    "ACT ART CENTER 미술심리치료 비용을 투명하게 공개합니다. 개인 50분 80,000~120,000원, 그룹 4~6인 40,000~60,000원, 아동 세션 80,000원부터. 가격 철학·결제 수단·환불 규정·한국 심리상담 시장 참고치까지 함께 안내합니다.",
  keywords: [
    "미술치료 비용",
    "미술치료 가격",
    "상담료",
    "미술치료 1회 비용",
    "미술치료 패키지 할인",
    "기업 미술치료 비용",
    "심리상담 비용 비급여",
  ],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    type: "website",
    title: "미술치료 비용 — 개인·그룹·아동·온라인·패키지 요금표",
    description: "투명한 비용 정책. 80,000원부터. 결제·환불·보험 안내 포함.",
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
    title: "미술치료 비용 — 개인·그룹·아동·온라인 요금표",
    description: "투명한 비용 정책. 80,000원부터. 결제·환불·보험 안내 포함.",
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
        "성인·아동 개인 세션, 4~6인 소그룹, 온라인 세션, 8주 패키지, 번아웃 워크숍, 가족 세션, 기업 워크숍의 표시 가격 범위.",
      itemListElement: [
        {
          "@type": "Offer",
          name: "개인 미술심리치료 (성인) 50분",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "80000",
            maxPrice: "120000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/individual#service` },
        },
        {
          "@type": "Offer",
          name: "개인 미술심리치료 (아동·청소년) 50분",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "80000",
            maxPrice: "100000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/child#service` },
        },
        {
          "@type": "Offer",
          name: "그룹 프로그램 (1인당) 90분",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "40000",
            maxPrice: "60000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/group#course-8weeks` },
        },
        {
          "@type": "Offer",
          name: "온라인 미술치료 50분 (키트 배송 포함)",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "70000",
            maxPrice: "100000",
            priceCurrency: "KRW",
          },
          itemOffered: { "@id": `${SITE_URL}/services/online#service` },
        },
        {
          "@type": "Offer",
          name: "마음유연성 8주 프로그램 (개인 8회)",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "560000",
            maxPrice: "800000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "번아웃 탈출 워크숍 (그룹 4 + 개인 1)",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "250000",
            maxPrice: "350000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "부모-자녀 미술치료 (가족 4회)",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "320000",
            maxPrice: "400000",
            priceCurrency: "KRW",
          },
        },
        {
          "@type": "Offer",
          name: "기업 미술심리치료 워크숍",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "500000",
            maxPrice: "1500000",
            priceCurrency: "KRW",
          },
        },
      ],
    },
  ],
};

const pricing = [
  { service: "개인 미술심리치료 (성인)", duration: "50분", price: "80,000 ~ 120,000원", note: "" },
  {
    service: "개인 미술심리치료 (아동·청소년)",
    duration: "40분 + 부모상담 10분",
    price: "80,000 ~ 100,000원",
    note: "",
  },
  { service: "그룹 프로그램", duration: "90분", price: "40,000 ~ 60,000원 / 인", note: "4~6인 소그룹" },
  { service: "온라인 미술치료", duration: "50분", price: "70,000 ~ 100,000원", note: "미술 키트 배송 포함" },
];

const packages = [
  {
    name: "마음유연성 8주 프로그램",
    sessions: "개인 8회기",
    price: "560,000 ~ 800,000원",
    note: "ACT 6프로세스 기반",
  },
  {
    name: "번아웃 탈출 워크숍",
    sessions: "그룹 4회 + 개인 1회",
    price: "250,000 ~ 350,000원",
    note: "",
  },
  { name: "부모-자녀 미술치료", sessions: "가족 세션 4회기", price: "320,000 ~ 400,000원", note: "" },
  {
    name: "기업 미술심리치료 워크숍",
    sessions: "반일 / 종일",
    price: "500,000 ~ 1,500,000원",
    note: "맞춤 설계",
  },
];

/** 가격 안에 포함된 요소 — 표시 가격이 무엇을 커버하는지 투명하게 공개. */
const priceInclusions = [
  {
    title: "치료사 전문성",
    description:
      "차의과학대학교 미술치료학 석사·박사 과정의 학문적 훈련과 한국미술치료학회 정회원 자격을 갖춘 치료사가 직접 진행합니다.",
  },
  {
    title: "회기 전·후 준비 시간",
    description:
      "50분 세션 뒤에는 임상 기록·다음 회기 설계·필요 시 슈퍼비전이 이어집니다. 표시 가격은 이 모든 시간을 포함합니다.",
  },
  {
    title: "미술 재료와 공간",
    description:
      "물감·파스텔·종이·콜라주 재료와 깨끗한 작업 공간, 작품 보관·사진 기록까지 추가 비용 없이 포함됩니다.",
  },
  {
    title: "비밀유지 인프라",
    description:
      "기록은 치료사만 접근할 수 있는 안전한 방식으로 관리되며, 의료기록에 남지 않는 비급여 구조입니다.",
  },
];

/** 한국 심리상담 시장의 일반 범위 (비급여, 센터별 편차 큼). */
const marketReference = [
  {
    label: "심리상담 (민간 센터, 50분)",
    range: "약 80,000 ~ 200,000원",
    source: "서울·수도권 민간 심리상담 센터 공개 가격의 일반 범위(비급여). 협회 차원의 공식 수가 고시는 존재하지 않으며, 기관·상담사 경력에 따라 편차가 큽니다.",
  },
  {
    label: "정신건강의학과 외래 진료 (건강보험)",
    range: "1회 약 5,000 ~ 30,000원 (초진·본인부담 기준)",
    source: "건강보험심사평가원 수가 체계 기준. 진단·약물 처방 중심으로 비급여 상담과는 성격이 다릅니다.",
  },
  {
    label: "지역 정신건강복지센터",
    range: "대부분 무료 또는 저비용",
    source: "보건복지부 국가 정신건강 증진 시스템. 대기자 많고 회기 수 제한.",
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
                  <h3 className="text-night font-semibold">{item.service}</h3>
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
            * 비용은 프로그램 내용과 치료사 경력에 따라 달라질 수 있습니다.
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
              표시 가격 안에 무엇이 들어 있는가
            </h2>
            <p className="mt-4 text-center text-charcoal/70 leading-relaxed">
              심리치료의 가격은 단지 ‘50분의 대화값’이 아닙니다. 한 회기를 준비하는 보이지 않는
              시간과, 수년간 쌓아 온 임상 훈련이 함께 가격을 구성합니다. 지불하시는 비용이 무엇을
              포괄하는지 투명하게 밝혀 드립니다.
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
              첫 30분 무료 상담, 왜 마련되어 있는가
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              심리치료는 치료사와의 ‘맞음’ 이 실제 효과에 가장 큰 영향을 주는 요소 중 하나로 꼽힙니다.
              맞지 않는 치료사와의 장기 계약은 비용과 시간 모두에 손실이 됩니다. 센터가 첫 상담을 무료로
              마련한 이유는, 가격을 미끼로 삼기 위해서가 아니라 ‘이 치료사와 함께 여정을 시작해도 될지’
              를 먼저 확인하실 수 있게 하기 위해서입니다.
            </p>
            <ul className="mt-5 space-y-2.5 text-charcoal/80 text-sm">
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                현재의 어려움과 원하시는 변화 방향을 30분간 함께 정리합니다.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                적합한 회기 수·간격·접근 방식을 제안해 드립니다.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                결정은 바로 하지 않으셔도 됩니다. 가능성만 열어두고 돌아가셔도 좋습니다.
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      {/* Market reference */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
              Market Reference
            </p>
            <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
              한국 심리상담 시장 가격 참고
            </h2>
            <p className="mt-4 text-center text-charcoal/70 leading-relaxed">
              센터의 가격을 비교해 보실 수 있도록, 국내에서 흔히 접할 수 있는 세 유형의 일반 범위를
              함께 정리했습니다. 각 유형은 비용뿐 아니라 ‘무엇을 위한 서비스인가’가 다르다는 점을
              참고해 주세요.
            </p>
            <div className="mt-8 space-y-4">
              {marketReference.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-xl p-5"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-night font-semibold">{m.label}</h3>
                    <p className="text-primary-500 font-semibold tabular-nums">{m.range}</p>
                  </div>
                  <p className="mt-2 text-stone text-xs leading-relaxed">{m.source}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-stone text-xs leading-relaxed">
              ※ 위 수치는 공개 정보에 기반한 일반적 참고치이며, 개별 기관·상담사에 따라 차이가 큽니다.
              광고·홍보 목적의 비교가 아니라 내담자의 합리적 선택을 돕기 위한 정보로 제공합니다.
            </p>
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
            <p className="mt-4 text-white/80">첫 상담 30분은 무료입니다.</p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
