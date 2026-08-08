import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/manuscriptData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#050508] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
            <span>TRANSPARENCE TOTALE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tout ce que vous devez savoir avant d'accéder au manuscrit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#08080c] border border-zinc-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900/80 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
