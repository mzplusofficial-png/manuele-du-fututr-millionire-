import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2, BookOpen } from 'lucide-react';

export const AiCounselor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const sampleQuestions = [
    "Comment le manuscrit aborde-t-il l'effet de levier ?",
    "Ce livre convient-il si je pars de zéro sans apport ?",
    "En quoi la méthode Millionaire Zone est-elle différente ?"
  ];

  const handleAsk = async (qToAsk?: string) => {
    const q = qToAsk || question;
    if (!q.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/gemini/ask-manuscript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      if (data.answer) {
        setResponse(data.answer);
      } else {
        setResponse("Une réponse synthétique n'a pas pu être générée. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Le conseiller éditorial est actuellement sollicité. Posez votre question directement lors de votre lecture du manuscrit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#050508] relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0a0a0f] to-[#060608] border border-[#d4af37]/30 shadow-2xl space-y-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Conseiller Éditorial Virtuel
              </h3>
              <p className="text-xs text-zinc-400">
                Interrogez le manuscrit en direct avant votre acquisition
              </p>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {sampleQuestions.map((sq, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuestion(sq);
                  handleAsk(sq);
                }}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-all text-left"
              >
                « {sq} »
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="flex gap-3 pt-2"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Posez votre question sur les principes du livre..."
              className="flex-1 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7a1e] text-black font-bold text-xs hover:brightness-110 disabled:opacity-50 flex items-center gap-2 shrink-0"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Demander</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* AI Response Display */}
          {response && (
            <div className="mt-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37]">
                <Bot className="w-4 h-4" />
                <span>Réponse du Conseiller :</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {response}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
