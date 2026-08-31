import { Bell, Search } from 'lucide-react'
import { user } from '../data/mock'

export default function TopBar() {
  return (
    <div className="topbar">
      <div>
        <div className="greet">{user.greet} 👋</div>
        <div className="name">{user.name}</div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn"><Search size={19} /></button>
        <button className="icon-btn"><Bell size={19} /><span className="dot" /></button>
      </div>
    </div>
  )
}
