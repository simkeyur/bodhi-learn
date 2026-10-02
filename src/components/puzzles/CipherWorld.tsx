import React, { useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { adjustLevel, type LevelState } from '../../content/select';
import { ALPHABET, atbash, checkCipher, makeCipherPuzzle, shiftText, type CipherPuzzle } from '../../data/cipher';
import { LEVEL_NAMES } from '../../data/subjects';
import { MAX_LEVEL, MIN_LEVEL } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import { PuzzleBar, colorVars } from './PuzzleBar';

const COLORS = { color: '#6366F1', dark: '#4338CA', tint: '#EEF2FF' };
const ROUND = 5;
const MAX_TRIES = 3;

type Phase = 'intro' | 'playing' | 'done';

interface Pick { letter: string; side: 'plain' | 'cipher' }

// Two rows per half of the alphabet: the plain letter on top and what it becomes below
const Wheel: React.FC<{ mirror: boolean; shift: number; onShift: (n: number) => void; pick: Pick | null }> = ({ mirror, shift, onShift, pick }) => {
  const toCipher = (c: string) => (mirror ? atbash(c) : shiftText(c, shift));
  return (
    <div className="wheel" aria-label={mirror ? 'The mirror alphabet' : `Cipher wheel, shift ${shift}`}>
      {!mirror && (
        <div className="wheel-controls">
          <button onClick={() => { sound.playPop(); onShift((shift + 25) % 26); }} aria-label="Turn the wheel back one"><Minus size={20} /></button>
          <label>
            <span>Shift <b>{shift}</b></span>
            <input type="range" min={0} max={25} value={shift} onChange={(e) => onShift(Number(e.target.value))} aria-label="Shift" />
          </label>
          <button onClick={() => { sound.playPop(); onShift((shift + 1) % 26); }} aria-label="Turn the wheel forward one"><Plus size={20} /></button>
        </div>
      )}
      {[ALPHABET.slice(0, 13), ALPHABET.slice(13)].map((half) => (
        <div className="wheel-half" key={half}>
          {[...half].map((plain) => {
            const cipher = toCipher(plain);
            const hot = pick && (pick.side === 'plain' ? pick.letter === plain : pick.letter === cipher);
            return (
              <div key={plain} className={`wheel-col ${hot ? 'hot' : ''}`}>
                <span className="wheel-plain">{plain}</span>
                <span className="wheel-cipher">{cipher}</span>
              </div>
            );
          })}
        </div>
      ))}
      <p className="wheel-key"><span className="wheel-plain">Top row: real letter</span> <span className="wheel-cipher">Bottom row: secret letter</span></p>
    </div>
  );
};

// Secret messages: decode, encode, crack a hidden shift, or read the mirror cipher.
// Five per round; the difficulty follows the child like the quiz games do.
export const CipherWorld: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { skills, recordAnswer, addStars, kidName } = useApp();
  const skill = skills.logic;

  const [phase, setPhase] = useState<Phase>('intro');
  const [startLevel, setStartLevel] = useState(skill.level);
  const [levelState, setLevelState] = useState<LevelState>({ level: skill.level, streak: 0, misses: 0 });
  const [puzzle, setPuzzle] = useState<CipherPuzzle | null>(null);
  const [shift, setShift] = useState(0);
  const [pick, setPick] = useState<Pick | null>(null);
  const [typed, setTyped] = useState('');
  const [tries, setTries] = useState(0);
  const [outcome, setOutcome] = useState<'playing' | 'right' | 'revealed'>('playing');
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [firstTryCount, setFirstTryCount] = useState(0);
  const [earned, setEarned] = useState(0);

  const seen = useRef<string[]>([]);
  const timer = useRef<number | undefined>(undefined);
  const pointsRef = useRef(0);
  const firstRef = useRef(0);
  const levelRef = useRef(skill.level);

  const load = (level: number) => {
    window.clearTimeout(timer.current);
    let p = makeCipherPuzzle(level);
    for (let i = 0; i < 12 && seen.current.includes(p.answer); i++) p = makeCipherPuzzle(level);
    seen.current = [...seen.current, p.answer].slice(-12);
    setPuzzle(p);
    setShift(p.startShift);
    setPick(null);
    setTyped('');
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

  const next = () => {
    window.clearTimeout(timer.current);
    if (index + 1 >= ROUND) {
      const stars = Math.ceil(pointsRef.current / 2) + (firstRef.current === ROUND ? 2 : 0);
      setEarned(stars);
      if (stars > 0) addStars(stars);
      setPhase('done');
      return;
    }
    setIndex((n) => n + 1);
    load(levelRef.current);
  };

  const settle = (firstTry: boolean, pts: number) => {
    const adj = adjustLevel(levelState, firstTry, MIN_LEVEL, MAX_LEVEL);
    setLevelState(adj);
    levelRef.current = adj.level;
    recordAnswer('logic', firstTry, adj.level);
    pointsRef.current += pts;
    setPoints(pointsRef.current);
    if (firstTry) { firstRef.current += 1; setFirstTryCount(firstRef.current); }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!puzzle || outcome !== 'playing' || !typed.trim()) return;
    if (checkCipher(puzzle, typed)) {
      sound.playSuccess();
      setOutcome('right');
      settle(tries === 0, tries === 0 ? 2 : 1);
      timer.current = window.setTimeout(next, 1800);
      return;
    }
    sound.playGentleTryAgain();
    const n = tries + 1;
    setTries(n);
    if (n >= MAX_TRIES) {
      setOutcome('revealed');
      settle(false, 0);
      return;
    }
    setMessage(puzzle.kind === 'encode' ? 'Not quite. Look each letter up on the top row and read the letter below it.' : 'Not quite. Check each letter: find it on the bottom row and read the letter above.');
  };

  const mirror = puzzle?.kind === 'mirror';
  const encode = puzzle?.kind === 'encode';

  return (
    <div className="page quiz cipher" style={colorVars(COLORS)}>
      <PuzzleBar onBack={onBack} chip={`Level ${phase === 'playing' ? levelState.level : startLevel}`}>
        {phase === 'playing' && (
          <div className="quiz-dots" role="progressbar" aria-valuemin={0} aria-valuemax={ROUND} aria-valuenow={index}>
            {Array.from({ length: ROUND }, (_, n) => <span key={n} className={n < index ? 'done' : n === index ? 'now' : ''} />)}
          </div>
        )}
      </PuzzleBar>

      {phase === 'intro' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>🔐</div>
          <h2>Cipher Desk</h2>
          <p className="quiz-sub">Write and crack secret messages.</p>
          <p className="quiz-how">{ROUND} messages. A Caesar cipher moves every letter along the alphabet by the same number.</p>
          <div className="quiz-stepper" aria-label="Choose a level">
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.max(MIN_LEVEL, l - 1)); }} disabled={startLevel <= MIN_LEVEL} aria-label="Easier"><Minus size={22} /></button>
            <div><strong>Level {startLevel}</strong><span>{LEVEL_NAMES[startLevel]}</span></div>
            <button onClick={() => { sound.playPop(); setStartLevel((l) => Math.min(MAX_LEVEL, l + 1)); }} disabled={startLevel >= MAX_LEVEL} aria-label="Harder"><Plus size={22} /></button>
          </div>
          <p className="quiz-hint">{startLevel === skill.level ? `Picked for ${kidName}. ` : ''}It adjusts as you play. The level is shared with the other logic games.</p>
          <button className="quiz-primary" onClick={start}>Start</button>
        </section>
      )}

      {phase === 'playing' && puzzle && (
        <section className="quiz-card" aria-live="polite">
          <div className="quiz-qhead">
            <span className="quiz-topic">{puzzle.kind === 'mirror' ? 'mirror cipher' : puzzle.kind}</span>
            <span className="quiz-score">{points} pts</span>
          </div>
          <p className="cipher-prompt">{puzzle.prompt}</p>

          <div className="cipher-message" aria-label={`${encode ? 'Plain word' : 'Secret message'}: ${puzzle.show}`}>
            {[...puzzle.show].map((ch, i) => (ch === ' '
              ? <span key={i} className="cipher-gap" />
              : <button key={i} className="cipher-tile" onClick={() => { sound.playPop(600); setPick({ letter: ch, side: encode ? 'plain' : 'cipher' }); }} aria-label={`Letter ${ch}`}>{ch}</button>))}
          </div>
          <p className="cipher-tap">Tap a letter to find it on the wheel.</p>

          <Wheel mirror={mirror} shift={shift} onShift={(n) => { setShift(n); setPick(null); }} pick={pick} />

          {puzzle.hint && <p className="cipher-hint">Hint: {puzzle.hint}</p>}

          {outcome === 'playing' && (
            <form className="cipher-form" onSubmit={submit}>
              <input
                className="cipher-input"
                value={typed}
                onChange={(e) => setTyped(e.target.value.toUpperCase())}
                placeholder={encode ? 'Type the secret code' : 'Type the real message'}
                aria-label={encode ? 'Secret code' : 'Real message'}
                autoCapitalize="characters"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <button className="quiz-primary" type="submit" disabled={!typed.trim()}>Check</button>
            </form>
          )}
          {outcome === 'playing' && message && <p className="order-msg" role="status">{message}</p>}
          {outcome === 'right' && <p className="quiz-yay" role="status">{tries === 0 ? 'Cracked it!' : 'You got it!'}</p>}
          {outcome === 'revealed' && (
            <div className="quiz-explain" role="status">
              <p><strong>The answer was {puzzle.answer}.</strong></p>
              {puzzle.shift !== null && <p>The shift was {puzzle.shift}.</p>}
              <button className="quiz-primary" onClick={next}>{index + 1 >= ROUND ? 'See results' : 'Next'}</button>
            </div>
          )}
        </section>
      )}

      {phase === 'done' && (
        <section className="quiz-card quiz-intro">
          <div className="quiz-emoji" aria-hidden>{firstTryCount === ROUND ? '🏆' : '🔐'}</div>
          <h2>{firstTryCount} of {ROUND} on the first try</h2>
          <p className="quiz-sub">{firstTryCount === ROUND ? 'A master code breaker!' : points >= ROUND ? 'Nice detective work.' : 'Good try. Codes get easier with practice.'}</p>
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
