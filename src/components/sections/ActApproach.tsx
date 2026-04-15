"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { ACT_PROCESSES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ActApproach() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = ACT_PROCESSES.find((p) => p.id === activeId);

  return (
    <SectionWrapper bg="paper" id="act-approach">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT, 수용전념치료란?</h2>
          <p className="mt-4 text-charcoal/80 max-w-2xl mx-auto text-base leading-relaxed">
            6가지 핵심 프로세스를 통해 심리적 유연성을 높이고, 가치 있는 삶을 향해 나아갑니다.
          </p>
        </div>

        {/* Desktop: hex-style grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {ACT_PROCESSES.map((process) => {
              const isActive = activeId === process.id;
              return (
                <button
                  key={process.id}
                  onClick={() => setActiveId(isActive ? null : process.id)}
                  className={cn(
                    "group relative p-6 rounded-2xl text-center transition-all duration-250",
                    isActive
                      ? "bg-primary-50 shadow-[0_8px_24px_rgba(42,107,110,0.12)] scale-[1.03]"
                      : "bg-primary-50/60 backdrop-blur-sm hover:bg-primary-50 hover:shadow-[var(--shadow-md)]"
                  )}
                >
                  <p className="text-primary-500 font-semibold text-lg">{process.title}</p>
                  <p className="mt-1 text-primary-400 text-xs tracking-wide uppercase">
                    {process.titleEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Center label */}
          <div className="text-center mt-6 mb-4">
            <span className="inline-block px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-full shadow-[var(--shadow-sm)]">
              심리적 유연성
            </span>
          </div>

          {/* Description panel */}
          <div
            className={cn(
              "max-w-2xl mx-auto mt-8 overflow-hidden transition-all duration-300",
              active ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            {active && (
              <div className="bg-white rounded-xl p-6 shadow-[var(--shadow-sm)] text-center">
                <p className="text-charcoal">{active.description}</p>
                <p className="mt-3 text-secondary-500 font-[var(--font-accent)] text-lg">
                  &ldquo;{active.artConnection}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: accordion-style list */}
        <div className="md:hidden space-y-3">
          {ACT_PROCESSES.map((process) => {
            const isActive = activeId === process.id;
            return (
              <div key={process.id}>
                <button
                  onClick={() => setActiveId(isActive ? null : process.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl transition-all duration-200",
                    isActive ? "bg-primary-50" : "bg-cream hover:bg-primary-50/50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary-500 font-semibold">{process.title}</span>
                      <span className="ml-2 text-primary-400 text-xs uppercase">{process.titleEn}</span>
                    </div>
                    <svg
                      className={cn("w-5 h-5 text-primary-400 transition-transform duration-200", isActive && "rotate-180")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={cn("overflow-hidden transition-all duration-200", isActive ? "max-h-40 mt-2" : "max-h-0")}>
                  <div className="px-4 pb-4">
                    <p className="text-charcoal text-sm">{process.description}</p>
                    <p className="mt-2 text-secondary-500 font-[var(--font-accent)] text-base">
                      &ldquo;{process.artConnection}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/act-approach"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            ACT 더 알아보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
