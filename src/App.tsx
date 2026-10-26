/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { TeachersSection } from './components/TeachersSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { Course, PricingPlan } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  const [selectedTutorGender, setSelectedTutorGender] = useState<'female' | 'male' | 'no-preference'>('no-preference');
  const [selectedTeacherName, setSelectedTeacherName] = useState<string | undefined>(undefined);
  
  // Syllabus detail modal
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);

  const handleOpenEnroll = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setSelectedTeacherName(undefined);
    setSelectedTutorGender('no-preference');
    setIsEnrollModalOpen(true);
  };

  const handleBookWithTeacher = (teacherName: string, gender: 'male' | 'female') => {
    setSelectedTeacherName(teacherName);
    setSelectedTutorGender(gender);
    setSelectedCourseId(undefined);
    setIsEnrollModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setIsEnrollModalOpen(true);
  };

  const handleSelectCourse = (course: Course) => {
    setDetailCourse(course);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7] selection:bg-[#047857] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenEnroll={() => handleOpenEnroll()} />

      <main className="flex-1">
        {/* Hero Section with Arabic Calligraphy & Interactive Recitation Player */}
        <Hero onOpenEnroll={handleOpenEnroll} />

        {/* Quran & Tajweed Courses */}
        <CoursesSection
          onSelectCourse={handleSelectCourse}
          onEnrollCourse={(courseId) => handleOpenEnroll(courseId)}
        />

        {/* Qualified Male & Female Teachers */}
        <TeachersSection onBookWithTeacher={handleBookWithTeacher} />

        {/* Online Classes Experience / How It Works */}
        <HowItWorks onOpenEnroll={() => handleOpenEnroll()} />

        {/* Course Fees & Transparent Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Verified Student & Parent Testimonials */}
        <TestimonialsSection />

        {/* About Us & Our Mission */}
        <AboutSection />

        {/* Contact Us, WhatsApp & FAQ */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnroll={() => handleOpenEnroll()} />

      {/* Enrollment & Free Trial Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        initialCourseId={selectedCourseId}
        initialTutorGender={selectedTutorGender}
        initialTeacherName={selectedTeacherName}
      />

      {/* Course Full Syllabus Detail Modal */}
      <CourseDetailModal
        course={detailCourse}
        onClose={() => setDetailCourse(null)}
        onEnroll={(courseId) => handleOpenEnroll(courseId)}
      />

      {/* Floating WhatsApp Quick-Chat Button */}
      <aside aria-label="Support chat" className="fixed bottom-5 right-5 z-30">
        <a
          href="https://wa.me/447392601955?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20Al%20Huda%20Quran%20Academy%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
          aria-label="Direct WhatsApp Chat with Admissions"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
