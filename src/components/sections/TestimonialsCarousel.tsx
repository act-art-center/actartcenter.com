"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { TESTIMONIALS } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  const testimonial = TESTIMONIALS[current];

  return (
    <SectionWrapper bg="cream">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">참여자 이야기</h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Large quote mark */}
          <span className="text-primary-200 font-[var(--font-accent)] text-7xl lg:text-8xl leading-none select-none" aria-hidden="true">
            &ldquo;
          </span>

          <blockquote className="-mt-8 text-charcoal text-lg lg:text-xl leading-relaxed">
            {testimonial.content}
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary-300 text-secondary-300" />
            ))}
          </div>

          <p className="mt-3 text-stone text-sm">
            &mdash; {testimonial.attribution}
          </p>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="이전 후기"
              className="p-2 rounded-full hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`후기 ${i + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    i === current ? "bg-primary-500 w-6" : "bg-sand hover:bg-stone"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="다음 후기"
              className="p-2 rounded-full hover:bg-primary-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
