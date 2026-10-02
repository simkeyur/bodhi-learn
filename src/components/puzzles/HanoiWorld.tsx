import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MAX_DISCS, MIN_DISCS, canMove, isSolved, move, newGame, optimalMoves, solveFrom, type Pegs } from '../../data/hanoi';
import { sound } from '../../utils/sound';
import { PuzzleBar, colorVars } from './PuzzleBar';

const COLORS = { color: '#EF4444', dark: '#B91C1C', tint: '#FEF2F2' };
const DISC_COLORS = ['#F87171', '#FB923C', '#FBBF24', '#4ADE80', '#38BDF8', '#818CF8', '#C084FC'];
const LEVELS = Array.from({ length: MAX_DISCS - MIN_DISCS + 1 }, (_, i) => MIN_DISCS + i);

// A sensible first tower for the child's age: bigger towers for older children
const startDiscs = (age: number) => Math.min(MAX_DISCS, Math.max(MIN_DISCS, age <= 7 ? 3 : age <= 9 ? 4 : age <= 11 ? 5 : 6));

export const HanoiWorld: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { age, solved, markSolved, addStars } = useApp();

  const [discs, setDiscs] = useState(() => {
    const first = LEVELS.find((n) => n >= startDiscs(age) && !solved.includes(`hanoi-${n}`));
    return first ?? startDiscs(age);
  });
  const [pegs, setPegs] = useState<Pegs>(() => newGame(discs));
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [hint, setHint] = useState<[number, number] | null>(null);
  const [shake, setShake] = useState<number | null>(null);
  const [win, setWin] = useState<{ stars: number; optimal: boolean } | null>(null);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const reset = (n: number) => {
    sound.playPop();
    setDiscs(n);
    setPegs(newGame(n));
    setSelected(null);
    setMoves(0);
    setHint(null);
    setWin(null);
  };

  const tapPeg = (i: number) => {
    if (win) return;
    setHint(null);
    if (selected === null) {
      if (pegs[i].length) { sound.playPop(600); setSelected(i); }
      return;
    }
    if (selected === i) { setSelected(null); return; }
    if (!canMove(pegs, selected, i)) {
      sound.playGentleTryAgain();
      setShake(i);
      timer.current = window.setTimeout(() => setShake(null), 400);
      setSelected(null);
      return;
    }
    const next = move(pegs, selected, i);
    const count = moves + 1;
    sound.playPop(420 + i * 120);
    setPegs(next);
    setMoves(count);
    setSelected(null);
    if (isSolved(next, discs)) {
      const optimal = count === optimalMoves(discs);
      // Stars are paid the first time a tower is solved: bigger towers pay more
      const first = markSolved(`hanoi-${discs}`);
      const stars = first ? discs - 1 + (optimal ? 1 : 0) : 0;
      if (stars > 0) addStars(stars); else sound.playSuccess();
      setWin({ stars, optimal });
    }
  };

  const showHint = () => {
    sound.playPop(700);
    const plan = solveFrom(pegs);
    setSelected(null);
    setHint(plan.length ? plan[0] : null);
  };

  const best = optimalMoves(discs);

  return (
    <div className="page quiz" style={colorVars(COLORS)}>
      <PuzzleBar onBack={onBack} chip={`${discs} discs`} />

      <section className="quiz-card">
        <div className="hanoi-levels" role="group" aria-label="Choose a tower size">
          {LEVELS.map((n) => (
            <button key={n} className={`hanoi-level ${n === discs ? 'on' : ''}`} onClick={() => reset(n)} aria-pressed={n === discs}>
              {n}{solved.includes(`hanoi-${n}`) ? ' ✓' : ''}
            </button>
          ))}
        </div>

        <h2 className="quiz-prompt">Move the whole tower to the last peg.</h2>
        <p className="hanoi-rules">One disc at a time. A bigger disc can never sit on a smaller one.</p>

        <div className="hanoi-board">
          {pegs.map((peg, i) => (
            <button
              key={i}
              className={`hanoi-peg ${selected === i ? 'selected' : ''} ${hint && hint[1] === i ? 'to' : ''} ${hint && hint[0] === i ? 'from' : ''} ${shake === i ? 'shake' : ''} ${i === 2 ? 'goal' : ''}`}
              onClick={() => tapPeg(i)}
              aria-label={`Peg ${i + 1}${i === 2 ? ' (goal)' : ''}, ${peg.length ? `top disc ${peg[peg.length - 1]} of ${discs}` : 'empty'}${selected === i ? ', selected' : ''}`}
            >
              <span className="hanoi-rod" />
              <span className="hanoi-stack">
                {peg.map((d, idx) => (
                  <span
                    key={d}
                    className={`hanoi-disc ${selected === i && idx === peg.length - 1 ? 'lifted' : ''}`}
                    style={{ width: `${28 + (d / discs) * 66}%`, background: DISC_COLORS[(d - 1) % DISC_COLORS.length] }}
                  />
                ))}
              </span>
              <span className="hanoi-base" />
            </button>
          ))}
        </div>

        <div className="hanoi-status">
          <span><b>{moves}</b> moves</span>
          <span>Fewest possible: <b>{best}</b></span>
        </div>

        {win ? (
          <div className="quiz-explain" role="status">
            <p><strong>{win.optimal ? 'Perfect! The fewest moves possible.' : 'You did it!'}</strong></p>
            <p>{moves} moves{win.optimal ? '' : `. It can be done in ${best}. Can you beat it?`}{win.stars > 0 ? ` +${win.stars} ⭐` : ''}</p>
            <div className="quiz-actions">
              {discs < MAX_DISCS && <button className="quiz-primary" onClick={() => reset(discs + 1)}>Try {discs + 1} discs</button>}
              <button className="quiz-secondary" onClick={() => reset(discs)}>Again</button>
            </div>
          </div>
        ) : (
          <div className="quiz-actions">
            <button className="quiz-secondary" onClick={showHint}><Lightbulb size={18} /> Hint</button>
            <button className="quiz-secondary" onClick={() => reset(discs)}><RotateCcw size={18} /> Restart</button>
          </div>
        )}
      </section>
    </div>
  );
};
