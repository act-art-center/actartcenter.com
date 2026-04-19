"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
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
              첫 상담(30분, 무료)에서 현재 상태와 목표를 함께 살펴보고,
              필요한 만큼만 회기를 설계합니다.
            </p>
          </div>

          {/* 3-step process — what happens after submit */}
          <div className="mt-10 lg:mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "예약 문의 제출",
                body: "아래 폼에 이름·연락처·간단한 상황을 적어 주시면 됩니다. 자세히 적지 않으셔도 괜찮습니다.",
              },
              {
                step: "02",
                title: "센터 회신",
                body: "영업일 기준 1~2일 이내 전화 또는 이메일로 연락드려 가능한 일정을 함께 조정합니다.",
              },
              {
                step: "03",
                title: "첫 상담(30분, 무료)",
                body: "센터 방문 또는 온라인으로 진행합니다. 결정은 그 자리에서 하지 않으셔도 됩니다.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-xl p-5"
                style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
              >
                <p className="text-primary-500 text-xs font-semibold tracking-widest">
                  STEP {s.step}
                </p>
                <p className="mt-2 text-night font-semibold text-base">{s.title}</p>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Urgent bypass */}
          <p className="mt-6 text-center text-charcoal/65 text-sm max-w-2xl mx-auto">
            급하신 경우 폼 대신{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-primary-600 font-medium hover:text-primary-700 underline-offset-4 hover:underline"
            >
              {CONTACT.email}
            </a>{" "}
            로 바로 이메일 주셔도 됩니다.
          </p>
        </Container>
      </section>

      {/* 예약 전 궁금증 해소 — inline mini-FAQ */}
      <SectionWrapper bg="paper" className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3 text-center">
              Before You Book
            </p>
            <h2 className="text-night text-xl lg:text-2xl font-bold tracking-tight text-center">
              예약 전에 자주 주시는 세 가지 질문
            </h2>

            <div className="mt-8 space-y-4">
              {[
                {
                  q: "처음인데 괜찮을까요?",
                  a: "네, 처음 오시는 분이 가장 많습니다. 첫 상담 30분은 무료이며, 미술 작업은 선택 사항입니다. 말이 잘 나오지 않으셔도 괜찮습니다. 센터가 먼저 들어 드립니다.",
                },
                {
                  q: "어떤 프로그램이 맞는지 모르겠어요.",
                  a: "모르셔도 괜찮습니다. 폼의 ‘관심 프로그램’ 은 ‘기타 / 잘 모르겠어요’ 로 남겨 주셔도 됩니다. 첫 상담에서 현재 상황을 듣고 함께 가장 적합한 구성을 찾습니다.",
                },
                {
                  q: "제출한 정보는 안전한가요?",
                  a: "한국미술치료학회 윤리 강령과 개인정보처리방침에 따라 연락 목적 외 사용되지 않으며, 외부에 공개되지 않습니다. ACT ART CENTER 는 의료기관이 아닌 상담 센터이므로 의료기록에도 남지 않습니다.",
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="bg-white rounded-xl p-5"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
                >
                  <p className="text-night font-semibold text-sm">{f.q}</p>
                  <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-stone text-xs">
              더 궁금하신 점은{" "}
              <Link href="/faq" className="text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline">
                FAQ 30개
              </Link>{" "}
              에서 확인하실 수 있습니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="max-w-xl mx-auto relative z-10">
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

                  <ul className="mt-4 space-y-1.5 text-stone text-xs leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span aria-hidden className="text-primary-500">·</span>
                      제출 정보는 연락 목적 외로 사용되지 않으며, 외부에 공개되지 않습니다.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span aria-hidden className="text-primary-500">·</span>
                      영업일 기준 1~2일 이내 전화 또는 이메일로 회신드립니다.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span aria-hidden className="text-primary-500">·</span>
                      예약 확정 후에도 언제든 취소·변경이 가능합니다 (24시간 전까지 무료).
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Alternative contact */}
            <div className="mt-8 text-center">
              <p className="text-charcoal/60 text-sm">폼이 불편하시면 아래 경로도 편하게 이용해 주세요</p>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-white text-primary-600 font-medium text-sm rounded-lg hover:bg-primary-50 transition-colors"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.2)" }}
                >
                  Email · {CONTACT.email}
                </a>
                <a
                  href="https://www.instagram.com/act.art.center/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-white text-primary-600 font-medium text-sm rounded-lg hover:bg-primary-50 transition-colors"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.2)" }}
                >
                  Instagram DM · @act.art.center
                </a>
              </div>
              <p className="mt-3 text-stone text-xs">
                전화(방문 예약 확정 후 공유) 외에 카카오톡·기타 메신저는 사용하지 않습니다.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 예약 후 어떤 일이 생기나요 — success scenario */}
      <SectionWrapper bg="paper" className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-primary-500 text-xs font-medium tracking-widest uppercase mb-3 text-center">
              What Happens Next
            </p>
            <h2 className="text-night text-xl lg:text-2xl font-bold tracking-tight text-center">
              예약 후 어떤 일이 생기나요
            </h2>
            <p className="mt-4 text-charcoal/70 text-sm leading-relaxed text-center">
              첫 상담(30분, 무료) 은 결정하러 오시는 시간이 아니라, 편하게 센터를 확인하시는 시간입니다.
            </p>

            <div className="mt-8 space-y-3">
              {[
                {
                  time: "제출 직후",
                  body: "화면에 접수 완료 메시지가 표시됩니다. 기입하신 이메일로도 확인 메시지를 발송해 드립니다.",
                },
                {
                  time: "영업일 1~2일 내",
                  body: "센터에서 전화 또는 이메일로 연락드려, 가능한 요일·시간대를 함께 조정합니다.",
                },
                {
                  time: "첫 상담 당일",
                  body: "센터 방문(서초구 강남대로) 또는 Zoom 화상으로 진행합니다. 따뜻한 차와 편안한 공간, 미술 재료가 준비되어 있습니다.",
                },
                {
                  time: "첫 상담 이후",
                  body: "그 자리에서 바로 결정하지 않으셔도 됩니다. 가능성만 확인하고 돌아가셨다가, 며칠 뒤 편하게 알려 주셔도 됩니다.",
                },
              ].map((row) => (
                <div
                  key={row.time}
                  className="flex flex-col md:flex-row md:gap-6 bg-white rounded-xl p-5"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.18)" }}
                >
                  <p className="text-primary-600 font-semibold text-sm md:w-36 md:shrink-0">
                    {row.time}
                  </p>
                  <p className="mt-1 md:mt-0 text-charcoal/80 text-sm leading-relaxed flex-1">
                    {row.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-charcoal/55 text-xs leading-relaxed">
              모든 문의·상담 내용은 한국미술치료학회 윤리 강령에 따라 비밀이 보장됩니다.<br />
              ACT ART CENTER 는 의료기관이 아닌 상담 센터이며, 의료기록에 남지 않습니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
