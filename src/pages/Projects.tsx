import InfoCard from '../components/ui/info-card';

const Projects = () => {
  const projects = [
    { name: 'Scheduler', description: 'Advanced scheduling system' },
    { name: 'CRM', description: 'Customer relationship management' },
    { name: 'Tracciabilità', description: 'Tracking and monitoring solution' },
    { name: 'Altro', description: 'Additional projects and solutions' },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground text-lg mt-2">
          Explore our portfolio of software solutions and projects.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <InfoCard
            key={index}
            title={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
