"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQ_ITEMS, FAQ_CATEGORIES, SITE_URL, CONTACT } from "@/lib/constants";
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

      {/* Breadcrumbs + intro + category nav */}
      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "FAQ", href: "/faq" },
            ]}
            emitJsonLd={false}
          />

          {/* Intro box — who this page is for */}
          <div
            className="mt-6 max-w-3xl mx-auto bg-white rounded-2xl p-6 lg:p-7"
            style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
          >
            <p className="text-night font-semibold text-base">
              처음 오시는 분들이 자주 궁금해하시는 것을 정리했습니다
            </p>
            <p className="mt-3 text-charcoal/75 text-sm leading-relaxed">
              아래 여섯 가지 카테고리 가운데 지금 내 상황에 가장 가까운 주제를 먼저 읽어 보세요.
              <span className="block mt-1">
                처음 문의하시는 분은 <strong>첫 상담 준비</strong>,
                이미 예약하신 분은 <strong>진행 과정</strong>,
                비용이 궁금하시면 <strong>비용·결제</strong>,
                ACT 개념이 생소하시면 <strong>ACT 수용전념치료</strong> 섹션부터 보시는 것을 권합니다.
                아이의 상담을 고려 중이시면 <strong>아동·청소년</strong>, 지방·해외 거주라면 <strong>온라인 세션</strong> 을 확인해 주세요.
              </span>
            </p>
          </div>

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

      <SectionWrapper bg="paper" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
                Still Unsure?
              </p>
              <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
                여기서 답을 못 찾으셨다면
              </h2>
              <p className="mt-4 text-charcoal/75 leading-relaxed">
                정리된 질문만으로는 담기지 않는, 내 상황에만 해당하는 이야기가 있으실 수 있습니다.
                <span className="block mt-1">
                  질문은 길어도 괜찮습니다. 센터가 먼저 들어 드립니다. 첫 상담(30분)은 무료이며,
                  당장 예약이 부담스러우시다면 아래 경로로 편하게 문의만 주셔도 좋습니다.
                </span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/booking"
                className="group flex flex-col gap-1 bg-white rounded-xl p-5 hover:bg-primary-50 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <span className="text-stone text-xs tracking-widest uppercase">
                  01 예약 문의
                </span>
                <span className="text-night font-semibold group-hover:text-primary-600">
                  첫 무료 상담 예약하기
                </span>
                <span className="text-charcoal/65 text-xs leading-relaxed mt-1">
                  영업일 기준 1~2일 이내 회신해 드립니다.
                </span>
              </Link>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex flex-col gap-1 bg-white rounded-xl p-5 hover:bg-primary-50 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <span className="text-stone text-xs tracking-widest uppercase">
                  02 이메일
                </span>
                <span className="text-night font-semibold group-hover:text-primary-600 break-all">
                  {CONTACT.email}
                </span>
                <span className="text-charcoal/65 text-xs leading-relaxed mt-1">
                  분량 제한 없이 편하게 적어 주세요.
                </span>
              </a>

              <Link
                href="/contact"
                className="group flex flex-col gap-1 bg-white rounded-xl p-5 hover:bg-primary-50 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <span className="text-stone text-xs tracking-widest uppercase">
                  03 오시는 길
                </span>
                <span className="text-night font-semibold group-hover:text-primary-600">
                  위치·연락처 안내
                </span>
                <span className="text-charcoal/65 text-xs leading-relaxed mt-1">
                  서초구 강남대로 · 센터 방문 전 체크.
                </span>
              </Link>
            </div>

            <p className="mt-8 text-center text-charcoal/55 text-xs">
              모든 문의는 한국미술치료학회 윤리 강령에 따라 비밀이 보장됩니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
