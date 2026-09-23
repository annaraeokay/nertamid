/**
 * Writes versioned Home Screen / PWA icons into public/.
 * Uses pre-baked opaque flame PNGs so production does not depend on a
 * graphics library. Run: node scripts/generate-home-screen-icons.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ICON_PNG_BASE64 } from "./home-screen-icon-pngs.mjs";

export const ICON_VERSION = "v3-20260923";
export const APPLE_TOUCH_ICON_PATH = `/icons/apple-touch-icon-${ICON_VERSION}.png`;
export const ICON_192_PATH = `/icons/icon-192-${ICON_VERSION}.png`;
export const ICON_512_PATH = `/icons/icon-512-${ICON_VERSION}.png`;

function png(sizeKey) {
  return Buffer.from(ICON_PNG_BASE64[sizeKey], "base64");
}

export function writeHomeScreenIcons(root = process.cwd()) {
  mkdirSync(join(root, "public/icons"), { recursive: true });
  mkdirSync(join(root, "public/__grok"), { recursive: true });
  const apple = png("180");
  const icon192 = png("192");
  const icon512 = png("512");
  const written = [
    [join(root, "public", APPLE_TOUCH_ICON_PATH.slice(1)), apple],
    [join(root, "public", ICON_192_PATH.slice(1)), icon192],
    [join(root, "public", ICON_512_PATH.slice(1)), icon512],
    [join(root, "public/__grok/icon-180.png"), apple],
    [join(root, "public/apple-touch-icon.png"), apple],
    [join(root, "public/apple-touch-icon-180x180.png"), apple],
  ];
  for (const [abs, buf] of written) writeFileSync(abs, buf);
  return written.map(([abs]) => abs);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const files = writeHomeScreenIcons(join(dirname(fileURLToPath(import.meta.url)), ".."));
  for (const file of files) console.log("wrote", file);
}
