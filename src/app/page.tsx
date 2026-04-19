import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ActApproach } from "@/components/sections/ActApproach";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogPreview } from "@/components/sections/BlogPreview";

/**
 * HomePage — 전역 JSON-LD (Organization + LocalBusiness + WebSite) 는
 * `src/app/layout.tsx` 의 `globalGraphSchema` 에서 모든 페이지에 공통 주입됨.
 * 홈 고유의 추가 schema 가 필요하지 않으므로 여기서는 UI 섹션만 렌더한다.
 *
 * Wave 4 D2 감사 Critical C-1 해소:
 * 이전 구현은 layout 의 전역 graph 와 동일한 `@id` 3노드를 page 에서 재주입해
 * 홈에서만 중복 출력됐다. Google Rich Results 는 `@id` 기반 merge 로 용서
 * 하지만 일부 validator 는 warning. Source-of-truth 는 layout.tsx.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PhilosophySection />
      <ActApproach />
      <ServicesSection />
      <ProcessTimeline />
      <TeamSection />
      {/* TestimonialsCarousel: 실제 내담자 후기 확보 전까지 노출 보류. docs/TODO.md 참조. */}
      <FaqSection />
      <CtaBand />
      <BlogPreview />
    </>
  );
}
