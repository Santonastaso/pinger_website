import { ScrollAnimated } from '../components/ui/scroll-animated';
import { Calendar, Users, MapPin, Plus, ExternalLink } from 'lucide-react';
import ProjectShowcase from '../components/ui/project-showcase';

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
    <div className="w-full min-h-screen space-y-16 py-20 px-4 relative z-50">
      {/* Header */}
      <ScrollAnimated fadeInDistance={60} delay={0}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Progetti
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-white via-slate-300 to-white mx-auto rounded-full"></div>
        </div>
      </ScrollAnimated>
      
      {/* Projects Grid */}
      <ScrollAnimated fadeInDistance={50} delay={200}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} index={index} />
          ))}
        </div>
      </ScrollAnimated>

      {/* Stats Section */}
      <ScrollAnimated fadeInDistance={50} delay={600}>
        <div className="mt-12">
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
