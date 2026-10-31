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
      { kind: 'p', text: 'Thirteen-year-old Carlos wiped beads of sweat and chalky limestone dust from his sunburnt forehead as the blistering midday Texas heat radiated relentlessly from the weathered walls of Mission San José. Beside him in the shaded colonnade, his grandfather, Papá Mateo, knelt reverently before the intricately carved stone archway of the old granary, gently brushing away crumbling century-old mortar with a soft, dry horsehair paintbrush. For three generations, Carlos\'s family had proudly served as traditional caretakers and master stonemasons for the historic San Antonio river mission complex, painstakingly protecting its irreplaceable Spanish colonial architecture against the relentless decay of torrential rains, summer droughts, and passing centuries.' },
      { kind: 'p', text: 'Carlos loved the stories Papá Mateo shared during their restoration work, but today his mind wandered toward the upcoming district track finals. He tapped his foot restlessly against the flagstones, eager to finish mixing the lime-sand plaster so he could begin his afternoon interval sprints. Noticeably sensing his grandson\'s impatience, Papá Mateo paused, wiping his trowel on an old canvas rag.' },
      { kind: 'p', text: '"Listen closely, Carlos," Papá Mateo murmured, gesturing toward the soaring bell tower that rose above the mission courtyard. "A stone wall is not just a pile of calcified rock and sand. Every block of limestone carries the muscle, sweat, and heartbeat of the Coahuiltecan artisans who quarried and chiseled it nearly three hundred years ago. If you rush through the restoration without respect for the craft, the stone rejects your mortar, and the structure crumbles from within."' },
      { kind: 'p', text: 'Before Carlos could reply, an unusual metallic clink echoed from the base of the campanario tower. While scraping away lichen near the foundation, Carlos\'s chisel struck something solid and rectangular embedded deep within a recessed cavity behind a crumbling facade stone. Heart thumping with sudden excitement, Carlos set his flashlight on the ground and carefully illuminated the dark fissure.' },
      { kind: 'p', text: 'Tucked inside the hidden alcove lay a small copper cylinder wrapped in brittle, oil-soaked rawhide. Carlos held his breath as his grandfather stepped forward, his weathered hands steady as he untied the leather thongs. Inside the tube rested a rolled sheet of heavy rag vellum covered in faded sepia handwriting and detailed architectural sketches dating back to 1768.' },
      { kind: 'p', text: 'The document was an artisan\'s journal written by Juan Leal, a master master mason who helped construct the mission\'s famed Rose Window. In fragile Spanish script, Leal described how the artisans blended cactus juice with river sand and limestone paste to create a waterproof mortar capable of withstanding torrential flash floods. More importantly, Leal had drawn a precise cross-section showing how the bells in the south belfry were counterbalanced using subterranean cedar pillars to absorb acoustic vibrations that would otherwise fracture the stone arches.' },
      { kind: 'p', text: 'Carlos stared at the faded ink sketches, tracing the intricate geometric calculations with his fingertips. He realized that the ancient masons were not primitive laborers; they were sophisticated civil engineers whose deep knowledge of materials had kept the towers standing through centuries of prairie storms and military skirmishes. His earlier impatience melted into profound awe.' },
      { kind: 'p', text: '"You see, Carlos?" Papá Mateo whispered, placing a reassuring hand on the boy\'s shoulder as the mission bells chimed three o\'clock across the river valley. "History is not an expired chapter locked in a glass museum case. It lives in our hands whenever we honor the patience and wisdom of those who built before us." Carlos nodded silently, picked up his wooden trowel, and began mixing the mortar with steady, deliberate care.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [3, 4],
      stem: 'How does the author use foreshadowing in paragraph 3 to prepare the reader for the discovery in paragraph 4?',
      choices: [
        'Papá Mateo\'s observation that the stones carry the heartbeat and history of past artisans foreshadows the discovery of the hidden colonial mason\'s journal.',
        ['Papá Mateo\'s warning about crumbling mortar foreshadows a catastrophic collapse of the bell tower.', 'The bell tower does not collapse; instead an artifact is discovered.'],
        ['Papá Mateo\'s mention of track running foreshadows Carlos winning his sprint competition.', 'Track racing is an internal distraction, not the focus of the grandfather\'s wisdom.'],
        ['Papá Mateo\'s lecture foreshadows an argument that causes Carlos to leave the mission grounds.', 'Carlos does not leave; he listens respectfully and stays.'],
      ],
      answer: 0,
      explain: 'In paragraph 3, the grandfather explains that the stones hold the hidden history and craft of early builders, which directly foreshadows Carlos uncovering the mason\'s hidden journal inside the wall in paragraph 4.',
    }),
    mcq({
      standard: 'rla:7.7A', cites: [2, 7, 8],
      stem: 'How does Carlos\'s perspective change over the course of the story?',
      choices: [
        ['He begins by disliking historical stonework and ends by deciding to become an architect.', 'Carlos never disliked stonework; he was merely impatient to practice track.'],
        'He shifts from feeling impatient and distracted by athletic goals to developing deep respect for his ancestors\' engineering craft and patient dedication.',
        ['He starts out admiring his grandfather\'s tools and ends by wishing he could run track full-time.', 'His shift is toward greater appreciation for the masonry craft, not away from it.'],
        ['He changes from trusting historical books to believing only physical artifacts.', 'The story shows him gaining reverence for physical craft and history together.'],
      ],
      answer: 1,
      explain: 'Carlos begins the story eager to rush through work to sprint, but discovering the journal and understanding the ancient engineering transforms his attitude into profound awe and deliberate patience.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [6],
      stem: 'Which text evidence from paragraph 6 best supports the idea that the Spanish colonial builders were skilled engineers?',
      choices: [
        ['"The document was an artisan\'s journal written by Juan Leal..."', 'This simply introduces the author of the journal without proving engineering sophistication.'],
        ['"...Carlos stared at the faded ink sketches..."', 'This describes Carlos\'s physical reaction, not the builders\' skills.'],
        'Leal described how the artisans blended cactus juice with mortar to resist floods and counterbalanced the belfry with cedar pillars to absorb sound vibrations.',
        ['"...dating back to 1768."', 'A date indicates time, not scientific engineering knowledge.'],
      ],
      answer: 2,
      explain: 'Paragraph 6 provides specific evidence of engineering mastery: mixing cactus juice for water resistance and using cedar pillars to absorb acoustic vibrations.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [1, 8],
      a: {
        prompt: 'Part A: What can the reader infer about Carlos and Papá Mateo\'s family tradition?',
        choices: [
          'The family considers masonry not merely a trade, but a sacred generational responsibility to preserve their community\'s living cultural history.',
          ['The family was forced to work at the mission against their personal wishes.', 'The text emphasizes pride, care, and voluntary dedication.'],
          ['The family plans to sell the mission artifacts to private art collectors.', 'The family works carefully to restore and conserve public historical architecture.'],
          ['The family believes modern building materials are always superior to ancient stone.', 'The grandfather emphasizes the lasting quality of ancient mortar and craftsmanship.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the passage best supports the inference in Part A?',
        choices: [
          ['"Thirteen-year-old Carlos wiped beads of sweat and chalky limestone dust from his sunburnt forehead..." (paragraph 1)', 'This shows physical labor but not generational responsibility.'],
          '"History is not an expired chapter locked in a glass museum case. It lives in our hands whenever we honor the patience and wisdom of those who built before us." (paragraph 8)',
          ['"Before Carlos could reply, an unusual metallic clink echoed..." (paragraph 4)', 'This signals a physical sound, not cultural duty.'],
          ['"Carlos loved the stories Papá Mateo shared during their restoration work..." (paragraph 2)', 'This shows enjoyment of storytelling, but paragraph 8 expresses the core generational philosophy.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 8 articulates Papá Mateo\'s philosophy that their hands keep history alive by honoring the wisdom of the original artisans across generations.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [1, 8],
      stem: 'Which thematic connection can a reader best make between the events of the story and modern adolescent life?',
      choices: [
        ['Young athletes should avoid physical chores before competitive track meets.', 'The passage does not argue against balancing sports and chores.'],
        'Developing true excellence in any endeavor requires looking beyond immediate hurry to understand the patience and legacy of those who came before.',
        ['Historical buildings should be replaced with modern sports complexes to benefit teenagers.', 'The passage emphasizes preserving historic architecture, not demolishing it.'],
        ['Ancient documents found in public buildings should be kept secret by families.', 'The discovery inspires respectful stewardship, not secrecy.'],
      ],
      answer: 1,
      explain: 'The story connects to the broader life lesson that mastering an art, sport, or skill requires patience, deliberate focus, and respect for foundational principles.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 3],
      stem: 'How does the historical mission setting influence the plot of the story?',
      choices: [
        ['The remote desert location makes it impossible for Carlos to attend school.', 'Carlos attends school and participates in school track competitions.'],
        'The historic mission walls provide both the physical backdrop and the tangible historical mysteries that challenge and transform Carlos\'s character.',
        ['The tourist crowd in the mission courtyard prevents Carlos from completing his sprint drills.', 'There are no crowds mentioned; the setting is quiet and focused on restoration.'],
        ['The crumbling foundation causes the characters to abandon their restoration project.', 'The fragile state of the mission motivates deeper care and careful repair.'],
      ],
      answer: 1,
      explain: 'The three-hundred-year-old mission setting provides the physical space where generations of craftsmanship are embedded, directly enabling Carlos\'s discovery and emotional growth.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [5, 6, 7],
      stem: 'Which statement provides the best objective summary of paragraphs 5 through 7?',
      choices: [
        'After uncovering a hidden copper cylinder, Carlos and his grandfather examine an eighteenth-century mason\'s journal detailing advanced architectural techniques, giving Carlos a profound new appreciation for colonial craftsmanship.',
        ['Carlos finds an old copper box containing valuable treasure maps, and he and his grandfather plan an excavation expedition.', 'The cylinder contains an architectural journal, not a treasure map.'],
        ['Papá Mateo reads a Spanish document while Carlos finishes mixing mortar for the campanario wall.', 'Carlos actively examines the sketches and experiences a transformation in perspective.'],
        ['The artisans at Mission San José built the Rose Window using cactus juice to protect the structure against tornadoes.', 'Cactus juice was used for water-resistant mortar, not tornado resistance.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the discovery of the cylinder, the examination of Juan Leal\'s engineering journal, and Carlos\'s transformation in perspective without personal opinion.',
    }),
  ],
});
