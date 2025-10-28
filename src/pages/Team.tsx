import { Linkedin, Award, Users, Target } from 'lucide-react';
import { ScrollAnimated } from '../components/ui/scroll-animated';

const Team = () => {

  const teamMembers = [
    { 
      name: 'Giovanni Rossetto', 
      title: 'CEO',
      description: 'Chief Executive Officer',
      image: '/photo_giovanni.jpeg',
      linkedin: 'https://www.linkedin.com/in/giovanni-rossetto-515103200/'
    },
    { 
      name: 'Andrea Santonastaso', 
      title: 'CTO',
      description: 'Chief Technology Officer',
      image: '/photo_andrea.jpeg',
      linkedin: 'https://www.linkedin.com/in/andrea-santonastaso/'
    },
  ];

  const stats = [
    { icon: Users, value: "3+", label: "Anni di Esperienza" },
    { icon: Award, value: "10+", label: "Progetti Consegnati" },
    { icon: Target, value: "100%", label: "Soddisfazione Clienti" }
  ];

  return (
    <div className="w-full min-h-screen space-y-12 py-20 px-4 relative z-50">
      {/* Header */}
      <ScrollAnimated fadeInDistance={60} delay={0}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Squadra
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-white via-slate-300 to-white mx-auto rounded-full"></div>
        </div>
      </ScrollAnimated>

      {/* Stats Section */}
      <ScrollAnimated fadeInDistance={50} delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group smooth-fade-in" style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:bg-white/30 transition-all duration-300 pulse-ring">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollAnimated>
      
      {/* Team Members */}
      <ScrollAnimated fadeInDistance={50} delay={400}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative smooth-fade-in" style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}>
              <div className="glass-morphism-strong rounded-2xl p-6 card-hover">
                {/* Profile Image */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-white/90 text-black hover:scale-110 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-all duration-300 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-sm font-semibold text-white mb-1">
                      {member.title}
                    </div>
                    <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* Professional bottom indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimated>

    </div>
  );
};

export default Team;
