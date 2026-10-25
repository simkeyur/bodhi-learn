// Grade 6 editing draft: Texas State Aquarium overnight.
import { makeSet, mcq } from '../author.ts';

export const EDIT_AQUARIUM = makeSet({
  id: 'g6-edit-aquarium',
  grade: 6,
  kind: 'editing',
  title: 'Sleeping with the Sharks',
  intro: 'Daniel wrote this personal narrative about a school overnight at the Texas State Aquarium. Read the draft and choose the best answers to the questions.',
  passages: [{
    id: 'g6-edit-aquarium-p',
    title: 'Sleeping with the Sharks',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last October, our entire sixth-grade science class had the thrilling opportunity to spend an unforgettable night at the Texas State Aquarium in Corpus Christi.',
        'After the general public left for the evening, an enthusiastic marine educator led our small group behind the scenes to view the massive saltwater filtration systems and holding tanks.',
        'We watched professional biologists prepare feeding buckets of fresh diced squid, Gulf shrimp, and small capelin fish for the hungry stingrays and bonnethead sharks.',
      ] },
      { kind: 'sentences', sentences: [
        'Around nine o\'clock, we rolled out our sleeping bags right in front of the Caribbean Sea exhibit, a massive sixty-eight-foot acrylic viewing window.',
        'Watching sandbar sharks and green sea turtles glide through the illuminated blue water had a calming affect on all of us.',
        'The gentle, steady sound of bubbling water from the giant filtration and aeration pumps was remarkably soothing.',
        'Whenever a nurse shark rested near the glass, we could see its gills pulsing rhythmically.',
      ] },
      { kind: 'sentences', sentences: [
        'The row of sleeping bags on the carpet were quiet long before midnight.',
        'At sunrise, a giant grouper swam right up to the glass and seemed to stare directly into my eyes.',
        'Sleeping peacefully beside the magnificent marine habitat gave me an enduring, deep appreciation for the fragile beauty and underwater mystery of Gulf Coast sea life.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.10D.ix', cites: [5],
      stem: 'What change should be made in sentence 5?',
      choices: [
        ['Change **acrylic** to **acrilic**', 'Acrylic is spelled correctly.'],
        ['Change **illuminated** to **iluminated**', 'Illuminated is spelled correctly with double l.'],
        'Change **affect** to **effect**',
        ['Change **calming** to **calm**', 'Calming is the correct participial adjective modifying effect.'],
      ],
      answer: 2,
      explain: 'In this context, the noun meaning a result or influence is "effect." "Affect" is typically a verb.',
    }),
    mcq({
      standard: 'rla:6.10D.iv', cites: [8],
      stem: 'What change should be made in sentence 8 to correct subject-verb agreement?',
      choices: [
        ['Change **sleeping bags** to **sleep bags**', 'Sleeping bags is the correct compound noun.'],
        'Change **were** to **was**',
        ['Change **quiet** to **quietly**', 'Quiet is a predicate adjective modifying row.'],
        ['Change **midnight** to **mid-night**', 'Midnight is written as a solid compound word.'],
      ],
      answer: 1,
      explain: 'The subject of the sentence is "row" (singular), not "sleeping bags." A singular subject requires the singular verb "was."',
    }),
    mcq({
      standard: 'rla:6.10D.viii', cites: [3],
      stem: 'What is the correct punctuation for the items in a series in sentence 3?',
      choices: [
        'We watched professional biologists prepare feeding buckets of fresh diced squid, Gulf shrimp, and small capelin fish for the hungry stingrays and bonnethead sharks.',
        ['We watched biologists prepare feeding buckets of fresh squid shrimp and capelin fish...', 'Commas are required between items in a series.'],
        ['We watched biologists prepare feeding buckets, of fresh squid, shrimp, and capelin fish...', 'Do not place an unnecessary comma after buckets.'],
        ['We watched biologists prepare feeding buckets of fresh squid; shrimp; and capelin fish...', 'Items in a simple list use commas, not semicolons.'],
      ],
      answer: 0,
      explain: 'Sentence 3 correctly uses commas to separate items in a series of three items ("squid, shrimp, and capelin fish").',
    }),
    mcq({
      standard: 'rla:6.10D.i', cites: [7],
      stem: 'Which statement accurately describes the grammatical structure of sentence 7?',
      choices: [
        'It is a complex sentence that begins with a dependent clause ("Whenever a nurse shark rested near the glass,") followed by an independent clause.',
        ['It is a compound sentence joined by a coordinating conjunction.', 'There is no coordinating conjunction (and, but, so) joining independent clauses.'],
        ['It is a sentence fragment lacking a subject.', 'It contains both a dependent subject and an independent subject (shark, we).'],
        ['It is a run-on sentence requiring a semicolon.', 'The sentence is correctly punctuated with a comma after the introductory clause.'],
      ],
      answer: 0,
      explain: 'Sentence 7 is a properly constructed complex sentence beginning with a subordinating time conjunction ("Whenever") and punctuated with a comma.',
    }),
    mcq({
      standard: 'rla:6.10B.ii', cites: [9],
      stem: 'Daniel wants to add a vivid sensory detail after sentence 9. Which sentence best achieves this goal?',
      choices: [
        ['The aquarium ticket cost fifteen dollars per student.', 'Ticket pricing is a mundane administrative detail.'],
        'Its mottled gray scales reflected the morning light, and its broad mouth opened and closed with slow, ancient dignity.',
        ['Many fish species are found in warm tropical ocean waters.', 'This is a generic textbook statement lacking personal narrative vividness.'],
        ['My friend Jack brought three extra pillows from home.', 'Pillows do not describe the memorable encounter with the giant grouper.'],
      ],
      answer: 1,
      explain: 'This sentence adds specific visual description of the grouper\'s scales and slow movements, deepening the reader\'s sensory experience.',
    }),
    mcq({
      standard: 'rla:6.10C', cites: [6],
      stem: 'Daniel wants to combine sentences 5 and 6 to eliminate repetition. Which revision is most effective?',
      choices: [
        ['Watching sandbar sharks and sea turtles was calming, and the sound of bubbles from aeration pumps was soothing.', 'This still repeats two similar ideas (calming and soothing) in a clumsy compound sentence.'],
        'Both the graceful gliding of sea turtles and the gentle bubbling of the aeration pumps lulled us to sleep.',
        ['Because bubbles made sound, so the sea turtles glided through water.', 'This creates an illogical cause-and-effect connection.'],
        ['The bubbles were soothing, while watching turtles was also soothing too.', 'This is repetitive and informal.'],
      ],
      answer: 1,
      explain: 'This revision combines the visual element (gliding turtles) and auditory element (bubbling pumps) into a single, elegant sentence.',
    }),
  ],
});
