// Grade 7 realistic/historical fiction: The Secret of the Mission Bells.
import { makeSet, mcq, twoq } from '../author.ts';

export const FICTION_ALVAREZ = makeSet({
  id: 'g7-fiction-alvarez',
  grade: 7,
  kind: 'reading',
  title: 'The Echo of San José',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-fiction-alvarez-p',
    title: 'The Echo of San José',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Thirteen-year-old Carlos wiped sweat and chalky limestone dust from his forehead. Midday heat beat down on the thick stone walls of Mission San José in San Antonio. Beside him in the shaded stone walkway, his grandfather knelt quietly before an old archway. Papá Mateo used a soft horsehair brush to sweep away crumbling mortar. A wooden bucket of sand and slaked lime sat on the flagstones near their feet. For three generations, their family had cared for the mission stonework. They repaired walls damaged by driving rain, fierce summer droughts, and the slow wear of passing years.' },
      { kind: 'p', text: 'Carlos loved the stories Papá Mateo told while they worked, but today his thoughts kept wandering. The middle school district track finals were only two days away. In his backpack by the gate sat his running shoes and water bottle. Carlos wanted to run practice sprints around the neighborhood park before sundown. He tapped his sneaker restlessly against the paving stones, eager to finish mixing the fresh plaster. Papá Mateo noticed the boy\'s impatience. He stopped working, set down his pointed trowel, and wiped his hands on a clean cloth.' },
      { kind: 'p', text: '"Listen closely, Carlos," Papá Mateo said softly. He pointed to the bell tower rising high into the blue Texas sky. "A stone wall is not just a pile of rock and sand. Every block holds the labor, sweat, and heart of the artisans who chiseled it three hundred years ago. If you rush without respect for the craft, the stone rejects your mortar, and the wall falls apart from within."' },
      { kind: 'p', text: 'Before Carlos could answer, an odd metal clink echoed from the base of the tower. While scraping moss away from the lower foundation, Carlos\'s iron chisel struck something hard inside a dark opening behind a loose stone. His heart gave a quick jump. He set his flashlight on the dirt floor and shone the beam deep into the wall.' },
      { kind: 'p', text: 'Inside the small hollow lay a copper cylinder wrapped in dry rawhide. Carlos held his breath as his grandfather stepped forward. With patient fingers, the older man untied the leather cord. Inside the tube was a rolled sheet of thick paper. It was covered in faded brown handwriting and careful sketches from 1768.' },
      { kind: 'p', text: 'The paper was a builder\'s journal written by Juan Leal, a master mason who helped build the mission. In Spanish script, Leal explained how builders mixed cactus juice with river sand and lime to make waterproof mortar that stood up to floods. Leal had also drawn a diagram of the south bell tower. It showed how cedar beams below the floor absorbed sound vibrations so the ringing bells would not crack the stone arches.' },
      { kind: 'p', text: 'Carlos stared at the old sketches, tracing the clean mathematical lines with his finger. He realized these early builders were skilled engineers. Their deep understanding of materials had kept the towers standing through centuries of weather, lightning, and military skirmishes. His earlier hurry faded away, replaced by genuine wonder.' },
      { kind: 'p', text: '"You see, Carlos?" Papá Mateo whispered, resting a hand on the boy\'s shoulder as the mission bells chimed three o\'clock. "History is not an expired chapter locked in a glass museum case. It lives in our hands whenever we honor the patience and wisdom of those who built before us." Carlos nodded quietly. He picked up his wooden trowel and went back to work with steady care.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [3, 4],
      stem: 'How does the author use foreshadowing in paragraph 3 to prepare the reader for the discovery in paragraph 4?',
      choices: [
        'Papá Mateo notes stones hold history, hinting at the hidden journal.',
        ['Papá Mateo warns of crumbling mortar, foreshadowing a complete tower collapse.', 'The tower remains solid and does not collapse.'],
        ['Papá Mateo mentions running track, hinting that Carlos will win his race.', 'Running track is a personal distraction, not the grandfather\'s wisdom.'],
        ['Papá Mateo\'s lecture hints at an argument that will drive Carlos to leave.', 'Carlos stays and listens respectfully to his grandfather.'],
      ],
      answer: 0,
      explain: 'In paragraph 3, Papá Mateo explains that the stones hold the heart and craft of early builders, foreshadowing Carlos finding the mason\'s journal inside the stone wall.',
    }),
    mcq({
      standard: 'rla:7.7A', cites: [2, 7, 8],
      stem: 'How does Carlos\'s perspective change over the course of the story?',
      choices: [
        ['He begins by disliking masonry and decides to become an architect instead.', 'Carlos never disliked masonry; he was merely eager to practice running.'],
        'He shifts from hurrying to sports to revering his ancestors\' craft.',
        ['He admires his grandfather\'s tools and decides to run track full-time.', 'His shift is toward greater respect for masonry, not away from it.'],
        ['He stops trusting written records and relies solely on physical ruins.', 'Carlos gains reverence for both the historical journal and the stone craft.'],
      ],
      answer: 1,
      explain: 'Carlos starts the day distracted by track sprints, but examining the journal and appreciating the sophisticated engineering inspires deep reverence and patience.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [6],
      stem: 'Which detail from paragraph 6 best supports the idea that the builders were skilled engineers?',
      choices: [
        ['The paper was an artisan\'s journal written by Juan Leal in clear script.', 'This introduces the author without detailing his technical engineering ability.'],
        ['Carlos stared at the old sketches with rising personal excitement today.', 'This describes Carlos\'s emotional reaction rather than builder skill.'],
        'Leal used cactus juice mortar and cedar beams to absorb vibrations.',
        ['The journal was hidden in the campanario and dated back to the year 1768.', 'A date indicates time, not scientific construction knowledge.'],
      ],
      answer: 2,
      explain: 'Paragraph 6 provides specific evidence of engineering skill: mixing cactus juice for water resistance and using cedar beams to cushion acoustic vibrations.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [1, 8],
      a: {
        prompt: 'Part A: What can the reader infer about Carlos and Papá Mateo\'s family tradition?',
        choices: [
          'The family feels a duty to protect their cultural heritage.',
          ['The family was forced to work at the mission against their personal wishes.', 'The text reflects family pride, care, and voluntary dedication.'],
          ['The family hopes to sell historic artifacts to private collectors in town.', 'The family works to preserve public architectural history.'],
          ['The family believes modern building supplies are always superior to stone.', 'The grandfather emphasizes the lasting quality of ancient craftsmanship.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the passage best supports the answer to Part A?',
        choices: [
          ['"Thirteen-year-old Carlos wiped sweat and chalky limestone dust from his forehead as heat beat down." (paragraph 1)', 'This describes physical labor rather than generational responsibility.'],
          '"It lives in our hands whenever we honor the patience and wisdom of those who built before us." (paragraph 8)',
          ['"Before Carlos could answer, an odd metal clink echoed from the base of the campanario bell tower." (paragraph 4)', 'This describes a sound, not family values.'],
          ['"Carlos loved the stories Papá Mateo told while they worked, but today his thoughts kept wandering." (paragraph 2)', 'This describes personal thoughts rather than family philosophy.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 8 articulates Papá Mateo\'s belief that their hands keep history alive by honoring the wisdom of the original artisans across generations.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [1, 8],
      stem: 'Which thematic connection can a reader best make between the story and modern life?',
      choices: [
        ['Young athletes should avoid physical chores before important sports meets.', 'The passage does not argue against balancing athletics and family responsibilities.'],
        'True excellence in any craft requires patience and deep respect.',
        ['Historic stone structures should be replaced by modern athletic complexes.', 'The passage celebrates preserving historic architecture.'],
        ['Valuable documents found in public buildings should be kept secret by heirs.', 'The discovery encourages respectful conservation, not secrecy.'],
      ],
      answer: 1,
      explain: 'The story connects to the life lesson that mastering any pursuit—from sports to stonework—requires patience, careful focus, and respect for fundamentals.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 3],
      stem: 'How does the historical mission setting influence the plot of the story?',
      choices: [
        ['The remote desert setting keeps Carlos from attending his daily classes.', 'Carlos goes to school and prepares for district athletics.'],
        'The historic walls hold the mystery that shifts Carlos\'s outlook.',
        ['Noisy tourist crowds in the courtyard disrupt Carlos\'s athletic drills.', 'No tourist crowds are described in the peaceful courtyard.'],
        ['The crumbling bell tower causes workers to abandon the entire project.', 'The fragile mortar inspires deeper care and restoration.'],
      ],
      answer: 1,
      explain: 'The historic setting provides the setting and the concealed colonial artifact that transforms Carlos\'s impatience into awe and dedication.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [5, 6, 7],
      stem: 'Which statement provides the best objective summary of paragraphs 5 through 7?',
      choices: [
        'Carlos reads an old builder journal, inspiring him to value the masonry craft.',
        ['Carlos finds a copper box with treasure maps and plans an excavation expedition.', 'The cylinder holds an architectural journal, not treasure maps.'],
        ['Papá Mateo translates an old letter while Carlos mixes lime plaster for the wall.', 'Carlos directly examines the drawings and has a personal realization.'],
        ['Builders at San José used cactus juice to guard the window against tornadoes.', 'Cactus juice made waterproof mortar for floods, not tornadoes.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the discovery of Juan Leal\'s journal and Carlos\'s newfound appreciation for colonial engineering.',
    }),
  ],
});
