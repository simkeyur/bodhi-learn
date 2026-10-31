// Grade 3 fiction: Maya and her community garden project in East Austin.
// Word count: ~261 words (range 250-650).
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
      { kind: 'p', text: 'Maya checked her wooden garden plot every afternoon after school. In early March, she planted twelve sunflower seeds in the dark soil behind the recreation center in Austin. Her neighbor, Mr. Henderson, worked in the next garden bed. He grew green peppers and sweet herbs in neat rows. Maya liked watching him care for his plants.' },
      { kind: 'p', text: 'For two whole weeks, Maya saw only dark dirt. Nothing was growing yet. She began to worry that hungry birds had dug up her seeds. "Do not give up hope so quickly, Maya," Mr. Henderson said with a warm smile. "Seeds need water, sun, and lots of patience. Roots must grow strong deep underground before green leaves can reach toward the sun."' },
      { kind: 'p', text: 'Maya listened to his helpful words. Every evening, she carried two green cans of cool water to her garden bed. She watered the dry soil softly so the seeds would not wash away. She put a light blanket of straw over the dirt to keep it wet under the hot Texas sun.' },
      { kind: 'p', text: 'One Monday in April, Maya ran to the garden plot. Small green sprouts had poked through the straw! By June, the green stalks were taller than Maya. Giant yellow flowers turned toward the morning sun. Busy bumblebees and little yellow birds flew around the bright blossoms.' },
      { kind: 'p', text: 'Maya cut the biggest yellow flower and put it in a glass jar of water. She walked over to Mr. Henderson\'s front porch and set the jar on his small wooden table. "Thank you for teaching me about patience," she said with a proud grin.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.8C', cites: [2, 3, 4],
      stem: 'What is the main problem Maya faces, and how is it resolved?',
      choices: [
        ['Hungry garden insects eat all of Mr. Henderson\'s pepper plants.', 'The insects do not harm the plants.'],
        'Maya fears seeds failed, but care helps them bloom.',
        ['The recreation center closes, so the children must move their garden.', 'The garden stays open behind the center.'],
        ['Maya drops her watering can in the creek and buys a plastic hose.', 'Maya uses her green watering cans every evening.'],
      ],
      answer: 1,
      explain: 'Maya worries that her seeds will not sprout, but by following Mr. Henderson\'s advice on watering and patience, tall sunflowers bloom.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does Mr. Henderson help Maya in the story?',
      choices: [
        'He encourages Maya to be patient with her seeds.',
        ['He buys new flower seeds at a local hardware store in Austin.', 'Maya already has her seeds planted in March.'],
        ['He tells Maya to pull up her plants and grow sweet corn instead.', 'He encourages her to stick with her sunflowers.'],
        ['He asks Maya to water his pepper plants when he goes on trips.', 'Mr. Henderson offers guidance rather than asking for chores.'],
      ],
      answer: 0,
      explain: 'Mr. Henderson encourages Maya when she feels discouraged, explaining that roots grow deep before leaves appear.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [3],
      stem: 'What can the reader infer about Maya from paragraph 3?',
      choices: [
        ['She forgets to take care of her daily afternoon chores at home.', 'She carries two watering cans every evening.'],
        'She is hardworking and cares for her garden bed.',
        ['She wishes she had planted red tomatoes instead of flowers.', 'Her goal is to grow sunflowers.'],
        ['She prefers staying inside the recreation center on hot days.', 'She waters her plants outside every evening.'],
      ],
      answer: 1,
      explain: 'Carrying watering cans every evening and covering the soil with straw shows that Maya is hardworking and responsible.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [4],
      stem: 'Which detail from paragraph 4 shows that the sunflowers grew well?',
      choices: [
        ['Maya gasped when she first walked into the garden plot.', 'This describes Maya\'s reaction, not the plants.'],
        ['Small green sprouts poked through the straw like umbrellas.', 'This describes early young seedlings.'],
        ['Mr. Henderson leaned on his wooden spade in the next plot.', 'This occurs in paragraph 2.'],
        'The stalks grew taller than Maya with giant flowers.',
      ],
      answer: 3,
      explain: 'Paragraph 4 notes that the stalks grew taller than Maya and formed giant yellow flowers with visiting bees and birds.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [2, 5],
      stem: 'What can the reader learn by connecting paragraph 2 with paragraph 5?',
      choices: [
        ['Growing vegetable plants requires expensive store-bought tools.', 'The garden uses simple compost, seeds, and water.'],
        ['Neighbors should never share gardening advice with young children.', 'Mr. Henderson\'s advice helps Maya succeed.'],
        ['Sunflowers always grow faster than green peppers in Texas soil.', 'The story does not compare the growth speed of different crops.'],
        'Patience and wise advice can lead to great results.',
      ],
      answer: 3,
      explain: 'Connecting Mr. Henderson\'s words on patience with Maya\'s proud harvest gift shows that listening to advice and staying patient brings rewarding results.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains why seeds take time to grow?',
      choices: [
        ['"In early March, she planted twelve sunflower seeds in the dark soil behind the recreation center in Austin."', 'This sentence appears in paragraph 1, not paragraph 2.'],
        ['"She walked over to Mr. Henderson\'s front porch and set the jar on his small wooden table."', 'This sentence appears in paragraph 5, not paragraph 2.'],
        '"Roots must grow strong deep underground before green leaves can reach toward the sun."',
        ['"For two whole weeks, Maya saw only dark dirt."', 'This describes what Maya saw, but does not explain plant biology.'],
      ],
      answer: 2,
      explain: 'Mr. Henderson explains that roots must first establish themselves deeply underground before green leaves can reach toward the sun.',
    }),
  ],
});
