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
        'The pastel pink and yellow sugar toppings looked just like colorful seashells washed up on the seashore.',
        ['Abuela bought her baking sheet at a supermarket in San Antonio.', 'Where the pan was purchased does not describe the appearance of the bread.'],
        ['Ovens reach temperatures of over three hundred degrees.', 'Temperature numbers are not visual descriptions of the dough.'],
        ['Flour comes from ground wheat grains.', 'Wheat farming is unrelated to decorating the rolls.'],
      ],
      answer: 0,
      explain: 'Describing the pastel sugar toppings looking like colorful seashells provides vivid visual imagery explaining the traditional concha design.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [8, 9],
      stem: 'What is the best way to combine sentence 8 and sentence 9 for greater clarity and sentence variety?',
      choices: [
        ['The conchas came out, and Abuela poured hot chocolate, and we ate.', 'This is a repetitive, childish run-on sentence.'],
        'As soon as the warm, fluffy conchas came out of the oven, Abuela poured hot chocolate so we could enjoy our homemade treats together.',
        ['Because hot chocolate was poured, conchas came out of the oven fluffy and sweet.', 'Pouring hot chocolate did not cause the bread to bake.'],
        ['Homemade treats together enjoyed delicious conchas oven coming out.', 'This phrasing is scrambled and confusing.'],
      ],
      answer: 1,
      explain: 'Using the introductory dependent clause "As soon as..." creates a fluent, clear, and cohesive complex sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [7],
      stem: 'Why is an apostrophe used in the word "didn\'t" in sentence 7?',
      choices: [
        ['To show that the kitchen belongs to someone.', 'Kitchen possession is not indicated here.'],
        'To replace the missing letter "o" in the contraction of "did not."',
        ['To make the word plural.', 'Apostrophes are not used to form regular plurals.'],
        ['To show that the oven is very hot.', 'Punctuation does not measure heat.'],
      ],
      answer: 1,
      explain: 'In the contraction "didn\'t," the apostrophe replaces the omitted vowel "o" from the word "not."',
    }),
    mcq({
      standard: 'rla:3.11D.vii', cites: [8],
      stem: 'In sentence 8, which word is the pronoun referring to the conchas?',
      choices: [
        ['"golden"', '"Golden" is an adjective.'],
        '"they"',
        ['"fluffy"', '"Fluffy" is a descriptive adjective.'],
        ['"oven"', '"Oven" is a noun.'],
      ],
      answer: 1,
      explain: '"They" is the third-person plural subject pronoun referring back to the freshly baked conchas.',
    }),
    mcq({
      standard: 'rla:3.11D.viii', cites: [9],
      stem: 'What is the function of the word "and" in sentence 9: "Abuela poured two cups of hot chocolate, and we enjoyed our delicious homemade treats together"?',
      choices: [
        'It is a coordinating conjunction joining two independent clauses into a compound sentence.',
        ['It is a preposition showing location.', 'Prepositions include words like in, on, at.'],
        ['It is an irregular verb.', 'It is a conjunction, not an action verb.'],
        ['It is an adjective describing the hot chocolate.', '"Hot" describes the chocolate, not "and."'],
      ],
      answer: 0,
      explain: '"And" joins two complete sentences with a comma to form a compound sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [4],
      stem: 'In sentence 4, which word is an adverb of manner describing how Mateo stirred the dough?',
      choices: [
        ['"warm"', '"Warm" is an adjective modifying dough.'],
        ['"wooden"', '"Wooden" is an adjective modifying spoon.'],
        '"carefully"',
        ['"smooth"', '"Smooth" is a predicate adjective.'],
      ],
      answer: 2,
      explain: '"Carefully" ends in -ly and describes the manner in which the stirring was performed.',
    }),
  ],
});
