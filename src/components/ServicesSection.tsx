import React from 'react';
import { Smartphone, Layers, Box, Video, Clock, CheckCircle, ArrowRight, Send, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'Box':
        return <Box className="w-6 h-6 text-amber-400" />;
      case 'Video':
      default:
        return <Video className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono-code text-purple-300 font-semibold mb-3">
            Услуги & Направления
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Что я создаю для клиентов
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Полный цикл производства видео под ключ: от идеи и динамичного чернового 
            монтажа до SaaS анимаций, интеграции 3D элементов и трендового саунд-дизайна.
          </p>
        </div>

        {/* Services 4-Column / 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="rounded-2xl bg-[#0e1017] border border-white/10 p-7 lg:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 mb-6">
                  {srv.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>Срок: <strong className="text-white">{srv.timeline}</strong></span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Для кого: {srv.recommendedFor}
                  </div>
                </div>

                <a
                  href={`https://t.me/ridex03?text=${encodeURIComponent(`Здравствуйте! Интересует услуга "${srv.title}". Хочу обсудить задачу и узнать стоимость.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Обсудить задачу</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Pricing Explanation Banner */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950/20 via-[#0e1017] to-blue-950/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                Индивидуальный расчет стоимости
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Стоимость каждого видео индивидуальна: она зависит от хронометража, качества и объема исходников, глубины саунд-дизайна и наличия 3D графики. Пришлите мне ТЗ, сценарий или референс в Telegram — я быстро оценю сложность и назову точную цену и срок.
              </p>
            </div>
          </div>

          <a
            href="https://t.me/ridex03"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-all"
          >
            <Send className="w-4 h-4 text-purple-300" />
            <span>Написать в Telegram @ridex03</span>
          </a>
        </div>

      </div>
    </section>
  );
};
