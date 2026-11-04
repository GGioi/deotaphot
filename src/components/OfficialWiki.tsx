import React, { useState } from 'react';
import {
  WIKI_MAPS,
  WIKI_OPERATORS_FULL,
  WIKI_GEAR_ITEMS,
  WIKI_GAME_MODES
} from '../data/wikiData';
import { GUNSMITH_WEAPONS } from '../data/gunsmithData';
import { WikiMap, Operator, WikiGearItem, WikiGameMode } from '../types';
import { TranslationStrings } from '../i18n';
import {
  BookOpen,
  MapPin,
  Users,
  Shield,
  Crosshair,
  Gamepad2,
  Search,
  ExternalLink,
  ChevronRight,
  Flame,
  Zap,
  Sparkles,
  AlertTriangle,
  HeartPulse,
  Package
} from 'lucide-react';

interface OfficialWikiProps {
  t: TranslationStrings;
}

export const OfficialWiki: React.FC<OfficialWikiProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'maps' | 'operators' | 'weapons' | 'gear' | 'modes'>('maps');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMap, setSelectedMap] = useState<WikiMap | null>(null);
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(null);

  // Filter maps
  const filteredMaps = WIKI_MAPS.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bossName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter operators
  const filteredOperators = WIKI_OPERATORS_FULL.filter(
    (op) =>
      op.callsign.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter gear
  const filteredGear = WIKI_GEAR_ITEMS.filter(
    (g) =>
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="official-wiki" className="py-14 bg-[#090c10] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase">
              <span>Bách Khoa Toàn Thư Delta Force</span>
              <span aria-hidden="true">·</span>
              <span>Official Wiki Tiếng Việt</span>
              <span aria-hidden="true">·</span>
              <span>Dữ Liệu Trực Tiếp Bản Gốc</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-condensed font-extrabold uppercase text-white tracking-tight">
              Delta Force: <span className="text-emerald-400">Official Wiki &amp; Cẩm Nang Tác Chiến</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Cơ sở dữ liệu toàn diện về bản đồ trích xuất, chiến thuật Boss, danh sách đặc nhiệm, chỉ số vũ khí và cơ chế các chế độ chơi.
            </p>
          </div>

          <a
            href="https://www.playdeltaforce.com/events/officialwiki/vi/#/home"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0"
          >
            <span>Mở Trang Wiki Gốc</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Wiki Category Tabs and Search */}
        <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveTab('maps')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'maps'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Bản Đồ Chiến Lược</span>
            </button>

            <button
              onClick={() => setActiveTab('operators')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'operators'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Hồ Sơ Toàn Bộ Đặc Nhiệm</span>
            </button>

            <button
              onClick={() => setActiveTab('weapons')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'weapons'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:text-white'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>Kho Vũ Khí Bắn Súng</span>
            </button>

            <button
              onClick={() => setActiveTab('gear')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'gear'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Giáp &amp; Y Tế Cứu Thương</span>
            </button>

            <button
              onClick={() => setActiveTab('modes')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'modes'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Chế Độ Chơi</span>
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm trong Wiki..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Content 1: Maps & Extraction */}
        {activeTab === 'maps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMaps.map((map) => (
              <div
                key={map.id}
                className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-emerald-400 font-bold uppercase">{map.name}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400 font-semibold">Độ Nguy Hiểm: {map.threatLevel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{map.extractionPoints} Điểm Trích Xuất</span>
                  </div>

                  <h3 className="text-2xl font-condensed font-extrabold uppercase text-white mb-2">
                    {map.nameVi} ({map.name})
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {map.overview}
                  </p>

                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800 mb-4 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-rose-400 font-semibold">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Thủ Lĩnh Khu Vực (Boss): {map.bossName}</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Vật phẩm rơi: <span className="text-emerald-300">{map.bossLoot}</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Khuyến nghị trang bị: <span className="text-amber-300">{map.recommendedGearTier}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Điểm Trọng Điểm &amp; Khu Vực Loot Đồ:
                  </div>
                  <div className="space-y-1.5">
                    {map.keyLocations.map((loc, i) => (
                      <div
                        key={i}
                        className="p-2 rounded bg-slate-950 border border-slate-800/80 flex items-start justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-white block">{loc.name}</span>
                          <span className="text-[11px] text-slate-400">{loc.desc}</span>
                        </div>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ml-2 ${
                            loc.lootTier === 'Cao'
                              ? 'bg-rose-950 text-rose-300'
                              : loc.lootTier === 'Trung Bình'
                              ? 'bg-amber-950 text-amber-300'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          Loot {loc.lootTier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content 2: Operators Roster */}
        {activeTab === 'operators' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOperators.map((op) => (
              <div
                key={op.id}
                className="p-5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative rounded-md overflow-hidden aspect-[4/3] bg-slate-950 mb-4 border border-slate-800">
                    <img
                      src={op.image}
                      alt={op.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <span className="text-emerald-400 font-mono text-xs font-bold uppercase">{op.role}</span>
                      <span className="text-[11px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                        Độ Khó: {op.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-condensed font-extrabold uppercase text-white mb-1">
                    {op.callsign} <span className="text-slate-400 text-base font-normal">({op.name})</span>
                  </h3>
                  <div className="text-[11px] text-slate-400 mb-3">{op.faction}</div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {op.bio}
                  </p>

                  <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-2 text-xs mb-3">
                    <div>
                      <span className="font-bold text-emerald-400 block mb-0.5">Kỹ Năng Kích Hoạt:</span>
                      <span className="text-slate-300 text-[11px]">{op.specialAbility}</span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-400 block mb-0.5">Nội Tại Đặc Biệt:</span>
                      <span className="text-slate-300 text-[11px]">{op.passiveTrait}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Trang bị: {op.tacticalGear.split('&')[0]}</span>
                  <span className="font-mono text-emerald-400 font-bold">{op.recommendedWeapons.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content 3: Weapons Arsenal */}
        {activeTab === 'weapons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GUNSMITH_WEAPONS.map((wp) => (
              <div
                key={wp.id}
                className="p-5 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
              >
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-1 uppercase">{wp.category}</div>
                  <h4 className="text-lg font-condensed font-extrabold uppercase text-white mb-1">
                    {wp.name}
                  </h4>
                  <div className="text-[11px] text-slate-400 font-mono mb-3">Cỡ đạn: {wp.caliber}</div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{wp.desc}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Sát Thương</span>
                      <span className="text-white font-bold text-sm">{wp.baseStats.damage}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Tốc Độ Bắn</span>
                      <span className="text-white font-bold text-sm">{wp.baseStats.rpm} RPM</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Kiểm Soát Giật</span>
                      <span className="text-emerald-400 font-bold text-sm">{wp.baseStats.recoilControl}/100</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Tầm Bắn</span>
                      <span className="text-amber-400 font-bold text-sm">{wp.baseStats.effectiveRange}m</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Băng: {wp.baseStats.magCapacity} viên</span>
                  <a href="#gunsmith-section" className="text-emerald-400 hover:underline font-semibold">
                    Độ súng khẩu này &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content 4: Tactical Gear & Armor */}
        {activeTab === 'gear' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGear.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span className="text-emerald-400 font-semibold">{item.category}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold text-[10px] border border-emerald-800">
                      TIER {item.tier}
                    </span>
                  </div>

                  <h4 className="text-lg font-condensed font-bold uppercase text-white mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1 text-xs">
                  {item.durability && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Độ Bền (Durability):</span>
                      <span className="font-mono text-white font-bold">{item.durability} Điểm</span>
                    </div>
                  )}
                  {item.material && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vật Liệu Chế Tạo:</span>
                      <span className="text-slate-200">{item.material}</span>
                    </div>
                  )}
                  {item.protectedAreas && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vị Trí Bảo Hộ:</span>
                      <span className="text-emerald-300">{item.protectedAreas}</span>
                    </div>
                  )}
                  {item.capacity && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sức Chứa:</span>
                      <span className="font-mono text-cyan-300 font-bold">{item.capacity}</span>
                    </div>
                  )}
                  {item.healingPoints && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Khôi Phục Máu:</span>
                      <span className="font-mono text-emerald-400 font-bold">+{item.healingPoints} HP</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content 5: Game Modes Guide */}
        {activeTab === 'modes' && (
          <div className="space-y-6">
            {WIKI_GAME_MODES.map((mode) => (
              <div
                key={mode.id}
                className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                    <span>{mode.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>Quy Mô {mode.playersCount}</span>
                  </div>

                  <h3 className="text-2xl font-condensed font-extrabold uppercase text-white">
                    {mode.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded bg-slate-950 border border-slate-800">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Quy Tắc Tác Chiến Trọng Yếu:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {mode.keyMechanics.map((mech, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none shrink-0 mt-1.5" />
                          <span>{mech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded bg-emerald-950/20 border border-emerald-900/60">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Lời Khuyên Sinh Tồn Từ Cao Thủ:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {mode.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold shrink-0">#{i + 1}</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
