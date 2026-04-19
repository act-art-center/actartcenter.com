"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CharacterIllustration } from "@/components/shared/CharacterIllustration";
import { CONTACT } from "@/lib/constants";

export default function BookingPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const result = await res.json();
        setErrorMsg(result.error || "오류가 발생했습니다.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { name: "홈", href: "/" },
                { name: "상담 예약", href: "/booking" },
              ]}
              emitJsonLd={false}
            />
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">ACT 미술치료 상담 예약</h1>
            <p className="mt-6 text-charcoal/80 leading-[var(--leading-normal)]">
              첫 상담에서 현재 상태와 목표를 함께 살펴보고, 맞춤 프로그램을 설계합니다.
            </p>
          </div>
        </Container>
      </section>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          {/* Acttie laptop — 폼 우측 옆에 비서 느낌 (데스크탑만) */}
          <CharacterIllustration
            name="acttie-laptop"
            alt=""
            width={300}
            height={300}
            hideOnMobile
            animation="float"
            className="hidden lg:block absolute right-4 top-10 z-[1] w-[220px] xl:w-[260px] opacity-90"
          />

          <div className="max-w-xl mx-auto relative z-[2]">
            <div className="bg-white rounded-2xl p-8 lg:p-10" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-night text-xl font-semibold" >
                    예약 문의가 접수되었습니다
                  </h2>
                  <p className="mt-3 text-charcoal/70 text-sm">
                    영업일 기준 1~2일 이내에 연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors"
                  >
                    새 예약 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-night text-xl font-semibold mb-6" >예약 문의</h2>

                  {status === "error" && (
                    <div className="mb-5 p-3 bg-secondary-50 rounded-lg text-terra-500 text-sm" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-night mb-1.5">
                        이름 <span className="text-secondary-500">*</span>
                      </label>
                      <input id="name" name="name" type="text" required placeholder="이름을 입력해주세요"
                        className="w-full px-4 py-3 rounded-lg bg-cream text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-night mb-1.5">
                        연락처 <span className="text-secondary-500">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" required placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-cream text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-night mb-1.5">이메일</label>
                      <input id="email" name="email" type="email" placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-cream text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-night mb-1.5">관심 프로그램</label>
                      <select id="service" name="service"
                        className="w-full px-4 py-3 rounded-lg bg-cream text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                        <option value="">선택해주세요</option>
                        <option value="individual">개인 미술치료</option>
                        <option value="group">그룹 프로그램</option>
                        <option value="child">아동·청소년 미술치료</option>
                        <option value="online">온라인 미술치료</option>
                        <option value="protective">보호·의료 환경 미술심리치료</option>
                        <option value="emotional">정서·트라우마 중심 미술심리치료</option>
                        <option value="depth">심층 탐색·연구 기반 미술심리치료</option>
                        <option value="other">기타 / 잘 모르겠어요</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-night mb-1.5">하고 싶은 이야기</label>
                      <textarea id="message" name="message" rows={4} placeholder="현재 상태나 궁금한 점을 자유롭게 적어주세요."
                        className="w-full px-4 py-3 rounded-lg bg-cream text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none" />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-[1.01] shadow-[var(--shadow-sm)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "전송 중..." : "예약 문의하기"}
                    </button>
                  </form>

                  <p className="mt-4 text-center text-stone text-xs">
                    제출 후 영업일 기준 1~2일 이내에 연락드립니다.
                  </p>
                </>
              )}
            </div>

            {/* Alternative contact */}
            <div className="mt-8 text-center space-y-3">
              <p className="text-charcoal/60 text-sm">또는 이메일로 문의해주세요</p>
              <a href={`mailto:${CONTACT.email}`} className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
