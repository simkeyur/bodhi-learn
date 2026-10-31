// Grade 8 editing draft: Urban Micro-Farming and Pollinators
import { makeSet, mcq } from '../author.ts';

export const EDIT_GARDEN = makeSet({
  id: 'g8-edit-garden',
  grade: 8,
  kind: 'editing',
  title: 'Urban Micro-Farming and Pollinators',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [{
    id: 'g8-edit-garden-p',
    title: 'Urban Micro-Farming and Pollinators',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Across metropolitan areas in Texas, barren concrete rooftops and vacant asphalt lots are being transformed into thriving urban micro-farms.',
        'These community agricultural spaces provide fresh organic produce to urban neighborhoods that frequently lack access to full-service grocery supermarkets.',
        'In addition, urban micro-farms provide critical sanctuary corridors for native pollinator populations threatened by suburban habitat fragmentation.',
      ] },
      { kind: 'sentences', sentences: [
        'Cultivating indigenous flowering flora like Texas bluebonnets, purple coneflowers, and desert willows attract native bees, monarch butterflies, and hummingbirds.',
        'Volunteers construct raised wooden cedar planter beds filled with rich composted organic soil, rainwater catchment barrels, and drip irrigation hoses.',
        'The urban micro-farm produces fresh vegetables, it also creates an outdoor environmental classroom where students learn sustainable biology.',
      ] },
      { kind: 'sentences', sentences: [
        'Because soil contamination from historic industrial runoff can pose health risks in inner cities, cultivators use elevated cedar garden beds lined with impermeable geotextile fabric.',
        "It's roots absorb moisture while remaining protected from subterranean heavy metals.",
        'Participating in urban farming fosters civic pride, restores biodiversity, and reconnects urban residents with the natural agricultural rhythms of the earth.',
      ] },
      { kind: 'sentences', sentences: [
        'Local schools collaborate with community garden managers to offer hands-on workshops where youth learn about soil microbiology, composting, and water conservation.',
        'These grassroots environmental initiatives demonstrate that sustainable agriculture can flourish even in the heart of our most densely populated urban centers.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.10B.i', cites: [4, 5],
      stem: 'Which revision best improves the organizational coherence between sentence 4 and sentence 5?',
      choices: [
        ['Delete sentence 5 entirely because cedar lumber is expensive.', 'Sentence 5 explains how the beds are built and should not be deleted.'],
        ['Move sentence 5 before sentence 1 to start with wooden carpentry.', 'Starting with carpentry disrupts the introductory definition of urban micro-farms.'],
        ['Add the transition \'Conversely\' to show that planters hate plants.', '\'Conversely\' indicates opposition, which contradicts the cooperative relationship described.'],
        'Place sentence 5 before sentence 4 so construction comes first.',
      ],
      answer: 3,
      explain: 'Constructing the planter beds and irrigation must happen before cultivating plants in them.',
    }),
    mcq({
      standard: 'rla:8.10B.ii', cites: [2],
      stem: 'The writer wants to elaborate on sentence 2 with concrete examples reflecting depth of thought. Which sentence is best to add?',
      choices: [
        'Harvesting okra and peppers alleviates food deserts in cities.',
        ['Supermarkets sell chips, soda, and candy in colorful cardboard packaging.', 'Listing snack foods does not develop the benefits of fresh produce in food deserts.'],
        ['Some people prefer fast food because drive-through windows are convenient.', 'This detracts from the goal of community gardening.'],
        ['Carrots grow underground and tomatoes grow on wooden garden stakes.', 'This is a basic biological fact that lacks analytical depth.'],
      ],
      answer: 0,
      explain: 'Naming specific vegetables and addressing urban food deserts demonstrates depth of thought.',
    }),
    mcq({
      standard: 'rla:8.10C', cites: [4],
      stem: 'How should sentence 4 be revised to eliminate awkward phrasing and ensure precise diction?',
      choices: [
        ['Planting Texas flowers makes bugs and birds come around the garden lot.', 'This phrasing is overly simplistic and informal.'],
        ['Flowers that grow in Texas look pretty and attract bees and butterflies.', 'This lacks academic tone and precision.'],
        'Planting native flowers creates nectar corridors for pollinators.',
        ['Texas flowers of indigenous flora are planted to attract flying creatures.', 'This is redundant and vague.'],
      ],
      answer: 2,
      explain: 'This phrasing is grammatically correct and uses precise academic diction.',
    }),
    mcq({
      standard: 'rla:8.10D.i', cites: [6],
      stem: 'Sentence 6 contains a comma splice. What is the best way to correct it?',
      choices: [
        ['The urban farm produces vegetables, also creates an outdoor classroom.', 'This creates an ungrammatical compound predicate without a coordinating conjunction.'],
        ['The urban farm produces fresh vegetables it also creates a classroom.', 'This creates a run-on sentence.'],
        ['Producing vegetables, an outdoor classroom is created by the farm team.', 'This creates an awkward passive construction with a dangling modifier.'],
        'The farm produces vegetables and creates an outdoor classroom.',
      ],
      answer: 3,
      explain: 'Combining the predicates with a coordinating conjunction resolves the comma splice cleanly.',
    }),
    mcq({
      standard: 'rla:8.10D.ii', cites: [1],
      stem: 'Sentence 1 is in the passive voice ("are being transformed"). How can it be revised into dynamic active voice?',
      choices: [
        ['Rooftops and vacant lots have transformation occurring upon them daily.', 'This phrasing is convoluted and weak.'],
        ['Rooftops are being turned into micro-farms by enthusiastic gardeners.', 'This remains in the passive voice.'],
        'Organizers are transforming barren rooftops into micro-farms.',
        ['Across Texas, concrete rooftops are receiving plants and soil today.', 'This uses weak, imprecise phrasing.'],
      ],
      answer: 2,
      explain: 'Making \'Organizers\' the subject of the active verb \'are transforming\' creates energetic writing.',
    }),
    mcq({
      standard: 'rla:8.10D.vii', cites: [8],
      stem: 'Sentence 8 contains a confused word error. Which correction should be made?',
      choices: [
        ['Change the plural verb "absorb" to the singular "absorbs".', "'Roots' is plural, requiring the plural verb 'absorb'."],
        'Change "It\'s" to "Their".',
        ['Change the noun "moisture" to the action verb "moisturize".', "'Moisture' is the correct noun object of 'absorb'."],
        ['Change the noun "metals" to the athletic noun "medals".', "'Metals' refers to chemical elements; 'medals' refers to awards."],
      ],
      answer: 1,
      explain: "'It's' is a contraction for 'it is'. The sentence refers to the plural plants' roots, requiring the possessive pronoun 'Their'.",
    }),
  ],
});
