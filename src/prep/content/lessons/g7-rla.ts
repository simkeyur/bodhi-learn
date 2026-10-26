// Grade 7 reading walkthroughs. Generated skills work like math (example and "your turn"
// come from the generator). Passage skills include two worked samples from short passages.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import { G7_RLA_LESSONS_MORE } from './g7-rla-more.ts';
import {
  G7_MINI_FOSSIL,
  G7_MINI_MONARCH,
  G7_MINI_SOLAR,
  G7_MINI_STORM,
  G7_MINI_FOREST,
} from './g7-rla-passages.ts';

const G7_RLA_LESSONS_FIRST: Lesson[] = [
  // ---------- Generated Skills ----------

  // 6.2A Dictionary, glossary, thesaurus
  {
    code: 'rla:7.2A',
    goal: 'You will learn to use print or digital reference resources to determine word meanings, syllabication, pronunciation, and origins.',
    words: [
      { term: 'guide words', meaning: 'The words printed at the top of a dictionary page indicating the first and last words on that page.' },
      { term: 'etymology', meaning: 'The historical origin and development of a word from older languages like Latin or Greek.' },
    ],
    ideas: [
      { title: 'Use alphabetical guide words', text: 'Check the two guide words at the top of the dictionary page to see if your target word falls alphabetically between them.' },
      { title: 'Match the sentence context to the definition', text: 'Many words have multiple numbered definitions. Read each definition into your sentence to find the one that makes sense.' },
    ],
  },

  // 6.2C Greek and Latin roots
  {
    code: 'rla:7.2C',
    goal: 'You will learn to use Greek and Latin roots (omni, log/logue, gen, vid/vis, phil, luc/lum) to determine the meaning of academic words.',
    words: [
      { term: 'root', meaning: 'A base word part that carries core meaning and cannot stand alone.' },
      { term: 'prefix', meaning: 'An affix attached to the beginning of a root to alter its meaning.' },
    ],
    ideas: [
      { title: 'Memorize core root meanings', text: 'omni = all (omnivorous, omnipotent); log/logue = word/reason (dialogue, logic); gen = birth/origin (generation, generic); vid/vis = see (visible, evident); phil = love (philosophy, philanthropist); luc/lum = light (lucid, illuminate).' },
      { title: 'Break unknown words into morphemes', text: 'Identify the root first, then look at prefixes and suffixes to assemble the full meaning.' },
    ],
  },

  // 6.10D Edit for conventions
  {
    code: 'rla:7.10D',
    goal: 'You will learn to edit drafts for standard English grammar, usage, mechanics, and spelling conventions.',
    words: [
      { term: 'conventions', meaning: 'The standard rules of grammar, capitalization, punctuation, and spelling in written English.' },
    ],
    ideas: [
      { title: 'Read aloud to catch errors', text: 'Hearing sentences spoken aloud helps identify awkward phrasing, missing words, and misplaced punctuation.' },
      { title: 'Check one skill at a time', text: 'First review for complete sentences, then check verb tenses, pronoun agreement, and finally spelling.' },
    ],
  },

  // 6.10D.i Complex sentences and agreement
  {
    code: 'rla:7.10D.i',
    goal: 'You will learn to edit drafts for complete complex sentences with subject-verb agreement and avoid run-ons, splices, and fragments.',
    words: [
      { term: 'complex sentence', meaning: 'A sentence containing one independent clause and at least one dependent clause.' },
      { term: 'comma splice', meaning: 'The error of joining two independent clauses with only a comma.' },
      { term: 'fragment', meaning: 'An incomplete sentence lacking a subject, predicate, or complete thought.' },
    ],
    ideas: [
      { title: 'Subordinating conjunctions need commas when first', text: 'If a dependent clause starts with when, although, or because, put a comma after it.' },
      { title: 'Find the real subject', text: 'Words in prepositional phrases (like "of the students") do not change whether the subject is singular or plural.' },
    ],
  },

  // 6.10D.ii Verb tense consistency
  {
    code: 'rla:7.10D.ii',
    goal: 'You will learn to maintain consistent, appropriate verb tenses within sentences and across paragraphs.',
    words: [
      { term: 'verb tense', meaning: 'The form of a verb indicating time: past, present, or future.' },
      { term: 'tense shift', meaning: 'An unnecessary change from one tense to another that confuses the reader.' },
    ],
    ideas: [
      { title: 'Establish the timeline', text: 'If a story begins in the past ("Elena walked..."), all narrative actions should remain in the past tense.' },
      { title: 'Check compound predicates', text: 'Ensure verbs joined by "and" share the same time frame ("The boy jumped and landed safely").' },
    ],
  },

  // 6.10D.iii Conjunctive adverbs
  {
    code: 'rla:7.10D.iii',
    goal: 'You will learn to use conjunctive adverbs (such as however, therefore, furthermore, and meanwhile) to connect independent clauses.',
    words: [
      { term: 'conjunctive adverb', meaning: 'An adverb that connects two independent clauses and shows their logical relationship.' },
    ],
    ideas: [
      { title: 'Punctuate with semicolon and comma', text: 'Join two sentences with a semicolon before the conjunctive adverb and a comma after it (e.g., "; however, ").' },
      { title: 'Select the right relationship', text: 'Use "however" for contrast, "therefore" for consequence, "furthermore" for addition, and "meanwhile" for simultaneous time.' },
    ],
  },

  // 6.10D.iv Prepositional phrases and agreement
  {
    code: 'rla:7.10D.iv',
    goal: 'You will learn to identify prepositional phrases and prevent them from interfering with subject-verb agreement.',
    words: [
      { term: 'prepositional phrase', meaning: 'A modifying phrase beginning with a preposition (in, on, of, for, with) and ending in an object.' },
    ],
    ideas: [
      { title: 'Cross out the prepositional phrase', text: 'Mentally remove phrases like "of the players" to see the true subject: "The captain [of the players] is ready."' },
      { title: 'Singular subjects take singular verbs', text: 'Remember that singular verbs often end in -s (runs, speaks, was), while plural verbs do not (run, speak, were).' },
    ],
  },

  // 6.10D.v Relative pronouns
  {
    code: 'rla:7.10D.v',
    goal: 'You will learn to use pronouns correctly, including relative pronouns (who, whom, whose, which, that).',
    words: [
      { term: 'relative pronoun', meaning: 'A pronoun used to connect a clause or phrase to a noun or pronoun.' },
      { term: 'antecedent', meaning: 'The noun or pronoun that a pronoun refers back to.' },
    ],
    ideas: [
      { title: 'Who for people, which/that for objects', text: 'Use "who" or "whom" when referring to people, and "which" or "that" when referring to animals or inanimate objects.' },
      { title: 'Who vs. whom', text: 'Use "who" as the subject doing the action, and "whom" as the object receiving the action or after a preposition (e.g., "to whom").' },
    ],
  },

  // 6.10D.vi Subordinating and correlative conjunctions
  {
    code: 'rla:7.10D.vi',
    goal: 'You will learn to use subordinating conjunctions to build complex sentences and correlative conjunction pairs (either/or, neither/nor).',
    words: [
      { term: 'subordinating conjunction', meaning: 'A conjunction (such as although, because, since, unless) that begins a dependent clause.' },
      { term: 'correlative conjunction', meaning: 'Paired conjunctions that work together to join balanced sentence elements.' },
    ],
    ideas: [
      { title: 'Pair correlative conjunctions correctly', text: '"Either" always pairs with "or"; "neither" always pairs with "nor"; "not only" pairs with "but also."' },
      { title: 'Express logical conditions', text: 'Use "unless" for exceptions, "although" for unexpected contrasts, and "because" for direct causes.' },
    ],
  },

  // 6.10D.vii Capitalization of proper nouns
  {
    code: 'rla:7.10D.vii',
    goal: 'You will learn to capitalize proper nouns correctly, including abbreviations, initials, acronyms, and organizations.',
    words: [
      { term: 'proper noun', meaning: 'A specific name of a person, place, or organization requiring capitalization.' },
      { term: 'acronym', meaning: 'An abbreviation formed from the initial letters of other words and pronounced as a word (e.g., NASA).' },
    ],
    ideas: [
      { title: 'Capitalize formal organization names', text: 'Capitalize principal words in organizations like "National Park Service" or "Travis Middle School Science Club."' },
      { title: 'Acronyms use all capitals', text: 'Write acronyms in full capital letters without periods (NASA, STEM, UN).' },
    ],
  },

  // 6.10D.viii Commas and introductory elements
  {
    code: 'rla:7.10D.viii',
    goal: 'You will learn to use commas correctly in complex sentences, after transitions, and after introductory phrases.',
    words: [
      { term: 'introductory element', meaning: 'A clause, phrase, or word at the beginning of a sentence before the main subject.' },
    ],
    ideas: [
      { title: 'Put a comma after introductory dependent clauses', text: 'When a sentence begins with a dependent clause or long prepositional phrase, place a comma directly before the main subject.' },
      { title: 'Separate transition words', text: 'Single introductory transition words like "Finally," "However," and "Consequently," are always followed by a comma.' },
    ],
  },

  // 6.10D.ix Spelling and confused words
  {
    code: 'rla:7.10D.ix',
    goal: 'You will learn to edit drafts for correct spelling, focusing on commonly confused homophones like its/it\'s, affect/effect, and there/their/they\'re.',
    words: [
      { term: 'homophone', meaning: 'Words that sound alike but have different spellings and meanings.' },
    ],
    ideas: [
      { title: 'Test with substitutions', text: 'Substitute "it is" into the sentence. If it makes sense, use "it\'s." If showing possession, use "its."' },
      { title: 'Affect is usually action, Effect is end-result', text: 'Affect is a verb meaning to influence; effect is a noun meaning an outcome or result.' },
    ],
  },

  // ---------- Strand 1 Passage Skills ----------

  // 6.2B Words in context
  {
    code: 'rla:7.2B',
    goal: 'You will learn to use context clues such as definitions, analogies, and examples to clarify the meaning of unfamiliar words.',
    words: [
      { term: 'context clue', meaning: 'Hints found within a sentence or paragraph that help define an unknown word.' },
      { term: 'analogy', meaning: 'A comparison between two things that highlights a shared similarity.' },
    ],
    ideas: [
      { title: 'Read surrounding sentences', text: 'The clue is often found in the sentence right before or right after the unfamiliar word.' },
      { title: 'Substitute synonyms', text: 'Replace the unknown word with your chosen definition; if the sentence still makes sense, your choice is likely correct.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.2B', cites: [2],
          stem: 'Read this sentence from paragraph 2: "With gentle, measured taps, she chipped away a **brittle** layer of shale." What does the word **brittle** mean?',
          choices: [
            'easily broken or cracked',
            ['extremely soft and muddy', 'Shale is stone that chips away, not soft mud.'],
            ['brightly colored and glowing', 'Brittle describes physical texture, not illumination.'],
            ['burning with intense heat', 'The stone was cool in the creek bed.'],
          ],
          answer: 0,
          explain: 'Because Maya can chip the shale away with gentle taps of a small chisel, "brittle" means hard but easily shattered or broken.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.2B', cites: [2],
          stem: 'Read this sentence from paragraph 2: "A chill breeze swept across the juniper scrub, carrying the **pungent** scent of ozone and wet caliche dust." What does the word **pungent** mean?',
          choices: [
            'sharp, biting, and intensely noticeable to the sense of smell',
            ['sweet and sugary like ripe fruit', 'Ozone and dust produce a sharp mineral scent, not a sweet smell.'],
            ['completely undetectable and odorless', 'The breeze carried a scent that Joaquin clearly noticed.'],
            ['warm and soothing like a wood fire', 'The breeze was chilly and carried a sharp storm smell.'],
          ],
          answer: 0,
          explain: 'Pungent describes a sharp, stinging, or intensely penetrating smell, such as ozone produced by lightning strikes.',
        }), 7),
    ],
  },

  // 6.5C Predictions and text structures
  {
    code: 'rla:7.5C',
    goal: 'You will learn to make, correct, and confirm predictions using text features, genre characteristics, and text structures.',
    words: [
      { term: 'prediction', meaning: 'A logical guess about what will happen next based on evidence from the text.' },
      { term: 'foreshadowing', meaning: 'Clues an author drops that hint at future plot developments.' },
    ],
    ideas: [
      { title: 'Pay attention to sensory warnings', text: 'Shifting winds, darkening skies, or nervous animal behavior often foreshadow an impending crisis.' },
      { title: 'Verify as you read', text: 'Stop at key points to see if your prediction came true, and adjust your understanding if new facts emerge.' },
    ],
    samples: [
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.5C', cites: [2],
          stem: 'Based on the grandfather\'s rule in paragraph 2, what will Joaquin most likely do next?',
          choices: [
            'Seek immediate shelter on high ground before flash flooding fills the canyon wash',
            ['Set up an easel outside to paint the approaching clouds', 'His grandfather\'s rule warns of sudden, dangerous flash floods.'],
            ['Hike down to the lowest creek bed to catch fish', 'Going down to the creek bed during a flood warning is perilous.'],
            ['Go to sleep in his hammock outside the cabin', 'The approaching storm requires urgent safety precautions.'],
          ],
          answer: 0,
          explain: 'Because his grandfather taught him that cool, damp air precedes flash floods by minutes, Joaquin will immediately take precautions against high water.',
        }), 7),
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.5C', cites: [1, 2],
          stem: 'What prediction could the reader make from Maya\'s careful, quiet preparation in paragraph 2?',
          choices: [
            'Her persistent, careful approach will lead to finding something significant in the rock.',
            ['She will abandon her tools and walk home with Leo.', 'Her actions show dedication and patience.'],
            ['She will accidentally break her brother\'s wristwatch.', 'Her focus is on the limestone slab, not the watch.'],
            ['She will realize that Glen Rose has no fossils.', 'Glen Rose is historically famous for dinosaur and marine fossils.'],
          ],
          answer: 0,
          explain: 'Maya\'s quiet determination and specialized tools contrast with Leo\'s complaints, predicting that her patience will be rewarded.',
        }), 7),
    ],
  },

  // 6.5E Make connections
  {
    code: 'rla:7.5E',
    goal: 'You will learn to make connections to personal experiences, ideas in other texts, and society.',
    words: [
      { term: 'text-to-self', meaning: 'Connecting what you read to your own life experiences.' },
      { term: 'text-to-text', meaning: 'Connecting themes or events across two different readings.' },
      { term: 'text-to-world', meaning: 'Connecting a text to broader societal issues, history, or science.' },
    ],
    ideas: [
      { title: 'Look for universal themes', text: 'Perseverance, family teamwork, and conservation are themes that connect many different stories.' },
      { title: 'Ask: How does this mirror our world?', text: 'Connect real-world conservation projects or historical discoveries to the text.' },
    ],
    samples: [
      sample(
        G7_MINI_MONARCH,
        mcq({
          standard: 'rla:7.5E', cites: [1, 2],
          stem: 'How does the monarch butterfly\'s migration connect to broader environmental conservation issues today?',
          choices: [
            'It demonstrates that wildlife preservation requires international cooperation because migrating species cross multiple country borders.',
            ['It proves that insects are immune to habitat destruction.', 'Insects depend on specific forests that need protection.'],
            ['It suggests that paperclips should be recycled into butterfly wings.', 'The paperclip was only a weight comparison.'],
            ['It shows that animals no longer need natural wind currents.', 'Monarchs rely heavily on natural thermals.'],
          ],
          answer: 0,
          explain: 'Because monarchs migrate across Canada, the U.S., and Mexico, protecting them requires cross-border international conservation treaties.',
        }), 7),
      sample(
        G7_MINI_SOLAR,
        mcq({
          standard: 'rla:7.5E', cites: [1, 2],
          stem: 'How does the debate in "Power from the Sun" connect to real-world community decisions?',
          choices: [
            'Communities often balance initial taxpayer investments against long-term environmental sustainability and budget savings.',
            ['Towns are legally required to shut down all schools that use electricity.', 'Schools need electricity to operate modern technology.'],
            ['Solar energy is only useful in outer space.', 'Solar panels are widely used on homes, businesses, and schools on Earth.'],
            ['Clean energy eliminates the need for classroom teachers.', 'Technology powers facilities; it does not replace educators.'],
          ],
          answer: 0,
          explain: 'School districts and city councils frequently debate whether the upfront cost of green technology is justified by long-term financial return.',
        }), 7),
    ],
  },

  // 6.5F Inferences with evidence
  {
    code: 'rla:7.5F',
    goal: 'You will learn to make logical inferences and use text evidence to support your understanding.',
    words: [
      { term: 'inference', meaning: 'A logical conclusion reached by combining text clues with your own background knowledge.' },
      { term: 'evidence', meaning: 'Specific words, quotes, or details from the passage that prove an inference.' },
    ],
    ideas: [
      { title: 'Formula: Clues + What You Know', text: 'Combine what the author writes with common sense to deduce unspoken truths.' },
      { title: 'Always cite a specific line', text: 'A strong inference can always be verified by pointing to a specific sentence in the text.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.5F', cites: [1, 2],
          stem: 'What can the reader infer about Maya from her reaction to Leo in paragraph 2?',
          choices: [
            'She is knowledgeable about paleontology and confident enough to ignore discouragement.',
            ['She was angry at Leo and wanted to hit him with her chisel.', 'Her tapping was gentle and measured, and she grinned at the end.'],
            ['She was hoping to find gold coins buried in the mud.', 'She was hunting for prehistoric fossils.'],
            ['She did not know how to tell the difference between shale and granite.', 'She recognized the shale and uncovered a coiled ammonite.'],
          ],
          answer: 0,
          explain: 'Maya\'s measured chiseling, specialized tools, and quiet grin when finding the ammonite reveal expertise and inner confidence.',
        }), 7),
      sample(
        G7_MINI_MONARCH,
        mcq({
          standard: 'rla:7.5F', cites: [2],
          stem: 'What can the reader infer about monarch butterfly navigation from paragraph 2?',
          choices: [
            'Their migratory route is hard-wired genetically because each butterfly navigates to groves it has never personally visited.',
            ['Young butterflies follow their parents who guide them across Texas.', 'The text notes their great-great-grandparents roosted there the previous winter.'],
            ['Monarchs rely on radio towers to broadcast GPS signals.', 'They use an internal biological sun compass and circadian clocks.'],
            ['Monarchs frequently get lost and settle in the Arctic tundra.', 'They travel consistently to the same Mexican volcanic fir forests.'],
          ],
          answer: 0,
          explain: 'Because monarchs return to places where ancestors from generations earlier roosted, their complex navigation is an inherited biological adaptation.',
        }), 7),
    ],
  },

  // 6.5G Key ideas and details
  {
    code: 'rla:7.5G',
    goal: 'You will learn to evaluate details in a text to determine key ideas and distinguish essential facts from minor descriptions.',
    words: [
      { term: 'key idea', meaning: 'An important concept that directly supports the central message or thesis of a text.' },
      { term: 'minor detail', meaning: 'An interesting fact or description that adds color but is not essential to the main point.' },
    ],
    ideas: [
      { title: 'Ask: If this were removed, would the point collapse?', text: 'Key ideas are load-bearing; minor details merely decorate the story.' },
      { title: 'Group related details', text: 'Notice how multiple sentences work together to develop a single major point.' },
    ],
    samples: [
      sample(
        G7_MINI_FOREST,
        mcq({
          standard: 'rla:7.5G', cites: [1, 2],
          stem: 'Which detail best supports the idea that the forest floor plays a vital role in water conservation?',
          choices: [
            'The spongy humus layer absorbs heavy rainfall like a sponge, preventing erosion and feeding delicate plants.',
            ['Shortleaf pine trees grow over one hundred feet tall.', 'This describes the upper canopy, not the forest floor.'],
            ['Dogwood and redbud trees grow in dappled shade.', 'This describes the understory layer.'],
            ['Loblolly pines capture the brilliance of the sun.', 'This detail describes sunlight absorption in the canopy.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 specifically describes the floor\'s spongy soil soaking up rainfall to prevent erosion and nourish wildlife.',
        }), 7),
      sample(
        G7_MINI_MONARCH,
        mcq({
          standard: 'rla:7.5G', cites: [2],
          stem: 'Which detail explains how monarchs adjust their course as the sun moves throughout the day?',
          choices: [
            'Circadian clocks in their antennae work with the brain\'s sun compass to adjust for the sun\'s changing position.',
            ['They weigh less than an ordinary paperclip.', 'Weight explains aerodynamics, not navigational adjustment.'],
            ['They ride thermal currents fifty miles per day.', 'Thermals provide flight lift, not direction calculation.'],
            ['They sleep during cloudy weather in oyamel fir groves.', 'Winter roosting is their destination, not daily navigation adjustment.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 explains that antenna circadian clocks calibrate the brain\'s sun compass throughout the day.',
        }), 7),
    ],
  },

  // 6.5H Synthesize across texts
  {
    code: 'rla:7.5H',
    goal: 'You will learn to synthesize information from two or more texts to create new understanding and compare viewpoints.',
    words: [
      { term: 'synthesize', meaning: 'Combining ideas from different sources to develop a broader, deeper understanding.' },
    ],
    ideas: [
      { title: 'Look for shared topics with different angles', text: 'One passage might give factual history while another tells a fictional human story about the same event.' },
      { title: 'Connect the big picture', text: 'Ask: How does reading both texts together teach me more than reading either one alone?' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.5H', cites: [1, 2],
          stem: 'If paired with a scientific article on Cretaceous fossils, how does "Treasure in the Limestone" contribute to a reader\'s understanding?',
          choices: [
            'It provides a personal narrative showing the patient excitement and practical tools used by amateur fossil hunters in the field.',
            ['It proves that scientific textbooks about fossils are entirely inaccurate.', 'The story confirms paleontology concepts.'],
            ['It explains the chemical formula of calcium carbonate rock.', 'The story focuses on discovery, not chemical formulas.'],
            ['It shows that dinosaur bones can be purchased at county fairs.', 'The story depicts natural field excavation.'],
          ],
          answer: 0,
          explain: 'Pairing narrative fiction with scientific exposition allows readers to appreciate both the human thrill of discovery and the geology behind it.',
        }), 7),
      sample(
        G7_MINI_SOLAR,
        mcq({
          standard: 'rla:7.5H', cites: [1, 2],
          stem: 'When combined with a text on municipal green architecture, what broader principle emerges from "Power from the Sun"?',
          choices: [
            'Public institutions can successfully balance financial responsibility with environmental stewardship through modern technology.',
            ['Schools should eliminate electricity to reduce carbon emissions.', 'The text advocates clean generation, not power shutoffs.'],
            ['Only private corporations can afford sustainable energy.', 'The passage proves public schools can leverage grants and save money.'],
            ['Solar energy is ineffective in sunny southern climates.', 'Texas has abundant sunshine ideal for solar arrays.'],
          ],
          answer: 0,
          explain: 'Synthesizing both perspectives reveals that public schools and municipal buildings can achieve economic and ecological benefits together.',
        }), 7),
    ],
  },

  // 6.6C Use text evidence
  {
    code: 'rla:7.6C',
    goal: 'You will learn to cite specific text evidence to support your interpretations and answers.',
    words: [
      { term: 'text evidence', meaning: 'Direct quotations, paraphrases, or specific facts taken from the text to prove an answer.' },
    ],
    ideas: [
      { title: 'Quote accurately', text: 'When quoting, use exact words from the selection inside quotation marks.' },
      { title: 'Explain the connection', text: 'Don\'t just drop a quote; explain how the quoted words prove your claim.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.6C', cites: [2],
          stem: 'Which quotation from paragraph 2 proves that Maya\'s discovery was ancient and well-preserved?',
          choices: [
            '"Beneath the gray stone lay a spiraled impression, coiled like a coiled nautilus shell and nearly eight inches across."',
            ['"Maya ignored him, pulling a small wooden chisel and a stiff bristle brush from her canvas kit."', 'This describes her tools, not the fossil\'s condition.'],
            ['"Come on, Maya. It\'s just ordinary rock."', 'This shows Leo\'s mistaken doubt.'],
            ['"We\'ve been out here in the heat for two hours..."', 'This describes the time spent searching.'],
          ],
          answer: 0,
          explain: 'Describing the eight-inch coiled impression of a nautilus-like shell directly proves the fossil was ancient, distinct, and well-preserved.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.6C', cites: [1],
          stem: 'Which detail from paragraph 1 shows the physical force of the lightning strike?',
          choices: [
            'A concussive boom of thunder followed instantly, rattling the tin roof of the cabin.',
            ['Joaquin was sitting quietly on a wooden stool.', 'This describes his peaceful posture before the lightning.'],
            ['The red mesa was three miles away.', 'Distance alone does not describe physical impact.'],
            ['The charcoal pencil rolled across the floor.', 'Dropping the pencil was Joaquin\'s startled reaction.'],
          ],
          answer: 0,
          explain: 'A "concussive boom" that shakes and rattles a tin roof demonstrates the immense acoustic and shockwave force of the strike.',
        }), 7),
    ],
  },

  // 6.6D Paraphrase and summarize
  {
    code: 'rla:7.6D',
    goal: 'You will learn to paraphrase and summarize texts in ways that maintain meaning, key ideas, and logical order.',
    words: [
      { term: 'paraphrase', meaning: 'Restating someone else\'s ideas in your own words while keeping the original meaning.' },
      { term: 'summary', meaning: 'A brief statement capturing the essential main points of a longer text without personal opinions.' },
    ],
    ideas: [
      { title: 'Include only main points', text: 'Leave out minor trivia, specific dialogue, and personal commentary in a summary.' },
      { title: 'Maintain original order', text: 'Follow the text\'s chronological or logical sequence: beginning, middle, and end.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.6D', cites: [1, 2],
          stem: 'Which sentence is the best summary of "Treasure in the Limestone"?',
          choices: [
            'Despite her brother\'s impatience, Maya carefully chips away shale in a dry creek bed and uncovers a prized ammonite fossil.',
            ['Leo complains about the Texas heat until he finds a dinosaur bone.', 'Leo did not find a bone; Maya found an ammonite.'],
            ['Two siblings buy fossil tools at a museum shop before walking to the park.', 'The story takes place in a dry creek bed, not a store.'],
            ['Shale is a brittle sedimentary rock found in Glen Rose, Texas.', 'This is a single geological definition, not a narrative summary.'],
          ],
          answer: 0,
          explain: 'This summary captures the characters, the central tension (Leo\'s impatience), the action (chiseling shale), and the discovery.',
        }), 7),
      sample(
        G7_MINI_MONARCH,
        mcq({
          standard: 'rla:7.6D', cites: [1, 2],
          stem: 'Which is the most objective and accurate summary of "Wings Across the Continent"?',
          choices: [
            'Monarch butterflies migrate thousands of miles each autumn to Mexico, using a sophisticated biological sun compass and circadian clocks to navigate.',
            ['Monarch butterflies are beautiful insects that tourists love to photograph in Mexican mountains.', 'This includes subjective commentary and ignores the navigation science.'],
            ['Scientists discovered that butterflies have clocks attached to their wings by researchers.', 'The circadian clocks are biological cellular systems in their antennae.'],
            ['Paperclips and butterflies weigh the same amount when blown by thermal wind currents.', 'This distorts a figurative comparison into a confusing claim.'],
          ],
          answer: 0,
          explain: 'The summary encapsulates the two-thousand-mile migration from paragraph 1 and the sun-compass navigation research from paragraph 2.',
        }), 7),
    ],
  },

  // 6.7A Themes across texts
  {
    code: 'rla:7.7A',
    goal: 'You will learn to infer multiple themes within and across literary texts using text evidence.',
    words: [
      { term: 'theme', meaning: 'A central message, insight, or lesson about life conveyed by a literary work.' },
    ],
    ideas: [
      { title: 'Look at character growth', text: 'What did the main character learn through overcoming obstacles? That lesson is often the theme.' },
      { title: 'State theme as a full sentence', text: 'Theme is not just "courage"; it is "Courage means persevering even when fear is present."' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.7A', cites: [1, 2],
          stem: 'What theme is developed through Maya\'s discovery in the limestone?',
          choices: [
            'Quiet persistence and attention to detail often uncover value where others see only the ordinary.',
            ['Hasty decisions produce the best scientific breakthroughs.', 'Maya succeeded through patience, the opposite of haste.'],
            ['Brothers always have better judgment than their sisters.', 'Leo wanted to quit; Maya\'s judgment was correct.'],
            ['Nature is dangerous and should be avoided on hot days.', 'The story celebrates finding natural wonders in nature.'],
          ],
          answer: 0,
          explain: 'Maya\'s patience pays off, proving that quiet care and persistence can reveal extraordinary treasures in seemingly ordinary rock.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.7A', cites: [1, 2],
          stem: 'Which theme about nature is illustrated in "Thunder over the Caprock"?',
          choices: [
            'Natural forces are powerful and unpredictable, demanding respect and preparedness.',
            ['Thunderstorms are harmless when viewed from inside a wooden building.', 'The roof rattled and flash floods followed, showing real danger.'],
            ['Artists should never look out the window while sketching.', 'Joaquin\'s awareness of the sky saved him from danger.'],
            ['Grandparents\' advice is outdated in the modern world.', 'His grandfather\'s rule was vital and true.'],
          ],
          answer: 0,
          explain: 'The sudden strike and fast-approaching flash flood highlight that wilderness weather requires vigilance and respect.',
        }), 7),
    ],
  },

  // 6.7B Character responses and plot
  {
    code: 'rla:7.7B',
    goal: 'You will learn to analyze how characters\' internal and external responses develop the plot and resolve conflicts.',
    words: [
      { term: 'internal response', meaning: 'A character\'s thoughts, emotions, fears, or decisions.' },
      { term: 'external response', meaning: 'A character\'s spoken words, physical actions, or expressions.' },
    ],
    ideas: [
      { title: 'Track cause and effect', text: 'A character\'s internal realization often causes them to take an external action that moves the plot forward.' },
      { title: 'Watch how characters react to crises', text: 'True character is revealed during unexpected challenges or turning points.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.7B', cites: [1, 2],
          stem: 'How does Maya\'s internal response to Leo\'s impatience develop the plot in paragraph 2?',
          choices: [
            'She chooses to ignore his complaints and focus calmly on her excavation, leading directly to the discovery.',
            ['She gets discouraged, packs her tools, and heads home empty-handed.', 'Maya keeps working with gentle, measured taps.'],
            ['She argues loudly with Leo until a park ranger intervenes.', 'She remains quiet and does not argue.'],
            ['She demands that Leo do all the digging with his bare hands.', 'Maya does the delicate chiseling herself.'],
          ],
          answer: 0,
          explain: 'Maya\'s refusal to be rattled by Leo\'s impatience keeps her working, which leads straight to finding the ammonite.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.7B', cites: [1, 2],
          stem: 'How does Joaquin\'s memory of his grandfather\'s rule affect his actions in the scene?',
          choices: [
            'It transforms his passive observation of the sky into urgent awareness of imminent flash flooding.',
            ['It makes him sit down and continue drawing trees on his sketchpad.', 'The thunder and memory make him alert to danger.'],
            ['It causes him to call his grandfather on a mobile phone.', 'He recalls the rule from memory, not a phone call.'],
            ['It convinces him that the lightning strike was just a firecracker.', 'He recognizes the concussive boom as real thunder.'],
          ],
          answer: 0,
          explain: 'Remembering his grandfather\'s wisdom gives Joaquin the insight needed to recognize that flash floods will follow within minutes.',
        }), 7),
    ],
  },

  // 6.7C Plot elements and flashback
  {
    code: 'rla:7.7C',
    goal: 'You will learn to analyze plot elements—rising action, climax, falling action, resolution—and non-linear elements such as flashback.',
    words: [
      { term: 'climax', meaning: 'The decisive turning point and moment of highest emotional tension in a story.' },
      { term: 'flashback', meaning: 'A scene that interrupts the chronological narrative to show an event that occurred earlier.' },
    ],
    ideas: [
      { title: 'Identify turning points', text: 'The climax is the exact moment where the main conflict reaches its peak and begins to resolve.' },
      { title: 'Notice why flashbacks appear', text: 'Authors use flashbacks to provide essential background information explaining a character\'s current choices.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.7C', cites: [2],
          stem: 'What is the climax of "Treasure in the Limestone"?',
          choices: [
            'Maya chips away the brittle shale and reveals the eight-inch coiled ammonite fossil.',
            ['Leo checks his wristwatch under the oak tree.', 'This is part of the exposition establishing impatience.'],
            ['Maya unzips her canvas field bag.', 'This is part of the rising action.'],
            ['The sun shines on the limestone slab.', 'This is setting description, not the turning point.'],
          ],
          answer: 0,
          explain: 'The climax arrives when Maya\'s chiseling succeeds, uncovering the hidden ammonite and resolving the tension.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.7C', cites: [2],
          stem: 'Why did the author include the memory of Joaquin\'s grandfather at the end of paragraph 2?',
          choices: [
            'To provide crucial background knowledge that explains why Joaquin realizes the storm is dangerous.',
            ['To explain where Joaquin purchased his sketchpad.', 'The sketchpad origin is unrelated to weather wisdom.'],
            ['To introduce a new character who enters the cabin carrying groceries.', 'His grandfather is not present in the room.'],
            ['To show that Joaquin dislikes visiting the canyon park.', 'Joaquin is sketching peacefully until the storm.'],
          ],
          answer: 0,
          explain: 'The brief memory functions as a flashback, providing wisdom that helps Joaquin and the reader understand the danger of flash floods.',
        }), 7),
    ],
  },

  // 6.7D Setting and plot development
  {
    code: 'rla:7.7D',
    goal: 'You will learn to analyze how historical, cultural, and geographical settings influence character choices and plot development.',
    words: [
      { term: 'setting', meaning: 'The time, geographical place, and cultural environment in which a story occurs.' },
    ],
    ideas: [
      { title: 'Setting is more than scenery', text: 'The setting often acts like a character, creating obstacles (heat, storms, isolation) that drive the conflict.' },
      { title: 'Notice cultural context', text: 'A historical or regional setting dictates the tools, vocabulary, and societal norms characters follow.' },
    ],
    samples: [
      sample(
        G7_MINI_FOSSIL,
        mcq({
          standard: 'rla:7.7D', cites: [1, 2],
          stem: 'How does the setting of Glen Rose, Texas, influence the story\'s plot?',
          choices: [
            'Its rich geological limestone creek beds provide the authentic location where prehistoric marine fossils can be discovered.',
            ['Its deep ocean waters require the characters to wear scuba equipment.', 'The story takes place in a dried creek bed, not an ocean.'],
            ['Its freezing blizzard forces the children to huddle around a fireplace.', 'The setting is hot, dry summer weather.'],
            ['Its dense skyscraper district prevents sunlight from reaching the pavement.', 'Glen Rose is a rural town known for river valleys and limestone.'],
          ],
          answer: 0,
          explain: 'Glen Rose\'s real geological reputation for limestone strata and fossilized dinosaur footprints provides the foundation for the fossil hunt.',
        }), 7),
      sample(
        G7_MINI_STORM,
        mcq({
          standard: 'rla:7.7D', cites: [1, 2],
          stem: 'How does the rugged topography of the Texas Panhandle caprock shape the events of the passage?',
          choices: [
            'The exposed mesas, dry washes, and sudden weather shifts make flash flooding a rapid, dangerous threat.',
            ['The sandy ocean beaches provide a barrier against tidal waves.', 'The Texas Panhandle is elevated high plains, far from the coast.'],
            ['The deep cave tunnels protect the cabin from all sounds of thunder.', 'The cabin roof rattles loudly on the canyon rim.'],
            ['The dense tropical rainforest blocks all wind from reaching the cabin.', 'The caprock is semi-arid plateau country with juniper scrub.'],
          ],
          answer: 0,
          explain: 'The rocky, steep terrain of canyon country causes rainwater to funnel quickly into low washes, creating rapid flash floods.',
        }), 7),
    ],
  },
];

export const G7_RLA_LESSONS: Lesson[] = [...G7_RLA_LESSONS_FIRST, ...G7_RLA_LESSONS_MORE];
