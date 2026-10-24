import { ChartColumn, Divide, Hash, Shapes, type LucideIcon } from 'lucide-react';

// One icon per math strand: numbers, computation, geometry, data. Drawn in the strand's dark color.
const ICONS: Record<number, LucideIcon> = { 1: Hash, 2: Divide, 3: Shapes, 4: ChartColumn };

export function StrandIcon({ strand, size = 20 }: { strand: number; size?: number }) {
  const Icon = ICONS[strand] ?? Hash;
  return <Icon size={size} strokeWidth={2.4} color="var(--sd)" aria-hidden />;
}
