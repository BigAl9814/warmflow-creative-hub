import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * Regression guard: the generic FAQS array (from src/lib/site.ts) must only
 * be emitted as FAQPage JSON-LD from a single source file. Otherwise Google
 * Search Console flags duplicate structured data across URLs.
 */

const ROOTS = ["src"];
const SCAN_EXTS = new Set([".tsx", ".ts", ".jsx", ".js"]);
const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "test"]);

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

describe("FAQPage structured data uniqueness", () => {
  it("only one source file injects the generic FAQS-based FAQPage JSON-LD", () => {
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
      const content = readFileSync(file, "utf8");
      // Looks for files that import/use the generic FAQS array AND emit FAQPage schema
      const usesFaqs = /\bFAQS\.map\b/.test(content);
      const emitsFaqPage = /["']FAQPage["']/.test(content);
      if (usesFaqs && emitsFaqPage) {
        offenders.push(file.replace(projectRoot + "/", ""));
      }
    }

    expect(
      offenders.length,
      `Generic FAQS-based FAQPage JSON-LD should be emitted by at most one file. Found in:\n${offenders
        .map((o) => `  ${o}`)
        .join("\n")}`
    ).toBeLessThanOrEqual(1);
  });
});
