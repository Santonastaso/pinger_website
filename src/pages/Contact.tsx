import InfoCard from '../components/ui/info-card';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full space-y-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground text-lg mt-2">
          Get in touch with us for your software development needs.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Email"
          description="info@pingersoftware.it"
          icon={Mail}
          href="mailto:info@pingersoftware.it"
        />
        
        <InfoCard
          title="Phone"
          description="+39 3318881201"
          icon={Phone}
          href="tel:+393318881201"
        />
      </div>
    </div>
  );
};

export default Contact;
