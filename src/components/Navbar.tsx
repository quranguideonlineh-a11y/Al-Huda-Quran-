import React, { useState } from 'react';
import { BookOpen, Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenEnroll: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement top line */}
      <div className="bg-[#022c22] text-[#e2f1e8] text-xs font-medium py-2 px-4 border-b border-[#064e3b]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981]" />
            <span>Admissions Open for New Term · 3-Day Free Trial (No Card Required)</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-[#a7d7bc]">
            <a
              href="https://wa.me/447392601955?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20Quran%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#34d399]" />
              <span>WhatsApp: +44 7392 601955</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:quranguideonlineh@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>quranguideonlineh@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar following Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 Primary CTA) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          {/* Zone 1: Brand wordmark (single line, single element) */}
          <a href="#" className="flex items-center gap-2.5 text-[#064e3b] font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-[#064e3b] text-white flex items-center justify-center shadow-xs group-hover:bg-[#047857] transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#064e3b] tracking-tight leading-none">Al Huda</span>
              <span className="text-[10px] font-semibold text-[#b45309] tracking-wider uppercase leading-tight">Quran Academy</span>
            </div>
          </a>

          {/* Zone 2: 5 clean nav links, single line, no badges */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#courses" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">Courses</a>
            <a href="#teachers" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">Teachers</a>
            <a href="#how-it-works" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">How It Works</a>
            <a href="#fees" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">Course Fees</a>
            <a href="#about" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">About Us</a>
            <a href="#contact" className="hover:text-[#064e3b] transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnroll()}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#047857] rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Enroll Now</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#064e3b] rounded-md focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-800">
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                Quran & Tajweed Courses
              </a>
              <a
                href="#teachers"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                Male & Female Teachers
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                Online Class Experience
              </a>
              <a
                href="#fees"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                Course Fees & Plans
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                About Al Huda Academy
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#064e3b] transition-colors"
              >
                Contact Us & WhatsApp
              </a>
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnroll();
                  }}
                  className="w-full py-3 text-center font-semibold text-white bg-[#064e3b] hover:bg-[#047857] rounded-lg transition-colors"
                >
                  Book 3-Day Free Trial
                </button>
                <a
                  href="https://wa.me/447392601955?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20enroll%20in%20Al%20Huda%20Quran%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-[#064e3b] bg-emerald-50 border border-emerald-200 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 text-[#10b981]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
