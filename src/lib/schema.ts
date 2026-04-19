/**
 * Schema.org JSON-LD builders.
 *
 * 재사용 가능한 타입 안전 빌더 모음. docs/seo/strategy/02-per-page-optimization-spec.md
 * 의 `@graph` 패턴과 1:1 매핑된다.
 *
 * 원칙:
 * - 각 빌더는 Schema.org 공식 필드만 사용한다.
 * - URL은 항상 절대 URL (SITE_URL 자동 prefix). 호출자가 `${SITE_URL}/...` 로 미리
 *   조립해 넘겨도 되고, `/services` 같은 상대 경로만 넘겨도 된다 — `absoluteUrl`
 *   헬퍼가 두 경우 모두 처리한다.
 * - `@context` 는 최상위 그래프에만 포함 (`buildGraph`). 개별 노드 빌더는
 *   `@context` 를 내보내지 않는다 — 이렇게 해야 `@graph` 에 넣을 때 중복이 없다.
 * - 노드에 `@id` 를 두는 경우 전역 entity 참조가 가능하도록 canonical 형태를
 *   유지한다 (`${SITE_URL}/#organization`, `${SITE_URL}/team#stella` 등).
 */

import { SITE_URL, SITE_NAME } from "./constants";

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** 상대 경로를 SITE_URL 기반 절대 URL로 변환. 이미 절대 URL이면 그대로 반환. */
function absoluteUrl(urlOrPath: string): string {
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  if (urlOrPath.startsWith("#")) return `${SITE_URL}/${urlOrPath}`;
  return urlOrPath.startsWith("/")
    ? `${SITE_URL}${urlOrPath}`
    : `${SITE_URL}/${urlOrPath}`;
}

/** 전역 Organization @id 참조 (layout.tsx 의 globalGraphSchema 와 동기). */
export const ORG_REF = { "@id": `${SITE_URL}/#organization` } as const;

/** 전역 WebSite @id 참조 (layout.tsx 의 globalGraphSchema 와 동기). */
export const WEBSITE_REF = { "@id": `${SITE_URL}/#website` } as const;

/** Stella (고은별 대표) Person @id — `/team` 페이지에서 Person 노드로 해석. */
export const STELLA_REF = { "@id": `${SITE_URL}/team#stella` } as const;

// ---------------------------------------------------------------------------
// Graph container
// ---------------------------------------------------------------------------

/**
 * `@context` + `@graph` 컨테이너를 만든다.
 * 한 페이지에 여러 schema 를 주입할 때 사용. 단일 schema 만 주입할 때는
 * 해당 빌더가 반환한 객체에 `@context` 를 직접 추가해 쓸 수도 있다.
 */
export function buildGraph(...items: ReadonlyArray<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  /** 표시 텍스트 (UI + name). */
  name: string;
  /** 상대 경로 (`/services`) 또는 절대 URL. 홈은 `/` 또는 SITE_URL. */
  url: string;
}

/**
 * BreadcrumbList schema. 첫 번째 아이템은 일반적으로 홈 (`/`).
 * 시각 Breadcrumb UI (`<Breadcrumbs />`) 와 동일 source-of-truth 로 사용하도록 설계.
 */
export function buildBreadcrumb(items: ReadonlyArray<BreadcrumbItem>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

// ---------------------------------------------------------------------------
// FAQPage
// ---------------------------------------------------------------------------

export interface FaqQuestion {
  q: string;
  a: string;
}

/**
 * FAQPage schema. **반드시 `/faq` 페이지에서만 호출한다**.
 * 홈 `FaqSection` 은 UI 전용이며 schema 주입 금지 (A2 감사 P0).
 */
export function buildFaqPage(questions: ReadonlyArray<FaqQuestion>) {
  return {
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Service / MedicalTherapy
// ---------------------------------------------------------------------------

export interface ServiceParams {
  /** 서비스 이름 (예: "4~6인 그룹 프로그램"). */
  name: string;
  description: string;
  /** 이 서비스의 canonical URL (상대 경로 OK). */
  url: string;
  /** provider.url — 보통 SITE_URL (기본값). */
  providerUrl?: string;
  /** 선택 — ServiceType 세부 분류 (예: "ArtTherapy"). */
  serviceType?: string;
  /** 선택 — serviceChannel 정보 (온라인 등). */
  availableChannel?: Record<string, unknown>;
  /** 선택 — Offer. */
  offers?: Record<string, unknown>;
}

export function buildService(params: ServiceParams) {
  const node: Record<string, unknown> = {
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.url),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl(params.providerUrl ?? "/"),
    },
  };
  if (params.serviceType) node.serviceType = params.serviceType;
  if (params.availableChannel) node.availableChannel = params.availableChannel;
  if (params.offers) node.offers = params.offers;
  return node;
}

export interface MedicalTherapyParams {
  name: string;
  /** Schema.org therapyType 값 (예: "Art Therapy", "Acceptance and Commitment Therapy"). */
  therapyType: string;
  description: string;
  /** 선택 — canonical URL. */
  url?: string;
}

export function buildMedicalTherapy(params: MedicalTherapyParams) {
  const node: Record<string, unknown> = {
    "@type": "MedicalTherapy",
    name: params.name,
    therapyType: params.therapyType,
    description: params.description,
  };
  if (params.url) node.url = absoluteUrl(params.url);
  return node;
}

// ---------------------------------------------------------------------------
// Person
// ---------------------------------------------------------------------------

export interface PersonParams {
  name: string;
  alternateName?: string;
  jobTitle: string;
  description?: string;
  /** 이 페이지의 canonical URL (보통 `/team`). */
  url: string;
  /** Person @id — entity 참조용 (예: `${SITE_URL}/team#stella`). */
  id?: string;
  image?: string;
  /** `worksFor.@id` (기본값: ORG_REF). */
  worksForId?: string;
  /** ATR-BC, ACBS Trainer, MA 등. UI + Schema 모두 노출. */
  credentials?: ReadonlyArray<string>;
  /** EducationalOrganization 배열. */
  alumniOf?: ReadonlyArray<{ name: string; sameAs?: string }>;
  knowsAbout?: ReadonlyArray<string>;
  sameAs?: ReadonlyArray<string>;
}

/**
 * Person schema.
 *
 * ⚠️ Stella(고은별 대표) 자격 TODO (A2/A4/B1 공통 blocker):
 *  - ATR-BC (Art Therapist Registered - Board Certified) 보유 여부 미확인
 *  - ACBS Trainer (Association for Contextual Behavioral Science) 보유 여부 미확인
 *  - 확정 전까지 `credentials` 에서 해당 항목 제외 또는 TODO 주석으로 표시할 것
 *
 * 확정된 자격 (`src/lib/constants.ts` TEAM_MEMBERS 기준):
 *  - 차의과학대학교 미술치료학 박사과정 이수중, 석사
 *  - 홍익대학교 미술대학 석사·학사
 */
export function buildPerson(params: PersonParams) {
  const node: Record<string, unknown> = {
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    url: absoluteUrl(params.url),
    worksFor: params.worksForId ? { "@id": params.worksForId } : ORG_REF,
  };
  if (params.id) node["@id"] = params.id;
  if (params.alternateName) node.alternateName = params.alternateName;
  if (params.description) node.description = params.description;
  if (params.image) node.image = absoluteUrl(params.image);
  if (params.credentials && params.credentials.length > 0) {
    node.honorificSuffix = params.credentials.join(", ");
  }
  if (params.alumniOf && params.alumniOf.length > 0) {
    node.alumniOf = params.alumniOf.map((org) => ({
      "@type": "EducationalOrganization",
      name: org.name,
      ...(org.sameAs ? { sameAs: org.sameAs } : {}),
    }));
  }
  if (params.knowsAbout && params.knowsAbout.length > 0) {
    node.knowsAbout = params.knowsAbout;
  }
  if (params.sameAs && params.sameAs.length > 0) {
    node.sameAs = params.sameAs;
  }
  return node;
}

// ---------------------------------------------------------------------------
// Article / BlogPosting
// ---------------------------------------------------------------------------

export interface ArticleParams {
  /** headline (보통 post.title). */
  title: string;
  description: string;
  /** ISO 8601 (예: "2026-04-15"). */
  datePublished: string;
  /** ISO 8601. 없으면 datePublished 로 대체. */
  dateModified?: string;
  /**
   * 저자. 보통 STELLA_REF 처럼 `@id` 참조로 넘기거나, name 객체로 넘긴다.
   * 현재 ACT ART CENTER 는 단일 저자 (고은별) 이므로 기본값 STELLA_REF.
   */
  author?: Record<string, unknown>;
  /** 이미지 절대/상대 URL. */
  image: string;
  /** 이 글의 canonical URL. */
  url: string;
  /** @id 참조 (예: `${SITE_URL}/act-approach#article`). */
  id?: string;
  /** BlogPosting 으로 내보낼지 여부 (기본: Article). */
  blogPosting?: boolean;
  /** 카테고리 (예: "ACT 이론"). */
  articleSection?: string;
  /** about (Thing 배열). */
  about?: ReadonlyArray<string>;
  /** inLanguage (기본값: "ko-KR"). */
  inLanguage?: string;
}

export function buildArticle(params: ArticleParams) {
  const node: Record<string, unknown> = {
    "@type": params.blogPosting ? "BlogPosting" : "Article",
    headline: params.title,
    description: params.description,
    url: absoluteUrl(params.url),
    image: absoluteUrl(params.image),
    inLanguage: params.inLanguage ?? "ko-KR",
    author: params.author ?? STELLA_REF,
    publisher: ORG_REF,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    mainEntityOfPage: absoluteUrl(params.url),
  };
  if (params.id) node["@id"] = params.id;
  if (params.articleSection) node.articleSection = params.articleSection;
  if (params.about && params.about.length > 0) {
    node.about = params.about.map((name) => ({ "@type": "Thing", name }));
  }
  return node;
}

// ---------------------------------------------------------------------------
// WebPage
// ---------------------------------------------------------------------------

export interface WebPageParams {
  title: string;
  description: string;
  url: string;
  /** isPartOf reference (기본값: 전역 WebSite). */
  isPartOf?: Record<string, unknown>;
  /** @id (예: `${SITE_URL}/pricing#webpage`). */
  id?: string;
  /** inLanguage (기본값: "ko-KR"). */
  inLanguage?: string;
}

export function buildWebPage(params: WebPageParams) {
  const node: Record<string, unknown> = {
    "@type": "WebPage",
    name: params.title,
    description: params.description,
    url: absoluteUrl(params.url),
    inLanguage: params.inLanguage ?? "ko-KR",
    isPartOf: params.isPartOf ?? WEBSITE_REF,
  };
  if (params.id) node["@id"] = params.id;
  return node;
}

// ---------------------------------------------------------------------------
// HowTo (used in /act-approach)
// ---------------------------------------------------------------------------

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToParams {
  name: string;
  description: string;
  steps: ReadonlyArray<HowToStep>;
}

export function buildHowTo(params: HowToParams) {
  return {
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    step: params.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

// ---------------------------------------------------------------------------
// ItemList (used in /services hub)
// ---------------------------------------------------------------------------

export interface ItemListEntry {
  name: string;
  url: string;
}

export function buildItemList(name: string, items: ReadonlyArray<ItemListEntry>) {
  return {
    "@type": "ItemList",
    name,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}
