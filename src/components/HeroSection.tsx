import React from 'react';
import { Terminal, Gift, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { TranslationStrings } from '../i18n';

interface HeroSectionProps {
  totalCodes: number;
  activeCodes: number;
  onNavigateToCodes: () => void;
  onNavigateToChecker: () => void;
  onNavigateToScript: () => void;
  t: TranslationStrings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  totalCodes,
  activeCodes,
  onNavigateToCodes,
  onNavigateToChecker,
  onNavigateToScript,
  t,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_delta_force_hq_1793764681773.jpg"
          alt="Delta Force Tactical Operations Center"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090c10] via-transparent to-[#090c10]" />
        <div className="absolute inset-0 tactical-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="max-w-3xl">
          {/* Subtle kicker metadata */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 tracking-wider uppercase">
            <span>{t.heroKicker}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-extrabold tracking-tight text-white uppercase leading-none mb-4">
            {t.heroTitle} <span className="text-emerald-400">{t.heroTitleHighlight}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onNavigateToChecker}
              className="px-5 py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{t.heroBtnChecker}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCodes}
              className="px-5 py-3 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-emerald-400" />
              <span>{t.heroBtnCodes} ({totalCodes})</span>
            </button>

            <button
              onClick={onNavigateToScript}
              className="px-4 py-3 rounded bg-slate-900/60 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>{t.heroBtnScript}</span>
            </button>

            <a
              href="https://www.playdeltaforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5"
            >
              <span>{t.heroOfficialWeb}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                {activeCodes} / {totalCodes}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{t.statActiveCodes}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                100%
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{t.statCheckedRatio}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                v2.4 F12
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{t.statConsoleVersion}</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                120,000+
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{t.statEstimatedClaims}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
