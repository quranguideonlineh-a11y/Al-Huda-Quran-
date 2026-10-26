import React from 'react';
import { BookOpen, Award, Compass, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#faf9f5] border-t border-b border-emerald-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Our Foundation & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            About Al Huda Quran Academy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Bridging classical Quranic scholarship from Al-Azhar and Medina with compassionate, cutting-edge 1-on-1 digital classrooms.
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Narrative text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-4 bg-emerald-50/70 border border-emerald-200/60 rounded-xl">
              <p className="font-arabic text-right text-lg text-[#064e3b] font-bold">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="text-xs text-slate-600 mt-1 italic">
                "The best of you are those who learn the Quran and teach it." — Sahih Al-Bukhari (5027)
              </p>
            </div>

            <p>
              Founded with the singular purpose of making authentic Quranic education accessible to every Muslim household worldwide, <strong>Al Huda Quran Academy</strong> has grown into an internationally recognized online institute trusted by thousands of families in the United Kingdom, United States, Canada, Australia, and the Middle East.
            </p>

            <p>
              Many parents living in non-Muslim majority countries face a heartbreaking challenge: local weekend madrasahs are often overcrowded, commute times are demanding, and finding qualified female teachers for young daughters and adult sisters is exceptionally difficult.
            </p>

            <p>
              At Al Huda, we overcome these barriers by hand-selecting elite, background-checked scholars holding formal Ijazah certificates and pedagogical training. Every child receives the complete, undivided attention of their dedicated teacher in a safe, interactive digital environment.
            </p>

            {/* Core commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                <span>Sanad Chains to Prophet Muhammad (ﷺ)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                <span>Zero Physical Harshness or Intimidation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                <span>Female Tutors for Female Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                <span>Child Psychology Guided Teaching</span>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Credentials Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Al-Azhar & Madinah Pedagogy</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our curriculum follows the gold standard established by the world’s leading Islamic universities, ensuring exact letter articulation (Makharij) and melodic accuracy.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Compassionate Mentorship</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe true Quranic love is nurtured through patience, smile, and positive motivation, instilling lifelong attachment to Allah's divine Book.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Child Safeguarding Standards</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supervised classrooms, audio-visual monitoring, and verified instructor profiles provide complete security and peace of mind for every parent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
