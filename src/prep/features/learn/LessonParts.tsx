import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Lesson } from '../../content/types';
import { FigureView } from '../../items/figures/Figures';
import { RichText } from '../../items/Rich';

// Key words as cards: tap one to see what it means
export function WordCards({ words }: { words: Lesson['words'] }) {
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
  return (
    <ul className="word-cards">
      {words.map((w, i) => {
        const shown = open.includes(i);
        return (
          <li key={w.term}>
            <button type="button" className={`word-card ${shown ? 'open' : ''}`} aria-expanded={shown} onClick={() => toggle(i)}>
              <span className="word-term"><RichText text={w.term} /></span>
              <span className="word-meaning">{shown ? <RichText text={w.meaning} /> : 'Tap to see'}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// The big ideas, one card at a time
export function IdeaDeck({ ideas, onDone, doneLabel }: { ideas: Lesson['ideas']; onDone: () => void; doneLabel: string }) {
  const [i, setI] = useState(0);
  const idea = ideas[i];
  const last = i === ideas.length - 1;
  return (
    <div className="idea-deck">
      <div className="idea-dots" aria-label={`Idea ${i + 1} of ${ideas.length}`}>
        {ideas.map((_, n) => <span key={n} className={n === i ? 'on' : n < i ? 'done' : ''} />)}
      </div>
      <article className="idea-card" key={i} aria-live="polite">
        <h3>{idea.title}</h3>
        <p><RichText text={idea.text} /></p>
        {idea.figure && <div className="idea-figure"><FigureView figure={idea.figure} alt={idea.alt ?? ''} /></div>}
        {idea.example && <p className="idea-example"><RichText text={idea.example} /></p>}
      </article>
      <div className="learn-actions">
        <button type="button" className="btn btn-ghost" onClick={() => setI(i - 1)} disabled={i === 0}><ArrowLeft size={18} aria-hidden /> Back</button>
        <button type="button" className="btn btn-primary" onClick={() => (last ? onDone() : setI(i + 1))}>
          {last ? doneLabel : 'Next idea'} <ArrowRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
