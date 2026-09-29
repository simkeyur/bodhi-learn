import React, { useEffect, useState } from 'react';
import { TRACING_WORDS, type TracingWord } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';
import { useTracingCanvas, drawRuledLines, drawDottedText, BRUSH_COLORS } from './useTracingCanvas';

interface WordTracingWorldProps {
  onBack: () => void;
  onGoToAbcJourney: () => void;
}

export const WordTracingWorld: React.FC<WordTracingWorldProps> = ({ onBack, onGoToAbcJourney }) => {
  const { addStars } = useApp();
  useKidTimers();
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedBrush, setSelectedBrush] = useState<string>('rainbow');
  const [isCompleted, setIsCompleted] = useState(false);
  const greeting = useGreeting(clip.phrase('greet_tracing_words'));

  const currentWord: TracingWord = TRACING_WORDS[wordIndex] || TRACING_WORDS[0];

  const { canvasRef, wrapRef, hasDrawn, reset, canvasProps } = useTracingCanvas({
    brush: selectedBrush,
    lineWidth: 18,
    aspect: 0.5,
    minHeight: 170,
    maxHeight: 300,
    drawGuide: (ctx, width, height) => {
      drawRuledLines(ctx, width, height, { top: 0.25, mid: 0.54, base: 0.82 });
      const fontSize = Math.min(height * 0.62, (width * 0.9) / (currentWord.word.length * 0.68));
      drawDottedText(ctx, currentWord.word, width / 2, height * 0.82, fontSize);
    },
  });

  useEffect(() => {
    reset();
    setIsCompleted(false);
    const intro = greeting();
    speech.say([...intro, clip.phrase('lets_trace_word'), clip.spelling(currentWord.word)]);
  }, [wordIndex]);

  const clearCanvas = () => {
    sound.playPop(400);
    reset();
    setIsCompleted(false);
  };

  const handleCompleteWord = () => {
    if (isCompleted || !hasDrawn) return;
    setIsCompleted(true);
    sound.playStarFanfare();
    addStars(1);
    speech.say([clip.cheer(), clip.phrase('you_spelled_word')]);
  };

  const goToWord = (index: number) => {
    sound.playPop();
    setWordIndex((index + TRACING_WORDS.length) % TRACING_WORDS.length);
  };

  return (
    <div className="page" style={{ maxWidth: 800 }}>
      <div className="world-bar">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="kid-btn btn-white back-btn"
          aria-label="Back to home"
        >
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <button
          onClick={() => { sound.playPop(); onGoToAbcJourney(); }}
          className="kid-btn btn-sky"
          style={{ borderRadius: 999 }}
        >
          🔤 Trace ABCs
        </button>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '5px solid #8B5CF6',
        boxShadow: 'var(--shadow-floating)',
        padding: 12,
      }}>
        {/* Word banner */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 'clamp(2.6rem, 11vw, 4rem)', lineHeight: 1 }} aria-hidden>
            {currentWord.emoji}
          </span>
          <div style={{ minWidth: 0 }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 8vw, 2.6rem)',
              color: '#6D28D9',
              letterSpacing: '0.08em',
              margin: 0,
              lineHeight: 1.1,
            }}>
              {currentWord.word}
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600, margin: '2px 0 0' }}>
              {currentWord.hint}
            </p>
          </div>
          <button
            onClick={() => {
              sound.playPop(650);
              speech.say([clip.spelling(currentWord.word)]);
            }}
            className="speaker-bubble"
            aria-label={`Hear how to spell ${currentWord.word}`}
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
          <canvas ref={canvasRef} {...canvasProps} aria-label={`Trace the word ${currentWord.word}`} />
          {!hasDrawn && (
            <div style={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '4px 14px',
              borderRadius: 999,
              fontWeight: 700,
              color: '#64748B',
              fontSize: '0.9rem',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}>
              ✍️ Trace the whole word!
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

        {/* Brush */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
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
                  boxShadow: selectedBrush === b.value ? '0 0 0 2px #8B5CF6' : '0 2px 4px rgba(0,0,0,0.15)',
                  transform: selectedBrush === b.value ? 'scale(1.12)' : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <button onClick={() => goToWord(wordIndex - 1)} className="kid-btn btn-white icon-btn" aria-label="Previous word">
            <ArrowLeft size={22} />
          </button>
          <button onClick={clearCanvas} className="kid-btn btn-white icon-btn" aria-label="Clear and try again">
            <RotateCcw size={22} />
          </button>
          <button
            onClick={handleCompleteWord}
            disabled={!hasDrawn && !isCompleted}
            className={`kid-btn ${isCompleted ? 'btn-grass' : 'btn-grape'}`}
            style={{ flex: '1 1 auto', maxWidth: 240, fontSize: '1.1rem' }}
          >
            <CheckCircle size={20} /> {isCompleted ? 'Spelled! ⭐' : 'I did it!'}
          </button>
          <button
            onClick={() => goToWord(wordIndex + 1)}
            className={`kid-btn ${isCompleted ? 'btn-sky' : 'btn-white'} icon-btn`}
            aria-label="Next word"
          >
            <ArrowRight size={22} />
          </button>
        </div>

      </div>
    </div>
  );
};
