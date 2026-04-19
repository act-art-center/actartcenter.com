import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "성인 1:1 개인 미술치료 — ACT 6프로세스 기반 미술심리치료",
  description:
    "50분 1:1 성인 개인 미술심리치료. ACT 수용전념치료 6가지 프로세스를 미술 활동과 통합해 불안·우울·번아웃·트라우마·관계 갈등을 다룹니다. 80,000원부터. 사전 예약제.",
  keywords: [
    "개인 미술치료",
    "성인 미술치료",
    "1:1 미술심리상담",
    "ACT 미술치료",
    "불안 미술치료",
    "번아웃 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/individual` },
  openGraph: {
    type: "website",
    title: "성인 1:1 개인 미술치료 — ACT 미술심리치료 연구소",
    description: "50분 1:1 개인 미술치료. ACT 6프로세스 기반 맞춤 설계.",
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
    title: "성인 1:1 개인 미술치료 — ACT 6프로세스 기반",
    description: "80,000원부터. 당신만의 속도와 색으로.",
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
      description: "ACT 수용전념치료 6프로세스 기반 1:1 맞춤 미술심리치료. 50분 세션.",
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

const features = [
  { title: "1:1 맞춤 프로그램", description: "개인의 상태와 목표에 따라 맞춤 설계된 ACT 기반 미술치료 프로그램을 진행합니다." },
  { title: "비언어적 표현", description: "말로 표현하기 어려운 감정과 경험을 미술 활동을 통해 안전하게 탐색합니다." },
  { title: "심리적 유연성 향상", description: "ACT의 6가지 핵심 프로세스를 미술 활동과 통합하여 심리적 유연성을 높입니다." },
  { title: "전문 미술치료사", description: "미술과 심리치료 모두에서 전문 학위와 임상 경험을 갖춘 치료사가 함께합니다." },
];

export default function IndividualPage() {
  return (
    <>
      <JsonLd data={individualServiceSchema} />
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
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Individual Art Therapy</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">성인 1:1 개인 미술치료 — ACT 6프로세스 기반</h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                ACT 6프로세스 기반 1:1 맞춤 미술심리치료. 당신만의 속도로, 당신만의 색으로 내면을 탐색합니다.
                불안, 우울, 스트레스, 트라우마 등 다양한 심리적 어려움을 미술 활동과 함께 다룹니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">1:1 맞춤</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">사전 예약제</span>
              </div>
              <p className="mt-4 text-primary-500 font-semibold tabular-nums">80,000 ~ 120,000원 / 회기</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200">
                예약 문의하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80" alt="개인 미술치료 작업" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">프로그램 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold">{f.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">첫 상담을 시작해보세요</h2>
            <p className="mt-4 text-white/80">맞춤 프로그램을 함께 설계합니다.</p>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              예약 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
