// Audio player & Speech manager with natural studio voice priority & synthesis fallback

const EXCLAMATIONS = [
  'woohoo',
  'yay',
  'hurray',
  'yippee',
  'super',
  'awesome',
  'bingo',
  'high_five',
  'you_rock',
  'shining_star',
];

const RETRY_PHRASES = [
  'oops_try_again',
  'almost_there',
  'not_quite',
  'count_again',
  'keep_trying',
];

class KidSpeechEngine {
  public speechRate: number = 0.85;
  public speechPitch: number = 1.15;
  public speechEnabled: boolean = true;
  private currentAudio: HTMLAudioElement | null = null;

  // Direct Audio Playback for Natural Studio MP3s
  public playAudio(url: string, onEnd?: () => void): boolean {
    if (!this.speechEnabled || typeof window === 'undefined') {
      onEnd?.();
      return false;
    }

    try {
      this.stop();
      const audio = new Audio(url);
      audio.playbackRate = this.speechRate;
      this.currentAudio = audio;

      audio.onended = () => {
        this.currentAudio = null;
        onEnd?.();
      };

      audio.onerror = () => {
        this.currentAudio = null;
        onEnd?.();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.currentAudio = null;
          onEnd?.();
        });
      }
      return true;
    } catch {
      return false;
    }
  }

  // Play a sequence of audio clips seamlessly
  public playSequence(urls: string[], onEnd?: () => void) {
    if (!urls.length) {
      onEnd?.();
      return;
    }
    const [first, ...rest] = urls;
    this.playAudio(first, () => {
      this.playSequence(rest, onEnd);
    });
  }

  // Play a random joyful exclamation: "Woohoo!", "Yay!", "Hurray!", "Yippee!"
  public playExclamation(onEnd?: () => void) {
    const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
    this.playAudio(`/audio/exclamations/${randomExcl}.mp3`, onEnd);
  }

  // Play a random gentle encouraging retry phrase
  public playRetry(onEnd?: () => void) {
    const randomRetry = RETRY_PHRASES[Math.floor(Math.random() * RETRY_PHRASES.length)];
    this.playAudio(`/audio/phrases/${randomRetry}.mp3`, onEnd);
  }

  // Speak letter using natural studio voice
  public speakLetter(letter: string, onEnd?: () => void) {
    const char = letter.toUpperCase();
    const url = `/audio/letters/${char}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak phonics sentence
  public speakPhonics(letter: string, _exampleWord?: string, onEnd?: () => void) {
    const char = letter.toUpperCase();
    const url = `/audio/letters/phonics_${char}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak whole word
  public speakWord(word: string, onEnd?: () => void) {
    const clean = word.toUpperCase().replace(/[^A-Z]/g, '');
    const url = `/audio/words/${clean}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak spelling: "A, P, P, L, E. ... Apple."
  public speakSpelling(word: string, onEnd?: () => void) {
    const clean = word.toUpperCase().replace(/[^A-Z]/g, '');
    const url = `/audio/words/spelling_${clean}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak number (1-20)
  public speakNumber(num: number, onEnd?: () => void) {
    const url = `/audio/numbers/${num}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak math equation: "What is 3 plus 4?"
  public speakMathEquation(num1: number, op: 'plus' | 'minus', num2: number, onEnd?: () => void) {
    const clips = [
      '/audio/math/what_is.mp3',
      `/audio/numbers/${num1}.mp3`,
      `/audio/math/${op}.mp3`,
      `/audio/numbers/${num2}.mp3`,
    ];
    this.playSequence(clips, onEnd);
  }

  // Speak story page
  public speakStoryPage(storyId: string, pageIndex: number, onEnd?: () => void) {
    const url = `/audio/stories/${storyId}_p${pageIndex}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Speak phrase
  public speakPhrase(phraseId: string, onEnd?: () => void) {
    const url = `/audio/phrases/${phraseId}.mp3`;
    this.playAudio(url, onEnd);
  }

  // Smart natural speech router with joyful exclamations & gentle feedback
  public speak(text: string, onEnd?: () => void) {
    if (!this.speechEnabled || typeof window === 'undefined') {
      onEnd?.();
      return;
    }

    const trimmed = text.trim();
    const lower = trimmed.toLowerCase();

    // 1. Math Feedbacks
    // Math Wrong / Try Again
    if (lower.includes("count the items together") || (lower.includes("math") && lower.includes("again"))) {
      this.playRetry(onEnd);
      return;
    }
    // Math Correct Answer
    if (lower.includes("that's right") && lower.includes("equals")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/math/math_correct.mp3'], onEnd);
      return;
    }
    // Counting Quiz Wrong / Try Again
    if (lower.includes("count them again") || lower.includes("count carefully")) {
      this.playAudio('/audio/phrases/count_again.mp3', onEnd);
      return;
    }
    // Counting Quiz Correct
    if (lower.includes("there are") && lower.includes("star")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/math/count_correct.mp3'], onEnd);
      return;
    }
    // Counting Completed
    if (lower.includes("great job") && lower.includes("counted all")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/great_job_counting.mp3'], onEnd);
      return;
    }
    if (lower.includes("how many are there") || lower.includes("how many items")) {
      this.playAudio('/audio/phrases/how_many_quiz.mp3', onEnd);
      return;
    }
    if (lower.includes("tap and count")) {
      this.playAudio('/audio/phrases/tap_and_count_prompt.mp3', onEnd);
      return;
    }
    if (lower.includes("count to")) {
      this.playAudio('/audio/math/tap_and_count.mp3', onEnd);
      return;
    }

    // 2. Math Equation Question check: "What is 3 plus 4?" or "3 plus 4 equals what?"
    const mathMatch = trimmed.match(/what is (\d+) (plus|minus) (\d+)/i) || trimmed.match(/(\d+) (plus|minus) (\d+) equals what/i);
    if (mathMatch) {
      const n1 = parseInt(mathMatch[1], 10);
      const op = mathMatch[2].toLowerCase() as 'plus' | 'minus';
      const n2 = parseInt(mathMatch[3], 10);
      if (n1 >= 1 && n1 <= 20 && n2 >= 1 && n2 <= 20) {
        this.speakMathEquation(n1, op, n2, onEnd);
        return;
      }
    }

    // 3. Phonics Quest Prompts & Feedbacks
    const canYouFindMatch = trimmed.match(/can you find the letter ([a-z])/i);
    if (canYouFindMatch) {
      const char = canYouFindMatch[1].toUpperCase();
      this.playSequence(['/audio/phrases/can_you_find.mp3', `/audio/letters/${char}.mp3`], onEnd);
      return;
    }

    const findLetterMatch = trimmed.match(/find the letter ([a-z])/i);
    if (findLetterMatch) {
      const char = findLetterMatch[1].toUpperCase();
      this.playSequence(['/audio/phrases/find_the_letter.mp3', `/audio/letters/${char}.mp3`], onEnd);
      return;
    }

    if (lower.includes("awesome!") && lower.includes("is for")) {
      const charMatch = trimmed.match(/awesome!\s*([a-z])\s*is for/i);
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      if (charMatch) {
        const char = charMatch[1].toUpperCase();
        this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, `/audio/letters/phonics_${char}.mp3`], onEnd);
      } else {
        this.playAudio(`/audio/exclamations/${randomExcl}.mp3`, onEnd);
      }
      return;
    }

    if (lower.includes("try another") || lower.includes("let's find") || lower.includes("that's ")) {
      this.playAudio('/audio/phrases/not_quite.mp3', onEnd);
      return;
    }

    // 4. Spelling & Word Tracing Feedbacks
    if (lower.includes("try spelling") || lower.includes("oops! let's try")) {
      this.playRetry(onEnd);
      return;
    }
    if (lower.includes("you spelled") && (lower.includes("awesome") || lower.includes("job"))) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/spelling_correct.mp3'], onEnd);
      return;
    }
    if (lower.includes("you spelled and traced") || (lower.includes("outstanding") && lower.includes("star"))) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/you_spelled_word.mp3'], onEnd);
      return;
    }
    if (lower.includes("let us trace") || lower.includes("let's trace")) {
      // Find known word in sentence
      const cleanWords = trimmed.toUpperCase().split(/[^A-Z]+/);
      const foundWord = cleanWords.find((w) => ['APPLE', 'BALL', 'CAT', 'DOG', 'STAR', 'SUN', 'MOON', 'FISH', 'BIRD', 'TREE', 'CAKE', 'BODHI', 'ROCKET', 'MAGIC'].includes(w));
      if (foundWord) {
        this.speakSpelling(foundWord, onEnd);
        return;
      }
    }

    // 5. ABC Tracing Feedbacks
    if (lower.includes("fantastic tracing") || lower.includes("wonderful tracing")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/great_tracing.mp3'], onEnd);
      return;
    }
    if (lower.includes("is for") && lower.includes("trace the letter")) {
      const letterMatch = trimmed.match(/^([A-Za-z]) is for/i);
      if (letterMatch) {
        this.speakPhonics(letterMatch[1], undefined, onEnd);
        return;
      }
    }

    // 6. Gamification & Stories
    if (lower.includes("unlocked") && lower.includes("sticker")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/sticker_unlocked.mp3'], onEnd);
      return;
    }
    if (lower.includes("need") && lower.includes("stars")) {
      this.playAudio('/audio/phrases/sticker_need_stars.mp3', onEnd);
      return;
    }
    if (lower.includes("finished the story") || lower.includes("finished the whole story")) {
      const randomExcl = EXCLAMATIONS[Math.floor(Math.random() * EXCLAMATIONS.length)];
      this.playSequence([`/audio/exclamations/${randomExcl}.mp3`, '/audio/phrases/story_finished.mp3'], onEnd);
      return;
    }

    // 7. Hub Greetings
    if (lower.includes("what would you like to play today") || lower.includes("hello") && lower.includes("stars")) {
      this.playAudio('/audio/phrases/welcome_explorer.mp3', onEnd);
      return;
    }
    if (lower.includes("explore the alphabet")) {
      this.playAudio('/audio/phrases/greet_phonics.mp3', onEnd);
      return;
    }
    if (lower.includes("sight words safari")) {
      this.playAudio('/audio/phrases/greet_sight_words.mp3', onEnd);
      return;
    }
    if (lower.includes("story to read")) {
      this.playAudio('/audio/phrases/greet_stories.mp3', onEnd);
      return;
    }
    if (lower.includes("count together in the meadow")) {
      this.playAudio('/audio/phrases/greet_counting.mp3', onEnd);
      return;
    }
    if (lower.includes("fun visual math")) {
      this.playAudio('/audio/phrases/greet_math.mp3', onEnd);
      return;
    }
    if (lower.includes("sticker playground")) {
      this.playAudio('/audio/phrases/greet_stickers.mp3', onEnd);
      return;
    }
    if (lower.includes("abc tracing journey")) {
      this.playAudio('/audio/phrases/greet_tracing_abc.mp3', onEnd);
      return;
    }
    if (lower.includes("spelling and tracing words")) {
      this.playAudio('/audio/phrases/greet_tracing_words.mp3', onEnd);
      return;
    }

    // 8. Sight Word Example Sentences
    const SIGHT_WORD_SENTENCE_MAP: Record<string, string> = {
      'i see a happy star!': '/audio/sentences/w1.mp3',
      'you can do anything!': '/audio/sentences/w2.mp3',
      'that is a big elephant!': '/audio/sentences/w3.mp3',
      'the apple is bright red.': '/audio/sentences/w4.mp3',
      'the warm sun is shining.': '/audio/sentences/w5.mp3',
      'the cute cat drinks milk.': '/audio/sentences/w6.mp3',
      'i like reading stories.': '/audio/sentences/w7.mp3',
      'let us play together outside!': '/audio/sentences/w8.mp3',
      'twinkle, twinkle little star.': '/audio/sentences/w9.mp3',
      'watch the bunny jump high!': '/audio/sentences/w10.mp3',
      'the sky is clear and blue.': '/audio/sentences/w11.mp3',
      'friends always help each other.': '/audio/sentences/w12.mp3',
      'today is a happy day!': '/audio/sentences/w13.mp3',
      'you are my best friend!': '/audio/sentences/w14.mp3',
      'the rocket flies to the moon!': '/audio/sentences/w15.mp3',
      'the fairy has magic dust!': '/audio/sentences/w16.mp3',
    };
    for (const [key, url] of Object.entries(SIGHT_WORD_SENTENCE_MAP)) {
      if (lower.includes(key)) {
        this.playAudio(url, onEnd);
        return;
      }
    }

    // 9. Single number 1-20
    const num = parseInt(trimmed, 10);
    if (!isNaN(num) && num >= 1 && num <= 20 && String(num) === trimmed) {
      this.speakNumber(num, onEnd);
      return;
    }

    // 10. Single letter A-Z
    if (/^[A-Za-z]$/.test(trimmed)) {
      this.speakLetter(trimmed, onEnd);
      return;
    }

    // 11. Word in our audio library
    const cleanWord = trimmed.toUpperCase().replace(/[^A-Z]/g, '');
    const KNOWN_WORDS = [
      'APPLE', 'BALL', 'CAT', 'DOG', 'STAR', 'SUN', 'MOON',
      'FISH', 'BIRD', 'TREE', 'CAKE', 'BODHI',
      'SEE', 'CAN', 'BIG', 'RED', 'LIKE', 'PLAY', 'JUMP', 'BLUE', 'HELP',
      'HAPPY', 'FRIEND', 'ROCKET', 'MAGIC'
    ];
    if (KNOWN_WORDS.includes(cleanWord) && !trimmed.includes(' ')) {
      this.speakWord(cleanWord, onEnd);
      return;
    }

    // 12. Phonics sentence "A is for Apple"
    const phonicsMatch = trimmed.match(/^([A-Za-z]) is for /i);
    if (phonicsMatch) {
      this.speakPhonics(phonicsMatch[1], undefined, onEnd);
      return;
    }

    // 13. Fallback to browser SpeechSynthesis for any unexpected custom text
    this.stop();
    if (!('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.speechRate;
    utterance.pitch = this.speechPitch;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => (v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Google')))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speech = new KidSpeechEngine();
