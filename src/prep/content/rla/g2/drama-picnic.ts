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
        'They tell the actor how to act.',
        ['They are spoken words Mia shouts to her neighbors.', 'Stage directions in brackets are acted out, not spoken.'],
        ['They describe what happened ten years before scene 1.', 'They describe Mia\'s immediate onstage actions.'],
        ['They list the ingredients for baking cookies.', 'No recipe is provided.'],
      ],
      answer: 0,
      explain: 'Stage directions instruct actors on movements and physical actions during a performance.',
    }),
    mcq({
      standard: 'rla:2.9C', cites: [2],
      stem: 'How does Sam\'s dialogue in line 2 help the audience understand the conflict?',
      choices: [
        ['Sam wants to cancel the picnic and play games.', 'Sam wants to have the picnic.'],
        'The sun is melting their food.',
        ['Sam forgot to bring the lunch basket outside.', 'Sam already set down the basket.'],
        ['A neighborhood dog stole all their cookies.', 'No dog stole food.'],
      ],
      answer: 1,
      explain: 'Sam explains that the heat is warming the lemonade and melting the cookies, defining their problem.',
    }),
    mcq({
      standard: 'rla:2.8C', cites: [3, 4, 5],
      stem: 'How do Mia and Sam solve their problem with the hot sun?',
      choices: [
        ['They spray each other with the garden hose.', 'They move their picnic, not spray water.'],
        ['They go inside the house and turn on television.', 'They keep their picnic outside.'],
        'They move under the oak tree shade.',
        ['They build a wooden tent out of fence boards.', 'They use the natural shade of the tree.'],
      ],
      answer: 2,
      explain: 'Moving beneath the leafy oak tree provides the shade they need to enjoy their picnic comfortably.',
    }),
    mcq({
      standard: 'rla:2.8D', cites: [1],
      stem: 'Where does the action in Scene 1 take place?',
      choices: [
        'In a sunny Texas backyard.',
        ['Inside a busy restaurant kitchen.', 'The setting is a backyard, not a restaurant.'],
        ['At a cold, snowy mountain campground.', 'The weather is hot and sunny.'],
        ['On a passenger airplane flying over Dallas.', 'The setting is on the ground in a yard.'],
      ],
      answer: 0,
      explain: 'The scene heading and dialogue clearly establish the setting in a sunny Texas backyard.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why did Mia point to the live oak tree near the garden fence?',
      choices: [
        ['She spotted a wasp nest in the branches.', 'No wasp nest is mentioned.'],
        'The tree gave cool shade.',
        ['She wanted to pick acorns to feed birds.', 'She was looking for shade, not acorns.'],
        ['She thought the dry tree needed water.', 'The tree was healthy and leafy.'],
      ],
      answer: 1,
      explain: 'Mia realized the oak tree\'s leafy canopy offered protection from the burning midday sun.',
    }),
    mcq({
      standard: 'rla:2.10B', cites: [1, 2, 3, 4, 5],
      stem: 'How is this selection structured differently from a regular storybook?',
      choices: [
        ['It is written in rhyming poetic couplets.', 'The text is dramatic dialogue, not rhyming verse.'],
        ['It uses tables to explain oak tree biology.', 'It is a fictional play, not a science report.'],
        'It uses character tags and dialogue.',
        ['It numbers every sentence from first to last.', 'Sentences are not numbered; speeches are delivered by characters.'],
      ],
      answer: 2,
      explain: 'Plays use character names before lines and stage directions in brackets to format dialogue for performance.',
    }),
  ],
});
