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
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — 미술로 마음을 치유하다`,
    description: "ACT 수용전념치료 x 미술치료. 전문 미술치료사와 함께하는 맞춤 프로그램.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
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
