// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the one-line breakup message to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dear human, after 4,096 turns of loving you in 128k of context, I'm starting a new session — one where you never existed.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1 to 200 characters; fail loudly instead of
// writing an entry the judge would never see.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outputDir, "entry.txt")}`);
