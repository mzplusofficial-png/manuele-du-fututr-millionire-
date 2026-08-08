import React, { useState } from 'react';
import { Trophy, Award, Sparkles, Zap, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';

interface GamificationSectionProps {
  xpPoints: number;
  onAddXp: (amount: number) => void;
  onScrollToCheckout: () => void;
}

const quizQuestions = [
  {
    id: 1,
    title: "1. Quel est votre mode d'action principal face aux opportunités financières ?",
    options: [
      { text: "J'attends une sécurité à 100% avant d'engager le moindre euro.", xp: 20, archetype: "Conservateur Prudent" },
      { text: "J'utilise mon propre épargne disponible progressivement.", xp: 50, archetype: "Investisseur Linéaire" },
      { text: "J'apprends à structurer le levier de la dette et des systèmes pour démultiplier les résultats.", xp: 100, archetype: "Stratège du Levier" }
    ]
  },
  {
    id: 2,
    title: "2. Comment gérez-vous l'allocation de votre actif le plus précieux : le temps ?",
    options: [
      { text: "Je troque mon temps contre un revenu horaire direct.", xp: 20, archetype: "Exécutant" },
      { text: "J'optimise mes tâches pour gagner 1 à 2 heures par jour.", xp: 50, archetype: "Gestionnaire" },
      { text: "Je bâtis des systèmes autonomes et des véhicules d'investissement à haut rendement.", xp: 100, archetype: "Architecte d'Empire" }
    ]
  },
  {
    id: 3,
    title: "3. Quelle est votre vision de l'écosystème 'Millionaire Zone' ?",
    options: [
      { text: "Un simple livre de théorie financière parmi tant d'autres.", xp: 20, archetype: "Observateur" },
      { text: "Un guide pratique pour structurer mes premiers investissements.", xp: 60, archetype: "Initié" },
      { text: "Le plan de bataille définitif pour bâtir ma souveraineté et ma liberté absolue.", xp: 100, archetype: "Futur Millionnaire" }
    ]
  }
];

export const GamificationSection: React.FC<GamificationSectionProps> = ({
  xpPoints,
  onAddXp,
  onScrollToCheckout,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['badge-1']);

  // Investment Simulator State
  const [monthlySaving, setMonthlySaving] = useState(500);
  const [durationYears, setDurationYears] = useState(10);
  const [useMethod, setUseMethod] = useState(true);

  const handleSelectOption = (xpGained: number, index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      onAddXp(250); // Reward 250 XP for completing the diagnostic
      if (!unlockedBadges.includes('badge-quiz')) {
        setUnlockedBadges([...unlockedBadges, 'badge-quiz', 'badge-strategist']);
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  // Calculate Projected Wealth
  const rate = useMethod ? 0.18 : 0.07; // 18% with method vs 7% traditional
  const months = durationYears * 12;
  const monthlyRate = rate / 12;
  const totalValue = Math.round(
    monthlySaving * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
  );
  const totalInvested = monthlySaving * months;
  const gain = totalValue - totalInvested;

  return (
    <section id="gamification" className="py-20 bg-gradient-to-b from-[#050508] via-[#08080f] to-[#040406] border-y border-zinc-900 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#d4af37]/40 text-[11px] font-semibold text-gradient-gold tracking-widest uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>EXPÉRIENCE INTERACTIVE • MILLIONNAIRE ZONE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Évaluez votre <span className="text-gradient-gold font-serif italic">Quotient de Liberté Financière</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Répondez au diagnostic express et simulez la puissance de démultiplication du capital grâce aux principes du Manuscrit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Diagnostic Quiz */}
          <div className="lg:col-span-7 bg-[#09090e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Diagnostic de Profil Financier</h3>
                  <p className="text-xs text-zinc-400">3 questions pour débloquer vos badges & XP</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-[#d4af37]">
                  {completed ? '100%' : `Étape ${currentQuestion + 1}/${quizQuestions.length}`}
                </span>
              </div>
            </div>

            {!completed ? (
              <div className="space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-zinc-100 leading-snug">
                  {quizQuestions[currentQuestion].title}
                </h4>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.xp, idx)}
                      className="w-full text-left p-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-[#d4af37]/50 transition-all duration-200 group flex items-start justify-between gap-4"
                    >
                      <span className="text-xs sm:text-sm text-zinc-200 group-hover:text-white font-medium leading-relaxed">
                        {option.text}
                      </span>
                      <span className="shrink-0 px-2.5 py-1 rounded-lg bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-bold border border-[#d4af37]/30">
                        +{option.xp} XP
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Diagnostic Completed Screen */
              <div className="text-center py-6 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa7a1e] flex items-center justify-center text-black mx-auto shadow-xl shadow-[#d4af37]/20">
                  <Trophy className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
                    DIAGNOSTIC COMPLÉTÉ • +250 XP DÉBLOQUÉS
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    Votre Profil : <span className="text-gradient-gold">Stratège du Levier Financier</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Vous avez la maturité nécessaire pour comprendre l'allocation stratégique du capital. Le manuscrit vous fournira les modèles exacts pour exécuter.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-[#d4af37]/30 max-w-md mx-auto flex items-center justify-around text-center">
                  <div>
                    <span className="block text-2xl font-extrabold text-gradient-gold font-mono">92/100</span>
                    <span className="text-[10px] text-zinc-400 uppercase font-medium">Potentiel Levier</span>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-800" />
                  <div>
                    <span className="block text-2xl font-extrabold text-[#d4af37] font-mono">+250 XP</span>
                    <span className="text-[10px] text-zinc-400 uppercase font-medium">Récompense</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onScrollToCheckout}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#d4af37] to-[#aa7a1e] text-black hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Recevoir l'Accès Prioritaire le 10 Août</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetQuiz}
                    className="p-3 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                    title="Recommencer le diagnostic"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Wealth Compound Simulator */}
          <div className="lg:col-span-5 bg-[#09090e] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Simulateur d'Effet de Levier</h3>
                <p className="text-xs text-zinc-400">Calculez la capitalisation sur 5 à 20 ans</p>
              </div>
            </div>

            {/* Slider 1: Monthly Saving */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-zinc-300">Capacité d'allocation mensuelle :</span>
                <span className="text-[#d4af37] font-mono text-sm">{monthlySaving.toLocaleString('fr-FR')} € / mois</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={monthlySaving}
                onChange={(e) => setMonthlySaving(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 2: Horizon */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-zinc-300">Horizon d'investissement :</span>
                <span className="text-[#d4af37] font-mono text-sm">{durationYears} ans</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={durationYears}
                onChange={(e) => setDurationYears(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Method Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
              <span className="text-zinc-300 font-medium">Méthode d'accélération Millionaire Zone (18%/an)</span>
              <button
                onClick={() => setUseMethod(!useMethod)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                  useMethod ? 'bg-[#d4af37]' : 'bg-zinc-800'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-black transform transition-transform duration-200 ${
                    useMethod ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Simulated Results Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c0c14] to-[#060608] border border-[#d4af37]/30 shadow-inner space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">
                PATRIMOINE CAPITALISÉ PROJETÉ
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold font-mono">
                {totalValue.toLocaleString('fr-FR')} €
              </div>
              <div className="flex justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                <span>Capital versé : <strong className="text-zinc-200 font-mono">{totalInvested.toLocaleString('fr-FR')} €</strong></span>
                <span>Gains générés : <strong className="text-emerald-400 font-mono">+{gain.toLocaleString('fr-FR')} €</strong></span>
              </div>
            </div>

          </div>

        </div>

        {/* Badges & Unlocked Trophies Grid */}
        <div className="mt-16 pt-12 border-t border-zinc-900">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#d4af37]" />
                <span>Trophées & Badges de Maîtrise</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Débloquez des récompenses exclusives en explorant le manuscrit</p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-bold text-[#d4af37]">
              XP Total : {xpPoints} XP
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Badge 1 */}
            <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Penseur Long-Terme</span>
                <span className="text-[10px] text-emerald-400 font-medium">Débloqué • 100 XP</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className={`p-4 rounded-2xl border transition-all ${
              unlockedBadges.includes('badge-quiz')
                ? 'bg-[#08080c] border-[#d4af37]/40'
                : 'bg-zinc-900/30 border-zinc-800/50 opacity-60'
            } flex items-center gap-3`}>
              <div className={`w-10 h-10 rounded-xl ${
                unlockedBadges.includes('badge-quiz')
                  ? 'bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37]'
                  : 'bg-zinc-800 border border-zinc-700 text-zinc-500'
              } flex items-center justify-center`}>
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Initié au Levier</span>
                <span className={`text-[10px] font-medium ${
                  unlockedBadges.includes('badge-quiz') ? 'text-emerald-400' : 'text-zinc-500'
                }`}>
                  {unlockedBadges.includes('badge-quiz') ? 'Débloqué • +250 XP' : 'Compléter le test'}
                </span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Souverain Financier</span>
                <span className="text-[10px] text-emerald-400 font-medium">Débloqué • 150 XP</span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="p-4 rounded-2xl bg-[#08080c] border border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Membre Lancement 10 Août</span>
                <span className="text-[10px] text-emerald-400 font-medium">Actif</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
