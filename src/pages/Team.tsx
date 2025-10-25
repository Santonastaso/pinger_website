import InfoCard from '../components/ui/info-card';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    { 
      name: 'Giovanni Rossetto', 
      title: 'CEO',
      description: 'Chief Executive Officer',
      image: '/pinger_website/photo_giovanni.jpeg',
      linkedin: 'https://www.linkedin.com/in/giovanni-rossetto-515103200/'
    },
    { 
      name: 'Andrea Santonastaso', 
      title: 'CTO',
      description: 'Chief Technology Officer',
      image: '/pinger_website/photo_andrea.jpeg',
      linkedin: 'https://www.linkedin.com/in/andrea-santonastaso/'
    },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground text-lg mt-2">
          Meet our leadership team driving innovation and excellence.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative">
            <InfoCard
              title={member.name}
              description={`${member.title} - ${member.description}`}
            />
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full overflow-hidden border-2 border-border">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute bottom-4 right-4">
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
