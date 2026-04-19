"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQ_ITEMS, FAQ_CATEGORIES, SITE_URL } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/faq#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
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
            ACT 미술치료 자주 묻는 질문
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            처음 오시는 분부터 세션 중간에 궁금하실 수 있는 질문까지, 여섯 주제로 정리했습니다.
            더 궁금하신 점은 편하게 문의해 주세요.
          </p>
        </Container>
      </section>

      {/* Breadcrumbs + category nav */}
      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "FAQ", href: "/faq" },
            ]}
            emitJsonLd={false}
          />
          <nav
            aria-label="FAQ 카테고리"
            className="mt-6 flex flex-wrap gap-2 justify-center"
          >
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white text-charcoal/75 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.2)" }}
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-10 max-w-3xl mx-auto space-y-14">
            {FAQ_CATEGORIES.map((cat) => {
              const items = FAQ_ITEMS.filter((f) => f.category === cat.id);
              if (items.length === 0) return null;
              return (
                <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-heading`}>
                  <header className="mb-5">
                    <h2
                      id={`${cat.id}-heading`}
                      className="text-night text-xl lg:text-2xl font-bold tracking-tight"
                    >
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-charcoal/65 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </header>
                  <Accordion className="space-y-3">
                    {items.map((item) => {
                      const globalIndex = FAQ_ITEMS.indexOf(item);
                      return (
                        <AccordionItem
                          key={globalIndex}
                          value={`faq-${globalIndex}`}
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
                      );
                    })}
                  </Accordion>
                </section>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-charcoal/70">
              답변을 찾지 못하셨거나, 내 상황에 대한 구체적 안내가 필요하신가요?
            </p>
            <p className="mt-2 text-charcoal/60 text-sm">
              첫 상담 30분은 무료입니다. 편안한 마음으로 말씀만 주시면, 센터가 먼저 들어 드립니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                첫 무료 상담 예약하기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 px-6 py-3 bg-white text-secondary-500 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.2)" }}
              >
                직접 문의하기
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
