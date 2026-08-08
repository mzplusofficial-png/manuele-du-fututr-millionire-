import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, ArrowRight, Bell, Calendar, Sparkles, Clock } from 'lucide-react';

export const CheckoutSection: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Countdown timer to Monday August 10, 2026 09:00:00
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 18, minutes: 36, seconds: 45 });

  useEffect(() => {
    const targetDate = new Date('2026-08-10T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
    }, 1000);
  };

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
            Le manuscrit sera révélé et accessible au grand public en quantité limitée. Rejoignez le cercle prioritaire pour recevoir votre accès dès la première minute.
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

          {isSubscribed ? (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Votre place en Liste Prioritaire est confirmée !
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                Un email de confirmation à été envoyé à <span className="underline text-white font-medium">{email}</span>. Vous recevrez le lien d'accès privilégié dès l'ouverture du lancement le <strong className="text-[#d4af37]">Lundi 10 Août à 09h00</strong>.
              </p>
              <div className="pt-4 flex items-center justify-center">
                <span className="text-xs text-zinc-500">Millionaire Zone • Accès Privilégié</span>
              </div>
            </div>
          ) : (
            /* VIP Registration Form */
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
                  <span>Notification instantanée par SMS/Email le 10 Août dès 09h00</span>
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

              {/* Email Subscription Form */}
              <form onSubmit={handleSubscribe} className="space-y-4 pt-4 border-t border-zinc-800/80">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Entrez votre adresse email pour être invité en priorité :
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@domaine.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  {loading ? (
                    <span>Traitement de la précommande en cours...</span>
                  ) : (
                    <>
                      <span>Précommander le Manuscrit (30 Places Seulements)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Guarantees */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 border-t border-zinc-900">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Aucun spam • Désinscription en 1 clic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Réservé aux esprits ambitieux</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

