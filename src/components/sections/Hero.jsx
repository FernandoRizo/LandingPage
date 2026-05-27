import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe2, Target } from "lucide-react";
import { profile } from "../../data/profile";
import { softInset, softShadow } from "../../styles/shadows";
import PrimaryButton from "../ui/PrimaryButton";

export default function Hero({ t, language, openTab }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
      <motion.div
        key={`hero-text-${language}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100"
          style={softShadow}
        >
          <Globe2 className="h-4 w-4" />
          {t.heroBadge}
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-4xl font-black tracking-tight text-slate-800 md:text-6xl">
          {t.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href={profile.whatsapp}>
          {t.heroPrimary} <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <button
            type="button"
            onClick={() => openTab("proyectos")}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-6 py-3 text-sm font-bold text-slate-800 transition hover:bg-white"
            style={softShadow}
          >
            {t.heroSecondary} <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        key={`hero-panel-${language}`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="rounded-[2.5rem] bg-slate-50 p-6"
        style={softShadow}
      >
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
                {t.funnelLabel}
              </p>
              <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl font-black text-slate-800">
                {t.funnelTitle}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Target className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {t.quickCards.map(([Icon, title, text, tabId]) => (
              <button
                key={title}
                type="button"
                onClick={() => openTab(tabId)}
                className="rounded-3xl bg-slate-50 p-5 text-left transition hover:-translate-y-1 hover:bg-emerald-50"
                style={softInset}
              >
                <Icon className="h-6 w-6 text-emerald-600" />
                <p className="mt-4 font-['Plus_Jakarta_Sans'] text-lg font-black text-slate-800">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
