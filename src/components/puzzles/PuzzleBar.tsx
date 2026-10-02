import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { sound } from '../../utils/sound';
import '../quiz/quiz.css';
import './puzzles.css';

interface PuzzleBarProps {
  onBack: () => void;
  chip?: string;
  children?: React.ReactNode; // shown between the back button and the chip
}

// The back button and status chip shared by the puzzle games
export const PuzzleBar: React.FC<PuzzleBarProps> = ({ onBack, chip, children }) => (
  <div className="quiz-bar">
    <button className="quiz-back" onClick={() => { sound.playPop(); onBack(); }} aria-label="Back to home">
      <ArrowLeft size={20} /> <span>Home</span>
    </button>
    {children}
    {chip && <span className="quiz-level-chip">{chip}</span>}
  </div>
);

export const colorVars = (c: { color: string; dark: string; tint: string }) =>
  ({ '--q-color': c.color, '--q-dark': c.dark, '--q-tint': c.tint }) as React.CSSProperties;
