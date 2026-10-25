// Grade 4 literary nonfiction: a biography of Texas aviation pioneer Katherine Stinson. Questions cover
// central idea (4.9D.i), summarizing (4.7D), author's purpose (4.10A), inference (4.6F), key ideas (4.6G),
// dictionary skills (4.3A), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

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
      { kind: 'p', text: 'In the early 1900s, airplanes were fragile contraptions built from lightweight wood, stretched canvas fabric, and bicycle parts. Most people believed that flying through the clouds was far too hazardous for anyone, especially young women. But nineteen-year-old Katherine Stinson had big dreams that reached beyond ordinary boundaries.' },
      { kind: 'p', text: 'Katherine initially planned to become a concert pianist. However, when she realized that airplane flying was the future of transportation, she sold her beloved piano to help pay for flight school lessons. Flight instructors laughed when she applied, insisting that women lacked the physical strength and calm nerves required to pilot an aircraft. Katherine refused to accept their refusal. In July 1912, she proved them wrong by earning her official pilot\'s license, becoming only the fourth woman in the United States to do so.' },
      { kind: 'p', text: 'Seeking a permanent home with steady sunshine and open skies for year-round flying, Katherine and her family moved to San Antonio, Texas. In 1913, she and her sister Marjorie established the Stinson Aviation School on a flat cow pasture south of the city. Today, that historic airfield is Stinson Municipal Airport, the second oldest continuously operating general aviation airport in the United States.' },
      { kind: 'p', text: 'Katherine was not satisfied with simply flying in straight lines. She wanted to test the aerodynamic limits of what airplanes could achieve. Nicknamed "The Flying Schoolgirl" by fascinated newspaper reporters, she became the first woman in the world to perform a perilous aerial maneuver called a "loop-the-loop," turning her fragile biplane completely upside down in midair before leveling out cleanly.' },
      { kind: 'p', text: 'Crowds in Texas and across the globe marveled at her courage. During nighttime exhibitions, she attached magnesium flares to her plane\'s wingtips, carving blazing streaks of light across the pitch-black evening sky. In 1918, she carried government airmail across the Canadian prairie, setting distance and endurance records that few male aviators could match.' },
      { kind: 'p', text: 'When World War I arrived, Katherine offered her flying services to the military. Though regulations barred women from combat aviation, she drove ambulances in Europe to aid wounded soldiers. Katherine Stinson opened doors for generations of future pilots through her stubborn perseverance, technical skill, and fearless devotion to the skies.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 2, 6],
      stem: 'What is the central idea of the biography?',
      choices: [
        'Katherine Stinson overcame prejudice and fear through determination and courage to become a pioneering aviator in Texas and around the world.',
        ['Katherine Stinson regretted selling her piano and spent most of her life writing concert music.', 'Selling her piano was only a stepping stone to pay for flight school.'],
        ['Airplanes in the early 1900s were too dangerous for anyone to fly without crashing.', 'The text describes early planes, but the focus is on Stinson\'s achievements.'],
        ['Stinson Municipal Airport is the largest commercial airline facility in North America.', 'The article notes it is an old general aviation airport, not the largest commercial one.'],
      ],
      answer: 0,
      explain: 'The central idea synthesizes her whole life: overcoming discrimination against women pilots, founding an aviation school in San Antonio, and performing historic flights.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [2, 3, 4],
      stem: 'Which summary best recaps paragraphs 2 through 4?',
      choices: [
        ['Stinson bought a cow pasture in San Antonio so that she could raise cattle and teach music.', 'She built an airfield for flying, not a cattle ranch.'],
        'After earning her pilot license despite skepticism, Stinson moved to Texas, opened a flight school with her sister, and became famous for bold aerobatic stunts.',
        ['Newspaper reporters discouraged Katherine from performing loops because of dangerous winds.', 'The reporters were fascinated and gave her a nickname.'],
        ['Instructors gladly welcomed Katherine into aviation school because of her background in piano playing.', 'Instructors initially doubted her and laughed at her application.'],
      ],
      answer: 1,
      explain: 'This summary captures the core progression: earning her license, establishing the San Antonio school, and executing the famous loop-the-loop.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        ['To persuade readers to take flight lessons at Stinson Municipal Airport today.', 'The author is writing historical biography, not advertising airport lessons.'],
        ['To explain how to construct a lightweight wooden biplane from bicycle parts.', 'The author describes early planes briefly, but does not provide construction instructions.'],
        'To inform readers about the inspiring life and pioneering accomplishments of Katherine Stinson.',
        ['To entertain readers with a fictional folktale about an imaginary pilot.', 'The biography is true history about a real person.'],
      ],
      answer: 2,
      explain: 'Biographies inform readers about the real lives, challenges, and significant contributions of historical figures.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2],
      stem: 'What can the reader infer about early 20th-century aviation from paragraph 2?',
      choices: [
        ['Flight school lessons were free for anyone interested in aviation.', 'Katherine had to sell her piano to afford the fees.'],
        ['Women were widely recognized as the most experienced pilots of that era.', 'Only three women in the entire country had pilot licenses before Katherine.'],
        ['Airplanes were considered much safer than trains.', 'Paragraph 1 mentions that flying was regarded as hazardous.'],
        'Widespread bias existed against women entering the field of aviation.',
      ],
      answer: 3,
      explain: 'The instructors\' claim that women lacked physical strength and nerves illustrates the strong societal prejudice against women pilots at the time.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [3, 4, 5],
      stem: 'Which **two** key details from the selection support the claim that Katherine Stinson was an exceptional pilot?',
      choices: [
        'She became the first woman in the world to perform a midair loop-the-loop.',
        'She set long-distance airmail endurance records across the Canadian prairie.',
        ['She wanted to become a concert pianist as a young girl.', 'Her piano interest came before her flying achievements.'],
        ['She moved to San Antonio because of Texas weather.', 'Moving for sunny weather shows practical planning, not flying skill.'],
        ['She volunteered as an ambulance driver during World War I.', 'Ambulance driving showed bravery, but not flight performance.'],
      ],
      answers: [0, 1],
      explain: 'Looping an airplane upside down and setting distance records in airmail delivery directly showcase her superior piloting abilities.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [4],
      stem: 'Read this dictionary entry for the word **maneuver**.\n\n**ma·neu·ver** /məˈno͞ovər/\n*noun*\n1. a military movement of troops or warships.\n2. a clever or skillful planned action.\n3. a movement requiring skill and care.\n\nWhich definition best fits the word **maneuver** as used in paragraph 4?',
      choices: [
        ['Definition 1', 'There were no warships or troops in paragraph 4.'],
        ['Definition 2', 'A loop-the-loop is a physical flight motion, not a clever business plan.'],
        'Definition 3',
        ['None of the definitions fit.', 'Definition 3 clearly describes a skillful physical movement.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, an aerial maneuver refers to a delicate, physical flight motion (the loop-the-loop) requiring immense skill and care.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which evidence from paragraph 3 proves that Katherine Stinson left a lasting mark on Texas aviation?',
      choices: [
        '"Today, that historic airfield is Stinson Municipal Airport, the second oldest continuously operating general aviation airport in the United States."',
        ['"Katherine initially planned to become a concert pianist."', 'This describes her childhood ambition.'],
        ['"Nicknamed \'The Flying Schoolgirl\' by fascinated newspaper reporters..."', 'This describes her media nickname.'],
        ['"The limbs are thicker than telephone poles."', 'This is from an unrelated text.'],
      ],
      answer: 0,
      explain: 'The continued operation of Stinson Municipal Airport on the very pasture she and her sister cleared provides concrete proof of her enduring legacy.',
    }),
  ],
});
