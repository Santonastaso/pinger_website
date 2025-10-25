import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './card';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  className?: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  className = "",
  delay = 0
}) => {
  const cardContent = (
    <Card className={`
      group relative overflow-hidden
      bg-white/5 backdrop-blur-sm rounded-lg
      hover:bg-white/10
      transition-all duration-300 cursor-pointer 
      hover:scale-105 hover:-translate-y-1
      animate-fade-in-up
      ${className}
    `} style={{ animationDelay: `${delay}s` }}>
      <CardHeader className="p-4 pb-3">
        <CardTitle className="flex items-center gap-2 text-lg group-hover:text-white transition-all duration-300">
          {Icon && (
            <div className="p-1.5 rounded-md bg-white/20 group-hover:bg-white/30 transition-all duration-300">
              <Icon className="h-4 w-4 text-white" />
            </div>
          )}
          <span className="font-semibold">{title}</span>
        </CardTitle>
        <CardDescription className="text-sm group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      {/* Subtle hover indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block text-primary hover:no-underline transition-all duration-300">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default InfoCard;
