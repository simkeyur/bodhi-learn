// Grade 6 editing draft: Cafeteria composting.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_RECYCLE = makeSet({
  id: 'g6-edit-recycle',
  grade: 6,
  kind: 'editing',
  title: 'Turn Scraps into Soil',
  intro: 'Gabriel wrote a proposal for a cafeteria composting program at Lamar Middle School. Read the text and choose the best answers to the questions.',
  passages: [{
    id: 'g6-edit-recycle-p',
    title: 'Turn Scraps into Soil',
    genre: 'persuasive',
    blocks: [
      {
        kind: 'sentences', sentences: [
          'Every single day at lunchtime, busy students at Lamar Middle School discard hundreds of pounds of uneaten food scraps into heavy landfill trash cans.',
          'Apple cores, banana peels, and crusts from sandwich bread are hauled away to city dumps, where they decompose without oxygen and release potent greenhouse gases.',
          'Instead of burying organic waste, our school should implement a cafeteria composting program.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Composting is an efficient, natural biological process that rapidly converts kitchen and garden organic waste into rich, dark, nutrient-dense soil conditioner.',
          'By placing green collection buckets beside the cafeteria tray return stations, student volunteers can easily separate fruit and vegetable scraps from plastic wrappers.',
          'The science department could use the resulting compost in our campus raised-bed gardens; furthermore, excess soil could be donated to the community park.',
          'The environmental club, in partnership with the national junior honor society, has already agreed to supervise the collection bins each week.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Some administrators worry that outdoor compost tumblers will attract insects or unpleasant odors.',
          'Modern enclosed tumbling bins prevent pests from entering.',
          'Regularly rotating the bin keeps the decomposing matter well-aerated and sweet-smelling.',
          'Adopting a schoolwide composting program will teach our middle school students practical environmental responsibility and save our school district substantial money on monthly commercial waste disposal fees.',
        ]
      },
    ],
  }],
  items: [
    inq({
      standard: 'rla:6.10D.vii', cites: [7],
      stem: 'Read sentence 7. Choose the correct capitalization for the name of the student group.',
      sentence: [
        'The environmental club, in partnership with the ',
        { options: ['national junior honor society', 'National Junior honor society', 'National Junior Honor Society', 'National junior honor Society'], answer: 2 },
        ', has already agreed to supervise the collection bins each week.',
      ],
      explain: 'National Junior Honor Society is a formal proper noun naming an official national student organization, so all four words are capitalized.',
    }),
    mcq({
      standard: 'rla:6.10D.iii', cites: [6],
      stem: 'Which conjunctive adverb is used correctly in sentence 6 to add an additional supporting benefit?',
      choices: [
        'furthermore,',
        ['as a consequence,', 'As a consequence implies a direct result rather than adding a second related benefit.'],
        ['otherwise,', 'Otherwise indicates a penalty or negative consequence.'],
        ['however,', 'However signals a contradiction, whereas donating soil complements using it in school gardens.'],
      ],
      answer: 0,
      explain: '"Furthermore," preceded by a semicolon and followed by a comma, smoothly adds another positive outcome of the composting program.',
    }),
    mcq({
      standard: 'rla:6.10D.vi', cites: [5],
      stem: 'What is the function of the subordinating phrase in sentence 5?',
      choices: [
        'It tells how student volunteers will collect food scraps.',
        ['It lists the scientific Latin names of trees native to Central Texas.', 'The phrase discusses cafeteria tray return stations, not trees.'],
        ['It asks the principal to cancel afternoon classes.', 'No class cancellations are requested.'],
        ['It argues that plastic wrappers and utensils should be buried in raised beds.', 'The sentence specifically says to separate food scraps from plastic.'],
      ],
      answer: 0,
      explain: 'The introductory phrase "By placing green collection buckets..." establishes the method and location for separating food scraps.',
    }),
    mcq({
      standard: 'rla:6.10C', cites: [9, 10],
      stem: 'What is the most effective way to combine sentences 9 and 10 to improve sentence flow?',
      choices: [
        ['Modern enclosed tumbling bins prevent pests from entering, regularly rotating the bin keeps the decomposing matter well-aerated.', 'This creates a comma splice between two independent clauses.'],
        'Modern enclosed bins block pests, while regular rotation keeps the compost aerated and odor-free.',
        ['Because modern enclosed tumbling bins prevent pests, but rotating keeps matter aerated.', 'Using because and but together creates an ungrammatical structure.'],
        ['Modern enclosed tumbling bins prevent pests from entering although rotating the bin keeps it sweet-smelling.', 'Although incorrectly suggests that aeration opposes pest prevention.'],
      ],
      answer: 1,
      explain: 'Joining the clauses with "while regular rotation keeps..." creates a balanced complex sentence that highlights both design advantages without repetition.',
    }),
    mcq({
      standard: 'rla:6.10B.i', cites: [8],
      stem: 'Which transitional word should Gabriel add to the beginning of sentence 8 to acknowledge a counterargument?',
      choices: [
        'Admittedly,',
        ['Consequently,', 'Consequently shows a direct result, not an acknowledged concern.'],
        ['Similarly,', 'Similarly shows an agreement, but sentence 8 introduces a doubt.'],
        ['Finally,', 'Finally is for concluding steps, not introducing an opposing worry.'],
      ],
      answer: 0,
      explain: '"Admittedly," signals that the writer is acknowledging a legitimate concern before offering a reassuring rebuttal.',
    }),
    mcq({
      standard: 'rla:6.10D.v', cites: [2],
      stem: 'What change, if any, should be made to the pronoun in sentence 2?',
      choices: [
        ['Change **they** to **he**', 'He is singular and masculine, whereas the antecedent is plural food scraps.'],
        ['Change **they** to **it**', 'The antecedent (cores, peels, crusts) is plural, requiring they.'],
        'Make no change',
        ['Change **they** to **them**', 'They is the correct subject pronoun for the dependent clause.'],
      ],
      answer: 2,
      explain: 'The plural pronoun "they" correctly agrees with its plural compound antecedents ("Apple cores, banana peels, and crusts").',
    }),
  ],
});
