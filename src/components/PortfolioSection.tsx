import React, { useState } from 'react';
import { Smartphone, Sparkles, Film, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';

interface PortfolioSectionProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Filter lists
  const reelsProjects = projects.filter((p) => p.category === 'reels');
  const saasProjects = projects.filter((p) => p.category === 'saas');
  const otherProjects = projects.filter((p) => p.category === 'blender' || p.category === 'youtube');

  const handleTogglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Все работы', count: projects.length },
    { id: 'reels', label: '🔥 Reels & Shorts (#1)', count: reelsProjects.length },
    { id: 'saas', label: '✨ SaaS & Моушн', count: saasProjects.length },
    { id: 'youtube', label: '🎬 3D Blender & YouTube', count: otherProjects.length },
  ];

  return (
    <section id="showcase" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-mono-code uppercase tracking-wider text-purple-400 font-semibold">
                Интерактивное портфолио • Воспроизведение на месте
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Кейсы & Проекты
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Нажмите кнопку «Play» на любом видео — оно воспроизводится прямо на карточке с чистым звуком и без лишних всплывающих окон.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#12141f] border border-white/10 backdrop-blur-md self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded-md bg-black/40 text-purple-300">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. REELS & SHORTS BLOCK (НА ПЕРВОМ МЕСТЕ) */}
        {(activeCategory === 'all' || activeCategory === 'reels') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Reels & Shorts — Основное направление
                    </h3>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[11px] font-mono-code font-bold">
                      ТОП 1
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Вертикальный формат (9:16) для экспертов и блогеров: удержание внимания, кинетическая типографика и саунд-дизайн
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono-code text-slate-400">
                {reelsProjects.length} видеороликов
              </span>
            </div>

            {/* Vertical 9:16 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
              {reelsProjects.map((project) => (
                <div
                  key={project.id}
                  className={project.aspectRatio === '16:9' ? 'sm:col-span-2 lg:col-span-2 xl:col-span-2' : ''}
                >
                  <ProjectCard
                    project={project}
                    isPlaying={playingId === project.id}
                    onTogglePlay={() => handleTogglePlay(project.id)}
                    onPause={() => setPlayingId(null)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. SAAS & MOTION DESIGN BLOCK (ВТОРОЕ МЕСТО) */}
        {(activeCategory === 'all' || activeCategory === 'saas') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      SaaS & Моушн-дизайн
                    </h3>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[11px] font-mono-code font-bold">
                      After Effects
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Анимации веб-интерфейсов, плавный скролл, продуктовые демо и векторная графика для технологичных брендов
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono-code text-slate-400">
                {saasProjects.length} видеоролика
              </span>
            </div>

            {/* 16:9 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {saasProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isPlaying={playingId === project.id}
                  onTogglePlay={() => handleTogglePlay(project.id)}
                  onPause={() => setPlayingId(null)}
                />
              ))}
            </div>
          </div>
        )}

        {/* 3. OTHER WORKS: BLENDER 3D, EXPLAINERS & YOUTUBE (ТРЕТЬЕ МЕСТО) */}
        {(activeCategory === 'all' || activeCategory === 'youtube' || activeCategory === 'blender') && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Остальные работы — 3D в Blender, Эксплейнеры & YouTube
                    </h3>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono-code font-bold">
                      3D & Промо
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Интеграция 3D объектов в видеоряд, инфографика и кинематографичные трейлеры
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono-code text-slate-400">
                {otherProjects.length} видеороликов
              </span>
            </div>

            {/* 16:9 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isPlaying={playingId === project.id}
                  onTogglePlay={() => handleTogglePlay(project.id)}
                  onPause={() => setPlayingId(null)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Direct Order Bottom Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-[#0e1017] border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono-code font-semibold">
              Индивидуальный расчет под вашу задачу
            </span>
            <h4 className="text-2xl font-bold text-white mt-2">
              Нужен монтаж Reels, SaaS анимация или 3D графика?
            </h4>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Напишите в Telegram, прикрепите исходники или референсы — обсудим формат, тайминг и рассчитаем стоимость.
            </p>
          </div>

          <a
            href="https://t.me/ridex03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Написать RIDEX в Telegram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
