import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono-code text-emerald-300 font-semibold mb-3">
            Социальное Доказательство
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Отзывы Клиентов & Партнеров
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Компании, бренды, музыканты и эксперты делятся опытом сотрудничества с Фарходом.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#0e1017] border border-white/10 p-7 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono-code text-slate-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Stat Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-mono-code font-semibold mb-4">
                  {review.stats}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  «{review.text}»
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono-code">
                    {review.role} • {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
