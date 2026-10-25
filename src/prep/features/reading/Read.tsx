import { useRef, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router';
import { ArrowLeft, ArrowRight, BookOpen, Check, ListChecks, PenLine, RotateCcw, X } from 'lucide-react';
import { findSet, findStandard, readingFor, shortCode } from '../../content/registry';
import { unitName } from '../../content/rla/passage';
import { answerComplete, emptyAnswer, score } from '../../content/scoring';
import type { Answer, Item, ReadingSet } from '../../content/types';
import { learner, useLearner } from '../../learner/store';
import { ItemView } from '../../items/ItemView';
import { RichText } from '../../items/Rich';
import { Bar, Mastery, StandardTags } from '../../ui/bits';
import { NotFound } from '../../app/NotFound';
import { PassageView } from './PassageView';
import '../screens.css';
import './reading.css';

// Reading a set: the passage on the left and its questions on the right, like the real test. On phones the two
// are tabs. With ?skill=<code>, only that skill's questions are asked (the passage is still there to read).

interface Result { item: Item; earned: number }

export function Read() {
  const { id = '' } = useParams();
  const [params] = useSearchParams();
  const location = useLocation();
  const set = findSet(id);
  if (!set) return <NotFound />;
  const skill = params.get('skill');
  const items = skill ? set.items.filter((i) => i.standard === skill) : set.items;
  if (!items.length) return <NotFound />;
  // key: "Read again" to the same address starts over
  return <Session key={`${id}:${skill}:${location.key}`} set={set} items={items} skill={skill} />;
}

function Session({ set, items, skill }: { set: ReadingSet; items: Item[]; skill: string | null }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() => items.map(emptyAnswer));
  const [results, setResults] = useState<(Result | undefined)[]>(() => items.map(() => undefined));
  const [pane, setPane] = useState<'passage' | 'questions'>('passage');
  const [finished, setFinished] = useState(false);
  const passageRef = useRef<HTMLDivElement>(null);

  const item = items[index];
  const result = results[index];
  const standard = findStandard(item.standard)!;
  const unit = unitName(set.passages[0]);
  const done = results.filter(Boolean).length;

  const check = () => {
    const earned = score(item, answers[index]);
    learner.record(item.standard, earned / item.points);
    setResults((r) => r.map((x, i) => (i === index ? { item, earned } : x)));
  };

  const goTo = (i: number) => { setIndex(i); setPane('questions'); };
  const next = () => {
    const open = items.findIndex((_, i) => i > index && !results[i]);
    const anyOpen = open >= 0 ? open : items.findIndex((_, i) => !results[i]);
    if (anyOpen >= 0) { goTo(anyOpen); return; }
    if (!skill) learner.setDone(set.id);
    setFinished(true);
    window.scrollTo({ top: 0 });
  };

  // "See paragraph 4": show the passage and scroll to it
  const show = (n: number) => {
    setPane('passage');
    requestAnimationFrame(() => {
      const el = passageRef.current?.querySelector(`#para-${n}`);
      el?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    });
  };

  if (finished) return <Summary set={set} results={results.filter((r): r is Result => !!r)} skill={skill} />;

  const outcome = !result ? null : result.earned === item.points ? 'right' : result.earned > 0 ? 'partial' : 'wrong';
  const isLast = done === items.length || (done === items.length - 1 && !result);
  const help = item.type === 'multiselect' ? 'Pick two answers.' : item.type === 'inline' ? 'Choose from each drop-down.' : item.type === 'multipart' ? 'Answer Part A and Part B.' : 'Pick one answer.';

  return (
    <div className="page read">
      <div className="read-top">
        <Link to="/reading" className="btn btn-ghost btn-sm"><ArrowLeft size={16} aria-hidden /> Reading</Link>
        <div className="practice-progress">
          <Bar value={done / items.length} label="Questions answered" />
          <span>{done} / {items.length}</span>
        </div>
      </div>

      <div className="read-tabs" role="tablist" aria-label="Show">
        <button type="button" role="tab" aria-selected={pane === 'passage'} onClick={() => setPane('passage')}><BookOpen size={18} aria-hidden /> {set.kind === 'editing' ? 'Draft' : 'Passage'}</button>
        <button type="button" role="tab" aria-selected={pane === 'questions'} onClick={() => setPane('questions')}><ListChecks size={18} aria-hidden /> Questions</button>
      </div>

      <div className="read-layout" data-pane={pane}>
        <section className="card read-passage" ref={passageRef} aria-label={set.kind === 'editing' ? 'Draft' : 'Passage'}>
          <p className="read-intro">{set.intro}</p>
          {set.passages.map((p) => <PassageView key={p.id} passage={p} highlight={result ? item.cites : []} />)}
          <button type="button" className="btn btn-primary read-to-questions" onClick={() => setPane('questions')}>Go to the questions <ArrowRight size={18} aria-hidden /></button>
        </section>

        <section className="read-questions" aria-label="Questions">
          <nav className="q-nav" aria-label="Questions">
            {items.map((it, i) => {
              const r = results[i];
              const state = !r ? '' : r.earned === it.points ? 'right' : r.earned > 0 ? 'partial' : 'wrong';
              return (
                <button key={it.id} type="button" className={`q-dot ${state} ${i === index ? 'now' : ''}`} aria-current={i === index ? 'step' : undefined}
                  aria-label={`Question ${i + 1}${state ? `, ${state === 'right' ? 'correct' : state === 'partial' ? 'partly right' : 'not right'}` : ''}`} onClick={() => goTo(i)}>
                  {i + 1}
                </button>
              );
            })}
          </nav>

          <article className="card practice-card read-card" aria-labelledby="q-title">
            <header className="practice-card-head">
              <div className="skill-tags"><StandardTags standard={standard} /></div>
              <h1 id="q-title" className="practice-skill">Question {index + 1}</h1>
              <span className="practice-points">{item.points} point{item.points > 1 ? 's' : ''}</span>
            </header>
            <ItemView key={item.id} item={item} answer={answers[index]} onChange={(a) => setAnswers((all) => all.map((x, i) => (i === index ? a : x)))} revealed={!!result} />

            {!result ? (
              <div className="read-actions">
                <span className="side-help">{help}</span>
                <button className="btn btn-primary btn-lg" onClick={check} disabled={!answerComplete(item, answers[index])}><Check size={20} aria-hidden /> Check answer</button>
              </div>
            ) : (
              <div className={`feedback feedback-${outcome}`} role="status">
                <p className="feedback-title">
                  {outcome === 'right' ? <><Check size={22} aria-hidden /> Correct!</> : outcome === 'partial' ? 'Partly right' : <><X size={22} aria-hidden /> Not quite</>}
                </p>
                <p className="feedback-points">{result.earned} of {item.points} point{item.points > 1 ? 's' : ''} · {standard.title} <Mastery record={learner.get().skills[item.standard]} /></p>
                <div className="feedback-explain">
                  <h2>Why</h2>
                  <p><RichText text={item.explain} /></p>
                  {!!item.cites?.length && (
                    <p className="read-cites">
                      {item.cites.map((n) => (
                        <button key={n} type="button" className="btn btn-secondary btn-sm" onClick={() => show(n)}>See {unit} {n}</button>
                      ))}
                    </p>
                  )}
                </div>
                <button className="btn btn-primary btn-lg" onClick={next} autoFocus>
                  {isLast ? 'See results' : 'Next question'} <ArrowRight size={20} aria-hidden />
                </button>
              </div>
            )}
          </article>
        </section>
      </div>
    </div>
  );
}

function Summary({ set, results, skill }: { set: ReadingSet; results: Result[]; skill: string | null }) {
  const { skills } = useLearner();
  const earned = results.reduce((s, r) => s + r.earned, 0);
  const points = results.reduce((s, r) => s + r.item.points, 0);
  const codes = [...new Set(results.map((r) => r.item.standard))];
  const pct = points ? Math.round((earned / points) * 100) : 0;
  const essay = readingFor(set.grade).essays.find((e) => e.setId === set.id);
  return (
    <div className="page">
      <div className="card card-pad summary">
        <p className="eyebrow">{set.title}</p>
        <h1>{pct >= 80 ? 'Great reading!' : pct >= 50 ? 'Nice work.' : 'Good effort. Every passage builds the skill.'}</h1>
        <div className="summary-score">
          <div><b>{earned}</b><span>of {points} points</span></div>
          <div><b>{results.filter((r) => r.earned === r.item.points).length}</b><span>of {results.length} fully right</span></div>
        </div>
        <h2>Skills you practiced</h2>
        <ul className="summary-skills">
          {codes.map((c) => (
            <li key={c}>
              <span className="tag tag-code">{shortCode(c)}</span>
              <span className="summary-skill-name">{findStandard(c)!.title}</span>
              <Mastery record={skills[c]} />
            </li>
          ))}
        </ul>
        <div className="summary-actions">
          {essay && !skill && <Link to={`/write/${essay.id}`} className="btn btn-primary"><PenLine size={18} aria-hidden /> Write about it</Link>}
          <Link to={`/read/${set.id}${skill ? `?skill=${encodeURIComponent(skill)}` : ''}`} className={`btn ${essay && !skill ? 'btn-secondary' : 'btn-primary'}`}><RotateCcw size={18} aria-hidden /> Read again</Link>
          <Link to="/reading" className="btn btn-ghost">All reading</Link>
        </div>
      </div>
    </div>
  );
}
