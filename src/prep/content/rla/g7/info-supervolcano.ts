// Grade 7 informational: Inside Supervolcanoes.
import { makeSet, mcq, twoq } from '../author.ts';

export const INFO_SUPERVOLCANO = makeSet({
  id: 'g7-info-supervolcano',
  grade: 7,
  kind: 'reading',
  title: 'Sleeping Giants: The Science of Supervolcanoes',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-info-supervolcano-p',
    title: 'Sleeping Giants: The Science of Supervolcanoes',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'When most people picture a volcano, they think of a steep, cone-shaped mountain like Mount Fuji or Mount St. Helens. They imagine hot lava and ash shooting high into the air from a peak. But the biggest volcanic events in Earth\'s long history look very different. The most powerful volcanic systems on Earth do not build tall peaks. Instead, their roofs collapse into giant sunken bowls called calderas. Geologists call these massive systems supervolcanoes.' },
      { kind: 'p', text: 'Scientists use the Volcanic Explosivity Index to rate eruptions. To rank as a supervolcano, an event must score an 8 on this scale. That is the highest score possible. An eruption of this size blasts out more than two hundred and forty cubic miles of rock, ash, and pumice stone. That is thousands of times more debris than Mount St. Helens produced in 1980. The sunken caldera left behind can stretch forty or fifty miles wide. That is large enough to swallow entire mountain ranges and river valleys.' },
      { kind: 'p', text: 'How do these giant volcanoes form? Most grow above stationary columns of hot rock called mantle plumes, or hotspots. Deep heat rises through Earth\'s outer crust. As moving tectonic plates slide over a hotspot, molten rock called magma collects beneath thick continental rock. Continental rock resists melting, so the magma stays trapped underground. For hundreds of thousands of years, this liquid rock pools in huge chambers under heavy pressure.' },
      { kind: 'p', text: 'As pressure builds, gases dissolve into the liquid rock. These gases include water vapor, carbon dioxide, and sulfur dioxide. Over time, cracks split the rock roof above the magma chamber. The sudden drop in pressure causes trapped gases to expand with fierce power. The blast shatters molten rock into tiny glass ash and pumice. Clouds of ash shoot thirty miles up into the sky. Superheated clouds of gas and rock race across the land at hurricane speeds, burning everything in their path.' },
      { kind: 'p', text: 'The effects of a super-eruption reach around the globe. Millions of tons of sulfur dioxide gas rise high into the stratosphere. There, the gas reacts with moisture to form a veil of sulfate droplets. These tiny droplets float around the world for years. They bounce sunlight back into space. This creates a volcanic winter. Global temperatures can drop five to ten degrees Celsius. Hard frosts and failed crops can follow all around the world.' },
      { kind: 'p', text: 'Earth holds several quiet supervolcanoes today, including the Yellowstone Caldera in Wyoming, Long Valley in California, Lake Toba in Indonesia, and Taupo in New Zealand. Yellowstone sits over an active hotspot that has produced three huge caldera eruptions over the past two million years. Today, it is the most closely watched volcano in the world. Scientists from the Yellowstone Volcano Observatory use hundreds of seismographs, satellite GPS receivers, thermal cameras, and gas sniffers to monitor ground swelling and small quakes in real time. These sensitive tools help researchers track magma movements and shifting steam deep underground.' },
      { kind: 'p', text: 'Fortunately, super-eruptions are very rare events, happening roughly once every one hundred thousand years. Geological surveys confirm that the Yellowstone magma chamber is currently only five to fifteen percent molten, far below the fifty percent threshold needed to cause an eruption. While these sleeping giants remind us of the great forces beneath our feet, modern instruments will give scientists centuries of advance warning before any new super-eruption occurs.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 2],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['Mount St. Helens was the largest volcanic eruption in modern human history.', 'Mount St. Helens was destructive, but far smaller than a VEI-8 supervolcano.'],
        'Supervolcanoes form giant calderas and can affect world climate.',
        ['The Yellowstone caldera is currently preparing to erupt in coming weeks.', 'The passage shows that Yellowstone is quiet and has low molten magma.'],
        ['Volcanic winters happen because ash clouds absorb rainwater permanently.', 'Volcanic winters are caused by sulfate droplets reflecting sunlight.'],
      ],
      answer: 1,
      explain: 'The controlling idea explains the unique caldera structure of supervolcanoes, their global climatic impact, and their monitored geological status.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [3, 4],
      stem: 'Which organizational pattern is used in paragraphs 3 and 4 to explain eruptions?',
      choices: [
        'Cause-and-effect showing how trapped magma builds explosive pressure.',
        ['A chronological timeline of every eruption in California over centuries.', 'The paragraphs explain geological mechanisms rather than a California timeline.'],
        ['A problem-and-solution pattern detailing how to cool subterranean magma.', 'Pumping water into magma chambers is neither feasible nor discussed.'],
        ['A spatial description detailing the architectural design of observatories.', 'The focus is on subterranean rock melting and gas pressure, not observatory design.'],
      ],
      answer: 0,
      explain: 'Paragraphs 3 and 4 trace the cause-and-effect sequence: rising hotspot heat -> trapped magma -> building gas pressure -> catastrophic eruption.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [5],
      stem: 'Which detail from paragraph 5 explains why a super-eruption causes global cooling?',
      choices: [
        ['Superheated ash flows race across landscapes at violent hurricane speeds.', 'Pyroclastic flows cause local damage rather than global cooling.'],
        'High sulfate droplets bounce sunlight back out into space.',
        ['Earth hosts several quiet supervolcanoes that remain dormant for centuries.', 'Listing dormant calderas does not explain atmospheric cooling physics.'],
        ['Yellowstone is monitored by seismic networks measuring subterranean swarms.', 'Monitoring instruments do not cause temperature drops.'],
      ],
      answer: 1,
      explain: 'Paragraph 5 explains that sulfate droplets formed in the stratosphere reflect solar radiation away from Earth, causing a volcanic winter.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [6, 7],
      a: {
        prompt: 'Part A: What can the reader infer about an imminent eruption at Yellowstone?',
        choices: [
          'An eruption is unlikely soon because magma is mostly solid.',
          ['An eruption is due within the decade based on ground deformation data.', 'GPS data shows slow changes, and magma is only 5–15% molten.'],
          ['Scientists are unable to tell if subterranean magma is liquid or stone.', 'Seismic imaging accurately measures the percentage of molten rock.'],
          ['The caldera has cooled permanently into granite and will never awaken.', 'The hotspot remains active, though the volcano is currently dormant.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from paragraph 7 best supports the answer to Part A?',
        choices: [
          ['"...super-eruptions are very rare events, happening roughly once every one hundred thousand years." (paragraph 7)', 'This states frequency rather than the physical state of the magma.'],
          '"...the Yellowstone magma chamber is currently only five to fifteen percent molten..." (paragraph 7)',
          ['"Scientists from the Yellowstone Volcano Observatory use hundreds of seismographs and sensors..." (paragraph 6)', 'This describes tools, not magma conditions.'],
          ['"Yellowstone sits over an active hotspot that has produced three huge caldera eruptions..." (paragraph 6)', 'This notes past history rather than current molten levels.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 7 provides the scientific evidence: the chamber is only 5–15% molten, far below the 50% threshold needed to produce an eruption.',
    }),
    mcq({
      standard: 'rla:7.9A', cites: [1, 2],
      stem: 'What is the author\'s purpose in contrasting supervolcanoes with cone-shaped peaks?',
      choices: [
        ['To argue that cone-shaped peaks are harmless to surrounding communities.', 'Conical volcanoes can be deadly, as shown by Mount St. Helens.'],
        ['To prove that calderas can only form deep beneath oceanic water basins.', 'Calderas form on land as well, including Yellowstone.'],
        'To show that supervolcanoes form giant sunken calderas.',
        ['To show that Mount St. Helens was caused by a meteor impact long ago.', 'Mount St. Helens is a volcanic mountain, not an impact crater.'],
      ],
      answer: 2,
      explain: 'The author opens by contrasting conical mountains with sunken calderas to clarify the unique structure and massive scale of supervolcanoes.',
    }),
    mcq({
      standard: 'rla:7.9C', cites: [6],
      stem: 'Based on paragraph 6, which tools do scientists use to monitor Yellowstone?',
      choices: [
        'Seismographs, GPS receivers, thermal cameras, and gas sniffers.',
        ['Vertical drill shafts bored directly into the magma reservoir.', 'Engineers do not drill into magma chambers.'],
        ['Sonar submarines that navigate deep channels beneath the Pacific.', 'Yellowstone is located in Wyoming on the North American continent.'],
        ['Exploding dynamite charges to test the strength of the rock roof.', 'Researchers monitor natural geological signals passively.'],
      ],
      answer: 0,
      explain: 'Paragraph 6 explicitly lists seismographs, GPS receivers, thermal cameras, and gas sniffers as the tools used by the observatory.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [1, 2, 7],
      stem: 'Which statement provides an objective summary of the danger posed by supervolcanoes?',
      choices: [
        'Super-eruptions are rare, and data shows Yellowstone has low molten magma.',
        ['Supervolcanoes are extinct because Earth\'s mantle has completely cooled down.', 'The underlying mantle hotspot remains active.'],
        ['Engineers have pumped cooling chemicals underground to freeze magma basins.', 'Humans cannot artificially cool or freeze subterranean magma chambers.'],
        ['Civil authorities have evacuated all cities surrounding North American sites.', 'No evacuations exist; millions visit Yellowstone safely.'],
      ],
      answer: 0,
      explain: 'This concise choice accurately summarizes the extreme rarity of super-eruptions and the reassuring data from modern geophysical monitoring.',
    }),
  ],
});
