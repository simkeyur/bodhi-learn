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
        'The bright pink and yellow sugar paste looked like delicate seashells pressed into the dough.',
        ['Metal baking pans should always be greased carefully with butter or cooking oil before baking sweet bread.', 'Cooking instructions explain kitchen procedure rather than providing vivid sensory description.'],
        ['Abuela keeps her ceramic mixing bowls inside a wooden cabinet next to the refrigerator.', 'Describing cabinet storage provides kitchen layout facts rather than visual sensory details.'],
        ['Flour is often produced in large mills from wheat grown on North Texas farms.', 'Farming details about wheat production are unrelated to decorating the sweet buns.'],
      ],
      answer: 0,
      explain: 'Describing how the sugar toppings look like seashells provides vivid visual imagery explaining the traditional concha design.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [8, 9],
      stem: 'What is the best way to combine sentence 8 and sentence 9 for greater clarity and sentence variety?',
      choices: [
        ['The conchas came out of the oven, and Abuela poured hot chocolate, and we sat together and ate them.', 'Repeating "and" multiple times creates a stringy, repetitive sentence structure.'],
        'When the warm, fluffy conchas came out of the oven, Abuela poured hot chocolate so we could enjoy our treats together.',
        ['Because Abuela poured two cups of hot chocolate, the conchas came out of the oven sweet and warm.', 'Pouring hot chocolate did not cause the bread in the oven to become sweet and warm.'],
        ['Baking conchas in the oven, hot chocolate was poured by Abuela into two ceramic mugs on the table.', 'The introductory participial phrase illogically modifies "hot chocolate" instead of the bakers.'],
      ],
      answer: 1,
      explain: 'Using the introductory clause "When the warm conchas came out..." creates a fluent, clear complex sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [7],
      stem: 'Why is an apostrophe used in the word "didn\'t" in sentence 7?',
      choices: [
        ['To indicate that the kitchen belongs to Mateo\'s grandmother Abuela.', '"Didn\'t" is a negative contraction of two words, not a possessive noun showing ownership.'],
        ['To form the plural form of the past-tense action word "did".', 'Apostrophes are used for contractions and possession, never to make verbs plural.'],
        'To show where the letter "o" was left out when combining "did" and "not" into a contraction.',
        ['To signal that the action in the oven happened very quickly.', 'Punctuation marks reflect grammatical structure rather than measuring physical speed.'],
      ],
      answer: 2,
      explain: 'In the contraction "didn\'t," the apostrophe replaces the omitted vowel "o" from "did not."',
    }),
    mcq({
      standard: 'rla:3.11D.vii', cites: [8],
      stem: 'In sentence 8, which word is the pronoun that refers back to the conchas?',
      choices: [
        ['the descriptive adjective golden', '"Golden" is an adjective that describes the color of the conchas, not a pronoun.'],
        ['the predicate adjective fluffy', '"Fluffy" is an adjective describing texture rather than a pronoun replacing a noun.'],
        ['the common noun oven', '"Oven" is a concrete noun naming the cooking appliance.'],
        'the subject pronoun they',
      ],
      answer: 3,
      explain: '"They" is the third-person plural subject pronoun referring back to the freshly baked conchas.',
    }),
    mcq({
      standard: 'rla:3.11D.viii', cites: [9],
      stem: 'What is the function of the word "and" in sentence 9: "Abuela poured two cups of hot chocolate, and we enjoyed our delicious homemade treats together"?',
      choices: [
        'It is a coordinating conjunction that connects two independent clauses into a compound sentence.',
        ['It is a preposition that shows the physical direction the hot chocolate was poured.', '"And" is a conjunction connecting clauses, not a preposition indicating direction.'],
        ['It is an irregular past-tense verb showing what the characters did in the kitchen.', '"And" is a coordinating conjunction linking ideas, not an action verb.'],
        ['It is an adjective that describes the sweet flavor of the homemade treats.', '"And" connects sentence parts rather than describing sensory flavors.'],
      ],
      answer: 0,
      explain: '"And" joins two complete clauses with a comma to form a compound sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [4],
      stem: 'In sentence 4, which word is an adverb of manner describing how Mateo stirred the dough?',
      choices: [
        ['the adjective warm', '"Warm" describes the temperature of the dough rather than how Mateo stirred it.'],
        ['the noun phrase wooden spoon', '"Wooden spoon" names the utensil used rather than describing the manner of stirring.'],
        'the adverb carefully',
        ['the compound adjective smooth and stretchy', '"Smooth and stretchy" describes how the dough felt, not the manner of the action.'],
      ],
      answer: 2,
      explain: '"Carefully" ends in -ly and describes the manner in which Mateo stirred the dough.',
    }),
  ],
});
