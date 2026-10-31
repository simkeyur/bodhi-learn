// Passage numbering and checks, shared by the reader screen and the tests. Pure.
//
// Numbering follows the test: prose paragraphs are 1, 2, 3...; poems number every line; plays number each
// speech; drafts number every sentence (1), (2)... across paragraphs. Headings, stage directions, sidebars and
// figures are not numbered.

import { itemProblems } from '../scoring.ts';
import type { Genre, Passage, PassageBlock, ReadingSet } from '../types.ts';

// How genres are named on screen
export const GENRE_LABEL: Record<Genre, string> = {
  fiction: 'Fiction', literaryNonfiction: 'Literary nonfiction', poetry: 'Poetry', drama: 'Drama',
  informational: 'Informational', argumentative: 'Argumentative', persuasive: 'Persuasive', correspondence: 'Letter',
};

export const isNumbered = (b: PassageBlock): boolean => b.kind === 'p' || b.kind === 'line' || b.kind === 'speech';

// The number each block starts at (sentences: the first sentence's number), or null when not numbered
export function numbering(passage: Passage): (number | null)[] {
  let n = 0;
  return passage.blocks.map((b) => {
    if (b.kind === 'sentences') { const first = n + 1; n += b.sentences.length; return first; }
    if (isNumbered(b)) return ++n;
    return null;
  });
}

export const numberedCount = (passage: Passage): number =>
  passage.blocks.reduce((n, b) => n + (b.kind === 'sentences' ? b.sentences.length : isNumbered(b) ? 1 : 0), 0);

// What the numbers are called on screen and in questions
export const unitName = (passage: Passage): 'paragraph' | 'line' | 'sentence' =>
  passage.blocks.some((b) => b.kind === 'sentences') ? 'sentence' : passage.blocks.some((b) => b.kind === 'line' || b.kind === 'speech') ? 'line' : 'paragraph';

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

export function wordCount(passage: Passage): number {
  return passage.blocks.reduce((n, b) => {
    if (b.kind === 'sentences') return n + b.sentences.reduce((m, s) => m + words(s), 0);
    if (b.kind === 'figure') return n + words(b.caption ?? '');
    if (b.kind === 'sidebar') return n + words(b.title) + words(b.text);
    return n + words(b.text);
  }, 0);
}

// The text of a passage's numbered units, in order (a sentence per number in drafts)
function units(passage: Passage): string[] {
  return passage.blocks.flatMap((b) => (b.kind === 'sentences' ? b.sentences : isNumbered(b) ? [(b as { text: string }).text] : []));
}

// A rough reading level (Flesch-Kincaid grade) of a passage's numbered text. Good for comparing passages and
// grades, not an exact grade. Syllables are estimated from vowel groups.
export function readingLevel(passage: Passage): number {
  const text = units(passage).join(' ');
  const words = text.match(/[A-Za-z']+/g) ?? [];
  const sentences = Math.max(1, (text.match(/[.!?]+(\s|$)/g) ?? []).length);
  const syllables = words.reduce((n, w) => n + Math.max(1, (w.toLowerCase().replace(/e$/, '').match(/[aeiouy]+/g) ?? []).length), 0);
  return 0.39 * (words.length / sentences) + 11.8 * (syllables / Math.max(1, words.length)) - 15.59;
}

const plainText = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ +/g, ' ').trim();

// Our length targets per grade (docs/READING_PLAN.md section 2). Poems count lines instead of words.
export function lengthBand(grade: number, kind: 'prose' | 'poem' | 'draft'): [number, number] {
  if (kind === 'poem') return [8, 48];
  if (kind === 'draft') return grade <= 2 ? [40, 200] : grade <= 5 ? [150, 450] : [200, 550];
  if (grade <= 2) return [60, 260];
  if (grade === 3) return [250, 650];
  if (grade <= 5) return [350, 950];
  return [550, 1250];
}

// Everything a set needs to be fair and playable. Returns the problems found (empty when fine).
export function setProblems(set: ReadingSet): string[] {
  const out: string[] = [];
  const [min, max] = set.kind === 'editing' ? [5, 7] : [6, 9];
  if (set.items.length < min || set.items.length > max) out.push(`${set.items.length} questions; a ${set.kind} set needs ${min}–${max}`);
  if (!set.passages.length || (set.kind === 'editing' && set.passages.length !== 1)) out.push('wrong number of passages');
  if (set.passages.length > 2) out.push('at most two passages (a paired set)');

  for (const p of set.passages) {
    const poem = p.blocks.some((b) => b.kind === 'line');
    const kind = set.kind === 'editing' ? 'draft' : poem ? 'poem' : 'prose';
    const size = poem ? numberedCount(p) : wordCount(p);
    const band = lengthBand(set.grade, kind);
    // Each passage of a pair is shorter than a single passage, as on the test
    const [lo, hi] = set.passages.length === 2 && kind === 'prose' ? band.map((n) => Math.round(n * 0.6)) : band;
    if (size < lo || size > hi) out.push(`${p.id}: ${size} ${poem ? 'lines' : 'words'}, want ${lo}–${hi}`);
    if (set.kind === 'editing' && unitName(p) !== 'sentence') out.push(`${p.id}: a draft numbers sentences`);
    if (p.author && !p.source) out.push(`${p.id}: a public-domain text needs its source`);
    // Leftovers from drafting that would show on screen
    for (const b of p.blocks) {
      const text = 'text' in b ? b.text : b.kind === 'sentences' ? b.sentences.join(' ') : '';
      if (/\[(Diagram|Figure|Technical|Illustration|Image)\b|\\n|-{4,}/.test(text)) out.push(`${p.id}: placeholder text: ${text.slice(0, 50)}`);
    }
  }

  // Citations point into one passage: the first, or the one named by `passage` in a paired set
  for (const it of set.items) {
    out.push(...itemProblems(it).map((e) => `${it.id}: ${e}`));
    if (it.subject !== 'rla' || it.grade !== set.grade) out.push(`${it.id}: wrong subject or grade`);
    // A quotation labelled "(paragraph 4)" must really be in paragraph 4 of one of the passages
    const words = JSON.stringify({ stem: it.stem, parts: it.parts, explain: it.explain }).replace(/\\"/g, '"');
    for (const [, quote, n] of words.matchAll(/"([^"]{12,}?)"\s*\((?:paragraph|line|sentence) (\d+)\)/g)) {
      const start = plainText(quote.split('...')[0]).slice(0, 40);
      if (!set.passages.some((p) => plainText(units(p)[Number(n) - 1] ?? '').includes(start))) out.push(`${it.id}: quote isn't in unit ${n}: ${quote.slice(0, 50)}`);
    }
    const cited = set.passages[it.passage ?? 0];
    if (!cited) out.push(`${it.id}: passage ${it.passage} doesn't exist`);
    else for (const c of it.cites ?? []) if (c < 1 || c > numberedCount(cited)) out.push(`${it.id}: cites ${c}, which doesn't exist in ${cited.id}`);
    if (set.kind === 'editing' && !it.cites?.length) out.push(`${it.id}: an editing question must cite its sentence`);
    for (const p of it.parts) {
      if (p.type === 'mc' && p.choices.length !== 4) out.push(`${it.id}: multiple choice needs 4 choices`);
      if (p.type === 'multiselect' && (p.choices.length !== 5 || p.correct.length !== 2)) out.push(`${it.id}: multiselect needs 5 choices, 2 right`);
    }
  }
  return out;
}
