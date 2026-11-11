import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = join(root, "dist");
const ignored = new Set(["dist", "node_modules", "scripts"]);

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const entry of readdirSync(root)) {
  if (entry.startsWith(".") || ignored.has(entry)) continue;
  if (entry.endsWith(".md") || entry === "package.json" || entry === "package-lock.json") continue;
  cpSync(join(root, entry), join(out, entry), { recursive: true });
}

console.log(`Built static site into ${out}`);
