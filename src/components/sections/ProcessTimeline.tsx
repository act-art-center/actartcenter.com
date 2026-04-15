"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MessageCircle, ClipboardCheck, Palette, Sparkles, ArrowUpRight } from "lucide-react";

const icons = [MessageCircle, ClipboardCheck, Palette, Sparkles, ArrowUpRight];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionWrapper bg="paper">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">상담은 이렇게 진행됩니다</h2>
          <p className="mt-4 text-charcoal/60 text-base">각 단계를 클릭하여 자세히 알아보세요</p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-sand -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary-500 -translate-y-1/2 transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = icons[i];
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    className="group flex flex-col items-center"
                  >
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
                        isActive
                          ? "bg-primary-500 text-white shadow-[var(--shadow-md)] scale-110"
                          : isPast
                            ? "bg-primary-100 text-primary-500"
                            : "bg-sand text-stone group-hover:bg-primary-50 group-hover:text-primary-400"
                      )}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className={cn("mt-3 text-xs font-semibold tracking-wide transition-colors", isActive ? "text-primary-500" : "text-stone")}>
                      {step.number}
                    </span>
                    <span className={cn("mt-1 text-sm font-medium transition-colors", isActive ? "text-night" : "text-charcoal/60")}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[120px]">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={step.number}
                  className={cn(
                    "transition-all duration-500",
                    i === activeStep
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 absolute inset-0 translate-y-4 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-sm)] flex items-center gap-8"
                    style={{ border: "1px solid rgba(197, 191, 180, 0.15)" }}>
                    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-primary-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-primary-500 text-sm font-bold tracking-wide">STEP {step.number}</span>
                        <h3 className="text-night text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === activeStep ? "bg-primary-500 w-8" : "bg-sand hover:bg-primary-200 w-2.5"
                )}
                aria-label={`단계 ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-sand" aria-hidden="true" />
            <div className="space-y-4">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = icons[i];
                const isActive = i === activeStep;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    className="relative flex gap-5 text-left w-full group"
                  >
                    <div
                      className={cn(
                        "absolute -left-8 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 z-10",
                        isActive ? "bg-primary-500 text-white scale-110"
                          : i < activeStep ? "bg-primary-100 text-primary-500"
                          : "bg-sand text-stone"
                      )}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div
                      className={cn(
                        "flex-1 p-4 rounded-xl transition-all duration-300",
                        isActive ? "bg-white shadow-[var(--shadow-sm)]" : ""
                      )}
                      style={isActive ? { border: "1px solid rgba(197, 191, 180, 0.15)" } : undefined}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-primary-500 text-xs font-bold">{step.number}</span>
                        <h3 className={cn("font-semibold", isActive ? "text-night" : "text-charcoal/60")}>{step.title}</h3>
                      </div>
                      <div className={cn("overflow-hidden transition-all duration-300", isActive ? "max-h-20 mt-2 opacity-100" : "max-h-0 opacity-0")}>
                        <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
