"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="p-2 text-charcoal hover:text-primary-500 transition-colors"
          aria-label="메뉴 열기"
        >
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-paper p-0" showCloseButton={false}>
          <SheetTitle className="sr-only">메뉴</SheetTitle>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 h-16">
              <span className="flex items-center gap-2 text-night">
                <Logo className="w-7 h-7" />
                <span className="font-[var(--font-display)] text-xl">ACT ART CENTER</span>
              </span>
              <SheetClose className="p-2 text-charcoal hover:text-primary-500 transition-colors" aria-label="메뉴 닫기">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </SheetClose>
            </div>

            <nav className="flex-1 px-6 py-8" aria-label="모바일 메뉴">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg text-charcoal hover:text-primary-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 pb-8">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                무료 상담 예약하기
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
