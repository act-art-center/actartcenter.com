import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, BookOpen, CalendarDays } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "센터소식 — ACT ART CENTER",
  description:
    "ACT ART CENTER의 프로그램 소식, 운영 안내, 미술치료 이야기를 한곳에서 확인합니다.",
  keywords: [
    "ACT ART CENTER 센터소식",
    "미술치료 센터 소식",
    "강남 미술치료 프로그램",
    "ACT ART CENTER 운영 안내",
  ],
  alternates: { canonical: `${SITE_URL}/news` },
  openGraph: {
    type: "website",
    title: "센터소식 — ACT ART CENTER",
    description: "프로그램 소식과 운영 안내, 미술치료 이야기를 전합니다.",
    url: `${SITE_URL}/news`,
    images: [
      {
        url: "/images/office-hero.jpg",
        width: 1200,
        height: 630,
        alt: "ACT ART CENTER 센터소식",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "센터소식 — ACT ART CENTER",
    description: "프로그램 소식과 운영 안내, 미술치료 이야기를 전합니다.",
    images: ["/images/office-hero.jpg"],
  },
};

const newsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "센터소식",
  description: "ACT ART CENTER의 프로그램 소식, 운영 안내, 미술치료 이야기",
  url: `${SITE_URL}/news`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const newsLinks = [
  {
    icon: CalendarDays,
    eyebrow: "Program News",
    title: "프로그램 소식",
    description:
      "개인 미술치료, 아동·청소년 미술치료, 그룹 프로그램과 오픈스튜디오 원데이 클래스의 안내를 확인합니다.",
    href: "/services",
    cta: "프로그램 살펴보기",
  },
  {
    icon: Bell,
    eyebrow: "Center Guide",
    title: "센터 운영 안내",
    description:
      "ACT ART CENTER는 사전 예약제로 운영합니다. 방문 전 위치와 상담 절차를 확인해 주세요.",
    href: "/contact",
    cta: "운영 안내 확인하기",
  },
  {
    icon: BookOpen,
    eyebrow: "Art Therapy Story",
    title: "미술치료 이야기",
    description:
      "미술치료실에서 만난 마음과 표현의 과정, 전문적인 개념을 편안한 언어로 나눕니다.",
    href: "/blog",
    cta: "블로그 글 읽기",
  },
] as const;

export default function NewsPage() {
  return (
    <>
      <JsonLd data={newsSchema} />

      <PageHero
        title="센터소식"
        subtitle={
          <>
            ACT ART CENTER의 새로운 이야기와 안내를 전합니다.
            <br />
            프로그램 소식과 운영 정보를 편안하게 확인해 주세요.
          </>
        }
        label="Center News"
        imageSrc="/images/office-hero.jpg"
        imageAlt="따뜻한 자연광이 비치는 ACT ART CENTER 내부"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "센터소식", href: "/news" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary-500 text-xs font-semibold tracking-widest uppercase">
              News &amp; Updates
            </p>
            <h2 className="mt-3 text-night text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
              센터의 소식과 안내를 한곳에서 만납니다
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              프로그램 일정과 센터 운영에 관한 안내, 미술치료사가 나누는 이야기를
              차분히 전합니다. 새로운 소식은 이 페이지와 공식 인스타그램에서 확인할 수 있습니다.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {newsLinks.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl bg-white p-6"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50">
                    <Icon className="h-5 w-5 text-primary-500" strokeWidth={1.5} />
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-widest text-primary-500 uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-night">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="paper">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-8 text-center lg:px-10 lg:py-10">
            <p className="text-xs font-semibold tracking-widest text-primary-500 uppercase">
              Stay Connected
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-night">
              가장 빠른 센터소식은 인스타그램에서 전합니다
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
              미술치료와 프로그램의 새로운 장면, 센터의 일상을 공식 계정에서 만나보세요.
            </p>
            <a
              href={`https://instagram.com/${CONTACT.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              Instagram {CONTACT.instagram}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
