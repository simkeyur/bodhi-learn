// Grade 7 realistic fiction: Echoes in the Piney Woods.
import { makeSet, mcq, twoq } from '../author.ts';

export const FICTION_STORM = makeSet({
  id: 'g7-fiction-storm',
  grade: 7,
  kind: 'reading',
  title: 'Echoes in the Piney Woods',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-fiction-storm-p',
    title: 'Echoes in the Piney Woods',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Tall loblolly pines and sweetgum trees swayed in the Davy Crockett National Forest in East Texas. The sky turned a bruised gray as autumn clouds rolled in. Pinecones clattered onto the sandy ground as gusts of wind swept through the branches. Twelve-year-old Marcus checked the compass resting in his hand. He lined up the red needle with north, then checked his folded trail map. Beside him on the path, his eleven-year-old sister, Hannah, shivered. The temperature had dropped fast as a sudden cold front swept in from the plains.' },
      { kind: 'p', text: '"Marcus, the trail markers stopped back near that muddy creek," Hannah said. Her voice shook in the rising wind. "The ranger said this path would lead us to the campground, but all these pine trees look the same."' },
      { kind: 'p', text: 'Marcus hid his own worry behind a calm smile. During the morning talk at the ranger station, the leader had shared an important rule: panic is a hiker\'s worst enemy. When you lose the trail in deep woods, trust your tools and read the land. A paper map and compass never lose battery power like a phone. Never run blindly into the brush.' },
      { kind: 'p', text: '"We are not lost, Hannah. We are just off the path," Marcus said gently. Marcus unzipped his jacket to keep the map dry from spitting drizzle. He traced the contour lines with his thumbnail. "Look at the lines on this map. See where the lines crowd together? That is Neches Bluff. If we walk on a compass heading of two hundred and forty degrees, we will hit the gravel fire road that marks the park boundary."' },
      { kind: 'p', text: 'They hiked across a thick carpet of pine needles and through thorny briars. Big raindrops began tapping against the leafy canopy overhead. Thunder rumbled like distant drums across the wooded ridges. Red Texas clay stuck to their hiking boots, making each step heavy. Hannah slipped on a slick clay slope, losing her footing on a wet tree root. Marcus dropped to one knee in the mud. He held out his wooden hiking stick and pulled his sister up onto the level sandstone ledge.' },
      { kind: 'p', text: '"One step at a time," Marcus said, pointing toward the trees. "Watch the tree trunks, too. In these woods, moss and lichens grow thickest on the shaded northern bark where the sun cannot dry it out. Nature gives us a backup compass if we know how to look."' },
      { kind: 'p', text: 'Hannah nodded, her fear turning into calm focus. She spotted three sweetgum trees with thick moss on their north side, pointing the way forward. Together, brother and sister walked with steady steps through the woods. They used the compass to set their direction and checked the tree moss to stay on track. Soon, through a thick patch of palmetto bushes, the trees parted. A gravel road appeared, along with the yellow lights of a park truck.' },
      { kind: 'p', text: 'Ranger Davis stepped out of the truck and waved his flashlight with a big smile. Hannah ran to the warm truck, but Marcus paused at the edge of the trees. He touched the brass compass in his pocket. He had not just survived a tough wilderness test. By mastering his fear and trusting his knowledge, he had gained the quiet confidence of a true navigator. He knew he would never look at a dense pine forest the same way again.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [1, 3],
      stem: 'How does the author use the sudden drop in temperature and storm in paragraph 1 to develop the plot?',
      choices: [
        'The cold front creates an urgent external challenge for the hikers.',
        ['The storm forces park rangers to close all county campgrounds permanently.', 'The rangers are searching for the lost hikers, not shutting down the whole park.'],
        ['The freezing rain causes Marcus to drop his compass and sprint in panic.', 'Marcus keeps his composure and relies methodically on his instruments.'],
        ['A lightning strike ignites a forest fire that blocks the main highway exit.', 'Rain and wind occur, but no fire breaks out.'],
      ],
      answer: 0,
      explain: 'The rapid temperature drop and approaching cold front create immediate urgency and external conflict that challenge the characters to navigate quickly.',
    }),
    mcq({
      standard: 'rla:7.7B', cites: [3, 4, 6],
      stem: 'How do Marcus\'s actions and words reveal his character during the crisis?',
      choices: [
        ['Marcus is easily annoyed by questions and wishes to hike all by himself.', 'Marcus is caring, patient, and protects his sister throughout the ordeal.'],
        'Marcus shows calm leadership and practical skill to guide Hannah.',
        ['Marcus pretends to know the trail but depends entirely on blind luck.', 'He uses contour lines, compass degrees, and moss clues methodically.'],
        ['Marcus urges his sister to run fast despite slippery, muddy slopes.', 'He advises her to move step-by-step with patient focus.'],
      ],
      answer: 1,
      explain: 'Marcus stays composed, remembers ranger instructions, encourages his sister, and guides them safely using tools and nature.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [4, 6],
      stem: 'Which detail best supports the claim that Marcus uses reasoning rather than guesswork to navigate?',
      choices: [
        ['"Marcus, the trail markers stopped back near that muddy creek..." (paragraph 2)', 'This is Hannah\'s observation that they are off the marked trail.'],
        ['"Thunder rumbled like distant drums across the wooded ridges." (paragraph 5)', 'This is descriptive figurative imagery about the weather.'],
        'Marcus sets a 240-degree heading from contour lines and checks moss.',
        ['"Ranger Davis stepped out of the truck and waved his flashlight..." (paragraph 8)', 'This shows the rescue truck, not Marcus\'s navigational process.'],
      ],
      answer: 2,
      explain: 'Calculating a 240-degree bearing based on map contour lines and reading moss growth demonstrate deliberate scientific reasoning.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3, 8],
      a: {
        prompt: 'Part A: What internal change does Marcus experience during the journey?',
        choices: [
          'He moves from hiding his worry to having true confidence in his skills.',
          ['He decides that hiking is too dangerous and vows to stay out of state parks.', 'His final reflection shows pride and a lasting connection to navigation.'],
          ['He realizes that analog maps and magnetic needles are useless in the woods.', 'The compass and map are essential tools that save them.'],
          ['He decides to become a commercial pilot rather than working in forestry.', 'The story focuses on wilderness navigation, not an aviation career.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the passage best supports the answer to Part A?',
        choices: [
          ['"Twelve-year-old Marcus checked the compass resting in his hand." (paragraph 1)', 'This describes a routine physical action at the start.'],
          '"...he had gained the quiet confidence of a true navigator." (paragraph 8)',
          ['"Marcus hid his own worry behind a calm smile as wind whistled." (paragraph 3)', 'This shows him pretending to be brave while privately feeling anxious.'],
          ['""One step at a time," Marcus said, pointing toward the trees." (paragraph 6)', 'This shows him coaching Hannah, not his internal realization.'],
        ],
        answer: 1,
      },
      explain: 'Marcus begins by masking his fear with a smile, but navigating through the woods gives him genuine, earned confidence in his navigational knowledge.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 2, 5],
      stem: 'How does the Piney Woods setting create conflict in the story?',
      choices: [
        ['Clear trail signs make navigating back to camp completely effortless.', 'The trail markers have ended and the trees look identical.'],
        'Uniform pines, lost signs, and slick clay pose tough obstacles.',
        ['Aggressive wolves and bears chase the children along the creek bluff.', 'No dangerous predators appear in the story.'],
        ['Flat, dry ground makes it impossible for a compass needle to turn well.', 'The woods feature muddy slopes, sandstone ridges, and rain.'],
      ],
      answer: 1,
      explain: 'Identical pine stands, missing path markers, slippery red-clay slopes, and dense brush act as the external forces challenging the hikers.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [3, 8],
      stem: 'Which universal human experience is best reflected in the story?',
      choices: [
        ['The annoyance of dealing with dead electronic devices on family trips.', 'The characters rely on physical maps and compasses.'],
        'Staying calm and using knowledge during an unexpected crisis.',
        ['Choosing between competitive outdoor sports and indoor science clubs.', 'The plot centers on wilderness survival, not extracurricular choices.'],
        ['Convincing skeptical adults to believe complaints made by teenagers.', 'Ranger Davis is supportive and relieved when they emerge.'],
      ],
      answer: 1,
      explain: 'The story reflects the universal challenge of overcoming fear and applying reasoned knowledge when facing confusing or frightening conditions.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [4, 5, 6, 7],
      stem: 'Which statement provides an objective summary of how Marcus and Hannah reach safety?',
      choices: [
        'Marcus uses a map, compass, and tree moss to guide Hannah to a ranger truck.',
        ['Hannah discovers an abandoned logging road while foraging for wild autumn berries.', 'Marcus guides the route using map and compass, not a search for berries.'],
        ['Ranger Davis uses tracking dogs to follow muddy shoe tracks to the children\'s camp.', 'The siblings reach the road independently under Marcus\'s direction.'],
        ['The children construct an evergreen bough shelter and wait until the next morning.', 'They actively hike to the perimeter road and reach safety that afternoon.'],
      ],
      answer: 0,
      explain: 'This concise choice accurately and objectively summarizes the navigational actions that led the siblings out of the forest.',
    }),
  ],
});
