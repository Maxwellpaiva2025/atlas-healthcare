import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";

export default function WalkInsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-[#4ECCA3] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.walkins.title}
          </h2>
          <p className="text-white/80 text-lg">
            {t.walkins.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Best Times Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#4ECCA3]/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#4ECCA3]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t.walkins.bestTimes}</h3>
                <p className="text-[#4ECCA3] text-sm font-medium">{t.walkins.lessWait}</p>
              </div>
            </div>
            <p className="text-gray-700 font-medium text-lg mb-2">
              {t.walkins.schedule1}
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Users className="w-4 h-4" />
              {t.walkins.fullTeam}
            </div>
          </motion.div>

          {/* Also Serve Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#E8F5F0] rounded-2xl p-6 sm:p-8 border border-[#4ECCA3]/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#4ECCA3]/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#3CB371]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t.walkins.alsoServe}</h3>
              </div>
            </div>
            <p className="text-gray-700 font-medium text-lg mb-2">
              {t.walkins.schedule2}
            </p>
            <p className="text-gray-500 text-sm">
              {t.walkins.mayWait}
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4ECCA3] font-semibold rounded-full hover:bg-gray-50 transition-all shadow-lg"
          >
            {t.walkins.viewSchedule}
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}