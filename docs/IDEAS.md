# Ideas & Roadmap

A living list of what could come next for Bodhi Learn, with a rough effort and what each idea needs.
Pick from the top; the "Start here" list is ordered by value for the effort.

**Effort:** S = a day or less · M = a few days · L = a week or more
**Audio:** whether it needs new narration clips. Add the text to `scripts/audio/manifest.mjs`, run
`npm run audio`, then `npm run audio:verify` (see *Audio notes* at the bottom).

---

## Start here

| # | Idea | Why | Effort | Audio |
|---|------|-----|--------|-------|
| 1 | **Fix the Bug** (Code the Bot) | Debugging is the most transferable coding skill, and the robot already highlights the failing block, so the groundwork exists | S–M | a few phrases |
| 2 | **Sort-o-matic** (if / then sorting) | Introduces conditionals ("IF red THEN left, ELSE right") with a very visual game | M | a few phrases + item names |
| 3 | **Parent progress dashboard** | Parents sign in already; showing *what* the child practised and where they struggle is the main reason to keep the account | M | none |
| 4 | **Real phoneme recordings** | Letter *sounds* ("kuh", "mmm") are the foundation of phonics, and text-to-speech distorts them | S | recordings (not TTS) |
| 5 | **Bot skins unlocked with stars** | Gives stars a second use besides stickers and makes the coding world feel personal | S | none |

---

## Logic Lab (programming-flavoured math)

Already built: **Code the Bot** (sequences, loops, debugging), **Pattern Parade** (patterns), **Magic Machine** (functions).
Level progress for Code the Bot is saved per account (`progress.botSolved`).

### Fix the Bug  ·  M  ·  concept: debugging
A program is shown already built, but it fails. The child finds the wrong block and fixes it (tap to delete,
tap an arrow to replace). Reuses the simulator and the red "bug" highlight. Needs a `bugged` field on levels:
a preset program plus the expected fix. Test: every level's preset program must fail and have a one-block fix.

### Sort-o-matic  ·  M  ·  concept: conditionals / Boolean logic
Items roll along a belt; a rule card says "If it is **red** → left basket, otherwise → right". The child taps
the basket. Older kids get two conditions ("red **and** big"), then "or". Rules are data, so the generator can
guarantee exactly one right basket (like the pattern and machine tests).

### Binary Beads  ·  S  ·  concept: how computers count
A row of 4 lights (8-4-2-1). Make a number by switching lights on, or read the lights and say the number.
Grade-1 only, numbers 1–15. Pairs naturally with Magic Machine.

### Teach the Bot a move (functions)  ·  M  ·  concept: procedures
Define a named block (e.g. "Hop" = → →), then use it several times. Extends the Repeat block to a reusable
one. Needs a program model that allows a block to reference another.

### Pattern Dancer (patterns + loops)  ·  M
Build a repeating drum or dance pattern with a Repeat block and watch/hear it play. Connects Pattern Parade
and Code the Bot.

### Event Stage ("when tapped, do…")  ·  L  ·  concept: events
A small Scratch-Jr-like stage: tap a character and a block program reacts. A bigger step; do it after Fix the Bug
and functions.

### Smaller ones
- **Treasure map** (grid coordinates): "go to column 3, row 2".
- **Sort the numbers** (an algorithm): swap neighbours to put numbers in order.
- **Logic gates for 7–8s**: "which switches open the door?" (AND / OR).
- **Level creator**: a parent or child designs a robot level and shares a code. Needs the `botSolved` idea
  extended to custom levels.

---

## Math (the classics)

- **Place value blocks**: tens and ones, building 13 from 1 ten and 3 ones. (S–M)
- **Skip counting on a number line**: a hopping frog, by 2s, 5s and 10s. (S)
- **Greater / less than**: the crocodile mouth eats the bigger number. (S)
- **Number bonds**: which two numbers make 10? (S)
- **Shapes and geometry**: sort and build with shapes; count sides. (M)
- **Clock reading**: o'clock and half past, with a draggable hand. (M)
- **Money**: coins and prices for a shop game. (M)
- **Fractions**: halves and quarters on a pizza. (M)
- **Picture word problems**: "Bodhi has 3 apples and eats 1". (M, needs new sentences per problem)

---

## Reading & writing

- **Sound it out (Slide & Read)**: slide slowly under c-a-t and hear each sound, then the blend. Depends on idea #4
  (real phoneme recordings). (M)
- **Rhyme match**: which picture rhymes with "cat"? (S)
- **Syllable clap**: tap once per syllable. (S)
- **Picture-word match**: drag the word to the picture. (S)
- **Build a sentence**: tap word tiles into order; the sentence is then read back. (M)
- **Trace scoring**: check how closely the child's trace follows the letter, with gentle feedback and stroke order. (L)
- **Upper/lower-case matching**: pair "A" with "a". (S)
- **Story creator**: choose a character, place and problem and get a short read-along story. (L)

---

## Parents & accounts

- **Progress dashboard**: letters traced, words spelled, robot levels solved, recent activity, and where the
  child needs help. Needs a small event log (for example `users/{uid}/activity/{day}`) and matching rules. (M)
- **Multiple children** under one parent account (a profile picker; `users/{uid}/profiles/{id}`). (M–L)
- **Daily goal and streak**: "5 stars today" with a gentle streak. (S)
- **Bedtime / time limit**: the app politely locks after N minutes (parent-set). (S–M)
- **Weekly summary email** (a Cloud Function). Needs a privacy review first. (L)
- **Printable certificate** when a level is finished. (S)

---

## Rewards & game feel

- **Bot skins and sticker rarity**: unlock with stars; a sticker book that fills up like a collection. (S–M)
- **Badges**: "Code Master" (all robot levels), "Pattern Pro". Needs badge ids stored like `botSolved`. (S–M)
- **Buddy the Bear reactions**: he reacts to wins and comforts after mistakes, and tells you your streak. (S)
- **Seasonal sticker packs.** (S)

---

## Voice & audio

- **Converge on Flash Lite**: right now the clips are split between Gemini 3.8 Flash Lite and 3.8 Flash because of the
  daily quota. Run `npm run audio` on a quiet day to re-render the rest with the primary model.
- **Say the child's name**: "Great job, Mia!" needs a clip per name. Options: generate on demand through a Cloud
  Function and cache in Firebase Storage, or offer a short list of common names. (M–L)
- **Other languages**: Gemini TTS supports 130+ languages; the manifest would need a translated text per clip and
  a language setting. (L)
- **A second voice**: a "storyteller" voice for books and a "coach" voice for games. (S)

---

## Platform & quality

- **App Check** for Firestore, so other sites can't use your quota with the public web key. Do this before
  sharing the app widely. (S)
- **Privacy policy and parental consent** (COPPA / GDPR-K). The app stores a parent's Google name and email and a
  child's first name. (M, not code)
- **Playwright end-to-end tests in CI**: play each world headlessly. The emulator setup already exists
  (`npm run emulators`). (M)
- **Accessibility pass**: screen-reader labels exist on most controls, but run an axe audit and check keyboard
  play and `prefers-reduced-motion`. (S–M)
- **Install prompt** for the PWA and an "update available" banner when a new version is deployed. (S)
- **Deployment key hardening**: the GitHub deploy credential is a long-lived service-account key; moving to
  Workload Identity Federation removes the key entirely. Pin third-party actions by SHA. (M)
- **Lint cleanup**: the `set-state-in-effect` and `exhaustive-deps` warnings in the world components. (S)
- **Remove the old SQLite / D1 code** (`db/`, `src/data/dbClient.ts`, `scripts/init_db.mjs`); nothing uses it. (S)
- **Firestore backups** (scheduled export) once there are real users. (S)

---

## Audio notes

- Generate with `npm run audio`. The checker is `npm run audio:verify` (it transcribes each clip with Gemini and compares
  it with the manifest text). Add `-- --listen` to get a page of flagged clips to play at `/_check/`.
- **Voice models invent endings for unfinished sentences.** "Can you find the letter" was rendered as "…the letter B?".
  Record **whole sentences** and avoid sentence fragments and isolated single letters where you can.
  The Letter Quest and ABC tracing now use one complete clip per letter for exactly this reason.
- The transcriber is unreliable on one-word clips (it mishears "Pig" as "take"), so for single words and
  letters, listen to flagged ones instead of trusting the report.
- Models have a daily request quota. The generator moves to the next model when one runs out and resumes where it
  stopped; see the README.

---

## Known limits (today)

- Two devices changing the same thing at the same moment resolve last-write-wins (solved robot levels are
  merged, so those are never lost).
- Replaying a solved robot level gives no extra star.
- On very short phones (about 667px tall) the bottom buttons of the robot and machine screens sit slightly under
  the tab bar until you scroll a little.
- Narration quality for a few single words and letters should be checked by ear.
