'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Intern',
      company: 'Soft Nexis',
      period: 'June 2025 - Aug 2025',
      description: 'Developed RESTful APIs using Node.js and Express. Built reusable React components and responsive UI designs. Used GitHub for version control and team collaboration.',
      achievements: [
        'Developed 10+ RESTful API endpoints',
        'Created reusable React component library',
        'Improved application performance by 30%',
        'Collaborated with 5+ team members using Git'
      ],
      icon: Briefcase,
      color: 'from-neon-blue to-neon-purple'
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      company: 'AKTU',
      period: '2023 - 2026',
      description: 'Currently pursuing Bachelor of Technology in Computer Science with focus on software development, data structures, and system design.',
      grade: '78% CGPA',
      icon: GraduationCap,
      color: 'from-neon-purple to-neon-pink'
    },
    {
      type: 'education',
      title: 'Diploma in Electrical Engineering',
      company: 'BTEUP',
      period: '2019 - 2022',
      description: 'Completed diploma with strong foundation in engineering principles and problem-solving skills.',
      grade: '74%',
      icon: GraduationCap,
      color: 'from-neon-pink to-neon-green'
    },
    {
      type: 'education',
      title: 'High School',
      company: 'UP Board',
      period: '2019',
      description: 'Completed high school education with excellent academic performance.',
      grade: '79%',
      icon: GraduationCap,
      color: 'from-neon-green to-neon-blue'
    }
  ]

  const certifications = [
    {
      type: 'certification',
      title: 'Cloud Computing',
      company: 'IIT Madras - NPTEL',
      period: '2024',
      description: 'Comprehensive course covering cloud computing fundamentals, AWS services, and deployment strategies.',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'certification',
      title: 'Joy of Computing using Python',
      company: 'IIT Madras - NPTEL',
      period: '2024',
      description: 'Advanced Python programming course focusing on computational thinking and problem-solving.',
      icon: Award,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      type: 'certification',
      title: 'Design and Analysis of Algorithms',
      company: 'IIT Madras - NPTEL',
      period: '2024',
      description: 'In-depth study of algorithm design techniques, complexity analysis, and optimization strategies.',
      icon: Award,
      color: 'from-red-400 to-red-600'
    },
    {
      type: 'certification',
      title: 'DSA with Java',
      company: 'Apna College',
      period: '2023',
      description: 'Comprehensive data structures and algorithms course using Java programming language.',
      icon: Award,
      color: 'from-green-400 to-green-600'
    }
  ]

  const allItems = [...experiences, ...education, ...certifications].sort((a, b) => {
    // Sort by year (newest first)
    const yearA = parseInt(a.period.split(' - ')[0] || a.period)
    const yearB = parseInt(b.period.split(' - ')[0] || b.period)
    return yearB - yearA
  })

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current

    if (!section || !timeline) return

    // Animate timeline line
    gsap.fromTo('.timeline-line',
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    )

    // Animate timeline items
    gsap.fromTo('.timeline-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timeline,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-amber-950/20 to-slate-950/80" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 font-display">Experience</h2>
          <p className="text-xl text-white/60">My journey so far</p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                className="timeline-item relative flex items-start gap-8"
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="text-white" size={24} />
                </div>

                {/* Content Card */}
                <motion.div
                  className="glass-card p-6 flex-1"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-neon-blue font-semibold">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Grade/Achievements */}
                  {'grade' in item && (
                    <div className="inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold">
                      {item.grade}
                    </div>
                  )}

                  {'achievements' in item && item.achievements && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-neon-blue mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue mb-2">1+</div>
            <div className="text-white/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple mb-2">3+</div>
            <div className="text-white/60">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink mb-2">4</div>
            <div className="text-white/60">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">78%</div>
            <div className="text-white/60">Current CGPA</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
