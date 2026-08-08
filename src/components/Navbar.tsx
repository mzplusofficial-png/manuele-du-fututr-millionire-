import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#d4af37] via-[#f5d061] to-[#aa7a1e] p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08080a] rounded-[5px] flex items-center justify-center">
                <span className="font-serif font-bold text-xs tracking-widest text-gradient-gold">
                  MZ
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Millionaire Zone
              </span>
              <span className="text-[10px] tracking-wider text-[#d4af37]/80 font-medium">
                 Édition Officielle
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300 font-medium">
            <a href="#manuscrit" className="hover:text-[#d4af37] transition-colors duration-200">
              Le Manuscrit
            </a>
            <a href="#sommaire" className="hover:text-[#d4af37] transition-colors duration-200">
              Sommaire
            </a>
            <a href="#gamification" className="hover:text-[#d4af37] transition-colors duration-200">
              Diagnostic & XP
            </a>
            <a href="#ecosysteme" className="hover:text-[#d4af37] transition-colors duration-200">
              Ce qui est inclus
            </a>
            <a href="#avis" className="hover:text-[#d4af37] transition-colors duration-200">
              Avis
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Gamification XP Badge */}
            <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{xpPoints} XP • Rang Initié</span>
            </div>

            {/* Primary Launch Button */}
            <button
              onClick={onScrollToCheckout}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7a1e] text-black hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Lancement : 10 Août</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
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
            href="#manuscrit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
          >
            Le Manuscrit
          </a>
          <a
            href="#sommaire"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
          >
            Sommaire
          </a>
          <a
            href="#ecosysteme"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
          >
            Ce qui est inclus
          </a>
          <a
            href="#avis"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-200 hover:text-[#d4af37] py-2"
          >
            Avis & Témoignages
          </a>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToCheckout();
              }}
              className="w-full px-4 py-3 rounded-lg text-xs font-bold bg-gradient-to-r from-[#d4af37] to-[#aa7a1e] text-black shadow-lg flex items-center justify-center gap-2"
            >
              <span>Réserver pour le Lancement (10 Août)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
