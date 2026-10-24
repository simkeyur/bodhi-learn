import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check, Eye, Lightbulb, RotateCcw, Trophy, X } from 'lucide-react';
import { makeG5MathItem } from '../../content/generators/g5';
import { g5Lesson } from '../../content/lessons/g5-math';
import { explainSteps } from '../../content/lessons/steps';
import { mulberry32 } from '../../content/rng';
import { answerComplete, answerKey, emptyAnswer, score } from '../../content/scoring';
import type { Answer, Item } from '../../content/types';
import { g5Standard } from '../../data/standards/g5-math';
import { learner } from '../../learner/store';
import { ItemView } from '../../items/ItemView';
import { RichText } from '../../items/Rich';
import { StandardTags } from '../../ui/bits';
import { strandStyle } from '../../ui/strands';
import { StrandIcon } from '../../ui/StrandIcon';
import { NotFound } from '../../app/NotFound';
import { IdeaDeck, WordCards } from './LessonParts';
import '../screens.css';
import './learn.css';

// A walkthrough before practising a skill: the goal and words, the big ideas, a worked example revealed
// step by step, then one question to try with a hint. Nothing here counts towards mastery.

type Step = 'intro' | 'ideas' | 'example' | 'try' | 'done';
const STEPS: { id: Step; label: string }[] = [
  { id: 'intro', label: 'Goal' },
  { id: 'ideas', label: 'Big ideas' },
  { id: 'example', label: 'Watch' },
  { id: 'try', label: 'Your turn' },
];

const rng = mulberry32(Date.now() % 2 ** 31);
const easyItem = (code: string): Item => makeG5MathItem(code, 1, rng);

export function Learn() {
  const { code = '' } = useParams();
  const location = useLocation();
  if (!g5Lesson(code) || !g5Standard(code)) return <NotFound />;
  return <Walkthrough key={`${code}:${location.key}`} code={code} />;
}

function Walkthrough({ code }: { code: string }) {
  const lesson = g5Lesson(code)!;
  const standard = g5Standard(code)!;
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('intro');
  const at = STEPS.findIndex((s) => s.id === step);

  const go = (s: Step) => { setStep(s); window.scrollTo({ top: 0 }); };
  const finish = () => { learner.lessonDone(code); go('done'); };

  return (
    <div className="page learn" style={strandStyle(standard.strand)}>
      <div className="learn-top">
        <Link to="/math" className="btn btn-ghost btn-sm"><ArrowLeft size={16} aria-hidden /> Skills</Link>
        <ol className="learn-steps" aria-label="Walkthrough steps">
          {STEPS.map((s, i) => (
            <li key={s.id} className={step === 'done' || i < at ? 'done' : i === at ? 'now' : ''} aria-current={i === at ? 'step' : undefined}>
              <span className="learn-step-dot">{step === 'done' || i < at ? <Check size={14} aria-hidden /> : i + 1}</span>
              <span className="learn-step-label">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>

      <section className="card learn-card">
        <header className="learn-head">
          <span className="strand-tile" aria-hidden><StrandIcon strand={standard.strand} size={22} /></span>
          <div>
            <div className="skill-tags"><StandardTags standard={standard} /></div>
            <h1>{standard.title}</h1>
          </div>
        </header>

        {step === 'intro' && (
          <div className="learn-body">
            <p className="learn-goal"><RichText text={lesson.goal} /></p>
            <h2 className="learn-sub">Words to know</h2>
            <WordCards words={lesson.words} />
            <div className="learn-actions">
              <Link to={`/practice/${code}`} className="btn btn-ghost">Skip to practice</Link>
              <button type="button" className="btn btn-primary btn-lg" onClick={() => go('ideas')}>Show me the big ideas <ArrowRight size={20} aria-hidden /></button>
            </div>
          </div>
        )}

        {step === 'ideas' && (
          <div className="learn-body">
            <IdeaDeck ideas={lesson.ideas} onDone={() => go('example')} doneLabel="Watch an example" />
          </div>
        )}

        {step === 'example' && <WorkedExample code={code} onDone={() => go('try')} />}
        {step === 'try' && <YourTurn code={code} onDone={finish} />}

        {step === 'done' && (
          <div className="learn-body learn-done">
            <span className="learn-trophy" aria-hidden><Trophy size={36} /></span>
            <h2>You're ready to practice!</h2>
            <p className="page-sub">Ten questions that start easy and get harder as you get them right.</p>
            <div className="learn-actions center">
              <button type="button" className="btn btn-ghost" onClick={() => go('intro')}><RotateCcw size={18} aria-hidden /> Go through it again</button>
              <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate(`/practice/${code}`, { replace: true })}>Start practicing <ArrowRight size={20} aria-hidden /></button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

// A question solved in front of the child, one step at a time, then the answer
function WorkedExample({ code, onDone }: { code: string; onDone: () => void }) {
  const [item, setItem] = useState(() => easyItem(code));
  const [shown, setShown] = useState(0);
  const steps = explainSteps(item.explain);
  const solved = shown >= steps.length;

  return (
    <div className="learn-body">
      <h2 className="learn-sub"><Eye size={18} aria-hidden /> Watch it solved</h2>
      <div className="learn-question">
        <ItemView item={item} answer={solved ? answerKey(item) : emptyAnswer(item)} onChange={() => {}} revealed={solved} showKey readOnly />
      </div>
      <ol className="solve-steps" aria-live="polite">
        {steps.slice(0, shown).map((s, i) => (
          <li key={i}><span className="solve-num">{i + 1}</span><span><RichText text={s} /></span></li>
        ))}
      </ol>
      <div className="learn-actions">
        <button type="button" className="btn btn-ghost" onClick={() => { setItem(easyItem(code)); setShown(0); }}><RotateCcw size={18} aria-hidden /> Another example</button>
        {solved
          ? <button type="button" className="btn btn-primary btn-lg" onClick={onDone}>Now you try <ArrowRight size={20} aria-hidden /></button>
          : <button type="button" className="btn btn-primary btn-lg" onClick={() => setShown(shown + 1)}>{shown === 0 ? 'Show the first step' : shown === steps.length - 1 ? 'Show the answer' : 'Next step'} <ArrowRight size={20} aria-hidden /></button>}
      </div>
    </div>
  );
}

// One question with a hint; checking shows the full solution. It doesn't count towards mastery.
function YourTurn({ code, onDone }: { code: string; onDone: () => void }) {
  const [item, setItem] = useState(() => easyItem(code));
  const [answer, setAnswer] = useState<Answer>(() => emptyAnswer(item));
  const [hint, setHint] = useState(false);
  const [checked, setChecked] = useState(false);
  const steps = explainSteps(item.explain);
  const earned = checked ? score(item, answer) : 0;
  const right = checked && earned === item.points;

  const another = () => {
    const it = easyItem(code);
    setItem(it); setAnswer(emptyAnswer(it)); setHint(false); setChecked(false);
  };

  return (
    <div className="learn-body">
      <h2 className="learn-sub"><Lightbulb size={18} aria-hidden /> Your turn</h2>
      <div className="learn-question">
        <ItemView item={item} answer={answer} onChange={setAnswer} revealed={checked} />
      </div>
      {hint && !checked && <p className="learn-hint"><Lightbulb size={18} aria-hidden /> <span><RichText text={steps[0] ?? item.explain} /></span></p>}
      {checked && (
        <div className={`learn-feedback ${right ? 'right' : 'wrong'}`} role="status">
          <p className="learn-feedback-title">{right ? <><Check size={20} aria-hidden /> You got it!</> : earned > 0 ? 'Partly right. Here is the full solution:' : <><X size={20} aria-hidden /> Not quite. Here is how it works:</>}</p>
          <ol className="solve-steps">
            {steps.map((s, i) => <li key={i}><span className="solve-num">{i + 1}</span><span><RichText text={s} /></span></li>)}
          </ol>
        </div>
      )}
      <div className="learn-actions">
        {!checked && !hint && <button type="button" className="btn btn-ghost" onClick={() => setHint(true)}><Lightbulb size={18} aria-hidden /> Hint</button>}
        {checked && <button type="button" className="btn btn-ghost" onClick={another}><RotateCcw size={18} aria-hidden /> Try another</button>}
        {checked
          ? <button type="button" className="btn btn-primary btn-lg" onClick={onDone}>I'm ready <ArrowRight size={20} aria-hidden /></button>
          : <button type="button" className="btn btn-primary btn-lg" onClick={() => setChecked(true)} disabled={!answerComplete(item, answer)}><Check size={20} aria-hidden /> Check</button>}
      </div>
    </div>
  );
}
