import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { BLOG_POSTS } from "@/lib/blog-data";

const blogPosts = BLOG_POSTS.slice(0, 3);

export function BlogPreview() {
  return (
    <SectionWrapper bg="cream">
      <Container>
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT 미술치료 이야기</h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-secondary-500 text-sm font-medium hover:gap-2 transition-all"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Asymmetric: first card larger */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Feature post — spans 3 cols */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="md:col-span-3 group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-primary-500 font-medium tracking-wide">{blogPosts[0].category}</span>
              <h3 className="mt-2 text-night text-xl font-semibold group-hover:text-primary-500 transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="mt-2 text-charcoal/70 text-sm">{blogPosts[0].excerpt}</p>
            </div>
          </Link>

          {/* Side posts — span 2 cols, stacked */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl p-6 flex-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <span className="text-xs text-primary-500 font-medium tracking-wide">{post.category}</span>
                <h3 className="mt-2 text-night text-lg font-semibold group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-charcoal/70 text-sm">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-secondary-500 text-sm font-medium"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
