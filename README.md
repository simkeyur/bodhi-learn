# Bodhi Learn 🌟

A playful, kid-friendly learning web application and offline-capable PWA designed for children (Ages 3–8) to learn reading, phonics, sight words, counting, and visual mathematics.

Built with **React**, **Vite**, **TypeScript**, **Web Audio API**, and **Web Speech API**. Deploys seamlessly to **Cloudflare Workers** (with Static Assets) or **Cloudflare Pages**.

---

## 🚀 Features

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

### 🎨 3. Gamification & Rewards
- **Sticker Playground**: Kids earn stars for completing learning activities, which they can spend to unlock collectible animated stickers.
- **Interactive Sticker Board**: Children can place and reposition their unlocked stickers on a scenic play canvas.
- **Celebration Effects**: Confetti bursts and cheering audio fanfares.

### 🛡️ 4. Parental Controls & Settings (Gated)
- **Math Security Gate**: Settings are protected by an adult math challenge (e.g., `8 + 7 = ?`) to avoid accidental taps.
- **Learner Profile**: Customize the child's name and learning difficulty bracket (Pre-K, Kindergarten, or 1st Grade).
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

If Flash Lite's daily quota runs out mid-run, the script switches to `gemini-3.1-flash-tts-preview`
for the rest (`--no-fallback` to just stop); the next run re-renders those clips with Flash Lite
so the voice stays consistent. Use `--only words` or `--match "phonics_B"` to redo specific clips. Raw API audio is cached in
`.audio-cache/`, so re-encoding never costs extra API calls. After regenerating, bump
`CACHE_NAME` in `public/sw.js` so installed apps pick up the new recordings.

The earlier OpenAI recordings are archived locally in `audio-archive/` (git-ignored).

---

## ☁️ Cloudflare Deployment

### Deploy via Wrangler:
```bash
npm run deploy
```

### Deploy via Cloudflare Pages:
1. Connect this GitHub repository (`simkeyur/bodhi-learn`) in the Cloudflare Dashboard.
2. Select **Framework preset**: `Vite` (or `None`).
3. Set **Build command**: `npm run build`
4. Set **Build output directory**: `dist`
