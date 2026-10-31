// Grade 3 editing draft: A student's draft about baking pan dulce with grandma.
import { makeSet, mcq } from '../author.ts';

export const EDIT_BAKING = makeSet({
  id: 'g3-edit-baking',
  grade: 3,
  kind: 'editing',
  title: 'Baking Sweet Bread with Abuela',
  intro: 'Mateo wrote this personal narrative about a weekend afternoon in the kitchen. Read his draft and look for any corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-baking-p',
    title: 'Baking Sweet Bread with Abuela',
    genre: 'fiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'On Sunday afternoon, I visited my grandmother to learn how to bake traditional Mexican sweet bread.',
        'Her cozy kitchen smelled delicious with pure vanilla extract and fragrant warm cinnamon.',
        'First, Abuela measured cups of white flour, sugar, and active yeast into a giant ceramic bowl.',
        'I stirred the warm dough carefully with a wooden spoon until it became smooth and stretchy.',
        'Next, we shaped the sweet dough into round balls and placed them on a greased baking sheet.',
      ] },
      { kind: 'sentences', sentences: [
        'We pressed sweet sugar paste on top of each bun and carved shell patterns with a butter knife.',
        "While the bread baked in the oven, we didn't leave the kitchen for even a single minute.",
        'When the golden conchas came out of the oven, they were wonderfully fluffy, sweet, and warm.',
        'Abuela poured two cups of hot chocolate, and we enjoyed our delicious homemade treats together.',
        'Baking with my grandmother taught me a wonderful family tradition that I will cherish forever.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [5, 6],
      stem: 'Which sensory detail should Mateo add after sentence 6 to describe the appearance of the conchas before baking?',
      choices: [
        'Pink and yellow toppings looked like seashells.',
        ['Abuela bought her metal baking sheet at a supermarket in San Antonio last year.', 'Where the pan was purchased does not describe the appearance of the bread.'],
        ['Ovens reach high temperatures of over three hundred degrees when baking bread.', 'Temperature numbers are not visual descriptions of the dough.'],
        ['White flour comes from ground wheat grains harvested by farmers in summer.', 'Wheat farming is unrelated to decorating the rolls.'],
      ],
      answer: 0,
      explain: 'Describing how the sugar toppings look like seashells provides vivid visual imagery explaining the traditional concha design.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [8, 9],
      stem: 'What is the best way to combine sentence 8 and sentence 9 for greater clarity and sentence variety?',
      choices: [
        ['The conchas came out, and Abuela poured hot chocolate, and we ate together happily.', 'This is a stringy, repetitive sentence.'],
        'When the warm conchas came out, Abuela poured hot chocolate to enjoy.',
        ['Because hot chocolate was poured into mugs, conchas came out of the oven fluffy.', 'Pouring hot chocolate did not cause the bread to bake.'],
        ['Homemade treats together enjoyed delicious warm conchas oven coming out quickly.', 'This phrasing is scrambled and confusing.'],
      ],
      answer: 1,
      explain: 'Using the introductory clause "When the warm conchas came out..." creates a fluent, clear complex sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [7],
      stem: 'Why is an apostrophe used in the word "didn\'t" in sentence 7?',
      choices: [
        ['To show that the cozy kitchen belongs to someone in the family', 'Kitchen possession is not indicated here.'],
        ['To make regular action words plural when describing the afternoon', 'Apostrophes are not used to form regular plurals.'],
        'To replace the missing letter in a contraction.',
        ['To show that the metal baking oven was set to very high heat', 'Punctuation does not measure heat.'],
      ],
      answer: 2,
      explain: 'In the contraction "didn\'t," the apostrophe replaces the omitted vowel "o" from "did not."',
    }),
    mcq({
      standard: 'rla:3.11D.vii', cites: [8],
      stem: 'In sentence 8, which word is the pronoun referring to the conchas?',
      choices: [
        ['"golden"', '"Golden" is an adjective.'],
        ['"fluffy"', '"Fluffy" is a descriptive adjective.'],
        ['"oven"', '"Oven" is a noun.'],
        '"they"',
      ],
      answer: 3,
      explain: '"They" is the third-person plural subject pronoun referring back to the freshly baked conchas.',
    }),
    mcq({
      standard: 'rla:3.11D.viii', cites: [9],
      stem: 'What is the function of the word "and" in sentence 9: "Abuela poured two cups of hot chocolate, and we enjoyed our delicious homemade treats together"?',
      choices: [
        ['It is a preposition showing the physical location of the kitchen table', 'Prepositions include words like in, on, at.'],
        'It joins two thoughts into a compound sentence.',
        ['It is an irregular past-tense verb showing what the characters did', 'It is a conjunction, not an action verb.'],
        ['It is a descriptive adjective modifying the hot chocolate in the mugs', '"Hot" describes the chocolate, not "and."'],
      ],
      answer: 1,
      explain: '"And" joins two complete clauses with a comma to form a compound sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [4],
      stem: 'In sentence 4, which word is an adverb of manner describing how Mateo stirred the dough?',
      choices: [
        ['"warm dough"', '"Warm" is an adjective modifying dough.'],
        ['"wooden spoon"', '"Wooden" is an adjective modifying spoon.'],
        '"carefully"',
        ['"smooth and stretchy"', '"Smooth" and "stretchy" are adjectives describing the dough.'],
      ],
      answer: 2,
      explain: '"Carefully" ends in -ly and describes the manner in which Mateo stirred the dough.',
    }),
  ],
});
