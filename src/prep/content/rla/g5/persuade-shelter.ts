// Grade 5 persuasive text: an original flyer for a (made-up) animal shelter's adoption day. Questions cover
// hyperbole and stereotypes, the author's purpose, claim, facts, audience and an adage.

import { makeSet, mcq, twoq } from '../author.ts';

export const PERSUADE_SHELTER = makeSet({
  id: 'g5-persuade-shelter',
  grade: 5,
  kind: 'reading',
  title: 'Adopt a Best Friend',
  intro: 'Read the flyer and choose the best answer to each question.',
  passages: [{
    id: 'g5-persuade-shelter-p',
    title: 'Adopt a Best Friend This Saturday!',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Are you ready for the best day of your entire life? Then come to Adoption Day at the Hill Country Animal Shelter this Saturday from 10 a.m. to 4 p.m. More than forty dogs and cats are waiting to meet you, and every single one of them is hoping you will be the one who takes them home.' },
      { kind: 'heading', text: 'Why Adopt?' },
      { kind: 'p', text: 'Every year, millions of dogs and cats across the country end up in animal shelters. Some were lost. Some had owners who could no longer care for them. None of them did anything wrong. When you adopt a pet from a shelter, you give an animal a second chance and make room for another animal that needs help.' },
      { kind: 'p', text: 'Adopting is also a smart choice for your family. At our shelter, every pet has already had its shots and a checkup from a veterinarian. Our adoption fee is much lower than the price of buying a pet from a store, and it covers all of that care.' },
      { kind: 'heading', text: 'But Aren\'t Shelter Pets Troublemakers?' },
      { kind: 'p', text: 'Some people believe that shelter animals are wild or badly behaved. That idea is simply not true. Many of our dogs already know how to sit and walk on a leash, and our volunteers spend time every day playing with the cats so they are used to people. Our staff will help you choose a pet whose energy and personality match your family.' },
      { kind: 'p', text: 'Take Biscuit, for example. Biscuit is a three-year-old beagle mix who was found wandering near the highway last spring. Today he greets every visitor with a wagging tail and a happy howl. He loves belly rubs, car rides, and naps in the sun. All he needs is a family.' },
      { kind: 'heading', text: 'Don\'t Wait!' },
      { kind: 'p', text: 'You know what they say: "Don\'t put off until tomorrow what you can do today." The pets at Adoption Day won\'t wait forever. Families, grandparents, and anyone with room in their heart and their home are welcome. Bring your whole family to meet our animals, ask our staff questions, and find the friend who will be waiting for you at the door every day.' },
      { kind: 'p', text: 'A shelter pet will love you more than all the stars in the sky. Come see for yourself this Saturday!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.10G', cites: [7],
      stem: 'Read this sentence from paragraph 7. "A shelter pet will love you more than all the stars in the sky." Why does the author use hyperbole here?',
      choices: [
        ['To state a literal scientific fact about animal emotions.', 'Hyperbole is exaggeration, not an exact fact.'],
        'To emphasize the deep affection of a pet',
        ['To teach readers about constellations in the night sky.', 'The stars are part of an exaggeration, not a science lesson.'],
        ['To warn families that shelter pets require extra care.', 'The sentence is about love, not care.'],
      ],
      answer: 1,
      explain: 'Hyperbole is an extreme exaggeration. No one can measure love against the stars, but the exaggeration makes readers feel how loving a pet can be, which helps persuade them.',
    }),
    mcq({
      standard: 'rla:5.10G', cites: [4],
      stem: 'In paragraph 4, the author describes a stereotype about shelter animals. Why does the author include it?',
      choices: [
        ['To agree that shelter animals are poorly behaved at home.', 'The author says the idea "is simply not true."'],
        ['To explain step-by-step instructions for leash training.', 'The paragraph doesn\'t give training steps.'],
        'To disprove the false idea and encourage adoption',
        ['To demonstrate that shelter staff members dislike people.', 'The staff help families choose pets.'],
      ],
      answer: 2,
      explain: 'A stereotype is an unfair idea about a whole group. The author mentions the belief that shelter pets are "wild or badly behaved," then gives facts that show it is not true.',
    }),
    mcq({
      standard: 'rla:5.10A',
      stem: 'What is the main purpose of the flyer?',
      choices: [
        ['To explain the financial operations of municipal shelters.', 'The flyer gives some facts, but its goal is to get people to come.'],
        ['To tell an entertaining story about a beagle named Biscuit.', 'Biscuit is one example used to persuade.'],
        ['To outline state licensing regulations for all pet owners.', 'No rules are listed.'],
        'To persuade people to adopt a pet this Saturday',
      ],
      answer: 3,
      explain: 'The flyer\'s title, reasons and final "Come see for yourself this Saturday!" all work to persuade readers to come to Adoption Day and adopt.',
    }),
    twoq({
      standard: 'rla:5.9E.i', cites: [2],
      a: {
        prompt: 'Part A: What is the claim of the flyer?',
        choices: [
          'People should adopt pets from shelters.',
          ['Beagles make the most loyal family pets.', 'Biscuit is a beagle, but the flyer is about all shelter pets.'],
          ['Commercial pet retail stores must close.', 'The flyer compares prices but doesn\'t ask stores to close.'],
          ['Cats require far less attention than dogs.', 'The flyer doesn\'t compare cats and dogs.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence best supports the answer to Part A?',
        choices: [
          ['"Every year, millions of dogs and cats across the country end up in animal shelters." (paragraph 2)', 'This gives background statistics.'],
          '"When you adopt a pet from a shelter, you give an animal a second chance." (paragraph 2)',
          ['"Some people believe that shelter animals are wild or badly behaved." (paragraph 4)', 'This is the stereotype the author argues against.'],
          ['"More than forty dogs and cats are waiting to meet you." (paragraph 1)', 'This gives the event details.'],
        ],
        answer: 1,
      },
      explain: 'The whole flyer argues that families should adopt from the shelter. Paragraph 2 gives a strong reason: adopting gives a pet a second chance and helps another animal.',
    }),
    mcq({
      standard: 'rla:5.9E.ii', cites: [3],
      stem: 'How do the facts in paragraph 3 help the author\'s argument?',
      choices: [
        'They show that adopting is affordable and includes veterinary care.',
        ['They show that commercial pet shops offer healthier puppies to buyers.', 'The paragraph says shelter pets are already cared for.'],
        ['They describe the educational coursework required to become a doctor.', 'Training is not discussed.'],
        ['They prove that older rescue dogs always behave better than store pets.', 'Behavior is discussed in paragraph 4.'],
      ],
      answer: 0,
      explain: 'Facts about shots, checkups and a lower fee give practical reasons to adopt, which makes the argument more convincing to families.',
    }),
    mcq({
      standard: 'rla:5.9E.iii', cites: [6],
      stem: 'Who is the intended audience for the flyer?',
      choices: [
        ['Veterinarians employed at local animal clinics', 'They already work there; the flyer is trying to bring in new people.'],
        ['Children who feel frightened by barking dogs', 'The flyer isn\'t written to calm fears about dogs.'],
        'Anyone with room in their home for a pet',
        ['Business owners who sell pet food supplies', 'The flyer is not written to store owners.'],
      ],
      answer: 2,
      explain: 'Paragraph 6 says "Families, grandparents, and anyone with room in their heart and their home are welcome." The flyer speaks to people who could adopt.',
    }),
    mcq({
      standard: 'rla:5.3D', cites: [6],
      stem: 'In paragraph 6, the author uses the adage "Don\'t put off until tomorrow what you can do today." What does it mean here?',
      choices: [
        ['Adoptions should take place strictly on Saturday mornings.', 'The adage is about not waiting, not about one day of the week.'] ,
        'Act now before the opportunity is missed.',
        ['Visitors should finish school homework before attending.', 'The adage is used about adopting, not homework.'],
        ['The animal shelter plans to close its doors next week.', 'The flyer doesn\'t say this.'],
      ],
      answer: 1,
      explain: 'An adage is an old saying with advice. This one means "don\'t wait to do something." The author uses it to encourage readers to come to Adoption Day now.',
    }),
  ],
});
