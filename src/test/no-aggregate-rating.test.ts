import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * Regression guard: Google Search Console flagged self-serving `aggregateRating`
 * JSON-LD on this site. We removed it from `index.html` and all React pages.
 *
 * This test fails the build if `aggregateRating` / `AggregateRating` /
 * `reviewCount` ever reappears in source. Per-review `ratingValue` inside a
 * `Review` schema is allowed (real customer reviews), so we don't block that.
 */

const FORBIDDEN = /aggregateRating|AggregateRating|reviewCount/;

const ROOTS = ["index.html", "src"];
const SCAN_EXTS = new Set([".html", ".tsx", ".ts", ".jsx", ".js"]);
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

describe("structured data hygiene", () => {
  it("never ships aggregateRating / reviewCount JSON-LD", () => {
    const projectRoot = resolve(__dirname, "..", "..");
    const files: string[] = [];
    for (const root of ROOTS) {
      try {
        walk(join(projectRoot, root), files);
      } catch {
        // root missing — skip
      }
    }

    const offenders: { file: string; match: string }[] = [];
    for (const file of files) {
      const content = readFileSync(file, "utf8");
      const m = content.match(FORBIDDEN);
      if (m) offenders.push({ file: file.replace(projectRoot + "/", ""), match: m[0] });
    }

    expect(
      offenders,
      `Forbidden structured-data tokens found:\n${offenders
        .map((o) => `  ${o.file} — ${o.match}`)
        .join("\n")}`
    ).toEqual([]);
  });
});
