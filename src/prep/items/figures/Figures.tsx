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

// ---------- Coordinate grid (quadrant 1 or all 4 quadrants) ----------
function CoordGrid({ max, min = 0, points }: Of<'coordGrid'>) {
  const span = max - min;
  const c = span > 12 ? 18 : 24, left = 32, bottom = 28, top = 16, right = 16;
  const W = left + c * span + right, H = top + c * span + bottom;
  const X = (x: number) => left + (x - min) * c;
  const Y = (y: number) => top + (max - y) * c;
  const every = span > 12 ? 2 : 1;
  const yAxisX = X(0);
  const xAxisY = Y(0);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W}>
      {Array.from({ length: span + 1 }, (_, i) => {
        const v = min + i;
        return (
          <g key={i}>
            <line x1={X(v)} y1={Y(min)} x2={X(v)} y2={Y(max)} className="fig-gridline" />
            <line x1={X(min)} y1={Y(v)} x2={X(max)} y2={Y(v)} className="fig-gridline" />
            {v % every === 0 && (
              <text x={X(v)} y={xAxisY + (min < 0 && 0 === max ? -6 : 17)} textAnchor="middle" className="fig-tick">
                {v < 0 ? `−${Math.abs(v)}` : v}
              </text>
            )}
            {v % every === 0 && v !== 0 && (
              <text x={yAxisX - 8} y={Y(v) + 4} textAnchor="end" className="fig-tick">
                {v < 0 ? `−${Math.abs(v)}` : v}
              </text>
            )}
          </g>
        );
      })}
      <line x1={X(min) - 8} y1={xAxisY} x2={X(max) + 8} y2={xAxisY} className="fig-axis" />
      <line x1={yAxisX} y1={Y(min) + 8} x2={yAxisX} y2={Y(max) - 8} className="fig-axis" />
      <text x={X(max) + 6} y={xAxisY - 6} className="fig-axis-name">x</text>
      <text x={yAxisX + 6} y={Y(max) - 2} className="fig-axis-name">y</text>
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
  const cx = 230, cy = 215;
  const R_edge = 200;
  const R_outer = 170;
  const R_outer_lbl = 186;
  const R_inner = 130;
  const R_inner_lbl = 112;
  const R_ray = 210;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pt = (deg: number, r: number) => ({
    x: cx + r * Math.cos(toRad(deg)),
    y: cy - r * Math.sin(toRad(deg)),
  });

  const ticks = [];
  const labels = [];

  for (let deg = 0; deg <= 180; deg += 5) {
    const is10 = deg % 10 === 0;

    // Outer ticks: from R_outer inward
    const pOut1 = pt(deg, R_outer);
    const pOut2 = pt(deg, is10 ? R_outer - 10 : R_outer - 5);
    ticks.push(<line key={`ot${deg}`} x1={pOut1.x} y1={pOut1.y} x2={pOut2.x} y2={pOut2.y} className="fig-gridline" />);

    // Inner ticks: from R_inner outward
    const pIn1 = pt(deg, R_inner);
    const pIn2 = pt(deg, is10 ? R_inner + 10 : R_inner + 5);
    ticks.push(<line key={`it${deg}`} x1={pIn1.x} y1={pIn1.y} x2={pIn2.x} y2={pIn2.y} className="fig-gridline" />);

    if (is10) {
      // Outer scale: 0 at left (deg = 180), 180 at right (deg = 0)
      const outerVal = 180 - deg;
      const pOuter = pt(deg, R_outer_lbl);
      labels.push(
        <text
          key={`ol${deg}`}
          x={pOuter.x}
          y={pOuter.y + 4}
          textAnchor="middle"
          className="fig-protractor-lbl-outer"
        >
          {outerVal}
        </text>
      );

      // Inner scale: 180 at left (deg = 180), 0 at right (deg = 0)
      const innerVal = deg;
      const pInner = pt(deg, R_inner_lbl);
      labels.push(
        <text
          key={`il${deg}`}
          x={pInner.x}
          y={pInner.y + 4}
          textAnchor="middle"
          className="fig-protractor-lbl-inner"
        >
          {innerVal}
        </text>
      );
    }
  }

  const pRay1 = pt(ray1, R_ray);
  const pRay2 = pt(ray2, R_ray);
  const minDeg = Math.min(ray1, ray2), maxDeg = Math.max(ray1, ray2);
  const arcR = 48;
  const arcP1 = pt(minDeg, arcR), arcP2 = pt(maxDeg, arcR);
  const largeArc = maxDeg - minDeg > 180 ? 1 : 0;
  const arcD = `M ${arcP1.x} ${arcP1.y} A ${arcR} ${arcR} 0 ${largeArc} 0 ${arcP2.x} ${arcP2.y}`;

  return (
    <svg viewBox="0 0 460 250" width={460} className="fig-protractor-svg">
      {/* Protractor semi-circle base */}
      <path
        d={`M ${cx - R_edge} ${cy} A ${R_edge} ${R_edge} 0 0 1 ${cx + R_edge} ${cy} Z`}
        className="fig-protractor-base"
      />
      {/* Scale guide arcs */}
      <path
        d={`M ${cx - R_outer} ${cy} A ${R_outer} ${R_outer} 0 0 1 ${cx + R_outer} ${cy}`}
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth={1}
      />
      <path
        d={`M ${cx - R_inner} ${cy} A ${R_inner} ${R_inner} 0 0 1 ${cx + R_inner} ${cy}`}
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth={1}
      />
      {/* Baseline */}
      <line x1={cx - R_edge} y1={cy} x2={cx + R_edge} y2={cy} className="fig-axis" />
      {/* Ticks and scale labels */}
      {ticks}
      {labels}
      {/* Angle arc */}
      <path d={arcD} className="fig-angle-arc" />
      {/* Angle Rays crossing the scale */}
      <line x1={cx} y1={cy} x2={pRay1.x} y2={pRay1.y} className="fig-protractor-ray" />
      <circle cx={pRay1.x} cy={pRay1.y} r={3.5} className="fig-point" />
      <line x1={cx} y1={cy} x2={pRay2.x} y2={pRay2.y} className="fig-protractor-ray" />
      <circle cx={pRay2.x} cy={pRay2.y} r={3.5} className="fig-point" />
      {/* Center vertex crosshair and point */}
      <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke="var(--ink)" strokeWidth={1.5} />
      <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} stroke="var(--ink)" strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={3} className="fig-point" />
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

// ---------- Box plot (box-and-whisker) ----------
function BoxPlot({ title, min, q1, median, q3, max, from, to, step, axis }: Of<'boxPlot'>) {
  const f = from ?? Math.floor((min - 2) / 5) * 5;
  const t = to ?? Math.ceil((max + 2) / 5) * 5;
  const s = step ?? (t - f <= 30 ? 5 : 10);
  const span = Math.max(1, t - f);
  const n = Math.round(span / s), gap = 44, left = 40;
  const W = left * 2 + n * gap;
  const axisY = 74;
  const boxTop = 24, boxH = 30, boxMid = boxTop + boxH / 2;
  const X = (v: number) => left + ((v - f) / span) * n * gap;
  return (
    <svg viewBox={`0 0 ${W} ${axis ? 116 : 100}`} width={W}>
      {title && <text x={W / 2} y={16} textAnchor="middle" className="fig-title">{title}</text>}
      <line x1={left - 18} y1={axisY} x2={W - left + 18} y2={axisY} className="fig-axis" />
      {Array.from({ length: n + 1 }, (_, i) => {
        const v = f + i * s;
        return (
          <g key={i}>
            <line x1={X(v)} y1={axisY - 6} x2={X(v)} y2={axisY + 6} className="fig-axis" />
            <text x={X(v)} y={axisY + 20} textAnchor="middle" className="fig-tick">{v < 0 ? `−${Math.abs(v)}` : v}</text>
          </g>
        );
      })}
      {axis && <text x={W / 2} y={axisY + 36} textAnchor="middle" className="fig-axis-label">{axis}</text>}
      <line x1={X(min)} y1={boxMid} x2={X(q1)} y2={boxMid} className="fig-whisker" />
      <line x1={X(min)} y1={boxMid - 10} x2={X(min)} y2={boxMid + 10} className="fig-whisker" />
      <rect x={X(q1)} y={boxTop} width={Math.max(2, X(q3) - X(q1))} height={boxH} className="fig-box-plot" />
      <line x1={X(median)} y1={boxTop} x2={X(median)} y2={boxTop + boxH} className="fig-whisker" strokeWidth={2.5} />
      <line x1={X(q3)} y1={boxMid} x2={X(max)} y2={boxMid} className="fig-whisker" />
      <line x1={X(max)} y1={boxMid - 10} x2={X(max)} y2={boxMid + 10} className="fig-whisker" />
    </svg>
  );
}

// ---------- Histogram ----------
function Histogram({ title, intervals, frequencies, step = 1, axis }: Of<'histogram'>) {
  const top = Math.max(step * 4, Math.ceil(Math.max(...frequencies) / step) * step + step);
  const ticks = Math.round(top / step);
  const left = 54, bottom = 44, head = title ? 30 : 16, plotH = 170, bw = 64;
  const W = left + intervals.length * bw + 20, H = head + plotH + bottom;
  const Y = (v: number) => head + plotH - (v / top) * plotH;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W}>
      {title && <text x={left + (intervals.length * bw) / 2} y={16} textAnchor="middle" className="fig-title">{title}</text>}
      {Array.from({ length: ticks + 1 }, (_, i) => (
        <g key={i}>
          <line x1={left} y1={Y(i * step)} x2={W - 16} y2={Y(i * step)} className="fig-gridline" />
          <text x={left - 8} y={Y(i * step) + 4} textAnchor="end" className="fig-tick">{i * step}</text>
        </g>
      ))}
      {frequencies.map((f, i) => (
        <g key={i}>
          <rect x={left + i * bw} y={Y(f)} width={bw} height={Y(0) - Y(f)} className="fig-bar" />
          <text x={left + i * bw + bw / 2} y={Y(0) + 18} textAnchor="middle" className="fig-tick">{intervals[i]}</text>
        </g>
      ))}
      <line x1={left} y1={Y(0)} x2={W - 16} y2={Y(0)} className="fig-axis" />
      <line x1={left} y1={Y(0)} x2={left} y2={head - 4} className="fig-axis" />
      <text x={14} y={head + plotH / 2} textAnchor="middle" transform={`rotate(-90 14 ${head + plotH / 2})`} className="fig-axis-label">{axis}</text>
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
      case 'boxPlot': return <BoxPlot {...figure} />;
      case 'histogram': return <Histogram {...figure} />;
    }
  })();
  return <div className="fig" role="img" aria-label={alt}>{body}</div>;
}

