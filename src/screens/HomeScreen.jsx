import { Play, Clock, Flame, ChevronRight, Zap, Footprints, Droplet, Target, Sparkles, Send, Trophy } from 'lucide-react'
import TopBar from '../components/TopBar'
import { user, homeRing, workouts, classes, stats, challenges, feed } from '../data/mock'

const iconMap = { sparkles: Sparkles, send: Send, target: Target, trophy: Trophy, flame: Zap }

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="screen fade-in">
      <TopBar />

      {/* Hero activity ring */}
      <div className="hero">
        <div className="hero-top">
          <div>
            <div className="hero-label">Today's Activity</div>
            <div className="hero-title">You're 72% to your goal</div>
            <div className="hero-sub">Keep going — 28 min of activity to hit it 🔥</div>
          </div>
        </div>
        <div className="ring-wrap">
          <div className="ring">
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <circle cx="48" cy="48" r="42" fill="none" stroke="var(--accent)" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={`${2*Math.PI*42*0.72} ${2*Math.PI*42}`} />
            </svg>
            <div className="pct">{homeRing.pct}%</div>
          </div>
          <div className="ring-stats">
            {homeRing.stats.map((s, i) => (
              <div className="ring-stat" key={i}>
                <span className="v">{s.v}</span><span className="l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="sec-head"><h3>Your Stats</h3></div>
      <div className="grid-2">
        {stats.map((s, i) => (
          <div className="stat-tile card" key={i} style={{ background: s.bg }}>
            <div className="ic" style={{ background: s.bg, color: s.color }}>
              {s.icon === 'flame' ? <Flame size={18} /> : s.icon === 'trophy' ? <Trophy size={18} /> : s.icon === 'dumbbell' ? <Play size={18} /> : <Zap size={18} />}
            </div>
            <div className="v">{s.v}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* AI Coach prompt */}
      <div className="sec-head"><h3>AI Coach</h3><span className="link">Open <ChevronRight size={14} /></span></div>
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(124,92,252,0.16), transparent)', borderColor: 'rgba(124,92,252,0.3)' }}
           onClick={() => onNavigate('coach')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg,#7C5CFC,#a78bfa)', display: 'grid', placeItems: 'center', color: '#fff' }}>
            <Sparkles size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Your plan is ready</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Lighter session today based on recovery data</div>
          </div>
          <ChevronRight size={18} color="var(--text-dim)" />
        </div>
      </div>

      {/* Today goals */}
      <div className="sec-head"><h3>Today's Goals</h3></div>
      <div className="card">
        {[
          { l: 'Workout 45 min', v: 'Completed', done: true, icon: <Flame size={16} color="#FF5A6E" /> },
          { l: '10,000 steps', v: '7,840 / 10,000', done: false, icon: <Footprints size={16} color="#C6F432" />, p: 78 },
          { l: '2,400 kcal burn', v: '62%', done: false, icon: <Zap size={16} color="#2BD9E0" />, p: 62 },
          { l: '3 L water', v: '1.5 / 3 L', done: false, icon: <Droplet size={16} color="#7C5CFC" />, p: 50 },
        ].map((g, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: i ? '13px 0 0' : '0' }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--surface-2)', display: 'grid', placeItems: 'center' }}>{g.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{g.l}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{g.v}</div>
            </div>
            {g.done
              ? <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent)', display: 'grid', placeItems: 'center', color: '#0A0B0F' }}><span style={{ fontSize: 14 }}>✓</span></div>
              : <div style={{ width: 56, height: 6, borderRadius: 3, background: 'var(--surface-3)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${g.p}%`, background: 'var(--accent)' }} />
                </div>}
          </div>
        ))}
      </div>

      {/* Workouts */}
      <div className="sec-head"><h3>Recommended Workouts</h3><span className="link">See all <ChevronRight size={14} /></span></div>
      <div className="scroller">
        {workouts.map((w) => (
          <div className="workout-card" key={w.id} onClick={() => onNavigate('train')}>
            <div className="cover" style={{ background: w.grad }}>
              <div className="ov" />
              <span className="badge">{w.tag}</span>
              <div className="play"><Play size={18} fill="#0A0B0F" /></div>
            </div>
            <div className="body">
              <div className="t">{w.title}</div>
              <div className="m"><Clock size={13} /> {w.dur} · <Flame size={13} /> {w.kcal} kcal · {w.lvl}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Classes */}
      <div className="sec-head"><h3>Book a Class</h3><span className="link">See all <ChevronRight size={14} /></span></div>
      <div className="scroller">
        {classes.map((c) => (
          <div className="class-card" key={c.id} onClick={() => onNavigate('discover')}>
            <div className="ph" style={{ background: c.grad }}>
              <div className="ov" />
              {c.live && <span className="badge" style={{ background: 'var(--rose)', position: 'absolute', top: 10, left: 10 }}>{c.live}</span>}
              <div className="info">
                <div className="t">{c.title}</div>
                <div className="m">{c.studio}</div>
                <span className="pill">{c.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Challenges */}
      <div className="sec-head"><h3>Active Challenges</h3><span className="link">See all <ChevronRight size={14} /></span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {challenges.map((c, i) => (
          <div className="card" key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>{c.desc}</div>
              </div>
              <Trophy size={22} color={c.color} />
            </div>
            <div style={{ marginTop: 12, height: 8, borderRadius: 4, background: 'var(--surface-3)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${c.progress}%`, background: c.color, borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="sec-head"><h3>Recent Activity</h3></div>
      <div className="card" style={{ padding: '4px 16px' }}>
        {feed.map((f, i) => {
          const Ico = iconMap[f.icon] || Sparkles
          return (
            <div className="row" key={i}>
              <div className="av" style={{ background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--violet)' }}>
                <Ico size={20} />
              </div>
              <div className="meta">
                <div className="t">{f.t}</div>
                <div className="s">{f.s}</div>
              </div>
              <span className="tag-mini">{f.time}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
