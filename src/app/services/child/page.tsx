import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "아동·청소년 미술치료 — 놀이 × ACT 통합 부모 상담 포함",
  description:
    "만 5세부터 참여하는 아동·청소년 미술심리치료. 놀이치료와 ACT 수용전념치료를 통합해 정서 불안·또래관계·학교적응·자존감·ADHD를 다룹니다. 매 세션 후 부모 상담 10분 포함, 80,000원부터.",
  keywords: [
    "아동 미술치료",
    "청소년 미술치료",
    "아동 심리상담",
    "ADHD 아동 미술치료",
    "놀이치료 미술치료",
    "학교 부적응 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/child` },
  openGraph: {
    type: "website",
    title: "아동·청소년 미술치료 — 놀이 × ACT 통합",
    description: "만 5세부터. 부모 상담 10분 포함. 정서불안·또래관계·ADHD·자존감 이슈.",
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
    title: "아동·청소년 미술치료 — 놀이 × ACT 통합",
    description: "만 5세부터. 부모 상담 10분 포함.",
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
      description: "놀이치료와 ACT 수용전념치료를 통합한 만 5세 이상 맞춤 미술심리치료. 부모 상담 포함.",
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

const areas = [
  { title: "정서 불안·위축", description: "불안, 공포, 분리불안 등 정서적 어려움을 미술 활동으로 안전하게 표현하고 다룹니다." },
  { title: "또래관계·학교적응", description: "사회성 어려움, 따돌림 경험, 학교 부적응 등을 탐색하고 대처 능력을 키웁니다." },
  { title: "자존감·자기표현", description: "자신감이 부족하거나 감정 표현이 어려운 아이들이 자기 표현의 통로를 찾도록 돕습니다." },
  { title: "ADHD·발달 지원", description: "주의력, 충동성 조절이 어려운 아이들을 위한 구조화된 미술치료 프로그램을 제공합니다." },
];

export default function ChildPage() {
  return (
    <>
      <JsonLd data={childServiceSchema} />
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
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Child & Adolescent</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">아동·청소년 미술치료 — 놀이와 ACT의 통합</h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                놀이와 ACT를 통합한 아동·청소년 맞춤 미술치료입니다.
                아이의 발달 단계에 맞춰 프로그램을 설계하며, 매 세션 후 부모 상담 10분이 포함됩니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">40분 + 부모상담 10분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">만 5세 이상</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">사전 예약제</span>
              </div>
              <p className="mt-4 text-primary-500 font-semibold tabular-nums">80,000 ~ 100,000원 / 회기</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200">
                예약 문의하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80" alt="아동 미술치료 작업" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          {/* Artty welcome — 좌측 상단 floating (데스크탑만) */}
          <CharacterIllustration
            name="artty-welcome"
            alt=""
            width={260}
            height={260}
            hideOnMobile
            animation="float"
            className="absolute left-0 top-0 z-[1] w-[200px] xl:w-[260px] -translate-x-4 -translate-y-2 opacity-90"
          />

          <h2 className="relative z-[2] text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">이런 아이에게 도움이 됩니다</h2>
          <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {areas.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold">{a.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-night text-xl font-semibold" >부모님께 안내드립니다</h2>
            <p className="mt-4 text-charcoal/80 text-sm leading-relaxed">
              아동 미술치료는 매 세션 후 10분간 부모 상담이 진행됩니다.
              아이의 치료 과정과 가정에서의 지원 방법을 함께 나눕니다.
              첫 상담은 부모님만 방문하셔서 아이의 상태를 상세히 나눠주시면 됩니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">우리 아이 상담이 필요하신가요?</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              예약 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
