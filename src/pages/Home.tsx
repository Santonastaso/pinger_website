import { Code, Database, Zap, Shield } from 'lucide-react';
import { ScrollAnimated } from '../components/ui/scroll-animated';
import { ParticleText } from '../components/ui/particle-text';
import { AnimatedBackground } from '../components/ui/animated-background';

const Home = () => {

  const features = [
    { icon: Code, title: "Sviluppo Personalizzato", description: "Soluzioni su misura per le tue esigenze aziendali" },
    { icon: Database, title: "Gestione Dati", description: "Sistemi avanzati per l'organizzazione dei dati" },
    { icon: Zap, title: "Prestazioni", description: "Applicazioni veloci e ottimizzate" },
    { icon: Shield, title: "Sicurezza", description: "Sicurezza e affidabilità di livello enterprise" }
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden perspective-container">
      {/* Sophisticated animated background */}
      <AnimatedBackground variant="home" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-20 min-h-screen">
        {/* Main hero content */}
        <ScrollAnimated fadeInDistance={80} delay={0}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <ParticleText 
                text="Benvenuto"
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
                delay={500}
              />
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full shimmer-effect"></div>
            </div>
          </div>
        </ScrollAnimated>

        {/* Feature cards */}
        <ScrollAnimated fadeInDistance={60} delay={200}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-full">
            {features.map((feature, index) => (
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
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold">{feature.title}</span>
                  </div>
                  <p className="text-sm group-hover:text-white/90 transition-colors duration-500 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                
                {/* Advanced bottom indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-white to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </ScrollAnimated>

        {/* Call to action */}
        <ScrollAnimated fadeInDistance={50} delay={800}>
          <div className="mt-16">
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group relative px-10 py-4 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white rounded-2xl text-black font-semibold text-lg transition-all duration-500 magnetic-hover overflow-hidden shimmer-effect"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Inizia Ora
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </ScrollAnimated>
      </div>
    </div>
  );
};

export default Home;
