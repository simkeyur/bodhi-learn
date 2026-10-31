// Grade 7 editing draft: James Webb Space Telescope.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SPACE = makeSet({
  id: 'g7-edit-space',
  grade: 7,
  kind: 'editing',
  title: 'Unfolding the Golden Eye',
  intro: 'Aria wrote this paper about the James Webb Space Telescope for her astronomy class. Read the paper and look for the revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-space-p',
    title: 'Unfolding the Golden Eye',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'On Christmas morning in 2021, an Ariane 5 rocket roared into the skies above French Guiana carrying the James Webb Space Telescope.',
        'Astronomers across the globe watched the launch with held breath.',
        'Webb was not just an ordinary orbital observatory; it was the most intricate and daring scientific machine humans had ever built.',
        'Unlike the Hubble Space Telescope, which orbits close to Earth, Webb traveled one million miles away to a gravitationally stable orbit called L2.',
      ] },
      { kind: 'sentences', sentences: [
        'To detect the faint infrared glow from ancient galaxies born near the beginning of time, the telescope required an enormous primary mirror.',
        'Engineers constructed the twenty-one-foot mirror out of eighteen hexagonal segments forged from lightweight beryllium.',
        'Each segment was coated with a microscopic film of pure gold.',
        'Gold is an exceptional reflector of infrared light.',
        'Because the massive mirror was too wide to fit inside any existing rocket fairing, engineers designed it to fold like origami during launch and unfold autonomously in deep space.',
      ] },
      { kind: 'sentences', sentences: [
        'Deploying the telescope involved over three hundred separate single-point failure operations.',
        'If even one motor jammed or one tension cable snapped, the entire ten-billion-dollar mission would fail completely.',
        'Day after day, the mission team held their breath as the tennis-court-sized sunshield unfurled, cooling the delicate instruments to nearly absolute zero.',
        'Today, Webb continues to transmit breathtaking images of cosmic star nurseries, providing humanity with unprecedented glimpses of the cosmos.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [8, 9],
      stem: 'Aria wants to combine sentences 7 and 8 to improve the flow of her paper. Which revision is the most effective?',
      choices: [
        'Each segment was coated with a microscopic film of pure gold, which serves as an exceptional reflector of infrared light.',
        ['Each segment was coated with gold, but gold is an exceptional reflector of infrared light.', 'The conjunction "but" incorrectly suggests a contrast instead of cause or detail.'],
        ['Because gold reflects infrared light, each segment was coated, and it was microscopic.', 'This is awkward and ungrammatical.'],
        ['Coating each segment with pure gold, infrared light was reflected exceptionally.', 'This creates a dangling participial modifier.'],
      ],
      answer: 0,
      explain: 'Using the relative pronoun "which" smoothly combines the two ideas into a single, coherent complex sentence.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [4],
      stem: 'Aria wants to add a detail after sentence 4 to explain why Webb needed to orbit at L2. Which sentence best accomplishes this goal?',
      choices: [
        ['Hubble was named after Edwin Hubble, who discovered that the universe is expanding.', 'This adds an irrelevant historical trivia fact about Hubble.'],
        ['Astronauts enjoy traveling into low Earth orbit to repair optical equipment.', 'Astronauts cannot travel to L2 to repair Webb.'],
        'At this distant vantage point, Earth shields the telescope from solar glare while maintaining an unbroken line of communication.',
        ['Many satellites orbit much closer to Earth to transmit television broadcasts.', 'This distracts from Webb\'s scientific observatory requirements.'],
      ],
      answer: 2,
      explain: 'This sentence directly elaborates on the specific scientific and environmental advantages of the L2 orbital location.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [13],
      stem: 'Which transition should Aria add to the beginning of sentence 13 to create a stronger connection with the preceding paragraph?',
      choices: [
        ['For example, Webb continues to transmit breathtaking images...', '"For example" is used to provide instances, not to introduce a conclusion.'],
        'Miraculously, all deployments succeeded, and today Webb continues to transmit breathtaking images...',
        ['In contrast, Webb continues to transmit breathtaking images...', '"In contrast" implies opposition rather than successful completion.'],
        ['Meanwhile, Webb continues to transmit breathtaking images...', '"Meanwhile" implies an unrelated simultaneous event.'],
      ],
      answer: 1,
      explain: 'Adding this transition bridges the tension of the risky deployment process in sentence 12 with the ultimate operational success in sentence 13.',
    }),
    inq({
      standard: 'rla:7.10D.iii', cites: [2],
      stem: 'Aria wants to insert a conjunctive adverb into sentence 2. Choose the correct conjunctive adverb and punctuation.',
      sentence: [
        'Astronomers across the globe watched the launch with held breath; ',
        { options: ['consequently', 'furthermore', 'nevertheless', 'similarly'], answer: 0 },
        ', they knew that decades of scientific ambition hinged on its success.',
      ],
      explain: '"Consequently" correctly shows the cause-and-effect relationship between the high stakes of the launch and their breathless anticipation.',
    }),
    inq({
      standard: 'rla:7.10D.vii', cites: [1],
      stem: 'Read sentence 1. Choose the correct capitalization for the rocket and region.',
      sentence: [
        'On Christmas morning in 2021, an ',
        { options: ['ariane 5 rocket roared into the skies above french Guiana', 'Ariane 5 rocket roared into the skies above French Guiana', 'Ariane 5 Rocket roared into the skies above French guiana', 'ariane 5 Rocket roared into the skies above french guiana'], answer: 1 },
        ' carrying the James Webb Space Telescope.',
      ],
      explain: '"Ariane 5" is the specific name of a spacecraft and "French Guiana" is a proper geographical region, so both require capitalization.',
    }),
    inq({
      standard: 'rla:7.10D.viii', cites: [9],
      stem: 'Read sentence 9. Choose the correct punctuation for the introductory dependent clause.',
      sentence: [
        'Because the massive mirror was too wide to fit inside any existing rocket ',
        { options: ['fairing engineers designed it', 'fairing, engineers designed it', 'fairing; engineers designed it', 'fairing: engineers designed it'], answer: 1 },
        ' to fold like origami during launch.',
      ],
      explain: 'An introductory dependent clause starting with "Because" must be followed by a comma before the main independent clause.',
    }),
  ],
});
