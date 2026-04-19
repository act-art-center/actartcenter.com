import Link from "next/link";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildBreadcrumb, buildGraph } from "@/lib/schema";

export interface BreadcrumbItem {
  /** 표시 텍스트. */
  name: string;
  /** 상대 경로 (`/services`) 또는 절대 URL. 홈은 `/`. */
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /**
   * BreadcrumbList JSON-LD 를 같이 내보낼지 여부 (기본: true).
   * 페이지 `@graph` 에서 BreadcrumbList 를 이미 주입했다면 false 로 설정해
   * 중복을 피한다.
   */
  emitJsonLd?: boolean;
}

/**
 * 시각 Breadcrumb + JSON-LD 동시 제공 컴포넌트.
 *
 * 디자인 규칙 (design.md §2 "No-Line Rule"):
 *  - 디바이더는 border/line 이 아닌 chevron 아이콘 (stone 계열 저채도)
 *  - 현재 페이지는 `aria-current="page"` + charcoal text
 *  - 링크는 hover 시 primary-500 전환 (background/outline 변화 없음)
 *
 * 접근성:
 *  - <nav aria-label="Breadcrumb"> + <ol> 시맨틱
 *  - 마지막 항목은 <span> 으로 렌더 (링크 아님)
 */
export function Breadcrumbs({
  items,
  className,
  emitJsonLd = true,
}: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  const schema = emitJsonLd
    ? buildGraph(
        buildBreadcrumb(items.map((i) => ({ name: i.name, url: i.href }))),
      )
    : null;

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <nav
        aria-label="Breadcrumb"
        className={className ?? "text-sm text-charcoal/60"}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.href}-${i}`} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-charcoal font-medium"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast ? (
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-stone shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
