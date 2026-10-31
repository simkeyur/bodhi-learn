// Grade 4 literary nonfiction: a biography of Texas aviation pioneer Katherine Stinson. Questions cover
// central idea (4.9D.i), summarizing (4.7D), author's purpose (4.10A), inference (4.6F), key ideas (4.6G),
// dictionary skills (4.3A), and text evidence (4.7C).

import { makeSet, mcq } from '../author.ts';

export const BIO_STINSON = makeSet({
  id: 'g4-bio-stinson',
  grade: 4,
  kind: 'reading',
  title: 'Katherine Stinson: Texas Flying Pioneer',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-bio-stinson-p',
    title: 'Katherine Stinson: Texas Flying Pioneer',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'In the early 1900s, airplanes were new and fragile machines. They were built from light wood, cloth fabric, and bicycle parts. Most people believed that flying was far too dangerous for anyone, especially young women. But nineteen-year-old Katherine Stinson had big dreams. She wanted to fly high above the clouds. She watched birds glide on the wind and wanted to soar just like them.' },
      { kind: 'p', text: 'Katherine first planned to become a piano player. But when she saw airplanes, she decided to learn how to fly. She sold her piano to pay for flying lessons. Flight teachers laughed at her at first. They said women could not fly planes. Katherine refused to quit. She practiced every day. In July 1912, she proved them wrong by earning her pilot license. She became only the fourth woman in the United States to earn one.' },
      { kind: 'p', text: 'Katherine wanted sunny skies for flying all year. So she and her family moved to San Antonio, Texas. In 1915, she and her sister Marjorie started the Stinson Aviation School on an open pasture south of town. They taught students how to fly planes safely. Today, that historic airfield is Stinson Municipal Airport. It is one of the oldest airports in the nation.' },
      { kind: 'p', text: 'Katherine was not happy with only flying in straight lines. She wanted to test what planes could do. Writers called her "The Flying Schoolgirl." She was the first woman in the world to do a daring stunt called a "loop-the-loop." People held their breath as the plane flipped in the sky. She flew her plane upside down in the air before flying flat again.' },
      { kind: 'p', text: 'Big crowds in Texas and around the world watched her shows. On night flights, she put bright flares on her wings. The flares made trails of light across the dark sky. In 1918, she carried mail across Canada. She set new records for distance.' },
      { kind: 'p', text: 'When World War I began, Katherine offered to fly for the military. Rules kept women from flying in combat. Still, she drove ambulances in Europe to help hurt soldiers. Katherine Stinson opened doors for future pilots through courage, skill, and love of flying.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 2, 6],
      stem: 'What is the central idea of the biography?',
      choices: [
        ['Katherine Stinson spent most of her life writing music for concerts.', 'Selling her piano was only a step to pay for flight lessons.'],
        'Katherine Stinson overcame doubts to pioneer aviation.',
        ['Airplanes in the early 1900s were far too dangerous to fly safely.', 'The text describes early planes, but focuses on Stinson\'s achievements.'],
        ['Stinson Municipal Airport is the largest airline facility in Texas.', 'The airport is historic, but not the largest.'],
      ],
      answer: 1,
      explain: 'The central idea synthesizes her life: overcoming discrimination, founding a flight school in San Antonio, and performing historic flights.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [2, 3, 4],
      stem: 'Which summary best recaps paragraphs 2 through 4?',
      choices: [
        'Stinson earned her license, opened a school, and did stunts.',
        ['Stinson bought a cow pasture in San Antonio so she could raise animals.', 'She opened a flight school, not a cattle ranch.'],
        ['Newspaper writers told Katherine to stop flying in cold rainy weather.', 'Writers admired her and gave her a nickname.'],
        ['Teachers welcomed Katherine into flying school because she played piano.', 'Instructors initially doubted her and laughed.'],
      ],
      answer: 0,
      explain: 'This summary captures the core progression: earning her license, establishing the San Antonio school, and performing loop-the-loops.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        ['To convince readers to take flight lessons at a modern Texas airport.', 'The author is writing history, not advertising lessons.'],
        ['To explain how to build a wooden biplane using lightweight bicycle parts.', 'The text does not give building instructions.'],
        'To inform readers about Katherine Stinson\'s achievements.',
        ['To entertain readers with an imaginary story about a fictional pilot.', 'The biography is true history about a real person.'],
      ],
      answer: 2,
      explain: 'The author\'s purpose is to inform readers about the inspiring life and achievements of pioneering aviator Katherine Stinson.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2],
      stem: 'What can the reader infer from Katherine\'s actions in paragraph 2?',
      choices: [
        ['She gave up easily whenever other people doubted her abilities.', 'She refused to quit and practiced daily.'],
        ['She wanted to move to Europe to become a professional musician.', 'She sold her piano to pay for flying lessons.'],
        ['She believed that learning to fly airplanes would be effortless.', 'She understood that learning required hard work.'],
        'She was determined and worked hard for her goals.',
      ],
      answer: 3,
      explain: 'Selling her piano and practicing daily despite being laughed at shows her strong determination to reach her goals.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [4],
      stem: 'Read this dictionary entry:\n\n**maneuver** /mə-ˈnuː-vər/ *noun*\n1. a planned movement of troops or warships\n2. a clever or skillful action or plan\n3. a skillful physical movement or stunt in a vehicle\n4. a military training exercise\n\nWhich definition best matches the meaning of **maneuver** as used in paragraph 4?',
      choices: [
        ['Definition 1 (movement of troops)', 'There are no troops or warships in paragraph 4.'],
        ['Definition 2 (a clever plan)', 'A loop-the-loop is a physical flight stunt, not a business plan.'],
        'Definition 3',
        ['Definition 4 (military exercise)', 'Definition 3 describes a skillful vehicle stunt.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, a loop-the-loop is an aerial stunt performed in an airplane, matching definition 3.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which words from paragraph 3 tell where the school was built?',
      choices: [
        ['"sunny skies for flying all year long"', 'This describes the weather, not the physical location.'],
        ['"she and her family moved to San Antonio"', 'This tells about the city, not the specific building site.'],
        ['"one of the oldest airports in the nation"', 'This is a modern historical fact about the airport.'],
        '"on an open pasture south of town"',
      ],
      answer: 3,
      explain: 'The phrase "on an open pasture south of town" specifically tells where the sisters established the aviation school.',
    }),
  ],
});
