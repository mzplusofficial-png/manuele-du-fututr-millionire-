import React, { useState, useRef } from 'react';
import { RotateCcw, Sparkles, BookOpen, Eye, Award } from 'lucide-react';

interface Book3DViewerProps {
  coverImageUrl: string;
  onOpenReaderModal: () => void;
}

export const Book3DViewer: React.FC<Book3DViewerProps> = ({
  coverImageUrl,
  onOpenReaderModal,
}) => {
  const [rotation, setRotation] = useState({ x: 12, y: -25 });
  const [isHovered, setIsHovered] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  React.useEffect(() => {
    setImgSrc(coverImageUrl);
  }, [coverImageUrl]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setAutoRotate(false);
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Convert mouse delta to tilt angle
    const rotateY = (x / (rect.width / 2)) * 30 - 15;
    const rotateX = -(y / (rect.height / 2)) * 25 + 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 12, y: -25 });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full my-4">
      {/* Ambient Lighting Glow Behind the Book */}
      <div className="absolute w-72 h-96 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#f5d061]/15 to-[#3b82f6]/10 blur-3xl pointer-events-none animate-pulse" />

      {/* 3D Book Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-grab active:cursor-grabbing perspective-1500 py-8 px-4"
        style={{ perspective: '1200px' }}
      >
        {/* The 3D Book Wrapper */}
        <div
          className="relative transition-transform duration-300 ease-out transform-style-3d shadow-2xl"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(0deg)`,
            width: '280px',
            height: '390px',
          }}
        >
          {/* Front Cover */}
          <div
            className="absolute inset-0 rounded-r-md overflow-hidden bg-[#08080a] border border-[#d4af37]/40 shadow-2xl transform-style-3d backface-hidden"
            style={{
              transform: 'translateZ(18px)',
              boxShadow: 'inset 0 0 15px rgba(212, 175, 55, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* Book Cover Image */}
            <img
              src={imgSrc}
              onError={() => {
                // If Google Drive link fails due to CORS or hotlinking restriction, fallback to secondary format or direct drive link
                if (imgSrc.includes('googleusercontent.com')) {
                  const idMatch = imgSrc.match(/\/d\/([a-zA-Z0-9_-]+)/);
                  if (idMatch && idMatch[1]) {
                    setImgSrc(`https://drive.google.com/uc?export=view&id=${idMatch[1]}`);
                  }
                }
              }}
              alt="Le Manuel du Futur Millionnaire - Couverture"
              className="w-full h-full object-cover rounded-r-md"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic Metallic Foil Sheen Overlay */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                isHovered ? 'opacity-40' : 'opacity-20'
              }`}
              style={{
                background:
                  'linear-gradient(115deg, transparent 20%, rgba(255, 243, 167, 0.4) 45%, rgba(212, 175, 55, 0.6) 50%, rgba(255, 255, 255, 0.3) 55%, transparent 80%)',
              }}
            />

            {/* Spine Fold Shadow Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Book Spine (Left 3D Edge) */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[36px] bg-[#07070a] border-y border-l border-[#d4af37]/40 flex flex-col justify-between py-6 items-center shadow-md transform-style-3d"
            style={{
              transform: 'rotateY(-90deg) translateZ(0px) translateX(-18px)',
            }}
          >
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#d4af37] font-semibold rotate-90 transform origin-center whitespace-nowrap mt-8">
              MILLIONNAIRE ZONE
            </span>
            <div className="w-4 h-[1px] bg-[#d4af37]/40" />
            <span className="text-[10px] tracking-widest font-serif font-bold text-gradient-gold rotate-90 transform origin-center whitespace-nowrap mb-12">
              LE MANUEL DU FUTUR MILLIONNAIRE
            </span>
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          </div>

          {/* Book Pages Side (Right 3D Gold Leaf Edge) */}
          <div
            className="absolute top-[2px] bottom-[2px] right-0 w-[36px] transform-style-3d overflow-hidden rounded-r-sm"
            style={{
              transform: 'rotateY(90deg) translateZ(262px) translateX(18px)',
              background: 'repeating-linear-gradient(90deg, #d4af37 0px, #fcf6ba 1px, #aa7a1e 2px, #08080a 3px)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>

          {/* Top Edge (Pages) */}
          <div
            className="absolute top-0 left-0 right-0 h-[36px] transform-style-3d"
            style={{
              transform: 'rotateX(90deg) translateZ(18px) translateY(-18px)',
              background: 'repeating-linear-gradient(0deg, #d4af37 0px, #fcf6ba 1px, #aa7a1e 2px)',
            }}
          />

          {/* Bottom Edge (Pages) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[36px] transform-style-3d"
            style={{
              transform: 'rotateX(-90deg) translateZ(372px) translateY(18px)',
              background: 'repeating-linear-gradient(0deg, #d4af37 0px, #fcf6ba 1px, #aa7a1e 2px)',
            }}
          />

          {/* Realistic Floor Shadow */}
          <div
            className="absolute -bottom-10 left-4 right-4 h-8 rounded-full bg-black/80 blur-xl pointer-events-none transform-style-3d"
            style={{
              transform: 'rotateX(90deg) translateZ(-60px) scale(0.9)',
            }}
          />
        </div>
      </div>

      {/* Interactive Controls Bar Beneath 3D Viewer */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 bg-zinc-900/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-zinc-800/80 shadow-xl">
        <button
          onClick={onOpenReaderModal}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-100 hover:text-white bg-gradient-to-r from-zinc-800 to-zinc-900 hover:border-[#d4af37]/50 border border-zinc-700 flex items-center gap-2 transition-all shadow-md"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Feuilleter l'extrait interactif</span>
        </button>

        <div className="px-3 py-1.5 rounded-xl text-[11px] font-semibold text-gradient-gold bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Édition Collector HD</span>
        </div>

        <button
          onClick={() => setRotation({ x: 12, y: -25 })}
          className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          title="Réinitialiser l'angle 3D"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
