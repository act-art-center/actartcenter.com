import { NextResponse } from "next/server";

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

    const emailContent = [
      `ACT Art Center 새 예약 문의`,
      ``,
      `이름: ${name}`,
      `연락처: ${phone}`,
      `이메일: ${email || "미기재"}`,
      `관심 프로그램: ${serviceLabels[service] || service || "미선택"}`,
      ``,
      `메시지:`,
      message || "(없음)",
      ``,
      `---`,
      `이 메일은 actartcenter.com 예약 폼에서 자동 발송되었습니다.`,
    ].join("\n");

    // Send email via mailto link fallback or external service
    // For production, integrate with Resend, SendGrid, or n8n webhook
    // For now, we use a simple fetch to a webhook endpoint if configured
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: RECIPIENTS,
          subject: `[ACT Art Center] 새 예약 문의 - ${name}`,
          text: emailContent,
          replyTo: email || undefined,
          data: { name, phone, email, service, message },
        }),
      });
    } else {
      // Fallback: log to console (replace with email service in production)
      console.log("=== 새 예약 문의 ===");
      console.log(`수신자: ${RECIPIENTS.join(", ")}`);
      console.log(emailContent);
    }

    return NextResponse.json({ success: true, message: "예약 문의가 접수되었습니다." });
  } catch {
    return NextResponse.json(
      { error: "예약 문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
