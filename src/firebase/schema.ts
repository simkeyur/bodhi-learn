// What we store in Firestore at users/{uid} (see firestore.rules, which enforces the same shape).

export type AgeBracket = 'pre-k' | 'kindergarten' | 'grade1';

// The app serves ages 4 to 14. `age` is the source of truth; the three-step AgeBracket
// is derived from it for the early-years games that only know Pre-K / K / 1st grade, and
// `band` drives the look and tone of the home screen.
export const MIN_AGE = 4;
export const MAX_AGE = 14;
export type AgeBand = 'little' | 'explorer' | 'pro';

export const clampAge = (n: number) => Math.min(MAX_AGE, Math.max(MIN_AGE, Math.round(n)));
export const bandForAge = (age: number): AgeBand => (age <= 6 ? 'little' : age <= 10 ? 'explorer' : 'pro');
export const bracketForAge = (age: number): AgeBracket => (age <= 4 ? 'pre-k' : age <= 6 ? 'kindergarten' : 'grade1');
// Documents written before exact ages existed only have a bracket
export const ageForBracket = (b: AgeBracket): number => (b === 'pre-k' ? 4 : b === 'kindergarten' ? 5 : 7);

// Quiz subjects, each with its own adaptive difficulty level (1 easiest .. 10 hardest)
export const SUBJECTS = ['math', 'reading', 'logic', 'science'] as const;
export type Subject = (typeof SUBJECTS)[number];
export const MIN_LEVEL = 1;
export const MAX_LEVEL = 10;
export interface SkillRecord {
  level: number;
  answered: number;
  correct: number;
}
export type Skills = Record<Subject, SkillRecord>;
// A child of this age starts around this level (age 4 -> 1 ... age 13+ -> 10)
export const levelForAge = (age: number) => Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, age - 3));
export const defaultSkills = (age: number): Skills =>
  Object.fromEntries(SUBJECTS.map((s) => [s, { level: levelForAge(age), answered: 0, correct: 0 }])) as Skills;

export interface PlacedSticker {
  id: string;
  stickerId: string;
  x: number;
  y: number;
}

// Everything that follows a learner between devices. (The kid-facing mute button is
// deliberately per-device and not part of this.)
export interface SyncedState {
  kidName: string;
  age: number; // 4..14
  speechEnabled: boolean;
  voiceSpeed: number;
  stars: number;
  unlockedStickers: string[];
  placedStickers: PlacedSticker[];
  botSolved: string[]; // ids of the Code the Bot levels the child has solved
  skills: Skills; // quiz level and tallies per subject
}

export const SCHEMA_VERSION = 1; // still 1: age and skills are optional additions
export const MAX_PLACED_STICKERS = 150;
export const MAX_BOT_SOLVED = 60;

export const DEFAULT_STATE: SyncedState = {
  kidName: 'Explorer',
  age: 5,
  speechEnabled: true,
  voiceSpeed: 0.85,
  stars: 5, // welcome stars
  unlockedStickers: ['st1'],
  placedStickers: [{ id: 'init-1', stickerId: 'st1', x: 50, y: 50 }],
  botSolved: [],
  skills: defaultSkills(5),
};

const AGE_BRACKETS: AgeBracket[] = ['pre-k', 'kindergarten', 'grade1'];
const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

const uniqueStrings = (value: unknown): string[] =>
  Array.isArray(value) ? [...new Set(value.filter((v): v is string => typeof v === 'string'))] : [];

// Solved levels only ever grow, so merging two copies is a union (nothing gets lost between devices)
export const unionIds = (a: string[], b: string[]): string[] => [...new Set([...a, ...b])];

// Firestore document body (updatedAt is added by the writer)
export function toDocData(state: SyncedState) {
  return {
    schemaVersion: SCHEMA_VERSION,
    // ageBracket stays in the document so older app versions keep working
    profile: { kidName: state.kidName, ageBracket: bracketForAge(state.age), age: state.age },
    settings: { speechEnabled: state.speechEnabled, voiceSpeed: state.voiceSpeed },
    progress: {
      stars: state.stars,
      unlockedStickers: state.unlockedStickers,
      placedStickers: state.placedStickers.slice(-MAX_PLACED_STICKERS),
      botSolved: state.botSolved.slice(0, MAX_BOT_SOLVED),
      skills: state.skills,
    },
  };
}

const toCount = (v: unknown) => (typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= 1_000_000 ? v : 0);

export function readSkills(value: unknown, age: number): Skills {
  const src = isRecord(value) ? value : {};
  const out = defaultSkills(age);
  for (const subject of SUBJECTS) {
    const r = src[subject];
    if (!isRecord(r)) continue;
    const level = typeof r.level === 'number' && Number.isFinite(r.level) ? Math.round(r.level) : out[subject].level;
    out[subject] = {
      level: Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, level)),
      answered: toCount(r.answered),
      correct: Math.min(toCount(r.correct), toCount(r.answered)),
    };
  }
  return out;
}

// Defensive read: anything missing or malformed falls back to a default rather than breaking the app
export function fromDocData(data: unknown): SyncedState {
  const d = isRecord(data) ? data : {};
  const profile = isRecord(d.profile) ? d.profile : {};
  const settings = isRecord(d.settings) ? d.settings : {};
  const progress = isRecord(d.progress) ? d.progress : {};

  const stickers = Array.isArray(progress.placedStickers) ? progress.placedStickers : [];
  const unlocked = Array.isArray(progress.unlockedStickers) ? progress.unlockedStickers : DEFAULT_STATE.unlockedStickers;

  const bracket = AGE_BRACKETS.includes(profile.ageBracket as AgeBracket) ? (profile.ageBracket as AgeBracket) : undefined;
  const age = typeof profile.age === 'number' && Number.isFinite(profile.age)
    ? clampAge(profile.age)
    : bracket ? ageForBracket(bracket) : DEFAULT_STATE.age;

  return {
    kidName: typeof profile.kidName === 'string' && profile.kidName.trim() ? profile.kidName.slice(0, 40) : DEFAULT_STATE.kidName,
    age,
    skills: readSkills(progress.skills, age),
    speechEnabled: typeof settings.speechEnabled === 'boolean' ? settings.speechEnabled : DEFAULT_STATE.speechEnabled,
    voiceSpeed: typeof settings.voiceSpeed === 'number' && settings.voiceSpeed >= 0.5 && settings.voiceSpeed <= 1.5
      ? settings.voiceSpeed
      : DEFAULT_STATE.voiceSpeed,
    stars: typeof progress.stars === 'number' && Number.isInteger(progress.stars) && progress.stars >= 0 ? progress.stars : DEFAULT_STATE.stars,
    unlockedStickers: unlocked.filter((s): s is string => typeof s === 'string'),
    // Older documents have no botSolved field: that just means nothing solved yet
    botSolved: uniqueStrings(progress.botSolved).slice(0, MAX_BOT_SOLVED),
    placedStickers: stickers
      .filter((s): s is PlacedSticker =>
        isRecord(s) && typeof s.id === 'string' && typeof s.stickerId === 'string' && typeof s.x === 'number' && typeof s.y === 'number')
      .map((s) => ({ id: s.id, stickerId: s.stickerId, x: s.x, y: s.y })),
  };
}

// Stable string used to tell whether local and cloud copies differ
export const stateKey = (state: SyncedState) => JSON.stringify(toDocData(state));
