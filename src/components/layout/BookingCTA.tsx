"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Floating CTA — 모바일 전용. 스크롤 600px 초과 시 sticky 노출.
 *
 * Primary: `/booking` (첫 무료 상담 예약하기).
 * Secondary (compact): `/contact` 아이콘 링크 — 전화/카카오톡 대안 탐색용.
 *
 * design.md §2 "Glass & Gradient": `backdrop-blur` 유지.
 * design.md §6 No-Line Rule: 상단 구분선 대신 shadow + opaque surface 사용.
 */
export function BookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-paper/95 backdrop-blur-lg px-4 py-3 shadow-[0_-8px_24px_rgba(29,28,21,0.08)]">
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            aria-label="첫 무료 상담 예약하기"
            className="flex-1 flex items-center justify-center py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-[var(--shadow-md)]"
          >
            첫 무료 상담 예약하기
          </Link>
          <Link
            href="/contact"
            aria-label="오시는 길·연락처 보기"
            className="shrink-0 flex items-center justify-center w-12 h-12 bg-white text-primary-500 rounded-lg hover:bg-cream transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
