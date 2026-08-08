import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Award } from 'lucide-react';

interface Book3DViewerProps {
  coverImageUrl: string;
}

export const Book3DViewer: React.FC<Book3DViewerProps> = ({ coverImageUrl }) => {
  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  React.useEffect(() => {
    setImgSrc(coverImageUrl);
  }, [coverImageUrl]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full my-4">
      {/* Ambient Gold Glow Behind Image */}
      <div className="absolute w-80 h-96 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#eab308]/15 to-[#3b82f6]/10 blur-3xl pointer-events-none animate-pulse" />

      {/* Floating Motion Container - Levitation Continu (Idle) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="relative group cursor-pointer max-w-[300px] sm:max-w-[340px] w-full"
      >
        {/* Floating Badges Reacting to Hover */}
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-full bg-black/90 border border-yellow-500/40 text-yellow-400 text-xs font-bold shadow-xl flex items-center gap-1.5 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
          <span>Lancement 10 Août</span>
        </div>

        <div className="absolute -bottom-3 -left-3 z-20 px-3 py-1.5 rounded-full bg-black/90 border border-yellow-500/40 text-gradient-gold text-xs font-bold shadow-xl flex items-center gap-1.5 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Édition Collector HD</span>
        </div>

        {/* Cadre du conteneur avec Activation de la bordure au survol */}
        <div className="relative rounded-2xl overflow-hidden bg-[#09090e] border border-white/10 group-hover:border-yellow-500/40 p-2 sm:p-2.5 transition-all duration-300 shadow-2xl">
          {/* Cover Image Container */}
          <div className="relative overflow-hidden rounded-xl bg-zinc-950">
            <img
              src={imgSrc}
              onError={() => {
                if (imgSrc.includes('googleusercontent.com')) {
                  const idMatch = imgSrc.match(/\/d\/([a-zA-Z0-9_-]+)/);
                  if (idMatch && idMatch[1]) {
                    setImgSrc(`https://drive.google.com/uc?export=view&id=${idMatch[1]}`);
                  }
                }
              }}
              alt="Le Manuel du Futur Millionnaire - Couverture"
              className="w-full h-auto object-cover rounded-xl transform scale-100 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-[0_15px_40px_rgba(234,179,8,0.25)] group-hover:drop-shadow-[0_25px_50px_rgba(234,179,8,0.5)] transition-all"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Glint Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

