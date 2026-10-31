// Grade 8 literary genres / myth: The Firebringer's Defiance (Prometheus)
import { makeSet, mcq } from '../author.ts';

export const MYTH_PROMETHEUS = makeSet({
  id: 'g8-myth-prometheus',
  grade: 8,
  kind: 'reading',
  title: "The Firebringer's Defiance",
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-myth-prometheus-p',
    title: "The Firebringer's Defiance",
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Long ago, before stone cities crowned the Greek hills, the Titan Prometheus looked down from Mount Olympus upon early humans. Unlike the Olympian gods, who rested on soft clouds and demanded constant praise, Prometheus felt pity for mortals. He saw people shivering in cold, damp caves. They hid from wild beasts in the dark woods. They ate bitter raw roots and froze when winter snow buried the mountain valleys in silent frost. Mortals had no warm clothes or strong shelters. They huddled together in fear whenever cold blizzards swept over the plains.' },
      { kind: 'p', text: 'Prometheus wanted to help these fragile creatures of clay. He approached Zeus, king of the gods, whose golden throne crackled with lightning bolts. "Great Zeus," Prometheus said with respect, "mankind suffers in darkness and misery. Give them the gift of fire. With fire, they can make bronze plows to harvest wheat. They can warm their hearths against winter frost, cook hot food, and learn the beginnings of science and art."' },
      { kind: 'p', text: 'Zeus\'s face darkened like a gathering storm. "Never!" roared the king of the gods, his loud voice shaking the mountain peaks. "Fire belongs to the gods alone. If mortals have fire, they will grow proud and strong. They will learn to build grand cities and forge weapons. Soon they will imagine themselves our equals. Let them stay humble and shivering in their caves, mindful of their weakness."' },
      { kind: 'p', text: 'Prometheus bowed and walked away, but he refused to accept this cruel decree. He knew that Zeus punished disobedience without mercy, yet he chose to follow his conscience. In the middle of the night, Prometheus slipped into the sacred courtyard of Olympus. He waited near the fiery sun chariot of Helios. Reaching into the glowing wheel with a hollow fennel stalk, he caught a living spark inside the dry center of the plant. The thick green stalk shielded the glowing ember from the night breeze as he slipped past the palace gates.' },
      { kind: 'p', text: 'Carrying the hidden spark, Prometheus hurried down to earth under the dark night sky. He gathered the village elders together in a quiet clearing. He touched the spark to dry cedar twigs, blowing softly until bright orange flames leaped into the air. "Behold," Prometheus said as warmth pushed back the biting cold. "Fire is more than simple heat. It brings the light of reason, skill, and independence. Use it to warm your children, forge useful tools, and build a better future."' },
      { kind: 'p', text: 'Soon, smoke rose from stone hearths in every valley. The rhythmic sound of iron hammers rang through the olive trees. Humans learned to bake bread, make protective tools, study the night sky, and care for the sick. Families learned how to store dry firewood and build strong wooden cabins. When Zeus looked down and saw village lights shining like stars against the dark earth, his fury shook the heavens. He ordered Prometheus chained to a rocky cliff on Mount Caucasus, where a fierce eagle would torment him every day.' },
      { kind: 'p', text: 'Yet even bound by heavy iron chains against the frozen rock, Prometheus never broke in spirit. When the messenger Hermes offered freedom if he would bow to Zeus, the Titan refused. "I would rather endure this cold cliff than bow to an unjust king who keeps mortals in darkness," Prometheus declared. His sacrifice brought knowledge to the human world, proving that truth and wisdom are worth defending at any cost.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8A', cites: [1, 3, 6],
      stem: 'Which characteristic of classical mythology is most evident in the selection?',
      choices: [
        ['Historical documents record official treaties between early Greek city-states.', 'The selection is a traditional myth rather than an official historical record.'],
        ['Scientific theories explain natural weather events through measurable evidence.', 'The myth explains the origin of fire and tools through divine intervention, not modern science.'],
        'Supernatural beings interact to explain the origins of tools and knowledge.',
        ['An ordinary human traveler solves everyday community problems without gods.', 'The story focuses on a Titan defying the king of the gods on behalf of mortals.'],
      ],
      answer: 2,
      explain: 'Classical myths feature divine and supernatural figures whose actions explain the origin of fundamental human skills, tools, and suffering.',
    }),
    mcq({
      standard: 'rla:8.7B', cites: [2, 4],
      stem: 'What primary motivation drives Prometheus to defy Zeus\'s command?',
      choices: [
        'A desire to relieve human suffering and share the gift of knowledge.',
        ['An ambition to overthrow Zeus and take the golden throne of Olympus.', 'Prometheus does not seek to rule Olympus; he wants to help suffering humans.'],
        ['A wish to prove that his magical powers surpass the skills of Helios.', 'His motive is compassion for mortal misery, not rivalry with other immortals.'],
        ['A hope that humans will build grand temples to honor him exclusively.', 'Prometheus gives fire freely and does not demand worship or temples.'],
      ],
      answer: 0,
      explain: 'Paragraphs 2 and 4 show that Prometheus is motivated by sympathy for human suffering and a belief that knowledge should be shared.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [3],
      stem: 'Based on paragraph 3, what can the reader infer about Zeus\'s view of power?',
      choices: [
        ['Zeus believes that sharing knowledge strengthens divine rule over earth.', 'Zeus refuses to share fire because he fears mortals will become equal to the gods.'],
        ['Zeus is indifferent to mortals and does not care what happens in villages.', 'Zeus actively prevents humans from gaining fire to maintain absolute divine superiority.'],
        ['Zeus worries that humans will accidentally destroy forest lands with fire.', 'His stated concern is that humans will grow proud and challenge the gods.'],
        'Zeus believes maintaining power requires keeping subjects fearful.',
      ],
      answer: 3,
      explain: 'Zeus insists that mortals must stay humble and shivering in caverns so that they never challenge his supremacy.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [5, 7],
      stem: 'Which connection can best be made to Prometheus\'s actions in the myth?',
      choices: [
        ['Business owners competing to patent inventions for private profit.', 'Prometheus shared his gift freely at immense personal cost.'],
        'Reformers who risk their own safety to stand up for human rights.',
        ['Athletes striving to win gold medals in international competitions.', 'Athletic rivalry does not reflect moral defiance on behalf of suffering people.'],
        ['Explorers leaving wilderness camps to live in large, wealthy cities.', 'Prometheus accepted punishment rather than seeking comfort or wealth.'],
      ],
      answer: 1,
      explain: 'Prometheus represents the archetype of a courageous reformer who accepts hardship to advance the welfare and freedom of others.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [7],
      stem: 'Which detail from paragraph 7 best supports the idea that Prometheus does not regret his choice?',
      choices: [
        ['When the messenger Hermes offered freedom if he would bow to the king of gods...', 'This describes Hermes\'s proposal rather than Prometheus\'s inner determination.'],
        ['Yet even bound by heavy iron chains against the frozen granite of the mountain...', 'This details the physical restraint imposed on him.'],
        ['He ordered Prometheus chained to a rocky cliff where a fierce eagle attacked...', 'This describes the punishment ordered by Zeus.'],
        '"I would rather endure this cold cliff than bow to an unjust king..."',
      ],
      answer: 3,
      explain: 'Prometheus\'s direct words show that he willingly accepts his punishment rather than submitting to an unjust ruler.',
    }),
    mcq({
      standard: 'rla:8.9A', cites: [5, 7],
      stem: 'What message does the author convey through Prometheus\'s words in paragraph 5?',
      choices: [
        'Knowledge and skills are essential for human growth and freedom.',
        ['Physical strength is the most important trait for human survival.', 'The text emphasizes reason, skill, and learning over raw physical force.'],
        ['Wealth and gold are the true measures of a successful civilization.', 'The passage highlights fire as the source of warmth and progress, not wealth.'],
        ['Rulers should never be questioned under any circumstances or laws.', 'The myth celebrates moral courage in defying an unjust decree.'],
      ],
      answer: 0,
      explain: 'Prometheus explains that fire brings reason, skill, and independence, showing that knowledge empowers human growth.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 3, 4, 5, 6, 7],
      stem: 'Which is the best objective summary of the myth?',
      choices: [
        ['Zeus decides to share the gift of fire with humans after Prometheus explains that mortals will use it to make bronze plows and warm homes.', 'Zeus refuses to give fire to mortals; Prometheus steals it against his will.'],
        'Moved by human suffering, Prometheus steals fire from Olympus for mortals, enduring punishment so human civilization can grow.',
        ['Hephaestus and Hermes capture Prometheus after the Titan accidentally starts a large forest fire across early Mediterranean settlements.', 'Prometheus intentionally brings fire to village elders, not by an accidental blaze.'],
        ['Prometheus realizes that humans are incapable of using fire safely and asks Zeus to extinguish village hearths throughout the valleys.', 'Prometheus remains proud of humanity\'s progress and refuses to back down.'],
      ],
      answer: 1,
      explain: 'This summary covers the main problem, Prometheus\'s action, his punishment, and the lasting benefit to humanity.',
    }),
  ],
});
