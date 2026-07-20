import Image from "next/image";

export type BlogIllustrationVariant =
  | "holding"
  | "grief"
  | "misunderstanding"
  | "unfinished"
  | "safePaper"
  | "childLines"
  | "caregiverRest"
  | "parentWords"
  | "science"
  | "actHexaflex"
  | "anxiety"
  | "mindfulness"
  | "traumaBridge"
  | "values"
  | "hero";

type Character = "ACTIE" | "ARTTY" | "BOTH";

type BlogIllustrationProps = {
  variant: BlogIllustrationVariant;
  title: string;
};

const SLUG_TO_VARIANT: Record<string, BlogIllustrationVariant> = {
  "winnicott-holding-environment-art-therapy": "holding",
  "grief-art-therapy-loss-recovery": "grief",
  "art-therapy-not-drawing-skill": "misunderstanding",
  "unfinished-drawing-art-therapy": "unfinished",
  "safe-paper-art-therapy-room": "safePaper",
  "child-lines-colors-art-therapy": "childLines",
  "caregiver-fatigue-art-therapy": "caregiverRest",
  "parent-words-for-child-drawing": "parentWords",
  "art-therapy-science": "science",
  "act-6-processes": "actHexaflex",
  "anxiety-art-therapy": "anxiety",
  "mindfulness-drawing": "mindfulness",
  "trauma-art-expression": "traumaBridge",
  "values-vision-board": "values",
};

export function blogIllustrationVariant(slug: string): BlogIllustrationVariant {
  return SLUG_TO_VARIANT[slug] ?? "hero";
}

const VARIANT_MAP: Record<
  BlogIllustrationVariant,
  {
    character: Character;
    characterSrc?: string;
    accent: string;
    bg: string;
    label: string;
    prop: "lantern" | "marks" | "paper" | "safe" | "crayon" | "cup" | "speech" | "chart" | "hex" | "thread" | "circle" | "bridge" | "stars" | "books";
  }
> = {
  holding: {
    character: "BOTH",
    accent: "#5F8A7A",
    bg: "#E8E0D2",
    label: "안아주는 환경",
    prop: "safe",
  },
  hero: {
    character: "BOTH",
    accent: "#2E6B5F",
    bg: "#E8D7B8",
    label: "미술치료 이야기",
    prop: "books",
  },
  grief: {
    character: "ARTTY",
    characterSrc: "/characters/artty-thoughtful.png",
    accent: "#D9A13B",
    bg: "#D9DFD1",
    label: "상실과 애도",
    prop: "lantern",
  },
  misunderstanding: {
    character: "ACTIE",
    characterSrc: "/characters/acttie-reading.png",
    accent: "#C8795A",
    bg: "#EFE4D3",
    label: "그림 실력보다 과정",
    prop: "marks",
  },
  unfinished: {
    character: "ARTTY",
    characterSrc: "/characters/artty-paint.png",
    accent: "#7FA392",
    bg: "#F2D9C8",
    label: "완성되지 않은 그림",
    prop: "paper",
  },
  safePaper: {
    character: "ACTIE",
    characterSrc: "/characters/acttie-reading.png",
    accent: "#B9895B",
    bg: "#E8E0D2",
    label: "안전한 종이",
    prop: "safe",
  },
  childLines: {
    character: "ARTTY",
    characterSrc: "/characters/artty-paint.png",
    accent: "#E2B84E",
    bg: "#CFE1DA",
    label: "아이의 선과 색",
    prop: "crayon",
  },
  caregiverRest: {
    character: "ACTIE",
    characterSrc: "/characters/acttie-laptop.png",
    accent: "#6E8B7C",
    bg: "#EFE1C6",
    label: "돌봄과 쉼",
    prop: "cup",
  },
  parentWords: {
    character: "ARTTY",
    characterSrc: "/characters/artty-welcome.png",
    accent: "#D7A06A",
    bg: "#DCE7D4",
    label: "부모의 말",
    prop: "speech",
  },
  science: {
    character: "ACTIE",
    characterSrc: "/characters/acttie-reading.png",
    accent: "#5F8A8B",
    bg: "#E9D6B8",
    label: "연구와 근거",
    prop: "chart",
  },
  actHexaflex: {
    character: "BOTH",
    accent: "#2E6B5F",
    bg: "#E8C46B",
    label: "ACT 6 프로세스",
    prop: "hex",
  },
  anxiety: {
    character: "ARTTY",
    characterSrc: "/characters/artty-thoughtful.png",
    accent: "#7788A8",
    bg: "#EAD9CF",
    label: "불안의 실",
    prop: "thread",
  },
  mindfulness: {
    character: "ACTIE",
    characterSrc: "/characters/acttie-reading.png",
    accent: "#8A9A5B",
    bg: "#F0DFC0",
    label: "마음챙김 드로잉",
    prop: "circle",
  },
  traumaBridge: {
    character: "ARTTY",
    characterSrc: "/characters/artty-scenes.png",
    accent: "#8D6E63",
    bg: "#D7E0E0",
    label: "트라우마와 표현",
    prop: "bridge",
  },
  values: {
    character: "BOTH",
    accent: "#C48A3A",
    bg: "#DDE7C8",
    label: "가치와 비전",
    prop: "stars",
  },
};

function DecorativeProp({ prop, accent }: { prop: (typeof VARIANT_MAP)[BlogIllustrationVariant]["prop"]; accent: string }) {
  const common = "absolute pointer-events-none";
  switch (prop) {
    case "lantern":
      return <div className={`${common} right-[10%] top-[18%] h-24 w-16 rounded-b-full rounded-t-2xl bg-white/70 border-4 border-night/10`}><div className="mx-auto mt-8 h-9 w-7 rounded-full bg-amber-300/80" /></div>;
    case "marks":
      return <div className={`${common} right-[9%] top-[20%] grid grid-cols-3 gap-3`}>{Array.from({ length: 9 }).map((_, i) => <span key={i} className="h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />)}</div>;
    case "paper":
      return <div className={`${common} right-[8%] top-[18%] h-36 w-52 rotate-3 rounded-2xl bg-white/80 border border-night/10`}><div className="mx-8 mt-16 h-2 rounded-full bg-primary-500/50 border-dashed" /><div className="mx-14 mt-5 h-2 rounded-full bg-primary-500/30" /></div>;
    case "safe":
      return <div className={`${common} right-[9%] top-[16%] h-36 w-48 rounded-3xl border-[10px] border-dashed border-white/70`}><div className="mx-auto mt-10 h-12 w-12 rotate-45 rounded-xl" style={{ backgroundColor: accent }} /></div>;
    case "crayon":
      return <div className={`${common} right-[8%] top-[22%] h-8 w-56 rotate-[-18deg] rounded-full`} style={{ backgroundColor: accent }}><div className="absolute right-0 top-0 h-8 w-10 rounded-r-full bg-night/80" /></div>;
    case "cup":
      return <div className={`${common} right-[12%] top-[25%] h-24 w-24 rounded-b-3xl rounded-t-lg bg-white/80 border border-night/10`}><div className="absolute -right-8 top-7 h-10 w-10 rounded-full border-8 border-white/80" /></div>;
    case "speech":
      return <div className={`${common} right-[7%] top-[14%] h-28 w-64 rounded-3xl bg-white/80`}><div className="absolute -bottom-4 left-10 h-10 w-10 rotate-45 bg-white/80" /><div className="mx-8 mt-9 h-3 rounded-full bg-night/15" /><div className="mx-8 mt-4 h-3 w-32 rounded-full bg-night/10" /></div>;
    case "chart":
      return <div className={`${common} right-[7%] top-[17%] h-36 w-56 rounded-2xl bg-white/75 border border-night/10`}><svg viewBox="0 0 220 120" className="m-5 h-28 w-48"><path d="M10 92 L58 54 L105 70 L160 28 L205 48" fill="none" stroke={accent} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /></svg></div>;
    case "hex":
      return <div className={`${common} right-[9%] top-[13%] h-40 w-40`}><svg viewBox="0 0 160 160"><polygon points="80,8 144,45 144,115 80,152 16,115 16,45" fill="white" opacity="0.72" stroke={accent} strokeWidth="8" /></svg></div>;
    case "thread":
      return <svg className={`${common} right-[4%] top-[20%] h-44 w-80`} viewBox="0 0 320 170"><path d="M12 120 C80 10 118 170 170 75 C218 -5 250 160 310 45" fill="none" stroke={accent} strokeWidth="10" strokeLinecap="round" /></svg>;
    case "circle":
      return <div className={`${common} right-[8%] top-[13%] h-44 w-44 rounded-full border-[14px] border-white/70`}><div className="m-12 h-20 w-20 rounded-full border-8" style={{ borderColor: accent }} /></div>;
    case "bridge":
      return <svg className={`${common} right-[5%] top-[27%] h-36 w-80`} viewBox="0 0 320 130"><path d="M20 100 C90 20 140 20 160 100 C180 20 230 20 300 100" fill="none" stroke="white" strokeWidth="18" strokeLinecap="round" opacity="0.8" /></svg>;
    case "stars":
      return <div className={`${common} right-[7%] top-[15%] flex gap-5`}>{[0, 1, 2].map((i) => <span key={i} className="text-5xl text-white/80">★</span>)}</div>;
    case "books":
      return <div className={`${common} right-[8%] top-[17%] flex items-end gap-3`}>{["h-28", "h-36", "h-24", "h-32"].map((h, i) => <span key={i} className={`${h} w-10 rounded-t-lg bg-white/75 border border-night/10`} />)}</div>;
  }
}

function CharacterImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image src={src} alt={alt} fill className="object-contain drop-shadow-[0_18px_28px_rgba(28,26,22,0.18)]" sizes="260px" />
    </div>
  );
}

export function BlogIllustration({ variant, title }: BlogIllustrationProps) {
  const item = VARIANT_MAP[variant];
  return (
    <div className="relative h-full w-full overflow-hidden bg-cream" style={{ backgroundColor: item.bg }} aria-label={title}>
      <div className="absolute inset-4 rounded-[1.75rem] bg-white/25" />
      <div className="absolute -left-16 -top-20 h-60 w-60 rounded-full bg-white/35" />
      <div className="absolute -bottom-24 right-24 h-72 w-72 rounded-full bg-white/25" />
      <DecorativeProp prop={item.prop} accent={item.accent} />

      <div className="absolute left-6 top-5 rounded-full bg-white/75 px-4 py-1.5 text-xs font-semibold tracking-wide text-night/75 backdrop-blur-sm">
        {item.label}
      </div>

      {item.character === "BOTH" ? (
        <div className="absolute bottom-[-6%] left-[8%] flex items-end gap-2 sm:gap-4">
          <CharacterImage src="/characters/acttie-reading.png" alt="ACTIE" className="h-[78%] min-h-[220px] w-[185px]" />
          <CharacterImage src="/characters/artty-paint.png" alt="ARTTY" className="h-[82%] min-h-[235px] w-[205px]" />
        </div>
      ) : (
        <div className="absolute bottom-[-8%] left-[8%]">
          <CharacterImage
            src={item.characterSrc!}
            alt={item.character}
            className="h-[86%] min-h-[250px] w-[250px]"
          />
        </div>
      )}

      <div className="absolute bottom-7 right-8 max-w-[52%] rounded-2xl bg-white/72 px-5 py-4 text-right backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: item.accent }}>
          ACT ART CENTER
        </p>
        <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-night sm:text-base">
          {title}
        </p>
      </div>
    </div>
  );
}
