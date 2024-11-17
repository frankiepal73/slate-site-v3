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
  const timerRef = useRef<NodeJS.Timeout>();
  const compactTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    compactTimerRef.current = setTimeout(() => {
      setIsCompact(true);
    }, 5000);

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

  if (timeLeft <= 0) return null;

  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in transition-all duration-300 ease-in-out">
      <div className={`
        flex items-center justify-center gap-2.5
        bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl 
        border border-white/20 shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-white/5
        ${isCompact 
          ? 'px-3.5 py-3.5 rounded-full' 
          : 'px-5 md:px-6 py-3 rounded-full w-[90vw] md:w-auto'
        }
      `}>
        <Timer className={`
          text-blue-400 flex-shrink-0 transition-all duration-300
          ${isCompact ? 'w-4 h-4' : 'w-5 h-5'}
        `} />
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