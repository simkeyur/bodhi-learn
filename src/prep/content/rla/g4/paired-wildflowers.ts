// Grade 4 paired set: two texts on Texas wildflowers.
// Selection 1: Informational article on Lady Bird Johnson and the Highway Beautification Act.
// Selection 2: Realistic fiction narrative about a girl planting bluebonnets with her grandfather.
// Questions cover central idea (4.9D.i), plot (4.8C), key ideas (4.6G), author's purpose (4.10A),
// synthesis across texts (4.6H - 3 questions), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const PAIRED_WILDFLOWERS = makeSet({
  id: 'g4-paired-wildflowers',
  grade: 4,
  kind: 'reading',
  title: 'Texas Wildflowers: Beauty Along the Way',
  intro: 'Read the next two selections and answer the questions that follow.',
  passages: [
    {
      id: 'g4-paired-wildflowers-p1',
      title: 'Lady Bird Johnson\'s Blooming Legacy',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Every spring, Texas roads bloom with bright colors. Millions of bluebonnets and yellow sunflowers spread across the grass. Drivers see miles of blue, red, and gold along the highway. Today, many people take these views for granted. But these blooming roadsides exist thanks to one leader. Her name was Claudia "Lady Bird" Johnson. She was a First Lady who loved the outdoors.' },
        { kind: 'p', text: 'Lady Bird grew up in East Texas near the town of Karnack. As a young girl, she loved paddling boats on quiet rivers. She watched moss hang from tall trees. When she lived in Washington, D.C., in the 1960s, she saw an ugly change. Many highways were packed with rusty junkyards. Tall signs blocked the open sky. Trash lined the pavement. Lady Bird believed that clean nature helped people feel calm and happy.' },
        { kind: 'p', text: 'She worked hard for the Highway Beautification Act of 1965. This law limited big billboards along busy roads. It forced owners to build fences or plant trees around messy junkyards. Lady Bird also urged workers to sow native wildflower seeds. Later, she founded the Wildflower Center in Austin. She taught people that native plants have deep roots. The roots hold soil so rain will not wash it away. The blossoms also feed bees and birds. Her green work still brightens Texas roads every spring.' },
      ],
    },
    {
      id: 'g4-paired-wildflowers-p2',
      title: 'Planting Bluebonnets with Abuelo',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Every October, cool autumn breezes blew across Texas. Abuelo and ten-year-old Marisa walked along the fence line of his farm in Brenham. In his hands, Abuelo carried a brown sack. It held thousands of tiny, hard bluebonnet seeds. He had gathered the seeds by hand during the hot summer.' },
        { kind: 'p', text: '"Remember the secret, Marisa," Abuelo said with a warm smile. He handed her a wooden garden rake. "Bluebonnet seeds have a tough outer coat. You must scratch the soil with the rake first. Next, scatter the seeds over the dirt. Then press them down firmly with your boots so winter birds do not eat them."' },
        { kind: 'p', text: 'Marisa raked until her arms felt tired. She scattered the seeds across the ground. Then she marched back and forth like a little soldier, stamping down the earth. Later, they walked back to the porch for warm cinnamon tea. Marisa looked out at the dusty fence line. It looked brown and empty. "Are you sure they will really grow, Abuelo?" she asked softly.' },
        { kind: 'p', text: 'Abuelo smiled and patted her shoulder. "Good things take patience, mi nieta," he said. "Winter rain and cold frost will soften the hard seeds while they sleep under the soil." Five months later, in late March, Marisa ran out to the fence line. A wide sea of deep blue flowers waved in the morning breeze. Small bees buzzed among the petals. Marisa knelt in the soft grass and whispered, "They woke up, Abuelo. They woke up."' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 3],
      stem: 'What is the central idea of "Lady Bird Johnson\'s Blooming Legacy"?',
      choices: [
        ['East Texas rivers inspired Lady Bird Johnson to study moss and cypress trees as a child.', 'Her childhood in Karnack is a supporting detail, not the central idea of the article.'],
        'Lady Bird Johnson led efforts to clean up highways and plant native wildflowers.',
        ['Junkyards and billboards along American roads were removed by highway construction crews.', 'Cleaning up junkyards was part of the legislation she supported, but not the entire focus.'],
        ['Native wildflowers have deep roots that keep highway soil from washing away during rain.', 'Soil preservation is an ecological benefit mentioned in paragraph 3, not the central idea.'],
      ],
      answer: 1,
      explain: 'The article explains how Lady Bird Johnson championed laws and planting projects to fill roadside borders with native wildflowers.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [3, 4], passage: 1,
      stem: 'In "Planting Bluebonnets with Abuelo," what is the resolution of the story?',
      choices: [
        ['Abuelo teaches Marisa how to stamp down the freshly raked soil with her boots in October.', 'Planting the seeds in autumn is part of the rising action.'],
        ['Marisa and Abuelo return to the front porch to drink warm cinnamon tea after raking.', 'Drinking tea is a scene in the middle of the narrative before the flowers grow.'],
        ['Abuelo explains why cold winter frosts are necessary to soften the hard outer seed coat.', 'Abuelo\'s explanation reassures Marisa earlier in the story, but does not resolve the plot.'],
        'Marisa discovers a blooming field of bluebonnets along the fence line the following spring.',
      ],
      answer: 3,
      explain: 'The resolution occurs in spring when Marisa sees the bluebonnets she planted blooming across the fence line.',
    }),
    mcq({
      standard: 'rla:4.6G', cites: [3],
      stem: 'According to paragraph 3 of "Lady Bird Johnson\'s Blooming Legacy," what are **two** ecological benefits of native wildflowers?',
      choices: [
        'Their deep roots anchor the soil against erosion, and their blossoms feed bees and birds.',
        ['They shield highway drivers from windy weather and shade the pavement during hot summers.', 'Paragraph 3 discusses root depth, erosion, and wildlife, not weather shielding for drivers.'],
        ['They encourage property owners to build protective wooden fences around roadside pastures.', 'Fences were built to conceal junkyards under the Highway Beautification Act, not by wildflowers.'],
        ['They allow road crews to pave fewer highway lanes across rural areas of the state.', 'The passage discusses roadside beautification, not reducing highway lanes.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 notes that native plants hold soil to prevent erosion and provide nectar for bees and birds.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What was the author\'s primary purpose in writing "Lady Bird Johnson\'s Blooming Legacy"?',
      choices: [
        ['To persuade readers to gather wild flower seeds and start their own roadside businesses.', 'The passage focuses on civic beautification and conservation, not commercial seed businesses.'],
        ['To explain how construction companies build scenic highway routes across East Texas.', 'The text does not explain highway construction techniques.'],
        'To inform readers about Lady Bird Johnson\'s dedication to preserving roadside nature.',
        ['To describe the types of moss and trees commonly found along quiet Texas rivers.', 'River plants are mentioned only briefly in the description of her childhood.'],
      ],
      answer: 2,
      explain: 'The author informs readers about how Lady Bird Johnson worked to beautify highways and preserve native plants.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'How do both selections show that wildflowers are valuable?',
      choices: [
        'Selection 1 shows how wildflowers improve public spaces, while Selection 2 shows how they bring family members together.',
        ['Selection 1 explains how seeds are harvested for stores, while Selection 2 explains how farmers sell wild bouquets.', 'Neither selection discusses selling flowers or harvesting them for commercial stores.'],
        ['Selection 1 focuses on planting flowers in school yards, while Selection 2 describes flowers growing along interstate highways.', 'Selection 1 focuses on highways, and Selection 2 takes place on a family farm.'],
        ['Selection 1 highlights the dangers of weeds, while Selection 2 warns against letting birds eat wildflower seeds.', 'The central value of wildflowers in both texts is beauty and connection, not warnings about weeds.'],
      ],
      answer: 0,
      explain: 'Selection 1 highlights public beauty along shared highways, while Selection 2 highlights the close relationship between a grandfather and granddaughter sharing the joy of planting.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'Which statement expresses a theme shared by both selections?',
      choices: [
        ['Transforming the natural landscape requires expensive tools and government assistance.', 'Selection 2 shows that a simple garden rake and patience can grow flowers on a farm.'],
        'Patiently caring for native plants enriches the environment and brings joy to people.',
        ['Wildflower seeds must always be protected indoors during cold winter frosts.', 'Both selections show seeds surviving winter outdoors in the soil.'],
        ['Nature can only flourish when people stay away from open rural prairies.', 'Both texts emphasize how active human stewardship helps nature thrive.'],
      ],
      answer: 1,
      explain: 'Both selections demonstrate that caring for wildflowers—whether along state highways or along a family fence—creates lasting beauty that benefits others.',
    }),
    msq({
      standard: 'rla:4.6H',
      stem: 'Based on both selections, which **two** statements are supported by information in both texts?',
      choices: [
        'Native wildflowers like bluebonnets represent a treasured part of Texas.',
        'Careful human effort helps wildflowers establish themselves and thrive.',
        ['Wildflower seeds must be grown in heated indoor greenhouses before planting.', 'Selection 2 shows Abuelo and Marisa planting seeds directly in outdoor soil before winter.'],
        ['Lady Bird Johnson visited Brenham to help Marisa rake the soil by the fence.', 'Lady Bird Johnson is a historical figure in Selection 1, while Marisa is a fictional character in Selection 2.'],
        ['Wildflowers prevent honeybees and songbirds from nesting in open fields.', 'Both texts note that wildflowers support bees and wildlife.'],
      ],
      answers: [0, 1],
      explain: 'Both passages highlight native wildflowers as proud Texas symbols that thrive with thoughtful human care.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which quotation from "Lady Bird Johnson\'s Blooming Legacy" best supports the idea that Texas wildflowers create an impressive visual display?',
      choices: [
        ['"Many highways were packed with rusty junkyards."', 'This quotation describes roadside clutter and ugly views, not a colorful display of flowers.'],
        ['"She worked hard for the Highway Beautification Act of 1965."', 'This quotation highlights her legislative work, not the visual beauty of the blooming flowers.'],
        '"Drivers see miles of blue, red, and gold along the highway."',
        ['"As a young girl, she loved paddling boats on quiet rivers."', 'This quotation describes her childhood hobbies rather than the appearance of wildflowers along highways.'],
      ],
      answer: 2,
      explain: 'Describing "miles of blue, red, and gold along the highway" paints a colorful, impressive visual picture of blooming flowers.',
    }),
  ],
});
