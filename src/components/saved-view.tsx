"use client";

import { Sheet } from "@/components/sheet";
import { prayerById } from "@/lib/prayers";
import { READINGS } from "@/lib/readings";
import { resourceById } from "@/lib/resources";
import { useAppStore } from "@/store/app-store";

export function SavedView() {
  const favorites = useAppStore((s) => s.favorites);
  const setOverlay = useAppStore((s) => s.setOverlay);
  const setTab = useAppStore((s) => s.setTab);
  const toggle = useAppStore((s) => s.toggleFavorite);

  return (
    <Sheet title="Saved" onClose={() => setOverlay(null)}>
      <p className="mb-4 font-sans text-sm leading-relaxed text-muted">
        Kept on this device. Not an account. Open a prayer, a reading, or a door you want to find again.
      </p>
      {favorites.length === 0 ? (
        <p className="rounded-xl bg-surface px-4 py-4 font-sans text-sm text-muted shadow-[var(--shadow-border)]">
          Nothing saved yet. Use the bookmark on a prayer, a reading, or a community listing.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {favorites.map((f) => (
            <li key={f.id} className="rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]">
              <p className="font-display text-lg text-fg">{f.title}</p>
              <p className="mt-1 font-sans text-sm text-muted">{f.subtitle}</p>
              <div className="mt-3 flex gap-3">
                <button
                  type="button"
                  className="font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
                  onClick={() => {
                    if (f.kind === "prayer") setTab("prayers");
                    else if (f.kind === "resource") setTab("places");
                    else setTab("today");
                  }}
                >
                  Open
                </button>
                <button
                  type="button"
                  className="font-sans text-sm text-muted"
                  onClick={() => toggle(f)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Sheet>
  );
}

export function favoriteStillExists(id: string): boolean {
  if (id.startsWith("prayer:")) return Boolean(prayerById(id.slice(7)));
  if (id.startsWith("reading:")) return READINGS.some((r) => r.id === id.slice(8));
  if (id.startsWith("resource:")) return Boolean(resourceById(id.slice(9)));
  return true;
}
