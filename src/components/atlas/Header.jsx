import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ffcb51eeb9e0ad79e826fd/ddd4d812c_LOGO.png";
const BOOKING_URL = "https://atlashealthcare.janeapp.com/";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: createPageUrl('Home'), section: 'hero' },
    { label: t.nav.exam, href: createPageUrl('ImmigrationExam') },
    { label: t.nav.expect, href: createPageUrl('WhatToExpect') },
    { label: t.nav.faq, href: createPageUrl('FAQ') },
    { label: t.nav.about, href: createPageUrl('AboutUs') },
    { label: t.nav.contact, href: createPageUrl('Contact') },
  ];

  const languageOptions = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-36 sm:h-28 md:h-32 lg:h-36">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src={LOGO_URL} 
                alt="Atlas Healthcare" 
                className={`h-32 sm:h-24 md:h-28 lg:h-32 transition-all duration-300 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => item.section && scrollToSection(item.section)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#4ECCA3] hover:bg-[#4ECCA3]/10' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {languageOptions.find(l => l.code === language)?.flag}
                  </span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden"
                    >
                      {languageOptions.map((option) => (
                        <button
                          key={option.code}
                          onClick={() => {
                            setLanguage(option.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#4ECCA3]/10 transition-colors ${
                            language === option.code ? 'bg-[#4ECCA3]/10 text-[#4ECCA3]' : 'text-gray-700'
                          }`}
                        >
                          <span>{option.flag}</span>
                          <span>{option.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#4ECCA3]/30 hover:shadow-[#4ECCA3]/50"
              >
                {t.nav.book}
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl">
              <div className="pt-20 pb-6 px-6">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#4ECCA3]/10 hover:text-[#4ECCA3] rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-4">
                    {language === 'pt' ? 'Idioma' : language === 'es' ? 'Idioma' : 'Language'}
                  </p>
                  <div className="space-y-1">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => {
                          setLanguage(option.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          language === option.code 
                            ? 'bg-[#4ECCA3]/10 text-[#4ECCA3]' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xl">{option.flag}</span>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center px-6 py-3 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full transition-all"
                >
                  {t.nav.book}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}