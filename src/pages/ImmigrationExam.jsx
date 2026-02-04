import React from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign, FileText, AlertCircle, Calendar } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../components/atlas/LanguageContext';
import LanguageSelector from '../components/atlas/LanguageSelector';
import Header from '../components/atlas/Header';
import Footer from '../components/atlas/Footer';
import FloatingButtons from '../components/atlas/FloatingButtons';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";

function ExamContent() {
  const { hasSelectedLanguage, t } = useLanguage();

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center"
          >
            {t.examPage.title}
          </motion.h1>
        </div>
      </section>

      <main className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What's Included */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#4ECCA3]" />
              {t.examPage.whatIncluded}
            </h2>
            <div className="bg-gradient-to-br from-[#E8F5F0] to-white rounded-2xl p-6 sm:p-8 border border-[#4ECCA3]/20">
              <ul className="space-y-4">
                {t.examPage.includedList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#4ECCA3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Cost */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-[#4ECCA3]" />
              {t.examPage.cost}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
                <p className="text-gray-600 mb-2">{t.info.adult}</p>
                <p className="text-4xl font-bold text-[#4ECCA3]">$460</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
                <p className="text-gray-600 mb-2">{t.info.child}</p>
                <p className="text-4xl font-bold text-[#4ECCA3]">$380</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              {t.info.range}: $460-$740
            </p>
          </motion.section>

          {/* What to Bring */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#4ECCA3]" />
              {t.examPage.whatToBring}
            </h2>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
              <ul className="space-y-3">
                {t.examPage.bringList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4ECCA3] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Notes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-[#F6AD55]/10 border border-[#F6AD55]/30 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#F6AD55] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{t.examPage.notes}</h3>
                <ul className="space-y-1">
                  {t.examPage.notesList.map((note, index) => (
                    <li key={index} className="text-gray-700">• {note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
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

export default function ImmigrationExam() {
  return (
    <LanguageProvider>
      <ExamContent />
    </LanguageProvider>
  );
}