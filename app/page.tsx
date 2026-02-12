'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/ui/Navigation'
import Chatbot from '@/components/ui/Chatbot'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Chatbot />
    </main>
  )
}
