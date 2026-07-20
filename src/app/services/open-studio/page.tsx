import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_URL } from "@/lib/constants";

const path = "/services/open-studio";

export const metadata: Metadata = {
  title: "오픈스튜디오 원데이 클래스 — 열린 미술 시간",
  description:
    "개인 세션 또는 가족·친구와 함께 참여할 수 있는 ACT ART CENTER의 오픈스튜디오 원데이 클래스입니다. 미술 매체를 고르고 각자의 속도로 표현하는 1회 열린 미술 시간을 안내합니다.",
  keywords: ["오픈스튜디오 원데이 클래스", "미술 원데이클래스", "가족 미술 활동", "친구 미술 체험", "성인 미술 체험"],
  alternates: { canonical: `${SITE_URL}${path}` },
  openGraph: {
    type: "website",
    title: "오픈스튜디오 원데이 클래스 | ACT ART CENTER",
    description: "개인 세션 및 가족, 친구와 함께 참여할 수 있는 열린 미술 시간입니다.",
    url: `${SITE_URL}${path}`,
    images: [{ url: "/images/open-studio-one-day-class.jpg", width: 1200, height: 750, alt: "오픈스튜디오 원데이 클래스" }],
  },
};

const flow = [
  { number: "01", title: "맞이하기", description: "참여 목적과 오늘의 마음을 간단히 나누고 편안하게 작업할 자리를 정합니다." },
  { number: "02", title: "미술 매체 만나기", description: "종이, 드로잉 도구, 물감, 콜라주, 점토 등 준비된 미술 매체를 살펴보고 손이 가는 것을 고릅니다." },
  { number: "03", title: "각자의 속도로 표현하기", description: "정해진 정답 없이 개인 또는 함께 온 분들과 각자의 속도로 표현합니다. 미술치료사가 필요한 만큼 곁에서 안내합니다." },
  { number: "04", title: "작품 바라보기", description: "완성된 작품과 작업 중 느낀 점을 함께 바라보고 오늘의 경험을 차분히 마무리합니다." },
];

const audiences = [
  "혼자만의 미술 시간을 편안하게 경험하고 싶은 분",
  "가족과 함께 한 작품 또는 각자의 작품을 만들고 싶은 분",
  "친구와 대화하며 특별한 미술 경험을 나누고 싶은 분",
  "미술 경험이 적어도 부담 없이 시작하고 싶은 분",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "오픈스튜디오 원데이 클래스", item: `${SITE_URL}${path}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: "오픈스튜디오 원데이 클래스",
      alternateName: "Open Studio One-Day Class",
      description: "개인 세션 및 가족, 친구와 함께 참여할 수 있는 열린 미술 시간",
      url: `${SITE_URL}${path}`,
      image: `${SITE_URL}/images/open-studio-one-day-class.jpg`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", price: "50000", priceCurrency: "KRW", description: "1인 · 1회 50,000원", url: `${SITE_URL}/booking` },
    },
  ],
};

export default function OpenStudioPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <Breadcrumbs
            items={[{ name: "홈", href: "/" }, { name: "서비스", href: "/services" }, { name: "오픈스튜디오 원데이 클래스", href: path }]}
            emitJsonLd={false}
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Open Studio One-Day Class</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">오픈스튜디오 원데이 클래스</h1>
              <p className="mt-6 text-charcoal/80 leading-relaxed">
                개인 세션 및 가족, 친구와 함께 참여도 가능한 열린 미술 시간입니다. 준비된 미술 매체를 만나고, 각자의 속도로 표현하며, 작품에 담긴 오늘의 경험을 함께 바라봅니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['개인·가족·친구 참여', '1인 · 1회', '미술 경험 무관'].map((item) => <span key={item} className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">{item}</span>)}
              </div>
              <p className="mt-5 text-sm text-charcoal/60">비용은 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">세션 비용 안내</Link>에서 확인하실 수 있습니다.</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">참여 문의하기</Link>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
              <Image src="/images/open-studio-one-day-class.jpg" alt="이젤 앞에서 그림을 그리는 오픈스튜디오 원데이 클래스 일러스트" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">이런 분과 함께합니다</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {audiences.map((item) => <div key={item} className="bg-white rounded-xl p-5 text-sm text-charcoal/80 leading-relaxed" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>{item}</div>)}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">오픈스튜디오의 흐름</h2>
          <p className="mt-4 text-charcoal/70 text-sm leading-relaxed max-w-2xl">참여하는 분의 속도와 당일의 상태에 따라 순서와 미술 매체는 편안하게 조율합니다.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((item) => <div key={item.number} className="bg-cream rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}><div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">{item.number}</div><h3 className="mt-4 text-night font-semibold">{item.title}</h3><p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.description}</p></div>)}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center"><h2 className="text-white text-2xl lg:text-3xl font-bold">열린 미술 시간을 함께해 보세요</h2><p className="mt-4 text-white/80 text-sm">참여 인원과 희망 일정을 남겨 주시면 가능한 시간을 안내해 드립니다.</p><Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-colors">오픈스튜디오 문의하기</Link></div>
        </Container>
      </SectionWrapper>
    </>
  );
}
