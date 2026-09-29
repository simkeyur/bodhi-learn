import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
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
    speech.speak(`Tap and count the items!`);
  };

  // Initialize Quiz round
  const startQuizRound = () => {
    const min = 2;
    const num = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
    const randomEmoji = ITEMS_POOL[Math.floor(Math.random() * ITEMS_POOL.length)];
    setQuizCount(num);
    setQuizEmoji(randomEmoji);
    setQuizFeedback('idle');

    // Create 3 options including correct
    const opts = new Set<number>([num]);
    while (opts.size < 3) {
      const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      const val = Math.max(1, num + delta);
      opts.add(val);
    }
    setQuizOptions(Array.from(opts).sort(() => 0.5 - Math.random()));
    speech.speak(`How many are there?`);
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
    speech.speak(`${nextCount}`);

    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, counted: true, countNumber: nextCount } : i))
    );

    if (nextCount === targetCount) {
      setIsAllCounted(true);
      setTimeout(() => {
        addStars(1);
        speech.speak(`Great job! You counted all ${targetCount}!`);
      }, 500);
    }
  };

  const handleQuizAnswer = (num: number) => {
    if (num === quizCount) {
      sound.playSuccess();
      setQuizFeedback('correct');
      addStars(1);
      speech.speak(`Yes! There are ${quizCount}! You got a star!`);
      setTimeout(() => {
        startQuizRound();
      }, 1500);
    } else {
      sound.playGentleTryAgain();
      setQuizFeedback('try-again');
      speech.speak(`Let's count them again!`);
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Bar with Mode Switch */}
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
              setMode('tap-count');
            }}
            className={`kid-btn ${mode === 'tap-count' ? 'btn-grass' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
          >
            👆 Tap & Count
          </button>
          <button
            onClick={() => {
              sound.playPop();
              setMode('quiz');
            }}
            className={`kid-btn ${mode === 'quiz' ? 'btn-sun' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
          >
            ❓ "How Many?" Quiz
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
          padding: '32px 24px',
          textAlign: 'center',
          minHeight: 460,
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
              padding: '8px 24px',
              borderRadius: 999,
              marginBottom: 16,
              boxShadow: '0 4px 0 #BBF7D0',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#065F46',
              }}>
                Counted: {currentTappedCount} / {targetCount}
              </span>
              <button
                onClick={() => speech.speak(`Count to ${targetCount}!`)}
                className="speaker-bubble"
                style={{ width: 40, height: 40 }}
              >
                <Volume2 size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Floating Items Meadow */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            margin: '28px 0',
          }}>
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemTap(item)}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: item.counted ? '#FEF08A' : '#FFFFFF',
                  border: item.counted ? '4px solid #F59E0B' : '4px solid #34D399',
                  boxShadow: item.counted ? '0 4px 0 #D97706' : '0 8px 0 #059669',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: item.counted ? 'default' : 'pointer',
                  fontSize: '3.2rem',
                  position: 'relative',
                  transform: item.counted ? 'scale(0.96)' : 'scale(1)',
                  transition: 'all 0.15s ease',
                }}
                className={item.counted ? 'animate-pop' : 'animate-bob'}
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
              </div>
            ))}
          </div>

          {/* Next Button or Celebration */}
          <div>
            {isAllCounted ? (
              <div className="animate-pop">
                <div style={{
                  color: '#065F46',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  marginBottom: 12,
                }}>
                  🌟 Woohoo! You counted all {targetCount}! +1 Star! 🌟
                </div>
                <button
                  onClick={startTapCountRound}
                  className="kid-btn btn-sun"
                  style={{ padding: '14px 32px', fontSize: '1.25rem' }}
                >
                  Count Again! <Sparkles size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={startTapCountRound}
                className="kid-btn btn-white"
                style={{ fontSize: '1rem', padding: '10px 18px' }}
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
          padding: '36px 24px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '2.4rem',
            color: '#0F172A',
            fontFamily: 'var(--font-display)',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            How many are there?
            <button
              onClick={() => speech.speak(`How many are there?`)}
              className="speaker-bubble"
              style={{ width: 44, height: 44 }}
            >
              <Volume2 size={20} />
            </button>
          </h2>

          {/* Items Canvas */}
          <div style={{
            background: '#FEF3C7',
            borderRadius: 'var(--radius-md)',
            padding: '28px 16px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            maxWidth: 600,
            margin: '0 auto 32px',
            minHeight: 140,
            alignItems: 'center',
          }}>
            {Array.from({ length: quizCount }).map((_, i) => (
              <span key={i} style={{ fontSize: '3.6rem' }} className="animate-bob">
                {quizEmoji}
              </span>
            ))}
          </div>

          {/* Feedback */}
          {quizFeedback === 'correct' && (
            <div style={{
              color: '#16A34A',
              fontSize: '1.6rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: 20,
            }} className="animate-pop">
              🌟 That's right! There are {quizCount}! +1 Star! 🌟
            </div>
          )}

          {quizFeedback === 'try-again' && (
            <div style={{
              color: '#EA580C',
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: 20,
            }}>
              Count carefully and try again! 🎈
            </div>
          )}

          {/* 3 Large Choice Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
          }}>
            {quizOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => handleQuizAnswer(opt)}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 'var(--radius-md)',
                  background: '#FFFFFF',
                  border: '4px solid #F59E0B',
                  boxShadow: '0 8px 0 #D97706',
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#92400E',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.1s ease',
                }}
                className="animate-wiggle"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
