import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ActionLink } from "@/components/shared/ActionLink";
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
            미술로
            <br />
            마음의 힘을 기르는 시간에 동행합니다
          </h1>

          <p className="mt-6 text-white/80 max-w-md text-lg leading-relaxed">
            ‘ACT ART CENTER, 액트 아트 센터’는
            <br />
            미술을 경험하며 마음이 잠시 쉬어갈 수 있는
            <br />
            안전한 시간을 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink
              href="/booking"
              ariaLabel="첫 무료 상담 예약하기"
              className="focus-visible:ring-white focus-visible:ring-offset-night"
            >
              첫 무료 상담 예약하기
            </ActionLink>
            <ActionLink
              href="#sessions"
              ariaLabel="미술치료 프로그램 자세히 보기"
              variant="inverse-outline"
              className="focus-visible:ring-white focus-visible:ring-offset-night"
            >
              미술치료 프로그램 자세히 보기
            </ActionLink>
            <ActionLink
              href="/characters"
              ariaLabel="ACTIE와 ARTTY 상세 설명 페이지로 이동"
              variant="inverse-solid"
              className="focus-visible:ring-white focus-visible:ring-offset-night"
            >
              ACTIE(액티) &amp; ARTTY(아티)
            </ActionLink>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 pl-6 text-sm" aria-label="추가 바로가기">
            <Link
              href="/team"
              aria-label="미술치료사 고은별 프로필 페이지로 이동"
              className="font-bold text-white underline-offset-4 transition-colors hover:text-white/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              미술치료사 소개
            </Link>
            <span aria-hidden="true" className="text-white/45">·</span>
            <Link
              href="/blog"
              aria-label="미술치료 이야기 블로그로 이동"
              className="font-bold text-white underline-offset-4 transition-colors hover:text-white/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              미술치료 이야기
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
