import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Star, Shield, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const MESSAGE_PHONE = "8033084933";

export default function HeroSection() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Shield, label: 'Civil Surgeon USCIS' },
    { icon: Star, label: '4.9/5 Google Reviews' },
    { icon: Award, label: '10,000+ Exams' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a6e] to-[#1a3a5c]" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c] via-transparent to-[#1a3a5c]/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4ECCA3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#4ECCA3]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-[#4ECCA3] rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">USCIS Authorized Civil Surgeon</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block text-[#4ECCA3]">{t.hero.title.split(' ').slice(2).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full transition-all duration-300 shadow-xl shadow-[#4ECCA3]/30 hover:shadow-[#4ECCA3]/50 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              {t.hero.bookOnline}
            </a>
            <a
              href={`sms:${MESSAGE_PHONE}`}
              className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.sendMessage}
            </a>
          </motion.div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <item.icon className="w-5 h-5 text-[#4ECCA3]" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#4ECCA3] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}