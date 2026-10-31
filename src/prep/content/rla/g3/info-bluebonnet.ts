// Grade 3 informational: The life cycle and beauty of Texas Bluebonnets.
// Word count: ~252 words (range 250-650).
// Questions cover central idea (3.9D.i), print features (3.10C), organizational pattern (3.9D.iii),
// context clues (3.3B), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const INFO_BLUEBONNET = makeSet({
  id: 'g3-info-bluebonnet',
  grade: 3,
  kind: 'reading',
  title: 'The Secret Life of the Texas Bluebonnet',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-info-bluebonnet-p',
    title: 'The Secret Life of the Texas Bluebonnet',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'Springtime Blankets of Blue' },
      { kind: 'p', text: 'Every spring, bright blue wildflowers bloom across Texas. They cover green pastures and the sides of highways. The flowers spread across open meadows and sunny roadside banks. Families love stopping by the road to take spring photos. The bluebonnet became the state flower of Texas in 1901. Each flower has a cluster of blue petals. The top has a small white tip. It looks like a bonnet, a kind of sun hat worn long ago.' },
      { kind: 'heading', text: 'Surviving Winter Underground' },
      { kind: 'p', text: 'People love looking at bluebonnets in April. But the life of a bluebonnet begins in the summer. The plants drop hard black seeds in the warm dirt. The tough outer shell protects the seed from heat and hungry birds. In the fall, rain softens the seed coat. A small rosette—a flat circle of green leaves close to the dirt—grows before winter frost arrives.' },
      { kind: 'heading', text: 'Helping Prairie Soil' },
      { kind: 'p', text: 'Bluebonnets grow well in rocky dirt where other garden plants die. They succeed because tiny microbes live in small bumps on their roots. These tiny helpers take plant food from the air. When the flowers dry up in May, they leave good nutrients in the earth. This helps wild grasses grow.' },
      { kind: 'heading', text: 'Protecting Our State Flower' },
      { kind: 'p', text: 'Many people think it is against the law to pick bluebonnets, but that is not true. However, people should still leave them alone. Leaving the flowers in the grass lets them drop their seeds for next spring. That way, Texas families can enjoy the blue flowers year after year.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Bluebonnets only grow inside heated greenhouses during the winter.', 'Bluebonnets grow naturally in open pastures and roadsides.'],
        'Bluebonnets grow well and help Texas soil.',
        ['Pioneer sunbonnets were made from dried bluebonnet flower petals.', 'The flower shape resembles a sunbonnet, but was not used to make hats.'],
        ['Texas roadsides have no native plant life except during springtime.', 'Many native plants grow on Texas roadsides.'],
      ],
      answer: 1,
      explain: 'The selection describes how the bluebonnet survives harsh weather, enriches prairie soil, and produces bright spring blooms.',
    }),
    mcq({
      standard: 'rla:3.10C', cites: [1, 2, 3, 4],
      stem: 'Why does the author include headings above each section?',
      choices: [
        'To preview the main topic of each section.',
        ['To list difficult spelling words from science classes.', 'The headings name topics, not spelling words.'],
        ['To ask practice questions that students must answer.', 'The headings are topical titles, not questions.'],
        ['To give credit to famous nature photographers.', 'No photographer credits appear in the headings.'],
      ],
      answer: 0,
      explain: 'Headings preview the specific topic discussed in each section to help readers navigate the text.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [3],
      stem: 'What organizational pattern does the author use in paragraph 3?',
      choices: [
        ['Chronological sequence listing historical dates from 1800 to 1900.', 'No historical dates are discussed in paragraph 3.'],
        ['Compare and contrast explaining why roses smell sweeter than daisies.', 'Roses and daisies are not mentioned in the text.'],
        ['Problem and solution describing how farmers build wooden fences.', 'Fences are not discussed in paragraph 3.'],
        'Cause and effect, showing how roots help plants grow.',
      ],
      answer: 3,
      explain: 'Paragraph 3 uses cause and effect to show how root microbes produce food that helps bluebonnets and grasses thrive in rocky dirt.',
    }),
    mcq({
      standard: 'rla:3.3B', cites: [2],
      stem: 'In paragraph 2, what context clue helps the reader understand the meaning of **rosette**?',
      choices: [
        ['"...drop hard black seeds into the warm summer dirt..."', 'This describes the seeds, not the rosette.'],
        ['"...became the official state flower of Texas in 1901..."', 'This describes the flower history in paragraph 1.'],
        '"...a flat circle of green leaves close to the dirt..."',
        ['"...leave good natural plant nutrients in the earth..."', 'This describes soil enrichment in paragraph 3.'],
      ],
      answer: 2,
      explain: 'The phrase following the dash directly defines rosette as a flat circle of green leaves close to the dirt.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer from paragraph 4?',
      choices: [
        'Leaving flowers alone helps them grow again next year.',
        ['Picking flowers helps seeds scatter across roadsides faster.', 'Picking flowers removes seeds from their natural cycle.'],
        ['Police officers arrest anyone who takes a family photo outdoors.', 'Taking photos along roadsides is legal and popular.'],
        ['Bluebonnet seeds can only be purchased from farm supply stores.', 'Bluebonnets reseed themselves naturally in the wild.'],
      ],
      answer: 0,
      explain: 'Leaving blossoms in place allows seeds to fall and produce new flowers for future spring seasons.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains how the seed survives the summer heat?',
      choices: [
        ['"The bluebonnet became the state flower of Texas in 1901."', 'This sentence is from paragraph 1, not paragraph 2.'],
        ['"When the flowers dry up in May, they leave good nutrients in the earth."', 'This describes soil enrichment in paragraph 3.'],
        '"The tough outer shell protects the seed from heat and hungry birds."',
        ['"That way, Texas families can enjoy the blue flowers year after year."', 'This is conservation reasoning from paragraph 4.'],
      ],
      answer: 2,
      explain: 'In paragraph 2, the tough outer shell protecting the seed from heat explains its survival through summer.',
    }),
  ],
});
