import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LEVEL_NAMES, SUBJECT_INFO, gamesForAge } from '../../data/subjects';
import type { Subject } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import './home.css';

interface SubjectPageProps {
  subject: Subject;
  onSelectView: (view: string) => void;
  onBack: () => void;
}

export const SubjectPage: React.FC<SubjectPageProps> = ({ subject, onSelectView, onBack }) => {
  const { age, skills } = useApp();
  const info = SUBJECT_INFO[subject];
  const skill = skills[subject];
  const games = gamesForAge(subject, age);
  const accuracy = skill.answered ? Math.round((skill.correct / skill.answered) * 100) : null;

  const go = (view: string) => {
    sound.playPop();
    onSelectView(view);
  };

  return (
    <div className="page subject" style={{ '--accent': info.color, '--accent-dark': info.dark, '--tint': info.tint } as React.CSSProperties}>
      <button className="subject-back" onClick={() => { sound.playPop(); onBack(); }} aria-label="Back to home">
        <ArrowLeft size={20} /> Home
      </button>

      <div className="subject-head">
        <span className="subject-icon" aria-hidden>{info.icon}</span>
        <div>
          <h2>{info.title}</h2>
          <p>{info.blurb[age <= 6 ? 'little' : age <= 10 ? 'explorer' : 'pro']}</p>
        </div>
      </div>

      <button className="subject-quiz" onClick={() => go(`quiz:${subject}`)}>
        <span className="subject-quiz-body">
          <span className="subject-quiz-label">Challenge</span>
          <span className="subject-quiz-title">Level {skill.level} · {LEVEL_NAMES[skill.level]}</span>
          <span className="subject-quiz-sub">
            {accuracy === null ? info.topics : `${skill.answered} answered · ${accuracy}% right`}
          </span>
        </span>
        <span className="subject-quiz-go" aria-hidden><ArrowRight size={24} /></span>
      </button>

      {games.length > 0 && (
        <>
          <h3 className="home-section">Games</h3>
          <div className="subject-games">
            {games.map((g) => (
              <button key={g.view} className="subject-game" onClick={() => go(g.view)}>
                <span className="subject-game-icon" aria-hidden>{g.icon}</span>
                <span>
                  <strong>{g.title}</strong>
                  <small>{g.blurb}</small>
                </span>
                <ArrowRight size={18} aria-hidden />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
