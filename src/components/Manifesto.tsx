import React from 'react';
import { Shield, Cpu, KeyRound, Sparkles, Compass, TrendingUp } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifeste" className="py-24 relative bg-[#040406] border-y border-zinc-900 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
            <span>LE MANIFESTE ÉDITORIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Pourquoi la plupart des gens travaillent toute leur vie sans jamais être réellement libres.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            La richesse n'est ni un hasard ni le fruit du labeur acharné. C'est une discipline d'ingénierie appliquée.
          </p>
        </div>

        {/* 2-Column Editorial Contrast Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1: The Old Paradigm */}
          <div className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-900 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
                LE PIÈGE TRADITIONNEL
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-4">
                L'Illusion du Labeur Linéaire
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                On vous a appris à étudier, travailler 40 heures par semaine pendant 40 ans, épargner les miettes et espérer profiter de la vie à la retraite. Ce modèle repose sur un postulat obsolète : l'échange de temps contre de l'argent.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <span>Plafond de verre sur vos revenus</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <span>Vulnerability totale face à l'inflation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <span>Dépendance absolue envers un seul emploie ou client</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Box 2: The Manuscript Paradigm */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0c0c12] to-[#08080a] border border-[#d4af37]/30 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="text-xs font-semibold tracking-widest text-gradient-gold uppercase mb-3">
                L'ANGLO-SAXON ARCHITECTURE
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                L'Ingénierie du Capital Scalable
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                Ce manuscrit révèle la méthode exacte pour concevoir des véhicules d'actifs numériques et financiers déconnectés de votre temps physique. Vous apprenez à devenir un maître allocationniste.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Effet de levier asymétrique (Code, Media, Capital)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Automatisations et systèmes d'accumulation passive</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Souveraineté et protection patrimoniale internationale</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#d4af37]/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">1. Déprogrammation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Recalibrer votre psychologie financière pour percevoir les opportunités là où les autres voient du risque.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#d4af37]/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">2. Effet de Levier</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Construire des actifs hautement scalables capables d'impacter des milliers de clients en simultané.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#d4af37]/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">3. Systématisation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Déléger l'exécution opérationnelle aux algorithmes, aux logiciels et aux protocoles financiers.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-[#d4af37]/30 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">4. Souveraineté</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Protéger votre capital, choisir votre lieu de vie et garantir une indépendance temporelle totale.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
