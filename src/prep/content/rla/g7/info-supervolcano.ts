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
      { kind: 'p', text: 'When most people picture a volcanic eruption, they envision a symmetrical, cone-shaped mountain like Mount St. Helens or Mount Fuji explosively venting lava and ash from a central peak. However, the most cataclysmic volcanic events in Earth\'s geological history look entirely different. Rather than steep mountain peaks, the planet\'s most fearsome volcanic systems—known to geologists as supervolcanoes—are characterized by vast, subterranean magma chambers that collapse inward after gargantuan eruptions, leaving behind colossal sunken depressions called calderas.' },
      { kind: 'p', text: 'To qualify as a supervolcano on the Volcanic Explosivity Index (VEI), an eruption must achieve an index rating of 8, the maximum classification possible. Such an event expels more than one thousand cubic kilometers (approximately 240 cubic miles) of volcanic rock, pumice, and pulverizing pyroclastic material—a volume of ejected debris thousands of times greater than the 1980 eruption of Mount St. Helens. The geological footprint of a VEI-8 eruption is so monumental that its calderas can span forty to fifty miles across, easily encompassing entire mountain ranges and river valleys.' },
      { kind: 'p', text: 'How do these subterranean monsters form? Supervolcanoes typically develop above stationary mantle plumes known as "hotspots"—columns of superheated molten rock that well up from deep within Earth\'s mantle through the moving tectonic crust. As continental tectonic plates drift slowly over these hotspots, basaltic magma collects beneath the thick, silica-rich continental crust. Because continental crust is buoyant and resists melting, magma becomes trapped in immense subterranean reservoirs, slowly accumulating for hundreds of thousands of years under staggering lithostatic pressure.' },
      { kind: 'p', text: 'As pressure mounts, the trapped magma dissolves enormous quantities of volatile gases, primarily water vapor, carbon dioxide, and sulfur dioxide. Eventually, fractures rip through the arched rock roof above the magma chamber. The sudden depressurization causes the dissolved gases to expand violently, shattering the molten rock into microscopic shards of glass and porous pumice. Billowing eruption columns shoot thirty miles into the stratosphere, and dense, superheated pyroclastic flows race across surrounding landscapes at hurricane speeds, incinerating everything in their path.' },
      { kind: 'p', text: 'The global consequences of a supervolcano eruption extend far beyond the immediate blast zone. When millions of tons of sulfur dioxide are injected directly into the stratosphere, the gas reacts with water vapor to form a persistent veil of microscopic sulfate aerosol droplets. These reflective aerosols orbit the globe for years, bouncing incoming solar radiation back into space. The resulting "volcanic winter" causes worldwide temperatures to plummet by five to ten degrees Celsius, triggering severe agricultural failures, worldwide famine, and prolonged climate destabilization.' },
      { kind: 'p', text: 'Earth hosts several dormant supervolcanic calderas, including the Yellowstone Caldera in Wyoming, the Long Valley Caldera in California, Lake Toba in Indonesia, and Taupo in New Zealand. The Yellowstone hotspot, which has fueled three colossal caldera-forming eruptions over the past 2.1 million years, is currently the most intensely monitored geological system in the world. Scientists from the Yellowstone Volcano Observatory employ hundreds of seismographs, satellite GPS receivers, thermal imaging sensors, and gas sniffers to measure ground deformation and seismic swarms in real time.' },
      { kind: 'p', text: 'Fortunately for humanity, supervolcano eruptions are exceedingly rare geological phenomena, occurring roughly once every one hundred thousand years. Geological surveys confirm that the Yellowstone magma chamber is currently only five to fifteen percent molten, far below the fifty percent threshold required to generate a catastrophic eruption. While these sleeping giants remain awe-inspiring reminders of the immense tectonic forces beneath our feet, current monitoring technology ensures that humanity will receive centuries of advance warning before another super-eruption shakes the globe.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 2],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['Mount St. Helens was the largest volcanic eruption in human history.', 'Mount St. Helens was small compared to VEI-8 supervolcanoes.'],
        'Supervolcanoes are vast, caldera-forming volcanic systems whose rare, colossal eruptions alter global climate, but continuous modern geological monitoring helps scientists understand their behavior.',
        ['The Yellowstone caldera is currently preparing to erupt within the next few months.', 'The text notes Yellowstone is far below the threshold required to erupt and super-eruptions are rare.'],
        ['Volcanic winters occur because ash clouds absorb rainwater and create eternal droughts.', 'Volcanic winter is caused by sulfate aerosols reflecting solar radiation back into space.'],
      ],
      answer: 1,
      explain: 'The controlling idea explains the defining characteristics of supervolcanoes, their global climatic impacts, and the ongoing scientific monitoring that tracks their subterranean activity.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [3, 4],
      stem: 'Which organizational pattern does the author use in paragraphs 3 and 4 to explain how a supervolcano erupts?',
      choices: [
        'A cause-and-effect and sequential structure that traces how trapped magma accumulates, builds extreme pressure, and causes sudden catastrophic explosive depressurization.',
        ['A chronological timeline of every eruption that occurred in California over the last millennium.', 'The paragraphs explain geological mechanisms, not a historical California timeline.'],
        ['A problem-and-solution pattern detailing how engineers pump water to cool subterranean magma.', 'Pumping water into magma chambers is neither feasible nor discussed.'],
        ['A spatial description detailing the architectural design of tourist observatories.', 'The focus is on subterranean rock melting and gas expansion, not tourist buildings.'],
      ],
      answer: 0,
      explain: 'Paragraphs 3 and 4 explain the sequential cause-and-effect process: mantle plumes heating continental crust -> magma trapping -> gas accumulation -> fracture -> violent depressurization.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [5],
      stem: 'Which text evidence from paragraph 5 explains why a supervolcano eruption causes a global volcanic winter?',
      choices: [
        ['"Dense, superheated pyroclastic flows race across surrounding landscapes..."', 'Pyroclastic flows cause local devastation, not global volcanic winter.'],
        'Sulfur dioxide injected into the stratosphere reacts with water vapor to form reflective sulfate aerosol droplets that bounce incoming solar radiation back into space.',
        ['"Earth hosts several dormant supervolcanic calderas..."', 'Listing calderas does not explain the physics of atmospheric cooling.'],
        ['"Yellowstone is currently the most intensely monitored geological system in the world."', 'Monitoring measures geological swarms, but does not cause climatic cooling.'],
      ],
      answer: 1,
      explain: 'Paragraph 5 explains that sulfate aerosols in the stratosphere reflect sunlight away from Earth, cooling worldwide temperatures and triggering a volcanic winter.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [6, 7],
      a: {
        prompt: 'Part A: What can the reader infer about the likelihood of an imminent super-eruption at Yellowstone?',
        choices: [
          'An eruption is highly unlikely in the foreseeable future because the magma chamber lacks the necessary volume of liquid molten rock required to erupt.',
          ['An eruption is scheduled to happen within the next decade based on GPS deformation.', 'GPS tracking confirms stability, and magma is only 5–15% molten.'],
          ['Scientists are unable to determine whether the magma chamber is liquid or solid.', 'Advanced seismic imaging accurately measures the exact percentage of molten rock.'],
          ['The caldera has completely cooled into solid granite and will never become active again.', 'It remains a sleeping giant above an active mantle plume, but is currently dormant.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the text best supports the inference in Part A?',
        choices: [
          ['"...occurring roughly once every one hundred thousand years." (paragraph 7)', 'This states frequency, but does not give the physical state of the magma.'],
          '"Geological surveys confirm that the Yellowstone magma chamber is currently only five to fifteen percent molten, far below the fifty percent threshold required to generate a catastrophic eruption." (paragraph 7)',
          ['"The Yellowstone hotspot, which has fueled three colossal caldera-forming eruptions..." (paragraph 6)', 'This describes past history, not current risk.'],
          ['"Scientists from the Yellowstone Volcano Observatory employ hundreds of seismographs..." (paragraph 6)', 'This describes tools, not magma condition.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 7 provides the scientific evidence: the magma is only 5–15% liquid, far below the 50% molten state needed for an eruption to occur.',
    }),
    mcq({
      standard: 'rla:7.9A', cites: [1, 2],
      stem: 'What is the author\'s purpose in contrasting supervolcanoes with cone-shaped volcanoes like Mount St. Helens in paragraphs 1 and 2?',
      choices: [
        ['To argue that cone-shaped volcanoes are harmless to human communities.', 'Mount St. Helens was deadly and destructive, though smaller than supervolcanoes.'],
        ['To prove that calderas can only form beneath ocean waters.', 'Calderas form on continents as well, such as Yellowstone and Long Valley.'],
        'To dispel the common misconception that all volcanoes are steep conical mountains and emphasize the vastly larger scale of caldera-forming supervolcanic systems.',
        ['To show that Mount St. Helens was caused by a meteor impact rather than tectonic magma.', 'Mount St. Helens is a volcanic peak, not an impact crater.'],
      ],
      answer: 2,
      explain: 'The author opens by contrasting familiar conical mountains with flat, sunken calderas to clarify the unique structure and immense scale of supervolcanoes.',
    }),
    mcq({
      standard: 'rla:7.9C', cites: [6],
      stem: 'Based on paragraph 6, which technologies do geologists utilize to detect signs of volcanic unrest at Yellowstone?',
      choices: [
        'Seismographs, satellite GPS receivers, thermal imaging sensors, and gas sniffers that monitor ground deformation and earthquakes in real time.',
        ['Drilling deep vertical shafts into the magma reservoir to relieve subterranean gas pressure.', 'Engineers do not drill into magma chambers.'],
        ['Underwater sonar submarines that map magma flows beneath the Pacific Ocean.', 'Yellowstone is located in continental Wyoming, not the ocean.'],
        ['Exploding dynamite charges to test the structural strength of the rock roof.', 'Scientists monitor natural seismic swarms passively.'],
      ],
      answer: 0,
      explain: 'Paragraph 6 explicitly lists seismographs, GPS receivers, thermal imaging sensors, and gas sniffers as the tools used by the observatory.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [1, 2, 7],
      stem: 'Which statement provides an objective summary of why supervolcanoes do not pose an immediate danger to humanity today?',
      choices: [
        'Supervolcano eruptions occur extremely rarely on geological timescales, and advanced real-time monitoring confirms that dormant systems like Yellowstone have insufficient molten magma to produce an eruption in our lifetime.',
        ['Supervolcanoes have all become completely extinct because Earth\'s core has cooled permanently.', 'The mantle plume remains active, though currently dormant.'],
        ['Scientists have developed artificial chemicals that solidify molten basalt before it reaches the surface.', 'Human technology cannot freeze subterranean magma chambers.'],
        ['The United Nations has evacuated all cities surrounding active calderas in North America.', 'No evacuations exist; millions visit Yellowstone and Lake Toba safely.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the extreme rarity of super-eruptions, the low molten percentage of Yellowstone\'s chamber, and the security provided by modern geophysical monitoring.',
    }),
  ],
});
