import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Shield, Clock, Award, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698388acd2bf994a97ff1d42/284e33aed_LOGO.png";



const languages = [
  { code: 'pt', name: 'PORTUGUÊS', cta: 'Clique para Continuar', flag: '🇧🇷' },
  { code: 'es', name: 'ESPAÑOL', cta: 'Haga Clic para Continuar', flag: '🇪🇸' },
  { code: 'en', name: 'ENGLISH', cta: 'Click to Continue', flag: '🇺🇸' },
];

export default function LanguageSelector() {
  const { setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a3a5c] via-[#1e4a6e] to-[#1a3a5c] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#4ECCA3]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#4ECCA3]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        {/* Logo */}
        <motion.img
          src={LOGO_URL}
          alt="Atlas Healthcare"
          className="h-40 sm:h-48 md:h-56 mx-auto mb-6 drop-shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Welcome text */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#4ECCA3]">Bem-vindo</span> | <span className="text-[#4ECCA3]">Bienvenido</span> | <span className="text-[#4ECCA3]">Welcome</span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-base sm:text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Exames de Imigração • Exámenes de Inmigración • Immigration Medical Exams
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MapPin className="w-4 h-4" />
          <span>Mount Pleasant, South Carolina</span>
        </motion.div>
      </motion.div>



      {/* Language Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {languages.map((lang, index) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-[#4ECCA3]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ECCA3]/10"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ECCA3]/0 to-[#4ECCA3]/0 group-hover:from-[#4ECCA3]/10 group-hover:to-[#4ECCA3]/5 rounded-2xl transition-all duration-300" />
            
            <div className="relative">
              <span className="text-4xl mb-4 block">{lang.flag}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wider">
                {lang.name}
              </h3>
              <p className="text-white/60 text-sm group-hover:text-[#4ECCA3] transition-colors">
                {lang.cta}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#4ECCA3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </motion.div>

      {/* Bottom accent */}
      <motion.div
        className="mt-12 text-center text-white/40 text-xs relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        USCIS Designated Civil Surgeon
      </motion.div>
    </div>
  );
}