import React from 'react';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fadeInDistance?: number;
  fadeOutDistance?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({
  children,
  className = '',
  delay = 0,
  fadeInDistance = 50,
  fadeOutDistance = 50,
  threshold = 0.1,
  triggerOnce = false
}) => {
  const { elementRef, opacity, transform } = useScrollAnimation({
    threshold,
    triggerOnce,
    fadeInDistance,
    fadeOutDistance
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity,
        transform,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
