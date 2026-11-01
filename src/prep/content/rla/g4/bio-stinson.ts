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
        ['Airplanes in the early 1900s were constructed primarily from bicycle gears and lightweight cedar wood.', 'Details about wood and bicycle parts describe early aircraft design, not Stinson\'s life story.'],
        'Katherine Stinson overcame prejudice and doubt to become a record-breaking aviation pioneer and flight instructor.',
        ['San Antonio became the leading manufacturing hub for military airplanes during World War I.', 'The selection describes an aviation school on a pasture, not wartime manufacturing factories.'],
        ['Katherine Stinson abandoned aviation after earning her license to teach classical piano lessons in Texas.', 'Katherine sold her piano to become a pilot and never abandoned her aviation career.'],
      ],
      answer: 1,
      explain: 'The central idea synthesizes her life: overcoming discrimination, founding a flight school in San Antonio, and performing historic flights.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [2, 3, 4],
      stem: 'Which summary best recaps paragraphs 2 through 4?',
      choices: [
        'Katherine earned her pilot license, established an aviation school in San Antonio, and performed historic aerial stunts.',
        ['Katherine sold her piano to purchase an open pasture in San Antonio where she could build wooden gliders.', 'Katherine sold her piano to pay for flight training lessons rather than buying land.'],
        ['Flight instructors refused to train female students until the city of San Antonio opened a municipal airport.', 'Stinson earned her license before moving to San Antonio to establish the airfield.'],
        ['Newspaper reporters nicknamed Katherine "The Flying Schoolgirl" because she delivered mail to Canadian schools.', 'Her nickname came from her youth and aerobatic stunts rather than delivering mail to schools.'],
      ],
      answer: 0,
      explain: 'This summary captures the core progression: earning her license, establishing the San Antonio school, and performing loop-the-loops.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s primary purpose in writing this biography?',
      choices: [
        ['To persuade young students to enroll in professional flight training academies in South Texas.', 'The text is an educational biography rather than an advertisement for flight schools.'],
        'To inform readers about the determination, courage, and historic accomplishments of Katherine Stinson.',
        ['To explain the step-by-step engineering process required to construct and repair antique biplanes.', 'The article explores Stinson\'s life journey rather than technical airplane construction steps.'],
        ['To entertain readers with an imaginative fictional story about a young girl flying over the clouds.', 'The selection is documented literary nonfiction about a real woman, not a fictional tale.'],
      ],
      answer: 1,
      explain: 'The author\'s purpose is to inform readers about the inspiring life and achievements of pioneering aviator Katherine Stinson.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [2],
      stem: 'What can the reader infer about Katherine\'s character from paragraph 2?',
      choices: [
        ['She gave up easily whenever older people doubted her abilities or laughed at her personal ambition to fly.', 'Katherine persisted despite being laughed at and proved her critics wrong.'],
        ['She preferred performing classical music on the piano rather than flying high in airplanes.', 'Selling her piano demonstrated that aviation was her true, primary passion.'],
        'She possessed remarkable determination and was willing to make personal sacrifices to achieve her goals.',
        ['She expected that learning to fly fragile airplanes would be easy and require little practice.', 'Katherine practiced daily because she understood flying required hard work and discipline.'],
      ],
      answer: 2,
      explain: 'Selling her piano and practicing daily despite being laughed at shows her strong determination to reach her goals.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [4],
      stem: 'Read this dictionary entry:\n\n**maneuver** /mə-ˈnuː-vər/ *noun*\n1. a planned movement of military troops or warships\n2. a clever or deceptive scheme used to gain an advantage\n3. a skillful physical movement or acrobatic stunt in a vehicle\n4. a formal military training exercise carried out in the field\n\nWhich definition best matches the meaning of **maneuver** as applied to the "loop-the-loop" in paragraph 4?',
      choices: [
        ['Definition 1 (a planned movement of military troops or warships)', 'Paragraph 4 describes an aerobatic airplane flip in the sky, not movements of army soldiers or ships.'],
        ['Definition 2 (a clever or deceptive scheme used to gain an advantage)', 'A loop-the-loop is an athletic aerial trick, not a deceitful business or political scheme.'],
        'Definition 3 (a skillful physical movement or acrobatic stunt in a vehicle)',
        ['Definition 4 (a formal military training exercise carried out across an open battlefield)', 'Paragraph 4 describes exhibition flying for public crowds rather than military maneuvers.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, a loop-the-loop is an aerial stunt performed in an airplane, matching definition 3.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 identifies the specific location where the Stinson sisters established their school?',
      choices: [
        ['"Katherine wanted sunny skies for flying all year."', 'This sentence explains the climatic reason for relocating rather than the physical construction site.'],
        ['"So she and her family moved to San Antonio, Texas."', 'Moving to San Antonio names the metropolitan region rather than the exact field where the school was built.'],
        ['"It is one of the oldest airports in the nation."', 'This statement describes the modern status of the airport rather than its original physical location.'],
        '"on an open pasture south of town"',
      ],
      answer: 3,
      explain: 'The phrase "on an open pasture south of town" specifically tells where the sisters established the aviation school.',
    }),
  ],
});
