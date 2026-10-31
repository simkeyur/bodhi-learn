// Grade 8 biography / informational: Footsteps in the Sea of Tranquility (Neil Armstrong, with citations/footnotes)
import { makeSet, mcq } from '../author.ts';

export const BIO_ARMSTRONG = makeSet({
  id: 'g8-bio-armstrong',
  grade: 8,
  kind: 'reading',
  title: 'Footsteps in the Sea of Tranquility',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-bio-armstrong-p',
    title: 'Footsteps in the Sea of Tranquility',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'On July 20, 1969, around six hundred million people watched grainy black-and-white television screens. They saw an American astronaut take his first steps on the surface of the Moon. His famous words, "That\'s one small step for man, one giant leap for mankind," soon filled history books across the world. Yet Neil Alden Armstrong never saw himself as a celebrity. He was not a reckless daredevil looking for fame or glory. Instead, he was a careful research test pilot and engineer. His quiet discipline, steady composure under pressure, and focus on solving tough problems made the historic Moon landing possible.' },
      { kind: 'p', text: 'Born in Wapakoneta, Ohio, in 1930, Armstrong fell in love with airplanes as a young boy. He washed planes at a small grass airfield to pay for flight lessons. He earned his student pilot\'s license at age sixteen before he even had a driver\'s license for a car [1]. Armstrong later served as a navy combat pilot during the Korean conflict, flying seventy-eight combat missions. During one flight, his jet lost six feet of its right wing after hitting low cables. Armstrong kept his cool. He controlled the crippled jet and brought it back safely to base. After the war, he joined the National Advisory Committee for Aeronautics, the research agency that soon became NASA.' },
      { kind: 'p', text: 'Armstrong worked as a test pilot at Edwards Air Force Base in California. He flew experimental rocket planes, including the famous X-15. This rocket ship flew faster than Mach 5, which is five times the speed of sound. It climbed higher than two hundred thousand feet into the thin air at the edge of space. Test pilots faced sudden system failures. While other pilots might shout over the cockpit radio during an emergency, Armstrong\'s pulse stayed remarkably steady. He calmly checked his flight gauges, figured out his glide path, and landed safely on the dry lake bed [2].' },
      { kind: 'p', text: 'This steady calm saved the Apollo 11 mission during the Moon landing. As the lunar module Eagle dropped toward the Sea of Tranquility, computer warning alarms sounded inside the cabin. Radar data overloaded the guidance computer. Armstrong looked out the small triangular window. He saw that the computer autopilot was steering the lander straight into a crater filled with boulders the size of cars.' },
      { kind: 'p', text: 'Fuel was running dangerously low. Mission Control in Houston called out the remaining seconds of propellant. Armstrong took manual control of the thrusters, switching off the automated autopilot. He tilted the spacecraft forward and flew past the boulder field, searching for a smooth patch of ground. Dust swirled beneath the rocket engine as the lander hovered feet above the gray soil. With less than thirty seconds of fuel left in the tanks, the landing pads touched down gently. Armstrong keyed his microphone and spoke calmly: "Houston, Tranquility Base here. The Eagle has landed."' },
      { kind: 'p', text: 'After returning home from the Moon, Armstrong stepped away from the spotlight. He turned down high-paying commercial ads and offers to run for political office. Instead, he chose to teach aerospace engineering at the University of Cincinnati and live quietly on his Ohio farm. Armstrong always reminded people that the Moon landing belonged to the four hundred thousand engineers, scientists, and technicians who worked together on Apollo. Until he passed away in 2012 at age eighty-two, he urged young people to study science, discover new frontiers, and solve problems with quiet dedication.' },
      { kind: 'sidebar', title: 'Notes', text: '[1] Hansen, James R. First Man: The Life of Neil A. Armstrong. Simon & Schuster, 2005. [2] Thompson, Milton O. At the Edge of Space: The X-15 Flight Program. Smithsonian Institution Press, 1992.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8D.i', cites: [1],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Armstrong achieved fame because he was an aggressive daredevil who took risks.', 'The author specifically states he was not a reckless daredevil looking for fame.'],
        'Armstrong\'s success came from his quiet composure and problem-solving.',
        ['The Apollo 11 moon landing succeeded mainly because of computer automation.', 'The text notes that computer alarms nearly caused a crash until Armstrong took over.'],
        ['Armstrong spent his post-NASA career running for political office in Ohio.', 'Armstrong rejected political campaigns and chose to teach engineering.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 establishes the central idea: Armstrong\'s quiet discipline, composure, and focus made the landing possible.',
    }),
    mcq({
      standard: 'rla:8.8D.ii', cites: [2],
      stem: 'How does footnote citation [1] support the author\'s discussion in paragraph 2?',
      choices: [
        'It cites a published biography that documents Armstrong\'s youth.',
        ['It provides a full transcript of Armstrong\'s military combat interviews.', 'The citation references Hansen\'s biography, not military interviews.'],
        ['It explains the physics of how jet engines operated during the Korean War.', 'The note cites a biography rather than a physics textbook.'],
        ['It proves that Armstrong struggled with his early student flight training.', 'The citation confirms that he earned his license at age sixteen.'],
      ],
      answer: 0,
      explain: 'Footnote [1] references James Hansen\'s biography First Man, validating the details of Armstrong\'s youth and early pilot license.',
    }),
    mcq({
      standard: 'rla:8.5G', cites: [4, 5],
      stem: 'Which detail from paragraphs 4 and 5 best illustrates Armstrong\'s composure during the landing?',
      choices: [
        ['He allowed the computer autopilot to steer the lander into a rock crater.', 'He actively switched off the autopilot to avoid the boulder crater.'],
        ['He waited for Mission Control to solve computer alarms before taking action.', 'He acted immediately to take manual control of the spacecraft.'],
        'He manually flew past boulders and landed with seconds of fuel left.',
        ['He fired the ascent engine to return safely to orbit around the Moon.', 'Armstrong did not abort the landing; he successfully touched down on the Moon.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 describes Armstrong taking manual control with low fuel and calmly flying over the boulders to find smooth ground.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [3],
      stem: 'Which detail from paragraph 3 best supports the idea that Armstrong remained calm in emergencies?',
      choices: [
        ['Armstrong worked as a test pilot at Edwards Air Force Base in California.', 'This notes his location and job rather than his reaction to emergencies.'],
        ['He flew experimental rocket planes, including the hypersonic X-15 aircraft.', 'This names the aircraft he flew rather than demonstrating calmness.'],
        ['The rocket ship climbed higher than two hundred thousand feet into the air.', 'This describes flight altitude rather than pilot demeanor.'],
        'His pulse stayed remarkably steady while checking flight gauges.',
      ],
      answer: 3,
      explain: 'Paragraph 3 notes that while other pilots shouted during emergencies, Armstrong\'s pulse stayed remarkably steady.',
    }),
    mcq({
      standard: 'rla:8.9B', cites: [2, 3, 4, 6],
      stem: 'How does the chronological structure contribute to the author\'s purpose?',
      choices: [
        ['It compares Armstrong\'s flight record to the records of other test pilots.', 'The passage traces Armstrong\'s life rather than comparing him to other pilots.'],
        'It shows how his early flight experiences prepared him for Apollo 11.',
        ['It explains how NASA resolved financial problems in the space program.', 'The passage centers on Armstrong\'s life rather than NASA\'s budget.'],
        ['It outlines the historical rivalry between world superpowers in space.', 'The text is a biographical profile rather than a geopolitical history.'],
      ],
      answer: 1,
      explain: 'The chronological structure shows how each phase of Armstrong\'s career built the skills needed to land on the Moon.',
    }),
    mcq({
      standard: 'rla:8.8D.ii', cites: [3],
      stem: 'What is the primary function of footnote [2] in establishing the credibility of the text?',
      choices: [
        ['To explain how desert weather influenced aircraft maintenance in the 1960s.', 'The note cites a book about the X-15 program, not weather.'],
        ['To list the cost of building experimental rocket engines in California.', 'The note does not discuss manufacturing costs.'],
        'To cite a published source that documents the X-15 research program.',
        ['To show that test pilots disagreed with NASA flight directors in Houston.', 'The footnote points readers to an authoritative history of the program.'],
      ],
      answer: 2,
      explain: 'Footnote [2] directs readers to Milton Thompson\'s published book on the X-15 program, documenting the source of the facts.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 4, 5, 6],
      stem: 'Which statement provides the best objective summary of the selection?',
      choices: [
        ['After gaining international fame on Apollo 11, Neil Armstrong ran for political office and promoted commercial aerospace ventures.', 'Armstrong avoided commercial endorsements and political campaigns.'],
        ['A guidance computer failure forced Mission Control in Houston to pilot the Eagle lunar module remotely during the Moon touchdown.', 'Armstrong piloted the lander manually from inside the cockpit.'],
        ['Armstrong built model airplanes during his youth until NASA selected him to design hypersonic rocket engines at Edwards Air Force Base.', 'Armstrong flew the rocket planes as a test pilot; he was not an engine designer.'],
        'Armstrong\'s discipline as a pilot led to the Apollo 11 landing, after which he credited the teamwork of the space program.',
      ],
      answer: 3,
      explain: 'This summary captures his training, the lunar landing, and his humble recognition of the team behind Apollo.',
    }),
  ],
});
