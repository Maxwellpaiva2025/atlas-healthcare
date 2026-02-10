import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../components/atlas/LanguageContext';
import LanguageSelector from '../components/atlas/LanguageSelector';
import Header from '../components/atlas/Header';
import Footer from '../components/atlas/Footer';
import FloatingButtons from '../components/atlas/FloatingButtons';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

function BlogContent() {
  const { hasSelectedLanguage, t } = useLanguage();

  if (!hasSelectedLanguage) {
    return <LanguageSelector />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#4ECCA3]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#4ECCA3]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-12 h-12 text-[#4ECCA3]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t.blog.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.blog.articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={createPageUrl(`BlogArticle${article.id}`)}
                  className="block group h-full"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col border border-gray-100 hover:border-[#4ECCA3]/30">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#4ECCA3]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4ECCA3]/20 transition-colors">
                      <BookOpen className="w-7 h-7 text-[#4ECCA3]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4ECCA3] transition-colors line-clamp-3">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-[#4ECCA3] font-semibold group-hover:gap-3 transition-all">
                      <span>{t.blog.readMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function Blog() {
  return (
    <LanguageProvider>
      <BlogContent />
    </LanguageProvider>
  );
}