// Grade 4 revising and editing: a student project report about planting a pollinator butterfly garden.
// Questions cover transitions (4.11B.i), coordinating conjunctions (4.11D.viii), irregular past tense (4.11D.ii),
// capitalization (4.11D.ix), rearranging sentences (4.11C), and spelling in drafts (4.11D.xi).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_GARDEN = makeSet({
  id: 'g4-edit-garden',
  grade: 4,
  kind: 'editing',
  title: 'Our Butterfly Garden Project',
  intro: 'Sofia wrote this report about her class science project. Read the draft and look for the revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-garden-p',
    title: 'Planting for Pollinators',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last spring, our fourth-grade class decided to turn an unused patch of dry grass behind the school into a thriving butterfly haven.',
        'We learned in science class that migrating monarch butterflies need native nectar plants and milkweed to survive their long journey to Mexico.',
        'First, we cleared away weeds and tilled the soil, but we added three bags of rich organic compost.',
        'Then we planted native purple coneflower, Texas lantana, and bright orange butterfly weed.',
      ] },
      { kind: 'sentences', sentences: [
        'Our teacher Mr. Henderson teached us how to set up a shallow stone basin with pebbles and fresh water so bees and butterflies could drink safely.',
        'Within three weeks, green shoots sprouted across the garden bed.',
        'We were thrilled when the first golden monarch landed softly on a blossom.',
        'Next week, our class will celebrate earth day by inviting second graders to tour our garden.',
      ] },
      { kind: 'sentences', sentences: [
        'Working on this project showed us that small efforts can make a big differance for Texas wildlife.',
        'Caring for living plants helped every student understand our responsibility to nature.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.11D.viii', cites: [3],
      stem: 'Which coordinating conjunction should replace "but" in sentence 3 to show that adding compost went along with clearing weeds?',
      choices: [
        'and',
        ['or', '"Or" presents an alternative choice.'],
        ['nor', '"Nor" is used in negative pairings.'],
        ['so', '"So" indicates a direct consequence rather than another added step.'],
      ],
      answer: 0,
      explain: 'Clearing weeds and adding compost are two complementary actions in the preparation process, so the coordinating conjunction "and" is the appropriate choice.',
    }),
    inq({
      standard: 'rla:4.11D.ii', cites: [5],
      stem: 'Read sentence 5. Choose the correct irregular past-tense verb.',
      sentence: [
        'Our teacher Mr. Henderson ',
        { options: ['teached', 'taught', 'tought', 'teaching'], answer: 1 },
        ' us how to set up a shallow stone basin with pebbles and fresh water so bees and butterflies could drink safely.',
      ],
      explain: 'Teach is an irregular verb. Its past-tense form is taught, never "teached."',
    }),
    inq({
      standard: 'rla:4.11D.ix', cites: [8],
      stem: 'Read sentence 8. Choose the correct capitalization for the holiday.',
      sentence: [
        'Next week, our class will celebrate ',
        { options: ['earth day', 'Earth Day', 'Earth day', 'earth Day'], answer: 1 },
        ' by inviting second graders to tour our garden.',
      ],
      explain: 'Earth Day is a designated special holiday and event, so both words must be capitalized: Earth Day.',
    }),
    inq({
      standard: 'rla:4.11D.xi', cites: [9],
      stem: 'Read sentence 9. Choose the correct spelling of the word that completes the sentence.',
      sentence: [
        'Working on this project showed us that small efforts can make a big ',
        { options: ['differance', 'difference', 'diffrence', 'diference'], answer: 1 },
        ' for Texas wildlife.',
      ],
      explain: 'Dif-fer-ence: ends in -ence, not -ance: difference.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [1, 2],
      stem: 'What is the best way to combine sentences 1 and 2 for clarity and coherence?',
      choices: [
        'Last spring, our fourth-grade class turned an unused grass patch into a butterfly haven because we learned migrating monarchs need native plants to survive.',
        ['Our class turned grass into a garden, monarchs need milkweed to survive.', 'This creates a comma splice.'],
        ['Migrating monarchs need milkweed and last spring we turned grass into a garden.', 'This connects ideas loosely with "and" without highlighting the motivating reason.'],
        ['Because our class turned grass into a garden, monarchs migrate to Mexico.', 'This incorrectly claims that the school garden caused monarch migration.'],
      ],
      answer: 0,
      explain: 'Combining the sentences using "because" clearly shows that the classroom lesson about monarchs motivated the students to create the garden.',
    }),
    mcq({
      standard: 'rla:4.11B.i', cites: [6],
      stem: 'Sofia wants to add a transition to sentence 6 to show the passage of time. Which phrase works best?',
      choices: [
        'Soon after planting,',
        ['On the other hand,', '"On the other hand" signals contrast, which does not fit.'],
        ['For example,', '"For example" introduces an illustration, not a time sequence.'],
        ['In conclusion,', '"In conclusion" signals the end of the entire paper.'],
      ],
      answer: 0,
      explain: '"Soon after planting" smoothly establishes the chronological progression from planting seeds to seeing green sprouts emerge.',
    }),
  ],
});
