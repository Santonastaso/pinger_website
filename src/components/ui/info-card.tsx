import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './card';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  className = "" 
}) => {
  const cardContent = (
    <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          {Icon && <Icon className="h-6 w-6" />}
          {title}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block text-primary hover:underline transition-colors">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default InfoCard;
