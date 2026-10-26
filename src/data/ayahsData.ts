export interface AyahSample {
  id: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  arabicText: string;
  transliteration: string;
  translation: string;
  audioUrl: string;
  reciter: string;
  tajweedRule: {
    name: string;
    description: string;
    exampleLetters: string;
  };
}

export const SAMPLE_AYAHS: AyahSample[] = [
  {
    id: 'fatiha-1',
    surahName: 'Al-Fatihah (The Opening)',
    surahNumber: 1,
    ayahNumber: 1,
    arabicText: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    transliteration: 'Bismi Allāhi ar-raḥmāni ar-raḥīm',
    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001001.mp3',
    reciter: 'Sheikh Mishary Rashid Alafasy',
    tajweedRule: {
      name: 'Lam Shamsiyyah & Madd Aridh',
      description: 'The letter Lam in "Ar-Rahman" is assimilated into Ra without pronouncing the Lam (Idgham Shamsi). The final "Raheem" is elongated for 2, 4, or 6 counts upon stopping.',
      exampleLetters: 'الرَّ / حِيمِ'
    }
  },
  {
    id: 'fatiha-2',
    surahName: 'Al-Fatihah (The Opening)',
    surahNumber: 1,
    ayahNumber: 2,
    arabicText: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ',
    transliteration: 'Al-ḥamdu lillāhi rabbi al-‘ālamīn',
    translation: '[All] praise is [due] to Allah, Lord of the worlds -',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/001002.mp3',
    reciter: 'Sheikh Mishary Rashid Alafasy',
    tajweedRule: {
      name: 'Izhar Qamariyyah & Ha Makhraj',
      description: 'Clear pronunciation of the throat letter Haa (ح) from the middle of the throat, distinguishing it sharply from Haa (هـ).',
      exampleLetters: 'ٱلْحَمْدُ'
    }
  },
  {
    id: 'ikhlas-1',
    surahName: 'Al-Ikhlas (Purity of Faith)',
    surahNumber: 112,
    ayahNumber: 1,
    arabicText: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
    transliteration: 'Qul huwa Allāhu aḥad',
    translation: 'Say, "He is Allah, [who is] One,"',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/112001.mp3',
    reciter: 'Sheikh Mishary Rashid Alafasy',
    tajweedRule: {
      name: 'Qaf Deep Elevation (Istilaa) & Qalqalah',
      description: 'The heavy letter Qaf (ق) is articulated from the deepest root of the tongue with elevation. Upon stopping on "Ahad", the Dal undergoes Qalqalah (echoing bounce).',
      exampleLetters: 'قُلْ / أَحَدْ'
    }
  },
  {
    id: 'ayat-kursi',
    surahName: 'Al-Baqarah (The Throne Verse)',
    surahNumber: 2,
    ayahNumber: 255,
    arabicText: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ',
    transliteration: 'Allāhu lā ilāha illā Huwa al-Ḥayyu al-Qayyūm, lā ta’khudhuhū sinatun wa-lā nawm...',
    translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep...',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/002255.mp3',
    reciter: 'Sheikh Mishary Rashid Alafasy',
    tajweedRule: {
      name: 'Madd Ja’iz Munfasil & Idgham with Ghunnah',
      description: 'In "lā ilāha", the Madd letter is followed by Hamzah in the next word (detached elongation, 4-5 harakat). In "sinatun wa-la", the Tanween merges into Waw with a 2-count nasal sound (Ghunnah).',
      exampleLetters: 'لَآ إِلَٰهَ / سِنَةٌۭ وَلَا'
    }
  }
];
