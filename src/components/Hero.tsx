import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Send, ArrowRight, Sparkles, Layers, Award, Film, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100);
      setActiveFrame(pct);
    }
  };

  const togglePlay = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn('Video playback notice:', err);
              setIsPlaying(false);
            });
        }
      }
    } else {
      // Toggle simulated playback state if in fallback mode
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono-code text-slate-300">
              Свободен для новых проектов • Telegram: <strong className="text-white font-semibold">@ridex03</strong>
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.08] mb-6">
            ВИДЕОМОНТАЖ & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              МОУШН ДИЗАЙН
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Привет, я <strong className="text-white">RIDEX (Фарход)</strong>. 7 лет создаю видео, которые удерживают внимание, 
            максимально вовлекают зрителей и приводят целевую аудиторию: стильные 
            <span className="text-purple-300 font-semibold"> Reels & Shorts</span>, 
            динамичный <span className="text-blue-300 font-semibold">YouTube-монтаж</span>, 
            <span className="text-indigo-300 font-semibold"> SaaS анимации </span> 
            и интеграция реалистичных 3D элементов в Blender для сочной картинки.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="https://t.me/ridex03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base shadow-xl shadow-purple-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-5 h-5" />
              <span>Обсудить задачу в Telegram</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </a>

            <a
              href="#showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 transition-colors"
            >
              <Film className="w-5 h-5 text-purple-400" />
              <span>Смотреть портфолио</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold text-base border border-purple-500/30 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Услуги & Стек</span>
            </a>
          </div>

          {/* Software tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 text-xs font-mono-code text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Premiere Pro
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              After Effects
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Blender (3D элементы)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Любой формат видео
            </span>
          </div>
        </div>

        {/* Interactive Premiere Pro / Showreel Preview Box */}
        <div className="relative max-w-4xl mx-auto rounded-2xl border border-white/15 bg-[#0e1017] shadow-2xl overflow-hidden group">
          {/* Top timeline bar mimicking professional NLE software */}
          <div className="h-11 bg-[#141722] border-b border-white/10 px-4 flex items-center justify-between text-xs font-mono-code text-slate-400 select-none">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-slate-300 font-semibold hidden sm:inline">
                Ridex_Showreel_Master_2026.prproj
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px]">
                4K UHD • 60 FPS
              </span>
              <span className="text-slate-400 hidden sm:inline">
                00:00:20:13
              </span>
            </div>
          </div>

          {/* Video / Visual Stage */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {!videoError ? (
              <video
                ref={videoRef}
                poster="/thumbnails/ridex_showreel.jpg"
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onError={() => {
                  console.warn('Hero video element error, showing fallback display');
                  setVideoError(true);
                }}
              >
                <source src="/videos/ridex_showreel.mp4" type="video/mp4" />
                <source src="/videos/reel_trailer.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                <img
                  src="/thumbnails/ridex_showreel.jpg"
                  alt="RIDEX Official Showreel"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            )}

            {/* Play/Pause Overlay button */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center transition-all">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/50 transform hover:scale-110 active:scale-95 transition-all group/btn"
                  title="Запустить шоурил"
                >
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </button>
                <span className="mt-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono-code text-slate-200 border border-white/10">
                  Кликните, чтобы посмотреть шоурил
                </span>
              </div>
            )}

            {/* In-video floating quick controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all"
                  title={isPlaying ? 'Пауза' : 'Воспроизведение'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all"
                  title={isMuted ? 'Включить звук' : 'Без звука'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-slate-300 text-xs font-mono-code border border-white/10">
                  Reels • 3D • Motion • Long-form
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Timeline Scrubber */}
          <div className="px-4 py-3 bg-[#10131c] border-t border-white/10">
            {/* Interactive scrub track */}
            <div 
              className="relative h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const pct = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
                setActiveFrame(pct);
                if (videoRef.current && videoRef.current.duration) {
                  videoRef.current.currentTime = (pct / 100) * videoRef.current.duration;
                }
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full relative"
                style={{ width: `${activeFrame}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center hover:border-purple-500/30 hover:bg-white/[0.05] transition-all"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
