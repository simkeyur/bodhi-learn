// Typed SQLite Data Access Layer for Bodhi Learn (Cloudflare D1 & SQLite)

export interface DbAlphabetRow {
  letter: string;
  word: string;
  emoji: string;
  color: string;
  phonics_sound: string;
  sentence: string;
}

export interface DbSightWordRow {
  id: string;
  word: string;
  level: 'pre-k' | 'kindergarten' | 'grade1';
  hint: string;
  emoji: string;
  example_sentence: string;
}

export interface DbStoryRow {
  id: string;
  title: string;
  cover_emoji: string;
}

export interface DbStoryPageRow {
  id: number;
  story_id: string;
  page_order: number;
  text: string;
  image_emoji: string;
  bg_color: string;
}

export interface DbStickerRow {
  id: string;
  name: string;
  emoji: string;
  cost_stars: number;
}

export interface DbTracingWordRow {
  id: string;
  word: string;
  emoji: string;
  hint: string;
}

// Helper queries for Cloudflare D1 or SQLite
export const SQL_QUERIES = {
  getAllAlphabet: 'SELECT * FROM alphabet ORDER BY letter ASC;',
  getAlphabetLetter: 'SELECT * FROM alphabet WHERE letter = ?;',
  getSightWordsByLevel: 'SELECT * FROM sight_words WHERE level = ? ORDER BY word ASC;',
  getAllSightWords: 'SELECT * FROM sight_words ORDER BY level, word;',
  getAllStories: 'SELECT * FROM stories;',
  getStoryWithPages: `
    SELECT s.id as story_id, s.title, s.cover_emoji,
           p.page_order, p.text, p.image_emoji, p.bg_color
    FROM stories s
    JOIN story_pages p ON s.id = p.story_id
    WHERE s.id = ?
    ORDER BY p.page_order ASC;
  `,
  getAllStickers: 'SELECT * FROM reward_stickers ORDER BY cost_stars ASC;',
  getAllTracingWords: 'SELECT * FROM tracing_words ORDER BY word ASC;',
};
