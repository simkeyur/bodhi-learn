import React from 'react';
import { ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LEVEL_NAMES, SUBJECT_INFO, SUBJECT_ORDER, gamesForAge, hasStickers } from '../../data/subjects';
import { MODE_LABEL, quizGamesFor } from '../../data/quizGames';
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
  meta?: string;
  onClick: () => void;
}

// One slim, playful card: icon, name, a short description, and how it is played
const SlimCard: React.FC<SlimCardProps> = ({ icon, title, sub, color, dark, tint, meta, onClick }) => (
  <button
    className="btn-reset slim-card"
    onClick={onClick}
    style={{ '--c': color, '--cd': dark, '--ct': tint } as React.CSSProperties}
  >
    <span className="slim-icon" aria-hidden>{icon}</span>
    <span className="slim-text">
      <span className="slim-title">{title}</span>
      <span className="slim-sub">{sub}</span>
      {meta && <span className="slim-meta">{meta}</span>}
    </span>
    <span className="slim-go" aria-hidden><ArrowRight size={16} /></span>
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
        const quizGames = quizGamesFor(id, age);
        const minis = gamesForAge(id, age);
        const cards = [
          ...quizGames.map((g) => (
            <SlimCard key={g.id} icon={g.icon} title={g.title} sub={g.blurb} meta={MODE_LABEL[g.mode]}
              color={g.color} dark={g.dark} tint={g.tint} onClick={() => go(`play:${g.id}`)} />
          )),
          ...minis.map((g) => (
            <SlimCard key={g.view} icon={g.icon} title={g.title} sub={g.blurb} meta="Play and learn"
              color={g.color} dark={g.dark} tint={g.tint} onClick={() => go(g.view)} />
          )),
        ];
        // Little ones get the hands-on games first; older children get the question games first
        if (ageBand === 'little') cards.unshift(...cards.splice(quizGames.length));
        if (cards.length === 0) return null;
        return (
          <section className="hub-section" key={id} style={{ '--sc': info.color, '--sd': info.dark, '--st': info.tint } as React.CSSProperties}>
            <div className="hub-section-header">
              <span className="hub-section-icon" aria-hidden>{info.icon}</span>
              <div className="hub-section-heading">
                <h3 className="hub-section-title">
                  {info.title}
                  {showLevels && <span className="hub-section-badge">Level {skill.level} · {LEVEL_NAMES[skill.level]}</span>}
                </h3>
                <p className="hub-section-desc">{info.blurb[ageBand]}</p>
              </div>
            </div>
            <div className="hub-grid">{cards}</div>
          </section>
        );
      })}

      {hasStickers(age) && (
        <section className="hub-section" style={{ '--sc': '#818CF8', '--sd': '#4F46E5', '--st': '#EEF2FF' } as React.CSSProperties}>
          <div className="hub-section-header">
            <span className="hub-section-icon" aria-hidden>🎨</span>
            <div className="hub-section-heading">
              <h3 className="hub-section-title">Rewards</h3>
              <p className="hub-section-desc">Spend your stars on stickers</p>
            </div>
          </div>
          <div className="hub-grid">
            <SlimCard icon="🎨" title="Sticker Book" sub={`You have ${stars} ⭐ to spend`} meta="Collect and decorate" color="#818CF8" dark="#4F46E5" tint="#EEF2FF" onClick={() => go('stickers')} />
          </div>
        </section>
      )}
    </div>
  );
};
