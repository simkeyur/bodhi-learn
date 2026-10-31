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
      { kind: 'p', text: 'Long before electronic microprocessors and supercomputers hummed inside NASA flight control centers, complex space exploration depended upon the formidable mathematical intellect of human calculations. Among these pioneering human computers, few matched the precision, tenacity, and quiet brilliance of Katherine Johnson. Born in 1918 in the small mountain town of White Sulphur Springs, West Virginia, Katherine displayed an insatiable fascination with numbers from early childhood, famously counting everything in her path—from the steps to church to the dishes she dried.' },
      { kind: 'p', text: 'In an era severely constrained by racial segregation and gender prejudice, educational opportunities for African American girls were strictly limited. West Virginia public schools did not offer secondary schooling for Black students in her home county. Recognizing their daughter\'s extraordinary academic gift, Katherine\'s parents made immense financial sacrifices, relocating the family more than one hundred miles to Institute, West Virginia, so she could attend high school on the campus of West Virginia State College. Katherine proved astonishingly precocious, graduating from high school at fourteen and earning highest honors in mathematics and French by age eighteen.' },
      { kind: 'p', text: 'In 1953, Katherine secured a position at the Langley Memorial Aeronautical Laboratory in Hampton, Virginia, joining the National Advisory Committee for Aeronautics (NACA), the agency that would become NASA. Assigned to the segregated West Area Computing unit, Katherine and her fellow African American female mathematicians performed complex aerodynamic equations by hand using slide rules and mechanical adding machines. While many accepted the routine nature of data entry, Katherine distinguished herself by asking probing questions at every turn. When told that women did not customarily attend military flight briefings, Katherine politely insisted, "Is there a law against it?" Finding none, she began attending editorial meetings, quickly becoming an indispensable analytical voice.' },
      { kind: 'p', text: 'Katherine\'s mastery of celestial geometry proved pivotal when the United States entered the high-stakes Space Race against the Soviet Union. In 1961, she calculated the precise launch window and suborbital flight trajectory for Alan Shepard, the first American in space. Unlike atmospheric aeronautics, spaceflight required calculating moving launch points on a spinning Earth with target splashdown coordinates in a turbulent ocean, factoring in gravitational pull and atmospheric drag with zero margin for error.' },
      { kind: 'p', text: 'Her reputation for flawless accuracy led to one of the most famous moments in spaceflight history. In 1962, as astronaut John Glenn prepared to become the first American to orbit Earth aboard Friendship 7, NASA had transitioned to automated IBM mainframe computers to calculate orbital mechanics. Distrustful of the new electronic machines, Glenn famously instructed engineers, "Get the girl to check the numbers. If she says they\'re good, then I\'m ready to go." Katherine spent day and night recalculating the equations by hand, matching the machine\'s figures to the decimal place. Glenn launched safely, achieved orbit, and returned a national hero.' },
      { kind: 'p', text: 'Katherine\'s trajectory calculations later supported the Apollo 11 lunar landing in 1969, synchronizing the lunar module\'s rendezvous with the command module in lunar orbit. When tragedy threatened Apollo 13 in 1970 after an oxygen tank ruptured, Katherine\'s backup navigation procedures and orbital charts helped ensure the crew\'s safe return to Earth. Her work spanned three decades, paving the way for the Space Shuttle program and satellite communications.' },
      { kind: 'p', text: 'In 2015, President Barack Obama awarded Katherine Johnson the Presidential Medal of Freedom, the nation\'s highest civilian honor. When asked about her groundbreaking legacy, Katherine remained characteristically modest, emphasizing teamwork and boundless curiosity: "I was just doing my job. I liked what I was doing, and I liked working with smart people." Her journey proved that intellectual rigor and quiet perseverance can shatter both atmospheric boundaries and societal barriers, guiding humanity safely across the heavens.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 7],
      stem: 'What is the controlling idea of the biography?',
      choices: [
        ['Katherine Johnson was an astronaut who flew several pioneering NASA missions in the 1960s.', 'Katherine was a research mathematician, not an astronaut.'],
        'Through extraordinary mathematical brilliance, persistence against societal barriers, and dedication to precision, Katherine Johnson played an indispensable role in America\'s historic space missions.',
        ['The development of IBM mainframe computers completely eliminated the need for human mathematics at NASA.', 'The passage shows Glenn trusting Katherine\'s hand calculations over the IBM computer.'],
        ['NASA succeeded during the Space Race exclusively through advanced mechanical slide rules.', 'Slide rules were tools, but human intellectual genius was the driving force.'],
      ],
      answer: 1,
      explain: 'The controlling idea encapsulates Katherine Johnson\'s mathematical genius, her overcoming of racial and gender barriers, and her critical contributions to landmark NASA spaceflights.',
    }),
    mcq({
      standard: 'rla:7.9B', cites: [1, 2, 3, 5],
      stem: 'How does the chronological structure of the text contribute to the author\'s purpose?',
      choices: [
        ['It compares Soviet spacecraft engineering directly with American rocket designs.', 'The text focuses on Katherine\'s biography, not comparative rocket engineering.'],
        ['It explains the physical mechanics of lunar eclipses before describing astronaut training.', 'Lunar eclipses are not the focus; orbital flight trajectories are.'],
        'It traces Katherine\'s journey from a curious child counting steps to an essential NASA mathematician, illustrating how lifelong discipline and courage overcame systemic barriers.',
        ['It highlights Katherine\'s retirement speeches before detailing her childhood in West Virginia.', 'The text moves forward in chronological order from youth to adulthood and honors.'],
      ],
      answer: 2,
      explain: 'A chronological structure allows the reader to follow Katherine\'s growth, family sacrifices, early career milestones, and crowning achievements in historical sequence.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [5],
      stem: 'Which quotation best supports the claim that astronauts placed complete personal trust in Katherine Johnson\'s mathematical precision?',
      choices: [
        ['"In 1953, Katherine secured a position at the Langley Memorial Aeronautical Laboratory..."', 'This describes her initial employment, not astronaut trust.'],
        '"Get the girl to check the numbers. If she says they\'re good, then I\'m ready to go."',
        ['"Katherine displayed an insatiable fascination with numbers from early childhood..."', 'This characterizes her early interests, not John Glenn\'s confidence in her work.'],
        ['"In 2015, President Barack Obama awarded Katherine Johnson the Presidential Medal of Freedom..."', 'This represents presidential recognition decades later.'],
      ],
      answer: 1,
      explain: 'John Glenn\'s direct quote in paragraph 5 is the clearest textual evidence that he staked his life and mission readiness on Katherine\'s personal calculation check.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3],
      a: {
        prompt: 'Part A: What does Katherine\'s question, "Is there a law against it?" reveal about her approach to workplace discrimination?',
        choices: [
          'She challenged gender and racial exclusion not through bitter confrontation, but through calm, principled logic that exposed unwritten social prejudices.',
          ['She was unaware of the existing segregation policies in Virginia.', 'She was acutely aware of them, having attended segregated schools.'],
          ['She preferred working in complete isolation from engineers and pilots.', 'She actively sought to attend briefings and collaborate with engineers.'],
          ['She wanted to file lawsuits against the aeronautics laboratory.', 'She asked questions to gain entrance into meetings without legal action.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which detail from paragraph 3 best reinforces the answer to Part A?',
        choices: [
          ['"...using slide rules and mechanical adding machines."', 'This describes calculation tools, not social interaction.'],
          '"Finding none, she began attending editorial meetings, quickly becoming an indispensable analytical voice."',
          ['"...joining the National Advisory Committee for Aeronautics..."', 'This is an agency name.'],
          ['"Assigned to the segregated West Area Computing unit..."', 'This describes the institutional restriction, whereas her attendance proved her principled persistence.'],
        ],
        answer: 1,
      },
      explain: 'By asking whether a written law forbade women from attending briefings, Katherine exposed that the barrier was merely custom, allowing her to step forward into leadership.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [4],
      stem: 'In paragraph 4, how does the author use contrast to explain the mathematical complexity of spaceflight?',
      choices: [
        ['The author contrasts the cost of Soviet rockets with American spacecraft budgets.', 'Financial budgets are not discussed in paragraph 4.'],
        'The author contrasts conventional atmospheric aeronautics with spaceflight, highlighting how calculating trajectories on a rotating planet requires accounting for gravitational pull and moving targets with zero margin for error.',
        ['The author contrasts manual slide rules with modern touchscreen tablets.', 'Modern tablets are not discussed in the historical context of 1961.'],
        ['The author contrasts Shepard\'s suborbital flight with commercial airplane passenger routes.', 'The contrast is between atmospheric flight physics and orbital mechanics.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 contrasts atmospheric flight with spaceflight to show why celestial geometry demanded far more rigorous equations (spinning Earth, moving targets, gravity, drag).',
    }),
    mcq({
      standard: 'rla:7.8D.ii', cites: [6],
      stem: 'Based on paragraph 6, what key role did Katherine Johnson play during the Apollo 13 crisis?',
      choices: [
        'Her backup navigation procedures and orbital charts provided the critical flight paths needed to steer the damaged spacecraft safely back to Earth.',
        ['She traveled to the spacecraft recovery ship in the Pacific Ocean to repair the electrical antenna.', 'She was at flight control calculating trajectories, not at sea repairing equipment.'],
        ['She designed the replacement oxygen tanks installed during the return flight.', 'She was a mathematician calculating trajectories, not a mechanical hardware engineer.'],
        ['She commanded the Apollo 13 flight crew from Mission Control via radio.', 'Flight directors and astronauts communicated on radio; she provided the underlying mathematics.'],
      ],
      answer: 0,
      explain: 'Paragraph 6 specifies that when an oxygen tank ruptured on Apollo 13, Katherine\'s backup navigation procedures and orbital charts enabled the astronauts\' safe return.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3],
      stem: 'Which statement provides an objective summary of Katherine\'s early education and entry into NASA?',
      choices: [
        'Despite segregation laws that lacked high schools for Black students in her county, Katherine\'s family relocated so she could graduate college early; she then joined NACA\'s computing unit, where her inquisitive nature propelled her into crucial mission planning.',
        ['Katherine won a mathematics scholarship to study in France before returning to West Virginia to open a private flight academy.', 'She studied French in college, but did not study in France or open an academy.'],
        ['Katherine\'s parents refused to allow her to work with computers until she earned a doctorate in aerospace engineering.', 'Her parents supported her education from childhood, and she worked as a human computer with a bachelor\'s degree.'],
        ['After working as a pilot in Hampton, Virginia, Katherine joined the military to draft flight regulations for women.', 'She was a civilian mathematician, not a military pilot.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes her family\'s move for secondary education, her rapid academic advancement, her hiring at Langley, and her proactive career rise.',
    }),
  ],
});
