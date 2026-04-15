import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BLOG_POSTS } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-primary-500 text-sm hover:text-primary-600 transition-colors">블로그</Link>
              <span className="text-stone text-sm">/</span>
              <span className="text-stone text-sm">{post.category}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">{post.title}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-stone">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} 읽기</span>
            </div>
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
                <p className="text-night font-semibold">{post.author}</p>
                <p className="text-primary-500 text-sm">ACT Art Center 대표 · MA (박사과정)</p>
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
