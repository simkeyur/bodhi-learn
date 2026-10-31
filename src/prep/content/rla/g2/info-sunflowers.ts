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
          text: 'Sunflowers are bright, cheerful plants that grow quickly in the warm summer soil. A single sunflower stalk can grow ten feet tall in just three months, reaching higher than a backyard fence.',
        },
        { kind: 'heading', text: 'Following the Sunlight' },
        {
          kind: 'p',
          text: 'Young sunflower buds display an amazing habit called heliotropism. In the early morning, the flower faces east to greet the rising sun. Throughout the afternoon, the stem slowly turns westward to follow the sunlight across the sky.',
        },
        { kind: 'heading', text: 'Feast for Wildlife' },
        {
          kind: 'p',
          text: 'By late summer, the center disc of the sunflower fills with hundreds of black-and-white seeds. Hungry songbirds, squirrels, and people harvest these nutritious seeds for a tasty snack.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of "Sunflowers: Flowers of the Sun"?',
      choices: [
        ['Sunflowers only grow inside dark caves during winter.', 'Sunflowers need warm summer sunlight.'],
        'Sunflowers grow remarkably tall, track the sun, and produce valuable seeds.',
        ['Songbirds only eat sweet nectar from red roses.', 'Birds eat sunflower seeds.'],
        ['Backyard fences are always taller than garden plants.', 'Sunflowers can grow taller than fences.'],
      ],
      answer: 1,
      explain: 'The passage highlights sunflower growth height, following the sun, and producing seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.ii', cites: [1],
      stem: 'What does the heading "Tall Garden Giants" help the reader understand?',
      choices: [
        'The section will describe how tall sunflower stalks can grow.',
        ['The section will explain how to catch wild rabbits.', 'Rabbits are not discussed.'],
        ['The section will list ingredients for baking bread.', 'No recipe is provided.'],
        ['The section will tell a scary story about giants.', 'The giants are a metaphor for tall flowers.'],
      ],
      answer: 0,
      explain: 'The heading prepares readers for facts about sunflowers reaching ten feet high.',
    }),
    mcq({
      standard: 'rla:2.9D.iii', cites: [2],
      stem: 'According to paragraph 2, what causes young sunflower buds to turn toward the west in the afternoon?',
      choices: [
        ['Strong prairie thunderstorms blow the stems down.', 'Wind does not cause the daily turning.'],
        ['The heavy seeds weigh the flower head down.', 'Seeds form later in late summer.'],
        'The flower stems slowly turn to follow the sun as it moves across the sky.',
        ['Curious songbirds push the flowers with their wings.', 'Birds do not push the flowers.'],
      ],
      answer: 2,
      explain: 'The text explains that the stems slowly track the path of the sun across the sky.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why do songbirds and squirrels visit sunflowers in late summer?',
      choices: [
        ['To build soft nests inside the green leaves.', 'They come to eat the seeds, not build nests.'],
        'To eat the hundreds of nutritious seeds packed in the flower head.',
        ['To hide from the hot afternoon sunshine.', 'They harvest seeds for food.'],
        ['To drink cold rainwater from puddles.', 'The text focuses on eating the seeds.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that wildlife visits sunflowers to feed on the nutritious seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.i', cites: [3],
      stem: 'Which detail from paragraph 3 supports the idea that sunflowers are valuable to nature?',
      choices: [
        'The center disc fills with hundreds of nutritious seeds that feed wildlife.',
        ['Backyard fences need fresh coats of paint.', 'Fences are only mentioned for height comparison.'],
        ['Stems can reach ten feet tall in three months.', 'Height shows plant growth, not wildlife food value.'],
        ['Flowers face east in the early morning.', 'Facing east is about tracking sunlight.'],
      ],
      answer: 0,
      explain: 'Providing nutritious seeds for birds and squirrels supports the idea of the plant\'s ecological value.',
    }),
    mcq({
      standard: 'rla:2.10C', cites: [2],
      stem: 'Why does the author use the bold term **heliotropism** in paragraph 2?',
      choices: [
        ['To tell readers the name of a famous scientist.', 'Heliotropism is a plant behavior, not a person\'s name.'],
        ['To show that the author made a spelling mistake.', 'The bold word is a correct scientific term.'],
        'To introduce the special scientific term for flowers tracking the sun.',
        ['To give the title of a popular children\'s song.', 'It is a science vocabulary term.'],
      ],
      answer: 2,
      explain: 'Bold text draws attention to an important science vocabulary word defined in the text.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [1],
      stem: 'Which sentence shows that sunflowers grow fast?',
      choices: [
        ['"Sunflowers are bright, cheerful plants."', 'This tells how they look.'],
        ['"Hungry songbirds, squirrels, and people harvest these nutritious seeds."', 'This is about the seeds.'],
        ['"The stem slowly turns westward."', 'This is about following the sun.'],
        '"A single sunflower stalk can grow ten feet tall in just three months."',
      ],
      answer: 3,
      explain: 'Ten feet in three months is very fast for a plant.',
    }),
  ],
});
