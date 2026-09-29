// Web Speech API text-to-speech manager for phonics, reading, and encouragement

class KidSpeechEngine {
  public speechRate: number = 0.9; // Slightly slower for crisp clarity for kids
  public speechPitch: number = 1.15; // Slightly warmer/friendly pitch
  public speechEnabled: boolean = true;

  public speak(text: string, onEnd?: () => void) {
    if (!this.speechEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    // Cancel any current utterance before speaking new text
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.speechRate;
    utterance.pitch = this.speechPitch;

    // Pick an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => (v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Google') || v.name.includes('Natural')))
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

  public speakPhonics(letter: string, exampleWord: string) {
    this.speak(`${letter}. ${letter} is for ${exampleWord}!`);
  }

  public stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speech = new KidSpeechEngine();
