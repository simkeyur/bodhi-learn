// Grade 5 revising and editing: a student's informational report with planted errors, one per question.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_HONEYBEES = makeSet({
  id: 'g5-edit-honeybees',
  grade: 5,
  kind: 'editing',
  title: 'How Honeybees Make Honey',
  intro: 'Marco wrote this report for science class. Read the report and look for the revisions and corrections it needs. Then answer the questions.',
  passages: [{
    id: 'g5-edit-honeybees-p',
    title: 'How Honeybees Make Honey',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Honeybees are some of the hardest-working insects on Earth.',
        'A colony of bees work together to make the honey people spread on toast.',
      ] },
      { kind: 'sentences', sentences: [
        'When a worker bee finds flowers, it drinks a sweet liquid called nectur.',
        'It stores the nectar in a special stomach and flies back to the hive.',
        'There, it passes the nectar to other bees, who spread it into the wax cells of the honeycomb.',
        'Then the bees in the hive fans the nectar with their wings to dry it out.',
        'As the water dries up, the nectar slowly becomes thick, sticky honey.',
        'My grandfather drives a red truck to work every day.',
      ] },
      { kind: 'sentences', sentences: [
        'Finally, the bees seal each cell with a cap of wax.',
        'Honey can last for a very long time.',
        'Ancient Egyptians eated honey and even used it as medicine.',
      ] },
      { kind: 'sentences', sentences: [
        'The next time you spread honey on your toast, think of the thousands of tiny workers who made it.',
      ] },
    ],
  }],
  items: [
    inq({
      standard: 'rla:5.11D.iii', cites: [2],
      stem: 'Read sentence 2. Choose the verb that correctly completes the sentence.',
      sentence: [
        'A colony of bees ',
        { options: ['work', 'works', 'are working', 'have worked'], answer: 1 },
        ' together to make the honey people spread on toast.',
      ],
      explain: 'Colony is a collective noun: it names a group as one unit, so it takes a singular verb, works. "Of bees" doesn\'t change the subject.',
    }),
    inq({
      standard: 'rla:5.2B.i', cites: [3],
      stem: 'Read sentence 3. Choose the correct spelling.',
      sentence: [
        'When a worker bee finds flowers, it drinks a sweet liquid called ',
        { options: ['nectur', 'nectar', 'nectir', 'necter'], answer: 1 },
        '.',
      ],
      explain: 'Nec-tar: the second syllable is r-controlled and spelled ar. The word appears again in sentence 4, spelled correctly.',
    }),
    inq({
      standard: 'rla:5.11D.vi', cites: [6],
      stem: 'Read sentence 6. Choose the verb that correctly completes the sentence.',
      sentence: [
        'Then the bees in the hive ',
        { options: ['fans', 'fan', 'is fanning', 'has fanned'], answer: 1 },
        ' the nectar with their wings to dry it out.',
      ],
      explain: 'The subject is bees, not hive. "In the hive" is a prepositional phrase. Bees is plural, so the verb is fan.',
    }),
    mcq({
      standard: 'rla:5.11C', cites: [8],
      stem: 'Which sentence should be deleted because it does not belong in the report?',
      choices: [
        ['Sentence 4', 'This explains a step in making honey.'],
        ['Sentence 7', 'This explains how nectar becomes honey.'],
        'Sentence 8',
        ['Sentence 9', 'This explains the last step.'],
      ],
      answer: 2,
      explain: 'The report explains how bees make honey. Sentence 8, about a grandfather\'s red truck, has nothing to do with that topic.',
    }),
    mcq({
      standard: 'rla:5.11B.ii', cites: [10],
      stem: 'Marco wants to add a sentence after sentence 10 to explain why honey lasts so long. Which sentence would best do this?',
      choices: [
        'Honey has very little water in it, so germs that spoil food have trouble growing in it.',
        ['Honey tastes good in tea.', 'This doesn\'t explain why honey lasts.'],
        ['Some people are allergic to bee stings.', 'This is off topic.'],
        ['Honey can last for a really, really long time.', 'This repeats sentence 10 without explaining it.'],
      ],
      answer: 0,
      explain: 'The best addition gives a specific fact that explains the idea in sentence 10: honey has so little water that germs can\'t easily grow.',
    }),
    inq({
      standard: 'rla:5.11D.ii', cites: [11],
      stem: 'Read sentence 11. Choose the correct verb.',
      sentence: [
        'Ancient Egyptians ',
        { options: ['eated', 'ate', 'eaten', 'eat'], answer: 1 },
        ' honey and even used it as medicine.',
      ],
      explain: 'Eat is an irregular verb. Its past tense is ate.',
    }),
  ],
});
