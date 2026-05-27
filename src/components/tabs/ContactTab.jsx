import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { profile } from "../../data/profile";
import PrimaryButton from "../ui/PrimaryButton";
import SectionTitle from "../ui/SectionTitle";
import NeumoCard from "../ui/NeumoCard";

export default function ContactTab({ t }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <NeumoCard className="lg:col-span-7">
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href={profile.whatsapp}>
            {t.contact.whatsapp} <MessageCircle className="h-4 w-4" />
          </PrimaryButton>
          <PrimaryButton href={`mailto:${profile.email}`} variant="secondary">
            {t.contact.email} <Mail className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </NeumoCard>

      <NeumoCard className="lg:col-span-5">
        <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
          {t.contact.dataTitle}
        </h3>
        <div className="mt-6 space-y-4">
          <div className="flex gap-3 rounded-3xl bg-white/75 p-4 ring-1 ring-white">
            <Mail className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-slate-700">{profile.email}</span>
          </div>
          <div className="flex gap-3 rounded-3xl bg-white/75 p-4 ring-1 ring-white">
            <Phone className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-slate-700">{profile.phoneLabel}</span>
          </div>
          <div className="flex gap-3 rounded-3xl bg-white/75 p-4 ring-1 ring-white">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-slate-700">{profile.city}</span>
          </div>
        </div>
      </NeumoCard>
    </div>
  );
}
