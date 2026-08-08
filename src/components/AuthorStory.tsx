import React from 'react';
import { Quote, Sparkles, Users, Award } from 'lucide-react';

export const AuthorStory: React.FC = () => {
  return (
    <div id="histoire-auteur" className="w-full max-w-3xl mx-auto my-12 px-4 scroll-mt-28">
      {/* Container with gold gradient border & ambient dark background */}
      <div className="relative rounded-2xl bg-[#09090e]/90 border border-[#d4af37]/35 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden group">
        {/* Subtle Ambient Gold Glow Background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#eab308]/10 blur-3xl pointer-events-none" />

        {/* Decorative Quote Mark Watermark */}
        <Quote className="absolute top-4 right-6 w-20 h-20 text-[#d4af37]/10 pointer-events-none" />

        {/* Header Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa7a1e] p-[1px] shadow-lg shrink-0">
            <div className="w-full h-full bg-[#09090e] rounded-[11px] flex items-center justify-center">
              <Quote className="w-4 h-4 text-[#d4af37]" />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold block">
              Le Mot de l'Auteur
            </span>
            <span className="text-[11px] text-zinc-400 font-medium flex items-center gap-1.5">
              <Users className="w-3 h-3 text-[#d4af37]" />
              Fondateur de Millionaire Zone (+150k membres)
            </span>
          </div>
        </div>

        {/* Story Text Content */}
        <div className="space-y-4 text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-bold font-serif italic text-white border-l-2 border-[#d4af37] pl-4 py-0.5">
            « J'étais comme toi. »
          </p>

          <p className="text-zinc-300">
            Je ne suis pas né riche. Parti de zéro, sans un centime, j'ai passé des mois à courir après l'argent, mais les échecs ne cessaient de me suivre.
          </p>

          <p className="text-zinc-300">
            Aujourd'hui, je suis totalement libre financièrement et, à travers <strong className="text-white font-semibold">Millionaire Zone</strong>, j'accompagne une communauté de plus de <strong className="text-[#d4af37] font-semibold">150 000 personnes</strong> qui suivent ce même chemin vers leur liberté financière.
          </p>

          <p className="pt-2 text-white font-medium bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
            Et si j'ai pu obtenir ma liberté financière en partant de zéro, toi aussi tu peux le faire. Et dans <span className="text-gradient-gold font-bold">« Le Manuel du futur Millionnaire »</span>, je vais te montrer comment.
          </p>
        </div>

        {/* Bottom Community Stats Accent */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f5d061] flex items-center justify-center text-[10px] font-bold text-black border border-[#09090e]">M</div>
              <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white border border-[#09090e]">Z</div>
              <div className="w-7 h-7 rounded-full bg-yellow-600/80 flex items-center justify-center text-[10px] font-bold text-white border border-[#09090e]">150k</div>
            </div>
            <span className="font-medium text-zinc-300">+150 000 personnes inspirées</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#d4af37] font-semibold text-[11px] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manuel Officiel 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
