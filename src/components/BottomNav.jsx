import { Home, Dumbbell, Sparkles, Compass, User } from 'lucide-react'

export default function BottomNav({ active, onChange }) {
  const items = [
    { key: 'home', icon: Home, label: 'Home' },
    { key: 'train', icon: Dumbbell, label: 'Train' },
    { key: 'coach', fab: true, icon: Sparkles, label: 'Coach' },
    { key: 'discover', icon: Compass, label: 'Discover' },
    { key: 'profile', icon: User, label: 'Profile' },
  ]
  return (
    <nav className="bottom-nav">
      {items.map((it) => {
        const Icon = it.icon
        if (it.fab) {
          return (
            <button key={it.key} className="nav-item" onClick={() => onChange(it.key)}>
              <div className="nav-fab"><Icon size={24} strokeWidth={2.4} /></div>
              <span className="lbl">{it.label}</span>
            </button>
          )
        }
        return (
          <button key={it.key} className={`nav-item ${active === it.key ? 'active' : ''}`} onClick={() => onChange(it.key)}>
            <Icon size={22} strokeWidth={2.2} />
            <span className="lbl">{it.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
