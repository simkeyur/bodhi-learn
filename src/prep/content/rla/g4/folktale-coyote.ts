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
      stem: 'Which characteristic shows that this selection is a traditional folktale?',
      choices: [
        'It uses talking animal characters to explain natural origins and animal traits.',
        ['It provides factual historical accounts of early indigenous nations in North America.', 'The story features mythical spirits and animal dialogue, not nonfiction history.'],
        ['It uses rhyming stanzas to describe howling mountain blizzards during winter.', 'The text is written in prose narrative rather than rhyming poetic verse.'],
        ['It documents scientific explanations for how sparks ignite dry forest timber.', 'The selection is a traditional legend rather than a scientific textbook.'],
      ],
      answer: 0,
      explain: 'Folktales frequently feature animal characters with human traits and explain natural occurrences, such as why squirrels have curled tails and how humans obtained fire.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [5, 6, 7],
      stem: 'What is the most suspenseful turning point (climax) in the plot?',
      choices: [
        ['Coyote looks down from the ridgeline and sees shivering children freezing without warmth inside their village homes.', 'Observing the cold village introduces the initial problem during exposition.'],
        ['Cougar and Bear express doubts about Coyote\'s ambitious rescue plan during a forest council.', 'The meeting with Cougar and Bear is rising action where the animals discuss the plan.'],
        'Coyote leaps from the rocks to snatch a burning brand, triggering a desperate chase down the mountain.',
        ['The defeated mountain spirits turn and walk back into their snowy caves in silence.', 'The spirits retreating to their caves is the peaceful resolution after the conflict ends.'],
      ],
      answer: 2,
      explain: 'The climax occurs when Coyote snatches the brand and triggers the high-stakes chase down the mountain.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [3, 4, 5, 6, 7, 8],
      stem: 'Which summary best describes how Coyote and his animal companions succeed?',
      choices: [
        ['Coyote challenges the three fierce mountain spirits to an open physical battle on the snowy mountain summit.', 'The animals outsmart and outrun the spirits rather than engaging in a physical brawl.'],
        'The animals work as a coordinated relay team, passing the burning branch from runner to runner.',
        ['The village People march up the steep slopes carrying stone clubs to drive the spirits away.', 'The forest animals carry out the rescue mission while the humans remain below.'],
        ['Bear convinces the spirits to share their flames by offering them sweet honey from the valley.', 'The spirits refuse to share warmth and fiercely pursue the animals down the mountain.'],
      ],
      answer: 1,
      explain: 'This summary captures the core relay strategy: animals taking turns passing the fire until Frog carries it across the river.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2, 3],
      stem: 'What can the reader infer about Coyote from paragraphs 2 and 3?',
      choices: [
        ['He is boastful and eager to prove to Cougar and Bear that he is the fastest runner in the woods.', 'Coyote acts out of pity for freezing children rather than to show off his running speed.'],
        ['He is easily intimidated by large predators and abandons his ideas when others disagree.', 'Coyote remains committed to his plan even after Bear and Cougar warn him of danger.'],
        ['He wants to steal the mountain fire so he can rule over the other forest creatures.', 'Coyote gives the ember to the People and forest animals rather than seeking power.'],
        'He is deeply compassionate toward suffering humans and willing to risk his life to help them.',
      ],
      answer: 3,
      explain: 'Coyote feels deep pity for the freezing children and boldly undertakes a dangerous mission to help them.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are developed throughout the folktale?',
      choices: [
        'Teamwork and cooperation among different individuals can accomplish seemingly impossible deeds.',
        'Selfishness and greed ultimately lead to defeat when standing against the common welfare.',
        ['Winter blizzards are far too dangerous for wild animals to survive without magical powers.', 'The narrative focuses on cooperation and mutual aid rather than magical impossibility.'],
        ['Small creatures are too weak to offer meaningful assistance during difficult challenges.', 'Squirrel and Frog prove indispensable to the relay despite their small size.'],
        ['Mountain spirits will gladly share their treasures if visitors ask politely.', 'The spirits guard their fire jealously and chase the animals with stone clubs.'],
      ],
      answers: [0, 1],
      explain: 'The teamwork of Coyote, Squirrel, Bear, and Frog made the relay possible, while the greedy spirits lost their monopoly on fire.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [1],
      stem: 'Read this sentence from paragraph 1: "Deep snow covered the plains like a heavy quilt." What type of figurative language is used in this comparison?',
      choices: [
        ['A metaphor stating that the winter plains were physically stitched out of wool', 'The presence of the comparison word "like" identifies this as a simile, not a metaphor.'],
        ['Personification describing the open plains as resting and sleeping in a warm bed', 'The sentence describes the physical appearance of snow rather than attributing human traits.'],
        ['Hyperbole claiming that actual fabric blankets had fallen from the winter sky', 'The comparison is a figurative description rather than a literal claim about blankets.'],
        'A simile using the word "like" to compare the deep snow to a thick bed covering',
      ],
      answer: 3,
      explain: 'Using the word "like" to compare snow to a heavy quilt is a simile, creating a vivid image of a deep blanket of winter snow.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which quotation from paragraph 7 explains why squirrels have curled tails?',
      choices: [
        '"The hot flame curled his tail over his back forever."',
        ['"When a spirit reached for Frog, the quick frog swallowed the glowing ember."', 'This sentence describes Frog swallowing the ember rather than Squirrel\'s tail.'],
        ['"Bear ran through the trees and handed it to Frog at the riverbank."', 'This sentence describes Bear running to the riverbank rather than Squirrel\'s physical change.'],
        ['"They chased Coyote down the mountain with great speed."', 'This sentence from paragraph 6 describes the spirits pursuing Coyote.'],
      ],
      answer: 0,
      explain: 'The text directly states that the hot flame curled Squirrel\'s tail over his back forever.',
    }),
  ],
});
