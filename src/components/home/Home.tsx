import React from 'react';
import { ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LEVEL_NAMES, SUBJECT_INFO, SUBJECT_ORDER, gamesForAge } from '../../data/subjects';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import './home.css';

interface HomeProps {
  onSelectView: (view: string) => void;
}

interface SlimCardProps {
  icon: React.ReactNode;
  title: string;
  sub: string;
  color: string;
  dark: string;
  tint: string;
  cta?: string;
  solid?: boolean;
  onClick: () => void;
}

// One slim, playful row: icon, name, one line of description, and a Play pill
const SlimCard: React.FC<SlimCardProps> = ({ icon, title, sub, color, dark, tint, cta = 'Play', solid, onClick }) => (
  <button
    className={`btn-reset slim-card ${solid ? 'solid' : ''}`}
    onClick={onClick}
    style={{
      '--c': color,
      '--cd': dark,
      '--ct': tint,
    } as React.CSSProperties}
  >
    <span className="slim-icon" aria-hidden>{icon}</span>
    <span className="slim-text">
      <span className="slim-title">{title}</span>
      <span className="slim-sub">{sub}</span>
    </span>
    <span className="slim-play">{cta} <ArrowRight size={13} /></span>
  </button>
);

export const Home: React.FC<HomeProps> = ({ onSelectView }) => {
  const { kidName, stars, age, ageBand, skills } = useApp();
  const showLevels = ageBand !== 'little';

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
      <div className="hub-hero">
        <div style={{ minWidth: 0 }}>
          <div className="hub-age-badge"><Sparkles size={13} /> Age {age}</div>
          <h2 className="hub-title">
            Hi <span style={{ color: '#0284C7' }}>{kidName}</span>! What shall we play? 🚀
          </h2>
        </div>
        {ageBand !== 'pro' && (
          <button className="btn-reset hub-buddy" onClick={hearBuddy} aria-label="Hear Buddy the Bear">
            <span style={{ fontSize: '2.2rem' }} className="animate-bob" aria-hidden>🐻</span>
            <span className="hub-buddy-text">
              <b>Buddy</b>
              <span><Volume2 size={14} /> Tap me!</span>
            </span>
          </button>
        )}
      </div>

      {SUBJECT_ORDER.map((id) => {
        const info = SUBJECT_INFO[id];
        const skill = skills[id];
        const games = gamesForAge(id, age);
        return (
          <section className="hub-section" key={id}>
            <div className="hub-section-header">
              <span className="hub-section-icon" aria-hidden>{info.icon}</span>
              <div className="hub-section-heading">
                <h3 className="hub-section-title">{info.title}</h3>
                <p className="hub-section-desc">{info.blurb[ageBand]}</p>
              </div>
              {showLevels && <span className="hub-section-badge" style={{ background: info.tint, color: info.dark }}>Level {skill.level}</span>}
            </div>

            <div className="hub-grid">
              <SlimCard
                solid
                icon="⭐"
                title="Challenge"
                sub={showLevels ? `8 questions · ${LEVEL_NAMES[skill.level]}` : '8 quick questions'}
                color={info.color}
                dark={info.dark}
                tint={info.tint}
                cta="Start"
                onClick={() => go(`quiz:${id}`)}
              />
              {games.map((g) => (
                <SlimCard
                  key={g.view}
                  icon={g.icon}
                  title={g.title}
                  sub={g.blurb}
                  color={g.color}
                  dark={g.dark}
                  tint={g.tint}
                  onClick={() => go(g.view)}
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="hub-section">
        <div className="hub-section-header">
          <span className="hub-section-icon" aria-hidden>🎨</span>
          <div className="hub-section-heading">
            <h3 className="hub-section-title">Rewards</h3>
            <p className="hub-section-desc">Spend your stars on stickers</p>
          </div>
        </div>
        <div className="hub-grid">
          <SlimCard icon="🎨" title="Sticker Book" sub={`You have ${stars} ⭐ to spend`} color="#818CF8" dark="#4F46E5" tint="#EEF2FF" cta="Open" onClick={() => go('stickers')} />
        </div>
      </section>
    </div>
  );
};
