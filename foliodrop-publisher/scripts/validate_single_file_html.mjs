#!/usr/bin/env node
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const MAX_BYTES = 5 * 1024 * 1024;

function fail(message) {
  console.error(`invalid FolioDrop HTML: ${message}`);
  process.exitCode = 1;
}

function getAttrs(tag) {
  const attrs = {};
  const attrPattern = /([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let match;
  while ((match = attrPattern.exec(tag))) {
    attrs[match[1].toLowerCase()] = match[3] ?? match[4] ?? match[5] ?? "";
  }
  return attrs;
}

function isPublicExternalUrl(value) {
  return /^(https:\/\/|mailto:|tel:|#)/i.test(value);
}

function validateExternalRefs(html) {
  const tagPattern = /<(script|link|img|source|video|audio|iframe|a)\b[^>]*>/gi;
  let match;
  const errors = [];

  while ((match = tagPattern.exec(html))) {
    const tagName = match[1].toLowerCase();
    const tag = match[0];
    const attrs = getAttrs(tag);

    for (const attrName of ["src", "href", "poster"]) {
      const value = attrs[attrName];
      if (!value) continue;

      if (/^(data:|blob:)/i.test(value)) continue;
      if (!isPublicExternalUrl(value)) {
        errors.push(`${tagName} ${attrName} must be public https, data, mailto, tel, or fragment: ${value}`);
      }
      if (/^http:\/\//i.test(value)) {
        errors.push(`${tagName} ${attrName} must use https, not http: ${value}`);
      }
    }

    if (tagName === "script" && attrs.src) {
      errors.push("external script src is not allowed; inline JavaScript instead");
    }
    if (tagName === "link" && attrs.rel?.toLowerCase().includes("stylesheet") && attrs.href) {
      errors.push("external stylesheets are not allowed; inline CSS in a style tag");
    }
  }

  return errors;
}

async function main() {
  const file = process.argv[2];
  if (!file) {
    fail("usage: validate_single_file_html.mjs <file.html>");
    return;
  }

  const path = resolve(file);
  const info = await stat(path);
  const html = await readFile(path, "utf8");
  const errors = [];

  if (info.size > MAX_BYTES) {
    errors.push(`file exceeds FolioDrop single-work limit: ${info.size} bytes > ${MAX_BYTES} bytes`);
  }
  if (!/^\s*<!doctype html>/i.test(html)) {
    errors.push("missing <!doctype html> at the top");
  }
  for (const tag of ["html", "head", "body"]) {
    if (!new RegExp(`<${tag}\\b`, "i").test(html) || !new RegExp(`</${tag}>`, "i").test(html)) {
      errors.push(`missing complete <${tag}>...</${tag}> element`);
    }
  }
  if (!/<title\b[^>]*>[^<]+<\/title>/i.test(html)) {
    errors.push("missing non-empty <title>");
  }
  errors.push(...validateExternalRefs(html));

  if (errors.length) {
    for (const error of errors) fail(error);
    return;
  }

  console.log(`valid single-file FolioDrop HTML: ${path}`);
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
