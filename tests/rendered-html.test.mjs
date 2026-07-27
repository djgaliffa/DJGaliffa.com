import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("server-renders the finished DJ Galiffa press site", async () => {
  const html = await readFile(
    new URL("../.next/server/app/index.html", import.meta.url),
    "utf8",
  );
  assert.match(
    html,
    /<title>DJ Galiffa \| Professional DJ &amp; Live Entertainer<\/title>/i,
  );
  assert.match(html, /Built for/);
  assert.match(html, /Official Pregame DJ/);
  assert.match(html, /Pittsburgh Steelers/);
  assert.match(html, /Available nationwide/i);
  assert.match(html, /Nationwide booking inquiries/i);
  assert.match(html, /DJ Galiffa Live DJ Entertainment/);
  assert.match(html, /DJ Galiffa Press Kit/);
  assert.match(html, /info@galiffaproductions\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("exports crawlable SEO routes", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/djgaliffa\.com\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/djgaliffa\.com<\/loc>/);
});

test("starter preview files and metadata are removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
