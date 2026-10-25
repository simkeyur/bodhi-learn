import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { MAX_AGE, MAX_GRADE, MIN_AGE, MIN_GRADE, PREP_MIN_GRADE } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import { AccountSection } from './AccountSection';
import { X, Settings } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Settings for everyone, no gate: profile, account sign-in (to save progress), voice and sound.
export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const {
    kidName,
    setKidName,
    age,
    setAge,
    grade,
    setGrade,
    speechEnabled,
    setSpeechEnabled,
    voiceSpeed,
    setVoiceSpeed,
  } = useApp();

  // Local settings draft
  const [nameInput, setNameInput] = useState(kidName);

  // Start from the current name each time the panel opens. This must not depend on kidName: the name can
  // change while open (sign-out, or another device syncing), and that must not reset what is being typed.
  const kidNameRef = useRef(kidName);
  useEffect(() => {
    kidNameRef.current = kidName;
  });
  useEffect(() => {
    if (isOpen) setNameInput(kidNameRef.current);
  }, [isOpen]);

  // If the name changes underneath an untouched field (e.g. synced from another device), follow it
  const lastSeenNameRef = useRef(kidName);
  useEffect(() => {
    setNameInput((current) => (current === lastSeenNameRef.current ? kidName : current));
    lastSeenNameRef.current = kidName;
  }, [kidName]);

  if (!isOpen) return null;

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
              <Settings size={22} />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
              color: '#0F172A',
              margin: 0,
            }}>
              Settings
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

        {/* Settings form */}
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
                Your name:
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

            {/* Grade (from age 6): grade 4 and up get Bodhi Prep (Texas test prep) instead of the games */}
            {grade !== null && (
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', color: '#334155', marginBottom: 8 }}>
                  Grade:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))', gap: 8 }}>
                  {Array.from({ length: MAX_GRADE - MIN_GRADE + 1 }, (_, i) => MIN_GRADE + i).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGrade(g)}
                      aria-pressed={grade === g}
                      style={{
                        background: grade === g ? '#38BDF8' : '#F8FAFC',
                        color: grade === g ? '#FFFFFF' : '#334155',
                        border: grade === g ? '2px solid #0284C7' : '2px solid #E2E8F0',
                        borderRadius: 14,
                        minHeight: 48,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: 6 }}>
                  From grade {PREP_MIN_GRADE}, Bodhi Learn switches to Bodhi Prep: practice for the Texas state test.
                </div>
              </div>
            )}

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
      </div>
    </div>
  );
};
