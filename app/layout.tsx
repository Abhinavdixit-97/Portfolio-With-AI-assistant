import './globals.css'
import { Manrope, Syne } from 'next/font/google'
import KeyboardShortcuts from '@/components/ui/KeyboardShortcuts'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata = {
  title: 'Abhinav Dikshit - Full Stack Developer',
  description: 'Motivated Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body className="font-sans text-sand antialiased">
        <KeyboardShortcuts />
        {children}
      </body>
    </html>
  )
}
