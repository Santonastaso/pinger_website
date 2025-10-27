import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'home' | 'section';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'section',
  className = '' 
}) => {
  if (variant === 'home') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Mesh gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/8 via-blue-500/5 to-transparent rounded-full blur-3xl mesh-gradient"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/5 via-white/8 to-transparent rounded-full blur-3xl mesh-gradient" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/3 via-pink-500/3 to-transparent rounded-full blur-3xl mesh-gradient" style={{ animationDelay: '14s' }}></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full floating-orb"></div>
        <div className="absolute top-1/4 right-32 w-2 h-2 bg-white/40 rounded-full floating-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full floating-orb" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-white/50 rounded-full floating-orb" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-white/25 rounded-full floating-orb" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-white/35 rounded-full floating-orb" style={{ animationDelay: '5s' }}></div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Depth layers */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl depth-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-xl depth-float" style={{ animationDelay: '3s' }}></div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Section background */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/3 rounded-full blur-3xl subtle-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-500/3 rounded-full blur-3xl subtle-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full floating-orb"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full floating-orb" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle grid pattern - same as home */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Additional depth layers */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/4 rounded-full blur-xl depth-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/2 rounded-full blur-lg depth-float" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};
