import { useEffect, useState } from 'react'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import './App.css'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  if (!user) {
    return <Login onLoginSuccess={setUser} />
  }

  return <Home user={user} onLogout={() => setUser(null)} theme={theme} onToggleTheme={toggleTheme} />
}

export default App
