import React from 'react';
import { Gamepad2, GraduationCap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';

// The Learn / Prep switch, in both headers: Learn is the Bodhi games, Prep is Bodhi Prep (Texas test practice).
// Shown only where Bodhi Prep has content for the child's grade. Inline styles so it looks the same in both apps.
export const ModeSwitch: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { canPrep, isPrep, setMode } = useApp();
  if (!canPrep) return null;

  const option = (mode: 'learn' | 'prep', label: string, Icon: typeof Gamepad2) => {
    const on = (mode === 'prep') === isPrep;
    return (
      <button
        type="button"
        aria-pressed={on}
        aria-label={compact ? label : undefined}
        onClick={() => { if (!on) { sound.playPop(); setMode(mode); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, padding: compact ? '0 10px' : '0 14px',
          border: 'none', borderRadius: 999, cursor: on ? 'default' : 'pointer',
          background: on ? '#0284C7' : 'transparent', color: on ? '#FFFFFF' : '#475569',
          boxShadow: on ? '0 2px 0 #0C4A6E' : 'none',
          font: '600 0.95rem Fredoka, system-ui, sans-serif', whiteSpace: 'nowrap',
          transition: 'background 120ms ease, color 120ms ease',
        }}
      >
        <Icon size={18} aria-hidden />
        {!compact && label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label="Switch between the Bodhi games and Bodhi Prep"
      style={{ display: 'inline-flex', gap: 2, padding: 3, borderRadius: 999, background: '#F1F5F9', border: '2px solid #E2E8F0', flexShrink: 0 }}
    >
      {option('learn', 'Learn', Gamepad2)}
      {option('prep', 'Prep', GraduationCap)}
    </div>
  );
};
