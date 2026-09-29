import React, { useState, useEffect } from 'react';
import { useApp, type AgeBracket } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { X, ShieldCheck, Sparkles } from 'lucide-react';

interface ParentGateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentGateModal: React.FC<ParentGateModalProps> = ({ isOpen, onClose }) => {
  const {
    kidName,
    setKidName,
    ageBracket,
    setAgeBracket,
    speechEnabled,
    setSpeechEnabled,
    voiceSpeed,
    setVoiceSpeed,
    stars,
    addStars,
  } = useApp();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(7);
  const [parentAnswer, setParentAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Local settings draft
  const [nameInput, setNameInput] = useState(kidName);

  useEffect(() => {
    if (isOpen) {
      setIsUnlocked(false);
      const n1 = Math.floor(Math.random() * 8) + 5; // e.g. 5 to 12
      const n2 = Math.floor(Math.random() * 7) + 4;
      setNum1(n1);
      setNum2(n2);
      setParentAnswer('');
      setErrorMsg('');
      setNameInput(kidName);
    }
  }, [isOpen, kidName]);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(parentAnswer, 10) === num1 + num2) {
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
              Parent Settings
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
                {num1} + {num2} = ?
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
            {/* Kid Name Input */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#334155',
                marginBottom: 6,
              }}>
                Learner's Name:
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

            {/* Age / Grade Bracket */}
            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#334155',
                marginBottom: 8,
              }}>
                Difficulty / Age Group:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))', gap: 8 }}>
                {[
                  { id: 'pre-k', label: 'Pre-K (3-4)', desc: 'Numbers 1-5, Phonics' },
                  { id: 'kindergarten', label: 'Kindergarten (5-6)', desc: 'Numbers 1-10, Sight Words' },
                  { id: 'grade1', label: '1st Grade (7-8)', desc: 'Numbers 1-20, Full Stories' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setAgeBracket(tier.id as AgeBracket)}
                    style={{
                      background: ageBracket === tier.id ? '#38BDF8' : '#F8FAFC',
                      color: ageBracket === tier.id ? '#FFFFFF' : '#334155',
                      border: ageBracket === tier.id ? '2px solid #0284C7' : '2px solid #E2E8F0',
                      borderRadius: 14,
                      padding: '10px 6px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{tier.label}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: 4 }}>{tier.desc}</div>
                  </button>
                ))}
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

            {/* Reward Stars Management */}
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
