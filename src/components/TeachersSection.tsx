import React, { useState } from 'react';
import { Award, Star, UserCheck, Languages, GraduationCap, Clock, MessageSquare } from 'lucide-react';
import { TEACHERS } from '../data/teachersData';
import { Teacher } from '../types';

interface TeachersSectionProps {
  onBookWithTeacher: (teacherName: string, gender: 'male' | 'female') => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onBookWithTeacher }) => {
  const [filter, setFilter] = useState<'all' | 'female' | 'male' | 'ijazah'>('all');

  const filteredTeachers = TEACHERS.filter((teacher) => {
    if (filter === 'female') return teacher.gender === 'female';
    if (filter === 'male') return teacher.gender === 'male';
    if (filter === 'ijazah') return teacher.isIjazahHolder;
    return true;
  });

  return (
    <section id="teachers" className="py-16 sm:py-24 bg-[#faf9f5] border-t border-b border-emerald-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Scholarly Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Learn from Certified Male & Female Scholars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Our instructors hold formal Ijazah degrees from Al-Azhar University, Cairo and the Islamic University of Madinah. Vetted through rigorous recitation and child-safeguarding checks.
          </p>

          {/* Teacher Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-lg mx-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Faculty ({TEACHERS.length})
            </button>
            <button
              onClick={() => setFilter('female')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                filter === 'female'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Female Tutors (Sisters & Kids)
            </button>
            <button
              onClick={() => setFilter('male')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                filter === 'male'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Male Tutors (Brothers & Huffaz)
            </button>
            <button
              onClick={() => setFilter('ijazah')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap ${
                filter === 'ijazah'
                  ? 'bg-white text-[#064e3b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ijazah Holders
            </button>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar and Credentials */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Stylized Islamic Faculty Monogram Avatar */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-bold text-white shadow-xs shrink-0 ${
                      teacher.gender === 'female' ? 'bg-[#047857]' : 'bg-[#064e3b]'
                    }`}>
                      {teacher.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {teacher.name}
                      </h3>
                      <p className="font-arabic text-xs text-[#047857] font-semibold mt-0.5">
                        {teacher.arabicName}
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {teacher.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating & Ijazah Badge line */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-500 font-semibold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-slate-800">{teacher.rating}</span>
                    <span className="text-slate-400 font-normal">({teacher.reviewsCount} reviews)</span>
                  </div>
                  {teacher.isIjazahHolder && (
                    <span className="text-xs font-semibold text-[#047857] flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <Award className="w-3.5 h-3.5" />
                      Sanad Ijazah
                    </span>
                  )}
                </div>

                {/* Education */}
                <div className="mt-3.5 flex items-start gap-2 text-xs text-slate-700">
                  <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{teacher.education}</span>
                </div>

                {/* Languages & Experience */}
                <div className="mt-2.5 flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{teacher.experienceYears}+ Years Exp.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-slate-400" />
                    <span>{teacher.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {teacher.bio}
                </p>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {teacher.specialty.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onBookWithTeacher(teacher.name, teacher.gender)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#064e3b] hover:text-white bg-emerald-50 hover:bg-[#064e3b] border border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Book Free Trial with {teacher.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sisters and Family Safety Guarantee */}
        <div className="mt-12 bg-white rounded-2xl border border-emerald-100 p-6 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Female Tutors for Sisters & Girls</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Dedicated female scholars provide complete privacy, respectful sister-to-sister learning, and maternal encouragement for young daughters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">100% Background & Child Vetted</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Every instructor undergoes multi-stage recitations audits, criminal background checks, and child safeguarding pedagogical training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#064e3b] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Parental Supervision Welcome</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Parents are always invited to sit with young children during lessons. Recorded lessons can be provided for revision upon parental request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
