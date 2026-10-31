// Grade 8 persuasive: Lifeline of the Hill Country: Protecting the Edwards Aquifer
import { makeSet, mcq } from '../author.ts';

export const PERSUADE_DARKSKY = makeSet({
  id: 'g8-persuade-darksky',
  grade: 8,
  kind: 'reading',
  title: 'Lifeline of the Hill Country: Protecting the Edwards Aquifer',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-persuade-darksky-p',
    title: 'Lifeline of the Hill Country: Protecting the Edwards Aquifer',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Every morning, millions of people across Central Texas turn on the kitchen tap. Cool, clear water fills their drinking glasses. Most families never think about where that water begins. It comes from the Edwards Aquifer. The aquifer is a huge underground storehouse of water beneath the limestone hills. It provides drinking water for large cities like Austin and San Antonio. It waters crops on family farms and cattle ranches. It also feeds famous natural swimming holes like Barton Springs and Comal Springs. Yet this vital water source faces grave danger. Rapid growth and spreading roads now threaten the recharge zone that keeps the aquifer clean and full.' },
      { kind: 'p', text: 'The greatest danger comes from the unique rock layers of the Hill Country. The Edwards Aquifer sits inside karst limestone. This rock is soft and full of cracks, sinkholes, and open caves. In many other places, thick layers of sand and clay slowly filter rainwater for decades before it reaches deep wells. Karst limestone does not filter water at all. Rain falling on the recharge zone rushes straight into underground caves. It moves like water pouring down an open sink drain. When roads and parking lots cover the hills, oil from cars, weed killers from lawns, and mud from building sites wash directly into our drinking supply.' },
      { kind: 'p', text: 'Critics of water rules claim that strict zoning laws hurt local businesses. Some land developers argue that limits on concrete and asphalt slow down job creation and raise home prices. They say that landowners should have the right to build whatever they want on their own property. They insist that cities should not block commercial growth with heavy rules.' },
      { kind: 'p', text: 'This argument sets up a false choice between a healthy environment and a strong economy. In truth, clean water is the foundation of every strong community. If toxic waste ruins our water supply, cleaning it will cost billions of dollars in new water plants. If wells run dry, cities must order strict water rationing. That hurts restaurants, hotels, and local shops. Home values fall when water cannot be guaranteed. Smart growth protects both our health and our wallet. Builders can use porous paving stones that let rain soak into the ground. They can also plant green drainage swales to catch dirty runoff.' },
      { kind: 'p', text: 'Forward-looking Texas cities have already shown that protection works. San Antonio voters approved plans to buy land rights over sensitive areas. Under these voluntary land deals, family ranchers receive fair pay while continuing to raise cattle. In return, the open land can never be paved over for mega-malls or large subdivisions. This partnership keeps open grasslands clear so clean rain can soak into the ground.' },
      { kind: 'p', text: 'Protecting the aquifer also protects rare animals that live nowhere else on Earth. Tiny blind salamanders, cave fish, and small snails live in the dark cave waters. Biologists view these creatures as an early warning system. When pollution harms these sensitive animals, it tells us that our own drinking water is at risk.' },
      { kind: 'p', text: 'Guarding the Edwards Aquifer is a shared job for everyone in Central Texas. City councils and county leaders must set buffer zones around recharge caves. They must also ban chemical storage over sensitive rocks. Every family can help by using less lawn chemical spray and fixing car oil leaks. Water is our most precious resource. By protecting our aquifer today, we guarantee fresh, clean water for our children tomorrow.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8E.i', cites: [1, 2],
      stem: 'What is the primary argument the author presents in the selection?',
      choices: [
        ['Cities should shut down all public swimming pools to conserve water.', 'The author does not advocate closing swimming pools, but safeguarding the source.'],
        'Communities must protect the recharge zone to ensure clean water.',
        ['The state should replace natural springs with underground concrete tanks.', 'The author values natural springs and argues for preserving them.'],
        ['Farmers should stop raising cattle across the central Texas hill country.', 'The author notes that working ranches help preserve open recharge land.'],
      ],
      answer: 1,
      explain: 'The author argues that communities must enact policies to protect the recharge zone and ensure pure water for future generations.',
    }),
    mcq({
      standard: 'rla:8.8E.ii', cites: [3],
      stem: 'Which counterargument does the author address in paragraph 3?',
      choices: [
        ['Ranchers argue that cattle cannot survive on natural rainfall alone.', 'Ranching concerns are not the opposing argument presented in paragraph 3.'],
        ['Biologists claim that subterranean salamanders do not need clean water.', 'Biologists emphasize the importance of clean water for wildlife in paragraph 6.'],
        ['Engineers assert that water treatment plants eliminate all pollutants.', 'Water treatment plant costs are addressed in paragraph 4, not paragraph 3.'],
        'Critics claim that strict zoning rules damage economic growth.',
      ],
      answer: 3,
      explain: 'Paragraph 3 outlines the objection from developers that environmental limits harm jobs and raise housing costs.',
    }),
    mcq({
      standard: 'rla:8.8E.iii', cites: [1, 7],
      stem: 'Who is the primary intended audience for the author\'s persuasive selection?',
      choices: [
        'Citizens and civic leaders who make regional water policies.',
        ['Tourists visiting Central Texas natural swimming springs for vacation.', 'The essay focuses on long-term civic policy rather than vacation tourism.'],
        ['Scientists studying oceanic hydrothermal vents in the Pacific ocean.', 'The focus is on Central Texas groundwater rather than oceanic geology.'],
        ['Contractors manufacturing specialized concrete for highway bridges.', 'The argument addresses general water stewardship and public zoning rules.'],
      ],
      answer: 0,
      explain: 'The author directly addresses residents and local leaders who decide environmental and developmental rules.',
    }),
    mcq({
      standard: 'rla:8.9G', cites: [4],
      stem: 'Which logical fallacy does the author expose and refute in paragraph 4?',
      choices: [
        ['Bandwagon appeal suggesting that everyone already uses porous pavement.', 'The author argues on principle rather than claiming everyone is already doing it.'],
        ['Ad hominem attacks criticizing the personal habits of land developers.', 'The author analyzes economic impacts rather than attacking developers personally.'],
        'False choice claiming communities must pick between ecology and jobs.',
        ['Circular reasoning arguing that clean water is clean because it is pure.', 'The author provides substantive economic evidence rather than circular logic.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 rejects the false choice between nature and business, explaining that clean water underpins economic success.',
    }),
    mcq({
      standard: 'rla:8.5C', cites: [1, 2],
      stem: 'Based on the introduction, what can the reader predict about the selection?',
      choices: [
        ['The selection will describe how ancient civilizations built stone aqueducts.', 'The text deals with modern aquifer conservation rather than ancient history.'],
        'The text will explain why the aquifer is at risk and propose solutions.',
        ['The passage will prove that Central Texas will soon run out of building stone.', 'The passage focuses on groundwater protection rather than quarry supplies.'],
        ['The article will encourage city residents to dig their own personal wells.', 'The author promotes community stewardship rather than drilling private wells.'],
      ],
      answer: 1,
      explain: 'The opening paragraphs identify the threat to the aquifer, predicting an explanation of its risks and conservation remedies.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [2],
      stem: 'Which detail from paragraph 2 best explains why the aquifer is vulnerable to pollution?',
      choices: [
        ['Rainfall in Central Texas occurs mostly during heavy spring thunder squalls.', 'This describes rainfall timing rather than how pollution enters the rock.'],
        ['Layers of sand and clay filter rainwater over centuries in other regions.', 'This explains other geographic areas that have natural filtration systems.'],
        ['Limestone hills provide gravel for highway construction projects statewide.', 'Limestone usage is not the reason the aquifer is prone to contamination.'],
        'Karst limestone has cracks and caves that allow runoff to enter directly.',
      ],
      answer: 3,
      explain: 'Paragraph 2 highlights that karst rock allows dirty runoff to pour directly into caves without filtration.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [5],
      stem: 'What can the reader infer from paragraph 5 about voluntary land agreements?',
      choices: [
        'They protect sensitive land without forcing ranchers to abandon operations.',
        ['They require ranchers to sell their cattle herds to municipal governments.', 'Ranchers maintain their cattle operations under the agreements.'],
        ['They have prevented city voters from supporting regional water initiatives.', 'San Antonio voters specifically approved funding for these programs.'],
        ['They force private landowners to construct public hiking trails on pastures.', 'The agreements protect open land rather than creating mandatory trails.'],
      ],
      answer: 0,
      explain: 'Paragraph 5 notes that ranchers receive payment while continuing to raise cattle, keeping the land open without stopping ranch operations.',
    }),
    mcq({
      standard: 'rla:8.8E.i', cites: [5, 6],
      stem: 'How does the author use evidence in paragraphs 5 and 6 to support the central claim?',
      choices: [
        ['By arguing that state agencies should permanently ban all ranching across central Texas.', 'The author praises ranching partnerships rather than banning agriculture.'],
        ['By asserting that Barton Springs should be closed to swimmers during summer months.', 'The author highlights the springs as beloved public recreation, not something to close.'],
        'By showing that conservation protects taxpayer money and vital water supplies.',
        ['By suggesting that underground limestone aquifers will naturally replenish without any human oversight.', 'The text emphasizes that active protection and monitoring are essential.'],
      ],
      answer: 2,
      explain: 'Paragraphs 5 and 6 provide evidence that conservation avoids costly treatment plants and safeguards drinking supplies and springs.',
    }),
  ],
});
