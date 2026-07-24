import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/art-therapy`;
const PAGE_TITLE = "미술치료란? 의미·진행 과정·대상";
const PAGE_DESCRIPTION =
  "미술치료의 의미와 치료적 관계, 세션 진행 과정, 아동·청소년·성인·그룹·온라인 미술치료를 공식 근거와 함께 안내합니다.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "미술치료",
    "미술치료란",
    "미술 치료",
    "미술심리치료",
    "미술치료 과정",
    "미술치료 대상",
    "서울 미술치료",
    "성인 미술치료",
    "아동 미술치료",
    "청소년 미술치료",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "ACT ART CENTER 미술치료 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: ["/og/default.png"],
  },
};

const faqItems = [
  {
    question: "미술치료란 무엇인가요?",
    answer:
      "미술치료는 훈련된 미술치료사와의 치료적 관계 안에서 미술 창작과 표현 과정을 활용하는 심리치료입니다. 이미지와 작품, 창작 과정, 대화를 함께 살피며 마음의 경험을 이해하고 표현하도록 돕습니다.",
  },
  {
    question: "그림을 잘 그려야 미술치료에 참여할 수 있나요?",
    answer:
      "미술 실력과 관계없이 참여할 수 있습니다. 완성도보다 지금 느끼는 감각과 감정, 표현 과정에서 만나는 경험을 중요하게 다룹니다.",
  },
  {
    question: "미술치료 세션에서는 무엇을 하나요?",
    answer:
      "현재 상태와 목표를 함께 확인하고, 치료사가 안전과 치료적 근거를 고려해 미술 매체와 활동을 제안합니다. 표현 과정과 작품을 함께 살핀 뒤 세션에서 만난 경험을 정리합니다.",
  },
  {
    question: "아동과 성인 모두 미술치료를 받을 수 있나요?",
    answer:
      "아동·청소년·성인·부모·그룹이 각자의 발달 단계와 필요에 맞게 참여할 수 있습니다. 방문이 어려운 경우에는 온라인 미술치료도 안내합니다.",
  },
  {
    question: "ACT ART CENTER의 미술치료는 어떻게 진행되나요?",
    answer:
      "미술치료를 중심으로 진행하며 ACT(수용전념)의 관점은 현재 경험을 알아차리고 삶의 가치를 살피는 보조 틀로 통합합니다. 초기 상담에서 치료사와 참여자가 방향과 속도를 함께 맞춥니다.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "미술치료란?", item: PAGE_URL },
      ],
    },
    {
      "@type": ["WebPage", "Article"],
      "@id": `${PAGE_URL}#article`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      headline: "미술치료란?",
      description: PAGE_DESCRIPTION,
      inLanguage: "ko-KR",
      datePublished: "2026-07-24",
      dateModified: "2026-07-24",
      author: { "@id": `${SITE_URL}/team#stella` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: PAGE_URL,
      about: [
        { "@type": "Thing", name: "미술치료", alternateName: "Art Therapy" },
        { "@type": "Thing", name: "미술심리치료" },
      ],
      citation: [
        "https://arttherapy.org/about-art-therapy/",
        "https://www.baat.org/About-Art-Therapy",
        "https://www.snuh.org/health/nMedInfo/nView.do?medid=BB000103",
      ],
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const programLinks = [
  {
    title: "성인 1:1 개인 미술치료",
    description: "불안·우울·번아웃·트라우마·관계의 어려움을 개인의 속도에 맞춰 살핍니다.",
    href: "/services/individual",
  },
  {
    title: "아동·청소년 미술치료",
    description: "발달 단계에 맞춘 미술 매체와 표현 과정으로 감정과 경험을 안전하게 만납니다.",
    href: "/services/child",
  },
  {
    title: "그룹 미술치료",
    description: "작은 그룹 안에서 함께 표현하고 나누며 관계와 삶의 가치를 탐색합니다.",
    href: "/services/group",
  },
  {
    title: "온라인 미술치료",
    description: "전국과 해외에서 화상으로 연결해 익숙한 공간에서 미술치료에 참여합니다.",
    href: "/services/online",
  },
];

export default function ArtTherapyPage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      <header className="bg-cream py-14 lg:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "미술치료란?", href: "/art-therapy" },
            ]}
            emitJsonLd={false}
          />
          <div className="mt-10 max-w-4xl">
            <p className="text-primary-500 text-xs font-semibold tracking-[0.18em] uppercase">
              Art Therapy
            </p>
            <h1 className="mt-3 text-night text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              미술치료란?
            </h1>
            <p className="mt-6 max-w-3xl text-charcoal/80 text-lg lg:text-xl leading-relaxed">
              미술치료는 미술 창작과 표현 과정을 치료적 관계 안에서 함께 경험하며,
              말로 다 전하기 어려운 마음을 이미지와 색, 형태로 만나도록 돕는 심리치료입니다.
            </p>
          </div>
        </Container>
      </header>

      <SectionWrapper bg="paper" className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
              미술치료의 중심에는 창작 과정과 치료적 관계가 있습니다
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-relaxed">
              <p>
                미국미술치료협회(AATA)는 미술치료를 능동적인 미술 창작, 창의적 과정,
                심리 이론과 인간의 경험이 심리치료적 관계 안에서 함께하는 정신건강 전문영역으로 설명합니다.
                영국미술치료사협회(BAAT)도 미술을 주요 표현 방식으로 활용하는 심리치료로 소개합니다.
              </p>
              <p>
                미술치료에서는 작품의 완성도보다 한 사람이 표현 과정에서 무엇을 느끼고 발견하는지를 세심하게 살핍니다.
                치료사는 정서적 안전, 현재 상태와 치료 목표를 고려해 미술 매체를 구조화하거나 제안하고,
                표현이 마음의 경험과 자연스럽게 이어지도록 동행합니다.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["표현", "말로 정리되기 전의 감각과 감정을 색·선·형태·이미지로 만납니다."],
              ["이해", "작품과 창작 과정에서 드러난 경험을 치료사와 함께 천천히 살핍니다."],
              ["연결", "새롭게 발견한 마음의 힘과 삶의 가치를 일상의 선택으로 이어 갑니다."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl bg-white p-6 lg:p-7">
                <h3 className="text-night text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream" className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
              미술치료 세션은 이렇게 이어집니다
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              초기 상담에서 치료사와 참여자가 방향과 속도를 함께 맞추며 신중하게 선택합니다.
              세션의 구체적인 흐름은 한 사람의 발달 단계와 현재 필요에 따라 달라집니다.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["01", "만남과 목표", "현재 경험과 기대, 안전하게 고려할 점을 함께 확인합니다."],
              ["02", "매체와 활동", "치료적 근거와 현재 상태에 맞는 미술 매체와 활동을 선택합니다."],
              ["03", "표현과 탐색", "창작 과정에 머물며 떠오르는 감각·감정·생각을 살핍니다."],
              ["04", "나눔과 정리", "작품과 경험을 함께 돌아보고 일상에서 이어 갈 방향을 정리합니다."],
            ].map(([number, title, description]) => (
              <li key={number} className="rounded-2xl bg-white p-6">
                <p className="text-primary-500 text-xs font-semibold tracking-widest">{number}</p>
                <h3 className="mt-2 text-night font-semibold">{title}</h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper" className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
              발달 단계와 상황에 맞는 미술치료
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              미술치료는 아동·청소년·성인·부모와 가족, 작은 그룹이 각자의 필요에 맞게 참여할 수 있습니다.
              ACT ART CENTER는 미술치료를 중심으로 개인·그룹·온라인 프로그램을 운영합니다.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {programLinks.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="group rounded-2xl bg-white p-6 lg:p-7 transition-transform active:translate-y-0.5"
              >
                <h3 className="text-night text-lg font-semibold group-hover:text-primary-500 transition-colors">
                  {program.title}
                </h3>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{program.description}</p>
                <span className="mt-5 inline-block text-secondary-500 text-sm font-medium">
                  프로그램 자세히 보기 →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="sand" className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
              ACT ART CENTER의 미술치료
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-relaxed">
              <p>
                ACT ART CENTER는 미술치료를 중심에 두고, ACT(수용전념)의 관점을 보조적으로 통합합니다.
                미술로 지금의 경험을 표현하고 충분히 머문 뒤, 한 사람에게 소중한 삶의 가치와 방향을 함께 탐색합니다.
              </p>
              <p>
                세션은 미술치료사 고은별이 진행합니다. 미술 전공과 창작 경험, 임상미술치료 연구와
                정신건강의학과·아동·난임·호스피스 환경의 임상 경험을 바탕으로 각 세션을 세심하게 구성합니다.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/team"
                className="inline-flex min-h-11 items-center rounded-full bg-night px-6 py-3 text-sm font-semibold text-white active:translate-y-0.5"
              >
                미술치료사 소개
              </Link>
              <Link
                href="/act-approach"
                className="inline-flex min-h-11 items-center rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-night active:translate-y-0.5"
              >
                ACT 통합 접근 알아보기
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper" className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-2xl lg:text-3xl font-bold tracking-tight">
              미술치료 자주 묻는 질문
            </h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-xl bg-white px-6 py-5">
                  <summary className="cursor-pointer list-none text-night font-semibold">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-charcoal/75 text-sm leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-charcoal/70">
              비용·예약·회기 관련 질문은{" "}
              <Link href="/faq" className="font-medium text-primary-500 hover:underline underline-offset-4">
                미술치료 FAQ 전체 보기
              </Link>
              에서 확인할 수 있습니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream" className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-night text-xl lg:text-2xl font-bold">참고한 공식 자료</h2>
            <ul className="mt-5 space-y-3 text-sm text-charcoal/70 leading-relaxed">
              <li>
                <a className="hover:text-primary-500 underline underline-offset-4" href="https://arttherapy.org/about-art-therapy/" target="_blank" rel="noopener noreferrer">
                  American Art Therapy Association, About Art Therapy
                </a>
              </li>
              <li>
                <a className="hover:text-primary-500 underline underline-offset-4" href="https://www.baat.org/About-Art-Therapy" target="_blank" rel="noopener noreferrer">
                  British Association of Art Therapists, What is art therapy?
                </a>
              </li>
              <li>
                <a className="hover:text-primary-500 underline underline-offset-4" href="https://www.snuh.org/health/nMedInfo/nView.do?medid=BB000103" target="_blank" rel="noopener noreferrer">
                  서울대학교병원 의학정보, 미술 치료 [art therapy]
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      <section className="bg-primary-500 py-14 lg:py-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold">나에게 맞는 미술치료를 함께 살펴보세요</h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              첫 상담에서 현재의 필요와 기대를 나누고, 치료사와 함께 방향과 속도를 정합니다.
            </p>
            <Link
              href="/booking"
              className="mt-7 inline-flex min-h-12 items-center rounded-full bg-white px-7 py-3 text-sm font-bold text-primary-600 active:translate-y-0.5"
            >
              첫 상담 예약하기
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
