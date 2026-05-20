export function Logo({ className = "", fillColor = "#1A1A1A" }: { className?: string, fillColor?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4EAD3" />
          <stop offset="100%" stopColor="#A68A2E" />
        </linearGradient>
      </defs>

      {/* The Horizon: Golden 'D' built with structural fins */}
      <path
        d="M 220 150 L 320 100 Q 420 120 420 250 Q 420 380 320 400 L 220 350 Z"
        fill="transparent"
        stroke="url(#gold-gradient)"
        strokeWidth="6"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className="animate-gold-thread"
      />

      {/* The Heritage: Left 'D' with house window */}
      <path
        d="M 120 280 L 180 250 Q 260 260 260 340 Q 260 410 120 395 Z"
        fill={fillColor}
        stroke="url(#gold-gradient)"
        strokeWidth="2"
      />
      {/* Window Panes */}
      <rect x="135" y="300" width="12" height="12" fill="#D4AF37" opacity="0.9" />
      <rect x="151" y="300" width="12" height="12" fill="#D4AF37" opacity="0.9" />
      <rect x="135" y="316" width="12" height="12" fill="#D4AF37" opacity="0.9" />
      <rect x="151" y="316" width="12" height="12" fill="#D4AF37" opacity="0.9" />

      {/* The Horizon: Champagne Gold 'D' with Skyscraper Fins */}
      <path
        d="M 280 200 L 280 395 Q 400 370 400 280 Q 400 200 280 200 Z M 320 230 Q 370 240 370 280 Q 370 330 320 340 Z"
        fill="url(#gold-gradient)"
      />
      
      {/* Skyscraper Fins ascending from the Gold D */}
      <rect x="280" y="80" width="12" height="120" fill="url(#gold-gradient)" />
      <rect x="298" y="60" width="12" height="140" fill="url(#gold-gradient)" />
      <rect x="316" y="40" width="12" height="160" fill="url(#gold-gradient)" />
      <rect x="334" y="60" width="12" height="140" fill="url(#gold-gradient)" />
      <rect x="352" y="80" width="12" height="120" fill="url(#gold-gradient)" />
    </svg>
  );
}
