import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "센터소식 — ACT ART CENTER",
  description: "ACT ART CENTER의 공지사항, 프로그램 일정과 센터 운영 안내를 확인합니다.",
  keywords: [
    "ACT ART CENTER 센터소식",
    "ACT ART CENTER 공지사항",
    "미술치료 프로그램 안내",
    "ACT ART CENTER 운영 안내",
  ],
  alternates: { canonical: `${SITE_URL}/news` },
  openGraph: {
    type: "website",
    title: "센터소식 — ACT ART CENTER",
    description: "ACT ART CENTER의 공지사항과 프로그램 및 운영 안내를 확인합니다.",
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
    description: "ACT ART CENTER의 공지사항과 프로그램 및 운영 안내를 확인합니다.",
    images: ["/images/office-hero.jpg"],
  },
};

const newsPosts = [
  {
    category: "운영 안내",
    title: "상담 및 방문 사전 예약제 운영 안내",
    summary: "모든 상담과 센터 방문은 사전 예약제로 운영하며, 영업일 기준 1~2일 내 회신드립니다.",
    date: "2026.07.22",
    href: "/contact",
  },
  {
    category: "프로그램",
    title: "오픈스튜디오 원데이 클래스 안내",
    summary: "개인 또는 가족·친구와 함께 참여하며, 각자의 속도로 미술 매체를 경험하는 열린 미술 시간입니다.",
    date: "2026.07.22",
    href: "/services/open-studio",
  },
  {
    category: "상담 안내",
    title: "첫 상담 예약 안내",
    summary: "치료사와 참여자가 현재의 필요를 살피고 미술치료의 방향과 속도를 함께 맞추는 과정입니다.",
    date: "2026.07.22",
    href: "/booking",
  },
] as const;

const newsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "센터소식",
  description: "ACT ART CENTER의 공지사항, 프로그램 일정과 센터 운영 안내",
  url: `${SITE_URL}/news`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: newsPosts.length,
    itemListElement: newsPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}${post.href}`,
    })),
  },
};

export default function NewsPage() {
  return (
    <>
      <JsonLd data={newsSchema} />

      <PageHero
        title="센터소식"
        subtitle={
          <>
            ACT ART CENTER의 소식을 전합니다.
            <span className="block [overflow-wrap:anywhere]">
              분기별로 바뀌는 새로운 오픈스튜디오 원데이 클래스 등 센터의 다양한 소식과 공지를 확인하실 수 있습니다.
            </span>
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

      <SectionWrapper bg="cream">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-3 border-b-2 border-night pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-500">
                  News &amp; Updates
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-night lg:text-3xl">
                  센터소식 게시판
                </h2>
              </div>
              <p className="text-sm text-charcoal/65">전체 {newsPosts.length}건</p>
            </div>

            <div
              className="hidden grid-cols-[72px_120px_minmax(0,1fr)_130px] border-b border-charcoal/15 bg-paper/70 px-4 py-3 text-center text-xs font-semibold text-charcoal/65 md:grid"
              aria-hidden="true"
            >
              <span>번호</span>
              <span>분류</span>
              <span>제목</span>
              <span>등록일</span>
            </div>

            <ol className="divide-y divide-charcoal/15 border-b border-charcoal/20">
              {newsPosts.map((post, index) => (
                <li key={post.title}>
                  <article className="group grid gap-3 px-1 py-5 transition-colors hover:bg-white/55 md:grid-cols-[72px_120px_minmax(0,1fr)_130px] md:items-center md:px-4 md:py-6">
                    <span className="hidden text-center text-sm tabular-nums text-charcoal/55 md:block">
                      {newsPosts.length - index}
                    </span>
                    <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 md:mx-auto">
                      {post.category}
                    </span>
                    <div className="min-w-0">
                      <Link
                        href={post.href}
                        className="inline-flex min-h-11 items-center gap-2 font-semibold leading-snug text-night transition-colors hover:text-primary-600 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                        aria-label={`${post.title} 자세히 보기`}
                      >
                        <span>{post.title}</span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-primary-500 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{post.summary}</p>
                    </div>
                    <time
                      dateTime={post.date.replaceAll(".", "-")}
                      className="text-sm tabular-nums text-charcoal/55 md:text-center"
                    >
                      {post.date}
                    </time>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
