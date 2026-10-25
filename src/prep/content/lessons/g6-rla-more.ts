// Grade 6 reading walkthroughs (part 2): genres, author's craft, and writing process.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  G6_MINI_FOSSIL,
  G6_MINI_MONARCH,
  G6_MINI_SOLAR,
  G6_MINI_STORM,
  G6_MINI_DRAMA,
  G6_MINI_FOREST,
  G6_MINI_SPEECH,
  G6_MINI_TELESCOPE,
} from './g6-rla-passages.ts';

export const G6_RLA_LESSONS_MORE: Lesson[] = [
  // 6.8A Literary genres and myths
  {
    code: 'rla:6.8A',
    goal: 'You will learn to identify characteristics of literary genres such as adventure stories, historical fiction, mysteries, humor, and myths.',
    words: [
      { term: 'genre', meaning: 'A category or type of literature with specific styles and characteristics.' },
      { term: 'myth', meaning: 'A traditional story explaining natural phenomena, often involving gods or supernatural beings.' },
    ],
    ideas: [
      { title: 'Look for genre markers', text: 'Myths feature divine interventions or natural origins. Adventure stories focus on external survival and danger. Historical fiction blends real eras with fictional characters.' },
      { title: 'Notice author purpose', text: 'Different genres serve different purposes: mysteries challenge readers to solve clues, while myths impart cultural values and explanations.' },
    ],
    samples: [
      sample(
        G6_MINI_FOSSIL,
        mcq({
          standard: 'rla:6.8A', cites: [1, 2],
          stem: 'Which genre best describes "Treasure in the Limestone"?',
          choices: [
            'Realistic fiction about two siblings on a fossil hunt',
            ['An ancient Greek myth about mythological monsters', 'The passage is modern and grounded in real biology.'],
            ['A science fiction fantasy about time travel', 'No supernatural technology or time travel occurs.'],
            ['A formal speech to a city zoning board', 'This is a narrative story with characters and dialogue.'],
          ],
          answer: 0,
          explain: 'The story depicts realistic contemporary characters encountering an authentic natural discovery in a real Texas location.',
        }),
        6
      ),
      sample(
        G6_MINI_STORM,
        mcq({
          standard: 'rla:6.8A', cites: [1, 2],
          stem: 'What genre characteristic is highlighted in "Thunder over the Caprock"?',
          choices: [
            'Suspenseful adventure fiction driven by natural danger',
            ['A humorous tall tale using extreme exaggeration', 'The tone is realistic and cautious, not comic.'],
            ['A fable ending in a stated moral proverb', 'There is no talking animal or stated moral.'],
            ['A biography detailing a person\'s full lifespan', 'The scene depicts a single dramatic afternoon.'],
          ],
          answer: 0,
          explain: 'The sudden arrival of a dangerous flash-flood storm creates an authentic survival conflict typical of adventure fiction.',
        }),
        6
      ),
    ],
  },

  // 6.8B Poetry: meter and line breaks
  {
    code: 'rla:6.8B',
    goal: 'You will learn how poets use meter, line breaks, and stanza structures to create rhythm and emphasize meaning.',
    words: [
      { term: 'meter', meaning: 'The regular rhythmic pattern of stressed and unstressed syllables in a line of verse.' },
      { term: 'line break', meaning: 'Where a poet chooses to end one line and begin another to create emphasis or pause.' },
    ],
    ideas: [
      { title: 'Read the poem aloud', text: 'Listen for natural pauses at line ends. A sudden line break often emphasizes the first word of the next line.' },
      { title: 'Notice rhythm and tempo', text: 'Short lines often quicken the pace, while longer, structured lines slow down the reading to create reflection.' },
    ],
    samples: [
      sample(
        G6_MINI_STORM,
        mcq({
          standard: 'rla:6.8B', cites: [1],
          stem: 'If this passage were adapted into poetry, why might an author place "A concussive boom of thunder" on its own separate line?',
          choices: [
            'To create an abrupt rhythmic pause that mimics the sudden, shocking impact of the thunderclap',
            ['To save printing paper on the page', 'Line breaks are artistic choices, not paper-saving measures.'],
            ['To signal that the story has ended permanently', 'The scene continues after the thunder.'],
            ['To rhyme with the title of the book', 'Line breaks alone do not create rhyming pairs.'],
          ],
          answer: 0,
          explain: 'Isolating a dramatic sound on its own line emphasizes its startling auditory impact and suddenness.',
        }),
        6
      ),
      sample(
        G6_MINI_MONARCH,
        mcq({
          standard: 'rla:6.8B', cites: [1],
          stem: 'How could a poet use short, rapid line breaks when describing the monarch butterfly\'s flight?',
          choices: [
            'To mimic the fluttering, delicate wing beats of an insect riding thermal currents',
            ['To prove that monarchs cannot fly across open water', 'Monarchs migrate thousands of miles.'],
            ['To show that the butterfly has fallen asleep', 'Rapid lines evoke active movement, not sleep.'],
            ['To make the poem look like a telephone directory', 'Poetic form enhances imagery and theme.'],
          ],
          answer: 0,
          explain: 'Brief, buoyant lines mirror the light, fluttering physical motion of butterflies gliding through the air.',
        }),
        6
      ),
    ],
  },

  // 6.8C Drama: dialogue and staging
  {
    code: 'rla:6.8C',
    goal: 'You will learn how playwrights develop characters and conflicts through spoken dialogue and stage directions.',
    words: [
      { term: 'dialogue', meaning: 'The conversation between characters in a play or script.' },
      { term: 'stage directions', meaning: 'Instructions in brackets describing actors\' movements, gestures, or facial expressions.' },
    ],
    ideas: [
      { title: 'Read the bracketed directions', text: 'Stage directions reveal characters\' true emotions and actions that aren\'t spoken aloud.' },
      { title: 'Listen to the tone of voice', text: 'How a character speaks—confidently, sarcastically, or hesitatingly—reveals their inner motivations.' },
    ],
    samples: [
      sample(
        G6_MINI_DRAMA,
        mcq({
          standard: 'rla:6.8C', cites: [1, 2],
          stem: 'What do the stage directions in speech 1 ("[Peering through a large magnifying lens...]") reveal about Elena?',
          choices: [
            'She is an observant, detail-oriented researcher engaged in close scientific examination.',
            ['She is bored and looking for a way to leave the museum.', 'Her action and words show deep fascination.'],
            ['She has poor eyesight and cannot see large objects.', 'Using a magnifying glass is standard artifact conservation practice.'],
            ['She is playing a practical joke on Dr. Gomez.', 'Her research observation is serious and accurate.'],
          ],
          answer: 0,
          explain: 'Stage directions showing close physical inspection highlight Elena\'s focus and dedication to archaeological discovery.',
        }),
        6
      ),
      sample(
        G6_MINI_DRAMA,
        mcq({
          standard: 'rla:6.8C', cites: [2, 3],
          stem: 'How does Dr. Gomez\'s dialogue in speech 2 advance the scene?',
          choices: [
            'She praises Elena\'s observation and asks a guiding question that prompts Elena to make a historical connection.',
            ['She scolds Elena for handling delicate artifacts without gloves.', 'Dr. Gomez offers praise and encouragement.'],
            ['She changes the topic to announce the museum is closing.', 'The dialogue stays directly on the artifact analysis.'],
            ['She admits she has never seen ancient pottery before.', 'Dr. Gomez is an expert curator guiding an intern.'],
          ],
          answer: 0,
          explain: 'Dr. Gomez acts as a mentor, using a question to lead Elena toward discovering the ancient trade route connection.',
        }),
        6
      ),
    ],
  },

  // 6.8D.i Controlling idea or thesis
  {
    code: 'rla:6.8D.i',
    goal: 'You will learn to identify the controlling idea or thesis in informational text and evaluate its supporting evidence.',
    words: [
      { term: 'controlling idea', meaning: 'The central thought or main claim that unifies an entire informational text.' },
      { term: 'supporting evidence', meaning: 'Facts, statistics, and examples that prove or illustrate the controlling idea.' },
    ],
    ideas: [
      { title: 'Look in the introduction and conclusion', text: 'Authors usually state their main thesis near the beginning and reinforce it at the end.' },
      { title: 'Ask: What unites every paragraph?', text: 'Every body paragraph should supply evidence supporting the central claim.' },
    ],
    samples: [
      sample(
        G6_MINI_MONARCH,
        mcq({
          standard: 'rla:6.8D.i', cites: [1, 2],
          stem: 'What is the controlling idea of "Wings Across the Continent"?',
          choices: [
            'Monarch butterflies perform an extraordinary long-distance migration guided by an intricate internal navigation system.',
            ['Monarch butterflies weigh less than a paperclip and cannot fly against the wind.', 'This is a single physical detail from paragraph 1.'],
            ['Fir trees in Mexico grow only on high volcanic peaks.', 'The tree habitat is a supporting detail, not the central thesis.'],
            ['All insects use antennae to forecast rainstorms.', 'The passage focuses on the monarch\'s migration navigation.'],
          ],
          answer: 0,
          explain: 'The passage explains the migration route in paragraph 1 and the neurological navigation system in paragraph 2.',
        }),
        6
      ),
      sample(
        G6_MINI_TELESCOPE,
        mcq({
          standard: 'rla:6.8D.i', cites: [1, 2],
          stem: 'What is the controlling idea of "Eyes on the Cosmos"?',
          choices: [
            'The James Webb Space Telescope uses innovative gold mirrors and a giant heat shield to observe ancient infrared light from deep space.',
            ['Kapton film was invented to manufacture tennis courts.', 'The shield is tennis-court-sized, not for playing tennis.'],
            ['Galaxies after the Big Bang were cold and emitted no radiation.', 'The telescope detects faint infrared light from those galaxies.'],
            ['Refrigerators are too heavy to launch aboard any space rocket.', 'Heavy cooling equipment is mentioned only to contrast with the passive shield.'],
          ],
          answer: 0,
          explain: 'The passage explains the telescope\'s mission, its primary mirror design, and the protective sunshield that enables deep cosmic observations.',
        }),
        6
      ),
    ],
  },

  // 6.8D.ii Text features and references
  {
    code: 'rla:6.8D.ii',
    goal: 'You will learn to analyze how text features such as prefaces, references, sidebars, and captions provide background information.',
    words: [
      { term: 'text feature', meaning: 'Design elements like sidebars, headings, and footnotes that clarify or supplement the main text.' },
      { term: 'reference', meaning: 'A citation or note indicating where specific background data or quotes originated.' },
    ],
    ideas: [
      { title: 'Read the sidebars and charts', text: 'Text features often summarize complex facts or present comparisons that deepen understanding.' },
      { title: 'Check captions and labels', text: 'Captions explain illustrations and diagrams, connecting visual details directly to the written text.' },
    ],
    samples: [
      sample(
        G6_MINI_FOREST,
        mcq({
          standard: 'rla:6.8D.ii', cites: [1, 2],
          stem: 'How would a diagram showing the vertical layers of the Piney Woods enhance this passage?',
          choices: [
            'It would visually illustrate the relationship between the tall canopy, understory trees, and the forest floor.',
            ['It would prove that pine trees are taller than mountain ranges.', 'Pines are about 100 feet tall, far shorter than mountains.'],
            ['It would show tourists where to purchase lumber products.', 'The passage is ecological, not commercial retail.'],
            ['It would replace the need for any written explanation.', 'Diagrams complement and clarify written text, rather than replace it.'],
          ],
          answer: 0,
          explain: 'A layered diagram visually clarifies how sunlight filters through the canopy down to the understory and soil.',
        }),
        6
      ),
      sample(
        G6_MINI_TELESCOPE,
        mcq({
          standard: 'rla:6.8D.ii', cites: [1, 2],
          stem: 'Why did the author include the comparison "tennis-court-sized" to describe the sunshield in paragraph 2?',
          choices: [
            'To provide a familiar real-world reference scale for visualizing the immense dimensions of the shield.',
            ['To suggest that astronauts play sports during space missions.', 'The comparison is purely for physical scale.'],
            ['To explain the athletic rules of orbital tennis tournaments.', 'There are no tennis matches in space.'],
            ['To show that the shield was constructed from white canvas net.', 'The shield is made of high-tech Kapton film.'],
          ],
          answer: 0,
          explain: 'Using a familiar object like a tennis court helps readers grasp the enormous physical size of the satellite\'s sunshield.',
        }),
        6
      ),
    ],
  },

  // 6.8D.iii Informational patterns
  {
    code: 'rla:6.8D.iii',
    goal: 'You will learn to recognize organizational patterns in informational text, including definition, classification, advantage, and disadvantage.',
    words: [
      { term: 'organizational pattern', meaning: 'The logical structure an author uses to present ideas and details.' },
      { term: 'classification', meaning: 'Sorting items or concepts into categories based on shared characteristics.' },
    ],
    ideas: [
      { title: 'Look for transition keywords', text: 'Words like "first, second" show sequence; "similarly, however" show comparison; "benefits, drawbacks" show advantage/disadvantage.' },
      { title: 'Identify paragraph goals', text: 'Does the author define a concept, divide it into groups, or contrast pros and cons?' },
    ],
    samples: [
      sample(
        G6_MINI_FOREST,
        mcq({
          standard: 'rla:6.8D.iii', cites: [1, 2],
          stem: 'Which organizational pattern is used in "Architecture of the Piney Woods"?',
          choices: [
            'Spatial classification dividing the forest into distinct vertical layers from canopy to soil',
            ['Chronological sequence tracing forest fires over several centuries', 'The text describes physical layers, not a historical timeline.'],
            ['Problem and solution resolving a dispute between timber companies', 'No commercial dispute or policy solution is discussed.'],
            ['Cause and effect explaining why pine trees lose their needles in winter', 'Evergreen pines retain needles; the text focuses on structural layers.'],
          ],
          answer: 0,
          explain: 'The passage organizes information spatially, classifying the ecosystem from top (emergent canopy) down to understory and floor.',
        }),
        6
      ),
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.8D.iii', cites: [1, 2],
          stem: 'What organizational pattern does the author use in "Power from the Sun"?',
          choices: [
            'Presenting the financial and environmental advantages of solar power while rebutting the disadvantage of upfront costs',
            ['Chronological narrative about Thomas Edison discovering electricity', 'The text is a modern school proposal, not an Edison biography.'],
            ['Definition and classification of five different types of silicon atoms', 'The passage is an economic and policy argument, not chemistry.'],
            ['Cause and effect detailing how power outages damage computer monitors', 'Equipment damage is not discussed.'],
          ],
          answer: 0,
          explain: 'The text highlights advantages (cost savings, clean power) and counters the perceived disadvantage of initial installation costs.',
        }),
        6
      ),
    ],
  },

  // 6.8E.i Identify the claim
  {
    code: 'rla:6.8E.i',
    goal: 'You will learn to identify the central claim or thesis in an argumentative text.',
    words: [
      { term: 'claim', meaning: 'The main stance or position an author takes on an arguable issue.' },
      { term: 'argumentative text', meaning: 'Writing that uses logic and evidence to convince the reader to agree with a viewpoint.' },
    ],
    ideas: [
      { title: 'Find the author\'s core proposal', text: 'Ask yourself: What does the author want me to believe or do?' },
      { title: 'Distinguish claims from facts', text: 'Facts can be proven true; a claim is a viewpoint backed by reasons and evidence.' },
    ],
    samples: [
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.8E.i', cites: [1],
          stem: 'What is the author\'s central claim in "Power from the Sun"?',
          choices: [
            'School districts should install rooftop solar arrays to reduce utility bills and fund educational resources.',
            ['Solar panels are too expensive for any Texas public school to afford.', 'This is the objection that the author refutes.'],
            ['Classrooms should turn off all electrical lights on sunny days.', 'The author proposes generating clean power, not sitting in the dark.'],
            ['Art supplies should be replaced with solar-powered calculators.', 'Art supplies are mentioned as items that saved funds can purchase.'],
          ],
          answer: 0,
          explain: 'The opening paragraph articulates the claim: installing rooftop solar arrays offers an immediate, cost-saving solution for schools.',
        }),
        6
      ),
      sample(
        G6_MINI_SPEECH,
        mcq({
          standard: 'rla:6.8E.i', cites: [1, 2],
          stem: 'What is the speaker\'s primary claim in "Save the Historic Plaza"?',
          choices: [
            'The city council must reject the parking garage and protect the historic century-old oak grove.',
            ['The city of San Marcos should ban all automobiles from downtown.', 'The speaker opposes a parking garage in a park, not all automobiles.'],
            ['Ancient oak trees should be moved into a commercial greenhouse.', 'The speaker advocates preserving them on Heritage Square.'],
            ['The downtown square should host carnival rides every weekend.', 'Summer festivals are mentioned for shade, not carnival rides.'],
          ],
          answer: 0,
          explain: 'The speaker directly asks citizens and council members to protect the green heritage of the oak trees rather than pave over them.',
        }),
        6
      ),
    ],
  },

  // 6.8E.ii Evidence in arguments
  {
    code: 'rla:6.8E.ii',
    goal: 'You will learn how authors use various types of evidence—facts, statistics, expert testimony, and examples—to support an argument.',
    words: [
      { term: 'evidence', meaning: 'Specific facts, data, and examples that substantiate a claim.' },
      { term: 'rebuttal', meaning: 'Evidence and reasoning used to disprove or weaken a counterargument.' },
    ],
    ideas: [
      { title: 'Evaluate the evidence type', text: 'Statistics provide quantitative proof; expert opinions offer authority; real-world examples make claims concrete.' },
      { title: 'Check relevance', text: 'Effective evidence directly connects the reason to the overall claim.' },
    ],
    samples: [
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.8E.ii', cites: [2],
          stem: 'What evidence does the author provide to refute the claim that solar panels are too expensive?',
          choices: [
            'Clean-energy rebates and federal grants can cover up to 70 percent of installation costs, allowing arrays to pay for themselves over time.',
            ['Electricity companies have agreed to provide free power to all schools.', 'Power companies do not give away electricity for free.'],
            ['Students can build solar cells by hand in science class.', 'Commercial arrays require professional industrial installation.'],
            ['Utility bills will double if solar panels are rejected.', 'The text states utility bills will decrease by 30 percent with solar.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 refutes high costs by citing federal grants and state rebates offsetting up to 70% of expenses.',
        }),
        6
      ),
      sample(
        G6_MINI_SPEECH,
        mcq({
          standard: 'rla:6.8E.ii', cites: [2],
          stem: 'Which supporting reason does the speaker present to justify saving the oak grove?',
          choices: [
            'The trees provide essential shade during hot festivals, lower urban temperatures, and preserve the town\'s historic identity.',
            ['The trees produce acorns that are sold to international lumber mills.', 'The trees are preserved for shade and history, not timber sales.'],
            ['Parking garages are structurally incapable of holding modern vehicles.', 'The objection is environmental and historic, not structural engineering.'],
            ['A major highway bypass will soon eliminate all downtown traffic.', 'No highway bypass is mentioned.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 details the environmental benefits (shade, cooling) and historic character provided by the trees.',
        }),
        6
      ),
    ],
  },

  // 6.8E.iii Intended audience
  {
    code: 'rla:6.8E.iii',
    goal: 'You will learn to identify the intended audience of an argumentative text based on its tone, content, and appeals.',
    words: [
      { term: 'audience', meaning: 'The specific group of readers or listeners a text is created to reach and influence.' },
      { term: 'call to action', meaning: 'A direct request urging the audience to take specific steps.' },
    ],
    ideas: [
      { title: 'Look at the greeting and pronouns', text: 'Words like "fellow citizens" or "students" signal who the author is addressing.' },
      { title: 'Consider what the audience can do', text: 'Does the text ask for a vote, a donation, or a change in daily habits?' },
    ],
    samples: [
      sample(
        G6_MINI_SPEECH,
        mcq({
          standard: 'rla:6.8E.iii', cites: [1, 2],
          stem: 'Who is the primary intended audience for "Save the Historic Plaza"?',
          choices: [
            'Local residents and voters in San Marcos who can attend the city council hearing',
            ['Automobile mechanics looking for new garage facilities', 'The speech opposes a garage in the park.'],
            ['Commercial real estate developers from other states', 'The speaker is rallying local community members against developer plans.'],
            ['Elementary students attending summer camp', 'The audience must be people who can influence municipal council votes.'],
          ],
          answer: 0,
          explain: 'The speaker addresses "Citizens of San Marcos" and urges them to attend Tuesday\'s municipal council hearing to vote.',
        }),
        6
      ),
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.8E.iii', cites: [1, 2],
          stem: 'Which audience would find the financial arguments in "Power from the Sun" most persuasive?',
          choices: [
            'School board trustees and district budget directors looking for long-term cost reductions',
            ['High school athletes purchasing new football uniforms', 'Budget trustees, not individual student athletes, manage facilities.'],
            ['Astronomers studying solar flares on the sun', 'The passage is about building facility power, not astrophysics.'],
            ['Tourists booking beach vacations on the Gulf Coast', 'The text discusses school district utility budgets.'],
          ],
          answer: 0,
          explain: 'School board members responsible for operating expenses would be most influenced by 30% utility savings and grant rebates.',
        }),
        6
      ),
    ],
  },

  // 6.9A Author's purpose and message
  {
    code: 'rla:6.9A',
    goal: 'You will learn to explain the author\'s purpose and determine the underlying message of a text.',
    words: [
      { term: 'author\'s purpose', meaning: 'The reason an author writes: to inform, persuade, entertain, or express feelings.' },
      { term: 'message', meaning: 'The central moral, lesson, or insight about life the author wants to communicate.' },
    ],
    ideas: [
      { title: 'Notice how the text affects you', text: 'Are you learning new facts (inform), changing your opinion (persuade), or feeling engaged in a story (entertain)?' },
      { title: 'Look at recurring points', text: 'What belief or principle does the author return to repeatedly?' },
    ],
    samples: [
      sample(
        G6_MINI_FOSSIL,
        mcq({
          standard: 'rla:6.9A', cites: [1, 2],
          stem: 'What is the author\'s main message in "Treasure in the Limestone"?',
          choices: [
            'Patience, careful observation, and persistence can uncover hidden wonders that others overlook.',
            ['Hunting for fossils is an easy way to become rich quickly.', 'The discovery is a scientific treasure, not a commercial scheme.'],
            ['Brothers and sisters should never participate in outdoor activities together.', 'The siblings share the exciting moment of discovery.'],
            ['Limestone should be removed from all Texas creek beds.', 'The story celebrates the natural geological heritage.'],
          ],
          answer: 0,
          explain: 'While Leo grew impatient, Maya\'s careful, quiet persistence led directly to the ammonite discovery.',
        }),
        6
      ),
      sample(
        G6_MINI_MONARCH,
        mcq({
          standard: 'rla:6.9A', cites: [1, 2],
          stem: 'What is the author\'s primary purpose in writing "Wings Across the Continent"?',
          choices: [
            'To inform readers about the incredible navigational abilities and migration journey of monarch butterflies',
            ['To convince tourists to purchase property in central Mexico', 'The text is scientific, not a travel advertisement.'],
            ['To warn readers that butterflies are dangerous agricultural pests', 'Monarchs are depicted as harmless pollinators.'],
            ['To describe how to catch butterflies with nylon nets', 'The article focuses on natural migration, not capturing insects.'],
          ],
          answer: 0,
          explain: 'The passage provides informative scientific facts about how tiny monarchs navigate thousands of miles across North America.',
        }),
        6
      ),
    ],
  },

  // 6.9B Text structure and author purpose
  {
    code: 'rla:6.9B',
    goal: 'You will learn how authors use specific text structures to support their purpose and communicate meaning.',
    words: [
      { term: 'text structure', meaning: 'How an author organizes information (cause/effect, problem/solution, compare/contrast, chronology).' },
    ],
    ideas: [
      { title: 'Connect structure to goal', text: 'An argumentative piece often uses problem/solution. A science article might use cause/effect.' },
      { title: 'Look at transitions', text: 'Words like "because, as a result" signal cause and effect; "first, then, finally" signal chronology.' },
    ],
    samples: [
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.9B', cites: [1, 2],
          stem: 'How does the problem-and-solution structure of paragraph 1 support the author\'s purpose?',
          choices: [
            'It establishes rising operational costs as a serious problem and presents rooftop solar as an effective solution.',
            ['It explains why coal-burning power plants were originally built in the nineteenth century.', 'Historical power plants are not mentioned.'],
            ['It describes the chemical steps of making silicon chips in sequence.', 'Technical manufacturing steps are omitted.'],
            ['It contrasts the athletic programs of public and private schools.', 'Athletics is not the topic.'],
          ],
          answer: 0,
          explain: 'Presenting high utility expenses as the problem and rooftop solar as the direct solution drives the persuasive purpose.',
        }),
        6
      ),
      sample(
        G6_MINI_TELESCOPE,
        mcq({
          standard: 'rla:6.9B', cites: [1, 2],
          stem: 'How does the cause-and-effect structure in "Eyes on the Cosmos" help explain the telescope\'s design?',
          choices: [
            'Because the telescope must observe faint heat signals, engineers had to design an immense shield to block radiation from the Sun and Earth.',
            ['Because astronauts wanted to travel to Europa, NASA built hexagonal golden mirrors.', 'The telescope is robotic and unmanned.'],
            ['Because the moon reflects no light, the telescope required rocket thrusters.', 'The moon reflects intense solar radiation that must be blocked.'],
            ['Because space is freezing, engineers installed heaters inside the optical cameras.', 'The instruments need to stay near minus 400 degrees, not be heated.'],
          ],
          answer: 0,
          explain: 'The cause (detecting faint infrared light requiring extreme cold) directly produced the effect (engineering a 5-layer tennis-court-sized sunshield).',
        }),
        6
      ),
    ],
  },

  // 6.9C Print and graphic features
  {
    code: 'rla:6.9C',
    goal: 'You will learn to analyze how authors use print features (bold text, italics, headings) and graphic features to achieve specific purposes.',
    words: [
      { term: 'print feature', meaning: 'Typography tools such as boldface, italics, bullet points, and subheadings.' },
      { term: 'graphic feature', meaning: 'Visual elements like charts, maps, photographs, and labeled cross-sections.' },
    ],
    ideas: [
      { title: 'Notice font styling', text: 'Italics can highlight titles or foreign terms; bold words emphasize vocabulary or key concepts.' },
      { title: 'Interpret visual data', text: 'Graphics summarize complex spatial relationships or numeric data that would be tedious in plain text.' },
    ],
    samples: [
      sample(
        G6_MINI_MONARCH,
        mcq({
          standard: 'rla:6.9C', cites: [1],
          stem: 'If the author included a migration map showing dotted arrows from Canada across Texas to Mexico, what purpose would it serve?',
          choices: [
            'It would help readers visualize the geographical route and immense distance traveled by migrating monarchs.',
            ['It would show the exact cost of driving a car to Mexico City.', 'The map illustrates butterfly migration, not highway tolls.'],
            ['It would identify every species of flower in North America.', 'A migration map depicts geography and pathways, not botanical drawings.'],
            ['It would prove that monarchs cannot survive outside Texas.', 'Monarchs travel across Canada, the U.S., and Mexico.'],
          ],
          answer: 0,
          explain: 'A map provides immediate visual comprehension of the two-thousand-mile route described in the text.',
        }),
        6
      ),
      sample(
        G6_MINI_TELESCOPE,
        mcq({
          standard: 'rla:6.9C', cites: [1],
          stem: 'Why did the author use the technical term "infrared" in italics in scientific articles?',
          choices: [
            'To draw reader attention to a specialized scientific concept that is critical to understanding the telescope\'s function',
            ['To indicate that the word was translated from ancient Greek poetry', 'Infrared is a modern physics term.'],
            ['To warn the reader that the sentence contains a spelling mistake', 'Italics denote emphasis and technical vocabulary, not errors.'],
            ['To suggest that infrared light is dangerous to human eyesight', 'The term describes the light spectrum observed by the mirrors.'],
          ],
          answer: 0,
          explain: 'Italicizing key technical vocabulary highlights foundational terms that explain how the observatory captures cosmic data.',
        }),
        6
      ),
    ],
  },

  // 6.9D Metaphor and personification
  {
    code: 'rla:6.9D',
    goal: 'You will learn to describe how figurative language, including metaphor and personification, achieves specific purposes in literature.',
    words: [
      { term: 'metaphor', meaning: 'A direct comparison stating one thing is another without using "like" or "as."' },
      { term: 'personification', meaning: 'Giving human traits, emotions, or actions to non-human objects or animals.' },
    ],
    ideas: [
      { title: 'Look for vivid comparisons', text: 'Metaphors create memorable pictures by equating two unexpected things (e.g., "the mind is an engine").' },
      { title: 'Identify human actions in nature', text: 'Does the wind "whisper," or does a storm cloud "frown"? That is personification bringing nature to life.' },
    ],
    samples: [
      sample(
        G6_MINI_STORM,
        mcq({
          standard: 'rla:6.9D', cites: [2],
          stem: 'Read this sentence from paragraph 2: "Outside, the turquoise sky had been swallowed by a towering wall of bruised, indigo storm clouds." What does the figurative language convey?',
          choices: [
            'It personifies the storm as a menacing, devouring force that quickly overtakes the peaceful sky.',
            ['It explains that cloud water is safe to drink.', 'The description emphasizes threat and darkness, not drinking water.'],
            ['It suggests that the storm caused physical damage to Joaquin\'s body.', 'The word bruised describes the deep purplish color of the clouds.'],
            ['It proves that the clouds were made of painted canvas.', 'The description is metaphorical, not literal canvas.'],
          ],
          answer: 0,
          explain: 'Saying the sky was "swallowed" by "bruised" clouds uses vivid personification and color imagery to convey an aggressive, threatening storm.',
        }),
        6
      ),
      sample(
        G6_MINI_FOREST,
        mcq({
          standard: 'rla:6.9D', cites: [2],
          stem: 'Read this sentence from paragraph 2: "This spongy soil absorbs heavy rainfall like a giant natural sponge..." What does this simile illustrate?',
          choices: [
            'It illustrates how effectively the forest floor retains moisture and controls runoff.',
            ['It shows that cleaning sponges are harvested from pine trees.', 'The comparison is figurative; kitchen sponges are not harvested there.'],
            ['It suggests that the soil is dry and barren of plant life.', 'A sponge holds water, showing the soil is moist and absorbent.'],
            ['It proves that rainfall never reaches the tree roots.', 'The soil absorbs the rain to nourish plant roots.'],
          ],
          answer: 0,
          explain: 'Comparing the humus layer to a giant sponge clarifies its physical function of holding moisture and preventing destructive erosion.',
        }),
        6
      ),
    ],
  },

  // 6.9E Point of view: omniscient and limited
  {
    code: 'rla:6.9E',
    goal: 'You will learn to identify literary devices, including third-person omniscient and third-person limited points of view, and explain their effects.',
    words: [
      { term: 'third-person limited', meaning: 'The narrator stands outside the story and reveals the thoughts and feelings of only one character.' },
      { term: 'third-person omniscient', meaning: 'An all-knowing narrator who can reveal the internal thoughts and feelings of multiple characters.' },
    ],
    ideas: [
      { title: 'Track inner thoughts', text: 'If you only know what the main character thinks, it is limited. If the narrator enters several minds, it is omniscient.' },
      { title: 'Notice how it creates suspense', text: 'Limited POV builds empathy and suspense because the reader only knows what the protagonist discovers.' },
    ],
    samples: [
      sample(
        G6_MINI_FOSSIL,
        mcq({
          standard: 'rla:6.9E', cites: [1, 2],
          stem: 'The story "Treasure in the Limestone" is told from the third-person limited point of view focused on Maya. How does this perspective affect the reader?',
          choices: [
            'It lets the reader share Maya\'s quiet patience, curiosity, and private delight when she uncovers the ammonite.',
            ['It reveals what the dinosaur thought when it stepped in the mud millions of years ago.', 'The narration does not enter the mind of an extinct animal.'],
            ['It provides a completely detached historical summary without any character emotion.', 'The narrator reveals Maya\'s personal feelings and actions.'],
            ['It explains why Leo decided to major in geology in college.', 'Leo\'s future is not discussed.'],
          ],
          answer: 0,
          explain: 'Focusing on Maya\'s actions and focus allows readers to experience the thrill of discovery through her eyes.',
        }),
        6
      ),
      sample(
        G6_MINI_STORM,
        mcq({
          standard: 'rla:6.9E', cites: [1, 2],
          stem: 'How does third-person limited narration enhance suspense in "Thunder over the Caprock"?',
          choices: [
            'By keeping the reader confined to Joaquin\'s startled reactions and memories as the storm approaches.',
            ['By explaining the weather forecast on three other continents simultaneously.', 'Omniscient global weather is not shown.'],
            ['By telling the reader how many raindrops will fall on the cabin roof.', 'Exact raindrop counts are impossible.'],
            ['By proving that Joaquin\'s grandfather was hiding behind the door.', 'His grandfather is remembered, not physically present.'],
          ],
          answer: 0,
          explain: 'Experiencing the sudden lightning and rising wind through Joaquin\'s senses creates immediate tension.',
        }),
        6
      ),
    ],
  },

  // 6.9F Mood and voice
  {
    code: 'rla:6.9F',
    goal: 'You will learn to analyze how an author\'s word choice and sentence rhythm contribute to mood and voice.',
    words: [
      { term: 'mood', meaning: 'The emotional atmosphere or feeling created in the reader by a piece of writing.' },
      { term: 'voice', meaning: 'The author\'s distinctive personality and style expressed through language and tone.' },
    ],
    ideas: [
      { title: 'Examine sensory adjectives', text: 'Words like "gloomy, shadowy, chill" evoke foreboding; "radiant, golden, crisp" evoke warmth.' },
      { title: 'Listen for authorial attitude', text: 'Is the speaker formal, whimsical, urgent, or reverent?' },
    ],
    samples: [
      sample(
        G6_MINI_STORM,
        mcq({
          standard: 'rla:6.9F', cites: [1, 2],
          stem: 'Which words from paragraph 2 most effectively create a foreboding and ominous mood?',
          choices: [
            '"swallowed by a towering wall of bruised, indigo storm clouds"',
            ['"sketchpad, dropping his charcoal pencil"', 'These are ordinary studio art supplies.'],
            ['"turquise sky had been"', 'Turquoise suggests sunny calm before the storm.'],
            ['"park ranger\'s cabin"', 'A cabin is a simple building setting.'],
          ],
          answer: 0,
          explain: 'Describing the sky as "swallowed" by "bruised, indigo" clouds creates a dark, threatening atmosphere.',
        }),
        6
      ),
      sample(
        G6_MINI_SPEECH,
        mcq({
          standard: 'rla:6.9F', cites: [1, 2],
          stem: 'What is the speaker\'s voice in "Save the Historic Plaza"?',
          choices: [
            'Passionate, urgent, and community-minded',
            ['Humorous, sarcastic, and unconcerned', 'The speaker is serious and impassioned, not joking.'],
            ['Cold, detached, and scientific', 'The speaker makes strong emotional appeals about city heritage.'],
            ['Shy, timid, and hesitant', 'The speaker speaks boldly and directly to city leaders.'],
          ],
          answer: 0,
          explain: 'Phrases like "living history," "green heritage," and direct questions convey an urgent, dedicated civic voice.',
        }),
        6
      ),
    ],
  },

  // 6.9G Rhetorical devices and logical fallacies
  {
    code: 'rla:6.9G',
    goal: 'You will learn to distinguish between effective rhetorical devices (such as direct address and rhetorical questions) and logical fallacies.',
    words: [
      { term: 'rhetorical device', meaning: 'A technique of using language effectively and persuasively (e.g., direct address, repetition).' },
      { term: 'logical fallacy', meaning: 'An error in reasoning that renders an argument unsound or misleading (e.g., hasty generalization, false dilemma).' },
    ],
    ideas: [
      { title: 'Spot rhetorical questions', text: 'Questions asked to make a point rather than seek an answer engage the listener\'s conscience.' },
      { title: 'Identify oversimplified thinking', text: 'Beware of black-and-white fallacies ("either we do this, or disaster strikes") that ignore realistic middle options.' },
    ],
    samples: [
      sample(
        G6_MINI_SPEECH,
        mcq({
          standard: 'rla:6.9G', cites: [1],
          stem: 'How does the speaker use a rhetorical question in paragraph 1 ("Are we truly willing to sacrifice our city\'s living history for a few dozen parking spaces?")?',
          choices: [
            'To challenge the listeners\' values and highlight the stark imbalance between ancient trees and asphalt parking',
            ['To ask the city clerk to provide a count of available parking permits', 'The speaker is making a moral argument, not asking for parking records.'],
            ['To prove that asphalt is more expensive than oak wood', 'The question compares historical value against temporary parking.'],
            ['To invite someone from the audience to take over the podium', 'Rhetorical questions are persuasive tools, not invitations to switch speakers.'],
          ],
          answer: 0,
          explain: 'The question is framed so that the only reasonable answer is "No," compelling listeners to agree that historic trees are more valuable than parking.',
        }),
        6
      ),
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.9G', cites: [2],
          stem: 'Why is the argument that "high upfront expenses make solar panels impractical" flawed in this context?',
          choices: [
            'It ignores government rebates and long-term utility savings that offset initial costs and generate net profits.',
            ['It proves that schools never have to pay for electricity.', 'Schools must pay electricity unless they generate their own.'],
            ['It assumes that solar panels stop working after three months.', 'Solar panels last for twenty years or more.'],
            ['It uses personal insults against utility company executives.', 'The objection focuses on cost, but ignores long-term payback.'],
          ],
          answer: 0,
          explain: 'Failing to consider long-term cost recovery and substantial grants is a fallacy of incomplete evidence.',
        }),
        6
      ),
    ],
  },

  // ---------- Strand 2 Writing Process Skills ----------

  // 6.10B.i Organize with purposeful structure
  {
    code: 'rla:6.10B.i',
    goal: 'You will learn to organize drafts with a purposeful structure, including an engaging introduction, logical transitions, paragraph coherence, and a conclusion.',
    words: [
      { term: 'transitions', meaning: 'Words and phrases that connect ideas smoothly between sentences and paragraphs.' },
      { term: 'coherence', meaning: 'The logical connection and smooth flow of ideas within a piece of writing.' },
    ],
    ideas: [
      { title: 'Anchor the beginning and end', text: 'Start with a hook and clear main idea; end by synthesizing what was learned without exact repetition.' },
      { title: 'Bridge your paragraphs', text: 'Use transitions like "Furthermore," "On the other hand," or "As a result" to guide the reader through your thought process.' },
    ],
    samples: [
      sample(
        G6_MINI_FOSSIL,
        mcq({
          standard: 'rla:6.10B.i', cites: [1, 2],
          stem: 'Which transition phrase at the start of paragraph 2 would most effectively show Maya\'s focused reaction to Leo\'s impatience?',
          choices: [
            'Undeterred by his complaints,',
            ['In conclusion,', 'In conclusion is used only for ending drafts, not starting paragraph 2.'],
            ['For example,', 'Maya\'s action is not an example of Leo\'s impatience.'],
            ['Similarly,', 'Maya is behaving oppositely to Leo, not similarly.'],
          ],
          answer: 0,
          explain: '"Undeterred by his complaints," highlights the contrast between Leo\'s impatience and Maya\'s steady, continued work.',
        }),
        6
      ),
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.10B.i', cites: [1, 2],
          stem: 'How does the author transition from paragraph 1 to paragraph 2 in "Power from the Sun"?',
          choices: [
            'By introducing a common objection ("Skeptics argue...") and immediately answering it with facts about grants and long-term savings.',
            ['By changing the topic from public schools to private commercial shopping malls.', 'The entire passage stays focused on school districts.'],
            ['By asking the reader to vote for new school board members.', 'No political candidacy is discussed.'],
            ['By apologizing for the technical complexity of solar cells.', 'The author writes with confidence and clarity.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 smoothly introduces and dismantles a counterargument regarding upfront costs.',
        }),
        6
      ),
    ],
  },

  // 6.10B.ii Develop ideas with facts and details
  {
    code: 'rla:6.10B.ii',
    goal: 'You will learn to develop drafts by adding specific facts, vivid details, and concrete examples that reflect depth of thought.',
    words: [
      { term: 'depth of thought', meaning: 'Showing complex understanding through specific analysis rather than surface-level generalities.' },
      { term: 'concrete details', meaning: 'Specific sensory descriptions, numbers, names, and facts.' },
    ],
    ideas: [
      { title: 'Replace vague words with specific nouns', text: 'Instead of "a bird," write "a red-tailed hawk." Instead of "stuff," write "limestone chisel and brass calipers."' },
      { title: 'Back up claims with data', text: 'Give exact percentages, dollar amounts, or historical dates to make points convincing.' },
    ],
    samples: [
      sample(
        G6_MINI_MONARCH,
        mcq({
          standard: 'rla:6.10B.ii', cites: [1],
          stem: 'Which specific fact from paragraph 1 best illustrates the astonishing physical endurance of the monarch butterfly?',
          choices: [
            'Weighing less than a paperclip, each insect can travel up to fifty miles in a single day.',
            ['Monarchs fly south in autumn.', 'This is a general statement lacking vivid specific data.'],
            ['Butterflies have orange wings.', 'Color does not demonstrate physical endurance.'],
            ['They land on trees in Mexico.', 'A general landing location does not illustrate physical effort.'],
          ],
          answer: 0,
          explain: 'Comparing its tiny weight (less than a paperclip) to its daily distance (fifty miles) creates a striking, specific contrast.',
        }),
        6
      ),
      sample(
        G6_MINI_TELESCOPE,
        mcq({
          standard: 'rla:6.10B.ii', cites: [1],
          stem: 'What concrete detail from paragraph 1 demonstrates the extreme sensitivity of the James Webb Space Telescope?',
          choices: [
            'Its optical instruments must be kept at temperatures near minus four hundred degrees Fahrenheit to detect faint infrared light.',
            ['It orbits one million miles from Earth.', 'Distance shows location, but temperature reveals instrument sensitivity.'],
            ['It uses eighteen mirrors.', 'The number of mirrors describes shape, not temperature sensitivity.'],
            ['It was launched by an international team of scientists.', 'Teamwork does not describe the physics of the camera.'],
          ],
          answer: 0,
          explain: 'The specific temperature requirement (near -400°F) explains the physical precision needed to capture ancient cosmic heat.',
        }),
        6
      ),
    ],
  },

  // 6.10C Revise for clarity and variety
  {
    code: 'rla:6.10C',
    goal: 'You will learn to revise drafts for clarity, organization, style, word choice, and sentence variety by adding, deleting, combining, and rearranging ideas.',
    words: [
      { term: 'sentence variety', meaning: 'Using a mix of short, medium, and complex sentences to keep writing engaging and rhythmic.' },
      { term: 'conciseness', meaning: 'Expressing ideas clearly and completely without unnecessary or repetitive words.' },
    ],
    ideas: [
      { title: 'Combine choppy sentences', text: 'Use subordinating conjunctions or participial phrases to join short, disconnected sentences.' },
      { title: 'Cut redundant phrasing', text: 'Eliminate phrases like "in my personal opinion" or "the reason why is because."' },
    ],
    samples: [
      sample(
        G6_MINI_FOSSIL,
        mcq({
          standard: 'rla:6.10C', cites: [1],
          stem: 'Consider these short sentences: "Maya knelt by the creek bed. She brushed loose gravel away. The slab was limestone." What is the most effective way to combine them?',
          choices: [
            'Kneeling beside the creek bed, Maya brushed loose gravel away from a flat limestone slab.',
            ['Maya knelt by the creek bed, and she brushed gravel, and the slab was limestone.', 'Stringing clauses together with and creates a repetitive run-on style.'],
            ['Because the slab was limestone, Maya knelt by the creek bed and brushed gravel.', 'The rock type did not cause her to kneel.'],
            ['Brushing loose gravel away, the creek bed was knelt beside by Maya on limestone.', 'This contains an awkward dangling modifier.'],
          ],
          answer: 0,
          explain: 'Starting with a participial phrase ("Kneeling beside...") creates a graceful, varied sentence combining all three details without fluff.',
        }),
        6
      ),
      sample(
        G6_MINI_SOLAR,
        mcq({
          standard: 'rla:6.10C', cites: [1],
          stem: 'A student drafts: "Solar arrays cut costs. Solar arrays save money. They help budgets." What revision best eliminates wordy repetition?',
          choices: [
            'Rooftop solar arrays significantly lower electricity expenses, freeing funds for educational programs.',
            ['Solar arrays cut costs and save money because they help the budget with money.', 'This repeats the exact same economic idea three times.'],
            ['Cutting costs is what solar arrays do to help budgets save money.', 'This remains circular and awkward.'],
            ['Budgets are helped by solar arrays when costs are cut and money is saved.', 'Passive voice and repetitive phrasing weaken the sentence.'],
          ],
          answer: 0,
          explain: 'Combining the ideas into a single clear sentence with precise vocabulary ("lower electricity expenses, freeing funds") removes clutter.',
        }),
        6
      ),
    ],
  },
];
