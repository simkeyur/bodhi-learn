// Grade 7 editing draft: Total Solar Eclipse in Texas.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SOLAR = makeSet({
  id: 'g7-edit-solar',
  grade: 7,
  kind: 'editing',
  title: 'Shadow Across the Hill Country',
  intro: 'Carlos wrote this essay about experiencing the 2024 total solar eclipse in Kerrville, Texas. Read Carlos\'s essay and look for any revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-solar-p',
    title: 'Shadow Across the Hill Country',
    genre: 'literaryNonfiction',
    blocks: [
      {
        kind: 'sentences', sentences: [
          'On April 8, 2024, hundreds of thousands of enthusiastic skygazers and scientists gathered across the scenic Texas Hill Country to witness a rare celestial spectacle.',
          'Kerrville sat squarely in the path of totality.',
          'As the Moon gradually crept across the disk of the Sun, the afternoon light shifted to an eerie, metallic silver.',
          'The ambient air temperature dropped more than ten degrees in less than twenty minutes, sending a noticeable chill through the crowd.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Songbirds suddenly ceased their chirping and roosted in oak branches, mistaking the creeping gloom for premature twilight.',
          'Crickets began their nocturnal symphony in the tall prairie grass.',
          'My little brother ate an entire bag of roasted peanuts while waiting for the shadow.',
          'Then, the final bead of sunlight vanished behind rugged lunar mountains, instantly plunging the countryside into eerie midday darkness.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Around the black silhouette of the Moon, the Sun\'s corona blazed like pearlescent white ribbons fluttering in space.',
          'Solar prominences glowed ruby-red along the celestial rim.',
          'For four unforgettable minutes, total strangers stood side by side in awe, united by the cosmic majesty of the universe.',
          'As the radiant diamond ring flashed and totality concluded, cheers echoed across the hills, celebrating an experience that would remain etched in our memories forever.',
        ]
      },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [1, 2],
      stem: 'Carlos wants to combine sentences 1 and 2 to create a more engaging introduction. Which revision is best?',
      choices: [
        ['On April 8, 2024, skygazers gathered in Kerrville, which was in totality.', 'This is a simple compound sentence that loses descriptive energy.'],
        'Thousands gathered in Kerrville, which sat squarely in totality.',
        ['Because Kerrville sat in totality, people gathered to watch the eclipse.', 'This wording is awkward and repetitive.'],
        ['Gathering in the Texas Hill Country, Kerrville sat in the path of totality.', 'This creates a dangling modifier attributing the gathering to the town rather than people.'],
      ],
      answer: 1,
      explain: 'This revision cleanly embeds Kerrville\'s prime geographic location within the introductory sentence using a relative clause.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [7],
      stem: 'Carlos notices that sentence 7 disrupts the focus of the second paragraph. What should he do with sentence 7?',
      choices: [
        ['Move sentence 7 to the start of the essay to introduce his brother.', 'Introducing peanuts at the start would detract from the astronomical topic.'],
        ['Add more details about what brand of roasted peanuts his brother bought.', 'Adding snack details would further derail the narrative.'],
        'Delete sentence 7 because it distracts from natural events.',
        ['Change "peanuts" to "sunflower seeds" to fit the celestial theme.', 'Changing the snack still leaves the sentence irrelevant.'],
      ],
      answer: 2,
      explain: 'Sentence 7 introduces an irrelevant distraction into a paragraph focused entirely on environmental and animal reactions to totality.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [3],
      stem: 'Carlos wants to replace the phrase "crept across" in sentence 3 with more precise and evocative diction. Which choice best fits the context?',
      choices: [
        ['walked over the disk', '"Walked over" is informal and anthropomorphic.'],
        'steadily eclipsed',
        ['bounced along the sky', '"Bounced along" incorrectly implies erratic, playful movement.'],
        ['wandered past the rim', '"Wandered past" suggests aimless meandering rather than predictable orbital mechanics.'],
      ],
      answer: 1,
      explain: '"Steadily eclipsed" accurately and elegantly captures the deliberate, astronomical mechanics of the Moon covering the Sun.',
    }),
    inq({
      standard: 'rla:7.10D.i', cites: [10],
      stem: 'Read sentence 10. Choose the correct verb form to agree with the plural subject "prominences."',
      sentence: [
        'Solar prominences ',
        { options: ['glows', 'glow', 'is glowing', 'was glowing'], answer: 1 },
        ' ruby-red along the celestial rim.',
      ],
      explain: '"Prominences" is a plural noun, requiring the base plural verb "glow."',
    }),
    inq({
      standard: 'rla:7.10D.iv', cites: [9],
      stem: 'Read sentence 9. Choose the correct prepositional phrase to indicate location.',
      sentence: [
        { options: ['Around the black silhouette of the Moon', 'Between the black silhouette of the Moon', 'Among the black silhouette of the Moon', 'Through the black silhouette of the Moon'], answer: 0 },
        ', the Sun\'s corona blazed like pearlescent white ribbons.',
      ],
      explain: '"Around" correctly describes the corona encircling the perimeter of the dark lunar silhouette.',
    }),
    inq({
      standard: 'rla:7.10D.viii', cites: [4],
      stem: 'Carlos wants to connect sentences 3 and 4 with a semicolon. Choose the correct punctuation.',
      sentence: [
        'The afternoon light shifted to an eerie, metallic silver',
        { options: ['; consequently, the temperature', ', consequently the temperature', '; consequently the temperature', ', consequently, the temperature'], answer: 0 },
        ' dropped ten degrees in less than twenty minutes.',
      ],
      explain: 'When joining two independent clauses with a conjunctive adverb, a semicolon precedes the adverb and a comma follows it.',
    }),
  ],
});
