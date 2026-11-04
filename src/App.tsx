import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GunsmithBuilder } from './components/GunsmithBuilder';
import { OfficialWiki } from './components/OfficialWiki';
import { CodeCheckerTool } from './components/CodeCheckerTool';
import { RedeemCodeCenter } from './components/RedeemCodeCenter';
import { ConsoleScriptTool } from './components/ConsoleScriptTool';
import { EventShowcase } from './components/EventShowcase';
import { TestRedeemModal } from './components/TestRedeemModal';
import { Footer } from './components/Footer';
import { RedeemCode } from './types';
import { ALL_REDEEM_CODES } from './data/allCodes';
import { Language, TRANSLATIONS } from './i18n';
import { CheckCircle2 } from 'lucide-react';

const STORAGE_LANG_KEY = 'df_hq_lang';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_LANG_KEY) as Language;
      if (savedLang && (savedLang === 'vi' || savedLang === 'en' || savedLang === 'zh' || savedLang === 'th')) {
        return savedLang;
      }
    } catch (e) {
      console.error(e);
    }
    return 'vi';
  });

  const [codes, setCodes] = useState<RedeemCode[]>(ALL_REDEEM_CODES);
  const [activeSection, setActiveSection] = useState<string>('checker');
  const [testModalCode, setTestModalCode] = useState<RedeemCode | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.vi;

  const handleSelectLang = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch (e) {
      console.error(e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(
      sectionId === 'events'
        ? 'hq-events'
        : sectionId === 'gunsmith'
        ? 'gunsmith-section'
        : sectionId === 'wiki'
        ? 'official-wiki'
        : sectionId === 'checker'
        ? 'code-checker'
        : sectionId === 'codes'
        ? 'redeem-center'
        : sectionId === 'script'
        ? 'console-script'
        : sectionId === 'arsenal'
        ? 'hq-events'
        : 'top'
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeCodesCount = codes.filter((c) => c.status === 'active' || c.status === 'limited').length;

  return (
    <div
      id="top"
      className="min-h-screen bg-[#090c10] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans"
    >
      {/* Top Navbar with multi-language switch */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        totalActiveCodes={activeCodesCount}
        t={t}
      />

      {/* Hero Section */}
      <HeroSection
        totalCodes={codes.length}
        activeCodes={activeCodesCount}
        onNavigateToCodes={() => handleNavigate('codes')}
        onNavigateToChecker={() => handleNavigate('checker')}
        onNavigateToScript={() => handleNavigate('script')}
        t={t}
      />

      {/* Gunsmith Weapon Builder Workshop */}
      <GunsmithBuilder t={t} />

      {/* Official Delta Force Wiki */}
      <OfficialWiki t={t} />

      {/* Code Status Checker Tool (Check code có / không) */}
      <CodeCheckerTool
        codes={codes}
        t={t}
        onOpenTestRedeem={(code) => setTestModalCode(code)}
      />

      {/* Redeem Code Center */}
      <RedeemCodeCenter
        codes={codes}
        onOpenTestRedeem={(code) => setTestModalCode(code)}
        t={t}
      />

      {/* Console Script Tool for F12 */}
      <ConsoleScriptTool codes={codes} t={t} />

      {/* Events & Operators Dossier */}
      <EventShowcase />

      {/* Footer */}
      <Footer />

      {/* In-Page Test Redeem Modal */}
      {testModalCode && (
        <TestRedeemModal
          code={testModalCode}
          onClose={() => setTestModalCode(null)}
          onRedeemSuccess={(code, charName) => {
            showToast(`Kích hoạt thành công mã ${code.code} cho ${charName}!`);
            setCodes((prev) =>
              prev.map((c) => (c.id === code.id ? { ...c, timesClaimed: (c.timesClaimed || 0) + 1 } : c))
            );
          }}
          t={t}
        />
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
