// Grade 2 fable reading set: The Tortoise and the Hare

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_FABLE_TURTLE: ReadingSet = makeSet({
  id: 'g2-fable-turtle',
  grade: 2,
  kind: 'reading',
  title: 'The Tortoise and the Hare',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-turtle',
      title: 'The Tortoise and the Hare',
      genre: 'fiction',
      blocks: [
        {
          kind: 'p',
          text: 'One sunny morning, Harry the Hare boasted to all the woodland creatures that he was the fastest animal alive. Toby the Tortoise smiled quietly and challenged Harry to a race through the forest. Harry laughed out loud, but he accepted the challenge.',
        },
        {
          kind: 'p',
          text: 'When the race started, Harry sprinted ahead like a lightning bolt. Halfway to the finish line, Harry looked back and could not see Toby anywhere. \'I have plenty of time,\' Harry yawned, curling up beneath a shady tree for a quick nap.',
        },
        {
          kind: 'p',
          text: 'Meanwhile, Toby kept moving forward, taking one slow, steady step after another. When Harry finally woke up, he saw Toby crossing the finish line as the woodland animals cheered loudly. Slow and steady had won the race.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9A', cites: [1, 3],
      stem: 'Which characteristic shows that this story is a **fable**?',
      choices: [
        'Animals talk like humans, and the story teaches a moral lesson.',
        ['It gives factual instructions on how to care for woodland pets.', 'Fables are traditional fictional stories, not pet care guides.'],
        ['It includes maps and historical dates about Texas.', 'No maps or dates appear.'],
        ['It is written in rhyming stanzas with stage directions.', 'The story is in prose paragraphs without stage directions.'],
      ],
      answer: 0,
      explain: 'A fable features talking animal characters and ends with a clear moral lesson ("Slow and steady wins the race").',
    }),
    mcq({
      standard: 'rla:2.8C', cites: [3],
      stem: 'How is the conflict in the race resolved at the end of the story?',
      choices: [
        ['Harry jumps over the finish line while Toby is asleep.', 'Toby won the race, not Harry.'],
        'Toby steadily walks across the finish line first while Harry is napping.',
        ['The animals cancel the race because it starts raining.', 'The race was completed and animals cheered.'],
        ['A bear chases both runners back to the starting line.', 'No bear appears in the story.'],
      ],
      answer: 1,
      explain: 'Toby perseveres with steady steps and crosses the finish line before Harry wakes up.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Harry decide to take a nap during the race?',
      choices: [
        ['He hurt his back leg on a sharp stone.', 'Harry was not injured.'],
        ['A wise owl told him that racing was dangerous.', 'No owl spoke to Harry.'],
        'He was overconfident and believed Toby was too slow to catch up.',
        ['It was nighttime and all the animals went to sleep.', 'The race took place on a bright sunny day.'],
      ],
      answer: 2,
      explain: 'Harry was so sure he would win easily that he foolishly believed he had time for a nap.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **boasted** means that Harry—',
      choices: [
        'bragged proudly about how fast he could run.',
        ['whispered a secret to his woodland neighbors.', 'Boasting is speaking loudly and proudly, not whispering.'],
        ['cried sadly because he was alone.', 'Harry was feeling prideful, not sad.'],
        ['asked politely for directions to the river.', 'Harry was showing off, not asking directions.'],
      ],
      answer: 0,
      explain: 'Boasted means bragging with excessive pride about one\'s own abilities.',
    }),
    mcq({
      standard: 'rla:2.10E', cites: [1, 2, 3],
      stem: 'From which point of view is "The Tortoise and the Hare" told?',
      choices: [
        ['First-person point of view, told directly by Harry using "I."', 'Harry does not narrate using "I."'],
        'Third-person point of view, told by an outside storyteller.',
        ['First-person point of view, told directly by Toby.', 'Toby does not tell the story using "I."'],
        ['Second-person point of view, addressing the reader as "you."', 'The narrator tells a story about characters rather than "you."'],
      ],
      answer: 1,
      explain: 'An outside storyteller uses third-person pronouns ("he," "they") and animal names to tell the fable.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main message in this fable?',
      choices: [
        ['Running fast is the only way to succeed in life.', 'The fable shows that bragging runners can fail.'],
        ['Napping in the afternoon is always healthy.', 'Napping caused Harry to lose the race.'],
        'Patience and persistence are more reliable than boastful speed.',
        ['Turtles should never race with woodland animals.', 'The turtle proved he could win through perseverance.'],
      ],
      answer: 2,
      explain: 'The classic message is that continuous, steady effort leads to success over careless arrogance.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [2],
      stem: 'Which sentence shows that Harry is too sure he will win?',
      choices: [
        ['"Toby the Tortoise smiled quietly."', 'This is about Toby.'],
        ['"Slow and steady had won the race."', 'This tells who won.'],
        '"\'I have plenty of time,\' Harry yawned."',
        ['"Toby kept moving forward."', 'This is about Toby.'],
      ],
      answer: 2,
      explain: 'Harry stops for a nap in the middle of a race because he thinks he cannot lose.',
    }),
    mcq({
      standard: 'rla:2.8A', cites: [3],
      stem: 'What is the theme of this story?',
      choices: [
        ['Hares are faster than tortoises.', 'Harry is faster, but he loses. That is not the lesson.'],
        'If you keep trying, you can do more than others expect.',
        ['Forests are good places to race.', 'The forest is only the setting.'],
        ['Naps are bad for you.', 'The story is about bragging and not giving up, not about sleep.'],
      ],
      answer: 1,
      explain: 'Toby is slow, but he never stops, and he wins. The story shows that steady work beats bragging.',
    }),
  ],
});
