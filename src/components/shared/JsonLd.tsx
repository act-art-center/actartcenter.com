/**
 * JSON-LD 주입 컴포넌트.
 *
 * 입력 가드:
 *  - data 가 null / undefined 이면 렌더하지 않는다.
 *  - JSON.stringify 실패 시 개발 모드에서는 경고 로그, 프로덕션에서는 silent.
 *  - 빈 객체도 렌더하지 않는다 (의미 없는 script 태그 방지).
 *
 * 사용법:
 *   <JsonLd data={buildGraph(buildBreadcrumb(...), buildArticle(...))} />
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | null | undefined;
}) {
  if (!data) return null;
  if (typeof data !== "object") return null;
  if (Object.keys(data).length === 0) return null;

  let json: string;
  try {
    json = JSON.stringify(data);
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[JsonLd] JSON.stringify failed:", err);
    }
    return null;
  }

  if (!json || json === "{}" || json === "null") return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
