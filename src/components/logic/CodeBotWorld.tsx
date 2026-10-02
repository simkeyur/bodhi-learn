import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, Play, Repeat, RotateCcw, Trash2, Undo2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { AgeBracket } from '../../firebase/schema';
import {
  BOT_LEVELS,
  appendDir,
  blockCount,
  cleanProgram,
  cycleRepeat,
  expandProgram,
  openRepeat,
  removeLast,
  simulate,
  type Block,
  type Cell,
  type Dir,
  type StepSource,
} from '../../data/logicData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useGreeting, useKidTimers } from '../../utils/useKidTimers';
import { LogicBar } from './LogicBar';
import './logic.css';

interface CodeBotWorldProps {
  onBack: () => void;
}

const ICONS = { up: ArrowUp, down: ArrowDown, left: ArrowLeft, right: ArrowRight };
const DIR_LABEL: Record<Dir, string> = { up: 'Up', down: 'Down', left: 'Left', right: 'Right' };
const TRAY: Dir[] = ['up', 'left', 'down', 'right'];
const STEP_MS = 520;

type Status = 'idle' | 'running' | 'won' | 'bump' | 'short';

const DirIcon: React.FC<{ dir: Dir; size?: number }> = ({ dir, size = 26 }) => {
  const Icon = ICONS[dir];
  return <Icon size={size} strokeWidth={3.2} aria-hidden />;
};

// Code the Bot: build a program from arrow blocks, press Go, and watch the robot run it.
// Teaches sequencing, loops (Repeat) and debugging (the block that failed is highlighted).
export const CodeBotWorld: React.FC<CodeBotWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket, botSolved, markBotSolved } = useApp();
  const { later, clearAll } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_codebot'));
  const repeatTipShown = useRef(false);

  // Pick up where the child left off: the first level of this age group they haven't solved yet
  const firstUnsolved = (b: AgeBracket) => {
    const i = BOT_LEVELS[b].findIndex((l) => !botSolved.includes(l.id));
    return i === -1 ? 0 : i;
  };

  const [bracket, setBracket] = useState<AgeBracket>(ageBracket);
  const [levelIndex, setLevelIndex] = useState(() => firstUnsolved(ageBracket));
  const level = BOT_LEVELS[bracket][levelIndex];

  const [program, setProgram] = useState<Block[]>([]);
  const [editing, setEditing] = useState(false); // a Repeat block is open and collecting arrows
  const [status, setStatus] = useState<Status>('idle');
  const [botCell, setBotCell] = useState<Cell>(level.start);
  const [trail, setTrail] = useState<Cell[]>([]);
  const [steps, setSteps] = useState<StepSource[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [bugStep, setBugStep] = useState<number | null>(null);
  const [blocked, setBlocked] = useState<Cell | null>(null);
  const [bumping, setBumping] = useState(false);
  const [earnedStar, setEarnedStar] = useState(false); // this run was the first solve of the level

  const used = blockCount(program);
  const full = used >= level.maxBlocks;

  const resetRun = () => {
    clearAll();
    setStatus('idle');
    setBotCell(level.start);
    setTrail([]);
    setSteps([]);
    setActiveStep(null);
    setBugStep(null);
    setBlocked(null);
    setBumping(false);
  };

  // New level (or difficulty): clear the board and say the instructions the first time
  useEffect(() => {
    setProgram([]);
    setEditing(false);
    resetRun();
    const intro = greeting();
    const tip = level.loops && !repeatTipShown.current ? [clip.phrase('bot_repeat_tip')] : [];
    if (intro.length || tip.length) {
      // Only count the tip as told once it has played (an interrupted effect run must not lose it)
      speech.say([...intro, ...tip], { onEnd: () => { if (tip.length) repeatTipShown.current = true; } });
    }
  }, [level.id]);

  // Changing the code after a run starts a fresh attempt; nothing can change mid-run
  const edit = (change: () => void) => {
    if (status === 'running') return;
    if (status !== 'idle') resetRun();
    change();
  };

  const addDir = (dir: Dir) => edit(() => {
    if (full) return;
    sound.playPop();
    speech.say([clip.word(dir)]);
    setProgram((p) => appendDir(p, dir, editing));
  });

  const toggleRepeat = () => edit(() => {
    sound.playPop(650);
    if (editing) {
      setProgram((p) => cleanProgram(p));
      setEditing(false);
    } else if (used + 2 <= level.maxBlocks) {
      setProgram((p) => openRepeat(p));
      setEditing(true);
    }
  });

  const undo = () => edit(() => {
    sound.playPop(400);
    const next = removeLast(program, editing);
    setProgram(next.program);
    setEditing(next.editing);
  });

  const clearAllBlocks = () => edit(() => {
    sound.playPop(400);
    setProgram([]);
    setEditing(false);
  });

  const finish = (outcome: 'goal' | 'short' | 'bump') => {
    setActiveStep(null);
    setBumping(false);
    if (outcome === 'goal') {
      const firstTime = markBotSolved(level.id);
      setEarnedStar(firstTime);
      setStatus('won');
      sound.playSuccess();
      if (firstTime) addStars(1);
      speech.say([clip.cheer(), clip.phrase('bot_made_it')]);
    } else {
      setStatus(outcome);
      sound.playGentleTryAgain();
      speech.say([clip.phrase('bot_try_again')]);
    }
  };

  const run = () => {
    if (status === 'running') return;
    const cleaned = cleanProgram(program);
    const plan = expandProgram(cleaned);
    if (plan.length === 0) {
      speech.say([clip.phrase('greet_codebot')]);
      return;
    }

    resetRun();
    setProgram(cleaned);
    setEditing(false);
    const result = simulate(level, plan.map((s) => s.dir));
    const moves = result.path.length - 1;

    setSteps(plan);
    setStatus('running');
    setTrail([level.start]);

    for (let i = 0; i < moves; i++) {
      later(() => {
        setActiveStep(i);
        setBotCell(result.path[i + 1]);
        setTrail(result.path.slice(0, i + 2));
        sound.playPop(480 + i * 25);
      }, (i + 1) * STEP_MS);
    }

    const endAt = (moves + 1) * STEP_MS;
    if (result.outcome === 'bump') {
      later(() => {
        setActiveStep(moves);
        setBugStep(moves);
        setBlocked(result.blocked ?? null);
        setBumping(true);
      }, endAt);
      later(() => finish('bump'), endAt + 550);
    } else {
      later(() => finish(result.outcome), endAt - STEP_MS + 450);
    }
  };

  const goToLevel = (index: number) => {
    sound.playPop();
    setLevelIndex(index);
  };

  const changeBracket = (next: AgeBracket) => {
    speech.stop();
    setBracket(next);
    setLevelIndex(firstUnsolved(next));
  };

  const levels = BOT_LEVELS[bracket];
  const isHit = (blockIndex: number, inner: number | null, which: number | null) => {
    const step = which === null ? undefined : steps[which];
    return !!step && step.block === blockIndex && step.inner === inner;
  };
  const stateClass = (blockIndex: number, inner: number | null) =>
    isHit(blockIndex, inner, bugStep) ? ' bug' : isHit(blockIndex, inner, activeStep) ? ' active' : '';

  const message =
    status === 'won' ? { text: earnedStar ? '🎉 You did it! +1 ⭐' : '🎉 You did it again!', tone: 'good' }
    : status === 'bump' ? { text: 'Oops! Fix the red block 🔧', tone: 'oops' }
    : status === 'short' ? { text: 'Not there yet. Add more steps!', tone: 'oops' }
    : status === 'running' ? { text: 'Running…', tone: '' }
    : level.loops && program.length === 0 ? { text: '🔁 Repeat saves blocks!', tone: '' }
    : { text: 'Get the robot to the ⭐', tone: '' };

  const cells = [];
  for (let y = 0; y < level.rows; y++) {
    for (let x = 0; x < level.cols; x++) {
      const isRock = level.rocks.some((r) => r.x === x && r.y === y);
      const isGoal = level.goal.x === x && level.goal.y === y;
      const isBlocked = blocked?.x === x && blocked?.y === y;
      const visited = trail.some((t) => t.x === x && t.y === y) && !(botCell.x === x && botCell.y === y);
      cells.push(
        <div key={`${x}-${y}`} className="bot-cell" data-alt={(x + y) % 2}>
          {isBlocked ? '💥' : isRock ? '🪨' : isGoal ? <span className="goal">⭐</span> : visited ? <span className="bot-trail" /> : null}
        </div>,
      );
    }
  }

  return (
    <div className="page" style={{ maxWidth: 640 }}>
      <LogicBar onBack={onBack} bracket={bracket} onBracket={changeBracket} />

      <div className="lab-card bot-card">
        <div className="bot-top">
        <div className="lab-levels" role="group" aria-label="Levels">
          {levels.map((lvl, i) => (
            <button
              key={lvl.id}
              className={`lab-level${botSolved.includes(lvl.id) ? ' done' : ''}`}
              aria-current={i === levelIndex ? 'step' : undefined}
              aria-label={`Level ${i + 1}${botSolved.includes(lvl.id) ? ', done' : ''}`}
              onClick={() => goToLevel(i)}
            >
              {botSolved.includes(lvl.id) && i !== levelIndex ? '✓' : i + 1}
            </button>
          ))}
        </div>
          <div className="bot-count" aria-label={`${used} of ${level.maxBlocks} blocks used`}>
            🧱 {used}/{level.maxBlocks}
          </div>
        </div>

        <div className="bot-board">
          <div
            className="bot-grid"
            style={{ '--cols': level.cols, '--rows': level.rows } as React.CSSProperties}
            role="img"
            aria-label={`Grid with a robot, a star and ${level.rocks.length} rocks`}
          >
            {cells}
            <div
              className={`bot-actor${bumping ? ' bump' : ''}`}
              style={{ '--x': botCell.x, '--y': botCell.y } as React.CSSProperties}
              aria-hidden
            >
              🤖
            </div>
          </div>
        </div>

        <div className={`lab-msg ${message.tone}`} aria-live="polite">{message.text}</div>

        <div className={`bot-program${program.length === 0 ? ' empty' : ''}${level.loops ? ' loops' : ''}`} data-hint="Tap the arrows to write code" aria-label="Your code">
          {program.map((block, i) =>
            typeof block === 'string' ? (
              <span key={i} className={`blk ${block}${stateClass(i, null)}`} role="img" aria-label={DIR_LABEL[block]}>
                <DirIcon dir={block} />
              </span>
            ) : (
              <span key={i} className={`blk-repeat${editing && i === program.length - 1 ? ' open' : ''}`}>
                <button
                  className="repeat-chip"
                  onClick={() => edit(() => { sound.playPop(650); setProgram((p) => cycleRepeat(p, i)); })}
                  aria-label={`Repeat ${block.repeat} times. Tap to change`}
                >
                  <Repeat size={18} strokeWidth={3} aria-hidden /> ×{block.repeat}
                </button>
                {block.body.map((dir, j) => (
                  <span key={j} className={`blk small ${dir}${stateClass(i, j)}`} role="img" aria-label={DIR_LABEL[dir]}>
                    <DirIcon dir={dir} size={20} />
                  </span>
                ))}
                {editing && i === program.length - 1 && block.body.length === 0 && (
                  <span className="repeat-hint">tap arrows</span>
                )}
              </span>
            ),
          )}
        </div>

        <div
          className="tray"
          role="group"
          aria-label="Blocks"
          style={{ '--tray-cols': level.loops ? 5 : 4 } as React.CSSProperties}
        >
          {TRAY.map((dir) => (
            <button
              key={dir}
              className={`tray-btn ${dir}`}
              onClick={() => addDir(dir)}
              disabled={full || status === 'running'}
              aria-label={DIR_LABEL[dir]}
            >
              <DirIcon dir={dir} size={32} />
            </button>
          ))}
          {level.loops && (
            <button
              className={`tray-btn repeat${editing ? ' on' : ''}`}
              onClick={toggleRepeat}
              disabled={status === 'running' || (!editing && used + 2 > level.maxBlocks)}
              aria-label={editing ? 'Done repeating' : 'Repeat block'}
            >
              {editing ? <Check size={26} strokeWidth={3.2} aria-hidden /> : <Repeat size={26} strokeWidth={3.2} aria-hidden />}
              <span>{editing ? 'Done' : 'Repeat'}</span>
            </button>
          )}
        </div>

        <div className="bot-actions">
          {status === 'won' ? (
            <>
              <button onClick={() => { sound.playPop(400); resetRun(); }} className="kid-btn btn-white">
                <RotateCcw size={20} /> Again
              </button>
              <button
                onClick={() => goToLevel((levelIndex + 1) % levels.length)}
                className="kid-btn btn-grass go"
              >
                Next level <ArrowRight size={22} />
              </button>
            </>
          ) : (
            <>
              <button onClick={undo} className="kid-btn btn-white icon-btn" aria-label="Undo last block" disabled={status === 'running' || program.length === 0}>
                <Undo2 size={22} />
              </button>
              <button onClick={clearAllBlocks} className="kid-btn btn-white icon-btn" aria-label="Clear all blocks" disabled={status === 'running' || program.length === 0}>
                <Trash2 size={22} />
              </button>
              <button onClick={run} className="kid-btn btn-sun go" disabled={status === 'running'}>
                <Play size={22} fill="currentColor" /> Go!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
