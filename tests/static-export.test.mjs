import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages export contains both website routes", async () => {
  const home = await readFile(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );
  const activities = await readFile(
    new URL("../out/activities/index.html", import.meta.url),
    "utf8",
  );

  assert.match(home, /Research on the/);
  assert.match(home, /Strongly Pfaffian Graphs/);
  assert.match(home, /The Structure of \(Even\) Directed Cycles/);
  assert.match(home, /research-panorama\.jpg/);
  assert.match(home, /href="\/Maximilian-Gorsky-CV\.pdf" download=""/);
  assert.match(activities, /Talks, visits &amp; workshops/);
  assert.match(activities, /27 June–04 July 2026/);
  assert.match(activities, /Research visit · Host: Rose McCarty/);
  assert.match(activities, /7–10 July 2026/);
  assert.match(activities, /14–17 December 2025/);
});

test("GitHub Pages export includes the required image assets", async () => {
  await Promise.all([
    access(new URL("../out/images/website-photo.avif", import.meta.url)),
    access(new URL("../out/images/meeme.jpg", import.meta.url)),
    access(new URL("../out/images/research-panorama.jpg", import.meta.url)),
    access(new URL("../out/Maximilian-Gorsky-CV.pdf", import.meta.url)),
  ]);
});
