// Grade 8 reading language arts: the 41 student expectations the SST can assess, from TEA's
// "SST Grade 8 RLA Assessed Curriculum" (revised August 2026), in 2 reporting strands.
// Readiness 10 + 5, supporting 20 + 6. Total = 41 standards.
// In August 2026, TEA changed 2.B, 7.B, 9.A, and 10.D.vii from Readiness to Supporting,
// leaving exactly 10 Readiness in Strand 1 and 5 Readiness in Strand 2.
// Essay-only standards (6B, 11B, 11C, 11D) carry no label and are not listed: the essay page covers them.
// Codes carry 'rla:' so they never clash with math codes.

import type { Standard, Strand } from '../../content/types';

export const G8_RLA_STRANDS: Strand[] = [
  { id: 1, title: 'Reading', full: 'Reporting Strand 1: Reading' },
  { id: 2, title: 'Writing', full: 'Reporting Strand 2: Writing (revising and editing)' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;
const s = (code: string, strand: number, kind: typeof R | typeof S, title: string, text: string): Standard =>
  ({ code: `rla:${code}`, strand, kind, title, text });

export const G8_RLA: Standard[] = [
  // ---------- Strand 1: Reading ----------
  s('8.2A', 1, S, 'Dictionary, glossary, thesaurus', 'Use print or digital resources to determine the meaning, syllabication, pronunciation, word origin, and part of speech.'),
  s('8.2B', 1, S, 'Words in context', 'Use context within or beyond a paragraph to clarify the meaning of unfamiliar or ambiguous words.'),
  s('8.2C', 1, S, 'Greek and Latin roots', 'Determine the meaning and usage of grade-level academic English words derived from Greek and Latin roots such as ast, qui, path, mand/mend, and duc.'),
  s('8.5C', 1, S, 'Predictions and text structures', 'Make, correct, or confirm predictions using text features, characteristics of genre, and structures.'),
  s('8.5E', 1, R, 'Make connections', 'Make connections to personal experiences, ideas in other texts, and society.'),
  s('8.5F', 1, R, 'Inferences and evidence', 'Make inferences and use evidence to support understanding.'),
  s('8.5G', 1, R, 'Key ideas and details', 'Evaluate details read to determine key ideas.'),
  s('8.5H', 1, R, 'Synthesize new understanding', 'Synthesize information to create new understanding.'),
  s('8.6C', 1, R, 'Text evidence', 'Use text evidence to support an appropriate response.'),
  s('8.6D', 1, R, 'Paraphrase and summarize', 'Paraphrase and summarize texts in ways that maintain meaning and logical order.'),
  s('8.7A', 1, S, 'Theme development', 'Analyze how themes are developed through the interaction of characters and events.'),
  s('8.7B', 1, S, 'Character motivations and conflict', 'Analyze how characters\' motivations and behaviors influence events and resolution of the conflict.'),
  s('8.7C', 1, R, 'Non-linear plot development', 'Analyze non-linear plot development such as flashbacks, foreshadowing, subplots, and parallel plot structures and compare it to linear plot development.'),
  s('8.7D', 1, S, 'Setting and character values', 'Explain how the setting influences the values and beliefs of characters.'),
  s('8.8A', 1, S, 'Literary genres', 'Demonstrate knowledge of literary genres such as realistic fiction, adventure stories, historical fiction, mysteries, humor, fantasy, science fiction, and short stories.'),
  s('8.8B', 1, S, 'Poetic forms and graphical elements', 'Analyze the effect of graphical elements such as punctuation and line length in poems across a variety of poetic forms such as epic, lyric, and humorous poetry.'),
  s('8.8C', 1, S, 'Dramatic action and staging', 'Analyze how playwrights develop dramatic action through the use of acts and scenes.'),
  s('8.8D.i', 1, R, 'Thesis and supporting evidence', 'Analyze characteristics and structural elements of informational text, including the controlling idea or thesis with supporting evidence.'),
  s('8.8D.ii', 1, S, 'Footnotes, endnotes, citations', 'Analyze characteristics and structural elements of informational text, including features such as footnotes, endnotes, and citations.'),
  s('8.8D.iii', 1, S, 'Multiple organizational patterns', 'Analyze characteristics and structural elements of informational text, including multiple organizational patterns within a text to develop the thesis.'),
  s('8.8E.i', 1, R, 'Claim and argument analysis', 'Analyze characteristics and structures of argumentative text by identifying the claim and analyzing the argument.'),
  s('8.8E.ii', 1, R, 'Counterarguments and rebuttals', 'Analyze characteristics and structures of argumentative text by identifying and explaining the counter argument.'),
  s('8.8E.iii', 1, S, 'Intended audience', 'Analyze characteristics and structures of argumentative text by identifying the intended audience or reader.'),
  s('8.9A', 1, S, 'Author\'s purpose and message', 'Explain the author\'s purpose and message within a text.'),
  s('8.9B', 1, S, 'Text structure and author\'s purpose', 'Analyze how the use of text structure contributes to the author\'s purpose.'),
  s('8.9C', 1, S, 'Print and graphic features', 'Analyze the author\'s use of print and graphic features to achieve specific purposes.'),
  s('8.9D', 1, S, 'Extended metaphor and figurative language', 'Describe how the author\'s use of figurative language such as extended metaphor achieves specific purposes.'),
  s('8.9E', 1, S, 'Literary devices, point of view, irony', 'Identify and analyze the use of literary devices, including multiple points of view and irony.'),
  s('8.9F', 1, S, 'Mood, voice, and tone', 'Analyze how the author\'s use of language contributes to mood, voice, and tone.'),
  s('8.9G', 1, S, 'Rhetorical devices and logical fallacies', 'Explain the purpose of rhetorical devices such as analogy and juxtaposition and of logical fallacies such as bandwagon appeals and circular reasoning.'),

  // ---------- Strand 2: Writing ----------
  s('8.10B.i', 2, R, 'Organizing structure', 'Develop drafts into a focused, structured, and coherent piece of writing by organizing with purposeful structure, including an introduction, transitions, coherence within and across paragraphs, and a conclusion.'),
  s('8.10B.ii', 2, R, 'Developing engaging ideas', 'Develop drafts into a focused, structured, and coherent piece of writing by developing an engaging idea reflecting depth of thought with specific facts, details, and examples.'),
  s('8.10C', 2, R, 'Revise drafts', 'Revise drafts for clarity, development, organization, style, word choice, and sentence variety.'),
  s('8.10D', 2, S, 'Edit for conventions', 'Edit drafts using standard English conventions.'),
  s('8.10D.i', 2, R, 'Complex sentences and agreement', 'Edit drafts for complete complex sentences with subject-verb agreement and avoidance of splices, run-ons, and fragments.'),
  s('8.10D.ii', 2, R, 'Verb tense, active and passive voice', 'Edit drafts for consistent, appropriate use of verb tenses and active and passive voice.'),
  s('8.10D.iii', 2, S, 'Prepositional phrases and agreement', 'Edit drafts for prepositions and prepositional phrases and their influence on subject-verb agreement.'),
  s('8.10D.iv', 2, S, 'Pronoun-antecedent agreement', 'Edit drafts for pronoun-antecedent agreement.'),
  s('8.10D.v', 2, S, 'Correct capitalization', 'Edit drafts for correct capitalization.'),
  s('8.10D.vi', 2, S, 'Punctuation, nonrestrictive clauses, semicolons', 'Edit drafts for punctuation, including commas in nonrestrictive phrases and clauses, semicolons, colons, and parentheses.'),
  s('8.10D.vii', 2, S, 'Correct spelling and confused words', "Edit drafts for correct spelling, including commonly confused terms such as its/it's, affect/effect, there/their/they're, and to/two/too."),
];
