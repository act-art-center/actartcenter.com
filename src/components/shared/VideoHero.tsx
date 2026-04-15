"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function VideoHero({
  videoSrc,
  posterSrc,
  overlayOpacity = 0.5,
  children,
  className,
}: {
  videoSrc: string;
  posterSrc?: string;
  overlayOpacity?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (reducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [reducedMotion]);

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Video background */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Poster fallback for reduced motion */}
      {reducedMotion && posterSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
          aria-hidden="true"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-night"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
