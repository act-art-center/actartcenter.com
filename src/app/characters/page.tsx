import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACTIE와 ARTTY | ACT ART CENTER 캐릭터 안내",
  description:
    "ACT ART CENTER의 미술치료 철학을 친근하게 전하는 두 안내자 ACTIE와 ARTTY를 소개합니다. 감정·가치 탐색과 예술적 표현을 돕는 캐릭터입니다.",
  alternates: { canonical: `${SITE_URL}/characters` },
  openGraph: {
    type: "website",
    title: "ACTIE와 ARTTY | ACT ART CENTER",
    description: "미술치료 여정에 함께하는 두 안내자 ACTIE와 ARTTY를 소개합니다.",
    url: `${SITE_URL}/characters`,
    images: [{ url: "/characters/twins-together.png", width: 1600, height: 900, alt: "ACTIE와 ARTTY" }],
  },
};

const characters = [
  {
    name: "ACTIE",
    image: "/characters/acttie-reading.png",
    alt: "책을 읽으며 생각을 정리하는 ACTIE",
    title: "감정과 가치의 방향을 조용히 살피는 안내자",
    body:
      "ACTIE는 미술치료 과정에서 떠오르는 감정과 생각을 천천히 바라보도록 돕는 캐릭터입니다. ACT(수용전념)의 관점이 필요할 때, 지금의 마음을 밀어내지 않고 내가 지키고 싶은 방향을 살피는 질문을 건넵니다.",
  },
  {
    name: "ARTTY",
    image: "/characters/artty-paint.png",
    alt: "큰 붓을 들고 있는 ARTTY",
    title: "색과 이미지로 마음의 표현을 돕는 안내자",
    body:
      "ARTTY는 말로 정리하기 어려운 경험을 색, 선, 재료, 이미지로 만나도록 돕는 캐릭터입니다. 작품의 완성도보다 표현의 과정과 안전한 관계를 소중히 여기는 ACT ART CENTER의 미술치료 철학을 전합니다.",
  },
];

const moments = [
  {
    title: "처음 방문하는 분께",
    image: "/characters/artty-welcome.png",
    body: "낯선 치료실에 들어오는 마음이 조금 편안해지도록, ACTIE와 ARTTY는 안내문과 페이지 곳곳에서 따뜻한 첫인사를 건넵니다.",
  },
  {
    title: "온라인 미술치료를 준비할 때",
    image: "/characters/acttie-laptop.png",
    body: "온라인 세션에서는 준비할 매체와 화면 환경을 미리 확인합니다. 특별한 매체가 필요한 경우에는 센터에서 사전에 안내하고 송부해 드립니다.",
  },
  {
    title: "표현이 막히는 순간에",
    image: "/characters/artty-thoughtful.png",
    body: "그림이 바로 나오지 않는 시간도 미술치료의 일부입니다. ARTTY는 멈춤과 망설임까지 안전하게 바라보는 태도를 상징합니다.",
  },
];

export default function CharactersPage() {
  return (
    <>
      <PageHero
        title="ACTIE와 ARTTY"
        subtitle="ACT ART CENTER의 미술치료 여정에 함께하는 두 안내자입니다. 감정과 가치를 살피는 ACTIE, 색과 이미지로 표현을 돕는 ARTTY를 소개합니다."
        label="ACT ART CENTER Characters"
        imageSrc="/characters/twins-together.png"
        imageAlt="ACTIE와 ARTTY가 함께 서 있는 일러스트"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "ACTIE와 ARTTY", href: "/characters" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-3">
              Why characters
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-night">
              ACT ART CENTER의 두 안내자를 소개합니다
            </h2>
            <div className="mt-5 space-y-4 text-charcoal/75 leading-relaxed">
              <p>
                ACTIE와 ARTTY는 미술치료의 여정을 조금 더 편안하게 만나도록 돕는 두 캐릭터입니다.
                한 사람의 마음 안에는 조용히 느끼는 마음, 움직이고 선택하려는 마음처럼 서로 다른 결이 함께 있습니다.
              </p>
              <p>
                융(C. G. Jung)은 분석심리학에서 &ldquo;아니마(anima)&rdquo;와 &ldquo;아니무스(animus)&rdquo;를 말했습니다.
                고전적 설명에서는 아니마를 남성 마음 안의 여성적 상, 아니무스를 여성 마음 안의 남성적 상으로 보았고,
                오늘날에는 이를 고정된 성역할보다 마음 안에서 서로를 보완하는 상징적 힘으로 조심스럽게 읽습니다.
              </p>
              <p>
                그래서 ACTIE와 ARTTY는 남자와 여자 캐릭터로 함께 서 있습니다. 성별을 나누려는 뜻이 아니라,
                한 사람 안의 부드럽게 느끼고 품는 힘과 방향을 세우고 움직이는 힘이 서로 대화하며 균형을 이루는 모습을 다정하게 보여 주기 위해서입니다.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {characters.map((character) => (
              <article key={character.name} className="bg-white rounded-3xl p-6 lg:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div className="relative mx-auto aspect-square max-w-[280px] overflow-hidden rounded-2xl bg-cream">
                  <Image src={character.image} alt={character.alt} fill className="object-contain" sizes="280px" />
                </div>
                <h3 className="mt-6 text-night text-xl font-bold">{character.name}</h3>
                <p className="mt-2 text-primary-600 font-semibold text-sm">{character.title}</p>
                <p className="mt-4 text-charcoal/75 leading-relaxed text-sm">{character.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-night text-center">
              페이지 속에서 만나는 장면들
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {moments.map((moment) => (
                <article key={moment.title} className="bg-white rounded-2xl p-5">
                  <div className="relative aspect-square rounded-xl bg-paper overflow-hidden">
                    <Image src={moment.image} alt={moment.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 260px" />
                  </div>
                  <h3 className="mt-5 text-night font-semibold">{moment.title}</h3>
                  <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">{moment.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper" className="pt-10 lg:pt-12">
        <Container>
          <div className="max-w-4xl mx-auto rounded-2xl bg-white p-6 lg:p-8" style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-3">
              References
            </p>
            <h2 className="text-night text-xl lg:text-2xl font-bold tracking-tight">
              참고문헌
            </h2>
            <ul className="mt-5 space-y-3 text-charcoal/70 text-sm leading-relaxed">
              <li>
                Jung, C. G. (1959/1968). <em>The Archetypes and the Collective Unconscious</em>
                (Collected Works of C. G. Jung, Vol. 9, Part 1). Princeton University Press.
              </li>
              <li>
                Jung, C. G. (1951/1969). <em>Aion: Researches into the Phenomenology of the Self</em>
                (Collected Works of C. G. Jung, Vol. 9, Part 2). Princeton University Press.
                특히 “The Syzygy: Anima and Animus” 장을 참고했습니다.
              </li>
              <li>
                Jung, C. G. (1953/1966). <em>Two Essays on Analytical Psychology</em>
                (Collected Works of C. G. Jung, Vol. 7). Princeton University Press.
              </li>
              <li>
                McKenzie, S. (2006). Queering gender: anima/animus and the paradigm of emergence.
                <em>Journal of Analytical Psychology, 51</em>(3), 401–421. https://doi.org/10.1111/j.0021-8774.2006.00599.x
              </li>
            </ul>
          </div>
        </Container>
      </SectionWrapper>

    </>
  );
}
