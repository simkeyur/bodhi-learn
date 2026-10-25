// Grade 3 folktale: an original pourquois folktale explaining why Armadillo has an armored shell.
// Word count: ~310 words (range 250-650).
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
      { kind: 'p', text: 'Long ago, when the Texas rivers were young and the mesquite trees were small, Armadillo did not wear a tough, pebbled shell. In those ancient days, his skin was as soft as a peach and as tender as a fresh spring blossom. Whenever Hawk circled in the blue sky or Coyote crept through the tall prairie grass, little Armadillo had to scurry inside deep underground burrows to hide in the darkness.' },
      { kind: 'p', text: 'One chilly autumn morning, Armadillo watched Turtle basking peacefully on a flat limestone rock near the clear river. Armadillo noticed Turtle\'s hard, beautiful green shield. "Friend Turtle," whispered Armadillo, "how do you sleep so peacefully when sharp-eyed predators wander the riverbank?"' },
      { kind: 'p', text: 'Turtle blinked slowly and replied, "Old Weaver Spider lives in the hollow cedar stump on the hill. She weaves magical cloaks for animals who demonstrate true patience."' },
      { kind: 'p', text: 'Armadillo hurried up the hill and found Old Weaver Spider spinning a silver web among the branches. Armadillo politely asked if she would weave him a protective suit of armor. Spider agreed on one strict condition: Armadillo must sit completely still and quiet until the entire suit was woven.' },
      { kind: 'p', text: 'Armadillo sat obediently for seven whole days and nights while Spider spun strong clay beads and hard cedar scales into overlapping bands. Just as Spider finished the ninth band, loud thunder boomed across the sky. Armadillo jumped with fright and bumped into Spider\'s loom! Spider sighed and said, "Your armor is sturdy enough to protect you from sharp thorns and hungry hunters, but because you jumped, you will always be short-sighted and roll into a tight ball whenever you are startled."' },
      { kind: 'p', text: 'From that stormy day forward, Armadillo proudly wore his banded armor through the prickly Texas brush, curling into an impenetrable round ball whenever danger approached.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9A', cites: [1, 6],
      stem: 'Which characteristic shows that this selection is a traditional folktale?',
      choices: [
        ['It includes real newspaper interviews with Texas wildlife scientists.', 'No scientists or interviews appear in the story.'],
        'It tells an imaginative fictional tale that explains how an animal developed a unique physical feature.',
        ['It explains step-by-step instructions for caring for a pet turtle.', 'The story is not a how-to pet manual.'],
        ['It provides a detailed map of Texas highways and state parks.', 'No maps or highways are included.'],
      ],
      answer: 1,
      explain: 'A classic pourquois folktale explains how natural phenomena or animal traits (like armadillo armor) came to be through storytelling.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [4, 5],
      stem: 'What causes the spider to stop weaving the armor in paragraph 5?',
      choices: [
        ['Armadillo falls asleep and rolls into the river.', 'Armadillo sits still for seven days until thunder frightens him.'],
        ['Turtle steals the silver thread and runs away.', 'Turtle only appears at the beginning giving advice.'],
        'Loud thunder startles Armadillo, causing him to jump and bump into the spider\'s loom.',
        ['The winter snow begins falling and freezes the cedar stump.', 'Cold weather is not the reason the weaving stops.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 states that when thunder boomed, Armadillo jumped with fright and bumped into the loom, prompting Spider to end the weaving.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2, 3],
      stem: 'What can the reader infer about Turtle based on paragraphs 2 and 3?',
      choices: [
        'Turtle is generous and willing to share helpful wisdom with other animals.',
        ['Turtle is angry that Armadillo interrupted his sunbathing.', 'Turtle responds peacefully and directs Armadillo to Spider.'],
        ['Turtle wants to trick Armadillo so Coyote can catch him.', 'Turtle gives sincere, honest advice.'],
        ['Turtle does not know how his own shell was created.', 'Turtle knows all about Old Weaver Spider\'s craft.'],
      ],
      answer: 0,
      explain: 'Turtle listens politely to Armadillo\'s question and tells him where to find Spider, showing helpfulness and generosity toward a neighbor.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [1],
      stem: 'Which key idea about Armadillo\'s past is introduced in paragraph 1?',
      choices: [
        ['He lived in the high Rocky Mountains where snow fell all year.', 'He lived on the Texas prairie near mesquite trees.'],
        'Before he had armor, Armadillo had soft, delicate skin and had to hide constantly from predators.',
        ['He was the fastest runner among all the desert creatures.', 'Armadillo was vulnerable, not a champion runner.'],
        ['He loved to swim across deep lakes with fish.', 'Paragraph 1 explains he hid in dark underground burrows.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 explains that long ago Armadillo\'s skin was as soft as a peach blossom, forcing him to hide in underground burrows from hawks and coyotes.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'What important lesson does the story convey through Armadillo\'s experience?',
      choices: [
        ['It is foolish to listen to the advice of friendly neighbors.', 'Listening to Turtle helped Armadillo gain protective armor.'],
        ['Animals should never visit hollow cedar trees in the woods.', 'Visiting the tree resulted in getting armor.'],
        'Patience and perseverance can yield great rewards, even if outcomes are imperfect.',
        ['Loud noises never cause any problems in nature.', 'The loud thunder caused Armadillo to lose his patience at the very end.'],
      ],
      answer: 2,
      explain: 'Armadillo sat patiently for seven days and gained sturdy armor that protected him from predators, even though jumping at the end left him short-sighted.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [5],
      stem: 'Which sentence from paragraph 5 supports the idea that the spider\'s armor succeeded in protecting Armadillo?',
      choices: [
        '"Your armor is sturdy enough to protect you from sharp thorns and hungry hunters..."',
        ['"Just as Spider finished the ninth band, loud thunder boomed across the sky."', 'This describes the thunderclap.'],
        ['"Armadillo jumped with fright and bumped into Spider\'s loom!"', 'This shows Armadillo jumping.'],
        ['"Armadillo sat obediently for seven whole days and nights..."', 'This describes Armadillo\'s waiting.'],
      ],
      answer: 0,
      explain: 'Spider confirms that the armor is sturdy enough to protect Armadillo from sharp thorns and hungry predators.',
    }),
    mcq({
      standard: 'rla:3.7D', cites: [5],
      stem: 'Which statement best paraphrases paragraph 5 in a way that maintains its meaning and logical order?',
      choices: [
        ['Thunder destroyed Spider\'s web, so Armadillo had to find a new shell in the river.', 'Armadillo already had 9 bands woven.'],
        'After Armadillo sat patiently for seven days, sudden thunder startled him into bumping the loom, leaving him with sturdy armor but short sight.',
        ['Spider refused to weave armor because Armadillo was noisy and rude.', 'Armadillo was obedient and polite for seven days.'],
        ['Turtle jumped into the loom when thunder rattled the forest trees.', 'Armadillo bumped the loom, not Turtle.'],
      ],
      answer: 1,
      explain: 'This choice accurately and concisely retells the sequence: patient waiting, sudden thunder, bumping the loom, and receiving sturdy armor along with the consequence of short sight.',
    }),
  ],
});
