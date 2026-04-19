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
  title: "수용전념치료(ACT)란? ACT 미술치료 6가지 핵심 프로세스",
  description:
    "수용전념치료(ACT)는 심리적 유연성을 키우는 3세대 인지행동치료입니다. 수용·탈융합·현재 순간·맥락으로서의 자기·가치·전념 행동 6가지 핵심 프로세스를 미술치료와 통합해 근거 기반으로 안내합니다.",
  keywords: [
    "수용전념치료",
    "ACT 치료",
    "ACT 미술치료",
    "심리적 유연성",
    "3세대 인지행동치료",
    "ACT 6 프로세스",
    "Hexaflex",
    "Steven Hayes",
  ],
  alternates: { canonical: `${SITE_URL}/act-approach` },
  openGraph: {
    type: "article",
    title: "수용전념치료(ACT)란? 6가지 핵심 프로세스 × 미술치료",
    description:
      "ACT 6 프로세스(수용/탈융합/현재/자기/가치/전념)와 미술치료의 통합 접근. 실제 연구 기반 해설.",
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
      headline: "수용전념치료(ACT)란? 미술치료와 만나는 6가지 핵심 프로세스",
      description:
        "Hayes·Strosahl·Wilson 이 정립한 수용전념치료(ACT)의 6가지 핵심 프로세스(수용·탈융합·현재 순간·맥락으로서의 자기·가치·전념 행동)를 미술치료와 통합해 해설합니다. ACBS·APA Division 12·RFT 등 국제 학문적 토대, 내담자가 ACT 에 끌릴 수 있는 다섯 가지 이유, 자기 인식 질문까지 함께 안내합니다.",
      articleBody:
        "수용전념치료(ACT)는 Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson 이 함께 정립한 3세대 인지행동치료입니다. 관계틀이론(RFT) 을 이론적 토대로 하며, 수용·탈융합·현재 순간 접촉·맥락으로서의 자기·가치·전념 행동 이라는 6가지 핵심 프로세스를 통해 심리적 유연성을 높이는 것을 목표로 합니다. 국제적으로는 Association for Contextual Behavioral Science(ACBS) 가 60여 개 국 회원이 참여하는 학술 커뮤니티로 운영되고 있으며, APA Division 12(Society of Clinical Psychology) 의 경험적으로 지지되는 치료(Empirically Supported Treatments) 목록에도 ACT 가 등재되어 있습니다. University of Nevada Reno, Ghent University, Bond University 등 여러 대학 연구실이 ACT 와 관계틀이론 연구를 지속하고 있고, Steven Hayes 의 『Get Out of Your Mind and Into Your Life』(2005) 와 『A Liberated Mind』(2019) 는 세계 여러 언어로 번역되어 대중에게 전해졌습니다. 한국에서는 한국수용전념치료학회(KACBS) 등을 중심으로 학술·임상 커뮤니티가 형성되는 단계에 있습니다. 미술치료는 언어 이전의 감각·이미지 경로를 열어 주기 때문에 이 6개 과정을 경험적으로 탐색하기에 적합한 매체입니다. 불안·우울·만성 통증·번아웃·트라우마 등에서의 유효성은 다수의 메타분석(A-Tjak et al., 2015; Gloster et al., 2020 등)에서 보고되어 왔으나, 모든 사례에 동일하게 작동하는 만병통치는 아니며 개별 상담과 임상 판단이 필요합니다. 본 페이지는 ACT 의 국제적 위상, 내담자가 ACT 에 끌릴 수 있는 다섯 가지 이유, 그리고 \"지금 이런 상태\" 라는 자기 인식 지점을 함께 안내합니다.",
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
        { "@type": "Thing", name: "Relational Frame Theory" },
        { "@type": "Thing", name: "Association for Contextual Behavioral Science" },
        { "@type": "Thing", name: "APA Division 12" },
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
      description:
        "ACT 의 6가지 핵심 프로세스를 미술 활동으로 경험하는 가이드. 각 단계는 Hexaflex 모델의 한 축을 시각적·감각적으로 경험할 수 있도록 구성됩니다.",
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

      {/* Intro — ACT 의 기원과 맥락 */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
              ACT 개요
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              고통을 없애는 대신, 고통과 함께 사는 법을 배웁니다
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-[var(--leading-normal)]">
              <p>
                수용전념치료(Acceptance and Commitment Therapy, ACT) 는 Steven C. Hayes,
                Kirk D. Strosahl, Kelly G. Wilson 이 함께 정립한 3세대 인지행동치료입니다.
                기존 CBT 가 &ldquo;잘못된 생각을 합리적 생각으로 바꾸는 것&rdquo; 을 중요하게 여겼다면,
                ACT 는 &ldquo;생각과 나 사이에 공간을 만들어 가치 방향으로 움직이는 힘&rdquo; 을 키우는 데 초점을 둡니다.
              </p>
              <p>
                ACT 가 가정하는 전제는 단순합니다. 불안·우울·분노 같은 감정을 없애려 애쓸수록 그 감정에 더
                오래 붙들리게 된다는 것입니다. 대신 ACT 는 &ldquo;그 감정이 있어도 내가 소중하게 여기는
                방향으로 한 걸음 옮길 수 있다&rdquo; 라는 심리적 유연성을 훈련합니다.
              </p>
              <p className="text-charcoal/75">
                본 센터는 차의과학대학교에서 미술치료 석사를 마치고 박사 과정을 이수 중인 원장이 ACT 의
                6 프로세스를 미술치료 임상에 통합해 진행합니다. 학술적 근거를 기반으로 하되, 내담자가
                자신의 언어로 이해할 수 있도록 일상의 비유와 감각적 작업을 함께 활용합니다.
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
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT 의 6가지 핵심 프로세스</h2>
            <p className="mt-4 text-charcoal/70 max-w-[52ch] mx-auto">
              여섯 프로세스는 유기적으로 연결되어 &ldquo;심리적 유연성&rdquo; 이라는 하나의 능력을 만듭니다.
              각 프로세스에는 반대편의 &ldquo;경직성 극 (inflexibility pole)&rdquo; 이 있으며, 세션은 이 축을
              따라 유연성 쪽으로 이동하는 여정입니다.
            </p>
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
                ACT 의 학문적 토대와 근거 기반 실천
              </h2>
              <p className="mt-4 text-charcoal/70 max-w-[56ch] mx-auto">
                ACT 는 철학·이론·임상 근거가 누적된 접근 모델입니다. 특정 유행이 아닌, 국제 학회와
                다수의 메타분석에 의해 지속적으로 검증되어 온 접근입니다.
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

      {/* Section A — 세계가 이미 쓰고 있는 접근 (국제적 위상) */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* 비대칭 헤더 — 좌측 정렬, 인용 블록은 우측으로 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
                  국제적 위상
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                  세계가 이미 쓰고 있는 접근, 한국에서는 이제 시작입니다
                </h2>
                <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
                  한국에서 ACT 는 아직 많은 분들께 낯선 이름이지만, 해외에서는 수십 년간 학문적으로 축적되고
                  임상 현장에 적용되어 온 접근입니다. 어떤 학회·어떤 대학·어떤 임상 영역에서 ACT 가 다뤄지고
                  있는지 아래에 있는 그대로 정리해 드립니다.
                </p>
              </div>
              <div
                className="bg-cream rounded-2xl p-6 lg:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  &ldquo;ACT 는 특정 지역의 유행이 아니라, 국제적 학술 커뮤니티와 여러 대학 연구실이 함께
                  다듬어 온 공공 지식에 가깝습니다.&rdquo;
                </p>
                <p className="mt-3 text-xs text-charcoal/55">
                  — 본 센터 원장의 임상 노트 중에서
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
                  한국수용전념치료학회(KACBS) 등 국내 학술 커뮤니티가 형성되어 연구와 임상 교육이 진행되고
                  있으나, 해외 대비 규모는 아직 작은 편입니다. 그래서 일반 내담자 사이에서 ACT 의 인지도는
                  낮게 느껴질 수 있습니다.
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

      {/* Section B — ACT 가 당신에게 매력적일 수 있는 5가지 이유 */}
      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 lg:mb-14">
              <span className="inline-block px-4 py-2 bg-white text-primary-600 text-xs font-semibold rounded-full mb-5">
                내담자 관점
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                ACT 가 당신에게 매력적일 수 있는 다섯 가지 이유
              </h2>
              <p className="mt-5 text-charcoal/75 leading-[var(--leading-normal)] max-w-[60ch]">
                아래는 기존 상담·치료가 잘 맞지 않았거나, 처음 상담을 고민하고 계신 분들이 ACT 에서 비교적
                공감하기 쉬운 지점을 정리한 것입니다. 모든 분께 해당하는 보편 진리가 아니라, &ldquo;이런 부분이
                마음에 와 닿으신다면 세션에서 더 깊게 다뤄 볼 수 있습니다&rdquo; 라는 의미로 읽어 주세요.
              </p>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "01",
                  head: "증상 제거가 아닌 \u201C가치 있는 삶\u201D 회복",
                  body:
                    "전통적인 CBT 가 \u201C나쁜 생각을 더 합리적인 생각으로 바꾸자\u201D 에 초점을 둔다면, ACT 는 \u201C나쁜 생각이 있어도 삶은 계속된다\u201D 를 전제로 합니다. 증상이 100% 사라지길 기다리지 않고도, 소중한 방향으로 한 걸음씩 옮기는 연습을 함께합니다.",
                },
                {
                  n: "02",
                  head: "불편한 감정을 억누르지 않아도 됩니다",
                  body:
                    "\u201C긍정적으로 생각하세요\u201D 라는 사회적 압력 대신, 슬픔·불안·분노도 정당한 경험으로 받아들입니다. 저항할수록 커지는 감정을 이미 경험해 보신 분이라면, \u201C그 감정이 있어도 괜찮다\u201D 는 ACT 의 전제에서 숨 쉴 틈이 생기는 걸 경험하실 수 있습니다.",
                },
                {
                  n: "03",
                  head: "단기 · 장기 모두 적용 가능한 구조",
                  body:
                    "ACT 는 6\u201316 회기 수준의 단기 프로토콜부터 장기 개인화 세션까지 설계가 가능합니다. \u201C우선 짧게라도 해 보고 싶다\u201D 는 분들께는 진입 장벽이 낮고, 장기 동행이 필요한 분께는 가치 기반 장기 계획이 가능합니다.",
                },
                {
                  n: "04",
                  head: "만성 · 복합 문제에도 근거가 쌓여 왔습니다",
                  body:
                    "만성 통증, 난치성 우울, 물질 사용 장애, 암 생존자의 심리 적응 등 기존 개입이 제한적으로 느껴지는 영역에서도 ACT 기반 개입의 효과가 보고되어 왔습니다. \u201C제 경우는 너무 오래돼서 안 될 것 같아요\u201D 라고 느끼신다면, 바로 그 지점을 세션에서 함께 점검해 볼 수 있습니다.",
                },
                {
                  n: "05",
                  head: "\u201C당신이 이상한 게 아니라, 인간이라면 겪는 것\u201D",
                  body:
                    "ACT 의 핵심 메시지 중 하나는 \u201C고통은 언어를 쓰는 인간의 기본 조건이지 개인의 결함이 아니다\u201D 라는 프레임입니다. \u201C나는 왜 이렇게까지 힘들지?\u201D 라는 자기비난의 악순환에서 한 걸음 물러설 수 있도록 돕습니다.",
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
                아래 질문 중 하나라도 &ldquo;내 이야기 같다&rdquo; 라는 느낌이 드신다면, ACT 가 이 경험을 어떤
                관점으로 다루는지 짧게 함께 살펴보시지요.
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
