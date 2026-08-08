import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, ChevronDown } from 'lucide-react';
import { Book3DViewer } from './Book3DViewer';

interface HeroSectionProps {
  coverImageUrl: string;
  onOpenReaderModal: () => void;
  onScrollToCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  coverImageUrl,
  onOpenReaderModal,
  onScrollToCheckout,
}) => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Lighting & Grid Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#d4af37]/15 via-[#3b82f6]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#d4af37]/40 shadow-xl backdrop-blur-md mb-5">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gradient-gold">
            LANCEMENT OFFICIEL • LUNDI 10 AOÛT
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          De zéro à votre liberté financière,{' '}
          <span className="text-gradient-gold font-serif italic font-normal">
            grâce à un seul manuscrit.
          </span>
        </h1>

        {/* 3D BOOK PRESENTATION IMAGE - PLACED DIRECTLY AFTER THE TITLE */}
        <div className="my-8 md:my-10 w-full flex justify-center items-center relative group">
          <Book3DViewer
            coverImageUrl={coverImageUrl}
            onOpenReaderModal={onOpenReaderModal}
          />
        </div>

        {/* Subtitle / Hook */}
        <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Et si votre chemin vers la liberté financière tenait entre les pages d'un seul livre ? Rendez-vous le <strong className="text-[#d4af37]">Lundi 10 Août</strong> pour le lancement officiel.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          {/* Primary Launch Registration Button */}
          <button
            onClick={onScrollToCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black shadow-xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>S'inscrire au Lancement (10 Août)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Sample Reader Button */}
          <button
            onClick={onOpenReaderModal}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-[#d4af37]/40 transition-all flex items-center justify-center gap-2.5 shadow-md"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>Feuilleter l'extrait</span>
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
          <span>Réservation prioritaire gratuite • Lancement officiel le Lundi 10 Août</span>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-10 flex justify-center">
        <a
          href="#manifeste"
          className="p-2 text-zinc-500 hover:text-[#d4af37] transition-colors animate-bounce"
          aria-label="Découvrir la suite"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
