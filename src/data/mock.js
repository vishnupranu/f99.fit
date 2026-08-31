// Mock data backing the Ryze.fit consumer app
import { Dumbbell, Flame, Footprints, Heart, Moon, Apple, Trophy, Activity } from 'lucide-react'

export const user = {
  name: 'Arjun',
  greet: 'Good morning',
  level: 'Level 12',
  xp: 4280,
  xpMax: 5000,
  streak: 14,
  plan: 'Ryze Elite',
  memberSince: 'Jan 2026',
  avatar: 'https://i.pravatar.cc/200?img=12',
}

export const todayGoals = [
  { label: 'Workout', done: true, icon: 'flame', target: '45 min' },
  { label: 'Calories', done: false, icon: 'fire', target: '2,400 kcal', progress: 0.62 },
  { label: 'Steps', done: false, icon: 'steps', target: '10,000', progress: 0.78 },
  { label: 'Water', done: false, icon: 'water', target: '3 L', progress: 0.5 },
]

export const homeRing = { pct: 72, label: 'Daily Goal', stats: [
  { v: '412', l: 'kcal burned' },
  { v: '7,840', l: 'steps' },
  { v: '48', l: 'active min' },
]}

export const workouts = [
  { id: 1, title: 'Push Day — Strength', tag: 'Strength', dur: '52 min', lvl: 'Intermediate', kcal: 480, grad: 'linear-gradient(135deg,#3a2b6b,#7C5CFC)' },
  { id: 2, title: 'HIIT Inferno', tag: 'Cardio', dur: '28 min', lvl: 'Advanced', kcal: 360, grad: 'linear-gradient(135deg,#6b2b3a,#FF5A6E)' },
  { id: 3, title: 'Mobility Flow', tag: 'Recovery', dur: '20 min', lvl: 'Beginner', kcal: 120, grad: 'linear-gradient(135deg,#1f5b5e,#2BD9E0)' },
  { id: 4, title: 'Legs Annihilation', tag: 'Strength', dur: '60 min', lvl: 'Advanced', kcal: 620, grad: 'linear-gradient(135deg,#4a5b1f,#C6F432)' },
]

export const classes = [
  { id: 1, title: 'Sunrise Power Yoga', studio: 'Zen Studio · Banjara', time: '6:30 AM', live: 'Live', grad: 'linear-gradient(135deg,#3a2b6b,#a78bfa)' },
  { id: 2, title: 'Boxing Conditioning', studio: 'Fight Club · Jubilee', time: '7:00 PM', grad: 'linear-gradient(135deg,#6b2b3a,#FF5A6E)' },
  { id: 3, title: 'Indoor Cycling', studio: 'Ryze Cycle · Hitec', time: '6:00 AM', grad: 'linear-gradient(135deg,#1f5b5e,#2BD9E0)' },
  { id: 4, title: 'Dance Fit Friday', studio: 'Studio One · Gachibowli', time: '8:00 PM', grad: 'linear-gradient(135deg,#5b3f1f,#FFB23E)' },
]

export const trainers = [
  { id: 1, name: 'Maya Iyer', spec: 'Strength & Hypertrophy', rating: 4.9, reviews: 214, av: 'https://i.pravatar.cc/200?img=47' },
  { id: 2, name: 'Rahul Verma', spec: 'Calisthenics', rating: 4.8, reviews: 156, av: 'https://i.pravatar.cc/200?img=33' },
  { id: 3, name: 'Dr. Sara Khan', spec: 'Nutrition & Diet', rating: 5.0, reviews: 98, av: 'https://i.pravatar.cc/200?img=45' },
  { id: 4, name: 'Karan Mehta', spec: 'Endurance & Running', rating: 4.7, reviews: 132, av: 'https://i.pravatar.cc/200?img=68' },
]

export const stats = [
  { v: '14', l: 'Day streak', icon: 'flame', color: '#FF5A6E', bg: 'rgba(255,90,110,0.14)' },
  { v: '4,280', l: 'XP earned', icon: 'trophy', color: '#FFB23E', bg: 'rgba(255,178,62,0.14)' },
  { v: '86', l: 'Workouts done', icon: 'dumbbell', color: '#C6F432', bg: 'rgba(198,244,50,0.14)' },
  { v: '23.4k', l: 'Calories burnt', icon: 'fire', color: '#2BD9E0', bg: 'rgba(43,217,224,0.14)' },
]

export const challenges = [
  { title: '30-Day Hydration', desc: 'Drink 3L daily · 4,210 joined', progress: 60, color: '#2BD9E0' },
  { title: '10K Steps Streak', desc: 'Walk 10k for 7 days · 8,901 joined', progress: 42, color: '#C6F432' },
]

export const discoverChips = ['For You', 'Classes', 'Trainers', 'Programs', 'Gyms', 'Events']

export const feed = [
  { t: 'Your AI plan updated', s: 'New push/pull split based on your recovery', icon: 'sparkles', time: '2h' },
  { t: 'Maya sent you a workout', s: '"Try this leg day — let me know how it feels"', icon: 'send', time: '5h' },
  { t: 'Challenge: 10K steps', s: 'You\'re 78% of the way to today\'s goal', icon: 'target', time: '8h' },
]

export const coachSuggestions = [
  "Plan my next workout",
  "Analyze my progress this week",
  "Suggest a recovery session",
  "What should I eat today?",
]

// Member fitness profile — tracks progress, goals & history
export const profile = {
  age: 28,
  height: 178,           // cm
  currentWeight: 76.2,   // kg
  startWeight: 82.0,     // kg
  goalWeight: 72.0,      // kg
  goalType: 'Build muscle · Lose fat',
  goalDeadline: 'Dec 2026',
  bodyFat: 18.4,         // %
  muscleMass: 34.2,      // kg
  bmi: 24.0,
}

export const weightHistory = [
  { date: 'Aug 03', weight: 82.0 },
  { date: 'Aug 10', weight: 81.2 },
  { date: 'Aug 17', weight: 80.4 },
  { date: 'Aug 24', weight: 79.1 },
  { date: 'Aug 31', weight: 77.8 },
  { date: 'Sep 07', weight: 76.9 },
  { date: 'Sep 14', weight: 76.2 },
]

export const measurements = [
  { part: 'Chest', value: 102 },
  { part: 'Waist', value: 86 },
  { part: 'Arms', value: 37 },
  { part: 'Thighs', value: 58 },
]

export const goalProgress = [
  { label: 'Weight goal', current: 76.2, target: 72.0, start: 82.0, unit: 'kg' },
  { label: 'Workouts / week', current: 5, target: 6, unit: '' },
  { label: 'Daily steps', current: 7840, target: 10000, unit: '' },
  { label: 'Body fat', current: 18.4, target: 15, start: 22, unit: '%' },
]

export const activityHistory = [
  { date: 'Sep 14', title: 'Push Day — Strength', dur: '52 min', kcal: 480, type: 'Strength' },
  { date: 'Sep 13', title: 'Evening Run', dur: '35 min', kcal: 320, type: 'Cardio' },
  { date: 'Sep 12', title: 'Mobility Flow', dur: '20 min', kcal: 120, type: 'Recovery' },
  { date: 'Sep 11', title: 'Leg Day', dur: '60 min', kcal: 620, type: 'Strength' },
  { date: 'Sep 10', title: 'HIIT Inferno', dur: '28 min', kcal: 360, type: 'Cardio' },
]

export const coachChat = [
  { from: 'ai', text: "Hey Arjun! 👋 I'm your AI Coach. I've analysed your last 7 days — your strength is up 8% but sleep recovery dipped midweek. Want me to adjust today's session?" },
  { from: 'me', text: "Yeah, make today a bit lighter." },
  { from: 'ai', text: "Done. I've swapped Push Day for a 35-min Upper Body Mobility + Light Strength flow. It targets your tight shoulders and keeps the intensity at RPE 6. I also added a 10-min breathwork cooldown. Ready when you are 💪" },
]
