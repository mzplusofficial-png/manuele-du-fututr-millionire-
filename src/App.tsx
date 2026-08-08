import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Manifesto } from './components/Manifesto';
import { TableOfContents } from './components/TableOfContents';
import { GamificationSection } from './components/GamificationSection';
import { EcosystemSection } from './components/EcosystemSection';
import { AiCounselor } from './components/AiCounselor';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CheckoutSection } from './components/CheckoutSection';
import { Footer } from './components/Footer';
import { ManuscriptReaderModal } from './components/ManuscriptReaderModal';
import { Chapter } from './types';

// Default generated luxury book cover asset
import defaultCoverImg from './assets/images/book_cover_front_1786191813901.jpg';

// User provided book cover image from Google Drive
const GOOGLE_DRIVE_COVER_URL = 'https://lh3.googleusercontent.com/d/12P0-JeDThFV5KO5jXX_DDoJDmmGkkKKP';

export default function App() {
  const [coverImageUrl] = useState<string>(GOOGLE_DRIVE_COVER_URL);
  const [isReaderModalOpen, setIsReaderModalOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | undefined>(undefined);
  const [xpPoints, setXpPoints] = useState(350);

  const handleAddXp = (amount: number) => {
    setXpPoints((prev) => prev + amount);
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectChapterToRead = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setIsReaderModalOpen(true);
    handleAddXp(50); // Reward 50 XP for inspecting a chapter
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f6] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Fixed Luxury Translucent Navbar */}
      <Navbar
        xpPoints={xpPoints}
        onOpenReader={() => {
          setSelectedChapter(undefined);
          setIsReaderModalOpen(true);
        }}
        onScrollToCheckout={scrollToCheckout}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive 3D Book */}
        <HeroSection
          coverImageUrl={coverImageUrl}
          onOpenReaderModal={() => {
            setSelectedChapter(undefined);
            setIsReaderModalOpen(true);
          }}
          onScrollToCheckout={scrollToCheckout}
        />

        {/* Le Manifeste / Philosophy */}
        <Manifesto />

        {/* Sommaire Exclusif & Chapter Inspector */}
        <TableOfContents onSelectChapterToRead={handleSelectChapterToRead} />

        {/* Gamification, Quiz & Compound Interest Simulator */}
        <GamificationSection
          xpPoints={xpPoints}
          onAddXp={handleAddXp}
          onScrollToCheckout={scrollToCheckout}
        />

        {/* What's Included / Ecosystem */}
        <EcosystemSection />

        {/* AI Counselor - Interactive Gemini API Querying */}
        <AiCounselor />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Checkout & Offer Card */}
        <CheckoutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Manuscript Reader Modal */}
      <ManuscriptReaderModal
        isOpen={isReaderModalOpen}
        onClose={() => setIsReaderModalOpen(false)}
        selectedChapter={selectedChapter}
        onScrollToCheckout={scrollToCheckout}
      />
    </div>
  );
}
