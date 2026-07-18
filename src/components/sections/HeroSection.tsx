import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { VideoHero } from "@/components/shared/VideoHero";

export function HeroSection() {
  return (
    <VideoHero
      videoSrc="/videos/hero-video.mp4"
      posterSrc="/videos/hero-poster.jpg"
      overlayOpacity={0.55}
      className="min-h-[85vh] flex items-center"
    >
      <Container className="relative z-[2] py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-white font-bold leading-[1.1] tracking-[-0.03em] text-[clamp(2.2rem,1.5rem+4vw,4rem)] [word-break:keep-all]">
            ACT 미술심리치료로 마음의 힘을 기르는 시간에 동행합니다
          </h1>

          <p className="mt-6 text-white/80 max-w-md text-lg leading-relaxed">
            액트 아트 센터는
            <br />
            미술을 경험하며 마음이 잠시 쉬어갈 수 있는
            <br />
            안전한 시간을 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              aria-label="첫 무료 상담 예약하기"
              className="inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              첫 무료 상담 예약하기
            </Link>
            <Link
              href="/act-approach"
              aria-label="ACT(수용전념) 미술치료 자세히 보기"
              className="inline-flex items-center px-7 py-3.5 text-white font-semibold rounded-lg border-[1.5px] border-white/30 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              ACT(수용전념) 미술치료 자세히 보기
            </Link>
            <Link
              href="/characters"
              aria-label="ACTIE와 ARTTY 상세 설명 페이지로 이동"
              className="inline-flex items-center px-7 py-3.5 bg-white/95 text-night font-semibold rounded-lg border-[1.5px] border-white/70 hover:bg-white transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              ACTIE 액티 &amp; ARTTY 아티
            </Link>
          </div>

          {/* Tertiary cross-links — keeps home hero → hub depth-1 (B2 §2.5) */}
          <p className="mt-6 text-sm text-white/60 leading-relaxed">
            <Link
              href="/services"
              className="text-white/80 underline-offset-4 hover:underline hover:text-white"
            >
              미술심리치료 서비스 전체 보기
            </Link>
            <span className="mx-2 text-white/30" aria-hidden="true">·</span>
            <Link
              href="/gallery"
              className="text-white/80 underline-offset-4 hover:underline hover:text-white"
            >
              ACT ART CENTER GALLERY
            </Link>
          </p>
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
