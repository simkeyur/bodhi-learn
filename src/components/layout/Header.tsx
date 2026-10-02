import React from 'react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { hasStickers } from '../../data/subjects';
import { Volume2, VolumeX, Lock, Sparkles } from 'lucide-react';

interface HeaderProps {
  onSelectView: (view: string) => void;
  onOpenParentGate: () => void;
}


export const Header: React.FC<HeaderProps> = ({ onSelectView, onOpenParentGate }) => {
  const { stars, soundEnabled, setSoundEnabled, age } = useApp();

  const go = (view: string) => {
    sound.playPop();
    onSelectView(view);
  };

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
            </div>
          </button>

          {/* Stars, mute, parents */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {(() => {
              const style: React.CSSProperties = {
                background: 'linear-gradient(135deg, #FEF08A, #FDE047)',
                border: '3px solid #F59E0B',
                boxShadow: '0 3px 0 #D97706',
                padding: '0 14px',
                height: 44,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#92400E',
              };
              const content = (
                <>
                  <Sparkles size={18} color="#D97706" />
                  <span>{stars}</span>
                </>
              );
              // Only the youngest children have a sticker book to open; for everyone else it is just a score
              return hasStickers(age) ? (
                <button onClick={() => go('stickers')} aria-label={`${stars} stars. Open sticker book`} style={{ ...style, cursor: 'pointer' }}>
                  {content}
                </button>
              ) : (
                <div role="img" aria-label={`${stars} stars`} style={style}>{content}</div>
              );
            })()}

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

    </>
  );
};
