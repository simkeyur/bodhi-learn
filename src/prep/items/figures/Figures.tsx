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
function NumberLine({ from, to, step, decimals, point, pointLabel }: Of<'numberLine'>) {
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
      <text x={X(point)} y={base - 16} textAnchor="middle" className="fig-point-label">{pointLabel ?? String(Math.round(point * 1000) / 1000)}</text>
    </svg>
  );
}

// ---------- Protractor with angle rays ----------
function Protractor({ ray1, ray2 }: Of<'protractor'>) {
  const cx = 170, cy = 160, R = 130, inR = 105;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pt = (deg: number, r: number) => ({
    x: cx + r * Math.cos(toRad(deg)),
    y: cy - r * Math.sin(toRad(deg)),
  });

  const ticks = [];
  for (let deg = 0; deg <= 180; deg += 5) {
    const is10 = deg % 10 === 0;
    const rStart = R;
    const rEnd = is10 ? R - 12 : R - 6;
    const p1 = pt(deg, rStart), p2 = pt(deg, rEnd);
    ticks.push(<line key={`t${deg}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="fig-gridline" />);
    if (is10 && deg > 0 && deg < 180) {
      const pOuter = pt(deg, R - 20);
      const pInner = pt(deg, R - 32);
      ticks.push(
        <g key={`lbl${deg}`}>
          <text x={pOuter.x} y={pOuter.y + 3} textAnchor="middle" className="fig-tick-sm">{deg}</text>
          <text x={pInner.x} y={pInner.y + 3} textAnchor="middle" className="fig-tick-sm">{180 - deg}</text>
        </g>
      );
    }
  }

  const pRay1 = pt(ray1, R + 14);
  const pRay2 = pt(ray2, R + 14);
  const minDeg = Math.min(ray1, ray2), maxDeg = Math.max(ray1, ray2);
  const arcP1 = pt(minDeg, 45), arcP2 = pt(maxDeg, 45);
  const largeArc = maxDeg - minDeg > 180 ? 1 : 0;
  const arcD = `M ${arcP1.x} ${arcP1.y} A 45 45 0 ${largeArc} 0 ${arcP2.x} ${arcP2.y}`;

  return (
    <svg viewBox="0 0 340 185" width={340}>
      <path d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy} Z`} className="fig-protractor-base" />
      <path d={`M ${cx - inR} ${cy} A ${inR} ${inR} 0 0 1 ${cx + inR} ${cy} Z`} fill="none" stroke="var(--line)" strokeWidth={1} />
      <line x1={cx - R - 8} y1={cy} x2={cx + R + 8} y2={cy} className="fig-axis" />
      <text x={cx + R - 14} y={cy - 4} textAnchor="end" className="fig-tick-sm">0 / 180</text>
      <text x={cx - R + 14} y={cy - 4} textAnchor="start" className="fig-tick-sm">180 / 0</text>
      {ticks}
      <path d={arcD} className="fig-angle-arc" />
      <line x1={cx} y1={cy} x2={pRay1.x} y2={pRay1.y} className="fig-protractor-ray" />
      <line x1={cx} y1={cy} x2={pRay2.x} y2={pRay2.y} className="fig-protractor-ray" />
      <circle cx={cx} cy={cy} r={4} className="fig-point" />
    </svg>
  );
}

// ---------- Adjacent angle pair ----------
function AnglePair({ a1, a2, label1, label2 }: Of<'anglePair'>) {
  const ox = 35, oy = 150, L = 140;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pt = (deg: number, r: number) => ({
    x: ox + r * Math.cos(toRad(deg)),
    y: oy - r * Math.sin(toRad(deg)),
  });

  const p0 = pt(0, L);
  const p1 = pt(a1, L);
  const p2 = pt(a1 + a2, L);

  const arc1P1 = pt(0, 40), arc1P2 = pt(a1, 40);
  const arc2P1 = pt(a1, 60), arc2P2 = pt(a1 + a2, 60);

  const lbl1 = pt(a1 / 2, 55);
  const lbl2 = pt(a1 + a2 / 2, 75);

  return (
    <svg viewBox="0 0 240 180" width={240}>
      <line x1={ox} y1={oy} x2={p0.x} y2={p0.y} className="fig-axis" />
      <line x1={ox} y1={oy} x2={p1.x} y2={p1.y} className="fig-axis" />
      <line x1={ox} y1={oy} x2={p2.x} y2={p2.y} className="fig-axis" />
      <path d={`M ${arc1P1.x} ${arc1P1.y} A 40 40 0 0 0 ${arc1P2.x} ${arc1P2.y}`} className="fig-angle-arc" />
      <path d={`M ${arc2P1.x} ${arc2P1.y} A 60 60 0 0 0 ${arc2P2.x} ${arc2P2.y}`} className="fig-angle-arc" />
      <circle cx={ox} cy={oy} r={4} className="fig-point" />
      {label1 && <text x={lbl1.x} y={lbl1.y} textAnchor="middle" className="fig-label">{label1}</text>}
      {label2 && <text x={lbl2.x} y={lbl2.y} textAnchor="middle" className="fig-label">{label2}</text>}
    </svg>
  );
}

// ---------- 2D shape with line of symmetry ----------
function SymmetryFigure({ shape, line }: Of<'symmetry'>) {
  const cx = 90, cy = 90;
  let shapeEl = null;

  switch (shape) {
    case 'rectangle':
      shapeEl = <rect x={cx - 60} y={cy - 40} width={120} height={80} className="fig-shape" />;
      break;
    case 'square':
      shapeEl = <rect x={cx - 45} y={cy - 45} width={90} height={90} className="fig-shape" />;
      break;
    case 'rhombus':
      shapeEl = <polygon points={`${cx},${cy - 55} ${cx + 50},${cy} ${cx},${cy + 55} ${cx - 50},${cy}`} className="fig-shape" />;
      break;
    case 'trapezoid':
      shapeEl = <polygon points={`${cx - 35},${cy - 35} ${cx + 35},${cy - 35} ${cx + 60},${cy + 35} ${cx - 60},${cy + 35}`} className="fig-shape" />;
      break;
    case 'equilateralTriangle':
      shapeEl = <polygon points={`${cx},${cy - 50} ${cx + 50},${cy + 40} ${cx - 50},${cy + 40}`} className="fig-shape" />;
      break;
    case 'isoscelesTriangle':
      shapeEl = <polygon points={`${cx},${cy - 55} ${cx + 35},${cy + 45} ${cx - 35},${cy + 45}`} className="fig-shape" />;
      break;
    case 'scaleneTriangle':
      shapeEl = <polygon points={`${cx - 15},${cy - 50} ${cx + 55},${cy + 40} ${cx - 55},${cy + 25}`} className="fig-shape" />;
      break;
    case 'hexagon': {
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (i * 60 * Math.PI) / 180;
        return `${cx + 50 * Math.cos(a)},${cy + 50 * Math.sin(a)}`;
      }).join(' ');
      shapeEl = <polygon points={pts} className="fig-shape" />;
      break;
    }
  }

  let lineEl = null;
  switch (line) {
    case 'v':
      lineEl = <line x1={cx} y1={15} x2={cx} y2={165} className="fig-sym-line" />;
      break;
    case 'h':
      lineEl = <line x1={15} y1={cy} x2={165} y2={cy} className="fig-sym-line" />;
      break;
    case 'd1':
      lineEl = <line x1={20} y1={20} x2={160} y2={160} className="fig-sym-line" />;
      break;
    case 'd2':
      lineEl = <line x1={20} y1={160} x2={160} y2={20} className="fig-sym-line" />;
      break;
  }

  return (
    <svg viewBox="0 0 180 180" width={180}>
      {shapeEl}
      {lineEl}
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
      case 'protractor': return <Protractor {...figure} />;
      case 'anglePair': return <AnglePair {...figure} />;
      case 'symmetry': return <SymmetryFigure {...figure} />;
    }
  })();
  return <div className="fig" role="img" aria-label={alt}>{body}</div>;
}

