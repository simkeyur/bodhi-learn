import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useContent } from '../../content/store';
import { adjustLevel, nextQuestion, type LevelState } from '../../content/select';
import type { Question } from '../../content/types';
import { LEVEL_NAMES, SUBJECT_INFO } from '../../data/subjects';
import { LIVES, LIVES_CAP, ROUND_QUESTIONS, SPRINT_SECONDS, type QuizGame } from '../../data/quizGames';
import { MAX_LEVEL, MIN_LEVEL } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import './quiz.css';

const RECENT_MEMORY = 40;

interface QuizWorldProps {
  game: QuizGame;
  onBack: () => void;
}

type Phase = 'intro' | 'playing' | 'done';

const HOW_TO: Record<QuizGame['mode'], string> = {
  round: `${ROUND_QUESTIONS} questions. Answer as many as you can.`,
  sprint: `You have ${SPRINT_SECONDS} seconds. Answer as many as you can!`,
  lives: `You have ${LIVES} lives. A wrong answer costs one. How far can you get?`,
};

// One game: a topic group from a subject, played as a round, a sprint or with lives.
// The level is shared by every game in the subject: four right in a row goes up, two wrong in a row goes down.
export const QuizWorld: React.FC<QuizWorldProps> = ({ game, onBack }) => {
  const { skills, recordAnswer, addStars, kidName } = useApp();
  const { packs } = useContent();
  const subject = game.subject;
  const info = SUBJECT_INFO[subject];
  const skill = skills[subject];
  const { mode } = game;

  const [phase, setPhase] = useState<Phase>('intro');
  const [startLevel, setStartLevel] = useState(skill.level);
  const [levelState, setLevelState] = useState<LevelState>({ level: skill.level, streak: 0, misses: 0 });
  const [question, setQuestion] = useState<Question | null>(null);
  const [asked, setAsked] = useState(0); // questions answered this game
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [secondsLeft, setSecondsLeft] = useState(SPRINT_SECONDS);
  const [earned, setEarned] = useState(0);

  // Refs hold what the timers read, since state inside a timeout callback would be stale
  const scoreRef = useRef(0);
  const livesRef = useRef(LIVES);
  const askedRef = useRef(0);
  const levelRef = useRef(skill.level);
  const finishedRef = useRef(false);
  const recent = useRef<string[]>([]);
  const timer = useRef<number | undefined>(undefined);
  const clock = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    window.clearTimeout(timer.current);
    window.clearInterval(clock.current);
  }, []);

  const draw = useCallback((level: number) => {
    const q = nextQuestion(subject, level, packs, new Set(recent.current), Math.random, game.topics);
    if (q) recent.current = [...recent.current, q.id].slice(-RECENT_MEMORY);
    setQuestion(q);
    setPicked(null);
    return q;
  }, [subject, packs, game.topics]);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    window.clearTimeout(timer.current);
    window.clearInterval(clock.current);
    const s = scoreRef.current;
    const stars =
      mode === 'sprint' ? Math.ceil(s / 3)
        : mode === 'round' ? Math.ceil(s / 2) + (s === ROUND_QUESTIONS ? 2 : 0)
          : Math.ceil(s / 2);
    setEarned(stars);
    if (stars > 0) addStars(stars);
    setPhase('done');
  };

  const start = () => {
    sound.playPop();
    finishedRef.current = false;
    scoreRef.current = 0; livesRef.current = LIVES; askedRef.current = 0; levelRef.current = startLevel;
    setScore(0); setLives(LIVES); setAsked(0); setSecondsLeft(SPRINT_SECONDS);
    setLevelState({ level: startLevel, streak: 0, misses: 0 });
    draw(startLevel);
    setPhase('playing');

    if (mode === 'sprint') {
      const endAt = Date.now() + SPRINT_SECONDS * 1000;
      clock.current = window.setInterval(() => {
        const left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
        setSecondsLeft(left);
        if (left <= 0) finish();
      }, 250);
    }
  };

  const isOver = () =>
    (mode === 'round' && askedRef.current >= ROUND_QUESTIONS)
    || (mode === 'lives' && (livesRef.current <= 0 || askedRef.current >= LIVES_CAP));

  const advance = () => {
    window.clearTimeout(timer.current);
    if (finishedRef.current) return;
    if (isOver()) { finish(); return; }
    draw(levelRef.current);
  };

  const choose = (i: number) => {
    if (!question || picked !== null || finishedRef.current) return;
    setPicked(i);
    const correct = i === question.answer;
    const next = adjustLevel(levelState, correct, MIN_LEVEL, MAX_LEVEL);
    setLevelState(next);
    levelRef.current = next.level;
    recordAnswer(subject, correct, next.level);

    askedRef.current += 1;
    setAsked(askedRef.current);
    if (correct) {
      sound.playSuccess();
      scoreRef.current += 1;
      setScore(scoreRef.current);
    } else {
      sound.playGentleTryAgain();
      if (mode === 'lives') {
        livesRef.current -= 1;
        setLives(livesRef.current);
      }
    }

    // Sprints keep moving; right answers elsewhere move on by themselves, wrong ones wait for the child
    if (mode === 'sprint') timer.current = window.setTimeout(advance, correct ? 450 : 1000);
    else if (correct) timer.current = window.setTimeout(advance, 1000);
  };

  const accuracy = skill.answered ? Math.round((skill.correct / skill.answered) * 100) : null;
  const style = { '--q-color': game.color, '--q-dark': game.dark, '--q-tint': game.tint } as React.CSSProperties;
  const levelMoved = levelState.level - startLevel;
  const wrongPicked = picked !== null && question !== null && picked !== question.answer;
  const lastQuestion = mode === 'round' ? asked >= ROUND_QUESTIONS : mode === 'lives' ? lives <= 0 || asked >= LIVES_CAP : false;

  return (
    <div className="page quiz" style={style}>
      <div className="quiz-bar">
        <button className="quiz-back" onClick={() => { sound.playPop(); onBack(); }} aria-label="Back to home">
          <ArrowLeft size={20} /> <span>Home</span>
        </button>

        {phase === 'playing' && mode === 'round' && (
          <div className="quiz-dots" role="progressbar" aria-valuemin={0} aria-valuemax={ROUND_QUESTIONS} aria-valuenow={asked}>
            {Array.from({ length: ROUND_QUESTIONS }, (_, n) => (
              <span key={n} className={n < asked ? 'done' : n === asked ? 'now' : ''} />
            ))}
          </div>
        )}
        {phase === 'playing' && mode === 'sprint' && (
          <div className="quiz-clock" role="timer" aria-label={`${secondsLeft} seconds left`}>
            <span className="quiz-clock-bar"><span style={{ width: `${(secondsLeft / SPRINT_SECONDS) * 100}%` }} /></span>
            <b>{secondsLeft}s</b>
          </div>
        )}
        {phase === 'playing' && mode === 'lives' && (
          <div className="quiz-lives" aria-label={`${lives} lives left`}>
            {Array.from({ length: LIVES }, (_, n) => (
              <Heart key={n} size={24} className={n < lives ? 'on' : 'off'} fill={n < lives ? 'currentColor' : 'none'} />
            ))}
            <b>{score}</b>
          </div>
        )}

        <span className="quiz-level-chip">Level {phase === 'playing' ? levelState.level : startLevel}</span>
      </div>

      {phase === 'intro' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>{game.icon}</div>
          <h2>{game.title}</h2>
          <p className="quiz-sub">{game.blurb}</p>
          <p className="quiz-how">{HOW_TO[mode]}</p>

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
            {accuracy !== null && ` ${info.title}: ${skill.answered} answered so far, ${accuracy}% right.`}
          </p>

          <button className="quiz-primary" onClick={start}>Start</button>
        </section>
      )}

      {phase === 'playing' && question && (
        <section className="quiz-card" aria-live="polite">
          <div className="quiz-qhead">
            <span className="quiz-topic">{question.topic}</span>
            {mode === 'sprint' && <span className="quiz-score">{score} right</span>}
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

          {wrongPicked && mode !== 'sprint' && (
            <div className="quiz-explain" role="status">
              <p><strong>Not quite.</strong> The answer is <b>{question.choices[question.answer]}</b>.</p>
              {question.explain && <p>{question.explain}</p>}
              <button className="quiz-primary" onClick={advance}>{lastQuestion ? 'See results' : 'Next'}</button>
            </div>
          )}
          {picked !== null && !wrongPicked && mode !== 'sprint' && <p className="quiz-yay" role="status">Correct!</p>}
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
          <div className="quiz-emoji" aria-hidden>{game.icon}</div>
          {mode === 'round' && <h2>{score} out of {ROUND_QUESTIONS}</h2>}
          {mode === 'sprint' && <h2>{score} right in {SPRINT_SECONDS} seconds</h2>}
          {mode === 'lives' && <h2>{score} right before the lives ran out</h2>}
          <p className="quiz-sub">
            {mode === 'round' && (score === ROUND_QUESTIONS ? 'A perfect round!' : score >= ROUND_QUESTIONS / 2 ? 'Nice work.' : 'Good try. Every round makes you stronger.')}
            {mode === 'sprint' && (score >= 15 ? 'Lightning fast!' : score >= 8 ? 'Quick thinking!' : 'Try again and beat your score.')}
            {mode === 'lives' && (lives > 0 ? `You made it through all ${LIVES_CAP} questions!` : score >= 10 ? 'What a run!' : 'Good try. Go again!')}
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
