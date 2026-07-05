import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BADGE_URL = "https://media.base44.com/images/public/698388acd2bf994a97ff1d42/e62cf7592_Screenshot_2026-07-04_at_22-50-27_Immigration_Medical_Exam_Atlas_Healthcare-removebg-preview.png";

export default function GuaranteeSection() {
  const { t } = useLanguage();
  const g = t.guaranteeSection;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={BADGE_URL}
              alt="USCIS Accepted Guaranteed"
              className="w-64 sm:w-80 drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              {g.heading}
            </h2>
            <ul className="space-y-5">
              {g.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4ECCA3] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}