"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * CharacterIllustration
 * ---------------------
 * Acttie & Artty mascot renderer.
 *
 * - Uses next/image with fixed intrinsic width/height; caller controls display size
 *   via `className` (e.g. `w-48 md:w-64`).
 * - Animations honor `prefers-reduced-motion` via `useReducedMotion()`.
 * - Always `pointer-events-none` so overlays never block underlying content.
 * - `aria-hidden` when `alt === ""` per WAI-ARIA decorative-image pattern.
 *
 * Brand: Curated Canvas — characters are accents, never center stage.
 * See docs/branding/character-guide.md §10 for per-page placement rules.
 */

export type CharacterName =
  | "artty-welcome"
  | "artty-paint"
  | "artty-thoughtful"
  | "artty-scenes"
  | "acttie-reading"
  | "acttie-laptop"
  | "twins-together";

type Animation = "float" | "fade-in" | "none";

export interface CharacterIllustrationProps {
  name: CharacterName;
  /** Descriptive alt text. Pass empty string for decorative placement (aria-hidden). */
  alt: string;
  /** Intrinsic image width (next/image). Default 360. */
  width?: number;
  /** Intrinsic image height (next/image). Default 360. */
  height?: number;
  /** Set true only when rendered above the fold to avoid bandwidth waste. */
  priority?: boolean;
  /** Additional Tailwind classes applied to the outer wrapper. */
  className?: string;
  /** Animation preset. Default "float". */
  animation?: Animation;
  /** When true, adds `hidden md:block` so mascot is desktop-only. */
  hideOnMobile?: boolean;
}

const FILE_MAP: Record<CharacterName, string> = {
  "artty-welcome": "/characters/artty-welcome.png",
  "artty-paint": "/characters/artty-paint.png",
  "artty-thoughtful": "/characters/artty-thoughtful.png",
  "artty-scenes": "/characters/artty-scenes.png",
  "acttie-reading": "/characters/acttie-reading.png",
  "acttie-laptop": "/characters/acttie-laptop.png",
  "twins-together": "/characters/twins-together.png",
};

export function CharacterIllustration({
  name,
  alt,
  width = 360,
  height = 360,
  priority = false,
  className,
  animation = "float",
  hideOnMobile = false,
}: CharacterIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const effectiveAnimation: Animation = prefersReducedMotion ? "none" : animation;

  const initial =
    effectiveAnimation === "fade-in"
      ? { opacity: 0, y: 20 }
      : effectiveAnimation === "float"
        ? { opacity: 1, y: 0 }
        : { opacity: 1, y: 0 };

  const animate =
    effectiveAnimation === "fade-in"
      ? { opacity: 1, y: 0 }
      : effectiveAnimation === "float"
        ? { y: [0, -8, 0] }
        : undefined;

  const transition =
    effectiveAnimation === "fade-in"
      ? { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }
      : effectiveAnimation === "float"
        ? {
            duration: 6,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "loop" as const,
          }
        : undefined;

  const isDecorative = alt === "";

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={effectiveAnimation === "fade-in" ? { opacity: 1, y: 0 } : undefined}
      viewport={effectiveAnimation === "fade-in" ? { once: true, amount: 0.3 } : undefined}
      className={cn(
        "pointer-events-none select-none",
        hideOnMobile && "hidden md:block",
        className,
      )}
      aria-hidden={isDecorative || undefined}
    >
      <Image
        src={FILE_MAP[name]}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full max-w-full"
        sizes="(max-width: 768px) 60vw, 360px"
      />
    </motion.div>
  );
}
