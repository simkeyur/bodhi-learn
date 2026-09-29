import React, { useRef, useState, useEffect } from 'react';
import { TRACING_WORDS, type TracingWord } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, RotateCcw, CheckCircle, Wand2 } from 'lucide-react';

interface WordTracingWorldProps {
  onBack: () => void;
  onGoToAbcJourney: () => void;
}

const BRUSH_COLORS = [
  { name: 'Rainbow', value: 'rainbow', gradient: 'linear-gradient(135deg, #EF4444, #F59E0B, #10B981, #3B82F6, #8B5CF6)' },
  { name: 'Sky Blue', value: '#0284C7', gradient: '#0284C7' },
  { name: 'Berry Pink', value: '#EC4899', gradient: '#EC4899' },
  { name: 'Sunny Gold', value: '#F59E0B', gradient: '#F59E0B' },
  { name: 'Grass Green', value: '#10B981', gradient: '#10B981' },
];

export const WordTracingWorld: React.FC<WordTracingWorldProps> = ({ onBack, onGoToAbcJourney }) => {
  const { addStars } = useApp();
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedBrush, setSelectedBrush] = useState<string>('rainbow');
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const rainbowHueRef = useRef(0);

  const currentWord: TracingWord = TRACING_WORDS[wordIndex] || TRACING_WORDS[0];

  const renderBackgroundGuide = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Ruled lines
    // Sky line (top)
    ctx.strokeStyle = '#93C5FD';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, height * 0.25);
    ctx.lineTo(width - 20, height * 0.25);
    ctx.stroke();

    // Midline (dashed)
    ctx.strokeStyle = '#F472B6';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([12, 10]);
    ctx.beginPath();
    ctx.moveTo(20, height * 0.55);
    ctx.lineTo(width - 20, height * 0.55);
    ctx.stroke();
    ctx.setLineDash([]);

    // Grass line (baseline)
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(20, height * 0.82);
    ctx.lineTo(width - 20, height * 0.82);
    ctx.stroke();

    // Dotted Letters across the line
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    // Calculate font size based on word length
    const letterCount = currentWord.word.length;
    const fontSize = Math.min(height * 0.45, (width * 0.8) / letterCount);
    ctx.font = `bold ${fontSize}px "Fredoka", sans-serif`;

    // Background guide
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText(currentWord.word, width / 2, height * 0.8);

    // Dashed outline
    ctx.strokeStyle = '#94A3B8';
    ctx.lineWidth = 5;
    ctx.setLineDash([8, 10]);
    ctx.strokeText(currentWord.word, width / 2, height * 0.8);
    ctx.restore();
  };

  const updateCanvasSizeAndGuide = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parentWidth = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    const availableWidth = Math.min(parentWidth - 10, 680);
    const targetHeight = Math.min(Math.round(availableWidth * 0.48), 300);

    canvas.width = Math.max(availableWidth, 290);
    canvas.height = Math.max(targetHeight, 180);
    renderBackgroundGuide();
  };

  useEffect(() => {
    updateCanvasSizeAndGuide();
    setHasDrawn(false);
    setIsCompleted(false);

    const handleResize = () => {
      updateCanvasSizeAndGuide();
    };

    window.addEventListener('resize', handleResize);

    // Spell word aloud
    const spell = currentWord.word.split('').join('... ');
    speech.speak(`Let us trace ${currentWord.word}! ${spell}! ${currentWord.word}!`);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wordIndex]);

  const clearCanvas = () => {
    sound.playPop(400);
    renderBackgroundGuide();
    setHasDrawn(false);
    setIsCompleted(false);
  };

  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }
    isDrawingRef.current = true;
    lastPointRef.current = getCanvasCoords(e);
    sound.playPop(600);
    setHasDrawn(true);
  };

  const drawMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ('touches' in e && e.cancelable) {
      e.preventDefault();
    }
    if (!isDrawingRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const currentPt = getCanvasCoords(e);
    if (!lastPointRef.current) {
      lastPointRef.current = currentPt;
      return;
    }

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(currentPt.x, currentPt.y);

    if (selectedBrush === 'rainbow') {
      rainbowHueRef.current = (rainbowHueRef.current + 5) % 360;
      ctx.strokeStyle = `hsl(${rainbowHueRef.current}, 95%, 55%)`;
      ctx.shadowColor = `hsl(${rainbowHueRef.current}, 95%, 55%)`;
      ctx.shadowBlur = 10;
    } else {
      ctx.strokeStyle = selectedBrush;
      ctx.shadowColor = selectedBrush;
      ctx.shadowBlur = 8;
    }

    ctx.lineWidth = 22;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.restore();

    lastPointRef.current = currentPt;
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const handleCompleteWord = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    sound.playStarFanfare();
    addStars(1);
    speech.speak(`You spelled and traced ${currentWord.word}! Outstanding! +1 Star!`);
  };

  const nextWord = () => {
    sound.playPop();
    setWordIndex((prev) => (prev + 1) % TRACING_WORDS.length);
  };

  const prevWord = () => {
    sound.playPop();
    setWordIndex((prev) => (prev - 1 + TRACING_WORDS.length) % TRACING_WORDS.length);
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '20px 16px' }}>
      {/* Top Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 20,
      }}>
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="kid-btn btn-white"
          style={{ padding: '10px 18px', fontSize: '1rem' }}
        >
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <button
          onClick={() => { sound.playPop(); onGoToAbcJourney(); }}
          className="kid-btn btn-sky"
          style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
        >
          🔤 Back to ABC Tracing Journey
        </button>
      </div>

      {/* Main Tracing Card */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '6px solid #FB7185',
        boxShadow: 'var(--shadow-floating)',
        padding: '28px 20px',
        textAlign: 'center',
      }}>
        {/* Word Info Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 16,
        }}>
          <span style={{ fontSize: '4.5rem' }} className="animate-bob">
            {currentWord.emoji}
          </span>

          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.8rem',
                color: '#E11D48',
                letterSpacing: '0.1em',
                margin: 0,
              }}>
                {currentWord.word}
              </h2>

              <button
                onClick={() => {
                  sound.playPop(650);
                  const spell = currentWord.word.split('').join('... ');
                  speech.speak(`${currentWord.word}! ${spell}! ${currentWord.word}!`);
                }}
                className="speaker-bubble"
                title="Hear spelling"
                style={{ width: 44, height: 44 }}
              >
                <Volume2 size={20} />
              </button>
            </div>

            <p style={{
              fontSize: '1.15rem',
              color: '#64748B',
              fontWeight: 600,
              margin: '4px 0 0',
            }}>
              {currentWord.hint}
            </p>
          </div>
        </div>

        {/* Brush Selector */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#FFF1F2',
          padding: '6px 16px',
          borderRadius: 999,
          border: '2px solid #FECDD3',
          marginBottom: 18,
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#BE123C',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <Wand2 size={16} /> Color:
          </span>

          {BRUSH_COLORS.map((b) => (
            <button
              key={b.value}
              onClick={() => {
                sound.playPop(700);
                setSelectedBrush(b.value);
              }}
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: b.gradient,
                border: selectedBrush === b.value ? '3px solid #1E293B' : '2px solid #FFFFFF',
                boxShadow: selectedBrush === b.value ? '0 0 0 2px #FB7185' : '0 2px 4px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transform: selectedBrush === b.value ? 'scale(1.2)' : 'none',
                transition: 'transform 0.1s ease',
              }}
              title={b.name}
            />
          ))}
        </div>

        {/* Tracing Canvas */}
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'inset 0 4px 14px rgba(0, 0, 0, 0.08), 0 8px 0 #CBD5E1',
          border: '5px solid #E2E8F0',
          background: '#FFFFFF',
          margin: '0 auto 20px',
          maxWidth: 680,
          touchAction: 'none',
        }}>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={drawMove}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={drawMove}
            onTouchEnd={stopDrawing}
            style={{
              display: 'block',
              cursor: 'crosshair',
              maxWidth: '100%',
              height: 'auto',
              touchAction: 'none',
            }}
          />

          {!hasDrawn && (
            <div style={{
              position: 'absolute',
              bottom: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '6px 18px',
              borderRadius: 999,
              fontWeight: 700,
              color: '#64748B',
              fontSize: '0.9rem',
              pointerEvents: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}>
              ✍️ Trace the whole word along the dotted lines!
            </div>
          )}
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 8,
          maxWidth: 680,
          margin: '0 auto',
        }}>
          <button
            onClick={prevWord}
            className="kid-btn btn-white"
            style={{ padding: '10px 18px', fontSize: '1rem' }}
          >
            <ArrowLeft size={18} /> Prev
          </button>

          <button
            onClick={clearCanvas}
            className="kid-btn btn-white"
            style={{ padding: '10px 18px', fontSize: '1rem' }}
          >
            <RotateCcw size={18} /> Clear
          </button>

          <button
            onClick={handleCompleteWord}
            className={`kid-btn ${isCompleted ? 'btn-grass' : 'btn-coral'}`}
            style={{ padding: '12px 28px', fontSize: '1.15rem' }}
          >
            <CheckCircle size={20} /> {isCompleted ? 'Word Spelled! ⭐' : 'I Traced It! ✨'}
          </button>

          <button
            onClick={nextWord}
            className="kid-btn btn-sky"
            style={{ padding: '10px 18px', fontSize: '1rem' }}
          >
            Next <ArrowRight size={18} />
          </button>
        </div>

        {isCompleted && (
          <div style={{
            textAlign: 'center',
            marginTop: 14,
            color: '#16A34A',
            fontWeight: 700,
            fontSize: '1.4rem',
            fontFamily: 'var(--font-display)',
          }} className="animate-pop">
            🎉 Great spelling & tracing! +1 Star! Next word! 🎉
          </div>
        )}
      </div>
    </div>
  );
};
