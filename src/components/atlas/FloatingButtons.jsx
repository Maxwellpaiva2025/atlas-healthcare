import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle, Phone, X, Plus } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const MAIN_PHONE = "8433529353";
const MESSAGE_PHONE = "8033084933";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const buttons = [
    {
      icon: Calendar,
      label: t.nav.book,
      href: BOOKING_URL,
      color: 'bg-[#4ECCA3]',
      external: true
    },
    {
      icon: MessageCircle,
      label: t.contact.sendMessage,
      href: `sms:${MESSAGE_PHONE}`,
      color: 'bg-[#3CB371]',
      external: false
    },
    {
      icon: Phone,
      label: t.contact.callNow,
      href: `tel:${MAIN_PHONE}`,
      color: 'bg-[#1a3a5c]',
      external: false
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 items-end"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target={button.external ? '_blank' : undefined}
                rel={button.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 ${button.color} text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform`}
              >
                <button.icon className="w-5 h-5" />
                <span className="font-medium text-sm whitespace-nowrap">{button.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 ${isOpen ? 'bg-gray-800' : 'bg-[#4ECCA3]'} text-white rounded-full shadow-xl flex items-center justify-center transition-colors`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}