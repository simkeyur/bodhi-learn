import React, { useState, useEffect } from 'react';
import { ALPHABET_DATA, type PhonicLetter } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, Sparkles, RefreshCw, ArrowLeft } from 'lucide-react';

interface PhonicsWorldProps {
  onBack: () => void;
}

export const PhonicsWorld: React.FC<PhonicsWorldProps> = ({ onBack }) => {
  const { addStars } = useApp();
  const [selectedLetter, setSelectedLetter] = useState<PhonicLetter>(ALPHABET_DATA[0]);
  const [gameMode, setGameMode] = useState<'explore' | 'quest'>('explore');

  // Letter Quest state
  const [questTarget, setQuestTarget] = useState<PhonicLetter>(ALPHABET_DATA[0]);
  const [questOptions, setQuestOptions] = useState<PhonicLetter[]>([]);
  const [questFeedback, setQuestFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');

  const startNewQuest = () => {
    const randomIndex = Math.floor(Math.random() * ALPHABET_DATA.length);
    const target = ALPHABET_DATA[randomIndex];
    setQuestTarget(target);
    setQuestFeedback('idle');

    // Pick 3 distractors
    const others = ALPHABET_DATA.filter((l) => l.letter !== target.letter);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());
    setQuestOptions(options);

    speech.speak(`Can you find the letter ${target.letter}?`);
  };

  useEffect(() => {
    if (gameMode === 'quest') {
      startNewQuest();
    }
  }, [gameMode]);

  const handleLetterClick = (item: PhonicLetter) => {
    setSelectedLetter(item);
    sound.playPop();
    speech.speakPhonics(item.letter, item.word);
  };

  const handleQuestSelect = (item: PhonicLetter) => {
    if (item.letter === questTarget.letter) {
      sound.playSuccess();
      setQuestFeedback('correct');
      addStars(1);
      speech.speak(`Awesome! ${item.letter} is for ${item.word}!`);
      setTimeout(() => {
        startNewQuest();
      }, 1500);
    } else {
      sound.playGentleTryAgain();
      setQuestFeedback('try-again');
      speech.speak(`That's ${item.letter}. Let's find ${questTarget.letter}!`);
    }
  };

  return (
    <div style={{ maxWidth: 1050, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Bar with Mode Switch */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 24,
      }}>
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="kid-btn btn-white"
          style={{ padding: '10px 18px', fontSize: '1rem' }}
        >
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <div style={{
          display: 'flex',
          gap: 10,
          background: '#FFFFFF',
          padding: 6,
          borderRadius: 999,
          boxShadow: 'var(--shadow-playful)',
        }}>
          <button
            onClick={() => {
              sound.playPop();
              setGameMode('explore');
            }}
            className={`kid-btn ${gameMode === 'explore' ? 'btn-sky' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1.05rem', borderRadius: 999 }}
          >
            🔤 Alphabet Board
          </button>
          <button
            onClick={() => {
              sound.playPop();
              setGameMode('quest');
            }}
            className={`kid-btn ${gameMode === 'quest' ? 'btn-sun' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1.05rem', borderRadius: 999 }}
          >
            🎯 Letter Quest
          </button>
        </div>
      </div>

      {gameMode === 'explore' ? (
        <div>
          {/* Spotlight Hero Card */}
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF, #F0F9FF)',
            borderRadius: 'var(--radius-lg)',
            border: `5px solid ${selectedLetter.color}`,
            boxShadow: 'var(--shadow-floating)',
            padding: '20px 16px',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div 
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 'var(--radius-md)',
                  background: selectedLetter.color,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.6rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 0 rgba(0, 0, 0, 0.15)`,
                }}
                className="animate-pop"
              >
                {selectedLetter.letter}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '2.5rem' }}>{selectedLetter.emoji}</span>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: '#0F172A',
                    fontFamily: 'var(--font-display)',
                    margin: 0,
                  }}>
                    {selectedLetter.word}
                  </h2>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  fontWeight: 600,
                  marginTop: 4,
                }}>
                  {selectedLetter.sentence}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playPop(600);
                speech.speakPhonics(selectedLetter.letter, selectedLetter.word);
              }}
              className="speaker-bubble"
              title="Hear pronunciation again"
              style={{ width: 52, height: 52 }}
            >
              <Volume2 size={26} />
            </button>
          </div>

          {/* 26 Letter Tiles Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(75px, 1fr))',
            gap: 10,
          }}>
            {ALPHABET_DATA.map((item) => {
              const isSelected = selectedLetter.letter === item.letter;
              return (
                <div
                  key={item.letter}
                  onClick={() => handleLetterClick(item)}
                  style={{
                    background: isSelected ? item.color : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#1E293B',
                    borderRadius: 'var(--radius-md)',
                    border: `3px solid ${item.color}`,
                    boxShadow: isSelected ? `0 6px 0 #CBD5E1` : '0 6px 0 #E2E8F0',
                    padding: '12px 6px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                    transform: isSelected ? 'scale(1.05)' : 'none',
                  }}
                  className="animate-wiggle"
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}>
                    {item.letter}
                  </div>
                  <div style={{ fontSize: '1.8rem', marginTop: 4 }}>
                    {item.emoji}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginTop: 2,
                    textTransform: 'uppercase',
                    opacity: isSelected ? 0.95 : 0.7,
                  }}>
                    {item.word}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Letter Quest Challenge Mode */
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '5px solid #F59E0B',
          padding: '36px 24px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-floating)',
          maxWidth: 680,
          margin: '0 auto',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#FEF3C7',
            padding: '6px 18px',
            borderRadius: 999,
            color: '#B45309',
            fontWeight: 700,
            marginBottom: 16,
          }}>
            <Sparkles size={18} /> Can you find this letter?
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 28,
          }}>
            <h2 style={{
              fontSize: '3rem',
              color: '#0F172A',
              fontFamily: 'var(--font-display)',
              margin: 0,
            }}>
              Find Letter <span style={{ color: '#D97706' }}>"{questTarget.letter}"</span>
            </h2>

            <button
              onClick={() => speech.speak(`Find the letter ${questTarget.letter}!`)}
              className="speaker-bubble"
              style={{ width: 52, height: 52 }}
            >
              <Volume2 size={24} />
            </button>
          </div>

          {/* Feedback message */}
          {questFeedback === 'correct' && (
            <div style={{
              color: '#16A34A',
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: 20,
            }} className="animate-pop">
              🌟 You found it! +1 Star! 🌟
            </div>
          )}

          {questFeedback === 'try-again' && (
            <div style={{
              color: '#EA580C',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: 20,
            }}>
              Almost! Try another one! 🎈
            </div>
          )}

          {/* Choice Tiles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 18,
            maxWidth: 420,
            margin: '0 auto 28px',
          }}>
            {questOptions.map((opt) => (
              <button
                key={opt.letter}
                onClick={() => handleQuestSelect(opt)}
                style={{
                  height: 110,
                  borderRadius: 'var(--radius-lg)',
                  border: `4px solid ${opt.color}`,
                  background: '#F8FAFC',
                  fontSize: '3.6rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: opt.color,
                  boxShadow: `0 8px 0 #CBD5E1`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.1s ease',
                }}
                className="animate-bob"
              >
                {opt.letter}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              sound.playPop();
              startNewQuest();
            }}
            className="kid-btn btn-white"
            style={{ fontSize: '1rem', padding: '10px 20px' }}
          >
            <RefreshCw size={18} /> Next Letter
          </button>
        </div>
      )}
    </div>
  );
};
