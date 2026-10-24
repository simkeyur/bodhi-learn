// How practice moves a student through each standard. Pure, unit tested.
//
// Each standard keeps its own difficulty (1-3): three fully right in a row goes up, two misses in a row
// goes down. "Mastered" means mostly right lately, at the hardest difficulty.

import type { Standard } from '../content/types.ts';

export const RECENT = 10; // how many recent results count towards mastery
export const DAILY_GOAL = 15; // questions a day

export interface SkillRecord {
  seen: number;
  correct: number; // fully right
  recent: number[]; // last RECENT results, each 0..1 (score / points)
  difficulty: 1 | 2 | 3;
  streak: number;
  misses: number;
  lastSeen: string; // yyyy-mm-dd
}

export const newRecord = (): SkillRecord => ({ seen: 0, correct: 0, recent: [], difficulty: 1, streak: 0, misses: 0, lastSeen: '' });

export function recordResult(r: SkillRecord, fraction: number, day: string): SkillRecord {
  const right = fraction >= 1;
  const recent = [...r.recent, Math.max(0, Math.min(1, fraction))].slice(-RECENT);
  let { difficulty, streak, misses } = r;
  if (right) {
    streak += 1; misses = 0;
    if (streak >= 3 && difficulty < 3) { difficulty = (difficulty + 1) as SkillRecord['difficulty']; streak = 0; }
  } else {
    misses += 1; streak = 0;
    if (misses >= 2 && difficulty > 1) { difficulty = (difficulty - 1) as SkillRecord['difficulty']; misses = 0; }
  }
  return { seen: r.seen + 1, correct: r.correct + (right ? 1 : 0), recent, difficulty, streak, misses, lastSeen: day };
}

export type MasteryState = 'new' | 'learning' | 'close' | 'mastered';

export const MASTERY_LABEL: Record<MasteryState, string> = {
  new: 'Not started',
  learning: 'Learning',
  close: 'Almost there',
  mastered: 'Mastered',
};

export const recentAverage = (r: SkillRecord): number =>
  r.recent.length ? r.recent.reduce((s, v) => s + v, 0) / r.recent.length : 0;

export function masteryOf(r: SkillRecord | undefined): MasteryState {
  if (!r || r.seen === 0) return 'new';
  const avg = recentAverage(r);
  if (r.recent.length >= 6 && avg >= 0.8 && r.difficulty === 3) return 'mastered';
  if (r.recent.length >= 4 && avg >= 0.7) return 'close';
  return 'learning';
}

// 0..1 for progress bars: mastered counts fully, close mostly, learning a little
export const masteryValue = (r: SkillRecord | undefined): number =>
  ({ new: 0, learning: 0.25, close: 0.65, mastered: 1 })[masteryOf(r)];

// ---------- Today's plan ----------
// Readiness standards weigh most on the test, so weak readiness standards come first, then anything not
// started, then what hasn't been practised for the longest. Mastered standards come back now and then.

const daysBetween = (a: string, b: string): number =>
  a && b ? Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000) : 999;

export function planStandards(standards: readonly Standard[], skills: Record<string, SkillRecord>, today: string, count: number): string[] {
  const rank = (s: Standard): number => {
    const r = skills[s.code];
    const state = masteryOf(r);
    const stale = r?.lastSeen ? Math.min(30, daysBetween(r.lastSeen, today)) : 0;
    const weight = s.kind === 'readiness' ? 1.5 : 1;
    const base = { new: 50, learning: 90, close: 60, mastered: 10 }[state];
    return (base + stale) * weight;
  };
  return [...standards]
    .sort((a, b) => rank(b) - rank(a) || a.code.localeCompare(b.code, undefined, { numeric: true }))
    .slice(0, count)
    .map((s) => s.code);
}

// ---------- Days and streaks ----------

export const dayKey = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Consecutive days with any practice, ending today (or yesterday, so the streak isn't lost before today's practice)
export function streakDays(days: Record<string, number>, today: Date): number {
  const d = new Date(today);
  if (!days[dayKey(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days[dayKey(d)]) { n += 1; d.setDate(d.getDate() - 1); }
  return n;
}
