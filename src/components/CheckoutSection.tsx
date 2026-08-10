import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, ArrowRight, Bell, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { OFFICIAL_CTA_URL } from '../constants/links';
import { getLaunchTimeLeft } from '../constants/launch';

interface CheckoutSectionProps {
  onOpenReservationModal?: () => void;
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  onOpenReservationModal,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => getLaunchTimeLeft());

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(getLaunchTimeLeft());
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="checkout" className="py-24 relative bg-[#040406] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#d4af37]/40 text-[11px] font-semibold text-gradient-gold tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ÉVÉNEMENT EXCLUSIF • LANCEMENT OFFICIEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Rendez-vous le <span className="text-gradient-gold font-serif italic">Lundi 10 Août</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Le manuscrit sera révélé et accessible au grand public en quantité limitée. Rejoignez le cercle prioritaire sur WhatsApp pour réserver votre accès.
          </p>
        </div>

        {/* Launch Countdown Component */}
        <div className="max-w-xl mx-auto mb-12 grid grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 shadow-xl">
            <span className="block text-2xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Jours</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 shadow-xl">
            <span className="block text-2xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Heures</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 shadow-xl">
            <span className="block text-2xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Minutes</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 shadow-xl">
            <span className="block text-2xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Secondes</span>
          </div>
        </div>

        {/* Launch VIP Card Container */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0a0a0f] via-[#07070a] to-[#040406] border border-[#d4af37]/40 shadow-2xl overflow-hidden max-w-2xl mx-auto">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

          {/* VIP Registration Card */}
          <div className="space-y-8">
            
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Réservation Prioritaire du Manuscrit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Accès prioritaire garanti avant l'ouverture publique
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                <Bell className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-semibold text-[#d4af37]">Lancement Le 10 Août</span>
              </div>
            </div>

            {/* Exclusive Benefits */}
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Réservation directe & privilège WhatsApp</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Inclusion offerte de l'<strong>Édition Audio Masterclass HQ</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Accès au <strong>Cercle Restreint Millionaire Zone</strong></span>
              </div>
            </div>

            {/* Direct Reservation CTA Button */}
            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={OFFICIAL_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-sm font-extrabold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2.5 transition-all duration-300 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 fill-black" />
                <span>Je réserve mon accès au manuscrit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Guarantees */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 border-t border-zinc-900">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Contact direct WhatsApp • Réponses rapides</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Réservé aux esprits ambitieux</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

