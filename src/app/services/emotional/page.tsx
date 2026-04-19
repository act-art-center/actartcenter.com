import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "정서·트라우마 중심 미술심리치료",
  description:
    "삶의 전환기에 놓인 분들을 위한 ACT 미술심리치료입니다. 만성 스트레스, 불안, 정서 소진, 번아웃, 관계 갈등, 상실, 트라우마 경험을 미술이라는 안전한 매개로 다룹니다. 말로 표현하기 어려운 감정을 색과 형태로 풀어내는 첫 상담을 무료로 안내드립니다.",
  keywords: [
    "트라우마 미술치료",
    "번아웃 미술치료",
    "상실 애도 미술치료",
    "정서 미술치료",
    "관계 갈등 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services/emotional` },
  openGraph: {
    type: "website",
    title: "정서·트라우마 중심 미술심리치료",
    description: "삶의 전환기, 번아웃, 상실, 트라우마를 미술로 다룹니다.",
    url: `${SITE_URL}/services/emotional`,
    images: [
      {
        url: "/og/services-emotional.png",
        width: 1200,
        height: 630,
        alt: "정서·트라우마 중심 미술심리치료",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "정서·트라우마 중심 미술심리치료",
    description: "삶의 전환기, 번아웃, 상실, 트라우마를 미술로 다룹니다.",
    images: ["/og/services-emotional.png"],
  },
};

const emotionalServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "정서·트라우마 중심 미술심리치료", item: `${SITE_URL}/services/emotional` },
      ],
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${SITE_URL}/services/emotional#service`,
      name: "정서·트라우마 중심 미술심리치료",
      alternateName: "Emotional & Trauma-Focused Art Therapy",
      description: "삶의 전환기, 만성 스트레스, 정서 소진, 상실, 트라우마 경험에 대한 ACT 미술심리치료.",
      url: `${SITE_URL}/services/emotional`,
      image: `${SITE_URL}/og/services-emotional.png`,
      therapyType: "Art Therapy",
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const areas = [
  { title: "삶의 전환기", description: "이직, 이별, 이사, 퇴직 등 삶의 큰 변화 속에서 느끼는 불안과 혼란을 탐색합니다." },
  { title: "만성 스트레스·정서 소진", description: "번아웃, 만성 피로, 감정적 무감각 상태에서 자신의 내면과 다시 연결합니다." },
  { title: "관계 갈등·상실·트라우마", description: "말로 표현하기 어려운 깊은 상처를 미술 활동을 통해 안전하게 다룹니다." },
];

export default function EmotionalPage() {
  return (
    <>
      <JsonLd data={emotionalServiceSchema} />
      <section className="relative bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "서비스", href: "/services" },
                { name: "정서·트라우마 중심 미술심리치료", href: "/services/emotional" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Emotional & Trauma-Focused</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                정서·트라우마 중심 미술심리치료
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                삶의 전환기에 놓인 분들을 위한 치료입니다.
                만성 스트레스, 불안, 정서 소진, 관계 갈등, 상실, 트라우마 경험을
                미술이라는 안전한 매개를 통해 다룹니다.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=800&q=80" alt="정서적 치유를 위한 미술 활동" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">대상 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {areas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold text-lg">{area.title}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">마음이 무거우신가요?</h2>
            <p className="mt-4 text-white/80">첫 상담에서 함께 이야기 나눠보겠습니다.</p>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
