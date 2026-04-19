import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "온라인 미술치료 — 전국·해외에서 화상으로 ACT 미술심리상담",
  description:
    "전국 어디서나 Zoom으로 참여하는 ACT 온라인 미술치료. 세션 전 미술 재료 키트를 자택 배송하여 대면과 동일한 깊이의 치료를 제공합니다. 서울 외 지역·해외 거주자 환영. 50분 70,000원부터.",
  keywords: [
    "온라인 미술치료",
    "비대면 미술치료",
    "화상 미술상담",
    "Zoom 미술치료",
    "재택 미술치료",
    "해외 한국인 상담",
  ],
  alternates: { canonical: `${SITE_URL}/services/online` },
  openGraph: {
    type: "website",
    title: "온라인 미술치료 — Zoom 화상 + 미술 키트 배송",
    description: "전국·해외 어디서나. 50분 70,000원부터.",
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
    title: "온라인 미술치료 — Zoom + 미술 키트 배송",
    description: "전국·해외 어디서나. ACT 기반 화상 미술심리상담.",
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
      alternateName: ["Online Art Therapy", "비대면 미술치료"],
      description: "Zoom 화상으로 진행되는 ACT 기반 미술심리치료. 미술 재료 키트 배송 포함.",
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
        description: "50분 세션 70,000~100,000원 (미술 키트 배송 포함)",
      },
    },
  ],
};

const steps = [
  { number: "01", title: "예약 및 사전 상담", description: "온라인으로 예약 후, 간단한 사전 상담을 진행합니다." },
  { number: "02", title: "미술 키트 배송", description: "세션에 필요한 미술 재료 키트를 자택으로 배송합니다." },
  { number: "03", title: "화상 세션 진행", description: "Zoom으로 치료사와 만나 미술 활동을 함께 진행합니다." },
  { number: "04", title: "후속 안내", description: "세션 후 일상에서의 실천 과제와 다음 세션을 안내합니다." },
];

export default function OnlinePage() {
  return (
    <>
      <JsonLd data={onlineServiceSchema} />
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
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Online Art Therapy</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">온라인 미술치료 — 전국·해외에서 Zoom으로 만나는 ACT 세션</h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                전국 어디서나 화상으로 만나는 ACT 미술치료입니다.
                미술 재료 키트를 사전 배송하여 대면 상담과 동일한 깊이의 치료를 제공합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">화상 (Zoom)</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">키트 배송 포함</span>
              </div>
              <p className="mt-4 text-primary-500 font-semibold tabular-nums">70,000 ~ 100,000원 / 회기</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200">
                예약 문의하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&q=80" alt="온라인 미술치료 환경" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">진행 과정</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.number} className="bg-white rounded-xl p-6 text-center" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <div className="w-10 h-10 mx-auto rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">{s.number}</div>
                <h3 className="mt-3 text-night font-semibold">{s.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto bg-primary-50 rounded-2xl p-8">
            <h2 className="text-night text-xl font-semibold text-center" >이런 분께 추천합니다</h2>
            <ul className="mt-6 space-y-3 text-charcoal/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                서울 외 지역에 거주하시는 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                이동이 어렵거나 시간이 제한적인 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                익숙한 공간에서 편안하게 상담받고 싶은 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                해외 거주 한국인
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">어디서든 시작할 수 있습니다</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              온라인 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
