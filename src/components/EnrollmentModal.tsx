import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Calendar, User, Clock, BookOpen } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { EnrollmentData } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  initialTutorGender?: 'female' | 'male' | 'no-preference';
  initialTeacherName?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  initialTutorGender = 'no-preference',
  initialTeacherName,
}) => {
  const [formData, setFormData] = useState<EnrollmentData>({
    studentName: '',
    studentAge: '',
    category: 'child',
    courseId: initialCourseId || COURSES[0].id,
    tutorGender: initialTutorGender,
    classesPerWeek: '3',
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    parentName: '',
    email: '',
    whatsapp: '',
    country: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setFormData((prev) => ({ ...prev, courseId: initialCourseId }));
    }
    if (initialTutorGender) {
      setFormData((prev) => ({ ...prev, tutorGender: initialTutorGender }));
    }
  }, [initialCourseId, initialTutorGender]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.whatsapp || !formData.email) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedCourseObj = COURSES.find((c) => c.id === formData.courseId) || COURSES[0];

  const whatsappConfirmationText = encodeURIComponent(
    `Assalamu Alaikum! I just submitted an enrollment for Al Huda Quran Academy:
Student: ${formData.studentName} (Age: ${formData.studentAge || 'N/A'})
Course: ${selectedCourseObj.title}
Tutor Gender: ${formData.tutorGender}
Frequency: ${formData.classesPerWeek} Days/Week
Time Slot: ${formData.preferredTime}
Parent/Contact: ${formData.parentName || formData.studentName}
Country: ${formData.country || 'International'}
Timezone: ${formData.timezone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 my-8 relative animate-modal">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#064e3b] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#047857]">
              Mabrook! Enrollment Request Submitted
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              Your 3-Day Free Trial is Confirmed
            </h3>

            <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Assalamu Alaikum <strong>{formData.parentName || formData.studentName}</strong>.
              We have received your request for <strong>{formData.studentName}</strong> for the{' '}
              <strong>{selectedCourseObj.title}</strong> course.
            </p>

            {/* Trial Details Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#fafaf8] border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Student Name:</span>
                <span className="font-semibold text-slate-800">{formData.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Course:</span>
                <span className="font-semibold text-slate-800">{selectedCourseObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tutor Preference:</span>
                <span className="font-semibold text-slate-800 capitalize">{formData.tutorGender} Tutor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Schedule:</span>
                <span className="font-semibold text-slate-800">{formData.classesPerWeek} Days/wk · {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">WhatsApp / Contact:</span>
                <span className="font-semibold text-slate-800">{formData.whatsapp}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Our academic coordinator is assigning your scholar and will message you on WhatsApp to finalize your trial class date and Zoom link.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/447392601955?text=${whatsappConfirmationText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp for Instant Booking</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Enrollment Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#047857] mb-1">
                <BookOpen className="w-4 h-4" />
                <span>3-Day 100% Free Trial · No Payment Card Required</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Enroll at Al Huda Quran Academy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {initialTeacherName ? (
                  <span>Selected Teacher: <strong>{initialTeacherName}</strong>. </span>
                ) : null}
                Complete this form to reserve your live 1-on-1 trial slot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Category Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Who is Learning? *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, category: 'child' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      formData.category === 'child'
                        ? 'border-[#064e3b] bg-emerald-50 text-[#064e3b]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Child (Age 4-16)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, category: 'sister', tutorGender: 'female' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      formData.category === 'sister'
                        ? 'border-[#064e3b] bg-emerald-50 text-[#064e3b]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Adult Sister
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, category: 'brother', tutorGender: 'male' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      formData.category === 'brother'
                        ? 'border-[#064e3b] bg-emerald-50 text-[#064e3b]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Adult Brother
                  </button>
                </div>
              </div>

              {/* Student Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Zayd Mansoor"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Age
                  </label>
                  <input
                    type="text"
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                    placeholder="e.g. 8 years"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                  />
                </div>
              </div>

              {/* Target Course & Tutor Gender Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Desired Course *
                  </label>
                  <select
                    value={formData.courseId}
                    onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                  >
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teacher Gender Preference *
                  </label>
                  <select
                    value={formData.tutorGender}
                    onChange={(e) => setFormData({ ...formData, tutorGender: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                  >
                    <option value="female">Female Teacher (Recommended for Sisters & Girls)</option>
                    <option value="male">Male Teacher (Brothers & Huffaz)</option>
                    <option value="no-preference">No Preference (First Available Scholar)</option>
                  </select>
                </div>
              </div>

              {/* Frequency and Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Frequency
                  </label>
                  <select
                    value={formData.classesPerWeek}
                    onChange={(e) => setFormData({ ...formData, classesPerWeek: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                  >
                    <option value="2">2 Days a Week (8 classes/mo)</option>
                    <option value="3">3 Days a Week (12 classes/mo - Most Popular)</option>
                    <option value="4">4 Days a Week (16 classes/mo)</option>
                    <option value="5">5 Days a Week (20 classes/mo - Intensive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                  >
                    <option value="Morning (7:00 AM - 11:00 AM)">Morning (7:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Night (9:00 PM - 12:00 AM)">Night (9:00 PM - 12:00 AM)</option>
                    <option value="Weekend (Sat & Sun Only)">Weekend (Sat & Sun Only)</option>
                  </select>
                </div>
              </div>

              {/* Contact Details: Parent Name, WhatsApp, Email */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                  Contact & Communication Details:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Contact Name
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+44 7123 456789"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                    />
                  </div>
                </div>
              </div>

              {/* Country & Timezone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United Kingdom, USA, Canada"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Timezone
                  </label>
                  <input
                    type="text"
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-slate-50"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-bold text-white bg-[#064e3b] hover:bg-[#047857] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit & Book 3-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#047857]" />
                  <span>No payment required now. Free cancellation after trial.</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
