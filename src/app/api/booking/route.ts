import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENTS = ["byeolko@gmail.com", "henryoh@kakao.com"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "이름과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceLabels: Record<string, string> = {
      protective: "보호·의료 환경 미술심리치료",
      emotional: "정서·트라우마 중심 미술심리치료",
      depth: "심층 탐색·연구 기반 미술심리치료",
      individual: "개인 미술치료",
      group: "그룹 프로그램",
      child: "아동·청소년 미술치료",
      online: "온라인 미술치료",
      other: "기타",
    };

    const serviceName = serviceLabels[service] || service || "미선택";

    const { error } = await resend.emails.send({
      from: "ACT ART CENTER <onboarding@resend.dev>",
      to: RECIPIENTS,
      replyTo: email || undefined,
      subject: `[ACT ART CENTER] 새 예약 문의 — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00534b; border-bottom: 2px solid #00534b; padding-bottom: 12px;">
            새 예약 문의가 접수되었습니다
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #1d1c15; width: 120px;">이름</td>
              <td style="padding: 8px 12px; color: #4a4639;">${name}</td>
            </tr>
            <tr style="background: #fff9ee;">
              <td style="padding: 8px 12px; font-weight: bold; color: #1d1c15;">연락처</td>
              <td style="padding: 8px 12px; color: #4a4639;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #1d1c15;">이메일</td>
              <td style="padding: 8px 12px; color: #4a4639;">${email || "미기재"}</td>
            </tr>
            <tr style="background: #fff9ee;">
              <td style="padding: 8px 12px; font-weight: bold; color: #1d1c15;">관심 프로그램</td>
              <td style="padding: 8px 12px; color: #4a4639;">${serviceName}</td>
            </tr>
          </table>
          ${message ? `
          <div style="margin-top: 20px; padding: 16px; background: #f7f2e8; border-radius: 8px;">
            <p style="font-weight: bold; color: #1d1c15; margin: 0 0 8px 0;">메시지</p>
            <p style="color: #4a4639; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ""}
          <p style="margin-top: 24px; font-size: 12px; color: #c5bfb4;">
            이 메일은 actartcenter.com 예약 폼에서 자동 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "이메일 발송에 실패했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "예약 문의가 접수되었습니다." });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "예약 문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
