import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "미술치료 작품 갤러리 — 준비 중",
  description:
    "ACT ART CENTER 미술심리치료 과정에서 만들어지는 창작의 순간들을 준비 중입니다. 모든 작품은 내담자의 서면 동의 후 비식별 처리되어 공개됩니다.",
  keywords: [
    "미술치료 작품",
    "미술치료 갤러리",
    "미술치료 사례",
    "창작 치유",
    "비식별 작품",
  ],
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    type: "website",
    title: "미술치료 작품 갤러리 — ACT ART CENTER",
    description: "미술심리치료 과정의 창작 순간들. 동의 기반 비식별 처리 예정.",
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: "/og/gallery.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술치료 작품 갤러리",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "미술치료 작품 갤러리",
    description: "창작 치유의 순간들. 비식별 처리 예정.",
    images: ["/og/gallery.png"],
  },
};

// 갤러리 이미지는 실제 내담자 서면 동의 후 비식별 처리된 작품만 게시한다.
// 현재 공개 가능한 작품이 없어 빈 상태로 유지 (docs/TODO.md 참조).
const galleryImages: { src: string; alt: string; aspect: string }[] = [];

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "갤러리", item: `${SITE_URL}/gallery` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/gallery`,
      name: "미술치료 작품 갤러리 — 준비 중",
      description: "ACT 미술심리치료 과정에서 만들어지는 창작의 순간들을 준비하고 있습니다. 실제 내담자의 서면 동의 후 비식별 처리되어 공개됩니다.",
      url: `${SITE_URL}/gallery`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
      <section className="relative overflow-hidden bg-night py-16 lg:py-24">
        <Container className="relative z-10">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "갤러리", href: "/gallery" },
              ]}
              emitJsonLd={false}
              className="text-sm text-white/60"
            />
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-white text-3xl lg:text-4xl font-bold tracking-tight">
              미술치료 작품 갤러리
            </h1>
            <p className="mt-6 text-stone/70">
              미술심리치료 과정에서 만들어지는 창작의 순간들.
              <br />
              모든 이미지는 내담자의 서면 동의를 받아 비식별 처리 후 공개됩니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-night pt-12 pb-24">
        <Container>
          {galleryImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {/* 갤러리 이미지가 추가되면 기존 렌더 로직이 활성화된다. */}
            </div>
          ) : (
            <div className="mx-auto max-w-xl text-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-16">
                <p className="font-[var(--font-accent)] text-white/40 text-sm tracking-wide">
                  Coming soon
                </p>
                <h2 className="mt-3 text-white text-xl lg:text-2xl font-semibold tracking-tight">
                  작품을 준비하고 있습니다
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed text-sm">
                  실제 내담자의 서면 동의를 받아 비식별 처리된 작품만 게시합니다.
                  <br className="hidden sm:block" />
                  준비가 되는 대로 이 페이지에서 공개할 예정입니다.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/booking"
                    className="inline-flex items-center px-5 py-2.5 bg-white text-night font-semibold rounded-lg hover:bg-cream transition-colors text-sm"
                  >
                    첫 무료 상담 예약하기
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-5 py-2.5 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm"
                  >
                    서비스 전체 보기
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
