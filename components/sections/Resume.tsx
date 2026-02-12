'use client'

import { useState } from 'react'
import { Download, Eye, FileText, Star, Award, Briefcase } from 'lucide-react'
import { downloadResume } from '@/lib/utils/downloadResume'

export default function Resume() {
  const [downloadCount, setDownloadCount] = useState(0)

  const handleDownload = () => {
    downloadResume()
    setDownloadCount(prev => prev + 1)
  }

  const viewOnline = () => {
    window.open('/resume/Abhinav_Dikshit_Resume.pdf', '_blank')
  }

  const resumeHighlights = [
    { icon: Briefcase, label: 'Full Stack Developer', value: 'Soft Nexis Intern' },
    { icon: Award, label: 'Certifications', value: '4 from IIT Madras' },
    { icon: Star, label: 'Projects', value: 'Job Portal, TaskMate' },
    { icon: FileText, label: 'Education', value: 'B.Tech CS (78%)' },
  ]

  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-teal-950/20 to-slate-950/80" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 font-display">Resume</h2>
          <p className="text-xl text-white/60">Download Abhinav Dikshit's professional resume</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8">
            <div className="aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden mb-6">
              <object
                data="/resume/Abhinav_Dikshit_Resume.pdf#view=FitH&toolbar=0&navpanes=0"
                type="application/pdf"
                className="w-full h-full"
                aria-label="Abhinav Dikshit resume preview"
              >
                <iframe
                  src="/resume/Abhinav_Dikshit_Resume.pdf#view=FitH&toolbar=0&navpanes=0"
                  className="w-full h-full"
                  title="Abhinav Dikshit resume preview"
                />
              </object>
            </div>

            <p className="text-center text-white/60 text-sm">
              Resume preview (PDF)
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {resumeHighlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 text-center hover:translate-y-[-2px] transition-all duration-300"
                >
                  <item.icon className="text-neon-blue mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-white/60">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">What is Inside</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full" />
                  Complete professional summary
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full" />
                  Detailed work experience and projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full" />
                  Technical skills and certifications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full" />
                  Education and achievements
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-ink transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-neon-blue/20 ripple"
              >
                <Download size={20} />
                Download My Resume
              </button>

              <button
                onClick={viewOnline}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 glass rounded-xl font-semibold text-white/90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Eye size={20} />
                View Online
              </button>
            </div>

            {downloadCount > 0 && (
              <div className="text-center p-4 glass rounded-lg">
                <p className="text-neon-green font-semibold">
                  Downloaded {downloadCount} time{downloadCount !== 1 ? 's' : ''} this session
                </p>
              </div>
            )}

            <div className="text-center text-white/50 text-sm">
              Pro tip: Press <kbd className="px-2 py-1 glass rounded text-neon-blue">R</kbd> anywhere to download
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
