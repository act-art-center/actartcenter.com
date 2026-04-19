import type { MetadataRoute } from "next";

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
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://actartcenter.com/sitemap.xml",
    host: "https://actartcenter.com",
  };
}
