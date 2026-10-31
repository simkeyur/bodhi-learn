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
      { kind: 'p', text: 'In July 1969, eleven-year-old Ellen Ochoa sat on the rug in her California home. She was watching the Apollo 11 moon landing on television. Fuzzy black-and-white pictures showed astronauts stepping onto the lunar dust. Radio voices crackled between Houston and the lunar module Eagle. Like most young girls at that time, Ellen never thought space travel could be in her future. In those days, all astronauts were male military pilots. Teachers rarely encouraged girls to study math and science in school. Her family was proud of her curiosity, but space seemed very far away. Ellen had no idea that she would one day make history in space.' },
      { kind: 'p', text: 'Growing up, Ellen loved music, reading, and solving math problems. In college at San Diego State University, she started out studying journalism. But after taking a physics class, her goals changed fast. She liked the way math equations could explain light and motion. She decided to switch her major to physics. An adviser told her that science was too hard for women. Ochoa was undeterred. She studied hard, graduated at the top of her class in 1980, and earned master\'s and doctoral degrees in electrical engineering from Stanford University.' },
      { kind: 'p', text: 'At Stanford, Ochoa studied optics, the science of light. She helped invent three computer systems that used light beams to inspect parts and look for flaws. These new tools helped companies make better products and let scientists study satellite photos. Her work caught the eye of leaders at NASA\'s Ames Research Center in California. Soon, she was leading a team of thirty-five researchers. They built smart imaging systems for future space flights.' },
      { kind: 'p', text: 'In the late 1980s, NASA began looking for scientists to train as astronauts. Ochoa applied right away. Thousands of people sent in applications, but NASA chose only a small group. Ochoa was selected in 1990. She spent three years training hard for space travel. In April 1993, she flew on the Space Shuttle Discovery. That historic flight made her the first Hispanic woman in space. She was proud to represent her family and her heritage on the crew.' },
      { kind: 'p', text: 'During the nine-day mission, Ochoa had a big job. She operated the shuttle\'s long robotic arm. She used the arm to lift a research satellite out of the cargo bay and release it into orbit. The satellite gathered data about the sun and solar wind. Later in the flight, Ochoa used the mechanical arm to capture the satellite and bring it back inside the shuttle. Over the next ten years, Ochoa flew on three more shuttle missions. She spent nearly one thousand hours in orbit and helped build the International Space Station.' },
      { kind: 'p', text: 'In 2012, Ochoa reached another big milestone. She became the director of the Johnson Space Center in Houston, Texas. She was the second woman and the first Hispanic leader to direct the famous center. Ochoa guided thousands of scientists, engineers, and flight controllers. Her teams supported astronauts living on the space station. They also began designing new spacecraft to send humans back to the Moon.' },
      { kind: 'p', text: 'Today, Ochoa is retired from NASA and belongs to the Astronaut Hall of Fame. She spends time visiting middle schools to speak with students. She tells them that curiosity, steady practice, and education can open many doors. She encourages young people to explore science and never give up on their goals. Her own path shows that hard work can turn unexpected dreams into reality.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [2, 4, 7],
      stem: 'What is the controlling idea of the selection?',
      choices: [
        ['NASA\'s astronaut training program accepted only candidates who held engineering degrees from Stanford.', 'This is a specific detail about degrees rather than the central idea of the biography.'],
        'Through hard work, Ellen Ochoa overcame barriers to become an astronaut and NASA director.',
        ['Operating the robotic arm was the most hazardous assignment during early shuttle flights in orbit.', 'This detail describes one mission task rather than the overall passage.'],
        ['Military pilots were the only people qualified to lead scientific research teams during space missions.', 'The text explains how civilian scientists also became astronauts and leaders.'],
      ],
      answer: 1,
      explain: 'The controlling idea covers Ochoa\'s entire journey: working hard to overcome doubts, becoming the first Hispanic woman in space, and leading Johnson Space Center.',
    }),
    twoq({
      standard: 'rla:6.6C', cites: [2, 3],
      a: {
        prompt: 'Part A: How did Ochoa respond when advised against studying engineering?',
        choices: [
          'She ignored discouraging words and kept studying advanced science degrees.',
          ['She returned to studying journalism and wrote articles about famous scientists.', 'She stayed in physics and never returned to journalism.'],
          ['She filed a complaint with the university president about her academic adviser.', 'The text does not mention any complaints, only that she kept going.'],
          ['She decided to leave college to begin working for a private optics manufacturer.', 'She completed her bachelor\'s degree and went on to graduate school.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from paragraph 2 best supports the answer to Part A?',
        choices: [
          ['"In college at San Diego State University, she started out studying journalism."', 'This describes her initial focus before she discovered physics.'],
          '"Ochoa was undeterred."',
          ['"She liked the way math equations could explain light and motion in the world."', 'This explains why she enjoyed physics, not how she responded to criticism.'],
          ['"An adviser told her that science was too hard for women to study in college."', 'This gives the adviser\'s opinion rather than Ochoa\'s reaction.'],
        ],
        answer: 1,
      },
      explain: 'When an adviser told her science was too hard for women, paragraph 2 simply states: "Ochoa was undeterred." She proved her ability by graduating at the top of her class.',
    }),
    mcq({
      standard: 'rla:6.9A', cites: [6, 7],
      stem: 'What is the author\'s primary purpose in writing this biography?',
      choices: [
        ['To describe the mechanical parts and tools on the space shuttle\'s long robotic arm.', 'The arm is mentioned in paragraph 5, but is not the main focus of the biography.'],
        ['To argue that robotic space missions are much more useful than human spaceflight.', 'The author writes positively about human space exploration.'],
        'To share the inspiring story of Ellen Ochoa\'s career in space exploration.',
        ['To compare the Apollo moon landings with later missions to the space station.', 'The Apollo 11 landing is mentioned only to establish Ochoa\'s childhood.'],
      ],
      answer: 2,
      explain: 'The biography aims to inform and inspire readers by detailing Ochoa\'s path from a curious student to an astronaut and director of Johnson Space Center.',
    }),
    mcq({
      standard: 'rla:6.9B', cites: [1, 2, 4, 6],
      stem: 'How does the chronological structure of the text support the author\'s message?',
      choices: [
        'It shows Ochoa\'s steady growth from a young student into an astronaut and leader.',
        ['It explains the differences between college classes in California and Texas schools.', 'The passage does not compare state college systems.'],
        ['It details the scientific steps required to launch a space shuttle into low orbit.', 'The article focuses on Ochoa\'s life rather than technical launch procedures.'],
        ['It contrasts the early Apollo 11 moon landing with the Artemis lunar space program.', 'Apollo 11 provides historical context rather than a detailed comparison.'],
      ],
      answer: 0,
      explain: 'Moving through events in order shows how Ochoa\'s education, research, spaceflights, and leadership built upon one another over time.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [3, 5],
      stem: 'Which **two** conclusions about Ochoa\'s technical skills are supported by the passage?',
      choices: [
        'Her work in optics helped build systems for analyzing images on space missions.',
        ['She preferred doing office paperwork rather than handling flight equipment in space.', 'She flew four missions and operated the 50-foot robotic arm.'],
        'Her skill with the robotic arm made her valuable for launching research satellites.',
        ['She served as the chief pilot for all four of her space shuttle flights into orbit.', 'Ochoa was a mission specialist who handled scientific payloads.'],
        ['She designed the rocket engines used to launch the Space Shuttle Discovery.', 'Her expertise was in optics, computer systems, and robotics.'],
      ],
      answers: [0, 2],
      explain: 'Paragraphs 3 and 5 highlight her optical patents for image systems and her skillful operation of the shuttle\'s robotic arm to deploy and retrieve satellites.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [2],
      stem: 'Read this sentence from paragraph 2: "Ochoa was **undeterred**." What does the word **undeterred** mean in this context?',
      choices: [
        ['easily discouraged by minor obstacles', 'Ochoa showed resilience and stayed on course.'],
        ['completely uncertain about which career path to follow', 'She committed firmly to studying physics and engineering.'],
        'not stopped or discouraged from continuing',
        ['surprised by how difficult the work was', 'She worked hard and graduated at the top of her class.'],
      ],
      answer: 2,
      explain: 'The prefix "un-" means not. Ochoa refused to let an adviser\'s discouraging warning stop her from studying engineering.',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [5, 6],
      stem: 'Which sentence best summarizes Ochoa\'s later career at NASA?',
      choices: [
        ['She left NASA after her first flight to design cameras for commercial airlines.', 'She flew three more space missions and later became a center director.'],
        'After flying four shuttle missions, she directed the Johnson Space Center.',
        ['She traveled between universities to encourage professors to change class rules.', 'She speaks to students about STEM, but does not lobby universities.'],
        ['She retired from public service right after helping build the space station.', 'She served as director of the Johnson Space Center before retiring.'],
      ],
      answer: 1,
      explain: 'Paragraphs 5 and 6 describe her four missions, nearly 1,000 hours in space, and her historic leadership as director of the Johnson Space Center.',
    }),
  ],
});
