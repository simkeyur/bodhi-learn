import React, { useEffect, useState } from 'react';
import { ArrowRight, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { AgeBracket } from '../../firebase/schema';
import { makeMachineQuestion, ruleLabel, type MachineQuestion, type Rule } from '../../data/logicData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useGreeting, useKidTimers } from '../../utils/useKidTimers';
import { LogicBar } from './LogicBar';
import './logic.css';

interface MachineWorldProps {
  onBack: () => void;
}

const ruleClips = (r: Rule) =>
  r.kind === 'add' ? [clip.phrase('machine_adds'), clip.number(r.n)]
  : r.kind === 'sub' ? [clip.phrase('machine_takes'), clip.number(r.n)]
  : r.kind === 'double' ? [clip.phrase('machine_doubles')]
  : [clip.phrase('machine_triples')];

const ruleText = (r: Rule) =>
  r.kind === 'add' ? `The machine adds ${r.n}`
  : r.kind === 'sub' ? `The machine takes away ${r.n}`
  : r.kind === 'double' ? 'The machine doubles it'
  : 'The machine makes it 3 times bigger';

const Machine: React.FC<{ spinning?: boolean }> = ({ spinning }) => (
  <span className={`mach-box${spinning ? ' spin' : ''}`} aria-hidden>
    <span>⚙️</span>
  </span>
);

// Magic Machine: numbers go in and come out changed. Work out the secret rule from the
// examples, then predict what comes out for a new number. (A function, in programming words.)
export const MachineWorld: React.FC<MachineWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { sayThen, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_machine'));

  const [bracket, setBracket] = useState<AgeBracket>(ageBracket);
  const [q, setQ] = useState<MachineQuestion>(() => makeMachineQuestion(ageBracket));
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'try-again'>('idle');
  const [wrong, setWrong] = useState<number[]>([]);

  const askClips = (question: MachineQuestion) => [
    clip.number(question.input), clip.phrase('machine_goes_in'), clip.phrase('machine_what_out'),
  ];

  const newQuestion = (forBracket: AgeBracket) => {
    clearAll();
    const next = makeMachineQuestion(forBracket);
    setQ(next);
    setFeedback('idle');
    setWrong([]);
    speech.say(askClips(next));
  };

  useEffect(() => {
    speech.say([...greeting(), ...askClips(q)]);
  }, []);

  const hearExample = (input: number, output: number) => {
    sound.playPop(600);
    speech.say([clip.number(input), clip.phrase('machine_goes_in'), clip.number(output), clip.phrase('machine_comes_out')]);
  };

  const choose = (option: number) => {
    if (feedback === 'correct') return;
    if (option === q.answer) {
      sound.playSuccess();
      setFeedback('correct');
      addStars(1);
      // The reveal: say the secret rule so the child hears the idea, not just "correct"
      sayThen([clip.cheer(), ...ruleClips(q.rule)], () => newQuestion(bracket), 3200);
    } else {
      sound.playGentleTryAgain();
      setFeedback('try-again');
      setWrong((w) => [...w, option]);
      speech.say([clip.retry()]);
    }
  };

  const changeBracket = (next: AgeBracket) => {
    setBracket(next);
    newQuestion(next);
  };

  const solved = feedback === 'correct';

  return (
    <div className="page" style={{ maxWidth: 640 }}>
      <LogicBar onBack={onBack} bracket={bracket} onBracket={changeBracket} />

      <div className="lab-card mach-card">
        <h2 className="lab-title">
          What comes out?
          <button
            onClick={() => { sound.playPop(600); speech.say(askClips(q)); }}
            className="speaker-bubble"
            aria-label="Hear the question"
          >
            <Volume2 size={24} />
          </button>
        </h2>
        <p style={{ color: '#475569', fontWeight: 600 }}>Look at the machine, then find its secret rule!</p>

        <div className="mach-rows">
          {q.examples.map((e) => (
            <button
              key={e.input}
              className="mach-row"
              onClick={() => hearExample(e.input, e.output)}
              aria-label={`${e.input} goes in, ${e.output} comes out`}
            >
              <span className="mach-num">{e.input}</span>
              <ArrowRight className="mach-arrow" size={24} strokeWidth={3} aria-hidden />
              <Machine />
              <ArrowRight className="mach-arrow" size={24} strokeWidth={3} aria-hidden />
              <span className="mach-num">{e.output}</span>
            </button>
          ))}

          <div className="mach-row q" aria-label={`${q.input} goes in. What comes out?`}>
            <span className="mach-num">{q.input}</span>
            <ArrowRight className="mach-arrow" size={24} strokeWidth={3} aria-hidden />
            <Machine spinning={solved} />
            <ArrowRight className="mach-arrow" size={24} strokeWidth={3} aria-hidden />
            <span className={`mach-num ${solved ? 'solved animate-pop' : 'ask'}`}>{solved ? q.answer : '?'}</span>
          </div>
        </div>

        <div className={`lab-msg ${solved ? 'good' : feedback === 'try-again' ? 'oops' : ''}`} aria-live="polite">
          {solved ? (
            <span className="mach-rule animate-pop"><b>{ruleLabel(q.rule)}</b> {ruleText(q.rule)}</span>
          ) : feedback === 'try-again' ? (
            'Compare the numbers going in and out 🎈'
          ) : (
            ''
          )}
        </div>

        <div className="opt-row">
          {q.options.map((opt) => {
            const isWrong = wrong.includes(opt);
            const isRight = solved && opt === q.answer;
            return (
              <button
                key={opt}
                className={`opt-btn${isWrong ? ' wrong' : ''}${isRight ? ' right' : ''}`}
                onClick={() => choose(opt)}
                disabled={isWrong}
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
