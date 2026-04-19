import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "ACT 미술치료 블로그 — 수용전념치료·미술치료 칼럼",
  description:
    "ACT 수용전념치료와 미술치료를 쉽게 풀어쓴 칼럼 모음. 미술치료 효과, ACT 6 프로세스, 증상별 가이드, 마음챙김 드로잉 등 실용적 콘텐츠를 주 1회 업데이트합니다.",
  keywords: [
    "미술심리치료 블로그",
    "ACT 블로그",
    "미술치료 칼럼",
    "미술치료 효과",
    "ACT 6 프로세스",
    "마음챙김 미술치료",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    title: "ACT 미술치료 블로그 — 수용전념치료·미술치료 칼럼",
    description: "미술치료와 ACT에 대한 전문 칼럼 모음.",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: "/og/blog.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술치료 블로그",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 미술치료 블로그",
    description: "수용전념치료와 미술치료 칼럼 주 1회 업데이트.",
    images: ["/og/blog.png"],
  },
};

function isoFromKoreanDate(s: string): string {
  const m = s.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!m) return new Date().toISOString().slice(0, 10);
  const [, y, mo, d] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "블로그", item: `${SITE_URL}/blog` },
      ],
    },
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "ACT 미술치료 블로그",
      description: "ACT 수용전념치료와 미술치료 전문 칼럼.",
      url: `${SITE_URL}/blog`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ko-KR",
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        image: post.image,
        datePublished: isoFromKoreanDate(post.date),
        author: {
          "@type": "Person",
          name: post.author,
          url: `${SITE_URL}/team`,
        },
      })),
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={blogIndexSchema} />
      {children}
    </>
  );
}
