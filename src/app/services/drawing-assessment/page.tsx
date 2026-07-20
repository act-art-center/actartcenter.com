import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_URL } from "@/lib/constants";

const path = "/services/drawing-assessment";

export const metadata: Metadata = {
  title: "그림검사 및 상담 — HTP·KFD·BND·PITR",
  description:
    "HTP, KFD, BND, PITR 등 그림검사와 해석 상담을 통해 마음과 관계의 경험을 함께 살핍니다. 그림의 맥락을 충분한 대화와 함께 신중하게 이해하는 ACT ART CENTER의 검사·상담 안내입니다.",
  keywords: ["그림검사", "HTP 검사", "KFD 검사", "BND 검사", "PITR 검사", "그림검사 해석 상담"],
  alternates: { canonical: `${SITE_URL}${path}` },
  openGraph: {
    type: "website",
    title: "그림검사 및 상담 | ACT ART CENTER",
    description: "그림검사와 충분한 대화를 통해 마음과 관계의 경험을 신중하게 살핍니다.",
    url: `${SITE_URL}${path}`,
    images: [{ url: "/images/drawing-assessment-consultation.jpg", width: 1200, height: 750, alt: "그림검사 및 상담" }],
  },
};

const assessments = [
  { name: "HTP", title: "집·나무·사람 그림", description: "자기 경험, 정서, 환경과 관계를 이야기할 수 있도록 돕는 그림검사입니다." },
  { name: "KFD", title: "동적 가족화", description: "가족이 함께 무언가를 하는 장면을 통해 관계 경험과 상호작용을 살펴봅니다." },
  { name: "BND", title: "새 둥지화", description: "보호, 돌봄, 소속감과 관련한 경험을 그림과 대화를 통해 살펴봅니다." },
  { name: "PITR", title: "빗속의 사람 그림", description: "스트레스를 경험하고 대처하는 방식을 그림과 함께 이야기합니다." },
];

const flow = [
  { number: "01", title: "상담 주제 확인", description: "현재 궁금한 점과 생활 맥락, 상담에서 살펴보고 싶은 내용을 충분히 나눕니다." },
  { number: "02", title: "그림검사 진행", description: "상담 주제와 연령에 맞추어 필요한 그림검사를 선택하고 편안한 속도로 진행합니다." },
  { number: "03", title: "그림에 관한 대화", description: "그림을 그린 분의 설명과 느낌을 중심으로 작품의 장면, 관계, 상징을 함께 살펴봅니다." },
  { number: "04", title: "해석 상담", description: "그림, 대화, 생활사와 현재 경험을 종합하여 이해한 내용을 신중하게 나눕니다." },
];

const faq = [
  { question: "그림을 잘 그려야 하나요?", answer: "그림 실력과 관계없이 참여할 수 있습니다. 표현의 완성도보다 그리는 과정과 그림에 관해 나누는 이야기를 소중하게 살핍니다." },
  { question: "한 가지 검사만 진행하나요?", answer: "상담에서 궁금한 점과 참여자의 연령, 현재 상태에 따라 필요한 검사를 함께 정합니다. 모든 검사를 한 번에 진행하는 방식은 사용하지 않습니다." },
  { question: "그림만 보고 마음을 알 수 있나요?", answer: "그림의 의미는 그린 분의 설명, 생활사, 현재 경험과 함께 이해합니다. 충분한 대화를 통해 신중하게 해석합니다." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "그림검사 및 상담", item: `${SITE_URL}${path}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: "그림검사 및 상담",
      alternateName: "Drawing Assessment and Consultation",
      description: "HTP, KFD, BND, PITR 등 그림검사와 충분한 대화를 통해 마음과 관계의 경험을 신중하게 살피는 상담",
      url: `${SITE_URL}${path}`,
      image: `${SITE_URL}/images/drawing-assessment-consultation.jpg`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", priceCurrency: "KRW", description: "검사 구성과 상담 시간에 따라 비용 변동", url: `${SITE_URL}/booking` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

export default function DrawingAssessmentPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <Breadcrumbs items={[{ name: "홈", href: "/" }, { name: "서비스", href: "/services" }, { name: "그림검사 및 상담", href: path }]} emitJsonLd={false} />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Drawing Assessment & Consultation</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">그림검사 및 상담</h1>
              <p className="mt-6 text-charcoal/80 leading-relaxed">HTP, KFD, BND, PITR 등 그림검사와 해석 상담을 통해 마음과 관계의 경험을 함께 살핍니다. 그림의 해석은 충분한 대화를 통해 신중하게 이루어집니다.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['HTP', 'KFD', 'BND', 'PITR'].map((item) => <span key={item} className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">{item}</span>)}
              </div>
              <p className="mt-5 text-sm text-charcoal/60">검사 구성에 따른 비용은 <Link href="/pricing" className="text-primary-500 underline underline-offset-2">세션 비용 안내</Link>를 참고해 주세요.</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">검사·상담 문의하기</Link>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white"><Image src="/images/drawing-assessment-consultation.jpg" alt="미술치료사와 한 사람이 그림을 함께 살펴보며 상담하는 장면" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" priority /></div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">함께 살펴볼 수 있는 그림검사</h2>
          <p className="mt-4 text-charcoal/70 text-sm leading-relaxed max-w-2xl">상담 주제에 필요한 검사를 선택합니다. 각 그림의 의미는 그린 분의 이야기와 현재 경험 안에서 이해합니다.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{assessments.map((item) => <div key={item.name} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}><p className="text-primary-500 text-xs font-bold tracking-wide">{item.name}</p><h3 className="mt-2 text-night font-semibold">{item.title}</h3><p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.description}</p></div>)}</div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">검사와 상담의 흐름</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{flow.map((item) => <div key={item.number} className="bg-cream rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}><div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">{item.number}</div><h3 className="mt-4 text-night font-semibold">{item.title}</h3><p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.description}</p></div>)}</div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">자주 묻는 질문</h2>
          <div className="mt-8 max-w-3xl space-y-4">{faq.map((item) => <div key={item.question} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}><h3 className="text-night font-semibold">{item.question}</h3><p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{item.answer}</p></div>)}</div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container><div className="text-center"><h2 className="text-white text-2xl lg:text-3xl font-bold">궁금한 점을 함께 살펴봅니다</h2><p className="mt-4 text-white/80 text-sm">상담에서 알고 싶은 내용과 참여자의 연령을 남겨 주시면 적절한 검사 구성을 안내해 드립니다.</p><Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-colors">그림검사 및 상담 문의하기</Link></div></Container>
      </SectionWrapper>
    </>
  );
}
