import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { SERVICES_ALL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 미술심리치료 서비스 — 개인·그룹·아동·온라인 프로그램",
  description:
    "성인 1:1, 아동·청소년, 그룹, 온라인, 그리고 보호·의료 환경과 트라우마·심층 탐색까지. ACT 수용전념치료 기반 맞춤 미술심리치료 서비스 7종을 안내합니다.",
  keywords: [
    "미술심리상담",
    "미술심리치료 서비스",
    "ACT 미술치료",
    "미술치료 프로그램",
    "개인 미술치료",
    "아동 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    title: "ACT 미술심리치료 서비스 — 7가지 맞춤 프로그램",
    description: "개인·그룹·아동·온라인·보호의료·트라우마·심층탐색. 상황에 맞는 ACT 미술치료를 찾으세요.",
    url: `${SITE_URL}/services`,
    images: [
      {
        url: "/og/services.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술심리치료 서비스 맵",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 미술심리치료 서비스 — 7가지 맞춤 프로그램",
    description: "성인·아동·그룹·온라인·보호의료·트라우마·심층탐색 전 영역.",
    images: ["/og/services.png"],
  },
};

const servicesHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
      ],
    },
    {
      "@type": "ItemList",
      name: "ACT 미술심리치료 서비스",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 7,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "개인 미술치료", url: `${SITE_URL}/services/individual` },
        { "@type": "ListItem", position: 2, name: "그룹 프로그램", url: `${SITE_URL}/services/group` },
        { "@type": "ListItem", position: 3, name: "아동·청소년 미술치료", url: `${SITE_URL}/services/child` },
        { "@type": "ListItem", position: 4, name: "온라인 미술치료", url: `${SITE_URL}/services/online` },
        { "@type": "ListItem", position: 5, name: "보호·의료 환경 미술심리치료", url: `${SITE_URL}/services/protective` },
        { "@type": "ListItem", position: 6, name: "정서·트라우마 중심 미술심리치료", url: `${SITE_URL}/services/emotional` },
        { "@type": "ListItem", position: 7, name: "심층 탐색·연구 기반 미술심리치료", url: `${SITE_URL}/services/depth` },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesHubSchema} />
      <PageHero
        title="ACT 미술심리치료 서비스"
        subtitle="그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다. 작품을 매개로 한 경험은 자각, 수용, 그리고 삶의 가치 인식으로 자연스럽게 확장됩니다."
        label="Services"
        imageSrc="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80"
        imageAlt="미술치료 서비스 공간"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "서비스", href: "/services" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      <SectionWrapper bg="cream">
        <Container>
          {/* Twins banner — 서비스 소개 도입 (비대칭 1/3 · 2/3 구성) */}
          <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="flex justify-center lg:justify-start">
              <CharacterIllustration
                name="twins-together"
                alt="Acttie와 Artty — 사고와 감정을 함께 돌보는 마스코트"
                width={320}
                height={320}
                animation="fade-in"
                className="w-[180px] md:w-[240px] lg:w-[280px]"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-3">Acttie &amp; Artty</p>
              <h2 className="text-night text-xl lg:text-2xl font-semibold leading-snug max-w-[46ch]">
                사고의 안내자 Acttie와 감정의 동반자 Artty가 당신의 치료 여정을 함께합니다.
              </h2>
              <p className="mt-3 text-charcoal/70 text-sm leading-relaxed max-w-[60ch]">
                아래 7가지 프로그램 중 상황에 맞는 길을 찾아보세요. 어디서부터 시작해야 할지 모르겠다면, 첫 상담에서 함께 안내해 드릴게요.
              </p>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {SERVICES_ALL.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-2">{service.titleEn}</p>
                  <h2 className="text-night text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-charcoal/80 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    aria-label={service.anchor}
                    className="mt-6 inline-flex items-center gap-1 text-secondary-500 font-medium hover:gap-2 transition-all"
                  >
                    자세히 알아보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              어떤 프로그램이 나에게 맞을까요?
            </h2>
            <p className="mt-4 text-white/80">첫 상담에서 함께 알아보겠습니다.</p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all duration-200"
            >
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
