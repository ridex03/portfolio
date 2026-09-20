import React from 'react';
import { Play, Sparkles, Send, Settings, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#090a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Name: RIDEX PRO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center font-display font-bold text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            R
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                RIDEX
              </span>
              <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Video Editor & Motion Designer</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#showcase" className="hover:text-white transition-colors">Портфолио</a>
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#tools" className="hover:text-white transition-colors">Софт & Опыт</a>
          <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Edit own works */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 text-xs font-mono-code px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
            title="Добавить свои ссылки на видео"
          >
            <Settings className="w-3.5 h-3.5 text-purple-400" />
            <span>Мои видео</span>
          </button>

          {/* Telegram direct contact */}
          <a
            href="https://t.me/ridex03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4" />
            <span>Telegram @ridex03</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5"></span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://t.me/ridex03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-blue-600/30 text-blue-400 border border-blue-500/30"
          >
            <Send className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0e17] px-6 py-4 space-y-3">
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1 font-medium"
          >
            Портфолио
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1 font-medium"
          >
            Услуги
          </a>
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1 font-medium"
          >
            Софт & Опыт
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1 font-medium"
          >
            Отзывы
          </a>
          <a
            href="#contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white py-1 font-medium"
          >
            Контакты
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 text-slate-200 text-sm border border-white/10"
            >
              <Settings className="w-4 h-4 text-purple-400" />
              <span>Добавить свои видео ссылки</span>
            </button>
            <a
              href="https://t.me/ridex03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Написать в Telegram @ridex03</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
