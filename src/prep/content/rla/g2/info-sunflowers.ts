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
        ['Sunflowers only grow inside dark caves in winter.', 'Sunflowers need warm summer sunlight.'],
        'Sunflowers grow tall and make seeds.',
        ['Songbirds only drink sweet nectar from red roses.', 'Birds eat sunflower seeds.'],
        ['Backyard fences are always taller than garden plants.', 'Sunflowers can grow taller than fences.'],
      ],
      answer: 1,
      explain: 'The passage highlights sunflower growth height, following the sun, and producing seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.ii', cites: [1],
      stem: 'What does the heading "Tall Garden Giants" help the reader understand?',
      choices: [
        'How tall sunflower stalks can grow.',
        ['How gardeners can catch wild rabbits.', 'Rabbits are not discussed.'],
        ['Which ingredients are needed for bread.', 'No recipe is provided.'],
        ['Why friendly forest giants plant seeds.', 'The giants are a metaphor for tall flowers.'],
      ],
      answer: 0,
      explain: 'The heading prepares readers for facts about sunflowers reaching ten feet high.',
    }),
    mcq({
      standard: 'rla:2.9D.iii', cites: [2],
      stem: 'According to paragraph 2, what causes young sunflower buds to turn toward the west in the afternoon?',
      choices: [
        ['Strong prairie thunderstorms blow the stems down.', 'Wind does not cause the daily turning.'],
        ['Heavy sunflower seeds weigh the green heads down.', 'Seeds form later in late summer.'],
        'The stem turns to follow the sun.',
        ['Curious songbirds push the yellow flowers with wings.', 'Birds do not push the flowers.'],
      ],
      answer: 2,
      explain: 'The text explains that the stems slowly track the path of the sun across the sky.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why do songbirds and squirrels visit sunflowers in late summer?',
      choices: [
        ['To build soft nests inside the green leaves.', 'They come to eat the seeds, not build nests.'],
        'To eat the nutritious seeds.',
        ['To hide from the hot afternoon sunshine.', 'They harvest seeds for food.'],
        ['To drink cold rainwater from pond puddles.', 'The text focuses on eating the seeds.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that wildlife visits sunflowers to feed on the nutritious seeds.',
    }),
    mcq({
      standard: 'rla:2.9D.i', cites: [3],
      stem: 'Which detail from paragraph 3 supports the idea that sunflowers are valuable to nature?',
      choices: [
        'The seeds feed wildlife.',
        ['Backyard fences need fresh coats of white paint.', 'Fences are only mentioned for height comparison.'],
        ['Stems can grow ten feet tall in three warm months.', 'Height shows plant growth, not wildlife food value.'],
        ['Flowers face east to greet the bright morning sun.', 'Facing east is about tracking sunlight.'],
      ],
      answer: 0,
      explain: 'Providing nutritious seeds for birds and squirrels supports the idea of the plant\'s ecological value.',
    }),
    mcq({
      standard: 'rla:2.10C', cites: [2],
      stem: 'Why does the author use the bold term **heliotropism** in paragraph 2?',
      choices: [
        ['To tell readers the name of a famous plant scientist.', 'Heliotropism is a plant behavior, not a person\'s name.'],
        ['To show that the author made a mistake while typing.', 'The bold word is a correct scientific term.'],
        'To introduce the science word for tracking the sun.',
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
        ['"Young sunflower buds have an amazing habit called heliotropism."', 'This is about tracking the sun.'],
        '"A single sunflower stalk can grow ten feet tall in just three months."',
      ],
      answer: 3,
      explain: 'Ten feet in three months is very fast for a plant.',
    }),
  ],
});
