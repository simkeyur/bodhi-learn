// The content model: standards, questions ("items") and the figures they draw.
// Pure types, shared by the app, the generators and the tests.
//
// Question types follow the SST (2027-28 on), which keeps four of STAAR's types:
//   mc          multiple choice, 1 point
//   multiselect "Select TWO correct answers", 2 points
//   inline      drop-down menus inside a sentence, 1 point per menu (1 or 2 points)
//   multipart   Part A and Part B, each one of the above, 1 point each (2 points)

export type Subject = 'math' | 'rla';

export interface Strand {
  id: number;
  title: string; // our short name
  full: string; // TEA's reporting strand name
}

export interface Standard {
  code: string; // TEKS student expectation, e.g. '5.4F'
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
  | { kind: 'coordGrid'; max: number; points: { x: number; y: number; label?: string }[] }
  | { kind: 'barGraph'; title: string; categories: string[]; values: number[]; step: number; axis: string }
  | { kind: 'dotPlot'; title: string; labels: string[]; counts: number[]; axis: string }
  | { kind: 'prism'; l: number; w: number; h: number }
  | { kind: 'numberLine'; from: number; to: number; step: number; decimals: number; point: number };

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
}

// What a student has chosen: one array per part.
//   mc: [index]  ·  multiselect: the indexes picked  ·  inline: one option index per blank, -1 when empty
export type Answer = number[][];
