import { Play, Clock, Flame, Dumbbell, ChevronRight, Lock } from 'lucide-react'

const categories = ['All', 'Strength', 'Cardio', 'Recovery', 'Mobility', 'HIIT']

const programs = [
  { title: 'Push / Pull / Legs', weeks: 12, lvl: 'Intermediate', grad: 'linear-gradient(135deg,#3a2b6b,#7C5CFC)', sessions: 36 },
  { title: 'Lean Out — 8 Week Cut', weeks: 8, lvl: 'Intermediate', grad: 'linear-gradient(135deg,#6b2b3a,#FF5A6E)', sessions: 24 },
  { title: 'Mobility Reset', weeks: 4, lvl: 'Beginner', grad: 'linear-gradient(135deg,#1f5b5e,#2BD9E0)', sessions: 16 },
]

const exercises = [
  { name: 'Barbell Bench Press', sets: '4 × 8', muscle: 'Chest', weight: '60 kg' },
  { name: 'Incline Dumbbell Press', sets: '3 × 10', muscle: 'Upper chest', weight: '20 kg' },
  { name: 'Cable Fly', sets: '3 × 12', muscle: 'Chest', weight: '15 kg' },
  { name: 'Tricep Pushdown', sets: '3 × 15', muscle: 'Triceps', weight: '25 kg' },
]

export default function TrainScreen() {
  return (
    <div className="screen fade-in">
      <div className="topbar">
        <div><div className="greet">Train</div><div className="name">Workouts & Programs</div></div>
      </div>

      <div className="chips">
        {categories.map((c, i) => <button key={c} className={`chip ${i === 0 ? 'active' : ''}`}>{c}</button>)}
      </div>

      {/* Today's session */}
      <div className="sec-head"><h3>Today's Session</h3></div>
      <div className="hero" style={{ background: 'linear-gradient(135deg,#3a2b6b,#7C5CFC)' }}>
        <div className="hero-top">
          <div>
            <div className="hero-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Push Day · Upper Body</div>
            <div className="hero-title" style={{ maxWidth: 'none' }}>Strength · 52 min</div>
            <div className="hero-sub" style={{ color: 'rgba(255,255,255,0.65)' }}>4 exercises · ~480 kcal · assigned by AI Coach</div>
          </div>
          <div className="play" style={{ width: 52, height: 52, background: '#fff' }}>
            <Play size={22} fill="#0A0B0F" />
          </div>
        </div>
        <button className="btn" style={{ marginTop: 18, background: '#fff' }}>
          <Play size={18} fill="#0A0B0F" /> Start Workout
        </button>
      </div>

      {/* Exercise list */}
      <div className="sec-head"><h3>Exercises</h3></div>
      <div className="card" style={{ padding: '4px 16px' }}>
        {exercises.map((e, i) => (
          <div className="row" key={i}>
            <div className="av" style={{ background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--accent)' }}>
              <Dumbbell size={20} />
            </div>
            <div className="meta">
              <div className="t">{e.name}</div>
              <div className="s">{e.sets} · {e.muscle} · {e.weight}</div>
            </div>
            <ChevronRight size={18} color="var(--text-dim)" />
          </div>
        ))}
      </div>

      {/* Programs */}
      <div className="sec-head"><h3>Your Programs</h3><span className="link">Browse <ChevronRight size={14} /></span></div>
      <div className="scroller">
        {programs.map((p, i) => (
          <div className="workout-card" key={i} style={{ width: 240 }}>
            <div className="cover" style={{ height: 110, background: p.grad }}>
              <div className="ov" />
              <span className="badge">{p.weeks} weeks</span>
            </div>
            <div className="body">
              <div className="t">{p.title}</div>
              <div className="m"><Clock size={13} /> {p.sessions} sessions · {p.lvl}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Exercise library teaser */}
      <div className="sec-head"><h3>Exercise Library</h3><span className="link">Explore <ChevronRight size={14} /></span></div>
      <div className="grid-2">
        {['Bench Press', 'Squat', 'Deadlift', 'Pull Up', 'Overhead Press', 'Romanian DL'].slice(0, 4).map((ex, i) => (
          <div className="card" key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface-2)', display: 'grid', placeItems: 'center', color: 'var(--accent)' }}>
              <Dumbbell size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{ex}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>3 sets</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
