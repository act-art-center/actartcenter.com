import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { VideoHero } from "@/components/shared/VideoHero";

export function HeroSection() {
  return (
    <VideoHero
      videoSrc="https://cdn.pixabay.com/video/2020/05/31/40395-426958684_large.mp4"
      posterSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
      overlayOpacity={0.55}
      className="min-h-[85vh] flex items-center"
    >
      <Container className="py-24 lg:py-32">
        <div className="max-w-2xl">
          <p
            className="text-white/60 font-[var(--font-accent)] text-lg mb-6"
            style={{ transform: "rotate(-1.5deg)", transformOrigin: "left" }}
          >
            Accept. Create. Transform.
          </p>

          <h1 className="text-white font-bold leading-[1.1] tracking-[-0.03em] text-[clamp(2.2rem,1.5rem+4vw,4rem)]">
            미술로 마음을 탐색하고,
            <br />
            삶의 의미를 재발견하다
          </h1>

          <p className="mt-6 text-white/80 max-w-md text-lg leading-relaxed">
            수용전념치료(ACT)의 개념을 내포한 미술심리치료 전문 연구·임상 기관.
            언어 이전의 감정과 복합적인 심리 경험을 예술적 표현을 통해 탐색합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              예약 일정 확인하기
            </Link>
            <Link
              href="/act-approach"
              className="inline-flex items-center px-7 py-3.5 text-white font-semibold rounded-lg border-[1.5px] border-white/30 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              치료 철학 알아보기
            </Link>
          </div>
        </div>
      </Container>

      {/* Subtle tagline */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/30 font-[var(--font-accent)] text-sm italic tracking-wide">
          Exploring the mind through art, rediscovering meaning in life.
        </p>
      </div>
    </VideoHero>
  );
}
