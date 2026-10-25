// Helpers for writing reading questions by hand, so a set's file reads like the questions themselves.
// Choices are listed in the order shown; `answer` is the index of the right one. A choice can carry a `why`,
// shown when a student picks it: write it as [text, why]. Pure.

import type { Block, Choice, ChoicePart, InlinePart, Item, Passage, ReadingSet } from '../types.ts';

export type Authored = Omit<Item, 'id' | 'grade' | 'subject' | 'difficulty'>;
type C = string | [text: string, why: string];

const choice = (c: C): Choice => (typeof c === 'string' ? { text: c } : { text: c[0], why: c[1] });
const stemOf = (stem: string | string[]): Block[] => (Array.isArray(stem) ? stem : [stem]).map((text) => ({ kind: 'text', text }));

interface Common { standard: string; explain: string; cites?: number[]; passage?: number }

// Multiple choice: 4 choices, 1 point
export const mcq = (o: Common & { stem: string | string[]; choices: C[]; answer: number }): Authored => ({
  standard: o.standard, type: 'mc', points: 1, stem: stemOf(o.stem), explain: o.explain, cites: o.cites, passage: o.passage,
  parts: [{ type: 'mc', choices: o.choices.map(choice), correct: [o.answer] }],
});

// Multiselect: 5 choices, select two, 2 points
export const msq = (o: Common & { stem: string | string[]; choices: C[]; answers: [number, number] }): Authored => ({
  standard: o.standard, type: 'multiselect', points: 2, stem: stemOf(o.stem), explain: o.explain, cites: o.cites, passage: o.passage,
  parts: [{ type: 'multiselect', choices: o.choices.map(choice), correct: [...o.answers].sort((a, b) => a - b) }],
});

// Inline choice: a sentence with one or two drop-downs, a point each. A blank is { options, answer }.
type Seg = string | { options: string[]; answer: number };
export const inq = (o: Common & { stem: string | string[]; sentence: Seg[] }): Authored => {
  const blanks: InlinePart['blanks'] = [];
  const segments: InlinePart['segments'] = o.sentence.map((s) => {
    if (typeof s === 'string') return s;
    blanks.push({ options: s.options, correct: s.answer });
    return { blank: blanks.length - 1 };
  });
  return {
    standard: o.standard, type: 'inline', points: blanks.length === 2 ? 2 : 1, stem: stemOf(o.stem), explain: o.explain, cites: o.cites, passage: o.passage,
    parts: [{ type: 'inline', segments, blanks }],
  };
};

// Two-part question: Part A answers, Part B asks for the evidence. 2 points, one per part.
interface PartSpec { prompt: string; choices: C[]; answer?: number; answers?: [number, number] }
const partOf = (p: PartSpec): ChoicePart => ({
  type: p.answers ? 'multiselect' : 'mc',
  prompt: stemOf(p.prompt),
  choices: p.choices.map(choice),
  correct: p.answers ? [...p.answers].sort((a, b) => a - b) : [p.answer ?? -1],
});
export const twoq = (o: Common & { stem?: string; a: PartSpec; b: PartSpec }): Authored => ({
  standard: o.standard, type: 'multipart', points: 2, stem: o.stem ? stemOf(o.stem) : [], explain: o.explain, cites: o.cites, passage: o.passage,
  parts: [partOf(o.a), partOf(o.b)],
});

// A set with its questions numbered: ids are '<set id>-q1', '-q2'...
export function makeSet(o: Omit<ReadingSet, 'items'> & { items: Authored[] }): ReadingSet {
  return {
    ...o,
    items: o.items.map((it, i) => ({ ...it, id: `${o.id}-q${i + 1}`, grade: o.grade, subject: 'rla', difficulty: 2 })),
  };
}

// A walkthrough sample: a short passage and one question about it
export const sample = (passage: Passage, item: Authored, grade: number) => ({
  passage,
  item: { ...item, id: `${passage.id}-sample`, grade, subject: 'rla' as const, difficulty: 1 as const },
});
