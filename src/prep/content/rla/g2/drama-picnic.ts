// Grade 2 drama reading set: The Backyard Picnic

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_DRAMA_PICNIC: ReadingSet = makeSet({
  id: 'g2-drama-picnic',
  grade: 2,
  kind: 'reading',
  title: 'The Backyard Picnic',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-picnic',
      title: 'The Backyard Picnic',
      genre: 'drama',
      blocks: [
        { kind: 'heading', text: 'Characters' },
        { kind: 'direction', text: 'MIA: A seven-year-old girl carrying a red checkered blanket.\nSAM: Her younger brother carrying a wicker lunch basket.' },
        { kind: 'heading', text: 'Scene 1' },
        { kind: 'direction', text: 'Setting: A bright, sunny backyard in Texas. The sun is shining hot near noon.' },
        { kind: 'speech', speaker: 'MIA', text: '[Spreading the blanket on the open grass and wiping her forehead] Phew! The sunshine is burning hot right out here in the open yard.' },
        { kind: 'speech', speaker: 'SAM', text: '[Setting down the basket and looking worried] The lemonade is getting warm, and the chocolate cookies are melting!' },
        { kind: 'speech', speaker: 'MIA', text: '[Points toward a large live oak tree near the garden fence] Look over there! That big oak tree makes a wide, cool patch of dark shade.' },
        { kind: 'speech', speaker: 'SAM', text: '[Grinning happily and picking up the basket] Let\'s move! It feels ten degrees cooler under the leafy branches.' },
        { kind: 'speech', speaker: 'MIA', text: '[Unfolding the blanket beneath the leafy tree] Perfect! Now we can enjoy our cold drinks and sandwiches in comfort.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9C', cites: [1],
      stem: 'What do the bracketed words "[Spreading the blanket on the open grass and wiping her forehead]" tell the reader?',
      choices: [
        ['They list the ingredients needed to bake cookies.', 'No recipe is provided in stage directions.'],
        ['They are words Mia speaks out loud to her younger brother Sam.', 'Stage directions in brackets are acted out, not spoken.'],
        ['They describe what happened before the play started.', 'They describe Mia\'s immediate onstage actions.'],
        'They are stage directions telling the actor how to act and move.',
      ],
      answer: 3,
      explain: 'Stage directions instruct actors on movements and physical actions during a performance.',
    }),
    mcq({
      standard: 'rla:2.9C', cites: [2],
      stem: 'How does Sam\'s dialogue in line 2 help the audience understand the conflict?',
      choices: [
        'The hot sun is warming their drinks and melting their cookies.',
        ['It shows that Sam wants to cancel the picnic and go inside the house.', 'Sam wants to have the picnic comfortably.'],
        ['It tells that Sam forgot to bring the picnic basket outside.', 'Sam has already carried the basket out.'],
        ['It reveals that a neighborhood dog took their cookies.', 'No dog took their food.'],
      ],
      answer: 0,
      explain: 'Sam explains that the heat is warming the lemonade and melting the cookies, defining their problem.',
    }),
    mcq({
      standard: 'rla:2.8C', cites: [3, 4, 5],
      stem: 'How do Mia and Sam solve their problem with the hot sun?',
      choices: [
        'They move their picnic under the shade of a large live oak tree.',
        ['They go inside the house and eat their lunch indoors.', 'They keep their picnic outside under the tree.'],
        ['They spray each other with cool water from a garden hose.', 'They move their blanket, not spray water.'],
        ['They build a wooden shelter using boards from the fence.', 'They use the natural shade of the tree.'],
      ],
      answer: 0,
      explain: 'Moving beneath the leafy oak tree provides the shade they need to enjoy their picnic comfortably.',
    }),
    mcq({
      standard: 'rla:2.8D', cites: [1],
      stem: 'Where does the action in Scene 1 take place?',
      choices: [
        'In a sunny Texas backyard',
        ['Inside a busy restaurant kitchen', 'The setting is a backyard, not a restaurant.'],
        ['At a campsite in the mountains', 'The weather is hot and sunny in a backyard.'],
        ['On a playground across town', 'The setting is on the grass in a backyard.'],
      ],
      answer: 0,
      explain: 'The scene heading and dialogue clearly establish the setting in a sunny Texas backyard.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why did Mia point to the live oak tree near the garden fence?',
      choices: [
        'It offered a wide, cool patch of dark shade.',
        ['She saw a bird nest resting high up in the branches.', 'No bird nest is mentioned in the play.'],
        ['She wanted to gather fallen acorns from the lawn.', 'She was looking for shade, not acorns.'],
        ['She thought the dry tree needed water from a hose.', 'The tree was healthy and shady.'],
      ],
      answer: 0,
      explain: 'Mia realized the oak tree\'s leafy canopy offered protection from the burning midday sun.',
    }),
    mcq({
      standard: 'rla:2.10B', cites: [1, 2, 3, 4, 5],
      stem: 'How is this selection structured differently from a regular storybook?',
      choices: [
        'It is formatted with character names and spoken dialogue.',
        ['It is written in rhyming poetic couplets like a nursery rhyme.', 'The play is dramatic dialogue, not rhyming verse.'],
        ['It uses charts and tables to explain tree growth.', 'It is a dramatic play, not a science report.'],
        ['It numbers each sentence in order from start to finish.', 'Lines are spoken by characters, not numbered sentences.'],
      ],
      answer: 0,
      explain: 'Plays use character names before lines and stage directions in brackets to format dialogue for performance.',
    }),
  ],
});
