import React from 'react';
import { TOOLKIT } from '../data/portfolioData';
import { Cpu, Film, Sparkles, Box, Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export const SoftwareSkills: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Бриф & Анализ хука',
      desc: 'Изучаю целевую аудиторию, продумываю цепляющее начало (первые 2 секунды) и структуру удержания внимания.'
    },
    {
      num: '02',
      title: 'Сборка & Динамический темп',
      desc: 'Вырезаю все паузы и слова-паразиты в Premiere Pro. Выстраиваю ритм видео под пульс аудитории.'
    },
    {
      num: '03',
      title: 'Моушн, 3D & Саунд-дизайн',
      desc: 'Создаю анимации в After Effects, добавляю 3D элементы в Blender и накладываю многослойный SFX саунд-дизайн.'
    },
    {
      num: '04',
      title: 'Цветокор & Финальный рендер',
      desc: 'Точная калибровка цвета (Rec.709/HDR), экспорт под технические требования YouTube/Instagram/TikTok.'
    }
  ];

  return (
    <section id="tools" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-code text-blue-300 font-semibold mb-3">
              Инструменты & Экспертиза
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              7 Лет Профессионального Опыта
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Свободно владею ключевым софтом индустрии. Никаких шаблонов из мобильных приложений — 
              только глубокий ручной продакшн на уровне студийного стандарта.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Гарантия соблюдения дедлайна</div>
              <div className="text-[11px] text-slate-400">99.4% сдано строго вовремя</div>
            </div>
          </div>
        </div>

        {/* 3 Core Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {TOOLKIT.map((tool, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0e1017] border border-white/10 p-7 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Tool icon badge */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-2xl border shadow-inner border-white/15 bg-white/5 text-white group-hover:scale-105 transition-transform">
                    {tool.iconLetter}
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono-code px-2.5 py-1 rounded bg-white/5 border border-white/10 text-purple-300 font-semibold">
                      {tool.experience}
                    </span>
                    <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                      Уровень: <span className="text-white font-bold">{tool.level}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs font-mono-code text-purple-400 mb-4">
                  {tool.category}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {tool.desc}
                </p>
              </div>

              {/* Progress bar visual */}
              <div className="pt-4 border-t border-white/5">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    style={{ width: tool.level }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0d14] border border-white/10 p-8 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Как выстроен процесс работы со мной
            </h3>
            <p className="text-slate-400 text-sm">
              Понятные этапы без хаоса и бесконечных правок. Вы всегда знаете статус своего проекта.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="font-display font-extrabold text-3xl text-purple-500/40 mb-3">
                  {step.num}
                </div>
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-sm text-slate-300">
              Готовы запустить видео в производство прямо сейчас?
            </div>
            <a
              href="https://t.me/ridex03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/20 transition-all"
            >
              <span>Написать Фарходу в Telegram</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
