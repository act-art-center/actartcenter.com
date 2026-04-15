import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "온라인 미술치료",
  description: "전국 어디서나 화상으로 만나는 ACT 미술치료. 미술 키트 배송 포함.",
};

const steps = [
  { number: "01", title: "예약 및 사전 상담", description: "온라인으로 예약 후, 간단한 사전 상담을 진행합니다." },
  { number: "02", title: "미술 키트 배송", description: "세션에 필요한 미술 재료 키트를 자택으로 배송합니다." },
  { number: "03", title: "화상 세션 진행", description: "Zoom으로 치료사와 만나 미술 활동을 함께 진행합니다." },
  { number: "04", title: "후속 안내", description: "세션 후 일상에서의 실천 과제와 다음 세션을 안내합니다." },
];

export default function OnlinePage() {
  return (
    <>
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Online Art Therapy</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">온라인 미술치료</h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                전국 어디서나 화상으로 만나는 ACT 미술치료입니다.
                미술 재료 키트를 사전 배송하여 대면 상담과 동일한 깊이의 치료를 제공합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">50분</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">화상 (Zoom)</span>
                <span className="px-3 py-1.5 bg-cream rounded-lg text-sm text-charcoal/70">키트 배송 포함</span>
              </div>
              <p className="mt-4 text-primary-500 font-semibold tabular-nums">70,000 ~ 100,000원 / 회기</p>
              <Link href="/booking" className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200">
                예약 문의하기
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&q=80" alt="온라인 미술치료 환경" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">진행 과정</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.number} className="bg-white rounded-xl p-6 text-center" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <div className="w-10 h-10 mx-auto rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm">{s.number}</div>
                <h3 className="mt-3 text-night font-semibold">{s.title}</h3>
                <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto bg-primary-50 rounded-2xl p-8">
            <h2 className="text-night text-xl font-semibold text-center" >이런 분께 추천합니다</h2>
            <ul className="mt-6 space-y-3 text-charcoal/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                서울 외 지역에 거주하시는 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                이동이 어렵거나 시간이 제한적인 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                익숙한 공간에서 편안하게 상담받고 싶은 분
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 shrink-0" />
                해외 거주 한국인
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">어디서든 시작할 수 있습니다</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              온라인 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
