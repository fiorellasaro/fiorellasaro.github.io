// src/components/ProjectCard.tsx
import React from "react";
import Badge from "./Badge";

export interface ProjectData {
  title: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
  contributions: string[];
  impact: string[];
  videoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  status: "online" | "offline" | "demo";
}

const ProjectCard: React.FC<{ data: ProjectData }> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video o imagen */}
        <div className="w-full lg:w-1/2 aspect-video">
          {data.videoUrl ? (
            <iframe
              src={data.videoUrl.replace("watch?v=", "embed/")}
              title={data.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          ) : data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400">
              No preview
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {data.title}
          </h2>
          <p className="text-sm text-neutral-500">
            {data.year} · {data.role}
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {data.description}
          </p>

          {/* Tecnologías */}
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tech.map((t) => (
              <Badge key={t} className="bg-[#4EBA65] text-white">
                {t}
              </Badge>
            ))}
          </div>

          {/* Contribuciones */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-[#4EBA65] uppercase tracking-wide">
              Key Contributions
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              {data.contributions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Impacto */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#4EBA65] uppercase tracking-wide">
              Impact
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              {data.impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Estado */}
          <p className="mt-4 text-xs italic text-neutral-400">
            {data.status === "online"
              ? "🟢 Live Project"
              : data.status === "demo"
              ? "🟡 Demo available"
              : "🔌 Offline — Demo available via video"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
