"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BlogIllustration, blogIllustrationVariant } from "@/components/shared/BlogIllustration";
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
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=1920&q=80"
            alt="블로그 — 미술치료 이야기"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/30 to-night/10" />
        <Container className="relative z-10 pb-12 lg:pb-16 pt-32">
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">Blog</p>
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
            미술치료 이야기
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            미술치료 안에서 만나는 마음의 변화와 표현의 과정을 따뜻하게 나눕니다.
          </p>
        </Container>
      </section>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-10 mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "블로그", href: "/blog" },
              ]}
              emitJsonLd={false}
            />
          </div>

          {/* About this blog — who / what / how often */}
          <div
            className="relative z-10 mb-10 max-w-3xl mx-auto bg-white rounded-2xl p-6 lg:p-8"
            style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
          >
            <p className="text-primary-500 text-xs font-medium tracking-widest">
              고은별 미술치료사의 기록
            </p>
            <h2 className="mt-2 text-night text-xl lg:text-2xl font-bold tracking-tight leading-snug">
              미술치료실에서 만난 마음, 함께 나누고 싶은 이야기
            </h2>
            <div className="mt-4 space-y-3 text-charcoal/80 text-sm leading-relaxed">
              <p>
                ACT ART CENTER 블로그는 센터 대표 <strong>고은별</strong> 이 씁니다.
                미술치료실에서 한 사람 한 사람을 만나며 마음에 남은 장면과 질문,
                차 의과학대학교 미술치료학 박사과정과 슈퍼비전에서 배운 내용을
                따뜻하고 편안한 언어로 나눕니다.
              </p>
              <p>
                미술치료를 중심으로 표현 기반 접근과 신체 기반 트라우마 이론,
                수용전념치료(ACT)의 심리적 유연성을 함께 살펴봅니다.
                전문적인 개념은 일상에서 이해하기 쉬운 말로 풀고,
                한 사람의 경험과 속도를 존중하며 자신을 조금 더 다정하게 바라볼 수 있는 이야기를 전합니다.
              </p>
            </div>
          </div>

          {/* Topic map — BLOG_CATEGORIES 설명 */}
          <div className="relative z-10 mb-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "미술치료",
                desc: "미술치료의 이론과 과정, 과학적 근거를 살핍니다. 미술치료 안에서 ACT의 관점과 심리적 유연성도 함께 다룹니다.",
              },
              {
                name: "증상별 가이드",
                desc: "불안·우울·번아웃·트라우마·관계 갈등을 이해하는 관점과 일상에서 해볼 수 있는 미술 실습을 함께 소개합니다.",
              },
              {
                name: "미술치료사 경험",
                desc: "미술치료사로서 현장에서 만나고 배우며 느낀 통찰을 미술치료사의 언어로 나눕니다.",
              },
              {
                name: "미술치료 저서 리뷰",
                desc: "미술치료 관련 저서를 읽으며 배운 내용과 마음에 남은 생각을 미술치료사의 따스한 시선으로 나눕니다.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white/60 rounded-xl p-5"
                style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
              >
                <p className="text-primary-600 font-semibold text-sm">{t.name}</p>
                <p className="mt-2 text-charcoal/75 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Update cadence + follow */}
          <div className="relative z-10 mb-10 max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 py-4 bg-white/60 rounded-xl"
            style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
          >
            <div>
              <p className="text-night font-semibold text-sm">업데이트 주기</p>
              <p className="text-charcoal/70 text-xs mt-1 leading-relaxed">
                월 2~3회. 짧은 팁보다 깊이 있는 주제를 선호합니다.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/act.art.center/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary-50 text-primary-600 font-medium text-xs rounded-lg hover:bg-primary-100 transition-colors"
              >
                Instagram @act.art.center
              </a>
            </div>
          </div>

          {/* Search + Categories */}
          <div className="relative z-10 mb-10 space-y-5">
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
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <BlogIllustration variant={blogIllustrationVariant(post.slug)} title={post.title} />
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
            <div className="relative z-10 text-center py-16">
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
