import type { Metadata } from "next";
import { notoSerifKR, manrope, caveat } from "@/lib/fonts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  GSC_VERIFICATION,
  NAVER_VERIFICATION,
} from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/layout/BookingCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import "./globals.css";

// Build verification object only for tokens that are actually present.
// Empty strings -> omit field -> Next.js won't emit <meta name="...verification">.
const verification: Metadata["verification"] = {};
if (GSC_VERIFICATION) verification.google = GSC_VERIFICATION;
if (NAVER_VERIFICATION) verification.other = { "naver-site-verification": NAVER_VERIFICATION };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "미술심리치료", "미술치료", "ACT", "수용전념치료",
    "ACT 미술치료", "미술심리상담센터", "미술심리치료 연구소",
    "심리적 유연성", "트라우마 미술치료", "아동 미술치료",
    "온라인 미술치료", "ACT ART CENTER",
  ],
  authors: [{ name: "고은별", url: `${SITE_URL}/team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "ACT ART CENTER — ACT 미술심리치료 연구소",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  // Tokens injected from env. If env is empty, the object has no keys and
  // Next.js skips the verification meta tags entirely.
  // TODO: GSC/Naver 인증 후 NEXT_PUBLIC_GSC_VERIFICATION /
  // NEXT_PUBLIC_NAVER_VERIFICATION 환경변수에 실제 토큰 주입.
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
};

// Global structured data: Organization + LocalBusiness/MedicalBusiness + WebSite + SearchAction.
// Page-level schema (Article, Person, Breadcrumb, FAQPage, etc.) is injected
// by individual page.tsx files via <JsonLd /> — NOT here.
const globalGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["ACT 미술심리치료 연구소", "ACT 아트센터"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og/logo-square.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://instagram.com/act.art.center",
      ],
      founder: { "@id": `${SITE_URL}/team#stella` },
      description: "수용전념치료(ACT)와 미술치료를 통합한 전문 연구·임상 기관",
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      description: "ACT(수용전념치료) 기반 미술심리치료 전문센터",
      url: SITE_URL,
      image: `${SITE_URL}/og/default.png`,
      medicalSpecialty: "Psychiatric",
      priceRange: "₩₩",
      address: {
        "@type": "PostalAddress",
        streetAddress: "강남대로 305, 현대렉시온 2518호",
        addressLocality: "서초구",
        addressRegion: "서울특별시",
        postalCode: "06628",
        addressCountry: "KR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.4917,
        longitude: 127.0263,
      },
      email: "actartkorea@gmail.com",
      // 전화번호는 실 번호 확정 전까지 의도적으로 제외 (spec §2.6, audit P2).
      availableService: [
        { "@type": "MedicalTherapy", name: "미술심리치료", therapyType: "Art Therapy" },
        { "@type": "MedicalTherapy", name: "수용전념치료", therapyType: "Acceptance and Commitment Therapy" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        description: "사전 예약제 — 예약 시간 확정",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "ko-KR",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKR.variable} ${manrope.variable} ${caveat.variable} scroll-smooth`}
    >
      <head>
        <JsonLd data={globalGraphSchema} />
      </head>
      <body className="min-h-screen min-h-dvh flex flex-col bg-paper text-charcoal antialiased">
        {/* Skip to content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <BookingCTA />
      </body>
    </html>
  );
}
