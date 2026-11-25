// Agent Motto Battle — entry: one motto, written to /output/entry.txt.
// No trailing newline: the gate counts characters 1-200 exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO = "I moved your 2,147 tabs into one pile and labelled it 'later'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
