// Grade 4 informational: an article about Natural Bridge Caverns in the Texas Hill Country.
// Questions cover central idea (4.9D.i), organizational patterns (4.9D.iii), key ideas (4.6G),
// predictions (4.6C), text structure (4.10B), dictionary skills (4.3A), and summarizing (4.7D).

import { makeSet, mcq, msq } from '../author.ts';

export const INFO_CAVERNS = makeSet({
  id: 'g4-info-caverns',
  grade: 4,
  kind: 'reading',
  title: 'Exploring Natural Bridge Caverns',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-info-caverns-p',
    title: 'Exploring Natural Bridge Caverns',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'A World Beneath the Hill Country' },
      { kind: 'p', text: 'Beneath the green hills north of San Antonio lies one of the most amazing places in Texas: Natural Bridge Caverns. The cave is named for a sixty-foot stone bridge that spans its opening. Native Americans sheltered under the rock arch during rainstorms long ago. Underground, visitors find a subterranean labyrinth of giant rooms, clear pools, and tall rock shapes that took millions of years to grow. It is a hidden world under the earth.' },
      { kind: 'heading', text: 'How the Caverns Formed' },
      { kind: 'p', text: 'The story of the cave began long ago. More than one hundred million years ago, a warm shallow sea covered Texas. Shells, sand, and mud settled at the bottom of the ocean. Over time, these layers turned into thick limestone rock. Later, the ocean water moved away. The earth shifted and cracked the stone underground.' },
      { kind: 'p', text: 'Rain fell on the ground above. The water mixed with air and soil to make a weak acid. This water seeped into the cracks in the rock. Slowly, the water ate away the limestone. It carved hollow tunnels and wide rooms. When the water drained away, dry open caves remained under the ground.' },
      { kind: 'heading', text: 'Sculpted by Single Drops' },
      { kind: 'p', text: 'The beautiful shapes in the cave were made by single drops of water. Each drop falling from the ceiling leaves a tiny speck of mineral behind. Over hundreds of years, these specks grow into pointy stone icicles called stalactites. They hang tight to the ceiling. Where drops splash on the floor, minerals build up into mounds called stalagmites. They might reach the ceiling one day. When the two shapes meet, they form a stone column.' },
      { kind: 'heading', text: 'The 1960 Discovery' },
      { kind: 'p', text: 'People knew about the stone bridge for a long time. But the deep underground rooms stayed hidden until March 1960. Four college students from San Antonio saw cool air blowing from under a pile of rocks. They crawled on their bellies through sixty feet of mud and tight spaces. Suddenly, they stood in a giant silent room with high ceilings. Today, smooth paths and soft lights let visitors explore this natural wonder safely. Park guides teach children how to care for the cave.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 3, 4],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Natural Bridge Caverns is named for a stone bridge located near San Antonio.', 'This is a single introductory detail.'],
        'Natural Bridge Caverns was carved by water over time.',
        ['College students in 1960 were the very first humans to see the rock bridge.', 'Native peoples used the entrance arch thousands of years earlier.'],
        ['Stone icicles grow very quickly whenever Texas experiences rainy weather.', 'The text emphasizes that formations take centuries of dripping water.'],
      ],
      answer: 1,
      explain: 'The article explains how Natural Bridge Caverns formed through ancient geological and water processes over millions of years.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'How does the author organize paragraphs 2 and 3?',
      choices: [
        ['By comparing limestone caves with underground volcanic tubes', 'Volcanic tubes are never mentioned.'],
        ['By stating an argument and answering opposing points of view', 'The passage is informational science, not argumentative.'],
        ['By listing famous tourists who have visited the site since 1960', 'The paragraphs focus on ancient geological processes.'],
        'By explaining the steps that created the caves.',
      ],
      answer: 3,
      explain: 'The author shows how geological steps and acidic water dissolved limestone over time to create hollow caverns.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [4],
      stem: 'According to paragraph 4, what are **two** ways stalactites differ from stalagmites?',
      choices: [
        'Stalactites grow downward from the ceiling, while stalagmites build upward from the floor.',
        'Stalactites are formed by drops hanging from above, while stalagmites are formed where drops splash below.',
        ['Stalactites are made of limestone, while stalagmites are made of obsidian stone.', 'Both formations are made of the same cave minerals.'],
        ['Stalactites took millions of years, while stalagmites formed in a single day.', 'Both take centuries of slow mineral growth.'],
        ['Stalactites only exist in caves with artificial electric lighting.', 'They formed in natural darkness over thousands of years.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that stalactites hang down from ceiling drops, while stalagmites build up where drops splash onto the floor.',
    }),
    mcq({
      standard: 'rla:4.6C', cites: [5],
      stem: 'Based on the heading "The 1960 Discovery," what can the reader predict about paragraph 5?',
      choices: [
        ['A volcanic eruption would destroy the stone bridge.', 'Texas caves do not experience volcanic eruptions.'],
        'Explorers would find hidden cave rooms.',
        ['College students would build a surface theme park.', 'The text is about exploring underground cave passages.'],
        ['The state would close the cave entrance permanently.', 'The heading says "Discovery," indicating a new find.'],
      ],
      answer: 1,
      explain: 'The heading and the detail of students noticing cool breeze from rubble signal that their exploration will reveal hidden cave rooms.',
    }),
    mcq({
      standard: 'rla:4.10B', cites: [4],
      stem: 'How does the memory trick in paragraph 4 (stalactites hold "tight" / stalagmites "might" reach) help readers?',
      choices: [
        ['It warns visitors that touching cave walls is dangerous.', 'The trick is a memory aid for names, not a safety warning.'],
        ['It proves that the author prefers stalagmites over stalactites.', 'The author describes both formations equally.'],
        'It helps readers remember which formation is which.',
        ['It explains the scientific formula of calcium minerals.', 'It is an informal word trick, not a chemical formula.'],
      ],
      answer: 2,
      explain: 'The parenthetical notes ("hold tight" and "might reach") are memory aids designed to help students distinguish between the two terms.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [1],
      stem: 'Read this dictionary entry for the word **labyrinth**.\n\n**lab·y·rinth** /ˈlabəˌrinTH/\n*noun*\n1. a complicated network of winding passages or paths\n2. an intricate maze in Greek mythology\n3. a complex anatomical structure in the inner ear\n\nWhich definition best matches the word **labyrinth** as used in paragraph 1?',
      choices: [
        'Definition 1',
        ['Definition 2 (a maze in Greek mythology)', 'Paragraph 1 refers to real Texas cave passages, not Greek mythology.'],
        ['Definition 3 (a structure in the inner ear)', 'The author describes underground caves, not the ear.'],
        ['None of the dictionary definitions', 'Definition 1 is an exact fit for winding underground tunnels.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, "subterranean labyrinth" refers to the complex network of winding underground passages and chambers.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [1, 2, 3, 4, 5],
      stem: 'Which statement provides the best summary of the article?',
      choices: [
        ['Limestone in Texas formed during an ancient ocean period when sea creatures died.', 'This mentions only early geological time and leaves out the cave features.'],
        ['College students explored a muddy crawlway and set up lights for tourists in Texas.', 'This summarizes only the 1960 discovery in paragraph 5.'],
        ['Rainwater turns into weak acid that dissolves rocks across all of Central Texas.', 'The article focuses specifically on Natural Bridge Caverns.'],
        'Natural Bridge Caverns was carved by water and discovered in 1960.',
      ],
      answer: 3,
      explain: 'This summary captures how the cave was formed by water over time and how it was discovered in 1960.',
    }),
  ],
});
