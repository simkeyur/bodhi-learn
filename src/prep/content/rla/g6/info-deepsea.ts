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
      { kind: 'p', text: 'More than a mile beneath the ocean\'s shimmering surface lies an extreme environment that once seemed entirely hostile to any form of life. In the vast midnight zone of the deep ocean floor, sunlight never penetrates the thick water column, leaving the abyssal plain plunged into everlasting darkness. Here, temperatures hover barely above freezing, and the relentless weight of seawater generates crushing hydrostatic pressures exceeding several hundred atmospheres—force intense enough to flatten ordinary reinforced steel. For generations, marine scientists reasonably assumed that the abyssal seabed was a biological desert, sparsely frequented by a few pale scavengers that survived solely by grazing upon organic debris drifting slowly down from the sunlit upper ocean.' },
      { kind: 'p', text: 'All of that changed dramatically in the spring of 1977. While exploring the Galápagos Rift tectonic spreading center aboard the specialized research submersible Alvin, a team of geologists made an accidental discovery that revolutionized modern biological science. Near volcanic fractures along the seafloor, they encountered towering mineral chimneys spewing billowing black clouds of superheated, mineral-rich fluid into the icy water. Surrounding these striking hydrothermal formations, commonly known as black smokers, scientists did not encounter a desolate wasteland. Instead, their submersible headlights revealed dense, thriving colonies of bizarre organisms clustering together in an oasis of vibrant activity.' },
      { kind: 'p', text: 'The immediate puzzle confronting biologists was how such abundant biological communities could flourish in complete darkness without the sun. On land and in sunlit surface waters, virtually all ecological food webs rely upon photosynthesis—the biological mechanism whereby green plants, algae, and cyanobacteria absorb radiant energy to convert carbon dioxide and water into nourishing glucose. In the ocean abyss, where solar rays cannot reach, living things must depend upon an entirely different chemical engine to generate biological energy: a process known as chemosynthesis.' },
      { kind: 'p', text: 'Hydrothermal vents occur along underwater volcanic ridges where tectonic plates pull apart. Seawater seeps deep into porous fractures in Earth\'s oceanic crust, where molten magma superheats the water to temperatures exceeding 700 degrees Fahrenheit without boiling due to immense ocean pressure. This scalding fluid dissolves high concentrations of sulfur compounds and dissolved metals before erupting back into the icy sea. Specialized chemosynthetic bacteria absorb toxic hydrogen sulfide escaping from the vent water, oxidizing the molecules to manufacture organic nourishment. These microscopic organisms form the essential base of the entire ecosystem, gathering in thick microbial mats or living directly inside the tissues of larger marine hosts.' },
      { kind: 'p', text: 'Among the most extraordinary creatures adapted to this hydrothermal environment are giant tube worms (*Riftia pachyptila*). Growing inside rigid white chitinous cylinders anchored firmly to the volcanic rock, these bizarre animals can reach lengths of up to eight feet. Remarkably, adult tube worms possess no mouth, eyes, stomach, or traditional digestive tract. Instead, their survival depends upon a specialized vascular internal organ called a trophosome, which houses billions of symbiotic chemosynthetic bacteria. The worm extends a bright scarlet plume into the surrounding water to capture dissolved oxygen, carbon dioxide, and hydrogen sulfide, transferring these vital compounds through its bloodstream to nourish the internal bacteria, which synthesize food for the worm in return.' },
      { kind: 'p', text: 'A wide array of specialized fauna populates the rocks surrounding the vents. Swarms of pale, eyeless shrimp navigate around the scalding chimneys using specialized sensory receptors on their backs that detect thermal infrared radiation. Alongside them crawl ghostly vent crabs and predatory octopuses, while massive white clams grow to the size of large dinner plates. Yet life in this volcanic paradise remains inherently precarious. Active vents depend entirely on subterranean magma chambers for heat. When undersea tectonic faults shift or volcanic pathways seal, hydrothermal circulation can shut down abruptly without warning. Deprived of hydrogen sulfide, the specialized bacteria quickly die, and the entire thriving animal oasis starves within a matter of months, leaving behind cold, silent mineral spires.' },
      { kind: 'p', text: 'The groundbreaking study of hydrothermal vents has expanded humanity\'s definition of habitable environments and transformed astrobiology. Planetary scientists now possess strong geological evidence that hydrothermal vents may exist beneath the ice-crusted global oceans of moons such as Jupiter\'s Europa and Saturn\'s Enceladus. By exploring how strange organisms thrive in volcanic darkness on Earth\'s seafloor, researchers gain essential clues about how life may have first originated on our own planet billions of years ago—and where living organisms might endure beneath the icy crusts of distant ocean worlds across our solar system.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [2, 3, 4],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['The submersible Alvin was built in 1977 to explore volcanic fault lines.', 'This detail explains how scientists reached the vents, not the controlling idea.'],
        'Hydrothermal vents support thriving, unique ecosystems powered by chemosynthesis rather than sunlight, fundamentally changing our understanding of life\'s limits.',
        ['Giant tube worms grow up to eight feet tall because deep ocean water lacks predators.', 'This is a specific biological fact about one species, not the central concept of the text.'],
        ['Volcanic eruptions on the ocean floor regularly destroy deep-sea submarines.', 'The text mentions volcanic activity affecting vents, not destroying research submarines.'],
      ],
      answer: 1,
      explain: 'The controlling idea explains that hydrothermal vents support rich biological communities powered by chemical energy (chemosynthesis) in extreme deep-ocean environments.',
    }),
    twoq({
      standard: 'rla:6.8D.iii', cites: [6],
      a: {
        prompt: 'Part A: How does the author structure paragraph 6 to evaluate the environment of hydrothermal vents?',
        choices: [
          'By presenting the advantages of rich mineral nourishment alongside the severe disadvantage of sudden vent shutdowns.',
          ['By listing events in chronological order from the 1977 discovery to the present day.', 'Chronology is used earlier in the article, not in paragraph 6.'],
          ['By asking rhetorical questions to challenge the reader\'s beliefs about biology.', 'Paragraph 6 contains informative factual statements without rhetorical questions.'],
          ['By defining medical treatments derived from deep-sea organisms.', 'The paragraph discusses marine animal survival, not human medicine.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which consequence described in paragraph 6 illustrates the greatest risk to vent communities?',
        choices: [
          ['The freezing water temperature freezes the tube worms\' plumes.', 'The plumes tolerate the ambient cold water.'],
          ['Blind shrimp lose their ability to detect heat.', 'The shrimp use heat sensors to navigate effectively.'],
          'Tectonic shifts can abruptly stop the flow of hot water, starving the entire colony within weeks.',
          ['Crabs eat all the bacteria mats before the clams can feed.', 'Predation does not wipe out the entire colony; loss of geothermal energy does.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 6 explicitly discusses the advantages and disadvantages of vent life, noting that while nourishment is dense, tectonic shifts can extinguish the heat source and cause the colony to perish.',
    }),
    mcq({
      standard: 'rla:6.5G', cites: [3, 4],
      stem: 'How does chemosynthesis differ fundamentally from photosynthesis?',
      choices: [
        ['Chemosynthesis requires sunlight and fresh air to generate sugars.', 'Photosynthesis requires sunlight; chemosynthesis occurs in total darkness.'],
        'Chemosynthesis uses chemical energy from compounds like hydrogen sulfide instead of light energy from the sun.',
        ['Chemosynthesis can only occur inside the stomachs of vertebrate fish.', 'It is carried out by bacteria living freely or in tube worms and clams.'],
        ['Chemosynthesis produces poisonous acid that destroys marine food webs.', 'Chemosynthesis generates nutrients that support the food web.'],
      ],
      answer: 1,
      explain: 'Paragraphs 3 and 4 clarify that while photosynthesis uses sunlight, chemosynthesis relies on bacteria oxidizing hydrogen sulfide to produce energy in total darkness.',
    }),
    msq({
      standard: 'rla:6.5E', cites: [5, 7],
      stem: 'Which **two** broader scientific implications can be connected to the discoveries described in the passage?',
      choices: [
        'Organisms can adapt to extreme environments previously thought to be completely unlivable.',
        ['Deep-sea mining operations have no environmental impact on marine life.', 'The article does not discuss or endorse commercial mining operations.'],
        'Similar life-supporting hydrothermal systems might exist beneath the ice crusts of distant ocean moons.',
        ['Astronauts can breathe underwater using specialized artificial tube worm plumes.', 'Tube worms have biological adaptations, not equipment for human space travel.'],
        ['Photosynthesis will eventually be replaced by chemosynthesis on Earth\'s surface.', 'Photosynthesis remains the dominant energy process on land and in shallow water.'],
      ],
      answers: [0, 2],
      explain: 'The text connects the discovery to life surviving in extreme environments (paragraph 1 and 5) and the possibility of life on ocean moons like Europa and Enceladus (paragraph 7).',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [1, 2, 4],
      stem: 'What is the most effective summary of paragraphs 1 through 4?',
      choices: [
        ['In 1977, geologists explored the Galápagos Rift in Alvin and collected rock samples from mineral chimneys.', 'This summary misses the biological revolution and chemosynthesis.'],
        'Scientists once assumed the deep sea was nearly devoid of life, but the 1977 discovery of hydrothermal vents revealed thriving ecosystems supported by bacteria that produce energy chemically from superheated mineral fluids.',
        ['Hydrothermal chimneys reach temperatures over 700 degrees Fahrenheit, which boils seawater and drives away marine animals.', 'Animals thrive around the chimneys rather than being driven away.'],
        ['Submarines cannot dive into the deep sea because intense water pressure crushes metal hulls.', 'Submersibles like Alvin successfully explore these depths.'],
      ],
      answer: 1,
      explain: 'This summary captures the shift from the old assumption of a barren abyss to the discovery of vibrant vent oases driven by bacterial chemosynthesis.',
    }),
    mcq({
      standard: 'rla:6.9B', cites: [7],
      stem: 'Why does the author conclude the passage by discussing planetary exploration in paragraph 7?',
      choices: [
        ['To explain why NASA should build underwater research submersibles.', 'NASA already studies extreme environments.'],
        ['To argue that Earth\'s oceans are less interesting than outer space.', 'The author shows that deep-sea vents provide clues to both Earth and space.'],
        'To demonstrate how deep-sea ocean research has wider relevance for the search for extraterrestrial life.',
        ['To suggest that humans should move to Enceladus to escape ocean pollution.', 'The text discusses scientific research, not human colonization.'],
      ],
      answer: 2,
      explain: 'Paragraph 7 expands the significance of hydrothermal vent science, explaining how understanding extreme life on Earth informs the search for life on moons like Europa and Enceladus.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [5],
      stem: 'Which detail from paragraph 5 proves that giant tube worms rely entirely on their internal bacteria to survive?',
      choices: [
        ['They grow inside white chitinous tubes up to eight feet tall.', 'This describes their physical shelter, not their digestion.'],
        ['Their bright red plumes absorb dissolved gases from seawater.', 'The plume gathers materials for the bacteria, but is not the sole proof of reliance.'],
        'They possess neither mouths, eyes, nor digestive tracts, relying instead on a bacteria-filled organ called a trophosome.',
        ['They live near dinner-plate-sized clams in the deep ocean.', 'Coexistence with clams does not explain their internal nutrition.'],
      ],
      answer: 2,
      explain: 'Because giant tube worms have no mouth or digestive tract, they cannot eat food directly; they depend completely on the bacteria inside their trophosome to produce nutrients.',
    }),
  ],
});
