import { Sparkles } from "lucide-react";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-black tracking-tight text-slate-800 md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
