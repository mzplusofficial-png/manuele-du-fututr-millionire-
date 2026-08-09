import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { Book3DViewer } from './Book3DViewer';
import { WHATSAPP_PREORDER_URL } from '../constants/whatsapp';

interface HeroSectionProps {
  coverImageUrl: string;
  onScrollToCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  coverImageUrl,
  onScrollToCheckout,
}) => {
  return (
    <section className="relative min-h-[calc(100vh-60px)] pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden flex flex-col justify-between items-center text-center">
      {/* Background Lighting & Grid Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#d4af37]/15 via-[#3b82f6]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center my-auto">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#d4af37]/40 shadow-xl backdrop-blur-md mb-4 sm:mb-5">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-gradient-gold">
            SORTIE OFFICIELLE • LUNDI 10 AOÛT
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] max-w-3xl mx-auto mb-4 sm:mb-6">
          De zéro à votre liberté financière,{' '}
          <span className="text-gradient-gold font-serif italic font-normal">
            grâce à un seul manuscrit.
          </span>
        </h1>

        {/* 3D BOOK PRESENTATION IMAGE (WITH TITLE UNDERNEATH) & COUNTDOWN TIMER */}
        <div className="w-full flex justify-center items-center relative group">
          <Book3DViewer coverImageUrl={coverImageUrl} />
        </div>

        {/* Primary Call To Action - Well-spaced CTA */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-2.5 w-full sm:w-auto">
          <a
            href={WHATSAPP_PREORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-extrabold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <span>Je réserve mon accès au manuscrit (30 Places Seulement)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Reassurance text */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Précommande prioritaire sans engagement • Sortie officielle le Lundi 10 Août</span>
          </div>
        </div>

        {/* Subtitle Hook */}
        <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto mt-5 sm:mt-6">
          Et si votre chemin vers la liberté financière tenait entre les pages d'un seul livre ? Rendez-vous le <strong className="text-[#d4af37]">Lundi 10 Août</strong>.
        </p>

      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-6 sm:mt-8 flex justify-center relative z-10">
        <a
          href="#pour-qui"
          className="flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-[#d4af37] transition-colors group"
          aria-label="Découvrir la suite"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-[#d4af37]">Découvrir la suite</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

