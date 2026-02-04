import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const DR_PHOTO = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ffcb51eeb9e0ad79e826fd/730c2bd20_TIM.jpg";

export default function DoctorSection() {
  const { t } = useLanguage();

  const badges = [
    { icon: Award, label: 'IPPA Member' },
    { icon: Shield, label: 'Navy Veteran' },
    { icon: Star, label: 'USCIS Authorized' },
  ];

  const stats = [
    { value: '12+', label: t.doctor.years },
    { value: '10K+', label: t.doctor.exams },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4ECCA3]/5 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#4ECCA3]/20 rounded-3xl blur-xl" />
              <img
                src={DR_PHOTO}
                alt="Dr. Timothy Wingo"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl px-6 py-3 shadow-lg text-center"
                >
                  <p className="text-2xl font-bold text-[#4ECCA3]">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.doctor.title}
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>{t.doctor.bio}</p>
              <p>{t.doctor.bio2}</p>
              <p>{t.doctor.bio3}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <badge.icon className="w-4 h-4 text-[#4ECCA3]" />
                  <span className="text-white text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={createPageUrl('AboutUs')}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#4ECCA3]/30"
            >
              {t.doctor.meetTeam}
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}