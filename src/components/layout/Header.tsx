import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { MobileNav } from "./MobileNav";
import { HeaderScroll } from "./HeaderScroll";

export function Header() {
  return (
    <HeaderScroll>
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5 text-night">
          <Logo className="w-8 h-8 lg:w-9 lg:h-9" />
          <span className="font-[var(--font-display)] text-lg lg:text-xl tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="메인 메뉴">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-charcoal text-[var(--text-small)] font-medium tracking-wide hover:text-primary-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/booking"
            className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-white text-[var(--text-small)] font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
          >
            예약하기
          </Link>
        </div>

        <MobileNav />
      </Container>
    </HeaderScroll>
  );
}
