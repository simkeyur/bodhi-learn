// The content model: standards, questions ("items") and the figures they draw.
// Pure types, shared by the app, the generators and the tests.
//
// Question types follow the SST (2027-28 on), which keeps four of STAAR's types:
//   mc          multiple choice, 1 point
//   multiselect "Select TWO correct answers", 2 points
//   inline      drop-down menus inside a sentence, 1 point per menu (1 or 2 points)
//   multipart   Part A and Part B, each one of the above, 1 point each (2 points). Reading only.

export type Subject = 'math' | 'rla';

export interface Strand {
  id: number;
  title: string; // our short name
  full: string; // TEA's reporting strand name
}

export interface Standard {
  code: string; // TEKS student expectation: '5.4F' for math, 'rla:5.9D.i' for reading (see shortCode)
  strand: number;
  kind: 'readiness' | 'supporting';
  title: string; // short, student-friendly
  text: string; // the TEKS wording
}

// ---------- Rich content ----------
// Text may contain {3/4} for a fraction (2{1/3} is a mixed number) and **bold**.

export type Figure =
  | { kind: 'area'; rows: number; cols: number } // 10x10 grid: `rows` tenths times `cols` tenths, overlap shaded darker
  | { kind: 'decimalGrids'; hundredths: number } // a decimal shown on hundred grids, one grid per whole
  | { kind: 'fractionBars'; bars: { parts: number; shaded: number; label?: string }[] }
  | { kind: 'coordGrid'; max: number; min?: number; points: { x: number; y: number; label?: string }[] }
  | { kind: 'barGraph'; title: string; categories: string[]; values: number[]; step: number; axis: string }
  | { kind: 'dotPlot'; title: string; labels: string[]; counts: number[]; axis: string }
  | { kind: 'prism'; l: number; w: number; h: number }
  | { kind: 'numberLine'; from: number; to: number; step: number; decimals: number; point: number; pointLabel?: string }
  | { kind: 'protractor'; ray1: number; ray2: number }
  | { kind: 'anglePair'; a1: number; a2: number; label1?: string; label2?: string }
  | { kind: 'symmetry'; shape: 'rectangle' | 'square' | 'rhombus' | 'trapezoid' | 'equilateralTriangle' | 'isoscelesTriangle' | 'scaleneTriangle' | 'hexagon'; line: 'v' | 'h' | 'd1' | 'd2' }
  | { kind: 'boxPlot'; title?: string; min: number; q1: number; median: number; q3: number; max: number; from?: number; to?: number; step?: number; axis?: string }
  | { kind: 'histogram'; title?: string; intervals: string[]; frequencies: number[]; step?: number; axis?: string }
  | { kind: 'circleGraph'; title?: string; slices: { label: string; pct: number }[] }
  | { kind: 'circle'; radius?: number; diameter?: number; label?: string }
  | { kind: 'rightTriangle'; a: number; b: number; c?: number; showC?: boolean; aLabel?: string; bLabel?: string; cLabel?: string }
  | { kind: 'scatterPlot'; title?: string; points: { x: number; y: number }[]; trendLine?: { m: number; b: number }; xLabel?: string; yLabel?: string; xMax?: number; yMax?: number }
  | { kind: 'tenFrame'; count: number; frames?: 1 | 2 }
  | { kind: 'baseTenBlocks'; hundreds?: number; tens?: number; ones?: number }
  | { kind: 'coins'; coins: ('penny' | 'nickel' | 'dime' | 'quarter')[] }
  | { kind: 'analogClock'; hour: number; minute: number }
  | { kind: 'shape2D'; shape: 'circle' | 'triangle' | 'rectangle' | 'square' | 'rhombus' | 'trapezoid' | 'pentagon' | 'hexagon' | 'octagon'; label?: string }
  | { kind: 'shape3D'; shape: 'cube' | 'sphere' | 'cylinder' | 'cone' | 'rectangularPrism' | 'triangularPrism'; label?: string };

export type Block =
  | { kind: 'text'; text: string }
  | { kind: 'figure'; figure: Figure; alt: string }
  | { kind: 'table'; head: string[]; rows: string[][]; caption?: string };

export interface Choice {
  text?: string;
  figure?: Figure;
  alt?: string; // describes a figure choice for screen readers
  why?: string; // shown when a student picks this wrong choice
}

// ---------- Questions ----------

export interface ChoicePart {
  type: 'mc' | 'multiselect';
  prompt?: Block[];
  choices: Choice[];
  correct: number[]; // mc: one index; multiselect: every right index (the student must pick this many)
}

// A sentence with drop-downs: segments are text or the index of a blank
export interface InlinePart {
  type: 'inline';
  prompt?: Block[];
  segments: (string | { blank: number })[];
  blanks: { options: string[]; correct: number }[];
}

export type Part = ChoicePart | InlinePart;
export type ItemType = 'mc' | 'multiselect' | 'inline' | 'multipart';

export interface Item {
  id: string;
  grade: number;
  subject: Subject;
  standard: string;
  type: ItemType;
  points: 1 | 2;
  difficulty: 1 | 2 | 3;
  stem: Block[];
  parts: Part[]; // one part, except multipart which has two (Part A, Part B)
  explain: string; // the worked answer, shown after checking
  cites?: number[]; // reading: the paragraphs (or lines, or sentences) the question is about
}

// What a student has chosen: one array per part.
//   mc: [index]  ·  multiselect: the indexes picked  ·  inline: one option index per blank, -1 when empty
export type Answer = number[][];

// ---------- Lessons ----------
// A short walkthrough shown before practising a skill: what you'll learn, the words, and a few big ideas.
// The worked example and the "your turn" question are generated, so they come from the practice generators.

export interface LessonIdea {
  title: string;
  text: string; // same markup as questions: {3/4} fractions, **bold**
  example?: string; // a line set apart, e.g. "3.472 = 3 + 0.4 + 0.07 + 0.002"
  figure?: Figure;
  alt?: string;
}

export interface Lesson {
  code: string; // the standard it teaches
  goal: string; // "You'll learn to ..."
  words: { term: string; meaning: string }[];
  ideas: LessonIdea[];
  // Reading skills that come from passages, not generators: a short passage and a question to watch worked,
  // then another to try (the walkthrough's last two steps)
  samples?: [LessonSample, LessonSample];
}

export interface LessonSample { passage: Passage; item: Item }

// ---------- Reading ----------
// Reading practice is authored, not generated: a passage (or a pair of them) with questions written for it.
// Revising and editing drafts are sets too, with numbered sentences instead of paragraphs.

export type Genre =
  | 'fiction' | 'literaryNonfiction' | 'poetry' | 'drama'
  | 'informational' | 'argumentative' | 'persuasive' | 'correspondence';

// Numbering follows the real test: paragraphs in prose, lines in poems, speeches in plays, (sentences) in drafts.
export type PassageBlock =
  | { kind: 'p'; text: string } // a numbered paragraph
  | { kind: 'heading'; text: string } // a section heading (not numbered)
  | { kind: 'line'; text: string; stanzaEnd?: boolean } // a numbered poem line; stanzaEnd leaves a gap after it
  | { kind: 'speech'; speaker: string; text: string } // a numbered line of dialogue in a play
  | { kind: 'direction'; text: string } // a stage direction (not numbered)
  | { kind: 'sentences'; sentences: string[] } // a paragraph of a draft; each sentence numbered (1), (2)...
  | { kind: 'sidebar'; title: string; text: string } // a text feature, for questions about features
  | { kind: 'figure'; figure: Figure; alt: string; caption?: string };

export interface Passage {
  id: string;
  title: string;
  genre: Genre;
  author?: string; // only for public-domain texts; our own passages have none
  source?: string; // where a public-domain text first appeared, e.g. 'A Child's Garden of Verses, 1885'
  blocks: PassageBlock[];
}

export interface ReadingSet {
  id: string; // 'g5-fiction-lighthouse'
  grade: number;
  kind: 'reading' | 'editing';
  title: string; // shown in lists; a paired set's shared topic
  intro: string; // the direction line, like the test's "Read the selection and choose the best answer..."
  passages: Passage[]; // one, or two for a paired set
  items: Item[];
}

// One essay prompt (the 6-point extended constructed response). For now the child checks their own essay
// against a kid-friendly version of TEA's rubric; nothing is scored automatically.
export interface EssayPrompt {
  id: string;
  grade: number;
  setId: string; // the passage set the essay is about
  mode: 'informational' | 'argumentative' | 'correspondence';
  prompt: string; // what to write
  checklist: { title: string; items: string[] }[]; // the rubric as yes/no checks
}
