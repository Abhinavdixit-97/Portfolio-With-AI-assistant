'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, X, Play } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Job Portal Web Application',
      description: 'A comprehensive job portal with secure authentication, recruiter and candidate dashboards, job management, and application tracking.',
      longDescription: 'Developed a professional job portal featuring secure user authentication, separate dashboards for recruiters and candidates, comprehensive job management system, and real-time application tracking. Implemented robust backend APIs with JWT authentication and designed efficient database schemas for optimal performance.',
      tech: ['React.js', 'Node.js', 'MySQL', 'JWT', 'Express.js'],
      image: '/projects/job-portal.jpg',
      video: '/projects/job-portal-demo.mp4',
      github: 'https://github.com/Abhinavdixit-97/job-portal',
      live: 'https://job-portal-demo.vercel.app',
      features: [
        'Secure JWT Authentication',
        'Role-based Dashboards',
        'Real-time Job Posting',
        'Application Tracking System',
        'Advanced Search & Filters',
        'Responsive Design'
      ]
    },
    {
      id: 2,
      title: 'TaskMate - Task Manager',
      description: 'A full-stack task management system enabling task creation, updates, and tracking with reliable backend support.',
      longDescription: 'Created a comprehensive task management application with intuitive user interface for task creation, editing, and tracking. Features include priority levels, due dates, categories, and progress tracking with real-time updates and notifications.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Socket.io'],
      image: '/projects/taskmate.jpg',
      video: '/projects/taskmate-demo.mp4',
      github: 'https://github.com/Abhinavdixit-97/taskmate',
      live: 'https://taskmate-demo.vercel.app',
      features: [
        'Task CRUD Operations',
        'Priority & Category System',
        'Due Date Reminders',
        'Progress Tracking',
        'Real-time Updates',
        'Mobile Responsive'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing technical projects, skills, and certifications with a clean responsive UI.',
      longDescription: 'Built a modern, responsive portfolio website to showcase technical projects, skills, and professional experience. Features smooth animations, interactive elements, and optimized performance for excellent user experience across all devices.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      image: '/projects/portfolio.jpg',
      video: '/projects/portfolio-demo.mp4',
      github: 'https://github.com/Abhinavdixit-97/portfolio',
      live: 'https://abhinavdikshit.dev',
      features: [
        'Responsive Design',
        'Smooth Animations',
        'Interactive Elements',
        'SEO Optimized',
        'Fast Loading',
        'Cross-browser Compatible'
      ]
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Horizontal scroll animation
    const projectCards = gsap.utils.toArray('.project-card')
    
    gsap.fromTo(projectCards,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/20 to-slate-950" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 font-display">Projects</h2>
          <p className="text-xl text-white/60">Things I've built</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-card p-6 group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-neon-blue opacity-60 group-hover:opacity-100 transition-opacity" size={48} />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/70 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-neon-blue"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/60">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/70 hover:text-neon-blue transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/70 hover:text-neon-blue transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-neon-blue">Overview</h4>
                        <p className="text-white/80 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <h4 className="text-xl font-semibold mb-4 text-neon-blue">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 glass neon-glow rounded-lg"
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-black font-semibold"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-neon-blue">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-neon-blue rounded-full" />
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
