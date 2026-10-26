import { PricingPlan } from '../types';

export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal / AED', flag: '🇸🇦' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-2days',
    daysPerWeek: 2,
    classesPerMonth: 8,
    durationMinutes: 30,
    title: 'Starter Track',
    description: 'Perfect for busy school schedules and introductory learning',
    popular: false,
    rates: {
      USD: 36,
      GBP: 28,
      EUR: 33,
      CAD: 48,
      AUD: 54,
      SAR: 135
    },
    features: [
      '8 One-on-One Live Classes per month',
      '30 Minutes private session each',
      'Choose Male or Female Certified Tutor',
      'Complimentary Noorani Qaida PDF & Audio',
      'Monthly student evaluation report',
      'Reschedule up to 2 classes per month'
    ]
  },
  {
    id: 'regular-3days',
    daysPerWeek: 3,
    classesPerMonth: 12,
    durationMinutes: 30,
    title: 'Standard Track',
    description: 'Our most recommended plan for steady progress and Tajweed mastery',
    popular: true,
    rates: {
      USD: 52,
      GBP: 40,
      EUR: 48,
      CAD: 70,
      AUD: 78,
      SAR: 195
    },
    features: [
      '12 One-on-One Live Classes per month',
      '30 Minutes dedicated attention',
      'Trained Al-Azhar / Madinah certified tutors',
      'Weekly voice recitation diagnostic feedback',
      'Islamic Studies & basic Duas included',
      'Flexible makeup classes anytime',
      '15% Family & Sibling Discount'
    ]
  },
  {
    id: 'accelerated-4days',
    daysPerWeek: 4,
    classesPerMonth: 16,
    durationMinutes: 30,
    title: 'Accelerated Track',
    description: 'Ideal for fast-track Quran reading and memorization readiness',
    popular: false,
    rates: {
      USD: 68,
      GBP: 53,
      EUR: 62,
      CAD: 92,
      AUD: 102,
      SAR: 255
    },
    features: [
      '16 One-on-One Live Classes per month',
      '30 Minutes intensive 1-on-1 training',
      'Dedicated primary and backup tutor',
      'Tajweed correction recording portal',
      'Customized homework & recitation tracks',
      'Bi-weekly progress check-in with supervisor',
      'Free Tajweed Certificate on completion'
    ]
  },
  {
    id: 'intensive-5days',
    daysPerWeek: 5,
    classesPerMonth: 20,
    durationMinutes: 30,
    title: 'Intensive Hifz & Mastery',
    description: 'Daily consistency required for serious memorization and fluent Khatmah',
    popular: false,
    rates: {
      USD: 85,
      GBP: 66,
      EUR: 78,
      CAD: 115,
      AUD: 128,
      SAR: 320
    },
    features: [
      '20 One-on-One Live Classes per month',
      '30 Minutes daily structured session',
      'Structured Sabaq, Sabaqi & Manzil tracking',
      'Direct line to Senior Qari supervisory board',
      'Quarterly mock exam & live recital assessment',
      'Priority scheduling across all timezones',
      'Full Ijazah pathway eligibility'
    ]
  }
];
