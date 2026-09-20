import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Send, CheckCircle2, Film, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'colorgrade'>('video');

  // Reset video error when switching projects
  React.useEffect(() => {
    setVideoError(false);
  }, [project.id]);

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    try {
      // YouTube pattern
      const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
      if (ytMatch && ytMatch[1]) {
        return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&mute=1&rel=0`;
      }
      // Vimeo pattern
      const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
      if (vimeoMatch && vimeoMatch[1]) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1`;
      }
      // Google Drive pattern
      const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (driveMatch && driveMatch[1]) {
        return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
      }
    } catch {
      return null;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(project.videoUrl);

  const tgMessage = encodeURIComponent(
    `Привет, Фарход! Увидел в твоем портфолио проект "${project.title}". Хочу заказать похожее видео. Давай обсудим!`
  );
  const tgLink = `https://t.me/ridex03?text=${tgMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative w-full bg-black flex items-center justify-center">
          {project.hasColorGradeComparison && (
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeTab === 'video'
                    ? 'bg-purple-600 text-white'
                    : 'bg-black/60 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                Видео
              </button>
              <button
                onClick={() => setActiveTab('colorgrade')}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeTab === 'colorgrade'
                    ? 'bg-purple-600 text-white'
                    : 'bg-black/60 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                Сравнение цвета (RAW vs Grade)
              </button>
            </div>
          )}

          {activeTab === 'colorgrade' && project.colorGradeBefore && project.colorGradeAfter ? (
            <div className="p-4 w-full">
              <BeforeAfterSlider
                beforeImg={project.colorGradeBefore}
                afterImg={project.colorGradeAfter}
              />
            </div>
          ) : (
            <div className={`relative w-full ${project.aspectRatio === '9:16' ? 'max-w-sm mx-auto py-4' : 'aspect-video'}`}>
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={project.title}
                  className={`w-full h-full rounded-xl ${project.aspectRatio === '9:16' ? 'aspect-[9/16] max-h-[70vh]' : 'aspect-video'}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : project.videoUrl && !videoError ? (
                <video
                  poster={project.thumbnailUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className={`w-full h-full object-contain ${project.aspectRatio === '9:16' ? 'rounded-2xl max-h-[70vh]' : ''}`}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => {
                    console.warn('Project video error, fallback to thumbnail');
                    setVideoError(true);
                  }}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  <source src="/videos/sample-clip.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-2">
                      <Film className="w-4 h-4 text-purple-400" />
                      <span>{project.title}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Controls Overlay (for native video or image) */}
              {!embedUrl && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2">
                    {project.videoUrl && !videoError && (
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10"
                        title={isMuted ? 'Включить звук' : 'Выключить звук'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                      </button>
                    )}
                    <span className="px-2.5 py-1 rounded bg-black/60 text-white text-xs font-mono-code backdrop-blur-md border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded text-xs font-mono-code font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.categoryLabel}
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono-code text-slate-300 bg-white/5 border border-white/10">
                Клиент: {project.client} ({project.clientType})
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono-code text-slate-400 bg-white/5 border border-white/10">
                Формат: {project.aspectRatio}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Software Used */}
          <div>
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-3">
              Использованный софт & стек:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.software.map((sw) => (
                <span
                  key={sw}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-white/5 text-white border border-white/15 flex items-center gap-1.5"
                >
                  <Film className="w-3.5 h-3.5 text-purple-400" />
                  {sw}
                </span>
              ))}
              {project.soundDesignIncluded && (
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Полный саунд-дизайн (SFX + Мастеринг)
                </span>
              )}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-3">
                Что было реализовано в проекте:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                {project.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.driveUrl && (
                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono-code transition-colors"
                  title="Открыть оригинальный видеофайл на Google Диске"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  <span>Google Drive исходник</span>
                </a>
              )}
              <div className="text-xs text-slate-400">
                Понравился проект? Закажите монтаж или графику напрямую.
              </div>
            </div>

            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Заказать у RIDEX</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
