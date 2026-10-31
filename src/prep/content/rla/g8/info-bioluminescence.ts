// Grade 8 informational: Living Light in the Midnight Zone
import { makeSet, mcq } from '../author.ts';

export const INFO_BIOLUMINESCENCE = makeSet({
  id: 'g8-info-bioluminescence',
  grade: 8,
  kind: 'reading',
  title: 'Living Light in the Midnight Zone',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-info-bioluminescence-p',
    title: 'Living Light in the Midnight Zone',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'One thousand meters beneath the ocean waves, sunlight disappears completely. In this deep region called the midnight zone, the water is near freezing and water pressure is crushing. To human eyes looking through submarine portholes, the dark abyss seems cold and empty. Millions of strange creatures live in this silent world without ever seeing sunshine. They depend on glowing body parts to find food, find mates, and survive in the dark. When scientists turn off their artificial floodlights, the darkness glows with living sparks. Most deep-sea creatures have the natural ability to produce their own light. This biological light production is known as bioluminescence, and it illuminates the mysterious ocean abyss.' },
      { kind: 'p', text: 'Bioluminescence is not like an electric light bulb that gets hot to the touch. Heat would destroy living cells. In a normal light bulb, most electrical energy is wasted as heat. Deep-sea animals cannot afford to waste energy. Instead, animals create cold chemical light. A light-making molecule called luciferin combines with oxygen. A special helper enzyme called luciferase speeds up the reaction. Nearly all the chemical energy is released as visible light rather than heat. Most deep-sea animals glow blue-green because blue-green light travels farthest through seawater.' },
      { kind: 'p', text: 'Marine scientists sort deep-sea light into two main groups. Some animals produce glowing chemicals inside special body parts called photophores. Comb jellies and firefly squid make their own light internally. Other animals get their glow from helpful bacteria. The deep-sea anglerfish carries glowing bacteria in a fleshy bulb dangling above its mouth. The bacteria receive shelter and nutrients from the fish. In return, the anglerfish uses the glowing lure to attract hungry prey. The fish twitches the glowing tip slowly in the dark. Curious smaller fish swim closer to investigate, only to be snapped up by the anglerfish\'s sharp teeth.' },
      { kind: 'p', text: 'Deep-sea animals also use light to hide. In the dim twilight zone, predators swim below and search for dark silhouettes against faint surface light. If a fish swam without glowing belly spots, its dark shape would stand out like a sharp shadow against the pale surface water. Lanternfish and hatchetfish use a clever trick called counterillumination. They have rows of photophores along their bellies. By matching their belly light to the faint sunlight filtering down from above, they erase their own shadows. Hungry predators swimming beneath them cannot see their outlines.' },
      { kind: 'p', text: 'Other creatures use sudden bursts of light for self-defense. When an octopus or shark attacks, the deep-sea vampire squid does not release black ink. Black ink is useless in total darkness. Instead, it squirts a cloud of glowing blue mucus. The bright blue mucus sticks to the attacker\'s eyes and snout. While the confused predator thrashes about, the vampire squid turns off its own lights and glides away into the dark ocean.' },
      { kind: 'p', text: 'Biologists have found that bioluminescence developed independently dozens of times across different ocean animal families. This shows that producing light is essential for surviving in the pitch-black ocean depths.' },
      { kind: 'p', text: 'Studying ocean light has also helped human medicine and technology. Doctors use glowing genes from marine life to track cancer cells under microscopes. Marine biologists monitor glowing plankton to measure ocean pollution. Scientists continue to discover new species on deep submersible dives. Each discovery reveals unique chemical pathways that inspire new laboratory tools. The living light of the deep ocean continues to solve important scientific puzzles on land.' },
      { kind: 'sidebar', title: 'Why Blue-Green?', text: 'Seawater soaks up red light within about 10 meters of the surface, while blue-green light travels deepest. That is why most deep-sea animals glow blue-green.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8D.i', cites: [1, 2],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Bioluminescence is an accidental chemical reaction in deep-sea creatures.', 'The passage explains that bioluminescence is a widely evolved, essential adaptation.'],
        ['Deep-sea animals use light exclusively to hunt small fish in the abyss.', 'The passage details multiple functions: hunting, camouflage, and defense.'],
        ['Human light pollution is destroying the natural glows of marine animals.', 'Light pollution is not discussed in the text.'],
        'Bioluminescence is a key adaptation for hunting, hiding, and defense.',
      ],
      answer: 3,
      explain: 'The selection explores the biochemical basis of bioluminescence and demonstrates how marine life uses it for multiple survival purposes.',
    }),
    mcq({
      standard: 'rla:8.8D.iii', cites: [2, 3],
      stem: 'Which organizational patterns does the author use in paragraphs 2 and 3?',
      choices: [
        ['Chronological history followed by a problem-and-solution explanation.', 'The text does not follow a timeline or address a social problem.'],
        'Cause-and-effect for chemistry, followed by classification of types.',
        ['Persuasive appeals to ban fishing, followed by a fictional narrative.', 'The article is informational and objective rather than persuasive.'],
        ['Compare-and-contrast between freshwater and saltwater algae species.', 'The focus is on marine deep-sea animals and chemical adaptations.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 explains the cause-and-effect reaction between luciferin and oxygen, while paragraph 3 classifies light production into internal organs versus bacteria.',
    }),
    mcq({
      standard: 'rla:8.9C',
      stem: 'What is the main purpose of the sidebar "Why Blue-Green?"',
      choices: [
        'To explain why most deep-sea organisms produce blue-green light.',
        ['To describe the scientific equipment used on deep research submarines.', 'The sidebar discusses light absorption in water, not submarine gear.'],
        ['To explain why anglerfish are dangerous hunters in midnight waters.', 'The sidebar explains light wavelengths, not anglerfish behavior.'],
        ['To show where deep-sea coral reefs grow along continental trenches.', 'Coral reefs are not mentioned in the sidebar.'],
      ],
      answer: 0,
      explain: 'The sidebar clarifies that blue-green light travels farthest in seawater, explaining why deep-sea animals glow that color.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [4],
      stem: 'Based on paragraph 4, why is counterillumination an effective strategy?',
      choices: [
        ['It frightens predatory sharks by raising the water temperature nearby.', 'Bioluminescence produces cold light without heat.'],
        ['It allows lanternfish to blind their enemies with bright red flashes.', 'Lanternfish emit blue-green belly light to blend with faint downwelling sunlight.'],
        'It erases the dark silhouette that upward-looking predators seek.',
        ['It helps small fish copy the swimming motions of larger marine mammals.', 'The adaptation matches light intensity to eliminate shadows, not movement patterns.'],
      ],
      answer: 2,
      explain: 'Predators look upward to spot silhouettes; matching belly light to downwelling sunlight makes the fish invisible from below.',
    }),
    mcq({
      standard: 'rla:8.5G', cites: [2],
      stem: 'Which detail explains why bioluminescence does not harm animal cells?',
      choices: [
        ['Animals grow thick calcium plates that shield their organs from heat.', 'The chemical reaction itself produces negligible heat.'],
        'The reaction creates cold light, releasing almost no damaging heat.',
        ['Deep-sea creatures only produce light when resting on cold ice shelves.', 'Bioluminescence occurs across all oceans, not just polar ice.'],
        ['The chemical reaction occurs entirely outside the animal in open water.', 'Many organisms produce light internally within photophores.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 explains that the reaction releases energy as cold visible light rather than destructive heat.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [3],
      stem: 'Which detail from paragraph 3 best supports the idea of mutual cooperation?',
      choices: [
        ['Comb jellies and firefly squid make their own light in photophores.', 'This illustrates self-produced light rather than a cooperative partnership.'],
        ['The fish twitches the glowing tip slowly through the dark water.', 'This describes hunting technique rather than mutual cooperation.'],
        ['Some animals produce glowing chemicals inside special body parts.', 'This is an example of individual synthesis, not mutualism.'],
        'Bacteria gain shelter, while the fish uses their light to hunt.',
      ],
      answer: 3,
      explain: 'Paragraph 3 explains that bacteria receive shelter and food while the anglerfish uses their light as a lure, showing mutual cooperation.',
    }),
    mcq({
      standard: 'rla:8.9A', cites: [7],
      stem: 'What message does the author convey in the concluding paragraph?',
      choices: [
        'Studying deep-sea light provides tools that benefit human medicine.',
        ['Deep-sea mining should be accelerated to extract luminous minerals.', 'The passage discusses living organisms, not commercial mineral mining.'],
        ['Synthetic chemicals in labs are more effective than natural enzymes.', 'The text praises natural enzymes for helping scientists track disease.'],
        ['Submarines are too expensive to justify continued ocean exploration.', 'The author advocates exploring deep oceans for valuable scientific insights.'],
      ],
      answer: 0,
      explain: 'The final paragraph highlights how understanding deep-sea bioluminescence helps doctors track cancer and monitor the environment.',
    }),
  ],
});
