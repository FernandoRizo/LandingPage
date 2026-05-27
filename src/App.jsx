import React, { useState } from "react";
import { profile } from "./data/profile";
import { translations } from "./data/translations";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import SectionTitle from "./components/ui/SectionTitle";
import TabContent from "./components/tabs/TabContent";

export default function App() {
  const [activeTab, setActiveTab] = useState("perfil");
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  const tabs = Object.entries(t.nav).map(([id, label]) => ({ id, label }));

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-['Inter'] text-slate-800">
      <Header
        activeTab={activeTab}
        openTab={openTab}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
        tabs={tabs}
      />

      <Hero t={t} language={language} openTab={openTab} />

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow={t.sectionEyebrow}
            title={t.nav[activeTab] || t.nav.perfil}
            description={t.sectionDescription}
          />
        </div>
        <TabContent activeTab={activeTab} t={t} language={language} />
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm font-medium text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.shortName}. {t.footer}
        </p>
      </footer>
    </main>
  );
}