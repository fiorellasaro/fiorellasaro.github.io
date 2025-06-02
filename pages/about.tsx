import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      className="max-w-3xl mx-auto mt-16 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300">
        I'm Fiorella, a Front-End Developer with 5+ years of experience and a
        strong background in UX. I build interfaces that blend performance,
        accessibility, and visual design — and I love working at the
        intersection of tech and art.
      </p>
      <p className="text-lg text-neutral-600 dark:text-neutral-300">
        I'm currently focused on Web3, offline-first architectures, and scalable
        design systems. I’ve worked on blockchain tools, savings groups in
        Africa, and platforms for women.
      </p>
    </motion.section>
  );
}
