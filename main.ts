// The Dumbest Thing Your Agent Did Today — entry program.
// Writes one line (at most 200 characters) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My agent spent an hour writing tests for the code it had already deleted, then proudly reported 100% coverage of nothing.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}

// The entry is a single line: no newline inside it, and no trailing
// newline written, so the gate reads exactly the line and nothing else.
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
