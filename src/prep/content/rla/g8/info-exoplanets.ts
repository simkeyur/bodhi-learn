// Grade 8 informational: Scanning the Atmospheres of Alien Worlds
import { makeSet, mcq } from '../author.ts';

export const INFO_EXOPLANETS = makeSet({
  id: "g8-info-exoplanets",
  grade: 8,
  kind: 'reading',
  title: "Scanning the Atmospheres of Alien Worlds",
  intro: "Read the selection and choose the best answer to each question.",
  passages: [{
    id: "g8-info-exoplanets-p",
    title: "Scanning the Atmospheres of Alien Worlds",
    genre: "informational",
    blocks: [
      { kind: "p", text: "For thousands of years, philosophers and stargazers pondered whether our solar system was unique in the cosmos. Today, thanks to advanced space observatories like NASA's James Webb Space Telescope (JWST), astronomers are no longer merely discovering alien worlds\u2014they are actively analyzing the chemical composition of their skies. By employing a revolutionary spectroscopic technique known as transmission spectroscopy, scientists can now detect atmospheric water vapor, carbon dioxide, sulfur dioxide, and methane on planets orbiting stars dozens of light-years away." },
      { kind: "p", text: "When an exoplanet passes directly in front of its host star from our vantage point\u2014an event known as a transit\u2014it temporarily blocks a tiny fraction of starlight. While the opaque solid body of the planet casts a dark shadow, the thin rim of its atmosphere acts like an optical prism. As the star's radiant white light filters through the gases of the alien atmosphere, different chemical molecules absorb specific, characteristic wavelengths of infrared light, leaving distinct dark absorption lines on the star's transmission spectrum." },
      { kind: "p", text: "Transmission spectroscopy presents extraordinary observational challenges. The starlight filtering through an exoplanet's atmosphere represents less than one-tenth of one percent of the total stellar flux reaching the telescope's mirror. To isolate this microscopic signal, the telescope's onboard infrared spectrograph must maintain nanometer-level optical stability while floating in the deep freeze of space 1.5 million kilometers from Earth at the Second Lagrange Point (L2). Specialized cryocoolers chill the telescope's mirrors to minus 266 degrees Celsius, preventing the instrument's own thermal radiation from drowning out the faint infrared signals from distant solar systems." },
      { kind: "p", text: "Recent atmospheric surveys have yielded breathtaking discoveries across a diverse taxonomy of worlds. When JWST analyzed WASP-39b, a bloated 'hot Saturn' exoplanet situated seven hundred light-years away in the constellation Virgo, its transmission spectrum revealed the first definitive detection of sulfur dioxide in an alien atmosphere. This discovery proved that photochemistry\u2014chemical reactions driven by high-energy ultraviolet stellar radiation, similar to the process that produces Earth's protective ozone layer\u2014operates on distant worlds." },
      { kind: "p", text: "Astronomers are now directing this spectroscopic arsenal toward terrestrial worlds in the habitable zone, most notably the TRAPPIST-1 system. This compact planetary family comprises seven rocky, Earth-sized planets orbiting a dim red dwarf star forty light-years away in the constellation Aquarius. Determining whether these planets possess thick atmospheres capable of moderating surface temperatures or whether stellar flares have stripped their gases away is critical to assessing their potential habitability." },
      { kind: "p", text: "To build on these discoveries, future space observatories like the Nancy Grace Roman Space Telescope and the proposed Habitable Worlds Observatory will deploy advanced starlight-blocking coronagraphs. These high-contrast optical masks will blot out the glare of host stars directly, enabling astronomers to capture spectroscopic chemical readings from smaller, cooler Earth twins without waiting for orbital transits." },
      { kind: "p", text: "Ultimately, the search for exoplanetary atmospheres is driven by the quest for biosignatures\u2014combinations of atmospheric gases like methane and oxygen that could indicate the presence of biological life. Because methane and oxygen react rapidly to form carbon dioxide and water, their simultaneous, sustained presence in an atmosphere would strongly suggest an active, continuous biological source. As spectroscopic instruments grow increasingly sensitive, humanity stands on the precipice of answering one of its oldest questions: Are we alone?" },
      { kind: "p", text: "[Technical Sidebar: Figure 2 diagrams a transit light curve alongside an absorption spectrum, illustrating how infrared dips at 2.7 microns and 4.3 microns correspond to atmospheric carbon dioxide and methane molecules.]" },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.8D.i", cites: [1, 2],
      stem: "What is the controlling idea or thesis of the selection?",
      choices: [
        "Advanced transmission spectroscopy allows astronomers to analyze the chemical atmospheres of distant exoplanets to study planetary processes and search for signs of life.",
        ["The James Webb Space Telescope was built primarily to search for water ice on the Moon and Mars.", "JWST studies deep space exoplanets and distant galaxies, not primarily lunar or Martian ice."],
        ["All rocky planets orbiting red dwarf stars possess thick atmospheres containing breathable oxygen.", "The text notes astronomers are still investigating whether TRAPPIST-1 planets retained their atmospheres."],
        ["Methane is the only atmospheric gas that can prove the existence of alien civilizations.", "Methane paired with oxygen is a potential biosignature, not proof of civilizations alone."],
      ],
      answer: 0,
      explain: "The passage explains how transmission spectroscopy decodes exoplanet atmospheres, identifies chemical signatures, and seeks biosignatures.",
    }),
    mcq({
      standard: "rla:8.8D.iii", cites: [2, 3],
      stem: "Which organizational pattern does the author use in paragraphs 2 and 3?",
      choices: [
        ["Chronological listing of ancient Greek astronomical discoveries.", "The paragraphs discuss modern twenty-first-century spectroscopic physics."],
        "Explanation of a scientific process (how light filters through atmospheres) followed by problem-and-solution regarding the engineering challenges of infrared detection.",
        ["Fictional narrative about astronauts traveling to the TRAPPIST-1 solar system.", "The passage is an informational article based on actual robotic telescope data."],
        ["Biographical profile of the engineer who designed the telescope's solar panels.", "The text focuses on spectroscopic physics and cryocooling engineering."],
      ],
      answer: 1,
      explain: "Paragraph 2 describes the scientific process of transmission spectroscopy, and paragraph 3 presents the problem of microscopic signal strength and the technological solutions (L2 orbit and cryocoolers).",
    }),
    mcq({
      standard: "rla:8.5G", cites: [3],
      stem: "Which detail from paragraph 3 explains why the telescope must be cooled to minus 266 degrees Celsius?",
      choices: [
        ["To prevent the solar panels from overheating during solar eclipses.", "The cooling protects the mirrors and infrared detectors, not solar panels."],
        "To prevent the telescope's own thermal heat radiation from drowning out the faint infrared signals from distant planets.",
        ["To allow astronomers to freeze interstellar gas samples collected in orbit.", "The telescope analyzes light remotely; it does not collect physical gas samples."],
        ["To protect the communication antennas from solar wind storms.", "Cooling is required for infrared spectroscopic sensitivity, not antenna communication."],
      ],
      answer: 1,
      explain: "Paragraph 3 states that specialized cryocoolers chill the mirrors to prevent the instrument's own thermal radiation from obscuring faint exoplanet signals.",
    }),
    mcq({
      standard: "rla:8.6C", cites: [4],
      stem: "Which text evidence from paragraph 4 best supports the conclusion that chemical processes on exoplanets resemble those on Earth?",
      choices: [
        ["'...situated seven hundred light-years away in the constellation Virgo...'", "This specifies distance and location, not chemical processes."],
        ["'Recent atmospheric surveys have yielded breathtaking discoveries across a diverse taxonomy of worlds.'", "This is an introductory claim about discoveries."],
        ["'...bloated hot Saturn exoplanet...'", "This describes the physical size of the planet."],
        "The detection of sulfur dioxide on WASP-39b proved that photochemistry driven by stellar radiation operates on distant worlds, similar to Earth's ozone formation.",
      ],
      answer: 3,
      explain: "Paragraph 4 explicitly notes that sulfur dioxide proves photochemistry driven by ultraviolet radiation occurs on exoplanets just as it does in Earth's ozone layer.",
    }),
    mcq({
      standard: "rla:8.9B", cites: [1, 2, 4, 5, 6],
      stem: "How does the organization of the passage contribute to the author's purpose?",
      choices: [
        "It moves from the general principles of spectroscopy to specific exoplanet discoveries and concludes with the profound philosophical implications of biosignature detection.",
        ["It argues that space exploration is too expensive and should be replaced with computer simulations.", "The author praises the remarkable discoveries of space telescopes."],
        ["It compares the James Webb Telescope unfavorably to older ground-based observatories.", "JWST is presented as a revolutionary and successful scientific instrument."],
        ["It focuses exclusively on why human colonies should be built immediately on WASP-39b.", "WASP-39b is an uninhabitable gas giant planet."],
      ],
      answer: 0,
      explain: "The text logically introduces the technology, demonstrates its application to real planets, and finishes with the broader goal of finding alien biosignatures.",
    }),
    mcq({
      standard: "rla:8.5F", cites: [6],
      stem: "What can the reader infer from paragraph 6 regarding the discovery of both methane and oxygen on an exoplanet?",
      choices: [
        ["It would prove that intelligent alien civilizations have constructed advanced industrial factories.", "Biosignatures indicate biological activity, not necessarily industrial civilization."],
        ["It would indicate that the exoplanet's atmosphere is too toxic to sustain any form of microbial life.", "Methane and oxygen are classic indicators of life, not toxicity."],
        "Because these two gases react and destroy each other quickly, their simultaneous presence strongly implies an active biological source continuously replenishing them.",
        ["It would show that the host star is approaching the end of its life cycle and will soon explode.", "Atmospheric chemistry is unrelated to imminent stellar supernovae."],
      ],
      answer: 2,
      explain: "Paragraph 6 explains that since methane and oxygen react to form water and carbon dioxide, ongoing biological processes would be required to replenish both gases simultaneously.",
    }),
    mcq({
      standard: "rla:8.6D", cites: [1, 2, 3, 5, 6],
      stem: "Which is the best objective summary of the selection?",
      choices: [
        ["Astronomers have discovered that all seven planets in the TRAPPIST-1 system contain oceans of liquid water and breathable atmospheres.", "Scientists have not yet determined whether the TRAPPIST-1 planets even have atmospheres."],
        "By measuring how starlight filters through exoplanet atmospheres during transits, space telescopes like JWST can identify distant atmospheric gases and search for biosignatures that may indicate extraterrestrial life.",
        ["The James Webb Space Telescope has experienced multiple cooling malfunctions while orbiting the Second Lagrange Point 1.5 million kilometers away.", "The cooling systems are described as successful engineering triumphs, not malfunctions."],
        ["Philosophers throughout history believed the solar system was unique, and modern astronomy has proven their theories correct.", "Modern astronomy has proven that planetary systems are common throughout the galaxy."],
      ],
      answer: 1,
      explain: "This summary accurately captures the central method (transmission spectroscopy during transits), the tool (JWST), and the scientific objectives.",
    }),
  ],
});
