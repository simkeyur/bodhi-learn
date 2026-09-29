import React, { useEffect, useRef, useState } from 'react';
import { ALPHABET_DATA, type PhonicLetter } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';
import { useTracingCanvas, drawRuledLines, drawDottedText, BRUSH_COLORS } from './useTracingCanvas';

interface AbcTracingJourneyProps {
  onBack: () => void;
  onGoToWordTracing: () => void;
}

export const AbcTracingJourney: React.FC<AbcTracingJourneyProps> = ({ onBack, onGoToWordTracing }) => {
  const { addStars } = useApp();
  useKidTimers();
  const [letterIndex, setLetterIndex] = useState(0);
  const [isUppercase, setIsUppercase] = useState(true);
  const [selectedBrush, setSelectedBrush] = useState<string>('rainbow');
  const [isCompleted, setIsCompleted] = useState(false);
  const greeting = useGreeting(clip.phrase('greet_tracing_abc'));
  const ribbonRef = useRef<HTMLDivElement | null>(null);

  const currentItem: PhonicLetter = ALPHABET_DATA[letterIndex] || ALPHABET_DATA[0];
  const displayChar = isUppercase ? currentItem.letter : currentItem.letter.toLowerCase();

  const { canvasRef, wrapRef, hasDrawn, reset, canvasProps } = useTracingCanvas({
    brush: selectedBrush,
    lineWidth: 24,
    aspect: 0.72,
    minHeight: 220,
    maxHeight: 380,
    drawGuide: (ctx, width, height) => {
      drawRuledLines(ctx, width, height, { top: 0.2, mid: 0.51, base: 0.82 });
      drawDottedText(ctx, displayChar, width / 2, height * 0.82, height * 0.66);
    },
  });

  useEffect(() => {
    reset();
    setIsCompleted(false);
    const intro = greeting();
    speech.say([...intro, clip.phonics(currentItem.letter), clip.phrase('trace_the_letter'), clip.letter(currentItem.letter)]);

    // Keep the active letter visible in the A–Z strip
    const ribbon = ribbonRef.current;
    const active = ribbon?.children[letterIndex] as HTMLElement | undefined;
    if (ribbon && active) {
      ribbon.scrollTo({ left: active.offsetLeft - (ribbon.clientWidth - active.clientWidth) / 2, behavior: 'smooth' });
    }
  }, [letterIndex, isUppercase]);

  const clearCanvas = () => {
    sound.playPop(400);
    reset();
    setIsCompleted(false);
  };

  const handleCompleteTracing = () => {
    if (isCompleted || !hasDrawn) return;
    setIsCompleted(true);
    sound.playStarFanfare();
    addStars(1);
    speech.say([clip.cheer(), clip.phrase('great_tracing')]);
  };

  const goToLetter = (index: number) => {
    sound.playPop();
    setLetterIndex((index + ALPHABET_DATA.length) % ALPHABET_DATA.length);
  };

  return (
    <div className="page" style={{ maxWidth: 760 }}>
      <div className="world-bar">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="kid-btn btn-white back-btn"
          aria-label="Back to home"
        >
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <button
          onClick={() => { sound.playPop(); onGoToWordTracing(); }}
          className="kid-btn btn-coral"
          style={{ borderRadius: 999 }}
        >
          ✍️ Trace Words
        </button>
      </div>

      {/* A–Z strip */}
      <div
        ref={ribbonRef}
        style={{
          position: 'relative',
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          padding: '4px 4px 10px',
          marginBottom: 10,
          scrollbarWidth: 'none',
        }}
      >
        {ALPHABET_DATA.map((item, idx) => {
          const isActive = idx === letterIndex;
          return (
            <button
              key={item.letter}
              onClick={() => goToLetter(idx)}
              aria-current={isActive ? 'step' : undefined}
              style={{
                minWidth: 48,
                height: 48,
                borderRadius: 14,
                border: isActive ? `3px solid ${item.color}` : '2px solid #E2E8F0',
                background: isActive ? item.color : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#334155',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.3rem',
                cursor: 'pointer',
                boxShadow: isActive ? '0 4px 0 rgba(0,0,0,0.15)' : '0 3px 0 #E2E8F0',
                flexShrink: 0,
              }}
            >
              {item.letter}
            </button>
          );
        })}
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: `5px solid ${currentItem.color}`,
        boxShadow: 'var(--shadow-floating)',
        padding: 12,
      }}>
        {/* "A is for Apple" banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, padding: '0 4px' }}>
          <div style={{ fontSize: 'clamp(2.6rem, 11vw, 4rem)', lineHeight: 1 }} aria-hidden>
            {currentItem.emoji}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 6.5vw, 2.4rem)',
              color: currentItem.color,
              margin: 0,
              lineHeight: 1.1,
            }}>
              {currentItem.letter} is for {currentItem.word}
            </h2>
            <p className="hide-mobile" style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 600, marginTop: 4 }}>
              {currentItem.sentence}
            </p>
          </div>
          <button
            onClick={() => {
              sound.playPop(650);
              speech.say([clip.phonics(currentItem.letter)]);
            }}
            className="speaker-bubble"
            aria-label={`Hear ${currentItem.letter} is for ${currentItem.word}`}
          >
            <Volume2 size={24} />
          </button>
        </div>

        {/* Tracing board */}
        <div
          ref={wrapRef}
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'inset 0 4px 14px rgba(0, 0, 0, 0.08)',
            border: '4px solid #E2E8F0',
            background: '#FFFFFF',
            touchAction: 'none',
          }}
        >
          <canvas ref={canvasRef} {...canvasProps} aria-label={`Trace the letter ${displayChar}`} />
          {!hasDrawn && (
            <div style={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.92)',
              padding: '4px 14px',
              borderRadius: 999,
              fontWeight: 700,
              color: '#64748B',
              fontSize: '0.95rem',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}>
              👆 Trace with your finger!
            </div>
          )}
          {isCompleted && (
            <div className="animate-pop" style={{
              position: 'absolute',
              top: 10,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <span style={{
                background: '#DCFCE7',
                border: '3px solid #16A34A',
                color: '#15803D',
                padding: '4px 16px',
                borderRadius: 999,
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                whiteSpace: 'nowrap',
              }}>
                🎉 +1 Star! Tap →
              </span>
            </div>
          )}
        </div>

        {/* Brush + letter case */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 10,
          margin: '12px 0',
        }}>
          <div className="swatches" role="radiogroup" aria-label="Brush colour">
            {BRUSH_COLORS.map((b) => (
              <button
                key={b.value}
                role="radio"
                aria-checked={selectedBrush === b.value}
                aria-label={b.name}
                className="swatch"
                onClick={() => { sound.playPop(700); setSelectedBrush(b.value); }}
                style={{
                  background: b.swatch,
                  border: selectedBrush === b.value ? '3px solid #1E293B' : '3px solid #FFFFFF',
                  boxShadow: selectedBrush === b.value ? '0 0 0 2px #38BDF8' : '0 2px 4px rgba(0,0,0,0.15)',
                  transform: selectedBrush === b.value ? 'scale(1.12)' : 'none',
                }}
              />
            ))}
          </div>

          <div className="seg" style={{ flex: '0 0 auto', boxShadow: 'none', border: '2px solid #E2E8F0' }}>
            <button
              onClick={() => { sound.playPop(); setIsUppercase(true); }}
              className={`kid-btn ${isUppercase ? 'btn-sky' : 'btn-white'}`}
              aria-pressed={isUppercase}
              aria-label="Capital letter"
              style={{ minWidth: 56, fontSize: '1.3rem' }}
            >
              {currentItem.letter}
            </button>
            <button
              onClick={() => { sound.playPop(); setIsUppercase(false); }}
              className={`kid-btn ${!isUppercase ? 'btn-sky' : 'btn-white'}`}
              aria-pressed={!isUppercase}
              aria-label="Small letter"
              style={{ minWidth: 56, fontSize: '1.3rem' }}
            >
              {currentItem.letter.toLowerCase()}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <button onClick={() => goToLetter(letterIndex - 1)} className="kid-btn btn-white icon-btn" aria-label="Previous letter">
            <ArrowLeft size={22} />
          </button>
          <button onClick={clearCanvas} className="kid-btn btn-white icon-btn" aria-label="Clear and try again">
            <RotateCcw size={22} />
          </button>
          <button
            onClick={handleCompleteTracing}
            disabled={!hasDrawn && !isCompleted}
            className={`kid-btn ${isCompleted ? 'btn-grass' : 'btn-sun'}`}
            style={{ flex: '1 1 auto', maxWidth: 240, fontSize: '1.1rem' }}
          >
            <CheckCircle size={20} /> {isCompleted ? 'Traced! ⭐' : 'I did it!'}
          </button>
          <button
            onClick={() => goToLetter(letterIndex + 1)}
            className={`kid-btn ${isCompleted ? 'btn-sky' : 'btn-white'} icon-btn`}
            aria-label="Next letter"
          >
            <ArrowRight size={22} />
          </button>
        </div>

      </div>
    </div>
  );
};
