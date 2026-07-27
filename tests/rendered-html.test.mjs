import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Maximilian Gorsky's academic website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Maximilian Gorsky — Structural Graph Theory<\/title>/i,
  );
  assert.match(html, /Research on the<em> structure of graphs\.<\/em>/);
  assert.match(html, /Computer Scientist · Mathematician/);
  assert.doesNotMatch(html, /I study the hidden/);
  assert.match(html, /Publications/);
  assert.match(html, /Optimal Bounds for the k-Disjoint Paths Problem/);
  assert.match(html, /Strongly Pfaffian Graphs/);
  assert.match(html, /10\.1007\/978-3-030-83823-2_42/);
  assert.match(html, /IBS Researcher of the Year/);
  assert.match(html, /Graph theory, in progress\./);
  assert.match(html, /Graph Minor Structure Theory in \(un\)directed graphs/);
  assert.match(html, /Photo by Sebastian Wiederrecht/);
  assert.ok(
    html.indexOf('id="research"') <
        html.indexOf('<figure class="panorama-band"') &&
      html.indexOf('<figure class="panorama-band"') <
        html.indexOf('id="publications"'),
    "The panorama should appear between research and publications",
  );
  assert.match(html, /meeme\.jpg/);
  assert.match(html, /Co-authors/);
  assert.match(html, /Evangelos Protopapas/);
  assert.match(html, /Dario Cavallaro/);
  assert.match(html, /J\. Pascal Gollin/);
  assert.match(html, /Gunwoo Kim/);
  assert.match(html, /Paul Wollan/);
  assert.match(html, /https:\/\/pascal-gollin\.github\.io\//);
  assert.match(html, /https:\/\/meikehatzel\.com\//);
  assert.match(html, /https:\/\/mnbvmar\.github\.io\//);
  assert.match(html, /dsi\.uniroma1\.it\/~wollan/);
  assert.match(html, /smp\.uq\.edu\.au\/profile\/17423\/katie-clinch/);
  assert.match(html, /sites\.google\.com\/view\/caleb-mcfarland\//);
  assert.match(html, /tcs\.uj\.edu\.pl\/seweryn/);
  assert.match(
    html,
    /tu\.berlin\/en\/las\/team\/research-group-leader\/kreutzer/,
  );
  assert.ok(
    html.match(
      /https:\/\/www\.tu\.berlin\/en\/las\/team\/research-group-leader\/kreutzer/g,
    )?.length >= 2,
    "The Kreutzer profile should be linked in both the introduction and co-author list",
  );
  assert.match(html, /aria-label="11 papers"/);
  assert.match(html, /aria-label="3 papers"/);
  assert.match(html, /View on Naver Map/);
  assert.match(html, /map\.naver\.com\/p\/search\/Institute[^"]+place\/21052209/);
  assert.doesNotMatch(html, /Clear Academic|Midnight Editorial|Design mockups/);
  assert.doesNotMatch(html, /Peer-reviewed articles in structural/);
  assert.doesNotMatch(html, /A selection of recent and upcoming/);
  assert.doesNotMatch(html, /Let’s talk about graphs\./);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("server-renders the full activities page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("activities-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/activities", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Talks, visits &amp; workshops/);
  assert.match(html, /Research visits/);
  assert.ok(
    html.indexOf(">Talks</h2>") < html.indexOf(">Research visits</h2>"),
    "Talks should appear before research visits",
  );
  assert.ok(
    html.indexOf(">Research visits</h2>") <
      html.indexOf(">Workshops &amp; conferences</h2>"),
    "Research visits should appear before workshops",
  );
  assert.match(html, /Barbados Graph Theory Workshop/);
  assert.match(html, /k-Outerplanarity and Poset Dimension/);
  assert.match(html, /Georgia Tech/);
  assert.doesNotMatch(html, /A selection of recent and upcoming/);
});
