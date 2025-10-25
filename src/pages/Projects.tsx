import { useEffect, useState } from 'react';

import InfoCard from '../components/ui/info-card';
import { Calendar, Users, MapPin, Plus } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    { 
      name: 'Scheduler', 
      description: 'Sistema di programmazione avanzato con automazione intelligente e aggiornamenti in tempo reale',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'CRM', 
      description: 'Gestione delle relazioni con i clienti con analisi e approfondimenti',
      icon: Users,
      color: 'from-white to-gray-300'
    },
    { 
      name: 'Tracciabilità', 
      description: 'Soluzione completa di tracciamento e monitoraggio per le operazioni aziendali',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Altro', 
      description: 'Progetti innovativi aggiuntivi e soluzioni software personalizzate',
      icon: Plus,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="w-full space-y-12 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-500/3 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      {/* Header */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Progetti
          </h1>
          <div className="h-0.5 w-20 bg-white mx-auto rounded-full mt-4 animate-scale-in animate-delay-200"></div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <InfoCard
            key={index}
            title={project.name}
            description={project.description}
            icon={project.icon}
            delay={(index + 1) * 0.1}
            className="h-full"
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-12 animate-fade-in-up animate-delay-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              10+
            </div>
            <div className="text-muted-foreground">Progetti Completati</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-muted-foreground">Soddisfazione Clienti</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-muted-foreground">Supporto Disponibile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
