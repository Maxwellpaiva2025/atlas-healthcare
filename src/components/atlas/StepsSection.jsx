import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Folder, Stethoscope, FileCheck } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const icons = [Calendar, FileText, Folder, Stethoscope, FileCheck];

export default function StepsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ECCA3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ECCA3]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.steps.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {t.steps.items.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex items-start gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < t.steps.items.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-full bg-gradient-to-b from-[#4ECCA3] to-[#4ECCA3]/20" />
                )}

                {/* Number/Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 bg-[#4ECCA3] rounded-full flex items-center justify-center shadow-lg shadow-[#4ECCA3]/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#4ECCA3]" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{step.desc}</p>

                  {/* Book Now button for first step */}
                  {index === 0 && (
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-medium rounded-full text-sm transition-all"
                    >
                      {t.steps.bookNow}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}