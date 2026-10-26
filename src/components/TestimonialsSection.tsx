import React from 'react';
import { Star, Quote, CheckCircle, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Verified Student & Parent Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Loved by Thousands of Muslim Families Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Read heartfelt stories from parents and adult students in the UK, USA, Canada, Australia, and Europe who transformed their recitation with Al Huda Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-[#fafaf8] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all duration-200 relative"
            >
              <div>
                {/* Star rating & Course tag */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-200/60">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#047857]">
                    {item.course}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h4 className="mt-4 text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  "{item.highlight}"
                </h4>

                {/* Full testimonial text */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {item.relation} · {item.location}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100/80 text-[#064e3b] flex items-center justify-center font-bold text-xs shrink-0">
                  {item.countryCode}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Muslim Community Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-emerald-50/60 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#064e3b] text-white flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-red-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Join Over 15,000+ Students in 48 Countries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Classes available across London (GMT), New York (EST), California (PST), Sydney (AEST), and Dubai (GST) timezones.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064e3b] bg-white px-4 py-2.5 rounded-xl border border-emerald-200 shadow-xs whitespace-nowrap">
            <CheckCircle className="w-4 h-4 text-[#10b981]" />
            <span>4,800+ 5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
