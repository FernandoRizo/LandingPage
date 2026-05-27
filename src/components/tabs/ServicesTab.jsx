import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { profile } from "../../data/profile";
import { softShadow } from "../../styles/shadows";
import PrimaryButton from "../ui/PrimaryButton";
import NeumoCard from "../ui/NeumoCard";

export default function ServicesTab({ t }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {t.services.packages.map((service) => (
        <motion.div
          key={service.name}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className={`rounded-[2rem] bg-slate-50 p-6 ${service.featured ? "ring-2 ring-emerald-500" : ""}`}
          style={softShadow}
        >
          {service.featured && (
            <span className="mb-5 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
              {t.services.recommended}
            </span>
          )}
          <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
            {service.name}
          </h3>
          <p className="mt-2 text-sm font-bold text-emerald-700">{service.price}</p>
          <p className="mt-4 leading-7 text-slate-600">{service.description}</p>

          <ul className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <PrimaryButton href={profile.whatsapp} variant={service.featured ? "primary" : "secondary"}>
              {t.services.quote} <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </motion.div>
      ))}

      <NeumoCard className="lg:col-span-3">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-black text-slate-800">
              {t.services.qualityTitle}
            </h3>
            <p className="mt-4 leading-8 text-slate-600">{t.services.qualityText}</p>
          </div>
        </div>
      </NeumoCard>
    </div>
  );
}
