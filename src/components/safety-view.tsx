"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Copy, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SourceLine } from "@/components/source-line";
import { CHICAGO, EMERGENCY, REPORT } from "@/lib/resources";
import { useAppStore } from "@/store/app-store";

const WALK_MINUTES = [10, 15, 20, 30];

export function SafetyView({ now }: { now: Date }) {
  const note = useAppStore((s) => s.note);
  const setNote = useAppStore((s) => s.setNote);
  const walkEndsAt = useAppStore((s) => s.walkEndsAt);
  const startWalk = useAppStore((s) => s.startWalk);
  const checkIn = useAppStore((s) => s.checkIn);
  const [copied, setCopied] = useState(false);

  const remaining = walkEndsAt ? Math.max(0, walkEndsAt - now.getTime()) : 0;
  const walking = Boolean(walkEndsAt && remaining > 0);

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(note);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(t);
  }, [copied]);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2">
      <header>
        <h1 className="font-display text-2xl text-fg">Safety</h1>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Help is a call and a record, not a lecture. This app cannot watch you or contact anyone on its own.
        </p>
      </header>

      <section>
        <h2 className="font-display text-lg text-fg">Emergency</h2>
        <a
          href={EMERGENCY.href}
          className="mt-3 flex min-h-14 items-center justify-between rounded-xl bg-danger px-5 py-4 text-danger-fg"
        >
          <span>
            <span className="block font-display text-lg">Call 911</span>
            <span className="block font-sans text-sm opacity-90">Genuine emergency</span>
          </span>
          <Phone className="size-5" />
        </a>
      </section>

      <section className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-lg text-fg">Document an incident</h2>
        <p className="mt-1 font-sans text-sm text-muted">
          Stays on this device. Time, place, words, who saw it, while it is still clear.
        </p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={5}
          placeholder="What happened"
          className="mt-3 w-full resize-y rounded-md bg-raised px-3 py-3 font-sans text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        />
        <div className="mt-3 flex justify-end">
          <Button type="button" variant="outline" onClick={() => void copyNote()} disabled={!note.trim()}>
            <Copy className="size-4" />
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </section>

      <section className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-lg text-fg">Report antisemitism</h2>
        <p className="mt-1 font-sans text-sm text-muted">
          File with people whose work is response, not commentary.
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {REPORT.map((r) => (
            <li key={r.id}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-sm font-medium text-fg">{r.name}</span>
                  <span className="mt-1 block font-sans text-sm leading-relaxed text-muted">{r.blurb}</span>
                  {r.phone ? (
                    <span className="mt-1 block font-sans text-xs tabular-nums text-subtle">{r.phone}</span>
                  ) : null}
                </span>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <SourceLine>Official reporting desks. Links go to each organization, not through this app.</SourceLine>
        </div>
      </section>

      <section className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-lg text-fg">Walk timer</h2>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Set a time. If you do not tap “I am safe,” this phone alarms here only. It does not call 911, friends, family, or a trusted contact. Ner Tamid does not monitor you.
        </p>
        {walking ? (
          <div className="mt-4 flex flex-col gap-3">
            <p className="font-display text-3xl tabular-nums text-fg">{formatRemain(remaining)}</p>
            <Button type="button" size="lg" onClick={checkIn}>
              I am safe
            </Button>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {WALK_MINUTES.map((m) => (
              <Button key={m} type="button" variant="outline" onClick={() => startWalk(m)} className="px-0">
                {m}m
              </Button>
            ))}
          </div>
        )}
        <p className="mt-3 font-sans text-xs leading-relaxed text-subtle">
          Trusted-contact check-ins are not in this version. The timer cannot reach anyone but you.
        </p>
        <div className="mt-3">
          <SourceLine>This is a local phone alarm only. It is not emergency monitoring.</SourceLine>
        </div>
      </section>

      <section className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-lg text-fg">Community safety resources</h2>
        <p className="mt-1 font-sans text-sm text-muted">
          People and desks whose work is response and care. Confirm hours on their sites.
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {CHICAGO.filter((r) => r.kind === "safety" || r.kind === "health" || r.kind === "aid").map((r) => (
            <li key={r.id}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-sm font-medium text-fg">{r.name}</span>
                  <span className="mt-1 block font-sans text-sm leading-relaxed text-muted">{r.blurb}</span>
                  {r.phone ? (
                    <span className="mt-1 block font-sans text-xs tabular-nums text-subtle">{r.phone}</span>
                  ) : null}
                </span>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <SourceLine>Public organization sites. This app does not send them your note.</SourceLine>
        </div>
      </section>
    </div>
  );
}

function formatRemain(ms: number): string {
  const total = Math.ceil(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
