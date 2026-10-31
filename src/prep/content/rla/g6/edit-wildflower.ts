// Grade 6 editing draft: Lady Bird Johnson and Texas Wildflowers.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_WILDFLOWER = makeSet({
  id: 'g6-edit-wildflower',
  grade: 6,
  kind: 'editing',
  title: 'Ribbons of Color along Texas Roads',
  intro: 'Carlos wrote this report on roadside beautification in Texas. Read his paper and choose the best answers to the questions.',
  passages: [{
    id: 'g6-edit-wildflower-p',
    title: 'Ribbons of Color along Texas Roads',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Every spring, millions of enthusiastic motorists driving across Texas highways are greeted by brilliant, colorful blankets of native bluebonnets, Indian paintbrushes, and pink evening primroses.',
        'These stunning floral displays along state rights-of-way did not appear by sheer accident or good fortune.',
        'They are the living legacy of former First Lady Claudia "Lady Bird" Johnson, who dedicated much of her life to environmental conservation.',
      ] },
      { kind: 'sentences', sentences: [
        'Growing up in East Texas, Lady Bird developed a lifelong love for native plants and open woodlands.',
        'During the 1960s, she championed the Highway Beautification Act, which encouraged states to plant native wildflowers and clean up roadside junkyards.',
        'She deeply believed that natural beauty fed the human spirit and that tidy, scenic roadsides made highway travel far safer and more enjoyable for traveling families.',
      ] },
      { kind: 'sentences', sentences: [
        'In 1982, Lady Bird founded the National Wildflower Research Center in Austin on her seventieth birthday.',
        'The center conducts scientific research on drought-tolerant prairie grasses, it preserves endangered native plant species.',
        'Today, the Texas Department of Transportation sows more than thirty thousand pounds of wildflower seeds each year.',
        'Because native plants require less mowing and watering than imported turfgrass.',
        'These hardy native blooms save millions of taxpayer dollars every single year while providing vital seasonal nectar for native bees, birds, and migrating monarch butterflies.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.10D.viii', cites: [1],
      stem: 'What is the correct punctuation for the introductory phrase in sentence 1?',
      choices: [
        'Every spring, motorists driving across Texas are greeted by bluebonnets...',
        ['Every spring millions of motorists driving across state highways are greeted by brilliant blankets...', 'A comma is needed directly after the introductory time phrase "Every spring."'],
        ['Every, spring millions of motorists driving across state highways are greeted by brilliant blankets...', 'Do not place a comma between every and spring.'],
        ['Every spring; millions of motorists driving across Texas...', 'A semicolon cannot follow an introductory prepositional phrase.'],
      ],
      answer: 0,
      explain: 'Use a comma after an introductory prepositional time phrase ("Every spring,") to separate it clearly from the main clause.',
    }),
    mcq({
      standard: 'rla:6.10D.ii', cites: [4],
      stem: 'What change should be made in sentence 4 to maintain consistent verb tense?',
      choices: [
        ['Change **Growing** to **Growed**', 'Growing is an acceptable participle starting the introductory phrase.'],
        ['Change **developed** to **develops**', 'The biography is set in the past, so the past tense developed is correct.'],
        ['Change **developed** to **will develop**', 'Future tense contradicts the past timeframe of her childhood.'],
        'Make no change',
      ],
      answer: 3,
      explain: 'Sentence 4 correctly uses the past tense "developed" to describe events during Lady Bird Johnson\'s childhood.',
    }),
    mcq({
      standard: 'rla:6.10D.i', cites: [8],
      stem: 'Sentence 8 contains a comma splice. What is the best way to correct it?',
      choices: [
        ['The center conducts scientific research on prairie grasses it preserves endangered plant species.', 'Removing the comma creates a fused run-on sentence.'],
        'The center studies native prairie grasses, and it protects endangered plant species.',
        ['Because the center conducts scientific research on drought-tolerant prairie grasses.', 'This creates an incomplete dependent clause fragment.'],
        ['The center, conducting scientific research on drought-tolerant prairie grasses.', 'This lacks a main finite verb and creates a fragment.'],
      ],
      answer: 1,
      explain: 'A comma splice joining two independent clauses can be corrected by inserting a coordinating conjunction (such as "and") after the comma.',
    }),
    mcq({
      standard: 'rla:6.10D.i', cites: [10],
      stem: 'Sentence 10 is an incomplete sentence fragment. How can Carlos best repair it?',
      choices: [
        ['Because native plants require less mowing, and watering.', 'This remains an incomplete dependent clause fragment.'],
        'Because native plants need less water, they save highway maintenance costs.',
        ['Native plants requiring less mowing and watering than imported commercial turfgrass.', 'This participial phrase lacks a complete predicate.'],
        ['Less mowing and watering along highways than imported turfgrass because of native plants.', 'This is an ungrammatical sentence fragment.'],
      ],
      answer: 1,
      explain: 'Adding an independent clause ("they save maintenance costs") completes the thought started by the subordinating conjunction "Because."',
    }),
    inq({
      standard: 'rla:6.10D.ix', cites: [3],
      stem: 'Read sentence 3. Choose the correct possessive pronoun to complete the thought.',
      sentence: [
        'They are the living legacy of former First Lady Claudia "Lady Bird" Johnson, who dedicated much of ',
        { options: ['her', 'hers', 'their', 'she\'s'], answer: 0 },
        ' life to environmental conservation.',
      ],
      explain: 'Use the singular possessive pronoun "her" to refer to Lady Bird Johnson.',
    }),
    mcq({
      standard: 'rla:6.10C', cites: [11],
      stem: 'Carlos wants to replace the word **save** in sentence 11 with a more descriptive verb. Which word best fits the context?',
      choices: [
        'conserve',
        ['stash', 'Stash is informal and suggests hiding something secretly.'],
        ['waste', 'Waste has the opposite meaning.'],
        ['accumulate', 'Accumulate implies gathering things, not managing public resources wisely.'],
      ],
      answer: 0,
      explain: '"Conserve" carries a precise, positive connotation appropriate for environmental and fiscal stewardship.',
    }),
  ],
});
