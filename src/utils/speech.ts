// Audio player & Speech manager with natural studio voice priority & synthesis fallback

class KidSpeechEngine {
  public speechRate: number = 0.9;
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
        // Audio file missing or failed to load, return false
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

  // Speak letter using natural studio voice
  public speakLetter(letter: string, onEnd?: () => void) {
    const char = letter.toUpperCase();
    const url = `/audio/letters/${char}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak phonics sentence
  public speakPhonics(letter: string, _exampleWord?: string, onEnd?: () => void) {
    const char = letter.toUpperCase();
    const url = `/audio/letters/phonics_${char}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak whole word
  public speakWord(word: string, onEnd?: () => void) {
    const clean = word.toUpperCase().replace(/[^A-Z]/g, '');
    const url = `/audio/words/${clean}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak spelling: "B... A... L... L... Ball!"
  public speakSpelling(word: string, onEnd?: () => void) {
    const clean = word.toUpperCase().replace(/[^A-Z]/g, '');
    const url = `/audio/words/spelling_${clean}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak number (1-20)
  public speakNumber(num: number, onEnd?: () => void) {
    const url = `/audio/numbers/${num}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak story page
  public speakStoryPage(storyId: string, pageIndex: number, onEnd?: () => void) {
    const url = `/audio/stories/${storyId}_p${pageIndex}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Speak phrase
  public speakPhrase(phraseId: string, onEnd?: () => void) {
    const url = `/audio/phrases/${phraseId}.mp3`;
    this.playAudio(url, () => {
      onEnd?.();
    });
  }

  // Smart fallback speak
  public speak(text: string, onEnd?: () => void) {
    if (!this.speechEnabled || typeof window === 'undefined') {
      onEnd?.();
      return;
    }

    const trimmed = text.trim();

    // Check if it's a number 1-20
    const num = parseInt(trimmed, 10);
    if (!isNaN(num) && num >= 1 && num <= 20 && String(num) === trimmed) {
      this.speakNumber(num, onEnd);
      return;
    }

    // Check if it's a single letter A-Z
    if (/^[A-Za-z]$/.test(trimmed)) {
      this.speakLetter(trimmed, onEnd);
      return;
    }

    // Check if it's a single word in our audio library
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

    // Check if it's a phonics sentence "A is for Apple"
    const phonicsMatch = trimmed.match(/^([A-Za-z]) is for /i);
    if (phonicsMatch) {
      this.speakPhonics(phonicsMatch[1], undefined, onEnd);
      return;
    }

    // Fallback to browser SpeechSynthesis if not in natural audio library
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
