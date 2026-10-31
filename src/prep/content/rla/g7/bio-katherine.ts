// Grade 7 literary nonfiction / biography: Katherine Johnson.
import { makeSet, mcq, twoq } from '../author.ts';

export const BIO_KATHERINE = makeSet({
  id: 'g7-bio-katherine',
  grade: 7,
  kind: 'reading',
  title: 'Orbits of Genius: Katherine Johnson',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-bio-katherine-p',
    title: 'Orbits of Genius: Katherine Johnson',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'Long before digital computers worked inside NASA control rooms, space travel relied on human minds. Skilled math experts solved hard equations by hand with pencil and paper. Among these early workers, few matched the skill and quiet brilliance of Katherine Johnson. Born in 1918 in White Sulphur Springs, West Virginia, Katherine loved numbers as a young child. She counted everything in sight. She counted the stone steps up to church, the forks on the dinner table, and the dishes she dried every night.' },
      { kind: 'p', text: 'During those years, unfair laws and racial prejudice blocked many paths for Black girls. West Virginia did not offer high school for Black students in Katherine\'s home county. But her parents saw her great talent with numbers. They made big sacrifices and moved the family over one hundred miles to Institute, West Virginia. There, Katherine could attend high school on a college campus. She moved through school with ease. She finished high school at fourteen and earned top honors in college by age eighteen.' },
      { kind: 'p', text: 'In 1953, Katherine took a job at the Langley lab in Virginia. She joined the team that soon became NASA. She worked in a separate office with other Black women who solved math problems. They worked with slide rules and adding machines. Katherine set herself apart by asking clear questions. When told that women did not usually attend military flight briefings, she asked politely, "Is there a law against it?" Finding none, she began attending editorial meetings, quickly becoming an indispensable analytical voice.' },
      { kind: 'p', text: 'Katherine\'s skill with geometry became vital during the Space Race. In 1961, she calculated the flight path and launch window for Alan Shepard, the first American in space. Plotting a path through space was far harder than tracking a plane in the sky. A rocket rose from a spinning Earth toward a splashdown spot in a moving ocean. Every equation had to account for gravity and air drag with zero margin for error. A tiny slip in the math could mean lost lives.' },
      { kind: 'p', text: 'Her reputation for perfect accuracy led to a famous moment in 1962. Astronaut John Glenn prepared to become the first American to orbit Earth. NASA had started using new electronic computers to track orbits. Glenn felt wary of the new machines. He told flight engineers, "Get the girl to check the numbers. If she says they\'re good, then I\'m ready to go." Katherine worked for days checking every line of math by hand. Her figures matched the machine\'s data to the decimal point. Glenn flew into space and returned safely as a hero.' },
      { kind: 'p', text: 'Katherine later helped plan the Apollo 11 moon mission in 1969. In 1970, an oxygen tank burst aboard Apollo 13 on its way to the moon. Katherine quickly drew up backup flight charts. Her math helped steer the damaged spacecraft safely back home. Her career at NASA lasted more than thirty years. Her work helped open the way for space shuttles and weather satellites.' },
      { kind: 'p', text: 'In 2015, President Barack Obama gave Katherine Johnson the Presidential Medal of Freedom. This is the highest civilian award in the nation. When people asked about her long career, she gave credit to her team: "I was just doing my job. I liked what I was doing, and I liked working with smart people." Her life proved that steady work and sharp thinking can help people reach the stars.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 7],
      stem: 'What is the controlling idea of the biography?',
      choices: [
        ['Katherine Johnson was an astronaut who flew several NASA missions in the 1960s.', 'Katherine was a research mathematician, not an astronaut.'],
        'With brilliant math and grit, Katherine Johnson shaped US space flight.',
        ['Electronic computers at NASA completely replaced the need for human math skills.', 'The passage shows Glenn relying on Katherine\'s manual checks over computers.'],
        ['NASA succeeded during the Space Race by using mechanical adding machines alone.', 'Adding machines were tools, but human talent was the essential force.'],
      ],
      answer: 1,
      explain: 'The controlling idea highlights Katherine Johnson\'s mathematical talent, persistence against barriers, and vital role in historic NASA missions.',
    }),
    mcq({
      standard: 'rla:7.9B', cites: [1, 2, 3, 5],
      stem: 'How does the chronological structure contribute to the author\'s purpose?',
      choices: [
        ['It compares Soviet rocket engineering with American spacecraft blueprints.', 'The text focuses on Katherine\'s life and career, not Soviet engineering.'],
        ['It explains how lunar orbits work before detailing astronaut flight paths.', 'The focus is on Katherine\'s life progression, not physics instruction.'],
        'It traces Katherine\'s growth, showing how dedication overcame barriers.',
        ['It lists Katherine\'s honors before describing her childhood in the hills.', 'The text proceeds forward in time from her youth to her adult honors.'],
      ],
      answer: 2,
      explain: 'A chronological structure allows the reader to follow Katherine\'s growth from childhood into a key NASA mathematician, emphasizing lifelong perseverance.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [5],
      stem: 'Which quotation best shows that astronauts placed great personal trust in Katherine\'s calculations?',
      choices: [
        ['"In 1953, Katherine took a job at the Langley research lab in Hampton, Virginia."', 'This describes where she worked rather than astronaut trust.'],
        '"Get the girl to check the numbers. If she says they\'re good, then I\'m ready to go."',
        ['"Katherine loved numbers as a young child and counted stone steps up to church."', 'This illustrates childhood curiosity rather than John Glenn\'s confidence.'],
        ['"In 2015, President Barack Obama gave Katherine Johnson the Presidential Medal of Freedom."', 'This represents a national award decades later.'],
      ],
      answer: 1,
      explain: 'John Glenn\'s direct request to have Katherine personally verify the computer numbers demonstrates his complete faith in her accuracy.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3],
      a: {
        prompt: 'Part A: What does Katherine\'s question, "Is there a law against it?" reveal about her character?',
        choices: [
          'She questioned unfair barriers with calm logic that exposed bias.',
          ['She was completely unaware of racial segregation policies in Virginia.', 'She was well aware of segregation, having attended segregated schools.'],
          ['She preferred working alone without having to speak with flight pilots.', 'She actively sought to attend briefings and collaborate with engineers.'],
          ['She wanted to file lawsuits against the aeronautics research laboratory.', 'She asked simple questions to gain entry rather than filing legal suits.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which detail from paragraph 3 best supports the answer to Part A?',
        choices: [
          ['"She worked in a separate office with other Black women who solved flight math problems."', 'This states the initial segregated setup.'],
          '"Finding none, she began attending editorial meetings..."',
          ['"They worked with slide rules and adding machines to calculate rocket paths."', 'This describes tools, not workplace interaction.'],
          ['"She was assigned to a segregated computing group with other Black female mathematicians."', 'This notes the restriction rather than her proactive logic.'],
        ],
        answer: 1,
      },
      explain: 'By politely pointing out that no rule forbade women from briefings, Katherine exposed unwritten customs and earned a place at the table.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [4],
      stem: 'In paragraph 4, how does the author use contrast to explain the challenge of space flight?',
      choices: [
        ['The author contrasts Soviet rocket budgets with American space funding.', 'Budgets are not discussed in paragraph 4.'],
        'The author contrasts air flight with space flight and moving targets.',
        ['The author contrasts manual slide rules with modern touchscreen tablets.', 'Touchscreen tablets did not exist in the 1960s.'],
        ['The author contrasts suborbital rocket flights with passenger air routes.', 'The comparison is between atmospheric flying and celestial orbital mechanics.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 contrasts atmospheric flight with space travel to show the extra difficulty of launching from a rotating planet toward moving ocean coordinates.',
    }),
    mcq({
      standard: 'rla:7.8D.ii', cites: [6],
      stem: 'Based on paragraph 6, what key role did Katherine Johnson play during the Apollo 13 crisis?',
      choices: [
        'Her backup charts gave the flight math needed to steer the ship home.',
        ['She traveled to the Pacific recovery vessel to fix the damaged antenna.', 'She worked from flight control centers, not on a recovery ship.'],
        ['She designed the replacement oxygen tanks installed during the return.', 'She was a mathematician calculating trajectories, not an equipment designer.'],
        ['She radioed direct spoken commands to the astronauts from flight control.', 'Flight controllers and flight directors communicated on the radio.'],
      ],
      answer: 0,
      explain: 'Paragraph 6 states that when the oxygen tank burst, Katherine\'s backup navigation charts and calculations provided the safe route back to Earth.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3],
      stem: 'Which statement provides an objective summary of Katherine\'s early life and entry into NASA?',
      choices: [
        'Facing school limits, Katherine finished college early and joined NASA.',
        ['Katherine won a grant to France before opening a flight school in Virginia.', 'She did not study in France or open a flight school.'],
        ['Her parents barred her from work until she earned a degree in aerodynamics.', 'Her parents supported her education and she worked as a human computer.'],
        ['After serving as a military pilot, Katherine joined NASA to write pilot laws.', 'She was a civilian mathematician, not a military pilot.'],
      ],
      answer: 0,
      explain: 'This concise choice summarizes how her family overcame educational barriers, her early graduation, and her hiring at the research center that became NASA.',
    }),
  ],
});
