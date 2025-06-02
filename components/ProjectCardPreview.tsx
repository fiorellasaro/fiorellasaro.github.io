import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "./ProjectCard";

type Props = {
  slug: string;
  project: ProjectData;
};

const ProjectCardPreview = ({ slug, project }: Props) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-neutral-900">
        {project.imageUrl && (
          <div className="relative w-full h-48">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-neutral-500">{project.year}</p>
          <p className="text-sm mt-2 text-neutral-700 dark:text-neutral-300 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardPreview;
