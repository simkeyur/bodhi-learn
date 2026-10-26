// Grade 7 realistic fiction: Echoes in the Piney Woods.
import { makeSet, mcq, twoq } from '../author.ts';

export const FICTION_STORM = makeSet({
  id: 'g7-fiction-storm',
  grade: 7,
  kind: 'reading',
  title: 'Echoes in the Piney Woods',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-fiction-storm-p',
    title: 'Echoes in the Piney Woods',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'The towering loblolly pines and ancient sweetgums of the vast Davy Crockett National Forest swayed rhythmically against an ominous, bruised slate-gray East Texas autumn sky. Twelve-year-old Marcus checked the dampened magnetic compass resting steadily in the palm of his hand, carefully aligning the floating red needle with magnetic north before cross-referencing the compass housing with his folded topographical trail map. Beside him in the shadowed understory, his eleven-year-old sister, Hannah, shivered involuntarily as the ambient afternoon temperature plunged more than fifteen degrees in a matter of minutes, heralding an aggressive, fast-moving blue norther cold front surging down from the Great Plains.' },
      { kind: 'p', text: '"Marcus, the trail markers ended half a mile back near that flooded creek bed," Hannah pointed out, her voice trembling slightly above the rising wind. "The ranger station said the marked loop would lead us directly back to the campground pavilion, but all these dense pine thickets look identical."' },
      { kind: 'p', text: 'Marcus concealed his own mounting anxiety behind a confident, steady demeanor. During their morning briefing with the youth forestry corps, the head ranger had emphasized a fundamental wilderness rule: panic is a navigator\'s deadliest adversary. When disorientation strikes in dense timber, trust your instruments and read the natural terrain rather than blindly rushing forward into the briars.' },
      { kind: 'p', text: '"We aren\'t lost, Hannah; we\'re just temporarily off the footpath," Marcus reassured her calmly. "Look closely at the topography map. See this tight contour line where the elevation drops into a narrow gorge? That\'s Neches Bluff. If we maintain a steady bearing of two hundred and forty degrees west-southwest, we will intercept the logging fire road that borders the southern park boundary."' },
      { kind: 'p', text: 'As they navigated carefully through the spongy, fragrant carpet of damp fallen pine needles and thickets of thorny blackberry briars, heavy raindrops began pattering relentlessly against the dense forest canopy overhead. Low thunder rumbled like distant heavy artillery across the densely wooded pine ridges. Hannah struggled to scramble up a slippery red-clay embankment, suddenly losing her footing on a slick, rain-soaked cedar root and sliding backward. Marcus quickly dropped down onto one knee in the mud, extended his sturdy carved oak hiking staff, and anchored himself firmly to hoist her safely up onto the level sandstone ridge above.' },
      { kind: 'p', text: '"Step by step," Marcus coached, pointing toward the undergrowth. "Watch the tree bark, too. In these dense woods, moss and lichens grow most abundantly on the sheltered northern and northeastern trunks where direct sun cannot dry the damp bark. Nature provides secondary compasses if you know how to observe."' },
      { kind: 'p', text: 'Hannah nodded, her initial fear transforming into focused concentration. Together, brother and sister moved with disciplined pace through the darkening forest, using the magnetic compass for direction and the moss patterns to confirm their alignment. Suddenly, through a dense thicket of palmetto fronds, the rain parted to reveal a gravel roadway and the bright yellow reflectors of a parked forestry service truck.' },
      { kind: 'p', text: 'Ranger Davis stepped out from the cab, waving his flashlight toward the sodden timberline with an expression of immense relief. As Hannah sprinted forward into the warm shelter of the vehicle, Marcus paused at the tree line, glancing back into the deep shadows of the swaying pines. He had not merely survived an unexpected wilderness challenge; by mastering his fear and trusting his knowledge, he had unlocked the ancient confidence of a true navigator.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [1, 3],
      stem: 'How does the author use the sudden drop in temperature and approaching storm in paragraph 1 to develop the plot?',
      choices: [
        'The rapid weather change establishes an immediate external conflict that heightens the urgency of the characters\' navigation challenge.',
        ['The storm forces the rangers to cancel all camping trips permanently.', 'The rangers are searching for the lost hikers, not closing the entire park.'],
        ['The cold front causes Marcus to abandon his compass and run aimlessly through the timber.', 'Marcus remains composed, uses his compass, and reads the terrain.'],
        ['The lightning storm causes a forest fire that blocks the main campground exit.', 'Rain and wind occur, but no fire breaks out.'],
      ],
      answer: 0,
      explain: 'The sudden cold front and impending storm introduce a ticking clock and external danger that immediately elevate suspense and test the characters\' skills.',
    }),
    mcq({
      standard: 'rla:7.7B', cites: [3, 4, 6],
      stem: 'How do Marcus\'s actions and dialogue reveal his character qualities during the crisis?',
      choices: [
        ['Marcus shows that he is easily irritated by his sister\'s questions and prefers to hike alone.', 'Marcus is supportive, patient, and protects his sister throughout the ordeal.'],
        'Marcus demonstrates emotional maturity, steady leadership, and practical wilderness knowledge that calm his sister and ensure their safe return.',
        ['Marcus pretends to know the trail but secretly relies on luck to stumble upon the road.', 'He systematically calculates bearings, reads contour lines, and uses natural bark clues.'],
        ['Marcus values speed over safety, urging his sister to sprint through the rain.', 'He advises her to move step-by-step with disciplined focus.'],
      ],
      answer: 1,
      explain: 'Marcus stays composed, applies ranger training, calms Hannah, and guides them systematically using navigational instruments and terrain analysis.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [4, 6],
      stem: 'Which detail from the text best supports the claim that Marcus relies on scientific reasoning rather than guesswork to navigate?',
      choices: [
        ['"\'Marcus, the trail markers ended half a mile back...\'"', 'This is Hannah\'s observation of their lost position, not proof of Marcus\'s scientific reasoning.'],
        ['"Thunder rolled like distant artillery across the wooded ridges."', 'This is a figurative description of the weather, not navigational reasoning.'],
        'Marcus calculates a bearing of 240 degrees using topographic contour lines and observes moss growth on the sheltered northern bark of tree trunks to verify their heading.',
        ['"Ranger Davis stepped out from the cab, waving his flashlight..."', 'This describes the ranger\'s rescue action, not Marcus\'s navigational technique.'],
      ],
      answer: 2,
      explain: 'Paragraphs 4 and 6 detail Marcus\'s concrete scientific methods: topographic contour analysis, bearing measurement, and biological moss orientation.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3, 8],
      a: {
        prompt: 'Part A: What internal transformation does Marcus experience during their journey through the woods?',
        choices: [
          'He shifts from hiding internal insecurity behind a brave front to possessing genuine, earned confidence in his own capabilities and judgment.',
          ['He decides that exploring nature is too hazardous and vows never to enter national forests again.', 'His final reflection shows pride and a deep connection to navigation, not avoidance.'],
          ['He realizes that mechanical instruments are completely useless in dense forests.', 'The compass and map are essential to their safe return.'],
          ['He determines that he should pursue a career as an airline pilot rather than a park ranger.', 'The text reflects on wilderness confidence, not aviation careers.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best illustrates the internal transformation identified in Part A?',
        choices: [
          ['"Marcus checked the magnetic compass resting in the palm of his hand..." (paragraph 1)', 'This describes a routine physical action at the start.'],
          '"He had not merely survived an unexpected wilderness challenge; by mastering his fear and trusting his knowledge, he had unlocked the ancient confidence of a true navigator." (paragraph 8)',
          ['"Marcus concealed his own mounting anxiety behind a confident, steady demeanor." (paragraph 3)', 'This describes his early insecurity and pretense of confidence.'],
          ['"\'Step by step,\' Marcus coached, pointing toward the undergrowth." (paragraph 6)', 'This shows him guiding Hannah, but paragraph 8 expresses his internal transformation.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 3 shows Marcus concealing his fear, while paragraph 8 confirms he achieved authentic, enduring self-reliance through practical mastery.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 2, 5],
      stem: 'How does the East Texas Piney Woods setting function as an antagonist in the story?',
      choices: [
        ['The setting provides clear landmarks and paved paths that make navigation effortless.', 'The text notes identical pine thickets and missing trail markers.'],
        'The dense, uniform pine thickets, obscured trails, and slippery mud embankments create physical obstacles that test the characters\' endurance and navigational skills.',
        ['The forest animals actively attack the children as they hike along the river bluff.', 'No aggressive animals appear; the obstacles are terrain, rain, and disorientation.'],
        ['The national forest is completely flat and dry, making compass readings impossible.', 'The forest features slippery bluffs, rainstorms, and dense vegetation.'],
      ],
      answer: 1,
      explain: 'The repetitive timber stands, lack of clear landmarks, sudden rainfall, and slick topography serve as the primary external challenges the characters must conquer.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [3, 8],
      stem: 'Which universal human experience is best reflected in Marcus and Hannah\'s dilemma?',
      choices: [
        ['The frustration of dealing with broken electronic devices during vacations.', 'The characters use traditional analog maps and compasses.'],
        'The struggle to remain calm and apply knowledge when faced with confusing and frightening circumstances.',
        ['The difficulty of choosing between athletic sports and scientific hobbies.', 'The dilemma is strictly focused on surviving disorientation in the wilderness.'],
        ['The challenge of persuading adults to believe teenagers\' complaints.', 'The rangers are supportive and relieved when the children arrive safely.'],
      ],
      answer: 1,
      explain: 'The core human connection is the universal challenge of controlling panic, maintaining focus, and methodically applying reasoned knowledge during an unexpected crisis.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [4, 5, 6, 7],
      stem: 'Which statement provides an objective summary of how Marcus and Hannah navigate to safety?',
      choices: [
        'Marcus uses a topographical map to identify Neches Bluff, establishes a west-southwest compass bearing toward a border road, confirms direction using moss growth, and leads his sister to a park ranger\'s truck.',
        ['Hannah discovers a forgotten gravel road while searching for wild berries, and she calls for Marcus to follow her through the storm.', 'Marcus determines the route using maps and compass, not a berry search.'],
        ['Ranger Davis tracks the children\'s muddy footprints with search dogs and carries them back to the camp.', 'The children reach the road under Marcus\'s own navigational guidance.'],
        ['Marcus and Hannah build an emergency pine-bough shelter to wait out the thunderstorm until morning.', 'They actively hike toward the perimeter road and reach safety that afternoon.'],
      ],
      answer: 0,
      explain: 'This choice accurately and objectively summarizes the sequence of navigational decisions and actions that brought the siblings to safety.',
    }),
  ],
});
