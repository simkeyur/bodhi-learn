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
      { kind: 'p', text: 'Long ago, the world was cold. The People lived in shivering darkness all through the winter. Deep snow covered the plains like a heavy quilt. Icy winds blew through the valleys. The only fire on earth belonged to three fierce mountain spirits called Skookums. They guarded a blazing fire at the top of a snowy mountain peak.' },
      { kind: 'p', text: 'The Skookums were selfish. They took turns watching the fire day and night. They held heavy stone clubs in their hands. They laughed when they looked down at the shivering People in the valley. "Fire is ours," they hissed into the wind. "No human shall ever have our warmth."' },
      { kind: 'p', text: 'Coyote saw the children shivering in their cold homes. He felt sorry for them. "I will bring fire to the People," Coyote told the forest animals. Cougar said it was too hard. Bear warned that the mountain spirits were fierce. But Squirrel, Frog, and Eagle agreed that they must help.' },
      { kind: 'p', text: 'Coyote made a clever plan. He placed Squirrel on the rocky ridge. He placed Bear near the woods. He placed Frog by the river grass. Then Coyote climbed the snowy mountain alone. He hid behind rocks until he reached the bright campfire.' },
      { kind: 'p', text: 'Coyote waited until morning came. One tired guard put down her club. As the second guard stepped up, Coyote jumped from the rocks. He grabbed a burning pine branch with his sharp teeth. Then he raced down the steep slope.' },
      { kind: 'p', text: '"Thief!" shouted the angry spirits. They chased Coyote down the mountain with great speed. A spirit was close to Coyote\'s heels when Coyote tossed the burning branch to Squirrel.' },
      { kind: 'p', text: 'Squirrel caught the burning stick. The hot flame curled his tail over his back forever. Squirrel threw the stick to Bear. Bear ran through the trees and handed it to Frog at the riverbank. When a spirit reached for Frog, the quick frog swallowed the glowing ember. He jumped into the river and swam across the water.' },
      { kind: 'p', text: 'Frog coughed the ember onto dry wood on the bank. Coyote rubbed sticks together until bright sparks lit dry grass. The flames grew tall, warming the People. The defeated spirits walked back into their caves. From that day on, fire belonged to all living things.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9A', cites: [1, 7],
      stem: 'Which characteristic of folktales is shown in the story?',
      choices: [
        'It explains how fire came to be, using talking animals.',
        ['It gives a factual history of early people in North America.', 'The story is a myth with spirits, not historical nonfiction.'],
        ['It uses rhyming stanzas to describe cold winter mountain winds.', 'The selection is written in prose paragraphs, not verse.'],
        ['It presents a modern mystery where an officer solves a crime.', 'The characters are mythic animals and spirits, not modern detectives.'],
      ],
      answer: 0,
      explain: 'Folktales frequently feature animal characters with human traits and explain natural occurrences, such as why squirrels have curled tails and how humans obtained fire.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [5, 6, 7],
      stem: 'What is the most suspenseful turning point (climax) in the plot?',
      choices: [
        ['Coyote looks at the shivering children down in the valley.', 'This introduces the problem at the beginning.'],
        ['Cougar and Bear doubt Coyote\'s plan during a forest meeting.', 'This occurs in the rising action as Coyote gathers support.'],
        'Coyote grabs the fire and races away from the spirits.',
        ['The defeated spirits walk back to their caves in the dark.', 'This is the resolution after the fire has been safely delivered.'],
      ],
      answer: 2,
      explain: 'The climax occurs when Coyote snatches the brand and triggers the high-stakes chase down the mountain.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [3, 4, 5, 6, 7, 8],
      stem: 'Which summary best describes how Coyote and his friends succeed?',
      choices: [
        ['Coyote wrestles the spirits on the mountain peak until they give up fire.', 'The animals do not fight the spirits; they outsmart and outrun them.'],
        'Coyote and his friends pass the fire in a team relay.',
        ['The People climb the mountain with heavy clubs and chase the spirits away.', 'The animals, not the human villagers, carry out the rescue.'],
        ['Bear frightens the mountain spirits into handing over fire with kind words.', 'The spirits were selfish and chased the animals down the mountain.'],
      ],
      answer: 1,
      explain: 'This summary captures the core relay strategy: animals taking turns passing the fire until Frog carries it across the river.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2, 3],
      stem: 'What can the reader infer about Coyote from paragraphs 2 and 3?',
      choices: [
        ['He is boastful and only cares about showing off his running speed.', 'He took action out of pity for the shivering children.'],
        ['He is easily discouraged when larger animals disagree with him.', 'He proceeded with his plan even after Cougar and Bear doubted him.'],
        ['He wants to keep the fire for himself atop the mountain peak.', 'He explicitly stated he would bring fire to the People.'],
        'He cares about others and is willing to take risks.',
      ],
      answer: 3,
      explain: 'Coyote feels deep pity for the freezing children and boldly undertakes a dangerous mission to help them.',
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
      explain: 'The teamwork of Coyote, Squirrel, Bear, and Frog made the relay possible, while the greedy spirits lost their monopoly on fire.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [1],
      stem: 'Read this sentence from paragraph 1: "Deep snow covered the plains like a heavy quilt." What type of figurative language is used?',
      choices: [
        ['A metaphor stating snow is made of fabric patches.', 'The comparison uses the word "like", which makes it a simile.'],
        ['Personification showing that plains were sleeping.', 'The phrase does not give human characteristics to the plains.'],
        ['Hyperbole claiming real quilts covered the earth.', 'It is a visual comparison using "like."'],
        'A simile comparing deep snow to a thick quilt.',
      ],
      answer: 3,
      explain: 'Using the word "like" to compare snow to a heavy quilt is a simile, creating a vivid image of a deep blanket of winter snow.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which quotation from paragraph 7 explains why squirrels have curled tails?',
      choices: [
        '"The hot flame curled his tail over his back forever."',
        ['"When a spirit reached for Frog, the quick frog swallowed the glowing ember."', 'This describes Frog escaping.'],
        ['"Bear ran through the trees and handed it to Frog at the riverbank."', 'This describes the handoff to Frog.'],
        ['"They chased Coyote down the mountain with great speed."', 'This describes the pursuit in paragraph 6.'],
      ],
      answer: 0,
      explain: 'The text directly states that the hot flame curled Squirrel\'s tail over his back forever.',
    }),
  ],
});
