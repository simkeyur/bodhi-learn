// Grade 6 informational: Deep-Sea Hydrothermal Vents.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const INFO_DEEPSEA = makeSet({
  id: 'g6-info-deepsea',
  grade: 6,
  kind: 'reading',
  title: 'Oases in the Abyss: Life at Hydrothermal Vents',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-info-deepsea-p',
    title: 'Oases in the Abyss: Life at Hydrothermal Vents',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'More than a mile beneath the ocean surface lies an extreme realm. Down in the midnight zone, sunlight never reaches the seabed. The water hovers just above freezing, and the weight of the ocean above creates crushing pressure. For a long time, marine scientists assumed the deep ocean floor was a biological desert. They thought only a few scavengers could survive by feeding on dead plant and animal matter drifting down from above.' },
      { kind: 'p', text: 'That view changed in 1977. Scientists diving in the research submarine Alvin explored the Galápagos Rift, an underwater volcanic ridge in the Pacific Ocean. Near cracks in the seabed, they found warm-water springs bubbling up from the rock. Instead of a barren desert, their lights revealed dense clusters of strange sea life. Two years later, in 1979, scientists discovered another type of vent: tall mineral chimneys that spewed dark clouds of superheated water. These roaring vents became known as black smokers.' },
      { kind: 'p', text: 'Scientists were amazed that so many animals could thrive in total darkness. On land and in shallow water, most ecosystems depend on photosynthesis. Green plants and algae capture sunlight to make food. But sunlight cannot reach the deep ocean floor. Living things around hydrothermal vents depend on a different process called chemosynthesis. Instead of using sunlight, special bacteria make food by using chemical energy.' },
      { kind: 'p', text: 'Hydrothermal vents form along underwater ridges where tectonic plates pull apart. Cold seawater sinks into cracks in the ocean crust. Deep below the seabed, hot magma heats the water to temperatures above seven hundred degrees Fahrenheit. High water pressure keeps this scalding water from boiling into steam. As the water heats up, it dissolves sulfur and minerals from the rock. The hot fluid then shoots back out into the freezing sea. Specialized bacteria feed on hydrogen sulfide in the vent fluid. These tiny microbes form the base of the vent food web. Some float in thick mats, while others live inside larger animals.' },
      { kind: 'p', text: 'Giant tube worms are among the most famous animals at deep-sea vents. They grow inside tough white tubes attached to the volcanic rock. These worms can reach eight feet in length. Adult tube worms have no eyes, mouth, or gut. Instead, they rely on an internal organ called a trophosome. This organ holds billions of friendly bacteria. The worm sticks out a bright red plume to absorb oxygen, carbon dioxide, and hydrogen sulfide from the water. Its blood carries these chemicals to the bacteria inside, and the bacteria make food for the worm.' },
      { kind: 'p', text: 'Many other unusual creatures live around the vents. Swarms of pale, eyeless shrimp crowd near the hot chimneys. They have special heat sensors on their backs to help them navigate in the dark. White crabs and octopuses hunt across the rocks, and giant clams grow as large as dinner plates. Yet life at a hydrothermal vent is always fragile. Vents need heat from molten magma below. If earthquake faults shift or the plumbing plugs up, the flow of hot water can stop without warning. Without hydrogen sulfide, the bacteria die, and the entire animal colony starves within months.' },
      { kind: 'p', text: 'Studying hydrothermal vents changed how scientists think about life in the universe. Space scientists now believe similar vents may exist beneath the icy shells of moons like Europa and Enceladus. By exploring volcanic oases in our own deep oceans, researchers learn how life might begin in extreme environments. They also gain clues about where life might survive on distant ocean worlds across our solar system.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [2, 3, 4],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['Research submarines allow scientists to explore volcanic fault lines along the seabed.', 'This detail describes how scientists travel, not the central concept.'],
        'Deep-sea hydrothermal vents support unique ecosystems powered by chemical energy.',
        ['Giant tube worms can grow up to eight feet long because the deep sea lacks predators.', 'This is a specific detail about one creature rather than the controlling idea.'],
        ['Undersea volcanic eruptions frequently destroy modern scientific submersibles in the abyss.', 'The passage does not say research submarines are destroyed.'],
      ],
      answer: 1,
      explain: 'The controlling idea is that hydrothermal vents support unique biological communities powered by chemical energy rather than sunlight.',
    }),
    twoq({
      standard: 'rla:6.8D.iii', cites: [6],
      a: {
        prompt: 'Part A: How does the author structure paragraph 6 to evaluate the environment around vents?',
        choices: [
          'By showing both the rich food supply and the danger of sudden vent shutdowns.',
          ['By listing historical events in chronological order from the 1977 dive to modern day.', 'Chronology is used earlier in the article, not in paragraph 6.'],
          ['By presenting questions to challenge common ideas about how cold ocean currents flow.', 'Paragraph 6 makes factual statements without asking questions.'],
          ['By detailing new medical treatments that doctors develop from deep-sea organisms.', 'The paragraph discusses marine wildlife, not human medicine.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which consequence described in paragraph 6 illustrates the greatest risk to vent communities?',
        choices: [
          ['Freezing water temperatures freeze the delicate plumes of tube worms.', 'The plumes tolerate the cold water surrounding the vents.'],
          ['Blind shrimp lose their ability to detect heat when chimneys cool.', 'The shrimp use heat sensors to navigate effectively near active chimneys.'],
          'Shifting rock can stop the hot water, causing the whole colony to starve.',
          ['Crabs consume all the bacteria mats before clams have an opportunity to feed.', 'Predation does not destroy the colony; loss of heat and minerals does.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 6 shows that vent life is fragile: when tectonic shifts stop the flow of hot, mineral-rich water, the bacteria and animals quickly starve.',
    }),
    mcq({
      standard: 'rla:6.5G', cites: [3, 4],
      stem: 'How does chemosynthesis differ from photosynthesis?',
      choices: [
        ['Chemosynthesis requires sunlight and fresh air to produce sugars.', 'Photosynthesis requires sunlight; chemosynthesis occurs in darkness.'],
        'Chemosynthesis uses chemical energy instead of light from the sun.',
        ['Chemosynthesis occurs only inside the stomachs of vertebrate fish.', 'Chemosynthesis is carried out by bacteria.'],
        ['Chemosynthesis produces poisonous acid that destroys marine food webs.', 'Chemosynthesis produces food that supports the vent food web.'],
      ],
      answer: 1,
      explain: 'Paragraphs 3 and 4 explain that photosynthesis relies on sunlight, while chemosynthesis uses chemical energy from compounds like hydrogen sulfide.',
    }),
    msq({
      standard: 'rla:6.5E', cites: [5, 7],
      stem: 'Which **two** broader scientific implications connect to the discoveries described in the passage?',
      choices: [
        'Living things can adapt to extreme environments once thought to be barren.',
        ['Deep-sea mining operations have no measurable impact on ocean environments.', 'The text does not discuss commercial mining operations.'],
        'Life-supporting hydrothermal systems might exist beneath the ice of distant moons.',
        ['Astronauts can breathe underwater by using artificial tube worm plumes.', 'Tube worm adaptations are biological, not equipment for space exploration.'],
        ['Chemosynthesis will soon replace photosynthesis across the surface of the Earth.', 'Photosynthesis remains the main process on land and in surface waters.'],
      ],
      answers: [0, 2],
      explain: 'The discovery proves that life can thrive in extreme conditions (paragraphs 1 and 5) and suggests that similar life could exist on icy ocean moons (paragraph 7).',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [1, 2, 4],
      stem: 'What is the most effective summary of paragraphs 1 through 4?',
      choices: [
        ['In 1977, geologists explored the Galápagos Rift in the Alvin submarine and gathered rock samples from mineral chimneys on the seabed.', 'This summary misses the biological discovery and chemosynthesis.'],
        'Once thought to be lifeless, deep-sea vents support thriving communities powered chemically by bacteria without sunlight.',
        ['Hydrothermal chimneys reach temperatures over seven hundred degrees, boiling seawater and forcing animals to migrate to shallower coral reefs.', 'Animals thrive around vents rather than migrating to shallow reefs.'],
        ['Submarines cannot dive into the deepest areas of the ocean because high water pressure crushes metal hulls before reaching the bottom.', 'Submersibles like Alvin successfully dive to these depths.'],
      ],
      answer: 1,
      explain: 'This summary captures the shift from assuming the deep sea was barren to discovering vibrant communities sustained by bacterial chemosynthesis.',
    }),
    mcq({
      standard: 'rla:6.9B', cites: [7],
      stem: 'Why does the author conclude the passage by discussing planetary exploration in paragraph 7?',
      choices: [
        ['To argue that studying deep oceans on Earth is less valuable than exploring space.', 'The author shows that deep-sea research actually aids space science.'],
        ['To persuade readers to pursue careers as pilots for robotic space exploration.', 'The focus is on scientific discovery, not specific career recruitment.'],
        'To show how deep-sea research helps scientists search for life on other worlds.',
        ['To explain why space agencies should build submersibles for commercial tourists.', 'The passage discusses scientific research rather than commercial tourism.'],
      ],
      answer: 2,
      explain: 'Paragraph 7 explains that understanding extreme environments on Earth helps scientists look for life on icy ocean moons like Europa and Enceladus.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [5],
      stem: 'Which detail from paragraph 5 shows that giant tube worms rely on internal bacteria to survive?',
      choices: [
        ['They grow inside tough white tubes attached to volcanic rock formations.', 'The tubes provide physical protection, not nutrition.'],
        ['Their bright red plumes absorb dissolved gases and chemicals directly from seawater.', 'The plumes collect raw materials, but the bacteria manufacture the food.'],
        'They have no mouth or gut and get nourishment from bacteria in a trophosome.',
        ['They live alongside large white clams and blind shrimp near thermal vents.', 'Living near other animals does not explain how tube worms get food.'],
      ],
      answer: 2,
      explain: 'Because adult tube worms have no mouth or gut, they depend entirely on bacteria inside their trophosome to produce food for them.',
    }),
  ],
});
