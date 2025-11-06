import { motion } from 'framer-motion';
import { GraduationCap, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-700/20 to-fuchsia-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About Me
        </motion.h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-white/80"><User className="h-5 w-5 text-indigo-400"/> Personal Story</div>
            <p className="text-white/70">
              I’m Raihan — a full-stack developer and mobile enthusiast with a passion for building delightful, performant digital products. I enjoy translating ideas into clean, scalable code and crafting interfaces that feel intuitive and alive.
            </p>
            <p className="mt-3 text-white/70">
              My toolkit spans React, Laravel, Node.js, and Flutter, complemented by curiosity in IoT systems and AI tools that accelerate development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-white/80"><GraduationCap className="h-5 w-5 text-fuchsia-400"/> Education</div>
            <ul className="list-disc space-y-2 pl-6 text-white/70">
              <li>Information Technology Student — focusing on software engineering and system design.</li>
              <li>Self-driven learning through open-source contributions and project-based exploration.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
