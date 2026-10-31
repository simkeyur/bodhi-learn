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
        'Texas helps butterflies on their long journey.',
        ['Caterpillars eat dry oak leaves during cold winter months.', 'Paragraph 3 states caterpillars eat milkweed.'],
        ['Wild flowers bloom only when heavy snow falls in Canada.', 'Wildflowers bloom in autumn and spring in Texas.'],
        ['Butterflies prefer living inside dark, cold mountain caves.', 'Monarchs rest in trees and seek warm forests.'],
      ],
      answer: 0,
      explain: 'The entire selection explains how Texas wildflowers and milkweed support monarchs during their travels.',
    }),
    mcq({
      standard: 'rla:2.9D.iii', cites: [1, 2, 3],
      stem: 'How is the information in this passage organized?',
      choices: [
        ['By listing butterfly species from smallest to very largest.', 'Only monarch butterflies are described.'],
        'By following the seasonal trips of the butterflies.',
        ['By comparing soft bird feathers to orange butterfly wings.', 'No bird comparisons are made.'],
        ['As an adventure story about a talking caterpillar and ant.', 'This is factual informational text, not a fictional story.'],
      ],
      answer: 1,
      explain: 'The passage moves from the autumn migration south to the spring return journey to lay eggs.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **journey** means a long—',
      choices: [
        ['winter nap under thick oak tree bark.', 'A nap is sleep; a journey is travel.'],
        ['loud argument between two woodland birds.', 'Journey is travel, not an argument.'],
        'trip from one place to another.',
        ['game played with friends in backyards.', 'A journey is travel over long distances.'],
      ],
      answer: 2,
      explain: 'A journey is a trip traveling from one location to another.',
    }),
    mcq({
      standard: 'rla:2.6G', cites: [3],
      stem: 'Which detail best explains why milkweed plants are essential for monarchs?',
      choices: [
        'Caterpillars eat only milkweed.',
        ['Milkweed flowers scare away hungry garden birds.', 'Plants do not make noise or scare birds.'],
        ['Milkweed stems grow much taller than giant trees.', 'Pecan trees are much taller than milkweed plants.'],
        ['Milkweed roots make sweet orange honey for bears.', 'Milkweed does not produce honey.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 explicitly explains that milkweed is the sole food source for young caterpillars.',
    }),
    mcq({
      standard: 'rla:2.6H', cites: [2, 3],
      stem: 'By combining the facts in paragraphs 2 and 3, what can the reader conclude about Texans?',
      choices: [
        ['They should clear away all wild flowers in the autumn.', 'Wildflowers provide essential nectar for monarchs.'],
        'They can help butterflies by planting gardens.',
        ['They should catch traveling butterflies in glass jars.', 'Catching butterflies does not help them survive.'],
        ['They need to travel to cold forests every single winter.', 'The butterflies migrate, not the people.'],
      ],
      answer: 1,
      explain: 'Combining facts about nectar and caterpillar food shows how planting gardens supports butterfly survival.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s primary purpose for writing "Monarch Butterflies in Texas"?',
      choices: [
        ['To tell a funny animal tale about flying through storms.', 'The text is factual nonfiction, not a fable.'],
        ['To explain how people can build wooden butterfly traps.', 'The text encourages helping butterflies, not trapping them.'],
        'To explain how monarchs travel and find food.',
        ['To convince readers to buy packets of vegetable seeds.', 'The text is educational, not an advertisement.'],
      ],
      answer: 2,
      explain: 'The author informs readers about monarch travel habits and explains how planting milkweed helps them.',
    }),
  ],
});
