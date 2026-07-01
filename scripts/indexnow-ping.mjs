// IndexNow ping — 콘텐츠 발행/수정 후 검색엔진에 즉시 색인 통보.
// 참여 엔진: Bing · Naver · Yandex · Seznam · Yep. ⚠ Google · Daum 은 IndexNow 미참여
//   → Google=Search Console, Daum=webmaster.daum.net 수집요청 으로 별도 처리.
// KB: korvia-seo-skill/docs/BING_YAHOO_INDEXNOW.md · DAUM_KAKAO_SEARCH.md
//
// Usage:
//   node scripts/indexnow-ping.mjs                                   # 라이브 sitemap.xml 전체 URL 통보
//   node scripts/indexnow-ping.mjs https://actartcenter.com/blog/x   # 특정 URL(들)만 통보

const HOST = "actartcenter.com";
const KEY = "566ba2a3d8ddbc14dd2e7bd20418e327"; // = public/{KEY}.txt (공개값, 비밀 아님)
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",        // 공유 엔드포인트 → 참여 엔진에 전파
  "https://searchadvisor.naver.com/indexnow", // Naver 직접(한국 핵심 페이지 전파 보장용 병행)
];

async function sitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function ping(endpoint, urlList) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    console.log(`${res.status}  ${endpoint}  (${urlList.length} urls)`); // 200/202 = OK
  } catch (e) {
    console.warn(`skip  ${endpoint}  (${e.message})`);
  }
}

const args = process.argv.slice(2);
const urlList = args.length ? args : await sitemapUrls();
if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}
for (const ep of ENDPOINTS) await ping(ep, urlList);
console.log("Done. ⚠ Daum(webmaster.daum.net 수집요청)·Google(GSC) 은 별도.");
