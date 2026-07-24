import { Fragment } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { MobileNav } from "./MobileNav";
import { HeaderScroll } from "./HeaderScroll";

export function Header() {
  return (
    <HeaderScroll>
      <Container className="flex max-w-[1440px] items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-night">
          <Logo className="w-8 h-8 lg:w-9 lg:h-9" />
          <span className="font-[var(--font-display)] text-lg lg:text-xl tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-2 2xl:gap-3" aria-label="메인 메뉴">
          {NAV_ITEMS.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && (
                <span aria-hidden="true" className="select-none text-charcoal/30 text-[var(--text-small)]">
                  |
                </span>
              )}
              <Link
                href={item.href}
                className="whitespace-nowrap text-charcoal text-[var(--text-small)] font-medium tracking-wide hover:text-primary-500 transition-colors"
              >
                {item.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/booking"
            className="inline-flex items-center whitespace-nowrap px-4 2xl:px-5 py-2.5 bg-primary-500 text-white text-[var(--text-small)] font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.02] shadow-[var(--shadow-sm)]"
          >
            예약하기
          </Link>
        </div>

        <MobileNav />
      </Container>
    </HeaderScroll>
  );
}
