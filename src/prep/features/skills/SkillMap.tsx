import { useEffect } from 'react';
import { BookOpen, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { G5_MATH, G5_MATH_STRANDS } from '../../data/standards/g5-math';
import { useLearner } from '../../learner/store';
import { recentAverage } from '../../learner/mastery';
import { Mastery, MasteryStack, StandardTags } from '../../ui/bits';
import { strandStyle } from '../../ui/strands';
import { StrandIcon } from '../../ui/StrandIcon';
import '../screens.css';

export function SkillMap() {
  const { skills, lessons } = useLearner();
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
          <section key={st.id} id={`strand-${st.id}`} className="strand" style={strandStyle(st.id)} aria-labelledby={`strand-${st.id}-title`}>
            <div className="strand-head">
              <span className="strand-tile" aria-hidden><StrandIcon strand={st.id} size={22} /></span>
              <h2 id={`strand-${st.id}-title`}>{st.title}</h2>
              <span className="page-sub">{st.full}</span>
            </div>
            <ul className="skill-list">
              {list.map((s) => {
                const r = skills[s.code];
                // Not started and no walkthrough yet: Learn is the main button
                const fresh = !r && !lessons[s.code];
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
                    <div className="skill-actions">
                      <Link to={`/learn/${s.code}`} className={`btn btn-sm ${fresh ? 'btn-primary' : 'btn-secondary'}`} aria-label={`Learn ${s.code} ${s.title}`}>
                        {lessons[s.code] ? <Check size={16} aria-hidden /> : <BookOpen size={16} aria-hidden />} Learn
                      </Link>
                      <Link to={`/practice/${s.code}`} className={`btn btn-sm ${fresh ? 'btn-secondary' : 'btn-primary'}`} aria-label={`Practice ${s.code} ${s.title}`}>Practice</Link>
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
