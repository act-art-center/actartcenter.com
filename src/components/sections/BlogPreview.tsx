import Link from "next/link";
import { ActionLink } from "@/components/shared/ActionLink";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";
import { BlogIllustration, blogIllustrationVariant } from "@/components/shared/BlogIllustration";
import { BLOG_POSTS } from "@/lib/blog-data";

const blogPosts = BLOG_POSTS.slice(0, 3);

export function BlogPreview() {
  return (
    <SectionWrapper bg="cream">
      <Container>
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">ACT 미술치료 이야기</h2>
          <ActionLink
            href="/blog"
            ariaLabel="미술치료·ACT 칼럼 전체 보기"
            variant="outline"
            size="compact"
            className="hidden sm:inline-flex"
          >
            미술치료·ACT 칼럼 전체 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </ActionLink>
        </div>

        {/* Asymmetric: first card larger */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Feature post — spans 3 cols */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="md:col-span-3 group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <BlogIllustration variant={blogIllustrationVariant(blogPosts[0].slug)} title={blogPosts[0].title} />
            </div>
            <div className="p-6">
              <span className="text-xs text-primary-500 font-medium tracking-wide">{blogPosts[0].category}</span>
              <h3 className="mt-2 text-night text-xl font-semibold group-hover:text-primary-500 transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="mt-2 text-charcoal/70 text-sm">{blogPosts[0].excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-all group-hover:gap-2 group-hover:bg-primary-100">
                글 읽기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Side posts — span 2 cols, stacked */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl p-6 flex-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <span className="text-xs text-primary-500 font-medium tracking-wide">{post.category}</span>
                <h3 className="mt-2 text-night text-lg font-semibold group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-charcoal/70 text-sm">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-all group-hover:gap-2 group-hover:bg-primary-100">
                  글 읽기
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:hidden text-center mt-8">
          <ActionLink
            href="/blog"
            ariaLabel="미술치료·ACT 칼럼 전체 보기"
            variant="outline"
            size="compact"
          >
            미술치료·ACT 칼럼 전체 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </ActionLink>
        </div>
      </Container>
    </SectionWrapper>
  );
}
