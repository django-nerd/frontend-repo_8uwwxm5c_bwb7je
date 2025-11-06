import { motion } from 'framer-motion';
import { Quote, Send, Github, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';

const testimonials = [
  {
    quote: 'Raihan writes clean, reliable code and communicates clearly across teams.',
    name: 'A. Pratama',
    role: 'Peer Developer',
  },
  {
    quote: 'His attention to UI detail and performance optimization truly stands out.',
    name: 'S. Nurhaliza',
    role: 'Design Mentor',
  },
  {
    quote: 'A fast learner who leads with empathy and delivers with consistency.',
    name: 'Dr. R. Iskandar',
    role: 'Lecturer',
  },
];

export default function TestimonialsContact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-700/20 via-fuchsia-600/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Voices & Reach Out
        </motion.h2>

        {/* Testimonials */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Quote className="absolute right-4 top-4 h-5 w-5 text-white/20" />
              <p className="text-white/80">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">
                {t.name} — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">Let’s build something</h3>
            <p className="mt-2 text-white/70">I’m open to freelance, collaborations, and internship opportunities. Drop a message and I’ll get back soon.</p>
            <form className="mt-6 grid gap-4">
              <input aria-label="Your name" placeholder="Your name" className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input aria-label="Email" type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea aria-label="Message" placeholder="Message" rows={4} className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition hover:shadow-[0_0_40px_rgba(217,70,239,0.6)]">
                <Send className="h-4 w-4"/> Send message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <a href="https://github.com/Raihhazmi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"><Github className="h-4 w-4"/> GitHub</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"><Instagram className="h-4 w-4"/> Instagram</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"><MessageCircle className="h-4 w-4"/> Discord</a>
              <a href="mailto:raihanazmi37@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/20"><Mail className="h-4 w-4"/> Email</a>
            </div>
            <div className="mt-6 rounded-xl bg-black/30 p-4 text-sm text-white/60">
              <p>Prefer email? <a href="mailto:raihanazmi37@gmail.com" className="text-indigo-400 hover:underline">raihanazmi37@gmail.com</a></p>
            </div>
          </motion.div>
        </div>

        <footer className="mt-16 text-center text-xs text-white/40">© {new Date().getFullYear()} Muhammad Raihan Azmi — Crafted with passion.</footer>
      </div>
    </section>
  );
}
