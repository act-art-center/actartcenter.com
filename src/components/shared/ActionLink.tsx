import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionLinkVariant =
  | "primary"
  | "outline"
  | "soft"
  | "inverse-solid"
  | "inverse-outline";

type ActionLinkSize = "compact" | "regular";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: ActionLinkVariant;
  size?: ActionLinkSize;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ActionLinkVariant, string> = {
  primary:
    "bg-primary-500 text-white shadow-[var(--shadow-sm)] hover:bg-primary-600 hover:-translate-y-0.5",
  outline:
    "border border-primary-200 bg-white/70 text-primary-700 hover:border-primary-300 hover:bg-primary-50",
  soft: "bg-primary-50 text-primary-700 hover:bg-primary-100",
  "inverse-solid":
    "border border-white/70 bg-white/95 text-night shadow-[var(--shadow-sm)] hover:bg-white hover:-translate-y-0.5",
  "inverse-outline":
    "border border-white/45 bg-white/5 text-white hover:border-white/70 hover:bg-white/12",
};

const sizeClasses: Record<ActionLinkSize, string> = {
  compact: "min-h-11 px-4 py-2 text-sm",
  regular: "min-h-12 px-6 py-3 text-sm sm:text-base",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "regular",
  className,
  ariaLabel,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
