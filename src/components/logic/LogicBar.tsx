import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { AgeBracket } from '../../firebase/schema';
import { sound } from '../../utils/sound';

const LEVELS: { id: AgeBracket; label: string }[] = [
  { id: 'pre-k', label: 'Pre-K' },
  { id: 'kindergarten', label: 'K' },
  { id: 'grade1', label: '1st' },
];

interface LogicBarProps {
  onBack: () => void;
  bracket: AgeBracket;
  onBracket: (bracket: AgeBracket) => void;
}

// Back button and difficulty switch shared by the Logic Lab worlds
export const LogicBar: React.FC<LogicBarProps> = ({ onBack, bracket, onBracket }) => (
  <div className="world-bar">
    <button
      onClick={() => { sound.playPop(); onBack(); }}
      className="kid-btn btn-white back-btn"
      aria-label="Back to home"
    >
      <ArrowLeft size={22} /> <span className="btn-label">Back</span>
    </button>

    <div className="seg">
      {LEVELS.map((level) => (
        <button
          key={level.id}
          onClick={() => { sound.playPop(); onBracket(level.id); }}
          className={`kid-btn ${bracket === level.id ? 'btn-sky' : 'btn-white'}`}
          aria-pressed={bracket === level.id}
        >
          {level.label}
        </button>
      ))}
    </div>
  </div>
);
