import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fadeInDistance?: number;
  fadeOutDistance?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    fadeInDistance = 50
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on element position
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const viewportCenter = windowHeight / 2;
        
        // Calculate scroll progress (0 = element entering from bottom, 1 = element leaving from top)
        const progress = Math.max(0, Math.min(1, 
          (viewportCenter - elementTop) / (windowHeight + elementHeight)
        ));
        
        setScrollProgress(progress);
        
        // Determine if element should be visible based on threshold
        const shouldBeVisible = entry.isIntersecting && entry.intersectionRatio >= threshold;
        
        if (shouldBeVisible) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    elementRef,
    isVisible,
    scrollProgress,
    // Calculate opacity based on scroll progress
    opacity: Math.max(0, Math.min(1, 
      isVisible ? 
        Math.max(0, 1 - (scrollProgress - 0.5) * 2) : // Fade out as it goes up
        Math.max(0, scrollProgress * 2) // Fade in as it comes from bottom
    )),
    // Calculate transform based on scroll progress
    transform: `translateY(${(1 - scrollProgress) * fadeInDistance}px) scale(${0.95 + scrollProgress * 0.05})`
  };
};
