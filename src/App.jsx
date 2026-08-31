import { useState } from 'react'
import BottomNav from './components/BottomNav'
import HomeScreen from './screens/HomeScreen'
import TrainScreen from './screens/TrainScreen'
import CoachScreen from './screens/CoachScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import ProfileScreen from './screens/ProfileScreen'

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="app-frame">
      <div className="phone">
        {tab === 'home' && <HomeScreen onNavigate={setTab} />}
        {tab === 'train' && <TrainScreen />}
        {tab === 'coach' && <CoachScreen onBack={() => setTab('home')} />}
        {tab === 'discover' && <DiscoverScreen />}
        {tab === 'profile' && <ProfileScreen />}
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  )
}
