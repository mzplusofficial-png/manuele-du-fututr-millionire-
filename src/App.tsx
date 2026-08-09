import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TargetAudience } from './components/TargetAudience';
import { AuthorStory } from './components/AuthorStory';
import { FAQ } from './components/FAQ';
import { CheckoutSection } from './components/CheckoutSection';
import { Footer } from './components/Footer';
import { ReservationPage } from './components/ReservationPage';

// User provided book cover image from Google Drive
const GOOGLE_DRIVE_COVER_URL = 'https://lh3.googleusercontent.com/d/1hnLGRJqKgvOQxMNkjoqvlbpkp3X1Vr9P';

export default function App() {
  const [coverImageUrl] = useState<string>(GOOGLE_DRIVE_COVER_URL);
  const [currentView, setCurrentView] = useState<'home' | 'reservation'>('home');

  useEffect(() => {
    // Support hash navigation if URL is #reservation
    const handleHash = () => {
      if (window.location.hash === '#reservation') {
        setCurrentView('reservation');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToCheckout = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('checkout');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('checkout');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReservation = () => {
    setCurrentView('reservation');
    window.scrollTo(0, 0);
  };

  if (currentView === 'reservation') {
    return (
      <ReservationPage
        onBackToHome={() => {
          setCurrentView('home');
          if (window.location.hash === '#reservation') {
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
          }
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f6] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Fixed Luxury Translucent Navbar */}
      <Navbar
        onScrollToCheckout={scrollToCheckout}
        onOpenReservationModal={handleOpenReservation}
      />

      {/* Main Content Sections */}
      <main>
        {/* Above-the-fold Hero Section */}
        <HeroSection
          coverImageUrl={coverImageUrl}
          onScrollToCheckout={scrollToCheckout}
          onOpenReservationModal={handleOpenReservation}
        />

        {/* Author Story Section - Le Mot de l'Auteur */}
        <div id="histoire-auteur" className="scroll-mt-24">
          <AuthorStory />
        </div>

        {/* Target Audience Section - "Est-ce fait pour vous ?" */}
        <div id="pour-qui" className="scroll-mt-24">
          <TargetAudience />
        </div>

        {/* FAQ Accordion */}
        <FAQ />

        {/* Checkout & Reservation Card */}
        <CheckoutSection
          onOpenReservationModal={handleOpenReservation}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
