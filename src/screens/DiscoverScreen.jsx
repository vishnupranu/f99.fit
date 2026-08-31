import { Search, MapPin, Star, ChevronRight, Calendar, Users } from 'lucide-react'
import { discoverChips, classes, trainers, workouts } from '../data/mock'
import { useState } from 'react'

export default function DiscoverScreen() {
  const [chip, setChip] = useState(0)
  return (
    <div className="screen fade-in">
      <div className="topbar">
        <div><div className="greet">Discover</div><div className="name">Marketplace</div></div>
      </div>

      <div className="search">
        <Search size={18} color="var(--text-dim)" />
        <input placeholder="Search gyms, trainers, classes..." />
        <MapPin size={18} color="var(--accent)" />
      </div>

      <div className="chips" style={{ marginTop: 16 }}>
        {discoverChips.map((c, i) => (
          <button key={c} className={`chip ${i === chip ? 'active' : ''}`} onClick={() => setChip(i)}>{c}</button>
        ))}
      </div>

      {/* Featured */}
      <div className="sec-head"><h3>Featured Near You</h3></div>
      <div className="scroller">
        {classes.map((c) => (
          <div className="class-card" key={c.id}>
            <div className="ph" style={{ background: c.grad, height: 170 }}>
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

      {/* Trainers */}
      <div className="sec-head"><h3>Top Trainers</h3><span className="link">See all <ChevronRight size={14} /></span></div>
      <div className="scroller">
        {trainers.map((t) => (
          <div className="trainer-card" key={t.id}>
            <img className="av" src={t.av} alt={t.name} />
            <div className="n">{t.name}</div>
            <div className="sp">{t.spec}</div>
            <div className="meta">
              <span><Star size={13} className="star" fill="var(--amber)" /> {t.rating}</span>
              <span>{t.reviews} reviews</span>
            </div>
            <button className="btn btn-sm" style={{ marginTop: 14 }}>Book Session</button>
          </div>
        ))}
      </div>

      {/* Programs marketplace */}
      <div className="sec-head"><h3>Programs</h3><span className="link">See all <ChevronRight size={14} /></span></div>
      <div className="scroller">
        {workouts.map((w) => (
          <div className="workout-card" key={w.id} style={{ width: 220 }}>
            <div className="cover" style={{ background: w.grad, height: 110 }}>
              <div className="ov" />
              <span className="badge">{w.tag}</span>
            </div>
            <div className="body">
              <div className="t">{w.title}</div>
              <div className="m">{w.lvl} · {w.dur}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="sec-head"><h3>Upcoming Events</h3></div>
      <div className="card" style={{ padding: '4px 16px' }}>
        {[
          { t: 'Hyderabad Marathon 2026', s: 'Oct 5 · 4,200 registered', icon: 'run' },
          { t: 'Powerlifting Meet', s: 'Sep 20 · Ryze Arena · 120 spots', icon: 'comp' },
          { t: 'Yoga & Breathwork Retreat', s: 'Sep 28 · 2 day · 60 spots', icon: 'yoga' },
        ].map((e, i) => (
          <div className="row" key={i}>
            <div className="av" style={{ background: 'linear-gradient(135deg,#3a2b6b,#7C5CFC)', display: 'grid', placeItems: 'center', color: '#fff' }}>
              <Users size={20} />
            </div>
            <div className="meta">
              <div className="t">{e.t}</div>
              <div className="s">{e.s}</div>
            </div>
            <button className="btn btn-sm">Join</button>
          </div>
        ))}
      </div>
    </div>
  )
}
