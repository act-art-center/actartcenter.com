import assert from "node:assert/strict";

const BASE_URL = new URL(process.env.SITE_URL || "https://actartcenter.com");
const TIMEOUT_MS = 15_000;
const CONCURRENCY = 6;

function normalize(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  if (parsed.pathname !== "/") parsed.pathname = parsed.pathname.replace(/\/$/, "");
  return parsed.toString();
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      headers: { "user-agent": "ACT-ART-CENTER-maintenance-audit/1.0" },
      redirect: "follow",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function extract(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

async function auditPage(url) {
  const response = await fetchWithTimeout(url);
  const contentType = response.headers.get("content-type") || "";
  const errors = [];

  if (!response.ok) errors.push(`HTTP ${response.status}`);
  if (!contentType.includes("text/html")) errors.push(`content-type ${contentType || "missing"}`);

  if (response.ok && contentType.includes("text/html")) {
    const html = await response.text();
    const title = extract(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = extract(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    ) || extract(
      html,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["'][^>]*>/i,
    );
    const canonical = extract(
      html,
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i,
    ) || extract(
      html,
      /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i,
    );

    if (!title) errors.push("missing title");
    if (!description) errors.push("missing meta description");
    if (!canonical) errors.push("missing canonical");
    if (canonical && normalize(canonical) !== normalize(url)) {
      errors.push(`canonical mismatch (${canonical})`);
    }
  }

  return { url, errors };
}

async function main() {
  assert.equal(BASE_URL.protocol, "https:", "SITE_URL must use HTTPS");
  const sitemapUrl = new URL("/sitemap.xml", BASE_URL);
  const sitemapResponse = await fetchWithTimeout(sitemapUrl);
  assert.equal(sitemapResponse.status, 200, `sitemap returned ${sitemapResponse.status}`);

  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(urls.length > 0, "sitemap contains no URLs");
  assert.equal(new Set(urls).size, urls.length, "sitemap contains duplicate URLs");

  for (const url of urls) {
    assert.equal(new URL(url).origin, BASE_URL.origin, `foreign sitemap URL: ${url}`);
  }

  const homepage = await fetchWithTimeout(BASE_URL);
  const requiredHeaders = {
    "strict-transport-security": /max-age=/i,
    "x-content-type-options": /^nosniff$/i,
    "x-frame-options": /^(SAMEORIGIN|DENY)$/i,
    "referrer-policy": /.+/,
    "permissions-policy": /.+/,
  };
  for (const [name, expected] of Object.entries(requiredHeaders)) {
    const value = homepage.headers.get(name) || "";
    assert.match(value, expected, `missing or invalid ${name}`);
  }

  for (const path of ["/robots.txt", "/llms.txt", "/llms-full.txt"]) {
    const response = await fetchWithTimeout(new URL(path, BASE_URL));
    assert.equal(response.status, 200, `${path} returned ${response.status}`);
  }

  const results = [];
  for (let index = 0; index < urls.length; index += CONCURRENCY) {
    results.push(...await Promise.all(urls.slice(index, index + CONCURRENCY).map(auditPage)));
  }

  const failures = results.filter((result) => result.errors.length);
  console.log(`[audit:live] ${urls.length} sitemap URLs checked; ${failures.length} failed.`);
  for (const failure of failures) {
    console.error(`- ${failure.url}: ${failure.errors.join(", ")}`);
  }
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error("[audit:live] failed:", error);
  process.exitCode = 1;
});
