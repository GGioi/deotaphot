import React, { useState } from 'react';
import { RedeemCode } from '../types';
import { TranslationStrings } from '../i18n';
import { Gift, CheckCircle2, AlertCircle, X, Shield, Sparkles } from 'lucide-react';

interface TestRedeemModalProps {
  code: RedeemCode | null;
  onClose: () => void;
  onRedeemSuccess: (code: RedeemCode, charName: string) => void;
  t: TranslationStrings;
}

export const TestRedeemModal: React.FC<TestRedeemModalProps> = ({
  code,
  onClose,
  onRedeemSuccess,
  t,
}) => {
  if (!code) return null;

  const [charId, setCharId] = useState('');
  const [server, setServer] = useState('Việt Nam (VNG / Garena)');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleExecuteRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!charId.trim()) return;

    if (code.status === 'expired') {
      setStatus('error');
      setErrorMsg('Mã quà tặng này đã hết thời gian hiệu lực!');
      return;
    }

    if (code.status === 'invalid_typo') {
      setStatus('error');
      setErrorMsg(`Mã này bị lỗi chính tả! Hãy dùng mã chuẩn: ${code.suggestedCorrection}`);
      return;
    }

    setStatus('loading');
    // Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus('success');
    onRedeemSuccess(code, charId.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-lg max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-condensed font-extrabold uppercase text-white">
                {t.testModalSuccessTitle}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.testModalSuccessDesc} Mã <span className="font-mono text-emerald-400 font-bold">{code.code}</span> &gt; Nhân vật <span className="text-white font-bold">{charId}</span> ({server}).
              </p>
            </div>

            <div className="p-4 rounded bg-slate-950 border border-slate-800 text-left">
              <div className="text-xs text-slate-400 mb-2">Vật phẩm nhận được:</div>
              <ul className="space-y-1 text-xs text-emerald-300">
                {code.rewards.map((rw, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{rw}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Hoàn Tất &amp; Đóng
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Hệ Thống Đổi Mã Thử Nghiệm</span>
            </div>

            <h3 className="text-xl font-condensed font-extrabold uppercase text-white mb-1">
              {t.testModalTitle}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {t.testModalDesc}
            </p>

            {/* Target code summary */}
            <div className="p-3 rounded bg-slate-950 border border-slate-800 mb-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400">Mã được chọn:</div>
                <div className="font-mono text-base font-bold text-emerald-400">{code.code}</div>
              </div>
              <div className="text-right text-xs text-slate-300">
                <div>{code.title}</div>
                <div className="text-[11px] text-slate-500">{code.expiryDate}</div>
              </div>
            </div>

            <form onSubmit={handleExecuteRedeem} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  {t.testModalCharLabel}
                </label>
                <input
                  type="text"
                  required
                  value={charId}
                  onChange={(e) => setCharId(e.target.value)}
                  placeholder="VD: ShadowSniper_VN hoặc UID 8849120"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-white focus:border-emerald-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.testModalServerLabel}</label>
                <select
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Việt Nam (VNG / Garena)">Việt Nam (VNG / Garena Server)</option>
                  <option value="Đông Nam Á (SEA)">Đông Nam Á (SEA Server)</option>
                  <option value="Toàn Cầu (Global)">Toàn Cầu (Global International)</option>
                  <option value="Steam Global">Steam PC Client</option>
                </select>
              </div>

              {status === 'error' && (
                <div className="p-2.5 rounded bg-rose-950/60 border border-rose-800 text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? t.testModalSubmitting : t.testModalSubmit}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
