// Grade 2 informational reading set: Sunflowers Reach for the Sun

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_INFO_SUNFLOWERS: ReadingSet = makeSet({
  id: 'g2-info-sunflowers',
  grade: 2,
  kind: 'reading',
  title: 'Sunflowers: Flowers of the Sun',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-sunflowers',
      title: 'Sunflowers: Flowers of the Sun',
      genre: 'informational',
      blocks: [
        { kind: 'heading', text: 'Tall Garden Giants' },
        {
          kind: 'p',
          text: 'Sunflowers are bright, cheerful plants. They grow quickly in warm summer soil. A single sunflower stalk can grow ten feet tall in just three months. That is taller than most fences!',
        },
        { kind: 'heading', text: 'Following the Sunlight' },
        {
          kind: 'p',
          text: 'Young sunflower buds have an amazing habit called heliotropism. In the morning, the flower faces east to greet the sun. In the afternoon, the stem slowly turns westward. It follows the warm sunlight across the sky.',
        },
        { kind: 'heading', text: 'Feast for Wildlife' },
        {
          kind: 'p',
          text: 'By late summer, the flower fills with seeds. Hungry songbirds, squirrels, and people harvest these nutritious seeds. The seeds make a great snack for all of them.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of "Sunflowers: Flowers of the Sun"?',
      choices: [
        'Sunflowers grow tall, follow the sun, and produce nutritious seeds.',
        ['Sunflowers only grow in greenhouses.', 'Sunflowers grow quickly in warm summer soil outdoors.'],
        ['Songbirds prefer drinking nectar from wild flowers.', 'Birds eat sunflower seeds in late summer.'],
        ['Wooden fences protect sunflower stalks from wind.', 'Fences are mentioned only for height comparison.'],
      ],
      answer: 0,
      explain: 'The passage highlights sunflower growth height, following the sun, and producing seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.ii', cites: [1],
      stem: 'What does the heading "Tall Garden Giants" help the reader understand?',
      choices: [
        ['Why mythical giants planted tall sunflowers', 'The heading uses giants as a metaphor for height.'],
        ['How gardeners protect seeds from hungry rabbits', 'Rabbits are not discussed in this section.'],
        ['Which garden tools are best for digging soil', 'The section describes plant height, not tools.'],
        'How tall sunflower stalks can grow in just a few months',
      ],
      answer: 3,
      explain: 'The heading prepares readers for facts about sunflowers reaching ten feet high.',
    }),
    mcq({
      standard: 'rla:2.9D.iii', cites: [2],
      stem: 'According to paragraph 2, what causes young sunflower buds to turn toward the west in the afternoon?',
      choices: [
        'The stems slowly turn to follow the sunlight.',
        ['Strong prairie winds push the heavy flower heads.', 'Wind does not cause daily heliotropism.'],
        ['Heavy seeds weigh down the western side of stalks.', 'Seeds form later in the summer.'],
        ['Visiting songbirds nudge the flowers as they feed.', 'Birds do not push the flower stems.'],
      ],
      answer: 0,
      explain: 'The text explains that the stems slowly track the path of the sun across the sky.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why do songbirds and squirrels visit sunflowers in late summer?',
      choices: [
        'To eat the nutritious seeds',
        ['To build soft nests among the leaves', 'Wildlife visits sunflowers for food, not nesting.'],
        ['To rest in the cool shade of the stalks', 'The animals come to harvest seeds to eat.'],
        ['To drink drops of water off the petals', 'The passage focuses on the nutritious seeds.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 notes that wildlife visits sunflowers to feed on the nutritious seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.i', cites: [3],
      stem: 'Which detail from paragraph 3 supports the idea that sunflowers are valuable to nature?',
      choices: [
        'Songbirds and squirrels eat the seeds.',
        ['Stems can grow ten feet tall in three months.', 'Height shows plant growth, not wildlife value.'],
        ['The flower faces east to greet the morning sun.', 'Facing east is about tracking sunlight.'],
        ['Sunflowers grow taller than most wooden fences.', 'Comparing height does not show food value.'],
      ],
      answer: 0,
      explain: 'Providing nutritious seeds for birds and squirrels supports the idea of the plant\'s ecological value.',
    }),
    mcq({
      standard: 'rla:2.10C', cites: [2],
      stem: 'Why does the author use the bold term **heliotropism** in paragraph 2?',
      choices: [
        'To introduce the scientific term for tracking the sun across the sky',
        ['To name a scientist who discovered sunflowers', 'Heliotropism is a plant habit, not a person\'s name.'],
        ['To warn readers that sunflowers can be dangerous', 'Heliotropism is a natural plant behavior.'],
        ['To give the title of a poem about garden flowers', 'It is a science vocabulary term defined in the text.'],
      ],
      answer: 0,
      explain: 'Bold text draws attention to an important science vocabulary word defined in the text.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [1],
      stem: 'Which sentence shows that sunflowers grow fast?',
      choices: [
        '"A single sunflower stalk can grow ten feet tall in just three months."',
        ['"Sunflowers are bright, cheerful plants."', 'This tells how sunflowers look.'],
        ['"In the morning, the flower faces east to greet the sun."', 'This describes tracking sunlight.'],
        ['"By late summer, the flower fills with seeds."', 'This describes seed development.'],
      ],
      answer: 0,
      explain: 'Ten feet in three months is very fast for a plant.',
    }),
  ],
});
