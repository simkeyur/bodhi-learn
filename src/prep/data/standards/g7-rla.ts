// Grade 7 reading language arts: the 43 student expectations the SST can assess, from TEA's
// "SST Grade 7 RLA Assessed Curriculum" (revised August 2026), in 2 reporting strands.
// Readiness 10 + 5, supporting 20 + 8. (Note: in earlier draft blueprint tables, Strand 2 was listed as 6 R / 8 S,
// but TEA moved 10.D.ix from Readiness to Supporting in August 2026, making Strand 2 5 R / 8 S).
// Essay-only standards (6B, 11B, 11C, 11D) carry no label and are not listed: the essay page covers them.
// Codes carry 'rla:' so they never clash with math codes.

import type { Standard, Strand } from '../../content/types';

export const G7_RLA_STRANDS: Strand[] = [
  { id: 1, title: 'Reading', full: 'Reporting Strand 1: Reading' },
  { id: 2, title: 'Writing', full: 'Reporting Strand 2: Writing (revising and editing)' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;
const s = (code: string, strand: number, kind: typeof R | typeof S, title: string, text: string): Standard =>
  ({ code: `rla:${code}`, strand, kind, title, text });

export const G7_RLA: Standard[] = [
  // ---------- Strand 1: Reading ----------
  s('7.2A', 1, S, 'Dictionary, glossary, thesaurus', 'Use print or digital resources to determine the meaning, syllabication, pronunciation, word origin, and part of speech.'),
  s('7.2B', 1, S, 'Words in context', 'Use context such as definition, analogy, and examples to clarify the meaning of words.'),
  s('7.2C', 1, S, 'Greek and Latin roots', 'Determine the meaning and usage of grade-level academic English words derived from Greek and Latin roots such as omni, log/logue, gen, vid/vis, phil, and luc/lum.'),
  s('7.5C', 1, S, 'Predictions and text structures', 'Make, correct, or confirm predictions using text features, characteristics of genre, and structures.'),
  s('7.5E', 1, R, 'Make connections', 'Make connections to personal experiences, ideas in other texts, and society.'),
  s('7.5F', 1, R, 'Inferences and evidence', 'Make inferences and use evidence to support understanding.'),
  s('7.5G', 1, R, 'Key ideas and details', 'Evaluate details read to determine key ideas.'),
  s('7.5H', 1, R, 'Synthesize new understanding', 'Synthesize information to create new understanding.'),
  s('7.6C', 1, R, 'Text evidence', 'Use text evidence to support an appropriate response.'),
  s('7.6D', 1, R, 'Paraphrase and summarize', 'Paraphrase and summarize texts in ways that maintain meaning and logical order.'),
  s('7.7A', 1, S, 'Multiple themes', 'Infer multiple themes within and across texts using text evidence.'),
  s('7.7B', 1, S, 'Character qualities and plot', "Analyze how characters' qualities influence plot and conflict resolution."),
  s('7.7C', 1, R, 'Plot elements and suspense', 'Analyze plot elements, including the use of foreshadowing and suspense, to advance the plot.'),
  s('7.7D', 1, S, 'Setting and character', 'Analyze how the setting influences character and plot development.'),
  s('7.8A', 1, S, 'Literary genres', 'Demonstrate knowledge of literary genres such as realistic fiction, historical fiction, myths, fantasy, and science fiction.'),
  s('7.8B', 1, S, 'Poetic forms and graphical elements', 'Analyze the effect of rhyme scheme, meter, and graphical elements such as line length and punctuation across a variety of poetic forms.'),
  s('7.8C', 1, S, 'Drama: dialogue and staging', 'Analyze how playwrights develop characters through dialogue and staging.'),
  s('7.8D.i', 1, R, 'Controlling idea and thesis', 'Analyze characteristics and structural elements of informational text, including the controlling idea or thesis with supporting evidence.'),
  s('7.8D.ii', 1, S, 'References and acknowledgements', 'Analyze characteristics and structural elements of informational text, including features such as references or acknowledgements.'),
  s('7.8D.iii', 1, S, 'Organizational patterns', 'Analyze characteristics and structural elements of informational text, including organizational patterns such as compare and contrast, problem and solution, and cause and effect.'),
  s('7.8E.i', 1, R, 'Argumentative claim', 'Analyze characteristics and structures of argumentative text by identifying the claim.'),
  s('7.8E.ii', 1, R, 'Audience, purpose, and evidence', "Analyze characteristics and structures of argumentative text by explaining how the author has adapted the argument to an intended audience and evaluating supporting evidence."),
  s('7.8E.iii', 1, S, 'Counterarguments', "Analyze characteristics and structures of argumentative text by identifying the author's counterargument."),
  s('7.9A', 1, S, "Author's purpose and message", "Explain the author's purpose and message within a text."),
  s('7.9B', 1, S, 'Text structure and author purpose', "Analyze how the use of text structure contributes to the author's purpose."),
  s('7.9C', 1, S, 'Print and graphic features', "Analyze the author's use of print and graphic features to achieve specific purposes."),
  s('7.9D', 1, S, 'Figurative language and hyperbole', "Describe how the author's use of figurative language such as metaphor, personification, and hyperbole achieves specific purposes."),
  s('7.9E', 1, S, 'Point of view and literary devices', 'Identify the use of literary devices, including subjective and objective point of view.'),
  s('7.9F', 1, S, 'Mood, voice, and tone', "Analyze how the author's use of language contributes to mood, voice, and tone."),
  s('7.9G', 1, S, 'Rhetorical devices', 'Explain the purpose of rhetorical devices such as direct address and rhetorical questions.'),

  // ---------- Strand 2: Writing (revising and editing) ----------
  s('7.10B.i', 2, R, 'Organize with purposeful structure', 'Develop drafts into a focused, structured, and coherent piece of writing by organizing with purposeful structure, including an introduction, transitions, coherence within and across paragraphs, and a conclusion.'),
  s('7.10B.ii', 2, R, 'Develop ideas with facts and details', 'Develop drafts into a focused, structured, and coherent piece of writing by developing an engaging idea reflecting depth of thought with specific facts, details, and examples.'),
  s('7.10C', 2, R, 'Revise for clarity and variety', 'Revise drafts for clarity, development, organization, style, word choice, and sentence variety.'),
  s('7.10D', 2, S, 'Edit for conventions', 'Edit drafts using standard English conventions.'),
  s('7.10D.i', 2, R, 'Complex sentences and agreement', 'Edit drafts for complete complex sentences with subject-verb agreement and avoidance of splices, run-ons, and fragments.'),
  s('7.10D.ii', 2, R, 'Verb tense consistency', 'Edit drafts for consistent, appropriate use of verb tenses.'),
  s('7.10D.iii', 2, S, 'Conjunctive adverbs', 'Edit drafts for conjunctive adverbs.'),
  s('7.10D.iv', 2, S, 'Prepositional phrases and agreement', 'Edit drafts for prepositions and prepositional phrases and their influence on subject-verb agreement.'),
  s('7.10D.v', 2, S, 'Pronoun-antecedent agreement', 'Edit drafts for pronoun-antecedent agreement.'),
  s('7.10D.vi', 2, S, 'Subordinating and correlative conjunctions', 'Edit drafts for subordinating conjunctions to form complex sentences and correlative conjunctions such as either/or and neither/nor.'),
  s('7.10D.vii', 2, S, 'Capitalization', 'Edit drafts for correct capitalization.'),
  s('7.10D.viii', 2, S, 'Punctuation, commas, semicolons', 'Edit drafts for punctuation, including commas to set off words, phrases, and clauses, and semicolons.'),
  s('7.10D.ix', 2, S, 'Spelling and confused words', "Edit drafts for correct spelling, including commonly confused terms such as its/it's, affect/effect, there/their/they're, and to/two/too."),
];
