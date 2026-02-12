'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'Python', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'React.js', level: 85, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 75, color: 'from-gray-400 to-gray-600' },
        { name: 'Next.js', level: 70, color: 'from-black to-gray-800' },
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      category: 'Tools & Concepts',
      items: [
        { name: 'Git/GitHub', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'REST APIs', level: 80, color: 'from-indigo-400 to-indigo-600' },
        { name: 'DSA', level: 75, color: 'from-pink-400 to-pink-600' },
        { name: 'System Design', level: 70, color: 'from-teal-400 to-teal-600' },
      ]
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Animate skill cards
    gsap.fromTo('.skill-card',
      { opacity: 0, y: 50, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    )

    // Animate progress bars
    gsap.fromTo('.progress-fill',
      { width: '0%' },
      {
        width: (i, el) => el.dataset.width + '%',
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 70%',
        }
      }
    )
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-emerald-950/30 to-slate-950/80" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 font-display">Skills</h2>
          <p className="text-xl text-white/60">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-card glass-card p-6 tilt"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-6 text-neon-blue text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="progress-bar h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`progress-fill h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'JWT Authentication', 'RESTful APIs', 
              'Version Control', 'Agile Methodology', 'Problem Solving',
              'Team Collaboration', 'Code Review', 'Testing', 'Deployment'
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium neon-glow magnetic"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
