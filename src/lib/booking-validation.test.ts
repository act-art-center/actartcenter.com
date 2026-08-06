import assert from "node:assert/strict";
import test from "node:test";

import { escapeHtml, validateBookingInput } from "./booking-validation.ts";

test("accepts and trims a valid booking", () => {
  const result = validateBookingInput({
    name: "  고은별  ",
    phone: " 010-1234-5678 ",
    email: "test@example.com",
    service: "individual",
    message: " 문의합니다. ",
    website: "",
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name, "고은별");
    assert.equal(result.data.message, "문의합니다.");
  }
});

test("rejects malformed and oversized input", () => {
  assert.equal(validateBookingInput({ name: "", phone: "" }).ok, false);
  assert.equal(
    validateBookingInput({ name: "테스트", phone: "not-a-phone" }).ok,
    false,
  );
  assert.equal(
    validateBookingInput({
      name: "테스트",
      phone: "010-1234-5678",
      message: "가".repeat(3_001),
    }).ok,
    false,
  );
});

test("rejects the honeypot field", () => {
  const result = validateBookingInput({
    name: "테스트",
    phone: "010-1234-5678",
    website: "https://spam.example",
  });
  assert.deepEqual(result, {
    ok: false,
    error: "요청을 처리할 수 없습니다.",
    bot: true,
  });
});

test("escapes user-controlled HTML", () => {
  assert.equal(
    escapeHtml(`<img src=x onerror="alert('x')"> &`),
    "&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt; &amp;",
  );
});
