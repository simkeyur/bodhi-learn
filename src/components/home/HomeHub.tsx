import React from 'react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { Sparkles, Volume2 } from 'lucide-react';

interface HomeHubProps {
  onSelectView: (view: string) => void;
}

const CARDS = [
  {
    id: 'tracing-abc',
    title: 'ABC Tracing',
    subtitle: 'A for Apple, B for Ball & a magic brush!',
    icon: '✏️',
    color: '#FB7185',
    darkColor: '#E11D48',
    tint: '#FFF1F2',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'tracing-words',
    title: 'Word Tracing',
    subtitle: 'Trace whole words on handwriting lines',
    icon: '✍️',
    color: '#8B5CF6',
    darkColor: '#6D28D9',
    tint: '#F5F3FF',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'phonics',
    title: 'Letters & Sounds',
    subtitle: 'A–Z sound board and Letter Quest',
    icon: '🔤',
    color: '#38BDF8',
    darkColor: '#0284C7',
    tint: '#F0F9FF',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'slide-read',
    title: 'Slide & Read',
    subtitle: 'Slide your finger under words and hear them',
    icon: '👉',
    color: '#1E3A8A',
    darkColor: '#1E3A8A',
    tint: '#EFF6FF',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'sight-words',
    title: 'Sight Words',
    subtitle: 'Spell words with letter puzzles',
    icon: '🧩',
    color: '#C084FC',
    darkColor: '#9333EA',
    tint: '#FAF5FF',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'stories',
    title: 'Story Time',
    subtitle: 'Read-along books, tap any word',
    icon: '📚',
    color: '#F97316',
    darkColor: '#C2410C',
    tint: '#FFF7ED',
    starsBonus: '+2 ⭐',
  },
  {
    id: 'counting',
    title: 'Counting',
    subtitle: 'Tap, pop & count with chimes',
    icon: '🔢',
    color: '#4ADE80',
    darkColor: '#16A34A',
    tint: '#F0FDF4',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'math',
    title: 'Math Kitchen',
    subtitle: 'Add & take away with yummy snacks',
    icon: '🍎',
    color: '#F59E0B',
    darkColor: '#D97706',
    tint: '#FFFBEB',
    starsBonus: '+1 ⭐',
  },
  {
    id: 'stickers',
    title: 'Stickers',
    subtitle: 'Spend stars & decorate your board',
    icon: '🎨',
    color: '#818CF8',
    darkColor: '#4F46E5',
    tint: '#EEF2FF',
    starsBonus: 'Shop',
  },
];

export const HomeHub: React.FC<HomeHubProps> = ({ onSelectView }) => {
  const { kidName, stars, ageBracket } = useApp();

  const hearBuddy = () => {
    sound.playPop();
    const starClips = stars >= 1 && stars <= 20
      ? [clip.phrase('you_have'), clip.number(stars), clip.phrase('stars_word')]
      : [];
    speech.say([clip.phrase('buddy_hello'), ...starClips, clip.phrase('what_to_play')]);
  };

  return (
    <div className="page">
      {/* Friendly hero */}
      <div className="hub-hero">
        <div style={{ minWidth: 0 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#FEF08A',
            border: '2px solid #F59E0B',
            color: '#92400E',
            padding: '3px 12px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: '0.85rem',
            marginBottom: 8,
          }}>
            <Sparkles size={14} /> {ageBracket === 'pre-k' ? 'Pre-K' : ageBracket === 'grade1' ? '1st Grade' : 'Kindergarten'}
          </div>

          <h2 className="hub-title">
            Hi <span style={{ color: '#0284C7' }}>{kidName}</span>! What shall we play? 🚀
          </h2>
        </div>

        {/* Buddy the Bear: tap to hear */}
        <button className="btn-reset hub-buddy" onClick={hearBuddy} aria-label="Hear Buddy the Bear">
          <span style={{ fontSize: '2.6rem' }} className="animate-bob" aria-hidden>🐻</span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B' }}>Buddy</span>
            <span style={{ color: '#0284C7', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Volume2 size={16} /> Tap me!
            </span>
          </span>
        </button>
      </div>

      {/* Learning worlds */}
      <div className="hub-grid">
        {CARDS.map((card) => (
          <button
            key={card.id}
            className="btn-reset hub-card"
            onClick={() => {
              sound.playPop();
              onSelectView(card.id);
            }}
            style={{
              borderColor: card.color,
              background: `linear-gradient(160deg, #FFFFFF 40%, ${card.tint} 100%)`,
              boxShadow: `0 6px 0 ${card.darkColor}33, var(--shadow-playful)`,
            }}
          >
            <span className="hub-badge" style={{ background: card.color }}>
              {card.starsBonus}
            </span>
            <span className="hub-icon" aria-hidden>{card.icon}</span>
            <span className="hub-card-title">{card.title}</span>
            <span className="hub-card-sub">{card.subtitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
