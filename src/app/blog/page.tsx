"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
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
            ACT 미술치료 이야기 — 수용전념치료와 미술의 만남
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            미술치료와 수용전념치료에 대한 전문 콘텐츠를 나눕니다.
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
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase">
              About this Blog
            </p>
            <h2 className="mt-2 text-night text-xl lg:text-2xl font-bold tracking-tight leading-snug">
              임상 현장에서 본 것, 문헌에서 배운 것
            </h2>
            <div className="mt-4 space-y-3 text-charcoal/80 text-sm leading-relaxed">
              <p>
                ACT ART CENTER 블로그는 센터 대표 <strong>고은별</strong> 이 씁니다.
                차의과학대학교 미술치료학 박사과정을 이수하며 세션 사이에
                공부한 문헌, 슈퍼비전에서 정리한 개념, 현장에서 반복되는 질문들을 정리합니다.
              </p>
              <p>
                톤은 &ldquo;박사과정 중인 임상가의 메모&rdquo; 에 가깝습니다.
                Steven C. Hayes 의 수용전념치료(ACT), Cathy A. Malchiodi 의 표현 기반 접근,
                Bessel van der Kolk 의 신체 기반 트라우마 이론 등 국제적으로
                검증된 틀 위에서, 한국어로 읽기 편하게 풀어내려고 합니다.
                진단이나 의학적 조언 대신, 내 경험을 이해하는 언어를 더해 드리는 것이 목적입니다.
              </p>
            </div>
          </div>

          {/* Topic map — BLOG_CATEGORIES 설명 */}
          <div className="relative z-10 mb-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "미술치료",
                desc: "미술치료가 뇌와 몸에 어떻게 작동하는가. 효과의 과학적 근거와 매커니즘, 재료·매체가 정서에 미치는 영향.",
              },
              {
                name: "ACT",
                desc: "수용전념치료의 6가지 핵심 프로세스와 &ldquo;심리적 유연성&rdquo;. Hayes, Strosahl, Wilson(2012) 기준.",
              },
              {
                name: "증상별 가이드",
                desc: "불안·우울·번아웃·트라우마·관계 갈등 등 주제별 접근. 증상 해소가 아니라 &ldquo;어떻게 관계 맺을 것인가&rdquo; 관점.",
              },
              {
                name: "실습 가이드",
                desc: "집에서 혼자 시도해 볼 수 있는 작업 — 마음챙김 드로잉, 감정 컬러링, 가치 비전 보드 등.",
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
