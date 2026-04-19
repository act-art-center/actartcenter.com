"use client";

import { useRef, useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribeMedia(query: string) {
  return (callback: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
  };
}

function useMediaQuery(query: string, serverFallback = false): boolean {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => serverFallback,
  );
}

export function VideoHero({
  videoSrc,
  posterSrc,
  mobileImageSrc,
  overlayOpacity = 0.5,
  children,
  className,
}: {
  videoSrc: string;
  posterSrc?: string;
  mobileImageSrc?: string;
  overlayOpacity?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [mounted, setMounted] = useState(false);
  const shouldPlayVideo = mounted && isDesktop && !reducedMotion;
  const mobileBg = mobileImageSrc ?? posterSrc;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlayVideo) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [shouldPlayVideo]);

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Desktop: video background */}
      {shouldPlayVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Mobile and reduced-motion: image background */}
      {(!shouldPlayVideo && mobileBg) && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileBg})` }}
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
