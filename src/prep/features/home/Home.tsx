import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CalendarDays, ExternalLink, Flame, Target } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { CONTENT_GRADE, OFFICIAL_PRACTICE_URL } from '../../app/brand';
import { G5_MATH_WINDOWS, nextWindow } from '../../data/calendar';
import { G5_MATH, G5_MATH_STRANDS, g5Standard } from '../../data/standards/g5-math';
import { DAILY_GOAL, dayKey, planStandards, streakDays } from '../../learner/mastery';
import { useLearner } from '../../learner/store';
import { Bar, MasteryStack } from '../../ui/bits';
import { strandIcon, strandStyle } from '../../ui/strands';
import '../screens.css';

const greeting = (h: number) => (h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening');
const longDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export function Home() {
  const { kidName, grade } = useApp();
  const { skills, days } = useLearner();
  const [now] = useState(() => new Date());
  const today = dayKey(now);
  const doneToday = days[today] ?? 0;
  const streak = streakDays(days, now);
  const plan = planStandards(G5_MATH, skills, today, 5).map((c) => g5Standard(c)!);
  const next = nextWindow(G5_MATH_WINDOWS, today);
  const started = G5_MATH.some((s) => skills[s.code]);

  return (
    <div className="page home">
      <div className="hero">
        <div>
          <p className="eyebrow">Grade {CONTENT_GRADE} math</p>
          <h1>{greeting(now.getHours())}, {kidName}.</h1>
          {grade !== CONTENT_GRADE && (
            <p className="page-sub">Grade {grade} questions are on the way. Until then, you're practicing grade {CONTENT_GRADE} math.</p>
          )}
        </div>
        {next && (
          <p className="countdown">
            <CalendarDays size={18} aria-hidden />
            {next.days === 0
              ? <span><b>{next.window.name}</b> testing is happening now</span>
              : <span><b>{next.days} days</b> until {next.window.name} ({longDate(next.window.start)})</span>}
          </p>
        )}
      </div>

      <div className="home-grid">
        <section className="card card-pad today" aria-labelledby="today-title">
          <div className="today-head">
            <div>
              <h2 id="today-title">Today's practice</h2>
              <p className="page-sub">{started ? 'Picked from the skills that need you most.' : 'A first look at five key skills. It adapts as you go.'}</p>
            </div>
            <div className="today-stats">
              <span className="stat" title="Days in a row with practice"><Flame size={18} aria-hidden /> <b>{streak}</b> day{streak === 1 ? '' : 's'}</span>
              <span className="stat" title="Questions answered today"><Target size={18} aria-hidden /> <b>{Math.min(doneToday, DAILY_GOAL)}</b>/{DAILY_GOAL} today</span>
            </div>
          </div>
          <Bar value={doneToday / DAILY_GOAL} good={doneToday >= DAILY_GOAL} label="Daily goal" />
          <ol className="plan-list">
            {plan.map((s) => (
              <li key={s.code} style={strandStyle(s.strand)}>
                <span className="tag tag-code">{s.code}</span>
                <span>{s.title}</span>
                {s.kind === 'readiness' && <span className="tag tag-readiness">Readiness</span>}
              </li>
            ))}
          </ol>
          <Link to="/practice/today" className="btn btn-primary btn-lg">
            {doneToday >= DAILY_GOAL ? 'Keep going' : doneToday ? 'Continue today\'s practice' : 'Start today\'s practice'} <ArrowRight size={20} aria-hidden />
          </Link>
        </section>

        <section className="card card-pad progress" aria-labelledby="progress-title">
          <div className="today-head">
            <h2 id="progress-title">Math skills</h2>
            <Link to="/math" className="btn btn-ghost btn-sm">All skills <ArrowRight size={16} aria-hidden /></Link>
          </div>
          <MasteryStack records={G5_MATH.map((s) => skills[s.code])} label="All grade 5 math skills" />
          <ul className="strand-list">
            {G5_MATH_STRANDS.map((st) => {
              const list = G5_MATH.filter((s) => s.strand === st.id);
              return (
                <li key={st.id} style={strandStyle(st.id)}>
                  <Link to={`/math#strand-${st.id}`} className="strand-link">
                    <span className="strand-icon" aria-hidden>{strandIcon(st.id)}</span>
                    <span className="strand-name">{st.title}</span>
                    <span className="strand-count">{list.length} skills</span>
                  </Link>
                  <MasteryStack records={list.map((s) => skills[s.code])} label={st.title} />
                </li>
              );
            })}
          </ul>
          <ul className="legend" aria-hidden>
            <li data-state="mastered">Mastered</li><li data-state="close">Almost there</li><li data-state="learning">Learning</li><li data-state="new">Not started</li>
          </ul>
        </section>

        <section className="card card-pad real-test">
          <h2><span aria-hidden>🎯</span> Try the real test screen</h2>
          <p className="page-sub">TEA's free practice site has every released test in the same screen you'll use on test day. Try one once you've practiced a few skills.</p>
          <a className="btn btn-secondary" href={OFFICIAL_PRACTICE_URL} target="_blank" rel="noreferrer">Open TEA's practice site <ExternalLink size={16} aria-hidden /></a>
        </section>
      </div>
    </div>
  );
}
