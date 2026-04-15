import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "미술치료에 대해 궁금하신 점을 모았습니다. 비용, ACT, 자격요건, 온라인 상담 등 FAQ.",
  openGraph: {
    title: "자주 묻는 질문 | ACT ART CENTER",
    description: "미술치료에 대해 궁금하신 점을 모았습니다.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
