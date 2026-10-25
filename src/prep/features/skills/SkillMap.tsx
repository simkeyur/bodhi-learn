import { useEffect } from 'react';
import { BookOpen, Check, PenLine } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { contentFor, findLesson, hasPractice, readingFor } from '../../content/registry';
import type { Subject } from '../../content/types';
import { GENRE_LABEL } from '../../content/rla/passage';
import { useApp } from '../../../context/AppContext';
import { useLearner } from '../../learner/store';
import { recentAverage } from '../../learner/mastery';
import { Mastery, MasteryStack, StandardTags } from '../../ui/bits';
import { strandStyle } from '../../ui/strands';
import { StrandIcon } from '../../ui/StrandIcon';
import '../screens.css';

// All the skills for the child's grade in one subject, by strand. Reading also lists its passages first.
export function SkillMap({ subject }: { subject: Subject }) {
  const { skills, lessons, sets: setsDone, essays: drafts } = useLearner();
  const { grade } = useApp();
  const content = subject === 'rla' ? readingFor(grade) : contentFor(grade);
  const { grade: shown, standards, strands } = content;
  const reading = subject === 'rla' ? readingFor(grade) : null;
  const { hash } = useLocation();
  const name = subject === 'rla' ? 'Reading' : 'Math';

  // Links from Today jump to a strand
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
  }, [hash]);

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <p className="eyebrow">Grade {shown}</p>
          <h1>{name} skills</h1>
          <p className="page-sub">
            The {standards.length} skills the state test can ask about. Readiness skills show up on the test most.
            {grade !== shown && ` Grade ${grade} ${name.toLowerCase()} is on the way; these are grade ${shown}.`}
          </p>
        </div>
        <div className="skills-summary"><MasteryStack records={standards.map((s) => skills[s.code])} label="All skills" /></div>
      </div>

      {reading && (
        <section className="strand" aria-labelledby="passages-title">
          <div className="strand-head">
            <h2 id="passages-title">Passages</h2>
            <span className="page-sub">Read a passage and answer its questions. Each one practices several skills.</span>
          </div>
          <ul className="set-list">
            {reading.sets.map((set) => {
              const essay = reading.essays.find((e) => e.setId === set.id);
              return (
                <li key={set.id} className="set-row">
                  <span className="set-icon" aria-hidden>{set.kind === 'editing' ? <PenLine size={20} /> : <BookOpen size={20} />}</span>
                  <div className="skill-main">
                    <h3>{set.title}</h3>
                    <p>{set.kind === 'editing' ? 'Revising and editing' : set.passages.map((p) => GENRE_LABEL[p.genre]).join(' + ')} · {set.items.length} questions</p>
                  </div>
                  <div className="skill-state">{setsDone[set.id] ? <span className="mastery" data-state="mastered">Done</span> : <span className="mastery" data-state="new">Not read</span>}</div>
                  <div className="skill-actions">
                    {essay && <Link to={`/write/${essay.id}`} className="btn btn-sm btn-secondary">{drafts[essay.id] ? 'Essay' : 'Write'}</Link>}
                    <Link to={`/read/${set.id}`} className={`btn btn-sm ${setsDone[set.id] ? 'btn-secondary' : 'btn-primary'}`}>{setsDone[set.id] ? 'Read again' : 'Read'}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {strands.map((st) => {
        const list = standards.filter((s) => s.strand === st.id);
        return (
          <section key={st.id} id={`strand-${st.id}`} className="strand" style={strandStyle(st.id)} aria-labelledby={`strand-${st.id}-title`}>
            <div className="strand-head">
              <span className="strand-tile" aria-hidden><StrandIcon strand={st.id} subject={subject} size={22} /></span>
              <h2 id={`strand-${st.id}-title`}>{st.title}</h2>
              <span className="page-sub">{st.full}</span>
            </div>
            <ul className="skill-list">
              {list.map((s) => {
                const r = skills[s.code];
                const lesson = !!findLesson(s.code);
                const ready = hasPractice(s.code);
                // Not started and no walkthrough yet: Learn is the main button
                const fresh = !r && !lessons[s.code] && lesson;
                return (
                  <li key={s.code} className="skill-row">
                    <div className="skill-tags"><StandardTags standard={s} /></div>
                    <div className="skill-main">
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                    <div className="skill-state">
                      {ready ? <Mastery record={r} /> : <span className="mastery soon">Coming soon</span>}
                      {r && <span className="skill-recent">{Math.round(recentAverage(r) * 100)}% recently</span>}
                    </div>
                    <div className="skill-actions">
                      {lesson && (
                        <Link to={`/learn/${s.code}`} className={`btn btn-sm ${fresh ? 'btn-primary' : 'btn-secondary'}`} aria-label={`Learn ${s.title}`}>
                          {lessons[s.code] ? <Check size={16} aria-hidden /> : <BookOpen size={16} aria-hidden />} Learn
                        </Link>
                      )}
                      {ready && <Link to={`/practice/${s.code}`} className={`btn btn-sm ${fresh ? 'btn-secondary' : 'btn-primary'}`} aria-label={`Practice ${s.title}`}>Practice</Link>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
