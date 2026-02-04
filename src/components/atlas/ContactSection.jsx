import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const MAIN_PHONE = "8433529353";
const MESSAGE_PHONE = "8033084933";

export default function ContactSection() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.callNow,
      value: '843-352-9353',
      href: `tel:${MAIN_PHONE}`,
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      label: t.contact.sendMessage,
      value: '803-308-4933',
      href: `sms:${MESSAGE_PHONE}`,
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'contato@atlascharleston.com',
      href: 'mailto:contato@atlascharleston.com',
      color: 'bg-purple-500'
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: '3040 N Hwy 17 Suite A, Mt Pleasant, SC',
      href: 'https://maps.google.com/?q=3040+N+Hwy+17+Suite+A+Mt+Pleasant+SC+29466',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === MapPin ? '_blank' : undefined}
              rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#4ECCA3]/30 hover:shadow-xl transition-all text-center"
            >
              <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
    </section>
  );
}