// Grade 2 informational reading set: Monarch Butterflies in Texas

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_INFO_MONARCH: ReadingSet = makeSet({
  id: 'g2-info-monarch',
  grade: 2,
  kind: 'reading',
  title: 'Monarch Butterflies in Texas',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-monarch',
      title: 'Monarch Butterflies in Texas',
      genre: 'informational',
      blocks: [
        {
          kind: 'p',
          text: 'Every fall, bright orange monarch butterflies fly south across Texas. They go on a long journey to Mexico. In Mexico, the trees keep them warm all winter.',
        },
        {
          kind: 'p',
          text: 'Texas is a good stop for the butterflies. They need to eat and rest. The hungry butterflies drink sweet nectar from wild flowers. At night, they sleep together in tall trees.',
        },
        {
          kind: 'p',
          text: 'In the spring, the butterflies fly north again. They lay small eggs on green milkweed plants. Young caterpillars eat only milkweed leaves. When people plant milkweed in home gardens, they help the butterflies.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of this passage?',
      choices: [
        'Monarch butterflies depend on Texas plants as they travel.',
        ['Caterpillars eat dry oak leaves during the coldest winter months.', 'Paragraph 3 states that caterpillars eat green milkweed.'],
        ['Wildflowers bloom only when heavy snow falls.', 'Wildflowers bloom during autumn and spring in Texas.'],
        ['Butterflies spend the winter inside dark caves.', 'Monarchs rest in trees and seek warm forests in Mexico.'],
      ],
      answer: 0,
      explain: 'The entire selection explains how Texas wildflowers and milkweed support monarchs during their travels.',
    }),
    mcq({
      standard: 'rla:2.9D.iii', cites: [1, 2, 3],
      stem: 'How is the information in this passage organized?',
      choices: [
        ['By listing different butterfly species in order from smallest to largest', 'The text only focuses on monarch butterflies.'],
        'By following the seasonal travels of the butterflies',
        ['By comparing butterfly wings to bird feathers', 'No comparisons to bird feathers are made.'],
        ['By telling a story about a caterpillar and ant', 'This is informational text with facts, not a story.'],
      ],
      answer: 1,
      explain: 'The passage moves from the autumn migration south to the spring return journey to lay eggs.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **journey** means a long—',
      choices: [
        'trip from one place to another',
        ['winter nap in an oak tree', 'A nap is sleeping; a journey is traveling.'],
        ['flight during a heavy rainstorm', 'A journey is travel over a long distance.'],
        ['search for sweet garden seeds', 'The butterflies are traveling south to Mexico.'],
      ],
      answer: 0,
      explain: 'A journey is a trip traveling from one location to another.',
    }),
    mcq({
      standard: 'rla:2.6G', cites: [3],
      stem: 'Which detail best explains why milkweed plants are essential for monarchs?',
      choices: [
        ['Milkweed nectar protects traveling butterflies from cold.', 'The text explains that caterpillars eat the leaves.'],
        ['Milkweed flowers keep birds away from gardens.', 'The text does not say milkweed scares birds.'],
        ['Milkweed stems grow taller than pecan trees.', 'Trees are much taller than milkweed plants.'],
        'Young caterpillars feed only on green milkweed leaves.',
      ],
      answer: 3,
      explain: 'Paragraph 3 explicitly explains that milkweed is the sole food source for young caterpillars.',
    }),
    mcq({
      standard: 'rla:2.6H', cites: [2, 3],
      stem: 'By combining the facts in paragraphs 2 and 3, what can the reader conclude about Texans?',
      choices: [
        ['People need to follow the butterflies all the way to Mexico each winter.', 'The butterflies migrate, not the people.'],
        'People in Texas can help monarchs by growing milkweed and wildflowers.',
        ['People should remove wild plants before autumn begins.', 'Wildflowers provide necessary nectar for monarchs.'],
        ['People should capture traveling butterflies in glass jars.', 'Capturing butterflies harms them.'],
      ],
      answer: 1,
      explain: 'Combining facts about nectar and caterpillar food shows how planting gardens supports butterfly survival.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s primary purpose for writing "Monarch Butterflies in Texas"?',
      choices: [
        'To explain how monarchs travel and find food',
        ['To tell an amusing fictional tale about flying insects', 'The text is factual nonfiction, not an amusing tale.'],
        ['To explain how gardeners build protective insect cages', 'The passage is about planting gardens, not building cages.'],
        ['To persuade readers to buy packets of vegetable seeds', 'The text teaches about butterflies, not vegetable seeds.'],
      ],
      answer: 0,
      explain: 'The author informs readers about monarch travel habits and explains how planting milkweed helps them.',
    }),
  ],
});
