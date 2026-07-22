import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export function CharactersIntroSection() {
  return (
    <SectionWrapper bg="paper" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-3">
              ACTIE(<span className="font-bold">액티</span>) & ARTTY(<span className="font-bold">아티</span>)
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-night">
              미술치료 여정에 함께하는 두 안내자
            </h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              액티와 아티는 ACT ART CENTER의 미술치료 철학을 친근하게 전하는 캐릭터입니다.
              액티는 감정과 가치의 방향을 차분히 살피고, 아티는 색과 이미지로 마음을 표현하도록 돕습니다.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              두 캐릭터는 미술치료 여정에서 안전감과 호기심을 더해 주며 동행하는 안내자입니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/characters"
                className="inline-flex items-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600 active:translate-y-1 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                ACTIE와 ARTTY 자세히 보기
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50 active:translate-y-1 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                ACT ART CENTER GALLERY 보기
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-cream p-3 shadow-[var(--shadow-sm)]">
              <Image
                src="/characters/twins-together.png"
                alt="ACT ART CENTER를 상징하는 액티와 아티 일러스트"
                width={900}
                height={450}
                className="h-auto w-full rounded-2xl object-contain bg-cream p-4 lg:p-6"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
