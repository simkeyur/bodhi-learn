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
        ['Highways in the 1960s were crowded with billboards and junkyards.', 'This is a supporting problem from paragraph 2, not the main focus.'],
        'Lady Bird Johnson worked to beautify roads with native flowers.',
        ['Spanish moss only grows on cypress trees near the town of Karnack.', 'This is a small background detail about her childhood.'],
        ['Texas roadsides only have yellow and red flowers during springtime.', 'The passage describes blue, red, and yellow wildflowers.'],
      ],
      answer: 1,
      explain: 'The article explains how Lady Bird Johnson championed laws and planting projects to fill roadsides with native wildflowers.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [3, 4], passage: 1,
      stem: 'In "Planting Bluebonnets with Abuelo," what is the resolution of the story?',
      choices: [
        ['Marisa rakes the dry dirt until her arms feel tired in fall.', 'This is part of the rising action.'],
        ['Abuelo and Marisa drink hot cinnamon tea on the front porch.', 'This is a quiet moment in the middle of the narrative.'],
        'In spring, Marisa finds a sea of blue flowers.',
        ['Winter birds eat all the tiny seeds scattered by the fence.', 'The seeds successfully survived and bloomed.'],
      ],
      answer: 2,
      explain: 'The resolution comes in spring when Marisa sees the bluebonnets she planted blooming along the fence.',
    }),
    mcq({
      standard: 'rla:4.6G', cites: [3],
      stem: 'According to paragraph 3 of "Lady Bird Johnson\'s Blooming Legacy," what are **two** ecological benefits of native wildflowers?',
      choices: [
        ['They require chemical sprays and constant garden watering.', 'Native wildflowers thrive naturally without chemicals.'],
        'They stop soil erosion and provide food for bees.',
        ['They grow much faster when kept inside heavy concrete pots.', 'They grow along open roadsides and prairies.'],
        ['They replace grain crops that farmers plant in big fields.', 'Their role is ecological preservation, not replacing crop agriculture.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that native plants hold soil to prevent erosion and feed bees and birds.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What was the author\'s primary purpose in writing "Lady Bird Johnson\'s Blooming Legacy"?',
      choices: [
        ['To entertain readers with a fictional story about flowers.', 'The text is factual historical nonfiction.'],
        ['To persuade readers to stop driving cars on Texas roads.', 'The article discusses highway beautification, not stopping car travel.'],
        ['To give step-by-step directions for making roadside signs.', 'Lady Bird advocated limiting billboards.'],
        'To inform readers about Lady Bird\'s work for nature.',
      ],
      answer: 3,
      explain: 'The author informs readers about how Lady Bird Johnson worked to beautify highways and preserve native plants.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'How do both selections show that wildflowers are valuable?',
      choices: [
        'Selection 1 shows their public beauty, while Selection 2 shows family caring.',
        ['Both selections explain how farmers harvest seeds to make large store profits.', 'Neither text focuses on commercial profit.'],
        ['Both selections prove that wildflowers only grow when state road crews plant them.', 'Selection 2 shows planting by hand in a family garden.'],
        ['Both selections describe how hard it is to clear thorny weeds from roadside grass.', 'Neither selection is about weed removal.'],
      ],
      answer: 0,
      explain: 'Selection 1 focuses on public beauty and environmental health, while Selection 2 shows a girl and her grandfather sharing love and patience through planting.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'Which statement expresses a theme shared by both selections?',
      choices: [
        ['Planting seeds outdoors requires costly machinery and permits.', 'Both texts emphasize simple, hand-on, caring actions.'],
        'Caring for native plants brings beauty and joy to others.',
        ['Wildflower seeds must be planted after winter frost has passed.', 'Selection 2 explains bluebonnet seeds are planted in autumn.'],
        ['Highways have destroyed all native wildflowers across the state.', 'Both texts celebrate the enduring beauty of Texas wildflowers.'],
      ],
      answer: 1,
      explain: 'Both texts show how caring for wildflowers—whether along highways or along a fence—creates lasting natural beauty for others to enjoy.',
    }),
    msq({
      standard: 'rla:4.6H',
      stem: 'Based on both selections, which **two** statements are supported by information in both texts?',
      choices: [
        'Native flowers like bluebonnets are a treasured part of Texas.',
        'Human care helps wildflowers grow and spread across the land.',
        ['Bluebonnet seeds must be kept warm inside greenhouse buildings all winter.', 'Selection 2 explains they need winter frosts outdoors to soften the seed coat.'],
        ['Lady Bird Johnson visited Abuelo\'s farm in Brenham to plant seeds.', 'The two texts describe separate real-world and fictional contexts.'],
        ['Wildflowers are harmful to honeybees and other garden insects.', 'Both texts note flowers provide nectar and attract pollinators.'],
      ],
      answers: [0, 1],
      explain: 'Both passages highlight native wildflowers as proud Texas symbols that thrive with thoughtful human care.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which quotation from "Lady Bird Johnson\'s Blooming Legacy" best supports the idea that Texas wildflowers create an impressive visual display?',
      choices: [
        '"Drivers see miles of blue, red, and gold along the highway."',
        ['The sentence describing how she saw ugly changes along crowded highways', 'This describes clutter, not flower colors.'],
        ['The sentence about working hard for the Highway Beautification Act of 1965', 'This describes legislation, not colorful scenery.'],
        ['The sentence about her childhood paddling boats near the town of Karnack', 'This details her childhood home.'],
      ],
      answer: 0,
      explain: 'Describing "miles of blue, red, and gold along the highway" paints a colorful, impressive visual picture of blooming flowers.',
    }),
  ],
});
