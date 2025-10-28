import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Plus, ExternalLink, BarChart3, Activity, Zap, Database } from 'lucide-react';

interface ProjectShowcaseProps {
  project: {
    name: string;
    description: string;
    icon: any;
    color: string;
    demoUrl?: string;
    hasDemo: boolean;
  };
  index: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const renderProjectVisualization = () => {
    switch (project.name) {
      case 'Scheduler':
        return (
          <div className="relative w-full h-32 bg-slate-800/50 rounded-lg overflow-hidden">
            {/* Gantt Chart Simulation */}
            <div className="absolute inset-2">
              <div className="grid grid-cols-7 gap-1 h-full">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className={`h-2 rounded-sm transition-all duration-1000 ${
                          animationPhase >= j ? 'bg-white/60' : 'bg-white/10'
                        }`}
                        style={{
                          animationDelay: `${(i * 0.1) + (j * 0.2)}s`,
                          width: `${60 + (j * 10)}%`
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Moving timeline indicator */}
              <div 
                className="absolute top-0 w-0.5 h-full bg-white/80 data-flow"
                style={{ left: `${(animationPhase * 25)}%` }}
              />
            </div>
          </div>
        );

      case 'CRM':
        return (
          <div className="relative w-full h-32 bg-slate-800/50 rounded-lg overflow-hidden">
            {/* Customer Flow Diagram */}
            <div className="absolute inset-4">
              <div className="flex items-center justify-between h-full">
                {/* Customer nodes */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-500 ${
                        animationPhase >= i ? 'bg-white/20 pulse-ring' : 'bg-transparent'
                      }`}
                    >
                      <Users className="w-4 h-4 text-white/60" />
                    </div>
                    {/* Connection lines */}
                    {i < 3 && (
                      <div 
                        className={`w-12 h-0.5 mt-4 transition-all duration-500 ${
                          animationPhase > i ? 'bg-white/60' : 'bg-white/20'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Data particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full matrix-rain"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'Tracciabilità':
        return (
          <div className="relative w-full h-32 bg-slate-800/50 rounded-lg overflow-hidden">
            {/* Map with tracking points */}
            <div className="absolute inset-2">
              <div className="relative w-full h-full">
                {/* Map grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full gap-px">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="bg-white/10" />
                    ))}
                  </div>
                </div>
                {/* Tracking points */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ${
                      animationPhase >= i ? 'bg-white/80 pulse-ring' : 'bg-white/30'
                    }`}
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${30 + (Math.sin(i) * 20)}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
                {/* Tracking path */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M 20 40 Q 35 20 50 45 Q 65 60 80 35"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="data-flow"
                  />
                </svg>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-32 bg-slate-800/50 rounded-lg overflow-hidden">
            {/* Abstract data visualization */}
            <div className="absolute inset-4">
              <div className="flex items-end justify-between h-full">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 bg-white/40 rounded-t chart-bar`}
                    style={{
                      height: `${30 + (Math.random() * 70)}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              {/* Morphing blob overlay */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 morphing-blob" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="group relative glass-morphism-strong rounded-2xl project-card-3d holographic-border cursor-pointer p-6 smooth-fade-in"
      style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hologram-flicker" />
      
      <div className="relative z-10">
        {/* Project header */}
        <div className="flex items-center gap-4 text-lg mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-white/20 to-slate-400/20 group-hover:from-white/30 group-hover:to-slate-400/30 transition-all duration-300">
            <project.icon className="h-6 w-6 text-white" />
          </div>
          <span className="font-semibold text-white">{project.name}</span>
        </div>

        {/* Project visualization */}
        <div className="mb-4">
          {renderProjectVisualization()}
        </div>

        {/* Project description */}
        <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 mb-4">
          {project.description}
        </p>

        {/* Demo button */}
        {project.hasDemo && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 gentle-hover holographic-border"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            Vedi Demo
          </a>
        )}
      </div>

      {/* Professional bottom indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
      
      {/* Particle effects on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full particle-explosion"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
