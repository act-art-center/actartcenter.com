import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamSection() {
  const member = TEAM_MEMBERS[0];

  return (
    <SectionWrapper bg="primary-50">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">함께하는 전문가</h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            className="bg-white rounded-xl p-8 lg:p-10 shadow-[var(--shadow-sm)] text-center"
            style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
          >
            {/* Profile photo */}
            <div className="w-40 h-52 mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-md)]">
              <Image
                src="/images/team-eunbyeol.jpg"
                alt="고은별 대표"
                width={160}
                height={208}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-night text-2xl font-semibold">
              {member.name}
            </h3>
            <p className="mt-1 text-secondary-500 text-sm font-medium">{member.role}</p>
            <p className="mt-1 text-primary-500 text-sm font-medium">{member.credentials}</p>

            {/* Education */}
            <ul className="mt-4 space-y-1 text-xs text-charcoal/60">
              {member.education.map((edu) => (
                <li key={edu}>{edu}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {member.specialties.map((s) => (
                <span key={s} className="px-2.5 py-1 bg-primary-50 rounded-md text-xs text-primary-600">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-5 text-charcoal/70 text-sm leading-relaxed max-w-sm mx-auto">
              {member.bio}
            </p>

            <blockquote className="mt-5 text-primary-500 font-[var(--font-accent)] text-lg leading-relaxed italic max-w-[36ch] mx-auto">
              &ldquo;{member.quote}&rdquo;
            </blockquote>

            <Link
              href="/team"
              className="mt-6 inline-flex items-center gap-1 text-secondary-500 text-sm font-medium hover:gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 rounded"
            >
              프로필 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
