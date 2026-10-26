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
      { kind: "p", text: "In the golden dawn of classical antiquity, before cities of stone crowned the Aegean hills, the Titan Prometheus looked down from the heights of Mount Olympus upon the mortal inhabitants of the earth. Unlike the Olympian gods, who reclined on gossamer clouds sipping nectar and demanding obsequious worship, Prometheus saw humankind shivering in cold, damp caverns. Mortals burrowed like terrified rodents beneath the forest loam, prey to predatory beasts of the night, gnawing raw roots and freezing when winter ice locked the valleys in bitter silence." },
      { kind: "p", text: "Prometheus's heart ached with profound compassion for these fragile creatures of clay. He approached Zeus, king of the gods, whose throne crackled with lightning bolts and cosmic pride. \"Great Zeus,\" Prometheus urged, bowing his head in formal reverence, \"mankind perishes in darkness and misery. Bestow upon them the gift of fire. With flame, they will forge bronze plowshares to harvest the wheat, warm their hearths against winter frost, cook nourishing food, and illuminate the mysteries of science and the arts.\"" },
      { kind: "p", text: "Zeus's brow darkened like a gathering thunderstorm, and his eyes flashed with ruthless divine wrath. \"Never!\" thundered the sovereign of Olympus, his voice rumbling across the heavens and shaking the peaks. \"Fire is the divine privilege of the gods alone. If mortals possess fire, they will become proud, master the crafts of metallurgy, build grand monuments, and soon imagine themselves our equals. Let them remain humble, shivering in their caverns, mindful of their fleeting mortality.\"" },
      { kind: "p", text: "Prometheus bowed and retreated, but his mind refused to surrender to the decree of a tyrant. Knowing well that Zeus's vengeance was boundless and merciless, the Titan chose conscience over divine self-preservation. In the dead of night, he crept into the sacred precinct of Olympus where the solar chariot of Helios rested after its daily traverse across the vault of heaven. Prometheus reached into the glowing heart of the celestial axle with a hollow stalk of fennel, concealing a living spark within the pithy center of the reed." },
      { kind: "p", text: "Descending swiftly to earth under the velvet cloak of darkness, Prometheus gathered the trembling elders of the valley. He struck the spark against dry cedar shavings, blowing gently until a vibrant amber flame leaped into life. \"Behold,\" Prometheus proclaimed as warmth banished the creeping chill. \"Fire is not merely heat; it is the spark of knowledge, reason, and independence. Use it to warm your children, forge your tools, and cast light upon the unknown.\"" },
      { kind: "p", text: "Soon, plumes of hearth smoke rose from every village, and the rhythmic clinking of blacksmiths' hammers echoed through the olive groves. Mortals learned to bake bread, forge protective armor, study the stars, and heal their sick. When Zeus looked down and saw mortal settlements shining like constellations against the dark earth, his fury shook the pillars of heaven. Summoning Hephaestus, the divine blacksmith, Zeus ordered Prometheus seized and chained to the craggy precipice of Mount Caucasus, where an eagle would torment him daily." },
      { kind: "p", text: "Yet even bound by unbreakable adamantine chains against the frozen granite, Prometheus remained unbroken in spirit. When Hermes descended to offer release in exchange for submission, the Titan raised his chin with unyielding resolve. \"I would rather endure the fury of the elements than bow to an unjust despot who hoards enlightenment,\" Prometheus declared. His sacrifice illuminated the path of human civilization forever, establishing the eternal truth that wisdom must be shared, regardless of the cost." },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8A', cites: [1, 3, 6],
      stem: 'Which characteristic of classical mythology is most evident in the selection?',
      choices: [
        'Supernatural beings with human traits interact to explain the origins of cultural advancements and human suffering.',
        ['Scientific theories explain natural weather phenomena through observable empirical evidence.', 'The story is mythological, featuring gods and titans rather than empirical science.'],
        ['An ordinary human hero solves everyday community dilemmas without divine intervention.', 'The protagonist is a Titan defying the king of the gods.'],
        ['Factual historical documentation records actual political treaties between early Mediterranean civilizations.', 'The text is a traditional myth, not a factual historical document.'],
      ],
      answer: 0,
      explain: 'Classical myths feature divine and supernatural figures whose actions explain the origin of fundamental human skills, tools, and suffering.',
    }),
    mcq({
      standard: 'rla:8.7B', cites: [2, 4],
      stem: "What primary motivation drives Prometheus to defy Zeus's command?",
      choices: [
        ['A desire to overthrow Zeus and claim the throne of Olympus for himself.', 'Prometheus does not seek power; he seeks relief for suffering humanity.'],
        ['An ambition to prove that his magical powers surpass the craftsmanship of Hephaestus.', 'Craftsmanship competition is not his motive.'],
        'A deep sense of empathy for the suffering of mortals and a conviction that knowledge should be shared.',
        ['A hope that humans will build magnificent temples dedicated exclusively to his worship.', 'Prometheus seeks human enlightenment, not worship or personal temples.'],
      ],
      answer: 2,
      explain: "Paragraphs 2 and 4 show that Prometheus is motivated by compassionate indignation at human suffering and a belief that enlightenment belongs to all.",
    }),
    mcq({
      standard: 'rla:8.5F', cites: [3],
      stem: "Based on paragraph 3, what can the reader infer about Zeus's perspective on power?",
      choices: [
        ['Zeus believes that sharing power strengthens divine authority over mortals.', 'Zeus explicitly refuses to share fire because he fears mortals will become equal.'],
        'Zeus believes that maintaining absolute power requires keeping subjects dependent, ignorant, and fearful.',
        ['Zeus is indifferent to mortals and does not care what happens on earth.', 'Zeus actively prevents humans from gaining fire to maintain superiority.'],
        ['Zeus worries that humans will accidentally destroy the natural environment with fire.', 'His stated concern is that humans will view themselves as divine equals.'],
      ],
      answer: 1,
      explain: 'Zeus insists that mortals must remain humble and shivering in caverns so that they never challenge the sovereignty of the Olympian gods.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [5, 7],
      stem: "Which real-world connection can best be made to Prometheus's sacrifice in the myth?",
      choices: [
        ['Business leaders competing to patent technological discoveries for private profit.', 'Prometheus gave away knowledge freely at great personal cost.'],
        ['Athletes striving to break world records in international sporting events.', 'Athletic competition does not reflect moral defiance on behalf of humanity.'],
        ['Explorers abandoning dangerous wilderness areas to seek comfortable city living.', 'Prometheus endured suffering rather than seeking comfort.'],
        'Whistleblowers and reformers who risk their personal safety and freedom to expose injustice and advance societal welfare.',
      ],
      answer: 3,
      explain: 'Prometheus represents the archetype of a principled figure who accepts punishment to deliver vital truth and advancement to society.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [7],
      stem: "Which text evidence from paragraph 7 best supports the idea that Prometheus does not regret his actions?",
      choices: [
        '"I would rather endure the fury of the elements than bow to an unjust despot who hoards enlightenment," Prometheus declared.',
        ['"When Hermes descended to offer release in exchange for submission..."', "This describes Hermes's offer, not Prometheus's inner defiance."],
        ['"...Zeus ordered Prometheus seized and chained to the craggy precipice of Mount Caucasus..."', "This describes Zeus's punishment."],
        ['"Summoning Hephaestus, the divine blacksmith..."', "This details Zeus's command to another god."],
      ],
      answer: 0,
      explain: "Prometheus's direct quote confirms that he willingly accepts his punishment rather than submitting to tyranny.",
    }),
    mcq({
      standard: 'rla:8.9A', cites: [5, 7],
      stem: "What message does the author convey through Prometheus's proclamation in paragraph 5?",
      choices: [
        ['True power lies in physical domination over weaker populations.', 'The text advocates for knowledge, not domination.'],
        ["Material wealth is the ultimate measure of a civilization's success.", 'The text highlights fire as the catalyst for learning and survival, not wealth.'],
        'Enlightenment and education are fundamental rights that liberate humanity from darkness and oppression.',
        ['Rules established by rulers should never be questioned under any circumstances.', "The entire myth honors Prometheus's moral defiance of an unjust ruler."],
      ],
      answer: 2,
      explain: 'Prometheus explains that fire represents knowledge, reason, and independence, demonstrating that learning frees humanity from misery.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 3, 4, 5, 6, 7],
      stem: 'Which is the most accurate summary of the myth?',
      choices: [
        ["Zeus decides to share the gift of fire with humans after Prometheus convinces him of its benefits during an Olympian council meeting.", 'Zeus emphatically refuses to share fire; Prometheus steals it.'],
        "Pained by human misery, Prometheus defies Zeus's prohibition by stealing celestial fire for mortals, willingly enduring harsh divine punishment to ensure the advancement of human civilization.",
        ['Hephaestus and Hermes work together to capture Prometheus after he accidentally ignites a forest fire across the Aegean islands.', 'Prometheus does not start an accidental fire; he intentionally brings flame to village hearths.'],
        ['Prometheus realizes that humans are incapable of managing fire responsibly and asks Zeus to extinguish their village hearths.', 'Prometheus stands steadfast in defending human enlightenment.'],
      ],
      answer: 1,
      explain: "This choice concisely and accurately captures the myth's premise, inciting incident, climax, and lasting significance.",
    }),
  ],
});
