// Grade 3 folktale: an original pourquois folktale explaining why Armadillo has an armored shell.
// Word count: ~255 words (range 250-650).
// Questions cover folktale genre characteristics (3.9A), plot elements (3.8C),
// inference (3.6F), key ideas (3.6G), theme (3.8A), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const FOLKTALE_ARMADILLO = makeSet({
  id: 'g3-folktale-armadillo',
  grade: 3,
  kind: 'reading',
  title: 'Why Armadillo Wears an Armored Vest',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-folktale-armadillo-p',
    title: 'Why Armadillo Wears an Armored Vest',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Long ago, Texas rivers were young and trees were small. In those days, Armadillo did not wear a hard shell. His skin was as soft as a ripe peach. Hawk flew high in the blue sky. Coyote walked in the green grass. Little Armadillo had to hide every day. He ran into deep holes in the dirt to stay safe from animals.' },
      { kind: 'p', text: 'One cool morning, Armadillo saw Turtle resting on a flat rock by the river. Turtle wore a hard green shell. "Friend Turtle," said Armadillo, "how do you sleep when hungry animals walk by the water?"' },
      { kind: 'p', text: 'Turtle blinked his eyes. "Old Weaver Spider lives in a hollow tree on the hill," Turtle said. "She makes magic coats for animals who can wait."' },
      { kind: 'p', text: 'Armadillo ran up the hill. He found Old Weaver Spider spinning silk in the tree branches. Armadillo asked if she would make him a hard coat. Spider agreed on one rule. Armadillo had to sit very still and quiet until the coat was done.' },
      { kind: 'p', text: 'Armadillo sat still for seven days. Spider made strong bands of gray scales. Just as Spider finished the ninth band, loud thunder boomed in the sky! Armadillo jumped in fear. He bumped into Spider\'s web. Spider said, "Your coat is strong enough to stop thorns and sharp teeth. But because you jumped, you will always roll into a ball when you are scared."' },
      { kind: 'p', text: 'From that day on, Armadillo wore his hard bands through the prickly Texas brush. Whenever danger came near, he curled into a tight round ball.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9A', cites: [1, 6],
      stem: 'Which characteristic shows that this selection is a traditional folktale?',
      choices: [
        ['It includes newspaper interviews with Texas wildlife scientists.', 'No scientists or interviews appear in the story.'],
        'It explains how an animal got a physical feature.',
        ['It explains step-by-step instructions for caring for a pet turtle.', 'The story is not an instructional manual.'],
        ['It provides a detailed roadmap of Texas state parks and highways.', 'No maps or roads are included.'],
      ],
      answer: 1,
      explain: 'A classic pourquois folktale is a fictional story explaining how an animal developed a unique trait or physical feature.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [4, 5],
      stem: 'What causes the spider to stop weaving the armor in paragraph 5?',
      choices: [
        ['Armadillo falls asleep on the rock and rolls into the river.', 'Armadillo sat still until thunder startled him.'],
        ['Turtle sneaks up the hill and takes away the silver thread.', 'Turtle does not visit the spider.'],
        'Thunder startles Armadillo into bumping the web.',
        ['Cold winter snow begins to fall over the hollow tree branches.', 'Cold weather is not why the weaving ends.'],
      ],
      answer: 2,
      explain: 'In paragraph 5, loud thunder startles Armadillo, causing him to jump and bump into Spider\'s web.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2, 3],
      stem: 'What can the reader infer about Turtle from paragraphs 2 and 3?',
      choices: [
        'Turtle is willing to help other animals.',
        ['Turtle is angry that Armadillo woke him up from his morning nap.', 'Turtle answers politely and gives helpful guidance.'],
        ['Turtle wants to trick Armadillo so Coyote can catch him by the river.', 'Turtle offers honest advice about where to find Spider.'],
        ['Turtle does not remember who made his green shell long ago.', 'Turtle remembers Old Weaver Spider well.'],
      ],
      answer: 0,
      explain: 'Turtle answers Armadillo kindly and shares where to find Spider, showing a helpful and generous nature.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [1],
      stem: 'Which key idea about Armadillo is introduced in paragraph 1?',
      choices: [
        ['He lived high in the cold mountains where snow fell all year.', 'Paragraph 1 describes him living near Texas rivers.'],
        'Before he had armor, he had soft skin and had to hide.',
        ['He was the fastest runner among all the desert creatures in Texas.', 'Armadillo was vulnerable, not a fast runner.'],
        ['He loved to swim across deep lakes with schools of minnows.', 'Paragraph 1 explains he hid in holes in the dirt.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 explains that Armadillo once had soft skin like a ripe peach and had to hide in dirt holes from predators.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'What lesson does the story teach through Armadillo\'s experience?',
      choices: [
        ['It is foolish to listen to advice from friendly river neighbors.', 'Listening to Turtle helped Armadillo get his shell.'],
        ['Small animals should never visit hollow trees in the woods.', 'Visiting the tree resulted in getting protective armor.'],
        'Patience brings rewards, even if imperfect.',
        ['Loud noises never cause any surprises in the wild brush country.', 'Thunder startled Armadillo right at the end.'],
      ],
      answer: 2,
      explain: 'Armadillo waited patiently for seven days and gained protective armor, even though jumping at the end left him curling into a ball.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [5],
      stem: 'Which quotation from paragraph 5 shows that the coat protects Armadillo?',
      choices: [
        ['"From that day on, Armadillo wore his hard bands through the prickly Texas brush."', 'This sentence appears in paragraph 6, not paragraph 5.'],
        ['"Just as Spider finished the ninth band, loud thunder boomed in the sky!"', 'This describes the sound of thunder.'],
        ['"Whenever Hawk flew in the blue sky or Coyote walked in the grass, little Armadillo had to hide."', 'This quotation appears in paragraph 1.'],
        '"Your coat is strong enough to stop thorns and sharp teeth."',
      ],
      answer: 3,
      explain: 'Spider confirms that the coat is strong enough to protect Armadillo from thorns and predators\' sharp teeth.',
    }),
    mcq({
      standard: 'rla:3.7D', cites: [5],
      stem: 'Which statement best paraphrases paragraph 5?',
      choices: [
        ['Thunder broke Spider\'s web, so Armadillo had to swim away in the river.', 'Armadillo was given armor and did not swim away.'],
        'Armadillo waited, but thunder made him jump and get short sight.',
        ['Spider refused to weave armor because Armadillo made too much noise in the tree.', 'Armadillo sat still and quiet for seven days.'],
        ['Turtle bumped the loom when thunder rattled the branches of the hollow cedar stump.', 'Armadillo bumped the loom, not Turtle.'],
      ],
      answer: 1,
      explain: 'This choice concisely retells the main events of paragraph 5: waiting patiently, being startled by thunder, and receiving armor with a consequence.',
    }),
  ],
});
