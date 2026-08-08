import React, { useState } from 'react';
import { MANUSCRIPT_CHAPTERS } from '../data/manuscriptData';
import { Chapter } from '../types';
import { Clock, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

interface TableOfContentsProps {
  onSelectChapterToRead: (chapter: Chapter) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onSelectChapterToRead }) => {
  const [activeChapterId, setActiveChapterId] = useState<number>(1);

  const selectedChapter = MANUSCRIPT_CHAPTERS.find((c) => c.id === activeChapterId) || MANUSCRIPT_CHAPTERS[0];

  return (
    <section id="sommaire" className="py-24 relative bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
            <span>SOMMAIRE EXCLUSIF DU MANUSCRIT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            4 Piliers Majeurs. 280 Pages d'Excellence.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Sélectionnez un chapitre ci-dessous pour découvrir son architecture détaillée et les enseignements clés.
          </p>
        </div>

        {/* 2-Column Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chapter List */}
          <div className="lg:col-span-5 space-y-3">
            {MANUSCRIPT_CHAPTERS.map((chapter) => {
              const isActive = chapter.id === activeChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start justify-between gap-4 border ${
                    isActive
                      ? 'bg-gradient-to-r from-zinc-900 via-[#0c0c14] to-zinc-900 border-[#d4af37] shadow-xl shadow-[#d4af37]/10'
                      : 'bg-zinc-950/60 hover:bg-zinc-900/80 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg border ${
                        isActive
                          ? 'bg-[#d4af37] text-black border-[#d4af37]'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                      }`}
                    >
                      {chapter.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-300'
                        }`}
                      >
                        {chapter.title}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-1 mt-1">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isActive ? 'text-[#d4af37] translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Chapter Detailed Card */}
          <div className="lg:col-span-7 bg-[#08080c] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Chapter Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-bold text-gradient-gold">
                  CHAPITRE {selectedChapter.number}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  <span>{selectedChapter.readTime}</span>
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedChapter.title}
            </h3>
            <p className="text-sm font-medium text-[#d4af37] mb-4">
              {selectedChapter.subtitle}
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedChapter.description}
            </p>

            {/* Key Frameworks / Takeaways */}
            <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-5 mb-8">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Ce que vous maîtriserez dans ce chapitre :</span>
              </h4>
              <ul className="space-y-3">
                {selectedChapter.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Availability Note */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800/80">
              <p className="text-xs text-zinc-400">
                Lancement exclusif du manuscrit le <strong className="text-[#d4af37]">Lundi 10 Août à 09h00</strong>.
              </p>
              <div className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Accès Prioritaire sur Inscription</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
