import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";

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

          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-md)]"
            >
              무료 상담 예약하기
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
