// Grade 6 informational: Caverns of Sonora.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const INFO_CAVES = makeSet({
  id: 'g6-info-caves',
  grade: 6,
  kind: 'reading',
  title: 'Crystal Palaces Beneath the Hill Country',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-info-caves-p',
    title: 'Crystal Palaces Beneath the Hill Country',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'An Accidental Discovery' },
      { kind: 'p', text: 'In the spring of 1905, a sheepdog chased a raccoon across a dusty Texas ranch. The ranch was located fifteen miles southwest of Sonora. The raccoon ran into a small hole under a limestone rock. Rancher Will Mayfield followed the dog\'s loud barking. He found an opening less than twenty inches wide. Cool air was blowing out of the crack with great force. The cool breeze showed that a huge room lay hidden deep underground.' },
      { kind: 'p', text: 'For nearly fifty years, local teenagers climbed into the upper passages. They carried carbide lamps and carved their initials on the stone. But the most amazing rooms stayed secret. In 1955, a team of experienced cavers crawled through a tight, muddy chute called the Keyhole. Their lights revealed an underground wonderland. It was unlike anything ever seen in North America.' },
      { kind: 'heading', text: 'Architects of Stone' },
      { kind: 'p', text: 'The Caverns of Sonora formed more than a million years ago in thick Segovia limestone. Rainwater fell on the soil and mixed with dead leaves. This created a mild acid. The water seeped into cracks in the bedrock. Slowly, it dissolved the soft limestone along fault lines. Over thousands of years, it hollowed out wide tunnels and tall domes. Later, shifts in the earth lifted the ground. The water drained away, and air filled the empty rooms. Water full of minerals kept dripping from the ceiling. Very slowly, these mineral drops built magnificent stone shapes called speleothems, or cave decorations.' },
      { kind: 'p', text: 'Most limestone caves have stalactites hanging from the ceiling and stalagmites rising from the floor. But Sonora is famous for its rare helictites. Most cave formations grow straight down or straight up because of gravity. Helictites break that rule. They grow in wild patterns. They twist like corkscrews, curl like fishhooks, and branch out like delicate crystal needles.' },
      { kind: 'p', text: 'How do helictites defy gravity? Scientists found that capillary action is the answer. Water moves through tiny tubes in the center of each formation. The tubes are so narrow that water pressure pushes the mineral moisture outward in any direction. When the water evaporates, tiny crystals of calcite form at the tip. These fresh crystals guide the formation sideways or even upward.' },
      { kind: 'heading', text: 'Fragile Treasures and Modern Conservation' },
      { kind: 'p', text: 'The environment inside the Caverns of Sonora is very fragile. The cave stays at seventy-two degrees Fahrenheit all year, with ninety-eight percent humidity. The living crystal formations grow very slowly. They add only about one cubic inch of rock every hundred years. Because the crystals are damp and porous, human touch can harm them. Oils from human skin can coat the stone and repel water droplets. This halts crystal growth forever.' },
      { kind: 'p', text: 'In November 2006, a careless visitor broke off a large piece of the Butterfly, the cave\'s most famous formation. The loss shocked cave scientists around the world. In response, park managers added high-tech security cameras. They also trained guides to watch over every tour. Today, careful protection ensures that this underground treasure will remain safe for future visitors to admire.' },
      { kind: 'sidebar', title: 'Cave Formations at a Glance', text: '• Stalactites: Grow downward from the ceiling as calcium-rich water drips.\n• Stalagmites: Grow upward from the floor where water droplets strike mineral deposits.\n• Helictites: Formations that twist, curl, and branch in horizontal or upward directions via capillary pressure.\n• Soda Straws: Hollow, paper-thin tubes of calcite that represent the early stage of stalactite growth.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [3, 4, 5],
      stem: 'What is the controlling idea of paragraphs 3 through 5?',
      choices: [
        ['Ranchers discovered the Caverns of Sonora while searching for lost livestock on a ranch.', 'This describes the initial discovery in paragraph 1, not paragraphs 3 through 5.'],
        'The Caverns of Sonora feature rare helictite crystals that grow in odd directions.',
        ['All limestone caves formed in Texas contain identical kinds of stalactites and stalagmites.', 'Paragraph 4 explains that Sonora is unique because its formations differ from typical caves.'],
        ['Experienced cavers in 1955 mapped every room inside the Segovia limestone formation.', 'The paragraphs focus on the rare formations rather than the mapping expedition.'],
      ],
      answer: 1,
      explain: 'Paragraphs 3 through 5 explain how the cave formed and why its helictites are famous for growing in unusual directions through capillary action.',
    }),
    twoq({
      standard: 'rla:6.8D.ii', cites: [6],
      a: {
        prompt: 'Part A: How does the sidebar "Cave Formations at a Glance" support the article?',
        choices: [
          'It defines common cave formations and compares them with rare helictites.',
          ['It lists admission fees and opening hours for tourists visiting Sonora Caverns.', 'The sidebar contains scientific definitions, not visitor logistics.'],
          ['It explains how rancher Will Mayfield trained his sheepdog to herd sheep.', 'The sheepdog is mentioned in paragraph 1, not in the sidebar.'],
          ['It argues that casual visitors should never be allowed inside deep caves.', 'The sidebar is educational and objective rather than an argument against visitors.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which formation from the sidebar represents the earliest stage of stalactite growth?',
        choices: [
          ['Large stalagmites', 'Stalagmites grow upward from the cave floor.'],
          ['Helictites', 'Helictites grow sideways or upward via capillary pressure.'],
          'Soda Straws',
          ['Keyholes', 'The Keyhole was a narrow passage crawled through by cavers, not a mineral formation.'],
        ],
        answer: 2,
      },
      explain: 'The sidebar defines four formation types, noting that "Soda Straws" are hollow, paper-thin tubes representing the early stage of stalactites.',
    }),
    mcq({
      standard: 'rla:6.8D.iii', cites: [4, 5],
      stem: 'Which organizational pattern is used in paragraphs 4 and 5 to explain helictites?',
      choices: [
        ['Chronological sequence tracing historical trips of spelunkers.', 'The text does not order events by date in these paragraphs.'],
        'Comparison and cause and effect, describing helictites.',
        ['Problem and solution detailing how cavers repaired broken rocks.', 'The repair of formations is not the focus of these paragraphs.'],
        ['Advantage and disadvantage analyzing electricity costs in caves.', 'Electricity and commercial costs are never discussed.'],
      ],
      answer: 1,
      explain: 'Paragraphs 4 and 5 compare typical formations with helictites and explain the scientific cause behind helictites defying gravity.',
    }),
    mcq({
      standard: 'rla:6.9C', cites: [6, 7],
      stem: 'Why did the author include subheadings such as "Architects of Stone" and "Fragile Treasures and Modern Conservation"?',
      choices: [
        'To divide the article into clear sections that guide the reader.',
        ['To identify which sections were composed by different scientists.', 'The entire selection was written by one author.'],
        ['To list the titles of historical books about geology in West Texas.', 'The subheadings label passage sections, not books.'],
        ['To warn hikers about the hazards of crawling through dark fissures.', 'The subheadings organize concepts rather than serve as trail warnings.'],
      ],
      answer: 0,
      explain: 'Subheadings divide informational text into distinct conceptual topics, helping readers locate information about formation, science, and protection.',
    }),
    msq({
      standard: 'rla:6.5G', cites: [6, 7],
      stem: 'Based on paragraphs 6 and 7, which **two** factors make the Caverns of Sonora especially fragile?',
      choices: [
        'Natural oils from a human touch can stop mineral growth permanently.',
        ['Frequent earthquakes repeatedly crack the limestone ceilings.', 'Earthquakes are not mentioned as a threat in the passage.'],
        'Careless vandalism can destroy formations that took centuries to grow.',
        ['The temperature inside the cave shifts drastically between seasons.', 'Paragraph 6 states the temperature remains steady at 72 degrees year-round.'],
        ['Toxic levels of carbon dioxide make the cavern air unsafe to breathe.', 'The air is safe for guided walking tours.'],
      ],
      answers: [0, 2],
      explain: 'Paragraphs 6 and 7 explain that skin oils coat crystals and halt growth, while careless vandalism can permanently break ancient formations.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [5],
      stem: 'Read this sentence from paragraph 5: "Scientists found that **capillary action** is the answer." In this context, what does **capillary action** describe?',
      choices: [
        ['The eruption of volcanic steam through cracks in deep bedrock.', 'Volcanic eruptions are not involved in limestone cave formations.'],
        'The movement of liquid through tiny tubes against gravity.',
        ['The rapid erosion of limestone cliffs caused by flash floods.', 'The process is slow and microscopic, not a surface flash flood.'],
        ['The chemical reaction between oxygen and iron inside rocks.', 'The process involves water pressure pushing calcite outward.'],
      ],
      answer: 1,
      explain: 'Capillary action refers to water moving through tiny internal tubes independently of gravity, depositing mineral crystals in multiple directions.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [1],
      stem: 'Which detail from paragraph 1 suggests that the underground chamber was huge before anyone entered it?',
      choices: [
        'Cool air was blowing out of the crack with great force.',
        ['A raccoon ran into a small hole to escape a sheepdog.', 'The raccoon was simply escaping from a predator.'],
        ['Rancher Mayfield noticed loose pebbles around the ledge.', 'Pebbles do not indicate the size of an underground chamber.'],
        ['The ranch was located fifteen miles southwest of Sonora.', 'The location gives geography rather than underground size.'],
      ],
      answer: 0,
      explain: 'The strong blast of cool air breathing out from a narrow crack indicated a huge underground room with significant air volume.',
    }),
  ],
});
