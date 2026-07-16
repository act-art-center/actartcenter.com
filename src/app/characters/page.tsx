import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Actie와 Artty | ACT ART CENTER 캐릭터 안내",
  description:
    "ACT ART CENTER의 미술치료 철학을 친근하게 전하는 두 안내자 Actie와 Artty를 소개합니다. 감정·가치 탐색과 예술적 표현을 돕는 캐릭터입니다.",
  alternates: { canonical: `${SITE_URL}/characters` },
  openGraph: {
    type: "website",
    title: "Actie와 Artty | ACT ART CENTER",
    description: "미술치료 여정에 함께하는 두 안내자 Actie와 Artty를 소개합니다.",
    url: `${SITE_URL}/characters`,
    images: [{ url: "/characters/twins-together.png", width: 1600, height: 900, alt: "Actie와 Artty" }],
  },
};

const characters = [
  {
    name: "Actie",
    image: "/characters/acttie-reading.png",
    alt: "책을 읽으며 생각을 정리하는 Actie",
    title: "감정과 가치의 방향을 조용히 살피는 안내자",
    body:
      "Actie는 미술치료 과정에서 떠오르는 감정과 생각을 천천히 바라보도록 돕는 캐릭터입니다. ACT(수용전념)의 관점이 필요할 때, 지금의 마음을 밀어내지 않고 내가 지키고 싶은 방향을 살피는 질문을 건넵니다.",
  },
  {
    name: "Artty",
    image: "/characters/artty-paint.png",
    alt: "큰 붓을 들고 있는 Artty",
    title: "색과 이미지로 마음의 표현을 돕는 안내자",
    body:
      "Artty는 말로 정리하기 어려운 경험을 색, 선, 재료, 이미지로 만나도록 돕는 캐릭터입니다. 작품의 완성도보다 표현의 과정과 안전한 관계를 소중히 여기는 ACT ART CENTER의 미술치료 철학을 전합니다.",
  },
];

const moments = [
  {
    title: "처음 방문하는 분께",
    image: "/characters/artty-welcome.png",
    body: "낯선 치료실에 들어오는 마음이 조금 편안해지도록, Actie와 Artty는 안내문과 페이지 곳곳에서 따뜻한 첫인사를 건넵니다.",
  },
  {
    title: "온라인 미술치료를 준비할 때",
    image: "/characters/acttie-laptop.png",
    body: "온라인 세션에서는 준비할 매체와 화면 환경을 미리 확인합니다. 특별한 매체가 필요한 경우에는 센터에서 사전에 안내하고 송부해 드립니다.",
  },
  {
    title: "표현이 막히는 순간에",
    image: "/characters/artty-thoughtful.png",
    body: "그림이 바로 나오지 않는 시간도 미술치료의 일부입니다. Artty는 멈춤과 망설임까지 안전하게 바라보는 태도를 상징합니다.",
  },
];

export default function CharactersPage() {
  return (
    <>
      <PageHero
        title="Actie와 Artty"
        subtitle="ACT ART CENTER의 미술치료 여정에 함께하는 두 안내자입니다. 감정과 가치를 살피는 Actie, 색과 이미지로 표현을 돕는 Artty를 소개합니다."
        label="ACT ART CENTER Characters"
        imageSrc="/characters/twins-together.png"
        imageAlt="Actie와 Artty가 함께 서 있는 일러스트"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "Actie와 Artty", href: "/characters" },
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
              미술치료를 더 편하게 만나는 작은 언어
            </h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              Actie와 Artty는 치료사를 대신하는 존재가 아닙니다. 미술치료의 안전한 과정, 재료와 이미지의 힘,
              그리고 ACT(수용전념)의 보조적 관점을 조금 더 부드럽게 설명하기 위한 시각적 안내자입니다.
            </p>
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

      <SectionWrapper bg="night">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              미술치료가 먼저, 캐릭터는 다정한 안내입니다
            </h2>
            <p className="mt-5 text-stone/75 leading-relaxed">
              ACT ART CENTER의 모든 콘텐츠는 미술치료를 중심으로 구성됩니다. Actie와 Artty는 그 중심을 흐리지 않고,
              표현과 관계의 과정을 더 쉽게 이해하도록 돕는 보조적 시각 언어로 사용됩니다.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
            >
              첫 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
