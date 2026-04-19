import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 미술치료 상담 예약 — 첫 상담 무료",
  description:
    "ACT ART CENTER 미술심리치료 상담 예약. 이름·연락처·관심 프로그램을 남기시면 영업일 기준 1~2일 이내 연락드립니다. 첫 상담은 무료, 온라인·대면 선택 가능.",
  keywords: [
    "미술치료 예약",
    "상담 예약",
    "ACT 미술치료 예약",
    "첫 상담 무료",
    "미술심리치료 예약",
  ],
  alternates: { canonical: `${SITE_URL}/booking` },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "ACT 미술치료 상담 예약",
    description: "이름·연락처·관심 프로그램을 남기시면 1~2일 내 연락드립니다.",
    url: `${SITE_URL}/booking`,
    images: [
      {
        url: "/og/booking.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술치료 상담 예약 폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 미술치료 상담 예약",
    description: "첫 상담 무료. 영업일 1-2일 내 회신.",
    images: ["/og/booking.png"],
  },
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "상담 예약", item: `${SITE_URL}/booking` },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/booking#page`,
      name: "ACT 미술치료 상담 예약",
      url: `${SITE_URL}/booking`,
      inLanguage: "ko-KR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ContactPoint",
        contactType: "reservations",
        email: "actartkorea@gmail.com",
        availableLanguage: ["Korean"],
        areaServed: "KR",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          description: "사전 예약제",
        },
      },
    },
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/booking`,
        inLanguage: "ko-KR",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "ACT 미술치료 첫 상담 예약" },
    },
  ],
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={bookingSchema} />
      {children}
    </>
  );
}
