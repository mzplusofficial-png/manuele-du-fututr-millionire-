import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_PREORDER_URL } from '../constants/whatsapp';

interface NavbarProps {
  onScrollToCheckout: () => void;
  xpPoints?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToCheckout,
  xpPoints = 250,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Urgency / Scarcity Banner in Vibrant Red */}
      <a
        href={WHATSAPP_PREORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-b border-red-500/60 py-2 px-3 sm:px-4 text-center text-xs font-medium text-red-100 flex items-center justify-center gap-2 shadow-lg shadow-red-950/80 backdrop-blur-md relative z-50 hover:brightness-110 transition-all"
      >
        <span className="flex h-2.5 w-2.5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
        </span>
        <span className="tracking-wide text-[11px] sm:text-xs">
          <strong className="font-extrabold text-white bg-red-600 px-2 py-0.5 rounded text-[10px] sm:text-[11px] uppercase tracking-wider mr-1 shadow">
            URGENCE : 30 PLACES SEULEMENT
          </strong>{' '}
          Accès ultra-exclusif réservé aux <strong className="text-yellow-300 underline underline-offset-2 decoration-red-400">30 premiers inscrits</strong> le 10 Août.
        </span>
      </a>

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-gradient-gold transition-colors">
                  Millionaire Zone
                </span>
                <span className="text-[10px] tracking-wider text-[#d4af37]/80 font-medium">
                  Édition Officielle
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300 font-medium">
              <a href="#histoire-auteur" className="hover:text-[#d4af37] transition-colors duration-200">
                Histoire de l'Auteur
              </a>
              <a href="#faq" className="hover:text-[#d4af37] transition-colors duration-200">
                Questions Fréquentes
              </a>
              <a
                href={WHATSAPP_PREORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] transition-colors duration-200 font-bold text-yellow-400"
              >
                Précommander
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Gamification XP Badge */}
              <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{xpPoints} XP • Rang Initié</span>
              </div>

              {/* Primary Preorder Button */}
              <a
                href={WHATSAPP_PREORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Je réserve mon accès</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/60 border border-zinc-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#08080c] border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
            <a
              href="#histoire-auteur"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
            >
              Histoire de l'Auteur
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
            >
              Questions Fréquentes (FAQ)
            </a>
            <a
              href={WHATSAPP_PREORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-yellow-400 hover:text-[#d4af37] py-2"
            >
              Réserver mon accès
            </a>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
              <a
                href={WHATSAPP_PREORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-4 py-3 rounded-lg text-xs font-bold bg-gradient-to-r from-[#d4af37] to-[#aa7a1e] text-black shadow-lg flex items-center justify-center gap-2"
              >
                <span>Je réserve mon accès</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

