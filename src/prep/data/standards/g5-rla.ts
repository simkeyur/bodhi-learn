// Grade 5 reading language arts: the 52 student expectations the SST can assess, from TEA's
// "SST Grade 5 RLA Assessed Curriculum" (revised August 2026), in 2 reporting strands.
// Readiness 9 + 5, supporting 22 + 16. Essay-only standards (7B, 12B, 12C) carry no label and are not
// listed: the essay page covers them.
// Codes carry 'rla:' so they never clash with math codes (5.3A is a standard in both).

import type { Standard, Strand } from '../../content/types';

export const G5_RLA_STRANDS: Strand[] = [
  { id: 1, title: 'Reading', full: 'Reporting Strand 1: Reading' },
  { id: 2, title: 'Writing', full: 'Reporting Strand 2: Writing (revising and editing)' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;
const s = (code: string, strand: number, kind: typeof R | typeof S, title: string, text: string): Standard =>
  ({ code: `rla:${code}`, strand, kind, title, text });

export const G5_RLA: Standard[] = [
  // ---------- Strand 1: Reading ----------
  s('5.3A', 1, S, 'Use a dictionary or glossary', 'Use print or digital resources to determine meaning, syllabication, pronunciation, and word origin.'),
  s('5.3B', 1, S, 'Words in context', 'Use context within and beyond a sentence to determine the relevant meaning of unfamiliar words or multiple-meaning words.'),
  s('5.3C', 1, S, 'Prefixes, suffixes and roots', 'Identify the meaning of and use words with affixes such as trans-, super-, -ive, and -logy and roots such as geo and photo.'),
  s('5.3D', 1, S, 'Adages and puns', 'Identify, use, and explain the meaning of adages and puns.'),
  s('5.6C', 1, S, 'Make and check predictions', 'Make, correct, or confirm predictions using text features, characteristics of genre, and structures.'),
  s('5.6E', 1, S, 'Make connections', 'Make connections to personal experiences, ideas in other texts, and society.'),
  s('5.6F', 1, R, 'Inferences with evidence', 'Make inferences and use evidence to support understanding.'),
  s('5.6G', 1, R, 'Key ideas', 'Evaluate details read to determine key ideas.'),
  s('5.6H', 1, R, 'Synthesize across texts', 'Synthesize information to create new understanding.'),
  s('5.7C', 1, R, 'Use text evidence', 'Use text evidence to support an appropriate response.'),
  s('5.7D', 1, R, 'Summarize', 'Retell, paraphrase, or summarize texts in ways that maintain meaning and logical order.'),
  s('5.8A', 1, S, 'Themes', 'Infer multiple themes within a text using text evidence.'),
  s('5.8B', 1, S, 'Characters and conflicts', 'Analyze the relationships of and conflicts among the characters.'),
  s('5.8C', 1, R, 'Plot', 'Analyze plot elements, including rising action, climax, falling action, and resolution.'),
  s('5.8D', 1, S, 'Setting', 'Analyze the influence of the setting, including historical and cultural settings, on the plot.'),
  s('5.9A', 1, S, 'Folktales, fables, myths and legends', "Demonstrate knowledge of distinguishing characteristics of well-known children's literature such as folktales, fables, legends, myths, and tall tales."),
  s('5.9B', 1, S, 'Poetry: sound, figurative language, speaker', 'Explain the use of sound devices and figurative language and distinguish between the poet and the speaker in poems across a variety of poetic forms.'),
  s('5.9C', 1, S, 'Drama', 'Explain structure in drama such as character tags, acts, scenes, and stage directions.'),
  s('5.9D.i', 1, R, 'Central idea', 'Recognize characteristics and structures of informational text, including the central idea with supporting evidence.'),
  s('5.9D.ii', 1, S, 'Text features', 'Recognize characteristics and structures of informational text, including features such as insets, timelines, and sidebars to support understanding.'),
  s('5.9D.iii', 1, S, 'Organizational patterns', 'Recognize characteristics and structures of informational text, including organizational patterns such as logical order and order of importance.'),
  s('5.9E.i', 1, R, 'Find the claim', 'Recognize characteristics and structures of argumentative text by identifying the claim.'),
  s('5.9E.ii', 1, R, 'Facts for or against an argument', 'Recognize characteristics and structures of argumentative text by explaining how the author has used facts for or against an argument.'),
  s('5.9E.iii', 1, S, 'Intended audience', 'Recognize characteristics and structures of argumentative text by identifying the intended audience or reader.'),
  s('5.10A', 1, S, "Author's purpose and message", "Explain the author's purpose and message within a text."),
  s('5.10B', 1, S, 'Text structure and purpose', "Analyze how the use of text structure contributes to the author's purpose."),
  s('5.10C', 1, S, 'Print and graphic features', "Analyze the author's use of print and graphic features to achieve specific purposes."),
  s('5.10D', 1, S, 'Imagery and figurative language', "Describe how the author's use of imagery, literal and figurative language such as simile and metaphor, and sound devices achieves specific purposes."),
  s('5.10E', 1, S, 'Point of view', 'Identify and understand the use of literary devices, including first- or third-person point of view.'),
  s('5.10F', 1, S, 'Voice', "Examine how the author's use of language contributes to voice."),
  s('5.10G', 1, S, 'Hyperbole, stereotyping and anecdote', 'Explain the purpose of hyperbole, stereotyping, and anecdote.'),

  // ---------- Strand 2: Writing (revising and editing) ----------
  s('5.2B.i', 2, S, 'Spelling: syllable types', 'Spell multisyllabic words with closed syllables; open syllables; VCe syllables; vowel teams, including digraphs and diphthongs; r-controlled syllables; and final stable syllables.'),
  s('5.2B.ii', 2, S, 'Spelling: sound changes', 'Spell words with consonant changes, including /t/ to /sh/ such as in select and selection and /k/ to /sh/ such as music and musician.'),
  s('5.2B.iii', 2, S, 'Spelling: many patterns', 'Spell multisyllabic words with multiple sound-spelling patterns.'),
  s('5.2B.iv', 2, S, 'Spelling: syllable division', 'Spell words using advanced knowledge of syllable division patterns.'),
  s('5.2B.v', 2, S, 'Spelling with prefixes', 'Spell words using knowledge of prefixes.'),
  s('5.2B.vi', 2, S, 'Spelling with suffixes', 'Spell words using knowledge of suffixes, including how they can change base words such as dropping e, changing y to i, and doubling final consonants.'),
  s('5.11B.i', 2, R, 'Introduction, transitions, conclusion', 'Develop drafts into a focused, structured, and coherent piece of writing by organizing with purposeful structure, including an introduction, transitions, and a conclusion.'),
  s('5.11B.ii', 2, R, 'Develop ideas with facts and details', 'Develop drafts into a focused, structured, and coherent piece of writing by developing an engaging idea reflecting depth of thought with specific facts and details.'),
  s('5.11C', 2, R, 'Revise sentences and word choice', 'Revise drafts to improve sentence structure and word choice by adding, deleting, combining, and rearranging ideas for coherence and clarity.'),
  s('5.11D', 2, S, 'Edit for conventions', 'Edit drafts using standard English conventions.'),
  s('5.11D.i', 2, R, 'Complete sentences', 'Edit drafts for complete simple and compound sentences with subject-verb agreement and avoidance of splices, run-ons, and fragments.'),
  s('5.11D.ii', 2, R, 'Irregular past tense', 'Edit drafts for the past tense of irregular verbs.'),
  s('5.11D.iii', 2, S, 'Collective nouns', 'Edit drafts for collective nouns.'),
  s('5.11D.iv', 2, S, 'Comparing with adjectives', 'Edit drafts for adjectives, including their comparative and superlative forms.'),
  s('5.11D.v', 2, S, 'Conjunctive adverbs', 'Edit drafts for conjunctive adverbs.'),
  s('5.11D.vi', 2, S, 'Prepositional phrases', 'Edit drafts for prepositions and prepositional phrases and their influence on subject-verb agreement.'),
  s('5.11D.vii', 2, S, 'Pronouns', 'Edit drafts for pronouns, including indefinite.'),
  s('5.11D.viii', 2, S, 'Complex sentences', 'Edit drafts for subordinating conjunctions to form complex sentences.'),
  s('5.11D.ix', 2, S, 'Capital letters', 'Edit drafts for capitalization of abbreviations, initials, acronyms, and organizations.'),
  s('5.11D.x', 2, S, 'Commas, quotation marks, titles', 'Edit drafts for punctuation marks, including commas in compound and complex sentences, quotation marks in dialogue, and italics and underlining for titles and emphasis.'),
  s('5.11D.xi', 2, S, 'Spelling in drafts', 'Edit drafts for correct spelling of words with grade-appropriate orthographic patterns and rules and high-frequency words.'),
];
