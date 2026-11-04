import React, { useState } from 'react';
import { RedeemCode, CodeStatus } from '../types';
import { TranslationStrings } from '../i18n';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Search,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileText,
  RotateCcw
} from 'lucide-react';

interface CodeCheckerToolProps {
  codes: RedeemCode[];
  t: TranslationStrings;
  onOpenTestRedeem: (code: RedeemCode) => void;
}

interface BatchCheckResult {
  code: string;
  status: CodeStatus | 'not_found';
  matchedCode?: RedeemCode;
  suggestedCorrection?: string;
  reason?: string;
}

export const CodeCheckerTool: React.FC<CodeCheckerToolProps> = ({
  codes,
  t,
  onOpenTestRedeem,
}) => {
  const [inputText, setInputText] = useState('');
  const [singleResult, setSingleResult] = useState<RedeemCode | null | 'not_found'>(null);
  const [batchResults, setBatchResults] = useState<BatchCheckResult[] | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Normalize helper
  const cleanCode = (str: string) => str.trim().toUpperCase().replace(/[\s\-_]/g, '');

  const handleCheck = () => {
    if (!inputText.trim()) return;

    const lines = inputText
      .split(/[\n,\s]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (lines.length === 1) {
      // Single code check
      const query = cleanCode(lines[0]);
      const found = codes.find(
        (c) =>
          cleanCode(c.code) === query ||
          cleanCode(c.normalizedCode) === query ||
          (c.suggestedCorrection && cleanCode(c.code) === query)
      );

      if (found) {
        setSingleResult(found);
        setBatchResults(null);
      } else {
        setSingleResult('not_found');
        setBatchResults(null);
      }
    } else {
      // Batch check multiple codes
      const results: BatchCheckResult[] = lines.map((raw) => {
        const query = cleanCode(raw);
        const match = codes.find(
          (c) => cleanCode(c.code) === query || cleanCode(c.normalizedCode) === query
        );

        if (match) {
          return {
            code: raw,
            status: match.status,
            matchedCode: match,
            suggestedCorrection: match.suggestedCorrection,
          };
        }

        // Check if raw text matches a partial typo
        const typoMatch = codes.find(
          (c) => c.status === 'invalid_typo' && cleanCode(c.code).includes(query)
        );
        if (typoMatch) {
          return {
            code: raw,
            status: 'invalid_typo',
            matchedCode: typoMatch,
            suggestedCorrection: typoMatch.suggestedCorrection,
            reason: typoMatch.usageNotes,
          };
        }

        return {
          code: raw,
          status: 'not_found',
          reason: 'Mã không tồn tại trong hệ thống',
        };
      });

      setBatchResults(results);
      setSingleResult(null);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyAllValidFromBatch = () => {
    if (!batchResults) return;
    const validCodes = batchResults
      .filter((r) => r.status === 'active' || r.status === 'limited')
      .map((r) => r.matchedCode?.code || r.code);
    navigator.clipboard.writeText(validCodes.join('\n'));
    setCopiedKey('batch_valid');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleClear = () => {
    setInputText('');
    setSingleResult(null);
    setBatchResults(null);
  };

  return (
    <section id="code-checker" className="py-14 bg-[#080b0f] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
            <span>{t.checkerKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
            {t.checkerTitle} <span className="text-emerald-400">{t.checkerTitleHighlight}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-3xl">
            {t.checkerDesc}
          </p>
        </div>

        {/* Input box */}
        <div className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 shadow-xl mb-8">
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Nhập Mã Hoặc Dán Danh Sách Hàng Loạt Code Cần Kiểm Tra:</span>
              <span className="text-slate-500 font-normal lowercase">
                (Hỗ trợ kiểm tra 1 mã hoặc hàng trăm mã cùng lúc)
              </span>
            </label>

            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.checkerPlaceholder}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-emerald-400 font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500 shadow-inner"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCheck}
                  disabled={!inputText.trim()}
                  className="px-6 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>{t.checkerBtnCheck}</span>
                </button>

                {(singleResult || batchResults || inputText) && (
                  <button
                    onClick={handleClear}
                    className="px-4 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all"
                  >
                    {t.checkerClear}
                  </button>
                )}
              </div>

              {/* Quick sample chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="text-slate-500">Mẫu thử:</span>
                <button
                  onClick={() => setInputText('Top1BXHVN')}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 hover:border-emerald-500 font-mono text-[11px]"
                >
                  Top1BXHVN (Có)
                </button>
                <button
                  onClick={() => setInputText('DFExceptional305')}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 hover:border-emerald-500 font-mono text-[11px]"
                >
                  DFExceptional305 (Có)
                </button>
                <button
                  onClick={() => setInputText('DFHorizon502')}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 hover:border-amber-500 font-mono text-[11px]"
                >
                  DFHorizon502 (Typo)
                </button>
                <button
                  onClick={() => setInputText('RETURNING')}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-rose-400 hover:border-rose-500 font-mono text-[11px]"
                >
                  RETURNING (Cắt lỗi)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Single Code Result Display */}
        {singleResult && (
          <div className="animate-in fade-in duration-300">
            {singleResult === 'not_found' ? (
              <div className="p-6 rounded-lg bg-rose-950/30 border border-rose-800/80 flex items-start gap-4">
                <XCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Mã Không Tồn Tại Trong Hệ Thống
                  </h4>
                  <p className="text-xs text-rose-300">
                    {t.checkerResultNotFound} Hãy kiểm tra lại các ký tự hoặc liên hệ nhà phát hành.
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`p-6 rounded-lg border shadow-xl ${
                  singleResult.status === 'active'
                    ? 'bg-emerald-950/20 border-emerald-500/60'
                    : singleResult.status === 'limited'
                    ? 'bg-amber-950/20 border-amber-500/60'
                    : singleResult.status === 'invalid_typo'
                    ? 'bg-rose-950/30 border-rose-600/70'
                    : 'bg-slate-900/80 border-slate-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-3">
                    {singleResult.status === 'active' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    ) : singleResult.status === 'limited' ? (
                      <AlertTriangle className="w-8 h-8 text-amber-400" />
                    ) : singleResult.status === 'invalid_typo' ? (
                      <XCircle className="w-8 h-8 text-rose-400" />
                    ) : (
                      <XCircle className="w-8 h-8 text-slate-500" />
                    )}

                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-0.5">
                        <span
                          className={`font-bold ${
                            singleResult.status === 'active'
                              ? 'text-emerald-400'
                              : singleResult.status === 'limited'
                              ? 'text-amber-400'
                              : singleResult.status === 'invalid_typo'
                              ? 'text-rose-400'
                              : 'text-slate-400'
                          }`}
                        >
                          {singleResult.status === 'active'
                            ? t.checkerStatusActive
                            : singleResult.status === 'limited'
                            ? t.checkerStatusLimited
                            : singleResult.status === 'invalid_typo'
                            ? t.checkerStatusTypo
                            : t.checkerStatusExpired}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{singleResult.platform}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {singleResult.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {singleResult.suggestedCorrection ? (
                      <button
                        onClick={() => handleCopy(singleResult.suggestedCorrection!, 'suggested')}
                        className="px-4 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow"
                      >
                        {copiedKey === 'suggested' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>Chép Mã Chuẩn: {singleResult.suggestedCorrection}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCopy(singleResult.code, 'single')}
                        className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow"
                      >
                        {copiedKey === 'single' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>Sao Chép Mã: {singleResult.code}</span>
                      </button>
                    )}

                    {singleResult.status !== 'invalid_typo' && (
                      <button
                        onClick={() => onOpenTestRedeem(singleResult)}
                        className="px-3 py-2 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold"
                      >
                        {t.testRedeemBtn}
                      </button>
                    )}
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {singleResult.suggestedCorrection && (
                    <div className="p-3.5 rounded bg-amber-950/40 border border-amber-800/80 md:col-span-2">
                      <span className="font-bold text-amber-300 block mb-1">
                        {t.checkerSuggested} <span className="font-mono text-white text-sm">{singleResult.suggestedCorrection}</span>
                      </span>
                      <p className="text-slate-300 text-[11px]">
                        Lưu ý: {singleResult.usageNotes || 'Mã bạn vừa nhập là biến thể gõ sai hoặc bị cắt đứt. Hãy sử dụng mã chuẩn ở trên để nhận quà thành công.'}
                      </p>
                    </div>
                  )}

                  {singleResult.rewards.length > 0 && (
                    <div className="p-3 rounded bg-slate-950 border border-slate-800">
                      <div className="text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{t.checkerRewards}</span>
                      </div>
                      <ul className="space-y-1 text-slate-200">
                        {singleResult.rewards.map((rw, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400" />
                            <span>{rw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-2">
                    <div>
                      <span className="text-slate-400 block">{t.checkerExpiry}</span>
                      <span className="font-mono text-white font-bold">{singleResult.expiryDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{t.checkerPlatform}</span>
                      <span className="text-white font-medium">{singleResult.platform}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Batch Results Table Display */}
        {batchResults && (
          <div className="animate-in fade-in duration-300 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">
                  Đã đối soát {batchResults.length} mã code từ danh sách bạn dán vào:
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAllValidFromBatch}
                  className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  {copiedKey === 'batch_valid' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>Sao Chép Các Mã Còn Hạn</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/90">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                    <th className="py-3 px-4 font-semibold">Mã Bạn Nhập</th>
                    <th className="py-3 px-4 font-semibold">Tình Trạng (Có / Không)</th>
                    <th className="py-3 px-4 font-semibold">Gói Quà / Phản Hồi</th>
                    <th className="py-3 px-4 font-semibold">Mã Chuẩn (Nếu sai)</th>
                    <th className="py-3 px-4 font-semibold text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {batchResults.map((r, index) => (
                    <tr key={index} className="hover:bg-slate-850/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                        {r.code}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {r.status === 'active' ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                            ✓ CÓ - CÒN HẠN
                          </span>
                        ) : r.status === 'limited' ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-950 text-amber-400 border border-amber-800">
                            ⚠ CÓ - GIỚI HẠN
                          </span>
                        ) : r.status === 'expired' ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-slate-400">
                            ✗ CÓ - ĐÃ HẾT HẠN
                          </span>
                        ) : r.status === 'invalid_typo' ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-950 text-rose-400 border border-rose-800">
                            ✗ SAI CHÍNH TẢ / LỖI
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-950 text-rose-400">
                            ✗ KHÔNG TỒN TẠI
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-300 font-sans max-w-xs truncate">
                        {r.matchedCode?.title || r.reason || 'Mã không có trong dữ liệu'}
                      </td>
                      <td className="py-3 px-4 font-bold text-amber-400 whitespace-nowrap">
                        {r.suggestedCorrection || '—'}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap font-sans">
                        <button
                          onClick={() => handleCopy(r.suggestedCorrection || r.code, `row-${index}`)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs"
                        >
                          {copiedKey === `row-${index}` ? 'Đã chép' : 'Sao chép'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
