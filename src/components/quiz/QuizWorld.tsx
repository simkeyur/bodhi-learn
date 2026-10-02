import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Minus, Plus, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useContent } from '../../content/store';
import { adjustLevel, nextQuestion, type LevelState } from '../../content/select';
import type { Question } from '../../content/types';
import { LEVEL_NAMES, SUBJECT_INFO } from '../../data/subjects';
import { MAX_LEVEL, MIN_LEVEL, type Subject } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import './quiz.css';

const ROUND_LENGTH = 8;
const RECENT_MEMORY = 40;

interface QuizWorldProps {
  subject: Subject;
  onBack: () => void;
}

type Phase = 'intro' | 'playing' | 'done';

// An adaptive round of questions for one subject. Level moves with the child: four right in a row
// goes up, two wrong in a row goes down. The level is saved with the account.
export const QuizWorld: React.FC<QuizWorldProps> = ({ subject, onBack }) => {
  const { skills, recordAnswer, addStars, age, kidName } = useApp();
  const { packs } = useContent();
  const info = SUBJECT_INFO[subject];
  const skill = skills[subject];

  const [phase, setPhase] = useState<Phase>('intro');
  const [startLevel, setStartLevel] = useState(skill.level);
  const [levelState, setLevelState] = useState<LevelState>({ level: skill.level, streak: 0, misses: 0 });
  const [question, setQuestion] = useState<Question | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [earned, setEarned] = useState(0);

  const scoreRef = useRef(0); // read when the round ends (state would be stale inside the timer)
  const recent = useRef<string[]>([]);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const autoRead = age <= 7;

  const draw = useCallback((level: number) => {
    const q = nextQuestion(subject, level, packs, new Set(recent.current));
    if (q) recent.current = [...recent.current, q.id].slice(-RECENT_MEMORY);
    setQuestion(q);
    setPicked(null);
    return q;
  }, [subject, packs]);

  const read = (q: Question) => {
    const choices = q.choices.map((c, i) => `${String.fromCharCode(65 + i)}. ${c}`).join('. ');
    speech.speakText(`${q.prompt} ${choices}`);
  };

  const start = () => {
    sound.playPop();
    const level = startLevel;
    setLevelState({ level, streak: 0, misses: 0 });
    setIndex(0);
    setScore(0);
    scoreRef.current = 0;
    const q = draw(level);
    setPhase('playing');
    if (q && autoRead) read(q);
  };

  const choose = (i: number) => {
    if (!question || picked !== null) return;
    setPicked(i);
    const correct = i === question.answer;
    const next = adjustLevel(levelState, correct, MIN_LEVEL, MAX_LEVEL);
    setLevelState(next);
    recordAnswer(subject, correct, next.level);
    if (correct) {
      sound.playSuccess();
      scoreRef.current += 1;
      setScore(scoreRef.current);
      timer.current = window.setTimeout(advance, 1100, next.level);
    } else {
      sound.playGentleTryAgain();
    }
  };

  const advance = (level: number = levelState.level) => {
    window.clearTimeout(timer.current);
    if (index + 1 >= ROUND_LENGTH) {
      finish();
      return;
    }
    setIndex((n) => n + 1);
    const q = draw(level);
    if (q && autoRead) read(q);
  };

  const finish = () => {
    speech.stop();
    // Half a star per right answer, plus a bonus for a perfect round
    const s = scoreRef.current;
    const stars = Math.ceil(s / 2) + (s === ROUND_LENGTH ? 2 : 0);
    setEarned(stars);
    if (stars > 0) addStars(stars);
    setPhase('done');
  };

  const accuracy = skill.answered ? Math.round((skill.correct / skill.answered) * 100) : null;
  const style = { '--q-color': info.color, '--q-dark': info.dark, '--q-tint': info.tint } as React.CSSProperties;

  const levelMoved = useMemo(() => levelState.level - startLevel, [levelState.level, startLevel]);

  return (
    <div className="page quiz" style={style}>
      <div className="quiz-bar">
        <button className="quiz-back" onClick={() => { sound.playPop(); speech.stop(); onBack(); }} aria-label={`Back to ${info.title}`}>
          <ArrowLeft size={20} /> <span>{info.title}</span>
        </button>
        {phase === 'playing' && (
          <div className="quiz-dots" role="progressbar" aria-valuemin={0} aria-valuemax={ROUND_LENGTH} aria-valuenow={index}>
            {Array.from({ length: ROUND_LENGTH }, (_, n) => (
              <span key={n} className={n < index ? 'done' : n === index ? 'now' : ''} />
            ))}
          </div>
        )}
        <span className="quiz-level-chip">Level {phase === 'playing' ? levelState.level : startLevel}</span>
      </div>

      {phase === 'intro' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>{info.icon}</div>
          <h2>{info.title} challenge</h2>
          <p className="quiz-sub">{ROUND_LENGTH} questions. {info.topics}.</p>

          <div className="quiz-stepper" aria-label="Choose a level">
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.max(MIN_LEVEL, l - 1)); }} disabled={startLevel <= MIN_LEVEL} aria-label="Easier">
              <Minus size={22} />
            </button>
            <div>
              <strong>Level {startLevel}</strong>
              <span>{LEVEL_NAMES[startLevel]}</span>
            </div>
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.min(MAX_LEVEL, l + 1)); }} disabled={startLevel >= MAX_LEVEL} aria-label="Harder">
              <Plus size={22} />
            </button>
          </div>
          <p className="quiz-hint">
            {startLevel === skill.level ? `Picked for ${kidName}. ` : ''}It adjusts as you play.
            {accuracy !== null && ` ${skill.answered} answered so far, ${accuracy}% right.`}
          </p>

          <button className="quiz-primary" onClick={start}>Start</button>
        </section>
      )}

      {phase === 'playing' && question && (
        <section className="quiz-card" aria-live="polite">
          <div className="quiz-qhead">
            <span className="quiz-topic">{question.topic}</span>
            <button className="quiz-read" onClick={() => { sound.playPop(600); read(question); }} aria-label="Read the question aloud">
              <Volume2 size={20} />
            </button>
          </div>
          <h2 className="quiz-prompt">{question.prompt}</h2>

          <div className={`quiz-choices ${question.choices.some((c) => c.length > 22) ? 'long' : ''}`}>
            {question.choices.map((choice, i) => {
              const state = picked === null ? '' : i === question.answer ? 'right' : i === picked ? 'wrong' : 'dim';
              return (
                <button key={`${question.id}-${i}`} className={`quiz-choice ${state}`} onClick={() => choose(i)} disabled={picked !== null}>
                  <span className="quiz-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{choice}</span>
                </button>
              );
            })}
          </div>

          {picked !== null && picked !== question.answer && (
            <div className="quiz-explain" role="status">
              <p><strong>Not quite.</strong> The answer is <b>{question.choices[question.answer]}</b>.</p>
              {question.explain && <p>{question.explain}</p>}
              <button className="quiz-primary" onClick={() => advance()}>
                {index + 1 >= ROUND_LENGTH ? 'See results' : 'Next'}
              </button>
            </div>
          )}
          {picked !== null && picked === question.answer && <p className="quiz-yay" role="status">Correct!</p>}
        </section>
      )}

      {phase === 'playing' && !question && (
        <section className="quiz-card quiz-intro">
          <p>No questions here yet. Connect to the internet once so new ones can download.</p>
          <button className="quiz-primary" onClick={onBack}>Back</button>
        </section>
      )}

      {phase === 'done' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>{score === ROUND_LENGTH ? '🏆' : score >= ROUND_LENGTH / 2 ? '🌟' : '💪'}</div>
          <h2>{score} out of {ROUND_LENGTH}</h2>
          <p className="quiz-sub">
            {score === ROUND_LENGTH ? 'A perfect round!' : score >= ROUND_LENGTH / 2 ? 'Nice work.' : 'Good try. Every round makes you stronger.'}
          </p>
          <p className="quiz-stars">+{earned} ⭐</p>
          {levelMoved !== 0 && (
            <p className="quiz-hint">{levelMoved > 0 ? `You moved up to level ${levelState.level}.` : `Moved to level ${levelState.level} to build confidence.`}</p>
          )}
          <div className="quiz-actions">
            <button className="quiz-primary" onClick={() => { setStartLevel(levelState.level); setPhase('intro'); }}>Play again</button>
            <button className="quiz-secondary" onClick={onBack}>Done</button>
          </div>
        </section>
      )}
    </div>
  );
};
