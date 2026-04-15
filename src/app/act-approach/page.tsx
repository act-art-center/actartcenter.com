import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { ACT_PROCESSES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 수용전념치료란?",
  description: "ACT(Acceptance and Commitment Therapy)의 6가지 핵심 프로세스와 미술치료의 통합 접근을 알아보세요.",
};

export default function ActApproachPage() {
  return (
    <>
      <PageHero
        title="ACT, 수용전념치료란?"
        subtitle="심리적 유연성을 높이는 것을 목표로 하는 3세대 인지행동치료. 고통스러운 생각과 감정을 있는 그대로 수용하면서 가치를 향해 행동하는 법을 배웁니다."
        label="Acceptance and Commitment Therapy"
        imageSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1920&q=80"
        imageAlt="ACT 수용전념치료"
      />

      {/* 6 Processes */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT의 6가지 핵심 프로세스</h2>
            <p className="mt-4 text-charcoal/70 max-w-[44ch] mx-auto">
              여섯 가지 프로세스가 유기적으로 연결되어 심리적 유연성을 만들어갑니다.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {ACT_PROCESSES.map((process, i) => (
              <div
                key={process.id}
                className="bg-white rounded-xl p-6 lg:p-8"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <span className="text-primary-500 font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-night text-xl font-semibold">
                      {process.title}
                      <span className="ml-2 text-primary-400 text-sm font-normal">{process.titleEn}</span>
                    </h3>
                    <p className="mt-2 text-charcoal/80 leading-relaxed">{process.description}</p>
                    <p className="mt-3 text-secondary-500 font-[var(--font-accent)] text-base italic">
                      &ldquo;{process.artConnection}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Psychological Flexibility */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-full mb-6">
              심리적 유연성
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              모든 프로세스가 향하는 하나의 목표
            </h2>
            <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
              심리적 유연성이란 현재 순간에 온전히 머무르면서, 자신의 가치에 따라 행동할 수 있는 능력입니다.
              이는 고통의 부재가 아니라, 고통 속에서도 의미 있는 삶을 살아가는 힘을 의미합니다.
            </p>
            <div className="mt-10">
              <Link
                href="/booking"
                className="inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
              >
                ACT 미술치료 경험하기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
