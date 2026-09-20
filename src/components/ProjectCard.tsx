import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Send, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPause: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isPlaying,
  onTogglePlay,
  onPause,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const theatreVideoRef = useRef<HTMLVideoElement | null>(null);
  const theatreContainerRef = useRef<HTMLDivElement | null>(null);

  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isTheatreOpen, setIsTheatreOpen] = useState(false);
  const [isTheatrePlaying, setIsTheatrePlaying] = useState(true);

  const isReel = project.aspectRatio === '9:16';

  useEffect(() => {
    if (!videoRef.current || isTheatreOpen) return;
    if (isPlaying) {
      videoRef.current.play().catch((err) => {
        console.warn('Playback error, trying muted:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(console.error);
        }
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, isTheatreOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    if (theatreVideoRef.current) {
      theatreVideoRef.current.muted = nextMuted;
    }
  };

  const openTheatre = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTheatreOpen(true);
    setIsTheatrePlaying(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const closeTheatre = () => {
    setIsTheatreOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    if (theatreVideoRef.current && videoRef.current) {
      videoRef.current.currentTime = theatreVideoRef.current.currentTime;
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  // Keyboard controls for Theatre mode
  useEffect(() => {
    if (!isTheatreOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeTheatre();
      } else if (e.key === ' ') {
        e.preventDefault();
        if (theatreVideoRef.current) {
          if (theatreVideoRef.current.paused) {
            theatreVideoRef.current.play();
            setIsTheatrePlaying(true);
          } else {
            theatreVideoRef.current.pause();
            setIsTheatrePlaying(false);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTheatreOpen]);

  const toggleTheatrePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (theatreVideoRef.current) {
      if (theatreVideoRef.current.paused) {
        theatreVideoRef.current.play();
        setIsTheatrePlaying(true);
      } else {
        theatreVideoRef.current.pause();
        setIsTheatrePlaying(false);
      }
    }
  };

  const toggleNativeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (theatreContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else if (theatreContainerRef.current.requestFullscreen) {
        theatreContainerRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const tgOrderMessage = encodeURIComponent(
    `Здравствуйте, Фарход (RIDEX)! Заинтересовал проект из вашего портфолио: "${project.title}" (${project.categoryLabel}). Хочу заказать видеомонтаж в таком же стиле!`
  );
  const tgOrderUrl = `https://t.me/ridex03?text=${tgOrderMessage}`;

  return (
    <>
      <div
        className={`group relative rounded-2xl bg-[#0e1017] border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-purple-500/10 ${
          isPlaying ? 'ring-2 ring-purple-500/50' : ''
        }`}
      >
      {/* Video / Media Player Container */}
      <div
        className={`relative w-full overflow-hidden bg-black select-none ${
          isReel ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {/* Video Element (always mounted for quick inline playback) */}
        {!videoError && project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover cursor-pointer"
            onClick={onTogglePlay}
            onTimeUpdate={handleTimeUpdate}
            onEnded={onPause}
            onError={() => {
              console.warn(`Video failed for ${project.id}, falling back to poster`);
              setVideoError(true);
            }}
          />
        ) : (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono-code font-semibold text-purple-300 border border-purple-500/30">
            {project.categoryLabel}
          </span>

          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono-code text-slate-300 border border-white/10">
              {project.duration}
            </span>
          </div>
        </div>

        {/* Quick expand button in top right corner (available on hover) */}
        <button
          onClick={openTheatre}
          className="absolute top-12 right-3 z-20 p-2 rounded-xl bg-black/80 hover:bg-purple-600 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-lg hover:scale-110 active:scale-95"
          title="Открыть на весь экран без обрезки"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Play Overlay Button when paused */}
        {!isPlaying && (
          <div
            onClick={onTogglePlay}
            className="absolute inset-0 bg-black/35 hover:bg-black/25 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group/overlay"
          >
            <div className="w-16 h-16 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/50 transform group-hover/overlay:scale-110 active:scale-95 transition-all">
              <Play className="w-7 h-7 ml-1 fill-white" />
            </div>
            <span className="mt-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono-code text-slate-200 border border-white/10">
              Смотреть прямо здесь
            </span>
          </div>
        )}

        {/* Inline Active Video Controls Bar (shown when playing) */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2 z-20">
            {/* Scrubber timeline */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:h-1.5 transition-all"
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={onTogglePlay}
                  className="p-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white border border-white/15"
                  title="Пауза"
                >
                  <Pause className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white border border-white/15 flex items-center gap-1.5"
                  title={isMuted ? 'Включить звук' : 'Выключить звук'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span className="text-[10px] font-mono-code hidden sm:inline">
                    {isMuted ? 'Без звука' : 'Звук ВКЛ'}
                  </span>
                </button>

                <span className="text-[11px] font-mono-code text-slate-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={openTheatre}
                  className="p-1.5 rounded-lg bg-black/70 hover:bg-purple-600 text-white border border-white/15 transition-colors"
                  title="Открыть на весь экран без обрезки"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Info & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono-code">
            <span>{project.client}</span>
            <span className="text-purple-400 font-semibold">{project.aspectRatio}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Software pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.software.map((sw) => (
              <span
                key={sw}
                className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.04] text-slate-300 border border-white/10"
              >
                {sw}
              </span>
            ))}
            {project.soundDesignIncluded && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-purple-950/40 text-purple-300 border border-purple-500/20">
                SFX саунд-дизайн
              </span>
            )}
          </div>

          {/* Expandable Project Highlights (No modal popup needed!) */}
          {showDetails && (
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 space-y-2 animate-fadeIn">
              <div className="font-semibold text-purple-300 font-mono-code text-[11px]">
                Особенности монтажа:
              </div>
              <ul className="space-y-1.5">
                {project.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono-code flex items-center gap-1 transition-colors"
              title={showDetails ? 'Скрыть детали' : 'Подробнее о монтаже'}
            >
              <span>{showDetails ? 'Скрыть' : 'Детали'}</span>
              {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-mono-code flex items-center gap-1 transition-colors"
                title="Оригинал на Google Диске"
              >
                <span>Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <a
            href={tgOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs shadow-md shadow-purple-600/30 transition-all active:scale-95"
            title="Заказать монтаж в Telegram"
          >
            <Send className="w-3 h-3" />
            <span>Заказать</span>
          </a>
        </div>
      </div>
    </div>

    {/* FULLSCREEN THEATRE LIGHTBOX (PRESERVES 100% OF 9:16 AND 16:9 WITHOUT ANY CROPPING) */}
    {isTheatreOpen && (
      <div
        ref={theatreContainerRef}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-6 select-none"
        onClick={closeTheatre}
      >
        {/* Top Bar */}
        <div
          className="w-full max-w-5xl flex items-center justify-between z-20 pb-3 border-b border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-purple-600/30 text-purple-300 border border-purple-500/40 text-xs font-mono-code font-semibold">
              {project.categoryLabel}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-300 text-xs font-mono-code font-bold">
              {project.aspectRatio}
            </span>
            <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleNativeFullscreen}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all text-xs flex items-center gap-1.5 border border-white/10"
              title="Развернуть на весь экран монитора"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline font-mono-code text-xs">Монитор</span>
            </button>

            <button
              onClick={closeTheatre}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 flex items-center gap-1"
              title="Закрыть (Esc)"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline font-mono-code text-xs">Esc</span>
            </button>
          </div>
        </div>

        {/* Central Video: pure aspect ratio, object-contain, ZERO CROPPING */}
        <div
          className="relative flex-1 w-full flex items-center justify-center my-auto overflow-hidden py-3"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={theatreVideoRef}
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            loop
            autoPlay
            playsInline
            muted={isMuted}
            className={`rounded-2xl shadow-2xl ring-1 ring-white/15 bg-black cursor-pointer ${
              isReel
                ? 'h-full max-h-[78vh] aspect-[9/16] object-contain'
                : 'w-full max-w-5xl max-h-[75vh] aspect-video object-contain'
            }`}
            onClick={toggleTheatrePlay}
            onTimeUpdate={() => {
              if (theatreVideoRef.current) {
                setCurrentTime(theatreVideoRef.current.currentTime);
              }
            }}
          />

          {/* Floating Play indicator on pause */}
          {!isTheatrePlaying && (
            <div
              onClick={toggleTheatrePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 backdrop-blur-xs rounded-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <Play className="w-9 h-9 ml-1 fill-white" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Controls Bar */}
        <div
          className="w-full max-w-3xl flex flex-col gap-2.5 z-20 pt-3 border-t border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrubber slider */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:h-2 transition-all"
            />
          </div>

          {/* Bottom Row controls */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheatrePlay}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-purple-600 text-white border border-white/15 transition-colors"
                title={isTheatrePlaying ? 'Пауза (Пробел)' : 'Воспроизведение (Пробел)'}
              >
                {isTheatrePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-2 transition-colors"
                title={isMuted ? 'Включить звук' : 'Выключить звук'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
                <span className="text-xs font-mono-code hidden sm:inline">
                  {isMuted ? 'Без звука' : 'Звук'}
                </span>
              </button>

              <span className="text-xs font-mono-code text-slate-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={tgOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Заказать в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
};
