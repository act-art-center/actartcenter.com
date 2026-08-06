export const MAX_BOOKING_BODY_BYTES = 20_000;

const SERVICE_IDS = new Set([
  "",
  "one-day-class",
  "protective",
  "emotional",
  "depth",
  "individual",
  "group",
  "child",
  "online",
  "tci",
  "drawing-assessment",
  "other",
]);

export type BookingInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type BookingValidationResult =
  | { ok: true; data: BookingInput }
  | { ok: false; error: string; bot?: boolean };

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export function validateBookingInput(value: unknown): BookingValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, error: "올바른 예약 정보를 입력해주세요." };
  }

  const body = value as Record<string, unknown>;
  if (text(body.website)) {
    return { ok: false, error: "요청을 처리할 수 없습니다.", bot: true };
  }

  const data: BookingInput = {
    name: text(body.name),
    phone: text(body.phone),
    email: text(body.email),
    service: text(body.service),
    message: text(body.message),
  };

  if (!data.name || !data.phone) {
    return { ok: false, error: "이름과 연락처는 필수입니다." };
  }
  if (data.name.length > 80) {
    return { ok: false, error: "이름은 80자 이하로 입력해주세요." };
  }
  if (
    data.phone.length < 7 ||
    data.phone.length > 40 ||
    !/^[0-9+()\-\s.]+$/.test(data.phone)
  ) {
    return { ok: false, error: "연락처 형식을 확인해주세요." };
  }
  if (
    data.email.length > 254 ||
    (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
  ) {
    return { ok: false, error: "이메일 형식을 확인해주세요." };
  }
  if (!SERVICE_IDS.has(data.service)) {
    return { ok: false, error: "관심 프로그램을 다시 선택해주세요." };
  }
  if (data.message.length > 3_000) {
    return { ok: false, error: "메시지는 3,000자 이하로 입력해주세요." };
  }

  return { ok: true, data };
}
