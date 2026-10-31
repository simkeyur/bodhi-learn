// Grade 8 reading walkthroughs (part 2): genres, author's craft, and writing process.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  G8_MINI_FOSSIL,
  G8_MINI_MONARCH,
  G8_MINI_SOLAR,
  G8_MINI_STORM,
  G8_MINI_DRAMA,
  G8_MINI_FOREST,
  G8_MINI_SPEECH,
  G8_MINI_TELESCOPE,
} from './g8-rla-passages.ts';

export const G8_RLA_LESSONS_MORE: Lesson[] = [
  // 8.8A Literary genres
  {
    code: 'rla:8.8A',
    goal: 'You will learn to identify characteristics of literary genres such as realistic fiction, adventure stories, historical fiction, mysteries, humor, fantasy, and science fiction.',
    words: [
      { term: 'genre', meaning: 'A category or type of literature with specific styles, structures, and subject matter.' },
    ],
    ideas: [
      { title: 'Look for genre markers', text: 'Realistic fiction features plausible characters and real-world settings. Science fiction incorporates futuristic technology. Historical fiction blends authentic historical settings with fictional characters.' },
      { title: 'Notice author purpose', text: 'Different genres serve different purposes: mysteries challenge readers to deduce clues, while adventure stories highlight external survival against physical elements.' },
    ],
    samples: [
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.8A', cites: [1, 2],
          stem: 'Which genre best describes "Treasure in the Limestone"?',
          choices: [
            'Realistic fiction about two siblings on an authentic fossil hunt in Texas',
            ['An ancient Greek myth about mythological gods on Mount Olympus', 'The passage is modern and grounded in real paleontology.'],
            ['A science fiction fantasy about interstellar space travel', 'No futuristic technology or space travel occurs.'],
            ['A formal political speech to a city council', 'This is a narrative story with characters and dialogue.'],
          ],
          answer: 0,
          explain: 'The story depicts realistic contemporary characters encountering an authentic natural discovery in a real Texas location.',
        }), 8),
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.8A', cites: [1, 2],
          stem: 'What genre characteristic is highlighted in "Thunder over the Caprock"?',
          choices: [
            'Suspenseful adventure fiction driven by natural environmental danger',
            ['A humorous tall tale using extreme comic exaggeration', 'The tone is realistic, serious, and cautious, not comic.'],
            ['A traditional fable ending in an explicit moral proverb', 'There are no talking animals or stated moral proverbs.'],
            ['A comprehensive biography detailing a person\'s full lifespan', 'The scene depicts a single dramatic afternoon on a canyon rim.'],
          ],
          answer: 0,
          explain: 'The sudden arrival of a dangerous flash-flood storm creates an authentic survival conflict typical of adventure fiction.',
        }), 8),
    ],
  },

  // 8.8B Poetic forms and graphical elements
  {
    code: 'rla:8.8B',
    goal: 'You will learn to analyze the effect of graphical elements such as punctuation and line length in poems across a variety of poetic forms.',
    words: [
      { term: 'graphical elements', meaning: 'Visual features in poetry such as line length, capitalization, indentation, and punctuation that shape rhythm and meaning.' },
    ],
    ideas: [
      { title: 'Examine line breaks and stanzas', text: 'Short lines and abrupt breaks create urgency or grief. Longer lines often evoke flowing, contemplative moods.' },
      { title: 'Pay attention to punctuation', text: 'Dashes and exclamation points indicate emotional disruption; colons or semicolons signal logical connections.' },
    ],
    samples: [
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.8B', cites: [1, 2],
          stem: 'If "Thunder over the Caprock" were arranged as a poem, how would short, indented lines describing the lightning strike affect the reader?',
          choices: [
            'They would create an abrupt, jarring rhythm that mimics the sudden, concussive violence of lightning.',
            ['They would make the scene feel like a gentle, humorous nursery rhyme.', 'Thunder and flash floods are intense and serious.'],
            ['They would indicate that the characters are singing a choral hymn.', 'Punctuation and short lines reflect atmospheric tension.'],
            ['They would show that the storm has completely dissipated.', 'Short, abrupt lines heighten tension, not resolution.'],
          ],
          answer: 0,
          explain: 'Abrupt line lengths and visual breaks in poetry create sudden pauses that mirror the jarring impact of sudden lightning.',
        }), 8),
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.8B', cites: [2],
          stem: 'If arranged as free verse, why might a poet isolate the phrase "Look at this perfect ammonite" on its own single line?',
          choices: [
            'To create a dramatic visual pause that emphasizes the wonder and significance of the discovery.',
            ['To show that Maya ran out of ink while writing.', 'Poets intentionally place single lines for emphasis, not ink shortages.'],
            ['To prove that ammonites are extinct species of dinosaurs.', 'Ammonites were marine mollusks, not dinosaurs.'],
            ['To indicate that Leo has walked away into the forest.', 'The phrase highlights Maya\'s joyful discovery.'],
          ],
          answer: 0,
          explain: 'Isolating a line creates visual white space and forces the reader to slow down, amplifying the emotional impact of the discovery.',
        }), 8),
    ],
  },

  // 8.8C Dramatic action and staging
  {
    code: 'rla:8.8C',
    goal: 'You will learn to analyze how playwrights develop dramatic action through the use of dialogue, acts, scenes, and stage directions.',
    words: [
      { term: 'stage directions', meaning: 'Instructions in the script of a play indicating movements, tone of voice, or lighting.' },
      { term: 'dramatic action', meaning: 'The movement of the play\'s plot propelled by character dialogue and physical conflict.' },
    ],
    ideas: [
      { title: 'Read stage directions carefully', text: 'Stage directions reveal characters\' inner emotions and unspoken attitudes that dialogue alone does not convey.' },
      { title: 'Analyze physical blocking', text: 'Where characters stand and whom they face (e.g., turning from the judge to address the jury) reflects power dynamics.' },
    ],
    samples: [
      sample(
        G8_MINI_DRAMA,
        mcq({
          standard: 'rla:8.8C', cites: [1, 2, 3],
          stem: 'How does the playwright use stage directions in "The Right to Publish" to heighten dramatic tension?',
          choices: [
            'By detailing physical gestures—the prosecutor slamming his fist and Hamilton making direct eye contact with the jury—to show the clash between authoritarian power and moral courage.',
            ['By instructing the actors to exit the stage and eat lunch.', 'Stage directions focus on the intense courtroom confrontation.'],
            ['By indicating that soft violin music plays throughout the trial.', 'No violin music is indicated in the script.'],
            ['By showing that the jury is asleep in the jury box.', 'The jury is listening intently to the constitutional argument.'],
          ],
          answer: 0,
          explain: 'Physical stage directions like slamming a fist and making direct eye contact emphasize the high-stakes confrontation between tyranny and freedom.',
        }), 8),
      sample(
        G8_MINI_DRAMA,
        mcq({
          standard: 'rla:8.8C', cites: [1, 3],
          stem: 'What is the dramatic effect of Hamilton facing the jury box directly rather than addressing the judge?',
          choices: [
            'It physically demonstrates his appeal to the community\'s sense of justice rather than to the corrupt royal bench.',
            ['It shows that he forgot where the judge was sitting in the courtroom.', 'Hamilton is a masterful, deliberate attorney.'],
            ['It indicates that he wants to ask the jury for a glass of water.', 'His purpose is to defend the cause of liberty.'],
            ['It signals that the trial has been cancelled by the governor.', 'The trial is actively underway.'],
          ],
          answer: 0,
          explain: 'Bypassing the hostile bench to address the jury directly is a powerful dramatic action showing that ultimate authority rests with the people.',
        }), 8),
    ],
  },

  // 8.8D.i Thesis and supporting evidence
  {
    code: 'rla:8.8D.i',
    goal: 'You will learn to analyze characteristics of informational text, including the controlling idea or thesis with supporting evidence.',
    words: [
      { term: 'thesis', meaning: 'The central argument or controlling statement that an informational text aims to explain or prove.' },
    ],
    ideas: [
      { title: 'Locate the controlling idea', text: 'The thesis usually appears in the introductory paragraph and is reinforced throughout the text.' },
      { title: 'Evaluate supporting evidence', text: 'Check whether the author provides scientific data, expert testimony, or factual examples to substantiate the thesis.' },
    ],
    samples: [
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.8D.i', cites: [1, 2],
          stem: 'What is the thesis of "Wings Across the Continent"?',
          choices: [
            'Monarch butterflies accomplish an incredible multi-thousand-mile migration guided by an intricate biological navigation system.',
            ['Monarch butterflies cannot survive without human greenhouse heating in winter.', 'Monarchs survive in natural Mexican fir forests.'],
            ['Texas is the only state in America where monarch butterflies are found.', 'Monarchs travel from Canada across many states.'],
            ['Butterflies have larger brains than most migratory birds.', 'No comparison to bird brain size is made.'],
          ],
          answer: 0,
          explain: 'The text explains both the incredible scope of monarch migration and the biological mechanisms (sun compass and antennae clocks) that guide it.',
        }), 8),
      sample(
        G8_MINI_TELESCOPE,
        mcq({
          standard: 'rla:8.8D.i', cites: [1, 2],
          stem: 'What is the controlling idea of "Scanning Distant Atmospheres"?',
          choices: [
            'The James Webb Space Telescope uses transmission spectroscopy to identify chemical gases in exoplanet atmospheres, advancing the search for extraterrestrial life.',
            ['Astronomers have concluded that Earth is the only planet in the universe with water.', 'The passage notes water vapor was found on distant exoplanets.'],
            ['Telescopes can only observe planets that orbit within our own solar system.', 'JWST analyzes exoplanets dozens of light-years away.'],
            ['Gold-coated mirrors are too fragile to survive in the cold vacuum of space.', 'The mirrors work successfully at the L2 Lagrange point.'],
          ],
          answer: 0,
          explain: 'The controlling idea explains how JWST analyzes exoplanet skies using spectroscopy to detect atmospheric chemicals and biosignatures.',
        }), 8),
    ],
  },

  // 8.8D.ii Footnotes, endnotes, citations
  {
    code: 'rla:8.8D.ii',
    goal: 'You will learn to analyze informational text features such as footnotes, endnotes, and citations to assess credibility.',
    words: [
      { term: 'citation', meaning: 'A reference to a published source providing author, title, and publication details to verify factual claims.' },
      { term: 'footnote', meaning: 'An explanatory note or citation placed at the bottom of a page.' },
    ],
    ideas: [
      { title: 'Check source authority', text: 'Citations to peer-reviewed scientific journals, government archives, or university presses establish credibility.' },
      { title: 'Use notes for supplementary context', text: 'Footnotes often clarify technical terminology or direct readers to deeper archival documentation.' },
    ],
    samples: [
      sample(
        G8_MINI_TELESCOPE,
        mcq({
          standard: 'rla:8.8D.ii', cites: [1, 2],
          stem: 'If the author included a footnote citing "Nature Astronomy (2023): Atmospheric Transmission of WASP-39b," what would be its primary purpose?',
          choices: [
            'To document the peer-reviewed scientific research corroborating the detection of exoplanetary atmospheric gases.',
            ['To give directions to the nearest commercial science museum.', 'Citations verify research data, not museum driving routes.'],
            ['To prove that the author invented the James Webb Space Telescope.', 'The citation attributes discovery to the research team in Nature.'],
            ['To entertain readers with a fictional story about astronauts.', 'Nature Astronomy publishes peer-reviewed research papers.'],
          ],
          answer: 0,
          explain: 'Citing a premier academic journal validates the article\'s empirical claims about exoplanet atmospheric spectra.',
        }), 8),
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.8D.ii', cites: [2],
          stem: 'Why would an author include an endnote citing research by neurobiologists at the University of Massachusetts Medical School?',
          choices: [
            'To verify the scientific validity of the claim regarding the sun compass and antennal clocks with academic research.',
            ['To advertise medical school enrollment to high school graduates.', 'Academic citations substantiate factual evidence, not recruitment.'],
            ['To suggest that butterflies should be prescribed as medicine.', 'The research studies navigation genetics, not medicine.'],
            ['To demonstrate that butterflies cannot fly without computer assistance.', 'Butterflies navigate using their own biological systems.'],
          ],
          answer: 0,
          explain: 'Citing university neurobiology studies provides authoritative evidence for the claims about butterfly navigational physiology.',
        }), 8),
    ],
  },

  // 8.8D.iii Multiple organizational patterns
  {
    code: 'rla:8.8D.iii',
    goal: 'You will learn to analyze multiple organizational patterns within an informational text used to develop the thesis.',
    words: [
      { term: 'organizational pattern', meaning: 'The structural framework an author uses to organize ideas, such as cause-and-effect, classification, or problem-and-solution.' },
    ],
    ideas: [
      { title: 'Identify combined structures', text: 'Informational texts often combine structures: e.g., describing a problem, classifying causes, and presenting solutions.' },
      { title: 'Notice signal transitions', text: 'Words like "consequently" signal cause-and-effect; "categories" signal classification; "in response" signals problem-and-solution.' },
    ],
    samples: [
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.8D.iii', cites: [1, 2],
          stem: 'Which organizational patterns are combined in "Architecture of the Piney Woods"?',
          choices: [
            'Spatial classification to describe the forest layers from top to bottom, paired with cause-and-effect to explain soil erosion prevention.',
            ['Chronological narrative followed by an argumentative persuasive debate.', 'The text is purely descriptive and informational.'],
            ['Problem-and-solution followed by a humorous personal anecdote.', 'No personal anecdotes or jokes appear.'],
            ['Compare-and-contrast between desert cacti and Arctic tundra.', 'The text focuses strictly on the East Texas Piney Woods.'],
          ],
          answer: 0,
          explain: 'Paragraph 1 uses spatial ordering (top canopy to floor), while paragraph 2 details cause-and-effect (spongy humus absorbing rain to stop erosion).',
        }), 8),
      sample(
        G8_MINI_TELESCOPE,
        mcq({
          standard: 'rla:8.8D.iii', cites: [1, 2],
          stem: 'How does the author organize the scientific explanation in "Scanning Distant Atmospheres"?',
          choices: [
            'By explaining a scientific process (light filtering during transits) followed by cause-and-effect (chemical absorption producing spectral fingerprints).',
            ['By listing events in reverse chronological order from 3000 BC to today.', 'The text discusses modern space science.'],
            ['By contrasting rocket fuel types used during space shuttle launches.', 'Rocket fuel is not discussed.'],
            ['By debating whether astronomy should be removed from public school curricula.', 'The text is an objective informational article.'],
          ],
          answer: 0,
          explain: 'The passage explains the physical transit process and follows with the cause-and-effect absorption of infrared light by atmospheric molecules.',
        }), 8),
    ],
  },

  // 8.8E.i Claim and argument analysis
  {
    code: 'rla:8.8E.i',
    goal: 'You will learn to analyze argumentative text by identifying the claim and evaluating the logical soundness of the argument.',
    words: [
      { term: 'claim', meaning: 'The author\'s primary stance or debatable assertion on a controversial issue.' },
    ],
    ideas: [
      { title: 'Differentiate facts from claims', text: 'A claim is an arguable position supported by reasons, while facts are verifiable objective truths.' },
      { title: 'Evaluate logical connections', text: 'Examine whether the reasons directly support the claim with credible evidence.' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.8E.i', cites: [1],
          stem: 'What is the primary claim made in "Power from the Sun"?',
          choices: [
            'Installing rooftop solar arrays on public schools provides an immediate, fiscally sound solution to reduce operational expenses.',
            ['Schools should eliminate physical science textbooks to save money.', 'The author wants savings to buy MORE textbooks.'],
            ['Public schools should be permanently closed during sunny summer months.', 'The proposal focuses on renewable power generation.'],
            ['Solar energy is too dangerous for commercial rooftops.', 'The author argues solar energy is safe, sensible, and economical.'],
          ],
          answer: 0,
          explain: 'The opening paragraph clearly establishes the claim: rooftop solar arrays cut school utility costs and free money for academic needs.',
        }), 8),
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.8E.i', cites: [1, 2],
          stem: 'What primary claim does the speaker present in "Preserve Our Dark Skies"?',
          choices: [
            'West Texas communities should implement shielded outdoor lighting standards to protect wildlife, preserve cultural heritage, and reduce electric costs.',
            ['All municipal streetlights in Texas should be turned off permanently at sunset.', 'The author advocates for shielded light directed downward, not total blackout.'],
            ['The Milky Way is moving away from planet Earth.', 'Urban light pollution obscures the Milky Way; the galaxy is not moving away.'],
            ['Astronomers should relocate all optical telescopes to submarine underwater stations.', 'Telescopes require clear mountain night skies.'],
          ],
          answer: 0,
          explain: 'The speaker argues for shielded lighting standards that protect night skies while maintaining pedestrian safety and lowering costs.',
        }), 8),
    ],
  },

  // 8.8E.ii Counterarguments and rebuttals
  {
    code: 'rla:8.8E.ii',
    goal: 'You will learn to identify and explain counterarguments and evaluate how authors refute opposing viewpoints.',
    words: [
      { term: 'counterargument', meaning: 'An opposing viewpoint or objection raised against the author\'s primary claim.' },
      { term: 'rebuttal', meaning: 'Evidence and reasoning presented to disprove or weaken a counterargument.' },
    ],
    ideas: [
      { title: 'Look for counterargument transition words', text: 'Phrases like "Skeptics argue," "Critics contend," or "Opponents claim" signal an opposing viewpoint.' },
      { title: 'Analyze the rebuttal evidence', text: 'Examine how the author answers the objection: does the rebuttal provide data, alternative interpretations, or practical compromises?' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.8E.ii', cites: [2],
          stem: 'What counterargument does the author address in paragraph 2?',
          choices: [
            'Critics argue that high initial installation costs make solar equipment impractical for public school budgets.',
            ['Skeptics claim that solar panels will block clouds and stop natural rain from falling.', 'This is scientifically absurd and not in the text.'],
            ['Opponents argue that teachers prefer working in totally dark classrooms.', 'Lighting preferences of teachers are not discussed.'],
            ['Advocates claim that solar panels produce toxic radiation that harms grass.', 'No radiation claim is mentioned in the passage.'],
          ],
          answer: 0,
          explain: 'Paragraph 2 introduces the counterargument that upfront installation costs make solar arrays impractical for schools.',
        }), 8),
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.8E.ii', cites: [2],
          stem: 'How does the speaker refute the counterargument that dark-sky ordinances compromise nighttime safety?',
          choices: [
            'By explaining that shielded fixtures actually improve visibility by directing light downward onto walkways while eliminating blinding glare.',
            ['By claiming that criminals are afraid of the dark and will stay home.', 'This is naive and unsupported by text evidence.'],
            ['By suggesting that all citizens should carry flashlights at all times.', 'The text proposes municipal shielded LED fixtures.'],
            ['By arguing that nocturnal traffic accidents are impossible on rural highways.', 'The text does not claim accidents are impossible.'],
          ],
          answer: 0,
          explain: 'The speaker explains that downward-directed shielded lighting enhances visibility on sidewalks and eliminates blinding glare.',
        }), 8),
    ],
  },

  // 8.8E.iii Intended audience
  {
    code: 'rla:8.8E.iii',
    goal: 'You will learn to analyze argumentative text by identifying the intended audience and evaluating how the author tailors appeals to them.',
    words: [
      { term: 'intended audience', meaning: 'The specific group of readers or listeners whom the author aims to persuade or inform.' },
    ],
    ideas: [
      { title: 'Analyze tone and diction', text: 'Formal civic language suggests municipal policymakers, while accessible enthusiastic language targets students or general citizens.' },
      { title: 'Identify stakeholder values', text: 'Look at what values the author appeals to: financial savings appeal to taxpayers, while safety appeals to parents and civic leaders.' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.8E.iii', cites: [1, 2],
          stem: 'Who is the primary intended audience for "Power from the Sun"?',
          choices: [
            'School board trustees, district superintendents, and community taxpayers who vote on school facility budgets.',
            ['Automobile mechanics servicing diesel school buses.', 'The text focuses on facility solar panels, not bus mechanics.'],
            ['Elementary students attending kindergarten orientation.', 'The text deals with capital financing, operational budgets, and state grants.'],
            ['Software engineers designing video game console graphics.', 'Video games are unrelated to rooftop school solar arrays.'],
          ],
          answer: 0,
          explain: 'The text appeals directly to school financial decision-makers by highlighting utility savings, grants, and academic funding.',
        }), 8),
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.8E.iii', cites: [1, 2],
          stem: 'Who is the intended audience for "Preserve Our Dark Skies"?',
          choices: [
            'West Texas citizens, local business owners, and county commissioners considering outdoor lighting ordinances.',
            ['Commercial airline pilots flying international transatlantic routes.', 'The speech addresses West Texas municipal lighting.'],
            ['Marine oceanographers researching abyssal deep-sea trenches.', 'The setting is the Davis Mountains of West Texas.'],
            ['Elementary students learning how to fold paper airplanes.', 'The speech addresses civic ordinances and electricity expenditures.'],
          ],
          answer: 0,
          explain: 'The speaker opens with "Citizens of West Texas" and discusses municipal lighting policies and local heritage.',
        }), 8),
    ],
  },

  // 8.9A Author's purpose and message
  {
    code: 'rla:8.9A',
    goal: 'You will learn to explain the author\'s purpose and message within a text.',
    words: [
      { term: 'author\'s purpose', meaning: 'The main reason an author writes: to inform, persuade, entertain, or express feelings.' },
    ],
    ideas: [
      { title: 'Identify the driving intent', text: 'Does the author want the reader to understand a scientific marvel, vote for a policy, or reflect on a moral truth?' },
      { title: 'Distill the overarching message', text: 'What core lesson or perspective does the author want the reader to remember long after finishing the text?' },
    ],
    samples: [
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.9A', cites: [1, 2],
          stem: 'What is the author\'s primary purpose in "Wings Across the Continent"?',
          choices: [
            'To inform readers about the awe-inspiring migratory journey of monarchs and explain the biological marvel of their navigation system.',
            ['To persuade readers to capture butterflies and keep them in glass jars.', 'The text promotes admiration and scientific understanding.'],
            ['To warn tourists that butterflies will damage commercial fruit orchards.', 'Monarchs are not agricultural pests.'],
            ['To entertain readers with a humorous fairy tale about insect royalty.', 'The text is a factual, scientific informational article.'],
          ],
          answer: 0,
          explain: 'The author aims to inform readers about the remarkable navigational biology that enables monarch migration.',
        }), 8),
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.9A', cites: [1, 2],
          stem: 'What core message does the speaker convey in "Preserve Our Dark Skies"?',
          choices: [
            'Preserving pristine night skies through shielded lighting is a shared civic duty that protects ecosystems, saves money, and safeguards cosmic heritage.',
            ['Cities should eliminate all electric lighting to return to ancient nineteenth-century living.', 'The speaker advocates for shielded, efficient lighting, not elimination.'],
            ['Astronomy is an outdated hobby that should be replaced with computer gaming.', 'The speaker passionately defends access to the stars.'],
            ['Texas should sell its state parks to commercial real estate developers.', 'The speech champions conservation of Texas natural heritage.'],
          ],
          answer: 0,
          explain: 'The speaker delivers an inspiring persuasive message urging responsible stewardship of night skies for ecological and civic benefit.',
        }), 8),
    ],
  },

  // 8.9B Text structure and author's purpose
  {
    code: 'rla:8.9B',
    goal: 'You will learn to analyze how the use of text structure contributes to the author\'s purpose.',
    words: [
      { term: 'text structure', meaning: 'How information within a text is organized (chronological, problem-solution, cause-effect, description).' },
    ],
    ideas: [
      { title: 'Match structure to purpose', text: 'An author who wants to persuade often uses problem-and-solution. An author explaining physical marvels uses spatial or descriptive structures.' },
      { title: 'Look at structural transitions', text: 'Notice how each paragraph builds upon the previous one to advance the author\'s argument or explanation.' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.9B', cites: [1, 2],
          stem: 'How does the problem-and-solution structure in "Power from the Sun" advance the author\'s purpose?',
          choices: [
            'It establishes the challenge of mounting school utility costs in paragraph 1 and presents rooftop solar with grant offsets as the practical solution in paragraph 2.',
            ['It describes the history of coal mining in Pennsylvania from 1800 to 1950.', 'Coal mining is not the subject of the text.'],
            ['It lists characters alphabetically to show that everyone agreed on solar power.', 'There are no characters listed alphabetically.'],
            ['It explains why school roofs should be built without insulation.', 'The text focuses on generating clean energy, not removing insulation.'],
          ],
          answer: 0,
          explain: 'Presenting the problem of utility costs and offering the solution of solar arrays effectively persuades decision-makers.',
        }), 8),
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.9B', cites: [1, 2],
          stem: 'How does the vertical top-to-bottom descriptive structure contribute to the author\'s purpose?',
          choices: [
            'It systematically guides the reader through the forest\'s architectural canopy down to the rich soil floor, emphasizing how each layer performs an essential ecological role.',
            ['It proves that the lower plants should be cleared with bulldozers.', 'The text celebrates the ecological value of all layers.'],
            ['It confuses the reader by describing the soil before discussing the trees.', 'The passage moves logically from canopy to understory to floor.'],
            ['It argues that East Texas has fewer trees than the Sahara Desert.', 'The Piney Woods are a dense forest ecosystem.'],
          ],
          answer: 0,
          explain: 'Moving vertically from canopy to floor systematically illustrates how the forest layers interact as a unified ecosystem.',
        }), 8),
    ],
  },

  // 8.9C Print and graphic features
  {
    code: 'rla:8.9C',
    goal: 'You will learn to analyze the author\'s use of print and graphic features to achieve specific purposes.',
    words: [
      { term: 'graphic feature', meaning: 'Visual aids such as diagrams, maps, charts, timelines, or callout boxes that clarify text concepts.' },
    ],
    ideas: [
      { title: 'Interpret visual data', text: 'Ask how a diagram or chart adds clarity to complex technical descriptions in the prose.' },
      { title: 'Connect graphics to text claims', text: 'Verify how callout boxes or sidebars reinforce the central thesis.' },
    ],
    samples: [
      sample(
        G8_MINI_TELESCOPE,
        mcq({
          standard: 'rla:8.9C', cites: [1, 2],
          stem: 'If an author included a diagram of a planetary transit alongside an absorption spectrum, what would be its primary purpose?',
          choices: [
            'To visually demonstrate how starlight filtering through an exoplanet\'s atmosphere produces distinctive absorption dips corresponding to specific gases.',
            ['To show what astronauts wear during spacewalks outside the international space station.', 'JWST is an uncrewed robotic observatory.'],
            ['To advertise the price of home optical binoculars.', 'The graphic depicts advanced astrophysical spectroscopy.'],
            ['To prove that stars produce no infrared light.', 'Stars emit broad spectra of light including infrared.'],
          ],
          answer: 0,
          explain: 'A transit diagram with absorption dips visually clarifies the scientific mechanism of transmission spectroscopy.',
        }), 8),
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.9C', cites: [1],
          stem: 'What would be the most effective graphic feature to add to "Wings Across the Continent"?',
          choices: [
            'A continental map of North America featuring arrows illustrating the autumn migration flyways from Canada through Texas to central Mexico.',
            ['A bar graph showing the prices of cardboard paperclips in office supply stores.', 'Paperclips are only a weight metaphor.'],
            ['A photograph of a steam engine locomotive built in 1890.', 'Trains are unrelated to butterfly migration.'],
            ['A recipe for baking chocolate chip cookies.', 'A recipe has no connection to monarch biology.'],
          ],
          answer: 0,
          explain: 'A continental flyway map visually reinforces the text\'s description of the 2,000-mile journey from Canada through Texas to Mexico.',
        }), 8),
    ],
  },

  // 8.9D Extended metaphor and figurative language
  {
    code: 'rla:8.9D',
    goal: 'You will learn to analyze how the author\'s use of figurative language such as extended metaphor achieves specific purposes.',
    words: [
      { term: 'extended metaphor', meaning: 'A metaphor that unfolds across multiple lines, paragraphs, or an entire text, drawing detailed comparisons.' },
    ],
    ideas: [
      { title: 'Track the central comparison', text: 'Identify the two unlike things being compared and examine how various sub-details extend the comparison.' },
      { title: 'Analyze emotional and thematic depth', text: 'Extended metaphors allow authors to convey complex abstract truths (like life\'s fragility) through concrete imagery.' },
    ],
    samples: [
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.9D', cites: [1, 2],
          stem: 'How does the author use the metaphor of "architecture" to describe the Piney Woods?',
          choices: [
            'By comparing the biological layers of the forest to a multi-story building where each level has a deliberate structural purpose and residents.',
            ['By claiming that human construction workers built the pine trees out of steel girders.', 'The forest is natural and biological.'],
            ['By arguing that East Texas forests should be cut down to build shopping malls.', 'The author admires the natural forest ecology.'],
            ['By suggesting that trees only grow inside urban office buildings.', 'The metaphor describes the wild forest as an architectural marvel.'],
          ],
          answer: 0,
          explain: 'The architecture metaphor compares the canopy, understory, and floor to stories of a building, highlighting structural harmony.',
        }), 8),
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.9D', cites: [1],
          stem: 'Why does the author compare the weight of a monarch butterfly to a paperclip in paragraph 1?',
          choices: [
            'To emphasize the staggering physical fragility and lightness of an insect capable of completing an epic two-thousand-mile continental flight.',
            ['To suggest that office workers should use dead butterflies to hold documents together.', 'This is morbid and contradicts the reverent tone.'],
            ['To show that butterflies are manufactured in metal factories.', 'Butterflies are living organisms.'],
            ['To prove that paperclips can fly when dropped from tall buildings.', 'Paperclips cannot fly.'],
          ],
          answer: 0,
          explain: 'Comparing its weight to a paperclip highlights the astonishing contrast between the butterfly\'s tiny mass and its monumental 2,000-mile endurance.',
        }), 8),
    ],
  },

  // 8.9E Literary devices, point of view, irony
  {
    code: 'rla:8.9E',
    goal: 'You will learn to identify and analyze the use of literary devices, including multiple points of view and irony.',
    words: [
      { term: 'irony', meaning: 'A contrast between expectation and reality, often creating humor, pathos, or dramatic tension.' },
      { term: 'point of view', meaning: 'The perspective from which a story or argument is communicated (first person, third-person limited, third-person omniscient).' },
    ],
    ideas: [
      { title: 'Notice situational irony', text: 'Situational irony occurs when the outcome of an event is the opposite of what was logically expected.' },
      { title: 'Examine multiple perspectives', text: 'Analyze how presenting differing viewpoints creates dramatic tension or provides a more comprehensive view of truth.' },
    ],
    samples: [
      sample(
        G8_MINI_DRAMA,
        mcq({
          standard: 'rla:8.9E', cites: [1, 2, 3],
          stem: 'How does the clash between the prosecutor and Hamilton illustrate multiple points of view regarding the law?',
          choices: [
            'The prosecutor views the law as a rigid tool to punish any criticism of the Crown, while Hamilton views the law as a living instrument of justice to defend truth.',
            ['Both attorneys agree that John Peter Zenger should be executed without trial.', 'Hamilton vigorously defends Zenger\'s innocence.'],
            ['The prosecutor wants to free Zenger, but Hamilton demands a harsh prison sentence.', 'The roles are the reverse; Hamilton is defense counsel.'],
            ['Both men believe that the printing press should be banned in colonial America.', 'Hamilton champions freedom of the printing press.'],
          ],
          answer: 0,
          explain: 'The courtroom dialogue contrasts the authoritarian perspective (truth is no defense against authority) with the democratic perspective (truth protects liberty).',
        }), 8),
      sample(
        G8_MINI_FOSSIL,
        mcq({
          standard: 'rla:8.9E', cites: [1, 2],
          stem: 'What situational irony occurs in "Treasure in the Limestone"?',
          choices: [
            'Leo complains that the rock is completely ordinary and devoid of fossils just moments before Maya uncovers a magnificent prehistoric ammonite.',
            ['Maya gives up searching and buys a plastic dinosaur at a gift shop.', 'Maya uncovers an authentic prehistoric fossil.'],
            ['The limestone creek bed turns out to be made of chocolate.', 'This is absurd fantasy.'],
            ['Leo discovers that his wristwatch was carved out of dinosaur bone.', 'The watch is an ordinary modern accessory.'],
          ],
          answer: 0,
          explain: 'The irony lies in the immediate contradiction between Leo\'s dismissive declaration that it is "just ordinary rock" and Maya\'s uncovering of the fossil.',
        }), 8),
    ],
  },

  // 8.9F Mood, voice, and tone
  {
    code: 'rla:8.9F',
    goal: 'You will learn to analyze how the author\'s use of language contributes to mood, voice, and tone.',
    words: [
      { term: 'tone', meaning: 'The author\'s attitude toward the subject matter or audience (e.g., solemn, critical, enthusiastic, reverent).' },
      { term: 'mood', meaning: 'The emotional atmosphere or feeling evoked in the reader by a text\'s sensory details and language.' },
    ],
    ideas: [
      { title: 'Analyze word choice (diction)', text: 'Words like "jagged spear," "concussive boom," and "bruised indigo" evoke a tense, menacing mood.' },
      { title: 'Examine sentence cadence', text: 'Short, rapid sentences build anxiety and pace; longer, rhythmic sentences create dignity and contemplation.' },
    ],
    samples: [
      sample(
        G8_MINI_STORM,
        mcq({
          standard: 'rla:8.9F', cites: [1, 2],
          stem: 'How does the author\'s diction in "Thunder over the Caprock" create an ominous, suspenseful mood?',
          choices: [
            'Words like "jagged spear," "concussive boom," "bruised indigo," and "pungent scent of ozone" create an atmosphere of impending natural danger.',
            ['Phrases like "fluffy white clouds" and "singing bluebirds" create a cheerful mood.', 'The description depicts dark violent storm clouds, not bluebirds.'],
            ['Technical legal jargon creates a formal, bureaucratic mood.', 'The language is sensory and descriptive of wilderness weather.'],
            ['Comedic slang creates a lighthearted, playful mood.', 'The tone is serious and foreboding.'],
          ],
          answer: 0,
          explain: 'Vivid sensory words evoking electrical charge, concussion, and dark colors establish a suspenseful, threatening mood.',
        }), 8),
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.9F', cites: [1, 2],
          stem: 'What is the tone of the speaker in "Preserve Our Dark Skies"?',
          choices: [
            'Impassioned, urgent, and reverent toward the cosmic majesty of the stars.',
            ['Sarcastic, cynical, and dismissive of rural Texas heritage.', 'The speaker honors and defends Texas heritage.'],
            ['Bored, indifferent, and eager to end the speech.', 'The speech is delivered with high emotional urgency and conviction.'],
            ['Playful, humorous, and full of comic puns.', 'The tone is solemn, inspiring, and persuasive.'],
          ],
          answer: 0,
          explain: 'The speaker uses elevated, passionate language ("vast tapestry of stars," "majestic cosmic heritage") to inspire action.',
        }), 8),
    ],
  },

  // 8.9G Rhetorical devices and logical fallacies
  {
    code: 'rla:8.9G',
    goal: 'You will learn to explain the purpose of rhetorical devices such as analogy and juxtaposition and identify logical fallacies like bandwagon appeals and circular reasoning.',
    words: [
      { term: 'juxtaposition', meaning: 'Placing two contrasting concepts side by side to highlight their differences.' },
      { term: 'false dilemma', meaning: 'A logical fallacy that presents an issue as having only two extreme options when other choices exist.' },
    ],
    ideas: [
      { title: 'Recognize rhetorical devices', text: 'Juxtaposition clarifies contrast (glare vs. shielded light); analogies compare complex concepts to familiar ideas.' },
      { title: 'Detect fallacious reasoning', text: 'Watch for circular reasoning (restating the premise as proof) and false dilemmas (all-or-nothing choices).' },
    ],
    samples: [
      sample(
        G8_MINI_SPEECH,
        mcq({
          standard: 'rla:8.9G', cites: [1, 2],
          stem: 'How does the speaker use juxtaposition in "Preserve Our Dark Skies"?',
          choices: [
            'By contrasting the "vast tapestry of stars" and "cosmic heritage" with the "blinding, unshielded glare" of urban light pollution.',
            ['By arguing that telescopes are identical to diesel locomotives.', 'No analogy to locomotives is made.'],
            ['By claiming that stars are smaller than microscopic bacteria.', 'Stars are massive celestial bodies.'],
            ['By using circular reasoning to prove that darkness is dark.', 'The speaker provides scientific and economic evidence.'],
          ],
          answer: 0,
          explain: 'The speaker places the awe of natural starry skies in sharp contrast to the harsh glare of light pollution to dramatize the loss.',
        }), 8),
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.9G', cites: [2],
          stem: 'Which logical fallacy does the author avoid by citing specific 70% grant offsets and 20-year lifespans?',
          choices: [
            'A false dilemma implying that schools must choose between immediate bankruptcy or freezing in the dark.',
            ['Bandwagon appeal telling readers that everyone in the country already bought solar panels.', 'The text relies on fiscal numbers rather than popularity.'],
            ['Ad hominem attack criticizing the personal clothing of school superintendents.', 'No personal insults are used.'],
            ['Circular reasoning stating that solar panels are good because they are solar.', 'The argument provides concrete financial cost-benefit analysis.'],
          ],
          answer: 0,
          explain: 'By providing nuanced financial data (70% offsets and long-term payback), the author avoids simplistic all-or-nothing false dilemmas.',
        }), 8),
    ],
  },

  // ---------- Strand 2 Writing Process Skills ----------

  // 8.10B.i Organizing structure
  {
    code: 'rla:8.10B.i',
    goal: 'You will learn to organize drafts with purposeful structure, including an introduction, transitions, coherence within and across paragraphs, and a conclusion.',
    words: [
      { term: 'coherence', meaning: 'The logical flow and connection between sentences and paragraphs that makes writing easy to follow.' },
    ],
    ideas: [
      { title: 'Craft a purposeful introduction', text: 'Hook the reader, establish context, and state a clear central idea or claim.' },
      { title: 'Use transitional signposts', text: 'Connect ideas across paragraphs using transitions that show sequence, addition, or contrast.' },
    ],
    samples: [
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.10B.i', cites: [1, 2],
          stem: 'How does the author create structural coherence between paragraphs 1 and 2 of "Power from the Sun"?',
          choices: [
            'Paragraph 1 presents the operational utility challenge and solar solution, while paragraph 2 addresses the objection of upfront expenses and concludes with long-term gains.',
            ['Paragraph 1 discusses baseball while paragraph 2 discusses gardening.', 'The essay focuses consistently on school solar power.'],
            ['The paragraphs are arranged in random order without transitional phrases.', 'The essay follows a clear problem-and-solution progression.'],
            ['The author repeats the exact same sentence four times.', 'The author develops distinct, complementary points.'],
          ],
          answer: 0,
          explain: 'The transition from the proposal to addressing counterarguments creates a coherent, persuasive organizational structure.',
        }), 8),
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.10B.i', cites: [1, 2],
          stem: 'Which transitional phrase effectively connects the canopy in paragraph 1 to the lower forest in paragraph 2?',
          choices: [
            '"Beneath the pine boughs lies the understory..."',
            ['"In ancient Roman times..."', 'Roman history is irrelevant to East Texas ecology.'],
            ['"Conversely, swimming in the ocean..."', 'Ocean swimming does not connect forest layers.'],
            ['"To bake sourdough bread..."', 'Baking instructions do not connect ecosystem layers.'],
          ],
          answer: 0,
          explain: '"Beneath the pine boughs" provides a clear spatial transition guiding the reader from the high canopy down to the understory.',
        }), 8),
    ],
  },

  // 8.10B.ii Developing engaging ideas
  {
    code: 'rla:8.10B.ii',
    goal: 'You will learn to develop engaging ideas reflecting depth of thought with specific facts, details, and examples.',
    words: [
      { term: 'depth of thought', meaning: 'Demonstrating thorough understanding by including nuanced explanations, concrete data, and thoughtful analysis.' },
    ],
    ideas: [
      { title: 'Avoid superficial generalities', text: 'Replace vague phrases like "many things" with specific names, numbers, and mechanisms.' },
      { title: 'Elaborate on significance', text: 'Explain WHY a detail matters: how it functions or how it impacts the broader issue.' },
    ],
    samples: [
      sample(
        G8_MINI_MONARCH,
        mcq({
          standard: 'rla:8.10B.ii', cites: [2],
          stem: 'Which detail from paragraph 2 demonstrates depth of thought regarding insect navigation?',
          choices: [
            'Explaining that monarchs use a sun compass in their brains combined with circadian clocks in their antennae that adjust for the sun\'s changing position.',
            ['Stating that butterflies like bright sunny days.', 'This is a superficial generalization that lacks scientific depth.'],
            ['Noting that butterflies have pretty orange wings.', 'Aesthetic description does not explain navigation mechanics.'],
            ['Mentioning that trees grow in Mexico.', 'Tree presence is a basic geographic fact.'],
          ],
          answer: 0,
          explain: 'Detailing the dual mechanism of a brain sun compass and antennal circadian clocks demonstrates scientific depth and precision.',
        }), 8),
      sample(
        G8_MINI_TELESCOPE,
        mcq({
          standard: 'rla:8.10B.ii', cites: [2],
          stem: 'How does the writer in "Scanning Distant Atmospheres" develop the concept of spectroscopic analysis with specific details?',
          choices: [
            'By naming specific chemical gases detected (water vapor, carbon dioxide, sulfur dioxide) and explaining how infrared wavelength dips form a spectral fingerprint.',
            ['By saying that telescopes take pretty pictures of outer space.', 'This is vague and superficial.'],
            ['By noting that space is big and dark.', 'This lacks scientific depth.'],
            ['By asserting that alien spaceships have been photographed on Mars.', 'This is scientifically unsubstantiated.'],
          ],
          answer: 0,
          explain: 'Naming specific chemical molecules and explaining spectroscopic absorption lines demonstrates analytical depth.',
        }), 8),
    ],
  },

  // 8.10C Revise drafts
  {
    code: 'rla:8.10C',
    goal: 'You will learn to revise drafts for clarity, development, organization, style, word choice, and sentence variety.',
    words: [
      { term: 'revision', meaning: 'The process of reworking a draft to improve ideas, organization, sentence structure, and vocabulary.' },
    ],
    ideas: [
      { title: 'Enhance sentence variety', text: 'Vary sentence openings: begin with prepositional phrases, dependent clauses, or participial phrases rather than always starting with the subject.' },
      { title: 'Upgrade weak vocabulary', text: 'Replace generic verbs and adjectives with precise, vivid academic diction.' },
    ],
    samples: [
      sample(
        G8_MINI_FOREST,
        mcq({
          standard: 'rla:8.10C', cites: [2],
          stem: 'How could a writer best revise sentence 2 of paragraph 2 to improve sentence variety and sophisticated style?',
          choices: [
            '"Acting as a natural sponge, this spongy humus layer absorbs heavy rainfall, thereby preventing severe soil erosion."',
            ['"The soil is spongy and it drinks rain water and stops dirt from moving."', 'This phrasing is simplistic and informal.'],
            ['"Because dirt is on the ground, trees grow up tall into the sky."', 'This shifts the focus away from erosion control.'],
            ['"Spongy soil is very nice for East Texas forests to have."', 'This is subjective and academically weak.'],
          ],
          answer: 0,
          explain: 'Beginning with a participial phrase ("Acting as a natural sponge...") adds variety and uses precise academic vocabulary ("thereby preventing severe soil erosion").',
        }), 8),
      sample(
        G8_MINI_SOLAR,
        mcq({
          standard: 'rla:8.10C', cites: [1],
          stem: 'What is the most effective revision of sentence 1 in "Power from the Sun" to improve word choice and conciseness?',
          choices: [
            '"Confronted with escalating operational expenses, public school districts statewide can implement rooftop solar arrays as an immediate, sustainable financial solution."',
            ['"Schools have lots of bills to pay, so putting solar things on roofs is a super good idea."', 'This is overly colloquial and informal.'],
            ['"Bills are big and solar panels are flat and they go on top of school buildings."', 'This lacks sophistication and persuasive power.'],
            ['"Because money is hard to get, solar energy might be nice for schools."', 'This is timid and lacks academic maturity.'],
          ],
          answer: 0,
          explain: 'This revision employs sophisticated academic diction ("confronted with escalating operational expenses," "sustainable financial solution") with concise phrasing.',
        }), 8),
    ],
  },
];
