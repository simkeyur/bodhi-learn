// Small presentational pieces used on several screens.

import type { Standard } from '../content/types';
import { shortCode } from '../content/registry';
import { MASTERY_LABEL, masteryOf, type SkillRecord } from '../learner/mastery';

export const Mastery = ({ record }: { record?: SkillRecord }) => {
  const state = masteryOf(record);
  return <span className="mastery" data-state={state}>{MASTERY_LABEL[state]}</span>;
};

export const StandardTags = ({ standard }: { standard: Standard }) => {
  const code = shortCode(standard.code);
  const isEarly = code.startsWith('1.') || code.startsWith('2.');
  return (
    <>
      <span className="tag tag-code">{code}</span>
      <span className={`tag tag-${standard.kind}`} title={standard.kind === 'readiness' ? (isEarly ? 'Key skills form the foundation for later grades' : 'Readiness standards are tested more often') : undefined}>
        {standard.kind === 'readiness' ? (isEarly ? 'Key skill' : 'Readiness') : 'Supporting'}
      </span>
    </>
  );
};

export const Bar = ({ value, good, label }: { value: number; good?: boolean; label: string }) => (
  <div className={`bar ${good ? 'bar-good' : ''}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(value * 100)}>
    <span style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} />
  </div>
);

// How many standards are in each mastery state, as one stacked bar
export function MasteryStack({ records, label }: { records: (SkillRecord | undefined)[]; label: string }) {
  const counts = { new: 0, learning: 0, close: 0, mastered: 0 };
  for (const r of records) counts[masteryOf(r)] += 1;
  const total = records.length || 1;
  const summary = `${label}: ${counts.mastered} mastered, ${counts.close} almost there, ${counts.learning} learning, ${counts.new} not started`;
  return (
    <div className="stack" role="img" aria-label={summary} title={summary}>
      {(['mastered', 'close', 'learning'] as const).map((s) => (
        counts[s] ? <span key={s} className={`s-${s}`} style={{ width: `${(counts[s] / total) * 100}%` }} /> : null
      ))}
    </div>
  );
}
