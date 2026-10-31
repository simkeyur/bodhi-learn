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
      { kind: 'p', text: 'Good evening, members of the town council, neighbors, and fellow residents of Brewster County. When was the last time you walked outside after twilight, tilted your head up, and truly looked at the night sky? If you were standing in the middle of Houston, Dallas, or Austin, you would see a hazy orange dome. Only a dozen bright stars can shine through the glare of city streetlights. But here in Far West Texas, we have something rare and precious. We have a sea of deep, velvety darkness. Our sky is filled with thousands of bright stars and the glowing band of the Milky Way.' },
      { kind: 'p', text: 'Yet this natural treasure is in danger. Regional growth, bright commercial floodlights, and expanding cities are creeping closer to our mountain horizon. If we do nothing, the night sky that inspired early settlers and pioneers will vanish behind artificial glare. Our children may grow up without ever seeing the band of the Milky Way arching across the night. That is why I urge our town council to pass the Dark Sky Lighting Ordinance and officially join the Greater Big Bend International Dark Sky Reserve.' },
      { kind: 'p', text: 'Why does natural darkness matter? Some people may think this is just about stargazing. But too much artificial light at night is also an ecological hazard. Millions of migrating songbirds fly across Texas each autumn. They navigate by the light of the moon and stars. Bright city lights confuse them, drawing them off course into glass buildings where many birds die in collisions. These songbirds travel thousands of miles every year. They need quiet, dark skies to complete their long journeys safely.' },
      { kind: 'p', text: 'In addition, nocturnal desert wildlife depends on natural darkness to hunt, feed, and hide from predators. Animals such as kit foxes, elf owls, and Mexican free-tailed bats need dark nights to survive. When we flood the desert with harsh halogen lights, we disrupt food chains across the Chihuahuan Desert. Night-flying insects get trapped around glowing bulbs. Pollinators fail to find night-blooming flowers, and nesting birds are disturbed by artificial light that never turns off.' },
      { kind: 'p', text: 'Some critics worry that a dark sky ordinance will cost homeowners and businesses exorbitant sums of money. Others worry it will make our streets unsafe. Let me address those fears directly. A dark sky policy does not ask anyone to turn off security lights or walk in the dark. Instead, it simply requires smart lighting. That means adding downward shields to outdoor lights and using warm amber bulbs instead of glaring blue-white lights.' },
      { kind: 'p', text: 'Downward lighting actually improves nighttime safety. It directs light straight down where our feet and eyes need it most. It lights up sidewalks, crosswalks, doorways, and driveways. At the same time, it removes blinding glare that creates deep shadows where hazards can hide. Shielded lights also prevent wasted light from shining into the sky. This reduces light pollution and saves our town money on electric bills every year. Every dollar saved on power can support local parks, libraries, and schools.' },
      { kind: 'p', text: 'Fellow citizens, nighttime darkness is not an empty space that we must fill with neon lights. It is half of the natural world. If we fail to act tonight, we will take away our children\'s chance to look into the vast cosmos from their own backyards. Vote yes on the Dark Sky Ordinance. Let Brewster County lead the way by keeping our desert skies dark and beautiful.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8E.i', cites: [2],
      stem: 'What action is the speaker urging the town council to take?',
      choices: [
        ['Shut off all electrical power across Brewster County after nine o\'clock at night.', 'The speaker advocates for shielded lighting, not shutting off power.'],
        ['Prohibit tourists from visiting Big Bend National Park during autumn months.', 'Tourism is not targeted for any restriction.'],
        'Pass the Dark Sky Lighting Ordinance to join the Dark Sky Reserve.',
        ['Replace modern electric streetlights with nineteenth-century gas lamps.', 'The speaker recommends modern amber LED bulbs with shields.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 states the call to action: urge the town council to pass the Dark Sky Lighting Ordinance and join the reserve.',
    }),
    twoq({
      standard: 'rla:6.8E.ii', cites: [3, 4],
      a: {
        prompt: 'Part A: What ecological evidence does the speaker provide to support the need for darkness?',
        choices: [
          'Light pollution confuses migrating birds and disrupts nocturnal animals.',
          ['Excessive illumination causes desert temperatures to rise above normal levels.', 'Temperature rises are not attributed to lighting.'],
          ['Bright streetlights cause sudden flash floods by heating up cloud formations.', 'Light pollution does not create flash floods.'],
          ['Bats refuse to consume insect pests unless streetlights are turned green.', 'Bats require natural darkness for feeding.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"If you were standing in the middle of Houston, Dallas, or Austin, you would see a hazy orange dome." (paragraph 1)', 'This describes light pollution in cities, not animal ecology.'],
          '"Bright city lights confuse them, drawing them off course into glass buildings where many birds die in collisions." (paragraph 3)',
          ['"A dark sky policy does not ask anyone to turn off security lights or walk in the dark." (paragraph 5)', 'This addresses homeowner concerns about dark sky policies.'],
          ['"If we fail to act tonight, we will take away our children\'s chance to look into the vast cosmos from their own backyards." (paragraph 7)', 'This is an emotional closing appeal.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 3 explains that bright lights disorient migrating songbirds, steering them into glass buildings where many die in collisions.',
    }),
    mcq({
      standard: 'rla:6.9G', cites: [1],
      stem: 'Why does the speaker begin the speech by asking: "When was the last time you walked outside after twilight, tilted your head up, and truly looked at the night sky?"',
      choices: [
        'To connect with listeners and highlight their local night sky.',
        ['To test whether the council members have memorized the constellations.', 'The speaker is not testing astronomical knowledge.'],
        ['To criticize local residents for staying awake outdoors past midnight.', 'The question is not a criticism of bedtime habits.'],
        ['To announce a telescope raffle sponsored by the local high school club.', 'There is no raffle mentioned in the speech.'],
      ],
      answer: 0,
      explain: 'The opening question engages listeners emotionally by inviting them to appreciate the wonder of a clear night sky.',
    }),
    mcq({
      standard: 'rla:6.9A', cites: [5, 6],
      stem: 'How does the speaker address the counterargument that darkness makes neighborhoods unsafe in paragraphs 5 and 6?',
      choices: [
        ['By admitting that local crime rates will inevitably rise if night lighting is reduced.', 'The speaker argues safety will improve, not decrease.'],
        'By explaining that shielded lights cut glare and light walking paths better.',
        ['By suggesting that local police officers wear night-vision goggles on duty.', 'Night-vision equipment is never mentioned.'],
        ['By claiming that criminals are afraid of darkness and will stay indoors.', 'The speaker makes no such claim.'],
      ],
      answer: 1,
      explain: 'The speaker explains that downward-directed lights eliminate blinding glare and shadows, putting light right on sidewalks and paths.',
    }),
    msq({
      standard: 'rla:6.9F', cites: [1, 7],
      stem: 'Which **two** phrases from the speech convey the speaker\'s reverence for the night sky?',
      choices: [
        '"sea of deep, velvety darkness"',
        ['"members of the town council, neighbors"', 'This is a standard formal greeting.'],
        '"nighttime darkness is not an empty space... it is half of the natural world"',
        ['"fifteen miles southwest of the small town"', 'This is a geographical description.'],
        ['"electric bills every year"', 'This is a financial detail.'],
      ],
      answers: [0, 2],
      explain: 'These vivid, appreciative descriptions express the speaker\'s deep emotional respect and reverence for the beauty of dark skies.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [5],
      stem: 'Read this sentence from paragraph 5: "Some critics worry that a dark sky ordinance will cost homeowners and businesses **exorbitant** sums of money." What does **exorbitant** mean in this sentence?',
      choices: [
        ['surprisingly tiny or insignificant', 'Exorbitant describes an extreme high, not a tiny amount.'],
        'unreasonably high or excessive',
        ['carefully calculated and expected', 'The word carries a negative sense of being far too high.'],
        ['provided by government grants', 'The concern is that residents will have to pay high costs.'],
      ],
      answer: 1,
      explain: 'Exorbitant means unreasonably high or far beyond what is fair or normal.',
    }),
    mcq({
      standard: 'rla:6.8E.i', cites: [2, 7],
      stem: 'Which statement best expresses the speaker\'s main claim?',
      choices: [
        'Brewster County should pass a dark sky ordinance to protect nature and save money.',
        ['City streetlights should be removed completely from all highways across the state of Texas.', 'The speaker advocates for shielded downward lighting, not removing all lights.'],
        ['Tourists must pay an admission fee to view stars in Far West Texas state parks.', 'The speech argues for preserving open night skies for all residents.'],
        ['Astronomers should move their observatories to high mountains in other nations.', 'The speech aims to protect local stargazing and astronomy in Texas.'],
      ],
      answer: 0,
      explain: 'The speaker\'s main claim is that Brewster County should pass the Dark Sky Ordinance to preserve the night sky, protect animals, and save money.',
    }),
  ],
});
