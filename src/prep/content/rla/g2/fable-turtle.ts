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
          text: 'One sunny day, Harry the Hare boasted that he was the fastest runner in the woods. Toby the Tortoise smiled quietly. He asked Harry to a race on the forest path. Harry laughed, but he said yes.',
        },
        {
          kind: 'p',
          text: 'When the race began, Harry ran fast. Soon he was far ahead. Harry looked back, but he did not see Toby anywhere. "I have plenty of time," Harry yawned. He lay down under a shady tree for a nap.',
        },
        {
          kind: 'p',
          text: 'Toby kept moving forward. He took one slow, steady step after another. Harry woke up and looked down the path. Toby was crossing the finish line! The animals cheered for him. Slow and steady had won the race.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9A', cites: [1, 3],
      stem: 'Which characteristic shows that this story is a **fable**?',
      choices: [
        'It teaches a moral lesson.',
        ['It gives factual instructions on caring for woodland pets.', 'Fables are traditional fictional stories, not pet care guides.'],
        ['It includes historical maps and dates about early Texas.', 'No maps or dates appear.'],
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
        'Toby crosses the line first while Harry naps.',
        ['The woodland animals cancel the race because of rain.', 'The race was completed and animals cheered.'],
        ['A giant brown bear chases both runners off the path.', 'No bear appears in the story.'],
      ],
      answer: 1,
      explain: 'Toby perseveres with steady steps and crosses the finish line before Harry wakes up.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Harry decide to take a nap during the race?',
      choices: [
        ['He hurt his back leg on a sharp stone by the path.', 'Harry was not injured.'],
        ['A wise forest owl warned him that running was unsafe.', 'No owl spoke to Harry.'],
        'He thought Toby was too slow to catch up.',
        ['The bright sun set and all woodland animals went home.', 'The race took place on a bright sunny day.'],
      ],
      answer: 2,
      explain: 'Harry was so sure he would win easily that he foolishly believed he had time for a nap.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **boasted** means that Harry—',
      choices: [
        'bragged about his speed',
        ['whispered a secret to woodland neighbors', 'Boasting is speaking proudly, not whispering.'],
        ['cried sadly because he was all by himself', 'Harry was feeling prideful, not sad.'],
        ['asked politely for directions to the river', 'Harry was showing off, not asking directions.'],
      ],
      answer: 0,
      explain: 'Boasted means bragging with excessive pride about one\'s own abilities.',
    }),
    mcq({
      standard: 'rla:2.10E', cites: [1, 2, 3],
      stem: 'From which point of view is "The Tortoise and the Hare" told?',
      choices: [
        ['First-person point of view told by Harry.', 'Harry does not narrate using "I."'],
        'Third-person point of view.',
        ['First-person point of view told by Toby.', 'Toby does not tell the story using "I."'],
        ['Second-person point of view using "you."', 'The narrator tells a story about characters rather than "you."'],
      ],
      answer: 1,
      explain: 'An outside storyteller uses third-person pronouns ("he," "they") and animal names to tell the fable.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main message in this fable?',
      choices: [
        ['Running fast is the only way to win in sports.', 'The fable shows that bragging runners can fail.'],
        ['Taking naps in the afternoon is always healthy.', 'Napping caused Harry to lose the race.'],
        'Steady effort brings success.',
        ['Turtles should never race with woodland hares.', 'The turtle proved he could win through perseverance.'],
      ],
      answer: 2,
      explain: 'The classic message is that continuous, steady effort leads to success over careless arrogance.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [2],
      stem: 'Which sentence shows that Harry is too sure he will win?',
      choices: [
        ['"One sunny day, Harry the Hare boasted that he was the fastest runner in the woods."', 'This shows bragging at the start.'],
        ['"Slow and steady had won the race."', 'This tells who won.'],
        '""I have plenty of time," Harry yawned."',
        ['"Toby kept moving forward."', 'This is about Toby.'],
      ],
      answer: 2,
      explain: 'Harry stops for a nap in the middle of a race because he thinks he cannot lose.',
    }),
    mcq({
      standard: 'rla:2.8A', cites: [3],
      stem: 'What is the theme of this story?',
      choices: [
        ['Hares run faster than heavy garden tortoises.', 'Harry is faster, but he loses. That is not the lesson.'],
        'Keep trying and do not quit.',
        ['Forest paths are the best places to have races.', 'The forest is only the setting.'],
        ['Napping under shady oak trees is bad for health.', 'The story is about bragging and not giving up, not about sleep.'],
      ],
      answer: 1,
      explain: 'Toby is slow, but he never stops, and he wins. The story shows that steady work beats bragging.',
    }),
  ],
});
