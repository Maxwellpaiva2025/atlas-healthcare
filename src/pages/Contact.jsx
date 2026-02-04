import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../components/atlas/LanguageContext';
import LanguageSelector from '../components/atlas/LanguageSelector';
import Header from '../components/atlas/Header';
import Footer from '../components/atlas/Footer';
import FloatingButtons from '../components/atlas/FloatingButtons';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";
const MAIN_PHONE = "8433529353";
const MESSAGE_PHONE = "8033084933";

function ContactContent() {
  const { hasSelectedLanguage, t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: language || 'pt',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!hasSelectedLanguage) {
    return <LanguageSelector />;
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4ECCA3]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            {t.contactPage.title}
          </motion.h1>
        </div>
      </section>

      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100 hover:border-[#4ECCA3]/30 hover:shadow-xl transition-all"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.6455768392896!2d-79.84516068481838!3d32.86401658095163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe68b4c0d0d2e7%3A0x9a8e7a8e8e8e8e8e!2s3040%20N%20Hwy%2017%20Suite%20A%2C%20Mt%20Pleasant%2C%20SC%2029466!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#4ECCA3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'pt' ? 'Mensagem Enviada!' : language === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'pt' ? 'Entraremos em contato em breve.' : language === 'es' ? 'Nos pondremos en contacto pronto.' : "We'll get back to you soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contactPage.form.name}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contactPage.form.email}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contactPage.form.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contactPage.form.language}
                    </label>
                    <Select
                      value={formData.language}
                      onValueChange={(value) => setFormData({ ...formData, language: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt">Português</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contactPage.form.message}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t.contactPage.form.send}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
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

export default function Contact() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}