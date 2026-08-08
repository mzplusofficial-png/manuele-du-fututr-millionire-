import React, { useState, useEffect } from 'react';
import { Timer, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string; // ISO date string or default to Monday 10 Aug 2026 20:00 GMT+1
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDateStr = '2026-08-10T20:00:00+01:00',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(targetDateStr).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr]);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="mt-5 flex flex-col items-center justify-center space-y-2.5">
      {/* Label without explicit hour text as requested */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] shadow-lg">
        <Timer className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
        <span className="uppercase tracking-wider">COMPTE À REBOURS AVANT LA SORTIE OFFICIELLE</span>
      </div>

      {/* Countdown Grid */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Days */}
        <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#09090e] border border-[#d4af37]/30 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent opacity-50" />
          <span className="text-lg sm:text-xl font-bold font-mono text-gradient-gold relative z-10">
            {pad(timeLeft.days)}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium relative z-10">
            Jours
          </span>
        </div>

        <span className="text-zinc-600 font-bold text-lg sm:text-xl font-mono">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#09090e] border border-[#d4af37]/30 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent opacity-50" />
          <span className="text-lg sm:text-xl font-bold font-mono text-gradient-gold relative z-10">
            {pad(timeLeft.hours)}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium relative z-10">
            Heures
          </span>
        </div>

        <span className="text-zinc-600 font-bold text-lg sm:text-xl font-mono">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#09090e] border border-[#d4af37]/30 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent opacity-50" />
          <span className="text-lg sm:text-xl font-bold font-mono text-gradient-gold relative z-10">
            {pad(timeLeft.minutes)}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium relative z-10">
            Min
          </span>
        </div>

        <span className="text-zinc-600 font-bold text-lg sm:text-xl font-mono">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-[#09090e] border border-yellow-500/50 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/15 to-transparent opacity-60" />
          <span className="text-lg sm:text-xl font-bold font-mono text-yellow-400 relative z-10">
            {pad(timeLeft.seconds)}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium relative z-10">
            Sec
          </span>
        </div>
      </div>
    </div>
  );
};
