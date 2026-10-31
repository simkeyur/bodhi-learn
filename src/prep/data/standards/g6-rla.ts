// Grade 6 reading language arts: the 43 student expectations the SST can assess, from TEA's
// "SST Grade 6 RLA Assessed Curriculum" (revised August 2026), in 2 reporting strands.
// Readiness 10 + 5, supporting 20 + 8. Essay-only standards (6B, 11B, 11C, 11D) carry no label and are not
// listed: the essay page covers them.
// Codes carry 'rla:' so they never clash with math codes.

import type { Standard, Strand } from '../../content/types';

export const G6_RLA_STRANDS: Strand[] = [
  { id: 1, title: 'Reading', full: 'Reporting Strand 1: Reading' },
  { id: 2, title: 'Writing', full: 'Reporting Strand 2: Writing (revising and editing)' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;
const s = (code: string, strand: number, kind: typeof R | typeof S, title: string, text: string): Standard =>
  ({ code: `rla:${code}`, strand, kind, title, text });

export const G6_RLA: Standard[] = [
  // ---------- Strand 1: Reading ----------
  s('6.2A', 1, S, 'Dictionary, glossary, thesaurus', 'Use print or digital resources to determine the meaning, syllabication, pronunciation, word origin, and part of speech.'),
  s('6.2B', 1, S, 'Words in context', 'Use context such as definition, analogy, and examples to clarify the meaning of words.'),
  s('6.2C', 1, S, 'Greek and Latin roots', 'Determine the meaning and usage of grade-level academic English words derived from Greek and Latin roots such as mis/mit, bene, man, vac, scrib/script, and jur/jus.'),
  s('6.5C', 1, S, 'Predictions and text structures', 'Make, correct, or confirm predictions using text features, characteristics of genre, and structures.'),
  s('6.5E', 1, R, 'Make connections', 'Make connections to personal experiences, ideas in other texts, and society.'),
  s('6.5F', 1, R, 'Inferences with evidence', 'Make inferences and use evidence to support understanding.'),
  s('6.5G', 1, R, 'Key ideas and details', 'Evaluate details read to determine key ideas.'),
  s('6.5H', 1, R, 'Synthesize across texts', 'Synthesize information to create new understanding.'),
  s('6.6C', 1, R, 'Use text evidence', 'Use text evidence to support an appropriate response.'),
  s('6.6D', 1, R, 'Paraphrase and summarize', 'Paraphrase and summarize texts in ways that maintain meaning and logical order.'),
  s('6.7A', 1, S, 'Themes across texts', 'Infer multiple themes within and across texts using text evidence.'),
  s('6.7B', 1, S, 'Character responses and plot', "Analyze how the characters' internal and external responses develop the plot."),
  s('6.7C', 1, R, 'Plot elements and flashback', 'Analyze plot elements, including rising action, climax, falling action, resolution, and non-linear elements such as flashback.'),
  s('6.7D', 1, S, 'Setting and plot development', 'Analyze how the setting, including historical and cultural settings, influences character and plot development.'),
  s('6.8A', 1, S, 'Literary genres and myths', 'Demonstrate knowledge of literary genres such as realistic fiction, adventure stories, historical fiction, mysteries, humor, and myths.'),
  s('6.8B', 1, S, 'Poetry: meter and line breaks', 'Analyze the effect of meter and structural elements such as line breaks in poems across a variety of poetic forms.'),
  s('6.8C', 1, S, 'Drama: dialogue and staging', 'Analyze how playwrights develop characters through dialogue and staging.'),
  s('6.8D.i', 1, R, 'Controlling idea or thesis', 'Analyze characteristics and structural elements of informational text, including the controlling idea or thesis with supporting evidence.'),
  s('6.8D.ii', 1, S, 'Text features and references', 'Analyze characteristics and structural elements of informational text, including features such as introduction, foreword, preface, references, or acknowledgements to gain background information.'),
  s('6.8D.iii', 1, S, 'Informational patterns', 'Analyze characteristics and structural elements of informational text, including organizational patterns such as definition, classification, advantage, and disadvantage.'),
  s('6.8E.i', 1, R, 'Identify the claim', 'Analyze characteristics and structures of argumentative text by identifying the claim.'),
  s('6.8E.ii', 1, R, 'Evidence in arguments', 'Analyze characteristics and structures of argumentative text by explaining how the author uses various types of evidence to support the argument.'),
  s('6.8E.iii', 1, S, 'Intended audience', 'Analyze characteristics and structures of argumentative text by identifying the intended audience or reader.'),
  s('6.9A', 1, S, "Author's purpose and message", "Explain the author's purpose and message within a text."),
  s('6.9B', 1, S, 'Text structure and author purpose', "Analyze how the use of text structure contributes to the author's purpose."),
  s('6.9C', 1, S, 'Print and graphic features', "Analyze the author's use of print and graphic features to achieve specific purposes."),
  s('6.9D', 1, S, 'Metaphor and personification', "Describe how the author's use of figurative language such as metaphor and personification achieves specific purposes."),
  s('6.9E', 1, S, 'Point of view: omniscient and limited', 'Identify the use of literary devices, including omniscient and limited point of view, to achieve a specific purpose.'),
  s('6.9F', 1, S, 'Mood and voice', "Analyze how the author's use of language contributes to mood and voice."),
  s('6.9G', 1, S, 'Rhetorical devices and logical fallacies', 'Explain the differences between rhetorical devices and logical fallacies.'),

  // ---------- Strand 2: Writing (revising and editing) ----------
  s('6.10B.i', 2, R, 'Organize with purposeful structure', 'Develop drafts into a focused, structured, and coherent piece of writing by organizing with purposeful structure, including an introduction, transitions, coherence within and across paragraphs, and a conclusion.'),
  s('6.10B.ii', 2, R, 'Develop ideas with facts and details', 'Develop drafts into a focused, structured, and coherent piece of writing by developing an engaging idea reflecting depth of thought with specific facts and details.'),
  s('6.10C', 2, R, 'Revise for clarity and variety', 'Revise drafts for clarity, development, organization, style, word choice, and sentence variety.'),
  s('6.10D', 2, S, 'Edit for conventions', 'Edit drafts using standard English conventions.'),
  s('6.10D.i', 2, R, 'Complex sentences and agreement', 'Edit drafts for complete complex sentences with subject-verb agreement and avoidance of splices, run-ons, and fragments.'),
  s('6.10D.ii', 2, R, 'Verb tense consistency', 'Edit drafts for consistent, appropriate use of verb tenses.'),
  s('6.10D.iii', 2, S, 'Conjunctive adverbs', 'Edit drafts for conjunctive adverbs.'),
  s('6.10D.iv', 2, S, 'Prepositional phrases and agreement', 'Edit drafts for prepositions and prepositional phrases and their influence on subject-verb agreement.'),
  s('6.10D.v', 2, S, 'Relative pronouns', 'Edit drafts for pronouns, including relative.'),
  s('6.10D.vi', 2, S, 'Subordinating and correlative conjunctions', 'Edit drafts for subordinating conjunctions to form complex sentences and correlative conjunctions such as either/or and neither/nor.'),
  s('6.10D.vii', 2, S, 'Capitalization of proper nouns', 'Edit drafts for capitalization of proper nouns, including abbreviations, initials, acronyms, and organizations.'),
  s('6.10D.viii', 2, S, 'Commas and introductory elements', 'Edit drafts for punctuation marks, including commas in complex sentences, transitions, and introductory elements.'),
  s('6.10D.ix', 2, S, 'Spelling and confused words', "Edit drafts for correct spelling, including commonly confused terms such as its/it's, affect/effect, there/their/they're, and to/two/too."),
];
