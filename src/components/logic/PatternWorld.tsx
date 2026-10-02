import React, { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { AgeBracket } from '../../firebase/schema';
import { PATTERN_WORD, makePatternQuestion, type PatternItem, type PatternQuestion } from '../../data/logicData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useGreeting, useKidTimers } from '../../utils/useKidTimers';
import { LogicBar } from './LogicBar';
import './logic.css';

interface PatternWorldProps {
  onBack: () => void;
}

const promptClip = (q: PatternQuestion) => clip.phrase(q.ask === 'next' ? 'what_comes_next' : 'whats_missing');
const itemClip = (x: PatternItem) => (typeof x === 'number' ? clip.number(x) : clip.word(PATTERN_WORD[x]));

// Pattern Parade: spot the repeating pattern (or counting rule) and say what comes next or what is missing.
export const PatternWorld: React.FC<PatternWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { sayThen, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_patterns'));

  const [bracket, setBracket] = useState<AgeBracket>(ageBracket);
  const [q, setQ] = useState<PatternQuestion>(() => makePatternQuestion(ageBracket));
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');
  const [wrong, setWrong] = useState<PatternItem[]>([]);

  const newQuestion = (forBracket: AgeBracket) => {
    clearAll();
    const next = makePatternQuestion(forBracket);
    setQ(next);
    setFeedback('idle');
    setWrong([]);
    speech.say([promptClip(next)]);
  };

  useEffect(() => {
    speech.say([...greeting(), promptClip(q)]);
  }, []);

  // Read the pattern aloud: items, then the question (or the question first when something is hidden)
  const hear = () => {
    sound.playPop(600);
    const items = q.shown.filter((x): x is PatternItem => x !== null).map(itemClip);
    speech.say(q.ask === 'next' ? [...items, promptClip(q)] : [promptClip(q), ...items]);
  };

  const choose = (option: PatternItem) => {
    if (feedback === 'correct') return;
    if (option === q.answer) {
      sound.playSuccess();
      setFeedback('correct');
      addStars(1);
      sayThen([clip.cheer(), clip.phrase('pattern_yes')], () => newQuestion(bracket), 1800);
    } else {
      sound.playGentleTryAgain();
      setFeedback('try-again');
      setWrong((w) => [...w, option]);
      speech.say([clip.phrase('look_again')]);
    }
  };

  const changeBracket = (next: AgeBracket) => {
    setBracket(next);
    newQuestion(next);
  };

  return (
    <div className="page" style={{ maxWidth: 640 }}>
      <LogicBar onBack={onBack} bracket={bracket} onBracket={changeBracket} />

      <div className="lab-card pat-card">
        <h2 className="lab-title">
          {q.ask === 'next' ? 'What comes next?' : 'What is missing?'}
          <button onClick={hear} className="speaker-bubble" aria-label="Hear the pattern">
            <Volume2 size={24} />
          </button>
        </h2>

        <div className="pat-row" style={{ '--n': q.shown.length <= 6 ? q.shown.length : Math.ceil(q.shown.length / 2) } as React.CSSProperties} role="img" aria-label="A pattern with one missing piece">
          {q.shown.map((item, i) =>
            item === null ? (
              <span key={i} className={`pat-tile ${feedback === 'correct' ? 'filled animate-pop' : 'hole'}`}>
                {feedback === 'correct' ? q.answer : '?'}
              </span>
            ) : (
              <span key={i} className="pat-tile">{item}</span>
            ),
          )}
        </div>

        <div className={`lab-msg ${feedback === 'correct' ? 'good' : feedback === 'try-again' ? 'oops' : ''}`} aria-live="polite">
          {feedback === 'correct' ? '🌟 You found the pattern! +1 Star!' : feedback === 'try-again' ? 'Look at the pattern again 🎈' : ''}
        </div>

        <div className="opt-row">
          {q.options.map((opt) => {
            const isWrong = wrong.includes(opt);
            const isRight = feedback === 'correct' && opt === q.answer;
            return (
              <button
                key={String(opt)}
                className={`opt-btn${isWrong ? ' wrong' : ''}${isRight ? ' right animate-pop' : ''}`}
                onClick={() => choose(opt)}
                disabled={isWrong}
                aria-label={typeof opt === 'number' ? String(opt) : PATTERN_WORD[opt]}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
