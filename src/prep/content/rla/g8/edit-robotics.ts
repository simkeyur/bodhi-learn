// Grade 8 editing draft: Biomimetic Drones in Search and Rescue
import { makeSet, mcq } from '../author.ts';

export const EDIT_ROBOTICS = makeSet({
  id: "g8-edit-robotics",
  grade: 8,
  kind: 'editing',
  title: "Biomimetic Drones in Search and Rescue",
  intro: "Read the draft and choose the best answer to each question.",
  passages: [{
    id: "g8-edit-robotics-p",
    title: "Biomimetic Drones in Search and Rescue",
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        "Traditional search-and-rescue quadcopters struggle to navigate dense collapsed buildings and forest canopy debris following natural disasters.",
        "Roboticists at Texas engineering laboratories are designing biomimetic drones inspired by the aerodynamic flight mechanics of birds and bats.",
        "These nature-inspired machines promise to navigate hazardous obstacle courses that would destroy conventional rigid drones.",
      ] },
      { kind: 'sentences', sentences: [
        "Peregrine falcons can fold their wings during high-speed dives to slip through narrow openings.",
        "Engineers have developed robotic drones with articulating carbon-fiber joints that tuck their wings inward when entering tight crevices.",
        "Micro-sonar sensors allow the drone to map its surroundings in real time.",
        "When disaster strikes, the rescue robotics team deploys their swarm of bio-drones into the rubble.",
      ] },
      { kind: 'sentences', sentences: [
        "The drone can squeeze through a six-inch hole, it can transmit thermal infrared video of trapped survivors to emergency responders.",
        "Biomimetic robotics demonstrate that millions of years of natural evolutionary engineering offer the ultimate inspiration for saving human lives.",
      ] },
      { kind: 'sentences', sentences: [
        "Texas disaster response agencies are partnering with aerospace university labs to field-test these biomimetic drones during simulated earthquake and hurricane emergencies.",
        "As micro-processors and artificial intelligence continue to advance, these agile bio-drones will become indispensable lifelines during municipal search-and-rescue missions worldwide, safeguarding both human survivors and first responders during catastrophic civil emergencies.",
      ] },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [4],
      stem: "Which topic sentence could best be added before sentence 4 to introduce the focus of the second paragraph?",
      choices: [
        ["Birds have feathers that keep them warm during chilly winter mornings.", "Feather insulation is irrelevant to aerodynamic drone maneuverability."],
        ["Quadcopters were originally designed as recreational toys for hobbyists.", "Toy quadcopter history distracts from biomimetic search-and-rescue engineering."],
        "By closely mimicking avian musculoskeletal anatomy, roboticists have unlocked agile aerial mobility in confined environments.",
        ["Texas has many species of hawks and falcons nesting near water reservoirs.", "Local hawk nesting habitats do not establish the paragraph's engineering focus."],
      ],
      answer: 2,
      explain: "This topic sentence directly connects bird anatomy to agile aerial maneuverability in confined rescue environments.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [5],
      stem: "The writer wishes to add a specific fact reflecting depth of thought after sentence 5. Which sentence is most effective?",
      choices: [
        "Equipped with flexible silicone wing membranes modeled after Mexican free-tailed bats, the drone can alter its wingspan by forty percent mid-flight without losing lift or stability.",
        ["Carbon fiber is also used to make professional tennis rackets and fishing rods.", "Tennis rackets and fishing rods are unrelated to biomimetic rescue drones."],
        ["Falcons eat mice, small rodents, and small songbirds in rural agricultural fields.", "Falcon diet is completely irrelevant to rescue drone engineering."],
        ["Drones have electronic batteries that must be recharged using wall outlets.", "Battery recharging is an everyday fact that adds no depth of thought."],
      ],
      answer: 0,
      explain: "Detailing silicone wing membranes modeled after Mexican free-tailed bats and a 40% mid-flight wingspan adjustment demonstrates technical depth.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [1, 2],
      stem: "How can sentences 1 and 2 best be combined to improve sentence variety and emphasize the technological solution?",
      choices: [
        ["Quadcopters struggle in collapsed buildings, so roboticists build drones that look like bats and birds.", "This uses a simplistic compound structure with colloquial diction."],
        ["Because quadcopters struggle, engineers are designing biomimetic drones, and they look like birds.", "This is repetitious and structurally awkward."],
        ["Traditional quadcopters struggle in buildings, while roboticists design biomimetic drones in Texas labs.", "Using 'while' suggests simultaneous action rather than a problem-solution relationship."],
        "Because traditional quadcopters struggle to maneuver through collapsed buildings, robotics engineers are developing bio-inspired drones that replicate the agile flight of birds and bats.",
      ],
      answer: 3,
      explain: "Combining the sentences with a dependent causal clause ('Because traditional quadcopters struggle...') clearly establishes the problem and solution.",
    }),
    mcq({
      standard: "rla:8.10D.i", cites: [8],
      stem: "Sentence 8 is a run-on sentence. How should it be edited into a grammatically correct complex sentence?",
      choices: [
        ["The drone can squeeze through a six-inch hole, it transmits video to responders.", "This remains a comma splice."],
        "Once the bio-drone squeezes through a six-inch fissure, its onboard thermal camera transmits real-time video of trapped survivors to emergency responders.",
        ["Squeezing through a six-inch hole, thermal video is transmitted by the drone.", "This creates a dangling modifier attributing the squeezing action to thermal video."],
        ["The drone can squeeze through a hole and transmit video, responders watch it.", "This creates a comma splice in the second clause."],
      ],
      answer: 1,
      explain: "Beginning with 'Once the bio-drone squeezes...' creates a grammatically complete complex sentence with clear cause-and-effect relationship.",
    }),
    mcq({
      standard: "rla:8.10D.iv", cites: [7],
      stem: "Sentence 7 contains a pronoun-antecedent agreement error ('team deploys their swarm'). How should it be corrected?",
      choices: [
        ["Change 'disaster' to 'disasters'.", "Disaster is singular and correctly matches 'strikes'."],
        ["Change 'team' to 'teams'.", "Pluralizing 'teams' would require changing the verb to 'deploy'."],
        "Change 'their' to 'its'.",
        ["Change 'deploys' to 'deploying'.", "This would create a sentence fragment."],
      ],
      answer: 2,
      explain: "'Team' is a singular collective noun, requiring the singular possessive pronoun 'its' rather than the plural 'their'.",
    }),
    mcq({
      standard: "rla:8.10D.vi", cites: [3],
      stem: "How can a colon be correctly incorporated into sentence 3 to introduce an explanation of hazardous obstacles?",
      choices: [
        "These nature-inspired machines promise to conquer hazardous obstacles: collapsed stairwells, shattered concrete pillars, and dense tanglements of rebar.",
        ["These nature-inspired machines: promise to conquer hazardous obstacles like stairs.", "A colon cannot separate a subject from its verb."],
        ["Hazardous obstacles include: collapsed stairwells and shattered concrete.", "A colon cannot follow an incomplete verb phrase like 'include:'."],
        ["Robots conquer: stairwells, shattered concrete pillars, and dense tanglements of rebar.", "A colon cannot follow an incomplete transitive verb."],
      ],
      answer: 0,
      explain: "The colon follows a complete independent clause to introduce a specific list of explanatory examples.",
    }),
  ],
});
