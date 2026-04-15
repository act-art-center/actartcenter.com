import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "팀소개",
  description: "ACT Art Center의 전문 미술심리치료사를 소개합니다.",
};

export default function TeamPage() {
  const member = TEAM_MEMBERS[0];
  return (
    <>
      <PageHero
        title="함께하는 전문가"
        subtitle="미술과 심리치료 모두에서 깊은 전문성을 갖춘 치료사가 함께합니다."
        label="Our Team"
        imageSrc="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1920&q=80"
        imageAlt="ACT Art Center 전문가"
      />

      <SectionWrapper bg="cream">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
              {/* Profile photo */}
              <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-md)]">
                <Image
                  src="/images/team-eunbyeol.jpg"
                  alt="고은별 대표"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
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
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">상담을 시작하고 싶으신가요?</h2>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              예약 일정 확인하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
