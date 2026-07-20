import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";

/**
 * 홈 마무리 CTA 밴드.
 *
 * B2 spec §2.5 — primary CTA는 `/booking` (첫 무료 상담 예약하기),
 * secondary는 `/contact` (오시는 길·연락처) + `/pricing` (세션 비용 안내).
 * design.md §5 Buttons: primary = filled white, secondary = ghost style.
 */
export function CtaBand() {
  return (
    <SectionWrapper bg="primary" className="py-16 lg:py-20">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
            마음의 색을 찾아보세요
          </h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">
            첫 상담에서 당신에게 맞는 프로그램을 함께 설계합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              aria-label="첫 무료 상담 예약하기"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
            >
              첫 무료 상담 예약하기
            </Link>
            <Link
              href="/contact"
              aria-label="오시는 길·연락처 보기"
              className="inline-flex items-center px-7 py-3.5 text-white font-semibold rounded-lg border-[1.5px] border-white/40 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
            >
              오시는 길·연락처
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/70">
            먼저{" "}
            <Link
              href="/pricing"
              className="text-white font-medium underline-offset-4 hover:underline"
            >
              세션 비용 안내
            </Link>
            를 확인하시거나{" "}
            <Link
              href="/faq"
              className="text-white font-medium underline-offset-4 hover:underline"
            >
              자주 묻는 질문
            </Link>
            을 살펴보실 수 있습니다.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
