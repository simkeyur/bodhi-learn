import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, RefreshCw, Plus, Minus } from 'lucide-react';

interface VisualMathWorldProps {
  onBack: () => void;
}

const FOOD_EMOJIS = ['🍎', '🍓', '🍌', '🥕', '🍪', '⭐'];

export const VisualMathWorld: React.FC<VisualMathWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');

  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(3);
  const [itemEmoji, setItemEmoji] = useState('🍎');
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');

  const correctAnswer = operation === 'add' ? num1 + num2 : num1 - num2;

  const generateProblem = () => {
    setFeedback('idle');
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
    const opText = operation === 'add' ? 'plus' : 'minus';
    speech.speak(`What is ${n1} ${opText} ${n2}?`);
  };

  useEffect(() => {
    generateProblem();
  }, [operation, ageBracket]);

  const handleSelectAnswer = (selected: number) => {
    if (selected === correctAnswer) {
      sound.playSuccess();
      setFeedback('correct');
      addStars(1);
      const opWord = operation === 'add' ? 'plus' : 'minus';
      speech.speak(`That's right! ${num1} ${opWord} ${num2} equals ${correctAnswer}!`);
      setTimeout(() => {
        generateProblem();
      }, 1500);
    } else {
      sound.playGentleTryAgain();
      setFeedback('try-again');
      speech.speak(`Let's count the items together!`);
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Header */}
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

        {/* Operation Toggles */}
        <div style={{
          display: 'flex',
          gap: 10,
          background: '#FFFFFF',
          padding: 6,
          borderRadius: 999,
          boxShadow: 'var(--shadow-playful)',
        }}>
          <button
            onClick={() => { sound.playPop(); setOperation('add'); }}
            className={`kid-btn ${operation === 'add' ? 'btn-coral' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
          >
            <Plus size={18} /> Addition (+)
          </button>
          <button
            onClick={() => { sound.playPop(); setOperation('subtract'); }}
            className={`kid-btn ${operation === 'subtract' ? 'btn-sky' : 'btn-white'}`}
            style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
          >
            <Minus size={18} /> Subtraction (-)
          </button>
        </div>
      </div>

      {/* Main Math Workbench */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '6px solid #FB7185',
        boxShadow: 'var(--shadow-floating)',
        padding: '36px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#FFE4E6',
          padding: '6px 20px',
          borderRadius: 999,
          color: '#BE123C',
          fontWeight: 700,
          marginBottom: 24,
        }}>
          <span>Count the items to find the answer!</span>
          <button
            onClick={() => {
              const opText = operation === 'add' ? 'plus' : 'minus';
              speech.speak(`${num1} ${opText} ${num2} equals what?`);
            }}
            className="speaker-bubble"
            style={{ width: 36, height: 36 }}
          >
            <Volume2 size={16} />
          </button>
        </div>

        {/* Concrete Visual Equation Board */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 28,
        }}>
          {/* First Box */}
          <div style={{
            background: '#FFF1F2',
            border: '4px solid #FDA4AF',
            borderRadius: 'var(--radius-md)',
            padding: 12,
            minWidth: 95,
            minHeight: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 6,
              fontSize: '2rem',
              marginBottom: 6,
            }}>
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i} className="animate-bob">{itemEmoji}</span>
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#BE123C',
            }}>
              {num1}
            </span>
          </div>

          {/* Operation Symbol */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#E11D48',
          }}>
            {operation === 'add' ? '+' : '−'}
          </div>

          {/* Second Box */}
          <div style={{
            background: '#FFF1F2',
            border: '4px solid #FDA4AF',
            borderRadius: 'var(--radius-md)',
            padding: 12,
            minWidth: 95,
            minHeight: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 6,
              fontSize: '2rem',
              marginBottom: 6,
            }}>
              {Array.from({ length: num2 }).map((_, i) => (
                <span key={i} className="animate-bob" style={{ opacity: operation === 'subtract' ? 0.6 : 1 }}>
                  {itemEmoji}
                </span>
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#BE123C',
            }}>
              {num2}
            </span>
          </div>

          {/* Equals Symbol */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#E11D48',
          }}>
            =
          </div>

          {/* Result Mystery Box */}
          <div style={{
            background: '#FFE4E6',
            border: '4px dashed #F43F5E',
            borderRadius: 'var(--radius-md)',
            minWidth: 85,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#BE123C',
          }}>
            ?
          </div>
        </div>

        {/* Feedback Message */}
        {feedback === 'correct' && (
          <div style={{
            color: '#16A34A',
            fontSize: '1.6rem',
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            marginBottom: 24,
          }} className="animate-pop">
            🌟 Brilliant! You got it right! +1 Star! 🌟
          </div>
        )}

        {feedback === 'try-again' && (
          <div style={{
            color: '#EA580C',
            fontSize: '1.3rem',
            fontWeight: 700,
            marginBottom: 24,
          }}>
            Count each item and try again! 🍎
          </div>
        )}

        {/* Answer Options */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          marginBottom: 24,
        }}>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectAnswer(opt)}
              style={{
                width: 95,
                height: 95,
                borderRadius: 'var(--radius-md)',
                background: '#FFFFFF',
                border: '4px solid #FB7185',
                boxShadow: '0 8px 0 #E11D48',
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                fontWeight: 700,
                color: '#BE123C',
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

        <button
          onClick={() => { sound.playPop(); generateProblem(); }}
          className="kid-btn btn-white"
          style={{ fontSize: '1rem', padding: '10px 20px' }}
        >
          <RefreshCw size={18} /> New Problem
        </button>
      </div>
    </div>
  );
};
