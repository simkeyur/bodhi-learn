// Grade 8 reading walkthroughs. Generated skills work like math (example and "your turn"
// come from the generator). Passage skills include two worked samples from short passages.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import { G8_RLA_LESSONS_MORE } from './g8-rla-more.ts';
import {
  G8_MINI_FOSSIL,
  G8_MINI_MONARCH,
  G8_MINI_SOLAR,
  G8_MINI_STORM,
  G8_MINI_FOREST,
} from './g8-rla-passages.ts';

const G8_RLA_LESSONS_FIRST: Lesson[] = [
  // ---------- Generated Skills ----------

  // 8.2A Dictionary, glossary, thesaurus
  {
    code: 'rla:8.2A',
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

  // 8.2B Words in context
  {
    code: 'rla:8.2B',
    goal: 'You will learn to use context within or beyond a paragraph to clarify the meaning of unfamiliar or ambiguous words.',
    words: [
      { term: 'context clues', meaning: 'Hints found within a sentence or paragraph that help a reader decipher unfamiliar words.' },
      { term: 'ambiguous word', meaning: 'A word that can have multiple interpretations depending on how it is used.' },
    ],
    ideas: [
      { title: 'Look for contrast and restatement', text: 'Writers often define difficult words using appositives, contrast words (like however, unlike), or direct synonyms nearby.' },
      { title: 'Substitute candidate meanings', text: 'Plug your guess into the original sentence to verify that the paragraph maintains logical coherence.' },
    ],
  },

  // 8.2C Greek and Latin roots
  {
    code: 'rla:8.2C',
    goal: 'You will learn to use Greek and Latin roots (ast, qui, path, mand/mend, duc) to determine the meaning of academic words.',
    words: [
      { term: 'root', meaning: 'A base word part that carries core meaning and cannot stand alone.' },
      { term: 'prefix', meaning: 'An affix attached to the beginning of a root to alter its meaning.' },
    ],
    ideas: [
      { title: 'Memorize Grade 8 root meanings', text: 'ast = star (astronomy, asterisk); qui = quiet/rest (tranquil, disquiet); path = feeling/suffering (empathy, sympathy); mand/mend = order/entrust (mandate, commend); duc = lead (deduce, conduct).' },
      { title: 'Break unknown words into morphemes', text: 'Identify the root first, then look at prefixes and suffixes to assemble the full meaning.' },
    ],
  },

  // 8.10D Edit for conventions
  {
    code: 'rla:8.10D',
    goal: 'You will learn to edit drafts for standard English grammar, usage, mechanics, and spelling conventions.',
    words: [
      { term: 'conventions', meaning: 'The standard rules of grammar, capitalization, punctuation, and spelling in written English.' },
    ],
    ideas: [
      { title: 'Read aloud to catch errors', text: 'Hearing sentences spoken aloud helps identify awkward phrasing, missing words, and misplaced punctuation.' },
      { title: 'Check one skill at a time', text: 'First review for complete sentences, then check verb tenses, pronoun agreement, and finally spelling.' },
    ],
  },

  // 8.10D.i Complex sentences and agreement
  {
    code: 'rla:8.10D.i',
    goal: 'You will learn to edit drafts for complete complex sentences with subject-verb agreement and avoid splices, run-ons, and fragments.',
    words: [
      { term: 'complex sentence', meaning: 'A sentence containing one independent clause and at least one dependent (subordinate) clause.' },
      { term: 'comma splice', meaning: 'An error where two independent clauses are joined with only a comma and no coordinating conjunction.' },
    ],
    ideas: [
      { title: 'Subordinating conjunctions require commas when placed first', text: 'When a dependent clause starts a sentence (e.g., Although..., Because...), follow it with a comma.' },
      { title: 'Fix comma splices with semicolons or conjunctions', text: 'Join two independent clauses with a semicolon or a comma followed by a FANBOYS conjunction (for, and, nor, but, or, yet, so).' },
    ],
  },

  // 8.10D.ii Verb tense and active/passive voice
  {
    code: 'rla:8.10D.ii',
    goal: 'You will learn to maintain consistent verb tenses and use active voice for direct, energetic writing.',
    words: [
      { term: 'active voice', meaning: 'A sentence structure where the subject performs the action expressed by the verb.' },
      { term: 'passive voice', meaning: 'A sentence structure where the subject receives the action of the verb.' },
    ],
    ideas: [
      { title: 'Prefer active voice', text: 'Active voice ("Engineers designed the spacecraft") is more concise and dynamic than passive voice ("The spacecraft was designed by engineers").' },
      { title: 'Maintain timeline consistency', text: 'Do not shift between past and present tense unless a genuine change in time is occurring in the text.' },
    ],
  },

  // 8.10D.iii Prepositional phrases and agreement
  {
    code: 'rla:8.10D.iii',
    goal: 'You will learn to identify prepositional phrases and prevent them from causing subject-verb agreement errors.',
    words: [
      { term: 'prepositional phrase', meaning: 'A modifying phrase consisting of a preposition and its object (e.g., of the students, in the laboratory).' },
    ],
    ideas: [
      { title: 'Cross out prepositional phrases', text: 'To find the true subject, mentally remove phrases between the subject and verb: "The box [of antique coins] was found."' },
      { title: 'Indefinite pronouns are usually singular', text: 'Words like each, neither, and everyone take singular verbs even when followed by a plural prepositional phrase.' },
    ],
  },

  // 8.10D.iv Pronoun-antecedent agreement
  {
    code: 'rla:8.10D.iv',
    goal: 'You will learn to ensure pronouns agree with their antecedents in number, person, and gender.',
    words: [
      { term: 'antecedent', meaning: 'The noun or pronoun that a subsequent pronoun refers to or replaces.' },
    ],
    ideas: [
      { title: 'Collective nouns are singular in American English', text: 'Words like team, committee, and jury are treated as singular units and take the pronoun "its", not "their".' },
      { title: 'Watch singular indefinite pronouns', text: '"Each student must bring his or her notebook," not "their notebook," in formal writing.' },
    ],
  },

  // 8.10D.v Correct capitalization
  {
    code: 'rla:8.10D.v',
    goal: 'You will learn to edit drafts for correct capitalization of proper nouns, titles, and institutions.',
    words: [
      { term: 'proper noun', meaning: 'A specific name for an individual person, place, organization, or historical event that requires capitalization.' },
    ],
    ideas: [
      { title: 'Capitalize specific official titles', text: 'Capitalize titles when they precede a name (President Lincoln) or name a specific institution (NASA, Texas Academy of Science).' },
      { title: 'Keep general seasons and school subjects lowercase', text: 'Seasons (spring, autumn) and general subjects (science, history) are lowercase unless naming a language (Spanish, English).' },
    ],
  },

  // 8.10D.vi Punctuation: semicolons, colons, nonrestrictive clauses
  {
    code: 'rla:8.10D.vi',
    goal: 'You will learn to use semicolons, colons, parentheses, and commas in nonrestrictive clauses correctly.',
    words: [
      { term: 'nonrestrictive clause', meaning: 'A descriptive clause that adds non-essential information and is set off by commas.' },
      { term: 'colon', meaning: 'A punctuation mark (:) used after an independent clause to introduce a list, explanation, or quote.' },
    ],
    ideas: [
      { title: 'Semicolons connect related thoughts', text: 'Use a semicolon to join two independent clauses without a conjunction: "The rain stopped; the sun broke through."' },
      { title: 'Colons require a complete sentence beforehand', text: 'Never place a colon directly after a verb like "includes" or a preposition like "such as".' },
    ],
  },

  // 8.10D.vii Correct spelling and confused words
  {
    code: 'rla:8.10D.vii',
    goal: 'You will learn to edit drafts for correct spelling and commonly confused terms like affect/effect, its/it\'s, and there/their/they\'re.',
    words: [
      { term: 'homophone', meaning: 'Words that sound identical but differ in spelling and meaning.' },
    ],
    ideas: [
      { title: 'Distinguish affect and effect', text: 'Affect is usually an action verb (A = Action); Effect is usually a noun meaning an outcome (E = End result).' },
      { title: 'Test contractions with substitution', text: 'Substitute "it is" into the sentence. If it makes sense, use "it\'s"; otherwise use possessive "its".' },
    ],
  },

  // ---------- Strand 1 Reading Skills ----------

  // 8.5C Predictions and text structures
  {
    code: 'rla:8.5C',
    goal: 'You will learn to make, correct, or confirm predictions using text features, genre characteristics, and text structures.',
    words: [
      { term: 'prediction', meaning: 'An informed guess about what will happen next in a text based on clues and prior knowledge.' },
    ],
    ideas: [
      { title: 'Use headings and introductory clues', text: 'Titles, subheadings, and opening sentences establish the direction and focus of the passage.' },
      { title: 'Confirm or revise as you read', text: 'Good readers constantly verify whether their initial predictions align with new evidence in the text.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.5C', cites: [1, 2],
          stem: 'Based on paragraph 1, what prediction can the reader make about Maya\'s search?',
          choices: [
            'Maya\'s patience and careful tools will lead to a significant geological discovery despite Leo\'s skepticism.',
            ['Maya will give up immediately and walk home with Leo.', 'Paragraph 2 shows she persists with careful chisel work.'],
            ['Leo will find a complete tyrannosaurus skeleton under the tree.', 'Leo is resting and complaining, not searching.'],
            ['A sudden flood will sweep away Maya\'s canvas kit.', 'The scene focuses on patient fossil discovery.'],
          ],
          answer: 0,
          explain: 'Maya\'s preparation with a chisel and brush contrasts with Leo\'s impatience, predicting that her careful method will succeed.',
        }), 8),
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.5C', cites: [2],
          stem: 'What prediction does Joaquin\'s memory of his grandfather\'s rule support in paragraph 2?',
          choices: [
            'A dangerous flash flood will rapidly sweep through the canyon wash.',
            ['The storm will clear and the afternoon will remain sunny.', 'The sky is bruising and thunder is rattling the cabin.'],
            ['Joaquin will stay outside to sketch the lightning bolts.', 'His grandfather\'s rule warns of imminent danger, requiring shelter.'],
            ['The park rangers will cancel the thunderstorm.', 'Humans cannot cancel weather events.'],
          ],
          answer: 0,
          explain: 'His grandfather\'s rule states that cold air and the scent of wet dust mean a flash flood follows within minutes.',
        }), 8),
    ],
  },

  // 8.5E Make connections
  {
    code: 'rla:8.5E',
    goal: 'You will learn to make connections to personal experiences, ideas in other texts, and society.',
    words: [
      { term: 'synthesize', meaning: 'To combine ideas from different sources to create a new, broader understanding.' },
    ],
    ideas: [
      { title: 'Connect to real-world issues', text: 'Ask how a text\'s themes reflect contemporary debates about technology, environmental stewardship, or civic rights.' },
      { title: 'Compare characters and dilemmas', text: 'Notice how characters facing adversity mirror historical figures who showed moral courage.' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.5E', cites: [1],
          stem: 'What societal connection can readers make to the argument for school solar arrays?',
          choices: [
            'Many communities and public schools across the country are seeking renewable energy solutions to lower costs and combat climate change.',
            ['All schools in America have completely eliminated electricity in favor of candles.', 'Modern schools utilize electrical power.'],
            ['Solar energy is illegal in the state of Texas.', 'Texas has major solar and renewable energy programs.'],
            ['Textbook publishing companies manufacture their own rooftop solar panels.', 'Publishers make educational books, not solar hardware.'],
          ],
          answer: 0,
          explain: 'The proposal mirrors real-world school board debates balancing green energy investments with budget constraints.',
        }), 8),
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.5E', cites: [1, 2],
          stem: 'What ecological connection can readers make to monarch butterfly migration across Texas?',
          choices: [
            'Protecting international wildlife migration corridors requires conservation cooperation across Canada, the US, and Mexico.',
            ['Monarch butterflies only live in indoor greenhouse enclosures.', 'Monarchs migrate thousands of miles across open continental flyways.'],
            ['Butterflies have replaced passenger airplanes for intercity transport.', 'Butterflies are small insects, not passenger transport.'],
            ['Texas ranchers build wooden fences to stop butterfly migrations.', 'Fences cannot impede flying butterflies.'],
          ],
          answer: 0,
          explain: 'Monarch migration connects to international conservation efforts across North American borders.',
        }), 8),
    ],
  },

  // 8.5F Inferences and evidence
  {
    code: 'rla:8.5F',
    goal: 'You will learn to make logical inferences and use text evidence to support your understanding.',
    words: [
      { term: 'inference', meaning: 'A conclusion reached by combining text evidence with background knowledge.' },
    ],
    ideas: [
      { title: 'Read between the lines', text: 'Writers do not state everything directly. Look at character actions, dialogue, and word choice for deeper clues.' },
      { title: 'Anchor inferences in specific sentences', text: 'Every valid inference must be supported by identifiable text details.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.5F', cites: [1, 2],
          stem: 'What can the reader infer about Maya compared to Leo?',
          choices: [
            'Maya possesses patience, scientific dedication, and persistence, whereas Leo is easily discouraged by physical discomfort.',
            ['Leo is a trained paleontologist who knows the creek bed well.', 'Leo complains and thinks it is just ordinary rock.'],
            ['Maya is frustrated and wants to go home.', 'Maya smiles with excitement when finding the ammonite.'],
            ['Both siblings dislike outdoor exploration.', 'Maya is actively dedicated to fossil hunting.'],
          ],
          answer: 0,
          explain: 'Maya works steadily with tools while Leo checks his watch and complains, proving she is patient and persistent.',
        }), 8),
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.5F', cites: [1, 2],
          stem: 'What can the reader infer from Joaquin\'s reaction in paragraph 1?',
          choices: [
            'The concussive thunderclap was extraordinarily sudden and loud enough to startle him into dropping his pencil.',
            ['Joaquin was expecting the thunderclap and remained completely still.', 'He jumped up and dropped his sketchpad.'],
            ['Joaquin fell asleep because the storm was quiet.', 'The thunder produced a concussive boom.'],
            ['Joaquin broke his pencil on purpose to stop drawing.', 'He dropped it in sudden shock.'],
          ],
          answer: 0,
          explain: 'Jumping up and dropping his pencil shows he was genuinely startled by the violent close lightning strike.',
        }), 8),
    ],
  },

  // 8.5G Key ideas and details
  {
    code: 'rla:8.5G',
    goal: 'You will learn to evaluate details read to determine key ideas.',
    words: [
      { term: 'key idea', meaning: 'The central thought or main message that a text or paragraph conveys.' },
    ],
    ideas: [
      { title: 'Distinguish main ideas from supporting details', text: 'Details provide examples, statistics, or explanations that reinforce the larger main idea.' },
      { title: 'Ask what connects all the details', text: 'Look at what the sentences in a paragraph have in common to determine the central concept.' },
    ],
    samples: [
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.5G', cites: [2],
          stem: 'Which key detail explains how monarchs navigate across thousands of miles?',
          choices: [
            'They combine a sun compass in their brains with circadian clocks in their antennae that adjust for the sun\'s movement.',
            ['They follow commercial highway road signs through Texas.', 'Butterflies do not read highway signs.'],
            ['Older butterflies fly alongside young ones to teach them the route.', 'The butterflies migrating in autumn have never made the trip before.'],
            ['They navigate by smelling salt water from the Pacific Ocean.', 'The text identifies the brain sun compass and antennal clocks.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 specifically identifies the internal sun compass and antennal circadian clocks as the biological navigation system.',
        }), 8),
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.5G', cites: [2],
          stem: 'Which detail from paragraph 2 explains why the forest floor soil prevents severe erosion?',
          choices: [
            'The spongy humus layer of pine needles and decaying logs absorbs heavy rainfall like a giant natural sponge.',
            ['The emergent canopy reaches over one hundred feet in height.', 'This describes canopy height, not soil absorption.'],
            ['Understory dogwoods produce pink springtime flowers.', 'Flower color does not absorb rainwater.'],
            ['East Texas logging trucks compact the soil into hard stone.', 'Soil compaction is not described in the passage.'],
          ],
          answer: 0,
          explain: 'The text explains that the spongy soil absorbs heavy rains, buffering runoff and preventing erosion.',
        }), 8),
    ],
  },

  // 8.5H Synthesize new understanding
  {
    code: 'rla:8.5H',
    goal: 'You will learn to synthesize information to create new understanding across texts and ideas.',
    words: [
      { term: 'synthesis', meaning: 'Integrating multiple perspectives or facts from different sources to develop a broader conclusion.' },
    ],
    ideas: [
      { title: 'Combine ideas across sources', text: 'Compare how two passages address the same topic with different genres, details, or viewpoints.' },
      { title: 'Formulate an overarching insight', text: 'A synthesis goes beyond summarizing; it reveals a deeper truth not explicitly stated in either text alone.' },
    ],
    samples: [
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.5H', cites: [1, 2],
          stem: 'Synthesizing the details about the canopy, understory, and forest floor, what overarching concept emerges?',
          choices: [
            'Each vertical layer of the forest functions as an interconnected system where upper levels shelter and lower levels nourish the entire ecosystem.',
            ['The forest layers compete in a destructive war that will eventually destroy the Piney Woods.', 'The layers cooperate and sustain each other.'],
            ['Pine trees are the only plants capable of surviving in East Texas soil.', 'Dogwoods, redbuds, ferns, and fungi also thrive.'],
            ['The forest ecosystem operates independently of rainfall and sunlight.', 'Both sunlight and rainwater are essential inputs.'],
          ],
          answer: 0,
          explain: 'Synthesizing the vertical layers reveals how the canopy shelters while the forest floor absorbs water, creating an integrated ecosystem.',
        }), 8),
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.5H', cites: [1, 2],
          stem: 'Synthesizing the arguments in "Power from the Sun," what balanced conclusion can be drawn?',
          choices: [
            'While upfront equipment costs exist, grants and long-term utility savings make solar energy a sound fiscal and environmental investment for schools.',
            ['Solar panels should be avoided because school roofs will immediately collapse.', 'No structural collapse is mentioned.'],
            ['Utility bills are too small to worry about in public school financing.', 'Utility bills are identified as mounting operational expenses.'],
            ['Schools should only invest in technology that produces immediate profit on day one.', 'Solar is described as a multi-year investment that pays for itself over time.'],
          ],
          answer: 0,
          explain: 'Synthesizing both paragraphs balances the initial cost against grant offsets and 20-year utility savings.',
        }), 8),
    ],
  },

  // 8.6C Text evidence
  {
    code: 'rla:8.6C',
    goal: 'You will learn to use text evidence to support an appropriate, well-reasoned response.',
    words: [
      { term: 'text evidence', meaning: 'Specific words, phrases, or sentences from a text used to prove or support an assertion.' },
    ],
    ideas: [
      { title: 'Direct quotes versus paraphrase', text: 'Strong responses quote key phrases directly or accurately paraphrase the author\'s specific evidence.' },
      { title: 'Verify evidence relevance', text: 'Ensure the cited evidence directly proves the question asked, rather than an unrelated fact.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.6C', cites: [2],
          stem: 'Which text evidence best proves that Maya discovered a marine fossil rather than a dinosaur bone?',
          choices: [
            'Beneath the shale lay an eight-inch spiraled impression coiled like a nautilus shell, identified as an ammonite.',
            ['"We\'ve been out here in the heat for two hours..."', 'This describes Leo\'s complaint about heat.'],
            ['"Maya ignored him, pulling a small wooden chisel..."', 'This describes her tools, not the fossil identity.'],
            ['"Her brother, Leo, leaned impatiently against an oak tree..."', 'This describes Leo\'s posture.'],
          ],
          answer: 0,
          explain: 'The description of an eight-inch coiled spiraled impression like a nautilus shell and the word "ammonite" proves it was a marine fossil.',
        }), 8),
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.6C', cites: [2],
          stem: 'Which text evidence from paragraph 2 refutes the argument that solar panels are too expensive?',
          choices: [
            'State clean-energy rebates and federal grants frequently offset up to seventy percent of equipment costs.',
            ['"Skeptics argue that high upfront installation expenses make solar panels impractical..."', 'This states the counterargument, not the refutation.'],
            ['"...freeing thousands of dollars for classroom textbooks..."', 'This describes how savings can be spent.'],
            ['"School districts across Texas face mounting operational expenses..."', 'This establishes the district\'s financial challenge.'],
          ],
          answer: 0,
          explain: 'Citing the 70% grant and rebate offsets directly disproves the claim of unaffordability.',
        }), 8),
    ],
  },

  // 8.6D Paraphrase and summarize
  {
    code: 'rla:8.6D',
    goal: 'You will learn to paraphrase and summarize texts in ways that maintain meaning and logical order.',
    words: [
      { term: 'summary', meaning: 'A brief restatement of the main points of a text, free from personal opinion.' },
    ],
    ideas: [
      { title: 'Include only essential main ideas', text: 'Leave out minor conversational details, personal anecdotes, or excessive examples in a summary.' },
      { title: 'Preserve chronological and logical order', text: 'Follow the same logical progression as the original author.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.6D', cites: [1, 2],
          stem: 'Which is the best objective summary of "Treasure in the Limestone"?',
          choices: [
            'While her brother complains about the heat, Maya patiently uses a chisel to uncover a prehistoric coiled ammonite fossil in a Texas creek bed.',
            ['Leo convinces Maya that looking for dinosaur bones in Glen Rose is a waste of time.', 'Maya does not give up; she finds an ammonite.'],
            ['Two siblings get lost in a Texas forest until park rangers rescue them with water.', 'There is no rescue or getting lost in the text.'],
            ['A scientist lectures students on how limestone deposits formed during the Cretaceous era.', 'The story is about two young siblings on a creek bed.'],
          ],
          answer: 0,
          explain: 'This summary concisely captures the setting, character contrast, action, and key discovery.',
        }), 8),
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.6D', cites: [1, 2],
          stem: 'Which statement provides the best objective summary of the monarch butterfly selection?',
          choices: [
            'Monarch butterflies complete an extraordinary 2,000-mile autumn migration to Mexico, guided by a specialized sun compass and antennal circadian clocks.',
            ['Monarch butterflies weigh less than a paperclip and often get blown off course by Texas summer breezes.', 'The text focuses on their successful navigational migration, not getting lost.'],
            ['Scientists travel to Mexico every winter to plant new oyamel fir trees for butterflies.', 'Scientists study butterfly navigation, not planting trees.'],
            ['Butterflies have replaced birds as the primary pollinators of East Texas pine forests.', 'No comparison to birds in pine forests is made.'],
          ],
          answer: 0,
          explain: 'This summary captures the full scope: the 2,000-mile migration and the biological navigation mechanism.',
        }), 8),
    ],
  },

  // 8.7A Theme development
  {
    code: 'rla:8.7A',
    goal: 'You will learn to analyze how themes are developed through the interaction of characters and events.',
    words: [
      { term: 'theme', meaning: 'The underlying universal message or life lesson that an author conveys in a story.' },
    ],
    ideas: [
      { title: 'Track character transformation', text: 'Look at how characters change after confronting a major challenge or conflict.' },
      { title: 'Connect conflict resolution to theme', text: 'How a conflict is resolved reveals what the author values (perseverance, empathy, honesty).' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.7A', cites: [1, 2],
          stem: 'Which theme is developed through the contrast between Maya and Leo?',
          choices: [
            'Patience and methodical effort often reveal hidden wonders that hasty impatience overlooks.',
            ['Brothers and sisters should never participate in outdoor activities together.', 'The story does not promote family alienation.'],
            ['Dinosaur fossils are easy to locate in any backyard with a shovel.', 'Fossil hunting requires patient technique and specific strata.'],
            ['Electronic wristwatches are the most important tool for wilderness exploration.', 'The watch was a symbol of Leo\'s impatience, not an exploration tool.'],
          ],
          answer: 0,
          explain: 'The contrast between Leo\'s impatient watch-checking and Maya\'s careful chiseling develops the theme that patience uncovers hidden marvels.',
        }), 8),
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.7A', cites: [1, 2],
          stem: 'How does Joaquin\'s memory of his grandfather develop the theme of respect for nature?',
          choices: [
            'By illustrating how honoring traditional knowledge of weather patterns is essential for survival in dangerous wilderness environments.',
            ['By showing that young people should ignore adults and explore storms on their own.', 'Joaquin respects and heeds his grandfather\'s advice.'],
            ['By demonstrating that modern houses are completely immune to weather hazards.', 'The tin roof rattles violently under thunder.'],
            ['By proving that drawing pictures of lightning prevents thunderstorms from occurring.', 'Drawing has no impact on storm meteorology.'],
          ],
          answer: 0,
          explain: 'Remembering his grandfather\'s lesson shows that experiential wisdom and humility before nature protect human lives.',
        }), 8),
    ],
  },

  // 8.7B Character motivations and conflict
  {
    code: 'rla:8.7B',
    goal: 'You will learn to analyze how characters\' motivations and behaviors influence events and the resolution of conflict.',
    words: [
      { term: 'motivation', meaning: 'The internal desires, needs, or beliefs that cause a character to act in a certain way.' },
    ],
    ideas: [
      { title: 'Identify internal versus external forces', text: 'Ask whether a character is driven by fear, ambition, empathy, or family duty.' },
      { title: 'Follow the chain of actions', text: 'Notice how one character\'s decision directly provokes a reaction from other characters or alters the plot.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.7B', cites: [1, 2],
          stem: 'What motivates Maya to continue digging despite Leo\'s complaints?',
          choices: [
            'A passionate curiosity about prehistoric life and a belief that careful observation will yield discoveries.',
            ['A desire to make Leo cry by making him wait in the heat.', 'Maya smiles and shares the discovery; she has no malice.'],
            ['Fear that park rangers will fine her if she leaves the creek bed.', 'No park rangers are mentioned.'],
            ['A wish to sell rocks to tourists to buy track shoes.', 'Her motive is genuine scientific wonder.'],
          ],
          answer: 0,
          explain: 'Maya is motivated by curiosity and scientific care, ignoring complaints to discover the ammonite.',
        }), 8),
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.7B', cites: [1, 2],
          stem: 'How does Joaquin\'s realization about canyon weather motivate his next action?',
          choices: [
            'Recognizing the danger of an imminent flash flood motivates him to seek immediate shelter and evacuate low ground.',
            ['He is motivated to hike down to the bottom of the wash to collect driftwood.', 'Hiking into the wash during a flash flood would be disastrous.'],
            ['He decides to ignore the storm and finish his charcoal drawing outdoors.', 'He drops his pencil and recognizes the danger.'],
            ['He calls a taxi to pick him up on the canyon floor.', 'No taxis operate on wilderness canyon floors.'],
          ],
          answer: 0,
          explain: 'Knowing flash floods arrive within minutes motivates Joaquin to evacuate the wash and seek secure shelter.',
        }), 8),
    ],
  },

  // 8.7C Non-linear plot development
  {
    code: 'rla:8.7C',
    goal: 'You will learn to analyze non-linear plot development such as flashbacks, foreshadowing, subplots, and parallel plot structures.',
    words: [
      { term: 'flashback', meaning: 'A scene that interrupts the chronological narrative to show events that happened at an earlier time.' },
      { term: 'foreshadowing', meaning: 'Literary clues that hint at events that will happen later in the plot.' },
    ],
    ideas: [
      { title: 'Identify shifts in timeline', text: 'Look for transition phrases like "years earlier," "she remembered," or changes in verb tense indicating past memories.' },
      { title: 'Determine the purpose of non-linear elements', text: 'Flashbacks explain character motivations; foreshadowing builds tension and suspense.' },
    ],
    samples: [
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.7C', cites: [2],
          stem: 'How does the flashback to the grandfather\'s advice in paragraph 2 affect the story\'s plot?',
          choices: [
            'It interrupts the current timeline to provide vital survival knowledge that explains why Joaquin recognizes the impending flood danger.',
            ['It reveals that Joaquin\'s grandfather was an electrical engineer.', 'The grandfather shared wilderness weather rules.'],
            ['It explains why the tin roof of the cabin was built from galvanized metal.', 'Roof construction is not the focus of the flashback.'],
            ['It shows that Joaquin does not know how to tell time.', 'The flashback discusses natural weather cues, not clocks.'],
          ],
          answer: 0,
          explain: 'The memory of his grandfather\'s rule provides the critical knowledge that transforms sensory observations into flood awareness.',
        }), 8),
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.7C', cites: [1],
          stem: 'How does the author use foreshadowing in paragraph 1 to prepare for the discovery in paragraph 2?',
          choices: [
            'By emphasizing Maya\'s specialized canvas kit with chisel and brush, hinting that she possesses the right tools to uncover something hidden.',
            ['By mentioning Leo\'s wristwatch, hinting that time travel will occur.', 'No time travel occurs in the realistic narrative.'],
            ['By describing the oak tree, hinting that leaves will fall.', 'The oak tree simply provides shade for Leo.'],
            ['By mentioning the dried creek bed, hinting that a tidal wave will strike.', 'The creek bed is dry limestone.'],
          ],
          answer: 0,
          explain: 'Detailing Maya\'s chisel and bristle brush foreshadows her careful chipping away of shale to reveal the fossil.',
        }), 8),
    ],
  },

  // 8.7D Setting and character values
  {
    code: 'rla:8.7D',
    goal: 'You will learn to explain how the setting influences the values, beliefs, and actions of characters.',
    words: [
      { term: 'setting', meaning: 'The time, place, and environmental conditions in which a story occurs.' },
    ],
    ideas: [
      { title: 'Setting shapes character survival', text: 'Harsh or extreme settings (deserts, stormy seas, canyons) demand specific values like resourcefulness and vigilance.' },
      { title: 'Setting reflects cultural heritage', text: 'A character raised in a historic or rural setting often inherits traditions tied to the land.' },
    ],
    samples: [
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.7D', cites: [1, 2],
          stem: 'How does the rugged Caprock canyon setting influence Joaquin\'s values and behavior?',
          choices: [
            'The unpredictable and hazardous canyon environment forces him to value environmental vigilance and respect nature\'s power over leisure.',
            ['It causes him to despise outdoor landscapes and wish for city living.', 'He is out sketching the scenery, showing appreciation.'],
            ['It encourages him to build large wooden bonfires in dried washes.', 'Building fires in dry brush is hazardous and not in the text.'],
            ['It makes him believe that weather has no effect on human safety.', 'He clearly respects the power of sudden flash floods.'],
          ],
          answer: 0,
          explain: 'The fragile, dangerous canyon setting demands alertness and respect for flash floods, shaping his cautious behavior.',
        }), 8),
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.7D', cites: [1],
          stem: 'How does the ancient limestone creek bed in Glen Rose influence Maya\'s actions?',
          choices: [
            'The fossil-rich geological strata inspire her to search patiently for prehistoric evidence embedded in the rock layers.',
            ['It makes her want to build a concrete shopping center.', 'She is engaged in paleontology, not commercial development.'],
            ['It frightens her into running away from the creek.', 'She kneels calmly with her chisel and brush.'],
            ['It causes her to lose all interest in science and history.', 'The setting inspires her scientific discovery.'],
          ],
          answer: 0,
          explain: 'The famous fossil-bearing limestone of Glen Rose directly prompts Maya\'s dedicated search for ancient impressions.',
        }), 8),
    ],
  },
];

export const G8_RLA_LESSONS: Lesson[] = [
  ...G8_RLA_LESSONS_FIRST,
  ...G8_RLA_LESSONS_MORE,
];
