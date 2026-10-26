import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users, Globe, BookOpen } from 'lucide-react';
import { InteractiveAudioAyah } from './InteractiveAudioAyah';
import { TRUST_METRICS } from '../data/testimonialsData';

interface HeroProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-emerald-100/60 bg-gradient-to-b from-[#f4f8f5] via-[#faf9f5] to-white">
      {/* Background Islamic geometric subtle watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] islamic-subtle-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main 2-column hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Arabic Bismillah Calligraphy */}
            <div className="mb-4">
              <span className="font-arabic text-xl sm:text-2xl text-[#064e3b] font-bold tracking-wide">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </span>
            </div>

            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#047857] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="uppercase tracking-wider">Accredited Online Quran Academy</span>
              <span aria-hidden="true">·</span>
              <span>For Kids & Adults</span>
            </div>

            {/* Main Title with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Master the Holy Quran with Precision, <span className="text-[#064e3b]">Tajweed</span> & Heart
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              One-on-one live interactive Quran classes for children, adults, and sisters worldwide.
              Learn Noorani Qaida, accurate Tajweed, and complete Hifz with certified male and female
              scholars from Al-Azhar and Madinah — from the comfort and safety of your home.
            </p>

            {/* Value checklist bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span>Dedicated Male & Female Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span>Flexible 24/7 Scheduling (All Timezones)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span>Zero Upfront Payment · 3-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span>Monthly Progress Card & Ijazah Pathway</span>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenEnroll()}
                className="px-7 py-3.5 text-base font-semibold text-white bg-[#064e3b] hover:bg-[#047857] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group whitespace-nowrap"
              >
                <span>Book 3-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#courses"
                className="px-6 py-3.5 text-base font-semibold text-[#064e3b] bg-white hover:bg-emerald-50/70 border border-emerald-200 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Explore All Courses
              </a>
            </div>

            {/* Micro reassurance note */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#047857]" />
              <span>No credit card required. Cancel anytime with one click.</span>
            </div>
          </div>

          {/* Right Column: Interactive Tajweed Experience & Academy Credential */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <InteractiveAudioAyah />
            
            {/* Quick Accreditation Card */}
            <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Al-Azhar & Madinah Certified</h4>
                  <p className="text-[11px] text-slate-500">Sanad verified male & female instructors</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-slate-800">4.98 / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Trust Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-emerald-100 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#064e3b] tracking-tight tabular-nums">
                {metric.number}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
