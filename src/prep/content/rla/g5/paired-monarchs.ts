// Grade 5 paired set: an original informational article and an original story on one topic. Each passage is
// numbered from 1; questions that need both passages don't cite numbers. Questions cover synthesizing across
// texts, connections, central idea, key details and words in context.

import { makeSet, mcq, twoq } from '../author.ts';

export const PAIRED_MONARCHS = makeSet({
  id: 'g5-paired-monarchs',
  grade: 5,
  kind: 'reading',
  title: 'Monarchs on the Move',
  intro: 'Read the next two selections. Then choose the best answer to each question.',
  passages: [
    {
      id: 'g5-paired-monarchs-1',
      title: 'Passage 1: The Monarch\'s Long Journey',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Every fall, millions of orange-and-black monarch butterflies begin one of the most amazing journeys in the animal world. Monarchs from the eastern United States and Canada fly south to the mountains of central Mexico, a trip that can be as long as 3,000 miles. There, they spend the winter crowded together on fir trees, so many that the branches bend under their weight.' },
        { kind: 'p', text: 'Texas is an important part of this journey. The main path that monarchs follow, called a flyway, passes right through the state. In October, people across Texas may see monarchs resting in trees and sipping nectar from flowers. The butterflies need this sugary nectar for energy, because they are flying farther than most of them have ever flown.' },
        { kind: 'p', text: 'The monarchs that make the trip south are special. Most monarchs live only a few weeks. But the generation of butterflies born at the end of summer can live for about eight months, long enough to fly to Mexico, survive the winter, and begin the trip back north in spring.' },
        { kind: 'p', text: 'No single butterfly makes the whole round trip. On the way north, monarchs stop to lay eggs, and they lay them in only one place: on milkweed plants. Monarch caterpillars can eat nothing but milkweed leaves. The new butterflies that hatch keep flying north, and it takes several generations to return to Canada.' },
        { kind: 'p', text: 'Over the past few decades, the number of monarchs has dropped sharply. Scientists believe one reason is that much of the milkweed along their path has disappeared as fields and roadsides are cleared. Without milkweed, monarchs have nowhere to lay their eggs. Planting milkweed and nectar flowers is one of the simplest ways people can help these travelers.' },
      ],
    },
    {
      id: 'g5-paired-monarchs-2',
      title: 'Passage 2: The Milkweed Patch',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Lena had expected her science project to be about volcanoes. Instead, it started with a sad newspaper headline that her neighbor, Mr. Okafor, taped to his fence: "Monarch Numbers Fall Again." Underneath, he had written, "Anyone want to help?"' },
        { kind: 'p', text: 'That Saturday, Lena knocked on his gate. Mr. Okafor showed her a tray of small green plants with long, narrow leaves. "Milkweed," he said. "Monarchs can\'t live without it. Their caterpillars eat it and nothing else." He also handed her a packet of zinnia seeds. "And these are for the grown-up butterflies. Fuel for the road."' },
        { kind: 'p', text: 'They planted a strip of milkweed and zinnias between the sidewalk and the fence. Lena watered it every afternoon. For weeks nothing happened, and she began to wonder if any butterfly would ever find their little patch in the middle of a busy Houston neighborhood.' },
        { kind: 'p', text: 'Then, one morning in April, Lena spotted a tiny white dot on the underside of a milkweed leaf. Mr. Okafor handed her a magnifying glass. "An egg," he whispered, as if the egg might hear them. A few days later, a striped caterpillar the size of a grain of rice was munching its way across the leaf.' },
        { kind: 'p', text: 'Lena counted eleven caterpillars that spring. She watched them grow fat, hang upside down, and wrap themselves in green chrysalises with gold dots. One by one, new monarchs climbed out, dried their wings in the sun, and flew north.' },
        { kind: 'p', text: 'But the best surprise came in October. Lena looked out the window and saw the zinnias covered with orange wings. Dozens of monarchs had stopped to drink before continuing south. Lena grabbed her notebook. She had found her science project after all, and she already knew her conclusion: a small garden can make a big difference.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:5.6H',
      stem: 'Using information from both passages, why did dozens of monarchs stop at Lena\'s garden in October?',
      choices: [
        ['They were looking for milkweed to lay their eggs on before winter.', 'Passage 1 says monarchs lay eggs on the way north, in spring.'],
        'Houston is on the monarchs\' path south, and they needed nectar from flowers for energy.',
        ['They had hatched in Lena\'s garden and were returning home.', 'Passage 1 says no single butterfly makes the whole round trip.'],
        ['Mr. Okafor called them with a special signal.', 'Neither passage says this.'],
      ],
      answer: 1,
      explain: 'Passage 1 explains that the flyway passes through Texas in October and that monarchs need nectar for energy. Passage 2 shows them landing on Lena\'s zinnias to drink. Putting the two together explains the visit.',
    }),
    mcq({
      standard: 'rla:5.6H',
      stem: 'Which idea is supported by BOTH passages?',
      choices: [
        ['Monarchs spend the winter on fir trees in Mexico.', 'Only Passage 1 says this.'],
        ['Science projects should be about volcanoes.', 'Only Passage 2 mentions volcanoes, and the idea is not supported.'],
        'Monarch caterpillars depend on milkweed.',
        ['Monarch numbers have gone up in recent years.', 'Both passages say numbers have fallen.'],
      ],
      answer: 2,
      explain: 'Passage 1 says caterpillars "can eat nothing but milkweed leaves." In Passage 2, Mr. Okafor says the caterpillars eat milkweed "and nothing else," and Lena finds eggs on her milkweed.',
    }),
    twoq({
      standard: 'rla:5.6H',
      a: {
        prompt: 'Part A: What can a reader conclude from both passages?',
        choices: [
          'People can help monarchs by planting the plants they need.',
          ['Only scientists can help monarchs.', 'Lena and Mr. Okafor are not scientists, and they help.'],
          ['Monarchs no longer migrate through Texas.', 'Both passages show them in Texas.'],
          ['Butterflies are too fragile to travel far.', 'Passage 1 says they fly up to 3,000 miles.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which **two** details, one from each passage, best support the answer to Part A?',
        choices: [
          '"Planting milkweed and nectar flowers is one of the simplest ways people can help these travelers." (Passage 1)',
          ['"There, they spend the winter crowded together on fir trees, so many that the branches bend under their weight." (Passage 1)', 'This describes winter in Mexico.'],
          ['"Lena had expected her science project to be about volcanoes." (Passage 2)', 'This is about her project idea.'],
          '"Lena counted eleven caterpillars that spring." (Passage 2)',
          ['"Most monarchs live only a few weeks." (Passage 1)', 'This is about how long monarchs live.'],
        ],
        answers: [0, 3],
      },
      explain: 'Passage 1 says planting milkweed and nectar flowers helps. Passage 2 shows it working: the milkweed patch raises eleven caterpillars.',
    }),
    mcq({
      standard: 'rla:5.6E',
      stem: 'How does Lena\'s project in Passage 2 connect to the problem described in Passage 1?',
      choices: [
        ['It shows why monarchs fly to Mexico.', 'Lena\'s project doesn\'t explain the migration.'],
        'It is an example of people replacing the milkweed that has disappeared.',
        ['It proves that monarchs like zinnias more than milkweed.', 'Monarchs need both.'],
        ['It explains how scientists count monarchs.', 'Counting is not part of Passage 1.'],
      ],
      answer: 1,
      explain: 'Passage 1 says monarchs are disappearing partly because milkweed is disappearing. Lena\'s milkweed patch is a real-life example of people fixing that problem.',
    }),
    mcq({
      standard: 'rla:5.9D.i',
      stem: 'What is the central idea of Passage 1?',
      choices: [
        'Monarchs make an amazing long migration and depend on milkweed, which people can plant to help them.',
        ['Monarchs are orange and black.', 'This is a small detail.'],
        ['Monarchs spend the winter in Mexico.', 'This is one fact from paragraph 1.'],
        ['Monarchs live only a few weeks.', 'This is a detail, and the special generation lives longer.'],
      ],
      answer: 0,
      explain: 'The passage describes the journey, why milkweed matters, and how people can help. A central idea covers the whole passage, not one fact.',
    }),
    mcq({
      standard: 'rla:5.6G', cites: [2], passage: 1,
      stem: 'In Passage 2, why does Mr. Okafor give Lena zinnia seeds as well as milkweed?',
      choices: [
        ['Zinnias grow faster than milkweed.', 'He doesn\'t compare how fast they grow.'],
        ['Caterpillars eat zinnia leaves.', 'Caterpillars eat only milkweed.'],
        ['Zinnias keep birds away from the caterpillars.', 'Birds are not mentioned.'],
        'Adult butterflies need flowers for nectar, or "fuel for the road."',
      ],
      answer: 3,
      explain: 'In paragraph 2 of Passage 2, Mr. Okafor says the zinnias are "for the grown-up butterflies. Fuel for the road." Milkweed feeds caterpillars, and flowers feed adults.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [3],
      stem: 'In Passage 1, paragraph 3, what does the word **generation** mean?',
      choices: [
        'a group of living things born at about the same time',
        ['a machine that makes electricity', 'This is a different word, generator.'],
        ['a long trip to a faraway place', 'The trip is the migration.'],
        ['the place where butterflies spend the winter', 'That is the mountains of Mexico.'],
      ],
      answer: 0,
      explain: 'The paragraph talks about "the generation of butterflies born at the end of summer." A generation is a group born around the same time.',
    }),
  ],
});
