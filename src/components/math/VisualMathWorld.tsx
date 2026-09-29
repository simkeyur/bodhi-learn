import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, RefreshCw, Plus, Minus } from 'lucide-react';

interface VisualMathWorldProps {
  onBack: () => void;
}

const FOOD_EMOJIS = ['🍎', '🍓', '🍌', '🥕', '🍪', '⭐'];

export const VisualMathWorld: React.FC<VisualMathWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { sayThen, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_math'));
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');

  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(3);
  const [itemEmoji, setItemEmoji] = useState('🍎');
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');
  const [wrongPicks, setWrongPicks] = useState<number[]>([]);

  const correctAnswer = operation === 'add' ? num1 + num2 : num1 - num2;
  const opClip = clip.math(operation === 'add' ? 'plus' : 'minus');

  const questionClips = (n1: number, n2: number) => [
    clip.math('what_is'), clip.number(n1), opClip, clip.number(n2),
  ];

  const generateProblem = () => {
    clearAll();
    setFeedback('idle');
    setWrongPicks([]);
    const randomEmoji = FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)];
    setItemEmoji(randomEmoji);

    const max = ageBracket === 'pre-k' ? 5 : ageBracket === 'kindergarten' ? 10 : 15;

    let n1: number, n2: number;
    if (operation === 'add') {
      n1 = Math.floor(Math.random() * (max - 2)) + 1;
      n2 = Math.floor(Math.random() * (max - n1)) + 1;
    } else {
      // Subtraction: ensure positive result
      n1 = Math.floor(Math.random() * (max - 2)) + 2;
      n2 = Math.floor(Math.random() * n1) + 1;
    }

    setNum1(n1);
    setNum2(n2);

    const answer = operation === 'add' ? n1 + n2 : n1 - n2;
    const opts = new Set<number>([answer]);
    while (opts.size < 3) {
      const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      const val = Math.max(0, answer + delta);
      opts.add(val);
    }

    setOptions(Array.from(opts).sort(() => 0.5 - Math.random()));
    const intro = greeting();
    speech.say([...intro, ...questionClips(n1, n2)]);
  };

  useEffect(() => {
    generateProblem();
  }, [operation, ageBracket]);

  const handleSelectAnswer = (selected: number) => {
    if (feedback === 'correct') return;
    if (selected === correctAnswer) {
      sound.playSuccess();
      setFeedback('correct');
      addStars(1);
      sayThen(
        [clip.cheer(), clip.number(num1), opClip, clip.number(num2), clip.math('equals'), clip.number(correctAnswer)],
        generateProblem,
        1800,
      );
    } else {
      sound.playGentleTryAgain();
      setFeedback('try-again');
      setWrongPicks((prev) => [...prev, selected]);
      speech.say([clip.math('math_try_again')]);
    }
  };

  return (
    <div className="page" style={{ maxWidth: 860 }}>
      <div className="world-bar">
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white back-btn" aria-label="Back to home">
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div className="seg">
          <button
            onClick={() => { sound.playPop(); setOperation('add'); }}
            className={`kid-btn ${operation === 'add' ? 'btn-coral' : 'btn-white'}`}
            aria-pressed={operation === 'add'}
          >
            <Plus size={18} /> Add
          </button>
          <button
            onClick={() => { sound.playPop(); setOperation('subtract'); }}
            className={`kid-btn ${operation === 'subtract' ? 'btn-sky' : 'btn-white'}`}
            aria-pressed={operation === 'subtract'}
          >
            <Minus size={18} /> Take Away
          </button>
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '5px solid #FB7185',
        boxShadow: 'var(--shadow-floating)',
        padding: '16px 12px 20px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 14,
        }}>
          <span style={{ color: '#BE123C', fontWeight: 700, fontSize: '1.05rem' }}>
            Count to find the answer!
          </span>
          <button
            onClick={() => speech.say(questionClips(num1, num2))}
            className="speaker-bubble"
            aria-label="Hear the question again"
          >
            <Volume2 size={22} />
          </button>
        </div>

        {/* Equation: one row, shrinks to fit phones */}
        <div className="eq-row">
          <div className="eq-box">
            <div className="eq-items">
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i}>{itemEmoji}</span>
              ))}
            </div>
            <span className="eq-num">{num1}</span>
          </div>

          <div className="eq-sym">{operation === 'add' ? '+' : '−'}</div>

          <div className="eq-box">
            <div className="eq-items">
              {Array.from({ length: num2 }).map((_, i) => (
                <span key={i} style={{ opacity: operation === 'subtract' ? 0.55 : 1 }}>{itemEmoji}</span>
              ))}
            </div>
            <span className="eq-num">{num2}</span>
          </div>

          <div className="eq-sym">=</div>

          <div className="eq-box eq-answer">
            {feedback === 'correct' ? <span className="animate-pop eq-num" style={{ fontSize: '2.4rem', color: '#16A34A' }}>{correctAnswer}</span> : '?'}
          </div>
        </div>

        {/* Fixed-height feedback so the answer buttons never jump */}
        <div style={{
          minHeight: 36,
          margin: '14px 0 10px',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.3rem',
          color: feedback === 'correct' ? '#16A34A' : '#EA580C',
        }} aria-live="polite">
          {feedback === 'correct' && <span className="animate-pop" style={{ display: 'inline-block' }}>🌟 You got it! +1 Star!</span>}
          {feedback === 'try-again' && 'Count each one and try again!'}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(12px, 4vw, 20px)',
          marginBottom: 18,
        }}>
          {options.map((opt) => {
            const isWrong = wrongPicks.includes(opt);
            const isRight = feedback === 'correct' && opt === correctAnswer;
            return (
              <button
                key={opt}
                onClick={() => handleSelectAnswer(opt)}
                disabled={isWrong}
                style={{
                  width: 'clamp(80px, 24vw, 96px)',
                  height: 'clamp(80px, 24vw, 96px)',
                  borderRadius: 'var(--radius-md)',
                  background: isRight ? '#DCFCE7' : '#FFFFFF',
                  border: `4px solid ${isRight ? '#16A34A' : '#FB7185'}`,
                  boxShadow: isWrong ? 'none' : '0 7px 0 #E11D48',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#BE123C',
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

        <button
          onClick={() => { sound.playPop(); generateProblem(); }}
          className="kid-btn btn-white"
          style={{ fontSize: '1rem' }}
        >
          <RefreshCw size={18} /> New Problem
        </button>
      </div>
    </div>
  );
};
