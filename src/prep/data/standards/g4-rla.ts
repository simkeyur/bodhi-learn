// Grade 4 reading language arts: the 52 student expectations the SST can assess, from TEA's
// "SST Grade 4 RLA Assessed Curriculum" (revised August 2026), in 2 reporting strands.
// Readiness 9 + 5, supporting 22 + 16. Essay-only standards (7B, 12B, 12C) carry no label and are not
// listed: the essay page covers them.
// Codes carry 'rla:' so they never clash with math codes (4.3A is a standard in both).

import type { Standard, Strand } from '../../content/types';

export const G4_RLA_STRANDS: Strand[] = [
  { id: 1, title: 'Reading', full: 'Reporting Strand 1: Reading' },
  { id: 2, title: 'Writing', full: 'Reporting Strand 2: Writing (revising and editing)' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;
const s = (code: string, strand: number, kind: typeof R | typeof S, title: string, text: string): Standard =>
  ({ code: `rla:${code}`, strand, kind, title, text });

export const G4_RLA: Standard[] = [
  // ---------- Strand 1: Reading ----------
  s('4.3A', 1, S, 'Use a dictionary or glossary', 'Use print or digital resources to determine meaning, syllabication, and pronunciation.'),
  s('4.3B', 1, S, 'Words in context', 'Use context within and beyond a sentence to determine the relevant meaning of unfamiliar words or multiple-meaning words.'),
  s('4.3C', 1, S, 'Prefixes, suffixes and roots', 'Determine the meaning of and use words with affixes such as mis-, sub-, -ment, and -ity/ty and roots such as auto, graph, and meter.'),
  s('4.3D', 1, S, 'Homophones', 'Identify, use, and explain the meaning of homophones such as reign/rain.'),
  s('4.6C', 1, S, 'Make and check predictions', 'Make, correct, or confirm predictions using text features, characteristics of genre, and structures.'),
  s('4.6E', 1, S, 'Make connections', 'Make connections to personal experiences, ideas in other texts, and society.'),
  s('4.6F', 1, R, 'Inferences with evidence', 'Make inferences and use evidence to support understanding.'),
  s('4.6G', 1, R, 'Key ideas', 'Evaluate details read to determine key ideas.'),
  s('4.6H', 1, R, 'Synthesize across texts', 'Synthesize information to create new understanding.'),
  s('4.7C', 1, R, 'Use text evidence', 'Use text evidence to support an appropriate response.'),
  s('4.7D', 1, R, 'Summarize', 'Retell, paraphrase, or summarize texts in ways that maintain meaning and logical order.'),
  s('4.8A', 1, S, 'Themes', 'Infer basic themes supported by text evidence.'),
  s('4.8B', 1, S, 'Characters and interactions', 'Explain the interactions of the characters and the changes they undergo.'),
  s('4.8C', 1, R, 'Plot', 'Analyze plot elements, including the rising action, climax, falling action, and resolution.'),
  s('4.8D', 1, S, 'Setting', 'Explain the influence of the setting, including historical and cultural settings, on the plot.'),
  s('4.9A', 1, S, 'Folktales, fables, myths and legends', "Demonstrate knowledge of distinguishing characteristics of well-known children's literature such as folktales, fables, legends, myths, and tall tales."),
  s('4.9B', 1, S, 'Poetry: figurative language and imagery', 'Explain figurative language such as simile, metaphor, and personification that the poet uses to create images.'),
  s('4.9C', 1, S, 'Drama', 'Explain structure in drama such as character tags, acts, scenes, and stage directions.'),
  s('4.9D.i', 1, R, 'Central idea', 'Recognize characteristics and structures of informational text, including the central idea with supporting evidence.'),
  s('4.9D.ii', 1, S, 'Text features', 'Recognize characteristics and structures of informational text, including features such as pronunciation guides and diagrams to support understanding.'),
  s('4.9D.iii', 1, S, 'Organizational patterns', 'Recognize characteristics and structures of informational text, including organizational patterns such as compare and contrast.'),
  s('4.9E.i', 1, R, 'Find the claim', 'Recognize characteristics and structures of argumentative text by identifying the claim.'),
  s('4.9E.ii', 1, R, 'Facts for an argument', 'Recognize characteristics and structures of argumentative text by explaining how the author has used facts for an argument.'),
  s('4.9E.iii', 1, S, 'Intended audience', 'Recognize characteristics and structures of argumentative text by identifying the intended audience or reader.'),
  s('4.10A', 1, S, "Author's purpose and message", "Explain the author's purpose and message within a text."),
  s('4.10B', 1, S, 'Text structure and purpose', "Explain how the use of text structure contributes to the author's purpose."),
  s('4.10C', 1, S, 'Print and graphic features', "Analyze the author's use of print and graphic features to achieve specific purposes."),
  s('4.10D', 1, S, 'Imagery and figurative language', "Describe how the author's use of imagery, literal and figurative language such as simile and metaphor, and sound devices such as alliteration and assonance achieves specific purposes."),
  s('4.10E', 1, S, 'Point of view', 'Identify and understand the use of literary devices, including first- or third-person point of view.'),
  s('4.10F', 1, S, 'Voice', "Discuss how the author's use of language contributes to voice."),
  s('4.10G', 1, S, 'Anecdote', 'Identify and explain the use of anecdote.'),

  // ---------- Strand 2: Writing (revising and editing) ----------
  s('4.2B.i', 2, S, 'Spelling: syllable types', 'Spell multisyllabic words with closed syllables; open syllables; VCe syllables; vowel teams, including digraphs and diphthongs; r-controlled syllables; and final stable syllables.'),
  s('4.2B.ii', 2, S, 'Spelling homophones', 'Spell homophones.'),
  s('4.2B.iii', 2, S, 'Spelling: many patterns', 'Spell multisyllabic words with multiple sound-spelling patterns.'),
  s('4.2B.iv', 2, S, 'Spelling: syllable division', 'Spell words using advanced knowledge of syllable division patterns.'),
  s('4.2B.v', 2, S, 'Spelling with prefixes', 'Spell words using knowledge of prefixes.'),
  s('4.2B.vi', 2, S, 'Spelling with suffixes', 'Spell words using knowledge of suffixes, including how they can change base words such as dropping e, changing y to i, and doubling final consonants.'),
  s('4.11B.i', 2, R, 'Introduction, transitions, conclusion', 'Develop drafts into a focused, structured, and coherent piece of writing by organizing with purposeful structure, including an introduction, transitions, and a conclusion.'),
  s('4.11B.ii', 2, R, 'Develop ideas with relevant details', 'Develop drafts into a focused, structured, and coherent piece of writing by developing an engaging idea with relevant details.'),
  s('4.11C', 2, R, 'Revise sentences and word choice', 'Revise drafts to improve sentence structure and word choice by adding, deleting, combining, and rearranging ideas for coherence and clarity.'),
  s('4.11D', 2, S, 'Edit for conventions', 'Edit drafts using standard English conventions.'),
  s('4.11D.i', 2, R, 'Complete sentences', 'Edit drafts for complete simple and compound sentences with subject-verb agreement and avoidance of splices, run-ons, and fragments.'),
  s('4.11D.ii', 2, R, 'Irregular past tense', 'Edit drafts for the past tense of irregular verbs.'),
  s('4.11D.iii', 2, S, 'Nouns', 'Edit drafts for singular, plural, common, and proper nouns.'),
  s('4.11D.iv', 2, S, 'Comparing with adjectives', 'Edit drafts for adjectives, including their comparative and superlative forms.'),
  s('4.11D.v', 2, S, 'Adverbs of frequency and degree', 'Edit drafts for adverbs that convey frequency and adverbs that convey degree.'),
  s('4.11D.vi', 2, S, 'Prepositional phrases', 'Edit drafts for prepositions and prepositional phrases.'),
  s('4.11D.vii', 2, S, 'Reflexive pronouns', 'Edit drafts for pronouns, including reflexive.'),
  s('4.11D.viii', 2, S, 'Coordinating conjunctions', 'Edit drafts for coordinating conjunctions to form compound subjects, predicates, and sentences.'),
  s('4.11D.ix', 2, S, 'Capital letters', 'Edit drafts for capitalization of historical periods, events, and documents; titles of books; stories and essays; and languages, races, and nationalities.'),
  s('4.11D.x', 2, S, 'Punctuation: apostrophes, commas, quotes', 'Edit drafts for punctuation marks, including apostrophes in possessives, commas in compound sentences, and quotation marks in dialogue.'),
  s('4.11D.xi', 2, S, 'Spelling in drafts', 'Edit drafts for correct spelling of words with grade-appropriate orthographic patterns and rules and high-frequency words.'),
];
