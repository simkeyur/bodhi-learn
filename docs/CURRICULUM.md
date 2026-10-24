# Curriculum Guide: Adding Grades K–8 to Bodhi Prep

Where the official Texas curriculum lives, what each grade's test covers, and the steps to build a grade the
way grade 5 math was built: a standards list, question generators, walkthroughs, and tests. Sections 1–7 cover
grades 4–8; section 8 covers kindergarten to grade 3.

Written 2026-10-24. All TEA links below were checked that day. The SST documents are marked DRAFT by TEA,
so download them again before starting a grade.

---

## 1. Where the curriculum is

Two sources matter: the **TEKS** (the law: everything a grade must be taught) and TEA's **assessed curriculum**
(the subset the state test can ask about, each marked readiness or supporting). Build from the assessed
curriculum; the TEKS are background.

| What | Where |
|---|---|
| **Assessed curriculum** (the standards list to build from) | `https://tea.texas.gov/data-reports/staar/sst-{grade}-math-assessed-curriculum.pdf` |
| **End-of-year blueprint** (questions, points, standards per strand) | `https://tea.texas.gov/data-reports/staar/sst-{grade}-math-summative-blueprint.pdf` |
| **Beginning/middle-of-year blueprint** (the adaptive tests) | `https://tea.texas.gov/data-reports/staar/sst-{grade}-math-boy-moy-blueprint.pdf` (grade 7's is not at this address; find it on the HB 8 page) |
| Reading (RLA) versions of the same two documents | `sst-{grade}-rla-assessed-curriculum.pdf`, `sst-{grade}-rla-summative-blueprint.pdf`, same folder |
| All HB 8 / SST documents, rubrics, and updates | [TEA: House Bill 8 student assessment](https://tea.texas.gov/data-reports/student-assessment-overview/house-bill-8-student-assessment) |
| The TEKS themselves (math is 19 TAC Chapter 111: grades 3–5 in §111.5–111.7, grades 6–8 in §111.26–111.28) | [Texas Administrative Code, Chapter 111](https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=19&pt=2&ch=111) · [TEA TEKS page](https://tea.texas.gov/academics/curriculum-standards/teks-review/texas-essential-knowledge-and-skills) |
| Released tests in the real test screen (to see how questions look; **never copy them**) | [Texas Assessment practice site](https://txpt.cambiumtds.com/student/?a=Student) · [STAAR released test questions](https://tea.texas.gov/data-reports/staar/staar-released-test-questions) |

Replace `{grade}` with 3–8. Example:
`https://tea.texas.gov/data-reports/staar/sst-6-math-assessed-curriculum.pdf`.

**Copyright:** the TEKS wording is state rule and can be quoted, as `text` in the standards file does. Released
test questions, passages and TEA's reference sheets are TEA's copyright: use them to learn the style, never as
content.

---

## 2. What each grade's math test covers

From TEA's SST draft blueprints (effective spring 2028). The standard counts in each grade's assessed-curriculum
PDF match its blueprint.

| Grade | Standards (readiness + supporting) | Per strand R / S (1 · 2 · 3 · 4) | End-of-year questions | Points |
|---|---|---|---|---|
| 3 | 44 (13 + 31) | 4/10 · 5/9 · 3/6 · 1/6 | 24–26 | 30 |
| **4** | **41 (13 + 28)** | 3/10 · 5/7 · 4/7 · 1/4 | 24–26 | 30 |
| 5 ✓ built | 36 (12 + 24) | 2/4 · 6/9 · 3/5 · 1/6 | 25–27 | 32 |
| **6** | **51 (16 + 35)** | 4/11 · 6/11 · 3/3 · 3/10 | 27–29 | 34 |
| **7** | **38 (13 + 25)** | 2/5 · 5/7 · 4/5 · 2/8 | 28–30 | 36 |
| **8** | **40 (13 + 27)** | 1/3 · 5/9 · 5/9 · 2/6 | 30–32 | 38 |

Grades 4 and 6–8 add **170 standards** in total.

Strands are the same in every grade: (1) Numerical Representations and Relationships, (2) Computations and
Algebraic Relationships, (3) Geometry and Measurement, (4) Data Analysis and Personal Financial Literacy.
The exception is **grade 7**, whose strand 1 is **Probability and Numerical Representations**.

**Question types for math: multiple choice, multiselect and inline choice only.** The math blueprints don't
list multipart (the reading blueprints do). Grade 5's two former multipart questions (5.4B, 5.9C) are now single
questions with two drop-downs, and a test fails any math question that is multipart. Don't use `twoPart` for
math.

**Calculators:** none on grades 3–7 math (unless a student has it as an accommodation). Grade 8 math has a
graphing calculator, so grade 8 questions can use messier numbers.

### Topics to expect (check every one against the assessed-curriculum PDF)

A starting map for planning, from the TEKS. Readiness/supporting labels and exact wording come from the PDF.

| Grade | Main topics | New figures probably needed |
|---|---|---|
| 4 | Place value to billions and decimals to hundredths; comparing and ordering; equivalent fractions; adding and subtracting fractions with like denominators; multiplying up to 4 by 1 digits and 2 by 2 digits; dividing by 1 digit; angles and protractors; lines, symmetry, classifying triangles; perimeter and area; measurement conversions; frequency tables, dot plots and stem-and-leaf plots; fixed and variable expenses, profit | Angle with protractor, lines of symmetry, triangles by sides and angles, number line with fractions |
| 6 | Integers and rational numbers on a number line; absolute value; ratios, rates and percents; expressions with exponents; one-variable equations and inequalities; area of triangles, parallelograms and trapezoids; triangle angle sums; volume with fractional edges; the 4-quadrant coordinate plane; box plots, histograms, mean, median, range and IQR; credit and debit, credit reports | Number line with negatives, 4-quadrant grid, box plot, histogram, tape diagram or double number line |
| 7 | Operations with rational numbers; proportional relationships and constant of proportionality; percent problems; two-step equations and inequalities; circumference and area of circles; surface area and volume of prisms and pyramids; angle relationships; scale drawings and similar shapes; simple and compound probability; comparing data sets; sales and income tax, budgets, simple and compound interest | Circle, angle pairs, scale drawing, tree diagram, two box plots |
| 8 | Real numbers and scientific notation; slope and y-intercept; proportional and non-proportional relationships; functions; Pythagorean theorem and its converse; transformations and dilations; volume of cylinders, cones and spheres; angles with parallel lines and transversals; scatterplots and trend lines; mean absolute deviation; simple vs. compound interest, saving for college | Line on a grid (y = mx + b), transformations on a grid, right triangle, cylinder/cone/sphere, parallel lines with a transversal, scatterplot with trend line |

---

## 3. How grade 5 is built (copy this)

| Piece | File | What it holds |
|---|---|---|
| Standards list | `src/prep/data/standards/g5-math.ts` | The 4 strands and 36 standards: code, strand, readiness/supporting, a short kid-friendly title, the TEKS wording |
| Generators | `src/prep/content/generators/g5/strand1.ts` … `strand4.ts`, `index.ts` | One or more generator per standard, each returning a question at difficulty 1, 2 or 3; `index.ts` maps standard → generators and exports `makeG5MathItem` |
| Shared helpers | `src/prep/content/generators/build.ts` | `mc`, `multi`, `inline` + `blank`, `one`, `fig`, `table`, `txt`, `dec`, `money`, `num`, `frac`, `near`… (`mc` pads to four choices by itself) |
| Question model, scoring, validation | `src/prep/content/types.ts`, `scoring.ts` | Item and figure types; TEA partial credit; `itemProblems()` lists anything wrong with a question |
| Figures | `src/prep/items/figures/Figures.tsx` | SVG drawings from data: area model, hundred grids, fraction bars, coordinate grid, bar graph, dot plot, prism, number line |
| Walkthroughs | `src/prep/content/lessons/g5-math.ts` | Per standard: goal, key words, 2–4 big ideas (optional figure and example line) |
| Grade registry | `src/prep/content/registry.ts` | Every grade with content; screens and tests look grades up here |
| Tests | `tests/prep/content.test.mjs` | Standard counts match the blueprint, every standard has a generator and a walkthrough, every question at every difficulty is valid and its key scores full marks, four choices on multiple choice, enough variety |

---

## 4. Building a grade, step by step

Each step names what "done" means. Grade 6 is used as the example.

### Step 0: Make the app grade-aware ✓ done (2026-10-24)

`src/prep/content/registry.ts` lists every grade with content: its strands, standards, generators, `makeItem`
function, walkthroughs, and the blueprint's readiness/supporting counts per strand. The screens (Today, skills,
practice, Learn) look content up there. A grade with no content yet uses the nearest built grade, and Today says
so. The tests in `tests/prep/content.test.mjs` run once per registered grade.

To add a grade, add its files (Steps 2–4), then one entry to `GRADES` in `registry.ts`:

```ts
4: {
  grade: 4, subject: 'math', strands: G4_MATH_STRANDS, standards: G4_MATH,
  generators: G4_GENERATORS, makeItem: makeG4MathItem, lessons: G4_MATH_LESSONS,
  blueprint: { readiness: [3, 5, 4, 1], supporting: [10, 7, 7, 4] },
},
```

Progress needs no change: standard codes start with the grade (`6.4B`), so mastery records never collide.

### Step 1: Get the documents  ·  S

```bash
G=6; mkdir -p /tmp/tea && cd /tmp/tea
for k in math-assessed-curriculum math-summative-blueprint math-boy-moy-blueprint; do
  curl -sSLO "https://tea.texas.gov/data-reports/staar/sst-$G-$k.pdf"
done
pdftotext -layout sst-$G-math-assessed-curriculum.pdf ac.txt   # pdftotext comes with poppler (brew install poppler)
pdftotext -layout sst-$G-math-summative-blueprint.pdf bp.txt
```

**Done when** you have the standards text and the blueprint's numbers (section 2 has them for 2026).

### Step 2: Write the standards list  ·  S

Create `src/prep/data/standards/g6-math.ts` like `g5-math.ts`:
- **Codes:** one entry per student expectation in `ac.txt`, coded `6.4B` style. Check each code against the
  TEKS: TEA's grade 5 document printed 5.4H as "5.4 (A)" under strand 3.
- **Fields:** `strand` and `kind` (readiness or supporting) exactly as the PDF says, and the TEKS wording in `text`.
- **`title`:** your own few words a 6th grader understands ("Unit rates", not "Represent mathematical and
  real-world problems involving ratios and rates…").
- **Grade 7:** use its own strand 1 name.

**Done when** the registry entry's `blueprint` matches section 2 and `npm run test:prep` passes (it checks the
count per strand).

### Step 3: Write the generators  ·  L

`src/prep/content/generators/g6/strand1.ts` … `strand4.ts` and `index.ts`, one strand file at a time. For
each standard, write at least one `Gen`: `(rng, difficulty) => Draft`.

Rules that keep questions fair and test-like:
- **Compute every answer** from the random values; never type one in. Keep numbers friendly for the grade
  (no calculator until grade 8).
- **Difficulty** 1 = the core idea with small numbers, 2 = the usual test level, 3 = a two-step or word problem,
  or the classic trap.
- **Wrong answers are real mistakes**, not random numbers: swapped coordinates, adding denominators, a lost zero,
  area instead of perimeter. Give the most tempting one a `why` ("That swaps x and y"). `mc` adds nearby values
  if you run short, but aim for three real ones.
- **Question types:** mostly `mc` (1 point). Use `multi` ("Select TWO", 2 points) for sorting and
  true-statement questions, and `inline` drop-downs (1 point per menu) for completing a sentence or table.
  No `twoPart` in math.
- **Explanations** (`explain`) are short sentences that end with the answer. The walkthrough splits them on
  ". " into steps, so write one step per sentence and keep decimals written like 0.5.
- **Figures** instead of describing pictures in words wherever the test would show one. New figure kind? Add it
  to `Figure` in `types.ts`, draw it in `Figures.tsx`, and add a check to `figureProblems` in `scoring.ts`.
  Every figure needs `alt` text.
- **Text markup:** `{3/4}` for fractions, `2{1/3}` for mixed numbers, `**bold**` for "least to greatest" or
  "Select TWO". Keep names and contexts varied and Texas-friendly.
- **Wording:** plain grade-level English. Read every stem aloud once.

**Done when** the grade's tests pass (Step 5), and a dump of one question per standard at each difficulty
reads well to you (the dump script is in Step 5).

### Step 4: Write the walkthroughs  ·  M

`src/prep/content/lessons/g6-math.ts`, one `Lesson` per standard:
- **`goal`:** one sentence, "what you'll be able to do".
- **`words`:** 1–4 key terms with kid-friendly meanings.
- **`ideas`:** 2–4 cards, each a title, two or three sentences, and an optional `example` line and `figure`.

The worked example and "your turn" question come from the generators at difficulty 1, so a lesson only needs
the ideas.

**Done when** every standard has one (the test checks), and each lesson's ideas would let a child do a
difficulty 1 question.

### Step 5: Test and review  ·  S per grade

```bash
npm run test:prep   # validity, answer keys, four choices, variety, blueprint counts, walkthroughs
npm run lint && npm run build
```

Two scripts made grade 5 much faster to check. Put them in `scripts/prep/` when the registry exists.
- **audit:** generate 300 questions per standard and difficulty, and list every problem `itemProblems()`
  finds, grouped by standard. Fix until it prints nothing.
- **dump:** print one question per standard at a chosen difficulty and seed: the stem, the choices with the
  key starred, and the explanation. Read it like a teacher would.

Then click through the grade in the browser: Today, the skills page, a walkthrough, a practice session, at
laptop and phone sizes.

**Done when** tests, lint and build pass, the dump reads well, and a Texas teacher has reviewed the questions
and walkthroughs against the TEKS.

---

## 5. Using Claude to draft a grade

Drafting with Claude speeds up Steps 2–4. The tests and your review make the result trustworthy. Work one
strand at a time, and give Claude:
1. the relevant part of `ac.txt` (the standards text),
2. `g5-math.ts`, `build.ts`, one grade 5 strand file and `lessons/g5-math.ts` as patterns,
3. the rules in Step 3 (paste them),
4. the ask: *"Write `src/prep/content/generators/g6/strand2.ts` for these standards, following the grade 5
   pattern and these rules. Then run `npm run test:prep` and the audit, and fix every problem."*

Always review:
- **The answer logic of every generator.** A wrong formula gives a wrong key, every time, and the tests can't tell.
- **Readiness/supporting labels**, checked against the PDF.
- **Wording for the age group.**

---

## 6. Effort

Rough, for one person with Claude drafting:

| Grade | Standards | Standards list | Generators | Walkthroughs | Review |
|---|---|---|---|---|---|
| Step 0 (once) | done | | | | |
| 4 | 41 | S | L | M | S |
| 6 | 51 | S | L+ | M | S |
| 7 | 38 | S | L | M | S |
| 8 | 40 | S | L (more new figures) | M | S |

Suggested order: **grade 4** (it reuses most grade 5 figures and generator ideas), then 6, 7, 8.

---

## 7. Reading, science and social studies

The same folder has reading (RLA) documents for every grade:
`sst-{grade}-rla-assessed-curriculum.pdf` and `sst-{grade}-rla-summative-blueprint.pdf`.

| Grade | Reading standards (R + S) | Questions | Points |
|---|---|---|---|
| 3 | 53 (13 + 40) | 27–28 | 34 |
| 4 | 52 (14 + 38) | 27–28 | 34 |
| 5 | 52 (14 + 38) | 28–29 | 36 |
| 6 | 43 (15 + 28) | 28–29 | 36 |
| 7 | 44 (16 + 28) | 28–29 | 36 |
| 8 | 41 (15 + 26) | 30–31 | 38 |

**Reading can't be generated like math.** It needs:
- **Original passages:** fiction, informational, poetry, drama and paired passages.
- **Questions written for each passage**, including multipart questions (allowed in reading).
- **One essay per test**, scored on TEA's 6-point rubric.

[docs/STAAR_PIVOT.md](STAAR_PIVOT.md) section 7 has the plan.

Science (grades 5 and 8) and social studies (grade 8) are on the HB 8 page.

---

## 8. Kindergarten to grade 3

### What Texas requires

| Grade | State test | Required check-ups (TEC §28.0063, from HB 2) |
|---|---|---|
| Kindergarten | None | Reading readiness at the start of the year (TEC §28.006). From 2027–28, also middle- and end-of-year reading and math. |
| 1 and 2 | None | From 2027–28: beginning-, middle- and end-of-year reading and math. |
| 3 | **STAAR math and reading** (the SST from 2027–28; documents are in sections 1–2 under `sst-3-…`) | From 2027–28: beginning- and middle-of-year reading and math; the state test is the end of year. |

- **What schools may use:** from 2027–28 they must pick from a **commissioner-approved list** of "foundational literacy and numeracy instruments" for every K–3 student. TEA hasn't published that list yet.
- **2026–27 is an interim year:**
  - kindergarten uses Circle (formerly TX-KEA) or mCLASS for reading readiness;
  - grades 1–2 can keep TPRI/Tejas LEE or mCLASS;
  - the rest is optional.
- **Dyslexia screening** stays separate: kindergarten and grade 1 (TEC §38.003).
- **Source:** [TEA: HB 2 implementation, foundational literacy and numeracy instruments (January 29, 2026)](https://tea.texas.gov/taa-letters/hb-2-implementation-foundational-literacy-and-numeracy-instruments-and-extension).

**Curriculum for K–2:** there is no "assessed curriculum" subset, so build from the TEKS themselves:
- **Math:** 19 TAC §111.2 (K), §111.3 (grade 1), §111.4 (grade 2), in [Chapter 111](https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=19&pt=2&ch=111).
- **Reading:** §110.2–110.4 in [Chapter 110](https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=19&pt=2&ch=110).

Grade 3 uses its SST assessed curriculum: 44 math standards and 53 reading standards.

### i-Ready, which many districts use (Denton ISD among them)

i-Ready Diagnostic (Curriculum Associates) is an adaptive reading and math test that districts give two or three
times a year (fall, winter, spring).
- **Math domains:** Number and Operations; Algebra and Algebraic Thinking; Measurement and Data; Geometry.
- **Reading domains:** Phonological Awareness; Phonics; High-Frequency Words; Vocabulary; Comprehension of
  Literature and of Informational Text.
- **Whether it counts in Texas:** whether i-Ready is on Texas's approved lists (K–3, or the grade 3–8
  beginning/middle-of-year alternatives under HB 8) isn't published yet. Check the TEA lists when they come out.

Practice "like i-Ready" means practising the same domains in the same adaptive, short-session way, aligned to the
TEKS. Never use their questions or name in the product: "i-Ready" is Curriculum Associates' trademark.

### How K–3 practice would differ from grades 4–8

| | Grades 4–8 (built for grade 5) | K–3 |
|---|---|---|
| Who reads the question | The child | **Read aloud** for K–2: every question, choice and walkthrough needs audio |
| Standards list | TEA's assessed curriculum | TEKS (K–2), assessed curriculum (grade 3) |
| Grouping | 4 test strands | i-Ready-style domains, which map onto TEKS strands (math) and the foundational reading skills |
| Screen | Laptop first | Tablet first: big tap targets, few words |
| Question types | Multiple choice, select two, drop-downs | Mostly tap-to-choose with pictures; drag and count (ten frames, base-ten blocks, coins, clocks) |
| Check-ups | Planned (adaptive BOY/MOY-style) | The main feature: short fall/winter/spring check-ups that place a child by domain, then targeted practice |

**Audio is the hard part.** The app plays only pre-recorded Gemini clips; there is no browser voice. Three ways:
1. **Templated questions with pre-recorded parts** ("How many apples?" plus number clips), recorded by the existing
   `npm run audio` pipeline. Works now. Limits question variety.
2. **Record on demand** in a Cloud Function and cache the clips in Firebase Storage. Any question, but needs a server.
3. **Allow the browser's voice for Prep only.** Easiest, but the quality is uneven and the app removed it on
   purpose.

Recommendation: start with 1 for kindergarten and grade 1; move to 2 when there's a server for essay scoring
anyway.

**Grade 3** is the easiest K–3 grade to start with: it has TEA's documents, and most grade 3 children read well
enough that read-aloud can come later.

### Profile and switch changes needed

- **Ask the grade from kindergarten:** today the grade is asked only from age 9, and it is stored as 3–8.
  - Store K as 0, which means the "not asked" value moves to something else.
  - Update `firestore.rules` and the rules tests.
- **Show the switch to K–3:** the Learn / Prep switch shows when `canPrep` is true (grade 4 and up today, in
  `src/firebase/schema.ts` and `src/context/AppContext.tsx`). When a K–3 grade has content, widen `canPrep` for it.
  Keep the games as the default for K–3 (`isPrep` only when the child switches), and keep Prep as the default from
  grade 4.

### Order

Grade 3 math and reading, then grade 2, 1 and K (math first, then reading foundations). Each grade follows
section 4. For K–2, replace Step 2's "assessed curriculum" with the TEKS sections above, and add an audio step.
