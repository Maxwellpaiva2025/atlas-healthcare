import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, HelpCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../components/atlas/LanguageContext';
import LanguageSelector from '../components/atlas/LanguageSelector';
import Header from '../components/atlas/Header';
import Footer from '../components/atlas/Footer';
import FloatingButtons from '../components/atlas/FloatingButtons';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`font-medium pr-4 transition-colors ${isOpen ? 'text-[#4ECCA3]' : 'text-gray-900 group-hover:text-[#4ECCA3]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#4ECCA3] rotate-180' : 'bg-gray-100 group-hover:bg-[#4ECCA3]/10'}`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-600'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQContent() {
  const { hasSelectedLanguage, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  if (!hasSelectedLanguage) {
    return <LanguageSelector />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4ECCA3]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-[#4ECCA3] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            {t.faqPage.title}
          </motion.h1>
        </div>
      </section>

      <main className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ List */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
            {t.faqPage.questions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              {t.language === 'pt' ? 'Ainda tem dúvidas?' : t.language === 'es' ? '¿Aún tienes preguntas?' : 'Still have questions?'}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-bold rounded-full transition-all shadow-xl shadow-[#4ECCA3]/30 hover:shadow-[#4ECCA3]/50 hover:scale-105 text-lg"
            >
              <Calendar className="w-6 h-6" />
              {t.contact.bookExam}
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function FAQ() {
  return (
    <LanguageProvider>
      <FAQContent />
    </LanguageProvider>
  );
}