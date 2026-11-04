import React from 'react';
import { Terminal, Gift, Search, Globe, ChevronDown } from 'lucide-react';
import { Language, TranslationStrings } from '../i18n';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  totalActiveCodes: number;
  t: TranslationStrings;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeSection,
  onNavigate,
  totalActiveCodes,
  t,
}) => {
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const currentLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 bg-[#090c10]/95 backdrop-blur-md border-b border-emerald-950/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Brand Wordmark */}
          <div
            className="flex items-center gap-3 shrink-0 cursor-pointer"
            onClick={() => onNavigate('hero')}
          >
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-condensed font-extrabold text-xl clip-badge">
              DF
            </div>
            <span className="font-condensed font-extrabold tracking-wider text-xl text-white uppercase whitespace-nowrap">
              Delta Force <span className="text-emerald-400">HQ</span>
            </span>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <button
              onClick={() => onNavigate('events')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-emerald-400 ${
                activeSection === 'events' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              {t.navEvents}
            </button>
            <button
              onClick={() => onNavigate('gunsmith')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-emerald-400 ${
                activeSection === 'gunsmith' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              {t.navGunsmith}
            </button>
            <button
              onClick={() => onNavigate('wiki')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-emerald-400 ${
                activeSection === 'wiki' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              {t.navWiki}
            </button>
            <button
              onClick={() => onNavigate('checker')}
              className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 hover:text-emerald-400 ${
                activeSection === 'checker' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.navChecker}</span>
            </button>
            <button
              onClick={() => onNavigate('codes')}
              className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 hover:text-emerald-400 ${
                activeSection === 'codes' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              <span>{t.navCodes}</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.2 rounded">
                {totalActiveCodes}
              </span>
            </button>
            <button
              onClick={() => onNavigate('script')}
              className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 hover:text-emerald-400 ${
                activeSection === 'script' ? 'text-emerald-400 font-semibold' : 'text-slate-300'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.navScript}</span>
            </button>
          </nav>

          {/* Zone 3: Multi-language selector & Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{currentLangObj.flag}</span>
                <span className="font-semibold uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-slate-900 border border-slate-700 rounded shadow-xl py-1 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 hover:bg-slate-800 transition-colors ${
                        currentLang === lang.code ? 'text-emerald-400 font-bold bg-slate-800/60' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => onNavigate('checker')}
              className="px-3.5 py-1.5 text-xs font-bold rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all flex items-center gap-1.5 shadow"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.navChecker}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
