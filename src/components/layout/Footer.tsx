import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import {
  ABOUT_LINKS,
  CONNECT_LINKS,
  CONTACT,
  RESOURCE_LINKS,
  SERVICES_ALL,
  SITE_TAGLINE,
} from "@/lib/constants";

/**
 * 사이트맵형 Footer (4 컬럼).
 *
 * 디자인 토큰 준수:
 * - design.md §2 "No-Line Rule": 컬럼 구분선 금지 → `bg-night` 단일 surface.
 * - design.md §4 "Ambient Shadow": 별도 그림자 없음, tonal layering만 사용.
 * - design.md §6 "Don't use 1px dividers — use background color change or 48px gap".
 *   → 컬럼 사이는 gap(32px/48px)으로 분리, 저작권 줄은 `border-t`를 쓰지 않고
 *   `bg-white/5` 배경 띠로 대체해 No-Line 규칙 준수.
 *
 * Orphan 페이지 해소 (A2 감사):
 * - `/contact` → Connect 컬럼 + brand 블록 주소 클릭.
 * - `/gallery` → About + Resources 두 곳에서 노출.
 */
export function Footer() {
  return (
    <footer className="bg-night text-stone pt-16 lg:pt-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-x-10">
          {/* Brand — mobile: 전체 폭, desktop: 1 컬럼 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <Logo className="w-8 h-8" invert />
              <span className="font-[var(--font-display)] text-xl">ACT ART CENTER</span>
            </Link>
            <p
              className="mt-3 text-stone/70 font-[var(--font-accent)] text-lg"
              style={{ transform: "rotate(-1deg)" }}
            >
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 text-sm text-stone/60 max-w-[28ch] leading-relaxed">
              수용전념치료(ACT)와 미술치료를 결합한 전문 심리치료 센터
            </p>

            {/* Address — clickable to /contact so visitors can find the map */}
            <Link
              href="/contact"
              className="mt-6 block text-xs text-stone/50 hover:text-stone/80 transition-colors max-w-[28ch] leading-relaxed"
            >
              {CONTACT.address}
              <span className="block mt-1 text-stone/40">오시는 길 보기 →</span>
            </Link>
          </div>

          {/* Column 1: 서비스 (7개) */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">서비스</h3>
            <ul className="space-y-2.5">
              {SERVICES_ALL.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                  >
                    {/* Footer에서는 간결한 라벨 — titleEn 대신 한글 축약 사용 */}
                    {footerLabel(service.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: 센터 소개 */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">센터 소개</h3>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 리소스 */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">리소스</h3>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: 연결 */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">연결</h3>
            <ul className="space-y-2.5">
              {CONNECT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${CONTACT.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone/70 hover:text-white transition-colors leading-snug"
                >
                  Instagram {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright band — surface shift (No-Line Rule §6) */}
      <div className="mt-16 bg-white/[0.04]">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone/40">
            <p>&copy; {new Date().getFullYear()} ACT ART CENTER. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-stone/70 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/contact" className="hover:text-stone/70 transition-colors">
                오시는 길
              </Link>
              <Link href="/booking" className="hover:text-stone/70 transition-colors">
                상담 예약
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/**
 * Footer 내 서비스 라벨 — 컬럼 폭 제약으로 축약.
 * `SERVICES_ALL`의 full title이 너무 길어 2줄 wrap되는 것을 방지.
 */
function footerLabel(id: string): string {
  switch (id) {
    case "individual":
      return "개인 미술치료";
    case "group":
      return "그룹 프로그램";
    case "child":
      return "아동·청소년";
    case "online":
      return "온라인 상담";
    case "protective":
      return "보호·의료 환경";
    case "emotional":
      return "정서·트라우마";
    case "depth":
      return "심층 탐색";
    default:
      return id;
  }
}
