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
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
