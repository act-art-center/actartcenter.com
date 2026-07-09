import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// SEO/AEO/GEO: 사용자 가시 텍스트를 바꾸지 않고 크롤링 정책/발견성을 강화.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin"],
      },
      // 한국 검색엔진 크롤러 명시 허용 — Naver=Yeti, Daum=Daumoa. "*" 로도 커버되나 한국 SEO 의도를 명시 고정.
      {
        userAgent: "Yeti",
        allow: "/",
        disallow: ["/api/", "/admin"],
      },
      {
        userAgent: "Daumoa",
        allow: "/",
        disallow: ["/api/", "/admin"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "Perplexity-User",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      // Bytespider (ByteDance/TikTok 크롤러) 차단.
      // robots 미준수 봇 — robots.txt 만으로는 강제되지 않으므로 Cloudflare WAF 병행 필요.
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      // CCBot(Common Crawl) 허용 — Henry 위임 결정(2026-07-03): 타 학습봇(GPTBot·ClaudeBot·
      // Google-Extended 등)을 이미 허용 중이라 CCBot만 차단하면 보호 효과가 없고(비일관),
      // 하우스 기본(학습봇 허용+Bytespider만 차단)과 정렬 + 오픈 모델 학습 코퍼스에 브랜드 편입.
      {
        userAgent: "CCBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
