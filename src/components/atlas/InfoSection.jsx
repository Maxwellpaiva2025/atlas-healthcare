import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function InfoSection() {
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: MapPin,
      title: t.info.location,
      content: (
        <p className="text-gray-700">
          3040 N Hwy 17 Suite A<br />
          Mt Pleasant, SC 29466
        </p>
      )
    },
    {
      icon: Phone,
      title: t.info.phones,
      content: (
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="text-gray-500">{t.info.mainPhone}:</span> 843-352-9353
          </p>
          <p className="text-gray-700">
            <span className="text-gray-500">{t.info.messages}:</span> 803-308-4933
          </p>
        </div>
      )
    },
    {
      icon: Clock,
      title: t.info.hours,
      content: (
        <div className="space-y-1 text-sm">
          <p><span className="text-gray-500">{t.info.monday}:</span> 9:30 - 4:00 PM</p>
          <p><span className="text-gray-500">{t.info.tuesday}:</span> 9:30 - 4:00 PM</p>
          <p><span className="text-gray-500">{t.info.thursday}:</span> 9:30 - 4:00 PM</p>
          <p><span className="text-gray-500">{t.info.friday}:</span> 9:30 - 1:00 PM</p>
        </div>
      )
    },
    {
      icon: DollarSign,
      title: t.info.investment,
      content: (
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="text-gray-500">{t.info.adult}:</span> <span className="font-semibold">$460</span>
          </p>
          <p className="text-gray-700">
            <span className="text-gray-500">{t.info.child}:</span> <span className="font-semibold">$380</span>
          </p>
          <p className="text-sm text-gray-500">
            {t.info.range}: $460-$740
          </p>
        </div>
      )
    }
  ];

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
            {t.info.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#4ECCA3]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#4ECCA3]/10 rounded-xl flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-[#4ECCA3]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-[#F6AD55]/10 border border-[#F6AD55]/30 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-[#F6AD55] flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">OBSERVAÇÃO IMPORTANTE:</span> {t.info.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}