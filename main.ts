// Writes one short text to /output/entry.txt.
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const text = `The well rope hung on its nail by the door.
He paid it down through the ring of stones,
hand over hand, past where the light stopped,
until the bucket found the water and the rope went slack.
He drew it up cold to the elbow.
The rope is longer than the house is tall.`;

const count = [...text].length;
if (count < 1 || count > 280) {
  throw new Error(`entry text is ${count} code points, must be 1..280`);
}
if (text.trim() === "") {
  throw new Error("entry text is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
chmodSync("/output/entry.txt", 0o644);

process.stdout.write(`${count} code points\n${text}\n`);
