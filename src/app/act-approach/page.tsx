import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { ACT_PROCESSES } from "@/lib/constants";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "수용전념치료(ACT)란? ACT 미술치료 6가지 핵심 프로세스",
  description:
    "수용전념치료(ACT)는 심리적 유연성을 키우는 3세대 인지행동치료입니다. 수용·인지적 탈융합·현재 순간·맥락으로서의 자기·가치·전념 행동 6가지 핵심 프로세스를 미술치료와 통합해 안내합니다.",
  keywords: [
    "수용전념치료",
    "ACT 치료",
    "ACT 미술치료",
    "심리적 유연성",
    "3세대 인지행동치료",
    "ACT 6 프로세스",
  ],
  alternates: { canonical: `${SITE_URL}/act-approach` },
  openGraph: {
    type: "article",
    title: "수용전념치료(ACT)란? 6가지 핵심 프로세스 × 미술치료",
    description: "ACT 6 프로세스(수용/탈융합/현재/자기/가치/전념)와 미술치료의 통합 접근.",
    url: `${SITE_URL}/act-approach`,
    images: [
      {
        url: "/og/act-approach.png",
        width: 1200,
        height: 630,
        alt: "ACT 수용전념치료 6가지 핵심 프로세스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수용전념치료(ACT)란? ACT 미술치료 6가지 핵심",
    description: "3세대 CBT인 수용전념치료와 미술치료의 통합 가이드.",
    images: ["/og/act-approach.png"],
  },
};

const actApproachSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/act-approach#article`,
      headline: "수용전념치료(ACT)란? 미술치료와 만나는 6가지 핵심 프로세스",
      description: "ACT 6 프로세스와 미술치료의 통합 접근 해설.",
      url: `${SITE_URL}/act-approach`,
      image: `${SITE_URL}/og/act-approach.png`,
      inLanguage: "ko-KR",
      author: { "@id": `${SITE_URL}/team#stella` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: "2026-04-15",
      dateModified: "2026-04-19",
      mainEntityOfPage: `${SITE_URL}/act-approach`,
      articleSection: "ACT 이론",
      about: [
        { "@type": "Thing", name: "Acceptance and Commitment Therapy" },
        { "@type": "Thing", name: "미술치료" },
        { "@type": "Thing", name: "심리적 유연성" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "ACT란?", item: `${SITE_URL}/act-approach` },
      ],
    },
    {
      "@type": "HowTo",
      name: "ACT 6 프로세스로 심리적 유연성 키우기",
      description: "ACT의 6가지 핵심 프로세스를 미술 활동으로 경험하는 가이드",
      step: [
        { "@type": "HowToStep", name: "수용 (Acceptance)", text: "감정을 밀어내지 않고 색을 입혀 표현합니다." },
        { "@type": "HowToStep", name: "인지적 탈융합 (Defusion)", text: "불안한 생각을 캐릭터로 외재화합니다." },
        { "@type": "HowToStep", name: "현재 순간 접촉 (Present Moment)", text: "손끝의 물감에 주의를 모으며 감각에 머뭅니다." },
        { "@type": "HowToStep", name: "맥락으로서의 자기 (Self-as-Context)", text: "다양한 '나'를 콜라주로 표현합니다." },
        { "@type": "HowToStep", name: "가치 (Values)", text: "당신에게 소중한 것을 상징으로 그립니다." },
        { "@type": "HowToStep", name: "전념 행동 (Committed Action)", text: "가치를 향한 한 걸음을 미술로 계획합니다." },
      ],
    },
  ],
};

export default function ActApproachPage() {
  return (
    <>
      <JsonLd data={actApproachSchema} />
      <PageHero
        title="수용전념치료(ACT)란? 미술치료와 만나는 6가지 핵심 프로세스"
        subtitle="심리적 유연성을 높이는 것을 목표로 하는 3세대 인지행동치료. 고통스러운 생각과 감정을 있는 그대로 수용하면서 가치를 향해 행동하는 법을 배웁니다."
        label="Acceptance and Commitment Therapy"
        imageSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1920&q=80"
        imageAlt="ACT 수용전념치료"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "ACT란?", href: "/act-approach" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      {/* 6 Processes */}
      <SectionWrapper bg="cream">
        <Container className="relative">
          {/* Acttie — 좌측 상단, fade-in reveal (데스크탑에서만 보이며 content column에 overlap) */}
          <CharacterIllustration
            name="acttie-laptop"
            alt=""
            width={280}
            height={280}
            hideOnMobile
            animation="fade-in"
            className="absolute left-0 top-4 z-[1] w-[220px] xl:w-[280px] -translate-x-6 opacity-90"
          />

          <div className="relative z-[2] text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT의 6가지 핵심 프로세스</h2>
            <p className="mt-4 text-charcoal/70 max-w-[44ch] mx-auto">
              여섯 가지 프로세스가 유기적으로 연결되어 심리적 유연성을 만들어갑니다.
            </p>
          </div>

          <div className="relative z-[2] space-y-8 max-w-3xl mx-auto">
            {ACT_PROCESSES.map((process, i) => (
              <div
                key={process.id}
                className="bg-white rounded-xl p-6 lg:p-8"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <span className="text-primary-500 font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-night text-xl font-semibold">
                      {process.title}
                      <span className="ml-2 text-primary-400 text-sm font-normal">{process.titleEn}</span>
                    </h3>
                    <p className="mt-2 text-charcoal/80 leading-relaxed">{process.description}</p>
                    <p className="mt-3 text-secondary-500 font-[var(--font-accent)] text-base italic">
                      &ldquo;{process.artConnection}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Psychological Flexibility */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-full mb-6">
              심리적 유연성
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              모든 프로세스가 향하는 하나의 목표
            </h2>
            <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
              심리적 유연성이란 현재 순간에 온전히 머무르면서, 자신의 가치에 따라 행동할 수 있는 능력입니다.
              이는 고통의 부재가 아니라, 고통 속에서도 의미 있는 삶을 살아가는 힘을 의미합니다.
            </p>
            <div className="mt-10">
              <Link
                href="/booking"
                className="inline-flex items-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
              >
                ACT 미술치료 경험하기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
