// src/components/ProjectCardSummary.tsx
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "./ProjectCard";
import { motion } from "framer-motion";

type Props = {
  slug: string;
  project: ProjectData;
};

const ProjectCardSummary = ({ slug, project }: Props) => {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-lg transition cursor-pointer"
      >
        {/* Image or fallback */}
        {project.imageUrl && (
          <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="contain"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-neutral-500 mb-2">
            {project.year} · {project.role}
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">
            {project.description}
          </p>
          <p className="mt-3 text-xs text-[#4EBA65] font-medium">
            View Project →
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCardSummary;
