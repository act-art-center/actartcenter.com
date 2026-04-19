import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

// 페이지별 최근 수정일 하드코딩 맵. 페이지 내용이 의미 있게 변경되면 업데이트.
// ISO 8601 (YYYY-MM-DD). B2 spec §18.3 규정.
const PAGE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-04-19",
  "/act-approach": "2026-04-19",
  "/services": "2026-04-19",
  "/services/individual": "2026-04-19",
  "/services/group": "2026-04-19",
  "/services/child": "2026-04-19",
  "/services/online": "2026-04-19",
  "/services/protective": "2026-04-15",
  "/services/emotional": "2026-04-15",
  "/services/depth": "2026-04-15",
  "/team": "2026-04-19",
  "/pricing": "2026-04-19",
  "/faq": "2026-04-19",
  "/blog": "2026-04-19",
  "/booking": "2026-04-15",
  "/contact": "2026-04-19",
  "/gallery": "2026-04-15",
  "/privacy": "2026-04-15",
};

const DEFAULT_LAST_MODIFIED = "2026-04-19";

type ChangeFreq = "weekly" | "monthly" | "yearly" | "daily";

function isoFromKoreanDate(s: string): string {
  // "2026년 4월 10일" -> "2026-04-10".
  // Fallback: DEFAULT_LAST_MODIFIED if parse fails.
  const m = s.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!m) return DEFAULT_LAST_MODIFIED;
  const [, y, mo, d] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(PAGE_LAST_MODIFIED[path] ?? DEFAULT_LAST_MODIFIED),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(isoFromKoreanDate(post.date)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    // Home
    entry("/", 1.0, "weekly"),
    // Hubs
    entry("/act-approach", 0.9, "monthly"),
    entry("/services", 0.9, "monthly"),
    // Service leaves
    entry("/services/individual", 0.8, "monthly"),
    entry("/services/group", 0.8, "monthly"),
    entry("/services/child", 0.8, "monthly"),
    entry("/services/online", 0.8, "monthly"),
    entry("/services/protective", 0.7, "monthly"),
    entry("/services/emotional", 0.7, "monthly"),
    entry("/services/depth", 0.7, "monthly"),
    // Trust / conversion
    entry("/team", 0.7, "monthly"),
    entry("/pricing", 0.8, "monthly"),
    entry("/faq", 0.8, "monthly"),
    // Blog hub + leaves
    entry("/blog", 0.8, "daily"),
    ...blogEntries,
    // Booking / contact / misc
    entry("/booking", 0.7, "monthly"),
    entry("/contact", 0.6, "monthly"),
    entry("/gallery", 0.4, "monthly"),
    // Legal
    entry("/privacy", 0.3, "yearly"),
  ];
}
