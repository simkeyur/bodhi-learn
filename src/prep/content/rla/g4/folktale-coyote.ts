// Grade 4 folktale: a traditional trickster tale. Questions cover folktale characteristics (4.9A),
// plot elements (4.8C), summarizing (4.7D), inference (4.6F), theme (4.8A), figurative language (4.10D), and evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const FOLKTALE_COYOTE = makeSet({
  id: 'g4-folktale-coyote',
  grade: 4,
  kind: 'reading',
  title: 'How Coyote Brought Fire',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-folktale-coyote-p',
    title: 'How Coyote Brought Fire',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Long ago, when the world was young, the People lived in deep shivering darkness throughout the winter. Snow blanketed the plains like a heavy white quilt, and icy winds whipped through the valleys. The only fire on earth belonged to three fierce Skookums, shadowy mountain spirits who guarded a blazing campfire atop a jagged snow-covered peak.' },
      { kind: 'p', text: 'The Skookums were selfish and cruel. They took turns watching the fire day and night, clutching clubs carved from obsidian stone. They laughed whenever they looked down upon the shivering People below. "Fire is ours," they hissed into the bitter cold. "No mortal shall ever taste its warmth."' },
      { kind: 'p', text: 'Coyote watched the shivering children huddled in their cold dwellings, and pity stirred his clever heart. "I will bring fire to the People," Coyote declared to the forest animals. Cougar scoffed, and Bear grunted that the mountain spirits were far too fierce. But Squirrel, Frog, and Eagle agreed that something must be done.' },
      { kind: 'p', text: 'Coyote formed a daring plan. He stationed Squirrel halfway down the rocky ridge, Bear near the forest edge, and Frog among the tall river reeds. Then Coyote crept silently up the craggy slope, hiding behind boulders until he reached the summit where the campfire flickered like a dancing star.' },
      { kind: 'p', text: 'Coyote waited until the change of guards at dawn. Just as one sleepy Skookum laid down her club and the second guard stepped forward, Coyote sprang from the shadows. With a lightning-fast snap of his jaws, he seized a glowing brand of burning pine wood and leaped down the mountainside.' },
      { kind: 'p', text: '"Thief!" shrieked the Skookums, their terrible cries shaking the avalanche snow. They bounded down the slopes with supernatural speed, their talons outstretched. The lead spirit was inches from Coyote\'s heels when Coyote flung the flaming branch to Squirrel.' },
      { kind: 'p', text: 'Squirrel caught the burning stick, scorching his tail so fiercely that it curled over his back forever. Squirrel tossed the ember to Bear, who sprinted through the woods before tossing it to little Frog at the riverbank. Just as a Skookum lunged to stomp Frog, the quick amphibian swallowed the glowing spark, plunged deep underwater, and swam to the opposite shore.' },
      { kind: 'p', text: 'Frog coughed up the ember onto dry driftwood. Coyote rubbed two pieces of wood against the ember until bright sparks leaped into dry grass. The flames danced high, warming the cold hands of the People. The defeated Skookums slunk back into their mountain caves, and from that day on, fire belonged to all living things.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9A', cites: [1, 7],
      stem: 'Which characteristic of folktales and myths is most clearly demonstrated in the story?',
      choices: [
        'An explanation of how something in the natural world came to be, along with talking animals.',
        ['A factual historical account of real people living in Texas.', 'The story is a traditional legend with magical spirits, not historical nonfiction.'],
        ['A rhyming poem that describes winter weather.', 'The selection is written in prose paragraphs, not verse.'],
        ['A modern mystery where a detective solves a crime.', 'The characters are mythic animals and mountain spirits, not modern detectives.'],
      ],
      answer: 0,
      explain: 'Folktales and myths frequently feature animal characters with human traits and explain natural occurrences, such as why squirrels have curled tails and how humans obtained fire.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [5, 6, 7],
      stem: 'What is the most suspenseful turning point (climax) in the plot?',
      choices: [
        ['Coyote looks at the shivering children in the valley.', 'This introduces the problem during the exposition.'],
        ['Cougar and Bear doubt Coyote\'s plan at the beginning.', 'This occurs in the rising action as Coyote gathers support.'],
        'Coyote leaps from the shadows, steals the burning branch, and races ahead of the pursuing Skookums.',
        ['The Skookums return to their mountain caves at the end.', 'This is the resolution after the fire has been safely delivered.'],
      ],
      answer: 2,
      explain: 'The climax occurs when Coyote snatches the brand and triggers the high-stakes chase down the mountain, where the animals must pass the flame from one to the next.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [3, 4, 5, 6, 7, 8],
      stem: 'Which summary best describes how Coyote and his friends succeed?',
      choices: [
        'Coyote plans a relay where different animals pass the stolen fire until Frog carries it across the river to safety.',
        ['Coyote defeats the Skookums in a wrestling match on top of the mountain peak.', 'The animals do not fight the spirits; they outsmart and outrun them.'],
        ['The People climb the mountain together with wooden clubs and chase the spirits away.', 'The animals, not the human villagers, carry out the rescue.'],
        ['Bear frightens the Skookums into handing over their burning embers willingly.', 'The spirits were selfish and chased the animals down the mountain.'],
      ],
      answer: 0,
      explain: 'This summary accurately captures the main steps in chronological order: Coyote\'s team relay, the handoffs down the slope, and Frog swimming the ember across the river.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2, 3],
      stem: 'What can the reader infer about Coyote\'s personality from paragraphs 2 and 3?',
      choices: [
        ['He is boastful and only cares about showing off his running speed.', 'He took action out of pity for the shivering children.'],
        'He is compassionate toward those in need and willing to take clever risks.',
        ['He is easily discouraged when larger animals disagree with him.', 'He proceeded with his plan even after Cougar scoffed and Bear grunted.'],
        ['He wants to keep the fire for himself on the mountaintop.', 'He explicitly stated he would bring fire to the People.'],
      ],
      answer: 1,
      explain: 'Coyote feels deep pity for the freezing children and boldly undertakes a dangerous mission that larger animals were too afraid to attempt.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** messages or themes are conveyed in the folktale?',
      choices: [
        'Cooperation among different individuals can accomplish great deeds.',
        'Selfishness eventually leads to defeat when standing against the common good.',
        ['Winter weather is too severe for anyone to survive without magic.', 'The story is about sharing warmth, not the impossibility of surviving winter.'],
        ['Larger creatures are always more helpful than small ones.', 'Small animals like Squirrel and Frog played crucial roles in the rescue.'],
        ['Spirits will always share their treasures if asked politely.', 'The spirits refused to share and guarded the fire fiercely.'],
      ],
      answers: [0, 1],
      explain: 'The teamwork of Coyote, Squirrel, Bear, and Frog made the relay possible, while the greedy, hoarding Skookums lost their monopoly on fire.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [1],
      stem: 'Read this sentence from paragraph 1. "Snow blanketed the plains like a heavy white quilt..." What type of figurative language does the author use, and what does it suggest?',
      choices: [
        ['A metaphor showing that the snow was made of fabric patches.', 'The comparison uses the word "like", which makes it a simile.'],
        'A simile comparing the deep layer of snow to a thick quilt covering the landscape.',
        ['Personification showing that the plains were falling asleep.', 'The phrase does not give human characteristics to the plains.'],
        ['Hyperbole suggesting that real quilts were dropped across the land.', 'It is a visual comparison using "like."'],
      ],
      answer: 1,
      explain: 'Using the word "like" to compare snow to a heavy white quilt is a simile, creating a vivid image of a deep, smothering blanket of winter snow.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which evidence from paragraph 7 explains why squirrels have bushy, curled tails according to the tale?',
      choices: [
        '"Squirrel caught the burning stick, scorching his tail so fiercely that it curled over his back forever."',
        ['"Squirrel tossed the ember to Bear, who sprinted through the woods."', 'This describes the handoff to Bear, not Squirrel\'s tail.'],
        ['"Just as a Skookum lunged to stomp Frog, the quick amphibian swallowed the glowing spark."', 'This tells about Frog escaping.'],
        ['"Frog coughed up the ember onto dry driftwood."', 'This describes releasing the spark on the riverbank.'],
      ],
      answer: 0,
      explain: 'The text directly states that the stick scorched Squirrel\'s tail so fiercely that it curled over his back permanently.',
    }),
  ],
});
