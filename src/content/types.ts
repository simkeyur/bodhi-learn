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
