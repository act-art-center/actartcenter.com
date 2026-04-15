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
        allow: ["/", "/blog/", "/act-approach", "/faq", "/services/"],
        disallow: ["/api/", "/booking"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/blog/", "/act-approach", "/faq"],
        disallow: ["/api/", "/booking"],
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
