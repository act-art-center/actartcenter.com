"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <div className="bg-paper/95 backdrop-blur-lg border-t border-sand/50 px-4 py-3">
        <Link
          href="/booking"
          className="flex items-center justify-center w-full py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-[var(--shadow-md)]"
        >
          무료 상담 예약하기
        </Link>
      </div>
    </div>
  );
}
