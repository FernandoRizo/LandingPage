import { MessageCircle } from "lucide-react";
import { profile } from "../../data/profile";
import { softInset, softShadow } from "../../styles/shadows";
import ExternalAnchor from "../common/ExternalAnchor";
import LanguageToggle from "../common/LanguageToggle";
import ProfilePhoto from "../common/ProfilePhoto";

export default function Header({ activeTab, openTab, language, toggleLanguage, t, tabs }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-[#F8FAFC]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <button
          type="button"
          onClick={() => openTab("perfil")}
          className="flex cursor-pointer items-center gap-3 text-left"
        >
          <ProfilePhoto size="sm" />
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-black leading-none text-slate-800">
              {profile.shortName}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">{t.brandSubtitle}</p>
          </div>
        </button>

        <div className="hidden rounded-3xl bg-slate-50 p-2 lg:flex" style={softInset}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => openTab(tab.id)}
              className={`cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle language={language} onToggle={toggleLanguage} t={t} />
          <ExternalAnchor
            href={profile.whatsapp}
            className="hidden cursor-pointer items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 md:inline-flex"
            style={softShadow}
          >
            {t.headerContact} <MessageCircle className="h-4 w-4" />
          </ExternalAnchor>
        </div>
      </nav>

      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-4 lg:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => openTab(tab.id)}
            className={`shrink-0 cursor-pointer rounded-2xl px-4 py-2 text-sm font-bold transition ${
              activeTab === tab.id ? "bg-emerald-600 text-white" : "bg-white text-slate-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}
