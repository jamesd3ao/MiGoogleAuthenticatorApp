import { useState } from 'react'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  if (!user) {
    return <Login onLoginSuccess={setUser} />
  }

  return <Home user={user} onLogout={() => setUser(null)} />
}

export default App
