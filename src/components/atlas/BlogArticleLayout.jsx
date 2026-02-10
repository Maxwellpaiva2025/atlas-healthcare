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
      <section className="relative pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#4ECCA3] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#1a3a5c] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{ letterSpacing: '-0.5px' }}>
              {currentArticle?.title}
            </h1>
            <div className="w-16 h-0.5 bg-[#4ECCA3] mb-6" />
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Guia Completo • Atlas Healthcare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content prose prose-lg prose-invert max-w-none">
            <style jsx global>{`
              .article-content {
                color: #d0d0d0;
                line-height: 1.7;
              }
              
              .article-content h2 {
                color: #ffffff;
                font-size: 28px;
                font-weight: 400;
                margin-top: 48px;
                margin-bottom: 24px;
                padding-bottom: 12px;
                border-bottom: 1px solid #333333;
              }
              
              .article-content h3 {
                color: #cccccc;
                font-size: 22px;
                font-weight: 500;
                margin-top: 32px;
                margin-bottom: 16px;
              }
              
              .article-content h4 {
                color: #aaaaaa;
                font-size: 18px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 24px;
                margin-bottom: 12px;
              }
              
              .article-content p {
                color: #d0d0d0;
                font-size: 17px;
                line-height: 1.7;
                margin-bottom: 24px;
              }
              
              .article-content strong {
                color: #ffffff;
                font-weight: 600;
              }
              
              .article-content ul, .article-content ol {
                margin: 24px 0;
                padding-left: 32px;
              }
              
              .article-content li {
                color: #d0d0d0;
                margin-bottom: 12px;
                line-height: 1.6;
              }
              
              .article-content li::marker {
                color: #4ECCA3;
              }
              
              .article-content blockquote {
                border-left: 3px solid #ffffff;
                background: #111111;
                padding: 20px 24px;
                margin: 32px 0;
                border-radius: 4px;
              }
              
              .article-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 32px 0;
                background: #0f0f0f;
              }
              
              .article-content th {
                background: #1a1a1a;
                color: #ffffff;
                padding: 16px;
                text-align: left;
                border: 1px solid #2a2a2a;
                font-weight: 600;
              }
              
              .article-content td {
                padding: 16px;
                border: 1px solid #2a2a2a;
                color: #d0d0d0;
              }
              
              .article-content tr:nth-child(even) {
                background: #151515;
              }
              
              .article-content a {
                color: #4ECCA3;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: border-color 0.2s;
              }
              
              .article-content a:hover {
                border-bottom-color: #4ECCA3;
              }
            `}</style>
            {children}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-[#111111] rounded-xl border border-[#333333]"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold uppercase tracking-wider text-sm transition-all"
              style={{ borderRadius: '4px' }}
            >
              <Calendar className="w-5 h-5" />
              <span>{t.nav.book}</span>
            </a>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-black border-t border-[#222222]">
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
                  <div className="bg-[#0f0f0f] rounded-xl border border-[#222222] hover:border-[#4ECCA3]/30 transition-all p-6 h-full">
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