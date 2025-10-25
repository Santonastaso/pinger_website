import { useEffect, useState } from 'react';
import { Linkedin, Award, Users, Target } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    { icon: Users, value: "10+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Projects Delivered" },
    { icon: Target, value: "100%", label: "Client Satisfaction" }
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
            Team
          </h1>
          <div className="h-0.5 w-20 bg-white mx-auto rounded-full mt-4 animate-scale-in animate-delay-200"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 animate-fade-in-up animate-delay-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:bg-white/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team Members */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="group relative animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
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
              
              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Team;
