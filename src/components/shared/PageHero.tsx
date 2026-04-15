import Image from "next/image";
import { Container } from "@/components/shared/Container";

export function PageHero({
  title,
  subtitle,
  label,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  label?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/30 to-night/10" />

      {/* Content */}
      <Container className="relative z-10 pb-12 lg:pb-16 pt-32">
        {label && (
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">
            {label}
          </p>
        )}
        <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/80 max-w-xl text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
