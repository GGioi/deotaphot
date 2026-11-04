import React, { useState, useMemo } from 'react';
import { RedeemCode } from '../types';
import { generateConsoleRedeemScript } from '../utils/consoleScriptGenerator';
import { TranslationStrings } from '../i18n';
import {
  Terminal,
  Copy,
  Check,
  Play,
  Sliders,
  Info,
  Code2
} from 'lucide-react';

interface ConsoleScriptToolProps {
  codes: RedeemCode[];
  t: TranslationStrings;
}

export const ConsoleScriptTool: React.FC<ConsoleScriptToolProps> = ({ codes, t }) => {
  const activeCodes = useMemo(
    () => codes.filter((c) => c.status === 'active' || c.status === 'limited'),
    [codes]
  );

  const [selectedCodes, setSelectedCodes] = useState<string[]>(activeCodes.map((c) => c.code));
  const [delayMs, setDelayMs] = useState<number>(3000);
  const [autoCloseDialog, setAutoCloseDialog] = useState<boolean>(true);
  const [stopOnError, setStopOnError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Simulator state
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  // Update selected codes when active codes change
  React.useEffect(() => {
    setSelectedCodes(activeCodes.map((c) => c.code));
  }, [codes]);

  const generatedScript = useMemo(() => {
    return generateConsoleRedeemScript({
      codes: selectedCodes,
      delayMs,
      autoCloseDialog,
      stopOnError,
      logLevel: 'verbose',
    });
  }, [selectedCodes, delayMs, autoCloseDialog, stopOnError]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const toggleSelectCode = (codeStr: string) => {
    if (selectedCodes.includes(codeStr)) {
      setSelectedCodes(selectedCodes.filter((c) => c !== codeStr));
    } else {
      setSelectedCodes([...selectedCodes, codeStr]);
    }
  };

  const handleSelectAll = () => {
    setSelectedCodes(activeCodes.map((c) => c.code));
  };

  const handleDeselectAll = () => {
    setSelectedCodes([]);
  };

  // Run in-browser simulator to demonstrate script execution
  const runSimulator = async () => {
    if (simRunning || selectedCodes.length === 0) return;
    setSimRunning(true);
    setSimLogs([
      '[DELTA FORCE HQ] Khởi động trình mô phỏng kiểm thử script...',
      `🎯 Hàng đợi: ${selectedCodes.length} mã quà tặng | Thời gian trễ: ${delayMs / 1000}s`,
      '🔍 Đang quét cấu trúc DOM của trang chính thức playdeltaforce.com...',
      '✅ Đã tìm thấy input [#cdkey] và nút xác nhận [#btn-exchange].',
    ]);

    for (let i = 0; i < Math.min(selectedCodes.length, 5); i++) {
      const code = selectedCodes[i];
      await new Promise((r) => setTimeout(r, 700));

      setSimLogs((prev) => [
        ...prev,
        `[${i + 1}/${selectedCodes.length}] Đang nhập: ${code} ...`,
      ]);

      await new Promise((r) => setTimeout(r, 900));

      setSimLogs((prev) => [
        ...prev,
        `✓ [${code}] Máy chủ phản hồi: Nhận thưởng thành công! Quà đã gửi vào Thư in-game.`,
      ]);
    }

    if (selectedCodes.length > 5) {
      setSimLogs((prev) => [
        ...prev,
        `... Đã mô phỏng 5 mã đầu tiên. Còn ${selectedCodes.length - 5} mã sẽ tự động chạy tiếp tục trên web chính thức.`,
      ]);
    }

    await new Promise((r) => setTimeout(r, 500));
    setSimLogs((prev) => [
      ...prev,
      '🎉 [HOÀN TẤT] Script hoạt động trơn tru! Giờ bạn có thể sao chép đoạn mã và dán vào F12 Console.',
    ]);
    setSimRunning(false);
  };

  return (
    <section id="console-script" className="py-14 bg-[#0d1117] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
            <span>{t.scriptKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
            {t.scriptTitle} <span className="text-emerald-400">{t.scriptTitleHighlight}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-3xl">
            {t.scriptDesc}
          </p>
        </div>

        {/* 4 Steps Tutorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">BƯỚC 01</div>
            <div className="text-sm font-bold text-white mb-1.5">{t.step1Title}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{t.step1Desc}</p>
          </div>

          <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">BƯỚC 02</div>
            <div className="text-sm font-bold text-white mb-1.5">{t.step2Title}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{t.step2Desc}</p>
          </div>

          <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">BƯỚC 03</div>
            <div className="text-sm font-bold text-white mb-1.5">{t.step3Title}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{t.step3Desc}</p>
          </div>

          <div className="p-4 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-mono text-emerald-400 mb-1">BƯỚC 04</div>
            <div className="text-sm font-bold text-white mb-1.5">{t.step4Title}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{t.step4Desc}</p>
          </div>
        </div>

        {/* Main Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Settings & Code Selection Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Script Config */}
            <div className="p-5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase mb-4">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>{t.scriptConfigTitle}</span>
              </div>

              {/* Delay slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300">{t.scriptDelayLabel}</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {delayMs / 1000}s ({delayMs}ms)
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="8000"
                  step="500"
                  value={delayMs}
                  onChange={(e) => setDelayMs(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1.5s</span>
                  <span>3.0s (Khuyên dùng)</span>
                  <span>8.0s (An toàn cao)</span>
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={autoCloseDialog}
                    onChange={(e) => setAutoCloseDialog(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>{t.scriptAutoClose}</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={stopOnError}
                    onChange={(e) => setStopOnError(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>{t.scriptStopOnError}</span>
                </label>
              </div>
            </div>

            {/* Select codes included in script */}
            <div className="p-5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold text-white uppercase flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {t.scriptCodeListTitle} ({selectedCodes.length}/{activeCodes.length})
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button onClick={handleSelectAll} className="text-emerald-400 hover:underline cursor-pointer">
                    {t.scriptSelectAll}
                  </button>
                  <span className="text-slate-600">|</span>
                  <button onClick={handleDeselectAll} className="text-slate-400 hover:underline cursor-pointer">
                    {t.scriptDeselectAll}
                  </button>
                </div>
              </div>

              <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                {activeCodes.map((c) => {
                  const isChecked = selectedCodes.includes(c.code);
                  return (
                    <label
                      key={c.id}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer border text-xs transition-colors ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-800/60 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleSelectCode(c.code)}
                          className="accent-emerald-500 rounded"
                        />
                        <span className="font-mono font-bold">{c.code}</span>
                      </div>
                      <span className="text-slate-400 truncate max-w-[140px] text-right">{c.title}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Live Simulator Panel */}
            <div className="p-5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span>{t.scriptSimulatorTitle}</span>
                </span>
                <button
                  onClick={runSimulator}
                  disabled={simRunning || selectedCodes.length === 0}
                  className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    simRunning
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{simRunning ? t.scriptRunningSimBtn : t.scriptRunSimBtn}</span>
                </button>
              </div>

              <div className="bg-slate-950 p-3 rounded font-mono text-[11px] text-slate-300 h-36 overflow-y-auto border border-slate-800 space-y-1">
                {simLogs.length === 0 ? (
                  <span className="text-slate-600 italic">
                    Bấm &quot;Chạy Thử Mô Phỏng&quot; để xem cách script tự động xử lý từng mã...
                  </span>
                ) : (
                  simLogs.map((log, index) => (
                    <div
                      key={index}
                      className={
                        log.includes('✓')
                          ? 'text-emerald-400'
                          : log.includes('🎉')
                          ? 'text-cyan-400 font-bold'
                          : log.includes('HQ')
                          ? 'text-amber-400 font-bold'
                          : 'text-slate-300'
                      }
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Script Code Display & Copy Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 p-5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">deltaforce_f12_autoredeem.js</span>
                </div>

                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded text-xs font-bold transition-all flex items-center gap-2 shadow-md cursor-pointer ${
                    copied
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t.scriptCopiedSuccess}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.scriptCopyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display */}
              <div className="relative flex-1 overflow-hidden rounded bg-slate-900/90 border border-slate-800">
                <pre className="p-4 text-xs font-mono text-emerald-400/90 overflow-x-auto overflow-y-auto max-h-[520px] leading-relaxed selection:bg-emerald-500 selection:text-slate-950">
                  <code>{generatedScript}</code>
                </pre>
              </div>

              {/* Security note */}
              <div className="mt-3 p-3 rounded bg-slate-900/50 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300">Bảo mật &amp; An Toàn:</span> {t.scriptSecurityNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
