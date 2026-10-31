// Grade 7 informational: Monarch Butterfly Migration.
import { makeSet, mcq, twoq } from '../author.ts';

export const INFO_MONARCH = makeSet({
  id: 'g7-info-monarch',
  grade: 7,
  kind: 'reading',
  title: 'The Great Autumn Journey: Monarchs Across Texas',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-info-monarch-p',
    title: 'The Great Autumn Journey: Monarchs Across Texas',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'Every autumn, one of the most astonishing biological spectacles on Earth unfolds across the skies of North America. Millions of eastern monarch butterflies (*Danaus plexippus*) embark on an epic, three-thousand-mile southward pilgrimage from summer breeding meadows in southern Canada and the northeastern United States toward the high-altitude oyamel fir forests of central Mexico. Weighed down by nothing more than delicate orange-and-black wings spanning less than four inches, these fragile insects navigate with uncanny mathematical accuracy across mountain ranges, great lakes, and urban sprawl.' },
      { kind: 'p', text: 'In this vast continental voyage, the state of Texas occupies a pivotal geographic crossroads often referred to by conservation biologists as the "Texas Funnel." Because of the natural contour of the North American continent, migrating monarchs from across the entire eastern half of the United States converge directly over the Lone Star State. Spanning from late September through early November, Texas serves as the essential biological gateway where butterflies must rest, refuel, and build critical fat reserves before making their final perilous passage over the arid Sierra Madre mountains into Mexico.' },
      { kind: 'p', text: 'Unlike spring and summer monarchs, which live brief lifespans of only four to six weeks dedicated entirely to mating and laying eggs, the autumn migrants represent a unique "super generation." Triggered by declining daylight hours and cooling autumn temperatures, these insects enter reproductive diapause—a state of suspended maturity in which reproduction is halted and physiological energy is redirected toward long-distance survival. This extraordinary generation lives up to eight or nine months, enduring the long flight south, overwintering in Mexican cloud forests, and journeying northward in spring to lay eggs on southern Texas milkweed.' },
      { kind: 'p', text: 'To sustain their southward flight, migrating monarchs rely upon two indispensable botanical resources: native milkweed and autumn nectar corridors. While monarch caterpillars can feed exclusively on the leaves of milkweed plants, adult butterflies require abundant floral nectar rich in sucrose to convert into concentrated lipids. In Texas, native fall-blooming wildflowers such as frostweed, goldenrod, purple mistflower, and blazing star provide the high-octane fuel monarchs need. A monarch that enters Mexico without sufficient abdominal lipid reserves will freeze or starve during winter mountain blizzards.' },
      { kind: 'p', text: 'How do creatures with pinhead-sized brains navigate a journey they have never previously experienced? Entomologists have uncovered that monarchs utilize a sophisticated, genetically encoded navigation system. Their primary guide is a time-compensated celestial sun compass located in their antennae and compound eyes, which cross-references the sun\'s shifting position across the sky against their internal circadian molecular clocks. Additionally, recent neurological research confirms that monarchs possess magnetic receptors in their antennae that detect Earth\'s geomagnetic field lines, enabling them to maintain southward headings even on overcast days.' },
      { kind: 'p', text: 'Despite their breathtaking evolutionary adaptations, monarch populations have declined by more than eighty percent over the past three decades. The primary drivers of this crisis include habitat fragmentation, widespread agricultural herbicide use that eradicates native milkweed, illegal logging in Mexican wintering reserves, and severe climate disruptions that alter blooming schedules. In response, Texas conservation organizations, school districts, and city parks have launched proactive "Monarch Waystation" initiatives, transforming urban highway medians and schoolyard gardens into pesticide-free pollinator habitats.' },
      { kind: 'p', text: 'The continued survival of the monarch butterfly depends on international cooperation among Canada, the United States, and Mexico. By safeguarding native milkweed and planting resilient nectar gardens across the Texas migratory corridor, everyday citizens are actively participating in the preservation of an irreplaceable ecological masterpiece that links three nations through the flutter of fragile wings.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 2],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['Monarch butterflies live only four to six weeks and cannot survive outside botanical greenhouses.', 'This applies to summer generations, not the migratory super generation.'],
        'The monarch butterfly\'s remarkable southward migration relies on sophisticated navigational adaptations and the critical fueling corridor of Texas, but its future depends on urgent conservation efforts.',
        ['The primary reason monarchs visit Texas is to escape cold blizzards in the Canadian Rockies.', 'Texas is an essential geographic crossroads and refueling corridor on their route to Mexico.'],
        ['Monarch caterpillars feed on goldenrod and frostweed before entering reproductive diapause.', 'Caterpillars feed exclusively on milkweed; adults consume nectar from fall flowers.'],
      ],
      answer: 1,
      explain: 'The controlling idea integrates the epic migration, the unique biological adaptations, the pivotal role of Texas as a refueling funnel, and the urgent necessity of conservation initiatives.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [2, 4],
      stem: 'How does the author structure paragraph 2 to emphasize the significance of Texas in the monarch migration?',
      choices: [
        'By using a spatial and descriptive organizational pattern to explain why the continent\'s geography funnels migrating populations directly across Texas as an indispensable refueling gateway.',
        ['By presenting a chronological timeline of butterfly fossil records discovered in west Texas.', 'Fossils are not discussed; the focus is modern migration geography.'],
        ['By contrasting the speed of eastern monarch butterflies with western monarch species.', 'Western monarchs are not contrasted in this paragraph.'],
        ['By listing the economic costs of building insect enclosures across state highway medians.', 'The paragraph explains geographic convergence, not economic construction costs.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 explains the spatial concept of the "Texas Funnel," showing how continental geography funnels disparate eastern populations into a concentrated migratory bottleneck across Texas.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [5],
      stem: 'Which evidence from paragraph 5 explains how monarchs maintain their heading on cloudy or overcast days?',
      choices: [
        ['They navigate by memorizing highway asphalt lines and mountain silhouettes.', 'They do not use human highway landmarks.'],
        ['They wait on tree branches until the sun reappears at noon.', 'The text notes they continue navigating during overcast conditions.'],
        'They possess magnetic receptors in their antennae that detect Earth\'s geomagnetic field lines, providing an internal magnetic compass.',
        ['They follow the acoustic flight sounds of migrating geese flying southward.', 'They navigate independently of migratory birds.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 explicitly states that magnetic receptors in monarch antennae detect Earth\'s geomagnetic field lines, allowing them to steer southward even when clouds block the sun.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3, 4],
      a: {
        prompt: 'Part A: What can the reader infer about the physiological differences between summer monarchs and the autumn migratory generation?',
        choices: [
          'The autumn super generation is biologically optimized for long-distance endurance and winter survival rather than immediate reproduction.',
          ['Summer monarchs are physically larger and carry heavier lipid stores than autumn migrants.', 'The autumn generation builds up the vital lipid reserves for the journey.'],
          ['The autumn generation cannot fly and must glide on ocean currents to reach Mexico.', 'Monarchs fly using powered flight and thermal wind updrafts across land.'],
          ['Summer monarchs hibernate in underground burrows to avoid warm temperatures.', 'Summer generations reproduce continuously and live brief lifespans.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the inference in Part A?',
        choices: [
          ['"Every autumn, one of the most astonishing biological spectacles on Earth unfolds..." (paragraph 1)', 'This is an introductory observation.'],
          '"...these insects enter reproductive diapause—a state of suspended maturity in which reproduction is halted and physiological energy is redirected toward long-distance survival." (paragraph 3)',
          ['"Spanning from late September through early November..." (paragraph 2)', 'This gives dates, not biological adaptations.'],
          ['"A monarch that enters Mexico without sufficient abdominal lipid reserves will freeze..." (paragraph 4)', 'This explains a risk, but paragraph 3 defines the physiological diapause state.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 3 explains that reproductive diapause reallocates energy from reproduction toward cellular maintenance, fat storage, and long-distance flight endurance.',
    }),
    mcq({
      standard: 'rla:7.5G', cites: [6],
      stem: 'Based on paragraph 6, which factor represents a primary cause of the severe decline in monarch populations?',
      choices: [
        'Habitat fragmentation and widespread herbicide use that eliminate the native milkweed plants required by monarch caterpillars.',
        ['Overpopulation of native songbirds that hunt adult butterflies in urban parks.', 'Predation by songbirds is not identified as a primary cause of the eighty-percent decline.'],
        ['Excessive planting of purple mistflower along Texas highway corridors.', 'Mistflower is a beneficial nectar source planted to help monarchs.'],
        ['A global shortage of solar radiation that prevents butterflies from warming their wings.', 'Solar radiation shortages are scientifically inaccurate and not mentioned.'],
      ],
      answer: 0,
      explain: 'Paragraph 6 clearly identifies herbicide use eradicating native milkweed and habitat fragmentation as primary drivers of the 80% population drop.',
    }),
    mcq({
      standard: 'rla:7.9A', cites: [7],
      stem: 'What is the author\'s primary purpose in concluding the article with a description of Monarch Waystations in paragraph 7?',
      choices: [
        ['To argue that commercial butterfly farming should replace wild migration.', 'The author supports wild migration and habitat restoration.'],
        'To inspire readers to take practical local action by demonstrating how everyday citizens can contribute to international ecological conservation.',
        ['To prove that monarchs no longer need to fly to Mexico to survive winter.', 'Mexican wintering reserves remain essential to their lifecycle.'],
        ['To explain how school districts can capture butterflies for museum exhibits.', 'Waystations provide living, pesticide-free wild habitat, not captive exhibits.'],
      ],
      answer: 1,
      explain: 'The conclusion emphasizes community involvement and personal agency, encouraging readers to plant native waystations to help preserve an international ecological wonder.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [3, 4],
      stem: 'Which statement provides an objective summary of why Texas nectar plants are essential to monarch survival?',
      choices: [
        'Migrating monarchs must consume sucrose from fall-blooming wildflowers in Texas to build concentrated abdominal fat reserves that sustain them through winter freezing in Mexican mountain forests.',
        ['Texas gardeners plant milkweed exclusively so that adult monarchs can hibernate on flower petals during October.', 'Adults do not hibernate on Texas petals; they feed on nectar and fly to Mexico.'],
        ['Monarch caterpillars in Texas require high-octane sugar from frostweed to hatch into adults.', 'Caterpillars feed on milkweed leaves, not floral nectar.'],
        ['Monarchs stop in Texas solely to lay eggs that will complete the flight to Canada.', 'The autumn generation flies directly to Mexico without reproducing.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the metabolic need for Texas nectar: converting sucrose into lipids to survive the winter in Mexican cloud forests.',
    }),
  ],
});
