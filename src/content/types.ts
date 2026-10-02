// Learning content shared by the app, the Firestore seed script and the tests.
// Pure types only: no React or browser APIs.

import type { Subject } from '../firebase/schema';

export interface Question {
  id: string;
  topic: string;
  level: number; // 1 (about age 4) .. 10 (about age 14)
  prompt: string;
  choices: string[]; // 3 or 4 options
  answer: number; // index into choices
  explain?: string; // shown after a wrong answer
}

// What is stored in Firestore at content_packs/{subject} and bundled as src/content/packs/{subject}.json
export interface QuestionPack {
  subject: Subject;
  version: number; // bump whenever the questions change so installed apps re-download
  title: string;
  questions: Question[];
}

// What is stored at content_meta/current: one cheap read tells an app whether anything changed
export interface ContentMeta {
  version: number; // highest pack version
  packs: Record<string, number>; // subject -> pack version
}

// Order It: put the items in the right order. `items` is stored in the CORRECT order; the game shuffles them.
export interface OrderPuzzle {
  id: string;
  topic: string;
  level: number; // 1..10
  prompt: string;
  from: string; // label for the first item, e.g. "Smallest"
  to: string; // label for the last item, e.g. "Biggest"
  items: string[]; // 3 to 7, in the correct order
  explain?: string;
}

// Stored at content_packs/order and bundled as src/content/packs/order.json
export interface OrderPack {
  id: 'order';
  kind: 'order';
  version: number;
  title: string;
  puzzles: OrderPuzzle[];
}
