import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { SITE_URL } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

function isoFromKoreanDate(s: string): string {
  const m = s.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!m) return new Date().toISOString().slice(0, 10);
  const [, y, mo, d] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function estimateWordCount(readTime: string): number {
  const m = readTime.match(/(\d+)/);
  if (!m) return 2000;
  // ~300자/분 한글 기준 추정
  return parseInt(m[1], 10) * 300;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const publishedIso = isoFromKoreanDate(post.date);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "미술치료", "ACT", "미술심리치료"],
    authors: [{ name: post.author, url: `${SITE_URL}/team` }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      publishedTime: publishedIso,
      modifiedTime: publishedIso,
      authors: [`${SITE_URL}/team`],
      section: post.category,
      tags: [post.category, "미술치료", "ACT"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function buildBlogPostingSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const isoDate = isoFromKoreanDate(post.date);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "블로그", item: `${SITE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.category,
            item: `${SITE_URL}/blog?category=${encodeURIComponent(post.category)}`,
          },
          { "@type": "ListItem", position: 4, name: post.title, item: url },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: post.title,
        description: post.excerpt,
        image: {
          "@type": "ImageObject",
          url: post.image,
          width: 1200,
          height: 675,
        },
        url,
        mainEntityOfPage: url,
        datePublished: isoDate,
        dateModified: isoDate,
        inLanguage: "ko-KR",
        articleSection: post.category,
        keywords: [post.category, "미술치료", "ACT", "미술심리치료"],
        wordCount: estimateWordCount(post.readTime),
        author: {
          "@id": `${SITE_URL}/team#stella`,
          "@type": "Person",
          name: post.author,
          url: `${SITE_URL}/team`,
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const isoDate = isoFromKoreanDate(post.date);

  return (
    <>
      <JsonLd data={buildBlogPostingSchema(post)} />
      {/* Hero */}
      <section className="bg-paper py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "홈", href: "/" },
                  { name: "블로그", href: "/blog" },
                  { name: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
                emitJsonLd={false}
              />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">{post.title}</h1>
            <address className="mt-4 flex items-center gap-3 text-sm text-stone not-italic">
              <Link
                rel="author"
                href="/team#stella"
                className="hover:text-primary-500 transition-colors"
              >
                {post.author}
              </Link>
              <span aria-hidden="true">·</span>
              <time dateTime={isoDate}>{post.date}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} 읽기</span>
            </address>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <div className="relative w-full max-w-4xl mx-auto px-6 -mt-2">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
        </div>
      </div>

      {/* Content */}
      <SectionWrapper bg="paper" className="pt-12">
        <Container>
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-neutral max-w-none
                [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-charcoal/80 [&_p]:leading-relaxed [&_p]:mb-5
                [&_ul]:space-y-2 [&_li]:text-charcoal/80
                [&_blockquote]:border-l-2 [&_blockquote]:border-primary-300 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-charcoal/60
                [&_strong]:text-night [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: content || "<p>콘텐츠 준비 중입니다.</p>" }}
            />

            {/* Author box */}
            <div className="mt-16 p-6 bg-primary-50 rounded-xl flex items-start gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image src="/images/team-eunbyeol.jpg" alt="고은별" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-night font-semibold">
                  <Link href="/team" className="hover:text-primary-500 transition-colors">
                    {post.author}
                  </Link>
                </p>
                <p className="text-primary-500 text-sm">ACT ART CENTER 대표 · MA (박사과정)</p>
                <p className="mt-2 text-charcoal/60 text-sm leading-relaxed">
                  세 아이의 어머니이자 미술과 심리치료를 연결하는 전문가. 예술적 감수성과 임상적 통찰을 바탕으로 지속 가능한 심리적 성장을 돕는 미술치료를 지향합니다.
                </p>
              </div>
            </div>
          </article>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-xl font-bold tracking-tight mb-6">관련 글</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`}
                    className="group block bg-cream rounded-xl p-5 hover:bg-primary-50 transition-colors">
                    <span className="text-xs text-primary-500 font-medium">{rp.category}</span>
                    <h3 className="mt-1 text-night font-semibold group-hover:text-primary-500 transition-colors">{rp.title}</h3>
                    <p className="mt-2 text-charcoal/60 text-sm line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 max-w-3xl mx-auto text-center p-8 bg-primary-50 rounded-2xl">
            <p className="text-night font-semibold text-lg">미술치료가 궁금하신가요?</p>
            <p className="mt-2 text-charcoal/60 text-sm">첫 상담에서 맞춤 프로그램을 함께 설계합니다.</p>
            <Link href="/booking" className="mt-5 inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all">
              상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
