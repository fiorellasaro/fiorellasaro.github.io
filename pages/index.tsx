import ProjectCard from "@components/ProjectCard";
import ProjectCardPreview from "@components/ProjectCardPreview";
import { projects } from "data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const previewProjects = ["hesafin", "bloinx", "redi"];

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="flex flex-col items-center text-center space-y-6 mt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Avatar placeholder */}
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mx-auto mb-6 border-2 border-[#4EBA65]">
            <Image
              src="/assets/avatarYo.svg"
              alt="Avatar of Fiorella"
              width={144}
              height={144}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name + Role */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Fiorella Sánchez
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#4EBA65] tracking-wide">
            Senior Front-End & Web3 Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Building intuitive, scalable web experiences across blockchain
            ecosystems and offline-first architectures. Currently focused on
            real-world impact, performance and creative interfaces.
          </p>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/projects"
              className="inline-block px-10 py-5 text-xl font-bold bg-[#4EBA65] text-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 tracking-wide"
            >
              View My Projects →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Preview Projects */}
      <section>
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Featured Projects
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((slug) => (
            <ProjectCardPreview
              key={slug}
              slug={slug}
              project={projects[slug]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
