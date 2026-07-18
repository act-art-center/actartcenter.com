import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "미술치료 이야기 | ACT ART CENTER 블로그",
  description:
    "ACT ART CENTER의 미술치료 이야기입니다. 미술 매체와 표현 과정, 세션에서 만나는 마음의 변화, 쉬어 갈 수 있는 안전한 시간을 따뜻하게 나눕니다.",
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
    title: "미술치료 이야기 | ACT ART CENTER 블로그",
    description: "미술치료 안에서 만나는 마음의 변화와 표현의 과정을 나누는 글 모음.",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: "/og/blog.png",
        width: 1200,
        height: 630,
        alt: "미술치료 이야기 블로그",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "미술치료 이야기 | ACT ART CENTER 블로그",
    description: "미술치료 안에서 만나는 마음의 변화와 표현의 과정을 나눕니다.",
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
