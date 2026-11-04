import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] border-t border-slate-900 text-slate-500 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-condensed font-extrabold text-base">
              DF
            </div>
            <div>
              <span className="font-condensed font-extrabold text-white text-lg tracking-wider uppercase">
                Delta Force: HQ Việt Nam
              </span>
              <div className="text-[11px] text-slate-500">Cổng sự kiện và tổng hợp code quà tặng tác chiến</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a
              href="https://www.playdeltaforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Trang Chủ playdeltaforce.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://store.steampowered.com/app/2507950/Delta_Force/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Steam Hub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://discord.gg/deltaforcegame"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Discord Quân Đoàn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-600 text-[11px] max-w-2xl">
            Tuyên bố miễn trừ trách nhiệm: Đây là cổng tổng hợp thông tin sự kiện và bộ công cụ hỗ trợ cộng đồng người chơi Delta Force tại Việt Nam. Toàn bộ hình ảnh, thương hiệu và bản quyền trò chơi thuộc về TiMi Studio Group &amp; Level Infinite. Script console chạy trực tiếp ở máy khách, không lưu trữ thông tin đăng nhập.
          </p>
          <div className="text-slate-500 text-[11px]">
            &copy; 2026 Delta Force Community Hub Vietnam
          </div>
        </div>
      </div>
    </footer>
  );
};
