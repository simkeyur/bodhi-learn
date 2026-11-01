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
        'It uses a fictional story to explain how an animal developed a physical feature.',
        ['It provides scientific data about the lifespans of wild armadillos in Texas.', 'The text is an imaginative story rather than an article with biological facts.'],
        ['It lists step-by-step instructions for identifying tracks left by river animals.', 'The selection is a story about talking animals rather than a practical guide to tracks.'],
        ['It describes real historical events and people that lived along Texas rivers long ago.', 'The story includes mythical talking animals rather than actual historical events.'],
      ],
      answer: 0,
      explain: 'A classic pourquois folktale is a fictional story explaining how an animal developed a unique trait or physical feature.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [4, 5],
      stem: 'What causes the spider to stop weaving the armor in paragraph 5?',
      choices: [
        ['Armadillo becomes impatient and decides to run back to the river.', 'Armadillo waits patiently for seven days and only moves when thunder crashes.'],
        'Thunder startles Armadillo into jumping and bumping Spider\'s web.',
        ['Turtle walks up the hill and warns Spider that Coyote is coming.', 'Turtle gave directions earlier but does not follow Armadillo up the hill.'],
        ['Spider runs out of silk before finishing the final band of scales.', 'Spider has already completed nine bands and stops because Armadillo bumped the web.'],
      ],
      answer: 1,
      explain: 'In paragraph 5, loud thunder startles Armadillo, causing him to jump and bump into Spider\'s web.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2, 3],
      stem: 'What can the reader infer about Turtle from paragraphs 2 and 3?',
      choices: [
        ['Turtle is annoyed that Armadillo interrupted his morning nap.', 'Turtle answers Armadillo politely and shares helpful information.'],
        ['Turtle wants to trick Armadillo so Coyote can chase him away into the deep river.', 'Turtle honestly tells Armadillo where to find Spider rather than trying to trick him.'],
        'Turtle is generous and willing to help another creature in need.',
        ['Turtle regrets having a hard shell and wishes his skin was soft.', 'Turtle explains that his shell allows him to sleep safely near hungry animals.'],
      ],
      answer: 2,
      explain: 'Turtle answers Armadillo kindly and shares where to find Spider, showing a helpful and generous nature.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [1],
      stem: 'Which key idea about Armadillo is introduced in paragraph 1?',
      choices: [
        'Before he had a hard shell, his soft skin forced him to hide from predators.',
        ['He was skilled at digging deep underground tunnels to hunt for river fish.', 'Paragraph 1 explains he hid to stay safe, not to hunt for fish.'],
        ['He traveled far across Texas looking for other animals with peach-colored skin.', 'The text compares his soft skin to a peach, but does not say he searched for other animals.'],
        ['He spent his days racing against Hawk and Coyote across the open plains.', 'Hawk and Coyote were hunters that Armadillo hid from, not racing partners.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 explains that Armadillo once had soft skin like a ripe peach and had to hide in dirt holes from predators.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'What lesson does the story teach through Armadillo\'s experience?',
      choices: [
        ['Animals should never trust advice from creatures they meet near water.', 'Turtle\'s advice helped Armadillo find the protection he needed.'],
        ['It is impossible for small creatures to protect themselves in the wild.', 'Armadillo successfully receives armor that stops thorns and sharp teeth.'],
        ['Working alone is always better than asking neighbors for assistance.', 'Armadillo depends on help from both Turtle and Spider to gain his shell.'],
        'Patience brings important rewards, even if unexpected events occur.',
      ],
      answer: 3,
      explain: 'Armadillo waited patiently for seven days and gained protective armor, even though jumping at the end left him curling into a ball.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [5],
      stem: 'Which quotation from paragraph 5 shows that the coat protects Armadillo?',
      choices: [
        ['"From that day on, Armadillo wore his hard bands through the prickly Texas brush."', 'This sentence appears in paragraph 6, not paragraph 5.'],
        '"Your coat is strong enough to stop thorns and sharp teeth."',
        ['"Just as Spider finished the ninth band, loud thunder boomed in the sky!"', 'This sentence describes the sudden noise that startled Armadillo.'],
        ['"He ran into deep holes in the dirt to stay safe from animals."', 'This quotation is from paragraph 1 and describes what Armadillo did before he got armor.'],
      ],
      answer: 1,
      explain: 'Spider confirms that the coat is strong enough to protect Armadillo from thorns and predators\' sharp teeth.',
    }),
    mcq({
      standard: 'rla:3.7D', cites: [5],
      stem: 'Which statement best paraphrases paragraph 5?',
      choices: [
        ['Spider gets angry at Armadillo for asking questions and casts a spell that turns him into a gray stone.', 'Spider gives Armadillo protective armor and explains the consequence of his jump, not turning him into stone.'],
        'Armadillo waits quietly for days, but a loud crack of thunder makes him jump, leaving him with armor that curls into a ball.',
        ['Armadillo escapes from a fierce river storm and hides under Spider\'s web until the thunder stops.', 'Armadillo sat still while the coat was woven, rather than fleeing a storm to hide under a web.'],
        ['Turtle arrives at the hollow tree just as the ninth band is woven and congratulates Spider on her craft.', 'Turtle remains resting by the river and is not present in paragraph 5.'],
      ],
      answer: 1,
      explain: 'This choice concisely retells the main events of paragraph 5: waiting patiently, being startled by thunder, and receiving armor with a consequence.',
    }),
  ],
});
