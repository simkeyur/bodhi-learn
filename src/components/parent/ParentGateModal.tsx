import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { MAX_AGE, MIN_AGE } from '../../firebase/schema';
import { isSelfManaged } from '../../data/subjects';
import { sound } from '../../utils/sound';
import { AccountSection } from './AccountSection';
import { X, ShieldCheck, Sparkles } from 'lucide-react';

interface ParentGateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentGateModal: React.FC<ParentGateModalProps> = ({ isOpen, onClose }) => {
  const {
    kidName,
    setKidName,
    age,
    setAge,
    speechEnabled,
    setSpeechEnabled,
    voiceSpeed,
    setVoiceSpeed,
    stars,
    addStars,
  } = useApp();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [gate, setGate] = useState({ text: '6 + 7', answer: 13 });
  const [parentAnswer, setParentAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Local settings draft
  const [nameInput, setNameInput] = useState(kidName);

  // Re-lock and pick a fresh sum each time the modal opens. This must not depend on
  // kidName: the name can change while open (sign-out, or another device syncing), and
  // that must not kick a parent out of the settings.
  const kidNameRef = useRef(kidName);
  const ageRef = useRef(age);
  useEffect(() => {
    kidNameRef.current = kidName;
    ageRef.current = age;
  });
  useEffect(() => {
    if (isOpen) {
      // Children 11 and over manage their own settings and account, so there is no gate for them
      setIsUnlocked(isSelfManaged(ageRef.current));
      const r = (lo: number, hi: number) => lo + Math.floor(Math.random() * (hi - lo + 1));
      // Older children can do 6 + 7 in their heads, so from 9 up the gate is a harder sum
      if (ageRef.current >= 9) {
        const a = r(13, 19), b = r(6, 9), c = r(21, 49);
        setGate({ text: `${a} × ${b} + ${c}`, answer: a * b + c });
      } else {
        const a = r(5, 12), b = r(4, 10);
        setGate({ text: `${a} + ${b}`, answer: a + b });
      }
      setParentAnswer('');
      setErrorMsg('');
      setNameInput(kidNameRef.current);
    }
  }, [isOpen]);

  // If the name changes underneath an untouched field (e.g. synced from another device), follow it
  const lastSeenNameRef = useRef(kidName);
  useEffect(() => {
    setNameInput((current) => (current === lastSeenNameRef.current ? kidName : current));
    lastSeenNameRef.current = kidName;
  }, [kidName]);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(parentAnswer, 10) === gate.answer) {
      sound.playSuccess();
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      sound.playGentleTryAgain();
      setErrorMsg('Incorrect answer. Grown-ups verification only.');
      setParentAnswer('');
    }
  };

  const handleSaveProfile = () => {
    if (nameInput.trim()) {
      setKidName(nameInput.trim());
    }
    sound.playPop();
    onClose();
  };

  return (
    <div className="kid-modal-overlay" onClick={onClose}>
      <div className="kid-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: 16,
          marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: '#E0F2FE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0284C7',
            }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
              color: '#0F172A',
              margin: 0,
            }}>
              {isSelfManaged(age) ? 'Settings' : 'Parent Settings'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: 12,
              width: 44,
              height: 44,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748B',
            }}
          >
            <X size={24} />
          </button>
        </div>

        {!isUnlocked ? (
          /* Grown-ups Math Gate */
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              fontWeight: 600,
              marginBottom: 16,
            }}>
              To protect learning settings from accidental taps, please solve this math problem:
            </p>

            <form onSubmit={handleVerify}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.4rem',
                fontWeight: 700,
                color: '#0369A1',
                marginBottom: 16,
              }}>
                {gate.text} = ?
              </div>

              <input
                type="number"
                inputMode="numeric"
                value={parentAnswer}
                onChange={(e) => setParentAnswer(e.target.value)}
                placeholder="Enter answer"
                autoFocus
                style={{
                  width: 140,
                  fontSize: '1.8rem',
                  fontFamily: 'var(--font-display)',
                  textAlign: 'center',
                  padding: '8px 12px',
                  borderRadius: 14,
                  border: '3px solid #38BDF8',
                  outline: 'none',
                  marginBottom: 16,
                  display: 'block',
                  margin: '0 auto 16px',
                }}
              />

              {errorMsg && (
                <div style={{ color: '#EF4444', fontWeight: 600, fontSize: '0.95rem', marginBottom: 12 }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="kid-btn btn-sky"
                style={{ padding: '10px 28px', fontSize: '1.1rem' }}
              >
                Unlock Settings
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Settings Form */
          <div>
            <AccountSection />

            {/* Kid Name Input */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#334155',
                marginBottom: 6,
              }}>
                {isSelfManaged(age) ? 'Your name:' : "Learner's Name:"}
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  style={{
                    flex: 1,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-display)',
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: '2px solid #CBD5E1',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Age: drives the look of the home screen and how hard the questions are */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#334155',
                marginBottom: 8,
              }}>
                Age:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))', gap: 8 }}>
                {Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => MIN_AGE + i).map((a) => (
                  <button
                    key={a}
                    onClick={() => setAge(a)}
                    aria-pressed={age === a}
                    style={{
                      background: age === a ? '#38BDF8' : '#F8FAFC',
                      color: age === a ? '#FFFFFF' : '#334155',
                      border: age === a ? '2px solid #0284C7' : '2px solid #E2E8F0',
                      borderRadius: 14,
                      minHeight: 48,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: 6 }}>
                Questions start at the right level for this age and adjust as {kidName || 'your child'} plays.
              </div>
            </div>

            {/* Voice Speed Controls */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#334155',
                marginBottom: 8,
              }}>
                Voice Pacing / Speed:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))', gap: 8 }}>
                {[
                  { speed: 0.75, label: 'Slow', desc: 'Best for beginners' },
                  { speed: 0.85, label: 'Gentle', desc: 'Recommended' },
                  { speed: 1.0, label: 'Brisk', desc: 'Confident readers' },
                ].map((s) => (
                  <button
                    key={s.speed}
                    onClick={() => setVoiceSpeed(s.speed)}
                    style={{
                      background: Math.abs(voiceSpeed - s.speed) < 0.05 ? '#8B5CF6' : '#F8FAFC',
                      color: Math.abs(voiceSpeed - s.speed) < 0.05 ? '#FFFFFF' : '#334155',
                      border: Math.abs(voiceSpeed - s.speed) < 0.05 ? '2px solid #7C3AED' : '2px solid #E2E8F0',
                      borderRadius: 14,
                      padding: '8px 4px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.85, marginTop: 2 }}>{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Audio & Speech Controls */}
            <div style={{
              background: '#F1F5F9',
              borderRadius: 14,
              padding: 14,
              marginBottom: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.95rem' }}>Voice & Narration</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Reads words aloud for early learners</div>
              </div>
              <button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                className={`kid-btn ${speechEnabled ? 'btn-grass' : 'btn-white'}`}
                style={{ padding: '6px 14px', fontSize: '0.9rem', borderRadius: 999 }}
              >
                {speechEnabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>

            {/* Parents can gift stars for chores; there is no one to do that for older children */}
            {!isSelfManaged(age) && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#FEF3C7',
                borderRadius: 14,
                padding: 14,
                marginBottom: 24,
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#92400E', fontSize: '0.95rem' }}>Reward Stars: {stars}</div>
                  <div style={{ fontSize: '0.8rem', color: '#B45309' }}>Give stars for offline tasks & chores</div>
                </div>
                <button
                  onClick={() => addStars(5)}
                  className="kid-btn btn-sun"
                  style={{ padding: '6px 14px', fontSize: '0.9rem', borderRadius: 999 }}
                >
                  <Sparkles size={14} /> Gift +5 Stars
                </button>
              </div>
            )}

            {/* Save & Close */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <button
                onClick={handleSaveProfile}
                className="kid-btn btn-sky"
                style={{ padding: '10px 24px', fontSize: '1.05rem', width: '100%' }}
              >
                Save & Continue Playing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
