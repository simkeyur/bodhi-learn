import React from 'react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { Volume2, VolumeX, Lock, Sparkles, BookOpen, Calculator, Award, Pencil } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onSelectView: (view: string) => void;
  onOpenParentGate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onSelectView, onOpenParentGate }) => {
  const { stars, soundEnabled, setSoundEnabled, kidName } = useApp();

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '3px solid #E2E8F0',
      padding: '12px 20px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        {/* Brand & Mascot */}
        <div 
          onClick={() => {
            sound.playPop();
            onSelectView('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #FDE047, #F59E0B)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.35)',
            transform: 'rotate(-4deg)',
          }} className="animate-bob">
            ⭐
          </div>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              color: '#0284C7',
              margin: 0,
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              Bodhi Learn
            </h1>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#10B981',
              letterSpacing: '0.04em',
            }}>
              Hello, {kidName}! 👋
            </span>
          </div>
        </div>

        {/* Quick Hub Navigation Pills */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#F1F5F9',
          padding: '6px 10px',
          borderRadius: 999,
        }}>
          <button
            onClick={() => { sound.playPop(); onSelectView('tracing-abc'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              background: currentView.startsWith('tracing') ? '#FB7185' : 'transparent',
              color: currentView.startsWith('tracing') ? '#FFFFFF' : '#475569',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Pencil size={16} /> Tracing
          </button>

          <button
            onClick={() => { sound.playPop(); onSelectView('reading'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              background: currentView.startsWith('reading') ? '#38BDF8' : 'transparent',
              color: currentView.startsWith('reading') ? '#FFFFFF' : '#475569',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <BookOpen size={16} /> Reading
          </button>

          <button
            onClick={() => { sound.playPop(); onSelectView('math'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              background: currentView.startsWith('math') ? '#4ADE80' : 'transparent',
              color: currentView.startsWith('math') ? '#064E3B' : '#475569',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Calculator size={16} /> Math
          </button>

          <button
            onClick={() => { sound.playPop(); onSelectView('stickers'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              background: currentView === 'stickers' ? '#C084FC' : 'transparent',
              color: currentView === 'stickers' ? '#FFFFFF' : '#475569',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Award size={16} /> Stickers
          </button>
        </nav>

        {/* Right Badges: Star Counter & Settings */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          {/* Star Counter */}
          <div 
            onClick={() => { sound.playPop(); onSelectView('stickers'); }}
            title="Click to visit Sticker Book!"
            style={{
              background: 'linear-gradient(135deg, #FEF08A, #FDE047)',
              border: '3px solid #F59E0B',
              boxShadow: '0 4px 0 #D97706',
              padding: '6px 16px',
              borderRadius: 999,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#92400E',
            }}
            className="animate-wiggle"
          >
            <Sparkles size={20} color="#D97706" />
            <span>{stars}</span>
          </div>

          {/* Audio Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) sound.playPop(700);
            }}
            title={soundEnabled ? "Mute sounds" : "Enable sounds"}
            style={{
              background: '#FFFFFF',
              border: '2px solid #E2E8F0',
              borderRadius: 14,
              width: 42,
              height: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: soundEnabled ? '#0284C7' : '#94A3B8',
              boxShadow: '0 3px 0 #CBD5E1',
            }}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* Parent Gate Button */}
          <button
            onClick={() => {
              sound.playPop();
              onOpenParentGate();
            }}
            title="Parents Only Settings"
            style={{
              background: '#F8FAFC',
              border: '2px solid #CBD5E1',
              borderRadius: 14,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#475569',
              boxShadow: '0 3px 0 #CBD5E1',
            }}
          >
            <Lock size={15} />
            <span>Parents</span>
          </button>
        </div>
      </div>
    </header>
  );
};
