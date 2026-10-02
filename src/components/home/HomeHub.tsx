import React, { useState, useRef } from 'react';
import { useApp, type AgeBracket } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { Sparkles, Volume2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CandyNumberIcon } from '../common/CandyNumberIcon';

interface HomeHubProps {
  onSelectView: (view: string) => void;
}

type CategoryId = 'all' | 'reading' | 'math' | 'play';

interface LearningCard {
  id: string;
  title: string;
  subtitle: string;
  category: 'reading' | 'math' | 'play';
  icon?: string;
  isCandyNumber?: boolean;
  color: string;
  darkColor: string;
  tint: string;
  starsBonus: string;
  tag?: string;
}

const ALL_CARDS: LearningCard[] = [
  {
    id: 'tracing-words',
    title: 'Word Tracing',
    subtitle: 'Trace whole words on handwriting lines',
    category: 'reading',
    icon: '✍️',
    color: '#8B5CF6',
    darkColor: '#6D28D9',
    tint: '#F5F3FF',
    starsBonus: '+1 ⭐',
    tag: 'Age 5–6 Pick',
  },
  {
    id: 'sight-words',
    title: 'Sight Words',
    subtitle: 'Spell words with letter puzzles',
    category: 'reading',
    icon: '🧩',
    color: '#C084FC',
    darkColor: '#9333EA',
    tint: '#FAF5FF',
    starsBonus: '+1 ⭐',
    tag: 'Spelling Quest',
  },
  {
    id: 'math',
    title: 'Math Kitchen',
    subtitle: 'Add & take away with yummy snacks',
    category: 'math',
    icon: '🍎',
    color: '#F59E0B',
    darkColor: '#D97706',
    tint: '#FFFBEB',
    starsBonus: '+1 ⭐',
    tag: 'Snack Math',
  },
  {
    id: 'slide-read',
    title: 'Slide & Read',
    subtitle: 'Slide your finger under words and hear them',
    category: 'reading',
    icon: '👉',
    color: '#1E3A8A',
    darkColor: '#1E3A8A',
    tint: '#EFF6FF',
    starsBonus: '+1 ⭐',
    tag: 'Phonics Flow',
  },
  {
    id: 'stories',
    title: 'Story Time',
    subtitle: 'Read-along books, tap any word',
    category: 'reading',
    icon: '📚',
    color: '#F97316',
    darkColor: '#C2410C',
    tint: '#FFF7ED',
    starsBonus: '+2 ⭐',
    tag: 'Read Along',
  },
  {
    id: 'counting',
    title: 'Counting',
    subtitle: 'Tap, pop & count with chimes',
    category: 'math',
    isCandyNumber: true,
    color: '#10B981',
    darkColor: '#059669',
    tint: '#ECFDF5',
    starsBonus: '+1 ⭐',
    tag: 'Pop & Count',
  },
  {
    id: 'phonics',
    title: 'Letters & Sounds',
    subtitle: 'A–Z sound board and Letter Quest',
    category: 'reading',
    icon: '🔤',
    color: '#38BDF8',
    darkColor: '#0284C7',
    tint: '#F0F9FF',
    starsBonus: '+1 ⭐',
    tag: 'Sound Board',
  },
  {
    id: 'tracing-abc',
    title: 'ABC Tracing',
    subtitle: 'A for Apple, B for Ball & a magic brush!',
    category: 'reading',
    icon: '✏️',
    color: '#FB7185',
    darkColor: '#E11D48',
    tint: '#FFF1F2',
    starsBonus: '+1 ⭐',
    tag: 'Letter Basics',
  },
  {
    id: 'stickers',
    title: 'Stickers',
    subtitle: 'Spend stars & decorate your board',
    category: 'play',
    icon: '🎨',
    color: '#818CF8',
    darkColor: '#4F46E5',
    tint: '#EEF2FF',
    starsBonus: 'Shop',
    tag: 'Reward Board',
  },
];

export const HomeHub: React.FC<HomeHubProps> = ({ onSelectView }) => {
  const { kidName, stars, ageBracket } = useApp();
  const [activeTab, setActiveTab] = useState<CategoryId>('all');
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    sound.playPop();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -220 : 220,
        behavior: 'smooth',
      });
    }
  };

  const hearBuddy = () => {
    sound.playPop();
    const starClips =
      stars >= 1 && stars <= 20
        ? [clip.phrase('you_have'), clip.number(stars), clip.phrase('stars_word')]
        : [];
    speech.say([clip.phrase('buddy_hello'), ...starClips, clip.phrase('what_to_play')]);
  };

  const handleLaunch = (cardId: string) => {
    sound.playPop();
    onSelectView(cardId);
  };

  // Determine age-tailored spotlight cards
  const getSpotlightCards = (bracket: AgeBracket): LearningCard[] => {
    let ids: string[];
    if (bracket === 'pre-k') {
      ids = ['tracing-abc', 'phonics', 'counting'];
    } else if (bracket === 'grade1') {
      ids = ['stories', 'tracing-words', 'math', 'sight-words'];
    } else {
      // Kindergarten (Ages 5–6)
      ids = ['tracing-words', 'sight-words', 'math', 'slide-read'];
    }
    return ids
      .map((id) => ALL_CARDS.find((c) => c.id === id))
      .filter((c): c is LearningCard => Boolean(c));
  };

  const spotlightCards = getSpotlightCards(ageBracket);

  // Group cards for sections
  const readingCards = ALL_CARDS.filter((c) => c.category === 'reading').sort((a, b) => {
    // For kindergarten / grade1, prioritize word tracing and sight words before ABC tracing
    if (ageBracket !== 'pre-k') {
      if (a.id === 'tracing-abc') return 1;
      if (b.id === 'tracing-abc') return -1;
    }
    return 0;
  });

  const mathCards = ALL_CARDS.filter((c) => c.category === 'math');
  const playCards = ALL_CARDS.filter((c) => c.category === 'play');

  // Filtered list when a specific tab is chosen
  const filteredCards =
    activeTab === 'all'
      ? ALL_CARDS
      : ALL_CARDS.filter((c) => c.category === activeTab);

  const ageBadgeLabel =
    ageBracket === 'pre-k'
      ? 'Pre-K (Ages 3–4)'
      : ageBracket === 'grade1'
      ? '1st Grade (Ages 6–7)'
      : 'Kindergarten (Ages 5–6)';

  return (
    <div className="page">
      {/* Friendly hero */}
      <div className="hub-hero">
        <div style={{ minWidth: 0 }}>
          <div
            style={{
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
            }}
          >
            <Sparkles size={14} /> {ageBadgeLabel}
          </div>

          <h2 className="hub-title">
            Hi <span style={{ color: '#0284C7' }}>{kidName}</span>! What shall we play? 🚀
          </h2>
        </div>

        {/* Buddy the Bear: tap to hear */}
        <button className="btn-reset hub-buddy" onClick={hearBuddy} aria-label="Hear Buddy the Bear">
          <span style={{ fontSize: '2.6rem' }} className="animate-bob" aria-hidden>
            🐻
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B' }}>Buddy</span>
            <span
              style={{
                color: '#0284C7',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Volume2 size={16} /> Tap me!
            </span>
          </span>
        </button>
      </div>

      {/* Age-Aware Spotlight Slider (Single Row) */}
      {activeTab === 'all' && (
        <section className="hub-spotlight-section">
          <div className="hub-spotlight-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div className="hub-spotlight-badge">
                <Sparkles size={12} /> RECOMMENDED
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  margin: 0,
                }}
              >
                {ageBracket === 'kindergarten'
                  ? 'Top Picks for Kindergarten (Age 5–6)'
                  : ageBracket === 'grade1'
                  ? 'Top Picks for 1st Grade'
                  : 'Top Picks for Pre-K'}
              </h3>
            </div>

            <div className="hub-slider-controls">
              <button
                className="hub-slider-btn"
                onClick={() => scrollSlider('left')}
                aria-label="Scroll recommended left"
                type="button"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="hub-slider-btn"
                onClick={() => scrollSlider('right')}
                aria-label="Scroll recommended right"
                type="button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div ref={sliderRef} className="hub-spotlight-slider">
            {spotlightCards.map((card) => (
              <div
                key={`spotlight-${card.id}`}
                className="hub-spotlight-card"
                onClick={() => handleLaunch(card.id)}
                style={{
                  borderColor: card.color,
                  background: `linear-gradient(150deg, #FFFFFF 50%, ${card.tint} 100%)`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <div style={{ minHeight: 36, display: 'flex', alignItems: 'center' }}>
                    {card.isCandyNumber ? (
                      <CandyNumberIcon size={30} />
                    ) : (
                      <span style={{ fontSize: '1.9rem', lineHeight: 1 }} aria-hidden>
                        {card.icon}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      background: card.color,
                      color: '#FFFFFF',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {card.tag || card.starsBonus}
                  </span>
                </div>

                <div style={{ margin: '4px 0 8px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: 1.15,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#64748B',
                      fontWeight: 600,
                      marginTop: 2,
                      lineHeight: 1.25,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {card.subtitle}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 6,
                    borderTop: `1px solid ${card.color}20`,
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: card.darkColor }}>
                    {card.starsBonus}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: card.color,
                      color: '#FFFFFF',
                      padding: '3px 8px',
                      borderRadius: 999,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Play <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Category Filter Pills */}
      <div className="hub-filter-bar" role="tablist" aria-label="Learning categories">
        <button
          className={`hub-filter-pill ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => {
            sound.playPop();
            setActiveTab('all');
          }}
          role="tab"
          aria-selected={activeTab === 'all'}
        >
          <span>🌟</span> All Activities <span className="pill-count">{ALL_CARDS.length}</span>
        </button>
        <button
          className={`hub-filter-pill ${activeTab === 'reading' ? 'active' : ''}`}
          onClick={() => {
            sound.playPop();
            setActiveTab('reading');
          }}
          role="tab"
          aria-selected={activeTab === 'reading'}
        >
          <span>✏️</span> Reading & Writing <span className="pill-count">{readingCards.length}</span>
        </button>
        <button
          className={`hub-filter-pill ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => {
            sound.playPop();
            setActiveTab('math');
          }}
          role="tab"
          aria-selected={activeTab === 'math'}
        >
          <CandyNumberIcon size={14} /> Numbers & Math <span className="pill-count">{mathCards.length}</span>
        </button>
        <button
          className={`hub-filter-pill ${activeTab === 'play' ? 'active' : ''}`}
          onClick={() => {
            sound.playPop();
            setActiveTab('play');
          }}
          role="tab"
          aria-selected={activeTab === 'play'}
        >
          <span>🎨</span> Stickers & Fun <span className="pill-count">{playCards.length}</span>
        </button>
      </div>

      {/* All view: Organized by Category */}
      {activeTab === 'all' ? (
        <>
          {/* Section: Reading & Writing */}
          <section className="hub-section">
            <div className="hub-section-header">
              <div className="hub-section-title-wrap">
                <span className="hub-section-icon" aria-hidden>
                  📖
                </span>
                <div>
                  <h3 className="hub-section-title">Reading & Writing</h3>
                  <p className="hub-section-desc">Word tracing, phonics, sight words & stories</p>
                </div>
              </div>
              <span className="hub-section-badge">{readingCards.length} activities</span>
            </div>

            <div className="hub-grid">
              {readingCards.map((card) => renderCard(card, handleLaunch))}
            </div>
          </section>

          {/* Section: Numbers & Math */}
          <section className="hub-section">
            <div className="hub-section-header">
              <div className="hub-section-title-wrap">
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <CandyNumberIcon size={20} />
                </span>
                <div>
                  <h3 className="hub-section-title">Numbers & Math</h3>
                  <p className="hub-section-desc">Snack equations, tap & pop counting</p>
                </div>
              </div>
              <span className="hub-section-badge">{mathCards.length} activities</span>
            </div>

            <div className="hub-grid">
              {mathCards.map((card) => renderCard(card, handleLaunch))}
            </div>
          </section>

          {/* Section: Play & Rewards */}
          <section className="hub-section">
            <div className="hub-section-header">
              <div className="hub-section-title-wrap">
                <span className="hub-section-icon" aria-hidden>
                  🎨
                </span>
                <div>
                  <h3 className="hub-section-title">Rewards & Fun</h3>
                  <p className="hub-section-desc">Spend your earned stars on collectible stickers</p>
                </div>
              </div>
              <span className="hub-section-badge">Shop</span>
            </div>

            <div className="hub-grid">
              {playCards.map((card) => renderCard(card, handleLaunch))}
            </div>
          </section>
        </>
      ) : (
        /* Filtered Category View */
        <section className="hub-section">
          <div className="hub-section-header">
            <div>
              <h3 className="hub-section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {activeTab === 'reading' && <><span>📖</span> Reading & Writing</>}
                {activeTab === 'math' && <><CandyNumberIcon size={18} /> Numbers & Math</>}
                {activeTab === 'play' && <><span>🎨</span> Stickers & Fun</>}
              </h3>
              <p className="hub-section-desc">Choose an activity to start earning stars</p>
            </div>
            <button
              className="btn-reset"
              onClick={() => {
                sound.playPop();
                setActiveTab('all');
              }}
              style={{
                color: '#0284C7',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Show all →
            </button>
          </div>

          <div className="hub-grid">
            {filteredCards.map((card) => renderCard(card, handleLaunch))}
          </div>
        </section>
      )}
    </div>
  );
};

// Reusable card renderer
function renderCard(card: LearningCard, onLaunch: (id: string) => void) {
  return (
    <button
      key={card.id}
      className="btn-reset hub-card"
      onClick={() => onLaunch(card.id)}
      style={{
        borderColor: card.color,
        background: `linear-gradient(160deg, #FFFFFF 40%, ${card.tint} 100%)`,
        boxShadow: `0 6px 0 ${card.darkColor}33, var(--shadow-playful)`,
      }}
    >
      <span className="hub-badge" style={{ background: card.color }}>
        {card.starsBonus}
      </span>
      <span
        className="hub-icon"
        aria-hidden
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: 52,
          justifyContent: 'center',
        }}
      >
        {card.isCandyNumber ? <CandyNumberIcon size={46} /> : card.icon}
      </span>
      <span className="hub-card-title">{card.title}</span>
      <span className="hub-card-sub">{card.subtitle}</span>
    </button>
  );
}
