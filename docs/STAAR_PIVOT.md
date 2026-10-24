# Plan: Texas State Bodhi Prep in Bodhi Learn

Bodhi Learn gets a **Bodhi Prep** section for the Texas state tests: STAAR now, and the Student Success Tool (SST)
that replaces it in 2027–28. It is one app:

- **Pre-K to grade 3:** the Bodhi games, as before (their content now stops at grade 3).
- **Grade 4 and up:** Bodhi Prep instead of the games.

Written 2026-10-24, revised the same day when the plan changed from "a new app" to "a section of Bodhi Learn".
Facts about the tests are linked to their sources at the bottom; the SST blueprints are still marked DRAFT by
TEA, so check them again before launch.

**Effort:** S = a day or less · M = a few days · L = a week or more (same scale as [IDEAS.md](IDEAS.md))

---

## 1. Where the tests are going

**STAAR is ending.** Spring 2027 is the last STAAR for grades 3–8. HB 8 (2025) replaces it from 2027–28
with the **Student Success Tool (SST)**: three shorter tests a year. Both are taken online, usually on a
Chromebook or laptop (tablets are supported; paper only for students who need it).

| | STAAR (last time: spring 2027) | SST (from 2027–28) |
|---|---|---|
| When | Once. 2027: reading Apr 6–16, science & social studies Apr 13–23, math Apr 20–30 | Beginning of year (4th Monday of Aug – Sep 30), middle (Jan 2 – Feb 21), end (May 1–30; reading essay Apr 1–15) |
| Shape | One fixed test, about 3 hours expected, may run to the end of the school day | Beginning and middle tests are **adaptive** and **full-scope** (whole year's standards every time). End test is fixed and the same for everyone |
| Expected time | ~3 hours | Grades 3–4: 60 min (BOY/MOY), 90 min (EOY). Grades 5–8: 75 / 105 min |
| Question types | 14 (below), at most 75% of points from multiple choice | **Multiple choice** (1 pt), **multiselect** (2 pts), **inline choice** (drop-down, 2 pts), **multipart** (2 pts, each part one of those three), and **one essay** on the end-of-year reading test |
| Results | Weeks | Within 2 business days; BOY/MOY immediately from the 2nd year |
| Released questions | Every year, in the real test screen on the practice site | End-of-year only. Adaptive BOY/MOY questions are never released |
| Levels reported | Did Not Meet, Approaches, Meets, Masters | Same, set at the same rigor as STAAR, plus percentile ranks |

Subjects stay the same: grades 3–8 math and reading language arts (RLA), science in grades 5 and 8, social
studies in grade 8, Spanish versions for grades 3–5. High school: Algebra I, English I, Biology, U.S. History
(English II stops being a graduation requirement).

**STAAR's question types** (only the first four and the essay carry over into SST): multiple choice,
multiselect, inline choice, multipart, extended constructed response (essay), equation editor, text entry,
graphing, number line, hot spot, hot text, fraction model, drag and drop, match table grid, short constructed
response.

**Grade 5 SST blueprints (draft):**

| Test | Questions | Points | Standards |
|---|---|---|---|
| Math, end of year | 25–27 (18–22 worth 1 pt, 5–7 worth 2 pts) | 32 | 12 readiness, 24 supporting, in 4 strands |
| Math, beginning / middle | 22–24 | | all of them, adaptive |
| RLA, end of year | 28–29 (24–26 × 1 pt, 2–3 × 2 pts, 1 essay × 6 pts) | 36 | 14 readiness, 38 supporting, in 2 strands (reading, writing) |

Math strands: (1) numerical representations and relationships, (2) computations and algebraic
relationships, (3) geometry and measurement, (4) data analysis and personal financial literacy.

**Recommendation: build for SST first.** Its four question types are a subset of STAAR's, so everything built
for SST also works for STAAR practice. The STAAR-only types (drag and drop, text entry, equation editor,
graphing…) are only worth building if we want to serve spring 2027 users.

### The real test screen (seen on the official practice site, 2026 released tests)

- **Top bar:** Back, Next, Save; an *Items* drop-down to jump to any question; progress %; help; Pause.
- **Math tools:** Ruler, References (formula sheet), Notepad, Graph/Draw, Line Reader, Zoom In/Out, System Settings.
- **Reading tools:** Dictionary, Notepad, Line Reader, Zoom In/Out, System Settings.
- **Per question menu:** Mark for Review, Sticky Notes, Strikethrough (cross out choices), Highlight Selection.
- **Leaving a question unanswered** shows a warning ("You have not answered one or more parts…").
- **Reading layout:** passage on the left with numbered paragraphs (and a button to widen it), the passage's
  questions on the right with numbered tabs (1–7).
- **Math is visual:** answer choices are coordinate grids, number lines, fraction models; multiselect says
  "Select TWO correct answers."
- **Settings before the test:** zoom, color scheme, large mouse pointer, text-to-speech (accommodation),
  language (English/Spanish).
- **Calculators:** none in grades 3–7 math (unless an accommodation); grade 8 and Algebra I have a graphing
  calculator.

---

## 2. Decisions

**Made**
- **One app, Bodhi Learn.** Grade 4 and up get Bodhi Prep; Pre-K to grade 3 keep the games.
- **The grade is asked from age 9** (pre-filled with the usual grade for the age), so a 9-year-old in grade 3
  keeps the games and one in grade 4 gets Bodhi Prep. Under 9 there is no grade question.
- **Bodhi content above grade 3 is removed:** questions and math above level 6, and the games that only
  served older children (section 4).
- **Until each grade has its own questions, grades 4–8 practise grade 5 math**, with a note saying so.
- Bodhi Prep is designed for the SST first; the STAAR-only question types are optional.
- **No parental controls.** No parent gate anywhere; Settings open for everyone. Signing in with Google is only
  there to save progress across devices.

**Still open**
1. **Ship for spring 2027 STAAR or for fall 2027 SST?** Grade 5 math by March 2027 is possible if we stay
   narrow; otherwise aim for the first SST window (late August 2027).
2. **Free or paid.** Affects whether we need TEA's permission for anything we reuse, and payments.
3. **Who checks content.** Ideally a Texas teacher reviews every question against its standard.
4. **AI essay scoring.** Needs a parent's consent and a server (section 7).
5. **Which grade's content comes next** (grade 4 math is the natural next one). How to build each grade, and
   where TEA's curriculum documents are: [CURRICULUM.md](CURRICULUM.md).

---

## 3. How Bodhi Prep fits into Bodhi Learn

- **Same project and site:** `bodhi-learn` on Firebase, deployed from `main` as before. The `classic` branch and
  the `bodhi-learn-v1` tag keep a copy of Bodhi Learn as it was before this work.
- **Who sees what:** `App.tsx` shows the games unless `isPrep` (grade 4 and up, `src/firebase/schema.ts`). Test
  Prep (`src/prep/`) loads on demand, so younger children never download it.
- **Profile:** name, age and the new `grade` (3–8, asked from age 9) live in Bodhi's profile, sync to
  `users/{uid}.profile.grade`, and are checked by `firestore.rules` (grade is optional, so documents from older
  versions of the app stay valid). Grade can be changed in Settings (games) and in Bodhi Prep's settings.
- **Styles:** every Bodhi Prep style is scoped under `.prep`, so the games' look is untouched, and Bodhi Prep turns
  pinch-zoom back on while it is open (the games keep it off for tracing).
- **Bodhi Prep progress** (mastery per standard, streak) is kept in the browser for now (`bodhi_prep_v1`) and
  cleared on sign-out. Syncing it with the account is still to do: it needs a place in the user document (or a
  sub-collection) and matching rules.

---

## 4. What changed in the Bodhi games

- **Levels stop at 6** (about grade 3) instead of 10. Saved levels above 6 are brought down to 6 when read.
- **Question packs** keep levels 1–6 only (reading 138 → 78 questions, science 602 → 295, logic 136 → 60, Order
  It 39 → 22 puzzles); pack versions were bumped. Run `npm run content:seed` to publish them to Firestore.
- **Math generators** above level 6 are gone (decimals, percentages, ratios, exponents, algebra, Pythagoras…).
- **Games removed:** Equation Lab (10+), Chance & Counting and Predict It (too few questions at grade 3 for a full
  round; their questions moved into Brain Teasers and Matter & Energy). Other games lost topics that only had
  older questions.
- Everything else (tracing, phonics, stories, Code the Bot, puzzles, stickers, audio) is unchanged.

---

## 5. The new UX

### 5.1 Who it is for

- **Students in grades 3–8 (about 8–14).** Calm, clear, grown-up enough for a 13-year-old, friendly enough for an
  8-year-old. Light motivation (streaks, a daily goal, mastered skills) instead of stars and stickers.
- **Parents**, who set up the account, see progress, and decide how much to practise.
- **Laptop first.** Most practice happens where the test happens: a school Chromebook or a laptop.

### 5.2 Screen sizes

| Size | Priority | Notes |
|---|---|---|
| 1366×768 (typical school Chromebook) | Primary | Everything, including test mode, fits without page scrolling of the chrome |
| 1280×800 – 1920×1080 laptops | Primary | Content column caps at a readable width |
| iPad landscape 1024×768 | Supported | Touch targets 44px; test mode works |
| Phone | Practice and parent views only | Test mode asks for a bigger screen, as the real test would |

### 5.3 Two ways to practise

- **Practice mode** (most of the time): one question at a time, instant feedback, an explanation for the answer
  picked, a hint, then the next question picked by the adaptive engine. Has its own friendly look.
- **Test mode**: looks and behaves like the real test screen (section 5.5). No feedback until the end, a review
  screen, then a score report. Used for check-ups and full practice tests, so the real day feels familiar.

Keyboard shortcuts are fine in practice mode, but test mode should only do what the real test does, so students
don't learn habits that won't work on the day.

### 5.4 Screens

```
Welcome (age, grade from 9, optional Google sign-in, name)
                                      │
                          Profile picker ("Who's practising?")
                                      │
Student home ("Today")
 ├─ Today's plan: ~15 min, picked from weak and due skills; streak; days until the next test window
 ├─ Subject: Math / Reading
 │    └─ Skill map: strands → standards, each with a mastery state
 │         └─ Practice a skill (practice mode)
 ├─ Check-up: a short adaptive test across the whole year, like BOY/MOY (test mode)
 ├─ Practice test: a full fixed test, like the end-of-year test (test mode) → Score report
 ├─ Mistakes: every missed question, to retry
 ├─ Writing (reading only, later): passage, prompt, essay editor, rubric feedback
 └─ Link out: the official practice site for real released tests
Parent dashboard: each child's mastery by strand and standard, time spent, recent sessions, check-up trend
Settings: zoom, colors, text-to-speech, account, delete data
```

Every screen has a real URL (React Router), so the browser back button, refresh and bookmarks work. Bodhi Learn
keeps the current screen in component state, which can't do this.

### 5.5 Test mode spec

Match the real screen's layout and names (section 1) without copying its branding.

- **Top bar:** Back, Next, Save & exit; question list showing answered / unanswered / marked; progress; Pause.
- **Tools, first version:** Mark for Review, Strikethrough, Highlighter, Line Reader, Notepad, Zoom, Reference
  sheet (math), color settings.
- **Tools, later:** Sticky Notes, Dictionary (needs a licensed dictionary or API), Ruler, Graph/Draw,
  text-to-speech, Spanish.
- **Reading layout:** split pane, passage left with numbered paragraphs (lines for poems and plays), widen /
  narrow button, question tabs per passage on the right.
- **Unanswered warning** on Next, matching the real wording in spirit.
- **Review screen** before submit, listing unanswered and marked questions.
- **Resume:** an in-progress test survives refresh, closing the lid or going offline (saved to IndexedDB after
  every answer).
- **Expected time** shown, not enforced (SST: 75 min for grade 5 BOY/MOY, 105 min EOY).

### 5.6 Question components

One renderer per type, each with these states: default, hover, focus, selected, struck out, correct, incorrect,
disabled, and review (after submit).

| Component | Used for |
|---|---|
| `MultipleChoice` | 1-pt questions, 4 choices, text or figure choices |
| `MultiSelect` | "Select TWO/THREE correct answers", checkboxes, 2 pts |
| `InlineChoice` | Drop-downs inside a sentence or equation, 2 pts |
| `MultiPart` | Part A / Part B, each one of the above, 2 pts |
| `EssayEditor` | Plain text with a character counter; spell check is a setting, as on the real test |
| `Passage` | Numbered paragraphs or lines, highlightable |

**Figures** are SVG components drawn from data in the pack, never images, so generated questions can use them
and they stay sharp at any zoom: number line, coordinate grid, fraction model (area and strip), bar graph, dot
plot, stem-and-leaf, frequency table, rectangular prism, polygons, money. Fractions are drawn as stacked text with CSS
(React's types don't cover MathML yet), so no math library is needed.

### 5.7 Design system  ·  built before any screen

- **Tokens** in one CSS file: color (with a high-contrast set and the test's color schemes), type scale,
  spacing, radii, shadows, motion (respecting `prefers-reduced-motion`).
- **Type:** one highly legible sans-serif for UI and questions (for example Atkinson Hyperlegible), tabular
  numbers for math.
- **Components:** Button, IconButton, Card, Tabs, Dialog, Toast, ProgressBar, MasteryChip, Toolbar, Menu,
  Tooltip, EmptyState, plus the question components above.
- **Accessibility, WCAG 2.1 AA:** full keyboard use, visible focus, screen-reader labels, zoom to 200% without
  breaking, contrast checked. The real test supports these, so practice should too.

### 5.8 Folder layout

Bodhi Prep lives in `src/prep/`, next to the Bodhi games:

```
src/prep/
  PrepApp.tsx  entry point, loaded on demand by App.tsx
  app/         routes, layout, brand
  ui/          tokens.css and design-system components (all scoped under .prep)
  features/    home (Today), skills, practice, settings
  items/       question renderers and figures/
  content/     types, validation and scoring, seeded RNG, generators/g5/
  data/        standards catalog per grade, test calendar
  learner/     mastery rules and the on-device progress store
tests/prep/    content validity, generators, scoring, mastery
```

---

## 6. Data model

### Content

```ts
type ItemType = 'mc' | 'multiselect' | 'inline' | 'multipart' | 'essay';

interface Item {
  id: string;
  grade: 3 | 4 | 5 | 6 | 7 | 8;
  subject: 'math' | 'rla' | 'science' | 'social';
  standard: string;               // TEKS student expectation, e.g. '5.4F'
  standardKind: 'readiness' | 'supporting';
  strand: number;                 // reporting strand
  type: ItemType;
  points: 1 | 2 | 6;
  passageId?: string;
  stem: Rich;                     // text (with {3/4} fractions) + figure specs
  choices?: { content: Rich; why: string }[];   // mc, multiselect
  correct?: number[];             // mc: one index; multiselect: all right indexes
  blanks?: { options: string[]; correct: number }[];  // inline
  parts?: Item[];                 // multipart: A, B
  difficulty?: number;
  source: 'generated' | 'authored';
  reviewed?: boolean;             // checked against the standard by a teacher
}

interface Passage {
  id: string; grade: number; title: string;
  genre: 'fiction' | 'informational' | 'poetry' | 'drama' | 'argumentative';
  numbering: 'paragraph' | 'line';
  blocks: Rich[];
  pairedWith?: string;
}
```

- Packs per grade and subject (`g5-math`, `g5-rla`) in `content_packs/{id}`, same versioning as today.
- **Standards catalog** per grade from TEA's *Assessed Curriculum* documents: code, short description,
  readiness/supporting, strand.
- **Partial credit** for 2-point questions must follow TEA's published scoring guide for each type. Check it
  before building the scorer.

### Learners and progress (Firestore)

```
users/{uid}                          Bodhi's document: profile (name, age, grade), settings, game progress
users/{uid}/prep/{subject}           Bodhi Prep mastery per standard: seen, correct, recent results, difficulty, lastSeen
users/{uid}/prepSessions/{id}        finished check-ups and practice tests, with scores per strand
```

`profile.grade` is done. The two sub-collections are the next step: they keep the main document small, and
rules can validate each one's shape. Multiple children per account would come later.
In-progress tests live on the device until they are submitted.

### Adaptivity

- **Practice:** per standard, harder after a run of right answers, easier after misses (the same idea as
  `adjustLevel` today). Daily plan favours weak readiness standards, then skills not seen for a while.
- **Check-up:** a short adaptive test across all strands. A simple version first (pick the next item's
  difficulty from the last few answers); proper item calibration only once there is enough answer data.
- **Score report:** show results by strand and say clearly that it is an estimate, not a prediction of the real
  result (TEA says the same about its own samplers).

---

## 7. Content plan

| Content | How | First target (grade 5) |
|---|---|---|
| Math | Generators: retag the existing ones, add the missing standards, add figures and multiselect / inline / multipart variants. A test checks every answer, like today | Every one of the 36 standards, unlimited fresh questions; readiness standards first |
| Math, word problems | Generators with Texas-style contexts and both customary and metric units | Included above |
| Reading passages | Written for the app (original), grade-appropriate length, mix of fiction, informational, poetry, drama, paired passages | 12 passages, 6–10 questions each |
| Reading and editing questions | Authored per passage and per standard; drafts can be written with Claude, then reviewed | All 52 RLA standards covered |
| Essays | Prompts tied to passages; scored against TEA's published rubric | 6 prompts; scoring in a later phase |

- **Never copy released STAAR questions** into the app: they are TEA's copyright. Link to the official practice
  site for real released tests instead.
- **Essay scoring** runs in a Cloud Function that calls Claude, so the API key never reaches the device. The
  essay is a child's writing sent to an AI provider: it needs the parent's consent and a clear privacy notice.

---

## 8. Build phases

| # | Phase | What "done" means | Effort |
|---|---|---|---|
| 0 | Fit into Bodhi Learn | Section 3: grade in the profile, Bodhi Prep for grade 4+, games trimmed to grade 3 | S |
| 1 | Foundations | Routes, design tokens and core components, Bodhi Prep progress synced with the account, rules and rules tests | M–L |
| 2 | Content model | Item and passage types, validators, standards catalog for grade 5, pack store pointed at the new packs, tests | M |
| 3 | Question components | The four SST types, figures, scoring with partial credit, all keyboard-usable | M |
| 4 | Practice mode | Skill map, practice a standard, explanations, mastery updates, daily plan, mistakes list | M |
| 5 | Grade 5 math content | All 36 standards generated and tested | L |
| 6 | Test mode | Section 5.5: tools, split pane, review screen, resume, score report | L |
| 7 | Parent dashboard | Mastery by strand and standard, sessions, check-up trend | M |
| 8 | Launch readiness | Privacy policy, parental consent, App Check, "not affiliated with TEA" notice, landing page | M |
| 9 | Grade 5 reading | Passages, reading and editing questions, essay editor; then essay scoring in a Cloud Function | L + L |
| 10 | More | Other grades, Spanish for grades 3–5, science (5, 8), social studies (8), STAAR-only question types if still useful | L each |

### Status (2026-10-24)

- **One app again:** Bodhi Learn is back on `main` with Bodhi Prep for grade 4 and up, the grade question from
  age 9, and the games trimmed to grade 3. Deploys from `main` to `bodhi-learn` are on again.
- **Bodhi Prep, first cut:** routes, design tokens and components, the item model with validation and TEA
  partial-credit scoring, the four SST question types, eight SVG figure types, generators for all 36 grade 5
  math standards at three difficulties, and practice mode (Today plan, skill map, 10-question sessions,
  explanations, per-standard mastery).
- **Not started:** syncing Bodhi Prep progress, passages, the mistakes list, test mode, parent dashboard, other
  grades, launch checks.
- **Content review:** the generated questions are checked by tests for validity and answer keys, but a Texas
  teacher has not reviewed them against the standards yet.

**First release = phases 0–8 (grade 5 math, used by grades 4–8 for now).** For spring 2027 STAAR users it has to ship by about mid-March
2027; otherwise aim for the first SST beginning-of-year window (late August 2027).

---

## 9. Legal, privacy and launch checklist

- [ ] Product name without "STAAR"; descriptive use only, with ® and a "not affiliated with or endorsed by TEA" notice.
- [ ] No released STAAR questions, reference sheets or passages copied (TEA's copyright needs written permission).
- [ ] COPPA: most users are under 13. The parent creates the account and consents; children get profiles, not
      their own Google sign-in. Say what is collected (first name, grade, answers, essays).
- [ ] Privacy policy and a delete-everything button (the account deletion code carries over).
- [ ] App Check on Firestore and Functions before sharing widely.
- [ ] Disclose the page-view tracker in `index.html` (it posts to `simkeyurapp.web.app/collect`).
- [ ] If selling to schools later: FERPA and district data agreements, and HB 8's limits on practice and
      benchmark tests in schools from 2027–28 (TEA's FAQ covers districts, not practice at home).

---

## 10. Risks

- **Content is the real work.** The screens are weeks; good questions for every standard in every grade are months.
- **The target moves.** SST blueprints are drafts, and TEA's practice site will be updated for SST. Re-check the
  blueprints and the practice site before each release.
- **The free official site** has every released test since 2018 in the real screen. The app has to win on what it
  can't do: unlimited new questions, explanations, adaptivity, a plan, and a parent view.
- **Over-promising scores.** Never present an estimate as a predicted STAAR or SST result.

---

## Sources

- [TEA: House Bill 8 FAQ, August 2026](https://tea.texas.gov/data-reports/staar/hb-8-faq-update.pdf)
- [TEA: House Bill 8 student assessment (blueprints, rubrics)](https://tea.texas.gov/data-reports/student-assessment-overview/house-bill-8-student-assessment)
- [TEA: SST grade 5 math summative blueprint (draft)](https://tea.texas.gov/data-reports/staar/sst-5-math-summative-blueprint.pdf)
- [TEA: SST grade 5 math BOY/MOY blueprint (draft)](https://tea.texas.gov/data-reports/staar/sst-5-math-boy-moy-blueprint.pdf)
- [TEA: SST grade 5 RLA summative blueprint (draft)](https://tea.texas.gov/data-reports/staar/sst-5-rla-summative-blueprint.pdf)
- [TEA: 2026–2027 testing calendar](https://tea.texas.gov/student-assessment/test-administration/2026-2027-testing-calendar.pdf)
- [TEA: STAAR redesign](https://tea.texas.gov/assessment-and-accountability/assessment-initiatives/staar-redesign)
- [TEA: 2022–23 program updates (time limits)](https://tea.texas.gov/sites/default/files/texas-assessment-program-updates-2022-2023.pdf)
- [TEA: 2026 STAAR calculator policy](https://tea.texas.gov/student-assessment/staar/2026-staar-calculator-policy.pdf)
- [TEA: STAAR constructed-response scoring](https://tea.texas.gov/student-assessment/staar/scoring-process-staar-constructed-response.pdf)
- [TEA: STAAR released test questions](https://tea.texas.gov/data-reports/staar/staar-released-test-questions)
- [Texas Assessment practice site (guest access)](https://txpt.cambiumtds.com/student/?a=Student)
- [Progress Learning: STAAR question types by grade and subject](https://progresslearning.com/news-blog/new-staar-item-types/)
- [Fort Bend ISD: STAAR practice tests in Cambium (tools, calculators)](https://www.fortbendisd.com//cms/lib/TX01917858/Centricity/Domain/2388/Cambium.docx)
- [Texas Tribune: Texas is officially replacing STAAR](https://www.texastribune.org/2025/09/03/texas-staar-standardized-test-accountability-2/)
