import React, { useRef, useState, useEffect } from 'react';
import { ALPHABET_DATA, type PhonicLetter } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, RotateCcw, CheckCircle, Wand2 } from 'lucide-react';

interface AbcTracingJourneyProps {
  onBack: () => void;
  onGoToWordTracing: () => void;
}

const BRUSH_COLORS = [
  { name: 'Rainbow', value: 'rainbow', gradient: 'linear-gradient(135deg, #EF4444, #F59E0B, #10B981, #3B82F6, #8B5CF6)' },
  { name: 'Sky Blue', value: '#0284C7', gradient: '#0284C7' },
  { name: 'Berry Pink', value: '#EC4899', gradient: '#EC4899' },
  { name: 'Sunny Gold', value: '#F59E0B', gradient: '#F59E0B' },
  { name: 'Grass Green', value: '#10B981', gradient: '#10B981' },
  { name: 'Purple Star', value: '#8B5CF6', gradient: '#8B5CF6' },
];

export const AbcTracingJourney: React.FC<AbcTracingJourneyProps> = ({ onBack, onGoToWordTracing }) => {
  const { addStars } = useApp();
  const [letterIndex, setLetterIndex] = useState(0);
  const [isUppercase, setIsUppercase] = useState(true);
  const [selectedBrush, setSelectedBrush] = useState<string>('rainbow');
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const rainbowHueRef = useRef(0);

  const currentItem: PhonicLetter = ALPHABET_DATA[letterIndex] || ALPHABET_DATA[0];
  const displayChar = isUppercase ? currentItem.letter : currentItem.letter.toLowerCase();

  // Draw kindergarten guidelines & dotted letter
  const renderBackgroundGuide = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear whole canvas
    ctx.clearRect(0, 0, width, height);

    // Kindergarten Ruled Guidelines
    // Sky line (top)
    ctx.strokeStyle = '#93C5FD';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, height * 0.22);
    ctx.lineTo(width - 30, height * 0.22);
    ctx.stroke();

    // Plane line (dashed midline)
    ctx.strokeStyle = '#F472B6';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([12, 10]);
    ctx.beginPath();
    ctx.moveTo(30, height * 0.52);
    ctx.lineTo(width - 30, height * 0.52);
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Grass line (baseline)
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(30, height * 0.82);
    ctx.lineTo(width - 30, height * 0.82);
    ctx.stroke();

    // Draw Big Dotted Letter Guide in center
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `bold ${height * 0.65}px "Fredoka", sans-serif`;

    // Soft hollow background letter
    ctx.fillStyle = '#F1F5F9';
    ctx.fillText(displayChar, width / 2, height * 0.82);

    // Dotted dashed outline
    ctx.strokeStyle = '#94A3B8';
    ctx.lineWidth = 6;
    ctx.setLineDash([8, 12]);
    ctx.strokeText(displayChar, width / 2, height * 0.82);
    ctx.restore();
  };

  const updateCanvasSizeAndGuide = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parentWidth = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    const availableWidth = Math.min(parentWidth - 10, 620);
    const targetHeight = Math.min(Math.round(availableWidth * 0.65), 380);

    canvas.width = Math.max(availableWidth, 290);
    canvas.height = Math.max(targetHeight, 230);
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
    speech.speak(`${currentItem.letter} is for ${currentItem.word}! Trace the letter ${displayChar}!`);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [letterIndex, isUppercase]);

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
    const pt = getCanvasCoords(e);
    lastPointRef.current = pt;
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
      rainbowHueRef.current = (rainbowHueRef.current + 4) % 360;
      ctx.strokeStyle = `hsl(${rainbowHueRef.current}, 95%, 55%)`;
      ctx.shadowColor = `hsl(${rainbowHueRef.current}, 95%, 55%)`;
      ctx.shadowBlur = 10;
    } else {
      ctx.strokeStyle = selectedBrush;
      ctx.shadowColor = selectedBrush;
      ctx.shadowBlur = 8;
    }

    ctx.lineWidth = 26; // Thick friendly kid stroke
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

  const handleCompleteTracing = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    sound.playStarFanfare();
    addStars(1);
    speech.speak(`Fantastic tracing! You traced ${displayChar}! ${currentItem.letter} is for ${currentItem.word}!`);
  };

  const nextLetter = () => {
    sound.playPop();
    setLetterIndex((prev) => (prev + 1) % ALPHABET_DATA.length);
  };

  const prevLetter = () => {
    sound.playPop();
    setLetterIndex((prev) => (prev - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length);
  };

  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '20px 16px' }}>
      {/* Top Header & Switcher */}
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

        {/* Big Switcher to Word Tracing */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => { sound.playPop(); onGoToWordTracing(); }}
            className="kid-btn btn-coral"
            style={{ padding: '8px 20px', fontSize: '1rem', borderRadius: 999 }}
          >
            ✍️ Try Word Spelling Tracing!
          </button>
        </div>
      </div>

      {/* ABC Journey Stepper Ribbon */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        overflowX: 'auto',
        padding: '12px 6px',
        marginBottom: 24,
        scrollbarWidth: 'none',
      }}>
        {ALPHABET_DATA.map((item, idx) => {
          const isActive = idx === letterIndex;
          return (
            <button
              key={item.letter}
              onClick={() => {
                sound.playPop();
                setLetterIndex(idx);
              }}
              style={{
                minWidth: 44,
                height: 48,
                borderRadius: 14,
                border: isActive ? `3px solid ${item.color}` : '2px solid #E2E8F0',
                background: isActive ? item.color : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#334155',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                cursor: 'pointer',
                boxShadow: isActive ? '0 4px 0 rgba(0,0,0,0.15)' : 'none',
                transform: isActive ? 'scale(1.1)' : 'none',
                transition: 'all 0.12s ease',
                flexShrink: 0,
              }}
            >
              {item.letter}
            </button>
          );
        })}
      </div>

      {/* Big Screen Hero Stage */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: `6px solid ${currentItem.color}`,
        boxShadow: 'var(--shadow-floating)',
        padding: '24px 20px',
        position: 'relative',
      }}>
        {/* Big Screen Presentation Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 24px',
          marginBottom: 20,
          border: '3px solid #E2E8F0',
        }}>
          {/* Big Illustration & Phonics Sentence */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{
              fontSize: '4.8rem',
              filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.15))',
            }} className="animate-bob">
              {currentItem.emoji}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  color: currentItem.color,
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {currentItem.letter} is for {currentItem.word}
                </h2>
                <button
                  onClick={() => {
                    sound.playPop(650);
                    speech.speakPhonics(currentItem.letter, currentItem.word);
                  }}
                  className="speaker-bubble"
                  style={{ width: 48, height: 48 }}
                  title="Hear pronunciation"
                >
                  <Volume2 size={22} />
                </button>
              </div>

              <p style={{
                fontSize: '1.2rem',
                color: '#475569',
                fontWeight: 600,
                marginTop: 4,
              }}>
                {currentItem.sentence}
              </p>
            </div>
          </div>

          {/* Case Toggle (Uppercase vs Lowercase) & Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: 999,
              padding: 4,
              border: '2px solid #CBD5E1',
              display: 'flex',
              gap: 4,
            }}>
              <button
                onClick={() => { sound.playPop(); setIsUppercase(true); }}
                style={{
                  background: isUppercase ? currentItem.color : 'transparent',
                  color: isUppercase ? '#FFFFFF' : '#64748B',
                  border: 'none',
                  borderRadius: 999,
                  padding: '6px 16px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Capital ({currentItem.letter})
              </button>

              <button
                onClick={() => { sound.playPop(); setIsUppercase(false); }}
                style={{
                  background: !isUppercase ? currentItem.color : 'transparent',
                  color: !isUppercase ? '#FFFFFF' : '#64748B',
                  border: 'none',
                  borderRadius: 999,
                  padding: '6px 16px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Small ({currentItem.letter.toLowerCase()})
              </button>
            </div>
          </div>
        </div>

        {/* Canvas & Controls Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}>
          {/* Brush Color Picker */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#F8FAFC',
            padding: '8px 18px',
            borderRadius: 999,
            border: '2px solid #E2E8F0',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <Wand2 size={16} /> Magic Brush:
            </span>

            {BRUSH_COLORS.map((b) => (
              <button
                key={b.value}
                onClick={() => {
                  sound.playPop(700);
                  setSelectedBrush(b.value);
                }}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: b.gradient,
                  border: selectedBrush === b.value ? '3px solid #1E293B' : '2px solid #FFFFFF',
                  boxShadow: selectedBrush === b.value ? '0 0 0 2px #38BDF8' : '0 2px 4px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  transform: selectedBrush === b.value ? 'scale(1.2)' : 'none',
                  transition: 'transform 0.1s ease',
                }}
                title={b.name}
              />
            ))}
          </div>

          {/* Interactive Tracing Blackboard Canvas */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'inset 0 4px 14px rgba(0, 0, 0, 0.08), 0 8px 0 #CBD5E1',
            border: '5px solid #E2E8F0',
            background: '#FFFFFF',
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

            {/* Helper Prompt */}
            {!hasDrawn && (
              <div style={{
                position: 'absolute',
                bottom: 14,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '6px 18px',
                borderRadius: 999,
                fontWeight: 700,
                color: '#64748B',
                fontSize: '0.95rem',
                pointerEvents: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}>
                👉 Trace with your finger or mouse along the lines!
              </div>
            )}
          </div>

          {/* Bottom Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 8,
            width: '100%',
            maxWidth: 620,
            marginTop: 8,
          }}>
            <button
              onClick={prevLetter}
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
              onClick={handleCompleteTracing}
              className={`kid-btn ${isCompleted ? 'btn-grass' : 'btn-sun'}`}
              style={{ padding: '12px 28px', fontSize: '1.15rem' }}
            >
              <CheckCircle size={20} /> {isCompleted ? 'Traced! ⭐' : 'I Traced It! ✨'}
            </button>

            <button
              onClick={nextLetter}
              className="kid-btn btn-sky"
              style={{ padding: '10px 18px', fontSize: '1rem' }}
            >
              Next <ArrowRight size={18} />
            </button>
          </div>

          {/* Celebration Banner */}
          {isCompleted && (
            <div style={{
              textAlign: 'center',
              marginTop: 12,
              color: '#16A34A',
              fontWeight: 700,
              fontSize: '1.4rem',
              fontFamily: 'var(--font-display)',
            }} className="animate-pop">
              🎉 Star Awarded! Awesome Tracing! Let's do the next letter! 🎉
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
