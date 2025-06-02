import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-extrabold text-[#4EBA65] mb-4">404</h1>
      <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-6">
        This page doesn’t exist — or it’s still in another timeline.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-[#4EBA65] text-white text-sm rounded-lg font-semibold hover:scale-105 transition"
      >
        ← Go back home
      </Link>
    </motion.section>
  );
}
