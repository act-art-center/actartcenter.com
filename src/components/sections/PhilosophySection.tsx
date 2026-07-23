import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";

export function PhilosophySection() {
  return (
    <SectionWrapper bg="paper">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden bg-white order-2 lg:order-1">
            <div className="relative aspect-[4/3]">
              <Image
                src="/characters/artty-paint.png"
                alt="큰 붓을 들고 있는 ARTTY"
                fill
                className="object-contain bg-white p-4 lg:p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="bg-white py-2 text-center text-[11px] leading-relaxed text-charcoal/45">
              (c)ACT ART CENTER
            </p>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">상담 철학</h2>

            <p className="mt-6 text-charcoal text-base leading-relaxed">
              한 사람의 <strong className="text-night">경험과 안전한 과정을 존중합니다.</strong>
              미술 경험을 통해 마음의 힘을 기르고 <strong className="text-night">삶의 방향성과 의미</strong>를 함께 탐색합니다.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-primary-300 rounded-full shrink-0" />
                <div>
                  <p className="text-night font-semibold">지금-여기에서의 자각</p>
                  <p className="mt-1 text-charcoal/70 text-sm">현재 순간의 경험에 온전히 머무르며, 미술 활동을 통해 자신을 만나갑니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-secondary-300 rounded-full shrink-0" />
                <div>
                  <p className="text-night font-semibold">감정과 생각에 대한 수용</p>
                  <p className="mt-1 text-charcoal/70 text-sm">감정을 밀어내지 않고, 있는 그대로 바라보며 색과 형태로 표현합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal-300 rounded-full shrink-0" />
                <div>
                  <p className="text-night font-semibold">삶의 가치 인식</p>
                  <p className="mt-1 text-charcoal/70 text-sm">개인이 소중히 여기는 가치를 탐색하고, 의미 있는 삶을 향해 나아갑니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
