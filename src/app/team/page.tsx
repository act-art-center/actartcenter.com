import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TEAM_MEMBERS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "대표 고은별 — ACT 미술심리치료사 프로필 (차의과대 박사과정)",
  description:
    "ACT ART CENTER 대표 고은별(Stella)의 치료 철학·전문 영역·연구 관심사·첫 회기 흐름 안내. 차의과학대학교 미술치료학 박사과정 이수중, 홍익대학교 미술대학 석사. 한국미술치료학회 정회원.",
  keywords: [
    "고은별 미술치료사",
    "Stella 미술치료사",
    "미술심리상담사",
    "ACT 전문가",
    "차의과대 미술치료 박사",
    "홍익대 미술대학 석사",
    "한국미술치료학회 정회원",
  ],
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    type: "profile",
    title: "대표 고은별 — ACT 미술심리치료사",
    description:
      "차의과대 박사과정, 홍익대 미술대학 석사. 한국미술치료학회 정회원. ACT + 미술치료 통합 접근 전문.",
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
    description: "차의과대 박사과정 · 홍익대 미술대학 석사 · 한국미술치료학회 정회원.",
    images: ["/og/team.png"],
  },
};

const member = TEAM_MEMBERS[0];

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
      honorificSuffix: "MA",
      jobTitle: "대표 / 미술심리치료사",
      description:
        "ACT ART CENTER 대표. 차의과학대학교 미술치료학 박사과정 이수중, 홍익대학교 미술대학 석사. 한국미술치료학회 정회원. 언어 이전의 경험을 예술로 꺼내고, 수용전념치료(ACT)로 방향을 세우는 통합 접근을 지향합니다.",
      image: `${SITE_URL}/images/team-eunbyeol.jpg`,
      url: `${SITE_URL}/team`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "차의과학대학교 미술치료학 박사과정",
          sameAs: "https://www.cha.ac.kr/",
        },
        {
          "@type": "EducationalOrganization",
          name: "차의과학대학교 미술치료학 석사",
          sameAs: "https://www.cha.ac.kr/",
        },
        {
          "@type": "EducationalOrganization",
          name: "홍익대학교 미술대학 (학사·석사)",
          sameAs: "https://www.hongik.ac.kr/",
        },
      ],
      memberOf: {
        "@type": "OrganizationRole",
        roleName: "정회원",
        memberOf: {
          "@type": "Organization",
          name: "한국미술치료학회",
          alternateName: "Korean Art Therapy Association",
          url: "http://www.korean-arttherapy.or.kr/",
        },
      },
      knowsAbout: [
        "미술심리치료",
        "Art Therapy",
        "수용전념치료",
        "Acceptance and Commitment Therapy",
        "트라우마 미술치료",
        "아동 미술치료",
        "심리적 유연성",
        "정서 중심 치료",
      ],
      sameAs: ["https://instagram.com/act.art.center"],
    },
  ],
};

export default function TeamPage() {
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

      {/* Profile card */}
      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div
              className="bg-white rounded-2xl p-8 lg:p-12"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
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
                <p className="text-night text-3xl font-semibold">{member.name}</p>
                <p className="mt-1 text-secondary-500 font-medium">{member.role}</p>
                <p className="mt-1 text-primary-500 font-medium">{member.credentials}</p>
              </div>

              {/* Education */}
              <div className="mt-8 p-5 bg-primary-50 rounded-xl">
                <h2 className="text-night font-semibold text-sm mb-3">학력</h2>
                <ul className="space-y-1.5 text-sm text-charcoal/70">
                  {member.education.map((edu) => (
                    <li key={edu} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500 shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Short specialties */}
              <div className="mt-6">
                <h2 className="text-night font-semibold text-sm mb-3">주요 전문 영역</h2>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-primary-50 rounded-lg text-sm text-primary-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8 p-5 bg-cream rounded-xl">
                <h2 className="text-night font-semibold text-sm mb-3">소개</h2>
                <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-center text-primary-500 font-[var(--font-accent)] text-xl leading-relaxed italic max-w-[36ch] mx-auto">
                &ldquo;{member.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Therapy philosophy */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
              Therapy Philosophy
            </p>
            <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
              왜 수용전념치료와 미술을 함께 다루는가
            </h2>
            <div className="mt-8 space-y-5">
              {member.philosophyParagraphs.map((p, i) => (
                <p key={i} className="text-charcoal/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Specialty details */}
      <SectionWrapper bg="cream">
        <Container>
          <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
            Clinical Focus
          </p>
          <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
            전문 영역 상세
          </h2>
          <p className="mt-4 text-center text-charcoal/70 max-w-2xl mx-auto">
            각 영역은 독립적이기보다 서로를 보완합니다. 첫 상담에서 지금 당신에게 필요한 접근을
            함께 찾아 드립니다.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {member.specialtyDetails.map((d) => (
              <article
                key={d.title}
                className="bg-white rounded-xl p-6"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <h3 className="text-night font-semibold text-lg">{d.title}</h3>
                <p className="mt-3 text-charcoal/75 text-sm leading-relaxed">{d.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Research interests */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
              Research Interests
            </p>
            <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
              연구 관심사
            </h2>
            <p className="mt-4 text-center text-charcoal/70">
              차의과학대학교 미술치료학 박사 과정을 이어가며 임상과 연구를 함께 지속합니다.
              연구에서의 발견은 세션의 구성과 치료적 결정에 꾸준히 반영됩니다.
            </p>
            <ul className="mt-8 space-y-3">
              {member.researchInterests.map((r) => (
                <li
                  key={r}
                  className="bg-white rounded-xl p-5 flex items-start gap-3"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span className="text-charcoal/80 text-sm leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      {/* First session flow */}
      <SectionWrapper bg="cream">
        <Container>
          <p className="text-xs font-medium tracking-widest uppercase text-secondary-500 text-center mb-3">
            Your First Visit
          </p>
          <h2 className="text-center text-2xl lg:text-3xl font-bold tracking-tight">
            첫 회기에 기대하실 수 있는 흐름
          </h2>
          <p className="mt-4 text-center text-charcoal/70 max-w-2xl mx-auto">
            약 50분, 다섯 단계로 구성됩니다. 모든 단계는 원하시는 범위 안에서만 진행되며,
            말하기 어려우신 부분은 건너뛰셔도 됩니다.
          </p>
          <ol className="mt-10 max-w-3xl mx-auto space-y-4">
            {member.firstSessionFlow.map((f, i) => (
              <li
                key={f.step}
                className="bg-white rounded-xl p-6 flex gap-4"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-semibold flex items-center justify-center shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-night font-semibold">{f.step}</h3>
                    <span className="text-stone text-xs">{f.minutes}</span>
                  </div>
                  <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
              상담을 시작하고 싶으신가요?
            </h2>
            <p className="mt-4 text-white/80">
              첫 상담은 무료로 진행됩니다. 편안한 마음으로 문의 주세요.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all"
            >
              첫 무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
