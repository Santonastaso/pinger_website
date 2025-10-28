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
    <div className={`relative z-50 ${className}`}>
      {/* Main text with Pixar-style letter squashing */}
      <div className="relative z-50">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              animationDelay: isAnimating ? `${delay + (index * 0.08)}s` : 'none',
              animationDuration: '0.8s',
              animationFillMode: 'both',
              animationName: isAnimating ? 'letter-squash' : 'none'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};
