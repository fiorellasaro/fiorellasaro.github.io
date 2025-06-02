import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <motion.section
      className="max-w-xl mx-auto mt-16 text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold">Let's connect</h1>
      <p className="text-neutral-600 dark:text-neutral-300 text-lg">
        You can reach me via email or follow my work on GitHub and LinkedIn.
      </p>
      <div className="flex flex-col items-center gap-4 text-lg">
        <a
          href="mailto:fiorellasaro27@gmail.com"
          className="text-[#4EBA65] underline"
        >
          fiorellasaro27@gmail.com
        </a>
        <a
          href="https://github.com/fiorellasaro"
          target="_blank"
          className="text-[#4EBA65] underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/fiorellasaro"
          target="_blank"
          className="text-[#4EBA65] underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
