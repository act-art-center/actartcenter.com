import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "미술치료 비용 — 개인·그룹·아동·온라인·패키지 요금표",
  description:
    "ACT ART CENTER 미술심리치료 비용을 투명하게 공개합니다. 개인 50분 80,000~120,000원, 그룹 4~6인 40,000~60,000원, 아동 세션 80,000원부터. 8주 패키지·번아웃 워크숍 가격 포함.",
  keywords: [
    "미술치료 비용",
    "미술치료 가격",
    "상담료",
    "미술치료 1회 비용",
    "미술치료 패키지 할인",
    "기업 미술치료 비용",
  ],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    type: "website",
    title: "미술치료 비용 — 개인·그룹·아동·온라인·패키지 요금표",
    description: "투명한 비용 정책. 80,000원부터.",
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
    description: "투명한 비용 정책. 80,000원부터.",
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
  { service: "개인 미술심리치료 (아동·청소년)", duration: "40분 + 부모상담 10분", price: "80,000 ~ 100,000원", note: "" },
  { service: "그룹 프로그램", duration: "90분", price: "40,000 ~ 60,000원 / 인", note: "4~6인 소그룹" },
  { service: "온라인 미술치료", duration: "50분", price: "70,000 ~ 100,000원", note: "미술 키트 배송 포함" },
];

const packages = [
  { name: "마음유연성 8주 프로그램", sessions: "개인 8회기", price: "560,000 ~ 800,000원", note: "ACT 6프로세스 기반" },
  { name: "번아웃 탈출 워크숍", sessions: "그룹 4회 + 개인 1회", price: "250,000 ~ 350,000원", note: "" },
  { name: "부모-자녀 미술치료", sessions: "가족 세션 4회기", price: "320,000 ~ 400,000원", note: "" },
  { name: "기업 미술심리치료 워크숍", sessions: "반일 / 종일", price: "500,000 ~ 1,500,000원", note: "맞춤 설계" },
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
          {/* Acttie reading — 차분한 안내자 (좌측 상단, 데스크탑만) */}
          <CharacterIllustration
            name="acttie-reading"
            alt=""
            width={240}
            height={240}
            hideOnMobile
            animation="fade-in"
            className="absolute left-0 top-4 z-[1] w-[180px] xl:w-[220px] -translate-x-2 opacity-90"
          />

          <h2 className="relative z-[2] text-center mb-10 text-2xl lg:text-3xl font-bold tracking-tight">개별 세션</h2>
          <div className="relative z-[2] max-w-3xl mx-auto space-y-4">
            {pricing.map((item) => (
              <div key={item.service} className="bg-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <div>
                  <h3 className="text-night font-semibold">{item.service}</h3>
                  <p className="text-stone text-sm">{item.duration}{item.note && ` · ${item.note}`}</p>
                </div>
                <p className="text-primary-500 font-semibold tabular-nums whitespace-nowrap">{item.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-center mb-10 text-2xl lg:text-3xl font-bold tracking-tight">프로그램 패키지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold text-lg">{pkg.name}</h3>
                <p className="mt-2 text-stone text-sm">{pkg.sessions}{pkg.note && ` · ${pkg.note}`}</p>
                <p className="mt-3 text-primary-500 font-semibold tabular-nums">{pkg.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-stone text-sm">
            * 비용은 프로그램 내용과 치료사 경력에 따라 달라질 수 있습니다.
          </p>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">나에게 맞는 프로그램이 궁금하신가요?</h2>
            <p className="mt-4 text-white/80">첫 상담은 무료입니다.</p>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
