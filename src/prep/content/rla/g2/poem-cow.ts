// Grade 2 poem reading set: The Cow by Robert Louis Stevenson (1885)

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_POEM_COW: ReadingSet = makeSet({
  id: 'g2-poem-cow',
  grade: 2,
  kind: 'reading',
  title: 'The Cow',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-cow',
      title: 'The Cow',
      genre: 'poetry',
      author: 'Robert Louis Stevenson',
      source: "A Child's Garden of Verses, 1885",
      blocks: [
        { kind: 'line', text: 'The friendly cow all red and white,' },
        { kind: 'line', text: 'I love with all my heart:' },
        { kind: 'line', text: 'She gives me cream with all her might,' },
        { kind: 'line', text: 'To eat with apple-tart.', stanzaEnd: true },
        { kind: 'line', text: 'She wanders lowing here and there,' },
        { kind: 'line', text: 'And yet she cannot stray,' },
        { kind: 'line', text: 'All in the pleasant open air,' },
        { kind: 'line', text: 'The pleasant light of day;', stanzaEnd: true },
        { kind: 'line', text: 'And blown by all the winds that pass' },
        { kind: 'line', text: 'And wet with all the showers,' },
        { kind: 'line', text: 'She walks among the meadow grass' },
        { kind: 'line', text: 'And eats the meadow flowers.', stanzaEnd: true },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9B', cites: [1, 4, 5, 8],
      stem: 'How is this poem organized on the page?',
      choices: [
        'In three four-line stanzas with rhymes.',
        ['In one long paragraph of prose sentences.', 'Poems are arranged in lines and stanzas, not paragraphs.'],
        ['As a play script with actor names before lines.', 'This is a poem, not a play script.'],
        ['With bold sidebars and an informational map.', 'No headings or sidebars appear in the poem.'],
      ],
      answer: 0,
      explain: 'The poem is formatted into three distinct four-line stanzas with line breaks and rhyming pairs.',
    }),
    mcq({
      standard: 'rla:2.10D', cites: [1, 3],
      stem: 'Which words from lines 1 through 3 describe how the cow looks?',
      choices: [
        'all red and white',
        ['with all her might', 'This tells how she gives cream, not how she looks.'],
        ['eats the meadow flowers', 'This tells what she eats in the meadow.'],
        ['wet with all the showers', 'This describes rain falling in the field.'],
      ],
      answer: 0,
      explain: 'The phrase "all red and white" in line 1 describes the cow\'s physical colors.',
    }),
    mcq({
      standard: 'rla:2.10F', cites: [7, 8],
      stem: 'In lines 7 and 8, the poet repeats the word **pleasant** to show that—',
      choices: [
        ['the cow is frightened by cold wind', 'Pleasant shows comfort and enjoyment.'],
        'the outdoor day feels peaceful',
        ['the farmer is looking for a lost animal', 'The cow is safe and not lost.'],
        ['the child wants to go inside the house', 'The setting is enjoyed outdoors.'],
      ],
      answer: 1,
      explain: 'Repeating "pleasant" emphasizes the calm, enjoyable atmosphere of the outdoors.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3, 4],
      stem: 'Why does the speaker love the cow in the first stanza?',
      choices: [
        ['The cow runs faster than the forest horses.', 'Speed is not mentioned.'],
        ['The cow protects the family from storms.', 'The cow is gentle in a meadow.'],
        'The cow gives sweet cream for food.',
        ['The cow does funny tricks in the big barn.', 'The cow grazes in fields.'],
      ],
      answer: 2,
      explain: 'Lines 3 and 4 explain that the cow gives cream to eat with apple-tart.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [5],
      stem: 'In line 5, the word **lowing** means—',
      choices: [
        'making a gentle moo sound',
        ['running very fast down a hill', 'Lowing is a sound, not running.'],
        ['sleeping quietly in the grass', 'Lowing describes making a cow sound.'],
        ['eating small green apple tarts', 'The child eats tart with cream.'],
      ],
      answer: 0,
      explain: 'Lowing is the traditional word for a cow mooing or calling gently.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      stem: 'What is the poet\'s main purpose in writing this poem?',
      choices: [
        ['To explain how farmers build tall barns.', 'Barn construction is not in the poem.'],
        ['To teach children how to bake apple pies.', 'Baking instructions are not provided.'],
        'To share affection for a meadow cow.',
        ['To warn readers that meadow cows can bite.', 'The cow is described as gentle and friendly.'],
      ],
      answer: 2,
      explain: 'The poet writes to express fond appreciation for a gentle, friendly cow.',
    }),
    mcq({
      standard: 'rla:2.7C', cites: [1, 2],
      stem: 'Which words show that the cow is kind and gentle?',
      choices: [
        ['"with all my heart"', 'This tells how the speaker feels.'],
        '"The friendly cow"',
        ['"eats the meadow flowers"', 'This tells what she eats.'],
        ['"wanders lowing here and there"', 'This describes walking and mooing.'],
      ],
      answer: 1,
      explain: 'Calling the animal "The friendly cow" shows that she is gentle and kind.',
    }),
  ],
});
