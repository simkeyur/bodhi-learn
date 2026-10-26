// Grade 8 editing draft: Urban Micro-Farming and Pollinators
import { makeSet, mcq } from '../author.ts';

export const EDIT_GARDEN = makeSet({
  id: "g8-edit-garden",
  grade: 8,
  kind: 'editing',
  title: "Urban Micro-Farming and Pollinators",
  intro: "Read the draft and choose the best answer to each question.",
  passages: [{
    id: "g8-edit-garden-p",
    title: "Urban Micro-Farming and Pollinators",
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        "Across metropolitan areas in Texas, barren concrete rooftops and vacant asphalt lots are being transformed into thriving urban micro-farms.",
        "These community agricultural spaces provide fresh organic produce to urban neighborhoods that frequently lack access to full-service grocery supermarkets.",
        "In addition, urban micro-farms provide critical sanctuary corridors for native pollinator populations threatened by suburban habitat fragmentation.",
      ] },
      { kind: 'sentences', sentences: [
        "Cultivating indigenous flowering flora like Texas bluebonnets, purple coneflowers, and desert willows attract native bees, monarch butterflies, and hummingbirds.",
        "Volunteers construct raised wooden cedar planter beds filled with rich composted organic soil, rainwater catchment barrels, and drip irrigation hoses.",
        "The urban micro-farm produces fresh vegetables, it also creates an outdoor environmental classroom where students learn sustainable biology.",
      ] },
      { kind: 'sentences', sentences: [
        "Because soil contamination from historic industrial runoff can pose health risks in inner cities, cultivators use elevated cedar garden beds lined with impermeable geotextile fabric.",
        "It's roots absorb moisture while remaining protected from subterranean heavy metals.",
        "Participating in urban farming fosters civic pride, restores biodiversity, and reconnects urban residents with the natural agricultural rhythms of the earth.",
      ] },
      { kind: 'sentences', sentences: [
        "Local schools collaborate with community garden managers to offer hands-on workshops where youth learn about soil microbiology, composting, and water conservation.",
        "These grassroots environmental initiatives demonstrate that sustainable agriculture can flourish even in the heart of our most densely populated urban centers.",
      ] },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [4, 5],
      stem: "Which revision best improves the organizational coherence between sentence 4 and sentence 5?",
      choices: [
        ["Delete sentence 5 entirely because cedar lumber is expensive.", "Sentence 5 explains how the beds are built and should not be deleted."],
        ["Move sentence 5 before sentence 1 to start the essay with wooden carpentry.", "Starting with carpentry disrupts the introductory definition of urban micro-farms."],
        ["Add the transition 'Conversely' to show that planters hate flowering plants.", "'Conversely' indicates opposition, which contradicts the cooperative relationship described."],
        "Place sentence 5 before sentence 4 so that the physical construction of the garden beds logically precedes the planting of native flora.",
      ],
      answer: 3,
      explain: "Logically, constructing the raised planter beds and installing irrigation must happen before cultivating flowering plants in them.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [2],
      stem: "The writer wants to elaborate on sentence 2 with concrete examples reflecting depth of thought. Which sentence is best to add?",
      choices: [
        ["Supermarkets sell cereal, potato chips, soda, and candy bars in brightly colored cardboard packaging.", "Listing junk food does not develop the benefits of fresh produce in food deserts."],
        "By harvesting drought-hardy vegetables like okra, black-eyed peas, and poblano peppers, community gardens alleviate urban 'food deserts' and improve neighborhood nutrition.",
        ["Some people prefer to eat fast food because drive-through windows are convenient.", "This detracts from the goal of community gardening."],
        ["Carrots grow underground and tomatoes grow on vines tied to wooden stakes.", "This is a basic biological fact that lacks analytical depth."],
      ],
      answer: 1,
      explain: "Naming specific drought-hardy vegetables and addressing the socioeconomic issue of 'food deserts' demonstrates depth of thought.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [4],
      stem: "How should sentence 4 be revised to eliminate awkward phrasing and ensure precise diction?",
      choices: [
        ["Planting Texas flowers makes bugs and birds come around the garden lot.", "This phrasing is overly simplistic and informal."],
        ["Flowers that grow in Texas look pretty and attract bugs like bees and caterpillars.", "This lacks academic tone and precision."],
        "Planting native Texas wildflowers and flowering shrubs creates vital nectar corridors that sustain bees, monarch butterflies, and hummingbirds.",
        ["Texas flowers of indigenous flora are planted to attract flying creatures.", "This is redundant ('flowers of indigenous flora') and vague ('flying creatures')."],
      ],
      answer: 2,
      explain: "This phrasing is grammatically correct, avoids the awkward gerund agreement error, and uses precise academic terminology.",
    }),
    mcq({
      standard: "rla:8.10D.i", cites: [6],
      stem: "Sentence 6 contains a comma splice. What is the best way to correct it?",
      choices: [
        "Not only does the urban micro-farm produce fresh vegetables, but it also creates an outdoor environmental classroom where students learn sustainable biology.",
        ["The urban micro-farm produces fresh vegetables, also creates an outdoor classroom.", "This creates an ungrammatical compound predicate without a coordinating conjunction."],
        ["The urban micro-farm produces vegetables it also creates an outdoor classroom.", "This creates a run-on sentence."],
        ["Producing fresh vegetables, an outdoor classroom is created by the urban farm.", "This creates an awkward passive construction with a dangling modifier."],
      ],
      answer: 0,
      explain: "Using the correlative conjunction structure 'Not only does... but it also...' eliminates the comma splice and adds sentence variety.",
    }),
    mcq({
      standard: "rla:8.10D.ii", cites: [1],
      stem: "Sentence 1 is in the passive voice ('are being transformed'). How can it be revised into dynamic active voice?",
      choices: [
        ["Concrete rooftops and vacant asphalt lots have transformation occurring upon them.", "This is convoluted and weak."],
        ["Rooftops are being turned into micro-farms by enthusiastic community agriculturalists.", "This remains in the passive voice."],
        ["Across Texas, concrete rooftops are receiving plants and soil from urban residents.", "This uses weak, passive phrasing."],
        "Across metropolitan Texas, visionary community organizers are transforming barren concrete rooftops and vacant lots into thriving micro-farms.",
      ],
      answer: 3,
      explain: "Making 'visionary community organizers' the subject performing the active verb 'are transforming' creates energetic writing.",
    }),
    mcq({
      standard: "rla:8.10D.vii", cites: [8],
      stem: "Sentence 8 contains a confused word error. Which correction should be made?",
      choices: [
        ["Change 'absorb' to 'absorbs'.", "'Roots' is plural, requiring the plural verb 'absorb'."],
        "Change 'It's' to 'Their'.",
        ["Change 'moisture' to 'moisturize'.", "'Moisture' is the correct noun object of 'absorb'."],
        ["Change 'metals' to 'medals'.", "'Metals' (heavy elements) is correct; 'medals' refers to athletic awards."],
      ],
      answer: 1,
      explain: "'It's' is a contraction for 'it is'. The sentence refers to the plural plants' roots, requiring the plural possessive pronoun 'Their'.",
    }),
  ],
});
