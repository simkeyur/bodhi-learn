import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, BookOpen, ClipboardCheck, PenLine } from 'lucide-react';
import { findEssay, findSet } from '../../content/registry';
import { learner, useLearner } from '../../learner/store';
import { NotFound } from '../../app/NotFound';
import { PassageView } from './PassageView';
import '../screens.css';
import './reading.css';

// The essay (TEA's extended constructed response). For now the child checks their own work against the rubric
// as yes/no questions; nothing is scored automatically and nothing leaves the device.

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

export function Write() {
  const { id = '' } = useParams();
  const essay = findEssay(id);
  const set = essay && findSet(essay.setId);
  const { essays } = useLearner();
  const saved = essays[id];
  const [text, setText] = useState(saved?.text ?? '');
  const [checked, setChecked] = useState<string[]>(saved?.checked ?? []);
  const [checking, setChecking] = useState(!!saved?.checked.length);
  const [pane, setPane] = useState<'passage' | 'write'>('write');
  if (!essay || !set) return <NotFound />;

  const save = (next: { text?: string; checked?: string[] }) =>
    learner.saveEssay(id, { text: next.text ?? text, checked: next.checked ?? checked });
  const toggle = (c: string) => {
    const next = checked.includes(c) ? checked.filter((x) => x !== c) : [...checked, c];
    setChecked(next);
    save({ checked: next });
  };
  const all = essay.checklist.flatMap((g) => g.items);
  const n = words(text);

  return (
    <div className="page read write">
      <div className="read-top">
        <Link to="/reading" className="btn btn-ghost btn-sm"><ArrowLeft size={16} aria-hidden /> Reading</Link>
        <span className="write-count" aria-live="polite">{n} word{n === 1 ? '' : 's'}</span>
      </div>

      <div className="read-tabs" role="tablist" aria-label="Show">
        <button type="button" role="tab" aria-selected={pane === 'passage'} onClick={() => setPane('passage')}><BookOpen size={18} aria-hidden /> Passage</button>
        <button type="button" role="tab" aria-selected={pane === 'write'} onClick={() => setPane('write')}><PenLine size={18} aria-hidden /> Write</button>
      </div>

      <div className="read-layout" data-pane={pane === 'write' ? 'questions' : 'passage'}>
        <section className="card read-passage" aria-label="Passage">
          {set.passages.map((p) => <PassageView key={p.id} passage={p} />)}
        </section>

        <section className="read-questions" aria-label="Your essay">
          <article className="card card-pad write-card">
            <p className="eyebrow">Essay · {essay.mode === 'argumentative' ? 'Argumentative' : essay.mode === 'correspondence' ? 'Letter' : 'Informational'}</p>
            <p className="write-prompt">{essay.prompt}</p>
            <ul className="write-tips">
              <li>Plan first: your central idea and two or three reasons.</li>
              <li>Use details from the passage, and explain how each one supports your idea.</li>
              <li>On the real test there is no word count, but a strong essay is usually four or five paragraphs.</li>
            </ul>
            <label htmlFor="essay" className="sr-only">Your essay</label>
            <textarea
              id="essay" className="write-box" value={text} spellCheck={false}
              placeholder="Start writing here…"
              onChange={(e) => setText(e.target.value)}
              onBlur={() => save({})}
            />
            <p className="field-hint">Spell check is off, like on the test. Your essay is saved on this device.</p>
            {!checking ? (
              <button type="button" className="btn btn-primary btn-lg" disabled={n < 40} onClick={() => { save({}); setChecking(true); }}>
                <ClipboardCheck size={20} aria-hidden /> I'm done: check my essay
              </button>
            ) : (
              <div className="write-check" aria-live="polite">
                <h2>Check your essay</h2>
                <p className="page-sub">Read your essay again. Tick each thing it does. Anything left unticked is what to fix next.</p>
                {essay.checklist.map((g) => (
                  <fieldset key={g.title} className="write-group">
                    <legend>{g.title}</legend>
                    {g.items.map((c) => (
                      <label key={c} className="settings-toggle write-item">
                        <input type="checkbox" checked={checked.includes(c)} onChange={() => toggle(c)} />
                        <span>{c}</span>
                      </label>
                    ))}
                  </fieldset>
                ))}
                <p className="write-score"><b>{checked.length}</b> of {all.length} done{checked.length === all.length ? '. Strong work!' : '.'}</p>
              </div>
            )}
          </article>
        </section>
      </div>
    </div>
  );
}
