/**
 * Hero / 대표 이미지 중앙 레지스트리.
 *
 * 모든 페이지의 hero · 블로그 포스트 대표 이미지 · 주요 섹션 이미지를
 * 이곳에서 관리해서 cross-page duplicate 를 방지합니다.
 *
 * 사용 원칙:
 * - 새 페이지 · 블로그 포스트 추가 시 이곳에 항목을 반드시 추가.
 * - 중복 체크는 `scripts/audit-heroes.mjs` 로 빌드 전 실행
 *   (`npm run audit:heroes`).
 * - URL 은 실존 Unsplash URL 또는 자체 `/public` asset 경로만 등록.
 *   허구 Unsplash photo ID 금지.
 * - 서비스 카드 썸네일 (`constants.ts` SERVICES_ALL) 과 서비스 상세
 *   페이지 hero 가 같은 ID 를 공유하는 것은 설계상 허용 — 이곳에 등록하지
 *   않음으로써 audit 에서 제외됨.
 */

export type HeroSlot = {
  /** 페이지·포스트·섹션 식별자 (kebab-case). */
  id: string;
  /** 경로 (예: `/team`, `/blog/values-vision-board`, `/#philosophy`). */
  page: string;
  /** 절대 URL 또는 `/public` asset 경로. */
  imageUrl: string;
  /** 의미 있는 alt text (한국어). */
  imageAlt: string;
  /** 이미지 유형. */
  category: "page" | "blog" | "section";
};

/**
 * URL 에서 query string 제거 후 정규화된 키를 반환.
 * 동일 photo-id 를 서로 다른 `?w=` · `?q=` 로 불러도 중복으로 판정.
 */
export function normalizeImageKey(url: string): string {
  return url.split("?")[0];
}

export const HERO_REGISTRY: HeroSlot[] = [
  // ── Top-level pages ───────────────────────────────────────────────
  {
    id: "team",
    page: "/team",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1920&q=80",
    imageAlt: "ACT ART CENTER 전문가",
    category: "page",
  },
  {
    id: "pricing",
    page: "/pricing",
    imageUrl:
      "https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=1920&q=80",
    imageAlt: "ACT ART CENTER 비용 안내",
    category: "page",
  },
  {
    id: "act-approach",
    page: "/act-approach",
    imageUrl:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1920&q=80",
    imageAlt: "ACT 수용전념치료 접근법",
    category: "page",
  },
  {
    id: "faq",
    page: "/faq",
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    imageAlt: "자주 묻는 질문",
    category: "page",
  },
  {
    id: "blog-hub",
    page: "/blog",
    imageUrl:
      "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=1920&q=80",
    imageAlt: "블로그 — 미술치료 이야기",
    category: "page",
  },
  {
    id: "services-hub",
    page: "/services",
    imageUrl:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80",
    imageAlt: "서비스 안내",
    category: "page",
  },

  // ── Home page sections ────────────────────────────────────────────
  {
    id: "home-philosophy",
    page: "/#philosophy",
    imageUrl:
      "https://images.unsplash.com/photo-1753187991848-8a7e17d232a8?w=800&q=80",
    imageAlt: "자연광이 드는 따뜻한 아틀리에 공간",
    category: "section",
  },

  // ── Blog posts (BLOG_POSTS in src/lib/blog-data.ts) ──────────────
  {
    id: "blog-art-therapy-science",
    page: "/blog/art-therapy-science",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    imageAlt: "미술치료 효과의 과학적 근거",
    category: "blog",
  },
  {
    id: "blog-act-6-processes",
    page: "/blog/act-6-processes",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    imageAlt: "ACT의 6가지 핵심 프로세스",
    category: "blog",
  },
  {
    id: "blog-anxiety-art-therapy",
    page: "/blog/anxiety-art-therapy",
    imageUrl:
      "https://images.unsplash.com/photo-1743657166982-9e3ff272122b?w=600&q=80",
    imageAlt: "불안을 그림으로 표현하기",
    category: "blog",
  },
  {
    id: "blog-mindfulness-drawing",
    page: "/blog/mindfulness-drawing",
    imageUrl:
      "https://images.unsplash.com/photo-1758521232721-da2be69f0b64?w=600&q=80",
    imageAlt: "마음챙김 드로잉: 현재에 머무르기",
    category: "blog",
  },
  {
    id: "blog-trauma-art-expression",
    page: "/blog/trauma-art-expression",
    imageUrl:
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&q=80",
    imageAlt: "트라우마와 미술 표현의 관계",
    category: "blog",
  },
  {
    id: "blog-values-vision-board",
    page: "/blog/values-vision-board",
    imageUrl:
      "https://images.unsplash.com/photo-1743385779436-a6950c168fff?w=600&q=80",
    imageAlt: "가치 탐색: 비전 보드 만들기",
    category: "blog",
  },
];

/**
 * 중복 가드 — 빌드 시 또는 audit script 에서 import 해서 호출.
 * duplicate imageUrl 발견 시 Error throw.
 */
export function assertNoDuplicateHeroes(): void {
  const seen = new Map<string, string>();
  for (const slot of HERO_REGISTRY) {
    const key = normalizeImageKey(slot.imageUrl);
    const prior = seen.get(key);
    if (prior) {
      throw new Error(
        `[hero-registry] Duplicate image: ${key} used by "${prior}" AND "${slot.id}"`,
      );
    }
    seen.set(key, slot.id);
  }
}
