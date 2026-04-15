"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCategory = activeCategory === "전체" || post.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=1920&q=80"
          alt="블로그 — 미술치료 이야기"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/30 to-night/10" />
        <Container className="relative z-10 pb-12 lg:pb-16 pt-32">
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">Blog</p>
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            ACT 미술치료 이야기
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            미술치료와 수용전념치료에 대한 전문 콘텐츠를 나눕니다.
          </p>
        </Container>
      </section>

      <SectionWrapper bg="cream">
        <Container>
          {/* Search + Categories */}
          <div className="mb-10 space-y-5">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" />
              <input
                type="search"
                placeholder="글 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary-500 text-white"
                      : "bg-white text-charcoal/70 hover:bg-primary-50 hover:text-primary-500"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary-500 font-medium">{post.category}</span>
                      <span className="text-xs text-stone">·</span>
                      <span className="text-xs text-stone">{post.date}</span>
                    </div>
                    <h2 className="text-night font-semibold text-lg group-hover:text-primary-500 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-charcoal/70 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-stone">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.readTime} 읽기</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-charcoal/50 text-lg">검색 결과가 없습니다.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("전체"); }}
                className="mt-4 text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors"
              >
                전체 보기로 돌아가기
              </button>
            </div>
          )}
        </Container>
      </SectionWrapper>
    </>
  );
}
