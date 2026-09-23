/**
 * Writes versioned Home Screen / PWA icons into public/.
 * Pure Node (zlib) — no extra deps. Run: node scripts/generate-home-screen-icons.mjs
 */
import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const ICON_VERSION = "v3-20260923";
export const APPLE_TOUCH_ICON_PATH = `/icons/apple-touch-icon-${ICON_VERSION}.png`;
export const ICON_192_PATH = `/icons/icon-192-${ICON_VERSION}.png`;
export const ICON_512_PATH = `/icons/icon-512-${ICON_VERSION}.png`;

const BG = [28, 20, 14];

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crcBuf = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcBuf));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePngRgb(width, height, rgb) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 3 + 1);
    raw[rowStart] = 0;
    rgb.copy(raw, rowStart + 1, y * width * 3, (y + 1) * width * 3);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function mix(a, b, t) {
  return a + (b - a) * t;
}

function drawFlame(size) {
  const rgb = Buffer.alloc(size * size * 3);
  const cx = size / 2;
  const tip = size * 0.12;
  const base = size * 0.86;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 3;
      let r = BG[0];
      let g = BG[1];
      let b = BG[2];

      const gx = (x - cx) / (size * 0.46);
      const gy = (y - size * 0.55) / (size * 0.52);
      const glowR = Math.hypot(gx, gy);
      if (glowR < 1.2) {
        const a = Math.max(0, 1 - glowR);
        const aa = a * a * 0.62;
        r = mix(r, 232, aa);
        g = mix(g, 150, aa);
        b = mix(b, 40, aa);
      }

      if (y >= tip && y <= base) {
        const t = (y - tip) / (base - tip);
        const half = 0.1 + 0.34 * t ** 0.62;
        const width = half * (1 - 0.22 * t);
        const lean = 0.028 * Math.sin(t * Math.PI);
        const nx = Math.abs(x - cx - lean * size) / Math.max(width * size, 1e-6);
        if (nx <= 1) {
          let fr;
          let fg;
          let fb;
          let fa = 1;
          if (nx > 0.78) {
            const m = (nx - 0.78) / 0.22;
            fr = 255 - m * 20;
            fg = 130 - m * 40;
            fb = 40 - m * 10;
            fa = (1 - nx) / 0.22;
          } else if (nx > 0.48) {
            const m = (nx - 0.48) / 0.3;
            fr = 255;
            fg = 210 - m * 70;
            fb = 110 - m * 40;
          } else if (nx > 0.22) {
            const m = (nx - 0.22) / 0.26;
            fr = 255;
            fg = 248 - m * 28;
            fb = 210 - m * 90;
          } else {
            fr = 255;
            fg = 252;
            fb = 232;
          }
          if (t < 0.07) fa *= t / 0.07;
          r = mix(r, fr, fa);
          g = mix(g, fg, fa);
          b = mix(b, fb, fa);
        }
      }

      const cxn = (x - cx) / (size * 0.09);
      const cyn = (y - size * 0.6) / (size * 0.16);
      const core = cxn * cxn + cyn * cyn;
      if (core < 1) {
        const a = 0.9 * (1 - core) ** 1.3;
        r = mix(r, 255, a);
        g = mix(g, 254, a);
        b = mix(b, 245, a);
      }

      rgb[i] = Math.max(0, Math.min(255, Math.round(r)));
      rgb[i + 1] = Math.max(0, Math.min(255, Math.round(g)));
      rgb[i + 2] = Math.max(0, Math.min(255, Math.round(b)));
    }
  }

  const embers = [
    [0.36, 0.62, 0.02],
    [0.64, 0.58, 0.018],
    [0.46, 0.48, 0.015],
    [0.58, 0.46, 0.013],
    [0.3, 0.72, 0.017],
    [0.7, 0.7, 0.015],
    [0.5, 0.34, 0.012],
    [0.4, 0.4, 0.011],
    [0.62, 0.38, 0.011],
    [0.26, 0.56, 0.013],
    [0.74, 0.54, 0.012],
    [0.54, 0.74, 0.019],
    [0.33, 0.5, 0.01],
    [0.68, 0.46, 0.01],
  ];
  for (const [pxn, pyn, radn] of embers) {
    const ex = pxn * size;
    const ey = pyn * size;
    const rad = radn * size;
    const minX = Math.max(0, Math.floor(ex - rad * 3));
    const maxX = Math.min(size - 1, Math.ceil(ex + rad * 3));
    const minY = Math.max(0, Math.floor(ey - rad * 3));
    const maxY = Math.min(size - 1, Math.ceil(ey + rad * 3));
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const d = Math.hypot(x - ex, y - ey) / rad;
        if (d >= 2.6) continue;
        const a = (1 - d / 2.6) ** 2;
        const i = (y * size + x) * 3;
        rgb[i] = Math.min(255, Math.round(mix(rgb[i], 255, a)));
        rgb[i + 1] = Math.min(255, Math.round(mix(rgb[i + 1], 220, a)));
        rgb[i + 2] = Math.min(255, Math.round(mix(rgb[i + 2], 130, a)));
      }
    }
  }

  return rgb;
}

export function writeHomeScreenIcons(root = process.cwd()) {
  mkdirSync(join(root, "public/icons"), { recursive: true });
  mkdirSync(join(root, "public/__grok"), { recursive: true });
  const apple = encodePngRgb(180, 180, drawFlame(180));
  const icon192 = encodePngRgb(192, 192, drawFlame(192));
  const icon512 = encodePngRgb(512, 512, drawFlame(512));
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
