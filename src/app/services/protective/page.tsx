import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "보호·의료 환경 미술심리치료",
  description: "장기 치료·의료 병행 환경에서의 미술심리치료. 청소년 보호병동, 정신과 입원 환경, 난임·생식의학 치료 과정을 지원합니다.",
};

const areas = [
  { title: "청소년 보호병동", description: "입원 환경의 청소년이 미술 활동을 통해 감정을 안전하게 표현하고 심리적 안정을 찾도록 돕습니다." },
  { title: "정신과 입원 환경", description: "장기 입원 환자의 정서적 고립을 완화하고 자기 표현의 통로를 제공합니다." },
  { title: "난임·생식의학 치료 과정", description: "난임 치료 과정에서 겪는 심리적 압박과 감정적 소진을 미술을 통해 다룹니다." },
];

export default function ProtectivePage() {
  return (
    <>
      <section className="relative bg-paper py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Protective & Medical Environment</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                보호·의료 환경 미술심리치료
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                장기 치료·의료 병행 환경에서의 미술심리치료입니다.
                의료 현장의 제약 속에서도 내담자가 안전하게 자신의 경험을 탐색하고
                심리적 안정을 찾을 수 있도록 지원합니다.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80" alt="보호 환경에서의 미술 작업" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-12 text-2xl lg:text-3xl font-bold tracking-tight">대상 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {areas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold text-lg">{area.title}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">상담이 필요하신가요?</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              예약 일정 확인하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
