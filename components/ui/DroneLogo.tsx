import React from "react";

interface DroneLogoProps {
  className?: string;
  size?: number;
  decorative?: boolean;
}

export default function DroneLogo({ className = "", size = 32, decorative = true }: DroneLogoProps) {
  return (
    <svg
      width={size * 5.8}
      height={size}
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : "Drone Scope"}
    >
      {/* Stylized drone + lens icon */}
      <g>
        {/* Drone body / lens ring */}
        <circle cx="20" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="20" cy="16" r="6.5" fill="currentColor" />
        
        {/* Aperture blades hint */}
        <path d="M15 16 L20 11 L25 16 L20 21 Z" fill="#0B0B0E" opacity="0.6" />
        
        {/* Drone arms */}
        <line x1="8" y1="9" x2="3" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="9" x2="37" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="23" x2="3" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="23" x2="37" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Propellers */}
        <circle cx="3" cy="4" r="2.5" fill="currentColor" />
        <circle cx="37" cy="4" r="2.5" fill="currentColor" />
        <circle cx="3" cy="28" r="2.5" fill="currentColor" />
        <circle cx="37" cy="28" r="2.5" fill="currentColor" />
      </g>

      {/* Wordmark — paths only (SVG text is unreliable for screen readers) */}
      <g aria-hidden="true">
        <text
          x="48"
          y="23"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="-0.8"
          fill="white"
        >
          DRONE
          <tspan fill="#14B8A6" dx="12">SCOPE</tspan>
        </text>
      </g>
    </svg>
  );
}
