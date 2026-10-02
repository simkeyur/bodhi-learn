import React from 'react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { Volume2, VolumeX, Lock, Sparkles } from 'lucide-react';
import { CandyNumberIcon } from '../common/CandyNumberIcon';

interface HeaderProps {
  currentView: string;
  onSelectView: (view: string) => void;
  onOpenParentGate: () => void;
}


const NAV_ITEMS: { view: string; label: string; emoji?: string; isCandyNumber?: boolean; color: string; views: string[] }[] = [
  { view: 'home', label: 'Home', emoji: '🏠', color: '#0EA5E9', views: ['home'] },
  { view: 'tracing', label: 'Tracing', emoji: '✏️', color: '#FB7185', views: ['tracing-abc', 'tracing-words'] },
  { view: 'phonics', label: 'Reading', emoji: '📖', color: '#38BDF8', views: ['phonics', 'sight-words', 'stories', 'slide-read', 'reading'] },
  { view: 'counting', label: 'Math', isCandyNumber: true, color: '#22C55E', views: ['counting', 'math', 'code-bot', 'patterns', 'machine'] },
  { view: 'stickers', label: 'Stickers', emoji: '🎨', color: '#C084FC', views: ['stickers'] },
];

export const Header: React.FC<HeaderProps> = ({ currentView, onSelectView, onOpenParentGate }) => {
  const { stars, soundEnabled, setSoundEnabled, kidName, ageBracket } = useApp();

  const go = (view: string) => {
    sound.playPop();
    if (view === 'tracing') {
      onSelectView(ageBracket === 'pre-k' ? 'tracing-abc' : 'tracing-words');
      return;
    }
    onSelectView(view);
  };

  const isActive = (views: string[]) => views.includes(currentView);

  return (
    <>
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '3px solid #E2E8F0',
        padding: '8px 12px',
        paddingTop: 'calc(8px + env(safe-area-inset-top))',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}>
          {/* Brand & Mascot (goes home) */}
          <button
            className="btn-reset"
            onClick={() => go('home')}
            aria-label="Go home"
            style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}
          >
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.22)',
              border: '2px solid #BAE6FD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              background: '#FFFFFF',
            }}>
              <img
                src="/logo.png"
                alt="Bodhi Learn Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <h1 className="brand-name" style={{ fontSize: '1.35rem', color: '#0284C7', margin: 0, lineHeight: 1.1, whiteSpace: 'nowrap' }}>
                Bodhi Learn
              </h1>
              <span className="hide-mobile" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>
                Hello, {kidName}! 👋
              </span>
            </div>
          </button>

          {/* Nav pills (tablet & desktop; phones get the bottom bar) */}
          <nav className="top-nav" aria-label="Main" style={{
            alignItems: 'center',
            gap: 4,
            background: '#F1F5F9',
            padding: 4,
            borderRadius: 999,
          }}>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.views);
              return (
                <button
                  key={item.view}
                  onClick={() => go(item.view)}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 14px',
                    minHeight: 44,
                    borderRadius: 999,
                    border: 'none',
                    background: active ? item.color : 'transparent',
                    color: active ? '#FFFFFF' : '#475569',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {item.isCandyNumber ? <CandyNumberIcon size={18} /> : item.emoji}
                  </span>{' '}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Stars, mute, parents */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <button
              onClick={() => go('stickers')}
              aria-label={`${stars} stars. Open sticker book`}
              style={{
                background: 'linear-gradient(135deg, #FEF08A, #FDE047)',
                border: '3px solid #F59E0B',
                boxShadow: '0 3px 0 #D97706',
                padding: '0 14px',
                height: 44,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#92400E',
              }}
            >
              <Sparkles size={18} color="#D97706" />
              <span>{stars}</span>
            </button>

            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) sound.playPop(700);
              }}
              aria-label={soundEnabled ? 'Turn sound off' : 'Turn sound on'}
              aria-pressed={!soundEnabled}
              style={{
                background: soundEnabled ? '#FFFFFF' : '#FEE2E2',
                border: `2px solid ${soundEnabled ? '#E2E8F0' : '#FCA5A5'}`,
                borderRadius: 14,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: soundEnabled ? '#0284C7' : '#DC2626',
                boxShadow: '0 3px 0 #CBD5E1',
              }}
            >
              {soundEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
            </button>

            <button
              onClick={() => {
                sound.playPop();
                onOpenParentGate();
              }}
              aria-label="Parent settings"
              style={{
                background: '#F8FAFC',
                border: '2px solid #CBD5E1',
                borderRadius: 14,
                height: 44,
                minWidth: 44,
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#475569',
                boxShadow: '0 3px 0 #CBD5E1',
              }}
            >
              <Lock size={16} />
              <span className="hide-mobile">Parents</span>
            </button>
          </div>
        </div>
      </header>

      {/* Phone bottom tab bar: big, thumb-friendly targets */}
      <nav className="bottom-nav" aria-label="Main">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.views);
          return (
            <button
              key={item.view}
              className="btn-reset"
              onClick={() => go(item.view)}
              aria-current={active ? 'page' : undefined}
            >
              <span className="nav-emoji" aria-hidden style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 26 }}>
                {item.isCandyNumber ? <CandyNumberIcon size={20} /> : item.emoji}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
};
