import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "갤러리",
  description: "ACT ART CENTER 미술심리치료 작품 갤러리. 창작 활동의 순간들.",
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

export default function GalleryPage() {
  return (
    <>
      <section className="bg-night py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-white text-3xl lg:text-4xl font-bold tracking-tight">
              갤러리
            </h1>
            <p className="mt-6 text-stone/70">
              미술심리치료 과정에서 만들어지는 창작의 순간들.
              <br />
              모든 이미지는 비식별 처리되어 있습니다.
            </p>
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
