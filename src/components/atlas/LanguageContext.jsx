import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('atlas_language') || null;
    }
    return null;
  });

  useEffect(() => {
    if (language) {
      localStorage.setItem('atlas_language', language);
    }
  }, [language]);

  const t = translations[language] || translations.pt;

  const value = {
    language,
    setLanguage,
    t,
    hasSelectedLanguage: !!language
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}