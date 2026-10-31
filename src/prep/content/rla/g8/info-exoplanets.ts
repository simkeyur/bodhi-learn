// Grade 8 informational: Scanning the Atmospheres of Alien Worlds
import { makeSet, mcq } from '../author.ts';

export const INFO_EXOPLANETS = makeSet({
  id: 'g8-info-exoplanets',
  grade: 8,
  kind: 'reading',
  title: 'Scanning the Atmospheres of Alien Worlds',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-info-exoplanets-p',
    title: 'Scanning the Atmospheres of Alien Worlds',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'For thousands of years, people looked up at the night sky. They wondered if our solar system was alone in the universe. Long ago, people could only see planets as tiny wandering points of light in the dark sky. Today, powerful space telescopes are finding real answers. Astronomers are no longer just finding distant planets. They are studying the air on alien worlds. Using a method called transmission spectroscopy, scientists can test the skies of distant planets. They can detect water vapor, carbon dioxide, and methane on worlds that circle stars many light-years away.' },
      { kind: 'p', text: 'When a planet crosses in front of its star, the event is called a transit. The planet blocks a tiny bit of starlight. It casts a small shadow toward Earth. But the thin ring of air around the planet acts like a glass prism. As starlight passes through the alien atmosphere, gases absorb specific colors of light. Carbon dioxide absorbs different colors than water vapor or methane. Spectroscopy works like a barcode scanner for the universe. Each chemical element leaves its own pattern of dark lines. By measuring which colors are missing from the starlight, scientists can tell what gases make up the planet\'s sky.' },
      { kind: 'p', text: 'Catching these faint signals is very difficult. The light passing through a planet\'s air is less than one-tenth of one percent of the total starlight reaching the telescope mirror. To catch this tiny whisper of light, the telescope floats in deep space 1.5 million kilometers from Earth. Special coolers chill the telescope mirrors to minus 266 degrees Celsius. If the telescope were warm, its own heat glow would blind its infrared cameras. Cold mirrors allow astronomers to pick up the faint signals from distant planets.' },
      { kind: 'p', text: 'Recent telescope surveys have revealed surprising worlds. When astronomers pointed the Webb telescope at WASP-39b, a giant gas planet seven hundred light-years away, they found sulfur dioxide in its atmosphere. This was the first time sulfur dioxide was ever detected on an alien world. It proved that starlight drives chemical reactions in alien skies. In our own solar system, sunlight creates Earth\'s protective ozone layer in a similar way.' },
      { kind: 'p', text: 'Astronomers are now turning their attention toward small, rocky worlds. The most famous target is the TRAPPIST-1 system, located forty light-years away. Seven rocky planets orbit a small, cool red star. Three of these planets orbit in the habitable zone. In this zone, temperatures might allow liquid water to pool on the rocky surface. Scientists are working to find out if these planets have kept their air, or if strong stellar flares blew their atmospheres into space.' },
      { kind: 'p', text: 'In the future, new space telescopes will use special metal disks called coronagraphs. These instruments block out bright starlight directly. A coronagraph works like holding up a hand to shield your eyes from the blazing sun. This new technology will let astronomers study cooler Earth-like planets without waiting for transits.' },
      { kind: 'p', text: 'The main goal of this research is finding biosignatures, or signs of life. If astronomers find methane and oxygen together in an atmosphere, it would be a major discovery. On Earth, these two gases destroy each other quickly unless living things constantly make more of them. Finding both gases on a rocky world would suggest that living organisms might exist there. With every new observation, astronomers move closer to answering humanity\'s oldest question: Are we alone in the universe?' },
      { kind: 'sidebar', title: 'What Is a Transit?', text: 'A transit happens when a planet passes between its star and a telescope. The star dims by a tiny amount, and a little starlight filters through the edge of the planet\'s atmosphere on its way to us.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8D.i', cites: [1, 2],
      stem: 'What is the central idea of the selection?',
      choices: [
        'Spectroscopy allows astronomers to study the air on distant planets.',
        ['The Webb telescope was built mainly to search for ice on the Moon and Mars.', 'The telescope is designed to analyze deep space exoplanets and distant galaxies.'],
        ['All rocky planets orbiting red dwarf stars possess breathable oxygen.', 'Scientists are still studying whether TRAPPIST-1 planets even have atmospheres.'],
        ['Methane is the only atmospheric gas that can prove alien life exists.', 'Methane paired with oxygen is a potential biosignature, not proof on its own.'],
      ],
      answer: 0,
      explain: 'The passage explains how transmission spectroscopy allows scientists to test the atmospheres of exoplanets and search for signs of life.',
    }),
    mcq({
      standard: 'rla:8.8D.iii', cites: [2, 3],
      stem: 'Which organizational pattern does the author use in paragraphs 2 and 3?',
      choices: [
        ['Chronological order tracing ancient Greek astronomical discoveries.', 'The paragraphs describe modern physics and twenty-first-century space instruments.'],
        'A scientific process followed by engineering challenges.',
        ['Fictional narrative about astronauts traveling to the red star.', 'The passage is an informational article based on real telescope missions.'],
        ['Biographical profile of the engineer who designed the mirrors.', 'The text focuses on spectroscopic physics and cryocooling engineering.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 explains how light filters through atmospheres, while paragraph 3 outlines the challenge of capturing faint signals in space.',
    }),
    mcq({
      standard: 'rla:8.5G', cites: [3],
      stem: 'Which detail explains why the telescope must be chilled to minus 266 degrees Celsius?',
      choices: [
        ['To prevent solar panels from overheating during long solar eclipses.', 'Cooling protects the mirrors and infrared cameras, not the solar arrays.'],
        ['To allow scientists to freeze interstellar gas samples in space.', 'The telescope analyzes light waves remotely rather than capturing physical gas.'],
        'To prevent heat glow from blinding sensitive infrared sensors.',
        ['To protect radio communication antennas from energetic solar storms.', 'Cooling is required for infrared spectroscopic sensitivity.'],
      ],
      answer: 2,
      explain: 'Paragraph 3 explains that coolers chill the mirrors so the instrument\'s own warmth does not drown out faint planetary signals.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [4],
      stem: 'Which detail from paragraph 4 best supports the idea that alien skies undergo chemistry?',
      choices: [
        ['WASP-39b is a giant gas planet situated seven hundred light-years away.', 'This gives the planet\'s size and location rather than chemical processes.'],
        ['Recent telescope surveys have revealed surprising worlds across space.', 'This is a general statement introducing new discoveries.'],
        ['Astronomers pointed the space observatory toward the Virgo constellation.', 'This describes where the telescope was aimed, not chemical reactions.'],
        'Sulfur dioxide proved that starlight drives chemical reactions.',
      ],
      answer: 3,
      explain: 'Paragraph 4 states that finding sulfur dioxide proves that starlight drives chemical reactions in alien skies, similar to Earth\'s ozone layer.',
    }),
    mcq({
      standard: 'rla:8.9B', cites: [1, 2, 4, 5, 6],
      stem: 'How does the organization of the passage contribute to the author\'s purpose?',
      choices: [
        ['It argues that space exploration is too expensive for modern nations.', 'The author celebrates the success and value of space telescopes.'],
        'It explains spectroscopy, shares discoveries, and discusses life.',
        ['It compares space observatories unfavorably to ground-based dishes.', 'The Webb telescope is praised as a revolutionary tool for astronomy.'],
        ['It focuses exclusively on why human colonies should travel to WASP-39b.', 'WASP-39b is an uninhabitable gas giant planet.'],
      ],
      answer: 1,
      explain: 'The text logically introduces the technology, demonstrates its application to real planets, and finishes with the broader goal of finding biosignatures.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [7],
      stem: 'What can the reader infer from paragraph 7 about methane and oxygen?',
      choices: [
        ['They prove that advanced alien civilizations have built industrial cities.', 'Biosignatures indicate biological activity, not necessarily cities or technology.'],
        ['They indicate that an exoplanet\'s atmosphere is too toxic for microbes.', 'Methane and oxygen together indicate potential living processes.'],
        'Because they react quickly, their presence suggests living sources.',
        ['They show that the host red dwarf star is nearing the end of its life.', 'Atmospheric chemistry is unrelated to the life cycle of the host star.'],
      ],
      answer: 2,
      explain: 'Paragraph 7 explains that because methane and oxygen destroy each other quickly, finding both suggests an active biological source replenishing them.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 3, 5, 7],
      stem: 'Which statement provides the best objective summary of the selection?',
      choices: [
        ['Astronomers have discovered that all seven planets in the TRAPPIST-1 system contain liquid oceans and breathable atmosphere layers.', 'Scientists have not yet determined whether TRAPPIST-1 planets even have atmospheres.'],
        ['The James Webb Space Telescope experienced cooling breakdowns while orbiting deep space 1.5 million kilometers away from Earth.', 'The cooling systems are described as successful engineering feats, not breakdowns.'],
        ['Ancient philosophers believed the solar system was unique, and recent space observations have finally confirmed their theories.', 'Recent discoveries show that planetary systems are common throughout the galaxy.'],
        'By measuring starlight during transits, space telescopes can identify gases on distant worlds and search for signs of life.',
      ],
      answer: 3,
      explain: 'This summary accurately captures the method (spectroscopy during transits), the tool, and the overarching goal of finding life.',
    }),
  ],
});
