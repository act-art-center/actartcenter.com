import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/booking", "/admin"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/blog/", "/act-approach", "/faq"],
        disallow: ["/booking", "/admin"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/blog/", "/act-approach"],
      },
    ],
    sitemap: "https://actartcenter.com/sitemap.xml",
  };
}
