'use client'

import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { downloadResume } from '@/lib/utils/downloadResume'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70">
            Open for internships
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-tight">
            <span className="gradient-text">Abhinav Dikshit</span>
            <span className="block text-white/80 text-2xl md:text-3xl mt-4 font-sans">
              Full Stack Developer crafting fast, human-first web experiences
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            I build modern React and Node.js apps with clean UX, reliable APIs, and performance in mind.
            I love shipping products that feel simple, sharp, and easy to use.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 glass rounded-full text-sm">React</span>
            <span className="px-4 py-2 glass rounded-full text-sm">Node.js</span>
            <span className="px-4 py-2 glass rounded-full text-sm">MySQL</span>
            <span className="px-4 py-2 glass rounded-full text-sm">MongoDB</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-ink font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-neon-blue/20 ripple"
            >
              View Projects
            </button>

            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-7 py-4 rounded-xl glass neon-glow text-white/90 font-semibold transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/Abhinavdixit-97"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:border-neon-blue transition-all duration-300 transform hover:scale-105"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/abhinav-dikshit-91aa5327b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:border-neon-purple transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:abhinavdixit093@gmail.com"
              className="p-3 rounded-full glass hover:border-neon-pink transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 blur-2xl" />
          <div className="glass-card p-8 relative">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl font-bold text-ink">
                AD
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">Based in</p>
                <p className="text-xl font-semibold">Delhi, India</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">Projects</p>
                <p className="text-2xl font-semibold text-neon-blue">3+</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">Certifications</p>
                <p className="text-2xl font-semibold text-neon-purple">4+</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">CGPA</p>
                <p className="text-2xl font-semibold text-neon-pink">7.8</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">Focus</p>
                <p className="text-2xl font-semibold text-neon-green">Full Stack</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-white/70">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
              <ArrowDown className="text-neon-blue" size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
