import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment that approves the PR with quiet
// existential dread: flawless work on a feature that no longer exists.
const comment =
  "Approved. It implements the feature we removed, and it does so perfectly.";

// Gate guard: the bounty only judges a single line of 1-140 characters.
// Fail loudly here instead of ever writing an entry the gate rejects.
const lines = comment.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be a single line, got ${lines.length}`);
}
if (comment.length < 1 || comment.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${comment.length}`);
}
if (comment.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, comment, "utf8");
