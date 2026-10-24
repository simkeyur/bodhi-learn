import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { G5_MATH, G5_MATH_STRANDS } from '../../data/standards/g5-math';
import { useLearner } from '../../learner/store';
import { recentAverage } from '../../learner/mastery';
import { Mastery, MasteryStack, StandardTags } from '../../ui/bits';
import '../screens.css';

export function SkillMap() {
  const { skills } = useLearner();
  const { hash } = useLocation();

  // Links from Today jump to a strand
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
  }, [hash]);

  return (
    <div className="page">
      <div className="page-head">
        <div>
          <p className="eyebrow">Grade 5</p>
          <h1>Math skills</h1>
          <p className="page-sub">The 36 skills the state test can ask about. Readiness skills show up on the test most.</p>
        </div>
        <div className="skills-summary"><MasteryStack records={G5_MATH.map((s) => skills[s.code])} label="All skills" /></div>
      </div>

      {G5_MATH_STRANDS.map((st) => {
        const list = G5_MATH.filter((s) => s.strand === st.id);
        return (
          <section key={st.id} id={`strand-${st.id}`} className="strand" aria-labelledby={`strand-${st.id}-title`}>
            <div className="strand-head">
              <h2 id={`strand-${st.id}-title`}><span className="strand-num">{st.id}</span>{st.title}</h2>
              <span className="page-sub">{st.full}</span>
            </div>
            <ul className="skill-list card">
              {list.map((s) => {
                const r = skills[s.code];
                return (
                  <li key={s.code} className="skill-row">
                    <div className="skill-tags"><StandardTags standard={s} /></div>
                    <div className="skill-main">
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                    <div className="skill-state">
                      <Mastery record={r} />
                      {r && <span className="skill-recent">{Math.round(recentAverage(r) * 100)}% recently</span>}
                    </div>
                    <Link to={`/practice/${s.code}`} className="btn btn-secondary btn-sm" aria-label={`Practice ${s.code} ${s.title}`}>Practice</Link>
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
