"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Hero */}
      <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
          alt="자주 묻는 질문"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/30 to-night/10" />
        <Container className="relative z-10 pb-12 lg:pb-16 pt-32">
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">FAQ</p>
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            자주 묻는 질문
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            미술치료에 대해 궁금하신 점을 모았습니다. 더 궁금한 점은 편하게 문의해 주세요.
          </p>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Accordion className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl px-6"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.1)" }}
                >
                  <AccordionTrigger className="text-left text-night font-medium py-5 hover:no-underline hover:text-primary-500 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/80 text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper" className="py-16">
        <Container>
          <div className="text-center">
            <p className="text-charcoal/70">답변을 찾지 못하셨나요?</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-secondary-500 font-medium hover:gap-2 transition-all">
              직접 문의하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
