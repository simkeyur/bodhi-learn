// What we store in Firestore at users/{uid} (see firestore.rules, which enforces the same shape).

export type AgeBracket = 'pre-k' | 'kindergarten' | 'grade1';

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
  ageBracket: AgeBracket;
  speechEnabled: boolean;
  voiceSpeed: number;
  stars: number;
  unlockedStickers: string[];
  placedStickers: PlacedSticker[];
  botSolved: string[]; // ids of the Code the Bot levels the child has solved
}

export const SCHEMA_VERSION = 1;
export const MAX_PLACED_STICKERS = 150;
export const MAX_BOT_SOLVED = 60;

export const DEFAULT_STATE: SyncedState = {
  kidName: 'Bodhi',
  ageBracket: 'kindergarten',
  speechEnabled: true,
  voiceSpeed: 0.85,
  stars: 5, // welcome stars
  unlockedStickers: ['st1'],
  placedStickers: [{ id: 'init-1', stickerId: 'st1', x: 50, y: 50 }],
  botSolved: [],
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
    profile: { kidName: state.kidName, ageBracket: state.ageBracket },
    settings: { speechEnabled: state.speechEnabled, voiceSpeed: state.voiceSpeed },
    progress: {
      stars: state.stars,
      unlockedStickers: state.unlockedStickers,
      placedStickers: state.placedStickers.slice(-MAX_PLACED_STICKERS),
      botSolved: state.botSolved.slice(0, MAX_BOT_SOLVED),
    },
  };
}

// Defensive read: anything missing or malformed falls back to a default rather than breaking the app
export function fromDocData(data: unknown): SyncedState {
  const d = isRecord(data) ? data : {};
  const profile = isRecord(d.profile) ? d.profile : {};
  const settings = isRecord(d.settings) ? d.settings : {};
  const progress = isRecord(d.progress) ? d.progress : {};

  const stickers = Array.isArray(progress.placedStickers) ? progress.placedStickers : [];
  const unlocked = Array.isArray(progress.unlockedStickers) ? progress.unlockedStickers : DEFAULT_STATE.unlockedStickers;

  return {
    kidName: typeof profile.kidName === 'string' && profile.kidName.trim() ? profile.kidName.slice(0, 40) : DEFAULT_STATE.kidName,
    ageBracket: AGE_BRACKETS.includes(profile.ageBracket as AgeBracket) ? (profile.ageBracket as AgeBracket) : DEFAULT_STATE.ageBracket,
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
