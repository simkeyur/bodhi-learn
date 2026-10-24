// Test prep progress on this device: mastery per standard and questions answered per day.
// The learner's name and grade come from Bodhi Learn's profile (context/AppContext). Kept in localStorage
// for now; syncing it with the signed-in account is still to do (docs/STAAR_PIVOT.md).

import { useSyncExternalStore } from 'react';
import { dayKey, newRecord, recordResult, type SkillRecord } from './mastery.ts';

export interface PrepProgress {
  skills: Record<string, SkillRecord>; // by standard code
  days: Record<string, number>; // yyyy-mm-dd -> questions answered
}

const KEY = 'bodhi_prep_v1';
const EMPTY: PrepProgress = { skills: {}, days: {} };

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

// Defensive read: anything malformed falls back to empty progress rather than breaking the app
function load(): PrepProgress {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (!isRecord(raw)) return EMPTY;
    const skills = isRecord(raw.skills) ? (raw.skills as Record<string, SkillRecord>) : {};
    const days = isRecord(raw.days) ? (raw.days as Record<string, number>) : {};
    return { skills, days };
  } catch {
    return EMPTY;
  }
}

let state = load();
const listeners = new Set<() => void>();

function set(next: PrepProgress) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: keep working for this session
  }
  listeners.forEach((l) => l());
}

export const learner = {
  get: () => state,
  // `fraction` is the score as a share of the points (0, 0.5 or 1)
  record: (standard: string, fraction: number, now = new Date()) => {
    const day = dayKey(now);
    set({
      skills: { ...state.skills, [standard]: recordResult(state.skills[standard] ?? newRecord(), fraction, day) },
      days: { ...state.days, [day]: (state.days[day] ?? 0) + 1 },
    });
  },
  resetProgress: () => set(EMPTY),
};

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => { listeners.delete(l); };
};

export const useLearner = (): PrepProgress => useSyncExternalStore(subscribe, () => state);
