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
      stem: 'Which conjunction should replace "but" in sentence 3 to show adding compost accompanied clearing weeds?',
      choices: [
        ['or, to indicate a choice between two possibilities', 'Or presents an alternative choice rather than adding a connected action.'],
        'and, to show an additional action in the process',
        ['nor, to connect two negative statements together', 'Nor is used with negative conditions rather than positive steps.'],
        ['yet, to emphasize an unexpected contrast between steps', 'Yet signals contrast, but adding compost works together with tilling soil.'],
      ],
      answer: 1,
      explain: 'Clearing weeds and adding compost are complementary actions in the preparation process, so the coordinating conjunction "and" is the appropriate choice.',
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
        'Last spring, our class planted a butterfly garden because migrating monarchs need native nectar plants to survive.',
        ['Our class turned grass into a garden, migrating monarchs need native nectar plants to survive their long journey to Mexico.', 'Joining two independent clauses with only a comma creates a comma splice.'],
        ['Migrating monarchs need milkweed and last spring we turned grass into a garden behind our school to help insects.', 'Connecting clauses loosely with "and" fails to highlight the logical connection between the ideas.'],
        ['Because our class turned grass into a garden, migrating monarchs flew to Mexico during their annual fall trip.', 'This sentence incorrectly claims that planting the garden caused monarch migration.'],
      ],
      answer: 0,
      explain: 'Combining the ideas using "because" clearly shows that learning about monarch needs inspired the class to plant the garden.',
    }),
    mcq({
      standard: 'rla:4.11B.i', cites: [7],
      stem: 'Sofia wants to add a transition to sentence 7 to show the passage of time. Which phrase works best?',
      choices: [
        ['In contrast,', 'This signals contrast rather than chronological sequence.'],
        'Soon after,',
        ['To summarize,', 'This signals a concluding summary rather than a time progression.'],
        ['For instance,', 'This introduces an illustrative example rather than the passage of time.'],
      ],
      answer: 1,
      explain: '"Soon after" effectively signals the passage of time leading up to the arrival of the monarch.',
    }),
  ],
});
