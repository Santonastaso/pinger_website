import { useEffect, useState } from 'react';
import { Code, Database, Zap, Shield } from 'lucide-react';
import InfoCard from '../components/ui/info-card';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Code, title: "Sviluppo Personalizzato", description: "Soluzioni su misura per le tue esigenze aziendali" },
    { icon: Database, title: "Gestione Dati", description: "Sistemi avanzati per l'organizzazione dei dati" },
    { icon: Zap, title: "Prestazioni", description: "Applicazioni veloci e ottimizzate" },
    { icon: Shield, title: "Sicurezza", description: "Sicurezza e affidabilità di livello enterprise" }
  ];

  return (
    <div className="w-full min-h-[calc(100vh-20rem)] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] px-4">
        {/* Main hero content */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Benvenuto
            </h1>
            <div className="h-0.5 w-24 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
          </div>
          
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-full">
          {features.map((feature, index) => (
            <InfoCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={(index + 1) * 0.1}
              className="h-full"
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 animate-fade-in-up animate-delay-500">
          <button className="px-8 py-3 bg-white hover:bg-white/90 rounded-lg text-black font-medium text-lg transition-all duration-300 hover:scale-105">
            Inizia Ora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
