"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <SectionWrapper bg="paper" id="faq">
      <JsonLd data={faqSchema} />
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">자주 묻는 질문</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl px-6 data-[state=open]:shadow-[var(--shadow-sm)] transition-shadow"
                style={{ border: "1px solid rgba(196, 191, 183, 0.1)" }}
              >
                <AccordionTrigger className="text-left text-night font-medium py-5 hover:no-underline hover:text-primary-500 transition-colors [&[data-state=open]>svg]:rotate-180">
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
  );
}
