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
      { kind: 'p', text: 'In the spring of 1905, on an arid sheep ranch fifteen miles southwest of Sonora, Texas, a sheepdog chased a raccoon into a small hole beneath a limestone outcropping. When rancher Will Mayfield followed the barking, he peered into a narrow opening less than twenty inches wide. Cool air was breathing from the dark fissure with surprising force, hinting that a massive underground chamber lay hidden beneath the dusty scrubland.' },
      { kind: 'p', text: 'For nearly fifty years, local teenagers squeezed into the upper passages with carbide lamps, carving their initials on rock ledges. But the cavern\'s true wonder remained secret until 1955, when a team of professional spelunkers crawled through a narrow, muddy chute known as the "Keyhole." Breaking through into the lower rooms, their lights illuminated an underground wonderland unlike anything known in North America.' },
      { kind: 'heading', text: 'Architects of Stone' },
      { kind: 'p', text: 'The Caverns of Sonora formed approximately one to one-and-a-half million years ago in Cretaceous limestone known as the Segovia Formation. During this ancient geological epoch, rainwater mixed with decaying surface vegetation to create weak carbonic acid. As this acidic groundwater seeped into bedrock fractures, it slowly dissolved the soluble limestone along natural underground fault lines, carving out labyrinthine chambers and towering domes. Later, when regional tectonic uplifting occurred and the subterranean water table dropped, air filled the hollowed rooms. Mineral-rich water droplets continued to percolate through the porous ceiling, beginning the slow, patient process of depositing calcite to create an astonishing variety of speleothems, or cave decorations.' },
      { kind: 'p', text: 'While most limestone caves showcase familiar stalactites (which hang down like icicles) and stalagmites (which rise up from the floor), Sonora is world-famous for its rare helictites. Unlike normal formations governed strictly by gravity, helictites grow in defy-the-rules patterns: spiraling in crazy corkscrews, arching like fishhooks, and radiating outward like delicate crystal needles.' },
      { kind: 'p', text: 'How do helictites defy gravity? Scientists determined that capillary action is the secret. Water moves through microscopic central canals so narrow that hydrostatic pressure pushes the mineral-laden moisture outward in any direction. When the water evaporates, microscopic crystals of calcite deposit on the tip, steering the formation\'s growth sideways or upward.' },
      { kind: 'heading', text: 'Fragile Treasures and Modern Conservation' },
      { kind: 'p', text: 'The environmental ecosystem within the Caverns of Sonora is exceedingly delicate, requiring absolute atmospheric stability to protect the mineral formations. The subterranean microclimate maintains an almost constant year-round temperature of 72 degrees Fahrenheit and an astonishing 98 percent relative humidity. Because the cave\'s living formations continue to grow at an imperceptible rate of roughly one cubic inch every hundred years, the calcite crystals remain extraordinarily sensitive to human presence. Natural skin oils left behind by a single careless touch can coat the porous mineral surface and permanently halt future crystal growth by repelling water droplets.' },
      { kind: 'p', text: 'In November 2006, tragedy struck when an irresponsible visitor broke off a significant portion of the cave\'s most famous formation, the "Butterfly." The incident shocked the international caving community and prompted park managers to install high-definition security monitors and train specialized guides to preserve this subterranean marvel for future generations.' },
      { kind: 'sidebar', title: 'Cave Formations at a Glance', text: '• Stalactites: Grow downward from the ceiling as calcium-rich water drips.\n• Stalagmites: Grow upward from the floor where water droplets strike mineral deposits.\n• Helictites: Formations that twist, curl, and branch in horizontal or upward directions via capillary pressure.\n• Soda Straws: Hollow, paper-thin tubes of calcite that represent the early stage of stalactite growth.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [3, 4, 5],
      stem: 'What is the controlling idea of paragraphs 3 through 5?',
      choices: [
        ['Ranchers discovered the Caverns of Sonora while searching for lost livestock in 1905.', 'This describes the initial discovery in paragraph 1, not paragraphs 3 through 5.'],
        'The Caverns of Sonora contain extraordinarily rare and intricate helictite formations that grow in unusual directions through capillary action.',
        ['All caves formed in Texas contain identical limestone stalactites and stalagmites.', 'Paragraph 4 explains that Sonora is unique precisely because its formations differ from typical caves.'],
        ['Spelunkers in 1955 mapped every room in the Segovia limestone formation.', 'The paragraphs focus on the formations and their science, not just the 1955 map.'],
      ],
      answer: 1,
      explain: 'Paragraphs 3 through 5 explain how the cave formed and why its helictite formations are scientifically rare and world-famous due to capillary action defying gravity.',
    }),
    twoq({
      standard: 'rla:6.8D.ii', cites: [6],
      a: {
        prompt: 'Part A: How does the sidebar "Cave Formations at a Glance" support the information in the article?',
        choices: [
          'It provides clear, concise definitions comparing common cave formations with the rare helictites described in the text.',
          ['It lists the ticket prices and visiting hours for the Caverns of Sonora.', 'The sidebar contains scientific definitions, not visitor logistics.'],
          ['It explains how rancher Will Mayfield trained his sheepdog.', 'The sheepdog is mentioned in paragraph 1, not in the sidebar.'],
          ['It argues that tourists should not be allowed into natural caverns.', 'The sidebar is objective and educational, not an argument against visitors.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which formation from the sidebar represents the earliest stage of stalactite growth?',
        choices: [
          ['Stalagmites', 'Stalagmites grow upward from the cave floor.'],
          ['Helictites', 'Helictites grow sideways or in spirals via capillary action.'],
          'Soda Straws',
          ['Keyhole chutes', 'The Keyhole was a narrow passage crawled through by spelunkers, not a mineral formation.'],
        ],
        answer: 2,
      },
      explain: 'The sidebar clarifies terminology by breaking down four formation types. It specifically notes that "Soda Straws" are hollow, paper-thin tubes representing the early stage of stalactites.',
    }),
    mcq({
      standard: 'rla:6.8D.iii', cites: [4, 5],
      stem: 'Which organizational pattern is used in paragraphs 4 and 5 to explain helictites?',
      choices: [
        ['Chronological sequence tracing the historical travels of spelunkers.', 'The text does not order events by date here.'],
        'Classification and explanation of cause and effect, comparing typical gravity-fed formations with capillary-driven helictites.',
        ['Problem and solution describing how park rangers repaired broken rock.', 'The repair of formations is not the focus of paragraphs 4 and 5.'],
        ['Advantage and disadvantage analyzing the economic cost of cave lighting.', 'The text does not discuss commercial electricity or lighting costs.'],
      ],
      answer: 1,
      explain: 'Paragraphs 4 and 5 classify formations (stalactites vs. stalagmites vs. helictites) and explain the scientific cause (capillary pressure and evaporation) behind helictites defying gravity.',
    }),
    mcq({
      standard: 'rla:6.9C', cites: [6, 7],
      stem: 'Why did the author include subheadings such as "Architects of Stone" and "Fragile Treasures and Modern Conservation"?',
      choices: [
        'To organize the passage into clear topics that guide the reader from geological formation to scientific uniqueness and preservation.',
        ['To indicate which sections were written by different scientists.', 'The entire article is composed by a single author.'],
        ['To list the titles of books published about West Texas geology.', 'The subheadings label passage sections, not published book titles.'],
        ['To warn tourists about the dangers of crawling through narrow crevices.', 'The headings organize concepts rather than serve as emergency trail warnings.'],
      ],
      answer: 0,
      explain: 'Subheadings divide informational text into distinct conceptual chunks, helping readers locate information about formation, science, and conservation.',
    }),
    msq({
      standard: 'rla:6.5G', cites: [6, 7],
      stem: 'Based on paragraphs 6 and 7, which **two** factors make the Caverns of Sonora particularly vulnerable to human disruption?',
      choices: [
        'Natural skin oils from a single human touch can coat crystals and permanently halt mineral growth.',
        ['Underground earthquakes frequently collapse the Segovia limestone layers.', 'The text does not mention earthquakes as a factor.'],
        'Deliberate vandalism and theft can destroy formations that required centuries to develop.',
        ['The cave temperature fluctuates wildly between summer and winter seasons.', 'Paragraph 6 states the temperature remains nearly constant at 72 degrees year-round.'],
        ['High concentrations of carbon dioxide make the air toxic to human beings.', 'The air is breathable and tourist tours operate regularly.'],
      ],
      answers: [0, 2],
      explain: 'Paragraphs 6 and 7 explain that human skin oils repel water and stop growth that takes 100 years per cubic inch, while vandalism (such as the 2006 incident) can cause irreversible damage.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [5],
      stem: 'Read this sentence from paragraph 5: "Scientists determined that **capillary action** is the secret." In this context, what does **capillary action** describe?',
      choices: [
        ['The explosion of volcanic steam through underground vents.', 'No volcanic activity is involved in limestone cave formations.'],
        'The movement of liquid through narrow spaces caused by forces between the liquid and surrounding surfaces.',
        ['The rapid erosion of canyons by roaring river floods.', 'The movement here is slow and microscopic, not a roaring surface flood.'],
        ['The chemical reaction between oxygen and iron deposits.', 'The process involves water pressure moving through tiny tubes and depositing calcite.'],
      ],
      answer: 1,
      explain: 'Capillary action refers to water moving through microscopic central canals independently of gravity, depositing crystals in diverse directions.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [1],
      stem: 'Which detail from paragraph 1 suggests that the underground chamber was extensive before anyone entered it?',
      choices: [
        'Cool air was breathing from the dark fissure with surprising force.',
        ['A raccoon climbed down the hole to escape the hunting dog.', 'The raccoon was simply seeking shelter.'],
        ['Rancher Mayfield noticed loose pebbles around the opening.', 'Pebbles do not indicate the size of a cave system.'],
        ['The hole was located fifteen miles southwest of Sonora.', 'The geographical location does not reveal underground volume.'],
      ],
      answer: 0,
      explain: 'The strong current of cool air breathing out of a 20-inch opening indicated a significant volume of underground air pressure and vast subterranean spaces.',
    }),
  ],
});
