import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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

test("server-renders Ilia Kamyshev profile page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ilia Kamyshev - NILM Research Engineer<\/title>/i);
  assert.match(html, /Ilia Kamyshev/);
  assert.match(html, /AI researcher · Entrepreneur · Director/);
  assert.match(html, /I build intelligent systems for the physical world/);
  assert.match(html, /Director of Intelligent Energy Solutions LLC/);
  assert.doesNotMatch(html, /My work connects artificial intelligence/);
  assert.match(html, /Professional Skills/);
  assert.match(html, /Machine learning, neural networks, and AI-assisted development/);
  assert.match(html, /passionate researchers, young entrepreneurs, and investors/);
  assert.doesNotMatch(html, /Open to Connect/);
  assert.match(html, /href="#apps"/);
  assert.match(html, /My Apps/);
  assert.match(html, /Energy monitoring application/);
  assert.match(html, /\/energy-monitoring-app\.png/);
  assert.match(html, /Hooshi speech-to-text/);
  assert.match(html, /\/hooshi-app\.png/);
  assert.match(html, /href="#blogs"/);
  assert.match(html, /Blogs/);
  assert.match(html, /Building a sensor for remote appliance monitoring/);
  assert.match(html, /Watch the demonstration/);
  assert.match(html, /Read more/);
  assert.match(html, /https:\/\/www\.youtube\.com\/watch\?v=Ru9Mn3zYwWc/);
  assert.doesNotMatch(html, /My technical work is strongest in Python-based machine learning/);
  assert.match(html, /Artificial intelligence for physical and energy systems/);
  assert.match(html, /Edframe/);
  assert.match(html, /RU 2 804 048 C1/);
  assert.match(html, /Publications and Patent/);
  assert.match(html, /My workshop/i);
  assert.match(html, /\/ilia-workshop\.png/);
  assert.match(html, /compact pick-and-place machine/);
  assert.doesNotMatch(html, /href="#software"|href="#publications"/);
  assert.match(html, /\/ilia-kamyshev\.jpg/);
  assert.match(html, /masthead-portrait/);
  assert.match(html, /id="contact"/);
  assert.match(html, /github\.com\/arx7ti/);
  assert.doesNotMatch(html, /\/IK_CV_updated\.pdf|Full CV/);
  assert.doesNotMatch(html, /Tbilisi, Georgia/);
  assert.doesNotMatch(html, /At a Glance/);
  assert.doesNotMatch(html, /id="sources"|>Sources</i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps source files focused on the finished profile", async () => {
  const [page, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const publications = \[/);
  assert.match(page, /id="workshop"/);
  assert.match(page, /Publications and Patent/);
  assert.match(page, /masthead-portrait/);
  assert.match(page, /contact-panel/);
  assert.match(page, /workshop-feature/);
  assert.match(page, /research-list/);
  assert.match(page, /skill-list/);
  assert.match(page, /connect-note/);
  assert.match(page, /id="apps"/);
  assert.match(page, /app-list/);
  assert.match(page, /Hooshi is a speech-to-text/);
  assert.match(page, /id="blogs"/);
  assert.match(page, /blog-post/);
  assert.match(page, /<summary>/);
  assert.doesNotMatch(page, /My technical work is strongest in Python-based machine learning/);
  assert.doesNotMatch(page, /id="software" className="tab-panel"|id="publications" className="tab-panel"/);
  assert.match(css, /main:has\(\.tab-panel:not\(#bio\):target\) \.active-panel/);
  assert.match(layout, /NILM Research Engineer/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(page, /const sources|id="sources"|At a Glance/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await assert.rejects(access(new URL("../public/IK_CV_updated.pdf", import.meta.url)));
  await access(new URL("../public/ilia-kamyshev.jpg", import.meta.url));
  await access(new URL("../public/ilia-workshop.png", import.meta.url));
  await access(new URL("../public/energy-monitoring-app.png", import.meta.url));
  await access(new URL("../public/hooshi-app.png", import.meta.url));
});
