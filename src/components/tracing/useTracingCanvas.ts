import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { sound } from '../../utils/sound';

interface TracingCanvasOptions {
  // Paints ruled lines and the dotted guide, in CSS pixels
  drawGuide: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  brush: string; // a CSS colour, or 'rainbow'
  lineWidth: number;
  aspect: number; // height / width
  minHeight: number;
  maxHeight: number;
}

// Shared drawing surface for the tracing worlds: pointer events (finger, pen, mouse),
// crisp on high-DPI screens, and it only resets when the width really changes so
// the mobile URL bar showing/hiding doesn't wipe a child's work.
export function useTracingCanvas({ drawGuide, brush, lineWidth, aspect, minHeight, maxHeight }: TracingCanvasOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const activePointerRef = useRef<number | null>(null);
  const hueRef = useRef(0);
  const hasDrawnRef = useRef(false);
  const [hasDrawn, setHasDrawnState] = useState(false);

  // Latest options without re-binding handlers
  const optsRef = useRef({ drawGuide, brush, lineWidth, aspect, minHeight, maxHeight });
  useLayoutEffect(() => {
    optsRef.current = { drawGuide, brush, lineWidth, aspect, minHeight, maxHeight };
  });

  const setHasDrawn = (value: boolean) => {
    hasDrawnRef.current = value;
    setHasDrawnState(value);
  };

  const getContext = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return null;
    const dpr = canvas.width / Math.max(1, sizeRef.current.width);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  };

  const paintGuide = useCallback(() => {
    const ctx = getContext();
    if (!ctx) return;
    const { width, height } = sizeRef.current;
    ctx.clearRect(0, 0, width, height);
    optsRef.current.drawGuide(ctx, width, height);
  }, []);

  const reset = useCallback(() => {
    paintGuide();
    setHasDrawn(false);
  }, [paintGuide]);

  const resize = useCallback(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const width = Math.round(wrap.clientWidth);
    if (!width || width === sizeRef.current.width) return;

    const { aspect: a, minHeight: minH, maxHeight: maxH } = optsRef.current;
    const height = Math.min(maxH, Math.max(minH, Math.round(width * a)));
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    sizeRef.current = { width, height };
    reset();
  }, [reset]);

  useEffect(() => {
    resize();
    const observer = new ResizeObserver(() => resize());
    if (wrapRef.current) observer.observe(wrapRef.current);
    // The guide uses the Fredoka web font; repaint once it arrives (if untouched)
    document.fonts?.load('700 100px "Fredoka"').then(() => {
      if (!hasDrawnRef.current) paintGuide();
    }).catch(() => {});
    return () => observer.disconnect();
  }, [resize, paintGuide]);

  const pointFromEvent = (e: { clientX: number; clientY: number }) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const strokeTo = (ctx: CanvasRenderingContext2D, to: { x: number; y: number }) => {
    const from = lastPointRef.current ?? to;
    const { brush: b, lineWidth: w } = optsRef.current;
    let color = b;
    if (b === 'rainbow') {
      hueRef.current = (hueRef.current + 4) % 360;
      color = `hsl(${hueRef.current}, 95%, 55%)`;
    }
    ctx.save();
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.restore();
    lastPointRef.current = to;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // One finger at a time; ignore a resting palm or second finger
    if (activePointerRef.current !== null) return;
    e.preventDefault();
    activePointerRef.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
    const ctx = getContext();
    if (!ctx) return;
    lastPointRef.current = null;
    strokeTo(ctx, pointFromEvent(e)); // a dot, so a tap shows something
    if (!hasDrawnRef.current) {
      sound.playPop(600);
      setHasDrawn(true);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId !== activePointerRef.current) return;
    const ctx = getContext();
    if (!ctx) return;
    const events = e.nativeEvent.getCoalescedEvents?.() ?? [e.nativeEvent];
    for (const ev of events.length ? events : [e.nativeEvent]) {
      strokeTo(ctx, pointFromEvent(ev));
    }
  };

  const endStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId !== activePointerRef.current) return;
    activePointerRef.current = null;
    lastPointRef.current = null;
  };

  return {
    canvasRef,
    wrapRef,
    hasDrawn,
    reset,
    canvasProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endStroke,
      onPointerCancel: endStroke,
      style: { display: 'block', touchAction: 'none', cursor: 'crosshair' } as React.CSSProperties,
    },
  };
}

// Kindergarten ruled lines: sky (top), dashed plane (middle), grass (baseline)
export function drawRuledLines(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  lines: { top: number; mid: number; base: number },
) {
  const inset = Math.min(24, width * 0.05);
  const line = (y: number, color: string, w: number, dash: number[] = []) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(inset, height * y);
    ctx.lineTo(width - inset, height * y);
    ctx.stroke();
  };
  line(lines.top, '#93C5FD', 3);
  line(lines.mid, '#F472B6', 2.5, [12, 10]);
  line(lines.base, '#34D399', 4);
  ctx.setLineDash([]);
}

export function drawDottedText(ctx: CanvasRenderingContext2D, text: string, x: number, baseline: number, fontSize: number) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.font = `700 ${fontSize}px "Fredoka", sans-serif`;
  ctx.fillStyle = '#F1F5F9';
  ctx.fillText(text, x, baseline);
  ctx.strokeStyle = '#94A3B8';
  ctx.lineWidth = Math.max(3, fontSize * 0.03);
  ctx.setLineDash([8, 10]);
  ctx.strokeText(text, x, baseline);
  ctx.restore();
}

export const BRUSH_COLORS = [
  { name: 'Rainbow', value: 'rainbow', swatch: 'conic-gradient(#EF4444, #F59E0B, #10B981, #3B82F6, #8B5CF6, #EF4444)' },
  { name: 'Sky Blue', value: '#0284C7', swatch: '#0284C7' },
  { name: 'Berry Pink', value: '#EC4899', swatch: '#EC4899' },
  { name: 'Sunny Gold', value: '#F59E0B', swatch: '#F59E0B' },
  { name: 'Grass Green', value: '#10B981', swatch: '#10B981' },
  { name: 'Purple Star', value: '#8B5CF6', swatch: '#8B5CF6' },
];
