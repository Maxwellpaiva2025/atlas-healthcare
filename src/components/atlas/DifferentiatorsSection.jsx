import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, DollarSign, Zap, Building, Award } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const icons = [User, Shield, DollarSign, Zap, Building, Award];

export default function DifferentiatorsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.diff.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.diff.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#4ECCA3]/30 hover:shadow-xl hover:shadow-[#4ECCA3]/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#4ECCA3]/10 group-hover:bg-[#4ECCA3] rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#4ECCA3] group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4ECCA3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#4ECCA3] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}