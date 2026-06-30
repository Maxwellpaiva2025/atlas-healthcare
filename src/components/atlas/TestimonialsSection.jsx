import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ThumbsUp, Heart, Share2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const AVATAR_COLORS = ['#4ECCA3', '#3B82F6', '#8B5CF6'];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = t.testimonials.items;

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const item = items[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        {/* Card Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1e2a38] rounded-2xl p-6 shadow-2xl"
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: AVATAR_COLORS[currentIndex % AVATAR_COLORS.length] }}
                    >
                      <span className="text-white font-bold text-lg">{item.name[0]}</span>
                    </div>
                    {/* Name & review count */}
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      {item.reviewCount && (
                        <p className="text-gray-400 text-xs">{item.reviewCount}</p>
                      )}
                    </div>
                  </div>
                  {/* Google logo placeholder */}
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars + time + NEW badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {item.time && (
                    <span className="text-gray-400 text-xs">{item.time}</span>
                  )}
                  {item.isNew && (
                    <span className="bg-[#4ECCA3] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                      New
                    </span>
                  )}
                </div>

                {/* Review text */}
                <p className="text-gray-200 text-sm leading-relaxed mb-5 whitespace-pre-line">
                  {item.text}
                </p>

                {/* Action icons row */}
                <div className="flex items-center gap-5 pt-3 border-t border-white/10">
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-[#4ECCA3] transition-colors text-xs">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-[#4ECCA3] transition-colors text-xs">
                    <Heart className="w-4 h-4" />
                    <span>Thank</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-[#4ECCA3] transition-colors text-xs">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#4ECCA3] hover:text-white transition-all border border-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#4ECCA3] w-8' : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#4ECCA3] hover:text-white transition-all border border-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}