import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { TEAM_MEMBERS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "대표 고은별 — ACT 미술심리치료사 프로필 (차의과대 박사과정)",
  description:
    "ACT ART CENTER 대표 고은별(Stella)의 프로필. 차의과학대학교 미술치료학 박사과정 이수중, 홍익대학교 미술대학 석사. 미술심리치료·수용전념치료·트라우마·정서 심층탐색 전문.",
  keywords: [
    "고은별 미술치료사",
    "Stella 미술치료사",
    "미술심리상담사",
    "ACT 전문가",
    "차의과대 미술치료 박사",
    "홍익대 미술대학 석사",
  ],
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    type: "profile",
    title: "대표 고은별 — ACT 미술심리치료사",
    description: "차의과대 박사과정, 홍익대 미술대학 석사. ACT + 미술치료 전문.",
    url: `${SITE_URL}/team`,
    images: [
      {
        url: "/og/team.png",
        width: 1200,
        height: 630,
        alt: "ACT ART CENTER 대표 고은별 프로필",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "대표 고은별 — ACT 미술심리치료사",
    description: "차의과대 박사과정 · 홍익대 미술대학 석사 · ACT 전문.",
    images: ["/og/team.png"],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "팀", item: `${SITE_URL}/team` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/team#stella`,
      name: "고은별",
      alternateName: "Stella Koh",
      jobTitle: "대표 / 미술심리치료사",
      description:
        "ACT ART CENTER 대표. 차의과학대학교 미술치료학 박사과정 이수중. 홍익대학교 미술대학 석사. 미술심리치료·수용전념치료·트라우마·심층탐색 전문.",
      image: `${SITE_URL}/images/team-eunbyeol.jpg`,
      url: `${SITE_URL}/team`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "차의과학대학교 (박사과정 이수중)", sameAs: "https://www.cha.ac.kr/" },
        { "@type": "EducationalOrganization", name: "차의과학대학교 (미술치료학 석사)", sameAs: "https://www.cha.ac.kr/" },
        { "@type": "EducationalOrganization", name: "홍익대학교 미술대학 (학사·석사)", sameAs: "https://www.hongik.ac.kr/" },
      ],
      knowsAbout: [
        "미술심리치료",
        "Art Therapy",
        "수용전념치료",
        "Acceptance and Commitment Therapy",
        "트라우마 미술치료",
        "아동 미술치료",
      ],
      sameAs: ["https://instagram.com/act.art.center"],
    },
  ],
};

export default function TeamPage() {
  const member = TEAM_MEMBERS[0];
  return (
    <>
      <JsonLd data={teamSchema} />
      <PageHero
        title="대표 고은별 — ACT 미술심리치료사 프로필"
        subtitle="미술과 심리치료 모두에서 깊은 전문성을 갖춘 치료사가 함께합니다."
        label="Our Team"
        imageSrc="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1920&q=80"
        imageAlt="ACT ART CENTER 전문가"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "팀", href: "/team" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          {/* Ambient accents — Acttie reading (좌상), Artty thoughtful (우하) 낮은 opacity로 배경 숨결 */}
          <CharacterIllustration
            name="acttie-reading"
            alt=""
            width={240}
            height={240}
            hideOnMobile
            animation="ambient"
            opacity={0.25}
            className="absolute left-[2%] top-[12%] z-0 w-[180px] xl:w-[220px]"
          />
          <CharacterIllustration
            name="artty-thoughtful"
            alt=""
            width={220}
            height={220}
            hideOnMobile
            animation="ambient"
            opacity={0.22}
            delay={3}
            className="absolute right-[2%] bottom-[18%] z-0 w-[170px] xl:w-[200px]"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
              {/* Profile photo */}
              <div className="w-48 h-64 mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-md)]">
                <Image
                  src="/images/team-eunbyeol.jpg"
                  alt="고은별 대표"
                  width={192}
                  height={256}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center mt-6">
                <h2 className="text-night text-3xl font-semibold">{member.name}</h2>
                <p className="mt-1 text-secondary-500 font-medium">{member.role}</p>
                <p className="mt-1 text-primary-500 font-medium">{member.credentials}</p>
              </div>

              {/* Education */}
              <div className="mt-8 p-5 bg-primary-50 rounded-xl">
                <h3 className="text-night font-semibold text-sm mb-3">학력</h3>
                <ul className="space-y-1.5 text-sm text-charcoal/70">
                  {member.education.map((edu) => (
                    <li key={edu} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500 shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties */}
              <div className="mt-6">
                <h3 className="text-night font-semibold text-sm mb-3">전문 영역</h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-primary-50 rounded-lg text-sm text-primary-600">{s}</span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8 p-5 bg-cream rounded-xl">
                <h3 className="text-night font-semibold text-sm mb-3">소개</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-center text-primary-500 font-[var(--font-accent)] text-xl leading-relaxed italic max-w-[36ch] mx-auto">
                &ldquo;{member.quote}&rdquo;
              </blockquote>
            </div>

            {/* Twins — 보조 요소로 프로필 카드 아래 작게 (ambient breathing) */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <CharacterIllustration
                name="twins-together"
                alt="Acttie와 Artty — ACT ART CENTER 마스코트"
                width={220}
                height={220}
                animation="ambient"
                opacity={0.9}
                className="w-[140px] md:w-[180px]"
              />
              <p className="text-stone text-xs text-center max-w-[28ch] leading-relaxed">
                치료실 밖에서는 Acttie와 Artty가 안내와 따뜻함을 더해드립니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">상담을 시작하고 싶으신가요?</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              첫 무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
