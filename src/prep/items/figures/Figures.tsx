// Figures drawn as SVG from data, so generated questions can use them and they stay sharp at any zoom.
// Colors come from CSS (figures.css), so a high-contrast theme can restyle them.

import type { Figure } from '../../content/types';
import './figures.css';

type Of<K extends Figure['kind']> = Extract<Figure, { kind: K }>;

const fmt = (v: number, places: number) => v.toFixed(places).replace(/^0(?=\.)/, '0');

// ---------- 10 x 10 area model for decimal multiplication ----------
function AreaModel({ rows, cols }: Of<'area'>) {
  const c = 20, pad = 4;
  const cells = [];
  for (let r = 0; r < 10; r++) {
    for (let k = 0; k < 10; k++) {
      const inRow = r < rows, inCol = k < cols;
      const cls = inRow && inCol ? 'fig-shade-3' : inRow ? 'fig-shade-1' : inCol ? 'fig-shade-2' : 'fig-empty';
      cells.push(<rect key={`${r}-${k}`} x={pad + k * c} y={pad + r * c} width={c} height={c} className={cls} />);
    }
  }
  return <svg viewBox={`0 0 ${c * 10 + pad * 2} ${c * 10 + pad * 2}`} width={c * 10 + pad * 2}>{cells}<rect x={pad} y={pad} width={c * 10} height={c * 10} className="fig-frame" /></svg>;
}

// ---------- A decimal on hundred grids ----------
function DecimalGrids({ hundredths }: Of<'decimalGrids'>) {
  const c = 11, size = c * 10, gap = 14, n = Math.max(1, Math.ceil(hundredths / 100));
  const grids = Array.from({ length: n }, (_, g) => {
    const filled = Math.max(0, Math.min(100, hundredths - g * 100));
    const x0 = g * (size + gap) + 2;
    return (
      <g key={g}>
        {Array.from({ length: 100 }, (_, i) => {
          const col = Math.floor(i / 10), row = i % 10; // fill column by column: each column is a tenth
          return <rect key={i} x={x0 + col * c} y={2 + row * c} width={c} height={c} className={i < filled ? 'fig-shade-3' : 'fig-empty'} />;
        })}
        <rect x={x0} y={2} width={size} height={size} className="fig-frame" />
      </g>
    );
  });
  const w = n * size + (n - 1) * gap + 4;
  return <svg viewBox={`0 0 ${w} ${size + 4}`} width={w}>{grids}</svg>;
}

// ---------- Fraction bars, all the same whole ----------
function FractionBars({ bars }: Of<'fractionBars'>) {
  const W = 360, H = 34, gap = 12, labelW = bars.some((b) => b.label) ? 130 : 0;
  return (
    <svg viewBox={`0 0 ${W + labelW + 4} ${bars.length * (H + gap)}`} width={W + labelW + 4}>
      {bars.map((b, i) => {
        const y = i * (H + gap) + 2, w = W / b.parts;
        return (
          <g key={i}>
            {Array.from({ length: b.parts }, (_, k) => (
              <rect key={k} x={2 + k * w} y={y} width={w} height={H} className={k < b.shaded ? 'fig-shade-3' : 'fig-empty'} />
            ))}
            <rect x={2} y={y} width={W} height={H} className="fig-frame" />
            {b.label && <text x={W + 14} y={y + H / 2 + 5} className="fig-label">{b.label}</text>}
          </g>
        );
      })}
    </svg>
  );
}

// ---------- First-quadrant coordinate grid ----------
function CoordGrid({ max, points }: Of<'coordGrid'>) {
  const c = max > 10 ? 18 : 24, left = 30, bottom = 28, top = 14, right = 14;
  const W = left + c * max + right, H = top + c * max + bottom;
  const X = (x: number) => left + x * c, Y = (y: number) => top + (max - y) * c;
  const every = max > 10 ? 2 : 1;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W}>
      {Array.from({ length: max + 1 }, (_, i) => (
        <g key={i}>
          <line x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(max)} className="fig-gridline" />
          <line x1={X(0)} y1={Y(i)} x2={X(max)} y2={Y(i)} className="fig-gridline" />
          {i % every === 0 && <text x={X(i)} y={Y(0) + 17} textAnchor="middle" className="fig-tick">{i}</text>}
          {i % every === 0 && i > 0 && <text x={X(0) - 8} y={Y(i) + 4} textAnchor="end" className="fig-tick">{i}</text>}
        </g>
      ))}
      <line x1={X(0)} y1={Y(0)} x2={X(max) + 8} y2={Y(0)} className="fig-axis" />
      <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(max) - 8} className="fig-axis" />
      <text x={X(max) + 6} y={Y(0) - 6} className="fig-axis-name">x</text>
      <text x={X(0) + 6} y={Y(max) - 2} className="fig-axis-name">y</text>
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={X(p.x)} cy={Y(p.y)} r={5} className="fig-point" />
          {p.label && <text x={X(p.x) + 7} y={Y(p.y) - 7} className="fig-point-label">{p.label}</text>}
        </g>
      ))}
    </svg>
  );
}

// ---------- Bar graph ----------
function BarGraph({ title, categories, values, step, axis }: Of<'barGraph'>) {
  const top = Math.max(step * 5, Math.ceil(Math.max(...values) / step) * step + step);
  const ticks = Math.round(top / step);
  const left = 54, bottom = 34, head = 30, plotH = 190, bw = 62;
  const W = left + categories.length * bw + 16, H = head + plotH + bottom;
  const Y = (v: number) => head + plotH - (v / top) * plotH;
  const labelEvery = ticks > 10 ? 2 : 1;
  return (
    <svg viewBox={`0 0 ${W} ${H + 18}`} width={W}>
      <text x={left + (categories.length * bw) / 2} y={16} textAnchor="middle" className="fig-title">{title}</text>
      {Array.from({ length: ticks + 1 }, (_, i) => (
        <g key={i}>
          <line x1={left} y1={Y(i * step)} x2={W - 16} y2={Y(i * step)} className="fig-gridline" />
          {i % labelEvery === 0 && <text x={left - 8} y={Y(i * step) + 4} textAnchor="end" className="fig-tick">{i * step}</text>}
        </g>
      ))}
      {values.map((v, i) => (
        <g key={i}>
          <rect x={left + i * bw + 12} y={Y(v)} width={bw - 24} height={Y(0) - Y(v)} className="fig-bar" />
          <text x={left + i * bw + bw / 2} y={Y(0) + 18} textAnchor="middle" className="fig-tick">{categories[i]}</text>
        </g>
      ))}
      <line x1={left} y1={Y(0)} x2={W - 16} y2={Y(0)} className="fig-axis" />
      <line x1={left} y1={Y(0)} x2={left} y2={head - 4} className="fig-axis" />
      <text x={14} y={head + plotH / 2} textAnchor="middle" transform={`rotate(-90 14 ${head + plotH / 2})`} className="fig-axis-label">{axis}</text>
    </svg>
  );
}

// ---------- Dot plot ----------
function DotPlot({ title, labels, counts, axis }: Of<'dotPlot'>) {
  const gapX = 80, left = 40, r = 7, rowH = 18, maxC = Math.max(4, ...counts);
  const W = left * 2 + gapX * (labels.length - 1), base = 34 + maxC * rowH;
  return (
    <svg viewBox={`0 0 ${W} ${base + 50}`} width={W}>
      <text x={W / 2} y={16} textAnchor="middle" className="fig-title">{title}</text>
      <line x1={left - 20} y1={base} x2={W - left + 20} y2={base} className="fig-axis" />
      {labels.map((l, i) => (
        <g key={i}>
          <line x1={left + i * gapX} y1={base - 5} x2={left + i * gapX} y2={base + 5} className="fig-axis" />
          <text x={left + i * gapX} y={base + 22} textAnchor="middle" className="fig-tick">{l}</text>
          {Array.from({ length: counts[i] }, (_, k) => <circle key={k} cx={left + i * gapX} cy={base - 14 - k * rowH} r={r} className="fig-point" />)}
        </g>
      ))}
      <text x={W / 2} y={base + 44} textAnchor="middle" className="fig-axis-label">{axis}</text>
    </svg>
  );
}

// ---------- Rectangular prism of unit cubes (oblique drawing) ----------
function Prism({ l, w, h }: Of<'prism'>) {
  const s = 40, dx = s * 0.45, dy = s * 0.35;
  const ox = 6, oy = 8 + w * dy;
  const W = ox + l * s + w * dx + 8, H = oy + h * s + 6;
  const lines = [];
  // Front face (l x h)
  for (let i = 0; i <= l; i++) lines.push(<line key={`fv${i}`} x1={ox + i * s} y1={oy} x2={ox + i * s} y2={oy + h * s} />);
  for (let j = 0; j <= h; j++) lines.push(<line key={`fh${j}`} x1={ox} y1={oy + j * s} x2={ox + l * s} y2={oy + j * s} />);
  // Top face (l x w)
  for (let i = 0; i <= l; i++) lines.push(<line key={`tv${i}`} x1={ox + i * s} y1={oy} x2={ox + i * s + w * dx} y2={oy - w * dy} />);
  for (let k = 0; k <= w; k++) lines.push(<line key={`th${k}`} x1={ox + k * dx} y1={oy - k * dy} x2={ox + l * s + k * dx} y2={oy - k * dy} />);
  // Right face (w x h)
  for (let j = 0; j <= h; j++) lines.push(<line key={`rh${j}`} x1={ox + l * s} y1={oy + j * s} x2={ox + l * s + w * dx} y2={oy + j * s - w * dy} />);
  for (let k = 0; k <= w; k++) lines.push(<line key={`rv${k}`} x1={ox + l * s + k * dx} y1={oy - k * dy} x2={ox + l * s + k * dx} y2={oy + h * s - k * dy} />);
  const front = `${ox},${oy} ${ox + l * s},${oy} ${ox + l * s},${oy + h * s} ${ox},${oy + h * s}`;
  const topFace = `${ox},${oy} ${ox + w * dx},${oy - w * dy} ${ox + l * s + w * dx},${oy - w * dy} ${ox + l * s},${oy}`;
  const side = `${ox + l * s},${oy} ${ox + l * s + w * dx},${oy - w * dy} ${ox + l * s + w * dx},${oy + h * s - w * dy} ${ox + l * s},${oy + h * s}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W}>
      <polygon points={front} className="fig-face-front" />
      <polygon points={topFace} className="fig-face-top" />
      <polygon points={side} className="fig-face-side" />
      <g className="fig-cube-lines">{lines}</g>
    </svg>
  );
}

// ---------- Number line ----------
function NumberLine({ from, to, step, decimals, point }: Of<'numberLine'>) {
  const n = Math.round((to - from) / step), gap = 44, left = 34;
  const W = left * 2 + n * gap, base = 44;
  const X = (v: number) => left + ((v - from) / (to - from)) * n * gap;
  return (
    <svg viewBox={`0 0 ${W} ${base + 34}`} width={W}>
      <line x1={left - 18} y1={base} x2={W - left + 18} y2={base} className="fig-axis" />
      {Array.from({ length: n + 1 }, (_, i) => {
        const v = from + i * step, major = i === 0 || i === n || i === n / 2;
        return (
          <g key={i}>
            <line x1={X(v)} y1={base - (major ? 9 : 6)} x2={X(v)} y2={base + (major ? 9 : 6)} className="fig-axis" />
            {major && <text x={X(v)} y={base + 26} textAnchor="middle" className="fig-tick">{fmt(v, decimals)}</text>}
          </g>
        );
      })}
      <circle cx={X(point)} cy={base} r={6} className="fig-point" />
      <text x={X(point)} y={base - 16} textAnchor="middle" className="fig-point-label">{String(Math.round(point * 1000) / 1000)}</text>
    </svg>
  );
}

export function FigureView({ figure, alt }: { figure: Figure; alt: string }) {
  const body = (() => {
    switch (figure.kind) {
      case 'area': return <AreaModel {...figure} />;
      case 'decimalGrids': return <DecimalGrids {...figure} />;
      case 'fractionBars': return <FractionBars {...figure} />;
      case 'coordGrid': return <CoordGrid {...figure} />;
      case 'barGraph': return <BarGraph {...figure} />;
      case 'dotPlot': return <DotPlot {...figure} />;
      case 'prism': return <Prism {...figure} />;
      case 'numberLine': return <NumberLine {...figure} />;
    }
  })();
  return <div className="fig" role="img" aria-label={alt}>{body}</div>;
}
