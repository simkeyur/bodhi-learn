// Grade 2 fiction reading set: The Lost Puppy

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_FICTION_PUPPY: ReadingSet = makeSet({
  id: 'g2-fiction-puppy',
  grade: 2,
  kind: 'reading',
  title: 'The Lost Puppy',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-puppy',
      title: 'The Lost Puppy',
      genre: 'fiction',
      blocks: [
        {
          kind: 'p',
          text: 'On Saturday morning, Leo heard a soft whimpering sound in his backyard. He peeked under the wooden porch. A small golden puppy sat there. The puppy was shivering. It had a shiny blue collar around its neck.',
        },
        {
          kind: 'p',
          text: 'Leo gently held out his hand so the puppy could sniff his fingers. The puppy wagged its tail. Leo looked at the metal tag on its collar. The tag said \'Buddy\' and gave a phone number.',
        },
        {
          kind: 'p',
          text: 'Leo called the number with his mom. Soon Mrs. Garcia hurried over from down the street. She hugged Buddy with a smile and thanked Leo for being a kind helper. Buddy barked with joy as he ran home.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.8C', cites: [1],
      stem: 'What problem does Leo discover at the beginning of the story?',
      choices: [
        ['His red bicycle has a flat tire in the driveway.', 'The story is about finding a puppy, not a bicycle.'],
        'A puppy is under his porch.',
        ['His own pet dog ran into the neighborhood woods.', 'Leo does not own Buddy; Buddy is lost.'],
        ['A neighbor lost her front door keys in the yard.', 'Mrs. Garcia lost her puppy, not her keys.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 explains that Leo heard whimpering and found a lost, shivering puppy under his porch.',
    }),
    mcq({
      standard: 'rla:2.8B', cites: [2],
      stem: 'How does Leo show that he is patient and gentle with animals?',
      choices: [
        'He lets the puppy sniff his hand first.',
        ['He chases the frightened puppy across the yard.', 'Leo does not chase the puppy.'],
        ['He shouts loudly across the fence for his mother.', 'He approaches the puppy quietly and gently.'],
        ['He picks the puppy up right away without moving.', 'Leo lets the puppy get comfortable first.'],
      ],
      answer: 0,
      explain: 'Holding out his hand for the puppy to sniff shows Leo knows how to approach a frightened animal gently.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **whimpering** means making a—',
      choices: [
        ['loud, roaring tiger noise in the yard.', 'Whimpering is a soft cry, not a roar.'],
        ['cheerful singing tune for other pets.', 'Whimpering shows distress, not singing.'],
        'soft, crying sound.',
        ['heavy stomping sound on wooden steps.', 'Whimpering is a quiet vocal sound.'],
      ],
      answer: 2,
      explain: 'The puppy was frightened and cold, making a soft crying or whimpering sound.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Buddy wag his tail in paragraph 2?',
      choices: [
        ['He was hungry for a big bowl of pet food.', 'The text says he smelled Leo\'s hand and felt safe.'],
        'He knew Leo was friendly.',
        ['He wanted to chase a quick garden rabbit.', 'There is no rabbit mentioned in the yard.'],
        ['He saw his mother walking down the street.', 'He was responding to Leo\'s kind gesture.'],
      ],
      answer: 1,
      explain: 'When the puppy sniffed Leo\'s outstretched hand, wagging its tail showed it felt safe and friendly.',
    }),
    mcq({
      standard: 'rla:2.8D', cites: [1],
      stem: 'Where does the setting of this story take place?',
      choices: [
        'In a neighborhood backyard.',
        ['At a busy downtown grocery store with aisles.', 'The story happens in Leo\'s yard and neighborhood.'],
        ['Inside a noisy school cafeteria during lunch.', 'The setting is Leo\'s home on a Saturday.'],
        ['On a sandy ocean beach next to large waves.', 'The setting is a neighborhood backyard.'],
      ],
      answer: 0,
      explain: 'The story takes place on a Saturday morning in Leo\'s backyard and street.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose for writing this story?',
      choices: [
        ['To explain how animal doctors treat sick puppies.', 'This is a story about finding a lost pet, not vet medicine.'],
        ['To convince people to buy golden collar tags.', 'The purpose is entertaining storytelling, not selling tags.'],
        'To tell a story about helping a lost pet.',
        ['To describe how wooden porches are built.', 'Porch building is completely unrelated.'],
      ],
      answer: 2,
      explain: 'The author tells a heartwarming narrative to entertain readers with a story about kindness.',
    }),
    mcq({
      standard: 'rla:2.6C', cites: [2],
      stem: 'Based on paragraph 2, what will Leo most likely do next after reading the collar tag?',
      choices: [
        'Call the number on the tag.',
        ['Chase the puppy away into the street.', 'Leo is gentle and wants to help.'],
        ['Take off the collar and throw it away.', 'The tag has the owner\'s contact information.'],
        ['Go to sleep under the porch with Buddy.', 'Leo goes to call the owner with his mom.'],
      ],
      answer: 0,
      explain: 'Finding the owner\'s phone number allows the reader to predict that Leo will call the number to return the lost puppy.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [2],
      stem: 'Which sentence shows that Leo is gentle with the puppy?',
      choices: [
        '"Leo gently held out his hand so the puppy could sniff his fingers."',
        ['"She hugged Buddy with a smile and thanked Leo for being a kind helper."', 'This shows Mrs. Garcia is thankful.'],
        ['"Buddy barked with joy as he ran home."', 'This is about Buddy.'],
        ['"He peeked under the wooden porch."', 'This shows he is curious.'],
      ],
      answer: 0,
      explain: 'Leo moves slowly and lets the puppy sniff him, so he does not scare it.',
    }),
    mcq({
      standard: 'rla:2.7D',
      stem: 'Which is the best retelling of the story?',
      choices: [
        ['Leo plays on his back porch all morning, eats lunch with his mother, and then walks down the sunny street.', 'This leaves out the problem and how it is solved.'],
        'Leo finds a lost puppy under his porch, calls the number on its tag, and helps the owner take it home.',
        ['Mrs. Garcia loses her keys near the fence, searches the backyard garden, and asks her neighbors for help.', 'This is not what happened.'],
        ['A small golden puppy runs through neighborhood gardens, chases birds in the trees, and finds a warm dog bed.', 'This does not describe the story events.'],
      ],
      answer: 1,
      explain: 'A good retelling keeps the main events in order: the problem, what Leo does, and how it ends.',
    }),
  ],
});
