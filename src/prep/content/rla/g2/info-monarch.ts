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
          text: 'Every autumn, millions of bright orange monarch butterflies travel south across Texas. They fly over two thousand miles from Canada and northern states to spend the winter in the warm mountain forests of Mexico.',
        },
        {
          kind: 'p',
          text: 'Texas is a crucial rest stop during this long journey. The hungry butterflies land on blooming autumn wildflowers to sip sweet nectar for energy. At sunset, thousands of monarchs cluster together in tall pecan and oak trees to stay warm.',
        },
        {
          kind: 'p',
          text: 'In the spring, monarchs return to Texas to lay their tiny eggs on green milkweed plants. Milkweed is the only food that monarch caterpillars can eat. By planting milkweed in gardens, Texans help these amazing insects survive.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.8D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of this passage?',
      choices: [
        'Texas provides food and shelter for monarch butterflies during their long migration.',
        ['Caterpillars only eat dry oak leaves in winter.', 'Paragraph 3 states caterpillars eat milkweed.'],
        ['Wildflowers bloom only when it snows in Canada.', 'Wildflowers bloom in autumn and spring in Texas.'],
        ['Butterflies prefer living inside cold mountain caves.', 'Monarchs rest in trees and seek warm forests.'],
      ],
      answer: 0,
      explain: 'The entire selection explains how Texas wildflowers and milkweed support monarchs during their travels.',
    }),
    mcq({
      standard: 'rla:2.8D.iii', cites: [1, 2, 3],
      stem: 'How is the information in this passage organized?',
      choices: [
        ['By listing butterfly species from smallest to largest.', 'Only monarch butterflies are described.'],
        'In chronological sequence, following the butterflies\' seasonal journey.',
        ['By comparing bird feathers to butterfly wings.', 'No bird comparisons are made.'],
        ['As a fictional adventure story about a talking caterpillar.', 'This is factual informational text, not a fictional story.'],
      ],
      answer: 1,
      explain: 'The passage moves from the autumn migration south to the spring return journey to lay eggs.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **journey** means a long—',
      choices: [
        ['winter nap.', 'A nap is sleep; a journey is travel.'],
        ['loud argument.', 'Journey is travel, not an argument.'],
        'trip from one place to another.',
        ['game played with friends.', 'A journey is travel over long distances.'],
      ],
      answer: 2,
      explain: 'A journey is a trip traveling from one location to another.',
    }),
    mcq({
      standard: 'rla:2.6G', cites: [3],
      stem: 'Which detail best explains why milkweed plants are essential for monarchs?',
      choices: [
        'Milkweed leaves are the only food that monarch caterpillars can eat.',
        ['Milkweed flowers scare away hungry birds with noise.', 'Plants do not make noise.'],
        ['Milkweed stems grow taller than pecan trees.', 'Pecan trees are much taller than milkweed plants.'],
        ['Milkweed roots produce sweet orange honey.', 'Milkweed does not produce honey.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 explicitly explains that milkweed is the sole food source for young caterpillars.',
    }),
    mcq({
      standard: 'rla:2.6H', cites: [2, 3],
      stem: 'By combining the facts in paragraphs 2 and 3, what can the reader conclude about Texans?',
      choices: [
        ['Texans should cut down all autumn wildflowers.', 'Wildflowers provide essential nectar for monarchs.'],
        'Texans can protect monarchs by growing wildflowers and milkweed in local gardens.',
        ['Texans should catch butterflies in glass jars.', 'Catching butterflies does not help them survive.'],
        ['Texans need to travel to Canada every autumn.', 'The butterflies migrate, not the people.'],
      ],
      answer: 1,
      explain: 'Combining facts about nectar and caterpillar food shows how planting gardens supports butterfly survival.',
    }),
    mcq({
      standard: 'rla:2.9A', cites: [1, 2, 3],
      stem: 'What is the author\'s primary purpose for writing "Monarch Butterflies in Texas"?',
      choices: [
        ['To entertain readers with a silly fable about flying insects.', 'The text is factual nonfiction, not a fable.'],
        ['To explain how to build a wooden butterfly trap.', 'The text encourages helping butterflies, not trapping them.'],
        'To inform readers about the monarch\'s migration and how to help them.',
        ['To sell packets of vegetable garden seeds.', 'The text is educational, not an advertisement.'],
      ],
      answer: 2,
      explain: 'The author informs readers about monarch travel habits and explains how planting milkweed helps them.',
    }),
  ],
});
