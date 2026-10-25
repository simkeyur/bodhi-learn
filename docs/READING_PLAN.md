# Bodhi Prep: Reading (RLA) for grades 1–8

How reading practice gets built, in what order, and who builds what. Math is the model, but reading differs in
one big way: most of it can't be generated. It needs **original passages** with questions written for each one.

**Recommendation: build grade 5 as the reference first (Claude), then have Gemini replicate it grade by grade.**
The shared pieces (passage model, reader screen, practice flow, tests) are design work that's hard to copy
correctly from a description. Once grade 5 exists, another grade is mostly content: passages, questions and
walkthroughs that follow grade 5's files and pass the same tests. This is how math went, and it worked.

---

## 1. What TEA tests (SST, from 2027–28)

Documents: `https://tea.texas.gov/data-reports/staar/sst-{grade}-rla-assessed-curriculum.pdf`, plus
`sst-{grade}-rla-summative-blueprint.pdf` and `sst-{grade}-rla-boy-moy-blueprint.pdf` (grades 3–8).

**Grade 5 (reference grade)**, from the summative blueprint (draft, effective spring 2028):

| Strand | Standards | Questions | Points |
|---|---|---|---|
| 1. Reading | 9 readiness + 22 supporting | 17–20 | 20–22 |
| 2. Writing (revising and editing, plus the essay) | 5 readiness + 16 supporting | 9–11 | 14–16 |
| Total | 52 | 28–29 (24–26 × 1 pt, 2–3 × 2 pts, 1 essay × 6 pts) | 36 |

- **Question types:** multiple choice, multiselect, inline choice, multipart, and one extended constructed
  response (essay). The beginning- and middle-of-year tests have no essay.
- **Reading genres:** fiction, literary nonfiction, poetry, drama, informational, argumentative, persuasive.
- **Revising and editing genres:** fiction, literary nonfiction, expository/informational, argumentative,
  persuasive, correspondence.
- **Codes have sub-parts:** 5.9D.i, 5.11D.ii, 5.2B.vi. They're still one standard each.
- **2026 revision:** several standards moved from readiness to supporting (5.3B, 5.6E, 5.8B, 5.10A, 5.2B.i/ii/vi,
  5.11D.xi). Build from the August 2026 assessed curriculum, not older STAAR lists.

Other grades (from CURRICULUM.md section 7): 3: 53 standards, 4: 52, 6: 43, 7: 44, 8: 41.

**Grades 1–2** have no state test. Build from the TEKS (19 TAC §110.3 and §110.4), like grade 1–2 math. Leave
out what needs listening or speaking (phonological awareness, oral retelling), since the app plays no voice in
Prep. Keep phonics and spelling patterns, high-frequency words, vocabulary, and comprehension of short passages.

## 2. Three kinds of reading content

| Kind | Standards it covers | How it's made | Per grade (grade 5) |
|---|---|---|---|
| **Reading sets**: an original passage (or a pair) with 6–8 questions | Comprehension, literary elements, genre, author's craft (strand 1) | Authored. Gemini drafts; tests check the structure; a person reads every set | 12 sets |
| **Revising and editing drafts**: a short student-style draft with numbered sentences and planted errors, 5–6 questions | Strand 2: conventions, organization, development | Authored, with the errors listed in the data so tests can check them | 6 drafts |
| **Generated questions**: one-sentence items, like math | Spelling patterns, affixes and roots, sentence-level conventions (subject-verb agreement, irregular past tense, run-ons and fragments, capitalization, commas) | Generators, the same `Gen` shape as math | Every standard that works at sentence level |

**Twelve grade 5 sets, as a starting mix:**
- 3 fiction, 1 literary nonfiction, 2 informational, 1 argumentative, 1 persuasive, 2 poetry, 1 drama.
- 1 paired set (two passages on one topic, with cross-text questions for 5.6H, synthesis).

**Passage length (our targets, to tune by reading them):**

| Grade | Words per passage |
|---|---|
| 1–2 | 80–250 |
| 3 | 300–600 |
| 4–5 | 400–900 |
| 6–8 | 600–1,200 |

Poems are 8–48 lines; drama scenes are 1–2 pages. Each passage of a paired set is about 60% of the band.

**Copyright.**
- Every passage is original, or in the public domain (published before 1930: Aesop, Stevenson, Rossetti, Dickinson
  and the like, credited).
- Never use released STAAR passages or questions, or excerpts of modern books.
- Never use any other test publisher's material.

## 3. Content model (changes to shared code)

**Subject in the code** (built in R0). Reading codes collide with math (5.3A exists in both), so reading codes
carry a prefix: `rla:5.6F`, `rla:5.9D.i`. Math codes are unchanged. Screens show the code without the prefix
(`shortCode`).
- The registry has `READING[grade]` beside the math `GRADES[grade]`. `readingFor(grade)` falls back to the
  nearest built grade.
- `findStandard`, `findLesson`, `makeItem` and `hasGenerator` work for either subject by code.
- `findSet`, `setsFor(code)` and `hasPractice(code)` are for reading.

**New types** (in `content/types.ts`):
```ts
type Genre = 'fiction' | 'literaryNonfiction' | 'poetry' | 'drama' | 'informational' | 'argumentative' | 'persuasive' | 'correspondence';

interface Passage {
  id: string;            // 'g5-fic-lighthouse'
  title: string;
  author?: string;       // only for public-domain texts
  genre: Genre;
  intro?: string;        // TEA-style "Read the selection and choose the best answer..."
  blocks: PassageBlock[]; // paragraphs numbered 1..n; poem lines and drama speeches numbered too
  figure?: Figure;       // timelines, sidebars, photos with captions for text-feature questions
}

interface ReadingSet {
  id: string;
  grade: number;
  passages: Passage[];   // 1, or 2 for a paired set
  items: Item[];         // each item: standard 'rla:5.8C', type, stem, parts, explain; may cite paragraphs
}

interface EditingDraft {
  id: string;
  grade: number;
  genre: Genre;
  title: string;
  sentences: string[];   // numbered (1)…(n) on screen
  errors: { sentence: number; standard: string; fix: string }[]; // what each question is about
  items: Item[];
}
```

**Item changes:**
- `multipart` is allowed for reading. Part A answers the question; Part B asks for the evidence. Scoring is
  already per part.
- An item can point at paragraph numbers (`cites: [3, 4]`), so feedback can highlight them.
- Inline choice is used for editing ("Which word should replace *goed* in sentence 4?") and for vocabulary in
  context.
- **Essay** is a new type with no automatic score at first. The child writes; then they check their own work
  against a kid-friendly version of TEA's rubric (organization and development 3 points, conventions 3 points).
  AI scoring comes later (section 6).

**Tests** (in `tests/prep/reading.test.mjs`, run for every grade in the registry):
- Every standard has at least 3 questions (sets, drafts or generators). Readiness standards have at least 6.
- Each set has 6–8 questions.
- Multiple choice has 4 choices and multiselect has 5 with 2 correct. Every question has an explanation.
- Paragraph citations exist in the passage, and passage length is within the grade's band.
- Every planted error in a draft has a question about it.
- The genre mix per grade matches section 2, and the strand counts match TEA's blueprint.
- No passage or question text repeats across sets.

## 4. Screens

- **Reader**, the heart of it:
  - **Laptop:** the passage on the left with numbered paragraphs (poem lines and drama speeches numbered too),
    and questions on the right with tabs. This is the real test's layout.
  - **Phone:** passage first, with a sticky "Questions" button. Each question has a "Show paragraph 4" link.
  - Larger text than math, and a comfortable line length (about 65 characters).
- **Practice a set:** read, answer 6–8 questions, then a summary. One set updates several skills at once.
- **Practice a skill:** for generated standards, works like math. For passage standards, it picks a set that has
  questions on that standard and asks just those (the passage still shows).
- **Today:**
  - one reading set or one editing draft;
  - a few generated questions for the weakest skills;
  - capped at about 20 minutes.
- **Walkthroughs** per standard, in the same 4 steps as math:
  - goal and key words;
  - big ideas;
  - a worked example on a 2–4 paragraph mini-passage;
  - your turn.
- **Reading page:** "Reading (Soon)" in the header becomes a real page with strands and skills, like Math.
- **Essay** (later in the build): a prompt tied to a passage set, a plain text box with a word count, then the
  rubric check.

## 5. Build order

| Step | What | Who | Effort |
|---|---|---|---|
| **R0** ✓ | **Shared code and the reference grade 5.** Subject-aware registry and codes, `Passage` / `ReadingSet` / `EditingDraft` types, validators and tests, Reader screen, set and skill practice, Reading page and Today. Grade 5 standards catalog (all 52), **3 complete sets** (fiction, informational, poetry), **1 editing draft**, generators for 6 convention and vocabulary standards, and walkthroughs for those standards. Split the Prep bundle per grade and subject (it's 820 kB today; reading text would grow it). | Claude | L |
| R1 ✓ | **Finish grade 5:** the remaining 9 sets, 5 drafts, generators and walkthroughs. Every standard covered. | Claude | L |
| R2 | **Grades 4 and 3**, then **6, 7 and 8:** the same files and tests per grade, from each grade's PDFs. | Gemini, one grade per branch, then review | L each |
| R3 | **Essay:** editor, rubric self-check, 2–3 prompts per grade. | Claude (screen), Gemini (prompts) | M |
| R4 | **Grades 1–2:** TEKS standards, short passages, phonics and spelling generators, no essay. | Gemini, then review | M each |
| R5 | **AI essay feedback** (optional): a Cloud Function calls Claude with the rubric. It needs a parent's consent and a privacy note, because a child's writing is sent to an AI provider. | Claude | M |

**Review for every grade:** tests pass, then a person (or Claude) reads every passage and question set:
- age-right and interesting;
- one clearly best answer, with wrong answers that are tempting but wrong;
- Part B evidence actually supports Part A;
- no bias or scary content;
- no copied text.

This is the slow part. Budget about an hour per grade to read, plus fixes.

## 6. Decisions to make

1. **Grade 5 first?** Recommended. It's the middle of the range and already the math reference. The other option
   is grade 3, the first tested grade, which has younger readers and shorter passages.
2. **The essay:** self-check only for now (recommended). AI scoring later needs consent and a server.
3. **Public-domain poems and fables:** allowed and credited (recommended), or originals only.
4. **Reading progress sync:** stays on the device like math Prep progress for now. Syncing Prep progress to the
   account is its own task.

---

## 7. Status

**R0 is done (2026-10-25).** It covers the shared code, the screens and a grade 5 reference:
- **Shared code:** `rla:` codes, the passage, set and essay types, `setProblems` checks, and
  `tests/prep/reading.test.mjs`.
- **Screens:**
  - the Reader (`/read/:id`), which is side by side on laptops and uses tabs on phones;
  - the Reading page (`/reading`);
  - Today's reading card;
  - passage-skill walkthroughs with sample passages;
  - the essay page with a self-check (`/write/:id`).
- **Grade 5 content:**
  - all 52 standards;
  - 3 reading sets: fiction "Before the Storm", informational "The Bats of Bracken Cave", and Stevenson's poem
    "My Shadow";
  - 1 editing draft, "Our Class Garden";
  - generators for 7 standards;
  - 10 walkthroughs;
  - 1 essay prompt.
- **Coverage:** 27 of the 52 standards have practice. The rest show "Coming soon".

**R1 is done (2026-10-25).** Grade 5 is complete:
- **Coverage:** all 52 standards have practice and a walkthrough (the tests require it).
- **Reading sets (12):**
  - fiction ×3: a story, a pourquoi folktale, and a first-person story;
  - literary nonfiction: a biography of Bessie Coleman;
  - informational ×2;
  - argumentative and persuasive;
  - poetry ×2: Stevenson and Rossetti, both public domain;
  - drama;
  - a paired set on monarchs (an article and a story).
- **Editing drafts (6):** a letter, an opinion piece, a report, a narrative, a how-to, and the class garden draft.
- **Other content:** 119 written questions, 21 generators and 2 essays (informational and argumentative).
- **Shared-code additions:**
  - `passage` on a question (which passage of a pair its citations refer to);
  - a `note` block (unnumbered text such as a letter's greeting);
  - each half of a pair is checked against about 60% of the length band;
  - the genre test is grade-aware (the full mix from grade 3).

**Not done in R0:**
- Splitting the Prep download per grade and subject (it's 901 kB, 277 kB compressed).
- A paired set and a drama set (the types support both).

## 8. Building a grade's reading (the steps for Gemini)

Copy grade 5's layout exactly. Everything a grade needs:

1. **Standards:** `src/prep/data/standards/g{N}-rla.ts`, from TEA's `sst-{N}-rla-assessed-curriculum.pdf`.
   - Codes look like `rla:{N}.9D.i`. Use the PDF's readiness/supporting labels.
   - If the PDF's lettering looks wrong, use the real TEKS code and add a comment.
   - Leave out the essay-only standards that carry no label.
2. **Sets:** one file per set in `src/prep/content/rla/g{N}/`, written with the helpers in
   `src/prep/content/rla/author.ts` (`mcq`, `msq`, `inq`, `twoq`, `makeSet`).
   - Reading sets have 6–9 questions and editing drafts 5–7.
   - Every multiple-choice question has 4 choices, and every multiselect has 5 with 2 right.
   - Every wrong choice gets a short `why`.
   - Cite the paragraphs (or sentences) a question is about. **Headings, sidebars, directions and notes are not
     numbered**: count only `p`, `line` and `speech` blocks (and each sentence in a draft).
   - In a paired set, add `passage: 1` to a question whose citations are in the second passage.
   - Vary which letter is right.
   - Passages are original, or public domain before 1930 with `author` and `source`.
3. **Generators:** `src/prep/content/rla/g{N}/generators.ts`, for standards that work one sentence at a time:
   spelling patterns, word parts, conventions.
   - Each draws from a bank of at least 10 entries, so the test sees at least 8 different questions.
4. **Walkthroughs:** `src/prep/content/lessons/g{N}-rla.ts` (grade 5 splits them into `g5-rla.ts` and
   `g5-rla-more.ts`).
   - Generated skills: goal, words and at least 2 ideas.
   - Passage skills: the same, plus two `samples`, each a short passage (40–120 words) with one question.
   - Keep a pool of short passages (`g5-rla-passages.ts`) and reuse each one across several walkthroughs with
     different questions.
5. **Essays:** 1–2 prompts in the grade's `index.ts`, each tied to one of its sets, with the checklist.
6. **Register** the grade in `READING` in `src/prep/content/registry.ts`, with the blueprint counts per strand.
7. **Check:**
   - Run `npm run test:prep`.
   - Read every passage and question once in the app at `/reading`, both on a laptop and at phone width.

**Done when** every standard in the grade has practice (a set question or a generator), each readiness standard
has at least 3 questions, and the genre mix in section 2 is covered.
