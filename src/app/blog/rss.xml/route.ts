import { BLOG_POSTS } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

// 블로그 RSS 2.0 피드 — /blog/rss.xml.
// 데이터가 정적(BLOG_POSTS + blogContent)이므로 정적 생성한다.
export const dynamic = "force-static";

// "2026년 4월 10일" -> Date(UTC). 파싱 실패 시 현재 시각.
function dateFromKorean(s: string): Date {
  const m = s.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!m) return new Date();
  const [, y, mo, d] = m;
  return new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d)));
}

// XML 텍스트/속성 이스케이프.
function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// CDATA 안에 안전하게 넣기 위해 "]]>" 시퀀스를 분할한다.
function cdata(s: string): string {
  return `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

export async function GET(): Promise<Response> {
  const feedUrl = `${SITE_URL}/blog/rss.xml`;
  const blogUrl = `${SITE_URL}/blog`;

  // 최신 글이 위로 오도록 발행일 내림차순 정렬.
  const posts = [...BLOG_POSTS].sort(
    (a, b) => dateFromKorean(b.date).getTime() - dateFromKorean(a.date).getTime(),
  );

  const lastBuildDate = (
    posts[0] ? dateFromKorean(posts[0].date) : new Date()
  ).toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = dateFromKorean(post.date).toUTCString();
      const body = blogContent[post.slug] ?? "";
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <dc:creator>${cdata(post.author)}</dc:creator>
      <description>${cdata(post.excerpt)}</description>
      <content:encoded>${cdata(body)}</content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} 블로그`)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
