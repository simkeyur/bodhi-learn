import React, { useState } from 'react';
import { Lightbulb, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  GATE_CHALLENGES, combinations, evaluate, goalTable, isSolved, layout, outputId, truthTable,
  type Choice, type GateChallenge, type Op,
} from '../../data/gates';
import { sound } from '../../utils/sound';
import { PuzzleBar, colorVars } from './PuzzleBar';

const COLORS = { color: '#EAB308', dark: '#A16207', tint: '#FEFCE8' };

const COL_W = 170;
const ROW_H = 100;
const GATE_W = 104;
const GATE_H = 56;
const SWITCH_R = 28;
const BULB_R = 34;

const ON = '#16A34A';
const OFF = '#94A3B8';

const starsFor = (ch: GateChallenge) => Math.max(1, ch.level - 5);

const Circuit: React.FC<{
  ch: GateChallenge;
  switches: Record<string, boolean>;
  choice: Choice;
  onSwitch: (name: string) => void;
  onGate: (id: string) => void;
}> = ({ ch, switches, choice, onSwitch, onGate }) => {
  const { nodes, cols } = layout(ch);
  const values = evaluate(ch, switches, choice);
  const rowsIn = (c: number) => nodes.filter((n) => n.col === c).length;
  const maxRows = Math.max(...nodes.map((n) => rowsIn(n.col)));
  const W = cols * COL_W;
  const H = maxRows * ROW_H;
  const pos = Object.fromEntries(nodes.map((n) => [n.id, {
    x: n.col * COL_W + COL_W / 2,
    y: ((maxRows - rowsIn(n.col)) * ROW_H) / 2 + n.row * ROW_H + ROW_H / 2,
    kind: n.kind,
  }]));
  const halfW = (id: string) => (pos[id].kind === 'gate' ? GATE_W / 2 : pos[id].kind === 'bulb' ? BULB_R : SWITCH_R);

  const wires: { key: string; d: string; v: boolean | null }[] = [];
  for (const g of ch.gates) {
    g.inputs.forEach((src, i) => {
      const port = (i - (g.inputs.length - 1) / 2) * 16;
      const sx = pos[src].x + halfW(src);
      const sy = pos[src].y;
      const tx = pos[g.id].x - GATE_W / 2;
      const ty = pos[g.id].y + port;
      const mx = (sx + tx) / 2;
      wires.push({ key: `${src}-${g.id}-${i}`, d: `M${sx},${sy} C${mx},${sy} ${mx},${ty} ${tx},${ty}`, v: values[src] ?? null });
    });
  }
  const out = outputId(ch);
  const bx = pos.bulb.x - BULB_R;
  wires.push({ key: 'out', d: `M${pos[out].x + GATE_W / 2},${pos[out].y} C${(pos[out].x + GATE_W / 2 + bx) / 2},${pos[out].y} ${(pos[out].x + GATE_W / 2 + bx) / 2},${pos.bulb.y} ${bx},${pos.bulb.y}`, v: values[out] ?? null });

  const lit = values[out] === true;
  const key = (fn: () => void) => (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };

  return (
    <div className="circuit-wrap">
      <svg className="circuit" viewBox={`0 0 ${W} ${H}`} style={{ minWidth: cols * 118 }} role="group" aria-label="Circuit">
        {wires.map((w) => (
          <path key={w.key} d={w.d} fill="none" strokeWidth={6} strokeLinecap="round"
            stroke={w.v === null ? '#CBD5E1' : w.v ? ON : OFF} strokeDasharray={w.v === null ? '4 10' : undefined} />
        ))}

        {ch.switches.map((name) => {
          const { x, y } = pos[name];
          const on = switches[name];
          return (
            <g key={name} role="switch" aria-checked={on} aria-label={`Switch ${name}, ${on ? 'on' : 'off'}`} tabIndex={0}
              onClick={() => onSwitch(name)} onKeyDown={key(() => onSwitch(name))} className="circuit-hit">
              <circle cx={x} cy={y} r={SWITCH_R} fill={on ? ON : '#E2E8F0'} stroke={on ? '#15803D' : '#94A3B8'} strokeWidth={4} />
              <text x={x} y={y - 2} textAnchor="middle" fontSize={26} fontWeight={700} fill={on ? '#fff' : '#475569'} fontFamily="Fredoka, sans-serif">{name}</text>
              <text x={x} y={y + 18} textAnchor="middle" fontSize={13} fontWeight={700} fill={on ? '#DCFCE7' : '#64748B'}>{on ? 'ON' : 'OFF'}</text>
            </g>
          );
        })}

        {ch.gates.map((g) => {
          const { x, y } = pos[g.id];
          const op = choice[g.id];
          const v = values[g.id];
          return (
            <g key={g.id} role="button" tabIndex={0} aria-label={`Gate ${g.id.replace('g', '')}: ${op ?? 'empty'}. Tap to change`}
              onClick={() => onGate(g.id)} onKeyDown={key(() => onGate(g.id))} className="circuit-hit">
              <rect x={x - GATE_W / 2} y={y - GATE_H / 2} width={GATE_W} height={GATE_H} rx={16}
                fill={op ? '#FEF9C3' : '#fff'} stroke={op ? '#CA8A04' : '#94A3B8'} strokeWidth={4} strokeDasharray={op ? undefined : '8 6'} />
              <text x={x} y={y + 8} textAnchor="middle" fontSize={op ? 22 : 30} fontWeight={700} fill={op ? '#713F12' : '#94A3B8'} fontFamily="Fredoka, sans-serif">{op ?? '?'}</text>
              {v !== null && <circle cx={x + GATE_W / 2 - 2} cy={y - GATE_H / 2 + 2} r={8} fill={v ? ON : OFF} stroke="#fff" strokeWidth={2} />}
            </g>
          );
        })}

        <g role="img" aria-label={`Bulb, ${lit ? 'on' : 'off'}`}>
          {lit && <circle cx={pos.bulb.x} cy={pos.bulb.y} r={BULB_R + 12} fill="#FDE047" opacity={0.45} />}
          <circle cx={pos.bulb.x} cy={pos.bulb.y} r={BULB_R} fill={lit ? '#FDE047' : '#E2E8F0'} stroke={lit ? '#CA8A04' : '#94A3B8'} strokeWidth={4} />
          <text x={pos.bulb.x} y={pos.bulb.y + 12} textAnchor="middle" fontSize={34} style={{ filter: lit ? 'none' : 'grayscale(1) opacity(0.5)' }}>💡</text>
        </g>
      </svg>
    </div>
  );
};

const GoalTable: React.FC<{ ch: GateChallenge; choice: Choice; showResult: boolean }> = ({ ch, choice, showResult }) => {
  const goal = goalTable(ch);
  const mine = truthTable(ch, choice);
  const rows = combinations(ch.switches);
  return (
    <table className="gate-table">
      <caption>The bulb should do this</caption>
      <thead>
        <tr>{ch.switches.map((s) => <th key={s} scope="col">{s}</th>)}<th scope="col">💡</th>{showResult && <th scope="col"><span className="sr-only">Yours</span></th>}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={showResult ? (mine[i] === goal[i] ? 'ok' : 'bad') : ''}>
            {ch.switches.map((s) => <td key={s}>{row[s] ? 'on' : 'off'}</td>)}
            <td className={goal[i] ? 'lit' : ''}>{goal[i] ? 'ON' : 'off'}</td>
            {showResult && <td>{mine[i] === goal[i] ? '✓' : '✗'}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const LogicGatesWorld: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { solved, markSolved, addStars } = useApp();
  const [current, setCurrent] = useState<GateChallenge | null>(null);
  const [choice, setChoice] = useState<Choice>({});
  const [switches, setSwitches] = useState<Record<string, boolean>>({});
  const [hinted, setHinted] = useState(false);
  const [result, setResult] = useState<'idle' | 'wrong' | 'right'>('idle');
  const [earned, setEarned] = useState(0);

  const firstUnsolved = GATE_CHALLENGES.find((c) => !solved.includes(c.id));

  const open = (ch: GateChallenge) => {
    sound.playPop();
    setCurrent(ch);
    setChoice({});
    setSwitches(Object.fromEntries(ch.switches.map((s) => [s, false])));
    setHinted(false);
    setResult('idle');
    setEarned(0);
  };

  const cycle = (id: string) => {
    if (!current || result === 'right') return;
    const gate = current.gates.find((g) => g.id === id);
    if (!gate) return;
    sound.playPop(520);
    const at = choice[id] ? gate.options.indexOf(choice[id] as Op) : -1;
    setChoice((c) => ({ ...c, [id]: gate.options[(at + 1) % gate.options.length] }));
    setResult('idle');
  };

  const toggle = (name: string) => {
    sound.playPop(switches[name] ? 380 : 640);
    setSwitches((s) => ({ ...s, [name]: !s[name] }));
  };

  const complete = current ? current.gates.every((g) => choice[g.id]) : false;

  const check = () => {
    if (!current || !complete) return;
    if (isSolved(current, choice)) {
      const first = !hinted && markSolved(current.id);
      const stars = first ? starsFor(current) : 0;
      if (stars > 0) addStars(stars); else sound.playSuccess();
      setEarned(stars);
      setResult('right');
    } else {
      sound.playGentleTryAgain();
      setResult('wrong');
    }
  };

  const hint = () => {
    if (!current || result === 'right') return;
    // Fill in the first gate that is empty or wrong
    const target = current.gates.find((g) => choice[g.id] !== current.solution[g.id]);
    if (!target) return;
    sound.playPop(700);
    setHinted(true);
    setChoice((c) => ({ ...c, [target.id]: current.solution[target.id] }));
    setResult('idle');
  };

  const nextChallenge = () => {
    if (!current) return;
    const nextOne = GATE_CHALLENGES.find((c) => c.id !== current.id && !solved.includes(c.id) && c.level >= current.level)
      ?? GATE_CHALLENGES.find((c) => c.id !== current.id && !solved.includes(c.id));
    if (nextOne) open(nextOne); else setCurrent(null);
  };

  if (!current) {
    const done = GATE_CHALLENGES.filter((c) => solved.includes(c.id)).length;
    return (
      <div className="page quiz" style={colorVars(COLORS)}>
        <PuzzleBar onBack={onBack} chip={`${done} of ${GATE_CHALLENGES.length}`} />
        <section className="quiz-card">
          <div className="quiz-emoji" aria-hidden style={{ textAlign: 'center' }}>🔌</div>
          <h2 className="quiz-prompt" style={{ textAlign: 'center' }}>Logic Gates Lab</h2>
          <p className="gate-intro">
            Computers think with tiny switches called <b>logic gates</b>. Tap the switches to turn them on and off,
            tap a gate to choose what it does, and make the bulb light up the right way.
          </p>
          <div className="gate-grid">
            {GATE_CHALLENGES.map((c, i) => (
              <button key={c.id} className={`gate-tile ${solved.includes(c.id) ? 'done' : ''} ${firstUnsolved?.id === c.id ? 'next' : ''}`} onClick={() => open(c)}>
                <span className="gate-num">{solved.includes(c.id) ? '✓' : i + 1}</span>
                <span className="gate-title">{c.title}</span>
                <span className="gate-level">Level {c.level}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page quiz" style={colorVars(COLORS)}>
      <PuzzleBar onBack={() => setCurrent(null)} chip={`Level ${current.level}`} />
      <section className="quiz-card" aria-live="polite">
        <div className="quiz-qhead">
          <span className="quiz-topic">{current.title}</span>
          {hinted && <span className="quiz-score">hint used</span>}
        </div>
        <h2 className="quiz-prompt">{current.goal}</h2>

        <Circuit ch={current} switches={switches} choice={choice} onSwitch={toggle} onGate={cycle} />
        <p className="cipher-tap">Tap a switch to flip it. Tap a gate to change what it does.</p>

        <GoalTable ch={current} choice={choice} showResult={result === 'wrong'} />

        {result === 'wrong' && <p className="order-msg" role="status">Not quite. The ✗ rows show where your bulb does the wrong thing.</p>}
        {result === 'right' && (
          <div className="quiz-explain" role="status">
            <p><strong>The bulb behaves exactly right!</strong></p>
            <p>{earned > 0 ? `+${earned} ⭐` : hinted ? 'Solve it without a hint for stars.' : 'You already solved this one.'}</p>
            <div className="quiz-actions">
              <button className="quiz-primary" onClick={nextChallenge}>Next challenge</button>
              <button className="quiz-secondary" onClick={() => setCurrent(null)}>All challenges</button>
            </div>
          </div>
        )}
        {result !== 'right' && (
          <div className="quiz-actions">
            <button className="quiz-primary" onClick={check} disabled={!complete}>Check</button>
            <button className="quiz-secondary" onClick={hint}><Lightbulb size={18} /> Hint</button>
            <button className="quiz-secondary" onClick={() => { sound.playPop(); setChoice({}); setResult('idle'); }}><RotateCcw size={18} /> Clear</button>
          </div>
        )}
      </section>
    </div>
  );
};
