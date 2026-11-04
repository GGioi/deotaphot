import React, { useState } from 'react';
import { RedeemCode, CodeStatus } from '../types';
import { TranslationStrings } from '../i18n';
import {
  Copy,
  Check,
  Search,
  Gift,
  HelpCircle,
  PlayCircle,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface RedeemCodeCenterProps {
  codes: RedeemCode[];
  onOpenTestRedeem: (code: RedeemCode) => void;
  t: TranslationStrings;
}

export const RedeemCodeCenter: React.FC<RedeemCodeCenterProps> = ({
  codes,
  onOpenTestRedeem,
  t,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'limited' | 'expired' | 'invalid_typo'>('all');
  const [platformFilter, setPlatformFilter] = useState<string>('Tất cả');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // Filtered list
  const filteredCodes = codes.filter((c) => {
    const matchesSearch =
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.suggestedCorrection && c.suggestedCorrection.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.rewards.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === 'all'
        ? true
        : statusFilter === 'active'
        ? c.status === 'active' || c.status === 'limited'
        : c.status === statusFilter;

    const matchesPlatform =
      platformFilter === 'Tất cả' || c.platform === platformFilter || c.platform === 'Tất cả';

    return matchesSearch && matchesStatus && matchesPlatform;
  });

  const activeCodesList = codes.filter((c) => c.status === 'active' || c.status === 'limited');

  const handleCopyCode = (codeStr: string, id: string) => {
    navigator.clipboard.writeText(codeStr);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleCopyAllActive = () => {
    const text = activeCodesList.map((c) => c.code).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <section id="redeem-center" className="py-14 bg-[#090c10] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
              <span>{t.codeCenterKicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
              {t.codeCenterTitle} <span className="text-emerald-400">{t.codeCenterTitleHighlight}</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              {t.codeCenterDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyAllActive}
              className="px-4 py-2.5 rounded bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              {copiedAll ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedAll ? t.copyAllSuccess : `${t.copyAllActiveBtn} (${activeCodesList.length})`}</span>
            </button>

            <button
              onClick={() => setShowGuide(!showGuide)}
              className="px-4 py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>{t.guideTitle}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Quick Guide */}
        {showGuide && (
          <div className="mb-8 p-5 rounded-lg bg-slate-900/80 border border-slate-800 transition-all">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Gift className="w-4 h-4 text-emerald-400" />
              <span>{t.guideTitle}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
              <div className="p-3.5 bg-slate-950/60 rounded border border-slate-800/80">
                <span className="font-bold text-emerald-400 block mb-1">{t.guideInGameTitle}</span>
                <p className="whitespace-pre-line text-slate-400">{t.guideInGameContent}</p>
              </div>
              <div className="p-3.5 bg-slate-950/60 rounded border border-slate-800/80">
                <span className="font-bold text-amber-400 block mb-1">{t.guideWebTitle}</span>
                <p className="whitespace-pre-line text-slate-400">{t.guideWebContent}</p>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-700 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-slate-950 p-1 rounded border border-slate-800">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  statusFilter === 'all' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterAll} ({codes.length})
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  statusFilter === 'active' ? 'bg-emerald-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterActive} ({activeCodesList.length})
              </button>
              <button
                onClick={() => setStatusFilter('expired')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  statusFilter === 'expired' ? 'bg-slate-800 text-slate-300 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterExpired} ({codes.filter((c) => c.status === 'expired').length})
              </button>
              <button
                onClick={() => setStatusFilter('invalid_typo')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  statusFilter === 'invalid_typo' ? 'bg-rose-950 text-rose-300 border border-rose-800 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterTypo} ({codes.filter((c) => c.status === 'invalid_typo').length})
              </button>
            </div>

            {/* Platform selector */}
            <select
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-700 rounded text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="Tất cả">{t.platformAll}</option>
              <option value="PC">{t.platformPC}</option>
              <option value="Mobile">{t.platformMobile}</option>
              <option value="Steam">{t.platformSteam}</option>
            </select>
          </div>
        </div>

        {/* Codes Grid */}
        {filteredCodes.length === 0 ? (
          <div className="py-16 text-center rounded-lg bg-slate-900/40 border border-slate-800">
            <AlertTriangle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-300">{t.noCodesFound}</h4>
            <p className="text-xs text-slate-500 mt-1">{t.noCodesHint}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredCodes.map((code) => {
              const isExpired = code.status === 'expired';
              const isLimited = code.status === 'limited';
              const isTypo = code.status === 'invalid_typo';

              return (
                <div
                  key={code.id}
                  className={`p-5 rounded-lg border transition-all ${
                    isTypo
                      ? 'bg-rose-950/20 border-rose-800/60'
                      : isExpired
                      ? 'bg-slate-950/50 border-slate-800/60 opacity-65'
                      : 'bg-slate-900/80 border-slate-700/80 hover:border-emerald-500/50 shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <span
                          className={`font-semibold ${
                            isTypo
                              ? 'text-rose-400'
                              : isExpired
                              ? 'text-slate-400'
                              : isLimited
                              ? 'text-amber-400'
                              : 'text-emerald-400'
                          }`}
                        >
                          {isTypo
                            ? 'Mã Lỗi / Typo'
                            : isExpired
                            ? 'Đã Hết Hạn'
                            : isLimited
                            ? 'Giới Hạn Lượt Nhập'
                            : 'Đang Hoạt Động'}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{code.platform}</span>
                        <span aria-hidden="true">·</span>
                        <span>{code.expiryDate}</span>
                      </div>

                      <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                        {code.title}
                      </h3>
                    </div>
                  </div>

                  {/* Typo alert & suggested correction */}
                  {isTypo && code.suggestedCorrection && (
                    <div className="p-3 rounded bg-amber-950/40 border border-amber-800/70 mb-3 text-xs">
                      <div className="text-amber-300 font-bold mb-0.5">
                        Mã gốc chính xác: <span className="font-mono text-white text-sm">{code.suggestedCorrection}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] mb-2">{code.usageNotes}</div>
                      <button
                        onClick={() => handleCopyCode(code.suggestedCorrection!, `${code.id}-sug`)}
                        className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center gap-1.5"
                      >
                        {copiedCodeId === `${code.id}-sug` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>Sao Chép Mã Đúng Này</span>
                      </button>
                    </div>
                  )}

                  {/* Code box & copy button */}
                  <div className="flex items-center gap-2 p-2.5 rounded bg-slate-950 border border-slate-800 mb-3">
                    <span className={`font-mono text-base font-bold tracking-wider flex-1 select-all ${
                      isTypo ? 'text-rose-400 line-through opacity-80' : 'text-emerald-400'
                    }`}>
                      {code.code}
                    </span>
                    <button
                      onClick={() => handleCopyCode(code.code, code.id)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        copiedCodeId === code.id
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      {copiedCodeId === code.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.copiedCodeSuccess}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{t.copyCodeBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Rewards list */}
                  {code.rewards.length > 0 && (
                    <div className="mb-3">
                      <div className="text-xs text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-amber-400" />
                        <span>Phần thưởng bao gồm:</span>
                      </div>
                      <ul className="space-y-1">
                        {code.rewards.map((reward, idx) => (
                          <li key={idx} className="text-xs text-slate-200 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none shrink-0" />
                            <span>{reward}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Notes & Test action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="tabular-nums">
                      {code.timesClaimed ? `~${code.timesClaimed.toLocaleString()} lượt nhận` : 'Đã kiểm định'}
                    </span>

                    {!isTypo && (
                      <button
                        onClick={() => onOpenTestRedeem(code)}
                        className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>{t.testRedeemBtn}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
