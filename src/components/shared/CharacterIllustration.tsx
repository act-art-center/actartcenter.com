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
 * Animation presets:
 *   - "ambient"  (default as-of ambient upgrade): slow drift + breathing + rotate,
 *                 4 independent keyframe tracks with de-synced periods so multiple
 *                 characters on a page never move in lockstep. Intended for
 *                 section-background layer use (see AmbientCharacterLayer).
 *   - "float"    legacy 8px up-down 6s loop.
 *   - "fade-in"  scroll reveal once visible.
 *   - "none"     static.
 *
 * Brand: Curated Canvas — characters are accents, never center stage.
 * See docs/branding/character-guide.md §10 for per-page placement rules and
 * docs/branding/character-ambient-upgrade-report.md for motion rationale.
 */

export type CharacterName =
  | "artty-welcome"
  | "artty-paint"
  | "artty-thoughtful"
  | "artty-scenes"
  | "acttie-reading"
  | "acttie-laptop"
  | "twins-together";

export type CharacterAnimation = "ambient" | "float" | "fade-in" | "none";

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
  /** Animation preset. Default "ambient". */
  animation?: CharacterAnimation;
  /** When true, adds `hidden md:block` so mascot is desktop-only. */
  hideOnMobile?: boolean;
  /**
   * Display opacity. Defaults: 0.45 for "ambient", 1.0 for other presets.
   * Ambient-mode uses low values so the illustration reads as a background tint.
   */
  opacity?: number;
  /** Stagger offset in seconds — useful when two ambient characters share a section. */
  delay?: number;
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
  animation = "ambient",
  hideOnMobile = false,
  opacity,
  delay = 0,
}: CharacterIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const effectiveAnimation: CharacterAnimation = prefersReducedMotion ? "none" : animation;

  const resolvedOpacity =
    opacity ?? (animation === "ambient" ? 0.45 : 1);

  // Build motion props per preset. For ambient we drive four independent tracks
  // (y / x / scale / rotate) with different durations so multiple instances
  // never align — this is what produces the "living" background feel.
  const isDecorative = alt === "";

  const baseWrapperClass = cn(
    "pointer-events-none select-none",
    hideOnMobile && "hidden md:block",
    className,
  );

  if (effectiveAnimation === "ambient") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: resolvedOpacity,
          scale: [1, 1.03, 0.99, 1.02, 1],
          y: [0, -24, 8, -12, 0],
          x: [0, 12, -8, 16, 0],
          rotate: [-1.5, 1, -0.8, 1.5, -1.5],
        }}
        transition={{
          opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay },
          scale: {
            duration: 12,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
            delay,
          },
          y: {
            duration: 15,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
            delay,
          },
          x: {
            duration: 10,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
            delay: delay + 0.8,
          },
          rotate: {
            duration: 14,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
            delay: delay + 0.4,
          },
        }}
        className={baseWrapperClass}
        style={{ willChange: "transform, opacity" }}
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

  if (effectiveAnimation === "float") {
    return (
      <motion.div
        initial={{ opacity: resolvedOpacity, y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut" as const,
          repeat: Infinity,
          repeatType: "loop" as const,
          delay,
        }}
        style={{ opacity: resolvedOpacity }}
        className={baseWrapperClass}
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

  if (effectiveAnimation === "fade-in") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: resolvedOpacity, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay }}
        className={baseWrapperClass}
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

  // "none"
  return (
    <div
      className={baseWrapperClass}
      style={{ opacity: resolvedOpacity }}
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
    </div>
  );
}
