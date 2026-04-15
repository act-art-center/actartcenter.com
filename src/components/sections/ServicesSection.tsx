import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { SERVICES } from "@/lib/constants";

const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    alt: "보호·의료 환경에서의 미술치료 작업",
  },
  {
    src: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=600&q=80",
    alt: "정서적 치유를 위한 미술 활동",
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80",
    alt: "심층 탐색을 위한 예술적 표현",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper bg="cream">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">우리의 치료 영역</h2>
          <p className="mt-4 text-charcoal/80 max-w-lg mx-auto text-base leading-relaxed">
            그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다.
            작품을 매개로 한 경험은 <em className="text-primary-500 not-italic font-medium">지금-여기에서의 자각</em>,{" "}
            <em className="text-primary-500 not-italic font-medium">감정과 생각에 대한 수용</em>,{" "}
            그리고 <em className="text-primary-500 not-italic font-medium">삶의 가치 인식</em>으로
            자연스럽게 확장됩니다.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={serviceImages[i].src}
                  alt={serviceImages[i].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/20 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-2">
                  {service.titleEn}
                </p>
                <h3 className="text-night text-lg font-semibold group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-secondary-500 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
