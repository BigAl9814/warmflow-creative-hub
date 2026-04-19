import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * Regression guard: no source file should emit Review JSON-LD using the
 * shared REVIEWS array. Google flagged duplicate Review markup across
 * crawled URLs — keeping testimonials visible in the UI is fine, but we
 * must not inject "@type": "Review" structured data anywhere.
 */

const ROOTS = ["src"];
const SCAN_EXTS = new Set([".tsx", ".ts", ".jsx", ".js"]);
const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "test"]);
// site.ts defines REVIEWS itself; it does not emit JSON-LD.
const ALLOWED_SUFFIXES = ["/lib/site.ts"];

function walk(path: string, files: string[]) {
  const stat = statSync(path);
  if (stat.isFile()) {
    files.push(path);
    return;
  }
  if (!stat.isDirectory()) return;
  for (const entry of readdirSync(path)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(path, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      walk(full, files);
    } else if (SCAN_EXTS.has(full.slice(full.lastIndexOf(".")))) {
      files.push(full);
    }
  }
}

describe("Review structured data must not be emitted", () => {
  it("no source file injects Review JSON-LD via the REVIEWS array", () => {
    const projectRoot = resolve(__dirname, "..", "..");
    const files: string[] = [];
    for (const root of ROOTS) {
      try {
        walk(join(projectRoot, root), files);
      } catch {
        // skip missing roots
      }
    }

    const offenders: string[] = [];
    for (const file of files) {
      if (ALLOWED_SUFFIXES.some((s) => file.endsWith(s))) continue;
      const content = readFileSync(file, "utf8");
      const usesReviews = /\bREVIEWS\.map\b/.test(content);
      const emitsReview = /["']@type["']\s*:\s*["']Review["']/.test(content);
      if (usesReviews && emitsReview) {
        offenders.push(file.replace(projectRoot + "/", ""));
      }
    }

    expect(
      offenders.length,
      `Review JSON-LD must not be emitted from any source file. Found in:\n${offenders
        .map((o) => `  ${o}`)
        .join("\n")}`
    ).toBe(0);
  });
});
