"use client";

import { Square, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { speakPrayer, speechAvailable, stopSpeech, type SpeechHandle } from "@/lib/speak";
import { cn } from "@/lib/cn";

export function PronounceButton({
  audioSrc,
  hebrew,
  transliteration,
}: {
  audioSrc: string | null;
  hebrew: string;
  transliteration: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleRef = useRef<SpeechHandle | null>(null);
  const canSpeak = speechAvailable();

  useEffect(() => {
    return () => {
      handleRef.current?.stop();
      stopSpeech();
      audioRef.current?.pause();
    };
  }, []);

  function stopAll() {
    handleRef.current?.stop();
    handleRef.current = null;
    stopSpeech();
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
  }

  async function playRecording(src: string) {
    const audio = audioRef.current ?? new Audio();
    audioRef.current = audio;
    audio.src = src;
    audio.onended = () => setPlaying(false);
    audio.onerror = () => setPlaying(false);
    await audio.play();
    setPlaying(true);
    setNote("A human recitation. The melody in shul may differ.");
  }

  async function playRecitative() {
    if (!canSpeak) {
      setNote("This browser cannot speak the prayer aloud.");
      return;
    }
    const handle = await speakPrayer({ hebrew, transliteration });
    handleRef.current = handle;
    setPlaying(true);
    setNote("A slow recitation, like davening. The tune in shul will differ. A reading aid, not a hazzan.");
    await handle.done;
    if (handleRef.current === handle) {
      handleRef.current = null;
      setPlaying(false);
    }
  }

  async function toggle() {
    if (playing) {
      stopAll();
      return;
    }
    try {
      if (audioSrc) {
        await playRecording(audioSrc);
        return;
      }
      await playRecitative();
    } catch {
      stopAll();
      setNote("The prayer could not be heard. Try again, and turn the volume up.");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => void toggle()}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 font-sans text-sm shadow-[var(--shadow-border)]",
          playing ? "bg-fg text-bg" : "bg-raised text-fg",
        )}
      >
        {playing ? <Square className="size-3.5 fill-current" /> : <Volume2 className="size-4" />}
        {playing ? "Stop" : "Hear the prayer"}
      </button>
      {note ? <p className="font-sans text-xs leading-relaxed text-subtle">{note}</p> : null}
    </div>
  );
}
