import React from 'react';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ffcb51eeb9e0ad79e826fd/ddd4d812c_LOGO.png";
const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const MAIN_PHONE = "8433529353";
const MESSAGE_PHONE = "8033084933";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.exam, href: createPageUrl('ImmigrationExam') },
    { label: t.nav.expect, href: createPageUrl('WhatToExpect') },
    { label: t.nav.faq, href: createPageUrl('FAQ') },
    { label: t.nav.blog, href: createPageUrl('Blog') },
    { label: t.nav.about, href: createPageUrl('AboutUs') },
    { label: t.nav.contact, href: createPageUrl('Contact') },
  ];

  const hours = [
    { day: t.info.monday, time: '9:30 - 4:00 PM' },
    { day: t.info.tuesday, time: '9:30 - 4:00 PM' },
    { day: t.info.thursday, time: '9:30 - 4:00 PM' },
    { day: t.info.friday, time: '9:30 - 1:00 PM' },
  ];

  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Atlas Healthcare" className="h-16 sm:h-20 mb-4 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <p className="text-[#4ECCA3] text-sm font-medium">
              {t.footer.authorized}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[#4ECCA3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.schedule}</h4>
            <ul className="space-y-2">
              {hours.map((item, index) => (
                <li key={index} className="text-sm">
                  <span className="text-white/50">{item.day}:</span>{' '}
                  <span className="text-white/80">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.bookSection}</h4>
            <div className="space-y-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#4ECCA3] transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                {t.footer.bookOnline}
              </a>
              <a
                href={`sms:${MESSAGE_PHONE}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#4ECCA3] transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {t.footer.sendMsg}
              </a>
              <a
                href={`tel:${MAIN_PHONE}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#4ECCA3] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {t.footer.callNow}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/50 text-sm">
            © 2026 Atlas Healthcare. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}