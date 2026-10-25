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
          text: 'On Saturday morning, Leo heard a soft whimpering sound coming from his backyard. He peeked under the wooden porch and saw a small golden puppy. The puppy was shivering and had a shiny blue collar around its neck.',
        },
        {
          kind: 'p',
          text: 'Leo gently held out his hand so the puppy could sniff his fingers. When the puppy wagged its tail, Leo carefully checked the metal tag on its collar. The tag said \'Buddy\' and listed a neighborhood phone number.',
        },
        {
          kind: 'p',
          text: 'Leo called the number with his mom. Five minutes later, Mrs. Garcia from down the street hurried over. She hugged Buddy happily and thanked Leo for being such a caring neighbor. Buddy barked with joy as he ran home.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.7C', cites: [1],
      stem: 'What problem does Leo discover at the beginning of the story?',
      choices: [
        ['His bicycle has a flat tire in the driveway.', 'The story is about finding a puppy, not a bicycle.'],
        'A lost puppy is shivering under his porch.',
        ['He lost his own pet dog in the woods.', 'Leo does not own Buddy; Buddy is lost.'],
        ['Mrs. Garcia cannot find her front door keys.', 'Mrs. Garcia lost her puppy, not her keys.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 explains that Leo heard whimpering and found a lost, shivering puppy under his porch.',
    }),
    mcq({
      standard: 'rla:2.7B', cites: [2],
      stem: 'How does Leo show that he is patient and gentle with animals?',
      choices: [
        'He holds out his hand to let the puppy sniff his fingers first.',
        ['He chases the puppy around the backyard fence.', 'Leo does not chase the puppy.'],
        ['He shouts loudly across the yard for his mother.', 'He approaches the puppy quietly and gently.'],
        ['He locks the puppy in a dark garage.', 'Leo never locks the puppy up.'],
      ],
      answer: 0,
      explain: 'Holding out his hand for the puppy to sniff shows Leo knows how to approach a frightened animal gently.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **whimpering** means making a—',
      choices: [
        ['loud, roaring tiger noise.', 'Whimpering is a soft cry, not a roar.'],
        ['cheerful singing tune.', 'Whimpering shows distress, not singing.'],
        'soft, crying sound.',
        ['heavy stomping footstep.', 'Whimpering is a quiet vocal sound.'],
      ],
      answer: 2,
      explain: 'The puppy was frightened and cold, making a soft crying or whimpering sound.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Buddy wag his tail in paragraph 2?',
      choices: [
        ['He was hungry for a big bone.', 'The text says he smelled Leo\'s hand and felt safe.'],
        'He realized that Leo was friendly and meant no harm.',
        ['He wanted to chase a squirrel up a tree.', 'There is no squirrel mentioned in the yard.'],
        ['He was angry at Mrs. Garcia.', 'Buddy loves Mrs. Garcia and is happy to see friendly people.'],
      ],
      answer: 1,
      explain: 'When the puppy sniffed Leo\'s outstretched hand, wagging its tail showed it felt safe and friendly.',
    }),
    mcq({
      standard: 'rla:2.7D', cites: [1],
      stem: 'Where does the setting of this story take place?',
      choices: [
        'In Leo\'s backyard porch and neighborhood street.',
        ['At a busy downtown grocery store.', 'The story happens in Leo\'s yard and neighborhood.'],
        ['Inside a noisy school cafeteria.', 'The setting is Leo\'s home on a Saturday.'],
        ['On a sandy ocean beach in Florida.', 'The setting is a neighborhood backyard.'],
      ],
      answer: 0,
      explain: 'The story takes place on a Saturday morning in Leo\'s backyard and street.',
    }),
    mcq({
      standard: 'rla:2.9A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose for writing this story?',
      choices: [
        ['To explain how veterinarians treat sick puppies.', 'This is a story about finding a lost pet, not vet medicine.'],
        ['To persuade readers to buy gold collar tags.', 'The purpose is entertaining storytelling, not selling tags.'],
        'To tell an entertaining story about a boy helping a lost pet get home.',
        ['To describe how wooden porches are built.', 'Porch building is completely unrelated.'],
      ],
      answer: 2,
      explain: 'The author tells a heartwarming narrative to entertain readers with a story about kindness.',
    }),
    mcq({
      standard: 'rla:2.6C', cites: [2],
      stem: 'Based on paragraph 2, what will Leo most likely do next after reading the collar tag?',
      choices: [
        'He will call the phone number on the tag to locate the puppy\'s owner.',
        ['He will chase the puppy away into the street.', 'Leo is gentle and wants to help.'],
        ['He will take off the collar and throw it in the trash.', 'The tag has the owner\'s contact information.'],
        ['He will go to sleep under the porch with the puppy.', 'Leo goes to call the owner with his mom.'],
      ],
      answer: 0,
      explain: 'Finding the owner\'s phone number allows the reader to predict that Leo will call the number to return the lost puppy.',
    }),
  ],
});
