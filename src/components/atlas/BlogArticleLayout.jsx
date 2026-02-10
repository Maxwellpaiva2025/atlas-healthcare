import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const BOOKING_URL = "https://atlashealthcare.janeapp.com/";

export function BlogArticleLayout({ children, articleId }) {
  const { hasSelectedLanguage, t } = useLanguage();

  if (!hasSelectedLanguage) {
    return <LanguageSelector />;
  }

  const currentArticle = t.blog.articles.find(a => a.id === articleId);
  const relatedArticles = t.blog.articles
    .filter(a => a.id !== articleId)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Article Header */}
      <section className="relative pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-[#1a3a5c] to-[#1e4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.blog.backToBlog}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {currentArticle?.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-gradient-to-br from-[#4ECCA3]/10 to-[#3CB371]/10 rounded-2xl border-2 border-[#4ECCA3]/20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {t.language === 'pt' && 'Pronto para agendar seu exame?'}
              {t.language === 'es' && '¿Listo para programar su examen?'}
              {t.language === 'en' && 'Ready to schedule your exam?'}
            </h3>
            <p className="text-gray-700 mb-6">
              {t.language === 'pt' && 'Nossa equipe experiente está pronta para guiá-lo em cada etapa do processo.'}
              {t.language === 'es' && 'Nuestro equipo experimentado está listo para guiarlo en cada paso del proceso.'}
              {t.language === 'en' && 'Our experienced team is ready to guide you through every step of the process.'}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4ECCA3] hover:bg-[#3CB371] text-white font-semibold rounded-full transition-all shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.nav.book}</span>
            </a>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.blog.relatedArticles}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={createPageUrl(`BlogArticle${article.id}`)}
                  className="block group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 h-full border border-gray-100 hover:border-[#4ECCA3]/30">
                    <div className="w-12 h-12 bg-[#4ECCA3]/10 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-[#4ECCA3]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4ECCA3] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function BlogArticleWrapper({ children, articleId }) {
  return (
    <LanguageProvider>
      <BlogArticleLayout articleId={articleId}>
        {children}
      </BlogArticleLayout>
    </LanguageProvider>
  );
}