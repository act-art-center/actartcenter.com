import { cn } from "@/lib/utils";

type BgVariant = "paper" | "cream" | "sand" | "white" | "primary-50" | "primary" | "night";

const bgClasses: Record<BgVariant, string> = {
  paper: "bg-paper text-charcoal",
  cream: "bg-cream text-charcoal",
  sand: "bg-sand text-charcoal",
  white: "bg-white text-charcoal",
  "primary-50": "bg-primary-50 text-charcoal",
  primary: "bg-primary-500 text-white",
  night: "bg-night text-stone",
};

export function SectionWrapper({
  children,
  bg = "paper",
  className,
  id,
}: {
  children: React.ReactNode;
  bg?: BgVariant;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-16 lg:py-24", bgClasses[bg], className)}>
      {children}
    </section>
  );
}
