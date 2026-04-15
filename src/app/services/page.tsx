import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "서비스",
  description: "ACT Art Center의 미술심리치료 서비스. 보호·의료 환경, 정서·트라우마 중심, 심층 탐색·연구 기반 프로그램.",
};

const serviceImages = [
  { src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80", alt: "보호·의료 환경 미술치료" },
  { src: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=800&q=80", alt: "정서·트라우마 치유" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80", alt: "심층 탐색 미술치료" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="치료 영역"
        subtitle="그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다. 작품을 매개로 한 경험은 자각, 수용, 그리고 삶의 가치 인식으로 자연스럽게 확장됩니다."
        label="Services"
        imageSrc="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80"
        imageAlt="미술치료 서비스 공간"
      />

      <SectionWrapper bg="cream">
        <Container>
          <div className="space-y-12 lg:space-y-20">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={serviceImages[i].src}
                    alt={serviceImages[i].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-2">{service.titleEn}</p>
                  <h2 className="text-night text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-charcoal/80 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-secondary-500 font-medium hover:gap-2 transition-all"
                  >
                    자세히 알아보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              어떤 프로그램이 나에게 맞을까요?
            </h2>
            <p className="mt-4 text-white/80">첫 상담에서 함께 알아보겠습니다.</p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all duration-200"
            >
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
