export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  ageGroup: 'Kids & Teens' | 'Adults & Sisters' | 'All Ages' | 'Kids (4-12)';
  duration: string;
  classesPerWeek: string;
  lessonsCount: number;
  featured?: boolean;
  syllabus: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  prerequisites: string;
}

export interface Teacher {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  gender: 'male' | 'female';
  specialty: string[];
  education: string;
  experienceYears: number;
  studentsTaught: number;
  languages: string[];
  bio: string;
  rating: number;
  reviewsCount: number;
  avatarSeed: string;
  isIjazahHolder: boolean;
}

export interface PricingPlan {
  id: string;
  daysPerWeek: number;
  classesPerMonth: number;
  durationMinutes: number;
  title: string;
  description: string;
  popular?: boolean;
  rates: {
    [currency: string]: number;
  };
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  countryCode: string;
  relation: string; // e.g. "Mother of 8yo Hamza", "Adult Professional"
  course: string;
  rating: number;
  quote: string;
  highlight: string;
  date: string;
}

export interface EnrollmentData {
  studentName: string;
  studentAge: string;
  category: 'child' | 'sister' | 'brother';
  courseId: string;
  tutorGender: 'female' | 'male' | 'no-preference';
  classesPerWeek: string;
  preferredTime: string;
  parentName: string;
  email: string;
  whatsapp: string;
  country: string;
  timezone: string;
  notes?: string;
}
