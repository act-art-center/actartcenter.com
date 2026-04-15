import type { Metadata } from "next";
import { notoSerifKR, manrope, caveat } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingCTA } from "@/components/layout/BookingCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "미술치료", "미술심리치료", "ACT", "수용전념치료",
    "미술치료사", "심리상담", "아동미술치료", "온라인미술치료",
    "트라우마미술치료", "불안미술치료", "심리적유연성",
    "ACT ART CENTER", "미술심리치료연구소",
  ],
  authors: [{ name: "고은별", url: SITE_URL }],
  creator: "ACT ART CENTER",
  publisher: "ACT ART CENTER",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ACT 미술심리치료 연구소`,
    description: "수용전념치료(ACT)와 미술치료를 통합한 전문 연구·임상 기관. 언어 이전의 감정을 예술적 표현으로 탐색합니다.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  verification: {
    // Google Search Console 인증 후 추가
    // google: "verification-code",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  description: "ACT(수용전념치료) 기반 미술심리치료 전문센터",
  url: SITE_URL,
  medicalSpecialty: "Psychiatric",
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "미술심리치료",
      therapyType: "Art Therapy",
    },
    {
      "@type": "MedicalTherapy",
      name: "수용전념치료",
      therapyType: "Acceptance and Commitment Therapy",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "00:00",
    closes: "23:59",
    description: "사전 예약제",
  },
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
        <JsonLd data={medicalBusinessSchema} />
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
