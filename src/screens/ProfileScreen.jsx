import { ChevronRight, Crown, Settings, Heart, CreditCard, Target, Shield, Bell, HelpCircle, LogOut, Award, Footprints, Zap } from 'lucide-react'
import { user, stats } from '../data/mock'

export default function ProfileScreen() {
  const menu = [
    { t: 'My Membership', sub: 'Ryze Elite · Renews Jan 2027', icon: Crown, color: '#FFB23E' },
    { t: 'Payment Methods', sub: '1 card · UPI linked', icon: CreditCard, color: '#C6F432' },
    { t: 'Fitness Goals', sub: 'Build muscle · Lose fat', icon: Target, color: '#FF5A6E' },
    { t: 'Privacy & Data', sub: 'Manage consent & export', icon: Shield, color: '#2BD9E0' },
    { t: 'Notifications', sub: 'Push, email & WhatsApp', icon: Bell, color: '#7C5CFC' },
    { t: 'Help & Support', sub: 'FAQs · Contact us', icon: HelpCircle, color: '#9A9CA8' },
    { t: 'Settings', sub: 'Account & preferences', icon: Settings, color: '#9A9CA8' },
  ]
  return (
    <div className="screen fade-in">
      <div className="topbar">
        <div><div className="greet">Profile</div><div className="name">Account</div></div>
        <button className="icon-btn"><Settings size={19} /></button>
      </div>

      <div className="profile-head">
        <img className="av" src={user.avatar} alt="avatar" />
        <div className="n">{user.name}</div>
        <div className="tag"><Award size={13} /> {user.level} · {user.xp.toLocaleString()} XP</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>Member since {user.memberSince}</div>
      </div>

      {/* XP progress */}
      <div className="card" style={{ marginTop: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Level {user.level} → Level 13</span>
          <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{user.xp} / {user.xpMax} XP</span>
        </div>
        <div style={{ height: 10, borderRadius: 5, background: 'var(--surface-3)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(user.xp/user.xpMax)*100}%`, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))', borderRadius: 5 }} />
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 8 }}>{user.xpMax - user.xp} XP to next level</div>
      </div>

      {/* Stat strip */}
      <div className="grid-2" style={{ marginTop: 12 }}>
        {stats.slice(0, 4).map((s, i) => (
          <div className="stat-tile card" key={i} style={{ background: s.bg }}>
            <div className="ic" style={{ background: s.bg, color: s.color }}>
              {s.icon === 'flame' ? <Zap size={18} /> : s.icon === 'trophy' ? <Award size={18} /> : s.icon === 'dumbbell' ? <Footprints size={18} /> : <Heart size={18} />}
            </div>
            <div className="v">{s.v}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Membership plan */}
      <div className="sec-head"><h3>Membership</h3></div>
      <div className="plan-strip">
        <div className="ic"><Crown size={22} /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15 }}>{user.plan}</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Unlimited classes · PT credits · AI Coach</div>
        </div>
        <ChevronRight size={18} color="var(--text-dim)" />
      </div>

      {/* Menu */}
      <div className="sec-head"><h3>Account</h3></div>
      <div className="card" style={{ padding: '4px 16px' }}>
        {menu.map((m, i) => {
          const Icon = m.icon
          return (
            <div className="menu-item" key={i} style={{ borderBottom: i < menu.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="ic" style={{ color: m.color, background: 'var(--surface-2)' }}><Icon size={19} /></div>
              <div className="t">{m.t}<div className="sub">{m.sub}</div></div>
              <ChevronRight size={18} color="var(--text-dim)" />
            </div>
          )
        })}
      </div>

      <button className="btn btn-ghost" style={{ marginTop: 16, color: 'var(--rose)' }}>
        <LogOut size={18} /> Sign Out
      </button>
      <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-dim)', margin: '18px 0 4px' }}>Ryze.fit · v1.0.0 · Fitness OS</div>
    </div>
  )
}
