import { BookOpen, ChartColumn, Divide, Hash, PenLine, Shapes, type LucideIcon } from 'lucide-react';
import type { Subject } from '../content/types';

// One icon per strand: math has numbers, computation, geometry and data; reading has reading and writing.
// Drawn in the strand's dark color.
const ICONS: Record<Subject, Record<number, LucideIcon>> = {
  math: { 1: Hash, 2: Divide, 3: Shapes, 4: ChartColumn },
  rla: { 1: BookOpen, 2: PenLine },
};

export function StrandIcon({ strand, subject = 'math', size = 20 }: { strand: number; subject?: Subject; size?: number }) {
  const Icon = ICONS[subject][strand] ?? Hash;
  return <Icon size={size} strokeWidth={2.4} color="var(--sd)" aria-hidden />;
}
