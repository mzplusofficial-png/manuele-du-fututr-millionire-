import React from 'react';
import { CheckCircle2, Sparkles, Target } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    "Vous voulez atteindre votre liberté financière.",
    "Vous refusez de vous contenter d'une vie médiocre dans un monde rempli de possibilités.",
    "Vous êtes fatigué de travailler dur sans voir votre situation financière réellement changer.",
    "Vous partez de zéro et vous pensez que votre manque de capital vous empêche de commencer.",
    "Vous voulez apprendre à construire votre richesse plutôt que de simplement courir après l'argent.",
    "Vous avez déjà essayé plusieurs choses sans obtenir les résultats que vous espériez."
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-10 px-4">
      <div className="relative rounded-2xl bg-[#09090e]/95 border border-[#d4af37]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-60 h-60 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa7a1e] p-[1px] shadow-lg shrink-0">
            <div className="w-full h-full bg-[#09090e] rounded-[11px] flex items-center justify-center">
              <Target className="w-5 h-5 text-[#d4af37]" />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold block">
              Est-ce fait pour vous ?
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
              Ce manuel est écrit pour vous si...
            </h3>
          </div>
        </div>

        {/* List of Statements */}
        <div className="space-y-3.5 mb-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-[#d4af37]/30 transition-all duration-200 group"
            >
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Concluding Golden Callout */}
        <div className="relative rounded-xl bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-transparent p-5 border border-[#d4af37]/40 shadow-xl flex items-center gap-4">
          <div className="shrink-0 p-2.5 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37]">
            <Sparkles className="w-6 h-6" />
          </div>
          <p className="text-sm sm:text-base text-white font-bold leading-relaxed">
            Si vous vous êtes reconnu dans ne serait-ce qu'une seule de ces phrases, alors <span className="text-gradient-gold font-serif text-base sm:text-lg italic underline underline-offset-4 decoration-[#d4af37]">ce manuel a été écrit pour vous</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
