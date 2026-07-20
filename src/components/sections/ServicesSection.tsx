import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { SERVICES_ADULT, SERVICES_SPECIALTY } from "@/lib/constants";

const ONE_DAY_CLASS_SERVICE = {
  id: "open-studio-one-day-class",
  title: "오픈스튜디오 원데이클래스",
  titleEn: "Open Studio One-Day Class",
  description: "개인 세션 및 가족, 친구와 함께 참여도 가능한 열린 미술 시간입니다.",
  href: "/services/open-studio",
  anchor: "오픈스튜디오 원데이클래스 자세히 알아보기",
  image: "/images/open-studio-one-day-class.jpg",
  imageAlt: "이젤 앞에서 그림을 그리는 오픈스튜디오 원데이클래스 일러스트",
  cta: "자세히 알아보기",
  meta: "1인 · 1회",
};

const DRAWING_ASSESSMENT_SERVICE = {
  id: "drawing-assessment",
  title: "그림검사 및 상담",
  titleEn: "Drawing Assessment & Consultation",
  description: "HTP, KFD, BND, PITR 등 그림검사와 해석 상담을 통해 마음과 관계의 경험을 함께 살핍니다. 그림의 해석은 충분한 대화를 통해 신중하게 이루어집니다.",
  href: "/services/drawing-assessment",
  anchor: "그림검사 및 상담 자세히 알아보기",
  image: "/images/drawing-assessment-consultation.jpg",
  imageAlt: "미술치료사가 한 사람의 그림을 함께 살펴보며 그림검사 해석 상담을 진행하는 장면",
  cta: "자세히 알아보기",
};

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
            그림과 조형 활동은 표현을 넘어 마음을 살피는 과정으로 이어집니다.
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

        {/* Row 1: 오픈스튜디오 및 검사·상담 — 데스크톱 좌우 2열 */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-night text-lg font-semibold tracking-tight">오픈스튜디오 원데이 클래스 / 그림검사 및 TCI 기질검사</h3>
            <Link
              href="/pricing"
              className="text-sm text-secondary-500 font-medium hover:underline underline-offset-4"
            >
              세션 비용 안내 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard service={ONE_DAY_CLASS_SERVICE} />
            <ServiceCard service={DRAWING_ASSESSMENT_SERVICE} />
          </div>
        </div>

        {/* Row 2: 성인 대상 4개 카드 */}
        <div className="mt-14 lg:mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-night text-lg font-semibold tracking-tight">아동부터 성인, 모두를 위한 미술치료</h3>
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

        {/* Row 3: 특수·전문 영역 3개 카드 */}
        <div className="mt-14 lg:mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-night text-lg font-semibold tracking-tight">특수·전문 영역 미술심리치료</h3>
            <Link
              href="/act-approach"
              className="text-sm text-secondary-500 font-medium hover:underline underline-offset-4"
            >
              ACT 미술치료 더 알아보기 →
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
    cta?: string;
    meta?: string;
  };
}) {
  return (
    <Link
      href={service.href}
      aria-label={service.anchor}
      className="group flex h-full flex-col bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="text-primary-500 text-xs font-medium tracking-wide uppercase mb-2">
          {service.titleEn}
        </p>
        <h4 className="text-night text-base lg:text-lg font-semibold group-hover:text-primary-500 transition-colors">
          {service.title}
        </h4>
        <p className="mt-3 text-charcoal/70 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>
        {service.meta && <p className="mt-4 text-sm text-charcoal/60">{service.meta}</p>}
        <span className="mt-auto pt-4 inline-flex items-center gap-1 text-secondary-500 text-sm font-medium group-hover:gap-2 transition-all">
          {service.cta ?? "자세히 알아보기"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
