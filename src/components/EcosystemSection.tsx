import React from 'react';
import { ECOSYSTEM_FEATURES } from '../data/manuscriptData';
import { BookOpen, Headphones, FileSpreadsheet, ShieldCheck, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6 text-[#d4af37]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#d4af37]" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-[#d4af37]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
};

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosysteme" className="py-24 relative bg-[#040406] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
            <span>UN ÉCOSYSTÈME COMPLET</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Tout ce dont vous avez besoin pour passer de la théorie à l'exécution.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Une expérience multiformat conçue pour maximiser votre rétention et accélérer votre transformation.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#08080c] border border-zinc-800/90 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full blur-xl group-hover:bg-[#d4af37]/15 transition-colors pointer-events-none" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#d4af37]/50 transition-colors">
                    {iconMap[feature.icon]}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                    {feature.valueTag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center gap-2 text-[11px] font-medium text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
