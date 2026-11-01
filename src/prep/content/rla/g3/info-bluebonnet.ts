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
        ['Bluebonnets only grow successfully when planted and watered by roadside highway workers.', 'Bluebonnets grow naturally in wild pastures and rocky soil from self-dropped seeds.'],
        'Bluebonnets are hardy Texas wildflowers that survive tough seasons and enrich the soil.',
        ['Pioneer families originally brought bluebonnets to Texas to make sunbonnets.', 'The name comes from the shape resembling a bonnet, not from hats made by pioneers.'],
        ['Bluebonnets bloom all year long along highways and green pastures.', 'Bluebonnets bloom primarily in the spring and dry up by May.'],
      ],
      answer: 1,
      explain: 'The selection describes how the bluebonnet survives harsh weather, enriches prairie soil, and produces bright spring blooms.',
    }),
    mcq({
      standard: 'rla:3.10C', cites: [1, 2, 3, 4],
      stem: 'Why does the author include headings above each section?',
      choices: [
        'To preview the main topic discussed in each part of the article.',
        ['To list key vocabulary words for a science test.', 'The headings introduce topics rather than testing vocabulary definitions.'],
        ['To explain why highway drivers should stop for photographs.', 'Taking photos is a detail in paragraph 1, not the reason headings appear throughout the text.'],
        ['To describe how scientists classify different native plants across Texas.', 'The article focuses specifically on bluebonnets rather than classifying multiple desert plants.'],
      ],
      answer: 0,
      explain: 'Headings preview the specific topic discussed in each section to help readers navigate the text.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [3],
      stem: 'What organizational pattern does the author use in paragraph 3?',
      choices: [
        ['Chronological order, tracing the growth of wildflowers month by month.', 'Paragraph 3 focuses on root microbes and nutrient transfer, not a month-by-month timeline.'],
        ['Compare and contrast, highlighting differences between wild grasses and garden flowers.', 'Wild grasses are mentioned as benefiting from bluebonnets, not compared with garden flowers.'],
        'Cause and effect, showing how root microbes help the plant and soil.',
        ['Problem and solution, explaining how gardeners fix dry dirt with fertilizer.', 'The paragraph describes a natural plant process rather than gardeners applying fertilizer.'],
      ],
      answer: 2,
      explain: 'Paragraph 3 uses cause and effect to show how root microbes produce food that helps bluebonnets and grasses thrive in rocky dirt.',
    }),
    mcq({
      standard: 'rla:3.3B', cites: [2],
      stem: 'In paragraph 2, what context clue helps the reader understand the meaning of **rosette**?',
      choices: [
        ['"...drop hard black seeds in the warm dirt."', 'This phrase describes the seeds rather than the green leaves of the rosette.'],
        ['"...became the state flower of Texas in 1901."', 'This detail appears in paragraph 1 and gives historical information about the state flower.'],
        '"...a flat circle of green leaves close to the dirt..."',
        ['"...tough outer shell protects the seed from heat..."', 'This clause explains how the seed coat protects the seed during summer.'],
      ],
      answer: 2,
      explain: 'The phrase following the dash directly defines rosette as a flat circle of green leaves close to the dirt.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader conclude from paragraph 4?',
      choices: [
        ['Picking bluebonnets is a serious crime that is strictly punishable by law across Texas.', 'Paragraph 4 explicitly clarifies that picking bluebonnets is not illegal.'],
        ['Bluebonnets need gardeners to gather and store their seeds each summer.', 'The text explains that leaving flowers alone lets seeds drop naturally without gardeners.'],
        ['Roadside flowers stop blooming if families take photographs nearby.', 'Taking photos near the roadside does not prevent the plants from blooming.'],
        'Leaving bluebonnets unpicked allows them to produce seeds for future blooms.',
      ],
      answer: 3,
      explain: 'Leaving blossoms in place allows seeds to fall and produce new flowers for future spring seasons.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains how the seed survives the summer heat?',
      choices: [
        ['"Each flower has a cluster of blue petals."', 'This sentence appears in paragraph 1 and describes the appearance of the flower.'],
        '"The tough outer shell protects the seed from heat and hungry birds."',
        ['"When the flowers dry up in May, they leave good nutrients in the earth."', 'This sentence comes from paragraph 3 and explains soil nutrients.'],
        ['"That way, Texas families can enjoy the blue flowers year after year."', 'This sentence is from paragraph 4 and expresses why people should leave wildflowers in place.'],
      ],
      answer: 1,
      explain: 'In paragraph 2, the tough outer shell protecting the seed from heat explains its survival through summer.',
    }),
  ],
});
