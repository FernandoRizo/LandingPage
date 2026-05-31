import { MessageCircle } from "lucide-react";
import { profile } from "../../data/profile";

export default function FloatingWhatsApp({ t }) {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t?.contact?.whatsapp || "WhatsApp"}
      title={t?.contact?.whatsapp || "WhatsApp"}
      className="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 rounded-full bg-white p-1">
        <span className="h-full w-full rounded-full bg-emerald-500" />
      </span>
    </a>
  );
}
