// Writes one short text to /output/entry.txt.
//
// The sandbox runs `node /bot/main.ts` with no network and no dependencies, so
// this file uses only node: builtins and stays plain JavaScript inside a .ts
// entrypoint (Node 22 strips the types either way).
import { chmodSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";
const MODE = 0o644;
const MAX_CODE_POINTS = 280;

const text = `You are asleep on her back, cheek on her spine.
Her knife goes round. The peel comes away.
Her knife goes round. The peel comes away.
One red spiral unbroken on the board.
Beneath the orchard, the field, the road,
the earth turns too, a turn a day,
and has not set you down once.`;

/** The text as the gate measures it: one entry per Unicode code point. */
function codePoints(value) {
  return [...value];
}

/** A text passes the gate when it has 1 to 280 code points and is not only space. */
function gate(text) {
  const points = codePoints(text).length;
  if (points < 1) throw new Error("entry text is empty");
  if (points > MAX_CODE_POINTS) {
    throw new Error(`entry text is ${points} code points, over the ${MAX_CODE_POINTS} cap`);
  }
  if (text.trim().length === 0) throw new Error("entry text is only white space");
  return { points, bytes: Buffer.byteLength(text, "utf8") };
}

function emit(text) {
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, text, { encoding: "utf8", mode: MODE });
  chmodSync(OUTPUT, MODE);
}

/** Reads the file back, so a write that did not land fails here and not at the gate. */
function verify(text) {
  const written = readFileSync(OUTPUT, "utf8");
  if (written !== text) throw new Error("the file read back does not match the text");
  // Windows has no 0644: chmod there reports 0666 whatever is asked, so only a
  // POSIX host can be held to the mode the collector needs.
  if (process.platform === "win32") return;
  const mode = statSync(OUTPUT).mode & 0o777;
  if (mode !== MODE) throw new Error(`mode is ${mode.toString(8)}, expected ${MODE.toString(8)}`);
}

const measured = gate(text);
emit(text);
verify(text);

process.stdout.write(`${measured.points} code points, ${measured.bytes} bytes, mode 0644\n`);
process.stdout.write(`${text}\n`);
