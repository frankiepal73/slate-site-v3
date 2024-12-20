import React, { useState, useEffect, useRef } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
  onComplete: () => void;
}

export function CountdownTimer({ initialMinutes, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const stored = sessionStorage.getItem('discountTimeLeft');
    if (stored) {
      const remaining = parseInt(stored, 10) - Date.now();
      return remaining > 0 ? remaining : 0;
    }
    const duration = initialMinutes * 60 * 1000;
    const expiryTime = Date.now() + duration;
    sessionStorage.setItem('discountTimeLeft', expiryTime.toString());
    return duration;
  });

  const [isCompact, setIsCompact] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const compactTimerRef = useRef<NodeJS.Timeout>();
  const hasPassed = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          hasPassed.current = true;
        }
        setIsVisible(hasPassed.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Doubled from 10000 to 20000 (20 seconds)
    compactTimerRef.current = setTimeout(() => {
      setIsCompact(true);
    }, 20000);

    return () => {
      if (compactTimerRef.current) {
        clearTimeout(compactTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      sessionStorage.removeItem('discountTimeLeft');
      onComplete();
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          sessionStorage.removeItem('discountTimeLeft');
          onComplete();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeLeft, onComplete]);

  if (timeLeft <= 0 || !isVisible) return null;

  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div 
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in transition-all duration-300 ease-in-out"
      id="countdown-timer"
      data-gtm-category="Timer"
      data-gtm-action="view"
      data-gtm-label="Discount Timer"
    >
      <div className={`
        flex items-center justify-center gap-3
        bg-white/80 backdrop-blur-xl 
        border border-gray-200 shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-white/90
        ${isCompact 
          ? 'px-4 py-2.5 rounded-full min-w-[160px]' 
          : 'px-6 py-3 rounded-full min-w-[300px]'
        }
      `}>
        <Timer 
          className={`
            text-primary-500 flex-shrink-0 transition-all duration-300
            ${isCompact ? 'w-4 h-4' : 'w-5 h-5'}
          `} 
        />
        <div className="text-gray-900 flex items-center gap-2 whitespace-nowrap">
          <span 
            className={`font-bold tabular-nums ${isCompact ? 'text-sm' : 'text-base'}`}
            id="countdown-timer-value"
            data-gtm-category="Timer"
            data-gtm-action="update"
            data-gtm-label="Timer Value"
          >
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
          {!isCompact && (
            <span 
              className="text-gray-600 text-base"
              id="countdown-timer-text"
              data-gtm-category="Timer"
              data-gtm-action="view"
              data-gtm-label="Timer Text"
            >
              left to claim your 20% discount!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}