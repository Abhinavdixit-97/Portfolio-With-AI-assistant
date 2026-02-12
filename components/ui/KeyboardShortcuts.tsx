'use client'

import { useEffect } from 'react'
import { downloadResume } from '@/lib/utils/downloadResume'

export default function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key && e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement
        if (activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA') {
          return
        }

        e.preventDefault()
        downloadResume()
        showNotification('Resume downloaded')
      }
    }

    const showNotification = (message: string) => {
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-neon-blue text-black px-4 py-2 rounded-lg z-[10000] font-medium'
      notification.textContent = message
      document.body.appendChild(notification)

      setTimeout(() => {
        notification.remove()
      }, 3000)
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return null
}
