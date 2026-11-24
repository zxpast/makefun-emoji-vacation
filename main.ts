// One Emoji, One Dream Vacation — entry writer.
//
// Writes exactly one emoji to /output/entry.txt: Mount Fuji (U+1F5FB).
// Deterministic, stdlib only, no network, no Date, no randomness.
// The entry is a constant: the program's job is to emit it, byte-exact,
// every run.
import { mkdirSync, writeFileSync } from "node:fs";

// 🗻 Mount Fuji — the only emoji Unicode names for one real mountain.
// One named, bucket-list peak: a postcard at a glance, a specific dream
// (climbing Fuji / seeing it at sunrise), and a fresh pick against the
// first-reach generic beach / plane / palm-tree emojis everyone sends.
// It also carries the Japanese "first dream of the year" luck: dreaming
// of Fuji on New Year's night is the luckiest dream — a dream vacation
// in the most literal sense.
const EMOJI = "\u{1F5FB}";

// Self-check enforcing the gate: /output/entry.txt must be UTF-8 text of
// 1 to 8 characters, not only white space; the competition asks for
// exactly one emoji.
const chars = [...EMOJI]; // code-point iteration
if (chars.length !== 1) {
  throw new Error(`entry must be exactly one emoji, got ${chars.length} characters`);
}
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
