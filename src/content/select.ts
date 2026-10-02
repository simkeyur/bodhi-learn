// Pure helpers for validating packs and choosing the next question. No React or browser APIs.

import { SUBJECTS, type Subject } from '../firebase/schema.ts';
import { makeMathQuestion } from './mathGen.ts';
import type { Question, QuestionPack } from './types';
import type { Rng } from '../data/logicData.ts';

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

export function isQuestion(v: unknown): v is Question {
  if (!isRecord(v)) return false;
  const { id, topic, level, prompt, choices, answer, explain } = v;
  return typeof id === 'string' && typeof topic === 'string' && typeof prompt === 'string' && prompt.length > 0
    && typeof level === 'number' && Number.isInteger(level) && level >= 1 && level <= 10
    && Array.isArray(choices) && choices.length >= 2 && choices.length <= 5 && choices.every((c) => typeof c === 'string' && c.length > 0)
    && new Set(choices).size === choices.length
    && typeof answer === 'number' && Number.isInteger(answer) && answer >= 0 && answer < choices.length
    && (explain === undefined || typeof explain === 'string');
}

// Anything coming from the network is checked before it replaces what we already have
export function readPack(v: unknown): QuestionPack | null {
  if (!isRecord(v)) return null;
  const { subject, version, title, questions } = v;
  if (!SUBJECTS.includes(subject as Subject) || typeof version !== 'number' || typeof title !== 'string') return null;
  if (!Array.isArray(questions)) return null;
  const good = questions.filter(isQuestion);
  if (good.length === 0) return null;
  return { subject: subject as Subject, version, title, questions: good };
}

const pickOne = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];

// Mostly the child's own level, sometimes one step either side, so a round has some variety.
// Questions seen recently (`avoid`) are skipped unless there is nothing else.
export function pickFromPack(allQuestions: readonly Question[], level: number, avoid: ReadonlySet<string>, rng: Rng, topics?: readonly string[]): Question | null {
  // A game's topic group; if it has no questions at all, fall back to the whole pack rather than nothing
  const inGroup = topics ? allQuestions.filter((q) => topics.includes(q.topic)) : allQuestions;
  const questions = inGroup.length ? inGroup : allQuestions;
  const tiers = [
    questions.filter((q) => q.level === level),
    questions.filter((q) => Math.abs(q.level - level) <= 1),
    questions.filter((q) => Math.abs(q.level - level) <= 2),
    [...questions],
  ];
  const wantNeighbour = rng() < 0.3;
  const order = wantNeighbour ? [1, 0, 2, 3] : [0, 1, 2, 3];
  for (const t of order) {
    const fresh = tiers[t].filter((q) => !avoid.has(q.id));
    if (fresh.length) return pickOne(rng, fresh);
  }
  for (const t of order) if (tiers[t].length) return pickOne(rng, tiers[t]);
  return null;
}

export function nextQuestion(
  subject: Subject,
  level: number,
  packs: Partial<Record<Subject, QuestionPack>>,
  avoid: ReadonlySet<string>,
  rng: Rng = Math.random,
  topics?: readonly string[],
): Question | null {
  if (subject === 'math') return makeMathQuestion(level, rng, topics);
  const pack = packs[subject];
  return pack ? pickFromPack(pack.questions, level, avoid, rng, topics) : null;
}

// How the level moves: four right in a row goes up a level; two wrong in a row goes down one.
export interface LevelState { level: number; streak: number; misses: number }
export function adjustLevel(s: LevelState, correct: boolean, min = 1, max = 10): LevelState {
  if (correct) {
    const streak = s.streak + 1;
    return streak >= 4 ? { level: Math.min(max, s.level + 1), streak: 0, misses: 0 } : { level: s.level, streak, misses: 0 };
  }
  const misses = s.misses + 1;
  return misses >= 2 ? { level: Math.max(min, s.level - 1), streak: 0, misses: 0 } : { level: s.level, streak: 0, misses };
}
