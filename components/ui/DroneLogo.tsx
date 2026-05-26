import React from "react";

interface DroneLogoProps {
  className?: string;
  size?: number;
}

export default function DroneLogo({ className = "", size = 32 }: DroneLogoProps) {
  return (
    <svg
      width={size * 5.2}
      height={size}
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

      {/* Wordmark */}
      <text
        x="52"
        y="23"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="white"
      >
        DRONE
      </text>
      <text
        x="110"
        y="23"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#14B8A6"
      >
        SCOPE
      </text>
    </svg>
  );
}
