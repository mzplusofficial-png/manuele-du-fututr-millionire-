import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#020203] border-t border-zinc-900 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-[#d4af37] to-[#aa7a1e] p-[1px]">
            <div className="w-full h-full bg-[#08080a] rounded flex items-center justify-center">
              <span className="font-serif font-bold text-[10px] text-gradient-gold">MZ</span>
            </div>
          </div>
          <span className="text-zinc-300 font-semibold tracking-wider">
            MILLIONNAIRE ZONE © 2026
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <a href="#manuscrit" className="hover:text-white transition-colors">
            Le Manuscrit
          </a>
          <a href="#sommaire" className="hover:text-white transition-colors">
            Sommaire
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Politique de Confidentialité
          </a>
        </div>

        {/* Note */}
        <div className="text-center md:text-right text-[11px] text-zinc-600">
          Le Manuel du Futur Millionnaire • Édition Officielle
        </div>

      </div>
    </footer>
  );
};
