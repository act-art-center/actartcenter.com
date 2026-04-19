"use client";

import { CharacterIllustration, type CharacterName } from "./CharacterIllustration";
import { cn } from "@/lib/utils";

/**
 * AmbientCharacterLayer
 * ---------------------
 * Section-scoped background layer that drops 1–3 Acttie/Artty mascots behind
 * the section content. Each mascot runs CharacterIllustration's "ambient"
 * preset (slow drift + breathing + gentle rotate) so the page feels like it is
 * quietly breathing rather than displaying a static illustration.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <AmbientCharacterLayer characters={[
 *       { name: "twins-together", position: "center-right", size: 480, opacity: 0.5 },
 *       { name: "artty-thoughtful", position: "top-left", size: 220, opacity: 0.3, delay: 2 },
 *     ]} />
 *     <Container className="relative z-10"> ... </Container>
 *   </section>
 *
 * Requirements on the parent:
 *   - MUST be `relative` — this layer uses `absolute inset-0`.
 *   - SHOULD be `overflow-hidden` so mascot drift does not leak out of bounds.
 *   - Sibling content MUST have `relative z-10` (or at minimum `relative`) so
 *     text renders above the ambient layer.
 *
 * Brand: see docs/branding/character-guide.md + character-ambient-upgrade-report.md.
 */

type AnchorShorthand =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center"
  | "center-left"
  | "center-right"
  | "center";

type AnchorObject = { top?: string; right?: string; bottom?: string; left?: string };

export type AmbientAnchor = AnchorShorthand | AnchorObject;

export interface AmbientCharacterSpec {
  name: CharacterName;
  /** Anchor shorthand or explicit CSS offsets (e.g. { top: "10%", left: "15%" }). */
  position: AmbientAnchor;
  /** Display width in px at desktop. Height derives from intrinsic aspect. Default 320. */
  size?: number;
  /** Opacity override — defaults to 0.45 via CharacterIllustration ambient preset. */
  opacity?: number;
  /** Animation stagger in seconds so multiple characters desync. */
  delay?: number;
  /** Optional alt text. Empty = decorative (aria-hidden). Default "". */
  alt?: string;
  /** Hide on mobile (< md). Defaults: primary (index 0) visible, others hidden. */
  hideOnMobile?: boolean;
  /** Extra Tailwind classes on the mascot wrapper. */
  className?: string;
}

export interface AmbientCharacterLayerProps {
  characters: AmbientCharacterSpec[];
  /** Extra classes on the layer container. */
  className?: string;
}

function anchorShorthandClass(anchor: AnchorShorthand): string {
  // Tuned slightly inside section edges so drift (up to ~24px) does not clip.
  switch (anchor) {
    case "top-left":
      return "top-[6%] left-[4%]";
    case "top-right":
      return "top-[6%] right-[4%]";
    case "top-center":
      return "top-[6%] left-1/2 -translate-x-1/2";
    case "bottom-left":
      return "bottom-[6%] left-[4%]";
    case "bottom-right":
      return "bottom-[6%] right-[4%]";
    case "bottom-center":
      return "bottom-[6%] left-1/2 -translate-x-1/2";
    case "center-left":
      return "top-1/2 left-[4%] -translate-y-1/2";
    case "center-right":
      return "top-1/2 right-[4%] -translate-y-1/2";
    case "center":
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  }
}

function isAnchorObject(a: AmbientAnchor): a is AnchorObject {
  return typeof a === "object" && a !== null;
}

export function AmbientCharacterLayer({
  characters,
  className,
}: AmbientCharacterLayerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden z-0",
        className,
      )}
    >
      {characters.map((spec, idx) => {
        const {
          name,
          position,
          size = 320,
          opacity,
          delay = 0,
          alt = "",
          hideOnMobile = idx > 0,
          className: charClassName,
        } = spec;

        const anchorClass = isAnchorObject(position) ? "" : anchorShorthandClass(position);
        const anchorStyle: React.CSSProperties = isAnchorObject(position)
          ? { ...position }
          : {};

        return (
          <div
            key={`${name}-${idx}`}
            className={cn("absolute", anchorClass)}
            style={anchorStyle}
          >
            <CharacterIllustration
              name={name}
              alt={alt}
              width={size}
              height={size}
              hideOnMobile={hideOnMobile}
              animation="ambient"
              opacity={opacity}
              delay={delay}
              className={cn(charClassName)}
            />
          </div>
        );
      })}
    </div>
  );
}
