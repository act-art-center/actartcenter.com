import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 예약",
  description: "ACT ART CENTER 미술심리치료 상담 예약. 온라인으로 편하게 예약하세요.",
  openGraph: {
    title: "상담 예약 | ACT ART CENTER",
    description: "첫 상담에서 맞춤 프로그램을 함께 설계합니다.",
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
