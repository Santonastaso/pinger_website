import { useEffect, useState } from 'react';
import InfoCard from '../components/ui/info-card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="w-full space-y-12 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-500/3 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      {/* Header */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contatti
          </h1>
          <div className="h-0.5 w-20 bg-white mx-auto rounded-full mt-4 animate-scale-in animate-delay-200"></div>
        </div>
      </div>
      
      {/* Contact Methods and Form - Side by Side */}
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
              delay={method.delay}
            />
          ))}
        </div>

        {/* Contact Form - Right Side */}
        <div className="animate-fade-in-up animate-delay-500">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
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
                className="w-full px-6 py-2 bg-white hover:bg-white/90 rounded-lg text-black font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
