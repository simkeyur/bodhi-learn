import React, { useEffect, useRef, useState } from 'react';
import { READ_ALONG_SENTENCES } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip } from '../../utils/speech';
import { useKidTimers, useGreeting } from '../../utils/useKidTimers';
import { useApp, type AgeBracket } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

interface SlideReadWorldProps {
  onBack: () => void;
}

const LEVELS: { id: AgeBracket; label: string }[] = [
  { id: 'pre-k', label: 'Pre-K' },
  { id: 'kindergarten', label: 'K' },
  { id: 'grade1', label: '1st' },
];

interface Knob {
  word: number;
  frac: number; // 0..1 across that word's bar
}

// Slide & Read: the child drags a finger along the bars under a sentence and
// hears each word as the finger reaches it, strictly left to right.
export const SlideReadWorld: React.FC<SlideReadWorldProps> = ({ onBack }) => {
  const { addStars, ageBracket } = useApp();
  const { later } = useKidTimers();
  const greeting = useGreeting(clip.phrase('greet_slide_read'));

  const [level, setLevel] = useState<AgeBracket>(ageBracket);
  const [index, setIndex] = useState(0);
  const [furthest, setFurthest] = useState(-1); // last word read so far
  const [active, setActive] = useState<number | null>(null); // word under the finger
  const [knob, setKnob] = useState<Knob>({ word: 0, frac: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [doneIds, setDoneIds] = useState<string[]>([]);

  const areaRef = useRef<HTMLDivElement | null>(null);
  const furthestRef = useRef(-1);
  const activeRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const pointerRef = useRef<number | null>(null);

  const sentences = READ_ALONG_SENTENCES.filter((s) => s.level === level);
  const sentence = sentences[index % sentences.length];
  const words = sentence.text.split(' ');

  const resetSentence = () => {
    furthestRef.current = -1;
    activeRef.current = null;
    completedRef.current = false;
    setFurthest(-1);
    setActive(null);
    setKnob({ word: 0, frac: 0 });
    setIsCompleted(false);
  };

  useEffect(() => {
    resetSentence();
    const intro = greeting();
    if (intro.length) speech.say([...intro]);
  }, [sentence.id]);

  const finishSentence = (lastWord: string) => {
    completedRef.current = true;
    setIsCompleted(true);
    addStars(1);
    setDoneIds((prev) => (prev.includes(sentence.id) ? prev : [...prev, sentence.id]));
    speech.say([clip.word(lastWord), clip.cheer(), clip.readAlong(sentence.id)]);
  };

  const wordAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const unit = el?.closest<HTMLElement>('[data-word]');
    if (!unit || !areaRef.current?.contains(unit)) return null;
    const rect = unit.getBoundingClientRect();
    return {
      word: Number(unit.dataset.word),
      frac: Math.min(1, Math.max(0, (x - rect.left) / rect.width)),
    };
  };

  const track = (x: number, y: number) => {
    if (completedRef.current) return;
    const hit = wordAt(x, y);
    if (!hit) return;

    // Reading goes left to right: no jumping ahead of the next word
    if (hit.word > furthestRef.current + 1) {
      if (!nudge) {
        setNudge(true);
        later(() => setNudge(false), 500);
      }
      return;
    }

    setKnob(hit);
    if (hit.word === activeRef.current) return;
    activeRef.current = hit.word;
    setActive(hit.word);

    const isNewWord = hit.word === furthestRef.current + 1;
    if (isNewWord) {
      furthestRef.current = hit.word;
      setFurthest(hit.word);
    }

    if (isNewWord && hit.word === words.length - 1) {
      finishSentence(words[hit.word]);
    } else {
      speech.say([clip.word(words[hit.word])], { fallback: words[hit.word].replace(/[^A-Za-z']/g, '') });
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerRef.current !== null) return;
    pointerRef.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
    activeRef.current = null; // lifting and touching a word again replays it
    setIsDragging(true);
    track(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== pointerRef.current) return;
    track(e.clientX, e.clientY);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== pointerRef.current) return;
    pointerRef.current = null;
    activeRef.current = null;
    setIsDragging(false);
    setActive(null);
    // Park the knob at the end of the last word read
    if (furthestRef.current >= 0) setKnob({ word: furthestRef.current, frac: 1 });
  };

  const goTo = (next: number) => {
    sound.playPop();
    speech.stop();
    setIndex((next + sentences.length) % sentences.length);
  };

  const readAgain = () => {
    sound.playPop(400);
    speech.stop();
    resetSentence();
  };

  const barState = (i: number) => {
    if (i === active) return 'current';
    if (i <= furthest) return 'done';
    if (i === furthest + 1 && !isCompleted) return 'next';
    return 'todo';
  };

  return (
    <div className="page" style={{ maxWidth: 860 }}>
      <div className="world-bar">
        <button onClick={() => { sound.playPop(); onBack(); }} className="kid-btn btn-white back-btn" aria-label="Back to home">
          <ArrowLeft size={22} /> <span className="btn-label">Back</span>
        </button>

        <div className="seg">
          {LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => {
                sound.playPop();
                speech.stop();
                setLevel(lvl.id);
                setIndex(0);
              }}
              className={`kid-btn ${level === lvl.id ? 'btn-sky' : 'btn-white'}`}
              aria-pressed={level === lvl.id}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '5px solid #1E3A8A',
        boxShadow: 'var(--shadow-floating)',
        padding: '14px 14px 18px',
      }}>
        {/* Progress + hear the whole sentence */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }} aria-label={`Sentence ${index + 1} of ${sentences.length}`}>
            {sentences.map((s, i) => (
              <span
                key={s.id}
                style={{
                  width: i === index ? 26 : 14,
                  height: 14,
                  borderRadius: 999,
                  background: doneIds.includes(s.id) ? '#22C55E' : i === index ? '#1E3A8A' : '#CBD5E1',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => { sound.playPop(600); speech.say([clip.readAlong(sentence.id)]); }}
            className="speaker-bubble"
            aria-label="Hear the whole sentence"
          >
            <Volume2 size={24} />
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: 'clamp(3.4rem, 14vw, 5rem)', lineHeight: 1.1, margin: '4px 0 10px' }} aria-hidden>
          <span key={sentence.id} className="animate-pop" style={{ display: 'inline-block' }}>{sentence.emoji}</span>
        </div>

        {/* The sentence: each word sits on its own bar; slide along the bars */}
        <div
          ref={areaRef}
          className="slide-area"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {words.map((word, i) => {
            const state = barState(i);
            return (
              <span key={`${sentence.id}-${i}`} data-word={i} className="slide-word">
                <span className={`slide-text ${state}`}>{word}</span>
                <span className={`slide-bar ${state}`} />
                {knob.word === i && !isCompleted && (
                  <span
                    className={`slide-knob${nudge ? ' nudge' : ''}${isDragging ? ' dragging' : ''}`}
                    style={{ left: `${knob.frac * 100}%` }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 48 52" width="48" height="52">
                      <path
                        d="M24 3 L43 13.5 L43 38.5 L24 49 L5 38.5 L5 13.5 Z"
                        fill="#FFFFFF"
                        stroke="#1E3A8A"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                      />
                      <path d="M19 19 V33 M24 19 V33 M29 19 V33" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
                {furthest === -1 && i === 0 && !isDragging && (
                  <span className="slide-hint" aria-hidden>👆</span>
                )}
              </span>
            );
          })}
        </div>

        {/* Fixed-height footer so nothing jumps when the sentence is finished */}
        <div style={{ minHeight: 112, marginTop: 8, textAlign: 'center' }} aria-live="polite">
          {isCompleted ? (
            <div className="animate-pop">
              <div style={{
                color: '#16A34A',
                fontWeight: 700,
                fontSize: '1.35rem',
                fontFamily: 'var(--font-display)',
                marginBottom: 10,
              }}>
                🎉 You read it! +1 Star!
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={readAgain} className="kid-btn btn-white">
                  <RotateCcw size={20} /> Again
                </button>
                <button onClick={() => goTo(index + 1)} className="kid-btn btn-grass" style={{ minWidth: 150 }}>
                  Next <ArrowRight size={22} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, paddingTop: 16 }}>
              <button onClick={() => goTo(index - 1)} className="kid-btn btn-white icon-btn" aria-label="Previous sentence">
                <ArrowLeft size={22} />
              </button>
              <span style={{ color: '#475569', fontWeight: 700, fontSize: '1rem' }}>
                {furthest === -1 ? 'Slide under the words 👉' : 'Keep sliding! 👉'}
              </span>
              <button onClick={() => goTo(index + 1)} className="kid-btn btn-white icon-btn" aria-label="Skip to next sentence">
                <ArrowRight size={22} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
