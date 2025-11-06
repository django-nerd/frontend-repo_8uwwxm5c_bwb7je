import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const roles = [
  'Full-Stack Developer',
  'Mobile Enthusiast',
  'IT Student',
];

export default function Hero() {
  const [typeText, setTypeText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const containerRef = useRef(null);

  // Simple typewriter effect without external packages
  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let i = 0;
    setTypeText('');
    setTyping(true);

    const typeInterval = setInterval(() => {
      setTypeText((prev) => current.slice(0, i + 1));
      i += 1;
      if (i === current.length) {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => {
          // pause then delete
          let j = current.length;
          const del = setInterval(() => {
            j -= 1;
            setTypeText(current.slice(0, j));
            if (j === 0) {
              clearInterval(del);
              setRoleIndex((r) => (r + 1) % roles.length);
            }
          }, 30);
        }, 1000);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grainy radial gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/40 via-fuchsia-600/30 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-700/30 via-blue-600/20 to-emerald-500/10 blur-3xl" />
      </div>

      {/* Top Navigation (sticky) */}
      <header className="sticky top-0 z-20 backdrop-blur-sm/0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/90">
            <Sparkles className="h-5 w-5 text-violet-400 transition-transform group-hover:rotate-12" />
            <span>M. Raihan Azmi</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {[
              { id: '#about', label: 'About' },
              { id: '#showcase', label: 'Skills & Projects' },
              { id: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={scrollTo(item.id)}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={scrollTo('#contact')}
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] md:inline-block"
          >
            Let’s talk
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div ref={containerRef} className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 pt-6 text-center md:items-start md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/60">Hello, I’m</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Muhammad Raihan Azmi
          </h1>
          <div className="mt-3 h-8 text-lg text-white/80 sm:text-xl">
            <span className="font-medium text-white/60">{typing ? '>' : '>'} </span>
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400">
              {typeText}
            </span>
            <span className="ml-1 animate-pulse">▍</span>
          </div>
          <p className="mt-4 max-w-2xl text-balance text-white/70">
            Code with purpose. Build with passion. Lead with vision. I craft web and mobile experiences using React, Laravel, Node.js, and Flutter — with a growing interest in IoT and AI-assisted workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#showcase"
              onClick={scrollTo('#showcase')}
              className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 hover:ring-white/20"
            >
              Explore my work
            </a>
            <a
              href="mailto:raihanazmi37@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition hover:shadow-[0_0_40px_rgba(217,70,239,0.6)]"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/Raihhazmi" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/30">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/30">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/30">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord" className="rounded-full bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:text-white hover:ring-white/30">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
