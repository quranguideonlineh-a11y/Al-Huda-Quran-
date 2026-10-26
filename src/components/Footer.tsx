import React from 'react';
import { BookOpen, MessageCircle, Mail, ShieldCheck, Award, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnroll }) => {
  return (
    <footer className="bg-[#022c22] text-[#e2f1e8] pt-16 pb-12 border-t border-[#064e3b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#064e3b]/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#047857] text-white flex items-center justify-center shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-extrabold text-white text-lg tracking-tight leading-none block">
                    Al Huda Quran Academy
                  </span>
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block mt-0.5">
                    Online Islamic Learning Worldwide
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#a7d7bc] leading-relaxed max-w-sm">
                Empowering Muslim children, sisters, and brothers across 48 countries with personalized 1-on-1 Quran recitation, Tajweed, and Hifz classes taught by certified Al-Azhar and Medina scholars.
              </p>
            </div>

            {/* Hadith Quote Box */}
            <div className="mt-6 p-4 rounded-xl bg-[#033a2e] border border-[#064e3b]">
              <p className="font-arabic text-sm text-amber-200 text-right">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="text-[11px] text-[#c2e4d2] mt-1">
                "The best of you are those who learn the Quran and teach it."
              </p>
            </div>
          </div>

          {/* Quick Links Column 1: Courses */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Featured Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c2e4d2]">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Noorani Qaida for Kids & Beginners
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Quran Reading with Tajweed Mastery
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Quran Memorization (Hifz Program)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Islamic Studies & Tarbiyah for Youth
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Quran Translation & Tafseer
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Ten Qira'at & Ijazah Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Navigation & Trust */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Academy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c2e4d2]">
              <li>
                <a href="#teachers" className="hover:text-white transition-colors">
                  Male & Female Tutors
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Online Class System
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-white transition-colors">
                  Course Fees & Discounts
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Trial Column */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
                Admissions & Inquiries
              </h4>
              <div className="space-y-2.5 text-xs text-[#c2e4d2]">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="https://wa.me/447392601955?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20Quran%20classes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +44 7392 601955
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="mailto:quranguideonlineh@gmail.com"
                    className="hover:text-white transition-colors truncate"
                  >
                    quranguideonlineh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenEnroll}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
              >
                Enroll Now · 3-Day Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line: Copyright & Safe badges */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8cbda3]">
          <div>
            © {new Date().getFullYear()} Al Huda Quran Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified Child Safe</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sanad Accredited</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
