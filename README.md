# Bodhi Learn 🌟

A playful learning web app and offline-capable PWA for children aged **4 to 14**: reading, math, logic and science that start at the right level for the child's age and adjust as they play.

Built with **React**, **Vite**, **TypeScript**, **Web Audio API**, and **Firebase** (Auth + Firestore). Hosted on **Firebase Hosting**, with **Google sign-in** and **Cloud Firestore** to save progress.

---

## 🚀 Features

### 🧭 0. One home screen, four subjects, every age
- **Welcome first.** A new visitor is asked their age (4–14) before anything else is shown, then their name.
  From age 8 they are also offered **Sign in with Google** (progress stored in Firebase from the first launch) or
  **Play as guest** (progress stays in this browser's localStorage). Younger children go straight in as guests;
  a parent can sign in later from Parent Settings. Signing in to an account that already has progress skips the
  questions and loads it; signing out clears the device and asks again. Nothing is saved to the device until the
  questions are answered.
- **Home** is grouped by subject (Words, Math, Logic, Discover, Rewards). Each group has a filled **Challenge**
  row (adaptive) and slim game rows that suit the child's age (`src/data/subjects.ts` holds the map and each
  game's age range).
- **Ages 4–14.** The age picks the games shown and where the quizzes start; it can be changed in Parent Settings.
- **Challenges** are 8-question rounds. Level 1 (about age 4) to 10 (about age 14), adaptive: four right in a row
  goes up, two wrong in a row goes down, and the child can also pick a level. Level and accuracy are saved per
  subject. Math is generated (`src/content/mathGen.ts`: counting, times tables, fractions, percentages,
  pre-algebra, Pythagoras…); Words, Logic and Discover come from question packs (below).

### ✏️ 1. ABC Journey & Letter / Spelling Tracing
- **ABC Tracing Journey**: Big-screen tactile letter tracing for A–Z (e.g. *A for Apple 🍎*, *B for Ball ⚽*). Features standard kindergarten handwriting lines (sky line, plane line, grass line), capital & small letter toggles, and magic rainbow glowing brush strokes.
- **Word & Spelling Tracing**: Practice tracing and spelling complete high-frequency words (e.g., *APPLE*, *BALL*, *CAT*, *STAR*, *SUN*, *BODHI*) with letter-by-letter audio pronunciation and tactile ruled guidelines.
- **Celebratory Feedback**: Confetti explosions, star fanfares, and speech praise whenever kids complete tracing tasks.

### 🔤 2. Reading & Phonics
- **Alphabet Phonics Board**: Complete A–Z interactive cards with letter sounds, sample vocabulary, and crystal-clear pronunciation.
- **Letter Quest Challenge**: Interactive game asking kids to find specific letters, rewarding correct answers with stars and celebrations.
- **Sight Words Safari**: High-frequency word builder with letter scrambling, flashcards, and voice playback across Pre-K, Kindergarten, and 1st Grade.
- **Illustrated Read-Along Stories**: Engaging storybooks with synchronized voice narration and **tap-to-read words** so kids can click any individual word to hear it pronounced.

### 🔢 2. Mathematics & Logic
- **Counting Meadow**: Floating items (balloons, stars, apples) that pop with ascending musical pentatonic chimes and spoken numbers.
- **"How Many?" Quiz**: Visual counting challenges with large kid-friendly choices.
- **Visual Math Kitchen**: Concrete visual addition and subtraction equations with real tangible counters.
- **Code the Bot** 🤖: Program a robot to the star with arrow blocks. Teaches sequences, **loops** (a *Repeat* block for 1st grade, where the block limit makes a loop necessary) and **debugging** (a failed run highlights the block that went wrong).
- **Pattern Parade** 🎠: "What comes next?" and "What is missing?" with picture patterns (AB, AAB, ABC, AABB…) and counting patterns (by 1, 2, 3, 5, and counting down).
- **Magic Machine** ⚙️: Numbers go into a machine and come out changed. Study the examples, find the secret rule (+n, −n, double, triple) and predict the next output. That is a *function*, in programming terms.
  All three scale with the age setting, award stars, and are narrated. The logic lives in `src/data/logicData.ts`
  and is unit tested with `npm run test:logic` (every robot level must be solvable within its block limit, and
  every pattern and machine question must have exactly one right answer).

### 🎨 3. Gamification & Rewards
- **Sticker Playground**: Kids earn stars for completing learning activities, which they can spend to unlock collectible animated stickers.
- **Interactive Sticker Board**: Children can place and reposition their unlocked stickers on a scenic play canvas.
- **Celebration Effects**: Confetti bursts and cheering audio fanfares.

### 🛡️ 4. Parental Controls & Settings (Gated)
- **Math Security Gate**: Settings are protected by an adult math challenge (e.g., `8 + 7 = ?`) to avoid accidental taps.
- **Learner Profile**: Customize the child's name and age (4–14). From age 9 the gate is a harder sum.
- **Sound & Voice Controls**: Toggle sound effects and voice narration.
- **Reward Gifts**: Parents can gift stars for offline chores or real-world milestones.

### 📱 5. Progressive Web App (PWA) & Offline Ready
- Complete `manifest.json` and `sw.js` (Service Worker) for standalone home-screen installation on iPads, tablets, and phones.
- Zero-latency Web Audio API synthesizers that work 100% offline without needing external audio downloads.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run production build
npm run build
```

---

## 💡 Ideas & Roadmap

What could come next (with effort estimates and what each idea needs) is in [docs/IDEAS.md](docs/IDEAS.md).

---

## 🎙️ Narration Audio

All narration is recorded with **Gemini 3.8 Flash Lite TTS** (voice *Sulafat*) into `public/audio/`. Every clip is
listed in `scripts/audio/manifest.mjs`, built from `src/data/learningData.ts`, so new words,
stories and sentences get audio automatically.

Needs `GEMINI_API_KEY` in `src/.env` and `ffmpeg`:

```bash
# Render anything new or changed (resumable; re-run to continue or retry failures)
npm run audio

# Check every clip the app uses is in the manifest (no API calls)
npm run audio -- --check

# Compare voices, then open http://localhost:5188/_audition/
npm run audio -- --audition

# Switch the whole app to another voice
npm run audio -- --voice Achird --force

# Remove clips the app no longer uses
npm run audio -- --prune
```

If Flash Lite's daily quota runs out mid-run, the script moves on to `gemini-3.8-flash-tts`, then
`gemini-3.1-flash-tts-preview` (`--no-fallback` to just stop); later runs re-render those clips
with Flash Lite so the voice stays consistent. `npm run audio:verify` transcribes every clip with Gemini and flags ones that don't match their text
(add `-- --listen` for a page of flagged clips to play). It is good at sentences and unreliable on
single words, and voice models will "complete" unfinished sentences, so record whole sentences.
Use `--only words` or `--match "phonics_B"` to redo specific clips. Raw API audio is cached in
`.audio-cache/`, so re-encoding never costs extra API calls. After regenerating, bump
`CACHE_NAME` in `public/sw.js` so installed apps pick up the new recordings.

The earlier OpenAI recordings are archived locally in `audio-archive/` (git-ignored).

---

## 📦 Learning content (Firestore → device)

The question packs (`src/content/packs/{reading,science,logic}.json`) live in two places:

- **Bundled** in the app, so a first launch works offline.
- **Firestore** at `content_packs/{subject}` plus `content_meta/current` (public to read, never writable from the app).
  On every launch (and when the device comes back online) the app reads `content_meta/current`, downloads only
  packs whose `version` is newer than what it has, and keeps them in IndexedDB (`src/content/store.ts`).
  Anything downloaded is validated first.

To change questions: edit a pack, **bump its `version`**, then publish:

```bash
npm run content:seed -- --dry-run   # see what would change
npm run content:seed                # publish packs newer than what is online (needs `gcloud auth login` with admin access)
```

Math generators and the early-years games (words, stories, tracing) are code/bundled assets, not Firestore content.

---

## ☁️ Accounts, Sync & Hosting (Firebase)

Project: `bodhi-learn` · Live site: https://bodhi-learn.web.app

- **Guest mode** works with no account (progress stays on the device).
- **Parents sign in with Google** under *Parent Settings* (behind the math gate), so children never see
  a login screen. Stars, stickers, name, age, per-subject levels and accuracy, and voice settings sync live to Firestore at
  `users/{uid}` and work offline. A new account adopts the device's progress; an account that already
  has progress wins. Signing out clears the device; *Delete account* removes the account and its data.
- **Security rules** (`firestore.rules`): each user can only read and write their own document, and the
  data shape is validated. Tested with `npm run test:rules` (needs Java for the emulator).
- The mute button is per device and is not synced.

```bash
npm run emulators        # Auth + Firestore emulators (real rules, fake accounts)
npm run dev:emulators    # the app pointed at the emulators, http://localhost:5190
```

### Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`: lint, build, rules tests, then deploys
Hosting and Firestore rules. It authenticates with the `FIREBASE_SERVICE_ACCOUNT` repository secret,
the key of the `github-deployer` service account (roles: Hosting Admin, Firebase Rules Admin, and
read-only Firebase/Firestore viewer). To rotate it, create a new key for that account, update the
secret with `gh secret set FIREBASE_SERVICE_ACCOUNT < key.json`, then delete the old key.

Manual deploy (needs `firebase login`): `npm run deploy`
