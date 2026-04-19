import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "미술치료 작품 갤러리 — 비식별 창작의 순간들",
  description:
    "ACT ART CENTER 미술심리치료 과정에서 만들어진 창작의 순간들을 모았습니다. 모든 작품은 내담자의 동의 아래 비식별 처리되어 있으며, 미술치료 분위기와 공간감을 확인하실 수 있습니다.",
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
    description: "미술심리치료 과정의 창작 순간들. 동의 기반 비식별 처리.",
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
    description: "창작 치유의 순간들. 비식별 처리.",
    images: ["/og/gallery.png"],
  },
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80", alt: "수채화 물감과 붓", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80", alt: "색채 표현 작업", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80", alt: "미술 작업 과정", aspect: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&q=80", alt: "창작 활동의 결과물", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&q=80", alt: "미술 재료 클로즈업", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=600&q=80", alt: "따뜻한 색감의 작업", aspect: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80", alt: "드로잉 작업", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "미술치료 과정", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=600&q=80", alt: "아틀리에 공간", aspect: "aspect-[4/3]" },
];

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
      "@type": "ImageGallery",
      "@id": `${SITE_URL}/gallery#gallery`,
      name: "미술치료 작품 갤러리",
      description: "ACT 미술심리치료 과정에서 만들어진 비식별 창작물 9점",
      url: `${SITE_URL}/gallery`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: galleryImages.map((img, i) => ({
        "@type": "ImageObject",
        contentUrl: img.src,
        name: img.alt,
        description: img.alt,
        position: i + 1,
      })),
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
      <section className="relative overflow-hidden bg-night py-16 lg:py-24">
        {/* Ambient accents — dark background, lower opacity to avoid clashing with white text */}
        <CharacterIllustration
          name="artty-paint"
          alt=""
          width={240}
          height={240}
          hideOnMobile
          animation="ambient"
          opacity={0.22}
          className="absolute left-[4%] top-[18%] z-0 w-[170px] xl:w-[210px] mix-blend-luminosity"
        />
        <CharacterIllustration
          name="acttie-laptop"
          alt=""
          width={220}
          height={220}
          hideOnMobile
          animation="ambient"
          opacity={0.2}
          delay={3}
          className="absolute right-[4%] bottom-[12%] z-0 w-[160px] xl:w-[200px] mix-blend-luminosity"
        />

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
              모든 이미지는 비식별 처리되어 있습니다.
            </p>

            {/* Artty multi-scene — 배너로 창작 순간을 상징 (ambient breathing) */}
            <div className="mt-10 flex justify-center">
              <CharacterIllustration
                name="artty-scenes"
                alt="Artty의 다양한 창작 장면"
                width={360}
                height={240}
                animation="ambient"
                opacity={0.9}
                className="w-[260px] md:w-[320px] lg:w-[360px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-night py-8 pb-24">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <div className={`relative ${img.aspect} rounded-xl overflow-hidden group`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-night/0 group-hover:bg-night/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
