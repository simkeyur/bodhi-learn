// Grade 2 poem reading set: Who Has Seen the Wind? by Christina Rossetti (1872)

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_POEM_WIND: ReadingSet = makeSet({
  id: 'g2-poem-wind',
  grade: 2,
  kind: 'reading',
  title: 'Who Has Seen the Wind?',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-wind',
      title: 'Who Has Seen the Wind?',
      genre: 'poetry',
      author: 'Christina Rossetti',
      source: 'Sing-Song: A Nursery Rhyme Book, 1872',
      blocks: [
        { kind: 'line', text: 'Who has seen the wind?' },
        { kind: 'line', text: 'Neither I nor you:' },
        { kind: 'line', text: 'But when the leaves hang trembling,' },
        { kind: 'line', text: 'The wind is passing through.', stanzaEnd: true },
        { kind: 'line', text: 'Who has seen the wind?' },
        { kind: 'line', text: 'Neither you nor I:' },
        { kind: 'line', text: 'But when the trees bow down their heads,' },
        { kind: 'line', text: 'The wind is passing by.', stanzaEnd: true },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9B', cites: [1, 4, 5, 8],
      stem: 'How is this poem visually organized on the page?',
      choices: [
        ['In one giant paragraph with numbered sentences.', 'Poems are arranged in lines and stanzas, not paragraphs.'],
        'In two four-line stanzas with short lines and rhyming endings.',
        ['As a dialogue script with speaker names before each line.', 'This is a poem, not a play script.'],
        ['With sidebars and bold subheadings.', 'No headings or sidebars appear in the poem.'],
      ],
      answer: 1,
      explain: 'The poem is formatted into two distinct four-line stanzas with line breaks.',
    }),
    mcq({
      standard: 'rla:2.10D', cites: [3, 7],
      stem: 'What descriptive image in line 7 shows how strong the wind is blowing?',
      choices: [
        'The trees bow down their heads as the gust sweeps past.',
        ['Tiny flowers drink cool water from the creek.', 'Drinking water is not in line 7.'],
        ['A bird sings quietly inside a nest.', 'No birds are mentioned in line 7.'],
        ['Leaves change from green to yellow in autumn.', 'Line 7 describes bowing tree branches.'],
      ],
      answer: 0,
      explain: 'Picturing trees "bowing down their heads" vividly portrays large tree branches bending in strong wind.',
    }),
    mcq({
      standard: 'rla:2.10F', cites: [1, 5],
      stem: 'Why does the poet repeat the question "Who has seen the wind?" at the start of both stanzas?',
      choices: [
        ['Because the poet forgot the answer to the riddle.', 'The repetition is intentional poetry craft.'],
        ['To explain how to fly a kite in the park.', 'Kite flying is not discussed.'],
        'To emphasize that wind is invisible even though its effects are everywhere.',
        ['To ask the reader to draw a picture of the wind.', 'The question highlights that nobody can see air.'],
      ],
      answer: 2,
      explain: 'Repeating the central question highlights the mysterious, invisible nature of the wind.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3, 4],
      stem: 'According to the first stanza, how do people know that wind is blowing when they cannot see it?',
      choices: [
        'They can see the green leaves trembling on the tree branches.',
        ['They can hear the doorbell ring at the front door.', 'Doorbells are not mentioned.'],
        ['They can smell sweet cookies baking in the kitchen.', 'Baking smells are not related to wind.'],
        ['They can see snowflakes falling from dark clouds.', 'Snow is not in the poem.'],
      ],
      answer: 0,
      explain: 'Leaves trembling on branches provides visual evidence of wind passing through.',
    }),
    mcq({
      standard: 'rla:2.3B', cites: [3],
      stem: 'In line 3, the word **trembling** means—',
      choices: [
        ['falling to the ground frozen.', 'Leaves are still hanging on branches, not fallen.'],
        'shaking or fluttering gently in the breeze.',
        ['growing bigger and wider.', 'Trembling describes motion, not growth.'],
        ['making loud barking sounds.', 'Leaves do not bark.'],
      ],
      answer: 1,
      explain: 'Trembling means fluttering or quivering gently as air passes over the leaves.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3, 4, 5, 6, 7, 8],
      stem: 'What is the poet\'s main purpose in writing this poem?',
      choices: [
        ['To provide safety tips for severe hurricanes.', 'The poem is a gentle nature poem, not storm safety advice.'],
        ['To explain how windmills generate electricity.', 'Electricity is not mentioned.'],
        'To describe how we experience the invisible power of wind through nature.',
        ['To complain that windy days ruin outdoor games.', 'The tone is peaceful and observant.'],
      ],
      answer: 2,
      explain: 'The poet observes how the invisible wind makes itself known through trembling leaves and swaying trees.',
    }),
  ],
});
