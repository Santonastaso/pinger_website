import React, { useEffect, useState } from 'react';

interface ParticleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ParticleText: React.FC<ParticleTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative ${className}`}>
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main text with particle effect */}
      <div className="relative z-10">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`particle-letter ${isAnimating ? 'text-reveal' : 'opacity-0'}`}
            style={{
              animationDelay: isAnimating ? `${index * 0.1}s` : 'none'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};
