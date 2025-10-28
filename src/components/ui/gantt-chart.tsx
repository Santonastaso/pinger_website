import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Users, CheckCircle, AlertCircle, Play, Pause } from 'lucide-react';

interface GanttTask {
  id: string;
  name: string;
  start: number;
  duration: number;
  progress: number;
  status: 'completed' | 'in-progress' | 'pending' | 'delayed';
  assignee?: string;
  dependencies?: string[];
  color: string;
}

interface GanttChartProps {
  tasks: GanttTask[];
  onTaskUpdate?: (taskId: string, updates: Partial<GanttTask>) => void;
  onTaskClick?: (task: GanttTask) => void;
  className?: string;
}

export const GanttChart: React.FC<GanttChartProps> = ({
  tasks,
  onTaskUpdate,
  onTaskClick,
  className = ''
}) => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, taskId: '' });
  const containerRef = useRef<HTMLDivElement>(null);

  const maxTime = Math.max(...tasks.map(task => task.start + task.duration));
  const timeScale = 100; // pixels per time unit
  const rowHeight = 60;

  const getStatusIcon = (status: GanttTask['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Play className="w-4 h-4 text-blue-400" />;
      case 'delayed':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Pause className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: GanttTask['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border-green-500/50';
      case 'in-progress':
        return 'bg-blue-500/20 border-blue-500/50';
      case 'delayed':
        return 'bg-red-500/20 border-red-500/50';
      default:
        return 'bg-gray-500/20 border-gray-500/50';
    }
  };

  const handleMouseDown = (e: React.MouseEvent, taskId: string) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, taskId });
    setSelectedTask(taskId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !onTaskUpdate) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaTime = Math.round(deltaX / timeScale);
    
    if (deltaTime !== 0) {
      const task = tasks.find(t => t.id === dragStart.taskId);
      if (task) {
        onTaskUpdate(task.id, {
          start: Math.max(0, task.start + deltaTime)
        });
        setDragStart({ x: e.clientX, taskId: task.id });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove as any);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove as any);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div className={`glass-morphism rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Timeline Progetti</h3>
        <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Ultimo aggiornamento: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative overflow-x-auto overflow-y-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Timeline Header */}
        <div className="flex mb-4 sticky top-0 z-10">
          <div className="w-64 flex-shrink-0 pr-4">
            <div className="text-sm font-semibold text-white">Attività</div>
          </div>
          <div className="flex-1 relative">
            <div className="flex">
              {Array.from({ length: Math.ceil(maxTime) + 1 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-xs text-muted-foreground text-center"
                  style={{ width: `${timeScale}px` }}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="flex items-center group cursor-pointer"
              style={{ height: `${rowHeight}px` }}
              onClick={() => onTaskClick?.(task)}
            >
              {/* Task Info */}
              <div className="w-64 flex-shrink-0 pr-4 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {getStatusIcon(task.status)}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">
                      {task.name}
                    </div>
                    {task.assignee && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {task.assignee}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Task Bar */}
              <div className="flex-1 relative">
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-8 rounded-lg border-2 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg ${getStatusColor(task.status)} ${
                    selectedTask === task.id ? 'ring-2 ring-white/50' : ''
                  }`}
                  style={{
                    left: `${task.start * timeScale}px`,
                    width: `${task.duration * timeScale}px`,
                    backgroundColor: task.color + '20',
                    borderColor: task.color + '80'
                  }}
                  onMouseDown={(e) => handleMouseDown(e, task.id)}
                >
                  {/* Progress Bar */}
                  <div
                    className="h-full rounded-md transition-all duration-300"
                    style={{
                      width: `${task.progress}%`,
                      backgroundColor: task.color + '60'
                    }}
                  />
                  
                  {/* Task Content */}
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    <span className="text-xs font-medium text-white truncate">
                      {task.name}
                    </span>
                    <span className="text-xs text-white/70">
                      {task.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="flex">
            <div className="w-64 flex-shrink-0"></div>
            <div className="flex-1 relative">
              {Array.from({ length: Math.ceil(maxTime) + 1 }, (_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 border-l border-white/10"
                  style={{ left: `${i * timeScale}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-muted-foreground">Completato</span>
        </div>
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 text-blue-400" />
          <span className="text-muted-foreground">In Corso</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400" />
          <span className="text-muted-foreground">In Ritardo</span>
        </div>
        <div className="flex items-center gap-2">
          <Pause className="w-4 h-4 text-gray-400" />
          <span className="text-muted-foreground">In Attesa</span>
        </div>
      </div>
    </div>
  );
};
