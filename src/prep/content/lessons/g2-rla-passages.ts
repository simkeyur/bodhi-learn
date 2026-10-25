// Mini-passages for Grade 2 walkthrough samples. Pure data.
// Each passage has wordCount >= 25 words to satisfy lesson test checks.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });
const s = (...sentences: string[]) => ({ kind: 'sentences' as const, sentences });

export const MINI_PUPPY: Passage = {
  id: 'g2-mini-puppy',
  title: 'Finding Buddy',
  genre: 'fiction',
  blocks: [
    p('On Saturday morning, Leo heard a soft whimpering sound coming from his backyard. He peeked under the wooden porch and saw a small golden puppy shivering in the cool morning air. The friendly puppy wore a blue collar with a shiny tag.'),
    p('Leo gently offered his hand, and the puppy wagged its tail happily. Leo read the telephone number on the collar tag and immediately ran inside to tell his mother. Soon, their neighbor Mrs. Garcia arrived with a warm smile to bring Buddy safely home.'),
  ],
};

export const MINI_TURTLE: Passage = {
  id: 'g2-mini-turtle',
  title: 'The Tortoise and the Hare',
  genre: 'fiction',
  blocks: [
    p('Harry the Hare bragged loudly to all his forest neighbors that no animal could run faster than him. Toby the Tortoise smiled quietly and challenged Harry to a race through the tall pine woods.'),
    p('Harry sprinted far ahead, but decided to curl up under an oak tree for a quick nap. Meanwhile, Toby kept walking step by step without stopping. When Harry woke up, Toby was already crossing the finish line to win the race.'),
  ],
};

export const MINI_MONARCH: Passage = {
  id: 'g2-mini-monarch',
  title: 'Monarch Butterflies in Texas',
  genre: 'informational',
  blocks: [
    p('Every autumn, millions of orange monarch butterflies fly across Texas during their long migration to warm forests in Mexico. Texas is a vital rest stop where tired butterflies drink sweet wildflower nectar for energy.'),
    p('In spring, monarchs return north and search for green milkweed plants in gardens and fields. Milkweed is the only food monarch caterpillars can eat. Planting milkweed in backyard gardens helps these beautiful insects thrive.'),
  ],
};

export const MINI_SUNFLOWERS: Passage = {
  id: 'g2-mini-sunflowers',
  title: 'Sunflowers in the Summer',
  genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Tracking the Sunlight' },
    p('Sunflowers are cheerful yellow flowers that grow ten feet tall in backyard gardens. In the early morning, young sunflower buds face east toward the sunrise. As the afternoon moves along, the giant flower heads slowly turn westward to follow the path of the sun.'),
    { kind: 'heading', text: 'A Treat for Birds' },
    p('In late summer, the dark center disc fills with hundreds of nutritious black-and-white seeds. Hungry songbirds and squirrels visit the tall garden stalks daily to feast on the delicious seeds.'),
  ],
};

export const MINI_STAR_POEM: Passage = {
  id: 'g2-mini-star-poem',
  title: 'The Star',
  genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'Twinkle, twinkle, little star,' },
    { kind: 'line', text: 'How I wonder what you are!' },
    { kind: 'line', text: 'Up above the world so high,' },
    { kind: 'line', text: 'Like a diamond in the sky.', stanzaEnd: true },
    { kind: 'line', text: 'When the blazing sun is gone,' },
    { kind: 'line', text: 'When he nothing shines upon,' },
    { kind: 'line', text: 'Then you show your little light,' },
    { kind: 'line', text: 'Twinkle, twinkle, all the night.', stanzaEnd: true },
  ],
};

export const MINI_PICNIC: Passage = {
  id: 'g2-mini-picnic',
  title: 'The Backyard Picnic',
  genre: 'drama',
  blocks: [
    { kind: 'heading', text: 'Scene 1' },
    p('Setting: A sunny backyard at noon. The bright sun is hot.'),
    { kind: 'speech', speaker: 'MIA', text: '[Wiping her forehead and holding a blanket] Phew! The hot sunshine is melting our chocolate cookies out here in the open grass.' },
    { kind: 'speech', speaker: 'SAM', text: '[Pointing to the large live oak tree] Look over there, Mia! That shady oak tree makes a wide, cool patch where we can eat our lunch comfortably.' },
    { kind: 'speech', speaker: 'MIA', text: '[Smiling cheerfully] Great idea, Sam! Let\'s move our picnic blanket under the shady green branches right now.' },
  ],
};

export const MINI_SWINGS: Passage = {
  id: 'g2-mini-swings',
  title: 'More Swings for Oak Park',
  genre: 'persuasive',
  blocks: [
    p('Dear Park Director, our neighborhood park needs more swing sets for children. Currently, there are only two swings on the playground, which forces dozens of kids to wait in long lines.'),
    p('Swinging provides healthy outdoor exercise that builds strong arm muscles and helps children stay active. Adding four new belt swings will make Oak Park a happier and friendlier place for all families.'),
  ],
};

export const MINI_DRAFT: Passage = {
  id: 'g2-mini-draft',
  title: 'Our Classroom Hamster',
  genre: 'informational',
  blocks: [
    s(
      'Our second-grade classroom has a playful golden hamster named Squeaky.',
      'Every morning, students fill Squeaky\'s ceramic bowl with fresh seeds and carrot slices.',
      'His cage has a red plastic tunnel and an exercise wheel that spins silently.',
      'Squeaky loves running through the winding plastic tunnel before his afternoon nap.',
      'Taking care of our pet hamster teaches us responsibility and teamwork.',
    ),
  ],
};
