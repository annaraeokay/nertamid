"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Stage } from "@/components/stage";
import { erevTowardShabbat, gatheringNote, getDayInfo } from "@/lib/calendar";
import { cn } from "@/lib/cn";
import { cityById } from "@/lib/locations";
import {
  liveVisual,
  SCENES,
  sceneById,
  TRACKS,
  variablesOf,
  visualAt,
  type VisualState,
} from "@/lib/visual";
import { useAppStore } from "@/store/app-store";

export const Route = createFileRoute("/design-lab")({ component: DesignLab });

function DesignLab() {
  const cityId = useAppStore((s) => s.cityId);
  const hydrate = useAppStore((s) => s.hydrate);
  const city = cityById(cityId);
  const [now] = useState(() => new Date());
  const liveInfo = useMemo(() => getDayInfo(city, now), [city, now]);
  const liveErev = erevTowardShabbat(now.getTime(), liveInfo.nextCandles, liveInfo.isShabbat);
  const live = liveVisual(liveInfo, liveErev, now.getTime(), gatheringNote(liveErev, liveInfo.isShabbat) ?? "Live calendar");

  const [sceneId, setSceneId] = useState<string | "live">("live");
  const [visual, setVisual] = useState<VisualState>(live);
  const [still, setStill] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("mobile");
  const [playing, setPlaying] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (playing) return;
    if (sceneId === "live") setVisual(live);
    else setVisual(sceneById(sceneId));
  }, [sceneId, live, playing]);

  useEffect(() => {
    if (!playing) return;
    const track = TRACKS.find((t) => t.id === playing);
    if (!track) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (nowMs: number) => {
      const p = Math.min(1, (nowMs - t0) / track.duration);
      setProgress(p);
      setVisual(visualAt(track, p));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPlaying(null);
        const last = track.steps[track.steps.length - 1];
        setSceneId(last.scene);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const previewing = sceneId !== "live" || Boolean(playing);
  const vars = variablesOf(visual);
  const width = viewport === "mobile" ? 390 : viewport === "tablet" ? 720 : 1020;

  function reset() {
    setPlaying(null);
    setSceneId("live");
    setVisual(live);
    setProgress(0);
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-6 pb-16">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="type-kicker">Developer only</p>
            <h1 className="mt-2 font-display text-3xl text-fg">Design Lab</h1>
            <p className="mt-1 font-sans text-sm text-muted">
              Simulated light. The live app at home is unchanged.
            </p>
          </div>
          <Link to="/" className="font-sans text-sm text-fg underline decoration-border underline-offset-4">
            Back to Ner Tamid
          </Link>
        </header>

        {previewing ? (
          <div className="flex items-center justify-between gap-3 rounded-xl bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
            <p className="font-sans text-xs font-medium tracking-[0.18em] text-fg uppercase">Preview mode · simulated time</p>
            <button type="button" onClick={reset} className="font-sans text-sm text-fg underline decoration-border underline-offset-4">
              Reset to real time
            </button>
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <section
            className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
            style={{ minHeight: "28rem" }}
          >
            <div className="flex justify-center px-4 py-8" style={{ minHeight: "28rem" }}>
              <div className="w-full" style={{ maxWidth: width }}>
                <div className="flex flex-col items-center text-center">
                  <Stage visual={visual} still={still} />
                  <p className="mt-5 text-[0.8rem] tracking-[0.22em] text-muted" lang="he">
                    נר תמיד
                  </p>
                  <h2 className="type-hebrew-date mt-3" dir="rtl" lang="he">
                    {visual.hebrew}
                  </h2>
                  <p className="mt-2 font-display text-xl text-muted">{visual.english}</p>
                  <p className="mt-3 font-display text-base italic text-fg">{visual.caption}</p>
                  {playing ? (
                    <div className="mt-5 h-px w-40 bg-border">
                      <div className="h-px bg-fg" style={{ width: `${progress * 100}%` }} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-5">
            <section>
              <p className="type-kicker">Viewport</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["mobile", "tablet", "desktop"] as const).map((v) => (
                  <Chip key={v} active={viewport === v} onClick={() => setViewport(v)}>
                    {v}
                  </Chip>
                ))}
              </div>
            </section>
            <section>
              <p className="type-kicker">Motion</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip active={!still} onClick={() => setStill(false)}>
                  Normal
                </Chip>
                <Chip active={still} onClick={() => setStill(true)}>
                  Reduced
                </Chip>
              </div>
            </section>
            <section>
              <p className="type-kicker">Transition</p>
              <div className="mt-2 flex flex-col gap-2">
                {TRACKS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPlaying(t.id)}
                    className="rounded-lg bg-raised px-3 py-2 text-left font-sans text-sm text-fg shadow-[var(--shadow-border)]"
                  >
                    Play {t.label}
                  </button>
                ))}
              </div>
            </section>
            <section>
              <p className="type-kicker">Variables</p>
              <dl className="mt-2 flex flex-col gap-1">
                {vars.map((row) => (
                  <div key={row.name} className="flex justify-between gap-3 font-sans text-xs">
                    <dt className="text-subtle">{row.name}</dt>
                    <dd className="text-fg">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>

        <section>
          <p className="type-kicker">State</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip active={sceneId === "live" && !playing} onClick={reset}>
              Live
            </Chip>
            {SCENES.map((s) => (
              <Chip
                key={s.id}
                active={sceneId === s.id && !playing}
                onClick={() => {
                  setPlaying(null);
                  setSceneId(s.id);
                }}
              >
                {s.label}
              </Chip>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 font-sans text-xs capitalize shadow-[var(--shadow-border)]",
        active ? "bg-fg text-accent-fg" : "bg-raised text-muted",
      )}
    >
      {children}
    </button>
  );
}
