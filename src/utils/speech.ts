// Speech engine: plays pre-recorded studio clips (public/audio) and falls back to
// browser SpeechSynthesis only when a clip is missing.
//
// Callers describe *what* to say as a list of clip URLs (see `clip` helpers below)
// instead of free text, so there is no guessing about which recording to play.

const EXCLAMATIONS = [
  'woohoo', 'yay', 'hurray', 'yippee', 'super',
  'awesome', 'bingo', 'high_five', 'you_rock', 'shining_star',
];

const RETRY_PHRASES = ['oops_try_again', 'almost_there', 'keep_trying'];

// Studio clips were recorded at a gentle ~0.85x pace, so this "voice speed"
// plays them unchanged. Other speeds scale relative to it.
export const DEFAULT_VOICE_SPEED = 0.85;

// Tiny silent WAV used to unlock the shared <audio> element on iOS.
const SILENT_WAV =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

export const wordKey = (word: string) => word.toUpperCase().replace(/[^A-Z]/g, '');

export const clip = {
  letter: (letter: string) => `/audio/letters/${letter.toUpperCase()}.mp3`,
  phonics: (letter: string) => `/audio/letters/phonics_${letter.toUpperCase()}.mp3`,
  number: (n: number) => `/audio/numbers/${n}.mp3`,
  word: (word: string) => `/audio/words/${wordKey(word)}.mp3`,
  spelling: (word: string) => `/audio/words/spelling_${wordKey(word)}.mp3`,
  phrase: (id: string) => `/audio/phrases/${id}.mp3`,
  math: (id: string) => `/audio/math/${id}.mp3`,
  sentence: (id: string) => `/audio/sentences/${id}.mp3`,
  storyPage: (storyId: string, pageIndex: number) => `/audio/stories/${storyId}_p${pageIndex}.mp3`,
  storyTitle: (storyId: string) => `/audio/stories/${storyId}_title.mp3`,
  readAlong: (sentenceId: string) => `/audio/readalong/${sentenceId}.mp3`,
  cheer: () => `/audio/exclamations/${pick(EXCLAMATIONS)}.mp3`,
  retry: () => `/audio/phrases/${pick(RETRY_PHRASES)}.mp3`,
};

// Novelty macOS voices that sound broken to kids
const NOVELTY_VOICES = /albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox/i;

interface SayOptions {
  // Spoken with SpeechSynthesis if any clip fails to load
  fallback?: string;
  // Called once everything has been said (or immediately if voice is off).
  // Never called if the speech is interrupted by another say()/stop().
  onEnd?: () => void;
}

class KidSpeechEngine {
  public speechRate = DEFAULT_VOICE_SPEED;
  public speechEnabled = true;
  public muted = false;

  private audio: HTMLAudioElement | null = null;
  private generation = 0;
  private unlocked = false;
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window === 'undefined') return;
    // Unlock audio on the very first touch so later programmatic playback works on iOS
    const unlock = () => this.unlock();
    window.addEventListener('pointerdown', unlock, { once: true, capture: true });
    if ('speechSynthesis' in window) {
      this.voice = this.pickVoice();
      window.speechSynthesis.addEventListener?.('voiceschanged', () => {
        this.voice = this.pickVoice();
      });
    }
  }

  private get canSpeak() {
    return this.speechEnabled && !this.muted && typeof window !== 'undefined';
  }

  private get playbackRate() {
    return Math.min(1.3, Math.max(0.7, this.speechRate / DEFAULT_VOICE_SPEED));
  }

  private getAudio() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.preload = 'auto';
    }
    return this.audio;
  }

  private unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    const audio = this.getAudio();
    if (!audio.paused) return;
    audio.src = SILENT_WAV;
    audio.play().catch(() => {});
  }

  private pickVoice(): SpeechSynthesisVoice | null {
    const voices = window.speechSynthesis.getVoices().filter(
      (v) => v.lang.toLowerCase().startsWith('en') && !NOVELTY_VOICES.test(v.name)
    );
    return (
      voices.find((v) => /natural|premium|enhanced/i.test(v.name)) ||
      voices.find((v) => /samantha|google us english|aria|jenny/i.test(v.name)) ||
      voices.find((v) => v.lang === 'en-US') ||
      voices[0] ||
      null
    );
  }

  // Say a sequence of clips back to back. Interrupts anything currently playing.
  public say(clips: string[], { fallback, onEnd }: SayOptions = {}) {
    const gen = this.interrupt();
    const finish = () => {
      if (gen === this.generation) onEnd?.();
    };

    if (!this.canSpeak) {
      queueMicrotask(finish);
      return;
    }

    const playAt = (i: number) => {
      if (gen !== this.generation) return;
      if (i >= clips.length) {
        finish();
        return;
      }
      this.playClip(clips[i], gen, () => playAt(i + 1), () => {
        if (fallback) this.speakWithSynth(fallback, gen, finish);
        else playAt(i + 1);
      });
    };
    playAt(0);
  }

  // Speak arbitrary text with the device voice (for words without a studio clip)
  public speakText(text: string, onEnd?: () => void) {
    const gen = this.interrupt();
    const finish = () => {
      if (gen === this.generation) onEnd?.();
    };
    if (!this.canSpeak) {
      queueMicrotask(finish);
      return;
    }
    this.speakWithSynth(text, gen, finish);
  }

  public stop() {
    this.interrupt();
  }

  private interrupt() {
    this.generation += 1;
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return this.generation;
  }

  private playClip(url: string, gen: number, onDone: () => void, onFail: () => void) {
    const audio = this.getAudio();
    audio.onended = () => {
      if (gen === this.generation) onDone();
    };
    audio.onerror = () => {
      if (gen === this.generation) onFail();
    };
    audio.src = url;
    // Setting src resets the rate in some browsers, so apply it afterwards
    audio.defaultPlaybackRate = this.playbackRate;
    audio.playbackRate = this.playbackRate;
    audio.preservesPitch = true;
    audio.play().catch((err: DOMException) => {
      if (gen !== this.generation) return;
      // Autoplay blocked: skip silently rather than falling back to another blocked voice
      if (err.name === 'NotAllowedError') onDone();
      else onFail();
    });
  }

  private speakWithSynth(text: string, gen: number, onDone: () => void) {
    if (!('speechSynthesis' in window)) {
      onDone();
      return;
    }
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = Math.min(1.2, 0.9 * this.playbackRate);
    utterance.pitch = 1.1;
    if (this.voice) utterance.voice = this.voice;
    utterance.onend = () => {
      if (gen === this.generation) onDone();
    };
    utterance.onerror = () => {
      if (gen === this.generation) onDone();
    };
    // Chrome drops an utterance queued in the same tick as cancel()
    if (synth.speaking || synth.pending) {
      setTimeout(() => gen === this.generation && synth.speak(utterance), 80);
    } else {
      synth.speak(utterance);
    }
  }
}

export const speech = new KidSpeechEngine();
