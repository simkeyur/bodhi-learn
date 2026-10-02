import React, { useMemo } from 'react';
import { ArrowRight, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LEVEL_NAMES, SUBJECT_INFO, SUBJECT_ORDER } from '../../data/subjects';
import { SUBJECTS, type Subject } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import './home.css';

interface HomeProps {
  onSelectView: (view: string) => void;
}

// A different subject each day, favouring the one the child has practised least
function todaysPick(answered: Record<Subject, number>): Subject {
  const day = Math.floor(Date.now() / 86_400_000);
  const least = Math.min(...SUBJECTS.map((s) => answered[s]));
  const candidates = SUBJECT_ORDER.filter((s) => answered[s] <= least + 5);
  return candidates[day % candidates.length];
}

const greeting = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
};

export const Home: React.FC<HomeProps> = ({ onSelectView }) => {
  const { kidName, stars, ageBand, skills } = useApp();
  const showLevels = ageBand !== 'little';

  const pick = useMemo(
    () => todaysPick(Object.fromEntries(SUBJECTS.map((s) => [s, skills[s].answered])) as Record<Subject, number>),
    [skills],
  );
  const pickInfo = SUBJECT_INFO[pick];

  const go = (view: string) => {
    sound.playPop();
    onSelectView(view);
  };

  const hearBuddy = () => {
    sound.playPop();
    const starClips = stars >= 1 && stars <= 20 ? [clip.phrase('you_have'), clip.number(stars), clip.phrase('stars_word')] : [];
    speech.say([clip.phrase('buddy_hello'), ...starClips, clip.phrase('what_to_play')]);
  };

  return (
    <div className="page home">
      <header className="home-greet">
        <div>
          <p className="home-eyebrow">{greeting()}</p>
          <h2 className="home-name">{kidName}</h2>
        </div>
        {ageBand === 'little' && (
          <button className="home-buddy" onClick={hearBuddy} aria-label="Hear Buddy the Bear">
            <span className="animate-bob" aria-hidden>🐻</span>
            <Volume2 size={18} />
          </button>
        )}
      </header>

      <button
        className="home-pick"
        onClick={() => go(`quiz:${pick}`)}
        style={{ '--accent': pickInfo.color, '--accent-dark': pickInfo.dark } as React.CSSProperties}
      >
        <span className="home-pick-icon" aria-hidden>{pickInfo.icon}</span>
        <span className="home-pick-text">
          <span className="home-pick-label">Today's pick</span>
          <span className="home-pick-title">{pickInfo.title} challenge</span>
          <span className="home-pick-sub">8 quick questions{showLevels ? ` · ${LEVEL_NAMES[skills[pick].level]}` : ''}</span>
        </span>
        <span className="home-pick-go" aria-hidden><ArrowRight size={26} /></span>
      </button>

      <h3 className="home-section">Explore</h3>
      <div className="home-grid">
        {SUBJECT_ORDER.map((id) => {
          const info = SUBJECT_INFO[id];
          return (
            <button
              key={id}
              className="home-tile"
              onClick={() => go(`subject:${id}`)}
              style={{ '--accent': info.color, '--accent-dark': info.dark, '--tint': info.tint } as React.CSSProperties}
            >
              <span className="home-tile-icon" aria-hidden>{info.icon}</span>
              <span className="home-tile-title">{info.title}</span>
              <span className="home-tile-sub">{info.blurb[ageBand]}</span>
              {showLevels && <span className="home-tile-level">Level {skills[id].level}</span>}
            </button>
          );
        })}
      </div>

      <button className="home-stickers" onClick={() => go('stickers')}>
        <span aria-hidden>🎨</span>
        <span>
          <strong>Sticker book</strong>
          <small>Spend your {stars} ⭐ on stickers</small>
        </span>
        <ArrowRight size={20} aria-hidden />
      </button>
    </div>
  );
};
