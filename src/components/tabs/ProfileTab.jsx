import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import MiniIcon from "../ui/MiniIcon";
import NeumoCard from "../ui/NeumoCard";
import ProfilePhoto from "../common/ProfilePhoto";

export default function ProfileTab({ t }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <NeumoCard className="lg:col-span-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <ProfilePhoto size="md" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">
              {t.profile.eyebrow}
            </p>
            <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-black text-slate-800">
              {profile.name}
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-600">{t.profileTitle}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-slate-100">
                <MapPin className="h-4 w-4 text-emerald-600" /> {profile.city}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-slate-100">
                <GraduationCap className="h-4 w-4 text-emerald-600" /> {t.profile.school}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-base leading-8 text-slate-600">{t.profile.paragraph}</p>
      </NeumoCard>

      <NeumoCard className="lg:col-span-5">
        <div className="flex items-center gap-4">
          <MiniIcon>
            <Languages className="h-6 w-6" />
          </MiniIcon>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
              {t.profile.globalTitle}
            </h3>
            <p className="mt-1 text-slate-500">{t.profile.globalSubtitle}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-3xl bg-white/70 p-5 ring-1 ring-white">
            <p className="text-sm font-bold text-emerald-600">{t.profile.english}</p>
            <p className="mt-1 font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
              {t.profile.englishLevel}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{t.profile.englishText}</p>
          </div>
          <div className="rounded-3xl bg-white/70 p-5 ring-1 ring-white">
            <p className="text-sm font-bold text-emerald-600">{t.profile.japanese}</p>
            <p className="mt-1 font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
              {t.profile.japaneseLevel}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{t.profile.japaneseText}</p>
          </div>
        </div>
      </NeumoCard>

      <NeumoCard className="lg:col-span-5">
        <div className="flex items-center gap-4">
          <MiniIcon>
            <Code2 className="h-6 w-6" />
          </MiniIcon>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
              {t.profile.skillsTitle}
            </h3>
            <p className="mt-1 text-slate-500">{t.profile.skillsSubtitle}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {t.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </NeumoCard>

      <NeumoCard className="lg:col-span-7">
        <div className="flex items-center gap-4">
          <MiniIcon>
            <BriefcaseBusiness className="h-6 w-6" />
          </MiniIcon>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
              {t.profile.experienceTitle}
            </h3>
            <p className="mt-1 text-slate-500">{t.profile.experienceSubtitle}</p>
          </div>
        </div>

        <div className="mt-7 grid gap-4">
          {t.experience.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              whileHover={{ x: 4 }}
              className="rounded-3xl bg-white/75 p-5 ring-1 ring-white"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-black text-slate-800">
                    {item.role}
                  </h4>
                  <p className="font-semibold text-emerald-700">{item.company}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </NeumoCard>
    </div>
  );
}
