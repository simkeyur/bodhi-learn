import { Fragment } from 'react';
import type { Passage } from '../../content/types';
import { numbering, unitName } from '../../content/rla/passage';
import { FigureView } from '../../items/figures/Figures';
import { RichText } from '../../items/Rich';

// A passage as the test shows it: numbered paragraphs (lines in poems, speeches in plays, (sentences) in
// drafts). `highlight` marks the numbers a question is about; each numbered block has an id so a question can
// scroll to it.
export function PassageView({ passage, highlight = [], idPrefix = 'para' }: { passage: Passage; highlight?: number[]; idPrefix?: string }) {
  const starts = numbering(passage);
  const unit = unitName(passage);
  const poem = unit === 'line';
  const on = (n: number | null) => n !== null && highlight.includes(n);

  return (
    <article className={`passage passage-${passage.genre}`} aria-label={passage.title}>
      <header className="passage-head">
        <h2>{passage.title}</h2>
        {passage.author && <p className="passage-by">by {passage.author}</p>}
      </header>
      <div className={poem ? 'passage-poem' : 'passage-body'}>
        {passage.blocks.map((b, i) => {
          const n = starts[i];
          switch (b.kind) {
            case 'heading':
              return <h3 key={i} className="passage-heading">{b.text}</h3>;
            case 'direction':
              return <p key={i} className="passage-direction">{b.text}</p>;
            case 'note':
              return <p key={i} className="passage-note">{b.text}</p>;
            case 'sidebar':
              return <aside key={i} className="passage-sidebar"><h4>{b.title}</h4><p><RichText text={b.text} /></p></aside>;
            case 'figure':
              return <figure key={i} className="passage-figure"><FigureView figure={b.figure} alt={b.alt} />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>;
            case 'line':
              return (
                <p key={i} id={`${idPrefix}-${n}`} className={`passage-line ${b.stanzaEnd ? 'stanza-end' : ''} ${on(n) ? 'is-cited' : ''}`}>
                  <span className="passage-num" aria-label={`Line ${n}`}>{n}</span>
                  <span>{b.text}</span>
                </p>
              );
            case 'speech':
              return (
                <p key={i} id={`${idPrefix}-${n}`} className={`passage-p passage-speech ${on(n) ? 'is-cited' : ''}`}>
                  <span className="passage-num" aria-label={`Line ${n}`}>{n}</span>
                  <span><b className="passage-speaker">{b.speaker}:</b> {b.text}</span>
                </p>
              );
            case 'sentences':
              return (
                <p key={i} className="passage-p passage-draft">
                  {b.sentences.map((s, k) => {
                    const sn = (n ?? 1) + k;
                    return (
                      <Fragment key={k}>
                        <span id={`${idPrefix}-${sn}`} className={`passage-sentence ${on(sn) ? 'is-cited' : ''}`}>
                          <span className="passage-snum">({sn})</span> {s}
                        </span>{' '}
                      </Fragment>
                    );
                  })}
                </p>
              );
            default:
              return (
                <p key={i} id={`${idPrefix}-${n}`} className={`passage-p ${on(n) ? 'is-cited' : ''}`}>
                  <span className="passage-num" aria-label={`Paragraph ${n}`}>{n}</span>
                  <span><RichText text={b.text} /></span>
                </p>
              );
          }
        })}
      </div>
      {passage.source && <p className="passage-source">From <i>{passage.source}</i>. Public domain.</p>}
    </article>
  );
}
