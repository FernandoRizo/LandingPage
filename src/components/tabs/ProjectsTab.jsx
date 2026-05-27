import { Code2, PlayCircle } from "lucide-react";
import ExternalAnchor from "../common/ExternalAnchor";
import NeumoCard from "../ui/NeumoCard";
import DeviceMockup from "../projects/DeviceMockup";

export default function ProjectsTab({ t }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {t.projects.map((project) => (
        <NeumoCard key={project.title}>
          <div className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
            <DeviceMockup type={project.device} />
            <div>
              <p className="text-sm font-bold text-emerald-600">{project.platform}</p>
              <h3 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-black text-slate-800">
                {project.title}
              </h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <p>
                  <span className="font-bold text-slate-800">{t.projectLabels.challenge}:</span>{" "}
                  {project.challenge}
                </p>
                <p>
                  <span className="font-bold text-slate-800">{t.projectLabels.solution}:</span>{" "}
                  {project.solution}
                </p>
                <p>
                  <span className="font-bold text-slate-800">{t.projectLabels.result}:</span>{" "}
                  {project.result}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <ExternalAnchor
                    href={project.demoUrl}
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700"
                    ariaLabel={`${t.projectLabels.demo} ${project.title}`}
                  >
                    <PlayCircle className="h-4 w-4" /> {t.projectLabels.demo}
                  </ExternalAnchor>
                )}

                {project.codeUrl && (
                  <ExternalAnchor
                    href={project.codeUrl}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-800 ring-1 ring-slate-100 transition hover:text-emerald-700"
                    ariaLabel={`${t.projectLabels.code} ${project.title}`}
                  >
                    <Code2 className="h-4 w-4" /> {t.projectLabels.code}
                  </ExternalAnchor>
                )}

                {!project.demoUrl && !project.codeUrl && (
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500 ring-1 ring-slate-200">
                    {t.projectLabels.inProgress}
                  </span>
                )}
              </div>
            </div>
          </div>
        </NeumoCard>
      ))}
    </div>
  );
}
