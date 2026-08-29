let ctx: AudioContext | null = null;
let timer: number | null = null;

function context(): AudioContext | null {
  const Ctor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  return ctx;
}

function beep() {
  const audio = context();
  if (!audio) return;
  void audio.resume();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "sine";
  osc.frequency.value = 880;
  gain.gain.value = 0.0001;
  osc.connect(gain);
  gain.connect(audio.destination);
  const now = audio.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  osc.start(now);
  osc.stop(now + 0.3);
}

export function startAlarm() {
  if (timer != null) return;
  beep();
  timer = window.setInterval(beep, 900);
}

export function stopAlarm() {
  if (timer != null) {
    window.clearInterval(timer);
    timer = null;
  }
}
