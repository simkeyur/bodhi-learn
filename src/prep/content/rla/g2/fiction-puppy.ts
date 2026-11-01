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
        ['His bicycle tire went flat in the driveway.', 'The story is about finding a puppy, not a bicycle.'],
        'A lost, shivering puppy is hiding under his back porch.',
        ['His own dog ran off down the street.', 'Leo does not own Buddy; Buddy is lost.'],
        ['A neighbor asked Leo to help search for a lost brown puppy.', 'Mrs. Garcia lost her puppy, not her keys.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 explains that Leo heard whimpering and found a lost, shivering puppy under his porch.',
    }),
    mcq({
      standard: 'rla:2.8B', cites: [2],
      stem: 'How does Leo show that he is patient and gentle with animals?',
      choices: [
        'He holds out his hand and lets the puppy sniff his fingers first.',
        ['He chases the puppy across the yard.', 'Leo does not chase the puppy.'],
        ['He calls loudly for his mother to come outside.', 'He approaches the puppy quietly and gently.'],
        ['He carries the shivering puppy into the house.', 'Leo lets the puppy get comfortable first.'],
      ],
      answer: 0,
      explain: 'Holding out his hand for the puppy to sniff shows Leo knows how to approach a frightened animal gently.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [1],
      stem: 'In paragraph 1, the word **whimpering** means making a—',
      choices: [
        'soft, crying sound',
        ['loud, energetic bark', 'Whimpering is a soft cry, not a bark.'],
        ['cheerful chirping sound', 'Whimpering shows distress, not singing.'],
        ['deep scratching noise', 'Whimpering is a quiet vocal sound.'],
      ],
      answer: 0,
      explain: 'The puppy was frightened and cold, making a soft crying or whimpering sound.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [2],
      stem: 'Why did Buddy wag his tail in paragraph 2?',
      choices: [
        ['He was hoping Leo would bring him a bowl of crunchy dog food.', 'The text says he smelled Leo\'s hand and felt safe.'],
        'He sensed that Leo was kind and felt safe.',
        ['He saw Mrs. Garcia walking down the road.', 'Mrs. Garcia comes over only after Leo calls her.'],
        ['He wanted to chase a squirrel in the yard.', 'There is no squirrel mentioned in the yard.'],
      ],
      answer: 1,
      explain: 'When the puppy sniffed Leo\'s outstretched hand, wagging its tail showed it felt safe and friendly.',
    }),
    mcq({
      standard: 'rla:2.8D', cites: [1],
      stem: 'Where does the setting of this story take place?',
      choices: [
        ['In a grassy park across the neighborhood', 'Buddy is found under Leo\'s back porch.'],
        ['At an animal shelter in town', 'The story happens in Leo\'s yard and street.'],
        ['Inside a busy grocery store', 'The setting is Leo\'s home on a Saturday.'],
        'In Leo\'s backyard and on his neighborhood street',
      ],
      answer: 3,
      explain: 'The story takes place on a Saturday morning in Leo\'s backyard and street.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose for writing this story?',
      choices: [
        'To tell an entertaining story about helping a lost pet',
        ['To explain how vets care for sick animals', 'This is a story about finding a lost pet, not animal medicine.'],
        ['To convince readers to buy golden puppies', 'The purpose is storytelling, not selling pets.'],
        ['To describe how wooden porches are built', 'Porch building is completely unrelated.'],
      ],
      answer: 0,
      explain: 'The author tells a heartwarming narrative to entertain readers with a story about kindness.',
    }),
    mcq({
      standard: 'rla:2.6C', cites: [2],
      stem: 'Based on paragraph 2, what will Leo most likely do next after reading the collar tag?',
      choices: [
        'Call the phone number on the tag',
        ['Leave the puppy alone under the porch', 'Leo wants to help the puppy find its home.'],
        ['Walk down the street asking every neighbor', 'The collar tag has a phone number to call.'],
        ['Take the blue collar off to keep for himself', 'The tag has the owner\'s contact information.'],
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
        ['"He peeked under the wooden porch."', 'This shows he is curious, not how he treated the puppy.'],
        ['"Buddy barked with joy as he ran home."', 'This tells how Buddy reacted when leaving.'],
      ],
      answer: 0,
      explain: 'Leo moves slowly and lets the puppy sniff him, so he does not scare it.',
    }),
    mcq({
      standard: 'rla:2.7D',
      stem: 'Which is the best retelling of the story?',
      choices: [
        'Leo finds a lost puppy under his porch, calls the number on its tag, and helps return it to its owner.',
        ['Leo plays on his back porch, hears a strange noise in the yard, and asks his mother if they can adopt the dog.', 'This leaves out the problem and how Buddy is returned home.'],
        ['Mrs. Garcia loses her puppy, searches the neighborhood fences, and finds him resting by a tree.', 'Mrs. Garcia did not find Buddy on her own; Leo called her.'],
        ['A lost puppy runs down the street, hides from a storm under a porch, and falls asleep in the dirt.', 'The story does not mention a storm or the puppy falling asleep.'],
      ],
      answer: 0,
      explain: 'A good retelling keeps the main events in order: the problem, what Leo does, and how it ends.',
    }),
  ],
});
