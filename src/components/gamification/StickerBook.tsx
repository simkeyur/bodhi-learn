import React, { useEffect, useState } from 'react';
import { REWARD_STICKERS, type Sticker } from '../../data/learningData';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers } from '../../utils/useKidTimers';
import { ArrowLeft, Sparkles, Lock } from 'lucide-react';

interface StickerBookProps {
  onBack: () => void;
}

export const StickerBook: React.FC<StickerBookProps> = ({ onBack }) => {
  const {
    stars,
    unlockedStickers,
    unlockSticker,
    placedStickers,
    placeSticker,
    removePlacedSticker,
  } = useApp();

  useKidTimers();
  const [selectedStickerForPlacement, setSelectedStickerForPlacement] = useState<string>(
    unlockedStickers[0] || 'st1'
  );

  useEffect(() => {
    speech.say([clip.phrase('greet_stickers')]);
  }, []);

  const handleUnlock = (sticker: Sticker) => {
    const success = unlockSticker(sticker.id, sticker.costStars);
    if (success) {
      speech.say([clip.cheer(), clip.phrase('sticker_unlocked')]);
      setSelectedStickerForPlacement(sticker.id);
    } else {
      sound.playGentleTryAgain();
      speech.say([clip.phrase('you_need'), clip.number(sticker.costStars), clip.phrase('stars_for_sticker')]);
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    placeSticker(selectedStickerForPlacement, Math.round(x), Math.round(y));
  };

  return (
    <div className="page">
      <div className="world-bar">
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white back-btn" aria-label="Back to home">
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div style={{
          background: 'linear-gradient(135deg, #FEF08A, #FDE047)',
          border: '3px solid #F59E0B',
          boxShadow: '0 4px 0 #D97706',
          padding: '6px 18px',
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#92400E',
        }}>
          <Sparkles size={22} color="#D97706" />
          <span>{stars} <span className="hide-mobile">stars to spend</span></span>
        </div>
      </div>

      {/* Interactive Sticker Play Canvas */}
      <div style={{
        marginBottom: 24,
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '5px solid #C084FC',
        boxShadow: 'var(--shadow-floating)',
        padding: 12,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px 12px',
          marginBottom: 10,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 5vw, 1.75rem)',
            color: '#7E22CE',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            🎨 My Sticker Playground
          </h2>
          <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 600 }}>
            Tap to stick · tap a sticker to peel it off
          </span>
        </div>

        {/* Playboard Meadow / Sky */}
        <div
          onClick={handleCanvasClick}
          style={{
            height: 'clamp(240px, 45dvh, 360px)',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(180deg, #BAE6FD 0%, #E0F2FE 55%, #86EFAC 56%, #4ADE80 100%)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'crosshair',
            boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.1)',
            border: '3px solid #7DD3FC',
          }}
        >
          {/* Clouds in canvas */}
          <div style={{ position: 'absolute', top: 20, left: 40, fontSize: '3rem', opacity: 0.7 }}>☁️</div>
          <div style={{ position: 'absolute', top: 60, right: 60, fontSize: '2.5rem', opacity: 0.7 }}>☁️</div>
          <div style={{ position: 'absolute', top: 15, right: 30, fontSize: '3rem' }}>☀️</div>

          {/* Placed Stickers */}
          {placedStickers.map((ps) => {
            const stickerMeta = REWARD_STICKERS.find((s) => s.id === ps.stickerId);
            return (
              <div
                key={ps.id}
                onClick={(e) => {
                  e.stopPropagation();
                  removePlacedSticker(ps.id);
                }}
                title="Tap to remove"
                style={{
                  position: 'absolute',
                  left: `${ps.x}%`,
                  top: `${ps.y}%`,
                  transform: 'translate(-50%, -50%)',
                  fontSize: 'clamp(2.6rem, 10vw, 3.5rem)',
                  cursor: 'pointer',
                  filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.2))',
                  transition: 'transform 0.1s ease',
                }}
              >
                <span className="animate-pop" style={{ display: 'inline-block' }}>{stickerMeta?.emoji || '⭐'}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticker Unlock Shop */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
          color: '#0F172A',
          marginBottom: 12,
        }}>
          🎁 Sticker Collection
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 12,
        }}>
          {REWARD_STICKERS.map((sticker) => {
            const isUnlocked = unlockedStickers.includes(sticker.id);
            const isSelected = selectedStickerForPlacement === sticker.id;

            return (
              <button
                key={sticker.id}
                className="btn-reset"
                aria-label={isUnlocked ? `Use ${sticker.name}` : `Unlock ${sticker.name} for ${sticker.costStars} stars`}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '4px solid #C084FC' : isUnlocked ? '3px solid #E2E8F0' : '3px dashed #CBD5E1',
                  boxShadow: isSelected ? '0 8px 0 #9333EA' : 'var(--shadow-playful)',
                  padding: 16,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
                onClick={() => {
                  if (isUnlocked) {
                    sound.playPop();
                    setSelectedStickerForPlacement(sticker.id);
                  } else {
                    handleUnlock(sticker);
                  }
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 6,
                  filter: isUnlocked ? 'none' : 'grayscale(100%) opacity(40%)',
                }}>
                  {sticker.emoji}
                </div>

                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  marginBottom: 8,
                }}>
                  {sticker.name}
                </div>

                {isUnlocked ? (
                  <span style={{
                    display: 'inline-block',
                    background: isSelected ? '#C084FC' : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                    padding: '6px 12px',
                    borderRadius: 999,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}>
                    {isSelected ? '✓ Sticking this' : 'Tap to use'}
                  </span>
                ) : (
                  <span
                    className="kid-btn btn-sun"
                    style={{
                      padding: '8px 10px',
                      fontSize: '1rem',
                      borderRadius: 999,
                      width: '100%',
                    }}
                  >
                    <Lock size={16} /> {sticker.costStars} ⭐
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
