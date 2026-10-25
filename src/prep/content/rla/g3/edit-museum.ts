// Grade 3 editing draft: A student's draft about the Fort Worth Science Museum.
import { makeSet, mcq } from '../author.ts';

export const EDIT_MUSEUM = makeSet({
  id: 'g3-edit-museum',
  grade: 3,
  kind: 'editing',
  title: 'Discovering Dinosaurs in Fort Worth',
  intro: 'Maya wrote this report about her weekend trip to a science museum. Read her draft and look for any corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-museum-p',
    title: 'Discovering Dinosaurs in Fort Worth',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'On Saturday, my family drove to Fort Worth to visit the exciting regional science museum.',
        'I was eager to see the paleontology hall because I love prehistoric animal fossils and skeletons.',
        'Inside the exhibit hall, a massive fossil skeleton of an Acrocanthosaurus towered above visitors.',
        'Scientists discovered the fossilized footprints of this fierce Texas dinosaur along the Paluxy River.',
        'Next, we visited the DinoDig outdoor quarry where children can dig for authentic fossils.',
        'Our enthusiastic tour guide answered all our questions about prehistoric plant fossils.',
      ] },
      { kind: 'sentences', sentences: [
        'I brushed sand carefully away from a replica bone using a small wooden paintbrush.',
        'My little brother found a cast of a giant dinosaur tooth hidden under the gravel.',
        'We wanted to stay longer, but the museum staff announced they were closing for the evening.',
        'We bought a plastic dinosaur model in the museum gift shop before driving back home.',
        'Visiting the museum made me want to become a real fossil hunter when I grow up.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [3, 4],
      stem: 'Which supporting sentence should Maya add after sentence 3 to describe the Acrocanthosaurus skeleton in more detail?',
      choices: [
        'Its razor-sharp teeth were as long as butcher knives, and its huge claws looked ready to strike.',
        ['The admission tickets for adults cost twelve dollars each.', 'Ticket prices do not describe the dinosaur skeleton.'],
        ['I had peanut butter and jelly on white bread for lunch.', 'Lunch details are off topic.'],
        ['Fort Worth has many modern skyscrapers downtown.', 'City architecture is unrelated to the exhibit.'],
      ],
      answer: 0,
      explain: 'Describing the razor-sharp teeth and claws provides relevant, exciting visual details that bring the skeleton to life for the reader.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [8],
      stem: 'What is the function of the coordinating conjunction "but" in sentence 8: "We wanted to stay longer, but the museum staff announced they were closing for the evening"?',
      choices: [
        ['To show that two things are identical.', '"And" shows similarity; "but" shows contrast.'],
        'To connect two contrasting independent thoughts showing that their desire to stay conflicted with the museum closing.',
        ['To explain step-by-step cooking directions.', 'The sentence describes museum visiting hours.'],
        ['To list items in a grocery shopping list.', 'Conjunctions in compound sentences connect clauses.'],
      ],
      answer: 1,
      explain: '"But" connects two contrasting ideas: the family wanting to stay longer versus the museum having to close.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [4],
      stem: 'What change should be made if sentence 4 begins with the singular subject "A scientist" in the present tense?',
      choices: [
        ['Change "discovered" to "discovering"', '"Discovering" requires a helping verb.'],
        'Ensure the present-tense verb ends in -s: "A scientist discovers..."',
        ['Change "footprints" to "footprinted"', '"Footprints" is a plural noun, not a verb.'],
        ['Remove the word "fossilized"', 'Adjectives do not affect subject-verb agreement.'],
      ],
      answer: 1,
      explain: 'In present tense, a singular third-person subject ("A scientist") requires the verb form ending in -s ("discovers").',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [6],
      stem: 'In sentence 6, what is the role of the word "carefully"?',
      choices: [
        ['It is a noun naming a tool used for digging.', '"Paintbrush" is the tool; "carefully" is not a tool.'],
        'It is an adverb of manner describing how Maya brushed the sand away.',
        ['It is a preposition showing location.', '"From" is the preposition.'],
        ['It is a conjunction connecting two sentences.', 'It is an adverb modifying the verb "brushed."'],
      ],
      answer: 1,
      explain: '"Carefully" ends in -ly and describes the manner in which the action was performed (how Maya brushed the sand).',
    }),
    mcq({
      standard: 'rla:3.11D.vi', cites: [7],
      stem: 'In sentence 7, which phrase is a prepositional phrase showing where the dinosaur tooth was hidden?',
      choices: [
        '"under the gravel"',
        ['"My little brother"', 'This is the noun phrase subject of the sentence.'],
        ['"found a cast"', 'This is the verb and direct object.'],
        ['"giant dinosaur tooth"', 'This is the object noun phrase.'],
      ],
      answer: 0,
      explain: '"Under the gravel" starts with the preposition "under" and tells where the tooth cast was concealed.',
    }),
    mcq({
      standard: 'rla:3.11D.viii', cites: [8],
      stem: 'Which coordinating conjunction correctly combines the thoughts: "I brushed the bone, ___ my brother dug for teeth"?',
      choices: [
        ['or', '"Or" shows alternatives.'],
        ['so', '"So" indicates a cause-and-effect result.'],
        'and',
        ['because', '"Because" is a subordinating conjunction, not a coordinating conjunction.'],
      ],
      answer: 2,
      explain: '"And" coordinates two related, parallel actions happening alongside each other during the dig.',
    }),
  ],
});
