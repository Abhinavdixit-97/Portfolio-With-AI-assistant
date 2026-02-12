'use client'

import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

type ChatRole = 'user' | 'assistant'
type ChatMessage = {
  role: ChatRole
  content: string
}

const starters = [
  'What tech stack do you use?',
  'Tell me about your projects.',
  'How can I contact you?',
  'Are you open to internships?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I am Abhinav's portfolio assistant. Ask me anything about his skills, projects, or experience.",
    },
  ])

  const canSend = input.trim().length > 0 && !loading

  const sendMessage = async (content: string) => {
    const trimmed = content.trim()
    if (!trimmed) return

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: trimmed },
    ]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data?.reply || 'Sorry, I could not reply.' },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="w-[92vw] max-w-sm h-[520px] glass-card p-4 flex flex-col mb-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <p className="text-sm text-white/60 uppercase tracking-[0.2em]">Chat</p>
              <h3 className="text-lg font-semibold">Ask Abhinav</h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg glass hover:translate-y-[-1px] transition"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'ml-auto bg-gradient-to-r from-neon-blue to-neon-purple text-ink'
                    : 'mr-auto bg-white/5 text-white/80'
                }`}
              >
                {msg.content}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2">
                {starters.map((item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    className="w-full text-left px-3 py-2 rounded-xl glass text-white/70 hover:text-white transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="pt-3 border-t border-white/10 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              if (canSend) sendMessage(input)
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue"
            />
            <button
              type="submit"
              disabled={!canSend}
              className={`p-3 rounded-xl transition ${
                canSend ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-ink' : 'bg-white/10 text-white/40'
              }`}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-ink flex items-center justify-center shadow-lg shadow-neon-blue/30 hover:scale-105 transition"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  )
}
