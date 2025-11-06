import { motion } from 'framer-motion';
import { Code2, Cpu, Smartphone, Globe, Github, ExternalLink, Star } from 'lucide-react';

const skills = [
  {
    title: 'Web',
    icon: Globe,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'Node.js', 'Next.js'],
    hue: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'Kotlin'],
    hue: 'from-fuchsia-500/20 to-pink-500/10',
  },
  {
    title: 'IoT',
    icon: Cpu,
    items: ['Sensor integration', 'Realtime dashboards', 'Device protocols'],
    hue: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    title: 'AI Tools',
    icon: Code2,
    items: ['ChatGPT', 'Gemini', 'Claude'],
    hue: 'from-violet-500/20 to-purple-500/10',
  },
];

const projects = [
  {
    title: 'Website Pemantauan Siswa',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    desc: 'A student monitoring platform with authentication, attendance tracking, and admin insights.',
    github: 'https://github.com/Raihhazmi',
  },
  {
    title: 'QuickNote App',
    stack: ['Flutter', 'Dart'],
    desc: 'A fast, offline-first note-taking mobile app with tags and search.',
    github: 'https://github.com/Raihhazmi',
  },
  {
    title: 'Keva Project',
    stack: ['Next.js', 'TailwindCSS'],
    desc: 'A modern web experience exploring minimalist UI and blazing performance.',
    github: 'https://github.com/Raihhazmi',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Skills & Featured Projects
        </motion.h2>

        {/* Skills */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon, items, hue }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur`}
            >
              <div className={`pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-gradient-to-br ${hue} blur-2xl`} />
              <div className="mb-3 inline-flex items-center gap-2 text-white/90">
                <Icon className="h-5 w-5 text-indigo-400" />
                <span className="font-semibold">{title}</span>
              </div>
              <ul className="space-y-1 text-sm text-white/70">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_18px_rgba(99,102,241,0.35)] transition hover:shadow-[0_0_28px_rgba(217,70,239,0.45)]">
                  <ExternalLink className="h-4 w-4" /> Preview
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[{ label: 'Projects Completed', value: '15+' }, { label: 'Happy Clients', value: '8+' }, { label: 'Avg. Rating', value: '4.9/5' }].map((a) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30">
                <Star className="h-5 w-5 text-yellow-300" />
              </div>
              <div className="mt-3 text-2xl font-bold">{a.value}</div>
              <div className="text-sm text-white/70">{a.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
