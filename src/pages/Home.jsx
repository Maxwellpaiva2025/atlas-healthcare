import React from 'react';
import { LanguageProvider, useLanguage } from '../components/atlas/LanguageContext';
import LanguageSelector from '../components/atlas/LanguageSelector';
import Header from '../components/atlas/Header';
import HeroSection from '../components/atlas/HeroSection';
import WalkInsSection from '../components/atlas/WalkInsSection';
import DifferentiatorsSection from '../components/atlas/DifferentiatorsSection';
import StepsSection from '../components/atlas/StepsSection';
import TestimonialsSection from '../components/atlas/TestimonialsSection';
import InfoSection from '../components/atlas/InfoSection';
import DoctorSection from '../components/atlas/DoctorSection';
import ContactSection from '../components/atlas/ContactSection';
import Footer from '../components/atlas/Footer';
import FloatingButtons from '../components/atlas/FloatingButtons';

function HomeContent() {
  const { hasSelectedLanguage } = useLanguage();

  if (!hasSelectedLanguage) {
    return <LanguageSelector />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WalkInsSection />
        <DifferentiatorsSection />
        <StepsSection />
        <TestimonialsSection />
        <InfoSection />
        <DoctorSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}