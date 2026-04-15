import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="ACT ART CENTER 로고"
      width={40}
      height={40}
      className={cn("shrink-0", invert && "invert", className)}
    />
  );
}
