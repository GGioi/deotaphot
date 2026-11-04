import React, { useState } from 'react';
import { INITIAL_EVENT_MISSIONS, INITIAL_OPERATORS } from '../data/initialData';
import { Shield, Crosshair, Award, Users, ChevronRight, Zap, Flame } from 'lucide-react';

export const EventShowcase: React.FC = () => {
  const [selectedOperator, setSelectedOperator] = useState(INITIAL_OPERATORS[0]);
  const [activeTab, setActiveTab] = useState<'events' | 'operators' | 'armory'>('events');

  return (
    <section id="hq-events" className="py-14 bg-[#090c10] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
              <span>Trụ Sở Tác Chiến</span>
              <span aria-hidden="true">·</span>
              <span>Chiến Dịch Tháng 11</span>
              <span aria-hidden="true">·</span>
              <span>Bản Đồ Mới Ahsarah</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
              Sự Kiện HQ &amp; <span className="text-emerald-400">Hồ Sơ Đặc Nhiệm</span>
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center bg-slate-900 p-1 rounded border border-slate-800">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                activeTab === 'events' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Nhiệm Vụ Sự Kiện
            </button>
            <button
              onClick={() => setActiveTab('operators')}
              className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                activeTab === 'operators' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Hồ Sơ Đặc Nhiệm
            </button>
            <button
              onClick={() => setActiveTab('armory')}
              className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                activeTab === 'armory' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Kho Vũ Khí Quân Trang
            </button>
          </div>
        </div>

        {/* Tab 1: Events & Missions */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_EVENT_MISSIONS.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-emerald-400 font-semibold">{evt.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{evt.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400 font-medium">{evt.badge}</span>
                  </div>

                  <h3 className="text-xl font-condensed font-bold uppercase text-white mb-2">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Phần Thưởng Hoàn Thành:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {evt.rewards.map((rw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-emerald-300 font-medium"
                      >
                        {rw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Operators Dossier */}
        {activeTab === 'operators' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Operator Image */}
            <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-950 shadow-2xl">
              <img
                src={selectedOperator.image}
                alt={selectedOperator.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {selectedOperator.role}
                </div>
                <div className="text-2xl font-condensed font-extrabold text-white uppercase">
                  {selectedOperator.callsign} // {selectedOperator.name}
                </div>
              </div>
            </div>

            {/* Operator Details & Selector */}
            <div className="lg:col-span-7 space-y-6">
              {/* Operator Tabs */}
              <div className="flex items-center gap-3">
                {INITIAL_OPERATORS.map((op) => (
                  <button
                    key={op.id}
                    onClick={() => setSelectedOperator(op)}
                    className={`px-4 py-2.5 rounded font-condensed text-base font-bold uppercase transition-all border ${
                      selectedOperator.id === op.id
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                    }`}
                  >
                    {op.callsign}
                  </button>
                ))}
              </div>

              {/* Bio & Abilities */}
              <div className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 space-y-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Lực Lượng Tác Chiến
                  </div>
                  <div className="text-base font-bold text-white">
                    {selectedOperator.faction}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Tiểu Sử Quân Bị
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedOperator.bio}
                  </p>
                </div>

                <div className="p-4 rounded bg-slate-950 border border-emerald-950/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Kỹ Năng Chiến Thuật Đặc Biệt</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-mono">
                    {selectedOperator.specialAbility}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Armory Showcase */}
        {activeTab === 'armory' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-950 shadow-2xl">
              <img
                src="/src/assets/images/tactical_arsenal_m4a1_1793764684151.jpg"
                alt="Tactical Assault Rifle M4A1 Desert Spec"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-60" />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-emerald-400 uppercase">
                Phần Thưởng Gift Code Độc Quyền
              </div>
              <h3 className="text-2xl font-condensed font-extrabold uppercase text-white">
                M4A1 Tactical Desert Camo Spec
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Khí tài đột kích tiêu chuẩn được trang bị ống ngắm toàn ảnh Holographic Sight, nòng giảm thanh âm chiến thuật và hộp tiếp đạn mở rộng 40 viên. Nhận ngay khi nhập mã <span className="font-mono text-emerald-400 font-bold">HAWKOPSHQVIETNAM</span>.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Sát Thương (Damage)</div>
                  <div className="text-lg font-mono font-bold text-white tabular-nums">42 / 100</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Tốc Độ Bắn (Fire Rate)</div>
                  <div className="text-lg font-mono font-bold text-white tabular-nums">820 RPM</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Độ Ổn Định (Control)</div>
                  <div className="text-lg font-mono font-bold text-white tabular-nums">78 / 100</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Tầm Bắn Hiệu Quả</div>
                  <div className="text-lg font-mono font-bold text-white tabular-nums">65 Mét</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
