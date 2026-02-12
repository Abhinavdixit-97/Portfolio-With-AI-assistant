import { NextResponse } from 'next/server'

type ChatRole = 'user' | 'assistant'
type ChatMessage = {
  role: ChatRole
  content: string
}

const SYSTEM_PROMPT = `
You are Abhinav Dikshit's portfolio assistant. Keep responses concise, friendly, and professional.
Answer only from the portfolio details below. If something is unknown, say so and offer to connect.

Portfolio details:
- Name: Abhinav Dikshit
- Role: Full Stack Developer
- Location: Gokulpur, Delhi, India
- Email: abhinavdixit093@gmail.com
- Phone: +91 9758326337
- GitHub: https://github.com/Abhinavdixit-97
- LinkedIn: https://linkedin.com/in/abhinav-dikshit-91aa5327b

Skills:
- Frontend: React.js, JavaScript, HTML5, CSS3
- Backend: Node.js, Express.js, REST APIs
- Databases: MySQL, MongoDB
- Tools: Git, GitHub, VS Code, IntelliJ IDEA

Projects:
1) Job Portal Web Application
   - Secure auth, recruiter/candidate dashboards, job management, application tracking
   - Tech: React.js, Node.js, MySQL, JWT, Express.js
2) TaskMate - Task Manager
   - Task creation, updates, tracking, real-time updates
   - Tech: Node.js, Express.js, MongoDB, React.js, Socket.io
3) Portfolio Website
   - Responsive, smooth animations, interactive UI
   - Tech: HTML5, CSS3, JavaScript, GSAP

Experience:
- Full Stack Intern at Soft Nexis (June 2025 - Aug 2025)
  - Built REST APIs, reusable React components, responsive UI

Education:
- B.Tech Computer Science, AKTU (2023 - 2026)
- Diploma Electrical Engineering, BTEUP (2019 - 2022)
- High School, UP Board (2019)

Certifications:
- Cloud Computing (IIT Madras - NPTEL)
- Joy of Computing using Python (IIT Madras - NPTEL)
- Design and Analysis of Algorithms (IIT Madras - NPTEL)
- DSA with Java (Apna College)
`

const toGeminiContents = (messages: ChatMessage[]) =>
  messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages = Array.isArray(body?.messages) ? body.messages : []

    const sanitized: ChatMessage[] = messages
      .filter((m: ChatMessage) => m && (m.role === 'user' || m.role === 'assistant'))
      .map((m: ChatMessage) => ({
        role: m.role,
        content: String(m.content || '').slice(0, 2000),
      }))

    const apiKey = process.env.GEMINI_API_KEY
    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash'

    if (!apiKey) {
      return NextResponse.json(
        { reply: 'AI is not configured yet. Please set GEMINI_API_KEY.' },
        { status: 200 }
      )
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT.trim() }],
        },
        contents: toGeminiContents(sanitized),
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 400,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { reply: `AI request failed. ${errorText.slice(0, 200)}` },
        { status: 200 }
      )
    }

    const data = await response.json()
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).join('') ||
      'Sorry, I could not generate a response.'

    return NextResponse.json({ reply: String(reply).trim() })
  } catch (error) {
    return NextResponse.json(
      { reply: 'Something went wrong while generating a response.' },
      { status: 200 }
    )
  }
}
