import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TargetAudience } from './components/TargetAudience';
import { AuthorStory } from './components/AuthorStory';
import { FAQ } from './components/FAQ';
import { CheckoutSection } from './components/CheckoutSection';
import { Footer } from './components/Footer';

// User provided book cover image from Google Drive
const GOOGLE_DRIVE_COVER_URL = 'https://lh3.googleusercontent.com/d/1hnLGRJqKgvOQxMNkjoqvlbpkp3X1Vr9P';

export default function App() {
  const [coverImageUrl] = useState<string>(GOOGLE_DRIVE_COVER_URL);

  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f6] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Fixed Luxury Translucent Navbar */}
      <Navbar
        onScrollToCheckout={scrollToCheckout}
      />

      {/* Main Content Sections */}
      <main>
        {/* Above-the-fold Hero Section */}
        <HeroSection
          coverImageUrl={coverImageUrl}
          onScrollToCheckout={scrollToCheckout}
        />

        {/* Target Audience Section - "Est-ce fait pour vous ?" */}
        <div id="pour-qui" className="scroll-mt-24">
          <TargetAudience />
        </div>

        {/* Author Story Section */}
        <div id="histoire-auteur" className="scroll-mt-24">
          <AuthorStory />
        </div>

        {/* FAQ Accordion */}
        <FAQ />

        {/* Checkout & Reservation Card */}
        <CheckoutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
