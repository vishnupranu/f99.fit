import { useState } from 'react'
import { Sparkles, Send, ArrowLeft } from 'lucide-react'
import { coachChat, coachSuggestions } from '../data/mock'

export default function CoachScreen({ onBack }) {
  const [messages, setMessages] = useState(coachChat)
  const [input, setInput] = useState('')

  const send = (text) => {
    if (!text.trim()) return
    setMessages([...messages, { from: 'me', text }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'ai', text: "Got it. I'll factor that into your plan — adjusting intensity and recovery windows accordingly. You can check the updated workout under Train. 💪" }])
    }, 700)
  }

  return (
    <div className="screen fade-in" style={{ paddingBottom: 80 }}>
      <div className="topbar">
        <button className="icon-btn" onClick={onBack}><ArrowLeft size={19} /></button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 16 }}>AI Coach</div>
          <div style={{ fontSize: 12, color: 'var(--accent)' }}>● Online · Powered by Ryze AI</div>
        </div>
        <button className="icon-btn"><Sparkles size={19} color="var(--violet)" /></button>
      </div>

      <div className="coach-hero" style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div className="av"><Sparkles size={26} /></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Your AI Fitness Coach</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>Knows your goals, workouts, nutrition & recovery</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
            <div className={`chat-bubble ${m.from}`}>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="sec-head" style={{ marginTop: 22 }}><h3>Try asking</h3></div>
      <div className="chips" style={{ margin: 0, padding: 0, flexWrap: 'wrap' }}>
        {coachSuggestions.map((s, i) => (
          <button key={i} className="chip" style={{ color: 'var(--violet)', borderColor: 'rgba(124,92,252,0.3)' }} onClick={() => send(s)}>{s}</button>
        ))}
      </div>

      <div className="chat-input">
        <input placeholder="Ask your AI coach..." value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send(input)} />
        <button className="chat-send" onClick={() => send(input)}><Send size={18} /></button>
      </div>
    </div>
  )
}
