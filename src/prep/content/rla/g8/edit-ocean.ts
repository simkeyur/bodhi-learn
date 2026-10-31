// Grade 8 editing draft: The Mariana Trench Expedition
import { makeSet, mcq } from '../author.ts';

export const EDIT_OCEAN = makeSet({
  id: "g8-edit-ocean",
  grade: 8,
  kind: 'editing',
  title: "The Mariana Trench Expedition",
  intro: "Read the draft and choose the best answer to each question.",
  passages: [{
    id: "g8-edit-ocean-p",
    title: "The Mariana Trench Expedition",
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        "Located in the western Pacific Ocean, the Mariana Trench plunges nearly 36,000 feet into the Earth's crust at the Challenger Deep.",
        "At the bottom of this abyssal chasm, hydrostatic water pressure exceeds one thousand times the atmospheric pressure at sea level.",
        "Exploring this extreme frontier requires cutting-edge submarine engineering and fearless human determination.",
      ] },
      { kind: 'sentences', sentences: [
        "In 2012, explorer and filmmaker James Cameron piloted the Deepsea Challenger, a revolutionary vertical submersible that he spent seven years designing.",
        "Engineers constructed the cockpit from a solid sphere of forged micro-alloy steel with walls nearly three inches thick.",
        "The pressure hull prevented the occupant from being crushed by the tremendous weight of the water column.",
        "Furthermore syntactic foam, a composite material containing microscopic hollow glass spheres, provided buoyancy while resisting immense compression.",
      ] },
      { kind: 'sentences', sentences: [
        "When Cameron reached the ocean floor, he observed bizarre sea cucumbers, amphipods, and gelatinous microorganisms.",
        "The expedition collected valuable sediment core samples that scientists still analyze today.",
        "Extreme deep-sea exploration has a profound affect on our understanding of how life thrives in alien environments.",
      ] },
      { kind: 'sentences', sentences: [
        "Hydrothermal vents and abyssal trenches provide critical clues regarding the prebiotic chemical conditions where life first emerged on Earth billions of years ago.",
        "Oceanographers believe that unlocking the secrets of the deep will guide our exploration of subsurface oceans on icy moons like Europa and Enceladus.",
      ] },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [3, 4],
      stem: "Which transition phrase could best be added at the beginning of sentence 4 to connect the general engineering challenge to Cameron's specific expedition?",
      choices: [
        ["In conclusion,", "This transition belongs at the end of an essay, not at the beginning of a supporting paragraph."],
        "Demonstrating this commitment to exploration,",
        ["On the other hand,", "This transition signals contrast, which does not fit the continuation of the idea."],
        ["For example, in ancient times,", "The expedition occurred in 2012, not ancient times."],
      ],
      answer: 1,
      explain: "This transitional phrase smoothly connects the conceptual demand for engineering and determination in sentence 3 to Cameron's real-world effort in sentence 4.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [5, 6],
      stem: "The writer wishes to develop sentence 5 with more specific technical details. Which revision best reflects depth of thought?",
      choices: [
        ["Engineers made the cockpit round because circles look attractive on deep-sea cameras.", "Aesthetic camera appearance does not demonstrate depth of engineering thought."],
        ["The steel sphere was painted green and had comfortable leather seats inside.", "Paint color and seating are superficial details rather than engineering specifics."],
        ["The sphere was manufactured in an industrial metal factory located near an ocean port.", "Factory location does not explain structural engineering under pressure."],
        "Engineers forged the spherical cockpit from structural steel to distribute compressive hydrostatic loads evenly across the entire surface area without structural weak points.",
      ],
      answer: 3,
      explain: "Explaining that the spherical geometry distributes compressive hydrostatic loads evenly demonstrates technical depth and purposeful detail.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [2],
      stem: "How should sentence 2 be revised to eliminate redundancy and improve word choice?",
      choices: [
        "At the bottom of this submerged chasm, hydrostatic water pressure exceeds one thousand times atmospheric pressure at sea level.",
        ["At the bottom of this deep abyss that is abyssal, water pressure is very high.", "'Deep abyss that is abyssal' repeats the exact same concept three times."],
        ["Down at the very deep bottom of the deepest ocean floor, pressure is huge.", "This phrasing is informal and repetitive."],
        ["At the bottom of this abyssal trench, lots of water pressure pushes down hard.", "This phrasing lacks academic precision."],
      ],
      answer: 0,
      explain: "Replacing the redundant phrase 'abyssal abyss' with 'submerged chasm' eliminates repetition while preserving descriptive precision.",
    }),
    mcq({
      standard: "rla:8.10D.i", cites: [8],
      stem: "Sentence 8 should be expanded into a complex sentence that emphasizes the unique sensory environment. Which edit is most effective?",
      choices: [
        ["When Cameron reached the ocean floor and he observed strange animals, they looked very weird.", "This uses coordinating conjunctions clumsily with vague vocabulary."],
        "As Cameron peered through the thick acrylic viewport onto the desolate seafloor, he observed ghostly translucent amphipods and microbial mats thriving in complete darkness.",
        ["Cameron reached the ocean floor, he observed bizarre sea cucumbers and amphipods.", "This introduces a comma splice."],
        ["Reaching the ocean floor, bizarre sea cucumbers were observed by him.", "This creates a dangling participial modifier."],
      ],
      answer: 1,
      explain: "Beginning with the dependent clause 'As Cameron peered...' creates a complex sentence with descriptive, precise vocabulary.",
    }),
    mcq({
      standard: "rla:8.10D.iv", cites: [9],
      stem: "The writer wants to add a sentence after sentence 9 about the team of research oceanographers. Which sentence maintains correct pronoun-antecedent agreement?",
      choices: [
        ["Each of the oceanographers published their individual findings in international scientific journals.", "'Each' is singular and requires the singular pronoun 'his or her'."],
        "The research team published its findings in leading oceanographic journals, sharing vital data with the global scientific community.",
        ["The research team published their findings in journals, and they were very proud.", "'Team' is a singular collective noun requiring 'its', not 'their'."],
        ["Everyone who analyzed the sediment samples reported that their microscope was calibrated.", "'Everyone' is singular and clashes with plural 'their'."],
      ],
      answer: 1,
      explain: "'The research team' is a singular collective noun correctly matched with the singular neuter pronoun 'its'.",
    }),
    mcq({
      standard: "rla:8.10D.vii", cites: [10],
      stem: "What is the correct edit for the commonly confused word in sentence 10?",
      choices: [
        ["Change 'exploration' to 'exploring'.", "Exploration is the correct noun."],
        ["Change 'thrives' to 'thrive'.", "Life is singular and requires 'thrives'."],
        ["Change 'alien' to 'align'.", "'Align' is an entirely different word meaning to arrange in a line."],
        "Change 'affect' to 'effect'.",
      ],
      answer: 3,
      explain: "'Effect' is the noun meaning a result or influence ('has a profound effect'), whereas 'affect' is usually a verb.",
    }),
  ],
});
