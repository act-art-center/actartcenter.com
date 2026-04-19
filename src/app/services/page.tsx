import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SERVICES_ALL, SITE_URL, TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 미술심리치료 서비스 — 개인·그룹·아동·온라인 프로그램",
  description:
    "성인 1:1, 아동·청소년, 그룹, 온라인, 그리고 보호·의료 환경과 트라우마·심층 탐색까지. ACT 수용전념치료 기반 맞춤 미술심리치료 서비스 7종을 안내합니다.",
  keywords: [
    "미술심리상담",
    "미술심리치료 서비스",
    "ACT 미술치료",
    "미술치료 프로그램",
    "개인 미술치료",
    "아동 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    title: "ACT 미술심리치료 서비스 — 7가지 맞춤 프로그램",
    description: "개인·그룹·아동·온라인·보호의료·트라우마·심층탐색. 상황에 맞는 ACT 미술치료를 찾으세요.",
    url: `${SITE_URL}/services`,
    images: [
      {
        url: "/og/services.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술심리치료 서비스 맵",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 미술심리치료 서비스 — 7가지 맞춤 프로그램",
    description: "성인·아동·그룹·온라인·보호의료·트라우마·심층탐색 전 영역.",
    images: ["/og/services.png"],
  },
};

const servicesHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
      ],
    },
    {
      "@type": "ItemList",
      name: "ACT 미술심리치료 서비스",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 7,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "개인 미술치료", url: `${SITE_URL}/services/individual` },
        { "@type": "ListItem", position: 2, name: "그룹 프로그램", url: `${SITE_URL}/services/group` },
        { "@type": "ListItem", position: 3, name: "아동·청소년 미술치료", url: `${SITE_URL}/services/child` },
        { "@type": "ListItem", position: 4, name: "온라인 미술치료", url: `${SITE_URL}/services/online` },
        { "@type": "ListItem", position: 5, name: "보호·의료 환경 미술심리치료", url: `${SITE_URL}/services/protective` },
        { "@type": "ListItem", position: 6, name: "정서·트라우마 중심 미술심리치료", url: `${SITE_URL}/services/emotional` },
        { "@type": "ListItem", position: 7, name: "심층 탐색·연구 기반 미술심리치료", url: `${SITE_URL}/services/depth` },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesHubSchema} />
      <PageHero
        title="ACT 미술심리치료 서비스"
        subtitle="그림과 조형 활동을 단순한 표현 수단으로 사용하지 않습니다. 작품을 매개로 한 경험은 자각, 수용, 그리고 삶의 가치 인식으로 자연스럽게 확장됩니다."
        label="Services"
        imageSrc="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80"
        imageAlt="미술치료 서비스 공간"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "서비스", href: "/services" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      {/* 접근 철학 — What makes us different */}
      <SectionWrapper bg="paper" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              진단·증상 제거가 아니라, 심리적 유연성과 가치 회복을 중심에 둡니다
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/85 leading-relaxed">
              <p>
                ACT ART CENTER는 &ldquo;문제를 없애는 것&rdquo;을 목표로 삼지 않습니다.
                Steven C. Hayes (Univ. of Nevada) 와 공동 연구진이 정립한 수용전념치료(ACT)는
                불편한 감정과 생각을 통제하려는 싸움 대신, 그것을 품고도 내가 원하는 방향으로
                걸어갈 수 있는 힘 — 즉 심리적 유연성(Psychological Flexibility) — 을 기릅니다.
              </p>
              <p>
                여기에 미술치료사 Cathy A. Malchiodi (Trauma-Informed Practices Institute) 가
                오랫동안 강조해 온 &ldquo;표현 기반 접근(Expressive Therapies Continuum)&rdquo; 관점과
                Bessel van der Kolk 의 신체 기반 트라우마 치료 관점 (『The Body Keeps the Score』, 2014) 을
                통합합니다. 언어로 꺼내기 어려운 경험은 색·선·재료의 감각 안에서 먼저 안전하게
                다뤄진 뒤, 이야기로 옮겨 갑니다.
              </p>
              <p>
                그래서 센터의 세션은 &ldquo;증상 점수를 낮추는 시간&rdquo;이 아닙니다.
                지금 이 자리에 서 있기 위해 각자가 치러 온 노력을 존중하며, 그 위에
                조금 더 유연한 선택지를 함께 찾아가는 시간입니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7개 서비스를 관통하는 4가지 원칙 */}
      <SectionWrapper bg="sand" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-10 lg:mb-14">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
              Four Principles
            </p>
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              7개 프로그램이 공유하는 네 가지 원칙
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              성인 1:1 에서 그룹, 아동, 온라인, 보호·의료 환경, 트라우마, 심층 탐색까지 —
              모든 프로그램은 같은 임상 기준 위에서 설계됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                number: "01",
                title: "ACT 6 프로세스 기반 (증거 기반 실천)",
                body: "수용·인지적 탈융합·현재 순간 접촉·맥락으로서의 자기·가치·전념 행동 6축을 임상 지도로 사용합니다. 미국심리학회(APA) Division 12 가 경험적으로 지지된 치료(Empirically Supported Treatments)로 분류하며, A-Tjak 등(2015, Psychother Psychosom) 메타분석에서 불안·우울·만성 통증 전반의 효과가 보고되었습니다.",
              },
              {
                number: "02",
                title: "미술 매체의 신체 기반 접근성",
                body: "van der Kolk 는 외상 기억이 &ldquo;언어 이전 감각&rdquo;에 저장된다고 설명합니다. 선·색·재료의 물성을 먼저 거치면 재외상화(재경험으로 인한 상처) 위험이 낮아지고, 부교감 신경계가 안정된 상태에서 이야기로 넘어갈 수 있습니다.",
              },
              {
                number: "03",
                title: "내담자 맞춤 페이싱 — 단기에서 장기까지",
                body: "단기(6~8회) 개입부터 중기(12~16회), 트라우마·심층 작업(20회 이상)까지 동일 센터 안에서 유연하게 이동합니다. 첫 회기 이후 4~6회마다 경과를 점검해 필요한 만큼만 진행합니다.",
              },
              {
                number: "04",
                title: "비밀유지 · 윤리",
                body: "한국미술치료학회 윤리 강령과 ACBS(Association for Contextual Behavioral Science) 임상 지침을 따릅니다. 작품·기록·개인 정보는 내담자 동의 없이 공개되지 않으며, ACT ART CENTER 는 의료기관이 아닌 상담 센터이므로 의료기록에 남지 않습니다.",
              },
            ].map((p) => (
              <div
                key={p.number}
                className="bg-white rounded-2xl p-7 lg:p-8"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <p className="text-primary-500 text-xs font-semibold tracking-widest">
                  {p.number}
                </p>
                <h3 className="mt-2 text-night text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-charcoal/80 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 치료사 프로필 요약 */}
      <SectionWrapper bg="paper" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-8 lg:mb-10">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
              Your Therapist
            </p>
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              모든 프로그램을 이끄는 치료사
            </h2>
          </div>

          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-2xl p-7 lg:p-10 max-w-3xl"
              style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1">
                  <p className="text-stone text-xs tracking-widest uppercase">{m.role}</p>
                  <h3 className="mt-1 text-night text-xl font-bold">{m.name}</h3>
                  <p className="mt-1 text-charcoal/60 text-sm">{m.credentials}</p>
                  <p className="mt-4 text-charcoal/80 leading-relaxed text-sm">
                    {m.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/team"
                    className="mt-6 inline-flex items-center gap-1 text-secondary-500 font-medium text-sm hover:gap-2 transition-all"
                  >
                    상세 프로필 · 임상 철학 보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-10 max-w-3xl mb-10 lg:mb-14">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
              Programs
            </p>
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              7가지 프로그램 — 상황별 맞춤 안내
            </h2>
          </div>
          <div className="relative z-10 space-y-12 lg:space-y-20">
            {SERVICES_ALL.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
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
                    aria-label={service.anchor}
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

      {/* 3분 체크 가이드 — 어떤 서비스가 맞을지 모를 때 */}
      <SectionWrapper bg="paper" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3">
              Quick Guide
            </p>
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              어떤 프로그램이 맞을지 모르겠다면 — 3분 가이드
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              현재 상황에서 가장 가까운 문장을 읽어 보세요. 확신이 서지 않아도 괜찮습니다.
              첫 상담(30분, 무료)에서 함께 맞는 구성을 찾아갑니다.
            </p>
          </div>

          <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-4xl">
            {[
              {
                situation: "혼자서 깊이 다뤄 보고 싶어요",
                recommend: "성인 1:1 개인 미술치료",
                href: "/services/individual",
              },
              {
                situation: "혼자가 부담스럽고, 비슷한 사람들과 함께하고 싶어요",
                recommend: "ACT 그룹 미술치료 (4~6인)",
                href: "/services/group",
              },
              {
                situation: "아이(만 5세~청소년)의 정서·표현을 돕고 싶어요",
                recommend: "아동·청소년 미술치료",
                href: "/services/child",
              },
              {
                situation: "지방·해외 거주, 혹은 외출이 어려운 상황이에요",
                recommend: "온라인 미술치료 (재료 키트 배송)",
                href: "/services/online",
              },
              {
                situation: "의료·보호 환경에 있거나, 장기 치료 중이에요",
                recommend: "보호·의료 환경 미술심리치료",
                href: "/services/protective",
              },
              {
                situation: "트라우마·상실·번아웃처럼 전환기에 있어요",
                recommend: "정서·트라우마 중심 미술심리치료",
                href: "/services/emotional",
              },
            ].map((row) => (
              <Link
                key={row.href}
                href={row.href}
                className="group flex items-start gap-4 bg-white rounded-xl p-5 hover:bg-primary-50 transition-colors"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <div className="flex-1">
                  <p className="text-charcoal/85 text-sm leading-relaxed">
                    &ldquo;{row.situation}&rdquo;
                  </p>
                  <p className="mt-2 text-primary-600 font-medium text-sm group-hover:text-primary-700">
                    → {row.recommend}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 lg:mt-10 max-w-3xl flex flex-wrap gap-3">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 px-5 py-2.5 bg-white text-secondary-500 font-medium text-sm rounded-lg hover:bg-primary-50 transition-colors"
              style={{ border: "1px solid rgba(196, 191, 183, 0.2)" }}
            >
              자주 묻는 질문 30개 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white font-medium text-sm rounded-lg hover:bg-primary-600 transition-colors"
            >
              첫 무료 상담 예약
            </Link>
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
