"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";
import { buildFaqPage, buildGraph } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqSectionProps {
  /**
   * FAQPage JSON-LD 를 이 컴포넌트에서 내보낼지 여부.
   *
   * ⚠️ 기본값은 **false** (A2 감사 P0 — FAQPage 중복 방지).
   * - 홈 (`/`) 에서 이 컴포넌트를 재사용할 때는 `false` 로 유지해 `/faq` 와
   *   중복되지 않게 한다.
   * - `/faq` 페이지는 본 컴포넌트를 재사용하지 않고 `page.tsx` 에서 직접
   *   `buildFaqPage` 로 schema 를 주입한다.
   */
  emitJsonLd?: boolean;
}

/**
 * 홈 섹션에서는 대표 질문만 간결하게 노출합니다. 전체 FAQ 는 `/faq` 페이지에서 카테고리별로
 * 확인할 수 있으며, 카테고리별 맨 앞 질문 6개를 하이라이트로 선택합니다.
 */
const HIGHLIGHT_QUESTIONS = [
  "미술을 못해도 괜찮나요?",
  "첫 상담은 무료라고 들었는데 무엇을 하나요?",
  "몇 회기 정도 받아야 효과가 있나요?",
  "상담 비용은 얼마인가요?",
  "ACT란 무엇인가요?",
  "아이가 몇 살부터 가능한가요?",
] as const;

const HIGHLIGHTED_ITEMS = HIGHLIGHT_QUESTIONS.map(
  (q) => FAQ_ITEMS.find((item) => item.question === q),
).filter((item): item is (typeof FAQ_ITEMS)[number] => Boolean(item));

export function FaqSection({ emitJsonLd = false }: FaqSectionProps = {}) {
  const schema = emitJsonLd
    ? buildGraph(buildFaqPage(HIGHLIGHTED_ITEMS.map((i) => ({ q: i.question, a: i.answer }))))
    : null;

  return (
    <SectionWrapper bg="paper" id="faq">
      {schema ? <JsonLd data={schema} /> : null}
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">자주 묻는 질문</h2>
          <p className="mt-4 text-charcoal/70 text-base">
            미술치료를 고민하시는 분들이 가장 자주 묻는 질문 6가지입니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion className="space-y-2">
            {HIGHLIGHTED_ITEMS.map((item, i) => (
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

          {/* Cross-links — FAQ → /faq, contact, booking (B2 §14.5 anchor quality) */}
          <div className="mt-10 text-center space-y-2">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              <Link
                href="/faq"
                className="text-primary-500 font-medium hover:underline underline-offset-4"
              >
                미술치료 FAQ 전체 보기
              </Link>
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              여기에 없는 질문이 있으신가요?{" "}
              <Link
                href="/contact"
                className="text-primary-500 font-medium hover:underline underline-offset-4"
              >
                직접 문의하기
              </Link>
              {" "}또는{" "}
              <Link
                href="/booking"
                className="text-primary-500 font-medium hover:underline underline-offset-4"
              >
                첫 무료 상담 예약
              </Link>
              을 이용해 주세요.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
