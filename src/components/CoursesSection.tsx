import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, CheckCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { Course } from '../types';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse, onEnrollCourse }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kids' | 'adults' | 'hifz'>('all');

  const filteredCourses = COURSES.filter((course) => {
    if (activeFilter === 'kids') return course.ageGroup.includes('Kids');
    if (activeFilter === 'adults') return course.ageGroup.includes('Adults') || course.ageGroup.includes('All Ages');
    if (activeFilter === 'hifz') return course.id.includes('hifz') || course.id.includes('qiraat');
    return true;
  });

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Structured Quranic Curriculums</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Comprehensive Quran & Islamic Courses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From first Arabic letters to advanced Ten Qira'at recitation and lifelong Hifz. Every curriculum is personalized 1-on-1 to match your learning pace.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Courses ({COURSES.length})
            </button>
            <button
              onClick={() => setActiveFilter('kids')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                activeFilter === 'kids'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kids & Beginners
            </button>
            <button
              onClick={() => setActiveFilter('adults')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                activeFilter === 'adults'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Adults & Sisters
            </button>
            <button
              onClick={() => setActiveFilter('hifz')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                activeFilter === 'hifz'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hifz & Qira'at
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#fafaf8] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Arabic Script & Level Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-arabic text-lg text-[#047857] font-bold">
                    {course.arabicTitle}
                  </span>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.ageGroup}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#064e3b] transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Highlights / Outcomes */}
                <div className="mt-5 space-y-2 border-t border-slate-200/60 pt-4">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Outcomes:
                  </div>
                  {course.outcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-[#047857] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Quick specs */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.classesPerWeek}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2.5">
                <button
                  onClick={() => onEnrollCourse(course.id)}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#047857] rounded-lg transition-colors text-center whitespace-nowrap shadow-xs"
                >
                  Enroll in Course
                </button>
                <button
                  onClick={() => onSelectCourse(course)}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-[#064e3b] bg-white border border-slate-300 rounded-lg hover:border-slate-400 transition-colors whitespace-nowrap"
                >
                  View Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free trial guarantee box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#064e3b] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-amber-300 flex items-center justify-center shrink-0 border border-emerald-700/60">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Not sure which course is right for your child or yourself?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-emerald-100 max-w-xl">
                Take our complimentary 3-day diagnostic evaluation. A qualified instructor will assess your current reading level and recommend a customized learning track.
              </p>
            </div>
          </div>
          <button
            onClick={() => onEnrollCourse('general-trial')}
            className="px-6 py-3 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Start Diagnostic Trial
          </button>
        </div>
      </div>
    </section>
  );
};
