import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { ActionLink } from "@/components/shared/ActionLink";

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
            <ActionLink
              href="/booking"
              ariaLabel="첫 무료 상담 예약하기"
              variant="inverse-solid"
              className="focus-visible:ring-white focus-visible:ring-offset-primary-500"
            >
              첫 무료 상담 예약하기
            </ActionLink>
            <ActionLink
              href="/contact"
              ariaLabel="오시는 길·연락처 보기"
              variant="inverse-outline"
              className="focus-visible:ring-white focus-visible:ring-offset-primary-500"
            >
              오시는 길·연락처
            </ActionLink>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <ActionLink
              href="/pricing"
              variant="inverse-outline"
              size="compact"
              className="focus-visible:ring-white focus-visible:ring-offset-primary-500"
            >
              세션 비용 안내
            </ActionLink>
            <ActionLink
              href="/faq"
              variant="inverse-outline"
              size="compact"
              className="focus-visible:ring-white focus-visible:ring-offset-primary-500"
            >
              자주 묻는 질문
            </ActionLink>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
