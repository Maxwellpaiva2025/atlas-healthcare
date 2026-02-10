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
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content prose prose-lg max-w-none">
            <style jsx global>{`
              .article-content {
                color: #374151;
                line-height: 1.7;
              }
              
              .article-content h2 {
                color: #1a3a5c;
                font-size: 28px;
                font-weight: 600;
                margin-top: 48px;
                margin-bottom: 24px;
                padding-bottom: 12px;
                border-bottom: 2px solid #e5e7eb;
              }
              
              .article-content h3 {
                color: #1e4a6e;
                font-size: 22px;
                font-weight: 600;
                margin-top: 32px;
                margin-bottom: 16px;
              }
              
              .article-content h4 {
                color: #4b5563;
                font-size: 18px;
                font-weight: 600;
                margin-top: 24px;
                margin-bottom: 12px;
              }
              
              .article-content p {
                color: #374151;
                font-size: 17px;
                line-height: 1.7;
                margin-bottom: 24px;
              }
              
              .article-content strong {
                color: #1f2937;
                font-weight: 600;
              }
              
              .article-content ul, .article-content ol {
                margin: 24px 0;
                padding-left: 32px;
              }
              
              .article-content li {
                color: #374151;
                margin-bottom: 12px;
                line-height: 1.6;
              }
              
              .article-content li::marker {
                color: #4ECCA3;
              }
              
              .article-content blockquote {
                border-left: 3px solid #4ECCA3;
                background: #f9fafb;
                padding: 20px 24px;
                margin: 32px 0;
                border-radius: 4px;
              }
              
              .article-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 32px 0;
                background: #ffffff;
              }
              
              .article-content th {
                background: #1a3a5c;
                color: #ffffff;
                padding: 16px;
                text-align: left;
                border: 1px solid #e5e7eb;
                font-weight: 600;
              }
              
              .article-content td {
                padding: 16px;
                border: 1px solid #e5e7eb;
                color: #374151;
              }
              
              .article-content tr:nth-child(even) {
                background: #f9fafb;
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
            className="mt-12 p-8 bg-gradient-to-br from-[#4ECCA3]/10 to-[#3CB371]/10 rounded-2xl border-2 border-[#4ECCA3]/20"
          >
            <h3 className="text-2xl font-bold text-[#1a3a5c] mb-3">
              {t.language === 'pt' && 'Pronto para agendar seu exame?'}
              {t.language === 'es' && '¿Listo para programar su examen?'}
              {t.language === 'en' && 'Ready to schedule your exam?'}
            </h3>
            <p className="text-gray-600 mb-6">
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
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8">
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
                    <h3 className="text-lg font-bold text-[#1a3a5c] mb-2 group-hover:text-[#4ECCA3] transition-colors line-clamp-2">
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