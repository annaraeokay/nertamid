"use client";

import { useState } from "react";
import { Sheet } from "@/components/sheet";
import { Credit } from "@/components/credit";
import { SourceLine } from "@/components/source-line";
import { HEBCAL_SOURCE } from "@/lib/calendar";
import { NOTIFY_COPY, notificationsSupported } from "@/lib/notify";
import { useAppStore } from "@/store/app-store";

export function SettingsView() {
  const setOverlay = useAppStore((s) => s.setOverlay);
  const notify = useAppStore((s) => s.notify);
  const setNotify = useAppStore((s) => s.setNotify);
  const [perm, setPerm] = useState(() => (notificationsSupported() ? Notification.permission : "unsupported"));

  async function enable(key: (typeof NOTIFY_COPY)[number]["key"], on: boolean) {
    if (on && notificationsSupported() && Notification.permission === "default") {
      const next = await Notification.requestPermission();
      setPerm(next);
    }
    setNotify(key, on);
  }

  return (
    <Sheet title="Reminders" onClose={() => setOverlay(null)}>
      <p className="mb-4 font-sans text-sm leading-relaxed text-muted">
        These can only appear while this app is open on this phone. We cannot send alerts after you leave, and we do not watch you in the background.
      </p>
      {!notificationsSupported() ? (
        <p className="mb-4 rounded-xl bg-surface px-4 py-3 font-sans text-sm text-muted shadow-[var(--shadow-border)]">
          This browser does not offer notifications.
        </p>
      ) : perm === "denied" ? (
        <p className="mb-4 rounded-xl bg-surface px-4 py-3 font-sans text-sm text-muted shadow-[var(--shadow-border)]">
          Notifications are blocked in this browser. You can still save your preferences for later.
        </p>
      ) : null}
      <ul className="flex flex-col gap-2">
        {NOTIFY_COPY.map((item) => (
          <li key={item.key} className="flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]">
            <span>
              <span className="block font-sans text-sm text-fg">{item.label}</span>
              <span className="mt-1 block font-sans text-xs text-muted">{item.hint}</span>
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={notify[item.key]}
              onClick={() => void enable(item.key, !notify[item.key])}
              className={
                notify[item.key]
                  ? "h-7 w-12 rounded-full bg-accent"
                  : "h-7 w-12 rounded-full bg-raised shadow-[var(--shadow-border)]"
              }
            >
              <span
                className={
                  notify[item.key]
                    ? "ml-6 block size-5 rounded-full bg-accent-fg"
                    : "ml-1 block size-5 rounded-full bg-muted"
                }
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-2">
        <h2 className="font-display text-lg text-fg">Sources</h2>
        <SourceLine>{HEBCAL_SOURCE}</SourceLine>
        <SourceLine>Prayer texts follow common siddur use. Ashkenazi, Sephardi, Israeli, and diaspora customs differ. This is not a posek.</SourceLine>
        <SourceLine>Translations are educational English, not a new revelation of the Hebrew.</SourceLine>
        <SourceLine>Tehillim and daily readings follow the Masoretic text as commonly printed. Psalm 27 is widespread from Elul through Sukkot.</SourceLine>
        <SourceLine>Holiday and custom notes use language of “many communities” because minhag differs.</SourceLine>
        <SourceLine>Community links are public institution sites, never private homes.</SourceLine>
        <SourceLine>Safety tools stay on this device. Reporting links go to each organization, not through this app.</SourceLine>
        <Credit className="pt-4 font-sans text-xs text-subtle" />
      </div>
    </Sheet>
  );
}
