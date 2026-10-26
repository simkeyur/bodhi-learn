// Grade 8 realistic fiction: Echoes of the Canyon (non-linear plot, flashback, foreshadowing)
import { makeSet, mcq } from '../author.ts';

export const FICTION_CANYON = makeSet({
  id: 'g8-fiction-canyon',
  grade: 8,
  kind: 'reading',
  title: 'Echoes of the Canyon',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-fiction-canyon-p',
    title: 'Echoes of the Canyon',
    genre: 'fiction',
    blocks: [
      { kind: "p", text: "Fourteen-year-old Maya rested her calloused palms against the sun-baked sandstone ledge of Palo Duro Canyon, feeling the steady thrum of warm wind rising from the gorge floor four hundred feet below. Red and ochre strata banded the cliffs like layers of an ancient sedimentary tapestry, sculpted by millions of years of relentless prairie river runoff. Her field pack felt twice as heavy as it had at dawn, loaded with geological survey markers, a compass, and water flasks. The dry August heat made the distant canyon rim shimmer in rippling waves, but it was not the physical strain that caused her knuckles to whiten against the rock." },
      { kind: "p", text: "Across the jagged draw, dark, bruised thunderheads were quietly gathering on the northwestern horizon. Most casual hikers would have dismissed the distant gray veil as heat haze, but Maya recognized the peculiar sulfur scent carried on the sudden updraft. Her grandfather had always warned her that storms in the Texas panhandle arrived without polite announcements, turning bone-dry creek beds into turbulent red torrents within minutes." },
      { kind: "p", text: "Three years earlier, during her very first expedition with Abuelo Tom\u00e1s into the Caprock escarpment, a sudden cloudburst had trapped them against a limestone bluff. Maya had panicked as brown floodwater rose past her ankles, churning with broken juniper limbs and sharp gravel. Abuelo Tom\u00e1s had gripped her shoulder with quiet firmness, guiding her step by step up a concealed buffalo path to higher ground. \"The canyon does not negotiate with fear, Maya,\" he had spoken calmly over the roar of rushing water. \"It respects only patience, observation, and respect for its natural rhythms. When the sky darkens, look for the shelf where the roots anchor deep.\"" },
      { kind: "p", text: "Now, standing on the narrow ridge known as the Spanish Skirts, Maya glanced back down the winding trail. Two inexperienced college hikers whom she had passed an hour earlier were still strolling casually along the canyon floor, pausing to take panoramic selfies near the dry wash of Prairie Dog Town Fork. They were entirely oblivious to the dropping barometric pressure and the subtle shift in birdcalls, as swallows abandoned the canyon rim to seek shelter in deep crevices." },
      { kind: "p", text: "Maya checked her watch. The hike down would take twenty minutes, but climbing back up to the rim road with two strangers in tow would take at least forty-five. If the rain struck while they were still in the canyon wash, the flash flood would give them no escape route. Her instinct shouted at her to hustle up the trail to the safety of the park headquarters, where her mother was waiting with the survey truck. Yet the memory of Abuelo Tom\u00e1s's calm guidance pulled her back like an anchor." },
      { kind: "p", text: "Turning on her boot heel, Maya descended the steep gravel switchbacks with rapid, surefooted strides. Loose shale rattled down the incline ahead of her, but her balance remained steady. When she reached the wash, the two young men looked startled as she approached with breathless urgency. \"We need to climb out right now,\" she announced, pointing to the bruised clouds overhead. \"The drainage basin covers forty square miles; when it rains up on the plains, the water funnels straight into this gorge before you even hear thunder.\"" },
      { kind: "p", text: "At first, the hikers hesitated, glancing skeptically at the sun overhead. But as the first cool gust rushed through the canyon carrying the distinct odor of wet dust, the sky suddenly bruised into deep indigo. A low rumble echoed off the sandstone ramparts. Recognizing the authority in her voice and the shifting environment, they scrambled after Maya up the limestone ridge path just as the first heavy raindrops struck the dust, following her along the secure high shelf where the ancient juniper roots held fast." },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.7C', cites: [3],
      stem: 'How does the flashback in paragraph 3 contribute to the development of the plot?',
      choices: [
        ['It explains why Maya decided to become a professional surveyor in Palo Duro Canyon.', 'The flashback focuses on a childhood storm experience, not her future career.'],
        "It reveals the origin of Maya's survival knowledge and explains her calm, decisive leadership during the crisis.",
        ["It shows that Maya's grandfather frequently criticized her lack of outdoor preparation.", 'Her grandfather provided supportive, calm instruction rather than harsh criticism.'],
        ['It foreshadows that the college hikers will refuse to cooperate with Maya\'s warnings.', 'The flashback provides Maya with wisdom; the hikers ultimately choose to follow her.'],
      ],
      answer: 1,
      explain: "Paragraph 3 describes Maya's previous experience with a flash flood and her grandfather's guidance, which explains why she understands the canyon's dangers and knows how to lead others to safety.",
    }),
    mcq({
      standard: 'rla:8.6C', cites: [4],
      stem: 'Which text evidence from paragraph 4 best supports the idea that the college hikers lack outdoor awareness?',
      choices: [
        ['"Maya checked her watch."', "This describes Maya's actions, not the behavior of the hikers."],
        ['"Her instinct shouted at her to hustle up the trail..."', "This highlights Maya's internal conflict, not the hikers' awareness."],
        'They were strolling casually along the canyon floor taking selfies, oblivious to the dropping pressure and fleeing birds.',
        ['"Red and ochre strata banded the cliffs like layers of an ancient sedimentary tapestry..."', 'This describes the canyon scenery rather than the hikers.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 states that the hikers were casually taking selfies on the floor of the wash, oblivious to warning signs like changing barometric pressure and fleeing birds.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [5],
      stem: 'What can the reader infer about Maya based on her decision in paragraph 5?',
      choices: [
        'She prioritizes the safety and welfare of others over her own convenience and personal comfort.',
        ['She enjoys proving that she possesses superior wilderness survival skills compared to adults.', 'Her motivation is rooted in responsibility and compassion, not pride.'],
        ['She feels resentful toward her mother for assigning her surveying tasks in hot weather.', 'There is no resentment toward her mother expressed in the passage.'],
        ['She worries that park rangers will punish her if the hikers suffer injuries in the canyon.', "Her choice is guided by her grandfather's values, not fear of park authorities."],
      ],
      answer: 0,
      explain: 'Maya could have easily rushed to the safety of the truck, but she chose to turn around and risk her own safety to help two unaware strangers.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 3, 4, 5, 6, 7],
      stem: 'Which is the best objective summary of the selection?',
      choices: [
        ["While surveying Palo Duro Canyon, Maya watches distant thunderheads and decides to return to her mother's truck before the storm breaks.", 'This omits the central conflict and resolution regarding warning and rescuing the hikers.'],
        ['Maya recalls a past flash flood with her grandfather and realizes she does not enjoy hiking alone in West Texas canyons.', 'Maya demonstrates competence and confidence throughout the story rather than dislike for hiking.'],
        ['Two tourists become lost in Palo Duro Canyon until park rangers launch a rescue mission during an intense prairie thunderstorm.', 'Maya rescues the tourists herself before park rangers are involved.'],
        "While hiking in Palo Duro Canyon, Maya detects an incoming storm, recalls her grandfather's flood survival lessons, and turns back to guide two oblivious hikers to high ground before the wash floods.",
      ],
      answer: 3,
      explain: "This summary captures all major elements: Maya's observation of the storm, the memory of her grandfather's wisdom, and her deliberate action to guide the hikers safely out of danger.",
    }),
    mcq({
      standard: 'rla:8.7A', cites: [3, 7],
      stem: 'How does the author develop the theme of intergenerational wisdom throughout the passage?',
      choices: [
        ['By illustrating how modern technology like weather apps replaces traditional knowledge.', "Maya relies on her grandfather's experiential wisdom rather than electronic devices."],
        "By demonstrating how the grandfather's advice directly guides Maya to make courageous and life-saving choices years later.",
        ["By contrasting Maya's reckless behavior with her grandfather's excessive caution.", "Maya is disciplined and careful, mirroring her grandfather's character."],
        ['By suggesting that young people can only learn practical outdoor skills in formal training courses.', 'Maya learned through lived experience and mentorship in the canyon with family.'],
      ],
      answer: 1,
      explain: "The story shows that Abuelo Tomás's teachings about patience and observing nature's rhythms empower Maya to save lives during a sudden environmental crisis.",
    }),
    mcq({
      standard: 'rla:8.7B', cites: [6],
      stem: 'What motivates Maya to speak with such firm urgency when addressing the hikers in paragraph 6?',
      choices: [
        ['She is irritated that they interrupted her geological surveying schedule.', 'Her motivation is protective concern, not annoyance about her work schedule.'],
        ['She wants to hurry so she can reach the park cafeteria before it closes.', 'Her focus is entirely on impending flood danger.'],
        'She understands the rapid and devastating nature of flash floods in canyon drainage basins.',
        ['She hopes the hikers will give her a ride back to the park headquarters.', 'Maya is leading them on foot up a known trail to high ground.'],
      ],
      answer: 2,
      explain: 'Maya understands that the forty-square-mile drainage basin funnels water into the gorge without warning, making rapid evacuation imperative.',
    }),
    mcq({
      standard: 'rla:8.7C', cites: [2],
      stem: "How does the author's use of foreshadowing in paragraph 2 heighten the story's suspense?",
      choices: [
        'The description of the gathering thunderheads and sulfur scent hints at the impending danger of a flash flood before it occurs.',
        ['The mention of the grandfather hints that he will arrive unexpectedly to rescue Maya.', 'The grandfather does not physically appear in the current timeline.'],
        ['The reference to heat haze suggests that the hikers will suffer from severe heat exhaustion.', 'The conflict centers on an incoming deluge, not heat exhaustion.'],
        ['The details about dry creek beds suggest that the survey equipment will be permanently lost.', 'The survey gear is secondary to the human stakes of the flood.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 highlights the dark clouds and sulfur smell, signaling the rapid approach of a dangerous panhandle storm and creating tension.',
    }),
  ],
});
