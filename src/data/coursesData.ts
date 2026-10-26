import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida for Beginners',
    arabicTitle: 'القاعدة النورانية',
    tagline: 'The ideal foundation for children and beginners to read Arabic script accurately',
    description: 'Designed specifically for non-Arabic speakers and young learners. Learn Arabic alphabets, letter recognition, joining forms, vowel marks (Harakat, Tanween, Madd), and foundational phonetics step-by-step.',
    level: 'Beginner',
    ageGroup: 'Kids (4-12)',
    duration: '3 to 6 Months',
    classesPerWeek: '2 - 5 Days',
    lessonsCount: 17,
    featured: true,
    syllabus: [
      { title: 'Arabic Alphabets & Joint Letters', description: 'Single letter pronunciation, shapes at start, middle, and end of words.' },
      { title: 'Harakat & Standing Harakat', description: 'Fathah, Kasrah, Dammah, Khari Zabar, Zer, Pesh with correct breath timing.' },
      { title: 'Tanween & Sukoon (Jazm)', description: 'Double vowels, silent letters, and connecting consonant rules.' },
      { title: 'Madd Letters & Leen', description: 'Elongation rules (Alif, Waw, Yaa) and soft letters.' },
      { title: 'Shaddah (Tashdeed) & Noon Sakinah', description: 'Doubled letters, basic Ghunnah, and introductory Tajweed preparation.' }
    ],
    outcomes: [
      'Recognize and pronounce all 28 Arabic letters from correct articulation points',
      'Read compound words and complete Quranic sentences fluently',
      'Transition smoothly to reading directly from the Holy Mushaf',
      'Build confidence without intimidation or stress'
    ],
    prerequisites: 'None - open to absolute beginners of all ages.'
  },
  {
    id: 'quran-tajweed',
    title: 'Quran Reading with Tajweed',
    arabicTitle: 'تلاوة القرآن بالتجويد',
    tagline: 'Master the rules of recitation as revealed to the Prophet Muhammad (ﷺ)',
    description: 'A comprehensive recitation course focusing on Makharij (points of articulation), Sifaat (characteristics of letters), Noon Sakinah, Meem Sakinah, Mudood (elongations), and Waqf (stopping signs).',
    level: 'All Levels',
    ageGroup: 'All Ages',
    duration: '6 to 12 Months',
    classesPerWeek: '2 - 5 Days',
    lessonsCount: 30,
    featured: true,
    syllabus: [
      { title: 'Makharij Al-Huroof (Articulation Points)', description: 'Throat, tongue, lips, nasal cavity, and empty mouth sounds.' },
      { title: 'Rules of Noon & Tanween', description: 'Izhar, Idgham (with & without Ghunnah), Iqlab, and Ikhfa.' },
      { title: 'Rules of Meem Sakinah & Lam', description: 'Ikhfa Shafawi, Idgham Shafawi, Izhar Shafawi, and Lam Shamsiyyah/Qamariyyah.' },
      { title: 'Mudood (Elongations)', description: 'Asli, Muttasil, Munfasil, Lazim, and Aridh lis-Sukoon durations.' },
      { title: 'Waqf, Ibtida & Symbols of Mushaf', description: 'Appropriate stopping places, resuming recitation, and avoiding changes in meaning.' }
    ],
    outcomes: [
      'Recite the Holy Quran with authentic melodic precision and rule compliance',
      'Identify and apply Tajweed rules instinctively while reciting',
      'Eliminate hidden and manifest recitation errors (Lahn Jali & Lahn Khafi)',
      'Receive an Academy Tajweed Completion Certificate upon evaluation'
    ],
    prerequisites: 'Basic ability to read Arabic words (or Noorani Qaida completion).'
  },
  {
    id: 'quran-hifz',
    title: 'Quran Memorization (Hifz Program)',
    arabicTitle: 'تحفيظ القرآن الكريم',
    tagline: 'Structured, tested memorization methodology with daily revision tracking',
    description: 'Full Quran Hifz or selective Surahs (Juz Amma, Surah Al-Baqarah, Surah Yaseen, Al-Mulk, Al-Kahf). Includes Sabaq (new lesson), Sabaqi (recent lessons), and Manzil (cumulative revision) tracked in a student digital log.',
    level: 'Intermediate',
    ageGroup: 'All Ages',
    duration: '1 to 3 Years',
    classesPerWeek: '4 - 6 Days',
    lessonsCount: 114,
    featured: true,
    syllabus: [
      { title: 'Sabaq (Daily New Verses)', description: 'Teacher corrects pronunciation before memorization to prevent memorizing mistakes.' },
      { title: 'Sabaqi (Recent 5-10 Pages Revision)', description: 'Solidifying newly memorized verses so they become second nature.' },
      { title: 'Manzil (Permanent Cumulative Revision)', description: 'Daily cycling of previously memorized Ajzaa (parts) for lifelong retention.' },
      { title: 'Mutashabihat (Similar Verses Guide)', description: 'Specialized techniques to master verses that repeat across different Surahs.' },
      { title: 'Monthly Evaluation & Ijazah Pathway', description: 'Formal testing before an independent senior Qari panel.' }
    ],
    outcomes: [
      'Retain Quranic verses with crystal-clear memory and rock-solid revision',
      'Recite prolonged sections smoothly during Taraweeh and Tahajjud prayers',
      'Develop exceptional spiritual discipline and love for Allah’s words',
      'Eligible for Sanad / Ijazah with linked chain to the Prophet (ﷺ)'
    ],
    prerequisites: 'Fluent Quran reading with standard Tajweed.'
  },
  {
    id: 'islamic-studies-kids',
    title: 'Islamic Studies & Tarbiyah for Kids',
    arabicTitle: 'الدراسات الإسلامية والتربية',
    tagline: 'Nurturing strong Muslim character, morals, and daily Islamic practice',
    description: 'An engaging, values-based curriculum covering Aqeedah (creed), Daily Adhkar & Duas, practical Salah training, Seerah of Prophet Muhammad (ﷺ), stories of the Prophets, and Islamic etiquette for modern youth.',
    level: 'Beginner',
    ageGroup: 'Kids & Teens',
    duration: '6 to 12 Months',
    classesPerWeek: '2 - 3 Days',
    lessonsCount: 24,
    syllabus: [
      { title: 'Aqeedah & Pillars of Islam', description: 'Tawheed, belief in Allah, Angels, Books, Messengers, Day of Judgment, and Qadr.' },
      { title: 'Step-by-Step Practical Salah & Wudhu', description: 'Correct postures, recitations, Sunnahs, and interactive practice.' },
      { title: 'Essential Daily Masnoon Duas', description: 'Duas for waking up, eating, leaving home, entering mosque, and protection.' },
      { title: 'Seerah & Stories of the Anbiya', description: 'Inspiring life of Rasulullah (ﷺ), Ibrahim, Musa, Isa, and Yusuf (AS).' },
      { title: 'Islamic Manners & Akhlaaq', description: 'Respecting parents, honesty, kindness to neighbors, modesty, and dealing with peer pressure.' }
    ],
    outcomes: [
      'Perform 5 daily prayers independently and correctly with understanding',
      'Memorize 25+ essential daily supplications with their meanings',
      'Build unshakeable Islamic identity and moral pride in western societies',
      'Develop empathy, respect, and honorable Muslim conduct'
    ],
    prerequisites: 'None - open to kids and teens aged 5 to 17.'
  },
  {
    id: 'tafseer-translation',
    title: 'Quran Translation & Tafseer',
    arabicTitle: 'تفسير القرآن وترجمته',
    tagline: 'Uncover the profound wisdom, context, and life guidance of the Holy Quran',
    description: 'Understand the verses you recite every day. Study word-by-word Arabic vocabulary, historical revelation contexts (Asbab al-Nuzul), scholarly commentary (Ibn Kathir, Al-Sa’di), and modern practical takeaways.',
    level: 'Intermediate',
    ageGroup: 'Adults & Sisters',
    duration: '9 to 18 Months',
    classesPerWeek: '2 - 3 Days',
    lessonsCount: 40,
    syllabus: [
      { title: 'Linguistic Analysis & Key Vocabulary', description: 'Root words, frequently occurring Quranic vocabulary, and grammar context.' },
      { title: 'Asbab al-Nuzul (Reasons for Revelation)', description: 'Historical backdrop of Mecca and Medina periods.' },
      { title: 'Thematic Tafseer of Key Surahs', description: 'Surah Al-Kahf, Yaseen, Al-Mulk, Al-Hujurat, and Juz 30.' },
      { title: 'Contemporary Application & Reflection', description: 'How to live Quranic principles in family life, career, and personal trials.' }
    ],
    outcomes: [
      'Attain deep presence (Khushu) in prayer by understanding what is recited',
      'Master 500+ recurrent Quranic vocabulary terms',
      'Derive moral and ethical guidance directly from the divine text',
      'Strengthen spiritual connection with Allah’s timeless message'
    ],
    prerequisites: 'Ability to read Quran.'
  },
  {
    id: 'ten-qiraat',
    title: 'Ten Qira’at & Ijazah Certification',
    arabicTitle: 'القراءات العشر والإجازة',
    tagline: 'Traditional Sanad linked back to the Messenger of Allah (ﷺ)',
    description: 'Advanced course for Huffaz and experienced Qaris. Learn the canonical readings including Hafs ‘an ‘Asim, Warsh ‘an Nafi’, Qalun, Al-Duri, and others. Complete recitation of the entire Mushaf before a Sanad-holding Sheikh.',
    level: 'Advanced',
    ageGroup: 'Adults & Sisters',
    duration: '1 to 2 Years',
    classesPerWeek: '2 - 4 Days',
    lessonsCount: 50,
    syllabus: [
      { title: 'Matn Al-Jazariyyah & Shatibiyyah', description: 'Classical poetic texts on Tajweed principles and variant readings.' },
      { title: 'Usul & Farsh of Selected Qira’ah', description: 'General phonetic rules and specific verse distinctions.' },
      { title: 'Full Mushaf Khatmah Recitation', description: 'Continuous 1-on-1 recitation with rigorous critique and verification.' },
      { title: 'Sanad Chain Audit & Final Oral Exam', description: 'Issuance of formal Ijazah with unbroken chain of transmission.' }
    ],
    outcomes: [
      'Master distinct canonical recitation variants recognized across the Islamic world',
      'Earn an authentic, officially stamped Ijazah with complete Sanad lineage',
      'Qualified to teach and confer Ijazah to the next generation',
      'Deep mastery of classical Arabic phonology'
    ],
    prerequisites: 'Complete memorization (Hifz) and advanced Tajweed certificate.'
  }
];
