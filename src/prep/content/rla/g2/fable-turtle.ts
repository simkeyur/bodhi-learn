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
        ['It provides factual instructions on pet care.', 'Fables are traditional stories, not care guides.'],
        ['It includes historical maps and dates about early Texas.', 'No maps or dates appear in this fable.'],
        ['It includes true facts and dates about forest animals.', 'No historical dates appear in this fable.'],
        'It features animal characters and teaches a clear moral lesson.',
      ],
      answer: 3,
      explain: 'A fable features talking animal characters and ends with a clear moral lesson ("Slow and steady wins the race").',
    }),
    mcq({
      standard: 'rla:2.8C', cites: [3],
      stem: 'How is the conflict in the race resolved at the end of the story?',
      choices: [
        'Toby crosses the finish line while Harry is asleep.',
        ['Harry wakes up and speeds across the finish line first.', 'Toby won the race, not Harry.'],
        ['The woodland animals stop the race because of rain.', 'The race was completed and animals cheered.'],
        ['A bear frightens both runners into the forest.', 'No bear appears in the story.'],
      ],
      answer: 0,
      explain: 'Toby perseveres with steady steps and crosses the finish line before Harry wakes up.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Harry decide to take a nap during the race?',
      choices: [
        'He believed Toby was too slow to ever catch up.',
        ['He hurt his back leg on a sharp stone on the path.', 'Harry was not injured.'],
        ['An owl warned him that running fast was unsafe.', 'No owl spoke to Harry.'],
        ['He felt tired after running in the rain.', 'The race happened on a bright sunny day.'],
      ],
      answer: 0,
      explain: 'Harry was so sure he would win easily that he foolishly believed he had time for a nap.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **boasted** means that Harry—',
      choices: [
        'spoke proudly about his speed',
        ['whispered a quiet secret', 'Boasting is speaking loudly with pride, not whispering.'],
        ['complained about the long race', 'Harry laughed and was confident, not complaining.'],
        ['asked politely for help', 'Harry was showing off, not asking for help.'],
      ],
      answer: 0,
      explain: 'Boasted means bragging with excessive pride about one\'s own abilities.',
    }),
    mcq({
      standard: 'rla:2.10E', cites: [1, 2, 3],
      stem: 'From which point of view is "The Tortoise and the Hare" told?',
      choices: [
        'Third-person point of view by an outside narrator',
        ['First-person point of view told by Harry', 'Harry does not narrate using the word "I."'],
        ['First-person point of view told by Toby', 'Toby does not tell the story using "I."'],
        ['Second-person point of view that addresses the reader', 'The story does not speak directly to the reader as "you."'],
      ],
      answer: 0,
      explain: 'An outside storyteller uses third-person pronouns ("he," "they") and animal names to tell the fable.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main message in this fable?',
      choices: [
        'Steady effort and persistence lead to success.',
        ['Fast runners always win every contest and forest competition.', 'Harry was faster, but he lost because he was careless.'],
        ['Taking an afternoon nap is always wise.', 'Napping caused Harry to lose the race.'],
        ['Turtles should avoid racing other animals.', 'Toby proved that steady effort can win.'],
      ],
      answer: 0,
      explain: 'The classic message is that continuous, steady effort leads to success over careless arrogance.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [2],
      stem: 'Which sentence shows that Harry is too sure he will win?',
      choices: [
        '""I have plenty of time," Harry yawned."',
        ['"One sunny day, Harry the Hare boasted that he was the fastest runner in the woods."', 'This shows boasting at the start, before the race began.'],
        ['"The animals cheered for him. Slow and steady had won the race."', 'This tells who won at the end.'],
        ['"Harry woke up and looked down the path."', 'This shows Harry waking up too late.'],
      ],
      answer: 0,
      explain: 'Harry stops for a nap in the middle of a race because he thinks he cannot lose.',
    }),
    mcq({
      standard: 'rla:2.8A', cites: [3],
      stem: 'What is the theme of this story?',
      choices: [
        'Keep going and never give up.',
        ['Running fast is the best skill to have.', 'Harry was fast, but his carelessness made him lose.'],
        ['Forest trails make great race tracks.', 'The forest trail is just the setting.'],
        ['Napping outdoors under trees is healthy.', 'The story is about perseverance, not sleep.'],
      ],
      answer: 0,
      explain: 'Toby is slow, but he never stops, and he wins. The story shows that steady work beats bragging.',
    }),
  ],
});
