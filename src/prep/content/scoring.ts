// Scoring and validation for items. Pure, unit tested.
//
// Partial credit follows TEA's STAAR redesign scoring guide for math: a 2-point inline item gives a point per
// correct drop-down, a 2-point multiselect gives a point per correct pick, and a multipart item gives a point
// per correct part. Recheck against the SST scoring guide when TEA publishes it.

import type { Answer, Block, Choice, Figure, Item, Part } from './types.ts';

export const emptyAnswer = (item: Item): Answer =>
  item.parts.map((p) => (p.type === 'inline' ? p.blanks.map(() => -1) : []));

// How many picks a multiselect part needs ("Select TWO")
export const needed = (part: Part): number => (part.type === 'inline' ? part.blanks.length : part.correct.length);

export const partComplete = (part: Part, a: number[] = []): boolean =>
  part.type === 'inline' ? a.length === part.blanks.length && a.every((v) => v >= 0) : a.length === needed(part);

export const answerComplete = (item: Item, answer: Answer): boolean => item.parts.every((p, i) => partComplete(p, answer[i]));

// Units right in one part: 1 for a right mc, one per right pick or drop-down otherwise
export function partEarned(part: Part, a: number[] = []): number {
  if (part.type === 'inline') return part.blanks.filter((b, i) => a[i] === b.correct).length;
  if (part.type === 'mc') return a.length === 1 && a[0] === part.correct[0] ? 1 : 0;
  return a.filter((i) => part.correct.includes(i)).length;
}

export const partRight = (part: Part, a: number[] = []): boolean => partEarned(part, a) === needed(part) && (a.length === needed(part));

export function score(item: Item, answer: Answer): number {
  if (item.parts.length > 1) return item.parts.filter((p, i) => partRight(p, answer[i])).length;
  const [part] = item.parts;
  if (item.points === 1) return partRight(part, answer[0]) ? 1 : 0;
  return Math.min(item.points, partEarned(part, answer[0]));
}

// ---------- Validation ----------
// Anything an item needs to be playable and scored fairly. Returns the problems found (empty when fine).

const blockText = (b: Block): string => (b.kind === 'text' ? b.text : b.kind === 'figure' ? b.alt : [...b.head, ...b.rows.flat()].join(' '));
const choiceKey = (c: Choice): string => `${c.text ?? ''}|${c.figure ? JSON.stringify(c.figure) : ''}`;
const bad = (s: string) => /NaN|undefined|Infinity|null/.test(s);

function figureProblems(f: Figure): string[] {
  const out: string[] = [];
  if (f.kind === 'barGraph' && f.categories.length !== f.values.length) out.push('bar graph categories and values differ in length');
  if (f.kind === 'dotPlot' && f.labels.length !== f.counts.length) out.push('dot plot labels and counts differ in length');
  if (f.kind === 'coordGrid' && f.points.some((p) => p.x < (f.min ?? 0) || p.y < (f.min ?? 0) || p.x > f.max || p.y > f.max)) out.push('point off the grid');
  if (f.kind === 'numberLine' && (f.point < f.from || f.point > f.to)) out.push('number line point out of range');
  if (f.kind === 'protractor' && (f.ray1 < 0 || f.ray1 > 180 || f.ray2 < 0 || f.ray2 > 180 || f.ray1 === f.ray2)) out.push('protractor angles out of range or equal');
  if (f.kind === 'anglePair' && (f.a1 <= 0 || f.a2 <= 0 || f.a1 + f.a2 > 180)) out.push('angle pair invalid');
  if (f.kind === 'boxPlot' && !(f.min <= f.q1 && f.q1 <= f.median && f.median <= f.q3 && f.q3 <= f.max)) out.push('box plot values out of order');
  if (f.kind === 'histogram' && f.intervals.length !== f.frequencies.length) out.push('histogram intervals and frequencies differ in length');
  if (f.kind === 'circleGraph' && f.slices.length < 2) out.push('circle graph needs at least 2 slices');
  if (f.kind === 'circle' && !f.radius && !f.diameter) out.push('circle needs radius or diameter');
  return out;
}

export function itemProblems(item: Item): string[] {
  const out: string[] = [];
  const multipart = item.type === 'multipart';
  if (multipart ? item.parts.length !== 2 : item.parts.length !== 1) out.push('wrong number of parts');
  if (!multipart && item.parts[0] && item.parts[0].type !== item.type) out.push('part type does not match item type');
  if (multipart && item.points !== 2) out.push('multipart items are worth 2 points');
  if (!item.explain) out.push('no explanation');

  const texts = [...item.stem.map(blockText), item.explain];
  for (const b of item.stem) if (b.kind === 'figure') out.push(...figureProblems(b.figure));

  item.parts.forEach((p, n) => {
    if (multipart && p.type === 'multiselect' && p.correct.length !== 2) out.push(`part ${n + 1}: multiselect inside a multipart must need two picks`);
    if (p.prompt) texts.push(...p.prompt.map(blockText));
    if (p.type === 'inline') {
      const used = p.segments.filter((s) => typeof s !== 'string').map((s) => (s as { blank: number }).blank);
      if (used.length !== p.blanks.length || used.some((b, i) => b !== i)) out.push(`part ${n + 1}: blanks and segments do not line up`);
      for (const b of p.blanks) {
        if (b.options.length < 2 || new Set(b.options).size !== b.options.length) out.push(`part ${n + 1}: drop-down options must be 2+ and distinct`);
        if (b.correct < 0 || b.correct >= b.options.length) out.push(`part ${n + 1}: drop-down answer out of range`);
        texts.push(...b.options);
      }
      texts.push(...p.segments.filter((s): s is string => typeof s === 'string'));
    } else {
      if (p.choices.length < 3 || p.choices.length > 6) out.push(`part ${n + 1}: needs 3 to 6 choices`);
      if (new Set(p.choices.map(choiceKey)).size !== p.choices.length) out.push(`part ${n + 1}: duplicate choices`);
      if (p.choices.some((c) => !c.text && !c.figure)) out.push(`part ${n + 1}: empty choice`);
      if (p.choices.some((c) => c.figure && !c.alt)) out.push(`part ${n + 1}: figure choice without alt text`);
      if (p.type === 'mc' && p.correct.length !== 1) out.push(`part ${n + 1}: multiple choice needs exactly one answer`);
      if (p.type === 'multiselect' && (p.correct.length < 2 || p.correct.length >= p.choices.length)) out.push(`part ${n + 1}: multiselect needs 2+ answers and some wrong choices`);
      if (new Set(p.correct).size !== p.correct.length || p.correct.some((c) => c < 0 || c >= p.choices.length)) out.push(`part ${n + 1}: answer index out of range`);
      for (const c of p.choices) {
        texts.push(c.text ?? '', c.why ?? '');
        if (c.figure) out.push(...figureProblems(c.figure));
      }
    }
  });

  // Points must match the scorable units: a 2-point single part needs exactly two of them
  if (!multipart) {
    const units = item.parts[0] ? needed(item.parts[0]) : 0;
    if (item.points === 2 && units !== 2) out.push('2-point items need exactly two picks or two drop-downs');
    if (item.points === 1 && item.parts[0]?.type !== 'mc' && units !== 1) out.push('1-point items need one pick or one drop-down');
  }
  if (texts.some(bad)) out.push('text contains NaN/undefined');
  return out;
}

// The right answers, as an Answer (used to show worked examples)
export const answerKey = (item: Item): Answer =>
  item.parts.map((p) => (p.type === 'inline' ? p.blanks.map((b) => b.correct) : [...p.correct]));
