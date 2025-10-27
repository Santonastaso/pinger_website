import { ScrollAnimated } from '../components/ui/scroll-animated';
import { AnimatedBackground } from '../components/ui/animated-background';
import { Calendar, Users, MapPin, Plus, ExternalLink } from 'lucide-react';

const Projects = () => {

  const projects = [
    { 
      name: 'Scheduler', 
      description: 'Sistema di programmazione avanzato con automazione intelligente e aggiornamenti in tempo reale',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      demoUrl: 'https://santonastaso.github.io/scheduler_demo/',
      hasDemo: true
    },
    { 
      name: 'CRM', 
      description: 'Gestione delle relazioni con i clienti con analisi e approfondimenti',
      icon: Users,
      color: 'from-white to-gray-300',
      demoUrl: 'https://santonastaso.github.io/crm_demo/',
      hasDemo: true
    },
    { 
      name: 'Tracciabilità', 
      description: 'Soluzione completa di tracciamento e monitoraggio per le operazioni aziendali',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      demoUrl: 'https://santonastaso.github.io/tracc/',
      hasDemo: true
    },
    { 
      name: 'Altro', 
      description: 'Progetti innovativi aggiuntivi e soluzioni software personalizzate',
      icon: Plus,
      color: 'from-orange-500 to-red-500',
      hasDemo: false
    },
  ];

  return (
    <div className="w-full min-h-screen space-y-12 relative py-20">
      <AnimatedBackground variant="section" />

      {/* Header */}
      <ScrollAnimated fadeInDistance={60} delay={0}>
        <div className="relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Progetti
            </h1>
            <div className="h-0.5 w-20 bg-white mx-auto rounded-full mt-4"></div>
          </div>
        </div>
      </ScrollAnimated>
      
      {/* Projects Grid */}
      <ScrollAnimated fadeInDistance={50} delay={200}>
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden glass-morphism rounded-xl magnetic-hover cursor-pointer p-6 animate-fade-in-up shimmer-effect depth-float"
              style={{ 
                animationDelay: `${0.1 + (index * 0.1)}s`,
                animationDuration: `${6 + (index * 0.5)}s`
              }}
            >
              {/* Magnetic glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-lg group-hover:text-white transition-all duration-500 mb-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-white/20 to-white/10 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 floating-orb">
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{project.name}</span>
                </div>
                <p className="text-sm group-hover:text-white/90 transition-colors duration-500 leading-relaxed text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Demo Button */}
                {project.hasDemo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 magnetic-hover shimmer-effect"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Vedi Demo
                  </a>
                )}
              </div>
              
              {/* Advanced bottom indicator */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-white to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </ScrollAnimated>

      {/* Stats Section */}
      <ScrollAnimated fadeInDistance={50} delay={600}>
        <div className="relative z-10 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "Progetti Completati" },
              { value: "100%", label: "Soddisfazione Clienti" },
              { value: "24/7", label: "Supporto Disponibile" }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimated>
    </div>
  );
};

export default Projects;
