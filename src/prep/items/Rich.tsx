import { Fragment } from 'react';
import type { Block } from '../content/types';
import { FigureView } from './figures/Figures';

// Text with {3/4} fractions (2{1/3} for mixed numbers) and **bold**.
// Fractions are drawn stacked with CSS; screen readers get "3/4".
const TOKEN = /(\*\*[^*]+\*\*|\{\d+\/\d+\})/;

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        const f = /^\{(\d+)\/(\d+)\}$/.exec(part);
        if (f) {
          return (
            <span key={i} className="frac">
              <span className="sr-only">{f[1]}/{f[2]}</span>
              <span className="frac-n" aria-hidden>{f[1]}</span>
              <span className="frac-d" aria-hidden>{f[2]}</span>
            </span>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === 'text') return <p key={i} className="item-text"><RichText text={b.text} /></p>;
        if (b.kind === 'figure') return <div key={i} className="item-figure"><FigureView figure={b.figure} alt={b.alt} /></div>;
        return (
          <div key={i} className="item-table-wrap">
            <table className="item-table">
              {b.caption && <caption>{b.caption}</caption>}
              <thead><tr>{b.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
              <tbody>
                {b.rows.map((r, j) => (
                  <tr key={j}>{r.map((c, k) => (k === 0 ? <th key={k} scope="row"><RichText text={c} /></th> : <td key={k}><RichText text={c} /></td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
