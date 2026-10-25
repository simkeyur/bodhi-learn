import type { CSSProperties } from 'react';

// Each math strand gets a color, the way Bodhi Play gives each subject its own panel.
// Screens read them as --sc (color), --sd (dark) and --st (tint). The icon is in StrandIcon.tsx.
const LOOK: Record<number, { color: string; dark: string; tint: string }> = {
  1: { color: '#38BDF8', dark: '#0369A1', tint: '#F0F9FF' },
  2: { color: '#A78BFA', dark: '#6D28D9', tint: '#F5F3FF' },
  3: { color: '#34D399', dark: '#047857', tint: '#ECFDF5' },
  4: { color: '#FBBF24', dark: '#B45309', tint: '#FFFBEB' },
};

export const strandStyle = (id: number): CSSProperties => {
  const l = LOOK[id] ?? LOOK[1];
  return { '--sc': l.color, '--sd': l.dark, '--st': l.tint } as CSSProperties;
};
