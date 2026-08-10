import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Award } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { OFFICIAL_CTA_URL } from '../constants/links';

interface Book3DViewerProps {
  coverImageUrl: string;
}

export const Book3DViewer: React.FC<Book3DViewerProps> = ({ coverImageUrl }) => {
  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  React.useEffect(() => {
    setImgSrc(coverImageUrl);
  }, [coverImageUrl]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full my-4 sm:my-8 select-none">
      {/* Soft Ambient Gold Halo directly behind the cover */}
      <div className="absolute w-72 sm:w-[420px] h-72 sm:h-[420px] bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Floating Space Area - Cover Image */}
      <div className="relative w-full max-w-[240px] sm:max-w-[310px] md:max-w-[350px] flex items-center justify-center py-6 sm:py-8">
        
        {/* Floating Badges in Space */}
        <div className="absolute top-1 -right-1 sm:-right-6 z-30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/90 border border-[#d4af37]/50 text-yellow-300 text-[10px] sm:text-xs font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-1.5 backdrop-blur-md pointer-events-none">
          <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
          <span>Sortie 10 Août</span>
        </div>

        <div className="absolute bottom-1 -left-1 sm:-left-6 z-30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/90 border border-[#d4af37]/50 text-gradient-gold text-[10px] sm:text-xs font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-1.5 backdrop-blur-md pointer-events-none">
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>30 Places Only</span>
        </div>

        {/* Pure Cover Image Floating Seamlessly in Space - Redirects to Official Link */}
        <a href={OFFICIAL_CTA_URL} target="_blank" rel="noopener noreferrer" className="z-10 block">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -1, 1, 0],
            }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.05,
              y: -14,
              transition: { duration: 0.3 }
            }}
            className="relative cursor-pointer"
          >
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
              alt="Le Manuel du Futur Millionnaire"
              className="w-full h-auto object-contain rounded-lg drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter hover:drop-shadow-[0_25px_45px_rgba(212,175,55,0.45)] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </a>

        {/* Soft Floor Shadow beneath the cover */}
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 4.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute -bottom-4 w-36 sm:w-44 h-3.5 rounded-[100%] bg-black blur-md pointer-events-none"
        />
      </div>

      {/* Book Title Directly Under Image */}
      <div className="mt-5 sm:mt-6 text-center">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-serif tracking-widest uppercase text-gradient-gold">
          LE MANUEL DU FUTUR MILLIONNAIRE
        </h2>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />
    </div>
  );
};

