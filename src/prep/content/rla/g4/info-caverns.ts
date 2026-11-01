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
        ['Natural Bridge Caverns received its name from a sixty-foot limestone bridge that crosses over the main entrance.', 'The stone bridge description is a supporting introductory detail in paragraph 1.'],
        'Natural Bridge Caverns formed through millions of years of water carving limestone, creating underground wonders that remain protected today.',
        ['Four San Antonio college students discovered the first underground limestone formations in Texas during the spring of 1960.', 'Native Americans knew the rock bridge long ago; the students discovered the deep hidden rooms.'],
        ['Acidic rainwater dissolves rock formations rapidly whenever heavy thunderstorms occur in the Texas Hill Country.', 'The text emphasizes that cave formations take centuries of slow dripping.'],
      ],
      answer: 1,
      explain: 'The article explains how Natural Bridge Caverns formed through ancient geological and water processes over millions of years.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'How does the author organize the scientific information in paragraphs 2 and 3?',
      choices: [
        ['By comparing natural limestone caverns with man-made underground drainage tunnels.', 'The author describes natural cave formation rather than comparing it to man-made tunnels.'],
        ['By presenting the environmental dangers of acidic rainwater and showing how park rangers neutralize it.', 'Acidic groundwater is described as the natural force that carves caves, not a hazard rangers neutralize.'],
        ['By listing the different species of prehistoric marine creatures that fossilized inside Texas limestone.', 'The paragraphs focus on rock layers and dissolving stone rather than cataloging fossil species.'],
        'By explaining the chronological sequence of geological steps that carved the underground caverns.',
      ],
      answer: 3,
      explain: 'The author shows how geological steps and acidic water dissolved limestone over time to create hollow caverns.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [4],
      stem: 'According to paragraph 4, what are **two** ways stalactites differ from stalagmites?',
      choices: [
        'Stalactites hang downward from the cave ceiling, while stalagmites build upward from the cave floor.',
        'Stalactites form from mineral specks left by falling drops, while stalagmites grow where water splashes below.',
        ['Stalactites are formed from hardened limestone, while stalagmites consist of dark volcanic obsidian.', 'Both formations are made from the same calcium minerals left by dripping cave water.'],
        ['Stalactites require millions of years to form, while stalagmites appear overnight after heavy downpours.', 'Both formations develop through centuries of slow dripping rather than forming overnight.'],
        ['Stalactites only develop in cave chambers that receive artificial electric lighting from park paths.', 'Both formations developed naturally in complete subterranean darkness over centuries.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that stalactites hang down from ceiling drops, while stalagmites build up where drops splash onto the floor.',
    }),
    mcq({
      standard: 'rla:4.6C', cites: [5],
      stem: 'Based on the heading "The 1960 Discovery," what can the reader predict about paragraph 5?',
      choices: [
        ['Geologists would discover that the rock bridge was too weak to support visitors and needed repairs.', 'The heading announces a discovery, not bridge maintenance or structural damage.'],
        'Explorers would investigate hidden openings and uncover previously unknown underground rooms.',
        ['Park rangers would construct an underground tram system to transport tourists across the mud.', 'The paragraph describes the initial exploration by students crawling through mud, not installing trams.'],
        ['Archaeologists would unearth ancient stone tools left behind by Native American hunters.', 'The discovery in 1960 was of the vast cavern rooms, not stone tools under the arch.'],
      ],
      answer: 1,
      explain: 'The heading and the detail of students noticing cool breeze from rubble signal that their exploration will reveal hidden cave rooms.',
    }),
    mcq({
      standard: 'rla:4.10B', cites: [4],
      stem: 'How does the word-play memory aid in paragraph 4 (stalactites hold "tight" / stalagmites "might" reach) assist the reader?',
      choices: [
        ['It warns visitors that holding onto stalactites could cause them to snap and fall to the ground.', 'The phrase is a mnemonic memory device for names rather than a physical safety warning.'],
        ['It demonstrates that the author finds stalagmites more impressive and beautiful than stalactites.', 'The author describes both formations as complementary parts that can form columns.'],
        'It provides an easy, memorable way for readers to distinguish between the two types of rock formations.',
        ['It explains the complex chemical formulas of the mineral deposits found throughout the cavern.', 'The rhyme is a simple memory aid rather than a complex chemical explanation.'],
      ],
      answer: 2,
      explain: 'The parenthetical notes ("hold tight" and "might reach") are memory aids designed to help students distinguish between the two terms.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [1],
      stem: 'Read this dictionary entry for the word **labyrinth**.\n\n**lab·y·rinth** /ˈlabəˌrinTH/\n*noun*\n1. a complicated network of winding passages or paths\n2. an intricate maze in ancient Greek mythology\n3. a complex anatomical structure in the inner ear\n\nWhich definition best matches the word **labyrinth** as used in paragraph 1?',
      choices: [
        'Definition 1 (a complicated network of winding passages or paths)',
        ['Definition 2 (an intricate maze in ancient Greek mythology)', 'Paragraph 1 refers to real subterranean cave passages, not mythical labyrinths.'],
        ['Definition 3 (a complex anatomical structure in the inner ear)', 'The author describes underground rooms and passages, not the human ear structure.'],
        ['Definition 4 (a formal legal code written by ancient rulers)', 'The word is used to describe physical cave passageways, not a system of laws.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, "subterranean labyrinth" refers to the complex network of winding underground passages and chambers.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [1, 2, 3, 4, 5],
      stem: 'Which statement provides the best overall summary of the article?',
      choices: [
        ['Ancient oceans covered Texas millions of years ago, depositing deep layers of mud and shells that turned into solid stone.', 'Early ocean deposition is only the beginning background step in paragraph 2.'],
        ['Four college students crawled through muddy passages in 1960 to install electric lighting for Texas tourists.', 'The students explored the raw cave; tourists and paths were added later by park developers.'],
        ['Water dripping from cave ceilings leaves mineral specks that eventually grow into tall columns and pointy stone icicles.', 'Mineral growth describes the specific formations in paragraph 4, leaving out the rest of the text.'],
        'Natural Bridge Caverns was sculpted over millions of years by acidic water and discovered by student explorers in 1960.',
      ],
      answer: 3,
      explain: 'This summary captures how the cave was formed by water over time and how it was discovered in 1960.',
    }),
  ],
});
