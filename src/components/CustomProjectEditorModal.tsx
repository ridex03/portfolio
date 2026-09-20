import React, { useState } from 'react';
import { X, Plus, Trash2, RotateCcw, Save, Film, Check } from 'lucide-react';
import { Project } from '../types';

interface CustomProjectEditorModalProps {
  isOpen: boolean;
  projects: Project[];
  onSave: (updatedProjects: Project[]) => void;
  onResetToDefaults: () => void;
  onClose: () => void;
}

export const CustomProjectEditorModal: React.FC<CustomProjectEditorModalProps> = ({
  isOpen,
  projects,
  onSave,
  onResetToDefaults,
  onClose,
}) => {
  if (!isOpen) return null;

  const [list, setList] = useState<Project[]>(projects);
  const [activeEditIndex, setActiveEditIndex] = useState<number>(0);
  const [savedStatus, setSavedStatus] = useState(false);

  const handleUpdateField = (index: number, field: keyof Project, value: any) => {
    const next = [...list];
    next[index] = { ...next[index], [field]: value };
    setList(next);
  };

  const handleAddNewProject = () => {
    const newProj: Project = {
      id: `custom-${Date.now()}`,
      title: 'Новый проект RIDEX',
      category: 'reels',
      categoryLabel: 'Reels / Shorts',
      client: 'Мой Клиент / Блогер',
      clientType: 'Блогер',
      aspectRatio: '9:16',
      duration: '0:30',
      viewsMetric: 'Высокое удержание',
      description: 'Динамичный монтаж, трендовые субтитры, саунд-дизайн и хук в первые 2 секунды.',
      highlights: ['Удержание аудитории', 'Кастомные титры в After Effects', 'Саунд-дизайн'],
      software: ['Premiere Pro', 'After Effects'],
      thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      videoUrl: '',
      soundDesignIncluded: true,
    };
    const next = [newProj, ...list];
    setList(next);
    setActiveEditIndex(0);
  };

  const handleDelete = (index: number) => {
    if (list.length <= 1) return;
    const next = list.filter((_, i) => i !== index);
    setList(next);
    setActiveEditIndex(0);
  };

  const handleSaveAll = () => {
    onSave(list);
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 1200);
  };

  const activeProject = list[activeEditIndex] || list[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0e1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#131622]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Редактор проектов портфолио
              </h3>
              <p className="text-xs text-slate-400 font-mono-code">
                Фарход, здесь ты можешь вставить свои реальные ссылки на видео и изменить тексты
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAddNewProject}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Добавить работу</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Split */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Sidebar List of Projects */}
          <div className="md:col-span-4 border-r border-white/10 p-4 space-y-2 overflow-y-auto max-h-[55vh] md:max-h-none bg-[#0a0b10]">
            <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400 px-2 mb-2">
              Список работ ({list.length}):
            </div>
            {list.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setActiveEditIndex(idx)}
                className={`p-3 rounded-xl cursor-pointer border text-left transition-all flex items-center justify-between group ${
                  activeEditIndex === idx
                    ? 'bg-purple-600/20 border-purple-500 text-white'
                    : 'bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                <div className="overflow-hidden pr-2">
                  <div className="font-semibold text-xs truncate text-white">
                    {proj.title}
                  </div>
                  <div className="text-[10px] font-mono-code text-purple-300">
                    {proj.categoryLabel} • {proj.aspectRatio}
                  </div>
                </div>

                {list.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(idx);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-red-500/20 text-red-400 transition-opacity"
                    title="Удалить"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Editor Form */}
          <div className="md:col-span-8 p-6 overflow-y-auto max-h-[60vh] md:max-h-none space-y-5 bg-[#0e1017]">
            {activeProject && (
              <>
                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">
                    Название проекта:
                  </label>
                  <input
                    type="text"
                    value={activeProject.title}
                    onChange={(e) => handleUpdateField(activeEditIndex, 'title', e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">
                      Категория:
                    </label>
                    <select
                      value={activeProject.category}
                      onChange={(e) => {
                        const cat = e.target.value as Project['category'];
                        const labels = {
                          reels: 'Reels / Shorts',
                          saas: 'SaaS & Моушн',
                          blender: 'Blender 3D',
                          youtube: 'YouTube & Бренды'
                        };
                        handleUpdateField(activeEditIndex, 'category', cat);
                        handleUpdateField(activeEditIndex, 'categoryLabel', labels[cat]);
                        handleUpdateField(activeEditIndex, 'aspectRatio', cat === 'reels' ? '9:16' : '16:9');
                      }}
                      className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="reels">Reels / Shorts (9:16)</option>
                      <option value="saas">SaaS & Моушн (AE)</option>
                      <option value="blender">Blender 3D</option>
                      <option value="youtube">YouTube & Бренды (16:9)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">
                      Формат соотношения сторон:
                    </label>
                    <select
                      value={activeProject.aspectRatio}
                      onChange={(e) => handleUpdateField(activeEditIndex, 'aspectRatio', e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="9:16">9:16 (Вертикальное - Reels/Shorts)</option>
                      <option value="16:9">16:9 (Горизонтальное - YouTube/SaaS)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">
                      Клиент:
                    </label>
                    <input
                      type="text"
                      value={activeProject.client}
                      onChange={(e) => handleUpdateField(activeEditIndex, 'client', e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">
                      Метрика успеха (охваты / удержание):
                    </label>
                    <input
                      type="text"
                      value={activeProject.viewsMetric || ''}
                      placeholder="Например: Удержание 84% или Фирменный стиль"
                      onChange={(e) => handleUpdateField(activeEditIndex, 'viewsMetric', e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">
                    Ссылка на видео (YouTube / Vimeo / MP4):
                  </label>
                  <input
                    type="text"
                    value={activeProject.videoUrl || ''}
                    placeholder="https://youtube.com/... или https://...mp4"
                    onChange={(e) => handleUpdateField(activeEditIndex, 'videoUrl', e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none font-mono-code"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Поддерживаются ссылки YouTube, YouTube Shorts, Vimeo, а также прямые видеофайлы (.mp4).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">
                    Ссылка на обложку (Thumbnail URL):
                  </label>
                  <input
                    type="text"
                    value={activeProject.thumbnailUrl}
                    onChange={(e) => handleUpdateField(activeEditIndex, 'thumbnailUrl', e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none font-mono-code"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">
                    Описание проекта:
                  </label>
                  <textarea
                    rows={3}
                    value={activeProject.description}
                    onChange={(e) => handleUpdateField(activeEditIndex, 'description', e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#10131c] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetToDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors font-mono-code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Сбросить к исходным работам</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10"
            >
              Отмена
            </button>
            <button
              type="button"
              onClick={handleSaveAll}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all w-full sm:w-auto"
            >
              {savedStatus ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Сохранено!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Сохранить изменения</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
