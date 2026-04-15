import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "심층 탐색·연구 기반 미술심리치료",
  description: "연구, 슈퍼비전, 전문 자문. 자기 이해와 내적 탐색을 원하는 개인 및 장기·심층 치료 사례를 위한 프로그램.",
};

const areas = [
  { title: "자기 이해와 내적 탐색", description: "특정 증상이 아니더라도 자신을 더 깊이 이해하고 싶은 분들을 위한 심층 미술치료입니다." },
  { title: "장기·심층 치료 사례", description: "단기 상담으로 다루기 어려운 복합적인 심리 주제를 장기적으로 탐색합니다." },
  { title: "연구·슈퍼비전·전문 자문", description: "미술치료 전문가를 위한 슈퍼비전, 사례 자문, 연구 협력을 제공합니다." },
];

export default function DepthPage() {
  return (
    <>
      <section className="relative bg-paper py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-4">Depth-Oriented & Research-Based</p>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                심층 탐색·연구 기반 미술심리치료
              </h1>
              <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                연구, 슈퍼비전, 전문 자문을 포함하는 심층적인 접근입니다.
                자기 이해와 내적 탐색을 원하는 개인부터 장기·심층 치료 사례까지,
                깊이 있는 치료적 관계 속에서 탐색을 이어갑니다.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80" alt="심층 탐색을 위한 예술 작업" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
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
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">깊이 있는 탐색을 시작하세요</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              상담 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
