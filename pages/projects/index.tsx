import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "data/projects";
import { ProjectData } from "@components/ProjectCard";
import Link from "next/link";
import ProjectCardSummary from "@components/ProjectCardSummary";

export default function ProjectPage() {
  return (
    <motion.section
      className="space-y-12 max-w-6xl mx-auto mt-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-center">All Projects</h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(projects).map(([slug, project]) => (
          <ProjectCardSummary key={slug} slug={slug} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
