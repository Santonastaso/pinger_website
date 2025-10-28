import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Activity, Zap } from 'lucide-react';

interface SparklineData {
  timestamp: number;
  value: number;
  label?: string;
}

interface SparklineChartProps {
  data: SparklineData[];
  title?: string;
  unit?: string;
  color?: string;
  height?: number;
  showTrend?: boolean;
  className?: string;
}

export const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  title = "Real-Time Data",
  unit = "",
  color = "#3b82f6",
  height = 120,
  showTrend = true,
  className = ""
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const [isAnimating, setIsAnimating] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (data.length > 0) {
      const latestValue = data[data.length - 1].value;
      const previousValue = data.length > 1 ? data[data.length - 2].value : latestValue;
      
      setCurrentValue(latestValue);
      
      if (latestValue > previousValue) {
        setTrend('up');
      } else if (latestValue < previousValue) {
        setTrend('down');
      } else {
        setTrend('stable');
      }

      // Trigger animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [data]);

  const generatePath = () => {
    if (data.length < 2) return '';

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue || 1;
    
    const width = 300;
    const height = 80;
    const padding = 10;
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - padding - ((point.value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  };

  const generateAreaPath = () => {
    if (data.length < 2) return '';

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue || 1;
    
    const width = 300;
    const height = 80;
    const padding = 10;
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - padding - ((point.value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    });

    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    
    return `M ${firstPoint} L ${points.join(' L ')} L ${lastPoint.split(',')[0]},${height - padding} L ${firstPoint.split(',')[0]},${height - padding} Z`;
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div className={`glass-morphism rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-muted-foreground">Simulazione Real-Time</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {getTrendIcon()}
          <span className={`text-sm font-medium ${getTrendColor()}`}>
            {trend === 'up' ? 'Crescita' : trend === 'down' ? 'Calo' : 'Stabile'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className={`text-3xl font-bold text-white transition-all duration-300 ${
              isAnimating ? 'scale-110' : 'scale-100'
            }`}>
              {currentValue.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">{unit}</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-muted-foreground">Ultimo aggiornamento</div>
          <div className="text-sm text-white">
            {data.length > 0 ? new Date(data[data.length - 1].timestamp).toLocaleTimeString() : 'N/A'}
          </div>
        </div>
      </div>

      <div className="relative">
        <svg
          ref={svgRef}
          width="100%"
          height={height}
          viewBox="0 0 300 100"
          className="w-full"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
              <stop offset="100%" stopColor={color} stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Area fill */}
          <path
            d={generateAreaPath()}
            fill="url(#areaGradient)"
            className="transition-all duration-500"
          />
          
          {/* Line */}
          <path
            d={generatePath()}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          />
          
          {/* Data points */}
          {data.map((point, index) => {
            const maxValue = Math.max(...data.map(d => d.value));
            const minValue = Math.min(...data.map(d => d.value));
            const range = maxValue - minValue || 1;
            const x = (index / (data.length - 1)) * 280 + 10;
            const y = 90 - ((point.value - minValue) / range) * 80;
            
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill={color}
                className="transition-all duration-300 hover:r-4"
              />
            );
          })}
        </svg>
        
        {/* Animated pulse effect */}
        {isAnimating && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
              animation: 'pulse 0.6s ease-out'
            }}
          />
        )}
      </div>

      {/* Data summary */}
      <div className="mt-4 flex justify-between text-sm text-muted-foreground">
        <div>Punti dati: {data.length}</div>
        <div>
          Min: {data.length > 0 ? Math.min(...data.map(d => d.value)).toLocaleString() : 'N/A'} | 
          Max: {data.length > 0 ? Math.max(...data.map(d => d.value)).toLocaleString() : 'N/A'}
        </div>
      </div>
    </div>
  );
};
