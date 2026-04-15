import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Container } from "@/components/shared/Container";

const stats = [
  { value: "ACT", label: "수용전념치료 기반" },
  { value: "1:1", label: "맞춤 프로그램 설계" },
  { value: "On/Off", label: "대면·온라인 상담" },
  { value: "사전 예약", label: "편안한 예약제 운영" },
  { value: "전 연령", label: "아동부터 성인까지" },
];

export function TrustBar() {
  return (
    <SectionWrapper bg="cream" className="py-10 lg:py-14">
      <Container>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-night text-2xl lg:text-3xl font-bold tabular-nums">
                {stat.value}
              </p>
              <p className="mt-1 text-stone text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
