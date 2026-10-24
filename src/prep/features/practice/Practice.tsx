import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from 'lucide-react';
import { makeG5MathItem } from '../../content/generators/g5';
import { mulberry32 } from '../../content/rng';
import { answerComplete, emptyAnswer, score } from '../../content/scoring';
import type { Answer, Item } from '../../content/types';
import { G5_MATH, g5Standard } from '../../data/standards/g5-math';
import { dayKey, MASTERY_LABEL, masteryOf, planStandards, type MasteryState } from '../../learner/mastery';
import { learner, useLearner } from '../../learner/store';
import { ItemView } from '../../items/ItemView';
import { Bar, Mastery, StandardTags } from '../../ui/bits';
import { RichText } from '../../items/Rich';
import { NotFound } from '../../app/NotFound';
import '../screens.css';

const SESSION_LENGTH = 10;

interface Result { standard: string; earned: number; points: number }

// Which standard each question in the session practises. Today's practice spreads over the plan.
function sessionStandards(code: string): string[] {
  if (code !== 'today') return Array(SESSION_LENGTH).fill(code);
  const plan = planStandards(G5_MATH, learner.get().skills, dayKey(new Date()), 5);
  return Array.from({ length: SESSION_LENGTH }, (_, i) => plan[i % plan.length]);
}

// Each question uses the standard's difficulty at the moment it is asked, so the session adapts as it goes
const rng = mulberry32(Date.now() % 2 ** 31);
const nextItem = (standard: string): Item =>
  makeG5MathItem(standard, learner.get().skills[standard]?.difficulty ?? 1, rng);

export function Practice() {
  const { code = '' } = useParams();
  const location = useLocation();
  if (code !== 'today' && !g5Standard(code)) return <NotFound />;
  // key: every visit (including "Practice again" to the same address) starts a new session
  return <Session key={location.key} code={code} />;
}

function Session({ code }: { code: string }) {
  const { skills } = useLearner();
  const [order] = useState(() => sessionStandards(code));
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(() => nextItem(order[0]));
  const [answer, setAnswer] = useState<Answer>(() => emptyAnswer(item));
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [startState] = useState(() => Object.fromEntries([...new Set(order)].map((c) => [c, masteryOf(learner.get().skills[c])])));

  const standard = g5Standard(item.standard)!;
  const done = results.length === SESSION_LENGTH && revealed === false;
  const last = results[results.length - 1];
  const title = code === 'today' ? 'Today\'s practice' : `${standard.title}`;

  const check = () => {
    const earned = score(item, answer);
    learner.record(item.standard, earned / item.points);
    setResults((r) => [...r, { standard: item.standard, earned, points: item.points }]);
    setRevealed(true);
  };

  const next = () => {
    const n = index + 1;
    setRevealed(false);
    if (n >= SESSION_LENGTH) { setIndex(n); return; }
    const it = nextItem(order[n]);
    setIndex(n);
    setItem(it);
    setAnswer(emptyAnswer(it));
  };

  const feedbackRef = useRef<HTMLDivElement>(null);

  // Enter checks the answer, then moves on. Practice only: test mode will behave exactly like the real test.
  useEffect(() => {
    if (done) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat) return;
      if ((e.target as HTMLElement).closest('button, a, select, textarea, input[type="text"], dialog')) return;
      e.preventDefault();
      if (revealed) next();
      else if (answerComplete(item, answer)) check();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // On narrow screens the feedback sits under the question: bring it into view after checking
  useEffect(() => {
    if (!revealed || !window.matchMedia('(max-width: 1000px)').matches) return;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    feedbackRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
  }, [revealed]);

  if (done) return <Summary code={code} title={title} results={results} startState={startState} />;

  const complete = answerComplete(item, answer);
  const help = item.type === 'multiselect' ? 'Pick two answers, then check.' : item.type === 'inline' ? 'Choose from each drop-down, then check.' : item.type === 'multipart' ? 'Answer Part A and Part B, then check.' : 'Pick one answer, then check.';
  const outcome = !revealed || !last ? null : last.earned === last.points ? 'right' : last.earned > 0 ? 'partial' : 'wrong';
  const r = skills[item.standard];

  return (
    <div className="page practice">
      <div className="practice-top">
        <Link to={code === 'today' ? '/' : '/math'} className="btn btn-ghost btn-sm"><ArrowLeft size={16} aria-hidden /> {code === 'today' ? 'Today' : 'Skills'}</Link>
        <div className="practice-progress">
          <Bar value={(results.length) / SESSION_LENGTH} label="Session progress" />
          <span>{Math.min(index + 1, SESSION_LENGTH)} / {SESSION_LENGTH}</span>
        </div>
      </div>

      <div className="practice-layout">
        <article className="card practice-card" aria-labelledby="q-title">
          <header className="practice-card-head">
            <div className="skill-tags"><StandardTags standard={standard} /></div>
            <h1 id="q-title" className="practice-skill">{standard.title}</h1>
            <span className="practice-points">{item.points} point{item.points > 1 ? 's' : ''}</span>
          </header>
          <ItemView item={item} answer={answer} onChange={setAnswer} revealed={revealed} />
        </article>

        <aside className="practice-side" aria-live="polite">
          {!revealed && (
            <div className="card card-pad side-card">
              <p className="side-help">{help}</p>
              <button className="btn btn-primary btn-lg" onClick={check} disabled={!complete}><Check size={20} aria-hidden /> Check answer</button>
              <div className="side-skill"><span>This skill</span><Mastery record={r} /></div>
            </div>
          )}
          {revealed && last && (
            <div ref={feedbackRef} className={`card card-pad side-card feedback feedback-${outcome}`}>
              <p className="feedback-title">
                {outcome === 'right' ? <><Check size={22} aria-hidden /> Correct!</> : outcome === 'partial' ? 'Partly right' : <><X size={22} aria-hidden /> Not quite</>}
              </p>
              <p className="feedback-points">{last.earned} of {last.points} point{last.points > 1 ? 's' : ''}</p>
              <div className="feedback-explain">
                <h2>How to solve it</h2>
                <p><RichText text={item.explain} /></p>
              </div>
              <button className="btn btn-primary btn-lg" onClick={next} autoFocus>
                {index + 1 >= SESSION_LENGTH ? 'See results' : 'Next question'} <ArrowRight size={20} aria-hidden />
              </button>
              <div className="side-skill"><span>This skill</span><Mastery record={r} /></div>
            </div>
          )}
        </aside>
      </div>

      {/* Narrow screens: the main button stays at the bottom of the screen */}
      <div className="action-bar">
        <span className={`action-status ${revealed ? `is-${outcome}` : ''}`} aria-hidden>
          {revealed && last ? `${outcome === 'right' ? 'Correct!' : outcome === 'partial' ? 'Partly right' : 'Not quite'} · ${last.earned} of ${last.points}` : help}
        </span>
        {revealed
          ? <button className="btn btn-primary btn-lg" onClick={next}>{index + 1 >= SESSION_LENGTH ? 'See results' : 'Next'} <ArrowRight size={20} aria-hidden /></button>
          : <button className="btn btn-primary btn-lg" onClick={check} disabled={!complete}><Check size={20} aria-hidden /> Check</button>}
      </div>
    </div>
  );
}

function Summary({ code, title, results, startState }: { code: string; title: string; results: Result[]; startState: Record<string, MasteryState> }) {
  const { skills } = useLearner();
  const earned = results.reduce((s, r) => s + r.earned, 0);
  const points = results.reduce((s, r) => s + r.points, 0);
  const right = results.filter((r) => r.earned === r.points).length;
  const codes = [...new Set(results.map((r) => r.standard))];
  const pct = Math.round((earned / points) * 100);
  return (
    <div className="page">
      <div className="card card-pad summary">
        <p className="eyebrow">{title}</p>
        <h1>{pct >= 80 ? 'Great work!' : pct >= 50 ? 'Nice practice.' : 'Good effort. Every try builds the skill.'}</h1>
        <div className="summary-score">
          <div><b>{earned}</b><span>of {points} points</span></div>
          <div><b>{right}</b><span>of {results.length} fully right</span></div>
        </div>
        <h2>Skills you practiced</h2>
        <ul className="summary-skills">
          {codes.map((c) => {
            const s = g5Standard(c)!;
            const now = masteryOf(skills[c]);
            return (
              <li key={c}>
                <span className="tag tag-code">{c}</span>
                <span className="summary-skill-name">{s.title}</span>
                <Mastery record={skills[c]} />
                {now !== startState[c] && <span className="summary-moved">was {MASTERY_LABEL[startState[c]]}</span>}
              </li>
            );
          })}
        </ul>
        <div className="summary-actions">
          <Link to={`/practice/${code}`} className="btn btn-primary">
            <RotateCcw size={18} aria-hidden /> Practice again
          </Link>
          <Link to="/math" className="btn btn-secondary">All skills</Link>
          <Link to="/" className="btn btn-ghost">Today</Link>
        </div>
      </div>
    </div>
  );
}
