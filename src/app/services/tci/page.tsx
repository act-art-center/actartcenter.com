import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_URL } from "@/lib/constants";

const path = "/services/tci";

export const metadata: Metadata = {
  title: "TCI 기질·성격검사와 해석 상담",
  description:
    "TCI의 4개 기질 차원과 3개 성격 차원을 바탕으로 반응 경향, 자기조절, 관계와 의미 경험을 살펴봅니다. 진단이나 고정 유형이 아닌 대화와 미술치료 계획을 위한 보조 자료로 신중하게 해석합니다.",
  keywords: [
    "TCI 검사",
    "TCI 기질검사",
    "TCI 성격검사",
    "기질 및 성격검사",
    "TCI 해석 상담",
    "미술치료 성격검사",
  ],
  alternates: { canonical: `${SITE_URL}${path}` },
  openGraph: {
    type: "website",
    title: "TCI 기질·성격검사와 해석 상담 | ACT ART CENTER",
    description:
      "TCI 결과를 진단이나 낙인이 아닌, 한 사람의 반응 경향과 삶의 방향을 이해하는 보조 자료로 살펴봅니다.",
    url: `${SITE_URL}${path}`,
  },
  twitter: {
    card: "summary",
    title: "TCI 기질·성격검사와 해석 상담 | ACT ART CENTER",
    description:
      "4개 기질 차원과 3개 성격 차원을 대화와 생활 맥락 안에서 신중하게 해석합니다.",
  },
};

const temperamentDimensions = [
  {
    code: "NS",
    name: "자극추구",
    description:
      "새로움과 보상 가능성에 반응하고 탐색을 시작하는 경향을 살펴봅니다. 점수는 호기심의 좋고 나쁨이 아니라 새로운 상황에 다가가는 상대적 방식을 보여줍니다.",
  },
  {
    code: "HA",
    name: "위험회피",
    description:
      "불확실성, 위험 또는 처벌 가능성을 예상할 때 걱정하고 행동을 조절하거나 멈추는 경향을 살펴봅니다.",
  },
  {
    code: "RD",
    name: "사회적 민감성",
    description:
      "친밀감, 인정과 같은 사회적 보상과 관계의 신호에 반응하며 관계를 유지하는 경향을 살펴봅니다.",
  },
  {
    code: "P",
    name: "인내력",
    description:
      "피로, 좌절 또는 즉각적인 보상이 없는 상황에서도 하던 행동을 지속하는 경향을 살펴봅니다.",
  },
];

const characterDimensions = [
  {
    code: "SD",
    name: "자율성",
    description:
      "자신이 선택한 목표와 가치에 맞게 행동을 조절하고, 책임감과 주도성을 발휘하는 방식을 살펴봅니다.",
  },
  {
    code: "CO",
    name: "연대감",
    description:
      "다른 사람을 수용하고 공감하며 협력하는 방식, 그리고 자신을 공동체의 한 구성원으로 경험하는 방식을 살펴봅니다.",
  },
  {
    code: "ST",
    name: "자기초월",
    description:
      "자신을 더 큰 전체와 연결해 경험하고 의미와 통합감을 찾는 경향을 살펴봅니다. 특정 종교의 유무나 우열을 평가하는 차원이 아닙니다.",
  },
];

const reasons = [
  {
    title: "반응의 패턴을 언어로 정리합니다",
    description:
      "새로움, 불확실성, 관계의 신호와 좌절에 어떻게 반응하는지 상대적인 경향을 살펴보고, 생활 속 경험과 연결해 이야기합니다.",
  },
  {
    title: "강점과 어려움을 함께 봅니다",
    description:
      "같은 특성도 상황에 따라 자원이 되거나 부담이 될 수 있습니다. 점수 하나보다 차원들이 서로 만나는 방식과 현재 맥락을 함께 살핍니다.",
  },
  {
    title: "상담의 질문을 구체화합니다",
    description:
      "검사 결과를 결론으로 삼지 않고, 자기조절·관계·목표·의미 경험 중 어떤 부분을 더 이야기해 볼지 정하는 출발점으로 사용합니다.",
  },
];

const flow = [
  {
    number: "01",
    title: "상담 주제 확인",
    description:
      "검사를 통해 궁금한 점과 현재 생활 맥락을 먼저 나눕니다. 연령과 상담 목적에 따라 적용 여부와 검사판을 확인합니다.",
  },
  {
    number: "02",
    title: "TCI 자기보고 검사",
    description:
      "문항을 읽고 자신의 평소 모습을 기준으로 응답합니다. 정답은 없으며 가능한 한 솔직하고 편안하게 응답합니다.",
  },
  {
    number: "03",
    title: "그림을 통한 성찰",
    description:
      "원한다면 검사에서 떠오른 경험을 그림으로 표현합니다. 이 활동은 표준 TCI 채점의 일부가 아니며, 검사 결과를 확인하는 투사검사로 사용하지 않습니다.",
  },
  {
    number: "04",
    title: "해석 상담",
    description:
      "7개 차원의 상대적 프로파일을 생활 경험과 함께 살펴보고, 도움이 되는 환경과 상담·미술치료의 방향을 함께 정리합니다.",
  },
];

const references = [
  {
    citation:
      "Cloninger, C. R. (1993). A psychobiological model of temperament and character. Archives of General Psychiatry, 50(12), 975–990.",
    href: "https://doi.org/10.1001/archpsyc.1993.01820240059008",
  },
  {
    citation:
      "Cloninger, C. R., Przybeck, T. R., Svrakic, D. M., & Wetzel, R. D. (1994). The Temperament and Character Inventory (TCI): A guide to its development and use. Center for Psychobiology of Personality, Washington University.",
    href: "https://doi.org/10.1037/t03902-000",
  },
  {
    citation:
      "Sung, S. M., Kim, J. H., Yang, E., Abrams, K. Y., & Lyoo, I. K. (2002). Reliability and validity of the Korean version of the Temperament and Character Inventory. Comprehensive Psychiatry, 43(3), 235–243.",
    href: "https://doi.org/10.1053/comp.2002.30794",
  },
  {
    citation:
      "Farmer, R. F., & Goldberg, L. R. (2008). A psychometric evaluation of the revised Temperament and Character Inventory (TCI-R) and the TCI-140. Psychological Assessment, 20(3), 281–291.",
    href: "https://doi.org/10.1037/a0012934",
  },
  {
    citation:
      "Garcia, D., Lester, N., Cloninger, K. M., & Cloninger, C. R. (2020). Temperament and Character Inventory (TCI). In Encyclopedia of Personality and Individual Differences (pp. 5408–5410). Springer.",
    href: "https://doi.org/10.1007/978-3-319-24612-3_91",
  },
  {
    citation:
      "Josefsson, K., Jokela, M., Cloninger, C. R., Hintsanen, M., Salo, J., Hintsa, T., Pulkki-Råback, L., & Keltikangas-Järvinen, L. (2013). Maturity and change in personality: Developmental trends of temperament and character in adulthood. Development and Psychopathology, 25(3), 713–727.",
    href: "https://doi.org/10.1017/S0954579413000126",
  },
];

const faq = [
  {
    question: "TCI로 정신건강 문제를 진단할 수 있나요?",
    answer:
      "아닙니다. TCI는 성격의 여러 차원을 살펴보는 자기보고식 검사이며, 정신질환을 확정하는 진단검사가 아닙니다. 진단이 필요한 경우에는 의료기관의 종합적인 평가가 필요합니다.",
  },
  {
    question: "높은 점수와 낮은 점수 중 어느 쪽이 좋은가요?",
    answer:
      "점수 자체에 절대적인 좋고 나쁨은 없습니다. 같은 경향도 환경과 목표에 따라 강점이 되거나 어려움이 될 수 있어 전체 프로파일과 생활 맥락을 함께 해석합니다.",
  },
  {
    question: "그날의 기분이 결과에 영향을 줄 수 있나요?",
    answer:
      "자기보고 검사는 응답 당시의 이해, 정서와 상황의 영향을 받을 수 있습니다. 결과를 한 번의 고정된 결론으로 보지 않고 면담과 실제 경험을 함께 살피는 이유입니다.",
  },
  {
    question: "TCI 결과가 미술 매체를 자동으로 정해 주나요?",
    answer:
      "아닙니다. TCI 점수만으로 특정 미술 매체나 기법을 처방하지 않습니다. 실제 작업에서 느끼는 편안함, 흥미, 부담과 선택을 우선하며 결과는 대화를 돕는 참고 자료로만 활용합니다.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "서비스", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "TCI 기질·성격검사", item: `${SITE_URL}${path}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: "TCI 기질·성격검사와 해석 상담",
      alternateName: "Temperament and Character Inventory Consultation",
      description:
        "TCI의 4개 기질 차원과 3개 성격 차원을 생활 맥락과 함께 살펴보는 검사 및 해석 상담",
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "100000",
        priceCurrency: "KRW",
        url: `${SITE_URL}/pricing`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function TciAssessmentPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-paper py-16 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-secondary-100/55 blur-3xl" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "서비스", href: "/services" },
              { name: "TCI 기질·성격검사", href: path },
            ]}
            emitJsonLd={false}
          />
          <div className="mt-12 max-w-4xl">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">
              Temperament & Character Inventory
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-night lg:text-5xl">
              TCI 기질·성격검사
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80">
              내가 새로움과 불확실성, 관계와 목표에 어떻게 반응하는지 살펴봅니다. 결과는 사람을
              한 가지 유형으로 고정하거나 진단하기 위한 답이 아니라, 한 사람의 고유한 경험을 더
              정확히 이야기하기 위한 출발점입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center rounded-lg bg-primary-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-600"
              >
                검사·상담 문의하기
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-lg border border-primary-500/30 bg-white px-7 py-3.5 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
              >
                세션 비용 안내 →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-2xl bg-white p-7 lg:p-9">
              <p className="text-primary-500 text-xs font-semibold tracking-widest">TEMPERAMENT</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-night">기질은 반응의 경향을 봅니다</h2>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Cloninger의 모형에서 기질은 자극에 비교적 자동적으로 반응하는 정서·행동 경향을
                설명합니다. 자극추구, 위험회피, 사회적 민감성, 인내력의 상대적 조합을 살핍니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7 lg:p-9">
              <p className="text-secondary-500 text-xs font-semibold tracking-widest">CHARACTER</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-night">성격은 삶을 조직하는 방식을 봅니다</h2>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                성격 차원은 목표와 가치에 따라 자신을 조절하고, 타인 및 더 큰 세계와 관계 맺는 방식을
                살핍니다. 자율성, 연대감, 자기초월의 상대적 프로파일로 이해합니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">Why TCI</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-night lg:text-3xl">왜 시행하나요?</h2>
            <p className="mt-4 leading-relaxed text-charcoal/70">
              검사는 결론을 대신하지 않습니다. 지금의 어려움을 이해하고 상담에서 함께 살펴볼 질문을
              더 구체적으로 만드는 데 활용합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-xl bg-cream p-6">
                <h3 className="font-semibold text-night">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream">
        <Container>
          <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">Seven Dimensions</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-night lg:text-3xl">검사를 통해 살펴보는 7개 차원</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal/70">
            각 점수는 독립적인 낙인이 아니라 서로 영향을 주는 상대적 경향입니다. 해석에서는 한 차원만
            떼어 보지 않고 전체 프로파일과 생활 경험을 함께 살핍니다.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-night">기질 4개 차원</h3>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {temperamentDimensions.map((item) => (
              <article key={item.code} className="rounded-xl bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary-50 px-2.5 py-1 text-xs font-bold text-primary-600">
                    {item.code}
                  </span>
                  <h4 className="font-semibold text-night">{item.name}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold text-night">성격 3개 차원</h3>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {characterDimensions.map((item) => (
              <article key={item.code} className="rounded-xl bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-secondary-50 px-2.5 py-1 text-xs font-bold text-secondary-600">
                    {item.code}
                  </span>
                  <h4 className="font-semibold text-night">{item.name}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-cream p-7 lg:p-9">
              <h2 className="text-xl font-bold text-night">살펴볼 수 있는 부분</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/75">
                <li>• 새로움과 불확실성에 접근하는 상대적 방식</li>
                <li>• 사회적 신호와 관계의 보상에 반응하는 경향</li>
                <li>• 좌절 속에서 목표를 지속하고 조절하는 방식</li>
                <li>• 자신·타인·더 큰 세계와 관계 맺는 방식</li>
                <li>• 상담에서 더 살펴볼 강점과 어려움에 관한 질문</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-7 lg:p-9" style={{ border: "1px solid rgba(196, 191, 183, 0.22)" }}>
              <h2 className="text-xl font-bold text-night">검사만으로 알 수 없는 부분</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/75">
                <li>• 정신질환이나 성격장애의 확정 진단</li>
                <li>• 한 사람의 변하지 않는 ‘진짜 유형’</li>
                <li>• 성격의 우열이나 관계의 성공 여부</li>
                <li>• 특정 미술 매체·기법에 대한 자동 처방</li>
                <li>• 한 번의 검사만으로 예측한 미래 행동</li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-4xl">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">TCI & Art Therapy</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-night lg:text-3xl">미술치료와는 어떻게 연결되나요?</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-charcoal/80">
              <p>
                TCI와 미술치료를 직접 결합해 특정 점수에 맞는 미술 매체나 기법의 효과를 검증한 연구는
                현재 충분하지 않습니다. 따라서 ACT ART CENTER는 TCI를 미술치료의 효과를 보장하거나
                작품을 진단하는 도구로 설명하지 않습니다.
              </p>
              <p>
                대신 검사에서 드러난 경향을 <strong>임상적 가설이 아니라 대화를 여는 질문</strong>으로
                활용합니다. 예를 들어 새로운 시도가 부담스러운지, 선택지가 많을 때 편안한지, 관계의
                반응이 작업에 어떤 영향을 주는지, 완성까지 지속하는 과정에서 무엇이 필요한지를 실제
                미술작업 경험과 함께 확인합니다.
              </p>
              <p>
                검사 점수보다 한 사람이 미술 매체를 만날 때 보이는 실제 반응과 선택을 우선합니다.
                치료사는 구조와 자유의 정도, 매체의 수와 작업 속도, 작품을 공유하는 범위를 함께 조율하며,
                결과와 실제 경험이 다를 때에는 현재의 경험을 더 중요하게 살핍니다.
              </p>
            </div>
            <div className="mt-8 rounded-xl bg-white p-6 text-sm leading-relaxed text-charcoal/70">
              <strong className="text-night">근거 수준 안내</strong>
              <p className="mt-2">
                TCI의 성격 모형과 한국판 신뢰도·타당도는 연구되어 왔습니다. 2002년 한국판 연구는
                대학생 851명을 대상으로 검토했으며 전반적으로 만족할 만한 심리측정 특성을 보고했지만,
                요인분석에서 원 모형의 7요인 구조가 완전히 재현되지는 않았습니다. 또한 위 미술치료
                활용은 TCI-미술치료 직접 효과 연구가 아니라, 검사 결과를 생활 맥락과 실제 작업 반응에
                비추어 신중하게 이해하기 위한 센터의 보조적 임상 활용 원칙입니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">Process</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-night lg:text-3xl">검사와 상담의 흐름</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => (
              <article key={item.number} className="rounded-xl bg-cream p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-600">
                  {item.number}
                </div>
                <h3 className="mt-4 font-semibold text-night">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-night lg:text-3xl">자주 묻는 질문</h2>
          <div className="mt-8 max-w-4xl space-y-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-xl bg-white p-6">
                <h3 className="font-semibold text-night">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-night">참고문헌</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
              아래 원저·한국판 타당화 연구와 심리측정 연구를 바탕으로 작성했습니다.
            </p>
            <ol className="mt-6 space-y-4">
              {references.map((reference, index) => (
                <li key={reference.href} className="flex gap-3 text-sm leading-relaxed text-charcoal/75">
                  <span className="shrink-0 text-charcoal/45">{index + 1}.</span>
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-primary-600"
                  >
                    {reference.citation}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white lg:text-3xl">검사 결과를 삶의 이야기와 함께 살펴봅니다</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              궁금한 점과 현재 경험을 남겨 주시면 검사 적용 여부와 상담 과정을 안내해 드립니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-500 transition-colors hover:bg-cream"
            >
              TCI 검사·상담 문의하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
