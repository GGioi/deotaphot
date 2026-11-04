import React, { useState, useMemo } from 'react';
import { GunsmithWeapon, WeaponAttachment } from '../types';
import { GUNSMITH_WEAPONS, GUNSMITH_ATTACHMENTS } from '../data/gunsmithData';
import { TranslationStrings } from '../i18n';
import {
  Crosshair,
  Sliders,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Share2,
  Shield,
  Zap,
  VolumeX,
  Volume2,
  BookmarkPlus,
  ArrowRight
} from 'lucide-react';

interface GunsmithBuilderProps {
  t: TranslationStrings;
}

export const GunsmithBuilder: React.FC<GunsmithBuilderProps> = ({ t }) => {
  const [selectedWeapon, setSelectedWeapon] = useState<GunsmithWeapon>(GUNSMITH_WEAPONS[0]);
  const [activeSlot, setActiveSlot] = useState<WeaponAttachment['slot']>('muzzle');
  const [attachments, setAttachments] = useState<Record<string, string>>({
    muzzle: 'muz-spectre-suppressor',
    barrel: 'bar-long-16',
    underbarrel: 'und-operator-vert',
    optic: 'opt-eotech-holo',
    stock: 'stk-ctr-recoil',
    magazine: 'mag-pmag-30',
    tactical: 'tac-peq15-laser',
    ammo: 'ammo-m855a1-ap',
  });
  const [copiedCode, setCopiedCode] = useState(false);
  const [importCodeInput, setImportCodeInput] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);

  // Group attachments by slot
  const slotAttachments = useMemo(() => {
    return GUNSMITH_ATTACHMENTS.filter((a) => a.slot === activeSlot);
  }, [activeSlot]);

  // Calculate dynamic stats
  const calculatedStats = useMemo(() => {
    const base = { ...selectedWeapon.baseStats };
    let isSuppressed = false;

    Object.values(attachments).forEach((attId) => {
      const att = GUNSMITH_ATTACHMENTS.find((a) => a.id === attId);
      if (att && att.statsModifier) {
        if (att.statsModifier.damage) base.damage += att.statsModifier.damage;
        if (att.statsModifier.rpm) base.rpm += att.statsModifier.rpm;
        if (att.statsModifier.recoilControl) base.recoilControl += att.statsModifier.recoilControl;
        if (att.statsModifier.ergonomics) base.ergonomics += att.statsModifier.ergonomics;
        if (att.statsModifier.effectiveRange) base.effectiveRange += att.statsModifier.effectiveRange;
        if (att.statsModifier.magCapacity) base.magCapacity = att.statsModifier.magCapacity;
        if (att.statsModifier.soundSuppression) isSuppressed = true;
      }
    });

    return {
      damage: Math.max(10, Math.min(150, base.damage)),
      rpm: base.rpm,
      recoilControl: Math.max(10, Math.min(100, base.recoilControl)),
      ergonomics: Math.max(10, Math.min(100, base.ergonomics)),
      effectiveRange: Math.max(15, Math.min(300, base.effectiveRange)),
      magCapacity: base.magCapacity,
      isSuppressed,
    };
  }, [selectedWeapon, attachments]);

  // Generate real shareable build code
  const currentBuildCode = useMemo(() => {
    const slotKeys = Object.entries(attachments)
      .map(([slot, id]) => `${slot.slice(0, 2)}:${id.slice(-3)}`)
      .join('-');
    return `DF-GUNSMITH#${selectedWeapon.name.slice(0, 4).toUpperCase()}-${slotKeys.toUpperCase()}`;
  }, [selectedWeapon, attachments]);

  const handleSelectAttachment = (slot: WeaponAttachment['slot'], attachmentId: string) => {
    setAttachments((prev) => ({
      ...prev,
      [slot]: prev[slot] === attachmentId ? '' : attachmentId,
    }));
  };

  const handleResetBuild = () => {
    setAttachments({});
  };

  const handleCopyBuildCode = () => {
    navigator.clipboard.writeText(currentBuildCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // Presets
  const applyPreset = (type: 'meta' | 'recoil' | 'cqb' | 'dmr') => {
    if (type === 'meta') {
      setAttachments({
        muzzle: 'muz-spectre-suppressor',
        barrel: 'bar-long-16',
        underbarrel: 'und-shift-angled',
        optic: 'opt-eotech-holo',
        stock: 'stk-ctr-recoil',
        magazine: 'mag-ext-45',
        tactical: 'tac-peq15-laser',
        ammo: 'ammo-m855a1-ap',
      });
    } else if (type === 'recoil') {
      setAttachments({
        muzzle: 'muz-titan-compensator',
        barrel: 'bar-heavy-fluted',
        underbarrel: 'und-operator-vert',
        optic: 'opt-reddot-reflex',
        stock: 'stk-precision-prs',
        magazine: 'mag-pmag-30',
        tactical: 'tac-peq15-laser',
        ammo: 'ammo-match-subsonic',
      });
    } else if (type === 'cqb') {
      setAttachments({
        muzzle: 'muz-flash-hider',
        barrel: 'bar-short-cqb',
        underbarrel: 'und-stubby-light',
        optic: 'opt-reddot-reflex',
        stock: 'stk-skeletal-fold',
        magazine: 'mag-ext-45',
        tactical: 'tac-surefire-light',
        ammo: 'ammo-hollow-point',
      });
    } else {
      setAttachments({
        muzzle: 'muz-spectre-suppressor',
        barrel: 'bar-long-16',
        underbarrel: 'und-shift-angled',
        optic: 'opt-acog-4x',
        stock: 'stk-precision-prs',
        magazine: 'mag-pmag-30',
        tactical: 'tac-peq15-laser',
        ammo: 'ammo-m855a1-ap',
      });
    }
  };

  const slotsList: { id: WeaponAttachment['slot']; label: string }[] = [
    { id: 'muzzle', label: 'Đầu Nòng (Muzzle)' },
    { id: 'barrel', label: 'Nòng Súng (Barrel)' },
    { id: 'underbarrel', label: 'Tay Cầm (Underbarrel)' },
    { id: 'optic', label: 'Kính Ngắm (Optic)' },
    { id: 'stock', label: 'Báng Súng (Stock)' },
    { id: 'magazine', label: 'Băng Đạn (Mag)' },
    { id: 'tactical', label: 'Laser & Đèn Pin' },
    { id: 'ammo', label: 'Loại Đạn (Ammo)' },
  ];

  return (
    <section id="gunsmith-section" className="py-14 bg-[#070a0e] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
              <span>Hệ Thống Độ Súng Chính Thức</span>
              <span aria-hidden="true">·</span>
              <span>Delta Force Gunsmith Workshop</span>
              <span aria-hidden="true">·</span>
              <span>Chia Sẻ Mã Build Độc Quyền</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
              Phòng Thí Nghiệm <span className="text-emerald-400">Độ Súng Gunsmith</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Tùy biến từng chi tiết linh kiện thực tế, đo lường chỉ số giật, tầm bắn và xuất mã chia sẻ build súng áp dụng ngay trong game Delta Force.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyBuildCode}
              className="px-4 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow cursor-pointer"
            >
              {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCode ? 'Đã Sao Chép Mã Build!' : 'Sao Chép Mã Build Súng'}</span>
            </button>

            <button
              onClick={handleResetBuild}
              className="px-3.5 py-2.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khôi Phục Mặc Định</span>
            </button>
          </div>
        </div>

        {/* Weapon Selector Strip */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {GUNSMITH_WEAPONS.map((wp) => (
            <button
              key={wp.id}
              onClick={() => {
                setSelectedWeapon(wp);
              }}
              className={`px-4 py-2 rounded font-condensed text-sm font-bold uppercase transition-all whitespace-nowrap border cursor-pointer ${
                selectedWeapon.id === wp.id
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-600'
              }`}
            >
              <span>{wp.name}</span>
              <span className="text-[11px] text-slate-400 font-mono ml-2">({wp.caliber})</span>
            </button>
          ))}
        </div>

        {/* Main Gunsmith Visualizer & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left / Center Visualizer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex flex-col justify-between min-h-[380px]">
              {/* Background HUD grid */}
              <div className="absolute inset-0 tactical-grid opacity-20 pointer-events-none" />

              {/* Top Weapon Info Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                    <span>{selectedWeapon.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Cỡ Đạn {selectedWeapon.caliber}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-condensed font-extrabold uppercase text-white">
                    {selectedWeapon.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {calculatedStats.isSuppressed ? (
                    <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Đã Giảm Thanh</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400 text-xs flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Âm Thanh Mặc Định</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Weapon Visual Preview */}
              <div className="relative z-10 py-6 flex items-center justify-center">
                <img
                  src={selectedWeapon.image || '/src/assets/images/tactical_arsenal_m4a1_1793764684151.jpg'}
                  alt={selectedWeapon.name}
                  className="max-h-64 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform hover:scale-105 duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Quick Preset Bar */}
              <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-semibold uppercase text-[11px]">Gợi Ý Build Mẫu:</span>
                  <button
                    onClick={() => applyPreset('meta')}
                    className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-700 text-emerald-300 font-medium"
                  >
                    Meta Cân Bằng
                  </button>
                  <button
                    onClick={() => applyPreset('recoil')}
                    className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-medium"
                  >
                    Triệt Tiêu Giật
                  </button>
                  <button
                    onClick={() => applyPreset('cqb')}
                    className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-700 text-amber-300 font-medium"
                  >
                    Đột Kích CQB
                  </button>
                  <button
                    onClick={() => applyPreset('dmr')}
                    className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-700 text-purple-300 font-medium"
                  >
                    Bắn Tỉa DMR
                  </button>
                </div>

                <div className="font-mono text-emerald-400 text-xs font-bold">
                  {currentBuildCode}
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Stats Breakdown (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h4 className="text-sm font-bold uppercase text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span>Bảng Thông Số Khí Tài Thời Gian Thực</span>
                </h4>
                <span className="text-[11px] text-slate-500 font-mono">DELTA STATS V2.4</span>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Damage */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Sát Thương (Damage):</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {calculatedStats.damage}
                      <span className="text-emerald-400 text-[11px] ml-1">
                        ({calculatedStats.damage - selectedWeapon.baseStats.damage >= 0 ? '+' : ''}
                        {calculatedStats.damage - selectedWeapon.baseStats.damage})
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (calculatedStats.damage / 120) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Recoil Control */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Kiểm Soát Độ Giật (Recoil Control):</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {calculatedStats.recoilControl} / 100
                      <span className="text-emerald-400 text-[11px] ml-1">
                        ({calculatedStats.recoilControl - selectedWeapon.baseStats.recoilControl >= 0 ? '+' : ''}
                        {calculatedStats.recoilControl - selectedWeapon.baseStats.recoilControl})
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${calculatedStats.recoilControl}%` }}
                    />
                  </div>
                </div>

                {/* Ergonomics / ADS */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Công Thái Học &amp; Tốc Độ Ngắm (Ergonomics):</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {calculatedStats.ergonomics} / 100
                      <span className="text-cyan-400 text-[11px] ml-1">
                        ({calculatedStats.ergonomics - selectedWeapon.baseStats.ergonomics >= 0 ? '+' : ''}
                        {calculatedStats.ergonomics - selectedWeapon.baseStats.ergonomics})
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${calculatedStats.ergonomics}%` }}
                    />
                  </div>
                </div>

                {/* Effective Range */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Tầm Bắn Hiệu Quả (Range):</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {calculatedStats.effectiveRange} Mét
                      <span className="text-emerald-400 text-[11px] ml-1">
                        (+{calculatedStats.effectiveRange - selectedWeapon.baseStats.effectiveRange}m)
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (calculatedStats.effectiveRange / 200) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Additional Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Tốc Độ Xả Đạn (RPM)</div>
                    <div className="text-base font-mono font-bold text-white tabular-nums">
                      {calculatedStats.rpm} viên/phút
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Dung Lượng Băng Đạn</div>
                    <div className="text-base font-mono font-bold text-emerald-400 tabular-nums">
                      {calculatedStats.magCapacity} viên
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-emerald-950/30 border border-emerald-900/60 text-xs text-slate-300">
              <span className="font-bold text-emerald-400 block mb-0.5">Mẹo Tác Chiến:</span>
              Khẩu {selectedWeapon.name} lắp nòng giảm thanh và đạn xuyên giáp AP là lựa chọn tiêu chuẩn cho các màn đột kích đêm tại Đập Zero.
            </div>
          </div>
        </div>

        {/* Attachment Slots Interactive Chooser */}
        <div className="p-6 rounded-lg bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800 overflow-x-auto">
            {slotsList.map((slot) => {
              const currentEquippedId = attachments[slot.id];
              const equippedItem = GUNSMITH_ATTACHMENTS.find((a) => a.id === currentEquippedId);

              return (
                <button
                  key={slot.id}
                  onClick={() => setActiveSlot(slot.id)}
                  className={`px-3.5 py-2 rounded text-xs font-semibold transition-all whitespace-nowrap flex flex-col items-start border cursor-pointer ${
                    activeSlot === slot.id
                      ? 'bg-emerald-950 border-emerald-500 text-white shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-[11px] text-slate-500 uppercase">{slot.label.split(' ')[0]}</span>
                  <span className={equippedItem ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                    {equippedItem ? equippedItem.nameVi.split(' ')[0] + '...' : 'Chưa Lắp'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* List of Attachments for Active Slot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {slotAttachments.map((att) => {
              const isEquipped = attachments[activeSlot] === att.id;

              return (
                <div
                  key={att.id}
                  onClick={() => handleSelectAttachment(activeSlot, att.id)}
                  className={`p-4 rounded border cursor-pointer transition-all ${
                    isEquipped
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h5 className="font-bold text-white text-xs">{att.nameVi}</h5>
                    {isEquipped && (
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[10px]">
                        Đang Lắp
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">{att.desc}</p>

                  <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                    {att.statsModifier.recoilControl && (
                      <span
                        className={`px-1.5 py-0.5 rounded ${
                          att.statsModifier.recoilControl > 0
                            ? 'bg-emerald-950 text-emerald-400'
                            : 'bg-rose-950 text-rose-400'
                        }`}
                      >
                        Giảm giật {att.statsModifier.recoilControl > 0 ? '+' : ''}
                        {att.statsModifier.recoilControl}
                      </span>
                    )}

                    {att.statsModifier.ergonomics && (
                      <span
                        className={`px-1.5 py-0.5 rounded ${
                          att.statsModifier.ergonomics > 0
                            ? 'bg-cyan-950 text-cyan-400'
                            : 'bg-rose-950 text-rose-400'
                        }`}
                      >
                        Công thái học {att.statsModifier.ergonomics > 0 ? '+' : ''}
                        {att.statsModifier.ergonomics}
                      </span>
                    )}

                    {att.statsModifier.effectiveRange && (
                      <span
                        className={`px-1.5 py-0.5 rounded ${
                          att.statsModifier.effectiveRange > 0
                            ? 'bg-amber-950 text-amber-400'
                            : 'bg-rose-950 text-rose-400'
                        }`}
                      >
                        Tầm bắn {att.statsModifier.effectiveRange > 0 ? '+' : ''}
                        {att.statsModifier.effectiveRange}m
                      </span>
                    )}

                    {att.statsModifier.soundSuppression && (
                      <span className="px-1.5 py-0.5 rounded bg-emerald-900 text-emerald-300 font-bold">
                        Triệt Âm 100%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
