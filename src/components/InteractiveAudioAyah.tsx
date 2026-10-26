import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Sparkles, RefreshCw, BookOpen } from 'lucide-react';
import { SAMPLE_AYAHS, AyahSample } from '../data/ayahsData';

export const InteractiveAudioAyah: React.FC = () => {
  const [selectedAyah, setSelectedAyah] = useState<AyahSample>(SAMPLE_AYAHS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // When selected ayah changes, reset audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      audioRef.current.load();
    }
  }, [selectedAyah]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play error:', err);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-xl overflow-hidden p-6 sm:p-7">
      <audio
        ref={audioRef}
        src={selectedAyah.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Header with selector tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-50">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#047857]">Interactive Tajweed Experience</span>
          <h4 className="text-base font-bold text-slate-900">Listen & Learn Recitation Rules</h4>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-emerald-50/70 rounded-lg">
          {SAMPLE_AYAHS.map((ayah) => {
            const isActive = ayah.id === selectedAyah.id;
            return (
              <button
                key={ayah.id}
                onClick={() => setSelectedAyah(ayah)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#064e3b] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {ayah.surahName.split('(')[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Arabic Ayah Display */}
      <div className="py-6 text-center">
        <div className="text-xs text-slate-600 mb-2">
          Surah {selectedAyah.surahName} · Verse {selectedAyah.ayahNumber}
        </div>
        
        <p
          dir="rtl"
          className="font-quran text-2xl sm:text-3xl lg:text-4xl leading-loose sm:leading-loose text-[#064e3b] font-medium my-4 px-2 tracking-wide"
        >
          {selectedAyah.arabicText}
        </p>

        {/* Transliteration */}
        <p className="text-xs sm:text-sm text-slate-500 italic max-w-xl mx-auto mb-2">
          "{selectedAyah.transliteration}"
        </p>

        {/* Translation */}
        <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xl mx-auto">
          {selectedAyah.translation}
        </p>
      </div>

      {/* Audio Controller Bar */}
      <div className="mt-4 p-4 rounded-xl bg-[#064e3b] text-white flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={togglePlay}
            className="w-11 h-11 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 flex items-center justify-center shadow-md transition-transform active:scale-95 shrink-0"
            aria-label={isPlaying ? 'Pause Recitation' : 'Play Recitation'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-slate-900 text-slate-900" />
            ) : (
              <Play className="w-5 h-5 fill-slate-900 text-slate-900 translate-x-0.5" />
            )}
          </button>
          <div className="text-left">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>{isPlaying ? 'Reciting Now' : 'Click to Listen'}</span>
            </div>
            <div className="text-[11px] text-[#a7d7bc]">{selectedAyah.reciter}</div>
          </div>
        </div>

        {/* Progress scrub bar */}
        <div className="w-full flex-1 flex items-center gap-2">
          <div className="w-full h-2 bg-emerald-950/60 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-amber-400 transition-all duration-150 rounded-full"
              style={{
                width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Tajweed rule educational tip */}
      <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-left">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-md bg-amber-500/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-950 flex items-center gap-2">
              <span>Tajweed Rule Focus: {selectedAyah.tajweedRule.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-[#92400e] font-arabic font-semibold">
                {selectedAyah.tajweedRule.exampleLetters}
              </span>
            </div>
            <p className="text-xs text-amber-900 mt-1 leading-relaxed">
              {selectedAyah.tajweedRule.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
