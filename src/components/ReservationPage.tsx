import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, MessageCircle, AlertTriangle, User, Phone, Sparkles, ArrowLeft } from 'lucide-react';
import { WHATSAPP_PREORDER_URL } from '../constants/whatsapp';
import { OFFICIAL_CTA_URL } from '../constants/links';

interface ReservationPageProps {
  onBackToHome: () => void;
}

const COUNTRY_SCHEDULES = [
  {
    group: "Zone 20h (Afrique Centrale, du Nord & Ouest GMT+1)",
    time: "20h00",
    countries: [
      { flag: "🇨🇲", name: "CAMEROUN" },
      { flag: "🇨🇫", name: "RÉPUBLIQUE CENTRAFRICAINE" },
      { flag: "🇹🇩", name: "TCHAD" },
      { flag: "🇬🇦", name: "GABON" },
      { flag: "🇨🇬", name: "CONGO-BRAZZAVILLE" },
      { flag: "🇨🇩", name: "RDC (Kinshasa)" },
      { flag: "🇬🇶", name: "GUINÉE ÉQUATORIALE" },
      { flag: "🇳🇪", name: "NIGER" },
      { flag: "🇧🇯", name: "BÉNIN" },
      { flag: "🇩🇿", name: "ALGÉRIE" },
      { flag: "🇹🇳", name: "TUNISIE" },
      { flag: "🇲🇦", name: "MAROC" },
    ],
  },
  {
    group: "Zone 19h (Afrique de l'Ouest GMT)",
    time: "19h00",
    countries: [
      { flag: "🇨🇮", name: "CÔTE D’IVOIRE" },
      { flag: "🇸🇳", name: "SÉNÉGAL" },
      { flag: "🇲🇱", name: "MALI" },
      { flag: "🇧🇫", name: "BURKINA FASO" },
      { flag: "🇹🇬", name: "TOGO" },
      { flag: "🇬🇳", name: "GUINÉE" },
      { flag: "🇲🇷", name: "MAURITANIE" },
    ],
  },
  {
    group: "Zone 21h (Grands Lacs & Afrique Centrale Sud-Est GMT+2)",
    time: "21h00",
    countries: [
      { flag: "🇷🇼", name: "RWANDA" },
      { flag: "🇧🇮", name: "BURUNDI" },
      { flag: "🇨🇩", name: "RDC (Lubumbashi / Sud-Est)" },
      { flag: "🇪🇷", name: "ÉRYTHRÉE" },
    ],
  },
  {
    group: "Zone 22h (Corne de l'Afrique & Océan Indien GMT+3)",
    time: "22h00",
    countries: [
      { flag: "🇩🇯", name: "DJIBOUTI" },
      { flag: "🇰🇲", name: "COMORES" },
      { flag: "🇲🇬", name: "MADAGASCAR" },
    ],
  },
  {
    group: "Zone 15h (Caraïbes / Amériques GMT-4)",
    time: "15h00",
    countries: [
      { flag: "🇭🇹", name: "HAÏTI" },
    ],
  },
];

export const ReservationPage: React.FC<ReservationPageProps> = ({ onBackToHome }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Check if user previously reserved
    const saved = localStorage.getItem('manuscript_reservation');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.fullName) {
          setFullName(parsed.fullName);
          setIsSubmitted(true);
        }
      } catch (e) {
        // ignore parse error
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Veuillez entrer votre nom et prénom.');
      return;
    }
    if (!phone.trim() || phone.length < 6) {
      setError('Veuillez entrer un numéro de téléphone valide avec l’indicatif.');
      return;
    }

    // Save reservation locally
    const reservation = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('manuscript_reservation', JSON.stringify(reservation));

    setError('');
    setIsSubmitted(true);
    window.scrollTo(0, 0);
    window.open(OFFICIAL_CTA_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f6] relative overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d4af37]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-red-950/20 blur-[120px] pointer-events-none rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#050507]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 sm:py-4 px-3 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-[#d4af37]/50 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer group shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour</span>
          </button>

          <div className="text-right">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-[#d4af37] block font-bold">
              Lancement Officiel
            </span>
            <span className="text-xs font-bold text-white">Lundi 10 Août 2026</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-12 relative z-10">
        <div className="bg-[#09090e] border border-[#d4af37]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Gold Gradient Bar */}
          <div className="h-1.5 sm:h-2 bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e]" />

          <div className="p-4 sm:p-8 md:p-10">
            {!isSubmitted ? (
              /* --- FORM STATE --- */
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="text-center space-y-2.5 sm:space-y-3">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[11px] sm:text-xs font-bold text-[#d4af37] shadow-lg shadow-[#d4af37]/10">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Réservation Exclusive d'Accès au Manuscrit</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Réservez votre accès prioritaire
                  </h1>
                  <p className="text-xs sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
                    Saisissez votre nom et numéro de téléphone ci-dessous pour enregistrer votre priorité avant l'ouverture officielle.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/80 border border-red-500/60 text-red-200 text-xs sm:text-sm text-center font-semibold">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-lg mx-auto bg-zinc-950/60 p-4 sm:p-8 rounded-2xl border border-zinc-800">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#d4af37]" />
                      <span>Nom & Prénom</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean-Luc Mbida"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                      <span>Numéro de Téléphone (avec indicatif pays)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +237 690 00 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 sm:mt-4 py-3.5 sm:py-4 rounded-xl text-xs sm:text-base font-extrabold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2 sm:gap-2.5 transition-all duration-300 cursor-pointer"
                  >
                    <span>Valider ma réservation d'accès</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <div className="pt-2 text-center text-[11px] sm:text-xs text-zinc-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
                    <span>Vos informations personnelles sont 100% sécurisées</span>
                  </div>
                </form>
              </div>
            ) : (
              /* --- CONFIRMATION STATE --- */
              <div className="space-y-6 sm:space-y-8 animate-fade-in text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 mx-auto shadow-2xl shadow-emerald-950">
                  <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    Félicitations, <span className="text-gradient-gold">{fullName}</span> !
                  </h1>
                  <p className="text-sm sm:text-lg font-bold text-emerald-400">
                    Votre accès prioritaire au manuscrit a été enregistré avec succès.
                  </p>
                </div>

                {/* Scarcity / Urgency Alert Card - STRICTLY ACCÈS ONLY */}
                <div className="p-4 sm:p-6 rounded-2xl bg-amber-950/50 border border-amber-500/60 text-amber-200 text-xs sm:text-sm text-left leading-relaxed space-y-2.5 sm:space-y-3 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-amber-400 font-extrabold text-sm sm:text-base">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>INFORMATION IMPORTANTE DE RÉSERVATION</span>
                  </div>
                  <p className="text-amber-100/90 text-xs sm:text-sm">
                    Sachez que <strong>plus de 30 personnes ont déjà réservé leur accès</strong>. Les 30 premiers accès prioritaires seront attribués selon l'ordre d'arrivée exact le jour du lancement officiel !
                  </p>
                  <p className="text-amber-300 font-bold text-xs sm:text-sm pt-0.5">
                    Le mieux est donc d'être présent exactement à l'heure du lancement selon votre pays ci-dessous :
                  </p>
                </div>

                {/* Country Launch Times Schedule */}
                <div className="space-y-4 sm:space-y-5 text-left pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 gap-2">
                    <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] shrink-0" />
                      <span>Heures exactes du Lancement Officiel par Pays</span>
                    </h2>
                    <span className="self-start sm:self-auto text-[11px] sm:text-xs font-mono font-bold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                      Lundi 10 Août 2026
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {COUNTRY_SCHEDULES.map((sched, idx) => (
                      <div key={idx} className="p-3.5 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-lg">
                        <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/80 pb-2 mb-2.5 gap-1.5">
                          <span className="text-xs sm:text-sm font-bold text-zinc-200">{sched.group}</span>
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-[11px] sm:text-xs font-mono font-extrabold border border-[#d4af37]/40 shadow-sm">
                            {sched.time}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {sched.countries.map((c, cIdx) => (
                            <div key={cIdx} className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                              <span className="flex items-center gap-2 min-w-0 pr-1">
                                <span className="text-sm sm:text-base shrink-0">{c.flag}</span>
                                <span className="font-semibold text-[11px] sm:text-xs truncate">{c.name}</span>
                              </span>
                              <strong className="text-yellow-400 font-mono text-[11px] sm:text-xs shrink-0">{sched.time}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="pt-4 sm:pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={OFFICIAL_CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-xl flex items-center justify-center gap-2 sm:gap-2.5 transition-all"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-black shrink-0" />
                    <span>Accéder à la page officielle MyChariow</span>
                  </a>

                  <a
                    href={WHATSAPP_PREORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center gap-2 sm:gap-2.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                    <span>Rejoindre le canal WhatsApp</span>
                  </a>

                  <button
                    onClick={onBackToHome}
                    className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                  >
                    Retourner à l'accueil
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
