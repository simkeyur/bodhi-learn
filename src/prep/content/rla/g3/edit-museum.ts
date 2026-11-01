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
        'Its curved neck held a massive skull lined with jagged, knife-like teeth.',
        ['General admission tickets for adults cost twelve dollars at the museum entrance.', 'Ticket prices describe admissions rather than the appearance of the prehistoric skeleton.'],
        ['The museum cafeteria serves pizza slices and bottled fruit juice during lunch hours.', 'Food options in the cafeteria do not describe dinosaur fossils.'],
        ['Many interstate highways connect downtown Fort Worth to neighboring cities.', 'Highway routes through the city are unrelated to the dinosaur exhibit.'],
      ],
      answer: 0,
      explain: 'Describing the sharp teeth adds engaging, vivid detail about the dinosaur skeleton.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [8],
      stem: 'What is the function of the coordinating conjunction "but" in sentence 8?',
      choices: [
        ['To explain the exact time of day when the museum staff members arrive to open the exhibits.', 'The sentence explains closing time, but "but" connects the conflict between wanting to stay and leaving.'],
        'To connect two contrasting thoughts: wanting to stay longer and having to leave.',
        ['To join two identical ideas that happen in the exact same sequence.', '"But" signals a contrast between opposing ideas rather than joining identical ones.'],
        ['To show a cause-and-effect reason why the family drove to Fort Worth.', '"Because" or "so" indicates cause and effect; "but" signals a contrast.'],
      ],
      answer: 1,
      explain: '"But" connects two contrasting thoughts: wanting to stay versus having to leave because the museum closed.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [4],
      stem: 'What change should be made if sentence 4 begins with the singular subject "A scientist" in the present tense?',
      choices: [
        ['Change the verb discovered to the present participle discovering', 'A present participle like "discovering" requires an auxiliary helping verb to function as the predicate.'],
        ['Change the plural noun footprints to the verb form footprinted', '"Footprints" is a plural noun naming what was found and should not be changed into a verb.'],
        'Change the verb discovered to the present-tense form discovers',
        ['Change the proper noun Texas to the plural adjective Texan', '"Texas dinosaur" is grammatically correct and does not affect subject-verb agreement.'],
      ],
      answer: 2,
      explain: 'In present tense, a singular third-person subject ("A scientist") requires the verb form ending in -s ("discovers").',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [6],
      stem: 'In sentence 6, what part of speech is the word "carefully" and how is it used?',
      choices: [
        ['It is an adjective that describes the small size of the wooden paintbrush.', '"Small" and "wooden" describe the paintbrush; "carefully" describes how Maya brushed.'],
        ['It is a preposition that indicates the physical location of the replica bone.', '"Carefully" expresses the manner of an action rather than a spatial relationship.'],
        ['It is a coordinating conjunction that connects two complete thoughts in the sentence.', '"Carefully" is an adverb of manner, not a conjunction joining clauses.'],
        'It is an adverb that modifies the verb "brushed" to show how Maya removed the sand.',
      ],
      answer: 3,
      explain: '"Carefully" ends in -ly and describes the manner in which the action was performed (how Maya brushed the sand).',
    }),
    mcq({
      standard: 'rla:3.11D.vi', cites: [7],
      stem: 'In sentence 7, which phrase is a prepositional phrase showing where the dinosaur tooth was hidden?',
      choices: [
        ['the verb phrase found a cast', '"Found a cast" contains the predicate verb and its object, not a prepositional phrase.'],
        'the prepositional phrase under the gravel',
        ['the complete subject My little brother', '"My little brother" is the noun subject of the sentence.'],
        ['the direct object a giant dinosaur tooth', '"A giant dinosaur tooth" is a noun phrase functioning as the object of the preposition "of."'],
      ],
      answer: 1,
      explain: '"Under the gravel" starts with the preposition "under" and tells where the tooth cast was found.',
    }),
    mcq({
      standard: 'rla:3.11D.viii', cites: [8],
      stem: 'Which coordinating conjunction correctly combines the two related thoughts: "I brushed the bone, ___ my brother dug for teeth"?',
      choices: [
        ['or', '"Or" introduces alternative options rather than two activities happening together.'],
        ['so', '"So" indicates a cause-and-effect relationship between the two actions.'],
        ['but', '"But" signals a conflict or contrast between ideas rather than parallel tasks.'],
        'and',
      ],
      answer: 3,
      explain: '"And" coordinates two related, parallel actions happening alongside each other during the dig.',
    }),
  ],
});
