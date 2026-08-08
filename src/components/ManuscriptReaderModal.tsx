import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { MANUSCRIPT_CHAPTERS } from '../data/manuscriptData';
import { X, BookOpen, Volume2, VolumeX, Type, ChevronLeft, ChevronRight, Bookmark, ArrowRight } from 'lucide-react';

interface ManuscriptReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedChapter?: Chapter;
  onScrollToCheckout: () => void;
}

export const ManuscriptReaderModal: React.FC<ManuscriptReaderModalProps> = ({
  isOpen,
  onClose,
  selectedChapter,
  onScrollToCheckout,
}) => {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(
    selectedChapter || MANUSCRIPT_CHAPTERS[0]
  );
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (selectedChapter) {
      setCurrentChapter(selectedChapter);
    }
  }, [selectedChapter]);

  if (!isOpen) return null;

  // Web Audio Synth for soft ambient focus drone
  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioCtx?.close();
      setAudioCtx(null);
      setIsAudioPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(136.1, ctx.currentTime); // Om/Binaural frequency
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setAudioCtx(ctx);
        setIsAudioPlaying(true);
      } catch (err) {
        console.error('Audio init error', err);
      }
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'xlarge':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  const handleNextChapter = () => {
    const currentIndex = MANUSCRIPT_CHAPTERS.findIndex((c) => c.id === currentChapter.id);
    if (currentIndex < MANUSCRIPT_CHAPTERS.length - 1) {
      setCurrentChapter(MANUSCRIPT_CHAPTERS[currentIndex + 1]);
    }
  };

  const handlePrevChapter = () => {
    const currentIndex = MANUSCRIPT_CHAPTERS.findIndex((c) => c.id === currentChapter.id);
    if (currentIndex > 0) {
      setCurrentChapter(MANUSCRIPT_CHAPTERS[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#07070a] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Reader Top Bar */}
        <div className="px-6 py-4 bg-[#0a0a0e] border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gradient-gold">
                EXTRAIT OFFICIEL
              </h3>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Le Manuel du Futur Millionnaire — Millionaire Zone
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Font size control */}
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}
              >
                A+
              </button>
            </div>

            {/* Focus Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                isAudioPlaying
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
              title="Ambiance sonore de concentration (Binaural Focus)"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline text-[11px] font-medium">Ambiance Focus</span>
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                if (audioCtx) audioCtx.close();
                onClose();
              }}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Canvas Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 space-y-8 bg-[radial-gradient(#121218_1px,transparent_1px)] [background-size:24px_24px]">
          
          {/* Chapter Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-zinc-900 no-scrollbar">
            {MANUSCRIPT_CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setCurrentChapter(ch)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                  ch.id === currentChapter.id
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                Chapitre {ch.number}
              </button>
            ))}
          </div>

          {/* Book Parchment Title Container */}
          <div className="max-w-2xl mx-auto space-y-4 text-center py-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#d4af37]">
              <Bookmark className="w-4 h-4" />
              <span>CHAPITRE {currentChapter.number}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {currentChapter.title}
            </h2>
            <p className="text-sm font-medium text-zinc-400 italic">
              « {currentChapter.subtitle} »
            </p>
          </div>

          {/* Excerpt Body Content */}
          <div className={`max-w-2xl mx-auto text-zinc-300 font-serif ${getFontSizeClass()} space-y-6 pt-4 border-t border-zinc-900/80`}>
            {currentChapter.excerpt.split('\n\n').map((paragraph, index) => (
              <p key={index} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#d4af37] first-letter:mr-1">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Callout box inside reader */}
          <div className="max-w-2xl mx-auto my-8 p-6 rounded-2xl bg-zinc-950 border border-[#d4af37]/30 text-center space-y-3">
            <p className="text-xs font-medium text-zinc-400">
              Ceci est un extrait de 2 pages. Le manuscrit complet contient 280 pages d'ingénierie financière, les schémas d'allocation, et le système d'exécution pas à pas.
            </p>
            <button
              onClick={() => {
                if (audioCtx) audioCtx.close();
                onClose();
                onScrollToCheckout();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#d4af37] to-[#aa7a1e] text-black hover:brightness-110 shadow-lg"
            >
              <span>Débloquer le Manuscrit Intégral</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Reader Footer Navigation */}
        <div className="px-6 py-3 bg-[#0a0a0e] border-t border-zinc-800 flex items-center justify-between shrink-0 text-xs">
          <button
            onClick={handlePrevChapter}
            disabled={currentChapter.id === 1}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          <span className="text-zinc-500 font-mono">
            {currentChapter.id} / {MANUSCRIPT_CHAPTERS.length}
          </span>

          <button
            onClick={handleNextChapter}
            disabled={currentChapter.id === MANUSCRIPT_CHAPTERS.length}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400"
          >
            <span>Suivant</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
