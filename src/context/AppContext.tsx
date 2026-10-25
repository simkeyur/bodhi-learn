import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';
import { useCloudSync, type SyncStatus } from '../firebase/useCloudSync';
import type { CloudUser } from '../firebase/cloud';
import { syncContent } from '../content/store';
import { learner as prepLearner } from '../prep/learner/store';
import {
  DEFAULT_STATE,
  MAX_BOT_SOLVED,
  MAX_SOLVED,
  bandForAge,
  bracketForAge,
  clampAge,
  clampGrade,
  effectiveGrade,
  gradeForAge,
  GRADE_ASK_MIN_AGE,
  hasPrep,
  startsInPrep,
  defaultSkills,
  levelForAge,
  readSkills,
  unionIds,
  type AgeBand,
  type AgeBracket,
  type Skills,
  type Subject,
  type SyncedState,
} from '../firebase/schema';

export type { AgeBand, AgeBracket, Skills, Subject };

interface CloudAccount {
  user: CloudUser | null;
  restored: boolean; // the signed-in account already had saved progress, which this device loaded
  authReady: boolean;
  status: SyncStatus;
  error: string | null;
  preload: () => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<boolean>;
}

interface AppContextType {
  celebrate: () => void; // confetti and a fanfare when a child finishes something
  botSolved: string[];
  markBotSolved: (levelId: string) => boolean; // true the first time a level is solved
  solved: string[];
  markSolved: (puzzleId: string) => boolean; // true the first time a puzzle is solved
  onboarded: boolean; // the welcome questions (age, name) have been answered
  completeOnboarding: (name: string) => void;
  age: number; // 4..14
  setAge: (age: number) => void;
  grade: number | null; // school grade from age 6 (null for younger children)
  setGrade: (grade: number) => void;
  isPrep: boolean; // showing Bodhi Prep (Texas test prep) instead of the Bodhi games
  canPrep: boolean; // Bodhi Prep is available for this grade (grade 1 and up), so the Play / Prep switch shows
  setMode: (mode: 'play' | 'prep') => void; // the switch: remembered on this device
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

const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage full or unavailable: the app still works for this session
  }
};

const ONBOARDED_KEY = 'bodhi_onboarded';

// A device counts as set up if it finished the welcome questions, or if it was used before they
// existed (older versions stored an age under one of these keys)
const wasOnboarded = (): boolean => {
  try {
    return localStorage.getItem(ONBOARDED_KEY) === 'true'
      || localStorage.getItem('bodhi_age') !== null
      || localStorage.getItem('bodhi_exact_age') !== null;
  } catch {
    return false;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [onboarded, setOnboarded] = useState<boolean>(wasOnboarded);

  const [botSolved, setBotSolved] = useState<string[]>(() =>
    readStored('bodhi_bot_solved', (r) => parseJson(r, isStringArray), DEFAULT_STATE.botSolved));

  const [solved, setSolved] = useState<string[]>(() =>
    readStored('bodhi_solved', (r) => parseJson(r, isStringArray), DEFAULT_STATE.solved));

  // Exact age. Devices that stored one of the old three brackets are converted on first read.
  const [age, setAgeState] = useState<number>(() =>
    readStored('bodhi_exact_age', (r) => { const n = parseInt(r, 10); return Number.isInteger(n) ? clampAge(n) : undefined; },
      readStored<number>('bodhi_age', (r) => (r === 'pre-k' ? 4 : r === 'grade1' ? 7 : r === 'kindergarten' ? 5 : undefined), DEFAULT_STATE.age)));

  // The Play / Prep switch (per device). Unset means "pick by grade".
  const [modeChoice, setModeChoice] = useState<string>(() => readStored('bodhi_mode', (r) => r, ''));

  // 0 until asked; see effectiveGrade
  const [gradeChoice, setGradeChoice] = useState<number>(() =>
    readStored('bodhi_grade', (r) => { const n = parseInt(r, 10); return Number.isInteger(n) ? clampGrade(n) : undefined; }, DEFAULT_STATE.grade));

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

  // Nothing is written to this device until the welcome questions are answered, so a visitor who
  // leaves halfway doesn't get a made-up age saved for them
  useEffect(() => { if (onboarded) store(ONBOARDED_KEY, 'true'); }, [onboarded]);
  useEffect(() => { if (onboarded) store('bodhi_bot_solved', JSON.stringify(botSolved)); }, [onboarded, botSolved]);
  useEffect(() => { if (onboarded) store('bodhi_solved', JSON.stringify(solved)); }, [onboarded, solved]);
  useEffect(() => { if (onboarded) store('bodhi_exact_age', String(age)); }, [onboarded, age]);
  useEffect(() => { if (onboarded) store('bodhi_grade', String(gradeChoice)); }, [onboarded, gradeChoice]);
  useEffect(() => { if (onboarded) store('bodhi_skills', JSON.stringify(skills)); }, [onboarded, skills]);
  useEffect(() => { if (onboarded) store('bodhi_kid_name', kidName); }, [onboarded, kidName]);

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
    // Reaching the age where grade matters starts from the usual grade for that age
    if (a >= GRADE_ASK_MIN_AGE && !gradeChoice) setGradeChoice(gradeForAge(a));
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
  const setGrade = (g: number) => setGradeChoice(clampGrade(g));
  const grade = effectiveGrade(age, gradeChoice);
  // Grade 1 and up have Bodhi Prep; grade 4 and up open in it until the switch is used on this device
  const canPrep = hasPrep(age, gradeChoice);
  const isPrep = canPrep && (modeChoice ? modeChoice === 'prep' : startsInPrep(age, gradeChoice));
  const setMode = (mode: 'play' | 'prep') => {
    setModeChoice(mode);
    store('bodhi_mode', mode);
  };

  // Cloud sync (Firestore) for signed-in accounts; guests just use this device
  const synced = useMemo<SyncedState>(
    () => ({ kidName, age, grade: gradeChoice, speechEnabled, voiceSpeed, botSolved, solved, skills }),
    [kidName, age, gradeChoice, speechEnabled, voiceSpeed, botSolved, solved, skills],
  );

  const applyCloudState = (next: SyncedState) => {
    setKidNameState(next.kidName);
    setAgeState(next.age);
    setGradeChoice(next.grade);
    setSkills(next.skills);
    setSpeechEnabled(next.speechEnabled);
    setVoiceSpeed(next.voiceSpeed);
    setBotSolved(next.botSolved);
    setSolved(next.solved);
  };

  // Signing out wipes this device's progress, so the next person is asked who they are again
  const handleSignedOut = () => {
    try {
      // The persistence effects pause while not onboarded, so clear the old family's copy here
      ['bodhi_bot_solved', 'bodhi_solved', 'bodhi_age', 'bodhi_exact_age', 'bodhi_grade', 'bodhi_mode', 'bodhi_skills', 'bodhi_kid_name', ONBOARDED_KEY]
        .forEach((k) => localStorage.removeItem(k));
    } catch { /* ignore */ }
    prepLearner.resetProgress();
    setModeChoice('');
    setOnboarded(false);
  };

  const cloud = useCloudSync(synced, applyCloudState, handleSignedOut);

  // Signing in to an account that already has progress skips the welcome questions
  useEffect(() => {
    if (cloud.restored) setOnboarded(true);
  }, [cloud.restored]);

  const completeOnboarding = (name: string) => {
    const trimmed = name.trim().slice(0, 40);
    if (trimmed) setKidNameState(trimmed);
    setOnboarded(true);
  };

  // Pull any newer learning content from Firestore into this device (no sign-in needed)
  useEffect(() => {
    const run = () => { void syncContent(); };
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) idle(run); else window.setTimeout(run, 1500);
    window.addEventListener('online', run);
    return () => window.removeEventListener('online', run);
  }, []);

  const celebrate = () => {
    sound.playStarFanfare();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#FBBF24', '#4ADE80', '#FB7185', '#C084FC'],
    });
  };

  // Returns true only the first time a level is solved
  const markBotSolved = (levelId: string): boolean => {
    if (botSolved.includes(levelId)) return false;
    setBotSolved((prev) => unionIds(prev, [levelId]).slice(0, MAX_BOT_SOLVED));
    return true;
  };

  // Returns true only the first time a puzzle is solved
  const markSolved = (puzzleId: string): boolean => {
    if (solved.includes(puzzleId)) return false;
    setSolved((prev) => unionIds(prev, [puzzleId]).slice(0, MAX_SOLVED));
    return true;
  };


  return (
    <AppContext.Provider
      value={{
        celebrate,
        botSolved,
        markBotSolved,
        solved,
        markSolved,
        onboarded,
        completeOnboarding,
        age,
        setAge,
        grade,
        setGrade,
        isPrep,
        canPrep,
        setMode,
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
