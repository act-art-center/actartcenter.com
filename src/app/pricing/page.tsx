import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "비용 안내",
  description: "ACT ART CENTER 미술심리치료 프로그램 비용 안내. 투명한 비용 정책.",
};

const pricing = [
  { service: "개인 미술심리치료 (성인)", duration: "50분", price: "80,000 ~ 120,000원", note: "" },
  { service: "개인 미술심리치료 (아동·청소년)", duration: "40분 + 부모상담 10분", price: "80,000 ~ 100,000원", note: "" },
  { service: "그룹 프로그램", duration: "90분", price: "40,000 ~ 60,000원 / 인", note: "4~6인 소그룹" },
  { service: "온라인 미술치료", duration: "50분", price: "70,000 ~ 100,000원", note: "미술 키트 배송 포함" },
];

const packages = [
  { name: "마음유연성 8주 프로그램", sessions: "개인 8회기", price: "560,000 ~ 800,000원", note: "ACT 6프로세스 기반" },
  { name: "번아웃 탈출 워크숍", sessions: "그룹 4회 + 개인 1회", price: "250,000 ~ 350,000원", note: "" },
  { name: "부모-자녀 미술치료", sessions: "가족 세션 4회기", price: "320,000 ~ 400,000원", note: "" },
  { name: "기업 미술심리치료 워크숍", sessions: "반일 / 종일", price: "500,000 ~ 1,500,000원", note: "맞춤 설계" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="비용 안내"
        subtitle="투명한 비용 정책을 지향합니다. 첫 상담에서 상황에 맞는 프로그램과 비용을 안내드립니다."
        label="Pricing"
        imageSrc="https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=1920&q=80"
        imageAlt="ACT ART CENTER 비용 안내"
      />

      {/* Individual pricing */}
      <SectionWrapper bg="cream">
        <Container>
          <h2 className="text-center mb-10 text-2xl lg:text-3xl font-bold tracking-tight">개별 세션</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricing.map((item) => (
              <div key={item.service} className="bg-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <div>
                  <h3 className="text-night font-semibold">{item.service}</h3>
                  <p className="text-stone text-sm">{item.duration}{item.note && ` · ${item.note}`}</p>
                </div>
                <p className="text-primary-500 font-semibold tabular-nums whitespace-nowrap">{item.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper bg="paper">
        <Container>
          <h2 className="text-center mb-10 text-2xl lg:text-3xl font-bold tracking-tight">프로그램 패키지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl p-6" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                <h3 className="text-night font-semibold text-lg">{pkg.name}</h3>
                <p className="mt-2 text-stone text-sm">{pkg.sessions}{pkg.note && ` · ${pkg.note}`}</p>
                <p className="mt-3 text-primary-500 font-semibold tabular-nums">{pkg.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-stone text-sm">
            * 비용은 프로그램 내용과 치료사 경력에 따라 달라질 수 있습니다.
          </p>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="primary" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">나에게 맞는 프로그램이 궁금하신가요?</h2>
            <p className="mt-4 text-white/80">첫 상담은 무료입니다.</p>
            <Link href="/booking" className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-cream transition-all">
              무료 상담 예약하기
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
