// Grade 7 editing draft: School Pollinator Garden & Rainwater Harvesting.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_GARDEN = makeSet({
  id: 'g7-edit-garden',
  grade: 7,
  kind: 'editing',
  title: 'Harvesting the Clouds',
  intro: 'Elena wrote this article for the school environmental newsletter about the campus pollinator garden. Read Elena\'s article and look for any revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-garden-p',
    title: 'Harvesting the Clouds',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last spring, the dedicated environmental science club transformed a barren, neglected strip of asphalt behind the school cafeteria into a thriving native wildflower sanctuary.',
        'Our primary objective was to provide essential nourishment and protective habitat for migrating monarch butterflies and native Texas bumblebees.',
        'During prolonged summer heat waves and severe droughts in Central Texas, municipal water restrictions often make supplemental irrigation exceptionally difficult.',
        'To overcome this ecological challenge, our club engineered and constructed an innovative campus rainwater harvesting system.',
      ] },
      { kind: 'sentences', sentences: [
        'We installed high-capacity gutters along the entire gymnasium roofline to divert precipitation into two durable one-thousand-gallon poly storage tanks.',
        'The collected rainwater passes through multi-stage mesh filters to remove rooftop dirt, leaves, and organic debris.',
        'A solar-powered drip irrigation system delivers moisture directly to the root zones of drought-tolerant perennial plants.',
        'Our garden proudly showcases purple coneflower, Texas lantana, goldenrod, and fragrant autumn sage.',
      ] },
      { kind: 'sentences', sentences: [
        'Within months of completion, visiting wildlife biologists recorded over twenty unique pollinator species foraging in our courtyard.',
        'Students across multiple grade levels now use the outdoor space as a living laboratory for biology, ecology, and environmental data collection.',
        'Our garden demonstrates that sustainable conservation practices can flourish even in paved urban school environments.',
        'We hope our success inspires neighboring schools to embrace sustainable landscaping and habitat restoration.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [3, 4],
      stem: 'Which transition phrase should Elena add to the beginning of sentence 4 to clarify the relationship between sentences 3 and 4?',
      choices: [
        'To solve this water issue,',
        ['On the other hand, however,', '"On the other hand" implies opposition rather than a problem-solving action.'],
        ['For instance, as an example,', '"For instance" introduces an example of drought, not the club\'s engineering response.'],
        ['Similarly, in a related way,', '"Similarly" indicates a comparison rather than a causal solution.'],
      ],
      answer: 0,
      explain: '"To solve this water issue" smoothly connects the problem of municipal restrictions in sentence 3 with the club\'s engineering solution in sentence 4.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [7, 8],
      stem: 'Elena wants to add a supporting detail after sentence 8 to emphasize why native perennials were chosen. Which sentence best achieves this?',
      choices: [
        ['Some garden club members prefer red roses and white decorative petunias.', 'This expresses personal aesthetic taste rather than environmental suitability.'],
        'These native plants need little water while giving rich nectar to bees.',
        ['Many garden plants require fertilizer that can be bought at local shops.', 'This discusses commercial fertilizers, which contradicts organic sustainability.'],
        ['Bumblebees belong to the insect family Apidae and have five working eyes.', 'This adds insect anatomy trivia that does not support the botanical selection.'],
      ],
      answer: 1,
      explain: 'This sentence directly supports sentence 8 by giving ecological facts explaining the drought tolerance and nectar value of native plants.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [5, 6],
      stem: 'What is the most effective way to combine sentences 5 and 6?',
      choices: [
        ['Gutters divert water to poly tanks, and it passes through mesh filters.', 'This is a loose, compound sentence with vague pronoun reference.'],
        ['Because gutters divert rain, mesh filters remove rooftop debris cleanly.', 'This confuses the cause-and-effect relationship.'],
        'Gutters divert rain into tanks, where mesh filters remove roof debris.',
        ['Installing gutters along the roof, rooftop debris was filtered by mesh.', 'This creates a dangling modifier attributing the installation to debris.'],
      ],
      answer: 2,
      explain: 'Using the relative adverb "where" cleanly joins the tanks and the filtering mechanism into a concise, unified sentence.',
    }),
    inq({
      standard: 'rla:7.10D.iii', cites: [7],
      stem: 'Elena wants to insert a conjunctive adverb into sentence 7. Choose the correct conjunctive adverb and punctuation.',
      sentence: [
        'The drip irrigation system operates entirely on solar power; ',
        { options: ['furthermore', 'nevertheless', 'otherwise', 'instead'], answer: 0 },
        ', it consumes zero municipal electricity while watering the plants.',
      ],
      explain: '"Furthermore" correctly adds additional supporting information about the energy efficiency of the system.',
    }),
    inq({
      standard: 'rla:7.10D.vii', cites: [2],
      stem: 'Read sentence 2. Choose the correct capitalization for the geographic region and species.',
      sentence: [
        'Our primary objective was to provide nourishment and habitat for migrating ',
        { options: ['monarch butterflies and native texas bumblebees', 'Monarch Butterflies and native Texas Bumblebees', 'monarch butterflies and native Texas bumblebees', 'Monarch butterflies and native texas bumblebees'], answer: 2 },
        '.',
      ],
      explain: '"Texas" is a proper adjective requiring capitalization, while common insect species names remain lowercase unless starting a sentence.',
    }),
    inq({
      standard: 'rla:7.10D.ix', cites: [5],
      stem: 'Read sentence 5. Choose the correct spelling of the underlined word.',
      sentence: [
        'We installed high-capacity gutters along the gymnasium roofline to divert ',
        { options: ['precipitasion', 'precipatation', 'precipitation', 'preceepitation'], answer: 2 },
        ' into two poly tanks.',
      ],
      explain: '"Precipitation" is spelled p-r-e-c-i-p-i-t-a-t-i-o-n.',
    }),
  ],
});
