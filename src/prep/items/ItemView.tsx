// Renders one question of any type. Controlled: the screen owns the answer and when it is revealed.
// After `revealed`, every choice and drop-down shows whether it was right.

import type { Answer, ChoicePart, InlinePart, Item, Part } from '../content/types';
import { needed } from '../content/scoring';
import { FigureView } from './figures/Figures';
import { Blocks, RichText } from './Rich';
import './items.css';

interface Props {
  item: Item;
  answer: Answer;
  onChange: (answer: Answer) => void;
  revealed: boolean;
  showKey?: boolean; // a worked example: the right answers are shown, labelled "Answer"
  readOnly?: boolean; // shown but not answerable (a worked example before it is solved)
}

const COUNT = ['', 'ONE', 'TWO', 'THREE', 'FOUR'];

export function ItemView({ item, answer, onChange, revealed, showKey, readOnly }: Props) {
  const setPart = (i: number, a: number[]) => onChange(answer.map((p, k) => (k === i ? a : p)));
  return (
    <div className="item">
      <div className="item-stem"><Blocks blocks={item.stem} /></div>
      {item.parts.map((part, i) => (
        <section key={i} className="item-part" aria-label={item.parts.length > 1 ? `Part ${'AB'[i]}` : undefined}>
          {item.parts.length > 1 && <h3 className="item-part-name">Part {'AB'[i]}</h3>}
          {part.prompt && <div className="item-prompt"><Blocks blocks={part.prompt} /></div>}
          <PartView part={part} value={answer[i] ?? []} onChange={(a) => setPart(i, a)} revealed={revealed} showKey={showKey} readOnly={readOnly} name={`${item.id}-${i}`} />
        </section>
      ))}
    </div>
  );
}

interface PartProps<P> { part: P; value: number[]; onChange: (a: number[]) => void; revealed: boolean; showKey?: boolean; readOnly?: boolean; name: string }

function PartView(props: PartProps<Part>) {
  const { part } = props;
  return part.type === 'inline' ? <InlineView {...props} part={part} /> : <ChoicesView {...props} part={part} />;
}

// ---------- Multiple choice and multiselect ----------
function ChoicesView({ part, value, onChange, revealed, showKey, readOnly, name }: PartProps<ChoicePart>) {
  const multi = part.type === 'multiselect';
  const want = needed(part);
  const figures = part.choices.some((c) => c.figure);
  const full = multi && value.length >= want;

  const toggle = (i: number) => {
    if (revealed) return;
    if (!multi) { onChange([i]); return; }
    if (value.includes(i)) onChange(value.filter((v) => v !== i));
    else if (!full) onChange([...value, i].sort((a, b) => a - b));
  };

  return (
    <fieldset className={`choices ${figures ? 'choices-figures' : ''}`} disabled={revealed || readOnly}>
      <legend className="sr-only">{multi ? `Select ${want} answers` : 'Select one answer'}</legend>
      {multi && !revealed && !readOnly && <p className="choices-hint" aria-live="polite">{value.length} of {want} selected{full ? '. Unselect one to change your answer.' : ''}</p>}
      {part.choices.map((c, i) => {
        const picked = value.includes(i);
        const right = part.correct.includes(i);
        const state = !revealed ? (picked ? 'picked' : '') : right && picked ? 'right' : right ? 'missed' : picked ? 'wrong' : 'dim';
        return (
          <label key={i} className={`choice ${state}`} data-locked={multi && full && !picked && !revealed ? 'true' : undefined}>
            <input
              type={multi ? 'checkbox' : 'radio'} name={name} checked={picked} onChange={() => toggle(i)}
              aria-labelledby={`${name}-c${i}`}
              aria-describedby={revealed && picked && !right && c.why ? `${name}-why-${i}` : undefined}
            />
            <span className="choice-letter" aria-hidden>{String.fromCharCode(65 + i)}</span>
            <span className="choice-body" id={`${name}-c${i}`}>
              {c.text && <span className="choice-text"><RichText text={c.text} /></span>}
              {c.figure && <FigureView figure={c.figure} alt={c.alt ?? ''} />}
              {revealed && (state === 'right' || state === 'missed' || state === 'wrong') && (
                <span className="choice-mark">{showKey ? 'Answer' : state === 'right' ? 'Correct' : state === 'missed' ? 'Correct answer' : 'Your answer'}</span>
              )}
              {revealed && state === 'wrong' && c.why && <span className="choice-why" id={`${name}-why-${i}`}>{c.why}</span>}
            </span>
          </label>
        );
      })}
      {multi && <span className="sr-only">Select {COUNT[want] ?? want}</span>}
    </fieldset>
  );
}

// ---------- Inline choice: drop-downs inside a sentence ----------
function InlineView({ part, value, onChange, revealed, readOnly, name }: PartProps<InlinePart>) {
  const set = (b: number, v: number) => onChange(part.blanks.map((_, k) => (k === b ? v : value[k] ?? -1)));
  return (
    <p className="inline-sentence">
      {part.segments.map((seg, i) => {
        if (typeof seg === 'string') return <RichText key={i} text={seg} />;
        const b = part.blanks[seg.blank];
        const v = value[seg.blank] ?? -1;
        const state = revealed ? (v === b.correct ? 'right' : 'wrong') : '';
        return (
          <span key={i} className={`inline-blank ${state}`}>
            <select
              aria-label={part.blanks.length > 1 ? `Choose answer ${seg.blank + 1} of ${part.blanks.length}` : 'Choose the answer'} name={`${name}-${seg.blank}`} value={v}
              onChange={(e) => set(seg.blank, Number(e.target.value))} disabled={revealed || readOnly}
            >
              <option value={-1}>Choose…</option>
              {b.options.map((o, k) => <option key={k} value={k}>{o}</option>)}
            </select>
            {revealed && v !== b.correct && <span className="inline-fix">Answer: <b>{b.options[b.correct]}</b></span>}
          </span>
        );
      })}
    </p>
  );
}
