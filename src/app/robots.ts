import type { MetadataRoute } from "next";

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
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "Perplexity-User",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/", "/team"],
        disallow: ["/api/", "/admin", "/booking"],
      },
      // Bytespider (ByteDance/TikTok 크롤러) 차단.
      // robots 미준수 봇 — robots.txt 만으로는 강제되지 않으므로 Cloudflare WAF 병행 필요.
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      // TODO: CCBot 허용/차단 = Henry 사업판단(AI 학습셋 편입 여부) — 게이트.
      // 아래 CCBot 규칙(현 상태=차단)은 그 판단 전까지 절대 변경 금지.
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://actartcenter.com/sitemap.xml",
    host: "https://actartcenter.com",
  };
}
