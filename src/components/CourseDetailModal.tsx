import React from 'react';
import { X, CheckCircle, Clock, Calendar, BookOpen, ArrowRight, Award } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 my-8 relative animate-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center justify-between gap-4 pr-8">
            <span className="font-arabic text-xl text-[#047857] font-bold">
              {course.arabicTitle}
            </span>
            <div className="text-xs text-slate-500 font-medium">
              {course.level} · {course.ageGroup}
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Est. Duration: <strong>{course.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>Classes: <strong>{course.classesPerWeek}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Certificate of Completion Included</span>
            </div>
          </div>
        </div>

        {/* Full Syllabus breakdown */}
        <div className="mt-5">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Course Curriculum & Modules ({course.syllabus.length} Modules):
          </h4>
          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {course.syllabus.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#fafaf8] border border-slate-200/80 text-left"
              >
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#064e3b] text-[11px] flex items-center justify-center font-mono font-bold">
                    {idx + 1}
                  </span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 pl-7 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            Target Learning Outcomes:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {course.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#047857] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites note */}
        <div className="mt-4 p-2.5 rounded-lg bg-emerald-50/70 text-xs text-[#064e3b]">
          <strong>Prerequisite:</strong> {course.prerequisites}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnroll(course.id);
            }}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#064e3b] hover:bg-[#047857] rounded-xl shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Enroll in this Course (Free Trial)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
