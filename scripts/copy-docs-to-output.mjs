/**
 * Include the standalone documentation portal in Nitro's static asset output.
 * The host serves the preset's static folder (`.output/public` for wrangler,
 * `.vercel/output/static` on Vercel), so source files kept in `docs/` must be
 * copied there after every build.
 */
import { cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve(process.cwd(), "docs");

const sourceStats = await stat(source).catch(() => null);
if (!sourceStats?.isDirectory()) {
  throw new Error(`Documentation source directory not found: ${source}`);
}

// Nitro writes static assets to a different folder per preset, so resolve it from
// the same signals vite.config.mts uses rather than from whichever folder happens
// to exist -- a stale `.vercel/output` must not capture a `.output` build.
const preset = process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : undefined);
const publicOutput = resolve(
  process.cwd(),
  preset === "vercel" ? ".vercel/output/static" : ".output/public",
);
const destination = resolve(publicOutput, "docs");

await mkdir(publicOutput, { recursive: true });
await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });

console.log(`Copied documentation assets to ${destination}`);
