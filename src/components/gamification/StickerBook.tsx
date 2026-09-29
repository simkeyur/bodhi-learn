import React, { useState } from 'react';
import { REWARD_STICKERS, type Sticker } from '../../data/learningData';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
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

  const [selectedStickerForPlacement, setSelectedStickerForPlacement] = useState<string>(
    unlockedStickers[0] || 'st1'
  );

  const handleUnlock = (sticker: Sticker) => {
    const success = unlockSticker(sticker.id, sticker.costStars);
    if (success) {
      speech.speak(`You unlocked the ${sticker.name}! Awesome!`);
      setSelectedStickerForPlacement(sticker.id);
    } else {
      sound.playGentleTryAgain();
      speech.speak(`You need ${sticker.costStars} stars for this sticker. Play more games to earn stars!`);
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    placeSticker(selectedStickerForPlacement, Math.round(x), Math.round(y));
  };

  return (
    <div style={{ maxWidth: 1050, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 24,
      }}>
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white" style={{ padding: '10px 18px', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <div style={{
          background: 'linear-gradient(135deg, #FEF08A, #FDE047)',
          border: '3px solid #F59E0B',
          boxShadow: '0 4px 0 #D97706',
          padding: '8px 20px',
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontFamily: 'var(--font-display)',
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#92400E',
        }}>
          <Sparkles size={22} color="#D97706" />
          <span>{stars} Stars to spend!</span>
        </div>
      </div>

      {/* Interactive Sticker Play Canvas */}
      <div style={{
        marginBottom: 32,
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '6px solid #C084FC',
        boxShadow: 'var(--shadow-floating)',
        padding: 20,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            color: '#7E22CE',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            🎨 My Sticker Playground
          </h2>
          <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 600 }}>
            Tap the board to place your active sticker! Tap a placed sticker to remove it.
          </span>
        </div>

        {/* Playboard Meadow / Sky */}
        <div
          onClick={handleCanvasClick}
          style={{
            height: 320,
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
                  fontSize: '3.5rem',
                  cursor: 'pointer',
                  filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.2))',
                  transition: 'transform 0.1s ease',
                }}
                className="animate-bob"
              >
                {stickerMeta?.emoji || '⭐'}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticker Unlock Shop */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          color: '#0F172A',
          marginBottom: 16,
        }}>
          🎁 Sticker Collection
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 16,
        }}>
          {REWARD_STICKERS.map((sticker) => {
            const isUnlocked = unlockedStickers.includes(sticker.id);
            const isSelected = selectedStickerForPlacement === sticker.id;

            return (
              <div
                key={sticker.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '4px solid #C084FC' : isUnlocked ? '3px solid #E2E8F0' : '3px dashed #CBD5E1',
                  boxShadow: isSelected ? '0 8px 0 #9333EA' : 'var(--shadow-playful)',
                  padding: 16,
                  textAlign: 'center',
                  cursor: isUnlocked ? 'pointer' : 'default',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
                onClick={() => {
                  if (isUnlocked) {
                    sound.playPop();
                    setSelectedStickerForPlacement(sticker.id);
                  }
                }}
              >
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: 8,
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
                    padding: '4px 10px',
                    borderRadius: 999,
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}>
                    {isSelected ? 'Ready to place!' : 'Unlocked'}
                  </span>
                ) : (
                  <button
                    onClick={() => handleUnlock(sticker)}
                    className="kid-btn btn-sun"
                    style={{
                      padding: '6px 12px',
                      fontSize: '0.85rem',
                      borderRadius: 999,
                      width: '100%',
                    }}
                  >
                    <Lock size={12} /> {sticker.costStars} Stars
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
