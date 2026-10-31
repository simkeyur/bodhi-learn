// Grade 6 persuasive speech: Big Bend Dark Sky Reserve.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const PERSUADE_DARKSKY = makeSet({
  id: 'g6-persuade-darksky',
  grade: 6,
  kind: 'reading',
  title: 'Guardians of the Night: Protecting Our Texas Skies',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-persuade-darksky-p',
    title: 'Guardians of the Night: Protecting Our Texas Skies',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Good evening, members of the town council, esteemed neighbors, and fellow residents of Brewster County. When was the last time you walked outside after twilight, tilted your head upward, and truly looked at the night sky? If you were standing in the heart of Houston, Dallas, or Austin, you would gaze into an amber, hazy dome where only a dozen faint stars manage to pierce the glow of artificial streetlights. But here in Far West Texas, we possess something increasingly rare and precious on this planet: an ocean of pure, velvety darkness illuminated by thousands of blazing stars and the majestic, milky arch of our galaxy.' },
      { kind: 'p', text: 'Yet this pristine natural heritage is in grave jeopardy. Rapid regional growth, unshielded commercial floodlights, and sprawling industrial complexes from expanding metropolitan corridors are creeping relentlessly toward our mountain horizon. If we remain passive, the glorious celestial tapestry that inspired indigenous peoples, Spanish explorers, and early Texas pioneers will be permanently washed out by an artificial orange haze within a single generation. Our children will grow up without ever seeing the dazzling band of the Milky Way arching across the night sky. That is why I urge our town council to pass the Dark Sky Lighting Ordinance and officially join the Greater Big Bend International Dark Sky Reserve.' },
      { kind: 'p', text: 'Why does darkness matter? Some may dismiss our plea as mere nostalgia for stargazing. But excessive artificial light at night is not merely an inconvenience for astronomers; it is an ecological hazard that disrupts vital biological rhythms. Millions of migratory songbirds navigate across Texas each autumn using the celestial patterns of the stars. Blinding skyglow disorients them, drawing them off course into glass towers where thousands perish from fatal collisions.' },
      { kind: 'p', text: 'Furthermore, nocturnal desert wildlife—including the elusive ocelot, Mexican free-tailed bats, kit foxes, and desert elf owls—relies upon natural darkness for hunting, foraging, and predator avoidance. When we flood the desert night with harsh, glare-producing halogen lamps, we shatter delicate food webs that have endured for millennia across the Chihuahuan Desert. Disoriented pollinators fail to locate nocturnal cactus blossoms, and nesting songbirds abandon their roosts under the artificial perpetual twilight.' },
      { kind: 'p', text: 'Opponents often express concern that a dark sky ordinance will cost homeowners and business owners exorbitant sums of money or leave our neighborhoods unsafe. Let me dispel those myths immediately. A dark sky policy does not ask anyone to turn off their security lights or navigate in the dark. Instead, it simply requires "smart lighting": installing simple, inexpensive downward shields on exterior fixtures and switching to warm, amber LED bulbs rather than blinding blue-white lamps.' },
      { kind: 'p', text: 'Downward-directed lighting actually increases nighttime security by directing illumination exactly where our eyes and walking feet need it—on sidewalks, crosswalks, doorways, and residential driveways—while eliminating harsh glare that creates blinding deep shadows where potential hazards could hide. Clear visibility replaces dazzling glare. Moreover, fully shielded fixtures prevent wasted energy from beaming uselessly into the clouds, reducing light pollution while saving our town thousands of taxpayer dollars on electric utility bills every single year.' },
      { kind: 'p', text: 'Fellow citizens, darkness is not an empty void to be conquered with neon bulbs; it is half of the natural world. If we fail to act tonight, we will rob our children of the awe-inspiring experience of looking into the infinite cosmos from their own front yards. Vote yes on the Dark Sky Ordinance. Let Brewster County shine as a beacon of wisdom by keeping our desert nights dark and glorious.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8E.i', cites: [2],
      stem: 'What action is the speaker urging the town council to take?',
      choices: [
        ['Shut off all electrical power to Brewster County after nine o\'clock at night.', 'The speaker advocates for smart shielded lighting, not shutting off all power.'],
        ['Prohibit tourists from visiting Big Bend National Park during autumn months.', 'Tourism is not targeted for restriction.'],
        'Adopt the Dark Sky Lighting Ordinance to join the Greater Big Bend International Dark Sky Reserve.',
        ['Replace streetlights with incandescent gas lanterns from the nineteenth century.', 'The speaker recommends modern amber LED bulbs with shields.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 clearly states the speaker\'s call to action: "urge our council to pass the Dark Sky Lighting Ordinance and officially join the Greater Big Bend International Dark Sky Reserve."',
    }),
    twoq({
      standard: 'rla:6.8E.ii', cites: [3, 4],
      a: {
        prompt: 'Part A: What ecological evidence does the speaker provide to support the need for night darkness?',
        choices: [
          'Artificial light disorients migratory birds that navigate by stars and disrupts nocturnal hunting patterns.',
          ['Excessive light causes desert temperatures to rise above one hundred degrees at night.', 'Temperature increases are not attributed to light in the text.'],
          ['Streetlights cause flash floods by heating up cloud formations.', 'Light pollution does not create flash floods.'],
          ['Bats refuse to eat mosquitoes unless city streetlights are painted green.', 'Bats require darkness for natural foraging.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"When was the last time you walked outside after twilight..." (paragraph 1)', 'This is an introductory rhetorical hook.'],
          '"Blinding skyglow disorients them, drawing them off course into glass towers where thousands perish from fatal collisions." (paragraph 3)',
          ['"Let me dispel those myths immediately." (paragraph 5)', 'This introduces the counterargument about costs.'],
          ['"Vote yes on the Dark Sky Ordinance." (paragraph 7)', 'This is the closing call to action.'],
        ],
        answer: 1,
      },
      explain: 'In paragraph 3, the speaker explains that millions of birds use star patterns to migrate; blinding artificial skyglow throws them off course, causing fatal building collisions.',
    }),
    mcq({
      standard: 'rla:6.9G', cites: [1],
      stem: 'Why does the speaker begin the speech by asking: "When was the last time you walked outside after twilight, tilted your head upward, and truly looked at the night sky?"',
      choices: [
        'To engage listeners emotionally and prompt them to reflect on the beauty and rarity of their local night sky.',
        ['To test whether the council members have memorized the constellations.', 'The speaker is not testing astronomical trivia.'],
        ['To criticize residents for staying awake past their bedtimes.', 'The question is not a criticism of sleep habits.'],
        ['To announce an upcoming telescope raffle sponsored by the high school.', 'There is no raffle mentioned in the speech.'],
      ],
      answer: 0,
      explain: 'The opening rhetorical question draws the audience into the speech by encouraging them to visualize the awe of a clear night sky compared to light-polluted cities.',
    }),
    mcq({
      standard: 'rla:6.9A', cites: [5, 6],
      stem: 'How does the speaker address the counterargument that darkness makes neighborhoods unsafe in paragraphs 5 and 6?',
      choices: [
        ['By admitting that crime rates will inevitably rise if lighting is reduced.', 'The speaker argues safety will improve, not decrease.'],
        'By explaining that downward-shielded lights eliminate blinding glare and illuminate walking paths more effectively.',
        ['By suggesting that police officers wear night-vision goggles while on patrol.', 'Night-vision equipment is not suggested in the speech.'],
        ['By claiming that burglars are afraid of the dark and will stay indoors.', 'The speaker makes no such claim.'],
      ],
      answer: 1,
      explain: 'The speaker explains that downward-directed lights eliminate blinding glare and shadowy hiding spots, focusing light directly where people walk and thus improving safety.',
    }),
    msq({
      standard: 'rla:6.9F', cites: [1, 7],
      stem: 'Which **two** phrases from the speech convey the speaker\'s passionate and reverent voice?',
      choices: [
        '"ocean of pure, velvety darkness illuminated by thousands of blazing stars"',
        ['"members of the town council, esteemed neighbors"', 'This is a standard formal greeting.'],
        '"darkness is not an empty void to be conquered with neon bulbs; it is half of the natural world"',
        ['"fifteen miles southwest of the county seat"', 'This is a factual geographical phrase.'],
        ['"taxpayer dollars on electric utility bills"', 'This is a practical financial detail.'],
      ],
      answers: [0, 2],
      explain: 'These vivid, poetic metaphors express the speaker\'s deep emotional reverence for the natural wonder of dark skies.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [5],
      stem: 'Read this sentence from paragraph 5: "Opponents often express concern that a dark sky ordinance will cost homeowners and business owners **exorbitant** sums of money..." What does **exorbitant** mean?',
      choices: [
        ['surprisingly tiny or insignificant', 'Exorbitant describes an extreme high, not a tiny low.'],
        'unreasonably high or excessive',
        ['fairly calculated and expected', 'The word carries a negative connotation of being far too high.'],
        ['donated by charitable foundations', 'The concern is that residents will have to pay the costs themselves.'],
      ],
      answer: 1,
      explain: 'Exorbitant means unreasonably high or exceeding the bounds of moderation, describing costs that opponents fear will be excessive.',
    }),
        mcq({
      standard: 'rla:6.8E.i', cites: [2, 7],
      stem: 'Which statement best expresses the speaker\'s overarching claim?',
      choices: [
        'Brewster County should adopt a dark sky lighting ordinance to protect wildlife, reduce energy waste, and preserve the natural night sky.',
        ['City streetlights should be removed completely from all Texas highways.', 'The speaker advocates for shielded downward lighting, not removing all lights.'],
        ['Tourists must pay an admission fee to look at constellations in Far West Texas.', 'The speech argues for preserving public night skies for everyone.'],
        ['Astronomers should relocate their observatories to other countries.', 'The speech seeks to protect local stargazing and astronomy in Texas.'],
      ],
      answer: 0,
      explain: 'The speaker\'s main claim is that Brewster County should pass the Dark Sky Ordinance to preserve the night sky, protect ecosystems, and cut energy waste.',
    }),
  ],
});
