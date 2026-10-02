import React, { useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useContent } from '../../content/store';
import { adjustLevel, pickNear, type LevelState } from '../../content/select';
import type { OrderPuzzle } from '../../content/types';
import { LEVEL_NAMES, SUBJECT_INFO } from '../../data/subjects';
import { MAX_LEVEL, MIN_LEVEL } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import { PuzzleBar, colorVars } from './PuzzleBar';

const COLORS = { color: '#14B8A6', dark: '#0F766E', tint: '#F0FDFA' };
const ROUND = 5;
const MAX_TRIES = 2; // wrong checks allowed before the answer is shown

type Phase = 'intro' | 'playing' | 'done';

const shuffled = (items: string[]): string[] => {
  const out = [...items];
  // Never start already in the right order
  for (let tries = 0; tries < 10; tries++) {
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    if (out.some((v, i) => v !== items[i])) break;
  }
  return out;
};

// Put things in order by tapping them into the slots. A round is five puzzles.
export const OrderItWorld: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { skills, recordAnswer, addStars, kidName } = useApp();
  const { order } = useContent();
  const skill = skills.science;

  const [phase, setPhase] = useState<Phase>('intro');
  const [startLevel, setStartLevel] = useState(skill.level);
  const [levelState, setLevelState] = useState<LevelState>({ level: skill.level, streak: 0, misses: 0 });
  const [puzzle, setPuzzle] = useState<OrderPuzzle | null>(null);
  const [pool, setPool] = useState<string[]>([]);
  const [slots, setSlots] = useState<(string | null)[]>([]);
  const [locked, setLocked] = useState<boolean[]>([]); // slots confirmed correct
  const [marks, setMarks] = useState<(boolean | null)[]>([]); // result of the last check per slot
  const [tries, setTries] = useState(0);
  const [outcome, setOutcome] = useState<'playing' | 'right' | 'revealed'>('playing');
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [firstTryCount, setFirstTryCount] = useState(0);
  const [earned, setEarned] = useState(0);
  const [message, setMessage] = useState('');

  const recent = useRef<string[]>([]);
  const timer = useRef<number | undefined>(undefined);
  const pointsRef = useRef(0);
  const firstRef = useRef(0);
  const levelRef = useRef(skill.level);

  const load = (level: number) => {
    window.clearTimeout(timer.current);
    const p = pickNear(order?.puzzles ?? [], level, new Set(recent.current), Math.random);
    if (!p) { setPuzzle(null); return; }
    recent.current = [...recent.current, p.id].slice(-20);
    setPuzzle(p);
    setPool(shuffled(p.items));
    setSlots(p.items.map(() => null));
    setLocked(p.items.map(() => false));
    setMarks(p.items.map(() => null));
    setTries(0);
    setOutcome('playing');
    setMessage('');
  };

  const start = () => {
    sound.playPop();
    pointsRef.current = 0; firstRef.current = 0; levelRef.current = startLevel;
    setPoints(0); setFirstTryCount(0); setIndex(0);
    setLevelState({ level: startLevel, streak: 0, misses: 0 });
    load(startLevel);
    setPhase('playing');
  };

  const place = (item: string) => {
    if (outcome !== 'playing') return;
    const at = slots.findIndex((s, i) => s === null && !locked[i]);
    if (at === -1) return;
    sound.playPop(500 + at * 60);
    setSlots((s) => s.map((v, i) => (i === at ? item : v)));
    setPool((p) => p.filter((x) => x !== item));
    setMarks((m) => m.map(() => null));
  };

  const unplace = (at: number) => {
    if (outcome !== 'playing' || locked[at] || slots[at] === null) return;
    sound.playPop(380);
    const item = slots[at] as string;
    setSlots((s) => s.map((v, i) => (i === at ? null : v)));
    setPool((p) => [...p, item]);
    setMarks((m) => m.map(() => null));
  };

  const finishRound = () => {
    const stars = Math.ceil(pointsRef.current / 2) + (firstRef.current === ROUND ? 2 : 0);
    setEarned(stars);
    if (stars > 0) addStars(stars);
    setPhase('done');
  };

  const next = () => {
    window.clearTimeout(timer.current);
    if (index + 1 >= ROUND) { finishRound(); return; }
    setIndex((n) => n + 1);
    load(levelRef.current);
  };

  const settle = (firstTry: boolean, pts: number) => {
    const adj = adjustLevel(levelState, firstTry, MIN_LEVEL, MAX_LEVEL);
    setLevelState(adj);
    levelRef.current = adj.level;
    recordAnswer('science', firstTry, adj.level);
    pointsRef.current += pts;
    setPoints(pointsRef.current);
    if (firstTry) { firstRef.current += 1; setFirstTryCount(firstRef.current); }
  };

  const check = () => {
    if (!puzzle || slots.some((s) => s === null)) return;
    const right = slots.map((s, i) => s === puzzle.items[i]);
    if (right.every(Boolean)) {
      sound.playSuccess();
      setMarks(right);
      setOutcome('right');
      settle(tries === 0, tries === 0 ? 2 : 1);
      timer.current = window.setTimeout(next, 1700);
      return;
    }
    sound.playGentleTryAgain();
    const wrongCount = right.filter((r) => !r).length;
    const nextTries = tries + 1;
    setTries(nextTries);
    if (nextTries >= MAX_TRIES) {
      setSlots(puzzle.items);
      setPool([]);
      setMarks(puzzle.items.map(() => true));
      setLocked(puzzle.items.map(() => true));
      setOutcome('revealed');
      settle(false, 0);
      return;
    }
    // Keep what is right, send the rest back to the pool
    setMarks(right.map((r) => (r ? true : null)));
    const good = right.length - wrongCount;
    setMessage(good === 0 ? 'None in the right place yet. Try again!' : `${good} in the right place. Try the others again!`);
    setLocked(right);
    setPool((p) => [...p, ...slots.filter((_, i) => !right[i]) as string[]]);
    setSlots((s) => s.map((v, i) => (right[i] ? v : null)));
  };

  const full = slots.length > 0 && slots.every((s) => s !== null);
  const info = SUBJECT_INFO.science;

  return (
    <div className="page quiz" style={colorVars(COLORS)}>
      <PuzzleBar onBack={onBack} chip={`Level ${phase === 'playing' ? levelState.level : startLevel}`}>
        {phase === 'playing' && (
          <div className="quiz-dots" role="progressbar" aria-valuemin={0} aria-valuemax={ROUND} aria-valuenow={index}>
            {Array.from({ length: ROUND }, (_, n) => <span key={n} className={n < index ? 'done' : n === index ? 'now' : ''} />)}
          </div>
        )}
      </PuzzleBar>

      {phase === 'intro' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>🪜</div>
          <h2>Order It</h2>
          <p className="quiz-sub">Put planets, events and animals in the right order.</p>
          <p className="quiz-how">{ROUND} puzzles. Tap the cards to place them, then check.</p>
          <div className="quiz-stepper" aria-label="Choose a level">
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.max(MIN_LEVEL, l - 1)); }} disabled={startLevel <= MIN_LEVEL} aria-label="Easier"><Minus size={22} /></button>
            <div><strong>Level {startLevel}</strong><span>{LEVEL_NAMES[startLevel]}</span></div>
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.min(MAX_LEVEL, l + 1)); }} disabled={startLevel >= MAX_LEVEL} aria-label="Harder"><Plus size={22} /></button>
          </div>
          <p className="quiz-hint">{startLevel === skill.level ? `Picked for ${kidName}. ` : ''}It adjusts as you play. {info.title} level is shared with the quiz games.</p>
          <button className="quiz-primary" onClick={start}>Start</button>
        </section>
      )}

      {phase === 'playing' && !puzzle && (
        <section className="quiz-card quiz-intro">
          <p>No puzzles here yet. Connect to the internet once so new ones can download.</p>
          <button className="quiz-primary" onClick={onBack}>Back</button>
        </section>
      )}

      {phase === 'playing' && puzzle && (
        <section className="quiz-card" aria-live="polite">
          <div className="quiz-qhead">
            <span className="quiz-topic">{puzzle.topic}</span>
            <span className="quiz-score">{points} pts</span>
          </div>
          <h2 className="quiz-prompt">{puzzle.prompt}</h2>

          <div className="order-end">{puzzle.from}</div>
          <ol className="order-slots">
            {slots.map((s, i) => (
              <li key={i}>
                <button
                  className={`order-slot ${s ? 'filled' : ''} ${marks[i] === true ? 'right' : marks[i] === false ? 'wrong' : ''} ${locked[i] ? 'locked' : ''}`}
                  onClick={() => unplace(i)}
                  disabled={!s || locked[i] || outcome !== 'playing'}
                  aria-label={s ? `Position ${i + 1}: ${s}. Tap to take it back` : `Position ${i + 1}: empty`}
                >
                  <span className="order-num">{i + 1}</span>
                  <span className="order-text">{s ?? ''}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="order-end">{puzzle.to}</div>

          {pool.length > 0 && (
            <div className="order-pool" role="group" aria-label="Cards to place">
              {pool.map((item) => (
                <button key={item} className="order-card" onClick={() => place(item)}>{item}</button>
              ))}
            </div>
          )}

          {outcome === 'playing' && message && <p className="order-msg" role="status">{message}</p>}
          {outcome === 'playing' && (
            <button className="quiz-primary" onClick={check} disabled={!full}>Check</button>
          )}
          {outcome === 'right' && <p className="quiz-yay" role="status">{tries === 0 ? 'Perfect!' : 'You got it!'}</p>}
          {outcome === 'revealed' && (
            <div className="quiz-explain" role="status">
              <p><strong>Here is the right order.</strong></p>
              {puzzle.explain && <p>{puzzle.explain}</p>}
              <button className="quiz-primary" onClick={next}>{index + 1 >= ROUND ? 'See results' : 'Next'}</button>
            </div>
          )}
          {outcome === 'right' && puzzle.explain && <p className="order-explain">{puzzle.explain}</p>}
        </section>
      )}

      {phase === 'done' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>{firstTryCount === ROUND ? '🏆' : '🪜'}</div>
          <h2>{firstTryCount} of {ROUND} first try</h2>
          <p className="quiz-sub">{firstTryCount === ROUND ? 'A perfect round!' : points >= ROUND ? 'Nice ordering.' : 'Good try. Every round makes you sharper.'}</p>
          <p className="quiz-stars">+{earned} ⭐</p>
          <div className="quiz-actions">
            <button className="quiz-primary" onClick={() => { setStartLevel(levelState.level); setPhase('intro'); }}>Play again</button>
            <button className="quiz-secondary" onClick={onBack}>Done</button>
          </div>
        </section>
      )}
    </div>
  );
};
