import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';
import { useCloudSync, type SyncStatus } from '../firebase/useCloudSync';
import type { CloudUser } from '../firebase/cloud';
import { syncContent } from '../content/store';
import {
  DEFAULT_STATE,
  MAX_BOT_SOLVED,
  MAX_PLACED_STICKERS,
  bandForAge,
  bracketForAge,
  clampAge,
  defaultSkills,
  levelForAge,
  readSkills,
  unionIds,
  type AgeBand,
  type AgeBracket,
  type PlacedSticker,
  type Skills,
  type Subject,
  type SyncedState,
} from '../firebase/schema';

export type { AgeBand, AgeBracket, PlacedSticker, Skills, Subject };

interface CloudAccount {
  user: CloudUser | null;
  authReady: boolean;
  status: SyncStatus;
  error: string | null;
  preload: () => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<boolean>;
}

interface AppContextType {
  stars: number;
  addStars: (count: number) => void;
  unlockedStickers: string[];
  unlockSticker: (stickerId: string, cost: number) => boolean;
  placedStickers: PlacedSticker[];
  placeSticker: (stickerId: string, x: number, y: number) => void;
  removePlacedSticker: (id: string) => void;
  botSolved: string[];
  markBotSolved: (levelId: string) => boolean; // true the first time a level is solved
  age: number; // 4..14
  setAge: (age: number) => void;
  ageBand: AgeBand; // little 4-6, explorer 7-10, pro 11-14
  ageBracket: AgeBracket; // derived from age, for the early-years games
  skills: Skills;
  recordAnswer: (subject: Subject, correct: boolean, newLevel: number) => void;
  kidName: string;
  setKidName: (name: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  speechEnabled: boolean;
  setSpeechEnabled: (enabled: boolean) => void;
  voiceSpeed: number;
  setVoiceSpeed: (speed: number) => void;
  triggerCelebration: () => void;
  cloud: CloudAccount;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// localStorage is the working copy on this device (and the whole story for guests)
const readStored = <T,>(key: string, parse: (raw: string) => T | undefined, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const value = parse(raw);
    return value === undefined ? fallback : value;
  } catch {
    return fallback;
  }
};

const parseJson = <T,>(raw: string, ok: (v: unknown) => v is T): T | undefined => {
  const v: unknown = JSON.parse(raw);
  return ok(v) ? v : undefined;
};

const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string');
const isStickerArray = (v: unknown): v is PlacedSticker[] =>
  Array.isArray(v) && v.every((s) => s && typeof s.id === 'string' && typeof s.stickerId === 'string' && typeof s.x === 'number' && typeof s.y === 'number');

const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage full or unavailable: the app still works for this session
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stars, setStars] = useState<number>(() =>
    readStored('bodhi_stars', (r) => { const n = parseInt(r, 10); return Number.isInteger(n) && n >= 0 ? n : undefined; }, DEFAULT_STATE.stars));

  const [unlockedStickers, setUnlockedStickers] = useState<string[]>(() =>
    readStored('bodhi_stickers', (r) => parseJson(r, isStringArray), DEFAULT_STATE.unlockedStickers));

  const [placedStickers, setPlacedStickers] = useState<PlacedSticker[]>(() =>
    readStored('bodhi_placed_stickers', (r) => parseJson(r, isStickerArray), DEFAULT_STATE.placedStickers));

  const [botSolved, setBotSolved] = useState<string[]>(() =>
    readStored('bodhi_bot_solved', (r) => parseJson(r, isStringArray), DEFAULT_STATE.botSolved));

  // Exact age. Devices that stored one of the old three brackets are converted on first read.
  const [age, setAgeState] = useState<number>(() =>
    readStored('bodhi_exact_age', (r) => { const n = parseInt(r, 10); return Number.isInteger(n) ? clampAge(n) : undefined; },
      readStored<number>('bodhi_age', (r) => (r === 'pre-k' ? 4 : r === 'grade1' ? 7 : r === 'kindergarten' ? 5 : undefined), DEFAULT_STATE.age)));

  const [skills, setSkills] = useState<Skills>(() =>
    readStored('bodhi_skills', (r) => readSkills(JSON.parse(r), age), defaultSkills(age)));

  const [kidName, setKidNameState] = useState<string>(() =>
    readStored('bodhi_kid_name', (r) => r.trim() || undefined, DEFAULT_STATE.kidName));

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    const enabled = readStored('bodhi_sound', (r) => r === 'true', true);
    sound.soundEnabled = enabled;
    speech.muted = !enabled;
    return enabled;
  });

  const [speechEnabled, setSpeechEnabledState] = useState<boolean>(() => {
    const enabled = readStored('bodhi_speech', (r) => r === 'true', DEFAULT_STATE.speechEnabled);
    speech.speechEnabled = enabled;
    return enabled;
  });

  const [voiceSpeed, setVoiceSpeedState] = useState<number>(() => {
    const speed = readStored('bodhi_voice_speed', (r) => { const n = parseFloat(r); return n >= 0.5 && n <= 1.5 ? n : undefined; }, DEFAULT_STATE.voiceSpeed);
    speech.speechRate = speed;
    return speed;
  });

  useEffect(() => store('bodhi_stars', stars.toString()), [stars]);
  useEffect(() => store('bodhi_stickers', JSON.stringify(unlockedStickers)), [unlockedStickers]);
  useEffect(() => store('bodhi_placed_stickers', JSON.stringify(placedStickers)), [placedStickers]);
  useEffect(() => store('bodhi_bot_solved', JSON.stringify(botSolved)), [botSolved]);
  useEffect(() => store('bodhi_exact_age', String(age)), [age]);
  useEffect(() => store('bodhi_skills', JSON.stringify(skills)), [skills]);
  useEffect(() => store('bodhi_kid_name', kidName), [kidName]);

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    sound.soundEnabled = enabled;
    // The kid-facing mute button silences the voice too
    speech.muted = !enabled;
    if (!enabled) speech.stop();
    store('bodhi_sound', String(enabled));
  };

  const setSpeechEnabled = (enabled: boolean) => {
    setSpeechEnabledState(enabled);
    speech.speechEnabled = enabled;
    if (!enabled) speech.stop();
    store('bodhi_speech', String(enabled));
  };

  const setVoiceSpeed = (speed: number) => {
    setVoiceSpeedState(speed);
    speech.speechRate = speed;
    store('bodhi_voice_speed', String(speed));
  };

  const ageBracket = bracketForAge(age);
  const ageBand = bandForAge(age);

  // Changing the age also moves a subject's level if the child hasn't really started it yet
  const setAge = (next: number) => {
    const a = clampAge(next);
    setAgeState(a);
    setSkills((prev) => {
      const out = { ...prev };
      for (const s of Object.keys(out) as Subject[]) {
        if (out[s].answered < 5) out[s] = { ...out[s], level: levelForAge(a) };
      }
      return out;
    });
  };

  const recordAnswer = (subject: Subject, correct: boolean, newLevel: number) =>
    setSkills((prev) => ({
      ...prev,
      [subject]: {
        level: newLevel,
        answered: prev[subject].answered + 1,
        correct: prev[subject].correct + (correct ? 1 : 0),
      },
    }));
  const setKidName = (name: string) => setKidNameState(name);

  // Cloud sync (Firestore) for signed-in parents; guests just use this device
  const synced = useMemo<SyncedState>(
    () => ({ kidName, age, speechEnabled, voiceSpeed, stars, unlockedStickers, placedStickers, botSolved, skills }),
    [kidName, age, speechEnabled, voiceSpeed, stars, unlockedStickers, placedStickers, botSolved, skills],
  );

  const applyCloudState = (next: SyncedState) => {
    setKidNameState(next.kidName);
    setAgeState(next.age);
    setSkills(next.skills);
    setSpeechEnabled(next.speechEnabled);
    setVoiceSpeed(next.voiceSpeed);
    setStars(next.stars);
    setUnlockedStickers(next.unlockedStickers);
    setPlacedStickers(next.placedStickers);
    setBotSolved(next.botSolved);
  };

  const cloud = useCloudSync(synced, applyCloudState);

  // Pull any newer learning content from Firestore into this device (no sign-in needed)
  useEffect(() => {
    const run = () => { void syncContent(); };
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) idle(run); else window.setTimeout(run, 1500);
    window.addEventListener('online', run);
    return () => window.removeEventListener('online', run);
  }, []);

  const triggerCelebration = () => {
    sound.playStarFanfare();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#FBBF24', '#4ADE80', '#FB7185', '#C084FC'],
    });
  };

  const addStars = (count: number) => {
    setStars((prev) => prev + count);
    triggerCelebration();
  };

  const unlockSticker = (stickerId: string, cost: number): boolean => {
    if (stars < cost || unlockedStickers.includes(stickerId)) {
      return false;
    }
    setStars((prev) => prev - cost);
    setUnlockedStickers((prev) => [...prev, stickerId]);
    sound.playSuccess();
    return true;
  };

  const placeSticker = (stickerId: string, x: number, y: number) => {
    const newPlaced: PlacedSticker = {
      id: 'pl-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      stickerId,
      x,
      y,
    };
    // The board keeps the most recent stickers so the saved progress stays small
    setPlacedStickers((prev) => [...prev, newPlaced].slice(-MAX_PLACED_STICKERS));
    sound.playPop(650);
  };

  // Returns true only the first time, so replaying a solved level doesn't pay out stars again
  const markBotSolved = (levelId: string): boolean => {
    if (botSolved.includes(levelId)) return false;
    setBotSolved((prev) => unionIds(prev, [levelId]).slice(0, MAX_BOT_SOLVED));
    return true;
  };

  const removePlacedSticker = (id: string) => {
    setPlacedStickers((prev) => prev.filter((p) => p.id !== id));
    sound.playPop(400);
  };

  return (
    <AppContext.Provider
      value={{
        stars,
        addStars,
        unlockedStickers,
        unlockSticker,
        placedStickers,
        placeSticker,
        removePlacedSticker,
        botSolved,
        markBotSolved,
        age,
        setAge,
        ageBand,
        ageBracket,
        skills,
        recordAnswer,
        kidName,
        setKidName,
        soundEnabled,
        setSoundEnabled,
        speechEnabled,
        setSpeechEnabled,
        voiceSpeed,
        setVoiceSpeed,
        triggerCelebration,
        cloud,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
