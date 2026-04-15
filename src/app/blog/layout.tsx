import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그",
  description: "ACT 미술치료 이야기. 미술치료 효과, ACT 핵심 프로세스, 증상별 가이드 등 전문 콘텐츠.",
  openGraph: {
    title: "블로그 | ACT ART CENTER",
    description: "미술치료와 수용전념치료에 대한 전문 콘텐츠를 나눕니다.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
