import React from 'react';
import { TESTIMONIALS } from '../data/manuscriptData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-24 relative bg-[#040406] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
            <span>LECTEURS & FONDATEURS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Approuvé par les esprits exigeants.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Retour d'expérience des premiers acquéreurs du manuscrit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-[#08080c] border border-zinc-800/80 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative group"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-6 right-6 pointer-events-none group-hover:text-[#d4af37]/40 transition-colors" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  « {testimonial.content} »
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500">
                    {testimonial.role} {testimonial.company ? `• ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
