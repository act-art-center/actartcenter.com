import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ACT 미술치료 FAQ — 비용·효과·아동·온라인 자주 묻는 질문",
  description:
    "미술치료를 고민하시는 분들의 자주 묻는 질문 6가지. 미술 실력, 상담 비용(개인 80,000원부터), ACT란 무엇인지, 아동 연령, 온라인 진행 방법, 의료기록 여부까지 한 번에 정리.",
  keywords: [
    "미술치료 FAQ",
    "미술치료 자주 묻는 질문",
    "미술치료 효과",
    "미술치료 비용",
    "ACT란",
    "온라인 미술치료 방법",
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    type: "website",
    title: "ACT 미술치료 FAQ — 비용·효과·아동·온라인 자주 묻는 질문",
    description: "미술치료를 고민하시는 분들의 자주 묻는 질문 6가지.",
    url: `${SITE_URL}/faq`,
    images: [
      {
        url: "/og/faq.png",
        width: 1200,
        height: 630,
        alt: "ACT 미술치료 FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT 미술치료 FAQ — 비용·효과·아동·온라인",
    description: "자주 묻는 질문 6가지 정리.",
    images: ["/og/faq.png"],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
