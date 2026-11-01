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
        ['Hungry garden birds eat Mr. Henderson\'s pepper seedlings, so Maya builds a tall scarecrow from garden straw.', 'Birds do not destroy the pepper plants, and Maya does not build a scarecrow.'],
        'Maya worries her seeds will not sprout, but by following Mr. Henderson\'s advice, she grows tall flowers.',
        ['The recreation center closes for the summer, forcing Maya to replant her flowers in her own yard.', 'The recreation center garden remains open and Maya tends her plot there all spring.'],
        ['Maya runs out of cool water for her garden plot, so Mr. Henderson lets her share his garden hose.', 'Maya faithfully carries her green cans of water and does not need to borrow a hose.'],
      ],
      answer: 1,
      explain: 'Maya worries that her seeds will not sprout, but by following Mr. Henderson\'s advice on watering and patience, tall sunflowers bloom.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does Mr. Henderson help Maya in the story?',
      choices: [
        'He encourages her to be patient and explains how roots develop beneath the soil.',
        ['He digs up her garden plot and replants all twelve sunflower seeds in neat rows.', 'Maya plants her own seeds and cares for her plot herself.'],
        ['He gives her a bag of chemical fertilizer to make the stalks grow faster.', 'Mr. Henderson explains that seeds need water, sun, and patience rather than chemical fertilizer.'],
        ['He promises to water her garden bed whenever she is busy with afternoon schoolwork.', 'Maya visits her plot each afternoon after school and tends it diligently.'],
      ],
      answer: 0,
      explain: 'Mr. Henderson encourages Maya when she feels discouraged, explaining that roots grow deep before leaves appear.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [3],
      stem: 'What can the reader infer about Maya from paragraph 3?',
      choices: [
        ['She is tired of carrying heavy water cans and wants to quit gardening.', 'Maya works carefully every evening without complaining or wanting to quit.'],
        'She is dedicated and takes responsible care of her young plants.',
        ['She hopes her sunflowers will grow faster than Mr. Henderson\'s herbs.', 'Maya focuses on caring for her seeds rather than competing with Mr. Henderson.'],
        ['She prefers to stay inside the recreation center until evening comes.', 'Maya visits her plot each afternoon after school and tends it diligently.'],
      ],
      answer: 1,
      explain: 'Carrying watering cans every evening and covering the soil with straw shows that Maya is hardworking and responsible.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [4],
      stem: 'Which detail from paragraph 4 shows that the sunflowers grew well?',
      choices: [
        ['Small green sprouts poked through the straw covering the soil on a Monday in April.', 'Sprouts poking through the straw showed early growth, but not full maturity.'],
        ['Maya ran to the garden plot right after school to check the dark soil.', 'Maya running to the garden describes her actions rather than the health of the flowers.'],
        ['Mr. Henderson walked over to inspect the wooden garden plot.', 'Mr. Henderson is not mentioned inspecting the plot in paragraph 4.'],
        'The green stalks grew taller than Maya and produced giant yellow blossoms.',
      ],
      answer: 3,
      explain: 'Paragraph 4 notes that the stalks grew taller than Maya and formed giant yellow flowers with visiting bees and birds.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [2, 5],
      stem: 'What can the reader learn by connecting paragraph 2 with paragraph 5?',
      choices: [
        ['Sunflower blossoms must always be harvested before they grow taller than the gardener.', 'Maya cuts a flower as a gift of gratitude, not because tall stalks must be trimmed.'],
        'Listening to thoughtful advice and staying patient can lead to rewarding results.',
        ['Gardeners should never plant seeds unless they have older neighbors to help them.', 'The story highlights helpful mentorship, but does not suggest children cannot garden.'],
        ['Vegetables require much more attention and water than flowering plants.', 'The story focuses on the patience needed for sunflowers rather than comparing workload.'],
      ],
      answer: 1,
      explain: 'Connecting Mr. Henderson\'s words on patience with Maya\'s proud harvest gift shows that listening to advice and staying patient brings rewarding results.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains why seeds take time to grow?',
      choices: [
        ['"In early March, she planted twelve sunflower seeds in the dark soil behind the recreation center in Austin."', 'This sentence appears in paragraph 1, not paragraph 2.'],
        '"Roots must grow strong deep underground before green leaves can reach toward the sun."',
        ['"For two whole weeks, Maya saw only dark dirt."', 'This sentence describes what Maya saw, but does not explain the biological reason seeds take time.'],
        ['"She walked over to Mr. Henderson\'s front porch and set the jar on his small wooden table."', 'This sentence appears in paragraph 5, not paragraph 2.'],
      ],
      answer: 1,
      explain: 'Mr. Henderson explains that roots must first establish themselves deeply underground before green leaves can reach toward the sun.',
    }),
  ],
});
