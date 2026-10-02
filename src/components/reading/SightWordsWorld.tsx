import React, { useState, useEffect } from 'react';
import { SIGHT_WORDS, type SightWord } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

const LEVELS = [
  { id: 'pre-k', label: 'Pre-K' },
  { id: 'kindergarten', label: 'K' },
  { id: 'grade1', label: '1st' },
] as const;

interface SightWordsWorldProps {
  onBack: () => void;
}

export const SightWordsWorld: React.FC<SightWordsWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { later, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_sight_words'));
  const [activeLevel, setActiveLevel] = useState<'pre-k' | 'kindergarten' | 'grade1'>(ageBracket);

  const filteredWords = SIGHT_WORDS.filter((w) => w.level === activeLevel);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentWord: SightWord = filteredWords[currentIndex] || filteredWords[0] || SIGHT_WORDS[0];

  // Letter Builder State
  const [scrambledLetters, setScrambledLetters] = useState<{ id: string; char: string; used: boolean }[]>([]);
  const [placedLetters, setPlacedLetters] = useState<{ id: string; char: string }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize or reset current word puzzle
  const setupWordPuzzle = (wordObj: SightWord) => {
    clearAll();
    setIsCompleted(false);
    setIsChecking(false);
    setPlacedLetters([]);

    const chars = wordObj.word.split('').map((char, index) => ({
      id: `${char}-${index}-${Math.random()}`,
      char,
      used: false,
    }));

    // Shuffle characters
    const shuffled = [...chars].sort(() => 0.5 - Math.random());
    setScrambledLetters(shuffled);

    const intro = greeting();
    speech.say([...intro, clip.phrase('tap_letters_to_spell'), clip.word(wordObj.word)]);
  };

  useEffect(() => {
    if (currentWord) {
      setupWordPuzzle(currentWord);
    }
  }, [currentIndex, activeLevel]);

  const handlePickLetter = (item: { id: string; char: string; used: boolean }) => {
    if (item.used || isCompleted || isChecking) return;

    sound.playPop(550);
    const updatedScrambled = scrambledLetters.map((l) => (l.id === item.id ? { ...l, used: true } : l));
    const nextPlaced = [...placedLetters, { id: item.id, char: item.char }];

    setScrambledLetters(updatedScrambled);
    setPlacedLetters(nextPlaced);

    // Check if word is complete
    if (nextPlaced.length === currentWord.word.length) {
      const spelled = nextPlaced.map((p) => p.char).join('');
      if (spelled === currentWord.word) {
        setIsCompleted(true);
        sound.playSuccess();
        addStars(1);
        speech.say([clip.cheer(), clip.spelling(currentWord.word)]);
      } else {
        sound.playGentleTryAgain();
        setIsChecking(true);
        speech.say([clip.phrase('spelling_try_again')]);
        later(() => {
          setScrambledLetters((prev) => prev.map((l) => ({ ...l, used: false })));
          setPlacedLetters([]);
          setIsChecking(false);
        }, 1300);
      }
    }
  };

  const handleRemovePlaced = (placedItem: { id: string; char: string }) => {
    if (isCompleted || isChecking) return;
    sound.playPop(450);
    setPlacedLetters((prev) => prev.filter((p) => p.id !== placedItem.id));
    setScrambledLetters((prev) => prev.map((l) => (l.id === placedItem.id ? { ...l, used: false } : l)));
  };

  const nextWord = () => {
    sound.playPop();
    setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const prevWord = () => {
    sound.playPop();
    setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="page" style={{ maxWidth: 820 }}>
      <div className="world-bar">
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white back-btn" aria-label="Back to home">
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div className="seg">
          {LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => {
                sound.playPop();
                setActiveLevel(lvl.id);
                setCurrentIndex(0);
              }}
              className={`kid-btn ${activeLevel === lvl.id ? 'btn-grape' : 'btn-white'}`}
              aria-pressed={activeLevel === lvl.id}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard & Builder */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '6px solid #C084FC',
        boxShadow: 'var(--shadow-floating)',
        padding: '16px 14px 20px',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Navigation Arrows */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
          <button
            onClick={prevWord}
            className="kid-btn btn-white icon-btn"
            aria-label="Previous word"
          >
            <ArrowLeft size={24} />
          </button>

          <span style={{
            fontSize: '1.1rem',
            fontFamily: 'var(--font-display)',
            color: '#9333EA',
            fontWeight: 700,
          }}>
            Word {currentIndex + 1} of {filteredWords.length}
          </span>

          <button
            onClick={nextWord}
            className="kid-btn btn-white icon-btn"
            aria-label="Next word"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Word Display & Audio */}
        <div style={{ fontSize: '3.6rem', marginBottom: 8 }} aria-hidden>
          {currentWord.emoji}
        </div>

        {isCompleted ? (
          <div className="animate-pop" style={{ marginBottom: 16 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 14,
                background: '#FAF5FF',
                border: '3px solid #E9D5FF',
                padding: '8px 16px 8px 24px',
                borderRadius: 999,
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 9vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#6B21A8',
                  letterSpacing: '0.12em',
                }}
              >
                {currentWord.word}
              </span>

              <button
                onClick={() => {
                  sound.playPop(650);
                  speech.say([clip.word(currentWord.word), clip.sentence(currentWord.id)]);
                }}
                className="speaker-bubble"
                aria-label="Hear the word and sentence"
              >
                <Volume2 size={24} />
              </button>
            </div>

            <p
              style={{
                fontSize: '1.15rem',
                color: '#475569',
                fontWeight: 600,
                margin: '4px 0 0 0',
              }}
            >
              "{currentWord.exampleSentence}"
            </p>
          </div>
        ) : (
          <div style={{ marginBottom: 18 }}>
            <button
              onClick={() => {
                sound.playPop(650);
                speech.say([clip.word(currentWord.word)]);
              }}
              className="kid-btn btn-grape"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 28px',
                fontSize: '1.25rem',
                borderRadius: 999,
                boxShadow: '0 6px 0 #7E22CE',
              }}
              aria-label="Hear the word to spell"
            >
              <Volume2 size={26} />
              <span>Hear Word</span>
            </button>
          </div>
        )}

        {/* Puzzle: Tap Letters to Build Word */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: 'var(--radius-md)',
          padding: '16px 10px',
          border: '3px dashed #CBD5E1',
          maxWidth: 620,
          margin: '0 auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            color: '#64748B',
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: 14,
          }}>
            <Sparkles size={18} color="#9333EA" />
            <span>Tap the letters below to spell the word!</span>
          </div>

          {/* Word Target Slots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 18,
          }}>
            {Array.from({ length: currentWord.word.length }).map((_, idx) => {
              const placed = placedLetters[idx];
              return (
                <button
                  key={idx}
                  onClick={() => placed && handleRemovePlaced(placed)}
                  disabled={!placed}
                  aria-label={placed ? `Remove ${placed.char}` : 'Empty slot'}
                  style={{
                    flex: '1 1 0',
                    maxWidth: 64,
                    minWidth: 0,
                    height: 68,
                    padding: 0,
                    borderRadius: 16,
                    border: placed ? '3px solid #9333EA' : '3px dashed #94A3B8',
                    background: placed ? '#FAF5FF' : '#FFFFFF',
                    color: '#6B21A8',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: placed ? 'pointer' : 'default',
                    boxShadow: placed ? '0 4px 0 #D8B4FE' : 'none',
                  }}
                  className={placed ? 'animate-pop' : ''}
                >
                  {placed ? placed.char : ''}
                </button>
              );
            })}
          </div>

          {/* Letter Bank (Scrambled) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 10,
          }}>
            {scrambledLetters.map((l) => (
              <button
                key={l.id}
                onClick={() => handlePickLetter(l)}
                disabled={l.used || isCompleted || isChecking}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  border: 'none',
                  background: l.used ? '#E2E8F0' : '#C084FC',
                  color: l.used ? '#94A3B8' : '#FFFFFF',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.3rem',
                  fontWeight: 700,
                  boxShadow: l.used ? 'none' : '0 6px 0 #9333EA',
                  cursor: l.used || isCompleted ? 'default' : 'pointer',
                  transform: l.used ? 'scale(0.92)' : 'none',
                  opacity: l.used ? 0.4 : 1,
                  transition: 'all 0.1s ease',
                }}
              >
                {l.char}
              </button>
            ))}
          </div>

          {/* Completion Celebration / Reset */}
          {isCompleted && (
            <div style={{ marginTop: 18 }} className="animate-pop">
              <div style={{
                color: '#16A34A',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                marginBottom: 12,
              }}>
                🎉 You spelled it! +1 Star!
              </div>
              <button
                onClick={nextWord}
                className="kid-btn btn-grass"
                style={{ padding: '12px 28px', fontSize: '1.2rem' }}
              >
                Next Word <ArrowRight size={20} />
              </button>
            </div>
          )}

          {!isCompleted && placedLetters.length > 0 && !isChecking && (
            <button
              onClick={() => { sound.playPop(400); setupWordPuzzle(currentWord); }}
              className="kid-btn btn-white"
              style={{ marginTop: 16, fontSize: '1rem' }}
            >
              <RotateCcw size={18} /> Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
