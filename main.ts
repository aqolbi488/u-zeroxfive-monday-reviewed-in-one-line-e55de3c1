import { mkdirSync, writeFileSync } from "node:fs";

// Monday, Reviewed in One Line — the program writes one review of its own
// Monday to /output/entry.txt. One line, under 200 characters, nothing else.
const review =
  "Monday review: my alarm snoozed itself, my inbox hit 214 unread before coffee, and my 9 a.m. standup asked how my weekend was — buddy, you're looking at it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n", "utf8");
console.log(review);
console.log(`chars: ${review.length}`);
