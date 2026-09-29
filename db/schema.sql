-- Bodhi Learn SQLite Database Schema
-- Compatible with SQLite3 and Cloudflare D1

CREATE TABLE IF NOT EXISTS alphabet (
  letter TEXT PRIMARY KEY,
  word TEXT NOT NULL,
  emoji TEXT NOT NULL,
  color TEXT NOT NULL,
  phonics_sound TEXT NOT NULL,
  sentence TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sight_words (
  id TEXT PRIMARY KEY,
  word TEXT NOT NULL,
  level TEXT NOT NULL CHECK(level IN ('pre-k', 'kindergarten', 'grade1')),
  hint TEXT NOT NULL,
  emoji TEXT NOT NULL,
  example_sentence TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS stories (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  cover_emoji TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS story_pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  story_id TEXT NOT NULL,
  page_order INTEGER NOT NULL,
  text TEXT NOT NULL,
  image_emoji TEXT NOT NULL,
  bg_color TEXT NOT NULL,
  FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reward_stickers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  emoji TEXT NOT NULL,
  cost_stars INTEGER NOT NULL DEFAULT 5
);

CREATE TABLE IF NOT EXISTS tracing_words (
  id TEXT PRIMARY KEY,
  word TEXT NOT NULL,
  emoji TEXT NOT NULL,
  hint TEXT NOT NULL
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_sight_words_level ON sight_words(level);
CREATE INDEX IF NOT EXISTS idx_story_pages_story ON story_pages(story_id, page_order);
