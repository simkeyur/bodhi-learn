// Grade 3 informational: Saving the Kemp's Ridley Sea Turtle.
// Word count: ~256 words (range 250-650).
// Questions cover central idea (3.9D.i), text features (3.9D.ii), organizational pattern (3.9D.iii),
// author's purpose (3.10A), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const INFO_TURTLES = makeSet({
  id: 'g3-info-turtles',
  grade: 3,
  kind: 'reading',
  title: 'Saving the Kemp\'s Ridley Sea Turtle',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-info-turtles-p',
    title: 'Saving the Kemp\'s Ridley Sea Turtle',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'The Smallest Sea Turtle' },
      { kind: 'p', text: 'The Kemp\'s ridley sea turtle is the smallest sea turtle in the world. The Kemp\'s ridley is also the official state sea turtle of Texas. An adult turtle weighs about one hundred pounds. Its round shell is olive-gray. These turtles spend most of their lives swimming in the warm waters of the Gulf of Mexico. They eat crabs, shrimp, and small fish.' },
      { kind: 'heading', text: 'Nesting on Texas Beaches' },
      { kind: 'p', text: 'In the spring, mother turtles swim to the sandy shores of Texas. Many of them nest at Padre Island National Seashore. A mother turtle crawls out of the surf onto the beach. She uses her back flippers to dig a hole in the sand. Then she lays about one hundred round white eggs. She covers the nest with sand and swims back to the sea.' },
      { kind: 'heading', text: 'Helping the Hatchlings' },
      { kind: 'p', text: 'Sea turtle eggs face many dangers on the beach. Hungry birds, raccoons, and crabs can eat the eggs. High ocean waves can wash nests away. To keep them safe, park rangers and volunteers patrol the beach. When they find a nest, they carefully move the eggs to a special sand lab called a corral. Inside the corral, the eggs stay safe and warm.' },
      { kind: 'heading', text: 'Returning to the Waves' },
      { kind: 'p', text: 'About fifty days later, the tiny baby turtles hatch from their shells. Each hatchling is only about two inches long. Rangers carry the babies to the beach and set them on the sand. The little turtles crawl into the rolling waves. Thanks to human helpers, more young turtles survive each year.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 3],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Adult turtles leave the ocean every afternoon to hunt for food on shore.', 'Adult turtles spend most of their lives swimming in the sea.'],
        'People work together to protect Kemp\'s ridley sea turtles in Texas.',
        ['Baby turtles grow their olive shells while swimming in mountain lakes.', 'These turtles live in the ocean, not in mountain lakes.'],
        ['Sandy beaches in South Texas are closed to all visitors during winter.', 'The passage discusses wildlife protection, not closing beaches.'],
      ],
      answer: 1,
      explain: 'The selection describes the Kemp\'s ridley sea turtle and highlights how rangers and volunteers work to protect nesting turtles and their eggs in Texas.',
    }),
    mcq({
      standard: 'rla:3.9D.ii', cites: [1, 2, 3, 4],
      stem: 'How do the headings help the reader understand the selection?',
      choices: [
        ['They list the names of ocean plants in alphabetical order.', 'The headings name topics about turtles, not ocean plants.'],
        ['They explain how to build a boat for catching fish.', 'The text does not explain boat construction.'],
        'They divide the text into topics about turtles.',
        ['They give directions for swimming safely along Padre Island.', 'The headings organize information about turtles, not swimming tips.'],
      ],
      answer: 2,
      explain: 'The headings break the selection into clear topics: the turtle\'s traits, nesting habits, human rescue efforts, and hatchling release.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [3],
      stem: 'Which organizational pattern does the author use in paragraph 3?',
      choices: [
        ['Comparison, showing how green sea turtles differ from desert tortoises.', 'The paragraph does not compare different turtle species.'],
        'Problem and solution, showing how people protect turtle eggs.',
        ['Chronological order, tracing the life history of park rangers since 1950.', 'No historical timeline of rangers is given.'],
        ['Spatial order, listing coastal islands from northern Texas down to Mexico.', 'The paragraph explains hazards to eggs and how helpers solve them.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 presents the problem (predators and waves endangering eggs) and the solution (rangers and volunteers moving eggs to a safe corral).',
    }),
    mcq({
      standard: 'rla:3.10A', cites: [1, 2, 3, 4],
      stem: 'What is the author\'s main purpose for writing the selection?',
      choices: [
        'To inform readers about how people help save sea turtles.',
        ['To convince families to buy baby turtles from pet stores in Texas.', 'The passage discusses wild sea turtles in nature, not pets.'],
        ['To explain why sea turtles migrate to freshwater rivers every summer.', 'Sea turtles live in ocean saltwater, not freshwater rivers.'],
        ['To describe the history of fishing boats built along the Gulf Coast.', 'The text focuses on turtle conservation, not boat history.'],
      ],
      answer: 0,
      explain: 'The author\'s main goal is to inform readers about the Kemp\'s ridley sea turtle and explain how humans help baby turtles survive.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [3],
      stem: 'What can the reader infer about sea turtle eggs from paragraph 3?',
      choices: [
        ['They survive best when left uncovered on sunny beaches.', 'Predators and high waves threaten uncovered eggs on the beach.'],
        ['They need salty ocean waves washing over them each day.', 'Waves can wash nests away, which harms the eggs.'],
        ['They are too tough for raccoons and crabs to break open.', 'The text states hungry animals can eat the eggs.'],
        'They are delicate and need help to stay safe.',
      ],
      answer: 3,
      explain: 'Paragraph 3 explains that many predators and high waves threaten turtle eggs, which shows they are vulnerable and benefit from human protection.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [2],
      stem: 'According to paragraph 2, where do many mother turtles lay their eggs?',
      choices: [
        ['In deep underwater caves located near Florida.', 'Mother turtles lay their eggs on sandy beaches, not underwater.'],
        'At Padre Island National Seashore in Texas.',
        ['Under shady oak trees growing along rivers.', 'Turtles nest on open sandy beaches by the ocean surf.'],
        ['On rocky cliffs far above the crashing ocean.', 'Turtles crawl out of the surf onto sandy shores.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 states that many mother turtles nest at Padre Island National Seashore along the Texas coast.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows an action taken to protect turtle eggs?',
      choices: [
        ['"These turtles spend most of their lives swimming in the warm waters of the Gulf of Mexico."', 'This sentence appears in paragraph 1, not paragraph 3.'],
        '"To keep them safe, park rangers and volunteers patrol the beach."',
        ['"In the spring, mother turtles swim to the sandy shores of Texas."', 'This sentence appears in paragraph 2, not paragraph 3.'],
        ['"About fifty days later, the tiny baby turtles hatch from their shells."', 'This sentence appears in paragraph 4, not paragraph 3.'],
      ],
      answer: 1,
      explain: 'In paragraph 3, the author explains that park rangers and volunteers patrol the beach to protect eggs from dangers.',
    }),
  ],
});
