"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeaderScroll({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-paper/80 backdrop-blur-xl shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      )}
    >
      {children}
    </header>
  );
}
