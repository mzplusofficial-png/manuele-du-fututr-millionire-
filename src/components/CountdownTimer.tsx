import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { FIXED_LAUNCH_TIMESTAMP, getLaunchTimeLeft } from '../constants/launch';

interface CountdownTimerProps {
  targetTimestamp?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTimestamp = FIXED_LAUNCH_TIMESTAMP,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => getLaunchTimeLeft(targetTimestamp));

  useEffect(() => {
    const calculateTime = () => {
      setTimeLeft(getLaunchTimeLeft(targetTimestamp));
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="mt-5 flex flex-col items-center justify-center space-y-2.5">
      {/* Label */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] shadow-lg">
        <Timer className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
        <span className="uppercase tracking-wider">COMPTE À REBOURS AVANT LA SORTIE</span>
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
