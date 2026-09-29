import React from 'react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface HomeHubProps {
  onSelectView: (view: string) => void;
}

export const HomeHub: React.FC<HomeHubProps> = ({ onSelectView }) => {
  const { kidName, stars, ageBracket } = useApp();

  const handleCardClick = (view: string, greeting: string) => {
    sound.playPop();
    speech.speak(greeting);
    onSelectView(view);
  };

  const CARDS = [
    {
      id: 'tracing-abc',
      title: 'ABC Tracing Journey',
      subtitle: 'Big screen: A for Apple, B for Ball & magic brush!',
      icon: '✏️',
      color: '#FB7185',
      darkColor: '#E11D48',
      bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
      starsBonus: '+1 Star',
      greeting: 'Welcome to the ABC Tracing Journey! Let us trace letters!',
    },
    {
      id: 'tracing-words',
      title: 'Word Spelling Tracing',
      subtitle: 'Trace whole words on kindergarten handwriting lines',
      icon: '✍️',
      color: '#8B5CF6',
      darkColor: '#6D28D9',
      bgGradient: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
      starsBonus: '+1 Star',
      greeting: 'Let us practice spelling and tracing words!',
    },
    {
      id: 'phonics',
      title: 'Phonics & Letters',
      subtitle: 'A-Z sound board and Letter Quest',
      icon: '🔤',
      color: '#38BDF8',
      darkColor: '#0284C7',
      bgGradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
      starsBonus: '+1 Star',
      greeting: 'Let us explore the Alphabet!',
    },
    {
      id: 'sight-words',
      title: 'Sight Words Safari',
      subtitle: 'Word puzzles and spelling scrambles',
      icon: '📖',
      color: '#C084FC',
      darkColor: '#9333EA',
      bgGradient: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
      starsBonus: '+1 Star',
      greeting: 'Welcome to Sight Words Safari!',
    },
    {
      id: 'stories',
      title: 'Read-Along Stories',
      subtitle: 'Interactive books with tap-to-read words',
      icon: '📚',
      color: '#FB7185',
      darkColor: '#E11D48',
      bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
      starsBonus: '+2 Stars',
      greeting: 'Pick a wonderful story to read!',
    },
    {
      id: 'counting',
      title: 'Counting Meadow',
      subtitle: 'Tap to pop & count with musical chimes',
      icon: '🔢',
      color: '#4ADE80',
      darkColor: '#16A34A',
      bgGradient: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
      starsBonus: '+1 Star',
      greeting: 'Let us count together in the meadow!',
    },
    {
      id: 'math',
      title: 'Visual Math Kitchen',
      subtitle: 'Concrete addition & subtraction',
      icon: '➕',
      color: '#F59E0B',
      darkColor: '#D97706',
      bgGradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      starsBonus: '+1 Star',
      greeting: 'Time for fun visual math!',
    },
    {
      id: 'stickers',
      title: 'Sticker Playground',
      subtitle: 'Unlock stickers & decorate your board',
      icon: '🎨',
      color: '#818CF8',
      darkColor: '#4F46E5',
      bgGradient: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
      starsBonus: 'Playground',
      greeting: 'Welcome to your sticker playground!',
    },
  ];

  return (
    <div style={{ maxWidth: 1050, margin: '0 auto', padding: '24px 16px' }}>
      {/* Friendly Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '5px solid #38BDF8',
        boxShadow: 'var(--shadow-floating)',
        padding: '32px 28px',
        marginBottom: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#FEF08A',
            border: '2px solid #F59E0B',
            color: '#92400E',
            padding: '4px 14px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: 12,
          }}>
            <Sparkles size={16} /> Level: {ageBracket.toUpperCase()}
          </div>

          <h2 style={{
            fontSize: '2.6rem',
            color: '#0F172A',
            fontFamily: 'var(--font-display)',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Ready to learn, <span style={{ color: '#0284C7' }}>{kidName}</span>? 🚀
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: '#475569',
            fontWeight: 600,
            marginTop: 8,
          }}>
            Choose a world below to read, count, and collect shiny stars!
          </p>
        </div>

        {/* Mascot Greeting */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          background: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-playful)',
          border: '3px solid #E2E8F0',
        }}>
          <div style={{ fontSize: '3.5rem' }} className="animate-bob">
            🐻
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1E293B' }}>
              Buddy the Bear
            </div>
            <button
              onClick={() => {
                sound.playPop();
                speech.speak(`Hello ${kidName}! You have ${stars} stars. What would you like to play today?`);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#0284C7',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                cursor: 'pointer',
                marginTop: 4,
              }}
            >
              <Volume2 size={16} /> Hear Buddy Speak
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Learning Worlds */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: 24,
      }}>
        {CARDS.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id, card.greeting)}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: `5px solid ${card.color}`,
              boxShadow: `0 10px 0 ${card.darkColor}22, var(--shadow-playful)`,
              padding: '24px 20px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 200,
              transition: 'all 0.15s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="animate-bob"
          >
            {/* Corner Badge */}
            <span style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: card.color,
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 999,
              fontFamily: 'var(--font-display)',
            }}>
              {card.starsBonus}
            </span>

            <div>
              <div style={{
                fontSize: '3.5rem',
                marginBottom: 12,
              }}>
                {card.icon}
              </div>

              <h3 style={{
                fontSize: '1.75rem',
                fontFamily: 'var(--font-display)',
                color: '#0F172A',
                marginBottom: 6,
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#64748B',
                fontWeight: 600,
                lineHeight: 1.4,
              }}>
                {card.subtitle}
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 18,
              paddingTop: 12,
              borderTop: '2px solid #F1F5F9',
            }}>
              <span style={{
                color: card.darkColor,
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
              }}>
                Play Now
              </span>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: card.color,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 0 ${card.darkColor}`,
              }}>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
