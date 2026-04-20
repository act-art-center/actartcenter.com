#!/usr/bin/env node
/**
 * audit-heroes.mjs — 중복 hero / 블로그 포스트 대표 이미지 빌드 전 감사.
 *
 * `src/lib/hero-registry.ts` 의 HERO_REGISTRY 배열을 파싱해 `imageUrl` 중복을
 * 검사합니다. Node 는 `.ts` 를 직접 import 하지 못하므로 파일을 텍스트로 읽고
 * 정규식으로 `id` / `imageUrl` 쌍을 추출하는 방식 — 추가 toolchain 불필요.
 *
 * 사용:
 *   node scripts/audit-heroes.mjs
 *   npm run audit:heroes
 *
 * 실패 시 exit 1, 성공 시 exit 0.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REGISTRY_PATH = resolve(__dirname, "..", "src", "lib", "hero-registry.ts");

function normalizeImageKey(url) {
  return url.split("?")[0];
}

function parseRegistry(source) {
  // 각 항목은 `{ id: "...", page: "...", imageUrl: "...", imageAlt: "...", category: "..." }`
  // 형태. `id` 와 `imageUrl` 쌍을 순서대로 추출.
  const entryRe =
    /\{\s*id:\s*"([^"]+)",\s*page:\s*"[^"]+",\s*imageUrl:\s*\n?\s*"([^"]+)"/g;
  const entries = [];
  let match;
  while ((match = entryRe.exec(source)) !== null) {
    entries.push({ id: match[1], imageUrl: match[2] });
  }
  return entries;
}

function main() {
  let source;
  try {
    source = readFileSync(REGISTRY_PATH, "utf8");
  } catch (e) {
    console.error(`[audit-heroes] Failed to read ${REGISTRY_PATH}: ${e.message}`);
    process.exit(1);
  }

  const entries = parseRegistry(source);
  if (entries.length === 0) {
    console.error(
      `[audit-heroes] No entries parsed from ${REGISTRY_PATH}. Regex may be stale — check HERO_REGISTRY shape.`,
    );
    process.exit(1);
  }

  const seen = new Map();
  const duplicates = [];
  for (const { id, imageUrl } of entries) {
    const key = normalizeImageKey(imageUrl);
    const prior = seen.get(key);
    if (prior) {
      duplicates.push({ key, priorId: prior, newId: id });
    } else {
      seen.set(key, id);
    }
  }

  if (duplicates.length > 0) {
    for (const { key, priorId, newId } of duplicates) {
      console.error(
        `[audit-heroes] Duplicate image: ${key} used by "${priorId}" AND "${newId}"`,
      );
    }
    console.error(
      `FAIL: ${duplicates.length} duplicate(s) across ${entries.length} hero slots.`,
    );
    process.exit(1);
  }

  console.log(`OK: ${entries.length} hero slots — no duplicates.`);
  process.exit(0);
}

main();
