import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 그룹 미술치료 — 4~6인 소그룹 마음유연성 8주 프로그램",
  description:
    "4~6인 소그룹으로 함께하는 ACT 미술치료 프로그램. 마음유연성 8주, 번아웃 탈출 워크숍, 테마별 단기 그룹 세 가지 옵션. 회기당 40,000원부터, 같은 고민을 나누는 치유의 시간.",
  keywords: [
    "그룹 미술치료",
    "집단 미술치료",
    "마음유연성 8주 프로그램",
    "번아웃 미술치료",
    "ACT 그룹 프로그램",
    "미술치료 워크숍",
  ],
  alternates: { canonical: `${SITE_URL}/services/group` },
  openGraph: {
    type: "website",
    title: "ACT 그룹 미술치료 — 4~6인 소그룹 프로그램",
    description: "마음유연성 8주 + 번아웃 워크숍 + 테마별 단기 그룹.",
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
    description: "같은 고민, 함께 치유. 회기당 40,000원부터.",
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
      name: "마음유연성 8주 ACT 미술치료 프로그램",
      description: "ACT 6프로세스를 8회기에 걸쳐 미술 활동으로 탐색하는 구조화된 그룹 프로그램",
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
      description: "직장인을 위한 4주 그룹 + 개인 1회 ACT 미술치료 워크숍",
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "250000",
        priceCurrency: "KRW",
      },
    },
  ],
};

const programs = [
  { title: "마음유연성 8주 프로그램", description: "ACT 6프로세스를 8회기에 걸쳐 미술 활동으로 탐색하는 구조화된 프로그램입니다.", duration: "주 1회, 90분 × 8회", price: "560,000 ~ 800,000원" },
  { title: "번아웃 탈출 워크숍", description: "직장인을 위한 스트레스 관리와 정서 회복 프로그램입니다.", duration: "주 1회, 90분 × 4회 + 개인 1회", price: "250,000 ~ 350,000원" },
  { title: "테마별 단기 그룹", description: "자존감, 관계, 감정 표현 등 주제별로 구성되는 소그룹 프로그램입니다.", duration: "90분 × 4~6회", price: "별도 안내" },
];

export default function GroupPage() {
  return (
    <>
      <JsonLd data={groupServiceSchema} />
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
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Group Program</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">ACT 그룹 미술치료 프로그램</h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                4~6인 소그룹으로 함께 나누고 성장하는 미술치료 프로그램입니다.
                같은 고민을 가진 사람들과 미술을 통해 소통하며, 서로의 경험에서 치유의 힘을 발견합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">90분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">4~6인 소그룹</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">사전 예약제</span>
              </div>
              <p className="mt-4 text-primary-500 font-semibold tabular-nums">40,000 ~ 60,000원 / 회기 / 인</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80" alt="그룹 미술치료 활동" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">진행 중인 프로그램</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {programs.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <div>
                  <h3 className="text-night font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-charcoal/70 text-sm">{p.description}</p>
                  <p className="mt-2 text-stone text-xs">{p.duration}</p>
                </div>
                <p className="text-primary-500 font-semibold tabular-nums whitespace-nowrap text-sm">{p.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">그룹 프로그램에 참여하고 싶으신가요?</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              참여 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
