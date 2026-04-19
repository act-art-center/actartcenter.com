import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { VideoHero } from "@/components/shared/VideoHero";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";

export function HeroSection() {
  return (
    <VideoHero
      videoSrc="https://cdn.pixabay.com/video/2020/05/31/40395-426958684_large.mp4"
      posterSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
      overlayOpacity={0.55}
      className="min-h-[85vh] flex items-center"
    >
      {/* Ambient background layer — Twins primary (right anchor, hero signature),
         Artty/Acttie accents (lower opacity so text remains primary on left column).
         Three mascots drift on de-synced loops so the hero feels alive. */}
      <CharacterIllustration
        name="twins-together"
        alt=""
        width={520}
        height={520}
        priority
        hideOnMobile
        animation="ambient"
        opacity={0.5}
        className="absolute right-4 lg:right-12 bottom-0 z-[1] w-[38vw] max-w-[460px] drop-shadow-[0_12px_32px_rgba(29,28,21,0.25)]"
      />
      <CharacterIllustration
        name="artty-thoughtful"
        alt=""
        width={220}
        height={220}
        hideOnMobile
        animation="ambient"
        opacity={0.2}
        delay={2}
        className="absolute right-[32%] top-[12%] z-[1] w-[160px] xl:w-[200px]"
      />
      <CharacterIllustration
        name="acttie-reading"
        alt=""
        width={200}
        height={200}
        hideOnMobile
        animation="ambient"
        opacity={0.18}
        delay={4}
        className="absolute right-[38%] bottom-[14%] z-[1] w-[140px] xl:w-[170px]"
      />

      <Container className="relative z-[2] py-24 lg:py-32">
        <div className="max-w-2xl">
          <p
            className="text-white/60 font-[var(--font-accent)] text-lg mb-6"
            style={{ transform: "rotate(-1.5deg)", transformOrigin: "left" }}
          >
            Accept. Create. Transform.
          </p>

          <h1 className="text-white font-bold leading-[1.1] tracking-[-0.03em] text-[clamp(2.2rem,1.5rem+4vw,4rem)]">
            ACT 미술심리치료로
            <br />
            마음을 탐색하고, 삶의 의미를 재발견합니다
          </h1>

          <p className="mt-6 text-white/80 max-w-md text-lg leading-relaxed">
            수용전념치료(ACT)의 개념을 내포한 미술심리치료 전문 연구·임상 기관.
            언어 이전의 감정과 복합적인 심리 경험을 예술적 표현을 통해 탐색합니다.
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
              aria-label="ACT 수용전념치료 자세히 보기"
              className="inline-flex items-center px-7 py-3.5 text-white font-semibold rounded-lg border-[1.5px] border-white/30 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              ACT 수용전념치료 자세히 보기
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
              미술치료 작품 갤러리
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
