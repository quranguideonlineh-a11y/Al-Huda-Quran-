import React from 'react';
import { Laptop, CalendarCheck, FileCheck, Video, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenEnroll: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnroll }) => {
  const steps = [
    {
      step: '01',
      title: 'Book Your Free 3-Day Trial',
      description: 'Fill out our simple 1-minute form. Tell us your target course, preferred tutor gender (male/female), and available timezone.',
      icon: CalendarCheck,
    },
    {
      step: '02',
      title: 'Free Diagnostic Assessment',
      description: 'Meet your assigned certified scholar for a friendly 1-on-1 session to evaluate current reading ability and establish tailored goals.',
      icon: Laptop,
    },
    {
      step: '03',
      title: 'Choose Your Regular Schedule',
      description: 'Select class frequency (2, 3, 4, or 5 days/week) and exact time slots that fit your family’s work and school routine.',
      icon: Video,
    },
    {
      step: '04',
      title: 'Begin Regular 1-on-1 Lessons',
      description: 'Log into live Zoom / Google Meet classroom with interactive Mushaf screen sharing, receiving continuous feedback and monthly progress reports.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Seamless Online Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How Online Quran Classes Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            No commute, no chaotic group classrooms. High-definition 1-on-1 Quran tutoring directly on your tablet, computer, or phone in four straightforward steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#fafaf8] border border-slate-200/90 rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#b45309] tracking-wider">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#064e3b] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-[#047857]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Free & No Obligation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Classroom Experience Feature Banner */}
        <div className="mt-14 bg-gradient-to-br from-[#064e3b] to-[#022c22] rounded-3xl text-white p-8 sm:p-12 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                The Al Huda Online Classroom Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                Designed for Focus, Tajweed Precision, and Deep Engagement
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                Every session is a private 1-on-1 video call where the tutor shares high-resolution, color-coded Tajweed Mushaf pages. Tutors highlight words in real-time, pronounce letters with slow articulation, and record short voice reminders for homework revision.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Works on iPad, Tablet, PC & Smartphone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Zoom & Google Meet integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Reschedule classes easily with 2h notice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Monthly digital report card to parents</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenEnroll}
                  className="px-6 py-3.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>Experience a Free Live Class</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visual Classroom Card Showcase */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-emerald-200 ml-2">Al Huda Live Portal</span>
                </div>
                <span className="text-[11px] bg-emerald-700/60 text-emerald-200 px-2 py-0.5 rounded">1-on-1 Session</span>
              </div>

              <div className="py-6 text-center">
                <p dir="rtl" className="font-quran text-2xl sm:text-3xl text-amber-200 leading-loose">
                  اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
                </p>
                <div className="mt-3 text-xs text-emerald-100">
                  "Recite in the name of your Lord who created" — Surah Al-Alaq
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-xl text-left text-xs flex items-center justify-between">
                  <span className="text-emerald-200">Current Focus: Qalqalah Letters (ق ط ب ج د)</span>
                  <span className="text-amber-300 font-bold">Live Correction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
