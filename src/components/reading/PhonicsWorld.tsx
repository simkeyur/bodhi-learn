import React, { useState, useEffect } from 'react';
import { ALPHABET_DATA, type PhonicLetter } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, Sparkles, RefreshCw, ArrowLeft } from 'lucide-react';

interface PhonicsWorldProps {
  onBack: () => void;
}

export const PhonicsWorld: React.FC<PhonicsWorldProps> = ({ onBack }) => {
  const { addStars } = useApp();
  const { sayThen } = useKidTimers();
  const [selectedLetter, setSelectedLetter] = useState<PhonicLetter>(ALPHABET_DATA[0]);
  const [gameMode, setGameMode] = useState<'explore' | 'quest'>('explore');

  // Letter Quest state
  const [questTarget, setQuestTarget] = useState<PhonicLetter>(ALPHABET_DATA[0]);
  const [questOptions, setQuestOptions] = useState<PhonicLetter[]>([]);
  const [questFeedback, setQuestFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');
  const [wrongPicks, setWrongPicks] = useState<string[]>([]);

  const startNewQuest = () => {
    const target = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
    setQuestTarget(target);
    setQuestFeedback('idle');
    setWrongPicks([]);

    const others = ALPHABET_DATA.filter((l) => l.letter !== target.letter);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    setQuestOptions([target, ...shuffledOthers].sort(() => 0.5 - Math.random()));

    speech.say([clip.phrase('can_you_find'), clip.letter(target.letter)]);
  };

  useEffect(() => {
    if (gameMode === 'quest') {
      startNewQuest();
    } else {
      speech.say([clip.phrase('greet_phonics')]);
    }
  }, [gameMode]);

  const handleLetterClick = (item: PhonicLetter) => {
    setSelectedLetter(item);
    sound.playPop();
    speech.say([clip.phonics(item.letter)]);
  };

  const handleQuestSelect = (item: PhonicLetter) => {
    if (questFeedback === 'correct') return;
    if (item.letter === questTarget.letter) {
      sound.playSuccess();
      setQuestFeedback('correct');
      addStars(1);
      sayThen([clip.cheer(), clip.phonics(item.letter)], startNewQuest);
    } else {
      sound.playGentleTryAgain();
      setQuestFeedback('try-again');
      setWrongPicks((prev) => [...prev, item.letter]);
      speech.say([
        clip.phrase('thats'),
        clip.letter(item.letter),
        clip.phrase('lets_find'),
        clip.letter(questTarget.letter),
      ]);
    }
  };

  return (
    <div className="page">
      <div className="world-bar">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="kid-btn btn-white back-btn"
          aria-label="Back to home"
        >
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div className="seg">
          <button
            onClick={() => { sound.playPop(); setGameMode('explore'); }}
            className={`kid-btn ${gameMode === 'explore' ? 'btn-sky' : 'btn-white'}`}
            aria-pressed={gameMode === 'explore'}
          >
            🔤 ABC
          </button>
          <button
            onClick={() => { sound.playPop(); setGameMode('quest'); }}
            className={`kid-btn ${gameMode === 'quest' ? 'btn-sun' : 'btn-white'}`}
            aria-pressed={gameMode === 'quest'}
          >
            🎯 Quest
          </button>
        </div>
      </div>

      {gameMode === 'explore' ? (
        <div>
          {/* Spotlight card */}
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF, #F0F9FF)',
            borderRadius: 'var(--radius-lg)',
            border: `5px solid ${selectedLetter.color}`,
            boxShadow: 'var(--shadow-floating)',
            padding: '14px 14px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}>
            <div
              key={selectedLetter.letter}
              style={{
                width: 76,
                height: 76,
                flexShrink: 0,
                borderRadius: 'var(--radius-md)',
                background: selectedLetter.color,
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '2.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 0 rgba(0, 0, 0, 0.15)',
              }}
              className="animate-pop"
            >
              {selectedLetter.letter}{selectedLetter.letter.toLowerCase()}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '2rem' }} aria-hidden>{selectedLetter.emoji}</span>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
                  color: '#0F172A',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {selectedLetter.word}
                </h2>
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', fontWeight: 600, marginTop: 4 }}>
                {selectedLetter.sentence}
              </p>
            </div>

            <button
              onClick={() => {
                sound.playPop(600);
                speech.say([clip.phonics(selectedLetter.letter)]);
              }}
              className="speaker-bubble"
              aria-label={`Hear ${selectedLetter.letter} is for ${selectedLetter.word}`}
            >
              <Volume2 size={26} />
            </button>
          </div>

          {/* A–Z tiles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(68px, 1fr))',
            gap: 10,
          }}>
            {ALPHABET_DATA.map((item) => {
              const isSelected = selectedLetter.letter === item.letter;
              return (
                <button
                  key={item.letter}
                  onClick={() => handleLetterClick(item)}
                  aria-label={`${item.letter} for ${item.word}`}
                  aria-pressed={isSelected}
                  style={{
                    background: isSelected ? item.color : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#1E293B',
                    borderRadius: 'var(--radius-md)',
                    border: `3px solid ${item.color}`,
                    boxShadow: isSelected ? '0 3px 0 #CBD5E1' : '0 5px 0 #E2E8F0',
                    padding: '8px 4px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                    transform: isSelected ? 'translateY(2px)' : 'none',
                    minHeight: 80,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>
                    {item.letter}
                  </div>
                  <div style={{ fontSize: '1.6rem', marginTop: 4 }} aria-hidden>
                    {item.emoji}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Letter Quest */
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '5px solid #F59E0B',
          padding: '24px 16px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-floating)',
          maxWidth: 560,
          margin: '0 auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            marginBottom: 18,
          }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 7vw, 2.6rem)', color: '#0F172A', margin: 0 }}>
              Find <span style={{ color: '#D97706' }}>{questTarget.letter}</span>
            </h2>
            <button
              onClick={() => speech.say([clip.phrase('find_the_letter'), clip.letter(questTarget.letter)])}
              className="speaker-bubble"
              aria-label="Hear the letter again"
            >
              <Volume2 size={24} />
            </button>
          </div>

          {/* Fixed-height feedback so the buttons below never jump */}
          <div style={{
            minHeight: 36,
            marginBottom: 12,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.3rem',
            color: questFeedback === 'correct' ? '#16A34A' : '#EA580C',
          }} aria-live="polite">
            {questFeedback === 'correct' && <span className="animate-pop" style={{ display: 'inline-block' }}>🌟 You found it! +1 Star!</span>}
            {questFeedback === 'try-again' && 'Almost! Try another one 🎈'}
            {questFeedback === 'idle' && (
              <span style={{ color: '#B45309', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '1.05rem' }}>
                <Sparkles size={18} /> Tap the matching letter
              </span>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
            maxWidth: 380,
            margin: '0 auto 20px',
          }}>
            {questOptions.map((opt) => {
              const isWrong = wrongPicks.includes(opt.letter);
              const isRight = questFeedback === 'correct' && opt.letter === questTarget.letter;
              return (
                <button
                  key={opt.letter}
                  onClick={() => handleQuestSelect(opt)}
                  disabled={isWrong}
                  aria-label={`Letter ${opt.letter}`}
                  style={{
                    height: 104,
                    borderRadius: 'var(--radius-lg)',
                    border: `4px solid ${isRight ? '#16A34A' : opt.color}`,
                    background: isRight ? '#DCFCE7' : '#F8FAFC',
                    fontSize: '3.4rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: opt.color,
                    boxShadow: isWrong ? 'none' : '0 7px 0 #CBD5E1',
                    cursor: isWrong ? 'default' : 'pointer',
                    opacity: isWrong ? 0.35 : 1,
                    transform: isWrong ? 'translateY(5px)' : 'none',
                    transition: 'all 0.12s ease',
                  }}
                  className={isRight ? 'animate-pop' : undefined}
                >
                  {opt.letter}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => { sound.playPop(); startNewQuest(); }}
            className="kid-btn btn-white"
            style={{ fontSize: '1rem' }}
          >
            <RefreshCw size={18} /> New Letter
          </button>
        </div>
      )}
    </div>
  );
};
