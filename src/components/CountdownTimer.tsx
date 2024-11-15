import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
  onComplete: () => void;
}

export function CountdownTimer({ initialMinutes, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('discountTimeLeft');
    if (stored) {
      const remaining = parseInt(stored, 10) - Date.now();
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        sessionStorage.removeItem('discountTimeLeft');
        sessionStorage.removeItem('appliedDiscount');
        onComplete();
      }
    } else {
      const duration = initialMinutes * 60 * 1000;
      const expiryTime = Date.now() + duration;
      sessionStorage.setItem('discountTimeLeft', expiryTime.toString());
      setTimeLeft(duration);
    }
  }, [initialMinutes, onComplete]);

  useEffect(() => {
    const compactTimer = setTimeout(() => {
      setIsCompact(true);
    }, 5000);

    return () => clearTimeout(compactTimer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      sessionStorage.removeItem('discountTimeLeft');
      sessionStorage.removeItem('appliedDiscount');
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          sessionStorage.removeItem('discountTimeLeft');
          sessionStorage.removeItem('appliedDiscount');
          onComplete();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  if (timeLeft <= 0) return null;

  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="fixed top-24 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 animate-fade-in">
      <div 
        className={`
          flex items-center justify-center md:justify-start gap-2 md:gap-3 
          bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl 
          border border-white/20 shadow-lg transition-all duration-300 ease-in-out
          w-full md:w-auto
          ${isCompact ? 'px-4 py-2 rounded-lg' : 'px-4 md:px-6 py-3 rounded-lg md:rounded-full'}
        `}
      >
        <Timer className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <div className="text-white flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
          <span className="font-bold tabular-nums">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
          {!isCompact && (
            <span className="text-white/70">left to claim your 10% discount!</span>
          )}
        </div>
      </div>
    </div>
  );
}