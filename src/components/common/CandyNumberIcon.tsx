import React, { useId } from 'react';

interface CandyNumberIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A vibrant, kid-friendly 1·2·3 candy toy block icon.
 * Replaces the dull, standard 🔢 keypad emoji with cheerful,
 * high-contrast candy numbers that pop.
 *
 * Uses unique useId() namespaces and CSS drop-shadow to guarantee
 * 100% reliable rendering across desktop, tablet, and mobile views
 * (even when other navigation elements are display: none).
 */
export const CandyNumberIcon: React.FC<CandyNumberIconProps> = ({
  size = 48,
  className = '',
  style = {},
}) => {
  const rawId = useId();
  const id = 'candy-' + rawId.replace(/[^a-zA-Z0-9]/g, '');
  const width = Math.round(size * 1.35);
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 84 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        filter: 'drop-shadow(0 2px 2px rgba(15, 23, 42, 0.22))',
        ...style,
      }}
      aria-label="1, 2, 3 Counting"
      role="img"
    >
      <defs>
        {/* Bubble 1: Vibrant Coral */}
        <linearGradient id={`${id}-one`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>

        {/* Bubble 2: Warm Sunny Gold */}
        <linearGradient id={`${id}-two`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Bubble 3: Fresh Emerald */}
        <linearGradient id={`${id}-three`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Specular shine */}
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <g>
        {/* Bubble 1 (Left) */}
        <g transform="translate(6, 12) rotate(-8 14 14)">
          <rect
            x="0"
            y="0"
            width="28"
            height="28"
            rx="9"
            fill={`url(#${id}-one)`}
            stroke="#BE123C"
            strokeWidth="2"
          />
          <rect x="2" y="2" width="24" height="10" rx="5" fill={`url(#${id}-shine)`} />
          <text
            x="14"
            y="21"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="18"
          >
            1
          </text>
        </g>

        {/* Bubble 3 (Right) */}
        <g transform="translate(48, 14) rotate(8 14 14)">
          <rect
            x="0"
            y="0"
            width="28"
            height="28"
            rx="9"
            fill={`url(#${id}-three)`}
            stroke="#047857"
            strokeWidth="2"
          />
          <rect x="2" y="2" width="24" height="10" rx="5" fill={`url(#${id}-shine)`} />
          <text
            x="14"
            y="21"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="18"
          >
            3
          </text>
        </g>

        {/* Bubble 2 (Center, elevated on top) */}
        <g transform="translate(27, 4) rotate(2 15 15)">
          <rect
            x="0"
            y="0"
            width="30"
            height="30"
            rx="10"
            fill={`url(#${id}-two)`}
            stroke="#D97706"
            strokeWidth="2"
          />
          <rect x="2" y="2" width="26" height="11" rx="5.5" fill={`url(#${id}-shine)`} />
          <text
            x="15"
            y="22"
            textAnchor="middle"
            fill="#78350F"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="19"
          >
            2
          </text>
        </g>
      </g>
    </svg>
  );
};
