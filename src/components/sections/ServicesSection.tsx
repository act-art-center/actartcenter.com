import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { SERVICES_ADULT, SERVICES_SPECIALTY } from "@/lib/constants";

/**
 * 홈 ServicesSection — 전체 7개 서비스를 두 그룹으로 나눠 노출 (B2 §2.5, §4.5).
 *
 * 설계 의도:
 * - 첫 번째 줄 4개 카드 (성인 대상): individual / group / child / online.
 * - 두 번째 줄 3개 카드 (특수 영역): protective / emotional / depth.
 * - design.md §2 "No-Line Rule": 구분선 없이 `bg-cream` 섹션 안에서
 *   sub-grouping만 h3 라벨 + 32px+ 간격으로 구분.
 * - design.md §6 "1/3 or 2/3 columns" asymmetric: 4+3 비대칭 그리드 (4=성인/3=특수).
 * - Anchor text는 B2 §2.5 스펙 준수 — titleEn 대신 한글 명사구 anchor.
 */
export function ServicesSection() {
  return (
    <SectionWrapper bg="cream">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT ART CENTER의 세션 영역</h2>
          <p className="mt-4 text-charcoal/80 max-w-2xl mx-auto text-base leading-relaxed">
            그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다.
            작품을 매개로 한 경험은{" "}
            <em className="text-primary-500 not-italic font-medium">지금-여기에서의 자각</em>,{" "}
            <em className="text-primary-500 not-italic font-medium">감정과 생각에 대한 수용</em>, 그리고{" "}
            <em className="text-primary-500 not-italic font-medium">삶의 가치 인식</em>으로 자연스럽게 확장됩니다.
          </p>
          <p className="mt-3 text-sm text-charcoal/60">
            <Link
              href="/services"
              className="underline-offset-4 hover:underline text-primary-500 font-medium"
            >
              미술심리치료 서비스 전체 보기
            </Link>
          </p>
        </div>

        {/* Row 1: 성인 대상 4개 카드 */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-night text-lg font-semibold tracking-tight">성인을 위한 ACT 미술치료</h3>
            <Link
              href="/pricing"
              className="text-sm text-secondary-500 font-medium hover:underline underline-offset-4"
            >
              세션 비용 안내 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_ADULT.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Row 2: 특수·전문 영역 3개 카드 */}
        <div className="mt-14 lg:mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-night text-lg font-semibold tracking-tight">특수·전문 영역 미술심리치료</h3>
            <Link
              href="/act-approach"
              className="text-sm text-secondary-500 font-medium hover:underline underline-offset-4"
            >
              ACT 수용전념치료 자세히 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES_SPECIALTY.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Cross-link row — pricing/faq/team (B2 spec §2.5 anchor quality) */}
        <div className="mt-12 text-center text-sm text-charcoal/70">
          더 자세한 안내는{" "}
          <Link href="/faq" className="text-primary-500 font-medium hover:underline underline-offset-4">
            미술치료 자주 묻는 질문
          </Link>
          {" "}또는{" "}
          <Link href="/team" className="text-primary-500 font-medium hover:underline underline-offset-4">
            고은별 대표 프로필
          </Link>
          을 참고하세요.
        </div>
      </Container>
    </SectionWrapper>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    href: string;
    anchor: string;
    image: string;
    imageAlt: string;
  };
}) {
  return (
    <Link
      href={service.href}
      aria-label={service.anchor}
      className="group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/20 to-transparent" />
      </div>

      <div className="p-5 lg:p-6">
        <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-2">
          {service.titleEn}
        </p>
        <h4 className="text-night text-base lg:text-lg font-semibold group-hover:text-primary-500 transition-colors">
          {service.title}
        </h4>
        <p className="mt-3 text-charcoal/70 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-secondary-500 text-sm font-medium group-hover:gap-2 transition-all">
          자세히 알아보기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
