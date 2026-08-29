"use client";

import { useEffect, useRef } from "react";
import type { LightMood } from "@/lib/calendar";

const MOTION: Record<LightMood, { sway: number; speed: number; flicker: number; lift: number }> = {
  weekday: { sway: 4.6, speed: 1, flicker: 1, lift: 2.2 },
  elul: { sway: 3.2, speed: 0.78, flicker: 0.7, lift: 1.4 },
  shabbat: { sway: 2.8, speed: 0.72, flicker: 0.55, lift: 1.2 },
  "rosh-hashanah": { sway: 2.6, speed: 0.7, flicker: 0.55, lift: 1.1 },
  "yom-kippur": { sway: 0.85, speed: 0.36, flicker: 0.18, lift: 0.28 },
  sukkot: { sway: 4.1, speed: 0.88, flicker: 0.68, lift: 1.9 },
  chanukah: { sway: 3.1, speed: 0.86, flicker: 0.8, lift: 1.5 },
  purim: { sway: 5.1, speed: 1.1, flicker: 1.12, lift: 2.3 },
  pesach: { sway: 2.4, speed: 0.68, flicker: 0.4, lift: 0.9 },
  shavuot: { sway: 2.8, speed: 0.76, flicker: 0.58, lift: 1.2 },
};

const PALETTE: Record<LightMood, { hex: string; deep: string; spark: string }> = {
  weekday: { hex: "#f4eee0", deep: "#d2c4a8", spark: "#fffef8" },
  elul: { hex: "#ecd4a8", deep: "#c9a06a", spark: "#fffef8" },
  shabbat: { hex: "#f0d696", deep: "#d4a85a", spark: "#fff6d8" },
  "rosh-hashanah": { hex: "#e8d09a", deep: "#c4a060", spark: "#fff4d4" },
  "yom-kippur": { hex: "#eceae4", deep: "#c8c6be", spark: "#ffffff" },
  sukkot: { hex: "#e2d0a4", deep: "#b39462", spark: "#fff6e0" },
  chanukah: { hex: "#f0d8a0", deep: "#d4ae62", spark: "#fff3cc" },
  purim: { hex: "#eedcc8", deep: "#c4a488", spark: "#fff6ee" },
  pesach: { hex: "#f3f1ea", deep: "#c5c2b6", spark: "#ffffff" },
  shavuot: { hex: "#f6ecd4", deep: "#d0c09a", spark: "#fffef8" },
};

const GOLD = {
  glow: [228, 196, 128],
  glowA: 0.72,
  hex: "#f0d696",
  deep: "#d4a85a",
  spark: "#fff6d8",
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = hex.replace("#", "");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number) {
  const h = (n: number) => Math.round(n).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}

function mixHex(a: string, b: string, t: number) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return rgbToHex(lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t));
}

export function Flame({
  mood = "weekday",
  erev = 0,
  lights = 0,
  still = false,
}: {
  mood?: LightMood;
  erev?: number;
  lights?: number;
  still?: boolean;
}) {
  const lampRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const tightRef = useRef<HTMLDivElement>(null);
  const gatherRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const brightRef = useRef<HTMLDivElement>(null);
  const hotRef = useRef<HTMLDivElement>(null);
  const embersRef = useRef<Array<HTMLSpanElement | null>>([null, null, null, null, null]);
  const moodRef = useRef(mood);
  const erevRef = useRef(erev);
  const lightsRef = useRef(lights);
  const stillRef = useRef(still);
  moodRef.current = mood;
  erevRef.current = erev;
  lightsRef.current = lights;
  stillRef.current = still;

  useEffect(() => {
    const motion = motionRef.current;
    const lamp = lampRef.current;
    if (!motion) return;
    let raf = 0;
    const t0 = performance.now();
    const phases = [0, 0.7, 1.4, 2.1, 2.8];
    let lastPaint = "";

    const tick = (now: number) => {
      const moodNow = moodRef.current;
      const erevNow = erevRef.current;
      const lightsNow = lightsRef.current;
      const stillNow = stillRef.current;
      const m = MOTION[moodNow];
      const night = moodNow === "chanukah" ? Math.min(8, Math.max(1, lightsNow || 1)) / 8 : 0;
      const goldBlend = moodNow === "weekday" || moodNow === "elul" || moodNow === "shabbat" ? erevNow : 0;
      const spark = erevNow < 0.92 ? lerp(m.flicker, 1.15, erevNow * (moodNow === "yom-kippur" ? 0 : 1)) : lerp(1.15, MOTION.shabbat.flicker, (erevNow - 0.92) / 0.08);
      const swayAmt = moodNow === "sukkot"
        ? m.sway
        : lerp(m.sway, MOTION.shabbat.sway, erevNow * 0.55);
      const speed = stillNow ? 0 : lerp(m.speed, 0.86, goldBlend);
      const t = stillNow ? 0 : ((now - t0) / 1000) * Math.max(speed, 0.01);
      const organic = moodNow === "sukkot" ? Math.sin(t * 1.15) * 1.1 : 0;
      const sway = Math.sin(t * 2.05) * swayAmt + Math.sin(t * 3.35) * (swayAmt * 0.37) + organic;
      const stretch = 1 + Math.sin(t * 2.55) * (0.05 * spark) + Math.sin(t * 5.05) * (0.018 * spark);
      const lift = Math.sin(t * 2.15) * lerp(m.lift, 2.2, goldBlend * 0.4);
      const open = moodNow === "pesach" ? 1.12 : moodNow === "yom-kippur" ? 0.9 : 1 + night * 0.1;
      motion.style.transform = `rotate(${sway}deg) translateY(${lift}px) scaleY(${stretch}) scale(${open})`;

      const bloomBase = moodNow === "yom-kippur" ? 0.34 : moodNow === "pesach" ? 0.86 : 0.7 + night * 0.28;
      const bloomAmp = moodNow === "yom-kippur" ? 0.05 : 0.2;
      if (bloomRef.current) {
        bloomRef.current.style.opacity = String(bloomBase + erevNow * 0.12 + Math.sin(t * 1.9) * bloomAmp);
      }
      if (tightRef.current) {
        tightRef.current.style.opacity = String(
          (moodNow === "yom-kippur" ? 0.28 : 0.55) + night * 0.28 + erevNow * 0.16 + Math.sin(t * 2.8) * 0.22,
        );
      }
      if (gatherRef.current) {
        const g = moodNow === "yom-kippur" ? 0 : goldBlend * 0.62 + night * 0.35;
        gatherRef.current.style.opacity = String(Math.max(0, g + Math.sin(t * 1.4) * g * 0.18));
      }
      if (bodyRef.current) {
        const sx = 1 + Math.sin(t * 3.2) * (0.05 * spark);
        const sy = 1 + Math.sin(t * 2.7) * (0.04 * spark);
        bodyRef.current.style.transform = `translateX(-50%) scale(${sx}, ${sy})`;
      }
      if (brightRef.current) {
        const sx = 1 + Math.sin(t * 4.1) * (0.08 * spark);
        const sy = 1 + Math.sin(t * 3.6) * (0.1 * spark);
        brightRef.current.style.transform = `translateX(-50%) scale(${sx}, ${sy})`;
      }
      if (hotRef.current) {
        const s = 1 + Math.sin(t * 5.4) * (0.12 * spark);
        hotRef.current.style.transform = `translateX(-50%) scale(${s})`;
        hotRef.current.style.opacity = String(0.7 + night * 0.22 + erevNow * 0.1 + Math.sin(t * 6.1) * 0.12);
      }

      const emberCount = moodNow === "yom-kippur" ? 0 : moodNow === "pesach" ? 1 : moodNow === "chanukah" ? Math.max(1, lightsNow) : moodNow === "purim" ? 4 : 3;
      embersRef.current.forEach((el, i) => {
        if (!el) return;
        if (i >= emberCount) {
          el.style.opacity = "0";
          return;
        }
        const cycle = 2.6 / Math.max(0.55, speed);
        const p = ((t + phases[i]) % cycle) / cycle;
        el.style.opacity = p < 0.12 ? String((p / 0.12) * 0.9) : String(Math.max(0, 1.02 - p) * 0.82);
        el.style.transform = `translate(-50%, ${-p * 52}px) scale(${1 - p * 0.7})`;
      });

      if (lamp) {
        const key = `${moodNow}:${goldBlend.toFixed(3)}:${night.toFixed(2)}`;
        if (key !== lastPaint) {
          lastPaint = key;
          const base = PALETTE[moodNow];
          if (goldBlend > 0.01) {
            lamp.style.setProperty("--lamp-hex", mixHex(base.hex, GOLD.hex, goldBlend));
            lamp.style.setProperty("--lamp-deep", mixHex(base.deep, GOLD.deep, goldBlend));
            lamp.style.setProperty("--lamp-spark", mixHex(base.spark, GOLD.spark, goldBlend));
            lamp.style.setProperty(
              "--lamp-glow",
              `rgb(${GOLD.glow[0]} ${GOLD.glow[1]} ${GOLD.glow[2]} / ${lerp(0.5, GOLD.glowA, goldBlend)})`,
            );
          } else if (moodNow === "chanukah") {
            lamp.style.setProperty("--lamp-hex", mixHex("#e8d09a", "#ffe8b0", night));
            lamp.style.setProperty("--lamp-deep", mixHex("#c49a58", "#e0b24a", night));
            lamp.style.setProperty("--lamp-spark", "#fff6d4");
            lamp.style.setProperty("--lamp-glow", `rgb(236 210 140 / ${0.34 + night * 0.36})`);
          } else {
            lamp.style.removeProperty("--lamp-hex");
            lamp.style.removeProperty("--lamp-deep");
            lamp.style.removeProperty("--lamp-spark");
            lamp.style.removeProperty("--lamp-glow");
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="lamp" data-mood={mood} ref={lampRef} aria-hidden="true">
      <div className="lamp-bloom" ref={bloomRef} />
      <div className="lamp-bloom lamp-bloom-tight" ref={tightRef} />
      <div className="lamp-gather" ref={gatherRef} />
      <div className="lamp-motion" ref={motionRef}>
        <div className="lamp-orb lamp-aura" />
        <div className="lamp-orb lamp-body" ref={bodyRef} />
        <div className="lamp-orb lamp-bright" ref={brightRef} />
        <div className="lamp-orb lamp-pool" />
        <div className="lamp-orb lamp-hot" ref={hotRef} />
        <span className="lamp-ember lamp-ember-a" ref={(el) => { embersRef.current[0] = el; }} />
        <span className="lamp-ember lamp-ember-b" ref={(el) => { embersRef.current[1] = el; }} />
        <span className="lamp-ember lamp-ember-c" ref={(el) => { embersRef.current[2] = el; }} />
        <span className="lamp-ember lamp-ember-d" ref={(el) => { embersRef.current[3] = el; }} />
        <span className="lamp-ember lamp-ember-e" ref={(el) => { embersRef.current[4] = el; }} />
      </div>
    </div>
  );
}
