import React, { useState, useEffect } from 'react';
import { SIGHT_WORDS, type SightWord } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

interface SightWordsWorldProps {
  onBack: () => void;
}

export const SightWordsWorld: React.FC<SightWordsWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const [activeLevel, setActiveLevel] = useState<'pre-k' | 'kindergarten' | 'grade1'>(ageBracket);

  const filteredWords = SIGHT_WORDS.filter((w) => w.level === activeLevel);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentWord: SightWord = filteredWords[currentIndex] || filteredWords[0] || SIGHT_WORDS[0];

  // Letter Builder State
  const [scrambledLetters, setScrambledLetters] = useState<{ id: string; char: string; used: boolean }[]>([]);
  const [placedLetters, setPlacedLetters] = useState<{ id: string; char: string }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize or reset current word puzzle
  const setupWordPuzzle = (wordObj: SightWord) => {
    setIsCompleted(false);
    setPlacedLetters([]);

    const chars = wordObj.word.split('').map((char, index) => ({
      id: `${char}-${index}-${Math.random()}`,
      char,
      used: false,
    }));

    // Shuffle characters
    const shuffled = [...chars].sort(() => 0.5 - Math.random());
    setScrambledLetters(shuffled);

    speech.speak(wordObj.word);
  };

  useEffect(() => {
    if (currentWord) {
      setupWordPuzzle(currentWord);
    }
  }, [currentIndex, activeLevel]);

  const handlePickLetter = (item: { id: string; char: string; used: boolean }) => {
    if (item.used || isCompleted) return;

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
        speech.speak(`You spelled ${currentWord.word}! Awesome job!`);
      } else {
        sound.playGentleTryAgain();
        speech.speak(`Oops! Let's try spelling ${currentWord.word} again.`);
        setTimeout(() => {
          // Reset placed
          setScrambledLetters((prev) => prev.map((l) => ({ ...l, used: false })));
          setPlacedLetters([]);
        }, 1200);
      }
    }
  };

  const handleRemovePlaced = (placedItem: { id: string; char: string }) => {
    if (isCompleted) return;
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
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Nav & Level Selection */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 24,
      }}>
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white" style={{ padding: '10px 18px', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back to Hub
        </button>

        {/* Level Tabs */}
        <div style={{
          display: 'flex',
          gap: 8,
          background: '#FFFFFF',
          padding: 6,
          borderRadius: 999,
          boxShadow: 'var(--shadow-playful)',
        }}>
          {(['pre-k', 'kindergarten', 'grade1'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                sound.playPop();
                setActiveLevel(lvl);
                setCurrentIndex(0);
              }}
              className={`kid-btn ${activeLevel === lvl ? 'btn-grape' : 'btn-white'}`}
              style={{
                padding: '8px 16px',
                fontSize: '0.95rem',
                borderRadius: 999,
                textTransform: 'capitalize',
              }}
            >
              {lvl.replace('-', ' ')}
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
        padding: '36px 24px',
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
            className="kid-btn btn-white"
            style={{ width: 48, height: 48, padding: 0, borderRadius: '50%' }}
            title="Previous word"
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
            className="kid-btn btn-white"
            style={{ width: 48, height: 48, padding: 0, borderRadius: '50%' }}
            title="Next word"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Word Display & Audio */}
        <div style={{ fontSize: '4.5rem', marginBottom: 10 }}>{currentWord.emoji}</div>
        
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          background: '#FAF5FF',
          border: '3px solid #E9D5FF',
          padding: '12px 28px',
          borderRadius: 999,
          marginBottom: 20,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.8rem',
            fontWeight: 700,
            color: '#6B21A8',
            letterSpacing: '0.12em',
          }}>
            {currentWord.word}
          </span>

          <button
            onClick={() => {
              sound.playPop(650);
              speech.speak(`${currentWord.word}. ${currentWord.exampleSentence}`);
            }}
            className="speaker-bubble"
            title="Hear word & sentence"
          >
            <Volume2 size={24} />
          </button>
        </div>

        <p style={{
          fontSize: '1.25rem',
          color: '#475569',
          fontWeight: 600,
          marginBottom: 28,
        }}>
          "{currentWord.exampleSentence}"
        </p>

        {/* Puzzle: Tap Letters to Build Word */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: 'var(--radius-md)',
          padding: '24px 16px',
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
            fontSize: '1.1rem',
            marginBottom: 16,
          }}>
            <Sparkles size={18} color="#9333EA" />
            <span>Tap the letters below to spell the word!</span>
          </div>

          {/* Word Target Slots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 24,
            minHeight: 70,
          }}>
            {Array.from({ length: currentWord.word.length }).map((_, idx) => {
              const placed = placedLetters[idx];
              return (
                <div
                  key={idx}
                  onClick={() => placed && handleRemovePlaced(placed)}
                  style={{
                    width: 64,
                    height: 70,
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
                </div>
              );
            })}
          </div>

          {/* Letter Bank (Scrambled) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            {scrambledLetters.map((l) => (
              <button
                key={l.id}
                onClick={() => handlePickLetter(l)}
                disabled={l.used || isCompleted}
                style={{
                  width: 64,
                  height: 64,
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
            <div style={{ marginTop: 24 }} className="animate-pop">
              <div style={{
                color: '#16A34A',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                marginBottom: 12,
              }}>
                🎉 Star Earned! Awesome Job! 🎉
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

          {!isCompleted && placedLetters.length > 0 && (
            <button
              onClick={() => setupWordPuzzle(currentWord)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748B',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 18,
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={14} /> Clear & Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
