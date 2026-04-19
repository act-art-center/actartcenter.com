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
        "Hayes·Strosahl·Wilson 이 정립한 수용전념치료(ACT)의 6가지 핵심 프로세스(수용·탈융합·현재 순간·맥락으로서의 자기·가치·전념 행동)를 미술치료와 통합해 해설합니다. ACBS·RFT 등 근거 기반 학문적 토대를 함께 안내합니다.",
      articleBody:
        "수용전념치료(ACT)는 Steven C. Hayes, Kirk D. Strosahl, Kelly G. Wilson 이 함께 정립한 3세대 인지행동치료입니다. 관계틀이론(RFT) 을 이론적 토대로 하며, 수용·탈융합·현재 순간 접촉·맥락으로서의 자기·가치·전념 행동 이라는 6가지 핵심 프로세스를 통해 심리적 유연성을 높이는 것을 목표로 합니다. 미술치료는 언어 이전의 감각·이미지 경로를 열어 주기 때문에 이 6개 과정을 경험적으로 탐색하기에 적합한 매체입니다. 불안·우울·만성 통증·번아웃·트라우마 등에서의 유효성은 다수의 메타분석(A-Tjak et al., 2015; Gloster et al., 2020 등)에서 보고되어 왔으나, 모든 사례에 동일하게 작동하는 만병통치는 아니며 개별 상담과 임상 판단이 필요합니다.",
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

      {/* ACT × Art Therapy integration */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full mb-5">
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
              <div className="bg-cream rounded-xl p-5">
                <h3 className="text-night text-base font-semibold">수용 훈련의 매체</h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  감정을 색·질감·선으로 &ldquo;둘 수 있는 공간&rdquo; 을 만드는 경험은, 감정을 억누르지 않으면서
                  그대로 머무는 연습이 됩니다.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <h3 className="text-night text-base font-semibold">가치 명료화 도구</h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  말로 정리하기 전 이미지로 먼저 표현된 가치는, 이성적 합리화가 개입하기 전의 진솔한
                  방향을 비춰 줍니다.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
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
