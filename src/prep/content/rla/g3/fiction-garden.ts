// Grade 3 fiction: Maya and her community garden project in East Austin.
// Word count: ~310 words (range 250-650).
// Questions cover character relationships (3.8B), plot sequence & resolution (3.8C),
// inference (3.6F), key ideas (3.6G), synthesize (3.6H), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const FICTION_GARDEN = makeSet({
  id: 'g3-fiction-garden',
  grade: 3,
  kind: 'reading',
  title: 'The Sunflower Surprise',
  intro: 'Read the story and choose the best answer to each question.',
  passages: [{
    id: 'g3-fiction-garden-p',
    title: 'The Sunflower Surprise',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Maya checked her wooden garden plot every afternoon after walking home from Maple Elementary. In early March, she had planted a dozen striped sunflower seeds in the dark, composted soil behind the neighborhood recreation center in Austin. Her elderly neighbor, Mr. Henderson, tended the neighboring garden bed where rows of bell peppers and fragrant cilantro grew neatly.' },
      { kind: 'p', text: 'For two whole weeks, nothing appeared above the surface except dark dirt. Maya began to worry that hungry sparrows had dug up her seeds. "Do not give up hope so quickly, Maya," Mr. Henderson said gently, leaning on his garden spade. "Seeds need warmth, moisture, and plenty of patience. Roots must grow strong deep underground before green leaves can reach toward the sun."' },
      { kind: 'p', text: 'Taking his advice, Maya carried two green watering cans every evening, soaking the dry soil gently so the seeds would not wash away. She also spread a light blanket of straw over the bed to keep the Texas heat from drying out the moisture.' },
      { kind: 'p', text: 'On the third Monday of April, Maya gasped when she reached the garden. Tiny green sprouts with two rounded leaves had poked through the straw like miniature green umbrellas! By June, the green stalks had shot up taller than Maya herself. Giant golden flower heads turned toward the morning sun, attracting buzzing bumblebees and yellow goldfinches.' },
      { kind: 'p', text: 'Maya clipped the largest bright yellow blossom and placed it in a glass jar. She walked over to Mr. Henderson\'s porch and set the jar on his table. "Thank you for teaching me about patience," she said with a proud grin.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.8C', cites: [2, 3, 4],
      stem: 'What is the main problem Maya faces in the story, and how is it resolved?',
      choices: [
        ['Insects destroy all of Mr. Henderson\'s peppers, so Maya plants new ones.', 'The insects do not destroy the pepper plants.'],
        'Maya worries her sunflower seeds will never sprout, but by following Mr. Henderson\'s advice on watering and patience, tall sunflowers bloom.',
        ['The recreation center closes down, so the garden must be moved.', 'The recreation center garden remains open.'],
        ['Maya loses her watering can in the creek, so she buys a new hose.', 'Maya uses her green watering cans every evening.'],
      ],
      answer: 1,
      explain: 'Maya is discouraged when no sprouts appear after two weeks. With Mr. Henderson\'s guidance on deep root growth and diligent watering, the seeds thrive.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does the relationship between Maya and Mr. Henderson change from the beginning to the end of the story?',
      choices: [
        ['They argue about who owns the garden plot and stop speaking to each other.', 'They have a supportive, warm relationship throughout.'],
        'Mr. Henderson acts as a wise mentor who encourages Maya, and she shows her gratitude by gifting him her finest sunflower.',
        ['Maya teaches Mr. Henderson how to plant vegetable seeds.', 'Mr. Henderson is the experienced gardener who teaches Maya.'],
        ['They compete against each other in a citywide flower contest.', 'They cooperate peacefully in adjacent garden beds.'],
      ],
      answer: 1,
      explain: 'Mr. Henderson shares thoughtful gardening wisdom with Maya when she is discouraged, and at the end Maya expresses her deep appreciation with a harvested sunflower.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [3],
      stem: 'What can the reader infer about Maya based on paragraph 3?',
      choices: [
        ['She is careless and forgets to take care of her chores.', 'She carries two watering cans every evening.'],
        'She is dedicated, hardworking, and takes responsible care of her plants.',
        ['She wishes she had planted tomatoes instead of flowers.', 'Her goal is to grow sunflowers.'],
        ['She dislikes spending time outdoors in the garden.', 'She visits the garden daily after school.'],
      ],
      answer: 1,
      explain: 'Hauling two watering cans every evening and spreading protective straw demonstrates responsibility, dedication, and active effort.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [4],
      stem: 'Which detail from paragraph 4 shows that the sunflower plants became healthy and mature?',
      choices: [
        'The green stalks grew taller than Maya, and giant golden flower heads attracted bees and goldfinches.',
        ['Maya gasped when she first walked to the garden.', 'This describes Maya\'s surprise upon seeing initial sprouts.'],
        ['Tiny green sprouts poked through the straw like miniature umbrellas.', 'This describes early young seedlings.'],
        ['Mr. Henderson leaned on his wooden spade.', 'This occurs in paragraph 2.'],
      ],
      answer: 0,
      explain: 'Stalks growing taller than Maya with giant golden blossoms and visiting wildlife show that the sunflowers reached full, healthy maturity.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [2, 5],
      stem: 'When the reader synthesizes Mr. Henderson\'s advice in paragraph 2 with Maya\'s actions in paragraph 5, what new understanding emerges?',
      choices: [
        ['Sunflowers are easier to grow than bell peppers in Texas.', 'The texts focus on patience and growth, not vegetable comparisons.'],
        ['Gardening always costs too much money and requires special tools.', 'The garden uses simple compost, seeds, and watering cans.'],
        'True growth often happens unseen beneath the surface before visible success and rewarding relationships bloom.',
        ['Elderly neighbors prefer eating sunflower seeds over fresh peppers.', 'Maya gifts a flower blossom to show gratitude.'],
      ],
      answer: 2,
      explain: 'Synthesizing the lesson of unseen roots growing deep before blossoming with Maya\'s gift demonstrates that patience and mentorship yield lasting rewards.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains why seeds take time before they can sprout above ground?',
      choices: [
        '"Roots must grow strong deep underground before green leaves can reach toward the sun."',
        ['"Maya checked her wooden garden plot every afternoon..."', 'This is from paragraph 1.'],
        ['"Maya clipped the largest bright yellow blossom..."', 'This describes harvesting in paragraph 5.'],
        ['"Taking his advice, Maya carried two green watering cans..."', 'This describes watering in paragraph 3.'],
      ],
      answer: 0,
      explain: 'Mr. Henderson explicitly states that roots must develop deeply below ground before leaves can emerge into the sunlight.',
    }),
  ],
});
