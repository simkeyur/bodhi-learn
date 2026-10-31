// Grade 6 literary nonfiction: Biography of Ellen Ochoa.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const BIO_OCHOA = makeSet({
  id: 'g6-bio-ochoa',
  grade: 6,
  kind: 'reading',
  title: 'Charting the Stars: Ellen Ochoa',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-bio-ochoa-p',
    title: 'Charting the Stars: Ellen Ochoa',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'When eleven-year-old Ellen Ochoa watched television news broadcasts of the Apollo 11 moon landing in July 1969, she was mesmerized by the grainy black-and-white images of astronauts walking upon the lunar surface. Sitting on the living room rug in La Mesa, California, she listened to the crackling radio transmissions between mission control in Houston and the lunar lander Eagle. Yet like most young girls growing up in southern California during that era, she never imagined that space travel could ever be part of her own future. At that time, every NASA astronaut was a male military test pilot, and advanced engineering careers were rarely encouraged for young women in public schools.' },
      { kind: 'p', text: 'Fortunately, Ellen possessed an insatiable curiosity and a deep passion for problem-solving. At San Diego State University, she initially majored in journalism, but a single physics course redirected her path. Captivated by how mathematical equations could describe the laws of light and motion, she switched her major to physics despite an adviser who warned her that engineering was too demanding for women. Ochoa was undeterred; she graduated at the top of her class in 1980 and earned both master\'s and doctorate degrees in electrical engineering from Stanford University.' },
      { kind: 'p', text: 'At Stanford, Ochoa specialized in optics—the branch of physics that studies the behavior and properties of light. She co-invented three optical inspection systems that used computer algorithms and light beams to identify defects in manufactured goods and analyze satellite imagery. Her innovative patents caught the attention of NASA\'s Ames Research Center in California\'s Silicon Valley, where she began leading a team of thirty-five researchers developing automated imaging systems for space missions.' },
      { kind: 'p', text: 'When NASA opened its astronaut selection program to civilian scientists in the late 1980s, Ochoa seized the opportunity. Out of thousands of hopeful applicants, she was selected for astronaut training in 1990. Three years later, in April 1993, she made history aboard the Space Shuttle *Discovery* on mission STS-56, becoming the first Hispanic woman in the world to travel into space.' },
      { kind: 'p', text: 'During that nine-day flight, Ochoa operated the shuttle\'s fifty-foot robotic arm, maneuvering a delicate satellite called SPARTAN into orbit to study solar winds and the sun\'s corona. Balancing technical precision with calm composure, she retrieved the scientific platform before *Discovery* glided back to Earth. Over the next decade, Ochoa flew on three additional shuttle missions, logging nearly a thousand hours in zero gravity and playing a critical role in the early construction of the International Space Station.' },
      { kind: 'p', text: 'In 2012, Ochoa reached another historic milestone when she was named director of the Johnson Space Center in Houston, Texas. As only the second woman and first Hispanic director to lead the legendary facility, she oversaw thousands of civil servant scientists, aerospace engineers, and flight controllers managing the International Space Station and developing the Orion spacecraft for future lunar missions. Under her visionary leadership, the center expanded partnerships with private aerospace companies and prepared a new generation of astronauts for the Artemis program to return humans to the Moon.' },
      { kind: 'p', text: 'Today, retired from NASA and inducted into the Astronaut Hall of Fame, Ochoa frequently visits schools to inspire future explorers. She reminds students that curiosity, perseverance, and education are the true thrusters that propel human achievement. Her own path, from a young student watching the Moon landing to a leader at NASA, shows them how far hard work and a love of learning can go.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [2, 4, 7],
      stem: 'What is the controlling idea of the selection?',
      choices: [
        'Ellen Ochoa became an astronaut primarily because of her talent as a classical flutist.',
        'Through dedication, intellectual curiosity, and pioneering work in science, Ellen Ochoa broke barriers to become a trailblazing astronaut and space leader.',
        ['NASA\'s astronaut training program in 1990 accepted only candidates who held doctorates from Stanford University.', 'This is a specific detail about her degree, not the controlling idea of the biography.'],
        ['Operating the robotic arm was the most hazardous assignment during early shuttle flights.', 'This detail describes one mission task rather than the central idea.'],
      ],
      answer: 1,
      explain: 'The controlling idea encompasses her entire journey: overcoming discouragement, pioneering optical science, becoming the first Hispanic woman in space, and leading Johnson Space Center.',
    }),
    twoq({
      standard: 'rla:6.6C', cites: [2, 3],
      a: {
        prompt: 'Part A: Which statement best reflects Ochoa\'s response to skepticism about women in engineering?',
        choices: [
          'She refused to let prejudice dictate her choices and pursued advanced degrees with determination.',
          ['She abandoned science and returned to her original major of journalism.', 'She switched from journalism to physics and never turned back.'],
          ['She filed complaints against her college advisers.', 'The text does not mention complaints, only that she remained undeterred.'],
          ['She decided that working in private industry was better than studying space.', 'She chose to work at NASA Ames and joined the astronaut corps.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from paragraph 2 best supports the answer to Part A?',
        choices: [
          ['"At San Diego State University, she initially majored in journalism..."', 'This describes her initial interest before discovering physics.'],
          '"Ochoa was undeterred; she graduated at the top of her class in 1980 and earned both master\'s and doctorate degrees in electrical engineering from Stanford University."',
          ['"Captivated by how mathematical equations could describe the laws of light and motion..."', 'This explains why she enjoyed physics, not how she responded to doubt.'],
          ['"When eleven-year-old Ellen Ochoa watched television news broadcasts of the Apollo 11 moon landing..."', 'This quotation is from paragraph 1 and describes her childhood.'],
        ],
        answer: 1,
      },
      explain: 'When an adviser warned her that engineering was too demanding for women, Ochoa proved her capability by graduating top of her class and earning two advanced degrees from Stanford.',
    }),
    mcq({
      standard: 'rla:6.9A', cites: [6, 7],
      stem: 'What is the author\'s primary purpose in writing this article?',
      choices: [
        ['To explain the mechanical design of the space shuttle\'s robotic arm.', 'The robotic arm is mentioned briefly in paragraph 5, but is not the main focus.'],
        ['To argue that human space flight is too costly for modern governments.', 'The author portrays space exploration positively and inspiringly.'],
        'To chronicle the inspiring achievements of Ellen Ochoa and highlight her contributions to space exploration.',
        ['To compare the Apollo moon missions with the International Space Station.', 'Apollo 11 is mentioned only to establish Ochoa\'s childhood timeline.'],
      ],
      answer: 2,
      explain: 'The biography aims to inform and inspire readers by detailing Ochoa\'s barrier-breaking path from student to astronaut to director of Johnson Space Center.',
    }),
    mcq({
      standard: 'rla:6.9B', cites: [1, 2, 4, 6],
      stem: 'How does the chronological structure of the text help develop the author\'s message?',
      choices: [
        'It traces Ochoa\'s steady progression from an inspired child to a scientific researcher, astronaut, and leader.',
        ['It highlights the disagreements between NASA administrators and university professors.', 'The text does not focus on administrative disagreements.'],
        ['It explains the physical steps required to launch the Space Shuttle Discovery.', 'The article covers Ochoa\'s life, not the technical launch sequence.'],
        ['It contrasts the climate of southern California with the climate of Houston, Texas.', 'Regional geography is not a point of comparison in the text.'],
      ],
      answer: 0,
      explain: 'Presenting events in chronological order shows the cumulative impact of Ochoa\'s education, patents, space flights, and leadership over several decades.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [3, 5],
      stem: 'Which **two** conclusions about Ochoa\'s technical expertise are supported by the text?',
      choices: [
        'Her inventive research in optics directly benefited NASA\'s automated imaging technology.',
        ['She preferred administrative paperwork over hands-on mechanical operations in space.', 'She flew four missions and operated the 50-foot robotic arm.'],
        'Her precision in operating robotic systems made her a key contributor to assembling the space station.',
        ['She was the primary pilot for all four of her shuttle missions.', 'She was a mission specialist/flight engineer operating scientific payloads.'],
        ['She designed the rocket boosters used to propel Discovery into orbit.', 'Her expertise was in optics, imaging, and robotic control.'],
      ],
      answers: [0, 2],
      explain: 'Paragraphs 3 and 5 document her three optical inspection patents and her skilled operation of the shuttle\'s robotic arm during delicate satellite and station assembly operations.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [2],
      stem: 'Read this sentence from paragraph 2: "Ochoa was **undeterred**; she graduated at the top of her class in 1980..." What does the word **undeterred** mean?',
      choices: [
        ['easily distracted by minor problems', 'Her actions show focus and commitment.'],
        ['unsure of which career path to select', 'She committed fully to physics and engineering.'],
        'not discouraged or prevented from continuing',
        ['surprised by the difficulty of the material', 'She excelled and graduated top of her class.'],
      ],
      answer: 2,
      explain: 'The prefix "un-" means not, and "deterred" means discouraged. Ochoa refused to let negative advice stop her from pursuing engineering.',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [5, 6],
      stem: 'Which sentence best summarizes Ochoa\'s post-flight career at NASA?',
      choices: [
        ['She retired from public life immediately after returning from her first shuttle mission.', 'She flew three more missions and directed Johnson Space Center.'],
        'After logging nearly a thousand hours on four spaceflights, she became the director of Johnson Space Center, overseeing human space exploration programs.',
        ['She spent her later career designing optical cameras exclusively for military fighter jets.', 'She led civilian research and space exploration programs at NASA.'],
        ['She traveled to universities to persuade professors to eliminate physics requirements.', 'She encourages students to study math and science.'],
      ],
      answer: 1,
      explain: 'Paragraphs 5 and 6 summarize her four shuttle missions, nearly 1,000 space hours, and historic leadership as director of Johnson Space Center in Houston.',
    }),
  ],
});
