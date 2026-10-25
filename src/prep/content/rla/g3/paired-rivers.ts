// Grade 3 paired passages:
// Passage 1: "The Mighty Rio Grande" (informational, ~180 words, range 150-390).
// Passage 2: "Canoeing through Santa Elena Canyon" (fiction, ~190 words, range 150-390).
// Questions cover P1 central idea (3.9D.i), P2 plot/setting (3.8D, 3.8C),
// paired connections (3.6E), paired synthesis (3.6H), and text evidence (3.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const PAIRED_RIVERS = makeSet({
  id: 'g3-paired-rivers',
  grade: 3,
  kind: 'reading',
  title: 'Texas River Wonders',
  intro: 'Read the two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g3-paired-rivers-p1',
      title: 'The Mighty Rio Grande',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Flowing nearly 1,900 miles from the snowy peaks of Colorado to the warm waters of the Gulf of Mexico, the Rio Grande is one of the longest and most important rivers in North America. For over one thousand miles, this winding ribbon of water forms the natural international border between the state of Texas and the nation of Mexico.' },
        { kind: 'p', text: 'In Far West Texas, the river carves spectacular deep gorges through the Chihuahuan Desert at Big Bend National Park. Over millions of years, the moving water cut straight through towering limestone layers, creating the breathtaking vertical cliffs of Santa Elena Canyon, where sheer rock walls rise 1,500 feet above the river.' },
        { kind: 'p', text: 'The river is an essential lifeline for desert wildlife. Bighorn sheep drink from its quiet shallows, while green kingfishers and painted buntings nest in riverbank willow thickets. Farmers in the fertile Rio Grande Valley also depend on the river\'s water to irrigate crops of citrus oranges, sweet onions, and crisp watermelons.' },
      ],
    },
    {
      id: 'g3-paired-rivers-p2',
      title: 'Canoeing through Santa Elena Canyon',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Eight-year-old Carlos held his wooden paddle tightly as the red canoe glided into the cool shadow of Santa Elena Canyon. Beside him, his father dipped his paddle smoothly into the calm green water of the Rio Grande. Sunlight vanished behind towering limestone walls that stretched so high into the sky they seemed to touch the fluffy white clouds.' },
        { kind: 'p', text: '"Look straight up, Carlos," Papa whispered softly, pointing toward the narrow strip of bright blue sky high above their heads. The sound of their dripping paddles echoed off the ancient rock walls like gentle drumming.' },
        { kind: 'p', text: 'Suddenly, a desert bighorn sheep with curled horns appeared on a narrow rock ledge fifty feet above them, looking down curiously before bounding away into the cliffs. Carlos felt tiny beneath the giant canyon walls, but he was completely filled with wonder. Dipping his paddle into the green river, he smiled, knowing he would remember this magical West Texas adventure for the rest of his life.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 3],
      stem: 'What is the central idea of "The Mighty Rio Grande"?',
      choices: [
        ['The Rio Grande is only used by commercial cargo ships.', 'The river is known for wildlife, natural canyons, and irrigation, not cargo shipping.'],
        'The Rio Grande is a vital, historic river that carves dramatic canyons, sustains desert wildlife, and provides water for Texas agriculture.',
        ['Big Bend National Park receives heavy snowfall every summer.', 'The park is located in the desert.'],
        ['Citrus oranges are the only fruit grown in North America.', 'The text mentions oranges as one example among several crops.'],
      ],
      answer: 1,
      explain: 'Passage 1 describes the river\'s role as an international border, its formation of deep desert canyons, and its vital ecological and agricultural value.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which detail from "The Mighty Rio Grande" shows the immense height of the canyon walls?',
      choices: [
        '"...creating the breathtaking vertical cliffs of Santa Elena Canyon, where sheer rock walls rise 1,500 feet above the river."',
        ['"Flowing nearly 1,900 miles from the snowy peaks of Colorado..."', 'This describes the river\'s total length in paragraph 1.'],
        ['"Bighorn sheep drink from its quiet shallows..."', 'This describes wildlife drinking in paragraph 3.'],
        ['"Farmers in the fertile Rio Grande Valley depend on the water..."', 'This describes farming in paragraph 3.'],
      ],
      answer: 0,
      explain: 'Describing sheer rock walls that rise 1,500 feet above the river gives the exact height measurement of the canyon cliffs.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8D', cites: [1, 2],
      stem: 'In "Canoeing through Santa Elena Canyon," how does the setting influence Carlos\'s feelings?',
      choices: [
        ['The busy city noise makes Carlos feel annoyed and distracted.', 'The setting is a peaceful, secluded canyon.'],
        'The towering limestone walls and echoing water make Carlos feel tiny yet filled with awe and wonder.',
        ['The cold snowy weather makes Carlos wish he had stayed home.', 'The canoe trip is a pleasant, calm river journey.'],
        ['The shallow water traps the canoe so they cannot paddle.', 'The canoe glides smoothly through the water.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 and 3 describe the immense limestone cliffs stretching into the sky, making Carlos feel small yet filled with quiet wonder.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8C', cites: [3],
      stem: 'What exciting moment occurs while Carlos and his father are paddling through the canyon in Selection 2?',
      choices: [
        'A desert bighorn sheep appears on a narrow cliff ledge and looks down curiously at them.',
        ['A sudden thunderstorm capsizes their red canoe.', 'The canoe glides safely and calmly.'],
        ['Carlos drops his wooden paddle into the deep water and loses it.', 'Carlos holds his paddle tightly and paddles successfully.'],
        ['They discover a buried treasure chest along the riverbank.', 'No treasure chest appears in the story.'],
      ],
      answer: 0,
      explain: 'In paragraph 3, a desert bighorn sheep with curled horns appears on a ledge above them, providing an unforgettable wildlife encounter.',
    }),
    mcq({
      standard: 'rla:3.6E',
      stem: 'How does the experience described in Selection 2 connect to the informational facts in Selection 1?',
      choices: [
        ['Selection 2 proves that the Rio Grande dried up completely years ago.', 'Selection 2 shows Carlos canoeing on the flowing river.'],
        'Selection 2 brings the geographical features and wildlife described in Selection 1 (limestone canyon walls and bighorn sheep) to life through a personal family experience.',
        ['Selection 2 explains how orange farmers sell fruit in Mexico.', 'Selection 2 is about canoeing through a canyon.'],
        ['Both selections explain how to build a wooden canoe.', 'Neither selection provides boat-building instructions.'],
      ],
      answer: 1,
      explain: 'Selection 1 provides facts about Santa Elena Canyon\'s vertical cliffs and desert wildlife, while Selection 2 shows a young boy experiencing those exact cliffs and a bighorn sheep firsthand.',
    }),
    mcq({
      standard: 'rla:3.6H',
      stem: 'What common theme is shared by both "The Mighty Rio Grande" and "Canoeing through Santa Elena Canyon"?',
      choices: [
        ['Canoeing is too dangerous for elementary school children.', 'The canoe trip in Selection 2 is peaceful and magical.'],
        ['Desert rivers should be covered with concrete highways.', 'Both texts celebrate the natural river environment.'],
        'The natural landscapes of Texas possess remarkable grandeur and provide meaningful encounters with the wild world.',
        ['All limestone cliffs should be mined for building supplies.', 'Neither text advocates mining or destroying the cliffs.'],
      ],
      answer: 2,
      explain: 'Both texts celebrate the beauty, scale, and natural majesty of the Rio Grande and its desert canyon environment.',
    }),
    msq({
      standard: 'rla:3.6H',
      stem: 'Based on **both** selections, which **two** statements are true about Santa Elena Canyon?',
      choices: [
        'It was formed by the moving waters of the Rio Grande cutting through limestone over time.',
        'It provides habitat for desert bighorn sheep and other native animals.',
        ['It is located in the middle of downtown Houston.', 'It is located in Far West Texas in Big Bend National Park.'],
        ['No human beings are permitted to enter the canyon by boat.', 'Carlos and his father canoe through the canyon in Selection 2.'],
        ['The canyon walls are made of solid iron and steel.', 'Both passages state the cliffs are made of limestone rock.'],
      ],
      answers: [0, 1],
      explain: 'Both passages highlight that the Rio Grande flows through limestone canyon walls and serves as a natural habitat where bighorn sheep thrive.',
    }),
  ],
});
