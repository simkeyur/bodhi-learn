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
        ["Birds have soft plumage that keeps them warm during cold winter mornings in diverse habitats.", "Feather insulation is irrelevant to aerodynamic drone maneuverability."],
        ["Quadcopters were originally designed as simple recreational toys for hobbyists flying in open parks.", "Toy quadcopter history distracts from biomimetic search-and-rescue engineering."],
        "Roboticists mimic avian anatomy to achieve agile flight in tight spaces.",
        ["Texas has dozens of hawks and falcons nesting near water reservoirs across the western plains.", "Local hawk nesting habitats do not establish the paragraph's engineering focus."],
      ],
      answer: 2,
      explain: "This topic sentence directly connects bird anatomy to agile aerial maneuverability in confined rescue environments.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [5],
      stem: "The writer wishes to add a specific fact reflecting depth of thought after sentence 5. Which sentence is most effective?",
      choices: [
        "Wing membranes let the drone fold forty percent of its wingspan mid-flight.",
        ["Carbon fiber is also used to make lightweight professional tennis rackets and sturdy graphite fishing rods.", "Tennis rackets and fishing rods are unrelated to biomimetic rescue drones."],
        ["Falcons hunt mice, small rodents, and songbirds across open agricultural fields during dry summer seasons.", "Falcon diet is completely irrelevant to rescue drone engineering."],
        ["Drones use electronic lithium-polymer batteries that must be recharged frequently using standard wall outlets.", "Battery recharging is an everyday fact that adds no depth of thought."],
      ],
      answer: 0,
      explain: "Detailing how wing membranes let the drone fold its wingspan mid-flight demonstrates technical depth.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [1, 2],
      stem: "How can sentences 1 and 2 best be combined to improve sentence variety and emphasize the technological solution?",
      choices: [
        ["Because quadcopters struggle in buildings, roboticists build drones that look like bats and agile birds.", "This uses a simplistic compound structure with colloquial diction."],
        ["Quadcopters struggle in collapsed ruins, while roboticists design biomimetic drones in Texas research laboratories.", "Using 'while' suggests simultaneous action rather than a problem-solution relationship."],
        ["Traditional quadcopters face challenges in buildings, so engineers create bio-inspired drones in laboratories across Texas.", "This coordinates clauses rather than subordinating the obstacle to highlight the solution."],
        "Because rigid quadcopters struggle in ruins, engineers develop drones mimicking bats and birds.",
      ],
      answer: 3,
      explain: "Combining the sentences with a dependent causal clause ('Because rigid quadcopters struggle...') clearly establishes the problem and solution.",
    }),
    mcq({
      standard: "rla:8.10D.i", cites: [8],
      stem: "Sentence 8 is a run-on sentence. How should it be edited into a grammatically correct complex sentence?",
      choices: [
        ["The drone can squeeze through a tiny six-inch hole, it transmits video of survivors to waiting rescue crews.", "This remains a comma splice."],
        "Once the drone squeezes through a gap, it transmits thermal video to rescuers.",
        ["Squeezing through a six-inch hole, thermal video is immediately transmitted by the drone to emergency crews.", "This creates a dangling modifier attributing the squeezing action to thermal video."],
        ["The drone can squeeze through a narrow hole and transmit live video, and emergency responders watch closely.", "This creates an awkward compound structure rather than a clear complex sentence."],
      ],
      answer: 1,
      explain: "Beginning with 'Once the drone squeezes...' creates a grammatically complete complex sentence with clear cause-and-effect relationship.",
    }),
    mcq({
      standard: "rla:8.10D.iv", cites: [7],
      stem: "Sentence 7 contains a pronoun-antecedent agreement error ('team deploys their swarm'). How should it be corrected?",
      choices: [
        ["Change the noun 'disaster' to the plural form 'disasters'.", "Disaster is singular and correctly matches 'strikes'."],
        ["Change the singular noun 'team' to the plural form 'teams'.", "Pluralizing 'teams' would require changing the verb to 'deploy'."],
        "Change the plural pronoun 'their' to the singular pronoun 'its'.",
        ["Change the present tense verb 'deploys' to the participle 'deploying'.", "This would create a sentence fragment."],
      ],
      answer: 2,
      explain: "'Team' is a singular collective noun, requiring the singular possessive pronoun 'its' rather than the plural 'their'.",
    }),
    mcq({
      standard: "rla:8.10D.vi", cites: [3],
      stem: "How can a colon be correctly incorporated into sentence 3 to introduce an explanation of hazardous obstacles?",
      choices: [
        "These drones conquer obstacles: collapsed walls, shattered concrete, and rebar.",
        ["These nature-inspired machines: promise to conquer hazardous obstacles like collapsed stairways and pillars.", "A colon cannot separate a subject from its verb."],
        ["Hazardous obstacles include: collapsed concrete stairwells, shattered pillars, and dense metal debris.", "A colon cannot follow an incomplete verb phrase like 'include:'."],
        ["Robots conquer: fallen stairwells, shattered concrete pillars, and dense tanglements of twisted rebar.", "A colon cannot follow an incomplete transitive verb."],
      ],
      answer: 0,
      explain: "The colon follows a complete independent clause to introduce a specific list of explanatory examples.",
    }),
  ],
});
