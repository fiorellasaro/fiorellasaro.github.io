import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "data/projects";
import { ProjectData } from "@components/ProjectCard";

interface Props {
  project: ProjectData;
}

export default function ProjectPage({ project }: Props) {
  return (
    <motion.section
      className="max-w-5xl mx-auto py-12 px-6 space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title + Role */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-sm text-neutral-500">
          {project.year} · {project.role}
        </p>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4EBA65] underline text-sm"
          >
            Visit site ↗
          </a>
        )}
      </div>

      {/* Image / Video */}
      <div className="w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
        {project.videoUrl ? (
          <div className="aspect-video w-full">
            <iframe
              src={project.videoUrl.replace("watch?v=", "embed/")}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${project.title} demo`}
            />
          </div>
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
            No preview available
          </div>
        )}
      </div>

      {/* Description + Status */}
      <div className="text-center">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          {project.description}
        </p>
        <p className="mt-2 text-xs italic text-neutral-400">
          {project.status === "online"
            ? "🟢 Project currently live"
            : project.status === "offline"
            ? "🔌 Offline"
            : "🟡 Demo or code only"}
        </p>
      </div>

      {/* Content split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#4EBA65] mb-2">
            Key Contributions
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            {project.contributions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#4EBA65] mb-2">Impact</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            {project.impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h3 className="text-xl font-semibold text-[#4EBA65] mb-2">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-[#4EBA65] text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects[slug];

  if (!project) return { notFound: true };

  return {
    props: { project },
  };
};
