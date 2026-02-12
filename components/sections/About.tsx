'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Database, Server, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const profile = profileRef.current

    if (!section || !profile) return

    // Floating animation for profile card
    gsap.to(profile, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })

    // Scroll-triggered animations
    gsap.fromTo('.about-text',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    )

    gsap.fromTo('.tech-icon',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.tech-stack',
          start: 'top 80%',
        }
      }
    )
  }, [])

  const techStack = [
    { name: 'Frontend', icon: Globe, items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs'] },
    { name: 'Database', icon: Database, items: ['MySQL', 'MongoDB'] },
    { name: 'Tools', icon: Code, items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'] },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-teal-950/30 to-slate-950" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 font-display">About Me</h2>
          <p className="text-xl text-white/60">My journey in the world of code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            ref={profileRef}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 text-center relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 animate-gradient" />
              
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-4xl font-bold text-black">
                AD
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Abhinav Dikshit</h3>
              <p className="text-neon-blue mb-4">Full Stack Developer</p>
              <p className="text-white/70 leading-relaxed">
                Based in Gokulpur, Delhi, I&apos;m passionate about creating innovative web solutions 
                that make a difference. Currently pursuing B.Tech in Computer Science at AKTU.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-neon-blue">3+</div>
                  <div className="text-sm text-white/60">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-purple">4+</div>
                  <div className="text-sm text-white/60">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-pink">78%</div>
                  <div className="text-sm text-white/60">CGPA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <div className="about-text space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Story</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                My journey into the world of programming began with curiosity and has evolved into a passion 
                for creating meaningful digital experiences. With a strong foundation in both frontend and 
                backend technologies, I enjoy building full-stack applications that solve real-world problems.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                From developing job portals to task management systems, I&apos;ve gained hands-on experience 
                in modern web technologies. My internship at Soft Nexis further strengthened my skills 
                in API development and React component architecture.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="tech-stack"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-neon-blue">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((category, index) => (
                  <motion.div
                    key={category.name}
                    className="tech-icon glass-card p-4 tilt"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <category.icon className="text-neon-blue" size={24} />
                      <h5 className="font-semibold">{category.name}</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
