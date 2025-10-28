import { Code, Database, Zap, Shield } from 'lucide-react';
import { ScrollAnimated } from '../components/ui/scroll-animated';
import { ParticleText } from '../components/ui/particle-text';
import { InteractiveParticles } from '../components/ui/interactive-particles';

const Home = () => {

  const features = [
    { icon: Code, title: "Sviluppo Personalizzato", description: "Soluzioni su misura per le tue esigenze aziendali" },
    { icon: Database, title: "Gestione Dati", description: "Sistemi avanzati per l'organizzazione dei dati" },
    { icon: Zap, title: "Prestazioni", description: "Applicazioni veloci e ottimizzate" },
    { icon: Shield, title: "Sicurezza", description: "Sicurezza e affidabilità di livello enterprise" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-50">
        {/* Main hero content */}
        <ScrollAnimated fadeInDistance={60} delay={0}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient relative z-50">
                Benvenuto
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-white via-slate-300 to-white mx-auto rounded-full"></div>
            </div>
          </div>
        </ScrollAnimated>

        {/* Feature cards */}
        <ScrollAnimated fadeInDistance={50} delay={200}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
            {features.map((feature, index) => (
              <InteractiveParticles key={index} particleCount={8}>
                <div
                  className="group relative glass-morphism-strong rounded-2xl card-hover cursor-pointer p-8 smooth-fade-in"
                  style={{ 
                    animationDelay: `${0.2 + (index * 0.1)}s`
                  }}
                >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 text-lg mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/20 to-slate-400/20 group-hover:from-white/30 group-hover:to-slate-400/30 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold text-white">{feature.title}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                  {/* Professional bottom indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                </div>
              </InteractiveParticles>
            ))}
          </div>
        </ScrollAnimated>

        {/* Call to action */}
        <ScrollAnimated fadeInDistance={50} delay={600}>
          <div className="mt-20">
            <InteractiveParticles particleCount={16}>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group relative px-12 py-4 bg-gradient-to-r from-white to-slate-200 hover:from-slate-100 hover:to-slate-300 rounded-2xl text-black font-semibold text-lg transition-all duration-300 gentle-hover overflow-hidden holographic-border"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Inizia Ora
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </InteractiveParticles>
          </div>
        </ScrollAnimated>
    </div>
  );
};

export default Home;
