import { Languages } from "lucide-react";
import { softShadow } from "../../styles/shadows";

export default function LanguageToggle({ language, onToggle, t }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={t.langAria}
      title={t.langAria}
      className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black text-slate-700 ring-1 ring-slate-100 transition hover:text-emerald-700"
      style={softShadow}
    >
      <Languages className="h-4 w-4 text-emerald-600" />
      <span>{language.toUpperCase()}</span>
      <span className="rounded-xl bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
        {t.langButton}
      </span>
    </button>
  );
}
