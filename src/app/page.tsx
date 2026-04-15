import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ActApproach } from "@/components/sections/ActApproach";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogPreview } from "@/components/sections/BlogPreview";

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
      <TestimonialsCarousel />
      <FaqSection />
      <CtaBand />
      <BlogPreview />
    </>
  );
}
