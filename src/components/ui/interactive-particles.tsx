import React, { useState, useEffect, useRef } from 'react';

interface InteractiveParticlesProps {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
}

export const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({ 
  children, 
  className = '',
  particleCount = 12
}) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; active: boolean }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticles = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      active: true
    }));

    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 2000);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={createParticles}
    >
      {children}
      
      {/* Particle overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/60 rounded-full particle-explosion"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
