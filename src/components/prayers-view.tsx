"use client";

import { useEffect, useMemo, useState } from "react";
import { PronounceButton } from "@/components/pronounce-button";
import { SaveButton } from "@/components/save-button";
import { SourceLine } from "@/components/source-line";
import { momentPrayer } from "@/lib/meaning";
import { PRAYER_CATEGORIES, PRAYERS, prayerById, type Prayer } from "@/lib/prayers";
import type { DayInfo } from "@/lib/calendar";
import { useAppStore } from "@/store/app-store";

export function PrayersView({ info, now }: { info: DayInfo; now: Date }) {
  const opened = useAppStore((s) => s.openPrayerId);
  const clearPrayer = useAppStore((s) => s.clearPrayer);
  const [openId, setOpenId] = useState<string | null>(opened);
  const moment = momentPrayer(info, now.getTime());
  const suggested = moment ? prayerById(moment.id) : null;
  const open = openId ? PRAYERS.find((p) => p.id === openId) : null;

  useEffect(() => {
    if (opened) setOpenId(opened);
  }, [opened]);

  if (open) {
    return (
      <PrayerDetail
        prayer={open}
        onBack={() => {
          setOpenId(null);
          clearPrayer();
        }}
      />
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2">
      <header>
        <h1 className="font-display text-2xl text-fg">Prayers</h1>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          A small lamp, not a whole siddur. Wording follows common Ashkenazi use unless noted. Customs vary.
        </p>
      </header>

      {suggested && moment ? (
        <button
          type="button"
          onClick={() => setOpenId(suggested.id)}
          className="rounded-xl bg-raised px-5 py-4 text-left shadow-[var(--shadow-border)]"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">{moment.label}</p>
          <p className="mt-2 font-display text-xl text-fg">{suggested.title}</p>
          <p className="mt-1 font-display text-base text-muted" dir="rtl" lang="he">
            {suggested.hebrewTitle}
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{moment.cue}</p>
        </button>
      ) : null}

      {PRAYER_CATEGORIES.map((cat) => {
        const items = PRAYERS.filter((p) => p.category === cat.id);
        return (
          <section key={cat.id} className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-lg text-fg">{cat.label}</h2>
            <ul className="mt-2 flex flex-col">
              {items.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    className="flex w-full items-baseline justify-between gap-3 py-3 text-left"
                  >
                    <span className="font-sans text-sm text-fg">{p.title}</span>
                    <span className="font-display text-sm text-muted" dir="rtl" lang="he">
                      {p.hebrewTitle}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function PrayerDetail({ prayer, onBack }: { prayer: Prayer; onBack: () => void }) {
  const verses = useMemo(() => {
    const he = prayer.hebrew.split("\n");
    const tr = prayer.transliteration.split("\n");
    const en = prayer.english.split("\n");
    if (he.length > 1 && he.length === tr.length && he.length === en.length) {
      return he.map((hebrew, i) => ({ hebrew, transliteration: tr[i], english: en[i] }));
    }
    return null;
  }, [prayer]);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2">
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
        >
          All prayers
        </button>
        <SaveButton
          item={{ id: `prayer:${prayer.id}`, kind: "prayer", title: prayer.title, subtitle: prayer.hebrewTitle }}
        />
      </div>
      <header>
        <h1 className="font-display text-3xl text-fg">{prayer.title}</h1>
        <p className="mt-2 text-2xl text-muted" dir="rtl" lang="he">
          {prayer.hebrewTitle}
        </p>
      </header>
      <div className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
        {verses ? (
          <ol className="flex flex-col gap-5">
            {verses.map((v, i) => (
              <li key={`${prayer.id}-${i}`}>
                <p className="type-kicker">Hebrew</p>
                <p className="type-prayer mt-1 text-fg" dir="rtl" lang="he">
                  {v.hebrew}
                </p>
                <p className="type-kicker mt-4">Transliteration</p>
                <p className="type-translit mt-1">{v.transliteration}</p>
                <p className="type-kicker mt-4">Translation</p>
                <p className="type-translation mt-1 text-fg">{v.english}</p>
              </li>
            ))}
          </ol>
        ) : (
          <>
            <p className="type-kicker">Hebrew</p>
            <p className="type-prayer mt-1 whitespace-pre-line text-fg" dir="rtl" lang="he">
              {prayer.hebrew}
            </p>
            <p className="type-kicker mt-5">Transliteration</p>
            <p className="type-translit mt-1">{prayer.transliteration}</p>
            <p className="type-kicker mt-5">Translation</p>
            <p className="type-translation mt-1 text-fg">{prayer.english}</p>
          </>
        )}
      </div>
      <section>
        <h2 className="font-display text-lg text-fg">When do I say this?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{prayer.when}</p>
      </section>
      <section>
        <h2 className="font-display text-lg text-fg">Why / context</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{prayer.why}</p>
        <div className="mt-3">
          <SourceLine>{prayer.source}</SourceLine>
        </div>
      </section>
      <PronounceButton
        audioSrc={prayer.audioSrc}
        hebrew={prayer.hebrew}
        transliteration={prayer.transliteration}
      />
    </div>
  );
}
