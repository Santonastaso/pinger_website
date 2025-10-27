import InfoCard from '../components/ui/info-card';
import { ScrollAnimated } from '../components/ui/scroll-animated';
import { AnimatedBackground } from '../components/ui/animated-background';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {

  const contactMethods = [
    {
      title: "Email",
      description: "info@pingersoftware.it",
      icon: Mail,
      href: "mailto:info@pingersoftware.it",
      delay: 0.1
    },
    {
      title: "Telefono",
      description: "+39 3318881201",
      icon: Phone,
      href: "tel:+393318881201",
      delay: 0.2
    },
    {
      title: "Posizione",
      description: "Italia",
      icon: MapPin,
      delay: 0.3
    },
    {
      title: "Tempo di Risposta",
      description: "Entro 24 ore",
      icon: Clock,
      delay: 0.4
    }
  ];

  return (
    <div className="w-full min-h-screen space-y-12 relative py-20">
      <AnimatedBackground variant="section" />

      {/* Header */}
      <ScrollAnimated fadeInDistance={60} delay={0}>
        <div className="relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contatti
            </h1>
            <div className="h-0.5 w-20 bg-white mx-auto rounded-full mt-4"></div>
          </div>
        </div>
      </ScrollAnimated>
      
      {/* Contact Methods and Form - Side by Side */}
      <ScrollAnimated fadeInDistance={50} delay={200}>
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Contact Methods Grid - Left Side */}
          <div className="grid grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <InfoCard
                key={index}
                title={method.title}
                description={method.description}
                icon={method.icon}
                href={method.href}
                delay={0.1 + (index * 0.1)}
              />
            ))}
          </div>

          {/* Contact Form - Right Side */}
          <div className="glass-morphism rounded-xl p-6 shimmer-effect magnetic-hover">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Inviaci un Messaggio</h2>
              <p className="text-muted-foreground text-sm">Ti risponderemo il prima possibile</p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    placeholder="tua@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Oggetto</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  placeholder="Di cosa si tratta?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Messaggio</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Raccontaci del tuo progetto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="group w-full px-6 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white rounded-xl text-black font-semibold transition-all duration-500 magnetic-hover overflow-hidden shimmer-effect flex items-center justify-center gap-2"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Invia Messaggio
                </span>
              </button>
            </form>
          </div>
        </div>
      </ScrollAnimated>
    </div>
  );
};

export default Contact;
