// Grade 6 editing draft: Space Center Houston.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SPACE = makeSet({
  id: 'g6-edit-space',
  grade: 6,
  kind: 'editing',
  title: 'Mission to Houston',
  intro: 'Marcus wrote this paper about his science club trip to Space Center Houston. Read the paper and look for the revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g6-edit-space-p',
    title: 'A Giant Leap for Our Science Club',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last Friday, twenty members of the Travis Middle School science club boarded a bus for a field trip to space center houston.',
        'We had been raising funds all semester by selling commemorative solar system bookmarks and washing cars on Saturday mornings.',
        'Our excitement grew as we approached the visitor center and saw the massive shuttle replica mounted on top of a historic Boeing 747 aircraft.',
      ] },
      { kind: 'sentences', sentences: [
        'First, we visited the Astronaut Gallery, where authentic spacesuits from the Mercury, Gemini, and Apollo programs were displayed behind glass.',
        'I marvelled at how bulky the lunar moonwalking suit appeared compared to the sleek suits astronauts wear today.',
        'Next, our tour guide led us into the historic Apollo Mission Control Center, which was recently restored to look exactly as it did during the 1969 moon landing.',
        'Old computer consoles lined the floor with rotary phones, green-screen monitors, and retro coffee mugs on the desks.',
      ] },
      { kind: 'sentences', sentences: [
        'In the afternoon, our group walked through the massive Saturn V rocket building.',
        'The rocket was laying on its side.',
        'The rocket stretched longer than a football field from engine nozzles to escape tower.',
        'Standing beneath the five giant F-1 engines, the sheer scale of human ingenuity made everyone speak in quiet whispers.',
        'Our visit to the center showed us that space exploration requires immense teamwork and courage.',
      ] },
    ],
  }],
  items: [
    inq({
      standard: 'rla:6.10D.vii', cites: [1],
      stem: 'Read sentence 1. Choose the correct way to write the name of the destination.',
      sentence: [
        'Last Friday, twenty members of the Travis Middle School science club boarded a bus for a field trip to ',
        { options: ['space center houston', 'Space Center houston', 'Space Center Houston', 'Space center Houston'], answer: 2 },
        '.',
      ],
      explain: 'Space Center Houston is a proper noun naming a specific facility and city, so each word must be capitalized.',
    }),
    mcq({
      standard: 'rla:6.10B.i', cites: [4],
      stem: 'Which transition should Marcus add to the beginning of sentence 4 to improve the sequence of events?',
      choices: [
        'First,',
        ['However,', 'Sentence 4 does not introduce a contrast; it begins the chronological sequence of visits.'],
        ['Therefore,', 'The visit to the gallery is not a consequence of seeing the shuttle replica outside.'],
        ['In contrast,', 'There is no opposing idea being presented here.'],
      ],
      answer: 0,
      explain: '"First," establishes the chronological starting point for the tour inside the building, following their arrival.',
    }),
    mcq({
      standard: 'rla:6.10D.ix', cites: [5],
      stem: 'What change, if any, should be made in sentence 5?',
      choices: [
        ['Change **lunar** to **loonar**', 'Lunar is spelled correctly.'],
        'Change **marvelled** to **marveled**',
        ['Change **authentic** to **authentik**', 'Authentic is spelled correctly.'],
        ['Make no change', 'The American English spelling marveled uses one l.'],
      ],
      answer: 1,
      explain: 'In standard American English spelling, "marveled" has a single "l."',
    }),
    mcq({
      standard: 'rla:6.10D.i', cites: [7],
      stem: 'What is the best way to correct sentence 7 if it lacks a conjunction?',
      choices: [
        ['Old computer consoles lined the floor, rotary phones, and green-screen monitors on desks.', 'This creates a confusing fragment.'],
        ['Old computer consoles lined the floor they had rotary phones and monitors on desks.', 'This is a run-on sentence without punctuation or conjunctions.'],
        'Old computer consoles lined the floor, complete with rotary phones and green monitors.',
        ['Because old computer consoles lined the floor with rotary phones on desks.', 'This turns the sentence into an incomplete dependent clause fragment.'],
      ],
      answer: 2,
      explain: 'Using the prepositional phrase "complete with..." smoothly connects the descriptive details without creating a comma splice or run-on.',
    }),
    mcq({
      standard: 'rla:6.10C', cites: [9, 10],
      stem: 'What is the most effective way to combine sentences 9 and 10?',
      choices: [
        ['The rocket was laying on its side, it stretched longer than a football field from engine nozzles to escape tower.', 'This creates a comma splice joining two independent clauses with only a comma.'],
        'Lying on its side, the rocket stretched longer than a football field from engines to tower.',
        ['Because the rocket was laying on its side, so it stretched longer than a football field.', 'Using both because and so is grammatically incorrect.'],
        ['The rocket stretched longer than a football field, but it lay on its side.', 'The conjunction but incorrectly implies a contrast between length and orientation.'],
      ],
      answer: 1,
      explain: 'Beginning with the participial phrase "Lying on its side..." eliminates the repetitive subject "The rocket" and correctly uses the participle "lying" instead of "laying."',
    }),
    mcq({
      standard: 'rla:6.10B.ii', cites: [11],
      stem: 'Marcus wants to add a specific fact to sentence 11 to develop the description of the Saturn V rocket. Which sentence best achieves this goal?',
      choices: [
        'Together, those five engines produced 7.5 million pounds of thrust to lift the Apollo spacecraft.',
        ['The rocket display building was painted light gray on the outside to reflect harsh summer sunlight.', 'Exterior paint color does not develop the description of rocket power.'],
        ['Astronauts usually eat freeze-dried ice cream during flights.', 'Snack food details are irrelevant to the engine description.'],
        ['I bought a plastic model rocket at the gift shop before leaving.', 'Personal souvenirs do not describe the historic Saturn V rocket.'],
      ],
      answer: 0,
      explain: 'Adding the specific engineering fact about 7.5 million pounds of thrust adds depth and concrete detail to the rocket description.',
    }),
  ],
});
