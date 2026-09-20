import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, ArrowUp, Film, Heart } from 'lucide-react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const [copied, setCopied] = useState(false);

  const copyTg = () => {
    navigator.clipboard.writeText('@ridex03');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="border-t border-white/10 bg-[#07080c] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-purple-500/30 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-mono-code text-purple-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Открыт для предложений и постоянного сотрудничества</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Готовы сделать видео, которое взлетит в топ?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Напишите мне в Telegram — обсудим вашу задачу, формат, хронометраж и рассчитаем точные сроки. 
              Первый тестовый ролик или консультация по хуку бесплатно!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href="https://t.me/ridex03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-base shadow-xl shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-5 h-5" />
                <span>Написать в Telegram @ridex03</span>
              </a>

              <button
                type="button"
                onClick={copyTg}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-mono-code border border-white/10 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">@ridex03 скопирован!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Скопировать никнейм</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/30 text-purple-300 flex items-center justify-center font-display font-bold">
              R
            </div>
            <div>
              <span className="font-semibold text-white">RIDEX (Фарход)</span> • Видеомонтаж & Моушн-дизайн
              <div className="text-[11px] text-slate-500 font-mono-code">
                After Effects • Premiere Pro • Blender • 7 лет опыта
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#showcase" className="hover:text-white transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#tools" className="hover:text-white transition-colors">Софт & Опыт</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a
              href="https://t.me/ridex03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors font-semibold flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>t.me/ridex03</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            title="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
