import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';

interface CountingWorldProps {
  onBack: () => void;
}

interface CountItem {
  id: number;
  emoji: string;
  counted: boolean;
  countNumber?: number;
}

const ITEMS_POOL = ['⭐', '🍎', '🎈', '🧁', '🐶', '🍓', '🚀', '🐬'];

export const CountingWorld: React.FC<CountingWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { sayThen, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_counting'));
  const [mode, setMode] = useState<'tap-count' | 'quiz'>('tap-count');

  // Max items based on age
  const maxNumber = ageBracket === 'pre-k' ? 5 : ageBracket === 'kindergarten' ? 10 : 15;

  // Tap & Count state
  const [targetCount, setTargetCount] = useState<number>(5);
  const [items, setItems] = useState<CountItem[]>([]);
  const [currentTappedCount, setCurrentTappedCount] = useState<number>(0);
  const [isAllCounted, setIsAllCounted] = useState<boolean>(false);

  // Quiz state
  const [quizCount, setQuizCount] = useState<number>(4);
  const [quizEmoji, setQuizEmoji] = useState<string>('⭐');
  const [quizOptions, setQuizOptions] = useState<number[]>([]);
  const [quizFeedback, setQuizFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');
  const [wrongPicks, setWrongPicks] = useState<number[]>([]);

  // Initialize Tap & Count round
  const startTapCountRound = () => {
    const min = 3;
    const num = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
    const randomEmoji = ITEMS_POOL[Math.floor(Math.random() * ITEMS_POOL.length)];
    setTargetCount(num);
    setCurrentTappedCount(0);
    setIsAllCounted(false);

    const generated: CountItem[] = Array.from({ length: num }).map((_, i) => ({
      id: i,
      emoji: randomEmoji,
      counted: false,
    }));
    setItems(generated);
    speech.say([...greeting(), clip.phrase('tap_and_count_prompt')]);
  };

  // Initialize Quiz round
  const startQuizRound = () => {
    const min = 2;
    const num = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
    const randomEmoji = ITEMS_POOL[Math.floor(Math.random() * ITEMS_POOL.length)];
    setQuizCount(num);
    setQuizEmoji(randomEmoji);
    setQuizFeedback('idle');
    setWrongPicks([]);
    clearAll();

    // Create 3 options including correct
    const opts = new Set<number>([num]);
    while (opts.size < 3) {
      const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      const val = Math.max(1, num + delta);
      opts.add(val);
    }
    setQuizOptions(Array.from(opts).sort(() => 0.5 - Math.random()));
    speech.say([...greeting(), clip.phrase('how_many_quiz')]);
  };

  useEffect(() => {
    if (mode === 'tap-count') {
      startTapCountRound();
    } else {
      startQuizRound();
    }
  }, [mode, ageBracket]);

  const handleItemTap = (item: CountItem) => {
    if (item.counted || isAllCounted) return;

    const nextCount = currentTappedCount + 1;
    setCurrentTappedCount(nextCount);
    sound.playCountChime(nextCount);

    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, counted: true, countNumber: nextCount } : i))
    );

    if (nextCount === targetCount) {
      setIsAllCounted(true);
      addStars(1);
      speech.say([clip.number(nextCount), clip.cheer(), clip.phrase('great_job_counting')]);
    } else {
      speech.say([clip.number(nextCount)]);
    }
  };

  const handleQuizAnswer = (num: number) => {
    if (quizFeedback === 'correct') return;
    if (num === quizCount) {
      sound.playSuccess();
      setQuizFeedback('correct');
      addStars(1);
      sayThen(
        [clip.cheer(), clip.phrase('there_are'), clip.number(quizCount), clip.phrase('star_earned')],
        startQuizRound,
      );
    } else {
      sound.playGentleTryAgain();
      setQuizFeedback('try-again');
      setWrongPicks((prev) => [...prev, num]);
      speech.say([clip.phrase('count_again')]);
    }
  };

  return (
    <div className="page" style={{ maxWidth: 900 }}>
      <div className="world-bar">
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white back-btn" aria-label="Back to home">
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div className="seg">
          <button
            onClick={() => { sound.playPop(); setMode('tap-count'); }}
            className={`kid-btn ${mode === 'tap-count' ? 'btn-grass' : 'btn-white'}`}
            aria-pressed={mode === 'tap-count'}
          >
            👆 Count
          </button>
          <button
            onClick={() => { sound.playPop(); setMode('quiz'); }}
            className={`kid-btn ${mode === 'quiz' ? 'btn-sun' : 'btn-white'}`}
            aria-pressed={mode === 'quiz'}
          >
            ❓ How Many?
          </button>
        </div>
      </div>

      {mode === 'tap-count' ? (
        /* Tap & Count Meadow */
        <div style={{
          background: 'linear-gradient(180deg, #ECFDF5 0%, #D1FAE5 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '6px solid #4ADE80',
          boxShadow: 'var(--shadow-floating)',
          padding: '16px 12px',
          textAlign: 'center',
          minHeight: 'min(460px, 62dvh)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#FFFFFF',
              border: '3px solid #86EFAC',
              padding: '4px 6px 4px 20px',
              borderRadius: 999,
              boxShadow: '0 4px 0 #BBF7D0',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#065F46',
              }}>
                {currentTappedCount} / {targetCount}
              </span>
              <button
                onClick={() => speech.say([clip.phrase('count_to'), clip.number(targetCount)])}
                className="speaker-bubble"
                aria-label={`Hear: count to ${targetCount}`}
              >
                <Volume2 size={22} />
              </button>
            </div>
          </div>

          {/* Interactive Floating Items Meadow */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(12px, 3vw, 20px)',
            margin: '20px 0',
          }}>
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemTap(item)}
                aria-label={item.counted ? `Counted ${item.countNumber}` : 'Tap to count'}
                style={{
                  width: 'clamp(68px, 20vw, 90px)',
                  height: 'clamp(68px, 20vw, 90px)',
                  padding: 0,
                  borderRadius: '50%',
                  background: item.counted ? '#FEF08A' : '#FFFFFF',
                  border: item.counted ? '4px solid #F59E0B' : '4px solid #34D399',
                  boxShadow: item.counted ? '0 4px 0 #D97706' : '0 8px 0 #059669',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: item.counted ? 'default' : 'pointer',
                  fontSize: 'clamp(2.4rem, 8vw, 3.2rem)',
                  position: 'relative',
                  transform: item.counted ? 'translateY(4px)' : 'none',
                  transition: 'all 0.15s ease',
                }}
                className={item.counted ? 'animate-pop' : undefined}
              >
                {item.emoji}
                {item.counted && (
                  <span style={{
                    position: 'absolute',
                    top: -12,
                    right: -8,
                    background: '#DC2626',
                    color: '#FFFFFF',
                    borderRadius: 999,
                    width: 32,
                    height: 32,
                    fontSize: '1.2rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  }}>
                    {item.countNumber}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Next Button or Celebration */}
          <div>
            {isAllCounted ? (
              <div className="animate-pop">
                <div style={{
                  color: '#065F46',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  marginBottom: 12,
                }}>
                  🌟 You counted all {targetCount}! +1 Star!
                </div>
                <button
                  onClick={() => { sound.playPop(); startTapCountRound(); }}
                  className="kid-btn btn-sun"
                  style={{ fontSize: '1.25rem' }}
                >
                  Count Again! <Sparkles size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => { sound.playPop(); startTapCountRound(); }}
                className="kid-btn btn-white"
                style={{ fontSize: '1rem' }}
              >
                <RefreshCw size={16} /> New Set
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Mode: "How Many?" */
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '6px solid #F59E0B',
          boxShadow: 'var(--shadow-floating)',
          padding: '18px 12px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 6vw, 2.4rem)',
            color: '#0F172A',
            fontFamily: 'var(--font-display)',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            How many are there?
            <button
              onClick={() => speech.say([clip.phrase('how_many_quiz')])}
              className="speaker-bubble"
              aria-label="Hear the question again"
            >
              <Volume2 size={22} />
            </button>
          </h2>

          {/* Items Canvas */}
          <div style={{
            background: '#FEF3C7',
            borderRadius: 'var(--radius-md)',
            padding: '18px 12px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(8px, 3vw, 20px)',
            maxWidth: 600,
            margin: '0 auto 14px',
            minHeight: 120,
            alignItems: 'center',
          }}>
            {Array.from({ length: quizCount }).map((_, i) => (
              <span key={i} style={{ fontSize: 'clamp(2.4rem, 10vw, 3.6rem)' }} aria-hidden>
                {quizEmoji}
              </span>
            ))}
          </div>

          {/* Fixed-height feedback so the answer buttons never jump */}
          <div style={{
            minHeight: 36,
            marginBottom: 12,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.3rem',
            color: quizFeedback === 'correct' ? '#16A34A' : '#EA580C',
          }} aria-live="polite">
            {quizFeedback === 'correct' && <span className="animate-pop" style={{ display: 'inline-block' }}>🌟 Yes, {quizCount}! +1 Star!</span>}
            {quizFeedback === 'try-again' && 'Count again, slowly 🎈'}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(12px, 4vw, 20px)',
          }}>
            {quizOptions.map((opt) => {
              const isWrong = wrongPicks.includes(opt);
              const isRight = quizFeedback === 'correct' && opt === quizCount;
              return (
                <button
                  key={opt}
                  onClick={() => handleQuizAnswer(opt)}
                  disabled={isWrong}
                  style={{
                    width: 'clamp(80px, 24vw, 96px)',
                    height: 'clamp(80px, 24vw, 96px)',
                    borderRadius: 'var(--radius-md)',
                    background: isRight ? '#DCFCE7' : '#FFFFFF',
                    border: `4px solid ${isRight ? '#16A34A' : '#F59E0B'}`,
                    boxShadow: isWrong ? 'none' : '0 7px 0 #D97706',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    color: '#92400E',
                    cursor: isWrong ? 'default' : 'pointer',
                    opacity: isWrong ? 0.35 : 1,
                    transform: isWrong ? 'translateY(5px)' : 'none',
                    transition: 'all 0.12s ease',
                  }}
                  className={isRight ? 'animate-pop' : undefined}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
