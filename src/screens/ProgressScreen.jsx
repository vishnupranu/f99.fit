import { ArrowLeft, TrendingDown, Dumbbell, Activity, Flame, Clock, Target } from 'lucide-react'
import { profile, weightHistory, measurements, goalProgress, activityHistory } from '../data/mock'

const typeColor = {
  Strength: '#C6F432',
  Cardio: '#FF5A6E',
  Recovery: '#2BD9E0',
}

// Simple inline SVG line chart for weight history
function WeightChart() {
  const w = 300, h = 110, pad = 10
  const vals = weightHistory.map((d) => d.weight)
  const min = Math.min(...vals) - 1
  const max = Math.max(...vals) + 1
  const stepX = (w - pad * 2) / (weightHistory.length - 1)
  const pts = weightHistory.map((d, i) => {
    const x = pad + i * stepX
    const y = pad + (1 - (d.weight - min) / (max - min)) * (h - pad * 2)
    return [x, y]
  })
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')
  const area = `${line} L${pts[pts.length - 1][0]},${h - pad} L${pts[0][0]},${h - pad} Z`
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#wg)" />
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="var(--accent)" />
      ))}
    </svg>
  )
}

export default function ProgressScreen({ onBack }) {
  const lost = (profile.startWeight - profile.currentWeight).toFixed(1)
  const toGo = (profile.currentWeight - profile.goalWeight).toFixed(1)

  return (
    <div className="screen fade-in">
      <div className="topbar">
        <button className="icon-btn" onClick={onBack}><ArrowLeft size={19} /></button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 16 }}>My Progress</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Fitness journey & goals</div>
        </div>
        <div style={{ width: 42 }} />
      </div>

      {/* Weight goal card with chart */}
      <div className="hero">
        <div className="hero-top">
          <div>
            <div className="hero-label">Weight Goal</div>
            <div className="hero-title">{profile.currentWeight} kg → {profile.goalWeight} kg</div>
            <div className="hero-sub">Target by {profile.goalDeadline} · {toGo} kg to go</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>{lost}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>kg lost</div>
          </div>
        </div>
        <div style={{ marginTop: 16, position: 'relative', zIndex: 1 }}>
          <WeightChart />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--text-dim)' }}>
            {weightHistory.map((d, i) => (
              <span key={i}>{i % 2 === 0 ? d.date : ''}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Body metrics */}
      <div className="sec-head"><h3>Body Metrics</h3></div>
      <div className="grid-2">
        <div className="stat-tile card" style={{ background: 'rgba(198,244,50,0.10)' }}>
          <div className="ic" style={{ background: 'transparent', color: '#C6F432' }}><Activity size={18} /></div>
          <div className="v">{profile.bmi}</div>
          <div className="l">BMI</div>
        </div>
        <div className="stat-tile card" style={{ background: 'rgba(255,90,110,0.10)' }}>
          <div className="ic" style={{ background: 'transparent', color: '#FF5A6E' }}><Flame size={18} /></div>
          <div className="v">{profile.bodyFat}%</div>
          <div className="l">Body fat</div>
        </div>
        <div className="stat-tile card" style={{ background: 'rgba(124,92,252,0.12)' }}>
          <div className="ic" style={{ background: 'transparent', color: '#7C5CFC' }}><Dumbbell size={18} /></div>
          <div className="v">{profile.muscleMass}</div>
          <div className="l">Muscle (kg)</div>
        </div>
        <div className="stat-tile card" style={{ background: 'rgba(43,217,224,0.10)' }}>
          <div className="ic" style={{ background: 'transparent', color: '#2BD9E0' }}><TrendingDown size={18} /></div>
          <div className="v">{profile.currentWeight}</div>
          <div className="l">Weight (kg)</div>
        </div>
      </div>

      {/* Measurements */}
      <div className="sec-head"><h3>Measurements (cm)</h3></div>
      <div className="grid-2">
        {measurements.map((m, i) => (
          <div className="card" key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{m.part}</span>
            <span style={{ fontSize: 18, fontWeight: 700 }}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Goal progress */}
      <div className="sec-head"><h3>Goal Progress</h3></div>
      <div className="card">
        {goalProgress.map((g, i) => {
          const start = g.start ?? 0
          const pct = Math.min(100, Math.round(((g.current - start) / (g.target - start)) * 100))
          return (
            <div key={i} style={{ padding: i ? '14px 0 0' : '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{g.label}</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{g.current}{g.unit} / {g.target}{g.unit}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-3)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${Math.max(4, pct)}%`, background: 'var(--accent)', borderRadius: 4 }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Activity history */}
      <div className="sec-head"><h3>Activity History</h3></div>
      <div className="card" style={{ padding: '4px 16px' }}>
        {activityHistory.map((a, i) => (
          <div className="row" key={i}>
            <div className="av" style={{ background: `${typeColor[a.type]}22`, display: 'grid', placeItems: 'center', color: typeColor[a.type] }}>
              <Dumbbell size={20} />
            </div>
            <div className="meta">
              <div className="t">{a.title}</div>
              <div className="s">{a.date} · {a.type}</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}><Clock size={12} /> {a.dur}</div>
              <div style={{ marginTop: 3 }}>{a.kcal} kcal</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
