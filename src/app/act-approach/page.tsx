import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ACT_PROCESSES, ACT_EVIDENCE_REFS } from "@/lib/constants";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT(수용전념) 미술치료 — 미술치료 안에서 만나는 심리적 유연성",
  description:
    "ACT ART CENTER는 미술치료를 중심에 두고 ACT(수용전념)의 관점을 보조적으로 통합합니다. 재료·이미지·표현 과정 안에서 감정, 생각, 가치 방향을 안전하게 탐색합니다.",
  keywords: [
    "미술치료",
    "ACT 미술치료",
    "수용전념 미술치료",
    "미술심리치료",
    "심리적 유연성",
    "정서 표현 미술치료",
    "ACT 6 프로세스",
    "수용전념치료 기법",
    "Hexaflex",
    "Steven Hayes",
  ],
  alternates: { canonical: `${SITE_URL}/act-approach` },
  openGraph: {
    type: "article",
    title: "ACT(수용전념) 미술치료 — 미술치료 안에서 만나는 6가지 과정",
    description:
      "미술치료의 재료와 표현 과정을 중심으로 ACT 6 프로세스를 보조적으로 통합하는 접근을 안내합니다.",
    url: `${SITE_URL}/act-approach`,
    images: [
      {
        url: "/og/act-approach.png",
        width: 1200,
        height: 630,
        alt: "ACT(수용전념) 미술치료 작업 과정",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT(수용전념) 미술치료",
    description: "미술치료를 중심으로 ACT 관점을 보조적으로 통합하는 안내.",
    images: ["/og/act-approach.png"],
  },
};

/**
 * JSON-LD @graph.
 *
 * - Article: articleBody 는 페이지 핵심 요약. HowTo step 개수와 설명은
 *   아래 Hexaflex 섹션의 실제 6개 프로세스와 1:1 매칭합니다.
 * - FAQPage 는 이 페이지에서 발행하지 않습니다. 프로젝트 A2 감사 P0 정책:
 *   FAQPage JSON-LD 는 `/faq` 페이지에서만 유일하게 emit 됩니다. 본 페이지의
 *   Q&A 섹션은 UI 전용이며 schema 중복을 피하기 위해 JSON-LD 를 추가하지
 *   않습니다.
 */
const actApproachSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/act-approach#article`,
      headline: "ACT(수용전념) 미술치료 — 미술치료 안에서 만나는 심리적 유연성",
      description:
        "ACT ART CENTER는 미술치료를 중심으로 ACT(수용전념)의 6가지 과정을 보조적으로 통합합니다. 재료·이미지·창작 과정 안에서 감정, 생각, 가치 방향을 안전하게 탐색하도록 안내합니다.",
      articleBody:
        "ACT ART CENTER의 중심은 미술치료입니다. 종이, 색, 선, 점토, 콜라주 같은 재료와 창작 과정은 말로 정리하기 어려운 감정과 몸의 반응을 안전하게 바라볼 수 있는 자리를 만듭니다. ACT(수용전념)는 이 미술치료 과정 안에서 보조적으로 통합되는 임상 틀입니다. 수용·탈융합·현재 순간 접촉·맥락으로서의 자기·가치·전념 행동이라는 6가지 과정은 작품을 완성하는 기준이 아니라, 표현 과정 안에서 감정과 생각을 관찰하고 삶의 방향을 확인하는 질문으로 활용됩니다. 수용전념치료(ACT)는 Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson 이 함께 정립한 3세대 인지행동치료이며, ACBS·APA Division 12 등 국제 학문적 토대와 다수의 임상 연구를 통해 알려져 있습니다. 본 페이지는 ACT 자체를 앞세우기보다, 미술치료 장면에서 ACT 관점이 어떻게 안전한 표현, 정서 조절, 가치 탐색을 돕는지 안내합니다.",
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
        { "@type": "Thing", name: "Psychological Flexibility" },
        { "@type": "Thing", name: "수용전념치료 기법" },
        { "@type": "Thing", name: "수용전념치료 육각형" },
        { "@type": "Thing", name: "수용전념치료 마음챙김" },
        { "@type": "Thing", name: "Relational Frame Theory" },
        { "@type": "Thing", name: "Association for Contextual Behavioral Science" },
        { "@type": "Thing", name: "APA Division 12" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "ACT 미술치료란?", item: `${SITE_URL}/act-approach` },
      ],
    },
    {
      "@type": "HowTo",
      name: "ACT 6 프로세스로 심리적 유연성 키우기",
      description:
        "미술치료 과정 안에서 ACT의 6가지 관점을 미술 활동으로 경험하는 가이드입니다. 각 단계는 Hexaflex 모델의 한 축을 시각적·감각적으로 경험할 수 있도록 구성됩니다.",
      step: ACT_PROCESSES.map((p) => ({
        "@type": "HowToStep",
        name: `${p.title} (${p.titleEn})`,
        text: `${p.essence} ${p.artIntegration}`,
      })),
    },
  ],
};

/**
 * 이 페이지 내 Q&A 섹션에 사용되는 질문 목록. FAQPage JSON-LD 는 발행하지
 * 않습니다 (정책은 위 schema 주석 참조).
 */
const IN_PAGE_QUESTIONS = [
  {
    q: "ACT 는 CBT 와 어떻게 다른가요?",
    a: "전통적인 인지행동치료(CBT) 는 왜곡된 생각을 찾아 더 합리적인 생각으로 바꾸는 데 초점을 둡니다. ACT 는 생각의 내용을 바꾸려 애쓰기보다, 생각과 나 사이의 거리를 만들어 \"생각에 사로잡히지 않고 행동할 수 있는 힘\" 을 키우는 데 초점을 둡니다. 같은 생각이 떠올라도 그것에 끌려다니지 않는 관계를 만드는 것이 목표입니다.",
  },
  {
    q: "수용이 체념과 다른가요?",
    a: "다릅니다. 체념은 \"아무것도 바꿀 수 없다\" 는 포기에 가깝지만, 수용은 \"지금 느끼는 이 감정이 있음\" 을 허용하면서 동시에 소중한 방향으로 한 걸음 내딛는 적극적 태도입니다. 감정에 반응하느라 쓰던 에너지를 가치 방향의 행동으로 돌리는 과정이기에 오히려 더 역동적입니다.",
  },
  {
    q: "저 같은 경우에도 효과가 있을까요?",
    a: "ACT 는 불안·우울·만성 통증·번아웃 등 다양한 영역에서 효과가 보고되어 왔지만, 모든 사람에게 동일한 효과가 보장되는 접근은 존재하지 않습니다. 현재 겪고 있는 어려움의 성격·기간·기존 상담 이력에 따라 접근이 달라지므로, 초기 상담에서 함께 살펴본 뒤 적합성을 판단하는 것이 가장 정확합니다.",
  },
  {
    q: "미술을 잘 못해도 ACT 미술치료가 가능한가요?",
    a: "네, 가능합니다. ACT 미술치료는 작품의 완성도가 아닌 창작 과정에서 일어나는 심리적 경험(감정의 흐름·생각의 관찰·가치 탐색)에 초점을 둡니다. 선 하나, 색 하나를 선택하는 작은 결정 속에서도 6 프로세스가 활성화되며, 치료사가 편안하게 안내합니다.",
  },
] as const;

export default function ActApproachPage() {
  return (
    <>
      <JsonLd data={actApproachSchema} />
      <PageHero
        title="ACT(수용전념) 미술치료"
        subtitle="ACT ART CENTER의 중심은 미술치료입니다. 재료와 이미지, 창작 과정 안에서 감정과 생각을 안전하게 바라보고, 필요한 경우 ACT(수용전념)의 관점을 보조적으로 통합합니다."
        label="Art Therapy with ACT"
        imageSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
        imageAlt="캔버스와 이젤이 있는 미술치료 작업 공간"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "ACT 미술치료란?", href: "/act-approach" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      {/* Intro — 미술치료 중심의 ACT 통합 */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
              미술치료 중심 통합 접근
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              먼저 미술치료, 그 안에서 ACT를 만납니다
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-[var(--leading-normal)]">
              <p>
                ACT ART CENTER의 중심은 미술치료입니다. 종이, 색, 선, 점토, 콜라주 같은 재료와
                창작 과정은 말로 정리하기 어려운 감정과 몸의 반응을 안전하게 바라볼 수 있는 자리를 만듭니다.
                작품의 완성도보다 표현의 과정, 재료를 선택하는 순간, 멈춤과 다시 시작하는 흐름을 세심하게 살핍니다.
              </p>
              <p>
                ACT(수용전념)는 이 미술치료 과정 안에서 보조적으로 통합됩니다. 떠오르는 감정과 생각을
                종이 위에 잠시 올려두고, 그 감정이 있는 상태에서도 내가 지키고 싶은 방향을 살펴보는 방식입니다.
                수용·탈융합·현재 순간·가치·전념 행동 같은 ACT의 개념은 미술 작업을 설명하기 위한 틀이자,
                표현을 더 안전하게 붙들어 주는 질문으로 사용됩니다.
              </p>
              <p className="text-charcoal/75">
                세션에서는 미술치료의 창작 과정과 치료적 관계를 중심에 두고,
                필요한 만큼 ACT의 관점을 연결합니다. 학술적 근거를 바탕으로 하되,
                내담자가 자신의 속도와 감각으로 이해할 수 있도록 재료, 이미지, 일상의 언어를 함께 활용합니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 6 Processes — Hexaflex 상세 */}
      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-[2] text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
              Hexaflex · 6 Core Processes
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">미술치료 안에서 경험하는 ACT 6가지 과정</h2>
            <p className="mt-4 text-charcoal/70 max-w-[52ch] mx-auto">
              미술치료 세션에서는 재료를 고르고, 감정을 이미지로 놓아 보고, 작품을 바라보는 과정 안에서
              심리적 유연성을 조금씩 경험합니다. ACT의 여섯 과정은 미술 작업을 이끄는 보조 질문으로
              사용되며, 중심은 언제나 표현 과정과 치료적 관계에 있습니다.
            </p>
          </div>

          {/* Hexaflex visual — 6각형 개념도 */}
          <div className="relative z-[2] mb-10 lg:mb-14 max-w-4xl mx-auto">
            <div className="hidden md:block relative h-[420px]">
              {[
                { idx: 0, x: "50%", y: "8%" },
                { idx: 1, x: "74%", y: "24%" },
                { idx: 2, x: "74%", y: "56%" },
                { idx: 3, x: "50%", y: "72%" },
                { idx: 4, x: "26%", y: "56%" },
                { idx: 5, x: "26%", y: "24%" },
              ].map((node) => {
                const p = ACT_PROCESSES[node.idx];
                return (
                  <div
                    key={`hex-${p.id}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div
                      className="w-[170px] h-[148px] bg-white/95 border border-primary-100 flex items-center justify-center text-center px-4"
                      style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", boxShadow: "var(--shadow-sm)" }}
                    >
                      <div>
                        <p className="text-[11px] text-primary-500 font-semibold tracking-wide">{p.titleEn}</p>
                        <p className="mt-1 text-sm lg:text-[15px] font-semibold text-night leading-tight">{p.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[190px] h-[190px] rounded-full bg-primary-500 text-white flex items-center justify-center text-center px-4 shadow-[var(--shadow-md)]">
                  <p className="text-sm lg:text-base font-semibold leading-snug">심리적 유연성<br />Psychological Flexibility</p>
                </div>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-2 gap-3">
              {ACT_PROCESSES.map((p) => (
                <div key={`hex-mobile-${p.id}`} className="bg-white rounded-xl p-3 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <p className="text-[11px] text-primary-500 font-semibold tracking-wide">{p.titleEn}</p>
                  <p className="mt-1 text-sm font-semibold text-night leading-tight">{p.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ACT_PROCESSES.map((process, i) => (
              <div
                key={process.id}
                className="bg-white rounded-2xl p-6 lg:p-8 h-full"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <span className="text-primary-600 font-bold text-base">{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-night text-lg lg:text-xl font-semibold leading-snug">
                      {process.title}
                      <span className="ml-2 text-primary-400 text-sm font-normal align-middle">
                        {process.titleEn}
                      </span>
                    </h3>
                    <p className="mt-2 text-charcoal/80 leading-relaxed text-[15px]">{process.essence}</p>
                  </div>
                </div>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="rounded-lg bg-paper px-4 py-3">
                    <dt className="text-xs font-semibold text-primary-600 uppercase tracking-wide">일상의 비유</dt>
                    <dd className="mt-1 text-charcoal/80 leading-relaxed">{process.metaphor}</dd>
                  </div>
                  <div className="rounded-lg bg-paper px-4 py-3">
                    <dt className="text-xs font-semibold text-primary-600 uppercase tracking-wide">미술치료와의 결합</dt>
                    <dd className="mt-1 text-charcoal/80 leading-relaxed">{process.artIntegration}</dd>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 pt-1">
                    <span className="font-semibold">경직성 극</span>
                    <span className="px-2 py-0.5 rounded-full bg-sand text-charcoal/70">
                      {process.inflexibilityPole}
                    </span>
                  </div>
                </dl>

                <p className="mt-5 text-secondary-500 font-[var(--font-accent)] text-sm italic">
                  &ldquo;{process.artConnection}&rdquo;
                </p>
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
          </div>
        </Container>
      </SectionWrapper>

      {/* Scientific foundation */}
      <SectionWrapper bg="sand">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
                과학적 근거
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                미술치료에 보조적으로 통합하는 ACT 근거
              </h2>
              <p className="mt-4 text-charcoal/70 max-w-[56ch] mx-auto">
                ACT ART CENTER는 미술치료의 창작 과정과 치료적 관계를 중심에 두고,
                ACT의 학문적 근거를 필요한 만큼 보조적으로 연결합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ACT_EVIDENCE_REFS.map((ref) => (
                <article
                  key={ref.label}
                  className="bg-white rounded-xl p-6 lg:p-7"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                    {ref.label}
                  </h3>
                  <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">{ref.detail}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-xs text-charcoal/60 leading-relaxed max-w-[70ch] mx-auto text-center">
              * 본 페이지에서 인용한 학회·연구자·이론은 모두 실재하는 출처입니다. 개별 임상 결과는 증상의
              특성과 기간, 이전 상담 경험 등에 따라 달라질 수 있으며, 어떤 접근도 100% 효과를 보장하지 않습니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section A — 미술치료 안에서 참고하는 ACT 배경 */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* 비대칭 헤더 — 좌측 정렬, 인용 블록은 우측으로 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
                  학술적 배경
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                  미술치료 안에서 참고하는 ACT의 학문적 배경
                </h2>
                <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                  미술치료 현장에서 ACT 관점을 보조적으로 사용할 때도 학문적 근거를 확인합니다.
                  아래 내용은 ACT를 앞세우기 위한 설명이 아니라, 미술치료 과정에 통합하는 개념의 배경을
                  투명하게 안내하기 위한 자료입니다.
                </p>
              </div>
              <div
                className="bg-cream rounded-2xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  &ldquo;미술치료가 먼저이고, ACT는 표현 과정 안에서 감정과 가치 방향을 살피도록 돕는
                  보조적 지도에 가깝습니다.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  ACBS · Association for Contextual Behavioral Science
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  ACT 와 관계틀이론을 중심으로 결성된 국제 학회로, 전 세계 60여 개 국가의 연구자·임상가가
                  회원으로 참여합니다. 매년 World Conference 를 개최하여 학술 교류와 임상 교육을 지속합니다.
                </p>
              </article>
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  APA Division 12 · 경험적으로 지지되는 치료 목록
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  미국심리학회(APA) Society of Clinical Psychology(Division 12) 의
                  Empirically Supported Treatments 목록에 ACT 가 등재되어 있어, 임상 현장에서 근거 기반
                  접근으로 참조됩니다.
                </p>
              </article>
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  주요 대학 리서치 랩
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  University of Nevada Reno(Steven Hayes), Ghent University(Belgium),
                  Bond University(Australia, Joseph Ciarrochi) 등 여러 대학 연구실이 ACT 와 관계틀이론,
                  심리적 유연성 측정 도구 개발을 이어오고 있습니다. Niklas Törneke 의 RFT 저술 또한 임상가용
                  표준 참고서로 읽힙니다.
                </p>
              </article>
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  대중서 · 강연
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  Steven Hayes 의 『Get Out of Your Mind and Into Your Life』(2005), 『A Liberated Mind』(2019)
                  는 세계 여러 언어로 번역되며 ACT 를 일반 독자에게 알려 왔습니다. Hayes 의 TEDx 강연
                  &ldquo;Psychological flexibility&rdquo; 도 온라인에서 공개 시청할 수 있습니다.
                </p>
              </article>
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  한국 내 학술 커뮤니티
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  국내에서도 ACBS(Association for Contextual Behavioral Science) 의 한국 네트워크와 ACT 연구·임상 커뮤니티가
                  형성되어 학술·임상 교육이 이어지고 있으나, 해외 대비 규모는 아직 작은 편입니다. 그래서 일반 내담자
                  사이에서 ACT 의 인지도는 낮게 느껴질 수 있습니다.
                </p>
              </article>
              <article
                className="bg-white rounded-xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                  적용 임상 범위
                </h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                  불안·우울·만성 통증·중독·PTSD·당뇨 자기관리·암 생존자 심리 적응·직장 스트레스 등
                  정신과 임상과 일반 의료·건강심리 영역 전반에 걸쳐 ACT 기반 개입이 보고되어 왔습니다.
                  단, 특정 증상에 대한 1차 선택 여부는 진단과 임상 판단에 따라 달라집니다.
                </p>
              </article>
            </div>

            <p className="mt-8 text-xs text-charcoal/60 leading-relaxed max-w-[70ch] mx-auto text-center">
              * 위 내용은 각 학회·대학·저자의 공개된 공식 정보에 근거합니다. 특정 국가의 제도적 보험 급여
              여부, 세부 가이드라인 등은 국가·기관마다 다르므로 본 페이지에서는 일반적 위상만 안내드립니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section B — 미술치료 과정에서 ACT가 도움이 될 수 있는 순간 */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 lg:mb-14">
              <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
                내담자 관점
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                미술치료 과정에서 ACT가 도움이 될 수 있는 순간
              </h2>
              <p className="mt-5 text-charcoal/75 leading-[var(--leading-normal)] max-w-[60ch]">
                아래 내용은 ACT를 독립된 주제로 앞세우기보다, 미술치료 장면에서 재료와 이미지가
                감정·생각·가치 방향을 어떻게 다루도록 돕는지 정리한 안내입니다.
              </p>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "01",
                  head: "그림 안에서 삶의 방향을 다시 만날 때",
                  body:
                    "미술치료에서는 지금의 감정과 함께 내가 지키고 싶은 방향을 이미지로 살펴볼 수 있습니다. ACT 관점은 증상이 모두 사라진 뒤 움직이는 방식이 아니라, 지금 가능한 작은 선택을 작품과 대화 속에서 찾아가도록 돕습니다.",
                },
                {
                  n: "02",
                  head: "불편한 감정을 색과 형태로 바라볼 때",
                  body:
                    "슬픔·불안·분노는 종이 위에서 색, 선, 압력, 여백으로 나타날 수 있습니다. ACT 관점은 그 표현을 밀어내기보다 안전하게 관찰하도록 돕고, 미술치료사는 그 과정이 감당 가능한 속도로 이어지도록 함께합니다.",
                },
                {
                  n: "03",
                  head: "짧은 작업부터 장기 동행까지 구성할 때",
                  body:
                    "미술치료는 한 장의 이미지로 시작하는 짧은 탐색부터, 반복 세션을 통한 장기 동행까지 구성할 수 있습니다. ACT의 6가지 과정은 세션 목표와 속도를 정리하는 보조 틀이 되어 줍니다.",
                },
                {
                  n: "04",
                  head: "오래된 감정 패턴을 작품으로 살펴볼 때",
                  body:
                    "오래 반복된 불안, 번아웃, 상실감, 관계의 긴장은 말로만 정리하기 어려울 수 있습니다. 미술치료에서는 그 패턴을 이미지와 재료의 흐름으로 살피고, ACT 관점은 지금 가능한 행동 방향을 함께 확인하도록 돕습니다.",
                },
                {
                  n: "05",
                  head: "인간이라면 누구나 겪을 수 있는 것",
                  body:
                    "힘든 마음은 개인의 결함이 아니라 인간이라면 누구나 만날 수 있는 경험입니다. 미술치료에서는 그 마음을 색과 형태로 안전하게 바라보며, ACT 관점은 자기비난에서 한 걸음 물러나 지금 필요한 방향을 살피도록 돕습니다.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="bg-white rounded-2xl p-6 lg:p-7 flex gap-5"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <span className="shrink-0 text-primary-400 font-[var(--font-accent)] text-2xl lg:text-3xl leading-none tracking-tight">
                    {item.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                      {item.head}
                    </h3>
                    <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 text-center">
              <p className="text-sm text-charcoal/75 leading-relaxed max-w-[56ch] mx-auto">
                이 다섯 가지 중 하나라도 공감되셨다면, 첫 무료 상담에서 그 부분부터 차근히 이야기해
                보실 수 있습니다.
              </p>
              <Link
                href="/booking"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
              >
                첫 상담에서 이 부분 이야기해 보기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Section C — 당신이 지금 이런 상태라면 (자기 인식 질문) */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 lg:mb-12">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
                자기 인식 지점
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                당신이 지금 이런 상태라면
              </h2>
              <p className="mt-5 text-charcoal/75 leading-[var(--leading-normal)]">
                아래 질문 중 하나라도 &ldquo;내 이야기 같다&rdquo; 라는 느낌이 드신다면, 미술치료 안에서 이 경험을
                어떻게 안전하게 바라볼 수 있는지 함께 살펴보실 수 있습니다.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "\u201C쉬어도 회복이 안 됩니다\u201D",
                  empathy:
                    "충분히 자고, 해야 할 것을 줄여도 몸과 마음이 가벼워지지 않을 때가 있습니다.",
                  actLens:
                    "ACT 에서는 이 경험을 \u201C회복이 안 되는 것\u201D 이 아니라 \u201C몸이 계속 긴장을 붙들고 있는 것\u201D 으로 보고, 감각과 가치를 다시 연결하는 방향으로 접근합니다.",
                },
                {
                  q: "\u201C감정이 잘 느껴지지 않습니다\u201D",
                  empathy:
                    "기쁨도 슬픔도 흐릿해지고, \u201C아무 느낌이 없다\u201D 는 상태가 익숙해진 경우가 있습니다.",
                  actLens:
                    "ACT 에서는 이를 감정의 부재보다 \u201C오랜 회피가 만들어 낸 감정의 안개\u201D 관점으로 보고, 안전한 속도로 감정과 다시 접촉하는 경험을 설계합니다.",
                },
                {
                  q: "\u201C노력해도 같은 자리로 돌아옵니다\u201D",
                  empathy:
                    "결심하고, 시도하고, 다시 무너지는 패턴이 반복될 때 스스로에 대한 신뢰가 흔들립니다.",
                  actLens:
                    "ACT 에서는 이를 의지력의 문제로 보지 않고, \u201C어떤 규칙(언어 규칙)이 반복을 만들고 있는지\u201D 살펴본 뒤 다른 관계 맺기 방식을 연습합니다.",
                },
                {
                  q: "\u201C해야 할 것은 아는데 몸이 안 움직입니다\u201D",
                  empathy:
                    "머리로는 알지만 행동이 따라 주지 않을 때의 답답함은, 게으름이 아니라 신호에 가깝습니다.",
                  actLens:
                    "ACT 에서는 이 간극을 \u201C가치와 현재 행동 사이의 거리\u201D 로 구체화하고, 그 거리를 줄이는 가장 작은 한 걸음(전념 행동)을 함께 고릅니다.",
                },
                {
                  q: "\u201C중요한 게 뭔지 모르겠습니다\u201D",
                  empathy:
                    "해야 할 것은 많은데, 정작 \u201C내가 왜 살고 있지\u201D 라는 질문에는 답이 선명하지 않을 수 있습니다.",
                  actLens:
                    "ACT 에서는 이 상태를 가치가 없는 것이 아니라 \u201C가치가 일상에 연결되지 못한 상태\u201D 로 보고, 작품·언어·작은 선택을 통해 가치를 다시 드러나게 돕습니다.",
                },
              ].map((item) => (
                <article
                  key={item.q}
                  className="bg-cream rounded-2xl p-6 lg:p-7"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">
                    {item.empathy}
                  </p>
                  <p className="mt-3 text-primary-600 leading-relaxed text-[15px]">
                    {item.actLens}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-charcoal/75 leading-relaxed max-w-[56ch] mx-auto">
                이런 경험 중 하나라도 있으시다면, 첫 세션에서 이 지점부터 함께 살펴보겠습니다.
              </p>
              <Link
                href="/booking"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 text-sm font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                내 이야기부터 꺼내 보기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ACT × Art Therapy integration */}
      <SectionWrapper bg="sand">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
              ACT × 미술치료
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              왜 ACT 와 미술치료를 함께 사용할까요?
            </h2>

            <div className="mt-6 space-y-5 text-charcoal/80 leading-[var(--leading-normal)]">
              <p>
                말로 설명하기 어려운 감정일수록, 언어로 접근할 때 오히려 방어가 강해지는 경우가 많습니다.
                미술 작업은 언어 이전의 감각·이미지 경로를 통해 내면의 경험에 접근하도록 돕기 때문에,
                ACT 가 중요하게 여기는 &ldquo;경험적 접촉&rdquo; 을 자연스럽게 열어 줍니다.
              </p>
              <p>
                특히 이미지로 표현된 생각은 &ldquo;내가 그 생각이다&rdquo; 가 아니라 &ldquo;저기 종이 위에 놓인 하나의 형태&rdquo;
                로 존재하게 됩니다. 이 거리 두기 자체가 인지적 탈융합을 몸으로 경험하게 하는 과정입니다.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="text-night text-base font-semibold">수용 훈련의 매체</h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  감정을 색·질감·선으로 &ldquo;둘 수 있는 공간&rdquo; 을 만드는 경험은, 감정을 억누르지 않으면서
                  그대로 머무는 연습이 됩니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="text-night text-base font-semibold">가치 명료화 도구</h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  말로 정리하기 전 이미지로 먼저 표현된 가치는, 이성적 합리화가 개입하기 전의 진솔한
                  방향을 비춰 줍니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="text-night text-base font-semibold">노출·행동 리허설</h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  두려워하던 상황을 단계적으로 시각화·형상화하는 작업은 상상 노출 과 전념 행동의
                  안전한 예행연습으로 기능합니다.
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs text-charcoal/60 leading-relaxed">
              * ACT 와 미술치료의 통합 효과에 대한 연구는 최근 10년 사이 꾸준히 축적되고 있는 영역입니다.
              고전 ACT 단독 프로토콜보다 무작위 대조 임상연구(RCT) 의 수는 적으며, 본 센터는 내담자에게
              이 점을 투명하게 안내한 뒤 개별 맞춤 방식으로 통합합니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* In-page Q&A (no FAQPage JSON-LD; reserved for /faq) */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
                자주 받는 질문
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                ACT 를 처음 접하시는 분들이 많이 묻는 것
              </h2>
            </div>

            <div className="space-y-4">
              {IN_PAGE_QUESTIONS.map((item) => (
                <article
                  key={item.q}
                  className="bg-white rounded-xl p-6 lg:p-7"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <h3 className="text-night text-base lg:text-lg font-semibold leading-snug">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-charcoal/80 leading-relaxed text-[15px]">{item.a}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs text-charcoal/60 text-center">
              더 많은 질문은{" "}
              <Link href="/faq" className="underline decoration-primary-400 underline-offset-2 hover:text-primary-600">
                전체 FAQ
              </Link>
              {" "}에서 확인하실 수 있습니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              당신의 이야기와 연결된 ACT 를 함께 찾아 봅니다
            </h2>
            <p className="mt-5 text-charcoal/75 leading-[var(--leading-normal)]">
              ACT 는 매뉴얼대로 찍어내는 접근이 아닙니다. 지금 당신이 겪고 있는 문제와 가장 잘 맞는
              프로세스부터, 미술치료의 속도에 맞춰 함께 열어 갑니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
              >
                첫 상담 예약하기
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                서비스 전체 보기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
