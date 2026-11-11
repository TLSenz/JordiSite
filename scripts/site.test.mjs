import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const pages = readdirSync(root).filter((file) => file.endsWith(".html"));

test("the site has pages", () => {
  assert.ok(pages.length > 0, "no HTML pages found");
});

for (const page of pages) {
  test(`${page} has a title and a language`, () => {
    const html = readFileSync(join(root, page), "utf8");
    assert.match(html, /<title>[^<]+<\/title>/i, `${page} is missing a title`);
    assert.match(html, /<html[^>]*\blang=/i, `${page} is missing a lang attribute`);
  });

  test(`${page} local links and assets resolve`, () => {
    const html = readFileSync(join(root, page), "utf8");
    const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map((match) => match[1]);

    for (const ref of refs) {
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref)) continue;
      const path = ref.split("#")[0].split("?")[0];
      if (!path) continue;
      assert.ok(existsSync(resolve(root, path)), `${page} references missing file: ${ref}`);
    }
  });
}
